<template>
  <div class="py-12 space-y-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb -->
    <div class="flex items-center gap-2 text-xs text-slate-500">
      <router-link to="/" class="hover:text-[#088C7E]">Home</router-link>
      <span>/</span>
      <router-link to="/blog" class="hover:text-[#088C7E]">Blog</router-link>
      <span>/</span>
      <span class="text-slate-900 dark:text-white font-semibold truncate">{{ activePost.title }}</span>
    </div>

    <!-- Header -->
    <div class="space-y-4">
      <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/30 uppercase tracking-wider">
        {{ activePost.category }}
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
        {{ activePost.title }}
      </h1>
      <div class="flex items-center gap-4 text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-4">
        <span><i class="fa-solid fa-user-tie text-[#088C7E] mr-1"></i> By H&Q Chief Architect</span>
        <span>•</span>
        <span><i class="fa-solid fa-calendar text-[#088C7E] mr-1"></i> {{ activePost.date }}</span>
        <span>•</span>
        <span><i class="fa-solid fa-clock text-amber-500 mr-1"></i> {{ activePost.readTime }}</span>
      </div>
    </div>

    <!-- Cover Image -->
    <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 h-96 shadow-lg">
      <img :src="activePost.image" :alt="activePost.title" class="w-full h-full object-cover" />
    </div>

    <!-- Social Sharing Bar (Off-Page SEO & Virality) -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md">
      <div class="space-y-1">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
          <i class="fa-solid fa-share-nodes text-[#088C7E]"></i> Share Design Guide
        </h4>
        <p class="text-[11px] text-slate-500 dark:text-slate-400">Share this guide with friends or clients to help them plan layouts.</p>
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
          class="w-10 h-10 rounded-2xl flex items-center justify-center bg-slate-900 dark:bg-black hover:scale-105 active:scale-95 border border-slate-200 dark:border-slate-800 transition-all text-slate-700 dark:text-white text-base shadow-sm"
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

    <!-- Recommended Lifestyle & Fabric Partner (Backlink Spotlight) -->
    <div class="p-6 rounded-3xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-3">
      <span class="text-[10px] font-black uppercase text-[#088C7E] tracking-wider">Interior Fabrics & Lifestyle Recommendation</span>
      <h4 class="text-base font-extrabold text-slate-900 dark:text-white">
        Looking for Premium Fabrics, Curtains & Luxury Clothing?
      </h4>
      <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        For luxury unstitched fabrics, men's designer cotton, and premium festive attire that matches elite villa lifestyle aesthetics, visit our partner brand 
        <a href="https://ahmad-cloths.vercel.app/" target="_blank" rel="noopener" class="text-emerald-500 font-bold underline hover:text-emerald-400">Ahmad Cloths (ahmad-cloths.vercel.app)</a>.
      </p>
    </div>

    <!-- Author & Consultation CTA Card -->
    <div class="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-1">
        <h4 class="font-extrabold text-lg text-slate-900 dark:text-white">Planning Your Plot Design in Lahore?</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400">Schedule a 1-on-1 floor plan review session at our Parkview City Studio.</p>
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
  return typeof window !== 'undefined' ? window.location.href : 'https://hq-design-services.com'
})

const copyLink = () => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(currentUrl.value)
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
    title: 'Modern Architectural Trends in Lahore: Parkview City & DHA Guide',
    category: 'Parkview City News',
    date: 'July 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    excerpt: 'Detailed architectural analysis and house layout recommendations from H&Q chief architects in Parkview City Lahore.',
    content: ''
  }
})

// Dynamic SEO and Schema.org JSON-LD Updates for Individual Blog Posts
watchEffect(() => {
  if (activePost.value) {
    const pageTitle = `${activePost.value.title} | H&Q Design Services Studio Lahore`
    const pageDesc = activePost.value.excerpt || `Read our guide on ${activePost.value.title}`
    const pageImage = activePost.value.image
    const pageUrl = window.location.href

    // Document Title
    document.title = pageTitle

    // Meta Description
    const descMeta = document.querySelector('meta[name="description"]')
    if (descMeta) {
      descMeta.setAttribute('content', pageDesc)
    }

    // Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', pageTitle)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', pageDesc)

    const ogImage = document.querySelector('meta[property="og:image"]')
    if (ogImage) ogImage.setAttribute('content', pageImage)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', pageUrl)

    // Twitter Card Tags
    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', pageTitle)

    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', pageDesc)

    const twImage = document.querySelector('meta[name="twitter:image"]')
    if (twImage) twImage.setAttribute('content', pageImage)

    const twUrl = document.querySelector('meta[name="twitter:url"]')
    if (twUrl) twUrl.setAttribute('content', pageUrl)

    // Dynamic Schema.org JSON-LD injection
    const schemaId = 'blog-post-schema'
    let schemaScript = document.getElementById(schemaId)
    if (!schemaScript) {
      schemaScript = document.createElement('script')
      schemaScript.setAttribute('id', schemaId)
      schemaScript.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schemaScript)
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": activePost.value.title,
      "image": [activePost.value.image],
      "datePublished": "2026-07-20T08:00:00+05:00",
      "dateModified": new Date().toISOString(),
      "author": [{
        "@type": "Organization",
        "name": "H&Q Design Services",
        "url": "https://hq-design-services.com/"
      }],
      "publisher": {
        "@type": "Organization",
        "name": "H&Q Design Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hq-design-services.com/favicon.png"
        }
      },
      "description": pageDesc,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      }
    }

    schemaScript.textContent = JSON.stringify(schemaData, null, 2)
  }
})

// Cleanup schema on unmount to prevent DOM pollution
onUnmounted(() => {
  const schemaScript = document.getElementById('blog-post-schema')
  if (schemaScript) {
    schemaScript.remove()
  }
})

const defaultContent = `
  <p class="text-lg font-medium text-slate-900 dark:text-white">
    Building a dream villa or remodeling a commercial space in Lahore requires combining contemporary aesthetics with local municipal guidelines. In this guide, our senior architects walk you through essential design considerations.
  </p>
  <h3>1. Floor Plan Optimization & Bylaw Compliance</h3>
  <p>
    In societies like Parkview City and DHA Lahore, structural setbacks, height restrictions, and ventilation shafts must be strictly calculated. Our team utilizes 3ds Max and Revit to create precise 2D blueprints ensuring immediate municipal approval.
  </p>
  <h3>2. 4K 3D Photorealistic Visualizations</h3>
  <p>
    Before ground excavation begins, seeing 3D photorealistic renderings of your villa facade and interior rooms prevents costly material alterations. You can preview Spanish tiles, LED illumination, and wooden paneling in realistic 4K lighting.
  </p>
  <h3>3. Luxury Interior Material Selection</h3>
  <p>
    From Italian Statuario marble to custom rosewood cabinetry, selecting durable yet luxurious materials ensures your living space maintains timeless elegance for decades to come.
  </p>
`
</script>
