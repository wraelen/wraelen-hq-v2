// src/lib/actions.ts - Fixed version without client callbacks
'use server';

import { LeadSource, LeadType, PropertyType } from '@prisma/client';
import { redirect } from 'next/navigation';
import Papa from 'papaparse';
import puppeteer from 'puppeteer';
import Twilio from 'twilio';
import crypto from 'crypto';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// ============= AUTH ACTIONS =============

export async function signInAction(formData: FormData) {
  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';
  
  const supabase = await createSupabaseServerClient();
  
  // FIX: Use getUser() instead of getSession() for security
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  
  if (error) {
    return { error: error.message };
  }
  redirect('/dashboard');
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect('/auth/signin');
}

// ============= IMPORT ACTIONS =============

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
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 5000 }).catch(() => null);
    
    const firstListing = await page.$('[data-testid="property-card"] a');
    if (!firstListing) {
      await browser.close();
      return null;
    }
    
    await firstListing.click();
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(() => null);
    
    const agentData = await page.evaluate(() => {
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
    
    const nameParts = agentData.name.split(' ');
    return {
      firstName: nameParts[0] || null,
      lastName: nameParts.slice(1).join(' ') || null,
      phone: agentData.phone || null,
    };
    
  } catch (error) {
    console.error('Scraping error:', error);
    if (browser) await browser.close();
    return null;
  }
}

// ============= LEAD UPDATE ACTIONS =============

// Email validation helper
async function validateEmail(email: string): Promise<boolean> {
  // Basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('📧 Format check failed for:', email);
    return false;
  }

  try {
    // Extract domain for MX record check
    const domain = email.split('@')[1];
    console.log('📧 Checking domain:', domain);
    
    // Check for common disposable/invalid domains
    const invalidDomains = ['example.com', 'test.com', 'invalid.com', 'fake.com'];
    if (invalidDomains.includes(domain.toLowerCase())) {
      console.log('📧 Domain is in blocked list:', domain);
      return false;
    }
    
    // Use Google's DNS API to check MX records (free, no auth needed)
    console.log('📧 Querying DNS for MX records...');
    const response = await fetch(
      `https://dns.google/resolve?name=${domain}&type=MX`,
      { 
        cache: 'no-store',
        signal: AbortSignal.timeout(5000) // 5 second timeout
      }
    );
    
    if (!response.ok) {
      console.warn(`📧 DNS lookup failed for ${domain}, status: ${response.status}`);
      // If DNS check fails, we'll accept the email rather than rejecting it
      // This prevents blocking valid emails due to API issues
      return true;
    }
    
    const data = await response.json();
    console.log('📧 DNS response:', JSON.stringify(data, null, 2));
    
    // Check if domain has MX records
    const hasMXRecords = data.Answer && data.Answer.length > 0;
    
    if (!hasMXRecords) {
      console.log(`📧 No MX records found for ${domain}`);
      return false;
    }
    
    console.log(`📧 ✅ Domain ${domain} has valid MX records`);
    return true;
  } catch (error) {
    console.error('📧 Email validation error:', error);
    // If validation service fails, accept the email
    // Better to allow potentially invalid emails than block valid ones
    return true;
  }
}

export async function updateLeadEmailAction(leadId: string, email: string) {
  console.log('🔍 Starting email validation for:', email);
  
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return { error: 'Not authenticated' };
  }

  try {
    // Check if lead belongs to user
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
    });

    if (!lead || lead.assigned_to !== user.id) {
      return { error: 'Lead not found or unauthorized' };
    }

    // Validate email format first
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Email failed format check:', email);
      return { error: 'Invalid email format' };
    }
    
    console.log('✅ Email format valid, checking domain...');

    // Validate email domain
    const isValid = await validateEmail(email);

    if (!isValid) {
      console.log('❌ Email failed domain validation:', email);
      return { error: 'Invalid email domain - no mail server found for this domain' };
    }
    
    console.log('✅ Email validation passed! Saving to database...');

    // Update lead with validated email
    await prisma.leads.update({
      where: { id: leadId },
      data: {
        realtor_email: email,
        email_validated: true,
        email_validated_at: new Date(),
      },
    });

    // Award points for validated email
    await prisma.profile.update({
      where: { user_id: user.id },
      data: {
        points: { increment: 20 },
      },
    });
    
    console.log('🎉 Email saved and +20 XP awarded!');

    return {
      success: true,
      message: '🎉 +20 XP! Email validated successfully',
      pointsEarned: 20,
    };
  } catch (error) {
    console.error('❌ Update email error:', error);
    return {
      error: error instanceof Error ? error.message : 'Failed to update email',
    };
  }
}

export async function updateLeadNotesAction(leadId: string, notes: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return { error: 'Not authenticated' };
  }

  try {
    // Check if lead belongs to user
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
    });

    if (!lead || lead.assigned_to !== user.id) {
      return { error: 'Lead not found or unauthorized' };
    }

    // Update notes
    await prisma.leads.update({
      where: { id: leadId },
      data: {
        call_notes: notes,
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Update notes error:', error);
    return {
      error: error instanceof Error ? error.message : 'Failed to update notes',
    };
  }
}

export async function getLeadsForTable() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    console.log('No user found in getLeadsForTable');
    return [];
  }

  try {
    const leads = await prisma.leads.findMany({
      where: {
        assigned_to: user.id,
      },
      include: {
        properties: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    console.log(`Found ${leads.length} leads for user ${user.id}`);

    return leads.map((lead) => ({
      id: lead.id,
      // Agent info
      realtor_first_name: lead.realtor_first_name,
      realtor_last_name: lead.realtor_last_name,
      realtor_phone: lead.realtor_phone,
      realtor_email: lead.realtor_email || null,
      email_validated: lead.email_validated || false,
      
      // Lead info
      call_notes: lead.call_notes || null,
      status: lead.status,
      
      // Property info
      property_address: lead.properties.address,
      property_city: lead.properties.city,
      property_state: lead.properties.state,
      property_zip: lead.properties.zip_code,
      property_type: lead.properties.property_type,
      bedrooms: lead.properties.bedrooms,
      bathrooms: lead.properties.bathrooms,
      square_feet: lead.properties.square_feet,
      listing_price: lead.properties.listing_price ? Number(lead.properties.listing_price) : null,
      equity: lead.properties.equity ? Number(lead.properties.equity) : null,
      remaining_balance: lead.properties.remaining_balance ? Number(lead.properties.remaining_balance) : null,
      open_loans: lead.properties.open_loans,
      property_image_url: lead.properties.property_image_url || null,
      
      // Timestamps
      created_at: lead.created_at,
      updated_at: lead.updated_at,
    }));
  } catch (error) {
    console.error('Get leads error:', error);
    return [];
  }
}




// Helper function to update import job progress
async function updateJobProgress(jobId: string, progress: number, message: string, currentRow?: number) {
  await prisma.import_jobs.update({
    where: { id: jobId },
    data: {
      progress,
      status_message: message,
      current_row: currentRow,
      updated_at: new Date(),
    },
  });
}

export async function importCSVAction(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  
  // FIX: Use getUser() instead of getSession()
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user?.id) {
    return { error: 'Not authenticated' };
  }
  
  const file = formData.get('file') as File;
  if (!file) {
    return { error: 'No file provided' };
  }
  
  try {
    // Create a job record for tracking progress
    const job = await prisma.import_jobs.create({
      data: {
        user_id: user.id,
        filename: file.name,
        status: 'processing',
        progress: 0,
        status_message: 'Starting import...',
      },
    });
    
    const csvText = await file.text();
    const parsed = Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: false,
    });
    
    if (parsed.errors.length > 0) {
      await updateJobProgress(job.id, 0, `CSV parse error: ${parsed.errors[0]?.message}`);
      return { error: `CSV parse error: ${parsed.errors[0]?.message}` };
    }
    
    const rows = parsed.data as Record<string, any>[];
    const leadIds: string[] = [];
    const propertyIds: string[] = [];
    const errors: any[] = [];
    let successCount = 0;
    
    await updateJobProgress(job.id, 10, '📜 CSV parsed successfully!');
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 1;
      
      // Update progress every 5 rows
      if (i % 5 === 0) {
        const progress = 10 + Math.floor((i / rows.length) * 70);
        await updateJobProgress(job.id, progress, `Processing row ${rowNum} of ${rows.length}...`, rowNum);
      }
      
      try {
        const address = row['Address']?.trim();
        const city = row['City']?.trim();
        const state = row['State']?.trim()?.toUpperCase();
        const zip = row['Zip']?.trim();
        const equity = parseFloat(row['Est. Equity']);
        
        if (!address || !city || !state || !zip || isNaN(equity) || equity <= 0) {
          errors.push({ row: rowNum, error: 'Missing required fields or no equity' });
          continue;
        }
        
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
        
        const address_hash = crypto
          .createHash('sha256')
          .update(`${address}${city}${state}${zip}`.toLowerCase())
          .digest('hex');
        
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
        
        const property = await prisma.properties.upsert({
          where: { address_hash },
          update: propertyData,
          create: { ...propertyData, address_hash },
        });
        
        if (!propertyIds.includes(property.id)) {
          propertyIds.push(property.id);
        }
        
        // Scrape with delay (only for first 10 to avoid taking too long)
        let agentData = null;
        if (i < 10) {
          await new Promise(resolve => setTimeout(resolve, 2000));
          agentData = await scrapeRealtorAgent(address, city, state, zip);
        }
        
        const leadData = {
          properties_id: property.id,
          lead_type: 'owner' as LeadType,
          first_name: row['Owner 1 First Name']?.trim() || null,
          last_name: row['Owner 1 Last Name']?.trim() || null,
          phone: null,
          email: null,
          status: 'new' as const,
          source: 'propstream_import' as LeadSource,
          assigned_to: user.id,
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
    
    await updateJobProgress(job.id, 80, '💎 Calculating XP rewards...');
    
    await prisma.profile.update({
      where: { user_id: user.id },
      data: { points: { increment: successCount } },
    });
    
    const batch = await prisma.import_batches.create({
      data: {
        user_id: user.id,
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
    
    await updateJobProgress(job.id, 90, '🎯 Checking quest progress...');
    
    const totalImports = await prisma.leads.count({
      where: { assigned_to: user.id, source: 'propstream_import' },
    });
    
    const milestones = [25, 100, 300, 750, 1500, 5000];
    let questCompleted = null;
    
    for (const milestone of milestones) {
      if (totalImports >= milestone && totalImports - successCount < milestone) {
        questCompleted = `You've imported ${milestone} leads total!`;
        
        if (milestone === 5000) {
          const profile = await prisma.profile.findUnique({
            where: { user_id: user.id },
          });
          
          if (profile && !profile.badges.includes('Import Master')) {
            await prisma.profile.update({
              where: { user_id: user.id },
              data: {
                badges: { push: 'Import Master' },
                points: { increment: 500 },
              },
            });
            questCompleted = '🏆 Import Master Badge Unlocked! +500 bonus XP';
          }
        }
        break;
      }
    }
    
    await updateJobProgress(job.id, 100, '✨ Quest complete!');
    
    // Mark job as complete
    await prisma.import_jobs.update({
      where: { id: job.id },
      data: {
        status: 'completed',
        completed_at: new Date(),
      },
    });
    
    return {
      success: true,
      jobId: job.id,
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

// New action to poll job status
export async function getImportJobStatus(jobId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return { error: 'Not authenticated' };
  }
  
  const job = await prisma.import_jobs.findUnique({
    where: { id: jobId },
  });
  
  if (!job || job.user_id !== user.id) {
    return { error: 'Job not found' };
  }
  
  return {
    status: job.status,
    progress: job.progress,
    message: job.status_message,
    currentRow: job.current_row,
  };
}

export async function undoImportAction(batchId: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    throw new Error('Not authenticated');
  }
  
  const batch = await prisma.import_batches.findUnique({
    where: { id: batchId },
  });
  
  if (!batch || batch.user_id !== user.id) {
    throw new Error('Batch not found or unauthorized');
  }
  
  await prisma.$transaction(async (tx) => {
    if (batch.lead_ids.length > 0) {
      await tx.leads.deleteMany({
        where: { id: { in: batch.lead_ids } },
      });
    }
    
    for (const propId of batch.property_ids) {
      const leadCount = await tx.leads.count({
        where: { properties_id: propId },
      });
      
      if (leadCount === 0) {
        await tx.properties.delete({
          where: { id: propId },
        }).catch(() => null);
      }
    }
    
    await tx.profile.update({
      where: { user_id: user.id },
      data: { points: { decrement: batch.points_earned } },
    });
    
    await tx.import_batches.delete({
      where: { id: batchId },
    });
  });
}

export async function getImportHistory() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return [];
  }
  
  const batches = await prisma.import_batches.findMany({
    where: { user_id: user.id },
    orderBy: { created_at: 'desc' },
    take: 20,
  });
  
  return batches;
}

// ============= DIALER ACTIONS =============

export async function dialLeadAction(leadId: string) {
  try {
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
      include: { properties: true },
    });
    
    if (!lead?.phone) {
      throw new Error('No phone for lead');
    }

    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user?.id || lead.assigned_to !== user.id) {
      throw new Error('Unauthorized');
    }

    const call = await twilioClient.calls.create({
      to: lead.phone,
      from: process.env.TWILIO_PHONE_NUMBER!,
      url: `${process.env.NEXT_PUBLIC_URL}/api/twiml`,
      statusCallback: `${process.env.NEXT_PUBLIC_URL}/api/call-status`,
      statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'],
    });

    await prisma.calls.create({
      data: {
        leads_id: lead.id,
        caller_id: user.id,
        call_sid: call.sid,
        status: 'initiated',
        metadata: { address: lead.properties.address },
      },
    });

    return { success: true, callId: call.sid };
  } catch (error) {
    console.error('Dial error:', error);
    return { success: false, error: (error as Error).message };
  }
}