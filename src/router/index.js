import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import CaseStudies from '../views/CaseStudies.vue'
import Blog from '../views/Blog.vue'
import BlogPostDetail from '../views/BlogPostDetail.vue'
import Contact from '../views/Contact.vue'
import Properties from '../views/Properties.vue'
import Tools from '../views/Tools.vue'
import NewProjects from '../views/NewProjects.vue'
import AreaGuides from '../views/AreaGuides.vue'
import MarketTrends from '../views/MarketTrends.vue'
import Agents from '../views/Agents.vue'
import Forum from '../views/Forum.vue'
import BacklinksHub from '../views/BacklinksHub.vue'
import KeywordsDirectory from '../views/KeywordsDirectory.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import TermsOfService from '../views/TermsOfService.vue'
import Disclaimer from '../views/Disclaimer.vue'
import KeywordDetail from '../views/KeywordDetail.vue'
import { getKeywordBySlug, slugifyKeyword } from '../data/keywordsData.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'H&Q Design Services | Best Architects in Lahore',
      description: 'Premier architecture studio in Lahore. 500+ luxury villas, 3D elevation renders, floor plans & construction cost estimates. Call 0341-6887454.',
      keywords: 'H&Q Design Services, Best Architects in Lahore, House Construction Cost in Pakistan, 5 Marla House Design, 10 Marla Spanish Villa, 1 Kanal House Plan, DHA Lahore Bylaws, 3D Elevation Lahore'
    }
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties,
    meta: {
      title: 'Properties for Sale in Pakistan | H&Q Design Services',
      description: 'Search 100% verified houses, residential plots, commercial plazas, and luxury apartments for sale in Lahore, Islamabad & Karachi with 3D plans.',
      keywords: 'Properties for sale Lahore, Plots in DHA Lahore, DHA Lahore houses for sale, Commercial plazas Gulberg, Bahria Town Karachi plots, verified properties, Luxury villa for sale Pakistan'
    }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: {
      title: 'House Construction Cost Calculator 2026 | H&Q Studio',
      description: 'Instant 2026 House Construction Cost Calculator, Society Master Maps, Plot Finder, Area Unit Converter and Home Loan Mortgage EMI Calculator.',
      keywords: 'Construction cost calculator Pakistan 2026, House building cost 5 Marla, Plot finder map DHA Lahore, Area unit converter Marla to Sqft, Mortgage EMI calculator Pakistan, Grey structure cost per sqft'
    }
  },
  {
    path: '/projects',
    name: 'NewProjects',
    component: NewProjects,
    meta: {
      title: 'New Housing Projects in Pakistan | H&Q Design Studio',
      description: 'Explore LDA, CDA & SBCA approved residential master communities, corporate high-rises, and luxury off-plan apartments with installment plans.',
      keywords: 'New housing societies Lahore, DHA Lahore installments, DHA luxury apartments, Opal Residency flats, Islamabad new projects 2026, Off plan property booking Pakistan'
    }
  },
  {
    path: '/area-guides',
    name: 'AreaGuides',
    component: AreaGuides,
    meta: {
      title: 'Pakistan Real Estate Area Guides | H&Q Design Studio',
      description: 'In-depth neighborhood reviews, average plot prices, lifestyle scores, and building bylaws for DHA Lahore and Bahria Town.',
      keywords: 'DHA Lahore area guide, DHA Lahore phase reviews, Bahria Town Lahore lifestyle score, Gulberg commercial rates, society price benchmarks, Lahore residential guides'
    }
  },
  {
    path: '/trends',
    name: 'MarketTrends',
    component: MarketTrends,
    meta: {
      title: 'Real Estate Price Index & Trends 2026 | H&Q Studio',
      description: 'Historical price index growth charts, demand rankings, and average rental yields across Lahore, Islamabad, and Karachi real estate markets.',
      keywords: 'Pakistan property price index, Lahore real estate trends 2026, DHA price growth, housing market forecast Pakistan, commercial rental yield, property ROI Pakistan'
    }
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents,
    meta: {
      title: 'Find Top Architects & Real Estate Agents | H&Q Studio',
      description: 'Connect directly with licensed architectural engineers, luxury interior designers, and DHA/Bahria Town verified real estate advisors.',
      keywords: 'Architects in Lahore, Registered PEC engineers, Real estate agents DHA Lahore, Luxury interior designers Lahore, DHA authorized consultants, Verified property dealers'
    }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    meta: {
      title: 'Real Estate & Construction Forum | H&Q Q&A Desk',
      description: 'Ask questions regarding plot prices, current construction material rates, LDA/DHA bylaws, and architectural layouts answered by architects.',
      keywords: 'Real estate forum Pakistan, Construction Q&A Lahore, LDA building map approval questions, 5 Marla cost discussion, DHA bylaws forum, Property investment questions'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | H&Q Design Services Studio Lahore',
      description: 'Learn about H&Q Design Services heritage, senior architects, and engineering team in Lahore, Pakistan.',
      keywords: 'Architecture Studio Lahore, Professional Architects Pakistan, H&Q Design Services, Top Design Studio, Lahore Architects'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Architectural & Interior Design Services | HANDQ (H&Q)',
      description: 'Explore our architectural deliverables: floor planning, submission maps, photorealistic 4K 3D renders, space planning, and luxury interior by HANDQ.',
      keywords: 'HANDQ Services, HANDQ 3D House Design Elevation, Architectural Layout Lahore, Interior Decoration Packages, Floor Planning Services, 4K Elevation Rendering'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Architectural Portfolio & 3D Projects | H&Q Studio',
      description: 'Browse completed 5 Marla, 10 Marla, 1 Kanal villas, and commercial plazas in DHA, Gulberg, and Bahria Town Lahore with 3D elevation renders.',
      keywords: '5 Marla Villa Design, 10 Marla House elevation, 1 Kanal Modern House Map, Commercial Plaza architecture, DHA Phase 6 House Designs'
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: 'Architectural Case Studies & Metrics | HANDQ Studio',
      description: 'In-depth architectural case studies showing design solutions, structural compliance, cost optimizations, and client satisfaction metrics by HANDQ.',
      keywords: 'HANDQ Case Studies, Architectural Case Studies Pakistan, Structural Calculations Lahore, Material cost savings design, Municipal Map approval rate'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Architecture & Real Estate Blogs | H&Q Studio',
      description: 'Read 100+ articles on DHA Lahore bylaws, 3D visualization trends, and luxury interior design styling tips.',
      keywords: 'Architecture blogs Pakistan, Real Estate design guidelines, DHA Lahore house bylaws, Bahria Town construction rules'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: BlogPostDetail,
    meta: {
      title: 'Architectural Design Guide & Real Estate | H&Q',
      description: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects in Lahore, Pakistan.',
      keywords: 'Architectural design advice, house construction guide, Pakistan real estate layouts'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact H&Q Studio | Lahore, Pakistan',
      description: 'Connect with senior architects in Lahore, Pakistan. Call 0341-6887454 or WhatsApp for instant 3D design quotes and plot consultations.',
      keywords: 'Architect contact number Lahore, DHA studio location, WhatsApp architect consultation'
    }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: BacklinksHub,
    meta: {
      title: 'Industry Partners & Architectural Collaborations | H&Q Studio',
      description: 'Explore H&Q Design Services verified architectural engineering partners, building material manufacturers, sanitary brands, and real estate associates.',
      keywords: 'architecture partners, engineering consultants Lahore, building material suppliers, construction partners Pakistan'
    }
  },
  {
    path: '/keywords-directory',
    name: 'KeywordsDirectory',
    component: KeywordsDirectory,
    meta: {
      title: 'Architecture & Construction Knowledge Glossary | H&Q Studio',
      description: 'Comprehensive architectural glossary and spatial planning resource covering 3 Marla to 4 Kanal layouts, 3D elevations, structural engineering, and construction costs.',
      keywords: 'architecture glossary, construction terminology Lahore, house planning standards, building bylaws Pakistan'
    }
  },
  {
    path: '/keywords/:slug',
    name: 'KeywordDetail',
    component: KeywordDetail,
    meta: {
      title: 'Architectural Design Guide & Specifications | H&Q Studio',
      description: 'Comprehensive 2026 architectural design, floor plans, and construction cost estimates for trending topics in Pakistan.',
      keywords: 'architectural design, 3D elevation Lahore, turnkey construction Pakistan'
    }
  },
  {
    path: '/keyword/:slug',
    redirect: to => `/keywords/${to.params.slug}`
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy | H&Q Design Services Studio Lahore',
      description: 'Learn how H&Q Design Services collects, uses, and protects visitor data, including Google AdSense, cookies, and privacy rights.',
      keywords: 'privacy policy, H&Q design services privacy, cookies disclosure, user privacy'
    }
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: TermsOfService,
    meta: {
      title: 'Terms of Service | H&Q Design Services Studio Lahore',
      description: 'Terms and conditions governing architectural planning, 3D elevation modeling, turnkey estimates, and website use for H&Q Design Services.',
      keywords: 'terms of service, architectural terms, legal conditions H&Q'
    }
  },
  {
    path: '/disclaimer',
    name: 'Disclaimer',
    component: Disclaimer,
    meta: {
      title: 'Website & Architectural Disclaimer | H&Q Design Services',
      description: 'Official disclaimers regarding construction cost calculations, municipal building approvals, and property listings.',
      keywords: 'disclaimer, construction cost estimate disclaimer, architectural bylaws disclaimer'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Dynamic Canonical Tag & Meta Management Guard for 100% SEO Indexing
router.afterEach((to) => {
  const baseUrl = 'https://h-q-design-services.vercel.app'
  const cleanPath = to.path === '/' ? '/' : to.path.replace(/\/+$/, '')
  let canonicalUrl = `${baseUrl}${cleanPath}`

  // Ensure Meta Robots tag is index, follow
  let robotsMeta = document.querySelector('meta[name="robots"]')
  if (!robotsMeta) {
    robotsMeta = document.createElement('meta')
    robotsMeta.setAttribute('name', 'robots')
    document.head.appendChild(robotsMeta)
  }
  robotsMeta.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')

  // Dynamic Keyword Detail metadata resolution
  if (to.name === 'KeywordDetail' && to.params.slug) {
    const kw = getKeywordBySlug(to.params.slug)
    if (kw) {
      const slug = slugifyKeyword(kw)
      to.meta.title = `${kw} | 2026 Architectural Plan & Cost | H&Q Studio Lahore`
      to.meta.description = `Comprehensive 2026 architectural designs, 3D elevations, floor plans, and construction cost estimates for ${kw} in Pakistan. Consult H&Q Senior Architects.`
      canonicalUrl = `${baseUrl}/keywords/${slug}`
    }
  }

  // Update Page Title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  // Update Meta Description
  if (to.meta && to.meta.description) {
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', to.meta.description)
  }

  // Update Meta Keywords
  if (to.meta && to.meta.keywords) {
    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (keywordsMeta) {
      keywordsMeta.setAttribute('content', to.meta.keywords)
    }
  }

  // Update OpenGraph tags
  if (to.meta && to.meta.title) {
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', to.meta.title)
    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', to.meta.title)
  }
  if (to.meta && to.meta.description) {
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', to.meta.description)
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', to.meta.description)
  }
  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)
  let twUrl = document.querySelector('meta[name="twitter:url"]')
  if (twUrl) twUrl.setAttribute('content', canonicalUrl)

  // Ensure Link Canonical Tag is strictly present and matches current route
  let canonicalLinks = document.querySelectorAll('link[rel="canonical"]')
  if (canonicalLinks.length > 1) {
    for (let i = 1; i < canonicalLinks.length; i++) {
      canonicalLinks[i].remove()
    }
  }
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)

  // Dynamic Schema.org JSON-LD injection
  const schemaId = 'dynamic-page-schema'
  let schemaScript = document.getElementById(schemaId)
  if (!schemaScript) {
    schemaScript = document.createElement('script')
    schemaScript.setAttribute('id', schemaId)
    schemaScript.setAttribute('type', 'application/ld+json')
    document.head.appendChild(schemaScript)
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": to.meta?.title || "HANDQ Design Services (H&Q)",
    "description": to.meta?.description || "",
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "H&Q Design Services",
      "url": `${baseUrl}/`
    }
  }
  schemaScript.textContent = JSON.stringify(schemaData, null, 2)
})

export default router
