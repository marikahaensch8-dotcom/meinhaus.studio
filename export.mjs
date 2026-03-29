import puppeteer from 'puppeteer';
import { mkdirSync } from 'fs';

const BASE = 'http://localhost:8000';
const OUTPUT_DIR = './exports';

const pages = [
    { name: 'home-de', url: '/' },
    { name: 'home-en', url: '/en.html' },
    { name: 'brand-check-en', url: '/brand-check.html' },
    { name: 'brand-check-de', url: '/personal-brand-aufbauen.html' },
    { name: 'branding-de', url: '/branding-fuer-coaches.html' },
    { name: 'branding-en', url: '/branding-for-coaches.html' },
    { name: 'webdesign-de', url: '/webdesign-fuer-coaches.html' },
    { name: 'webdesign-en', url: '/webdesign-for-coaches.html' },
];

async function exportPage({ name, url }) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(BASE + url, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 3000));

    // Make all reveal elements visible
    await page.evaluate(() => {
        document.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('visible');
        });
    });
    await new Promise((r) => setTimeout(r, 500));

    // PNG
    await page.screenshot({
        path: `${OUTPUT_DIR}/${name}.png`,
        fullPage: true,
        type: 'png',
    });
    console.log(`  ✓ ${name}.png`);

    // PDF
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    await page.pdf({
        path: `${OUTPUT_DIR}/${name}.pdf`,
        width: '1440px',
        height: `${bodyHeight}px`,
        printBackground: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`  ✓ ${name}.pdf`);

    await browser.close();
}

mkdirSync(OUTPUT_DIR, { recursive: true });

for (const p of pages) {
    console.log(`Exporting ${p.name}...`);
    await exportPage(p);
}

console.log('\nDone! Files are in ./exports/');
