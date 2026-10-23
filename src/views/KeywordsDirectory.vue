<template>
  <div class="space-y-12 pb-20 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    <!-- Hero Banner for Knowledge Index (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">Architecture &amp; Construction Knowledge Index</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">TECHNICAL STANDARDS &amp; SPECIFICATIONS</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Architecture, Construction &amp; <span class="text-gradient-gold">Design Glossary</span>
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
        <div class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 shadow-xl space-y-2">
          <span class="text-xs font-black uppercase text-[#8C6A38] dark:text-[#DFC8A5]">Plot Sizes &amp; Covered Areas</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Standard Plot Dimensions in Pakistan</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            5 Marla (25'x45' = 1,125 sq.ft with ~2,000-2,200 sq.ft covered area), 10 Marla (35'x65' or 35'x70' = 2,250 sq.ft with ~3,500 sq.ft covered area), 1 Kanal (50'x90' = 4,500 sq.ft with ~5,500-6,500 sq.ft covered area).
          </p>
        </div>
        <div class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 shadow-xl space-y-2">
          <span class="text-xs font-black uppercase text-amber-500">Structural Terminology</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">Engineering Standards (BCP &amp; UBC)</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Grade 60 Steel (60,000 PSI yield strength), 3000 PSI cylinder-tested concrete, DPC (Damp Proof Course) bitumen application, and seismic Zone 2B compliance preventing structural shearing.
          </p>
        </div>
        <div class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 shadow-xl space-y-2">
          <span class="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400">Municipal Bylaw Clearances</span>
          <h3 class="font-extrabold text-slate-900 dark:text-white text-base">DHA, LDA &amp; CDA Submission Maps</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            Compulsory Open Space (COS) requirements, front setback lines, rainwater harvesting reservoirs, overhead water tank limits, and maximum building height ceilings (35-38 feet for residential).
          </p>
        </div>
      </div>

      <!-- Strategy Clusters Section: 10 Core SEO Pillars -->
      <section class="space-y-6">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 mb-2">
              <i class="fa-solid fa-bullseye text-[#C5A880]"></i>
              <span>High-Intent Architectural Pillars</span>
            </div>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Targeted Keyword Strategy Hub <span class="text-gradient-gold">(10 Pillars)</span>
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl pt-1 font-medium">
              Explore specialized search clusters across residential luxury, commercial architecture, 3D visualizations, and turnkey construction with direct links to our core service portfolios and dedicated topic specifications.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="cluster in keywordClusterMap" 
            :key="cluster.id"
            class="p-6 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-[#C5A880] transition-all flex flex-col justify-between space-y-4 group"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-2xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center text-lg border border-[#C5A880]/30">
                  <i :class="cluster.icon"></i>
                </div>
                <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 uppercase tracking-wider">
                  {{ cluster.intent }}
                </span>
              </div>

              <div>
                <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">
                  {{ cluster.name }}
                </h3>
                <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 font-medium">
                  {{ cluster.description }}
                </p>
              </div>

              <!-- Sample Keywords Pills -->
              <div class="space-y-1.5 pt-1">
                <span class="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">Top Queries:</span>
                <div class="flex flex-wrap gap-1.5">
                  <router-link 
                    v-for="kw in cluster.keywords.slice(0, 5)" 
                    :key="kw"
                    :to="'/keywords/' + slugifyKeyword(kw)"
                    class="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-[#C5A880] text-slate-800 dark:text-slate-300 hover:text-[#0B0E14] text-[11px] font-bold border border-slate-200 dark:border-white/10 transition-all"
                  >
                    {{ kw }}
                  </router-link>
                  <span v-if="cluster.keywords.length > 5" class="px-2 py-1 rounded-md text-[10px] text-slate-500 dark:text-slate-400 font-bold self-center">
                    +{{ cluster.keywords.length - 5 }} more
                  </span>
                </div>
              </div>
            </div>

            <!-- Target Core Page CTA -->
            <div class="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <router-link 
                :to="cluster.targetPage"
                class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] hover:underline flex items-center gap-1 group/btn"
              >
                <span>Visit {{ cluster.targetPageLabel }}</span>
                <i class="fa-solid fa-arrow-right text-[10px] group-hover/btn:translate-x-1 transition-transform"></i>
              </router-link>
              <button 
                @click="filterByCluster(cluster)"
                class="text-[11px] font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                Filter glossary ↓
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Keyword Knowledge Filter Container -->
      <div id="glossary-filter" class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 shadow-xl space-y-6 text-slate-900 dark:text-white">
        
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase tecture-btn-gold tracking-wider flex items-center gap-1.5 shadow-sm">
                <i class="fa-solid fa-book-open"></i>
                <span>Architectural Glossary &amp; Topic Index</span>
              </span>
              <span class="px-3 py-1 rounded-full text-[10px] font-bold bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30">
                Curated Design Library
              </span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Explore Design Topics &amp; Technical Standards
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
                class="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 transition-colors font-medium"
              />
              <button 
                v-if="keywordSearchQuery" 
                @click="keywordSearchQuery = ''" 
                class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white text-xs cursor-pointer"
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
              'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border tracking-wider',
              selectedCategoryIndex === -1 
                ? 'tecture-btn-gold shadow-md border-[#C5A880]' 
                : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#C5A880]'
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
              'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border tracking-wider',
              selectedCategoryIndex === idx 
                ? 'tecture-btn-gold shadow-md border-[#C5A880]' 
                : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#C5A880]'
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
            class="space-y-3 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 shadow-sm"
          >
            <!-- Category Title & Description -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-white/10 pb-3">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-xl bg-[#C5A880]/15 text-[#C5A880] flex items-center justify-center text-sm font-black border border-[#C5A880]/30">
                  <i :class="cat.icon"></i>
                </div>
                <div>
                  <h3 class="text-sm font-extrabold text-slate-900 dark:text-white">{{ cat.category }}</h3>
                  <p class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{{ cat.description }}</p>
                </div>
              </div>
              <span class="text-[11px] font-mono text-[#8C6A38] dark:text-[#DFC8A5] font-extrabold self-start sm:self-auto">
                {{ cat.displayedKeywords.length }} Topics
              </span>
            </div>

            <!-- Keyword Tags Pill Cloud -->
            <div class="flex flex-wrap gap-2 pt-1">
              <router-link 
                v-for="kw in cat.displayedKeywords" 
                :key="kw"
                :to="getKeywordTargetLink(kw)"
                class="px-3 py-1.5 rounded-full bg-white dark:bg-[#0B0E14] hover:bg-[#C5A880] text-slate-800 dark:text-slate-200 hover:text-[#0B0E14] text-xs font-bold border border-slate-200 dark:border-white/10 hover:border-[#C5A880] transition-all hover:scale-105 shadow-sm inline-flex items-center gap-1.5"
                :title="'Explore ' + kw"
              >
                <i class="fa-solid fa-compass-drafting text-[9px] text-[#C5A880]"></i>
                <span>{{ kw }}</span>
              </router-link>
            </div>

          </div>
        </div>

      </div>
    </main>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { topKeywordsData, allFlatKeywords, slugifyKeyword, keywordClusterMap } from '../data/keywordsData.js'

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

const filterByCluster = (cluster) => {
  keywordSearchQuery.value = cluster.name.split(' ')[0]
  const el = document.getElementById('glossary-filter')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Inject DefinedTermSet & CollectionPage Structured Data Schema
onMounted(() => {
  const schemaId = 'keywords-directory-schema'
  let script = document.getElementById(schemaId)
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('id', schemaId)
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }

  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Architecture, Construction & Design Glossary | H&Q Design Services",
    "description": "Comprehensive reference library and terminology index covering residential villas, 3D elevations, structural engineering, and municipal bylaws in Pakistan.",
    "url": "https://h-q-design-services.vercel.app/keywords-directory",
    "mainEntity": {
      "@type": "DefinedTermSet",
      "name": "Architecture & Real Estate Terminology Pakistan",
      "hasDefinedTerm": keywordClusterMap.map(cluster => ({
        "@type": "DefinedTerm",
        "name": cluster.name,
        "description": cluster.description,
        "url": `https://h-q-design-services.vercel.app${cluster.targetPage}`
      }))
    }
  }

  script.textContent = JSON.stringify(directorySchema, null, 2)
})
</script>