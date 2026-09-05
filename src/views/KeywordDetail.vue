<template>
  <div class="space-y-12 pb-24">
    <!-- Top Hero Banner with Dynamic Keyword Info -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(#088C7E_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none"></div>
      
      <div class="max-w-[1440px] mx-auto space-y-6 relative z-10">
        
        <!-- Breadcrumb -->
        <nav aria-label="Breadcrumb" class="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] flex items-center gap-1 transition-colors">
            <i class="fa-solid fa-house text-[10px]"></i>
            <span>Home</span>
          </router-link>
          <span>/</span>
          <router-link to="/keywords-directory" class="hover:text-[#088C7E] transition-colors">
            Glossary & Directory
          </router-link>
          <span>/</span>
          <span class="text-slate-400">{{ categoryName }}</span>
          <span>/</span>
          <span class="text-white font-bold truncate max-w-xs sm:max-w-md">{{ activeKeyword }}</span>
        </nav>

        <!-- Header Title & Badges -->
        <div class="max-w-4xl space-y-4">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="px-3.5 py-1 rounded-full text-xs font-black uppercase bg-[#088C7E] text-white tracking-wider flex items-center gap-1.5 shadow-md">
              <i :class="categoryIcon"></i>
              <span>{{ categoryName }}</span>
            </span>
            <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <i class="fa-solid fa-stamp text-[10px]"></i>
              <span>PCATP & PEC Vetted Standards</span>
            </span>
            <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <i class="fa-solid fa-calendar-check text-[10px]"></i>
              <span>2026 Updated Rates</span>
            </span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {{ activeKeyword }}
          </h1>

          <p class="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
            Complete 2026 architectural blueprints, 3D elevation renderings, spatial floor planning, and turnkey construction cost benchmarks for <strong>{{ activeKeyword }}</strong> in Lahore, Islamabad, and major cities of Pakistan.
          </p>

          <!-- Quick Consultation Action Bar -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <a 
              :href="whatsappUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Blueprint Quote</span>
            </a>
            <a 
              href="tel:03416887454" 
              class="px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2"
            >
              <i class="fa-solid fa-phone text-xs"></i>
              <span>Call: 0341-6887454</span>
            </a>
            <router-link 
              to="/tools" 
              class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold transition-all border border-slate-700 flex items-center gap-2"
            >
              <i class="fa-solid fa-calculator text-amber-400"></i>
              <span>Construction Cost Calculator</span>
            </router-link>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content Area -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- Left 8 Columns: Main Article, Elevation Visuals, & Technical Specs -->
        <div class="lg:col-span-8 space-y-8">
          
          <!-- Visual Architectural Render Card -->
          <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-xl relative group">
            <div class="h-80 sm:h-[450px] w-full overflow-hidden relative">
              <img 
                :src="keywordImage" 
                :alt="activeKeyword + ' - 3D Architectural Rendering'" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>
              
              <!-- Image Caption Overlays -->
              <div class="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
                <div class="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                  <i class="fa-solid fa-camera text-amber-400"></i>
                  <span>H&Q 4K Photorealistic Facade Visualization</span>
                </div>
                <div class="bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-xs font-semibold border border-white/20 flex items-center gap-1.5 text-emerald-400">
                  <i class="fa-solid fa-building-circle-check"></i>
                  <span>DHA & LDA Bylaw Compliant</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Technical Parameters & Key Architectural Highlights Table -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span class="text-xs font-extrabold uppercase text-[#088C7E] tracking-wider">Spatial & Engineering Benchmark</span>
                <h3 class="text-xl font-black text-slate-900 dark:text-white">Technical Specifications & Cost Matrix</h3>
              </div>
              <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Pakistan Building Code 2026
              </span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">Topic / Classification</span>
                <div class="font-black text-slate-900 dark:text-white text-sm truncate">{{ activeKeyword }}</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">Steel Specification</span>
                <div class="font-black text-slate-900 dark:text-white text-sm">Grade 60 Deformed Rebar</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">Concrete Strength</span>
                <div class="font-black text-slate-900 dark:text-white text-sm">3,000 - 4,000 PSI Cylinder</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">Grey Structure Rate (2026)</span>
                <div class="font-black text-[#088C7E] text-sm">PKR 3,000 - 3,400 / Sq.Ft</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">A+ Turnkey Finishing Rate</span>
                <div class="font-black text-amber-500 text-sm">PKR 6,500 - 7,800 / Sq.Ft</div>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <span class="text-slate-500 dark:text-slate-400 font-medium">Seismic Safety Standard</span>
                <div class="font-black text-slate-900 dark:text-white text-sm">Zone 2B UBC-97 / BCP</div>
              </div>
            </div>

            <!-- Municipal Approvals Guidance -->
            <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 flex items-start gap-3 text-xs">
              <i class="fa-solid fa-circle-check text-emerald-500 text-base mt-0.5"></i>
              <div class="space-y-1">
                <div class="font-bold text-slate-900 dark:text-white">Municipal Submission & NOC Guarantee</div>
                <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                  All blueprints for <em>{{ activeKeyword }}</em> are drafted by licensed PCATP architects in strict alignment with DHA Lahore, LDA, CDA, SBCA, and Bahria Town town-planning bylaws to ensure immediate sanctioning.
                </p>
              </div>
            </div>
          </div>

          <!-- In-Depth Architectural Guide Content -->
          <div class="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            <article class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-6 leading-relaxed text-sm sm:text-base">
              <div v-html="articleHtml"></div>
            </article>

            <!-- Social Sharing -->
            <div class="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                <i class="fa-solid fa-share-nodes text-[#088C7E]"></i>
                <span>Share This Topic</span>
              </div>
              <div class="flex items-center gap-2">
                <a 
                  :href="'https://api.whatsapp.com/send?text=' + encodeURIComponent(activeKeyword + ' - ' + currentUrl)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl flex items-center justify-center bg-emerald-600 text-white text-sm hover:scale-105 transition-transform"
                  title="Share on WhatsApp"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
                <a 
                  :href="'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(currentUrl)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-700 text-white text-sm hover:scale-105 transition-transform"
                  title="Share on LinkedIn"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a 
                  :href="'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(currentUrl)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-600 text-white text-sm hover:scale-105 transition-transform"
                  title="Share on Facebook"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a 
                  :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(currentUrl) + '&text=' + encodeURIComponent(activeKeyword)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-900 dark:bg-black border border-slate-700 text-white text-sm hover:scale-105 transition-transform"
                  title="Share on X"
                >
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Frequently Asked Questions for this Keyword -->
          <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div class="space-y-1">
              <span class="text-xs font-extrabold uppercase text-[#088C7E] tracking-wider">Client Inquiries & Clarifications</span>
              <h3 class="text-xl font-black text-slate-900 dark:text-white">Frequently Asked Questions: {{ activeKeyword }}</h3>
            </div>

            <div class="space-y-4 text-xs sm:text-sm">
              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 class="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-question text-[#088C7E]"></i>
                  <span>How long does it take to prepare 2D floor plans and 3D elevations for {{ activeKeyword }}?</span>
                </h4>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  Standard 2D architectural drawings and municipal submission blueprints take 7 to 10 working days. A complete design package including 4K photorealistic 3D elevations, MEP engineering layouts, and structural vetting takes approximately 2 to 3 weeks.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 class="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-question text-[#088C7E]"></i>
                  <span>Does H&Q Design Services provide on-site supervision in Lahore and DHA?</span>
                </h4>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  Yes. Our resident site engineers conduct rigorous phase-wise inspections during foundation excavation, steel rebar binding, slab casting, and plumbing pressure tests to ensure 100% adherence to architectural drawings.
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 class="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <i class="fa-solid fa-circle-question text-[#088C7E]"></i>
                  <span>Can I request turnkey construction cost estimates with material brand specifications?</span>
                </h4>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                  Certainly. We provide comprehensive Bill of Quantities (BOQ) with transparent line-item pricing covering Mughal/Amreli Grade 60 steel, Bestway cement, imported porcelain tiles, Chawla aluminum, and Grohe/Kohler bathroom fittings.
                </p>
              </div>
            </div>
          </div>

        </div>

        <!-- Right 4 Columns: Sticky Sidebar with Lead Form, Related Keywords & Fast Links -->
        <aside class="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
          
          <!-- Consultation Card -->
          <div class="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-xl space-y-5">
            <div class="space-y-2">
              <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider flex items-center gap-1.5 w-fit">
                <i class="fa-solid fa-headset text-amber-300"></i>
                <span>Direct Architect Line</span>
              </span>
              <h3 class="text-lg font-black text-white">Consult H&Q Chief Architect</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Discuss plot dimensions, 3D elevation themes, and budget planning for <strong>{{ activeKeyword }}</strong>.
              </p>
            </div>

            <div class="space-y-2.5">
              <a 
                :href="whatsappUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <i class="fa-brands fa-whatsapp text-base"></i>
                <span>WhatsApp Instant Inquiry</span>
              </a>

              <a 
                href="tel:03416887454" 
                class="w-full py-3.5 px-4 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <i class="fa-solid fa-phone text-xs"></i>
                <span>Call: 0341-6887454</span>
              </a>
            </div>

            <div class="pt-3 border-t border-slate-800 space-y-2 text-[11px] text-slate-400">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-location-dot text-[#088C7E]"></i>
                <span>Studio: Parkview City & DHA Lahore</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-clock text-amber-400"></i>
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>

          <!-- Quick Navigation Tools Widget -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-toolbox text-[#088C7E]"></i>
              <span>Architectural Tools</span>
            </h4>
            
            <div class="space-y-2 text-xs font-semibold">
              <router-link 
                to="/tools" 
                class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-[#088C7E]/10 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between group transition-colors"
              >
                <span class="text-slate-700 dark:text-slate-300 group-hover:text-[#088C7E]">2026 Cost Calculator</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#088C7E]"></i>
              </router-link>

              <router-link 
                to="/portfolio" 
                class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-[#088C7E]/10 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between group transition-colors"
              >
                <span class="text-slate-700 dark:text-slate-300 group-hover:text-[#088C7E]">3D Elevation Portfolio</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#088C7E]"></i>
              </router-link>

              <router-link 
                to="/area-guides" 
                class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-[#088C7E]/10 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between group transition-colors"
              >
                <span class="text-slate-700 dark:text-slate-300 group-hover:text-[#088C7E]">DHA & Bahria Town Guides</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#088C7E]"></i>
              </router-link>

              <router-link 
                to="/keywords-directory" 
                class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-[#088C7E]/10 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between group transition-colors"
              >
                <span class="text-slate-700 dark:text-slate-300 group-hover:text-[#088C7E]">Complete 3,000+ Keyword Directory</span>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:text-[#088C7E]"></i>
              </router-link>
            </div>
          </div>

          <!-- Related Respective Keyword Pages Tag Cloud -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-tags text-emerald-500"></i>
                <span>Related Topics & Pages</span>
              </h4>
              <router-link to="/keywords-directory" class="text-[11px] font-bold text-[#088C7E] hover:underline">
                View All
              </router-link>
            </div>

            <p class="text-[11px] text-slate-500 dark:text-slate-400">
              Browse dedicated architectural design pages in <strong>{{ categoryName }}</strong>:
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              <router-link 
                v-for="relKw in relatedKeywords" 
                :key="relKw"
                :to="'/keywords/' + slugifyKeyword(relKw)"
                class="px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-[#088C7E] text-slate-700 dark:text-slate-300 hover:text-white text-[11px] font-semibold transition-all border border-slate-200/80 dark:border-slate-700/60 hover:border-emerald-400/40 truncate max-w-full"
                :title="'Explore ' + relKw"
              >
                <i class="fa-solid fa-arrow-right text-[8px] mr-1 text-[#088C7E] group-hover:text-white"></i>
                <span>{{ relKw }}</span>
              </router-link>
            </div>
          </div>

        </aside>

      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, watchEffect, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { topKeywordsData, allFlatKeywords, slugifyKeyword, getKeywordBySlug } from '../data/keywordsData.js'
import { getCategoryForKeyword, generateArticleContent, architectureImages } from '../data/blogData.js'

const route = useRoute()

// Active Keyword Resolution
const activeKeyword = computed(() => {
  const rawSlug = route.params.slug
  if (!rawSlug) return '5 Marla House Design'
  return getKeywordBySlug(rawSlug)
})

// Active Category Name
const categoryName = computed(() => {
  return getCategoryForKeyword(activeKeyword.value)
})

// Category Icon
const categoryIcon = computed(() => {
  const lower = categoryName.value.toLowerCase()
  if (lower.includes('house') || lower.includes('size')) return 'fa-solid fa-house-chimney'
  if (lower.includes('interior')) return 'fa-solid fa-couch'
  if (lower.includes('architectural') || lower.includes('3d')) return 'fa-solid fa-cube'
  if (lower.includes('society') || lower.includes('cities')) return 'fa-solid fa-map-location-dot'
  return 'fa-solid fa-calculator'
})

// Representative Image
const keywordImage = computed(() => {
  const kw = activeKeyword.value
  let hash = 0
  for (let i = 0; i < kw.length; i++) {
    hash = (hash << 5) - hash + kw.charCodeAt(i)
    hash |= 0
  }
  const idx = Math.abs(hash) % architectureImages.length
  return architectureImages[idx]
})

// Article Body Content HTML
const articleHtml = computed(() => {
  return generateArticleContent(activeKeyword.value, categoryName.value, 1)
})

// Related Keywords in the same category
const relatedKeywords = computed(() => {
  const catObj = topKeywordsData.find(c => {
    const cLower = c.category.toLowerCase()
    const myCatLower = categoryName.value.toLowerCase()
    return cLower.includes(myCatLower.slice(0, 10)) || myCatLower.includes(cLower.slice(0, 10))
  })

  let pool = catObj ? catObj.keywords : allFlatKeywords
  const filtered = pool.filter(k => k.toLowerCase() !== activeKeyword.value.toLowerCase())

  // Pick 12 related keywords deterministically based on activeKeyword length
  const startIndex = Math.abs(activeKeyword.value.length * 7) % Math.max(1, filtered.length - 12)
  return filtered.slice(startIndex, startIndex + 12)
})

// Contact Links
const currentUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.href
  }
  return `https://h-q-design-services.vercel.app/keywords/${slugifyKeyword(activeKeyword.value)}`
})

const whatsappUrl = computed(() => {
  const msg = `Hello H&Q Design Services! I am interested in blueprints, 3D elevations, and construction cost consultation regarding: ${activeKeyword.value}`
  return `https://wa.me/923416887454?text=${encodeURIComponent(msg)}`
})

// Dynamic SEO & Structured Data
watchEffect(() => {
  if (typeof document === 'undefined') return

  const kw = activeKeyword.value
  const slug = slugifyKeyword(kw)
  const canonicalUrl = `https://h-q-design-services.vercel.app/keywords/${slug}`
  const pageTitle = `${kw} | 2026 Architectural Plan & Cost | H&Q Studio Lahore`
  const pageDesc = `Comprehensive 2026 architectural designs, 3D elevations, floor plans, and construction cost estimates for ${kw} in Pakistan. Consult H&Q Senior Architects.`
  const pageImage = keywordImage.value

  // Update Page Title
  document.title = pageTitle

  // Canonical Tag
  let canonicalLinks = document.querySelectorAll('link[rel="canonical"]')
  if (canonicalLinks.length > 1) {
    for (let i = 1; i < canonicalLinks.length; i++) {
      canonicalLinks[i].remove()
    }
  }
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

  // Twitter Tags
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

  // Schema.org WebPage & Service
  const pageSchemaId = 'keyword-page-schema'
  let pageSchemaScript = document.getElementById(pageSchemaId)
  if (!pageSchemaScript) {
    pageSchemaScript = document.createElement('script')
    pageSchemaScript.setAttribute('id', pageSchemaId)
    pageSchemaScript.setAttribute('type', 'application/ld+json')
    document.head.appendChild(pageSchemaScript)
  }

  const pageSchemaData = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": pageTitle,
    "description": pageDesc,
    "url": canonicalUrl,
    "image": pageImage,
    "provider": {
      "@type": "Organization",
      "name": "H&Q Design Services",
      "telephone": "+923416887454",
      "url": "https://h-q-design-services.vercel.app/"
    }
  }
  pageSchemaScript.textContent = JSON.stringify(pageSchemaData, null, 2)

  // Schema.org Breadcrumbs
  const breadcrumbSchemaId = 'keyword-breadcrumb-schema'
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
        "name": "Keywords Directory",
        "item": "https://h-q-design-services.vercel.app/keywords-directory"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": kw,
        "item": canonicalUrl
      }
    ]
  }
  breadcrumbScript.textContent = JSON.stringify(breadcrumbData, null, 2)

  // Schema.org FAQPage
  const faqSchemaId = 'keyword-faq-schema'
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
        "name": `How long does it take to prepare 2D floor plans and 3D elevations for ${kw}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard 2D architectural drawings and municipal submission blueprints take 7 to 10 working days. A complete design package including 4K photorealistic 3D elevations, MEP engineering layouts, and structural vetting takes approximately 2 to 3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": `Does H&Q Design Services provide on-site supervision for ${kw}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our resident site engineers conduct rigorous phase-wise inspections during foundation excavation, steel rebar binding, slab casting, and plumbing pressure tests to ensure 100% adherence to architectural drawings."
        }
      }
    ]
  }
  faqScript.textContent = JSON.stringify(faqData, null, 2)
})

onUnmounted(() => {
  ['keyword-page-schema', 'keyword-breadcrumb-schema', 'keyword-faq-schema'].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.remove()
  })
})
</script>
