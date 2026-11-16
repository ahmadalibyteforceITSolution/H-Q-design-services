import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs } from '../src/data/blogData.js'
import { userGscSlugs } from './gsc-urls.js'
import { allFlatKeywords, slugifyKeyword } from '../src/data/keywordsData.js'

// Setup path equivalents in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Setup dynamic baseUrl from environment variables for cross-domain flexibility
const getBaseUrl = () => {
  if (process.env.SITE_URL) {
    return process.env.SITE_URL.replace(/\/$/, '')
  }
  return 'https://www.hqdesignservices.com'
}

const baseUrl = getBaseUrl()
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: 'services', changefreq: 'daily', priority: '0.95' },
  { url: 'portfolio', changefreq: 'daily', priority: '0.95' },
  { url: 'reviews', changefreq: 'daily', priority: '0.95' },
  { url: 'keywords-directory', changefreq: 'daily', priority: '0.95' },
  { url: 'tools', changefreq: 'weekly', priority: '0.95' },
  { url: 'contact', changefreq: 'weekly', priority: '0.90' },
  { url: 'about', changefreq: 'weekly', priority: '0.90' },
  { url: 'area-guides', changefreq: 'weekly', priority: '0.90' },
  { url: 'properties', changefreq: 'daily', priority: '0.90' },
  { url: 'projects', changefreq: 'weekly', priority: '0.90' },
  { url: 'trends', changefreq: 'weekly', priority: '0.85' },
  { url: 'agents', changefreq: 'weekly', priority: '0.85' },
  { url: 'forum', changefreq: 'daily', priority: '0.85' },
  { url: 'blog', changefreq: 'daily', priority: '0.85' },
  { url: 'case-studies', changefreq: 'monthly', priority: '0.8' },
  { url: 'partners', changefreq: 'weekly', priority: '0.85' },
  { url: 'privacy-policy', changefreq: 'monthly', priority: '0.7' },
  { url: 'terms-of-service', changefreq: 'monthly', priority: '0.7' },
  { url: 'disclaimer', changefreq: 'monthly', priority: '0.7' }
]

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

const today = new Date().toISOString().split('T')[0]
const allAddedUrls = new Set()

const addSitemapUrl = (rawLoc, changefreq, priority, lastmod = today) => {
  if (!rawLoc) return
  let cleanLoc = rawLoc.trim()
  if (cleanLoc !== `${baseUrl}/` && cleanLoc.endsWith('/')) {
    cleanLoc = cleanLoc.slice(0, -1)
  }
  if (allAddedUrls.has(cleanLoc)) return
  allAddedUrls.add(cleanLoc)
  xml += `  <url>
    <loc>${cleanLoc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`
}

// Add static pages
staticPages.forEach(p => {
  const pathPart = p.url ? `/${p.url}` : '/'
  addSitemapUrl(`${baseUrl}${pathPart}`, p.changefreq, p.priority)
})

// Add dynamic 2,000+ architectural & interior design pages
allBlogs.forEach(b => {
  if (b.slug) {
    addSitemapUrl(`${baseUrl}/blog/${b.slug}`, 'weekly', '0.85')
  }
})

// Add explicit high-priority GSC target URLs requested for indexing
userGscSlugs.forEach(slug => {
  if (slug) {
    addSitemapUrl(`${baseUrl}/blog/${slug}`, 'daily', '0.95')
  }
})

// Add dynamic respective keyword pages
allFlatKeywords.forEach(kw => {
  const kSlug = slugifyKeyword(kw)
  if (kSlug) {
    addSitemapUrl(`${baseUrl}/keywords/${kSlug}`, 'weekly', '0.90')
  }
})

xml += '</urlset>\n'

const outputPath = path.join(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Successfully generated sitemap with ${allAddedUrls.size} unique URLs in public/sitemap.xml.`)
