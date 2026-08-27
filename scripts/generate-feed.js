import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs } from '../src/data/blogData.js'

// Setup path equivalents in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.join(__dirname, '..')

const getBaseUrl = () => {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'https://h-q-design-services.vercel.app'
}

const baseUrl = getBaseUrl()
const feedBlogs = allBlogs.slice(0, 200) // Top 200 latest items in standard RSS feed

const escapeXml = (unsafe) => {
  if (!unsafe) return ''
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  })
}

const formatRfc822 = (dateStr) => {
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) {
      return new Date().toUTCString()
    }
    return d.toUTCString()
  } catch (error) {
    return new Date().toUTCString()
  }
}

let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml('H&Q Design Services | Architecture & Interior Design Studio Lahore')}</title>
  <link>${baseUrl}</link>
  <description>${escapeXml("Pakistan's premier architecture & interior design studio in Parkview City, Lahore. Affiliated with Zameen.com. 2,000+ architectural guides, 3D elevation renders, and floor plans in DHA, Gulberg, & Bahria Town.")}</description>
  <language>en</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
`

feedBlogs.forEach(b => {
  const itemLink = `${baseUrl}/blog/${b.slug}`
  const pubDate = formatRfc822(b.date)
  
  xml += `  <item>
    <title>${escapeXml(b.title)}</title>
    <link>${itemLink}</link>
    <guid isPermaLink="true">${itemLink}</guid>
    <pubDate>${pubDate}</pubDate>
    <category>${escapeXml(b.category)}</category>
    <description>${escapeXml(b.excerpt)}</description>
  </item>
`
})

xml += `</channel>
</rss>
`

const outputPath = path.join(projectRoot, 'public/feed.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Successfully generated RSS feed with ${feedBlogs.length} items in public/feed.xml.`)
