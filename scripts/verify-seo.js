import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.join(__dirname, '../dist')

console.log('--- Verifying Dist Build for SEO Issues ---')

let waLinksFound = 0
let nofollowLinksFound = 0
let goLinksFound = 0
let titlesOver60 = 0
let sampleOver60Titles = []
let totalHtmlScanned = 0

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      scanDirectory(fullPath)
    } else if (entry.name.endsWith('.html')) {
      totalHtmlScanned++
      const html = fs.readFileSync(fullPath, 'utf8')

      // Check for raw wa.me links in <a> tags
      if (/<a\s[^>]*href=["']https:\/\/wa\.me/i.test(html)) {
        waLinksFound++
        if (waLinksFound <= 5) {
          console.warn('Raw wa.me <a> link found in:', fullPath)
        }
      }

      // Check for rel="nofollow" in <a> tags
      if (/<a\s[^>]*rel=["'][^"']*nofollow[^"']*["']/i.test(html)) {
        nofollowLinksFound++
        if (nofollowLinksFound <= 5) {
          console.warn('Nofollow link found in:', fullPath)
        }
      }

      // Check for /go/ links in <a> tags
      if (/<a\s[^>]*href=["']\/go\//i.test(html)) {
        goLinksFound++
        if (goLinksFound <= 5) {
          console.warn('/go/ link found in:', fullPath)
        }
      }

      // Check title length
      const titleMatch = html.match(/<title>(.*?)<\/title>/is)
      if (titleMatch) {
        const titleText = titleMatch[1].trim()
        if (titleText.length > 60) {
          titlesOver60++
          if (sampleOver60Titles.length < 5) {
            sampleOver60Titles.push({ file: fullPath.replace(distDir, ''), title: titleText, len: titleText.length })
          }
        }
      }
    }
  }
}

scanDirectory(distDir)

console.log(`Total HTML files scanned: ${totalHtmlScanned}`)
console.log(`Raw wa.me <a> links found: ${waLinksFound} (Must be 0)`)
console.log(`Nofollow <a> links found: ${nofollowLinksFound} (Must be 0)`)
console.log(`/go/ <a> links found: ${goLinksFound} (Must be 0)`)
console.log(`Titles over 60 characters: ${titlesOver60} (Must be 0)`)
if (sampleOver60Titles.length > 0) {
  console.log('Sample titles over 60:', sampleOver60Titles)
}

if (waLinksFound === 0 && nofollowLinksFound === 0 && goLinksFound === 0 && titlesOver60 === 0) {
  console.log('✅ ALL CHECKS PASSED: 0 Broken External WhatsApp Links, 0 Nofollow Links, 0 Internal /go/ Links, & 0 Title Tags > 60 chars!')
} else {
  console.error('❌ ISSUES REMAINING!')
  process.exit(1)
}
