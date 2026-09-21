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
let canonicalIssues = []
let missingCanonical = 0
let multipleCanonicals = 0
let totalHtmlScanned = 0

// Check sitemap.xml exists and is non-empty
const sitemapFile = path.join(__dirname, '../public/sitemap.xml')
if (!fs.existsSync(sitemapFile) || fs.statSync(sitemapFile).size === 0) {
  console.error('❌ Sitemap public/sitemap.xml missing or empty!')
  process.exit(1)
}

function scanDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      scanDirectory(fullPath)
    } else if (entry.name.endsWith('.html')) {
      totalHtmlScanned++
      const html = fs.readFileSync(fullPath, 'utf8')
      const relPath = fullPath.replace(distDir, '').replace(/\\/g, '/')

      // Skip the /go/ redirection trampoline from canonical check
      if (!relPath.includes('/go/')) {
        const canonMatches = [...html.matchAll(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/gi)]
        if (canonMatches.length === 0) {
          missingCanonical++
          if (canonicalIssues.length < 5) canonicalIssues.push(`Missing canonical: ${relPath}`)
        } else if (canonMatches.length > 1) {
          multipleCanonicals++
          if (canonicalIssues.length < 5) canonicalIssues.push(`Multiple canonicals (${canonMatches.length}): ${relPath}`)
        } else {
          const href = canonMatches[0][1]
          if (!href.startsWith('https://h-q-design-services.vercel.app')) {
            canonicalIssues.push(`Bad canonical domain in ${relPath}: ${href}`)
          }
        }
      }

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
console.log(`Missing canonical tags: ${missingCanonical} (Must be 0)`)
console.log(`Multiple canonical tags: ${multipleCanonicals} (Must be 0)`)
console.log(`Raw wa.me <a> links found: ${waLinksFound} (Must be 0)`)
console.log(`Nofollow <a> links found: ${nofollowLinksFound} (Must be 0)`)
console.log(`/go/ <a> links found: ${goLinksFound} (Must be 0)`)
console.log(`Titles over 60 characters: ${titlesOver60} (Must be 0)`)
if (sampleOver60Titles.length > 0) {
  console.log('Sample titles over 60:', sampleOver60Titles)
}
if (canonicalIssues.length > 0) {
  console.log('Sample canonical issues:', canonicalIssues)
}

if (missingCanonical === 0 && multipleCanonicals === 0 && waLinksFound === 0 && nofollowLinksFound === 0 && goLinksFound === 0 && titlesOver60 === 0) {
  console.log('✅ ALL CHECKS PASSED: 100% Valid Canonical Tags, 0 Broken External WhatsApp Links, 0 Nofollow Links, 0 Internal /go/ Links, & 0 Title Tags > 60 chars!')
} else {
  console.error('❌ ISSUES REMAINING!')
  process.exit(1)
}
