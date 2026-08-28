import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs } from '../src/data/blogData.js'
import { userGscSlugs } from './gsc-urls.js'

// Setup path equivalents in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Setup dynamic baseUrl from environment variables for cross-domain flexibility
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
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: 'properties', changefreq: 'daily', priority: '1.0' },
  { url: 'tools', changefreq: 'weekly', priority: '0.95' },
  { url: 'projects', changefreq: 'weekly', priority: '0.95' },
  { url: 'area-guides', changefreq: 'weekly', priority: '0.9' },
  { url: 'trends', changefreq: 'weekly', priority: '0.9' },
  { url: 'agents', changefreq: 'weekly', priority: '0.85' },
  { url: 'forum', changefreq: 'daily', priority: '0.85' },
  { url: 'services', changefreq: 'weekly', priority: '0.9' },
  { url: 'portfolio', changefreq: 'weekly', priority: '0.9' },
  { url: 'case-studies', changefreq: 'monthly', priority: '0.8' },
  { url: 'blog', changefreq: 'daily', priority: '0.85' },
  { url: 'about', changefreq: 'weekly', priority: '0.8' },
  { url: 'contact', changefreq: 'monthly', priority: '0.8' }
]

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

const today = new Date().toISOString().split('T')[0]

// Add static pages
staticPages.forEach(p => {
  const pathPart = p.url ? `/${p.url}` : ''
  xml += `  <url>
    <loc>${baseUrl}${pathPart}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>
`
})

// Add dynamic 2,000+ architectural & interior design pages
const addedSlugs = new Set()

allBlogs.forEach(b => {
  addedSlugs.add(b.slug)
  xml += `  <url>
    <loc>${baseUrl}/blog/${b.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
`
})

// Add explicit high-priority GSC target URLs requested for indexing
userGscSlugs.forEach(slug => {
  if (!addedSlugs.has(slug)) {
    addedSlugs.add(slug)
    xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>
`
  }
})

xml += '</urlset>\n'

const outputPath = path.join(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Successfully generated sitemap with ${staticPages.length + allBlogs.length} URLs in public/sitemap.xml.`)
