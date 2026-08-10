import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Portfolio from '../views/Portfolio.vue'
import CaseStudies from '../views/CaseStudies.vue'
import Blog from '../views/Blog.vue'
import BlogPostDetail from '../views/BlogPostDetail.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'H&Q Design Services | Architecture & Interior Design Studio Lahore',
      description: "H&Q Design Services is Pakistan's premier architecture & interior design studio in Parkview City, Lahore. Affiliated with Zameen.com. 500+ completed villas.",
      keywords: 'Best Architects in Lahore, House Construction Cost in Pakistan, 5 Marla House Design, 10 Marla Spanish Villa, 1 Kanal House Plan, Interior Designer in Lahore, DHA Lahore Bylaws, Modern Front Elevation, 3D House Design Lahore, Pakistan Construction Costs'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | H&Q Design Services Studio Parkview City Lahore',
      description: 'Learn about H&Q Design Services heritage, senior architects, and engineering partnership with Zameen.com in Parkview City, Lahore.',
      keywords: 'Architecture Studio Lahore, Professional Architects Pakistan, H&Q Design Services, Zameen.com Partner Studio, Parkview City Lahore Architects, DHA Lahore approved developers, Luxury villa engineering'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Architectural & Interior Design Services | H&Q Lahore',
      description: 'Explore our architectural deliverables: floor planning, submission maps, photorealistic 4K 3D renders, space planning, and luxury interior design.',
      keywords: '3D House Design Elevation, Architectural Layout Lahore, Interior Decoration Packages, Floor Planning Services, 4K Elevation Rendering, Villa Renovation Pakistan, Construction Mapping, Structural Layout Blueprint'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Zameen Verified Portfolio & 3D Projects | H&Q Design Services',
      description: 'Browse completed 5 Marla, 10 Marla, 1 Kanal villas, and commercial plazas in Parkview City, DHA, and Gulberg Lahore.',
      keywords: '5 Marla Villa Design, 10 Marla House elevation, 1 Kanal Modern House Map, Commercial Plaza architecture, DHA Phase 6 House Designs, Parkview City Villa project, Completed elevations Lahore'
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: 'Architectural Case Studies & Project Metrics | H&Q Studio',
      description: 'In-depth case studies showing architectural solutions, engineering compliance, and client satisfaction metrics.',
      keywords: 'Architectural Case Studies Pakistan, Structural Calculations Lahore, Material cost savings design, Municipal Map approval rate, DHA Lahore engineering clearance, Project metrics H&Q'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '100+ Architecture & Real Estate Blogs | H&Q Design Services',
      description: 'Read 100+ articles on Parkview City guidelines, DHA Lahore bylaws, 3D visualization trends, and luxury interior styling.',
      keywords: 'Architecture blogs Pakistan, Real Estate design guidelines, DHA Lahore house bylaws, Parkview City construction rules, 3D render benefits, house design ideas 2026'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: BlogPostDetail,
    meta: {
      title: 'Architectural Design Guide & Real Estate Insight | H&Q Blog',
      description: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects.',
      keywords: 'Architectural design advice, house construction guide, Pakistan real estate layouts, chief architect recommendations'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact H&Q Studio | Parkview City Lahore Architect Desk',
      description: 'Connect with senior architects at Parkview City, Lahore. Call 0341-6887454 or WhatsApp for instant 3D design quotes.',
      keywords: 'Architect contact number Lahore, Parkview City studio location, WhatsApp architect consultation, DHA Lahore layout quote'
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

  // Update Open Graph (og:title, og:description, og:url, og:image)
  if (to.meta && to.meta.title) {
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', to.meta.title)
  }
  if (to.meta && to.meta.description) {
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', to.meta.description)
  }
  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) {
    ogUrl.setAttribute('content', canonicalUrl)
  }
  let ogImage = document.querySelector('meta[property="og:image"]')
  if (ogImage) {
    ogImage.setAttribute('content', `${baseUrl}/logo.jpg`)
  }

  // Update Twitter Cards (twitter:title, twitter:description, twitter:url, twitter:image)
  if (to.meta && to.meta.title) {
    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', to.meta.title)
  }
  if (to.meta && to.meta.description) {
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', to.meta.description)
  }
  let twUrl = document.querySelector('meta[name="twitter:url"]')
  if (twUrl) {
    twUrl.setAttribute('content', canonicalUrl)
  }
  let twImage = document.querySelector('meta[name="twitter:image"]')
  if (twImage) {
    twImage.setAttribute('content', `${baseUrl}/logo.jpg`)
  }

  // Update or Create Link Canonical Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)

  // Dynamic Schema.org JSON-LD injection for On-Page SEO Rich Snippets
  const schemaId = 'dynamic-page-schema'
  let schemaScript = document.getElementById(schemaId)
  if (!schemaScript) {
    schemaScript = document.createElement('script')
    schemaScript.setAttribute('id', schemaId)
    schemaScript.setAttribute('type', 'application/ld+json')
    document.head.appendChild(schemaScript)
  }

  let schemaData = null
  const routeName = to.name

  if (routeName === 'Home') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "H&Q Design Services",
      "url": `${baseUrl}/`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${baseUrl}/blog?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  } else if (routeName === 'About') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "mainEntity": {
        "@type": "ArchitecturalService",
        "name": "H&Q Design Services",
        "description": "Founded with a vision to redefine modern living and workspace design in Lahore, H&Q Design Services is Pakistan's premier architecture and luxury interior studio based in Parkview City, Lahore.",
        "url": `${baseUrl}/`
      }
    }
  } else if (routeName === 'Services') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "ArchitecturalService",
        "name": "H&Q Design Services",
        "url": `${baseUrl}/`
      },
      "serviceType": "Architectural & Interior Design Services",
      "areaServed": "Lahore, Pakistan",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Architectural Deliverables",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Architectural Floor Planning & Layout Design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "4K 3D Exterior Elevation Renders"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Luxury Interior Space Styling"
            }
          }
        ]
      }
    }
  } else if (routeName === 'Portfolio') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Featured 3D Elevation Renders & Projects Portfolio",
      "description": "Browse 500+ completed residential villas and commercial plazas in Lahore designed by H&Q Design Services.",
      "url": `${baseUrl}/portfolio`
    }
  } else if (routeName === 'CaseStudies') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Architectural Case Studies & Project Metrics",
      "description": "Detailed case studies showing structural solutions, engineering compliance, and client satisfaction metrics.",
      "url": `${baseUrl}/case-studies`
    }
  } else if (routeName === 'Blog') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "H&Q Architecture & Real Estate Blog",
      "description": "Read our latest articles on Parkview City guidelines, DHA Lahore bylaws, 3D visualization, and interior styling.",
      "url": `${baseUrl}/blog`
    }
  } else if (routeName === 'Contact') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact H&Q Design Services Studio Lahore",
      "description": "Get a free consultation for your plot design in Lahore. Call 0341-6887454 or WhatsApp.",
      "url": `${baseUrl}/contact`
    }
  }

  if (schemaData) {
    schemaScript.textContent = JSON.stringify(schemaData, null, 2)
  } else {
    schemaScript.textContent = ''
  }
})

export default router
