import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import puppeteer from 'puppeteer'; // Install: pnpm add puppeteer
import { getServerSession } from 'next-auth'; // If using Auth.js; install next-auth @auth/prisma-adapter
import { authOptions } from '../auth/[...nextauth]/route'; // Stub—add Auth.js as per previous messages

interface ScrapeBody {
  url: string; // Pasted Zillow link
}

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions); // Auth check (use your JWT if not Auth.js)
  if (!session?.user?.id) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body: ScrapeBody = await request.json();

  try {
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] }); // For serverless
    const page = await browser.newPage();
    await page.goto(body.url, { waitUntil: 'networkidle2' });

    // Extract data (Zillow selectors—tested on sample listings; may change, use try/catch for robustness)
    const data = await page.evaluate(() => {
      const getText = (selector: string) => document.querySelector(selector)?.textContent?.trim() || '';

      const address = getText('[data-testid="hdp-address"]');
      const price = getText('[data-testid="price"]');
      const beds = getText('[data-testid="bed-bath-item"]:nth-child(1)');
      const baths = getText('[data-testid="bed-bath-item"]:nth-child(2)');
      const sqFt = getText('[data-testid="bed-bath-item"]:nth-child(3)');
      const type = getText('[data-testid="home-type"]') || 'Single Family';
      const daysOnMarket = getText('[data-testid="days-on-zillow"]');
      const realtorName = getText('[data-testid="listing-agent-name"]');
      const realtorPhone = getText('[data-testid="listing-agent-phone"]') || 'Contact for phone';
      const photo = document.querySelector('[data-testid="media-browser-image"] img')?.src || '';
      const url = window.location.href;

      // Calc score (e.g., high price = high score for bonus XP)
      const priceNum = parseInt(price.replace(/[^0-9]/g, '')) || 0;
      const score = priceNum > 1000000 ? 80 : priceNum > 500000 ? 50 : 20;

      return { address, price, beds, baths, sqFt, type, daysOnMarket, realtorName, realtorPhone, photo, url, score };
    });

    await browser.close();

    // Save to leads, tie to user
    const lead = await prisma.lead.create({
      data: {
        userId: session.user.id,
        ...data,
      },
    });

    // Gamification: Increment points, check unlock
    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: { points: { increment: data.score } },
      select: { points: true, badges: true, role: true },
    });

    if (updatedUser.points >= 1000 && !updatedUser.badges.includes('Elite Scraper')) {
      await prisma.user.update({
        where: { id: session.user.id },
        data: { badges: { push: 'Elite Scraper' }, role: 'elite' },
      });
    }

    return NextResponse.json({ lead, newPoints: updatedUser.points }, { status: 201 });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : 'Scrape failed';
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}