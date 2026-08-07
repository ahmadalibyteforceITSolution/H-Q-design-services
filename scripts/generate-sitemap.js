import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { generate100Blogs } from '../src/data/blogData.js'

// Setup path equivalents in ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://hq-design-services.com'
const staticPages = [
  { url: '', changefreq: 'daily', priority: '1.0' },
  { url: 'about', changefreq: 'weekly', priority: '0.9' },
  { url: 'services', changefreq: 'weekly', priority: '0.9' },
  { url: 'portfolio', changefreq: 'weekly', priority: '0.9' },
  { url: 'case-studies', changefreq: 'monthly', priority: '0.8' },
  { url: 'blog', changefreq: 'daily', priority: '0.8' },
  { url: 'contact', changefreq: 'monthly', priority: '0.8' }
]

const blogs = generate100Blogs()

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

// Add dynamic blog posts
blogs.forEach(b => {
  xml += `  <url>
    <loc>${baseUrl}/blog/${b.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`
})

xml += '</urlset>\n'

const outputPath = path.join(__dirname, '../public/sitemap.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Successfully generated sitemap with ${staticPages.length + blogs.length} URLs in public/sitemap.xml.`)
