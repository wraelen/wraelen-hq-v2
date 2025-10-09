// src/lib/actions/import.ts - Full import with Realtor.com scraping
'use server';

import { LeadSource, LeadType, PropertyType } from '@prisma/client';
import Papa from 'papaparse';
import puppeteer from 'puppeteer';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

type ProgressCallback = (update: { progress: number; message: string }) => void;

// Scrape Realtor.com for listing agent
async function scrapeRealtorAgent(address: string, city: string, state: string, zip: string) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
    
    const searchQuery = `${address} ${city} ${state} ${zip}`;
    const searchUrl = `https://www.realtor.com/realestateandhomes-search/${encodeURIComponent(searchQuery)}`;
    
    await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 15000 });
    
    // Wait for listing card
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 5000 }).catch(() => null);
    
    // Try to click first listing
    const firstListing = await page.$('[data-testid="property-card"] a');
    if (!firstListing) {
      throw new Error('No listing found');
    }
    
    await firstListing.click();
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(() => null);
    
    // Extract agent info
    const agentData = await page.evaluate(() => {
      // Try multiple selectors for agent name
      const nameSelectors = [
        '[data-testid="agent-name"]',
        '.agent-name',
        '[class*="AgentName"]',
        '[data-rf-test-id="agent-name"]',
      ];
      
      let name = '';
      for (const selector of nameSelectors) {
        const el = document.querySelector(selector);
        if (el?.textContent?.trim()) {
          name = el.textContent.trim();
          break;
        }
      }
      
      // Try phone selectors
      const phoneSelectors = [
        '[data-testid="agent-phone"]',
        'a[href^="tel:"]',
        '[class*="AgentPhone"]',
      ];
      
      let phone = '';
      for (const selector of phoneSelectors) {
        const el = document.querySelector(selector);
        if (el) {
          phone = el.textContent?.trim() || el.getAttribute('href')?.replace('tel:', '') || '';
          if (phone) break;
        }
      }
      
      return { name, phone };
    });
    
    await browser.close();
    
    if (!agentData.name) {
      return null;
    }
    
    // Split name into first/last
    const nameParts = agentData.name.split(' ');
    const firstName = nameParts[0] || null;
    const lastName = nameParts.slice(1).join(' ') || null;
    
    return {
      firstName,
      lastName,
      phone: agentData.phone || null,
    };
    
  } catch (error) {
    console.error('Scraping error:', error);
    if (browser) await browser.close();
    return null;
  }
}

export async function importCSVAction(
  formData: FormData,
  onProgress?: ProgressCallback
) {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user.id) {
    return { error: 'Not authenticated' };
  }
  
  const file = formData.get('file') as File;
  if (!file) {
    return { error: 'No file provided' };
  }
  
  try {
    const csvText = await file.text();
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false, // Keep as strings
    });
    
    if (parsed.errors.length > 0) {
      return { error: `CSV parse error: ${parsed.errors[0]?.message}` };
    }
    
    const rows = parsed.data as Record<string, any>[];
    const leadIds: string[] = [];
    const propertyIds: string[] = [];
    const errors: any[] = [];
    let successCount = 0;
    
    onProgress?.({ progress: 15, message: '📜 CSV parsed successfully!' });
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 1;
      
      try {
        // Extract required fields
        const address = row['Address']?.trim();
        const city = row['City']?.trim();
        const state = row['State']?.trim()?.toUpperCase();
        const zip = row['Zip']?.trim();
        const equity = parseFloat(row['Est. Equity']);
        
        // Skip if missing required fields or no equity
        if (!address || !city || !state || !zip || isNaN(equity) || equity <= 0) {
          errors.push({ row: rowNum, error: 'Missing required fields or no equity' });
          continue;
        }
        
        // Property type mapping
        const propertyTypeMap: Record<string, PropertyType> = {
          'single family': 'single_family',
          'multi family': 'multi_family',
          'duplex (2 units, any combination)': 'multi_family',
          'condo': 'condo',
          'townhouse': 'townhouse',
          'land': 'land',
          'commercial': 'commercial',
        };
        
        const rawType = row['Property Type']?.toLowerCase() || '';
        const property_type = propertyTypeMap[rawType] || 'other';
        
        // Create address hash for deduplication
        const address_hash = crypto
          .createHash('sha256')
          .update(`${address}${city}${state}${zip}`.toLowerCase())
          .digest('hex');
        
        // Prepare property data
        const propertyData = {
          address,
          city,
          state,
          zip_code: zip,
          property_type,
          bedrooms: parseInt(row['Bedrooms']) || null,
          bathrooms: parseFloat(row['Total Bathrooms']) || null,
          square_feet: parseInt(row['Building Sqft']) || null,
          year_built: parseInt(row['Effective Year Built']) || null,
          avm: parseFloat(row['Est. Value']) || null,
          equity,
          remaining_balance: parseFloat(row['Est. Remaining balance of Open Loans']) || null,
          loan_to_value: parseFloat(row['Est. Loan-to-Value']) || null,
          open_loans: parseInt(row['Total Open Loans']) || null,
          owner_occupied: row['Owner Occupied']?.toLowerCase() === 'yes',
          notes: row['Marketing Lists'] || null,
          distress_signals: row['Foreclosure Factor'] ? { foreclosure: row['Foreclosure Factor'] } : null,
          metadata: {
            county: row['County'] || null,
            apn: row['APN'] || null,
            total_assessed_value: parseFloat(row['Total Assessed Value']) || null,
          },
        };
        
        // Upsert property
        const property = await prisma.properties.upsert({
          where: { address_hash },
          update: propertyData,
          create: { ...propertyData, address_hash },
        });
        
        if (!propertyIds.includes(property.id)) {
          propertyIds.push(property.id);
        }
        
        // Progress update - scraping phase
        const progressPercent = 15 + ((i / rows.length) * 60); // 15-75%
        onProgress?.({
          progress: Math.round(progressPercent),
          message: `🔍 Discovering agent for ${address}... (${i + 1}/${rows.length})`,
        });
        
        // Scrape Realtor.com for agent (with delay to avoid rate limiting)
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2s delay between requests
        const agentData = await scrapeRealtorAgent(address, city, state, zip);
        
        // Prepare lead data
        const leadData = {
          properties_id: property.id,
          lead_type: 'owner' as LeadType,
          first_name: row['Owner 1 First Name']?.trim() || null,
          last_name: row['Owner 1 Last Name']?.trim() || null,
          phone: null, // Owner phone not in Propstream
          email: null, // Owner email not in Propstream
          status: 'new' as const,
          source: 'propstream_import' as LeadSource,
          assigned_to: session.user.id,
          points_earned: 1,
          realtor_first_name: agentData?.firstName || row['MLS Agent Name']?.split(' ')[0] || null,
          realtor_last_name: agentData?.lastName || row['MLS Agent Name']?.split(' ').slice(1).join(' ') || null,
          realtor_phone: agentData?.phone || row['MLS Agent Phone']?.toString() || null,
          notes: row['Method of Add'] || null,
          metadata: {
            mls_date: row['MLS Date'] || null,
            mls_amount: parseFloat(row['MLS Amount']) || null,
            mls_status: row['MLS Status'] || null,
            date_added: row['Date Added to List'] || null,
            scraped_agent: !!agentData,
          },
        };
        
        // Create lead (allow duplicates if property has multiple leads)
        const lead = await prisma.leads.create({ data: leadData });
        leadIds.push(lead.id);
        successCount++;
        
      } catch (error) {
        console.error(`Error processing row ${rowNum}:`, error);
        errors.push({
          row: rowNum,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    }
    
    onProgress?.({ progress: 80, message: '💎 Calculating XP rewards...' });
    
    // Award points to profile
    await prisma.profile.update({
      where: { user_id: session.user.id },
      data: { points: { increment: successCount } },
    });
    
    // Create import batch for undo
    const batch = await prisma.import_batches.create({
      data: {
        user_id: session.user.id,
        filename: file.name,
        total_rows: rows.length,
        successful_rows: successCount,
        failed_rows: rows.length - successCount,
        points_earned: successCount,
        lead_ids: leadIds,
        property_ids: propertyIds,
        errors: errors.length > 0 ? errors : null,
      },
    });
    
    onProgress?.({ progress: 90, message: '🎯 Checking quest progress...' });
    
    // Check quest milestones
    const totalImports = await prisma.leads.count({
      where: { assigned_to: session.user.id, source: 'propstream_import' },
    });
    
    const milestones = [25, 100, 300, 750, 1500, 5000];
    let questCompleted = null;
    
    for (const milestone of milestones) {
      if (totalImports >= milestone && totalImports - successCount < milestone) {
        // Just crossed this milestone
        questCompleted = `You've imported ${milestone} leads total!`;
        
        // Award milestone badge at 5000
        if (milestone === 5000) {
          const profile = await prisma.profile.findUnique({
            where: { user_id: session.user.id },
          });
          
          if (profile && !profile.badges.includes('Import Master')) {
            await prisma.profile.update({
              where: { user_id: session.user.id },
              data: {
                badges: { push: 'Import Master' },
                points: { increment: 500 }, // Bonus points for badge
              },
            });
            questCompleted = '🏆 Import Master Badge Unlocked! +500 bonus XP';
          }
        }
        break;
      }
    }
    
    onProgress?.({ progress: 100, message: '✨ Quest complete!' });
    
    return {
      success: true,
      batchId: batch.id,
      imported: successCount,
      failed: rows.length - successCount,
      questCompleted,
    };
    
  } catch (error) {
    console.error('Import error:', error);
    return {
      error: error instanceof Error ? error.message : 'Import failed',
    };
  }
}

export async function undoImportAction(batchId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user.id) {
    throw new Error('Not authenticated');
  }
  
  const batch = await prisma.import_batches.findUnique({
    where: { id: batchId },
  });
  
  if (!batch || batch.user_id !== session.user.id) {
    throw new Error('Batch not found or unauthorized');
  }
  
  // Delete in transaction
  await prisma.$transaction(async (tx) => {
    // Delete leads
    if (batch.lead_ids.length > 0) {
      await tx.leads.deleteMany({
        where: { id: { in: batch.lead_ids } },
      });
    }
    
    // Delete properties (only if no other leads reference them)
    for (const propId of batch.property_ids) {
      const leadCount = await tx.leads.count({
        where: { properties_id: propId },
      });
      
      if (leadCount === 0) {
        await tx.properties.delete({
          where: { id: propId },
        }).catch(() => null); // Ignore if already deleted
      }
    }
    
    // Deduct points
    await tx.profile.update({
      where: { user_id: session.user.id },
      data: { points: { decrement: batch.points_earned } },
    });
    
    // Delete batch record
    await tx.import_batches.delete({
      where: { id: batchId },
    });
  });
}

export async function getImportHistory() {
  const supabase = await createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user.id) {
    return [];
  }
  
  const batches = await prisma.import_batches.findMany({
    where: { user_id: session.user.id },
    orderBy: { created_at: 'desc' },
    take: 20,
  });
  
  return batches;
}