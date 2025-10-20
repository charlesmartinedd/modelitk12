const { chromium } = require('playwright');
const path = require('path');

async function takeScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  console.log('Taking screenshots of ModelIt K12 website...\n');

  try {
    // Screenshot 1: Home Page
    console.log('1. Navigating to HOME page: http://localhost:3000/');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait a bit for any animations

    const homeScreenshotPath = path.join(__dirname, 'screenshots', 'home-page-desktop.png');
    await page.screenshot({ path: homeScreenshotPath, fullPage: true });
    console.log(`   ✓ Screenshot saved: ${homeScreenshotPath}\n`);

    // Screenshot 2: Coming Soon Page
    console.log('2. Navigating to COMING SOON page: http://localhost:3000/#/coming-soon');
    await page.goto('http://localhost:3000/#/coming-soon', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000); // Wait a bit for any animations

    const comingSoonScreenshotPath = path.join(__dirname, 'screenshots', 'coming-soon-page-desktop.png');
    await page.screenshot({ path: comingSoonScreenshotPath, fullPage: true });
    console.log(`   ✓ Screenshot saved: ${comingSoonScreenshotPath}\n`);

    // Verification: Check navigation order on home page
    console.log('Verifying changes...\n');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

    const navItems = await page.$$eval('nav a, nav button', elements =>
      elements.map(el => el.textContent.trim())
    );
    console.log('Navigation order found:', navItems);

    const expectedOrder = ['Home', 'Learning Hub', 'Teachers Pay Teachers', 'Coming Soon'];
    const navMatches = JSON.stringify(navItems) === JSON.stringify(expectedOrder);
    console.log(`Navigation order correct: ${navMatches ? '✓ YES' : '✗ NO'}`);
    if (!navMatches) {
      console.log(`  Expected: ${expectedOrder.join(', ')}`);
      console.log(`  Found: ${navItems.join(', ')}`);
    }
    console.log('');

    // Verification: Check badge centering on Coming Soon page
    await page.goto('http://localhost:3000/#/coming-soon', { waitUntil: 'networkidle' });
    await page.waitForTimeout(500);

    // Look for the badge element
    const badgeInfo = await page.evaluate(() => {
      const badge = document.querySelector('[class*="badge"]');
      if (!badge) return { found: false };

      const computedStyle = window.getComputedStyle(badge);
      const parent = badge.parentElement;
      const parentStyle = window.getComputedStyle(parent);

      return {
        found: true,
        display: computedStyle.display,
        alignSelf: computedStyle.alignSelf,
        margin: computedStyle.margin,
        parentDisplay: parentStyle.display,
        parentAlignItems: parentStyle.alignItems,
        parentJustifyContent: parentStyle.justifyContent
      };
    });

    if (badgeInfo.found) {
      console.log('Research-Grade Platform badge styling:');
      console.log(`  Display: ${badgeInfo.display}`);
      console.log(`  Align-self: ${badgeInfo.alignSelf}`);
      console.log(`  Margin: ${badgeInfo.margin}`);
      console.log(`  Parent display: ${badgeInfo.parentDisplay}`);
      console.log(`  Parent align-items: ${badgeInfo.parentAlignItems}`);
      console.log(`  Parent justify-content: ${badgeInfo.parentJustifyContent}`);

      const isCentered = badgeInfo.alignSelf === 'center' ||
                        badgeInfo.parentAlignItems === 'center' ||
                        badgeInfo.margin.includes('auto');
      console.log(`  Badge appears vertically centered: ${isCentered ? '✓ YES' : '? MAYBE (check screenshot)'}`);
    } else {
      console.log('Research-Grade Platform badge: Not found on page');
    }

  } catch (error) {
    console.error('Error taking screenshots:', error);
  } finally {
    await browser.close();
  }
}

takeScreenshots();
