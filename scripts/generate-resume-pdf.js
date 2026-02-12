#!/usr/bin/env node
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HTML_PATH = path.resolve(__dirname, '../client/public/resume/resume.html');
const OUTPUT_CLIENT = path.resolve(__dirname, '../client/public/Andre_Silva_Resume_2026_Final.pdf');
const OUTPUT_DIST = path.resolve(__dirname, '../dist/public/Andre_Silva_Resume_2026_Final.pdf');

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto(`file://${HTML_PATH}`, { waitUntil: 'networkidle0' });

const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: false,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

fs.writeFileSync(OUTPUT_CLIENT, pdf);
console.log(`PDF -> ${OUTPUT_CLIENT}`);

if (fs.existsSync(path.dirname(OUTPUT_DIST))) {
  fs.writeFileSync(OUTPUT_DIST, pdf);
  console.log(`PDF -> ${OUTPUT_DIST}`);
}

await browser.close();
console.log('Done.');
