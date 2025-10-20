const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

const screenshotDir = path.join(__dirname, 'screenshots');

// Create screenshots directory if it doesn't exist
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

async function testWebsite() {
  const browser = await chromium.launch({ headless: true });
  const results = {
    screenshots: [],
    elements: {
      comingSoonLink: false,
      heroSection: false,
      statusCard: false,
      cellCollectiveCTA: false,
      visionCards: false,
      newsletterCTA: false,
      footer: false,
      cellCollectiveLink: false,
      substackBlogLink: false
    },
    links: [],
    issues: [],
    success: true
  };

  try {
    for (const viewport of viewports) {
      console.log(`\n--- Testing ${viewport.name} (${viewport.width}x${viewport.height}) ---`);

      const context = await browser.newContext({
        viewport: { width: viewport.width, height: viewport.height }
      });
      const page = await context.newPage();

      try {
        // Navigate to the page
        console.log('Navigating to http://localhost:3000...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });

        // Wait a bit for any animations to complete
        await page.waitForTimeout(1000);

        // Take screenshot
        const screenshotPath = path.join(screenshotDir, `modelitk12-${viewport.name}-${viewport.width}x${viewport.height}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        results.screenshots.push(screenshotPath);
        console.log(`Screenshot saved: ${screenshotPath}`);

        // Only check elements on the first viewport to avoid duplication
        if (viewport.name === 'desktop') {
          console.log('\nVerifying page elements...');

          // Check for "Coming Soon" link in navigation
          const comingSoonLink = await page.locator('nav a, header a').filter({ hasText: /coming soon/i }).count();
          results.elements.comingSoonLink = comingSoonLink > 0;
          console.log(`Coming Soon link: ${results.elements.comingSoonLink ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Hero section
          const heroSection = await page.locator('h1, [class*="hero"], [id*="hero"]').count();
          results.elements.heroSection = heroSection > 0;
          console.log(`Hero section: ${results.elements.heroSection ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Status Card
          const statusCard = await page.locator('[class*="status"], [id*="status"]').count();
          results.elements.statusCard = statusCard > 0;
          console.log(`Status Card: ${results.elements.statusCard ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Cell Collective CTA
          const cellCollectiveCTA = await page.locator('text=/cell collective/i').count();
          results.elements.cellCollectiveCTA = cellCollectiveCTA > 0;
          console.log(`Cell Collective CTA: ${results.elements.cellCollectiveCTA ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Vision Cards
          const visionCards = await page.locator('[class*="vision"], [class*="card"]').count();
          results.elements.visionCards = visionCards > 0;
          console.log(`Vision Cards: ${results.elements.visionCards ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Newsletter CTA
          const newsletterCTA = await page.locator('text=/newsletter/i, text=/subscribe/i').count();
          results.elements.newsletterCTA = newsletterCTA > 0;
          console.log(`Newsletter CTA: ${results.elements.newsletterCTA ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Footer
          const footer = await page.locator('footer').count();
          results.elements.footer = footer > 0;
          console.log(`Footer: ${results.elements.footer ? 'FOUND' : 'NOT FOUND'}`);

          // Check for Cell Collective link
          console.log('\nVerifying links...');
          const cellCollectiveLinks = await page.locator('a[href*="cellcollective"]').all();
          results.elements.cellCollectiveLink = cellCollectiveLinks.length > 0;
          console.log(`Cell Collective link: ${results.elements.cellCollectiveLink ? 'FOUND' : 'NOT FOUND'}`);
          if (cellCollectiveLinks.length > 0) {
            for (const link of cellCollectiveLinks) {
              const href = await link.getAttribute('href');
              results.links.push({ text: 'Cell Collective', href });
              console.log(`  - ${href}`);
            }
          }

          // Check for Substack blog link
          const substackLinks = await page.locator('a[href*="substack"]').all();
          results.elements.substackBlogLink = substackLinks.length > 0;
          console.log(`Substack blog link: ${results.elements.substackBlogLink ? 'FOUND' : 'NOT FOUND'}`);
          if (substackLinks.length > 0) {
            for (const link of substackLinks) {
              const href = await link.getAttribute('href');
              const text = await link.textContent();
              results.links.push({ text: text.trim(), href });
              console.log(`  - ${text.trim()}: ${href}`);
            }
          }

          // Get all links for verification
          const allLinks = await page.locator('a[href]').all();
          console.log(`\nTotal links found: ${allLinks.length}`);
        }

        console.log(`${viewport.name} viewport test completed successfully.`);

      } catch (error) {
        console.error(`Error testing ${viewport.name} viewport:`, error.message);
        results.issues.push(`${viewport.name}: ${error.message}`);
        results.success = false;
      }

      await context.close();
    }

  } catch (error) {
    console.error('Fatal error:', error);
    results.success = false;
    results.issues.push(`Fatal: ${error.message}`);
  } finally {
    await browser.close();
  }

  // Generate report
  console.log('\n\n========================================');
  console.log('WEBSITE TEST REPORT');
  console.log('========================================\n');

  console.log('SCREENSHOTS CAPTURED:');
  results.screenshots.forEach(path => console.log(`  - ${path}`));

  console.log('\n\nELEMENT VERIFICATION:');
  Object.entries(results.elements).forEach(([key, found]) => {
    const status = found ? 'PASS' : 'FAIL';
    const icon = found ? '✓' : '✗';
    console.log(`  ${icon} ${key}: ${status}`);
  });

  console.log('\n\nLINKS FOUND:');
  if (results.links.length > 0) {
    results.links.forEach(link => {
      console.log(`  - ${link.text}: ${link.href}`);
    });
  } else {
    console.log('  No specific links captured (check screenshots)');
  }

  if (results.issues.length > 0) {
    console.log('\n\nISSUES DETECTED:');
    results.issues.forEach(issue => console.log(`  - ${issue}`));
  } else {
    console.log('\n\nNo issues detected!');
  }

  console.log('\n\nOVERALL STATUS:', results.success ? 'SUCCESS' : 'FAILED');
  console.log('========================================\n');

  // Save report to JSON file
  const reportPath = path.join(screenshotDir, 'test-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`Detailed report saved: ${reportPath}`);

  return results;
}

// Run the test
testWebsite().catch(console.error);
