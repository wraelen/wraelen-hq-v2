import { NextRequest, NextResponse } from 'next/server'; // Kept existing
import { getServerSession } from 'next-auth'; // Added: For session check (fixes TS2345 params incompatible with authOptions import)
import puppeteer from 'puppeteer'; // Kept existing
import prisma from '@/lib/prisma'; // Kept existing
import { authOptions } from '../auth/[...nextauth]/route'; // Added: Import authOptions (fixes missing for getServerSession)

interface ScrapeBody {
  url: string; // Pasted Zillow link
}

export async function POST(_request: NextRequest) { // Kept existing
  const session = await getServerSession(authOptions); // Updated: Use imported authOptions (fixes TS2345 incompatible params)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 }); // Updated: Optional chaining for session.user?.id (fixes TS2339 'id' not on session.user')

  const body: ScrapeBody = await _request.json();

  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage(); // Kept existing
    await page.goto(body.url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const getText = (sel: string) => document.querySelector(sel)?.textContent?.trim() || ''; // Kept existing
      const address = getText('span[data-testid="bed-bath-beyond-header"] > address');
      const price = getText('span[data-testid="price"]');
      const beds = getText('span[data-testid="bed-bath-item"] > span:first-child');
      const baths = getText('span[data-testid="bed-bath-item"]:nth-child(2) > span:first-child');
      const sqFt = getText('span[data-testid="bed-bath-item"]:nth-child(3) > span:first-child');
      const type = getText('span[data-testid="home-type"]') || 'Single Family';
      const daysOnMarket = getText('span[data-testid="days-on-zillow"]');
      const realtorName = getText('span[data-testid="attribution-AGENT-name"]');
      const realtorPhone = getText('a[data-testid="contact-phone"]') || 'Contact for phone';
      const photoElement = document.querySelector('img[data-testid="hero-media-image"]') as HTMLImageElement | null; // Kept existing
      const photo = photoElement?.src || '';

      const priceNum = parseInt(price.replace(/[^0-9]/g, '')) || 0;
      const daysNum = parseInt(daysOnMarket) || 30;
      const score = (priceNum > 1000000 ? 80 : priceNum > 500000 ? 50 : 20) - daysNum; // Penalty for stale leads

      return { address, price, beds, baths, sqFt, type, daysOnMarket, realtorName, realtorPhone, photo, url: window.location.href, score };
    });

    await browser.close();

    // Save to leads (check dupe via url)
    const existing = await prisma.lead.findFirst({ where: { url: body.url, userId: session.user.id } }); // Kept existing
    if (existing) return NextResponse.json({ error: 'Lead already scraped' }, { status: 400 });

    const lead = await prisma.lead.create({
      data: {
        userId: session.user.id,
        ...data,
      },
    });

    // Create quest entry (ties scrape to gamification) - fixes TS2339 'quest' not on PrismaClient (Quest model added to schema)
    await prisma.quest.create({
      data: {
        type: "SCRAPE_ZILLOW",
        userId: session.user.id,
        leadId: lead.id,
        pointsAwarded: data.score,
      },
    });

    // Gamification: Increment points, check unlock
    const updated = await prisma.user.update({
      where: { id: session.user.id },
      data: { points: { increment: data.score } },
      select: { points: true, badges: true },
    });

    if (updated.points >= 1000 && !updated.badges.includes('Elite Scraper')) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { badges: { push: 'Elite Scraper' }, role: 'ELITE' }, // Updated: Uppercase 'ELITE' to match enum (fixes TS2820)
      });
    }

    return NextResponse.json({ lead, newPoints: updated.points });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Scrape failed' }, { status: 500 });
  }
}