<template>
  <div class="py-12 space-y-16">
    
    <!-- Hero Header -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/20 text-[#088C7E] border border-[#088C7E]/40 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-compass-drafting text-amber-300"></i> H&Q Architecture & Design Knowledge Base
          </span>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
            Explore 1,000+ Architectural & <span class="text-gradient-hq">Interior Guides</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            The most extensive architectural library in Pakistan. In-depth analysis on 3 Marla to 4 Kanal floor plans, DHA bylaws, 4K 3D visualization, turnkey interior finishes, and 2026 construction rates.
          </p>
        </div>
      </div>
    </section>

    <!-- Search & Filter Bar -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <!-- Real-Time Search Bar -->
          <div class="w-full md:w-96 relative">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search 2,000+ topics (e.g., 5 Marla, DHA Phase 6, Travertine, Italian Marble, Cost)..."
              class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#088C7E]"
            />
            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-slate-400 text-xs"></i>
          </div>

          <!-- Total Count Badge -->
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
            Showing <strong class="text-[#088C7E]">{{ filteredPosts.length }}</strong> Architecture Guides (Page {{ currentPage }} of {{ totalPages || 1 }})
          </span>
        </div>

        <!-- Category Pills -->
        <div class="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="selectCategory(cat)"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase cursor-pointer',
              selectedCat === cat 
                ? 'bg-[#088C7E] text-white shadow-md' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#088C7E]'
            ]"
          >
            {{ cat }}
          </button>
        </div>

      </div>
    </section>

    <!-- 2,000+ Articles Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="paginatedPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in paginatedPosts" 
          :key="post.id"
          class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="relative h-56 overflow-hidden">
              <img :src="post.image" :alt="post.title" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-bold shadow">
                {{ post.category }}
              </div>
            </div>
            <div class="p-6 space-y-3">
              <div class="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-between">
                <span><i class="fa-solid fa-calendar text-[#088C7E] mr-1"></i> {{ post.date }}</span>
                <span><i class="fa-solid fa-clock text-amber-500 mr-1"></i> {{ post.readTime }}</span>
              </div>
              <h3 class="text-base font-extrabold group-hover:text-[#088C7E] transition-colors leading-snug line-clamp-2">{{ post.title }}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </div>

          <div class="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <router-link 
              :to="`/blog/${post.slug}`" 
              class="text-xs font-extrabold text-[#088C7E] hover:underline flex items-center justify-between"
            >
              <span>Read Full Guide</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </router-link>
          </div>
        </article>
      </div>

      <!-- No Results State -->
      <div v-else class="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
        <i class="fa-solid fa-magnifying-glass text-4xl text-slate-400 mb-3"></i>
        <h3 class="text-lg font-bold text-slate-800 dark:text-slate-200">No architecture guides found matching "{{ searchQuery }}"</h3>
        <p class="text-xs text-slate-500 mt-1">Try searching for keywords like "5 Marla", "10 Marla Spanish", "DHA", "Interior", "Bylaws", or reset filter.</p>
        <button @click="searchQuery = ''; selectedCat = 'All'" class="mt-4 px-4 py-2 bg-[#088C7E] text-white text-xs font-bold rounded-xl cursor-pointer">
          Reset All Filters
        </button>
      </div>
    </section>

    <!-- Smart Sliding Pagination Bar for 2,000+ Articles -->
    <section v-if="totalPages > 1" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-2">
      <!-- First Page -->
      <button 
        @click="goToPage(1)" 
        :disabled="currentPage === 1"
        class="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
        title="First Page"
      >
        <i class="fa-solid fa-angles-left"></i>
      </button>

      <!-- Prev Page -->
      <button 
        @click="goToPage(currentPage - 1)" 
        :disabled="currentPage === 1"
        class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
      >
        ← Prev
      </button>

      <!-- Page Numbers with Sliding Window & Ellipses -->
      <div class="flex items-center gap-1">
        <template v-for="page in visiblePages" :key="page">
          <span v-if="page === '...'" class="px-2 text-xs font-bold text-slate-400">...</span>
          <button 
            v-else
            @click="goToPage(page)"
            :class="[
              'w-9 h-9 rounded-xl text-xs font-extrabold transition-all cursor-pointer shrink-0',
              currentPage === page 
                ? 'bg-[#088C7E] text-white shadow-md scale-105' 
                : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#088C7E]'
            ]"
          >
            {{ page }}
          </button>
        </template>
      </div>

      <!-- Next Page -->
      <button 
        @click="goToPage(currentPage + 1)" 
        :disabled="currentPage === totalPages"
        class="px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
      >
        Next →
      </button>

      <!-- Last Page -->
      <button 
        @click="goToPage(totalPages)" 
        :disabled="currentPage === totalPages"
        class="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
        title="Last Page"
      >
        <i class="fa-solid fa-angles-right"></i>
      </button>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allBlogs } from '../data/blogData.js'

const searchQuery = ref('')
const selectedCat = ref('All')
const currentPage = ref(1)
const itemsPerPage = 12

const categories = [
  'All', 
  'House Sizes & Layout Plans', 
  'Architectural Styles & 3D', 
  'Luxury Interior Design', 
  'Housing Societies & Bylaws', 
  '2026 Construction Rates & Costs'
]

const selectCategory = (cat) => {
  selectedCat.value = cat
  currentPage.value = 1
}

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 350, behavior: 'smooth' })
  }
}

const filteredPosts = computed(() => {
  const rawQuery = searchQuery.value.toLowerCase().trim()
  const normalizedQuery = rawQuery.replace(/h&q/g, 'handq').replace(/hs*ands*q/g, 'handq').replace(/hs*q/g, 'handq')
  const isBrandSearch = ['handq', 'hand q', 'h and q', 'h&q', 'hq'].includes(rawQuery) || normalizedQuery.includes('handq')

  return allBlogs.filter(p => {
    const matchesCat = selectedCat.value === 'All' || p.category === selectedCat.value
    if (!rawQuery) return matchesCat

    if (isBrandSearch) {
      return matchesCat
    }

    const matchesSearch = p.title.toLowerCase().includes(rawQuery) || 
                          p.excerpt.toLowerCase().includes(rawQuery) ||
                          (p.keyword && p.keyword.toLowerCase().includes(rawQuery))
    return matchesCat && matchesSearch
  })
})

const totalPages = computed(() => {
  return Math.ceil(filteredPosts.value.length / itemsPerPage)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredPosts.value.slice(start, start + itemsPerPage)
})

// Smart sliding window pagination generator
const visiblePages = computed(() => {
  const total = totalPages.value
  const current = currentPage.value
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages = []
  if (current <= 4) {
    pages.push(1, 2, 3, 4, 5, '...', total)
  } else if (current >= total - 3) {
    pages.push(1, '...', total - 4, total - 3, total - 2, total - 1, total)
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total)
  }
  return pages
})
</script>
