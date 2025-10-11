// src/lib/actions.ts - Complete version with APN support
'use server';

import { LeadSource, LeadType, PropertyType } from '@prisma/client';
import { redirect } from 'next/navigation';
import Papa from 'papaparse';
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

// ============= REALTOR API INTEGRATION =============

interface ScrapedPropertyData {
  agent: {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
  } | null;
  listing: {
    price: number | null;
    daysOnMarket: number | null;
    imageUrl: string | null;
    propertyTax: number | null;
    hoaFee: number | null;
    estimatedRent: number | null;
    mlsStatus: string | null;
  };
}

// Helper function to extract data from property object
function extractPropertyData(property: any, address: string): ScrapedPropertyData {
  const listingPrice = property.list_price || 
                      property.price || 
                      property.description?.sold_price ||
                      null;
  
  const daysOnMarket = property.list_date ? 
                      Math.floor((Date.now() - new Date(property.list_date).getTime()) / (1000 * 60 * 60 * 24)) :
                      property.days_on_market || 
                      null;
  
  const imageUrl = property.primary_photo?.href || 
                   property.photos?.[0]?.href ||
                   property.thumbnail || 
                   null;
  
  const propertyTax = property.tax_history?.[0]?.tax || 
                      property.description?.taxes ||
                      null;
  
  const hoaFee = property.hoa_fee || 
                 property.community?.hoa_fee ||
                 null;
  
  const estimatedRent = property.estimate?.rent || 
                       property.rental_estimate ||
                       null;

  const mlsStatus = property.status || 
                    property.mls_status ||
                    property.listing_status ||
                    null;

  const advertisers = property.advertisers || [];
  const primaryAgent = advertisers[0];
  
  let agentFirstName = null;
  let agentLastName = null;
  let agentPhone = null;

  if (primaryAgent) {
    const fullName = primaryAgent.name || '';
    const nameParts = fullName.split(' ');
    agentFirstName = nameParts[0] || null;
    agentLastName = nameParts.slice(1).join(' ') || null;
    
    agentPhone = primaryAgent.phone?.number || 
                 primaryAgent.phone ||
                 primaryAgent.phones?.[0]?.number || 
                 null;
  }

  console.log(`✅ Property data extracted for ${address}:`, {
    price: listingPrice,
    daysOnMarket,
    agent: primaryAgent?.name,
    mlsStatus,
  });

  return {
    agent: primaryAgent ? {
      firstName: agentFirstName,
      lastName: agentLastName,
      phone: agentPhone,
    } : null,
    listing: {
      price: listingPrice,
      daysOnMarket: daysOnMarket,
      imageUrl: imageUrl,
      propertyTax: propertyTax,
      hoaFee: hoaFee,
      estimatedRent: estimatedRent,
      mlsStatus: mlsStatus,
    },
  };
}

async function getRealtorDataViaAPI(
  address: string, 
  city: string, 
  state: string, 
  zip: string, 
  apn?: string,
  mlsStatus?: string
): Promise<ScrapedPropertyData> {
  try {
    console.log(`🔍 Fetching data for: ${address}, ${city}, ${state} ${zip}`);
    if (apn) console.log(`   📍 APN: ${apn}`);
    if (mlsStatus) console.log(`   🏷️  MLS Status: ${mlsStatus}`);
    
    const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
    if (!RAPIDAPI_KEY) {
      console.warn('⚠️ RAPIDAPI_KEY not set, skipping Realtor.com data');
      return {
        agent: null,
        listing: {
          price: null,
          daysOnMarket: null,
          imageUrl: null,
          propertyTax: null,
          hoaFee: null,
          estimatedRent: null,
          mlsStatus: mlsStatus || null,
        },
      };
    }

    // IMPORTANT: If MLS Status exists in CSV, the property is likely already listed
    // We can skip the API call and just use CSV data
    if (mlsStatus && mlsStatus.toLowerCase() !== 'active') {
      console.log(`ℹ️  Property has MLS status "${mlsStatus}" - skipping API lookup`);
      return {
        agent: null,
        listing: {
          price: null,
          daysOnMarket: null,
          imageUrl: null,
          propertyTax: null,
          hoaFee: null,
          estimatedRent: null,
          mlsStatus: mlsStatus,
        },
      };
    }

    // Try address-based search
    console.log('🔍 Searching by city and state...');
    const searchResponse = await fetch(
      `https://realtor-com4.p.rapidapi.com/v2/get-properties?city=${encodeURIComponent(city)}&state_code=${state}&limit=20&status=for_sale`,
      {
        headers: {
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'realtor-com4.p.rapidapi.com',
        },
      }
    );

    if (!searchResponse.ok) {
      console.warn(`⚠️ Realtor API failed (${searchResponse.status})`);
      return {
        agent: null,
        listing: {
          price: null,
          daysOnMarket: null,
          imageUrl: null,
          propertyTax: null,
          hoaFee: null,
          estimatedRent: null,
          mlsStatus: mlsStatus || null,
        },
      };
    }

    const searchData = await searchResponse.json();
    const properties = searchData?.data?.results || searchData?.results || [];
    
    if (!Array.isArray(properties) || properties.length === 0) {
      console.log(`❌ No properties found in ${city}, ${state}`);
      return {
        agent: null,
        listing: {
          price: null,
          daysOnMarket: null,
          imageUrl: null,
          propertyTax: null,
          hoaFee: null,
          estimatedRent: null,
          mlsStatus: mlsStatus || null,
        },
      };
    }

    // Try to find exact address match
    const normalizeAddress = (addr: string) => 
      addr.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    
    const targetAddress = normalizeAddress(address);
    
    const property = properties.find((p: any) => {
      const propAddress = normalizeAddress(p.location?.address?.line || p.address || '');
      // Match if addresses contain each other (handles street abbreviations)
      return propAddress.includes(targetAddress.split(' ')[0]) && 
             (propAddress.includes(targetAddress.split(' ')[1] || '') || 
              targetAddress.includes(propAddress.split(' ')[1] || ''));
    });

    if (!property) {
      console.log(`⚠️ No exact match for "${address}" - property may not be listed`);
      return {
        agent: null,
        listing: {
          price: null,
          daysOnMarket: null,
          imageUrl: null,
          propertyTax: null,
          hoaFee: null,
          estimatedRent: null,
          mlsStatus: mlsStatus || null,
        },
      };
    }

    return extractPropertyData(property, address);

  } catch (error) {
    console.error(`❌ API error for ${address}:`, error);
    return {
      agent: null,
      listing: {
        price: null,
        daysOnMarket: null,
        imageUrl: null,
        propertyTax: null,
        hoaFee: null,
        estimatedRent: null,
        mlsStatus: mlsStatus || null,
      },
    };
  }
}

function estimateInsurance(propertyValue: number | null): number | null {
  if (!propertyValue) return null;
  return Math.round(propertyValue * 0.005);
}

function estimateRent(propertyValue: number | null, scrapedRent: number | null): number | null {
  if (scrapedRent) return scrapedRent;
  if (!propertyValue) return null;
  return Math.round(propertyValue * 0.01);
}

// ============= LEAD UPDATE ACTIONS =============

async function validateEmail(email: string): Promise<boolean> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return false;
  }

  try {
    const domain = email.split('@')[1];
    if (!domain) return false;
    
    const invalidDomains = ['example.com', 'test.com', 'invalid.com', 'fake.com'];
    if (invalidDomains.includes(domain.toLowerCase())) {
      return false;
    }
    
    const response = await fetch(
      `https://dns.google/resolve?name=${domain}&type=MX`,
      { 
        cache: 'no-store',
        signal: AbortSignal.timeout(5000)
      }
    );
    
    if (!response.ok) {
      return true;
    }
    
    const data = await response.json();
    const hasMXRecords = data.Answer && data.Answer.length > 0;
    
    return hasMXRecords || true;
  } catch (error) {
    return true;
  }
}

export async function updateLeadEmailAction(leadId: string, email: string) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return { error: 'Not authenticated' };
  }

  try {
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
    });

    if (!lead || lead.assigned_to !== user.id) {
      return { error: 'Lead not found or unauthorized' };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { error: 'Invalid email format' };
    }

    const isValid = await validateEmail(email);

    if (!isValid) {
      return { error: 'Invalid email domain - no mail server found for this domain' };
    }

    await prisma.leads.update({
      where: { id: leadId },
      data: {
        realtor_email: email,
        email_validated: true,
        email_validated_at: new Date(),
      },
    });

    await prisma.profile.update({
      where: { user_id: user.id },
      data: {
        points: { increment: 20 },
      },
    });

    return {
      success: true,
      message: '🎉 +20 XP! Email validated successfully',
      pointsEarned: 20,
    };
  } catch (error) {
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
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
    });

    if (!lead || lead.assigned_to !== user.id) {
      return { error: 'Lead not found or unauthorized' };
    }

    await prisma.leads.update({
      where: { id: leadId },
      data: {
        call_notes: notes,
      },
    });

    return { success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to update notes',
    };
  }
}

export async function updateLeadAgentAction(
  leadId: string, 
  firstName: string, 
  lastName: string, 
  phone: string
) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
    return { error: 'Not authenticated' };
  }

  try {
    const lead = await prisma.leads.findUnique({
      where: { id: leadId },
    });

    if (!lead || lead.assigned_to !== user.id) {
      return { error: 'Lead not found or unauthorized' };
    }

    await prisma.leads.update({
      where: { id: leadId },
      data: {
        realtor_first_name: firstName,
        realtor_last_name: lastName,
        realtor_phone: phone,
      },
    });

    return { success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Failed to update agent info',
    };
  }
}

export async function updateLeadListingPriceAction(leadId: string, price: number) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {}
          },
        },
      }
    );

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return { error: 'Not authenticated' };
    }

    // Update the lead's listing price
    const { error: updateError } = await supabase
      .from('leads')
      .update({ listing_price: price })
      .eq('id', leadId)
      .eq('user_id', user.id);

    if (updateError) {
      console.error('Error updating listing price:', updateError);
      return { error: 'Failed to update listing price' };
    }

    return { success: true, message: 'Listing price updated successfully' };
  } catch (error) {
    console.error('Error in updateLeadListingPriceAction:', error);
    return { error: 'An unexpected error occurred' };
  }
}
export async function getLeadsForTable() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user?.id) {
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

    return leads.map((lead) => ({
      id: lead.id,
      realtor_first_name: lead.realtor_first_name,
      realtor_last_name: lead.realtor_last_name,
      realtor_phone: lead.realtor_phone,
      realtor_email: lead.realtor_email || null,
      email_validated: lead.email_validated || false,
      
      call_notes: lead.call_notes || null,
      status: lead.status,
      
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
      days_on_market: lead.metadata && typeof lead.metadata === 'object' && 'days_on_market' in lead.metadata 
        ? (lead.metadata as Record<string, unknown>).days_on_market as number | null
        : null,
      
      created_at: lead.created_at,
      updated_at: lead.updated_at,
    }));
  } catch (error) {
    console.error('Get leads error:', error);
    return [];
  }
}

// ============= IMPORT ACTIONS =============

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
  
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user?.id) {
    return { error: 'Not authenticated' };
  }
  
  const file = formData.get('file') as File;
  if (!file) {
    return { error: 'No file provided' };
  }
  
  try {
    const job = await prisma.import_jobs.create({
      data: {
        user_id: user.id,
        filename: file.name,
        status: 'processing',
        progress: 0,
        status_message: '⚔️ Preparing import quest...',
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
    
    const rows = parsed.data as Record<string, string>[];
    const leadIds: string[] = [];
    const propertyIds: string[] = [];
    const errors: Array<{ row: number; error: string }> = [];
    let successCount = 0;
    
    await updateJobProgress(job.id, 10, '📜 CSV parsed successfully!');
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (!row) continue;
      
      const rowNum = i + 1;
      
      const progress = 10 + Math.floor((i / rows.length) * 70);
      const message = `🔍 Processing ${row['Address']?.trim() || 'property'}... (${rowNum}/${rows.length})`;
      await updateJobProgress(job.id, progress, message, rowNum);
      
      try {
        const address = row['Address']?.trim();
        const city = row['City']?.trim();
        const state = row['State']?.trim()?.toUpperCase();
        const zip = row['Zip']?.trim();
        const apn = row['APN']?.trim(); // Get APN from CSV
        const mlsStatus = row['MLS Status']?.trim(); // Get MLS Status from CSV
        const equity = parseFloat(row['Est. Equity'] || '0');
        
        if (!address || !city || !state || !zip || isNaN(equity) || equity <= 0) {
          errors.push({ row: rowNum, error: 'Missing required fields or no equity' });
          continue;
        }
        
        const propertyTypeMap: Record<string, PropertyType> = {
          'single family': 'single_family',
          'multi family': 'multi_family',
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
        
        // Fetch data via API (pass APN and MLS Status)
        await new Promise(resolve => setTimeout(resolve, 500)); // 500ms delay
        const scrapedData = await getRealtorDataViaAPI(address, city, state, zip, apn, mlsStatus);
        
        const estValue = parseFloat(row['Est. Value'] || '0') || null;
        const estimatedInsurance = estimateInsurance(estValue);
        const estimatedRent = estimateRent(estValue, scrapedData.listing.estimatedRent);
        
        const propertyData = {
          address,
          city,
          state,
          zip_code: zip,
          property_type,
          bedrooms: parseInt(row['Bedrooms'] || '0') || null,
          bathrooms: parseFloat(row['Total Bathrooms'] || '0') || null,
          square_feet: parseFloat(row['Building Sqft'] || '0') || null,
          avm: estValue,
          equity,
          listing_price: scrapedData.listing.price,
          property_image_url: scrapedData.listing.imageUrl,
          remaining_balance: parseFloat(row['Est. Remaining balance of Open Loans'] || '0') || null,
          open_loans: parseFloat(row['Total Open Loans'] || '0') || null,
          owner_occupied: row['Owner Occupied']?.toLowerCase() === 'yes',
          notes: row['Method of Add'] || null,
          distress_signals: row['Foreclosure Factor'] ? { foreclosure: row['Foreclosure Factor'] } : undefined,
          metadata: {
            apn: apn || null,
            lien_amount: parseFloat(row['Lien Amount'] || '0') || null,
            date_added: row['Date Added to List'] || null,
            days_on_market: scrapedData.listing.daysOnMarket,
            property_tax: scrapedData.listing.propertyTax,
            hoa_fee: scrapedData.listing.hoaFee,
            estimated_insurance: estimatedInsurance,
            estimated_rent: estimatedRent,
            mls_status: scrapedData.listing.mlsStatus || mlsStatus || null,
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
          realtor_first_name: scrapedData.agent?.firstName || null,
          realtor_last_name: scrapedData.agent?.lastName || null,
          realtor_phone: scrapedData.agent?.phone || null,
          notes: row['Method of Add'] || null,
          metadata: {
            days_on_market: scrapedData.listing.daysOnMarket,
            listing_price: scrapedData.listing.price,
            mls_status: scrapedData.listing.mlsStatus || mlsStatus || null,
            scraped_agent: !!scrapedData.agent,
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
        errors: errors.length > 0 ? errors : undefined,
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
    
    if (!lead?.realtor_phone) {
      throw new Error('No phone number for this lead');
    }

    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user?.id || lead.assigned_to !== user.id) {
      throw new Error('Unauthorized');
    }

    const call = await twilioClient.calls.create({
      to: lead.realtor_phone,
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