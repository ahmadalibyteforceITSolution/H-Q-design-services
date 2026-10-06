import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { allBlogs, getCategoryForKeyword, generateArticleContent, architectureImages, toTitleCase } from '../src/data/blogData.js'
import { userGscSlugs } from './gsc-urls.js'
import { homePageData } from './static-home.js'
import { staticPagesDetailed } from './static-pages-data.js'
import { allFlatKeywords, slugifyKeyword, topKeywordsData, keywordClusterMap } from '../src/data/keywordsData.js'
import { propertiesData } from '../src/data/propertiesData.js'
import { generateCitationsJsonLd } from '../src/data/citationsData.js'

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

const optimizeTitle = (rawTitle, brand = ' | H&Q Studio', max = 60) => {
  let clean = String(rawTitle || '').replace(/\s+/g, ' ').trim()
  if (escapeXml(`${clean}${brand}`).length <= max) return `${clean}${brand}`
  if (escapeXml(`${clean} | H&Q`).length <= max) return `${clean} | H&Q`
  if (escapeXml(clean).length <= max) return clean

  let cut = clean.slice(0, max - 3)
  while (cut.length > 5 && escapeXml(`${cut}...`).length > max) {
    cut = cut.replace(/\s+\S*$/, '')
    if (cut.length >= max - 3) {
      cut = cut.slice(0, cut.length - 2)
    }
  }
  return `${cut}...`
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
  // Write to destination
  if (!routePath || routePath === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8')
  } else {
    const targetDir = path.join(distDir, routePath)
    fs.mkdirSync(targetDir, { recursive: true })
    fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8')

    // Also write dist/${routePath}.html for Vercel cleanUrls support
    const htmlFilePath = path.join(distDir, `${routePath}.html`)
    fs.mkdirSync(path.dirname(htmlFilePath), { recursive: true })
    fs.writeFileSync(htmlFilePath, html, 'utf8')
  }
}

// 1. Pre-render Root Homepage (dist/index.html) with Rich Semantic HTML & Citations Schema
const citationsJsonLdScript = `<script type="application/ld+json">${JSON.stringify(generateCitationsJsonLd())}</script>`
renderPage('/', homePageData.title, homePageData.desc, 'https://h-q-design-services.vercel.app/', 'https://h-q-design-services.vercel.app/logo.png', homePageData.body, citationsJsonLdScript)

const sharedInternalLinkingHtml = `
  <section style="max-width:1200px;margin:40px auto 20px;padding:30px 24px;background:#0f172a;color:#fff;border-radius:24px;border:1px solid #1e293b;font-family:inherit;">
    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #1e293b;padding-bottom:16px;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
      <div>
        <span style="background:#088C7E;color:#fff;font-size:10px;font-weight:900;text-transform:uppercase;padding:4px 10px;border-radius:999px;letter-spacing:1px;display:inline-block;margin-bottom:6px;">Pakistan Real Estate &amp; Architecture Network</span>
        <h3 style="font-size:22px;font-weight:900;margin:0;color:#fff;">100+ Internal Portals, 3D Elevations, Societies &amp; Verified Blueprints</h3>
      </div>
      <a href="/contact" style="background:#088C7E;color:#fff;font-size:12px;font-weight:800;text-decoration:none;padding:10px 18px;border-radius:12px;text-transform:uppercase;">Book Consultation →</a>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(240px, 1fr));gap:20px;font-size:12px;">
      <!-- Col 1: Architecture & Design Portals (16 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">Design &amp; Portals</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/services" style="color:#cbd5e1;text-decoration:none;">• Architectural Design Services</a></li>
          <li><a href="/portfolio" style="color:#cbd5e1;text-decoration:none;">• 3D Elevations &amp; House Plans</a></li>
          <li><a href="/case-studies" style="color:#cbd5e1;text-decoration:none;">• Completed Villa Case Studies</a></li>
          <li><a href="/reviews" style="color:#fcd34d;font-weight:bold;text-decoration:none;">• Google Client Reviews (5.0 ★)</a></li>
          <li><a href="/about" style="color:#cbd5e1;text-decoration:none;">• About H&amp;Q Design Studio</a></li>
          <li><a href="/properties" style="color:#cbd5e1;text-decoration:none;">• Verified Pakistan Properties</a></li>
          <li><a href="/projects" style="color:#cbd5e1;text-decoration:none;">• New Housing Mega Projects</a></li>
          <li><a href="/area-guides" style="color:#cbd5e1;text-decoration:none;">• Society Bylaws &amp; Area Guides</a></li>
          <li><a href="/trends" style="color:#cbd5e1;text-decoration:none;">• Market Price Index 2026</a></li>
          <li><a href="/agents" style="color:#cbd5e1;text-decoration:none;">• Certified Architects &amp; Agents</a></li>
          <li><a href="/forum" style="color:#cbd5e1;text-decoration:none;">• Community Real Estate Forum</a></li>
          <li><a href="/partners" style="color:#cbd5e1;text-decoration:none;">• Building Material Partners</a></li>
          <li><a href="/blog" style="color:#cbd5e1;text-decoration:none;">• Architecture Blog (2,000+)</a></li>
          <li><a href="/keywords-directory" style="color:#cbd5e1;text-decoration:none;">• 10-Cluster Keywords Glossary</a></li>
          <li><a href="/contact" style="color:#cbd5e1;text-decoration:none;">• Contact Studio &amp; Book Visit</a></li>
          <li><a href="/embed/calculator" style="color:#cbd5e1;text-decoration:none;">• Free Embed Cost Calculator</a></li>
        </ul>
      </div>

      <!-- Col 2: Lahore Housing Societies (18 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">Lahore Real Estate</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/properties?city=Lahore" style="color:#cbd5e1;text-decoration:none;">• Lahore Houses &amp; Plots Portal</a></li>
          <li><a href="/area-guides?society=dha-lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Lahore Phase 1 to 9 Bylaws</a></li>
          <li><a href="/properties?society=DHA+Lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 5 Luxury Houses</a></li>
          <li><a href="/properties?society=DHA+Lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 6 10 Marla Spanish Villa</a></li>
          <li><a href="/properties?society=DHA+Lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 7 1 Kanal Contemporary</a></li>
          <li><a href="/properties?society=DHA+Lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 8 2 Kanal Presidential</a></li>
          <li><a href="/properties?society=DHA+Lahore" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 9 Prism 1 Kanal Plot</a></li>
          <li><a href="/properties?society=Bahria+Town" style="color:#cbd5e1;text-decoration:none;">• Bahria Town Lahore Sector C Homes</a></li>
          <li><a href="/area-guides?society=bahria-town-lahore" style="color:#cbd5e1;text-decoration:none;">• Bahria Town Sector Guide &amp; Rates</a></li>
          <li><a href="/properties?society=Lake+City" style="color:#cbd5e1;text-decoration:none;">• Lake City Golf Estate 10M Villa</a></li>
          <li><a href="/properties?society=Park+View+City" style="color:#cbd5e1;text-decoration:none;">• Park View City Crystal &amp; Tulip Plots</a></li>
          <li><a href="/properties?society=Gulberg+Lahore" style="color:#cbd5e1;text-decoration:none;">• Gulberg III Main Boulevard Plazas</a></li>
          <li><a href="/properties?society=Model+Town+Lahore" style="color:#cbd5e1;text-decoration:none;">• Model Town Classical Spanish Villa</a></li>
          <li><a href="/properties?society=New+Lahore+City" style="color:#cbd5e1;text-decoration:none;">• New Lahore City 3 &amp; 5 Marla Homes</a></li>
          <li><a href="/properties?society=Central+Park+Lahore" style="color:#cbd5e1;text-decoration:none;">• Central Park 10 Marla On-Ground Plot</a></li>
          <li><a href="/keywords/interior-designers-in-lahore" style="color:#cbd5e1;text-decoration:none;">• Luxury Interior Designers DHA Lahore</a></li>
          <li><a href="/keywords/house-construction-cost-in-pakistan" style="color:#cbd5e1;text-decoration:none;">• Grey Structure Cost in Lahore</a></li>
          <li><a href="/keywords/best-architects-in-lahore" style="color:#cbd5e1;text-decoration:none;">• Best Architects in Lahore Profile</a></li>
        </ul>
      </div>

      <!-- Col 3: Islamabad & Rawalpindi (18 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">Islamabad &amp; Rawalpindi</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/properties?city=Islamabad" style="color:#cbd5e1;text-decoration:none;">• Islamabad Real Estate Portal</a></li>
          <li><a href="/properties?city=Rawalpindi" style="color:#cbd5e1;text-decoration:none;">• Rawalpindi Villas &amp; Plots Portal</a></li>
          <li><a href="/properties?society=DHA+Islamabad" style="color:#cbd5e1;text-decoration:none;">• DHA Islamabad Phase 2 1K Villa</a></li>
          <li><a href="/properties?society=DHA+Islamabad" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 5 Islamabad Expressway</a></li>
          <li><a href="/properties?society=DHA+Islamabad" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 1 Rawalpindi 1K House</a></li>
          <li><a href="/properties?society=Bahria+Enclave" style="color:#cbd5e1;text-decoration:none;">• Bahria Enclave Margalla View Homes</a></li>
          <li><a href="/properties?society=Bahria+Town+Rawalpindi" style="color:#cbd5e1;text-decoration:none;">• Bahria Town Rawalpindi Phase 7 10M</a></li>
          <li><a href="/properties?society=Bahria+Town+Rawalpindi" style="color:#cbd5e1;text-decoration:none;">• Bahria Phase 8 Double Storey 5M</a></li>
          <li><a href="/properties?society=Bahria+Town+Rawalpindi" style="color:#cbd5e1;text-decoration:none;">• Civic Center Bahria Commercial Shop</a></li>
          <li><a href="/properties?society=Gulberg+Greens" style="color:#cbd5e1;text-decoration:none;">• Gulberg Greens 4 Kanal Farmhouse</a></li>
          <li><a href="/properties?society=Capital+Smart+City" style="color:#cbd5e1;text-decoration:none;">• Capital Smart City Overseas Prime</a></li>
          <li><a href="/properties?society=Faisal+Hills" style="color:#cbd5e1;text-decoration:none;">• Faisal Hills Taxila Margalla Plots</a></li>
          <li><a href="/properties?society=Top+City-1" style="color:#cbd5e1;text-decoration:none;">• Top City-1 Airport Metro Plots</a></li>
          <li><a href="/blog/cda-approved-societies-islamabad-2026" style="color:#cbd5e1;text-decoration:none;">• CDA Approved Societies 2026</a></li>
          <li><a href="/blog/rda-approved-societies-rawalpindi-2026" style="color:#cbd5e1;text-decoration:none;">• RDA Approved Schemes Rawalpindi</a></li>
          <li><a href="/blog/dha-islamabad-building-bylaws-guide" style="color:#cbd5e1;text-decoration:none;">• DHA Islamabad Building Bylaws</a></li>
          <li><a href="/blog/capital-smart-city-noc-masterplan-2026" style="color:#cbd5e1;text-decoration:none;">• Capital Smart City Blueprints</a></li>
          <li><a href="/blog/bahria-enclave-islamabad-plot-rates-2026" style="color:#cbd5e1;text-decoration:none;">• Bahria Enclave Plot Price Trends</a></li>
        </ul>
      </div>

      <!-- Col 4: Karachi Real Estate (16 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">Karachi Seafront &amp; Prime</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/properties?city=Karachi" style="color:#cbd5e1;text-decoration:none;">• Karachi Verified Properties Portal</a></li>
          <li><a href="/properties?society=Bahria+Town+Karachi" style="color:#cbd5e1;text-decoration:none;">• Bahria Town Karachi Precinct 1 250Y</a></li>
          <li><a href="/properties?society=Bahria+Town+Karachi" style="color:#cbd5e1;text-decoration:none;">• Bahria Karachi Precinct 10A 125Y</a></li>
          <li><a href="/properties?society=DHA+Karachi" style="color:#cbd5e1;text-decoration:none;">• DHA Karachi Phase 6 500Y Spanish</a></li>
          <li><a href="/properties?society=DHA+Karachi" style="color:#cbd5e1;text-decoration:none;">• DHA Phase 8 Marine Drive 1000Y</a></li>
          <li><a href="/properties?society=Clifton+Karachi" style="color:#cbd5e1;text-decoration:none;">• Clifton Block 4 Arabian Sea Flats</a></li>
          <li><a href="/properties?society=Scheme+33+Karachi" style="color:#cbd5e1;text-decoration:none;">• Scheme 33 120 Sq. Yds Leased Plot</a></li>
          <li><a href="/blog/bahria-town-karachi-2026-rates-update" style="color:#cbd5e1;text-decoration:none;">• Bahria Karachi Rates Update 2026</a></li>
          <li><a href="/blog/dha-karachi-phase-8-plot-prices-2026" style="color:#cbd5e1;text-decoration:none;">• DHA Karachi Phase 8 Beachfront Rates</a></li>
          <li><a href="/blog/sbca-approved-high-rise-projects-karachi" style="color:#cbd5e1;text-decoration:none;">• SBCA Approved High-Rise Condos</a></li>
          <li><a href="/blog/scheme-33-karachi-noc-verification" style="color:#cbd5e1;text-decoration:none;">• Scheme 33 Lease Title Verification</a></li>
          <li><a href="/blog/construction-cost-in-karachi-2026" style="color:#cbd5e1;text-decoration:none;">• Construction Cost per Sq Ft Karachi</a></li>
          <li><a href="/keywords/interior-designers-in-karachi" style="color:#cbd5e1;text-decoration:none;">• Coastal Anti-Rust Interior Design</a></li>
          <li><a href="/keywords/luxury-villas-karachi" style="color:#cbd5e1;text-decoration:none;">• Beach House Architectural Plans</a></li>
          <li><a href="/keywords/commercial-architects-karachi" style="color:#cbd5e1;text-decoration:none;">• SBCA Commercial Complex Plans</a></li>
          <li><a href="/keywords/3d-elevation-karachi" style="color:#cbd5e1;text-decoration:none;">• 120 &amp; 250 Sq Yds 3D Elevations</a></li>
        </ul>
      </div>

      <!-- Col 5: 3D Elevations & Blueprints (18 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">3D Elevations &amp; Maps</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/keywords/3-marla-house-design" style="color:#cbd5e1;text-decoration:none;">• 3 Marla Compact House Plan (20x35)</a></li>
          <li><a href="/keywords/5-marla-house-design" style="color:#cbd5e1;text-decoration:none;">• 5 Marla Double Story House Design</a></li>
          <li><a href="/keywords/5-marla-spanish-house-design" style="color:#cbd5e1;text-decoration:none;">• 5 Marla Spanish Elevation 3D</a></li>
          <li><a href="/keywords/7-marla-house-design" style="color:#cbd5e1;text-decoration:none;">• 7 Marla Contemporary Luxury Plan</a></li>
          <li><a href="/keywords/10-marla-house-design" style="color:#cbd5e1;text-decoration:none;">• 10 Marla Double Story Family Plan</a></li>
          <li><a href="/keywords/10-marla-spanish-villa" style="color:#cbd5e1;text-decoration:none;">• 10 Marla Spanish Villa with Pool</a></li>
          <li><a href="/keywords/1-kanal-house-plan" style="color:#cbd5e1;text-decoration:none;">• 1 Kanal Modern House Plan (50x90)</a></li>
          <li><a href="/keywords/1-kanal-classical-house" style="color:#cbd5e1;text-decoration:none;">• 1 Kanal Classical Victorian Bungalow</a></li>
          <li><a href="/keywords/2-kanal-house-design" style="color:#cbd5e1;text-decoration:none;">• 2 Kanal Presidential Palace Design</a></li>
          <li><a href="/keywords/corner-plot-house-design" style="color:#cbd5e1;text-decoration:none;">• Corner Plot Double Front Elevation</a></li>
          <li><a href="/keywords/basement-house-design" style="color:#cbd5e1;text-decoration:none;">• Full Basement Waterproof Design</a></li>
          <li><a href="/keywords/modern-front-elevation" style="color:#cbd5e1;text-decoration:none;">• 2026 Modern Front Elevations</a></li>
          <li><a href="/keywords/spanish-front-elevation" style="color:#cbd5e1;text-decoration:none;">• Spanish Elevation with Arches</a></li>
          <li><a href="/keywords/commercial-plaza-design" style="color:#cbd5e1;text-decoration:none;">• 4 &amp; 8 Marla Commercial Plazas</a></li>
          <li><a href="/keywords/farmhouse-design-pakistan" style="color:#cbd5e1;text-decoration:none;">• Modern Farmhouse Blueprints</a></li>
          <li><a href="/keywords/swimming-pool-villa-design" style="color:#cbd5e1;text-decoration:none;">• Indoor Heated Swimming Pool Villa</a></li>
          <li><a href="/keywords/duplex-house-design" style="color:#cbd5e1;text-decoration:none;">• Dual Unit Duplex Floor Plans</a></li>
          <li><a href="/keywords/4k-photorealistic-renders" style="color:#cbd5e1;text-decoration:none;">• 4K Photorealistic 3D Renders</a></li>
        </ul>
      </div>

      <!-- Col 6: 2026 Material Rates & Calculators (18 Links) -->
      <div style="background:#1e293b;padding:18px;border-radius:16px;border:1px solid #334155;">
        <h4 style="color:#088C7E;font-size:13px;font-weight:900;margin:0 0 10px;text-transform:uppercase;border-bottom:1px solid #334155;padding-bottom:6px;">2026 Costs &amp; Tools</h4>
        <ul style="list-style:none;padding:0;margin:0;line-height:1.9;">
          <li><a href="/tools?tab=cost-calc" style="color:#cbd5e1;font-weight:bold;text-decoration:none;">• Construction Cost Calculator 2026</a></li>
          <li><a href="/tools?tab=unit-converter" style="color:#cbd5e1;font-weight:bold;text-decoration:none;">• Marla to Sq Ft Area Converter</a></li>
          <li><a href="/tools?tab=mortgage-calc" style="color:#cbd5e1;font-weight:bold;text-decoration:none;">• Bank Islamic Home Mortgage EMI</a></li>
          <li><a href="/tools?tab=plot-finder" style="color:#cbd5e1;font-weight:bold;text-decoration:none;">• Society Master Plot Finder Maps</a></li>
          <li><a href="/keywords/house-construction-cost-in-pakistan" style="color:#cbd5e1;text-decoration:none;">• 5 Marla Construction Cost 2026</a></li>
          <li><a href="/blog/10-marla-house-construction-cost-2026" style="color:#cbd5e1;text-decoration:none;">• 10 Marla Turnkey BOQ Breakdown</a></li>
          <li><a href="/blog/steel-rate-in-pakistan-today-2026" style="color:#cbd5e1;text-decoration:none;">• Grade 60 Steel Rate Today</a></li>
          <li><a href="/blog/cement-bag-price-in-pakistan-today" style="color:#cbd5e1;text-decoration:none;">• Cement Bag Price in Pakistan Today</a></li>
          <li><a href="/blog/red-bricks-rate-lahore-2026" style="color:#cbd5e1;text-decoration:none;">• Awal Red Bricks &amp; Sand Rates</a></li>
          <li><a href="/blog/solar-system-installation-cost-pakistan" style="color:#cbd5e1;text-decoration:none;">• 10kW On-Grid Solar System Cost</a></li>
          <li><a href="/blog/fbr-property-taxes-filer-vs-non-filer-2026" style="color:#cbd5e1;text-decoration:none;">• FBR Property Tax Rates 2026</a></li>
          <li><a href="/blog/dha-lahore-building-bylaws-2026" style="color:#cbd5e1;text-decoration:none;">• DHA Lahore 2026 Building Bylaws</a></li>
          <li><a href="/blog/lda-map-approval-process-guide" style="color:#cbd5e1;text-decoration:none;">• LDA Online Map Approval Guide</a></li>
          <li><a href="/blog/cda-building-regulations-islamabad" style="color:#cbd5e1;text-decoration:none;">• CDA Building Regulations Islamabad</a></li>
          <li><a href="/blog/fuel-subsidy-pakistan-2026-policy" style="color:#cbd5e1;text-decoration:none;">• Pakistan Fuel Subsidy Policy 2026</a></li>
          <li><a href="/privacy-policy" style="color:#cbd5e1;text-decoration:none;">• Privacy Policy &amp; AdSense Terms</a></li>
          <li><a href="/terms-of-service" style="color:#cbd5e1;text-decoration:none;">• Terms of Service &amp; Copyrights</a></li>
          <li><a href="/disclaimer" style="color:#cbd5e1;text-decoration:none;">• Turnkey Estimation Disclaimer</a></li>
        </ul>
      </div>
    </div>

    <!-- Verified National Authorities & Citations Footprint Banner -->
    <div style="margin-top:20px;padding-top:16px;border-top:1px solid #1e293b;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;font-size:11px;color:#94a3b8;">
      <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
        <strong style="color:#fff;">Official Regulatory Standards &amp; Citations:</strong>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">PCATP Licensed</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">PEC Registered</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">LDA Approved</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">CDA Islamabad</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">RDA Rawalpindi</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">SBCA Karachi</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">SBP Islamic Mortgage</span>
        <span style="background:#1e293b;padding:3px 8px;border-radius:6px;border:1px solid #334155;">FBR 2026 Valuation</span>
      </div>
      <div>
        <strong style="color:#fff;">Direct Lines:</strong>
        <a href="tel:03416887454" style="color:#088C7E;text-decoration:none;margin-left:8px;font-weight:bold;">0341-6887454</a> |
        <a href="tel:03134487315" style="color:#088C7E;text-decoration:none;margin-left:8px;font-weight:bold;">0313-4487315</a> |
        <button type="button" onclick="window.open('https://wa.me/923416887454?text=Assalam-o-Alaikum%20HQ%20Design%20Services','_blank','noopener,noreferrer')" style="background:none;border:none;padding:0;font:inherit;cursor:pointer;color:#10b981;text-decoration:none;margin-left:6px;font-weight:bold;">WhatsApp Consultation</button>
      </div>
    </div>
  </section>
`

// 2. Pre-render All Static Pages with Substantial Content & Tailored Schemas
staticPagesDetailed.forEach(p => {
  const canonicalUrl = `https://h-q-design-services.vercel.app/${p.route}`
  let mainBody = p.body
  let extraHeadHtml = ''

  if (p.route === 'reviews') {
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "ArchitecturalService",
      "name": "H&Q Design Services Google Reviews & Ratings",
      "url": canonicalUrl,
      "telephone": ["+923416887454", "+923134487315"]
    }
    extraHeadHtml = `<script type="application/ld+json">${JSON.stringify(reviewsSchema)}</script>`
  } else if (p.route === 'services') {
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Architectural & Interior Design Services Lahore",
      "url": canonicalUrl,
      "provider": {
        "@type": "ArchitecturalService",
        "name": "H&Q Design Services",
        "telephone": ["+923416887454", "+923134487315"],
        "url": "https://h-q-design-services.vercel.app/"
      }
    }
    extraHeadHtml = `<script type="application/ld+json">${JSON.stringify(servicesSchema)}</script>`
  } else if (p.route === 'contact') {
    const contactSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": p.title,
      "description": p.desc,
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "ArchitecturalService",
        "name": "H&Q Design Services",
        "telephone": ["+923416887454", "+923134487315"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Topaz Block, Park View City & DHA Lahore Studio",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54000",
          "addressCountry": "PK"
        }
      }
    }
    extraHeadHtml = `<script type="application/ld+json">${JSON.stringify(contactSchema)}</script>`
  } else if (p.route === 'keywords-directory') {
    const dirSchema = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Architecture, Construction & Design Glossary | H&Q Design Services",
      "url": canonicalUrl,
      "mainEntity": {
        "@type": "DefinedTermSet",
        "name": "Architecture & Real Estate Terminology Pakistan",
        "hasDefinedTerm": keywordClusterMap.map(c => ({
          "@type": "DefinedTerm",
          "name": c.name,
          "description": c.description,
          "url": `https://h-q-design-services.vercel.app${c.targetPage}`
        }))
      }
    }
    extraHeadHtml = `<script type="application/ld+json">${JSON.stringify(dirSchema)}</script>`

    let clustersHtml = `
      <div class="space-y-4">
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Targeted Keyword Strategy Hub (10 Core Pillars)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${keywordClusterMap.map(cluster => `
            <div class="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="font-extrabold text-slate-900 dark:text-white text-base">${escapeXml(cluster.name)}</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-[#088C7E]">${escapeXml(cluster.intent)}</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400">${escapeXml(cluster.description)}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                ${cluster.keywords.slice(0, 5).map(kw => `
                  <a href="/keywords/${slugifyKeyword(kw)}" class="px-2 py-1 rounded bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-[#088C7E]">
                    ${escapeXml(kw)}
                  </a>
                `).join('')}
              </div>
              <div class="pt-2 border-t border-slate-200 dark:border-slate-700">
                <a href="${cluster.targetPage}" class="text-xs font-bold text-[#088C7E]">Explore ${escapeXml(cluster.targetPageLabel)} →</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `

    let categoriesHtml = ''
    topKeywordsData.forEach(cat => {
      categoriesHtml += `
        <div class="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-between">
            <span>${escapeXml(cat.category)}</span>
            <span class="text-xs text-[#088C7E] font-bold">(${cat.keywords.length} Topics)</span>
          </h2>
          <p class="text-xs text-slate-600 dark:text-slate-400">${escapeXml(cat.description)}</p>
          <div class="flex flex-wrap gap-2 pt-2">
            ${cat.keywords.map(kw => `
              <a href="/keywords/${slugifyKeyword(kw)}" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#088C7E] hover:border-[#088C7E] transition-all">
                ${escapeXml(kw)}
              </a>
            `).join('')}
          </div>
        </div>
      `
    })
    mainBody = `
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">Architecture & Construction Knowledge Index</h1>
        <p class="text-base text-slate-600 dark:text-slate-300 max-w-3xl">Comprehensive architectural glossary and spatial planning resource covering 3 Marla to 4 Kanal layouts, 3D elevations, structural engineering, and construction costs in Pakistan.</p>
        ${clustersHtml}
        <div class="space-y-6 pt-6">
          ${categoriesHtml}
        </div>
      </div>
    `
  } else if (p.route === 'properties') {
    const propertiesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Verified Properties & Houses for Sale in Pakistan 2026",
      "description": "Explore 32+ verified residential and commercial properties, plots, and luxury houses across Lahore, Islamabad, Rawalpindi, and Karachi with approved municipal bylaws.",
      "numberOfItems": propertiesData.length,
      "itemListElement": propertiesData.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "RealEstateListing",
          "name": item.title,
          "description": item.description,
          "url": `https://h-q-design-services.vercel.app/properties`,
          "image": item.images && item.images.length > 0 ? item.images[0] : "https://h-q-design-services.vercel.app/logo.png",
          "offers": {
            "@type": "Offer",
            "price": item.numericPrice || 0,
            "priceCurrency": "PKR",
            "availability": "https://schema.org/InStock"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": item.location,
            "addressLocality": item.city,
            "addressRegion": item.city === 'Karachi' ? 'Sindh' : (item.city === 'Islamabad' ? 'Islamabad Capital Territory' : 'Punjab'),
            "addressCountry": "PK"
          }
        }
      }))
    }
    extraHeadHtml = `<script type="application/ld+json">${JSON.stringify(propertiesSchema)}</script>`

    const cityStats = [
      { name: 'All Pakistan', count: propertiesData.length },
      { name: 'Lahore', count: propertiesData.filter(x => x.city === 'Lahore').length },
      { name: 'Islamabad', count: propertiesData.filter(x => x.city === 'Islamabad').length },
      { name: 'Rawalpindi', count: propertiesData.filter(x => x.city === 'Rawalpindi').length },
      { name: 'Karachi', count: propertiesData.filter(x => x.city === 'Karachi').length }
    ]

    const propertiesCardsHtml = propertiesData.map(item => `
      <article class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col transition-all hover:shadow-md">
        <div class="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img src="${item.images && item.images[0] ? item.images[0] : 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'}" alt="${escapeXml(item.title)}" loading="lazy" class="w-full h-full object-cover" />
          <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span class="bg-[#088C7E] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-sm">
              ${item.featured ? '★ Featured' : 'Verified'}
            </span>
            <span class="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
              ${escapeXml(item.type)}
            </span>
          </div>
          <div class="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-emerald-400 font-bold text-[11px] px-2 py-0.5 rounded">
            ${escapeXml(item.possessionStatus || 'Possession Ready')}
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
          <div>
            <div class="text-xl font-black text-[#088C7E]">${escapeXml(item.price)}</div>
            <h2 class="text-base font-bold text-slate-900 dark:text-white line-clamp-1 mt-1">${escapeXml(item.title)}</h2>
            <div class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
              <span>📍</span> <span>${escapeXml(item.location)}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300 py-2 border-y border-slate-100 dark:border-slate-700/60">
            ${item.bedrooms ? `<span>🛏️ ${item.bedrooms} Beds</span>` : ''}
            ${item.bathrooms ? `<span>🚿 ${item.bathrooms} Baths</span>` : ''}
            <span>📐 ${escapeXml(item.area)}</span>
          </div>

          <div class="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
            <div><strong class="text-slate-700 dark:text-slate-200">Bylaw Status:</strong> ${escapeXml(item.bylawCompliance || 'LDA Approved')}</div>
            ${item.installmentDetail ? `<div><strong class="text-emerald-600 dark:text-emerald-400">Installments:</strong> ${escapeXml(item.installmentDetail)}</div>` : ''}
            <div class="text-[10px] text-slate-500 flex gap-2">
              <span>⚡ Elec</span> <span>🔥 Gas</span> <span>💧 Water</span> <span>🏗️ Structural Cert</span>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-2">
            <a href="/contact" class="flex-1 text-center bg-[#088C7E] hover:bg-[#07776b] text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors">
              Schedule Inspection
            </a>
            <button type="button" onclick="window.open('https://wa.me/923416887454?text=${encodeURIComponent('Assalam-o-Alaikum, I am inquiring about property: ' + item.title + ' (' + item.price + ')')}', '_blank', 'noopener,noreferrer')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-3 rounded-lg transition-colors flex items-center justify-center gap-1">
              WhatsApp
            </button>
          </div>
        </div>
      </article>
    `).join('')

    mainBody = `
      <div class="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-xs font-bold text-[#088C7E] uppercase tracking-wider">
            <span>Verified Pakistan Real Estate Portal</span> · <span>Zameen-Grade Due Diligence</span>
          </div>
          <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white">
            Properties &amp; Houses for Sale in Pakistan (2026)
          </h1>
          <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            Browse ${propertiesData.length} verified residential houses, commercial plazas, and developer plots across Lahore, Islamabad, Rawalpindi, and Karachi. Every property listing includes municipal bylaw verification (LDA, CDA, RDA, SBCA), PEC structural inspection stamps, 3D architectural floor plans, and utility connection statuses.
          </p>
          
          <div class="flex flex-wrap gap-2 pt-2">
            ${cityStats.map(c => `
              <div class="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                ${escapeXml(c.name)}: <span class="text-[#088C7E]">${c.count}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          ${propertiesCardsHtml}
        </div>

        <div class="mt-12 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-3">
          <h3 class="font-extrabold text-slate-900 dark:text-white text-sm">Real Estate Buyer Protection &amp; Technical Verification</h3>
          <p>H&amp;Q Design Services acts as an independent architectural engineering authority. In compliance with PCATP (Pakistan Council of Architects and Town Planners) and PEC (Pakistan Engineering Council), our team provides structural audit certificates, zoning clearance checks, and complete turnkey BOQ construction cost assessments for buyers and investors in Pakistan and overseas.</p>
        </div>
      </div>
    `
  }

  const bodyHtml = `
    <header class="bg-slate-900 text-white border-b border-slate-800 py-4 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex flex-wrap gap-4 text-xs font-semibold">
          <a href="/about" class="hover:text-emerald-400">About</a>
          <a href="/services" class="hover:text-emerald-400">Services</a>
          <a href="/portfolio" class="hover:text-emerald-400">Portfolio</a>
          <a href="/tools" class="hover:text-emerald-400">Cost Calculator</a>
          <a href="/area-guides" class="hover:text-emerald-400">Area Guides</a>
          <a href="/properties" class="hover:text-emerald-400">Properties</a>
          <a href="/reviews" class="hover:text-amber-400 font-bold text-amber-300">Reviews (5.0 ★)</a>
          <a href="/blog" class="hover:text-emerald-400">Guides</a>
          <a href="/keywords-directory" class="hover:text-emerald-400">Glossary</a>
          <a href="/contact" class="hover:text-emerald-400">Contact</a>
        </nav>
      </div>
    </header>
    <main class="py-10">
      ${mainBody}
      ${sharedInternalLinkingHtml}
    </main>
    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300 flex-wrap">
        <a href="/">Home</a> ·
        <a href="/about">About Studio</a> ·
        <a href="/services">Services</a> ·
        <a href="/portfolio">3D Portfolio</a> ·
        <a href="/tools">Cost Calculator</a> ·
        <a href="/area-guides">Society Bylaws</a> ·
        <a href="/reviews">Google Reviews (5.0 ★)</a> ·
        <a href="/keywords-directory">Glossary</a> ·
        <a href="/blog">Blog Guides</a> ·
        <a href="/partners">Partners</a> ·
        <a href="/contact">Contact</a> ·
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms</a> ·
        <a href="/disclaimer">Disclaimer</a>
      </div>
    </footer>
  `
  renderPage(p.route, optimizeTitle(p.title), p.desc, canonicalUrl, 'https://h-q-design-services.vercel.app/logo.jpg', bodyHtml, extraHeadHtml)
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
  const pageTitle = optimizeTitle(b.title, ' | H&Q Studio', 60)
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
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex flex-wrap gap-4 text-xs font-semibold">
          <a href="/about" class="hover:text-emerald-400">About</a>
          <a href="/services" class="hover:text-emerald-400">Services</a>
          <a href="/portfolio" class="hover:text-emerald-400">Portfolio</a>
          <a href="/tools" class="hover:text-emerald-400">Cost Calculator</a>
          <a href="/area-guides" class="hover:text-emerald-400">Area Guides</a>
          <a href="/properties" class="hover:text-emerald-400">Properties</a>
          <a href="/reviews" class="hover:text-amber-400 font-bold text-amber-300">Reviews (5.0 ★)</a>
          <a href="/blog" class="hover:text-emerald-400">Guides</a>
          <a href="/keywords-directory" class="hover:text-emerald-400">Glossary</a>
          <a href="/contact" class="hover:text-emerald-400">Contact</a>
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
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="tel:03416887454" class="inline-block px-5 py-2.5 rounded-xl bg-[#088C7E] text-white text-xs font-bold uppercase">Call Studio (0341-6887454)</a>
          <a href="tel:03134487315" class="inline-block px-5 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase">Call (0313-4487315)</a>
          <button type="button" onclick="window.open('https://wa.me/966507143124','_blank','noopener,noreferrer')" class="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase cursor-pointer border-0">KSA WhatsApp Desk</button>
        </div>
      </div>

      ${sharedInternalLinkingHtml}
    </div>

    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300 flex-wrap">
        <a href="/">Home</a> ·
        <a href="/about">About Studio</a> ·
        <a href="/services">Services</a> ·
        <a href="/portfolio">3D Portfolio</a> ·
        <a href="/tools">Cost Calculator</a> ·
        <a href="/area-guides">Society Bylaws</a> ·
        <a href="/reviews">Google Reviews (5.0 ★)</a> ·
        <a href="/keywords-directory">Glossary</a> ·
        <a href="/blog">Blog Guides</a> ·
        <a href="/partners">Partners</a> ·
        <a href="/contact">Contact</a> ·
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms</a> ·
        <a href="/disclaimer">Disclaimer</a>
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
    const existing = allBlogs.find(b => b.slug === customSlug)
    if (existing) {
      renderSingleBlog(existing)
    } else {
      const cleanTopic = customSlug.replace(/^article-\d+-/i, '').replace(/^article-/i, '').replace(/-/g, ' ').trim()
      const displayTitle = toTitleCase(cleanTopic) || 'Modern Architecture & 2026 Construction Guide'
      const category = getCategoryForKeyword(cleanTopic || 'House Design')
      const idMatch = customSlug.match(/^article-(\d+)-/i)
      const id = idMatch ? parseInt(idMatch[1], 10) : (allBlogs.length + gscCustomCount + 1)
      const img = architectureImages[id % architectureImages.length]
      const content = generateArticleContent(displayTitle, category, id)

      const virtualBlog = {
        id: id,
        slug: customSlug,
        title: `${displayTitle} - Architecture & 2026 Construction Guide`,
        category: category,
        date: 'September 2026',
        readTime: '6 min read',
        image: img,
        excerpt: `Complete 2026 architectural analysis, floor plans, and turnkey construction guidelines for ${displayTitle}. Reviewed by H&Q Senior Architects in Pakistan.`,
        content: content,
        keyword: displayTitle
      }
      renderSingleBlog(virtualBlog, customSlug)
      gscCustomCount++
    }
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
  const pageTitle = optimizeTitle(kw, ' | H&Q Studio', 60)
  const pageDesc = `Looking for ${kw} in Lahore, DHA, or Pakistan? H&Q Design Services provides top-rated architectural designs, 3D elevations, luxury interiors, and turnkey construction. Call or WhatsApp 0341-6887454.`
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
    "about": {
      "@type": "Thing",
      "name": kw
    },
    "provider": {
      "@type": "ArchitecturalService",
      "name": "H&Q Design Services",
      "telephone": ["+923416887454", "+923134487315"],
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How long does it take to prepare 2D floor plans and 3D elevations for ${kw}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard 2D architectural drawings and municipal submission blueprints take 7 to 10 working days. A complete design package including 4K photorealistic 3D elevations, MEP engineering layouts, and structural vetting takes approximately 2 to 3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": `Does H&Q Design Services provide on-site supervision for ${kw}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our resident site engineers conduct rigorous phase-wise inspections during foundation excavation, steel rebar binding, slab casting, and plumbing pressure tests to ensure 100% adherence to architectural drawings in DHA, Bahria Town, and across Lahore."
        }
      },
      {
        "@type": "Question",
        "name": `What is the estimated cost and pricing for ${kw} in Lahore, Pakistan?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Design packages for ${kw} start with preliminary 2D architectural layouts and municipal maps from PKR 40-70 per sq.ft, while complete turnkey interior design and construction finishing range from PKR 4,500 to 7,500 per sq.ft based on premium material selections.`
        }
      }
    ]
  }

  const schemasHtml = `
    <script type="application/ld+json">${JSON.stringify(keywordPageSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `

  const bodyHtml = `
    <header class="bg-slate-900 text-white border-b border-slate-800 py-4 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <a href="/" class="text-xl font-extrabold text-[#088C7E]">H&Q Design Services</a>
        <nav class="flex flex-wrap gap-4 text-xs font-semibold">
          <a href="/about" class="hover:text-emerald-400">About</a>
          <a href="/services" class="hover:text-emerald-400">Services</a>
          <a href="/portfolio" class="hover:text-emerald-400">Portfolio</a>
          <a href="/tools" class="hover:text-emerald-400">Cost Calculator</a>
          <a href="/area-guides" class="hover:text-emerald-400">Area Guides</a>
          <a href="/properties" class="hover:text-emerald-400">Properties</a>
          <a href="/reviews" class="hover:text-amber-400 font-bold text-amber-300">Reviews (5.0 ★)</a>
          <a href="/blog" class="hover:text-emerald-400">Guides</a>
          <a href="/keywords-directory" class="hover:text-emerald-400">Glossary</a>
          <a href="/contact" class="hover:text-emerald-400">Contact</a>
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

      <div class="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
        <h4 class="text-xs font-black uppercase text-[#088C7E] tracking-wider">Related Architectural Plans &amp; Society Blueprints</h4>
        <div class="flex flex-wrap gap-2 text-xs">
          ${allFlatKeywords.filter(k => k.toLowerCase() !== kw.toLowerCase()).slice((i * 3) % Math.max(1, allFlatKeywords.length - 8), ((i * 3) % Math.max(1, allFlatKeywords.length - 8)) + 6).map(rk => `<a href="/keywords/${slugifyKeyword(rk)}" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-[#088C7E] text-slate-300 hover:text-white transition-colors text-xs inline-block">• ${escapeXml(rk)}</a>`).join('')}
        </div>
      </div>

      <div class="p-8 rounded-3xl bg-slate-900 text-white space-y-3">
        <h4 class="font-extrabold text-lg">Consult With H&Q Senior Architects for ${escapeXml(kw)}</h4>
        <p class="text-xs text-slate-300">Plot consultations, 4K elevation rendering, and municipal map approval in DHA & Bahria Town.</p>
        <div class="flex flex-wrap gap-3 pt-2">
          <a href="tel:03416887454" class="inline-block px-5 py-2.5 rounded-xl bg-[#088C7E] text-white text-xs font-bold uppercase">Call: 0341-6887454</a>
          <a href="tel:03134487315" class="inline-block px-5 py-2.5 rounded-xl bg-slate-800 text-white text-xs font-bold uppercase">0313-4487315</a>
          <button type="button" onclick="window.open('https://wa.me/923416887454?text=${encodeURIComponent('Inquiry for ' + kw)}','_blank','noopener,noreferrer')" class="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase cursor-pointer border-0">WhatsApp Consultation</button>
        </div>
      </div>

      ${sharedInternalLinkingHtml}
    </div>

    <footer class="bg-slate-950 text-slate-400 py-8 px-6 text-xs text-center border-t border-slate-800 space-y-3">
      <p>© 2026 H&Q Design Services (HANDQ). All rights reserved. DHA Lahore & Parkview City, Lahore, Pakistan.</p>
      <div class="flex justify-center gap-4 text-slate-300 flex-wrap">
        <a href="/">Home</a> ·
        <a href="/about">About Studio</a> ·
        <a href="/services">Services</a> ·
        <a href="/portfolio">3D Portfolio</a> ·
        <a href="/tools">Cost Calculator</a> ·
        <a href="/area-guides">Society Bylaws</a> ·
        <a href="/reviews">Google Reviews (5.0 ★)</a> ·
        <a href="/keywords-directory">Glossary</a> ·
        <a href="/blog">Blog Guides</a> ·
        <a href="/partners">Partners</a> ·
        <a href="/contact">Contact</a> ·
        <a href="/privacy-policy">Privacy Policy</a> ·
        <a href="/terms-of-service">Terms</a> ·
        <a href="/disclaimer">Disclaimer</a>
      </div>
    </footer>
  `

  renderPage(routePath, pageTitle, pageDesc, canonicalUrl, img, bodyHtml, schemasHtml)
  renderedKeywordCount++
})

console.log(`Successfully pre-rendered home page, ${staticPagesDetailed.length} detailed static pages, ${allBlogs.length} dataset blogs, ${renderedKeywordCount} respective keyword pages, and ${gscCustomCount} custom GSC target URLs into dist/!`)
