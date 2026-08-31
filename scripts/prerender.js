import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs } from '../src/data/blogData.js'
import { userGscSlugs } from './gsc-urls.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.join(__dirname, '../dist')

const baseTemplatePath = path.join(distDir, 'index.html')
if (!fs.existsSync(baseTemplatePath)) {
  console.error('dist/index.html not found! Run vite build first.')
  process.exit(1)
}

const baseTemplate = fs.readFileSync(baseTemplatePath, 'utf8')

const escapeXml = (str) => {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

console.log(`Starting pre-rendering of static pages, ${allBlogs.length} blog articles, and custom GSC target URLs...`)

// Helper to write html file into target directory
const renderPage = (routePath, pageTitle, pageDesc, canonicalUrl, pageImage, pageContentHtml, extraHeadHtml = '') => {
  let html = baseTemplate

  // Replace Title
  const titleTag = `<title>${escapeXml(pageTitle)}</title>`
  html = html.replace(/<title>.*?<\/title>/s, titleTag)

  // Replace Title Meta
  html = html.replace(/<meta name="title" content=".*?"\s*\/?>/i, `<meta name="title" content="${escapeXml(pageTitle)}">`)

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${escapeXml(pageDesc)}">`)

  // Inject Canonical Tag
  const canonicalTag = `<link rel="canonical" href="${escapeXml(canonicalUrl)}">`
  if (html.includes('<!-- Dynamic Canonical Tag')) {
    html = html.replace(/<!-- Dynamic Canonical Tag.*?-->/i, canonicalTag)
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`)
  }

  // Replace Open Graph Tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${escapeXml(pageTitle)}">`)
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${escapeXml(pageDesc)}">`)
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/i, `<meta property="og:url" content="${escapeXml(canonicalUrl)}">`)
  if (pageImage) {
    html = html.replace(/<meta property="og:image" content=".*?"\s*\/?>/i, `<meta property="og:image" content="${escapeXml(pageImage)}">`)
  }

  // Replace Twitter Tags
  html = html.replace(/<meta property="twitter:title" content=".*?"\s*\/?>/i, `<meta property="twitter:title" content="${escapeXml(pageTitle)}">`)
  html = html.replace(/<meta property="twitter:description" content=".*?"\s*\/?>/i, `<meta property="twitter:description" content="${escapeXml(pageDesc)}">`)
  html = html.replace(/<meta property="twitter:url" content=".*?"\s*\/?>/i, `<meta property="twitter:url" content="${escapeXml(canonicalUrl)}">`)
  if (pageImage) {
    html = html.replace(/<meta property="twitter:image" content=".*?"\s*\/?>/i, `<meta property="twitter:image" content="${escapeXml(pageImage)}">`)
  }

  // Inject Extra Head HTML (JSON-LD schemas)
  if (extraHeadHtml) {
    html = html.replace('</head>', `${extraHeadHtml}\n</head>`)
  }

  // Inject Pre-rendered Body HTML into #app
  const appContainer = `<div id="app" class="flex-1 flex flex-col min-h-screen">${pageContentHtml}</div>`
  html = html.replace(/<div id="app" class="flex-1 flex flex-col min-h-screen"><\/div>/i, appContainer)

  // Ensure directory exists
  const targetDir = path.join(distDir, routePath)
  fs.mkdirSync(targetDir, { recursive: true })
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8')
}

// 1. Pre-render Static Site Pages
const staticPages = [
  { route: 'properties', title: 'Luxury Properties & Plots for Sale in Lahore | H&Q Design Services', desc: 'Browse verified 5 Marla, 10 Marla & 1 Kanal houses, plots, and commercial properties in Parkview City, DHA, and Gulberg Lahore.' },
  { route: 'tools', title: 'Construction Cost Calculator & Plot Maps 2026 | H&Q Design Services', desc: 'Calculate house construction costs in Pakistan for 2026, convert area units, and explore plot maps for DHA Lahore & Parkview City.' },
  { route: 'projects', title: 'New Housing Projects & Investment Plans 2026 | H&Q Design Services', desc: 'Discover new residential and commercial housing projects on installments across Lahore, Islamabad, and Karachi.' },
  { route: 'area-guides', title: 'DHA Lahore & Parkview City Area Guides | H&Q Design Services', desc: 'In-depth society guides, block maps, possession details, and LDA/DHA bylaws for Parkview City, DHA Lahore, and Gulberg.' },
  { route: 'trends', title: 'Pakistan Property Price Index & Trends 2026 | H&Q Design Services', desc: 'Real-time property market trends, plot price analysis, and construction material rate forecasts in Pakistan.' },
  { route: 'agents', title: 'Certified Architects & Real Estate Consultants | H&Q Design Services', desc: 'Meet our PCATP registered chief architects and verified property consultants at Parkview City Studio Lahore.' },
  { route: 'forum', title: 'Real Estate & Architecture Q&A Forum | H&Q Design Services', desc: 'Ask questions about LDA bylaws, DHA submission maps, grey structure costs, and interior design recommendations.' },
  { route: 'services', title: 'Architectural Design & 3D Render Services | H&Q Design Services', desc: 'Turnkey architectural planning, 4K 3D elevation renders, municipal map approvals, and luxury interior design.' },
  { route: 'portfolio', title: '3D Elevation & Interior Architecture Portfolio | H&Q Design Services', desc: 'Explore 500+ completed luxury villa elevations, modern interiors, and commercial plaza designs in Lahore.' },
  { route: 'case-studies', title: 'Architectural Case Studies & Project Blueprints | H&Q Design Services', desc: 'Detailed architectural case studies of 5 Marla, 10 Marla, and 1 Kanal modern & Spanish villas designed by H&Q.' },
  { route: 'blog', title: '2,000+ Architectural & Interior Design Guides | H&Q Design Services', desc: 'Pakistan\'s largest architectural library. In-depth guides on floor plans, DHA bylaws, 3D renders, and construction costs.' },
  { route: 'about', title: 'About H&Q Design Services (HANDQ) | Premier Architects Lahore', desc: 'Learn about HANDQ (H&Q Design Services), official partner with Zameen.com based in Parkview City Lahore.' },
  { route: 'partners', title: 'H&Q Partners & Backlinks Network Hub | Best Architects in Lahore', desc: 'Explore official H&Q Design Services partner directory, high-authority domain listings, copy-pasteable SEO backlinks, and link exchange program guidelines.' },
  { route: 'contact', title: 'Contact H&Q Architectural Studio Lahore | Call 0341-6887454', desc: 'Visit our studio in Parkview City Lahore or connect with our Saudi Arabia desk +966 50 714 3124.' },
  { route: 'keywords-directory', title: 'Trending Architecture & Real Estate Searches | H&Q Studio', desc: 'Explore 1,000+ top search topics across Pakistan covering floor plans, 3D front elevations, interior designs, and construction cost estimates.' }
]

staticPages.forEach(p => {
  const canonicalUrl = `https://h-q-design-services.vercel.app/${p.route}`
  const bodyHtml = `
    <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h1 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">${escapeXml(p.title)}</h1>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">${escapeXml(p.desc)}</p>
      <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <p class="text-xs text-slate-500">Official H&Q Design Services Studio • Parkview City Lahore • Partner with Zameen.com</p>
        <a href="tel:03416887454" class="inline-block mt-3 px-4 py-2 rounded-xl bg-[#088C7E] text-white text-xs font-bold">Call 0341-6887454</a>
      </div>
    </div>
  `
  renderPage(p.route, p.title, p.desc, canonicalUrl, 'https://h-q-design-services.vercel.app/logo.jpg', bodyHtml)
})

// 2. Pre-render Blog Pages
const renderedSlugs = new Set()
let renderedBlogCount = 0

const renderSingleBlog = (b, slugOverride = null) => {
  const targetSlug = slugOverride || b.slug
  if (renderedSlugs.has(targetSlug)) return
  renderedSlugs.add(targetSlug)

  const routePath = `blog/${targetSlug}`
  const canonicalUrl = `https://h-q-design-services.vercel.app/blog/${targetSlug}`
  const pageTitle = `${b.title} | H&Q Design Services Studio Lahore`
  const pageDesc = b.excerpt || `Detailed architectural design, floor plans, and 2026 construction cost analysis for ${b.title}.`

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": b.title,
    "image": [b.image],
    "datePublished": "2026-08-01T08:00:00+05:00",
    "dateModified": new Date().toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "H&Q Design Services",
      "url": "https://h-q-design-services.vercel.app/"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "H&Q Design Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://h-q-design-services.vercel.app/favicon.png"
      }
    },
    "description": pageDesc,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://h-q-design-services.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Architectural Guides", "item": "https://h-q-design-services.vercel.app/blog" },
      { "@type": "ListItem", "position": 3, "name": b.title, "item": canonicalUrl }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How long does it take to complete architectural drawings for ${b.keyword || b.title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard 2D architectural blueprints and submission drawings take 7 to 10 working days. A complete turnkey package with 4K 3D elevations, structural vetting, and MEP layouts takes approximately 2 to 3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": `Will H&Q Design Services manage municipal map approval with DHA / LDA?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our PCATP registered architects handle the full submission documentation, structural stability certificate, and liaison with building control authorities to guarantee NOC clearance."
        }
      }
    ]
  }

  const schemasHtml = `
    <script type="application/ld+json">${JSON.stringify(blogPostingSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `

  const bodyHtml = `
    <div class="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
        <a href="/" class="hover:text-[#088C7E]">Home</a>
        <span>/</span>
        <a href="/blog" class="hover:text-[#088C7E]">Architectural Guides</a>
        <span>/</span>
        <span class="text-slate-900 dark:text-white font-semibold truncate">${escapeXml(b.title)}</span>
      </nav>

      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/30 uppercase tracking-wider">${escapeXml(b.category)}</span>
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">PCATP Verified</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">${escapeXml(b.title)}</h1>
        <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-4">
          <span>By H&Q Chief Architect</span> • <span>${escapeXml(b.date)}</span> • <span>${escapeXml(b.readTime)}</span> • <span>Parkview City Studio, Lahore</span>
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 sm:h-96 shadow-lg relative">
        <img src="${escapeXml(b.image)}" alt="${escapeXml(b.title)}" class="w-full h-full object-cover" />
      </div>

      <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
        <p class="text-lg font-medium text-slate-900 dark:text-white">${escapeXml(b.excerpt)}</p>
        ${b.content}
      </article>

      <div class="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
        <h4 class="font-extrabold text-lg">Planning Construction in Lahore or Pakistan?</h4>
        <p class="text-xs text-slate-300">Consult directly with H&Q Senior Architects for plot floor plans, 3D renders, and cost estimates.</p>
        <a href="https://wa.me/966507143124" target="_blank" rel="noopener" class="inline-block px-6 py-3 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase">WhatsApp Consultation (+966 50 714 3124)</a>
      </div>
    </div>
  `

  renderPage(routePath, pageTitle, pageDesc, canonicalUrl, b.image, bodyHtml, schemasHtml)
  renderedBlogCount++
}

// First render all dataset blogs
allBlogs.forEach(b => renderSingleBlog(b))

// Next render explicit GSC URLs requested for indexing
let gscCustomCount = 0
userGscSlugs.forEach(customSlug => {
  if (!renderedSlugs.has(customSlug)) {
    // Find post by ID match
    const idMatch = customSlug.match(/^article-(\d+)-/i)
    let postToRender = null
    if (idMatch) {
      const id = parseInt(idMatch[1], 10)
      postToRender = allBlogs.find(b => b.id === id)
    }
    if (!postToRender) {
      postToRender = allBlogs[0]
    }
    renderSingleBlog(postToRender, customSlug)
    gscCustomCount++
  }
})

console.log(`Successfully pre-rendered ${staticPages.length} static pages, ${allBlogs.length} dataset blogs, and ${gscCustomCount} custom GSC target URLs into dist/!`)
