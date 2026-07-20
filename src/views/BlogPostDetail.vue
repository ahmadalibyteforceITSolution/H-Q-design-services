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

    <!-- Content -->
    <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-base">
      <div v-html="activePost.content || defaultContent"></div>
    </article>

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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { allBlogs } from '../data/blogData.js'

defineEmits(['open-start-project'])

const route = useRoute()

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
    content: ''
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
