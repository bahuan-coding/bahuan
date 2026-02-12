#!/usr/bin/env node
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RESUME_DIR = path.resolve(__dirname, '../client/public/resume');
const CLIENT_DIR = path.resolve(__dirname, '../client/public');
const DIST_DIR = path.resolve(__dirname, '../dist/public');

const versions = [
  { html: 'resume.html', pdf: 'Andre_Silva_Resume_2026_Final.pdf' },
  { html: 'resume-pt.html', pdf: 'Andre_Silva_Curriculo_2026_Final.pdf' },
];

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();

for (const { html, pdf } of versions) {
  const htmlPath = path.resolve(RESUME_DIR, html);
  if (!fs.existsSync(htmlPath)) continue;

  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  const buf = await page.pdf({
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  fs.writeFileSync(path.resolve(CLIENT_DIR, pdf), buf);
  console.log(`PDF -> client/public/${pdf}`);

  if (fs.existsSync(DIST_DIR)) {
    fs.writeFileSync(path.resolve(DIST_DIR, pdf), buf);
    console.log(`PDF -> dist/public/${pdf}`);
  }
}

await browser.close();
console.log('Done.');
