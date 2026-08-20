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

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'H&Q Design Services | Architecture, 3D Renders & Zameen Real Estate Portal Lahore',
      description: "Pakistan's premier architecture studio & Zameen verified property portal in Parkview City, Lahore. 500+ completed villas, 4K 3D elevation renders, and verified plots. Call 0341-6887454.",
      keywords: 'Zameen Pakistan properties, Best Architects in Lahore, House Construction Cost in Pakistan, 5 Marla House Design, 10 Marla Spanish Villa, 1 Kanal House Plan, DHA Lahore Bylaws, Parkview City Lahore, 3D Elevation Lahore'
    }
  },
  {
    path: '/properties',
    name: 'Properties',
    component: Properties,
    meta: {
      title: 'Properties for Sale & Rent in Pakistan | Zameen Verified Listings | H&Q',
      description: 'Search 100% verified houses, residential plots, commercial plazas, and luxury apartments for sale and rent in Lahore, Islamabad, and Karachi with approved 3D floor plans.',
      keywords: 'Properties for sale Lahore, Plots in Parkview City, DHA Lahore houses for sale, Commercial plazas Gulberg, Bahria Town Karachi plots, Zameen verified properties, Luxury villa for sale Pakistan'
    }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools,
    meta: {
      title: 'House Construction Cost Calculator 2026 & Real Estate Tools | H&Q Studio',
      description: 'Instant House Construction Cost Calculator 2026, Society Master Maps, Plot Finder, Area Unit Converter (Marla/Sqft), and Home Loan Mortgage EMI Calculator.',
      keywords: 'Construction cost calculator Pakistan 2026, House building cost 5 Marla, Plot finder map Parkview City, Area unit converter Marla to Sqft, Mortgage EMI calculator Pakistan, Grey structure cost per sqft'
    }
  },
  {
    path: '/projects',
    name: 'NewProjects',
    component: NewProjects,
    meta: {
      title: 'New Housing Projects & Mega Developments in Pakistan | H&Q Studio',
      description: 'Explore LDA, CDA & SBCA approved residential master communities, corporate high-rises, and luxury off-plan apartments with 1-5 years installment plans.',
      keywords: 'New housing societies Lahore, Park View City installments, DHA luxury apartments, Zameen Opal flats, Islamabad new projects 2026, Off plan property booking Pakistan'
    }
  },
  {
    path: '/area-guides',
    name: 'AreaGuides',
    component: AreaGuides,
    meta: {
      title: 'Pakistan Real Estate Area Guides & Society Reviews | H&Q Studio',
      description: 'In-depth neighborhood reviews, average plot prices, lifestyle scores, and building bylaws for Parkview City, DHA Lahore, Bahria Town, and Gulberg.',
      keywords: 'Parkview City Lahore area guide, DHA Lahore phase reviews, Bahria Town Lahore lifestyle score, Gulberg commercial rates, society price benchmarks, Lahore residential guides'
    }
  },
  {
    path: '/trends',
    name: 'MarketTrends',
    component: MarketTrends,
    meta: {
      title: 'Real Estate Price Index & Market Trends 2026 | H&Q Studio',
      description: 'Historical price index growth charts (2021-2026), demand rankings, and average rental yields across Lahore, Islamabad, and Karachi.',
      keywords: 'Pakistan property price index, Lahore real estate trends 2026, DHA price growth, housing market forecast Pakistan, commercial rental yield, property ROI Pakistan'
    }
  },
  {
    path: '/agents',
    name: 'Agents',
    component: Agents,
    meta: {
      title: 'Find Certified Architects & Verified Real Estate Agents | H&Q Studio',
      description: 'Connect directly with licensed architectural engineers, luxury interior designers, and DHA/Parkview City verified real estate advisors.',
      keywords: 'Architects in Lahore, Registered PEC engineers, Real estate agents Parkview City, Luxury interior designers Lahore, DHA authorized consultants, Verified property dealers'
    }
  },
  {
    path: '/forum',
    name: 'Forum',
    component: Forum,
    meta: {
      title: 'Real Estate & Construction Community Forum | H&Q Q&A Desk',
      description: 'Ask questions regarding plot prices, current construction material rates, LDA/DHA bylaws, and architectural layouts. Answered by senior architects.',
      keywords: 'Real estate forum Pakistan, Construction Q&A Lahore, LDA building map approval questions, 5 Marla cost discussion, DHA bylaws forum, Property investment questions'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | H&Q Design Services Studio Parkview City Lahore',
      description: 'Learn about H&Q Design Services heritage, senior architects, and engineering partnership with Zameen.com in Parkview City, Lahore.',
      keywords: 'Architecture Studio Lahore, Professional Architects Pakistan, H&Q Design Services, Zameen.com Partner Studio, Parkview City Lahore Architects'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Architectural & Interior Design Services | H&Q Lahore',
      description: 'Explore our architectural deliverables: floor planning, submission maps, photorealistic 4K 3D renders, space planning, and luxury interior design.',
      keywords: '3D House Design Elevation, Architectural Layout Lahore, Interior Decoration Packages, Floor Planning Services, 4K Elevation Rendering'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Zameen Verified Portfolio & 3D Projects | H&Q Design Services',
      description: 'Browse completed 5 Marla, 10 Marla, 1 Kanal villas, and commercial plazas in Parkview City, DHA, and Gulberg Lahore.',
      keywords: '5 Marla Villa Design, 10 Marla House elevation, 1 Kanal Modern House Map, Commercial Plaza architecture, DHA Phase 6 House Designs'
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: 'Architectural Case Studies & Project Metrics | H&Q Studio',
      description: 'In-depth case studies showing architectural solutions, engineering compliance, and client satisfaction metrics.',
      keywords: 'Architectural Case Studies Pakistan, Structural Calculations Lahore, Material cost savings design, Municipal Map approval rate'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '100+ Architecture & Real Estate Blogs | H&Q Design Services',
      description: 'Read 100+ articles on Parkview City guidelines, DHA Lahore bylaws, 3D visualization trends, and luxury interior styling.',
      keywords: 'Architecture blogs Pakistan, Real Estate design guidelines, DHA Lahore house bylaws, Parkview City construction rules'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: BlogPostDetail,
    meta: {
      title: 'Architectural Design Guide & Real Estate Insight | H&Q Blog',
      description: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects.',
      keywords: 'Architectural design advice, house construction guide, Pakistan real estate layouts'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact H&Q Studio | Parkview City Lahore Architect Desk',
      description: 'Connect with senior architects at Parkview City, Lahore. Call 0341-6887454 or WhatsApp for instant 3D design quotes.',
      keywords: 'Architect contact number Lahore, Parkview City studio location, WhatsApp architect consultation'
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
  const canonicalUrl = `${baseUrl}${to.path}`

  // Update Page Title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  // Update Meta Description
  if (to.meta && to.meta.description) {
    let descMeta = document.querySelector('meta[name="description"]')
    if (descMeta) {
      descMeta.setAttribute('content', to.meta.description)
    }
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
    "name": to.meta?.title || "H&Q Design Services",
    "description": to.meta?.description || "",
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "H&Q Design Services & Zameen Real Estate Portal",
      "url": `${baseUrl}/`
    }
  }
  schemaScript.textContent = JSON.stringify(schemaData, null, 2)
})

export default router
