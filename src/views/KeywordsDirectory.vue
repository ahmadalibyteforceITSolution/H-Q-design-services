<template>
  <div class="space-y-12 pb-20">
    <!-- Hero Banner for Knowledge Index -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(#088C7E_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
      
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Architecture & Construction Knowledge Index</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Architecture, Construction & <span class="text-gradient-hq">Design Glossary</span>
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            A comprehensive reference library and terminology index for homeowners, developers, and builders in Pakistan. Browse spatial specifications for 3 Marla to 4 Kanal villas, 3D elevation parameters, municipal bylaws, and itemized construction standards.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Section -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Architectural Reference Guide Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span class="text-xs font-bold uppercase text-[#088C7E]">Plot Sizes & Covered Areas</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Standard Plot Dimensions in Pakistan</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            5 Marla (25'x45' = 1,125 sq.ft with ~2,000-2,200 sq.ft covered area), 10 Marla (35'x65' or 35'x70' = 2,250 sq.ft with ~3,500 sq.ft covered area), 1 Kanal (50'x90' = 4,500 sq.ft with ~5,500-6,500 sq.ft covered area).
          </p>
        </div>
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span class="text-xs font-bold uppercase text-amber-500">Structural Terminology</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Engineering Standards (BCP & UBC)</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Grade 60 Steel (60,000 PSI yield strength), 3000 PSI cylinder-tested concrete, DPC (Damp Proof Course) bitumen application, and seismic Zone 2B compliance preventing structural shearing.
          </p>
        </div>
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <span class="text-xs font-bold uppercase text-emerald-500">Municipal Bylaw Clearances</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">DHA, LDA & CDA Submission Maps</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Compulsory Open Space (COS) requirements, front setback lines, rainwater harvesting reservoirs, overhead water tank limits, and maximum building height ceilings (35-38 feet for residential).
          </p>
        </div>
      </div>

      <!-- Keyword Knowledge Filter Container -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-xl space-y-6">
        
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-book-open text-amber-300"></i>
                <span>Architectural Glossary & Topic Index</span>
              </span>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Curated Design Library
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-white">
              Explore Design Topics & Technical Standards
            </h2>
          </div>

          <!-- Quick Keyword Live Filter Search Input -->
          <div class="w-full md:w-80 shrink-0">
            <div class="relative">
              <i class="fa-solid fa-filter absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input 
                v-model="keywordSearchQuery" 
                type="text" 
                placeholder="Search topics (e.g. 5 Marla, DHA, Spanish)..." 
                class="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#088C7E] shadow-inner transition-colors"
              />
              <button 
                v-if="keywordSearchQuery" 
                @click="keywordSearchQuery = ''" 
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Category Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          <button 
            @click="selectedCategoryIndex = -1"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
              selectedCategoryIndex === -1 ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/40' : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            ]"
          >
            <i class="fa-solid fa-layer-group"></i>
            <span>All Categories ({{ allFlatKeywords.length }})</span>
          </button>

          <button 
            v-for="(cat, idx) in topKeywordsData" 
            :key="idx"
            @click="selectedCategoryIndex = idx"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5',
              selectedCategoryIndex === idx ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/40' : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-800'
            ]"
          >
            <i :class="cat.icon"></i>
            <span>{{ cat.category.split('(')[0].trim() }} ({{ cat.keywords.length }})</span>
          </button>
        </div>

        <!-- Categorized Keyword Chips Container -->
        <div class="space-y-6 pt-2">
          <div 
            v-for="(cat, idx) in filteredCategories" 
            :key="idx" 
            class="space-y-3 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80"
          >
            <!-- Category Title & Description -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-[#088C7E]/20 text-[#088C7E] flex items-center justify-center text-sm font-black">
                  <i :class="cat.icon"></i>
                </div>
                <div>
                  <h3 class="text-sm font-extrabold text-white">{{ cat.category }}</h3>
                  <p class="text-[11px] text-slate-400">{{ cat.description }}</p>
                </div>
              </div>
              <span class="text-[11px] font-mono text-emerald-400 font-bold self-start sm:self-auto">
                {{ cat.displayedKeywords.length }} Topics
              </span>
            </div>

            <!-- Keyword Tags Pill Cloud -->
            <div class="flex flex-wrap gap-2 pt-1">
              <router-link 
                v-for="kw in cat.displayedKeywords" 
                :key="kw"
                :to="getKeywordTargetLink(kw)"
                class="px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-[#088C7E] text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/50 hover:border-emerald-400/40 transition-all hover:scale-105 shadow-sm inline-flex items-center gap-1.5"
                :title="'Explore ' + kw"
              >
                <i class="fa-solid fa-compass-drafting text-[9px] text-[#088C7E] group-hover:text-white"></i>
                <span>{{ kw }}</span>
              </router-link>
            </div>

          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { topKeywordsData, allFlatKeywords, slugifyKeyword } from '../data/keywordsData.js'

const keywordSearchQuery = ref('')
const selectedCategoryIndex = ref(-1)

const filteredCategories = computed(() => {
  const q = keywordSearchQuery.value.trim().toLowerCase()
  let list = topKeywordsData

  if (selectedCategoryIndex.value !== -1) {
    list = [topKeywordsData[selectedCategoryIndex.value]]
  }

  return list.map((cat, origIdx) => {
    const matched = q 
      ? cat.keywords.filter(k => k.toLowerCase().includes(q))
      : cat.keywords
    return {
      ...cat,
      originalIndex: origIdx,
      displayedKeywords: matched
    }
  }).filter(cat => cat.displayedKeywords.length > 0)
})

const getKeywordTargetLink = (kw) => {
  return `/keywords/${slugifyKeyword(kw)}`
}
</script>
