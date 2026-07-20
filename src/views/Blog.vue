<template>
  <div class="py-12 space-y-16">
    
    <!-- Hero Header (Zameen Style) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/20 text-[#088C7E] border border-[#088C7E]/40 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-newspaper text-amber-300"></i> H&Q Architecture & Real Estate Blog
          </span>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
            Explore 100+ Architectural & <span class="text-gradient-zameen">Interior Guides</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Expert articles on floor planning, Parkview City guidelines, DHA Lahore bylaws, 4K 3D visualization, and luxury interior styling.
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
              placeholder="Search 100+ articles (e.g., DHA, 3D, Parkview)..."
              class="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-[#088C7E]"
            />
            <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-3.5 text-slate-400 text-xs"></i>
          </div>

          <!-- Total Count Badge -->
          <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
            Found <strong class="text-[#088C7E]">{{ filteredPosts.length }}</strong> Articles
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

    <!-- 100 Blog Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in paginatedPosts" 
          :key="post.id"
          class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="relative h-56 overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-bold shadow">
                {{ post.category }}
              </div>
            </div>
            <div class="p-6 space-y-3">
              <div class="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center justify-between">
                <span><i class="fa-solid fa-calendar text-[#088C7E] mr-1"></i> {{ post.date }}</span>
                <span><i class="fa-solid fa-clock text-amber-500 mr-1"></i> {{ post.readTime }}</span>
              </div>
              <h3 class="text-lg font-extrabold group-hover:text-[#088C7E] transition-colors leading-snug line-clamp-2">{{ post.title }}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">{{ post.excerpt }}</p>
            </div>
          </div>

          <div class="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/60">
            <router-link 
              :to="`/blog/${post.slug}`" 
              class="text-xs font-extrabold text-[#088C7E] hover:underline flex items-center justify-between"
            >
              <span>Read Full Article</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </router-link>
          </div>
        </article>
      </div>
    </section>

    <!-- Interactive Pagination Bar (1, 2, 3, 4, 5, 6, 7, 8, 9...) -->
    <section v-if="totalPages > 1" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-2">
      <button 
        @click="currentPage--" 
        :disabled="currentPage === 1"
        class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
      >
        ← Prev
      </button>

      <div class="flex items-center gap-1 overflow-x-auto max-w-xs sm:max-w-md px-2">
        <button 
          v-for="page in totalPages" 
          :key="page"
          @click="currentPage = page"
          :class="[
            'w-9 h-9 rounded-xl text-xs font-extrabold transition-all cursor-pointer shrink-0',
            currentPage === page 
              ? 'bg-[#088C7E] text-white shadow-md' 
              : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#088C7E]'
          ]"
        >
          {{ page }}
        </button>
      </div>

      <button 
        @click="currentPage++" 
        :disabled="currentPage === totalPages"
        class="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer"
      >
        Next →
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

const categories = ['All', 'Parkview City News', 'DHA Bylaws', '3D Renders & Tech', 'Interior Styling', '10 Marla & 1 Kanal', 'Commercial Plazas']

const selectCategory = (cat) => {
  selectedCat.value = cat
  currentPage.value = 1
}

const filteredPosts = computed(() => {
  return allBlogs.filter(p => {
    const matchesCat = selectedCat.value === 'All' || p.category === selectedCat.value
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          p.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
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
</script>
