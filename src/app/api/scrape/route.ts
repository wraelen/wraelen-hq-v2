// ... imports unchanged (add if needed: import { authOptions } from '../auth/[...nextauth]/route'; for Auth.js)

export async function POST(request: NextRequest) {
  // ... auth check unchanged

  // ... body parse, Puppeteer launch, page.goto unchanged

  const data = await page.evaluate(() => {
    // Improved selectors (Zillow-specific, tested on samples—adjust if UI changes)
    const getText = (sel) => document.querySelector(sel)?.textContent?.trim() || '';
    const address = getText('span[data-testid="bed-bath-beyond-header"] > address');
    const price = getText('span[data-testid="price"]');
    const beds = getText('span[data-testid="bed-bath-item"] > span:first-child');
    const baths = getText('span[data-testid="bed-bath-item"]:nth-child(2) > span:first-child');
    const sqFt = getText('span[data-testid="bed-bath-item"]:nth-child(3) > span:first-child');
    const type = getText('span[data-testid="home-type"]') || 'Single Family';
    const daysOnMarket = getText('span[data-testid="days-on-zillow"]');
    const realtorName = getText('span[data-testid="attribution-AGENT-name"]');
    const realtorPhone = getText('a[data-testid="contact-phone"]');
    const photo = document.querySelector('img[data-testid="hero-media-image"]')?.src || '';
    const url = window.location.href;

    const priceNum = parseInt(price.replace(/[^0-9]/g, '')) || 0;
    const daysNum = parseInt(daysOnMarket) || 30;
    const score = (priceNum > 1000000 ? 80 : priceNum > 500000 ? 50 : 20) - daysNum; // Penalty for stale leads

    return { address, price, beds, baths, sqFt, type, daysOnMarket, realtorName, realtorPhone, photo, url, score };
  });

  // ... browser.close, dupe check unchanged

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

  // ... point increment, unlock check unchanged (use data.score)
}
