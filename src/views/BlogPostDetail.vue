<template>
  <div class="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
      <router-link to="/" class="hover:text-[#088C7E] flex items-center gap-1">
        <i class="fa-solid fa-house text-[10px]"></i> Home
      </router-link>
      <span>/</span>
      <router-link to="/blog" class="hover:text-[#088C7E]">Architectural Guides</router-link>
      <span>/</span>
      <span class="text-slate-900 dark:text-white font-semibold truncate">{{ activePost.title }}</span>
    </nav>

    <!-- Header -->
    <div class="space-y-4">
      <div class="flex flex-wrap items-center gap-2">
        <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/30 uppercase tracking-wider">
          {{ activePost.category }}
        </span>
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <i class="fa-solid fa-circle-check mr-1 text-[10px]"></i> PCATP Verified
        </span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
        {{ activePost.title }}
      </h1>
      <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-4">
        <span><i class="fa-solid fa-user-tie text-[#088C7E] mr-1"></i> By H&Q Chief Architect</span>
        <span>•</span>
        <span><i class="fa-solid fa-calendar text-[#088C7E] mr-1"></i> {{ activePost.date }}</span>
        <span>•</span>
        <span><i class="fa-solid fa-clock text-amber-500 mr-1"></i> {{ activePost.readTime }}</span>
        <span>•</span>
        <span><i class="fa-solid fa-location-dot text-rose-500 mr-1"></i> Parkview City Studio, Lahore</span>
      </div>
    </div>

    <!-- Cover Image -->
    <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-80 sm:h-96 shadow-lg relative group">
      <img :src="activePost.image" :alt="activePost.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      <div class="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white text-xs font-medium border border-white/20 flex items-center gap-1.5">
        <i class="fa-solid fa-camera text-amber-400"></i> H&Q 4K Architectural Visualization
      </div>
    </div>

    <!-- Social Sharing Bar (Off-Page SEO & Virality) -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
      <div class="space-y-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <i class="fa-solid fa-share-nodes text-[#088C7E]"></i> Share Design Blueprint
        </h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400">Share this guide with friends, clients, or contractors.</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <!-- WhatsApp -->
        <a 
          :href="'https://api.whatsapp.com/send?text=' + encodeURIComponent(activePost.title + ' - ' + currentUrl)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 hover:scale-105 active:scale-95 transition-all text-white text-base shadow-sm"
          title="Share on WhatsApp"
        >
          <i class="fa-brands fa-whatsapp"></i>
        </a>
        <!-- LinkedIn -->
        <a 
          :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-blue-700 hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all text-white text-base shadow-sm"
          title="Share on LinkedIn"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <!-- Facebook -->
        <a 
          :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-blue-600 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all text-white text-base shadow-sm"
          title="Share on Facebook"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <!-- Twitter/X -->
        <a 
          :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(activePost.title)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-900 dark:bg-black hover:scale-105 active:scale-95 border border-slate-700 transition-all text-white text-base shadow-sm"
          title="Share on X"
        >
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <!-- Pinterest -->
        <a 
          :href="'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(currentUrl) + '&media=' + encodeURIComponent(activePost.image) + '&description=' + encodeURIComponent(activePost.title)" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-red-600 hover:bg-red-500 hover:scale-105 active:scale-95 transition-all text-white text-base shadow-sm"
          title="Pin on Pinterest"
        >
          <i class="fa-brands fa-pinterest-p"></i>
        </a>
        <!-- Copy Link -->
        <button 
          @click="copyLink"
          class="h-10 px-4 rounded-2xl flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all text-slate-700 dark:text-slate-300 text-xs font-bold shadow-sm border border-slate-200 dark:border-slate-800/60 cursor-pointer"
          :title="copied ? 'Link Copied!' : 'Copy Link'"
        >
          <i class="fa-solid" :class="copied ? 'fa-circle-check text-emerald-500 animate-bounce' : 'fa-link'"></i>
          <span>{{ copied ? 'Link Copied!' : 'Copy Link' }}</span>
        </button>
      </div>
    </div>

    <!-- Content -->
    <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
      <div v-html="activePost.content || defaultContent"></div>
    </article>

    <!-- Related Articles Section (Internal Link Juice Distribution) -->
    <div class="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
      <div class="flex items-center justify-between">
        <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-newspaper text-[#088C7E]"></i> Related Architectural Guides
        </h3>
        <router-link to="/blog" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          View All 2,000+ Guides <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </router-link>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <router-link 
          v-for="rel in relatedPosts" 
          :key="rel.id" 
          :to="'/blog/' + rel.slug"
          class="group p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:shadow-lg transition-all flex flex-col justify-between space-y-3"
        >
          <div class="space-y-2">
            <div class="rounded-xl overflow-hidden h-32 w-full">
              <img :src="rel.image" :alt="rel.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <span class="text-[10px] font-bold text-[#088C7E] uppercase tracking-wider block">{{ rel.category }}</span>
            <h4 class="text-xs font-black text-slate-900 dark:text-white line-clamp-2 group-hover:text-[#088C7E] transition-colors">
              {{ rel.title }}
            </h4>
          </div>
          <div class="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>{{ rel.date }}</span>
            <span class="text-[#088C7E] font-bold flex items-center gap-1">Read <i class="fa-solid fa-chevron-right text-[8px]"></i></span>
          </div>
        </router-link>
      </div>
    </div>

    <!-- Consultation CTA Card -->
    <div class="p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white border border-slate-700 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-1 text-center sm:text-left">
        <h4 class="font-extrabold text-lg text-white">Planning Your Plot Design or Construction in Lahore?</h4>
        <p class="text-xs text-slate-300">Schedule a 1-on-1 floor plan review session at our Parkview City Studio.</p>
      </div>
      <button 
        @click="$emit('open-start-project')"
        class="px-6 py-3.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shrink-0 cursor-pointer"
      >
        Get Free Consultation
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { allBlogs } from '../data/blogData.js'

defineEmits(['open-start-project'])

const route = useRoute()
const copied = ref(false)

const currentUrl = computed(() => {
  const slug = route.params.slug || ''
  return `https://h-q-design-services.vercel.app/blog/${slug}`
})

const copyLink = () => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : currentUrl.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  }
}

const activePost = computed(() => {
  const slug = route.params.slug
  const found = allBlogs.find(b => b.slug === slug)
  if (found) return found

  return {
    id: 1,
    slug: 'article-1-5-marla-house-design',
    title: '5 Marla Modern House Design & Construction Guide 2026',
    category: 'House Sizes & Layout Plans',
    date: 'August 15, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    excerpt: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects in Parkview City Lahore.',
    content: ''
  }
})

const relatedPosts = computed(() => {
  if (!activePost.value) return []
  const cat = activePost.value.category
  const sameCat = allBlogs.filter(b => b.category === cat && b.slug !== activePost.value.slug)
  if (sameCat.length >= 3) {
    const startIdx = (activePost.value.id * 3) % (sameCat.length - 3)
    return sameCat.slice(startIdx, startIdx + 3)
  }
  return allBlogs.slice(0, 3)
})

// Dynamic SEO, Canonical Link, and Schema.org JSON-LD Updates
watchEffect(() => {
  if (activePost.value && typeof document !== 'undefined') {
    const post = activePost.value
    const pageTitle = `${post.title} | H&Q Design Services Studio Lahore`
    const pageDesc = post.excerpt || `Comprehensive architectural design, floor plans, and 2026 construction cost analysis for ${post.title}.`
    const pageImage = post.image
    const canonicalUrl = `https://h-q-design-services.vercel.app/blog/${post.slug}`

    // Document Title
    document.title = pageTitle

    // Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // Meta Description
    let descMeta = document.querySelector('meta[name="description"]')
    if (!descMeta) {
      descMeta = document.createElement('meta')
      descMeta.setAttribute('name', 'description')
      document.head.appendChild(descMeta)
    }
    descMeta.setAttribute('content', pageDesc)

    // Open Graph Tags
    const setMetaProp = (prop, content) => {
      let tag = document.querySelector(`meta[property="${prop}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', prop)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMetaProp('og:title', pageTitle)
    setMetaProp('og:description', pageDesc)
    setMetaProp('og:image', pageImage)
    setMetaProp('og:url', canonicalUrl)
    setMetaProp('og:type', 'article')

    // Twitter Card Tags
    const setMetaName = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMetaName('twitter:title', pageTitle)
    setMetaName('twitter:description', pageDesc)
    setMetaName('twitter:image', pageImage)
    setMetaName('twitter:url', canonicalUrl)
    setMetaName('twitter:card', 'summary_large_image')

    // 1. Dynamic Schema.org JSON-LD (BlogPosting / Article)
    const blogSchemaId = 'blog-post-schema'
    let blogSchemaScript = document.getElementById(blogSchemaId)
    if (!blogSchemaScript) {
      blogSchemaScript = document.createElement('script')
      blogSchemaScript.setAttribute('id', blogSchemaId)
      blogSchemaScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(blogSchemaScript)
    }

    const blogSchemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": [post.image],
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
    blogSchemaScript.textContent = JSON.stringify(blogSchemaData, null, 2)

    // 2. Dynamic Schema.org JSON-LD (BreadcrumbList)
    const breadcrumbSchemaId = 'breadcrumb-schema'
    let breadcrumbScript = document.getElementById(breadcrumbSchemaId)
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script')
      breadcrumbScript.setAttribute('id', breadcrumbSchemaId)
      breadcrumbScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(breadcrumbScript)
    }

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://h-q-design-services.vercel.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Architectural Guides",
          "item": "https://h-q-design-services.vercel.app/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": canonicalUrl
        }
      ]
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData, null, 2)

    // 3. Dynamic Schema.org JSON-LD (FAQPage)
    const faqSchemaId = 'faq-schema'
    let faqScript = document.getElementById(faqSchemaId)
    if (!faqScript) {
      faqScript = document.createElement('script')
      faqScript.setAttribute('id', faqSchemaId)
      faqScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(faqScript)
    }

    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How long does it take to complete architectural drawings for ${post.keyword || post.title}?`,
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
        },
        {
          "@type": "Question",
          "name": `Can the layout of ${post.keyword || post.title} be customized for a rental upper portion?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we design flexible double-unit layouts with separate exterior staircase access, individual electricity/gas meter provisions, and independent kitchen setups to maximize rental yields."
          }
        }
      ]
    }
    faqScript.textContent = JSON.stringify(faqData, null, 2)
  }
})

// Cleanup schemas on unmount
onUnmounted(() => {
  ['blog-post-schema', 'breadcrumb-schema', 'faq-schema'].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.remove()
  })
})

const defaultContent = `
  <p class="text-lg font-medium text-slate-900 dark:text-white">
    Building a dream villa or remodeling a commercial space in Lahore requires combining contemporary aesthetics with local municipal guidelines. In this guide, our senior architects walk you through essential design considerations.
  </p>
`
</script>
