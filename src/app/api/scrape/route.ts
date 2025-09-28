import { NextRequest, NextResponse } from 'next/server'; // Added: Import NextRequest (fixes TS2304 'Cannot find name 'NextRequest'')
import { getServerSession } from 'next-auth';
import puppeteer from 'puppeteer'; // Kept existing
import prisma from '@/lib/prisma'; // Added: Import prisma client (fixes TS18048 'prisma undefined' and 'quest' not on PrismaClient once model added)

interface ScrapeBody {
  url: string; // Pasted Zillow link
}

export async function POST(_request: NextRequest) { // Updated: Renamed 'request' to '_request' (fixes ESLint no-unused-vars; ^_ prefix allows unused per your config)
  const session = await getServerSession(authOptions); // Kept existing; fixes TS2304 'session not found' with import
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body: ScrapeBody = await _request.json();

  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage(); // Kept existing; 'page' is defined here (fixes TS2304 'page not found')
    await page.goto(body.url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const getText = (sel: string) => document.querySelector(sel)?.textContent?.trim() || ''; // Updated: Typed sel as string (fixes TS7006 'sel any type')
      const address = getText('span[data-testid="bed-bath-beyond-header"] > address');
      const price = getText('span[data-testid="price"]');
      const beds = getText('span[data-testid="bed-bath-item"] > span:first-child');
      const baths = getText('span[data-testid="bed-bath-item"]:nth-child(2) > span:first-child');
      const sqFt = getText('span[data-testid="bed-bath-item"]:nth-child(3) > span:first-child');
      const type = getText('span[data-testid="home-type"]') || 'Single Family';
      const daysOnMarket = getText('span[data-testid="days-on-zillow"]');
      const realtorName = getText('span[data-testid="attribution-AGENT-name"]');
      const realtorPhone = getText('a[data-testid="contact-phone"]') || 'Contact for phone';
      const photoElement = document.querySelector('img[data-testid="hero-media-image"]') as HTMLImageElement | null; // Updated: Typecast as HTMLImageElement (fixes TS2339 'src not on Element'—querySelector returns Element, but img has src)
      const photo = photoElement?.src || '';

      const priceNum = parseInt(price.replace(/[^0-9]/g, '')) || 0;
      const daysNum = parseInt(daysOnMarket) || 30;
      const score = (priceNum > 1000000 ? 80 : priceNum > 500000 ? 50 : 20) - daysNum; // Penalty for stale leads

      return { address, price, beds, baths, sqFt, type, daysOnMarket, realtorName, realtorPhone, photo, url: window.location.href, score };
    });

    await browser.close();

    // Save to leads (check dupe via url)
    const existing = await prisma.lead.findFirst({ where: { url: body.url, userId: session.user.id } });
    if (existing) return NextResponse.json({ error: 'Lead already scraped' }, { status: 400 });

    const lead = await prisma.lead.create({
      data: {
        userId: session.user.id,
        ...data,
      },
    });

    // Create quest entry (ties scrape to gamification)
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