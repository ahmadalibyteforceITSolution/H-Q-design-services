import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs, getCategoryForKeyword, generateArticleContent, architectureImages } from '../src/data/blogData.js'
import { userGscSlugs } from './gsc-urls.js'
import { homePageData } from './static-home.js'
import { staticPagesDetailed } from './static-pages-data.js'
import { allFlatKeywords, slugifyKeyword } from '../src/data/keywordsData.js'

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

console.log('Starting comprehensive pre-rendering for Google AdSense compliance & high-value content...')

// Helper to write html file into target directory or root
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
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/i, canonicalTag)
  } else if (html.includes('<!-- Dynamic Canonical Tag')) {
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

  // Write to destination
  if (!routePath || routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8')
  } else {
    const targetDir = path.join(distDir, routePath)
    fs.mkdirSync(targetDir, { recursive: true })
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8')
  }
}

// 1. Pre-render Root Homepage (dist/index.html) with Rich Semantic HTML
renderPage('/', homePageData.title, homePageData.desc, 'https://h-q-design-services.vercel.app/', 'https://h-q-design-services.vercel.app/logo.png', homePageData.body)

// 2. Pre-render All Static Pages with Substantial Content
staticPagesDetailed.forEach(p => {
  const canonicalUrl = `https://h-q-design-services.vercel.app/${p.route}`
  const bodyHtml = `
    <header class="bg-slate-900 text-white border-b border-slate-800 py-4 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex gap-4 text-xs font-semibold">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/tools">Cost Calculator</a>
          <a href="/properties">Properties</a>
          <a href="/blog">Guides</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
    <main class="py-10">
      ${p.body}
    </main>
    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300">
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms of Service</a> ·
        <a href="/disclaimer">Disclaimer</a> ·
        <a href="/partners">Partners</a> ·
        <a href="/contact">Contact</a>
      </div>
    </footer>
  `
  renderPage(p.route, p.title, p.desc, canonicalUrl, 'https://h-q-design-services.vercel.app/logo.jpg', bodyHtml)
})

// 3. Pre-render Blog Pages
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

  const schemasHtml = `
    <script type="application/ld+json">${JSON.stringify(blogPostingSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `

  const bodyHtml = `
    <header class="bg-slate-900 text-white border-b border-slate-800 py-4 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex gap-4 text-xs font-semibold">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/tools">Cost Calculator</a>
          <a href="/blog">Guides</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>

    <div class="py-12 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
        <a href="/" class="hover:text-[#088C7E]">Home</a>
        <span>/</span>
        <a href="/blog" class="hover:text-[#088C7E]">Architectural Guides</a>
        <span>/</span>
        <span class="text-slate-900 dark:text-white font-semibold truncate">${escapeXml(b.title)}</span>
      </nav>

      <div class="space-y-3">
        <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/30 uppercase tracking-wider">${escapeXml(b.category)}</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">${escapeXml(b.title)}</h1>
        <div class="text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-3">
          By H&Q Chief Architect • PCATP Registered • Parkview City Studio, Lahore
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 sm:h-96 shadow-lg relative">
        <img src="${escapeXml(b.image)}" alt="${escapeXml(b.title)}" class="w-full h-full object-cover" />
      </div>

      <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
        <p class="text-lg font-medium text-slate-900 dark:text-white">${escapeXml(b.excerpt)}</p>
        ${b.content}
      </article>

      <div class="p-8 rounded-3xl bg-slate-900 text-white space-y-3">
        <h4 class="font-extrabold text-lg">Consult With H&Q Senior Architects</h4>
        <p class="text-xs text-slate-300">Plot consultations, 4K elevation rendering, and municipal map approval in DHA & Bahria Town.</p>
        <a href="tel:03416887454" class="inline-block px-5 py-2.5 rounded-xl bg-[#088C7E] text-white text-xs font-bold uppercase">Call Studio (0341-6887454)</a>
      </div>
    </div>

    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300">
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms of Service</a> ·
        <a href="/disclaimer">Disclaimer</a> ·
        <a href="/partners">Partners</a> ·
        <a href="/contact">Contact</a>
      </div>
    </footer>
  `

  renderPage(routePath, pageTitle, pageDesc, canonicalUrl, b.image, bodyHtml, schemasHtml)
  renderedBlogCount++
}

// Render all dataset blogs
allBlogs.forEach(b => renderSingleBlog(b))

// Render explicit GSC URLs requested for indexing
let gscCustomCount = 0
userGscSlugs.forEach(customSlug => {
  if (!renderedSlugs.has(customSlug)) {
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

// 4. Pre-render Respective Keyword Pages (dist/keywords/:slug/index.html)
const renderedKeywordSlugs = new Set()
let renderedKeywordCount = 0

allFlatKeywords.forEach((kw, i) => {
  const slug = slugifyKeyword(kw)
  if (renderedKeywordSlugs.has(slug)) return
  renderedKeywordSlugs.add(slug)

  const routePath = `keywords/${slug}`
  const canonicalUrl = `https://h-q-design-services.vercel.app/keywords/${slug}`
  const pageTitle = `${kw} | 2026 Architectural Plan & Cost | H&Q Studio Lahore`
  const pageDesc = `Comprehensive 2026 architectural designs, 3D elevations, floor plans, and construction cost estimates for ${kw} in Pakistan. Consult H&Q Senior Architects.`
  const category = getCategoryForKeyword(kw)
  const img = architectureImages[i % architectureImages.length]
  const content = generateArticleContent(kw, category, i + 1)

  const keywordPageSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": pageTitle,
    "description": pageDesc,
    "url": canonicalUrl,
    "image": img,
    "provider": {
      "@type": "Organization",
      "name": "H&Q Design Services",
      "telephone": "+923416887454",
      "url": "https://h-q-design-services.vercel.app/"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://h-q-design-services.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Keywords Directory", "item": "https://h-q-design-services.vercel.app/keywords-directory" },
      { "@type": "ListItem", "position": 3, "name": kw, "item": canonicalUrl }
    ]
  }

  const schemasHtml = `
    <script type="application/ld+json">${JSON.stringify(keywordPageSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  `

  const bodyHtml = `
    <header class="bg-slate-900 text-white border-b border-slate-800 py-4 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex gap-4 text-xs font-semibold">
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/tools">Cost Calculator</a>
          <a href="/keywords-directory">Glossary</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>

    <div class="py-12 space-y-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
        <a href="/" class="hover:text-[#088C7E]">Home</a>
        <span>/</span>
        <a href="/keywords-directory" class="hover:text-[#088C7E]">Glossary</a>
        <span>/</span>
        <span class="text-slate-900 dark:text-white font-semibold truncate">${escapeXml(kw)}</span>
      </nav>

      <div class="space-y-3">
        <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/30 uppercase tracking-wider">${escapeXml(category)}</span>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">${escapeXml(kw)}</h1>
        <div class="text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-3">
          2026 Architectural Guide • PCATP Verified • Turnkey Construction Rates in Pakistan
        </div>
      </div>

      <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 sm:h-96 shadow-lg relative">
        <img src="${escapeXml(img)}" alt="${escapeXml(kw)}" class="w-full h-full object-cover" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">
        <div><strong>Steel:</strong> Grade 60 Rebar</div>
        <div><strong>Concrete:</strong> 3,000-4,000 PSI</div>
        <div><strong>Bylaws:</strong> DHA, LDA & Bahria Compliant</div>
      </div>

      <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
        ${content}
      </article>

      <div class="p-8 rounded-3xl bg-slate-900 text-white space-y-3">
        <h4 class="font-extrabold text-lg">Consult With H&Q Senior Architects for ${escapeXml(kw)}</h4>
        <p class="text-xs text-slate-300">Plot consultations, 4K elevation rendering, and municipal map approval in DHA & Bahria Town.</p>
        <div class="flex gap-3 pt-2">
          <a href="tel:03416887454" class="inline-block px-5 py-2.5 rounded-xl bg-[#088C7E] text-white text-xs font-bold uppercase">Call: 0341-6887454</a>
          <a href="https://wa.me/923416887454?text=${encodeURIComponent('Inquiry for ' + kw)}" class="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase">WhatsApp Consultation</a>
        </div>
      </div>
    </div>

    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300">
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms of Service</a> ·
        <a href="/disclaimer">Disclaimer</a> ·
        <a href="/keywords-directory">Keywords Directory</a> ·
        <a href="/contact">Contact</a>
      </div>
    </footer>
  `

  renderPage(routePath, pageTitle, pageDesc, canonicalUrl, img, bodyHtml, schemasHtml)
  renderedKeywordCount++
})

console.log(`Successfully pre-rendered home page, ${staticPagesDetailed.length} detailed static pages, ${allBlogs.length} dataset blogs, ${renderedKeywordCount} respective keyword pages, and ${gscCustomCount} custom GSC target URLs into dist/!`)
