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
      description: "H&Q Design Services is Pakistan's premier architecture & interior design studio in Parkview City, Lahore. Affiliated with Zameen.com. 500+ completed villas."
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us | H&Q Design Services Studio Parkview City Lahore',
      description: 'Learn about H&Q Design Services heritage, senior architects, and engineering partnership with Zameen.com in Parkview City, Lahore.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    meta: {
      title: 'Architectural & Interior Design Services | H&Q Lahore',
      description: 'Explore our architectural deliverables: floor planning, submission maps, photorealistic 4K 3D renders, space planning, and luxury interior design.'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Zameen Verified Portfolio & 3D Projects | H&Q Design Services',
      description: 'Browse completed 5 Marla, 10 Marla, 1 Kanal villas, and commercial plazas in Parkview City, DHA, and Gulberg Lahore.'
    }
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: CaseStudies,
    meta: {
      title: 'Architectural Case Studies & Project Metrics | H&Q Studio',
      description: 'In-depth case studies showing architectural solutions, engineering compliance, and client satisfaction metrics.'
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: '100+ Architecture & Real Estate Blogs | H&Q Design Services',
      description: 'Read 100+ articles on Parkview City guidelines, DHA Lahore bylaws, 3D visualization trends, and luxury interior styling.'
    }
  },
  {
    path: '/blog/:slug',
    name: 'BlogPostDetail',
    component: BlogPostDetail,
    meta: {
      title: 'Architectural Design Guide & Real Estate Insight | H&Q Blog',
      description: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact H&Q Studio | Parkview City Lahore Architect Desk',
      description: 'Connect with senior architects at Parkview City, Lahore. Call 0313-4487315 or WhatsApp for instant 3D design quotes.'
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
  const baseUrl = 'https://hq-design-services.com'
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

  // Update or Create Link Canonical Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]')
  if (!canonicalLink) {
    canonicalLink = document.createElement('link')
    canonicalLink.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalLink)
  }
  canonicalLink.setAttribute('href', canonicalUrl)
})

export default router
