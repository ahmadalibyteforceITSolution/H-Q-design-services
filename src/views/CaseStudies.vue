<template>
  <div class="py-12 space-y-16 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Header in Signature Tecture Architectural Style -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 text-white overflow-hidden border border-slate-800 dark:border-white/10 shadow-2xl space-y-6">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4 relative z-10">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-3.5 py-1 rounded-full text-xs font-black bg-[#C5A880] text-[#0B0E14] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-file-signature text-[#0B0E14]"></i>
              <span>Architectural Case Studies &amp; Client Proof</span>
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#0B0E14]/80 text-[#DFC8A5] border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-emerald-400"></i>
              <span>100% DHA &amp; LDA Sanctioned</span>
            </span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Landmark Projects &amp; <span class="text-gradient-gold">Engineering Proof</span>
          </h1>

          <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            Detailed technical breakdowns of how H&amp;Q Design Services solves complex spatial challenges, secures municipal NOC approvals, and executes turnkey luxury residences across Lahore, Islamabad, and Saudi Arabia.
          </p>

          <!-- Quick Proof Counters -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-xs">
            <div>
              <span class="text-xl sm:text-2xl font-black text-gradient-gold font-mono block">500+</span>
              <span class="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Villas Designed</span>
            </div>
            <div>
              <span class="text-xl sm:text-2xl font-black text-gradient-gold font-mono block">100%</span>
              <span class="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Municipal Approval</span>
            </div>
            <div>
              <span class="text-xl sm:text-2xl font-black text-gradient-gold font-mono block">4K VR</span>
              <span class="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Lumion Renders</span>
            </div>
            <div>
              <span class="text-xl sm:text-2xl font-black text-gradient-gold font-mono block">0%</span>
              <span class="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Bylaw Penalties</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Category Filter Tabs -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        
        <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-bold">
          <button 
            v-for="cat in categories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2.5 rounded-full transition-all whitespace-nowrap cursor-pointer uppercase tracking-wider text-[11px] border',
              activeCategory === cat 
                ? 'tecture-btn-gold border-[#C5A880] shadow-lg' 
                : 'bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-[#C5A880] hover:text-slate-900 dark:hover:text-white'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <span class="text-xs text-slate-500 dark:text-slate-400 font-bold">
          Showing {{ filteredCaseStudies.length }} Detailed Case Studies
        </span>

      </div>
    </section>

    <!-- Case Studies Architectural Showcase List (Asymmetric Dossier Cards) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div 
        v-for="(cs, idx) in filteredCaseStudies" 
        :key="cs.id"
        class="tecture-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden relative group transition-all duration-300"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Case Study Technical Dossier (Left on Even, Right on Odd for Asymmetric Elegance) -->
          <div :class="[idx % 2 === 0 ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2', 'space-y-6']">
            
            <!-- Category & Landmark Tag Strip -->
            <div class="flex items-center justify-between gap-4 flex-wrap">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 text-xs font-black uppercase tracking-wider">
                  {{ cs.category }}
                </span>
                <span class="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400">
                  <i class="fa-solid fa-location-dot text-[#C5A880]"></i>
                  <span>{{ cs.location }}</span>
                </span>
              </div>
              
              <span class="font-mono text-xl sm:text-2xl font-black text-[#C5A880]">
                0{{ idx + 1 }} // CASE STUDY
              </span>
            </div>

            <!-- Case Study Title -->
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors leading-tight">
              {{ cs.title }}
            </h2>

            <!-- Key Architectural Specifications Row -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-xs">
              <div>
                <span class="text-slate-500 dark:text-slate-400 block text-[10px] font-bold uppercase tracking-wider">PLOT SCALE</span>
                <strong class="text-slate-900 dark:text-white font-extrabold">{{ cs.scale }}</strong>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400 block text-[10px] font-bold uppercase tracking-wider">COVERED AREA</span>
                <strong class="text-slate-900 dark:text-white font-extrabold">{{ cs.coveredArea }}</strong>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400 block text-[10px] font-bold uppercase tracking-wider">STYLE</span>
                <strong class="text-slate-900 dark:text-white font-extrabold">{{ cs.style }}</strong>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400 block text-[10px] font-bold uppercase tracking-wider">SANCTION</span>
                <strong class="text-emerald-600 dark:text-emerald-400 font-extrabold">{{ cs.compliance }}</strong>
              </div>
            </div>

            <!-- The Architectural Challenge (Dossier Callout) -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-1.5">
              <div class="text-[11px] font-black uppercase tracking-wider text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>The Architectural &amp; Structural Challenge</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {{ cs.challenge }}
              </p>
            </div>

            <!-- The H&Q Engineered Solution (Dossier Callout) -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border-2 border-[#C5A880]/40 space-y-1.5 shadow-sm">
              <div class="text-[11px] font-black uppercase tracking-wider text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-2">
                <i class="fa-solid fa-compass-drafting text-[#C5A880]"></i>
                <span>H&amp;Q Technical &amp; Interior Solution</span>
              </div>
              <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {{ cs.solution }}
              </p>
            </div>

            <!-- Included Deliverables Tag Pills -->
            <div class="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span class="text-slate-500 dark:text-slate-400 font-bold mr-1 text-[11px]">Deliverables:</span>
              <span 
                v-for="deliv in cs.deliverables" 
                :key="deliv"
                class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-white/10 font-bold text-[11px] flex items-center gap-1.5"
              >
                <i class="fa-solid fa-circle-check text-[#C5A880] text-[10px]"></i>
                <span>{{ deliv }}</span>
              </span>
            </div>

            <!-- Quantifiable Metrics / Results Grid (3 Key Stat Badges) -->
            <div class="grid grid-cols-3 gap-3 pt-2">
              <div 
                v-for="m in cs.metrics" 
                :key="m.label" 
                class="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center space-y-0.5"
              >
                <div class="text-lg sm:text-2xl font-black text-[#9E7D4E] dark:text-gradient-gold font-mono">
                  {{ m.val }}
                </div>
                <div class="text-[10px] text-slate-600 dark:text-slate-400 font-extrabold uppercase tracking-wider">
                  {{ m.label }}
                </div>
              </div>
            </div>

            <!-- Action CTAs Row -->
            <div class="pt-2 flex flex-wrap items-center gap-3">
              <button 
                @click="$emit('open-start-project')"
                class="px-6 py-3 rounded-full tecture-btn-gold text-xs shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-calendar-check text-xs"></i>
                <span>Discuss Similar Project</span>
              </button>

              <button 
                type="button"
                @click="openWhatsApp('923134487315', 'Hello H&Q Architects, I read your case study on ' + cs.title + ' and want a similar consultation for my plot in Lahore.')"
                class="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer border-0"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>WhatsApp Senior Architect</span>
              </button>

              <router-link 
                to="/tools?tab=cost-calc"
                class="px-5 py-3 rounded-full tecture-btn-outline text-xs flex items-center gap-2"
              >
                <i class="fa-solid fa-calculator text-[#C5A880]"></i>
                <span>Estimate 2026 BOQ</span>
              </router-link>
            </div>

          </div>

          <!-- Architectural Visual Showcase (Right on Even, Left on Odd) -->
          <div :class="[idx % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1', 'space-y-4']">
            <div 
              class="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl group/img cursor-pointer bg-black aspect-[4/3] sm:aspect-[16/11]"
              @click="openModal(cs)"
            >
              <img 
                :src="cs.image" 
                :alt="cs.title" 
                class="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700" 
              />
              
              <!-- Dark Vignette Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/90 via-transparent to-transparent pointer-events-none"></div>

              <!-- Top Location Badge -->
              <div class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0B0E14]/85 backdrop-blur-md text-white font-black text-xs border border-white/10 flex items-center gap-2">
                <i class="fa-solid fa-compass-drafting text-[#C5A880]"></i>
                <span>{{ cs.location }}</span>
              </div>

              <!-- Top Right Zoom Icon -->
              <div class="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0B0E14]/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity border border-white/10">
                <i class="fa-solid fa-expand text-xs text-[#DFC8A5]"></i>
              </div>

              <!-- Bottom Project Highlight Strip -->
              <div class="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#0B0E14]/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div class="text-[10px] text-[#DFC8A5] font-bold uppercase tracking-wider">COMPLETED LANDMARK</div>
                  <div class="text-xs font-bold text-slate-200 truncate">{{ cs.scale }} · {{ cs.style }}</div>
                </div>
                <span class="px-3 py-1 rounded-full text-[10px] font-black tecture-btn-gold uppercase">
                  Verified Blueprint
                </span>
              </div>
            </div>

            <!-- Thumbnail Sub-Gallery Row (Clickable) -->
            <div class="grid grid-cols-3 gap-2">
              <div 
                v-for="(subImg, sIdx) in cs.gallery" 
                :key="sIdx"
                @click="openModal(cs, subImg)"
                class="relative h-20 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 cursor-pointer group/thumb"
              >
                <img :src="subImg" :alt="cs.title + ' Gallery View ' + (sIdx + 1)" class="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-500" />
                <div class="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors"></div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>

    <!-- Bottom Consultation CTA in Tecture Frame -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-14 rounded-3xl bg-[#0B0E14] dark:bg-[#121620] border border-[#C5A880]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <span class="tecture-tag text-[#C5A880] block">YOUR ARCHITECTURAL VISION</span>
        <h3 class="text-3xl sm:text-5xl font-black text-white">
          Ready to Craft Your Next Architectural Landmark?
        </h3>
        <p class="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Whether you have a 5 Marla plot in DHA Phase 9, a 1 Kanal corner plot in Lake City, or a commercial high-rise in Gulberg, our Chief Architects will prepare your complete 2D layout, 3D elevation, and itemized 2026 BOQ.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button 
            @click="$emit('open-start-project')"
            class="px-8 py-4 rounded-full tecture-btn-gold text-xs shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-calendar-check text-xs"></i>
            <span>Schedule Studio Consultation</span>
          </button>

          <button 
            type="button"
            @click="openWhatsApp('923134487315', 'Hello H&Q Architects, I would like to schedule an in-person design consultation at your Lahore studio.')" 
            class="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xl flex items-center gap-2 cursor-pointer border-0"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Chat Directly on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

    <!-- Fullscreen Image / Blueprint Lightbox Modal -->
    <div 
      v-if="modalActive" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0E14]/90 backdrop-blur-md p-4"
      @click.self="modalActive = false"
    >
      <div class="bg-[#121620] text-slate-100 max-w-4xl w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl space-y-4 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button 
          @click="modalActive = false" 
          class="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center font-bold text-base cursor-pointer border border-white/10"
        >
          ✕
        </button>

        <div class="space-y-1">
          <span class="tecture-tag text-[#DFC8A5] block">{{ activeModalItem?.location }}</span>
          <h3 class="text-xl sm:text-2xl font-black text-white">{{ activeModalItem?.title }}</h3>
        </div>

        <div class="rounded-2xl overflow-hidden bg-black max-h-[60vh] flex items-center justify-center">
          <img :src="modalImage" :alt="activeModalItem?.title" class="w-full h-auto max-h-[60vh] object-contain" />
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs">
          <div class="text-slate-400">
            Plot: <strong class="text-white">{{ activeModalItem?.scale }}</strong> · Style: <strong class="text-white">{{ activeModalItem?.style }}</strong>
          </div>
          <button 
            type="button"
            @click="openWhatsApp('923134487315', 'Assalam-o-Alaikum, I am inquiring about architectural blueprints and 3D design like ' + activeModalItem?.title)"
            class="px-5 py-2.5 rounded-full tecture-btn-gold text-xs shadow flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Inquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'

defineEmits(['open-start-project'])

const activeCategory = ref('All Case Studies')

const categories = [
  'All Case Studies',
  'Luxury Villas',
  'Penthouse & Interiors',
  'Commercial Architecture'
]

const modalActive = ref(false)
const activeModalItem = ref(null)
const modalImage = ref('')

const openModal = (item, specificImg = null) => {
  activeModalItem.value = item
  modalImage.value = specificImg || item.image
  modalActive.value = true
}

const caseStudies = ref([
  {
    id: 1,
    title: 'Lake City 1 Kanal Ultra-Modern Luxury Villa',
    category: 'Luxury Villas',
    location: 'Golf Estate, Lake City Lahore',
    scale: '1 Kanal (50x90)',
    coveredArea: '5,800 sq.ft.',
    style: 'Contemporary Minimalist Glass Facade',
    compliance: '100% Lake City & LDA NOC Sanctioned',
    challenge: 'The client required a contemporary open-concept layout with continuous natural light across all three levels while conforming to Lake City strict setback guidelines and rear green-belt zoning.',
    solution: 'Engineered a double-height central light atrium with floor-to-ceiling thermal curtain walls, integrated rainwater harvesting cisterns, seismic-resistant grade-60 raft foundation, and full 4K Lumion VR walkthroughs before ground breaking.',
    deliverables: [
      '2D Working Blueprints & Sections',
      '4K Lumion VR Walkthrough Tour',
      'LDA & Lake City Bylaw Compliance NOC',
      'Itemized 2026 Material BOQ'
    ],
    metrics: [
      { val: '100%', label: 'Approval Speed' },
      { val: '+45%', label: 'Natural Light Flow' },
      { val: '0', label: 'Bylaw Penalties' }
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80'
    ]
  },
  {
    id: 2,
    title: 'DHA Phase 6 Executive Double-Height Penthouse Suite',
    category: 'Penthouse & Interiors',
    location: 'Main Boulevard, DHA Phase 6, Lahore',
    scale: 'Double-Height Penthouse Suite',
    coveredArea: '4,200 sq.ft.',
    style: 'Italian Modernist Luxury Architecture',
    compliance: 'DHA Lahore Structural NOC Verified',
    challenge: 'Outdated interior layout with dim fluorescent illumination, heavy non-loadbearing partitions, and cramped circulation that choked panoramic DHA skyline views.',
    solution: 'Completely overhauled the structural floor plate into an expansive open lounge, installed a sculptural floating illuminated spiral staircase, curated Italian bookmatched Calacatta marble, and fitted fluted acoustic timber wall paneling.',
    deliverables: [
      'Bespoke Joinery & Wall Cladding Plans',
      'Automated Cove & False Ceiling Lighting',
      'Bookmatched Italian Marble Selection',
      'Turnkey Construction Supervision'
    ],
    metrics: [
      { val: '30 Days', label: 'Turnkey Handover' },
      { val: 'A+ Luxury', label: 'Material Standard' },
      { val: '99.8%', label: 'Client Satisfaction' }
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80'
    ]
  },
  {
    id: 3,
    title: 'DHA Phase 7 10-Marla Spanish Classical Villa & Map',
    category: 'Luxury Villas',
    location: 'Sector T, DHA Phase 7, Lahore',
    scale: '10 Marla (35x70)',
    coveredArea: '3,450 sq.ft.',
    style: 'Spanish Classical Elevation with Arches',
    compliance: 'DHA Lahore Building Control Approved',
    challenge: 'A compact 35x70 plot footprint requiring 5 en-suite bedrooms, dual servant quarters, and double car porch while keeping classical Spanish decorative mouldings without violating frontage setback bylaws.',
    solution: 'Designed cantilevered Spanish archways, handcrafted rockwall stone cladding, triple-story vertical space optimization, and integrated skylight ventilation above the central stairwell for passive summer cooling.',
    deliverables: [
      'Full Architectural Blueprints & Cross Sections',
      'Spanish Facade Detail & Moulding Drawings',
      'DHA Phase 7 Municipal Sanction NOC',
      'Comprehensive Plumbing & Electrical Schemes'
    ],
    metrics: [
      { val: '5 Beds', label: 'En-Suite Layout' },
      { val: '100%', label: 'DHA 1st-Pass NOC' },
      { val: '12 Mos', label: 'Turnkey Delivery' }
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80'
    ]
  },
  {
    id: 4,
    title: 'Gulberg 3 Commercial Corporate Office Headquarters',
    category: 'Commercial Architecture',
    location: 'Main Boulevard, Gulberg III, Lahore',
    scale: 'Commercial Plaza (G + 6 Floors)',
    coveredArea: '18,500 sq.ft.',
    style: 'Double-Glazed Curtain-Wall High-Rise',
    compliance: 'LDA Commercial High-Rise Bye-Laws Sanctioned',
    challenge: 'Developing an energy-efficient corporate headquarters on a bustling commercial artery with strict basement elevator parking bylaws, acoustic noise mitigation, and maximum usable floor-to-area ratio (FAR).',
    solution: 'Constructed an insulated double-glazed structural curtain wall, dual high-speed elevator shafts, automated basement parking stackers, and zoned HVAC climate distribution with standby emergency generation integration.',
    deliverables: [
      'Commercial High-Rise Structural Calculation',
      'Curtain-Wall Glazing Detailing',
      'LDA Commercial NOC & Parking Layout',
      'Ergonomic Executive Office Fitouts'
    ],
    metrics: [
      { val: '6 Floors', label: 'Commercial Scale' },
      { val: '-32%', label: 'HVAC Energy Cost' },
      { val: '100%', label: 'Occupancy Rate' }
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80'
    ]
  }
])

const filteredCaseStudies = computed(() => {
  if (activeCategory.value === 'All Case Studies') {
    return caseStudies.value
  }
  return caseStudies.value.filter(cs => cs.category === activeCategory.value)
})
</script>