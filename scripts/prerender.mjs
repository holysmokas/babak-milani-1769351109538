// scripts/prerender.mjs
//
// Build-time prerender for the SPA.
//
// Flow:
//   1. Run `vite build` to produce dist/
//   2. This script spins up `vite preview` to serve dist/
//   3. Playwright loads the page in headless Chromium
//   4. After React renders, capture the full HTML
//   5. Write it back to dist/index.html
//
// Result: when the site is deployed, the HTML file already contains the
// fully rendered content. Crawlers, ATS scrapers, link preview bots, and
// AI agents see real content immediately. React then hydrates on the
// client for interactivity.

import { chromium } from 'playwright'
import { preview } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'

// Only one route — the site is a single-page SPA.
// Legal pages (privacy, terms, cookies) are already static HTML.
const ROUTES = ['/']

// How long to wait for the page to fully render before snapshotting.
const RENDER_TIMEOUT_MS = 10_000

async function main() {
  console.log('🚀 Starting prerender...')

  const previewServer = await preview({
    preview: { port: 4173, strictPort: true },
  })

  const baseUrl = `http://localhost:${previewServer.config.preview.port}`
  console.log(`📡 Preview server: ${baseUrl}`)

  const browser = await chromium.launch()

  try {
    for (const route of ROUTES) {
      const url = `${baseUrl}${route}`
      console.log(`🌐 Visiting ${url}`)

      const page = await browser.newPage()

      // Disable Google Analytics during prerender so we don't pollute analytics
      // with bot hits and so the GA snippet doesn't slow down "networkidle".
      await page.route('**/*googletagmanager.com/**', (r) => r.abort())
      await page.route('**/*google-analytics.com/**', (r) => r.abort())

      await page.goto(url, { waitUntil: 'networkidle' })
      await page.waitForSelector('#root > *', { timeout: RENDER_TIMEOUT_MS })

      // Optional: scroll the page so any IntersectionObserver-triggered content
      // gets rendered. (Not needed for this site today, but cheap insurance.)
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
      await page.waitForTimeout(300)
      await page.evaluate(() => window.scrollTo(0, 0))

      const html = await page.content()

      const fileName =
        route === '/'
          ? 'index.html'
          : `${route.replace(/^\//, '').replace(/\/$/, '')}.html`
      const outPath = path.resolve('dist', fileName)

      await fs.writeFile(outPath, html, 'utf-8')
      console.log(`✅ Prerendered ${route} → dist/${fileName}`)

      await page.close()
    }
  } finally {
    await browser.close()
    await new Promise((resolve, reject) => {
      previewServer.httpServer.close((err) => (err ? reject(err) : resolve()))
    })
    console.log('🏁 Done.')
  }
}

main().catch((err) => {
  console.error('❌ Prerender failed:', err)
  process.exit(1)
})
