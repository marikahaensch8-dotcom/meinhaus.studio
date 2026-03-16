import puppeteer from 'puppeteer';

const URL = 'http://localhost:8000';
const OUTPUT_DIR = './exports';

async function exportPage(lang) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Set wide viewport for full desktop view
    await page.setViewport({ width: 1440, height: 900 });

    await page.goto(URL, { waitUntil: 'networkidle0' });

    // Wait for animations to finish
    await new Promise((r) => setTimeout(r, 3000));

    // Set language
    await page.evaluate((lang) => {
        localStorage.setItem('meinhaus-lang', lang);
    }, lang);

    // Reload to apply language cleanly
    await page.goto(URL, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 2000));

    // Make all reveal elements visible for the export
    await page.evaluate(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
        });
    });

    await new Promise((r) => setTimeout(r, 500));

    // PNG — full page screenshot
    await page.screenshot({
        path: `${OUTPUT_DIR}/meinhaus-${lang}.png`,
        fullPage: true,
        type: 'png',
    });
    console.log(`✓ meinhaus-${lang}.png`);

    // PDF — full page
    // Need to get actual page height for proper PDF
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);

    await page.pdf({
        path: `${OUTPUT_DIR}/meinhaus-${lang}.pdf`,
        width: '1440px',
        height: `${bodyHeight}px`,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`✓ meinhaus-${lang}.pdf`);

    await browser.close();
}

// Create output dir
import { mkdirSync } from 'fs';
mkdirSync(OUTPUT_DIR, { recursive: true });

console.log('Exporting English version...');
await exportPage('en');
console.log('Exporting German version...');
await exportPage('de');
console.log('\nDone! Files are in ./exports/');
