<template>
  <div class="space-y-16">
    
    <!-- Edge-to-Edge Full-Width Hero Section (0 Padding Left/Right/Top) -->
    <section class="w-full relative overflow-hidden min-h-[660px] flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-b border-slate-800/80 shadow-2xl group">
      
      <!-- High-Resolution Architectural Design Background Image (100% Full Cover) -->
      <img 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85" 
        alt="H&Q Luxury Villa Architectural Elevation Render" 
        class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
      />

      <!-- Cinematic Multi-Layer Dark Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none"></div>
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#088C7E]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Max-Width Inner Container for Text & Elements -->
      <div class="max-w-[1440px] mx-auto w-full relative z-10 space-y-8">
        
        <!-- Top Luxury Badges -->
        <div class="flex flex-wrap items-center gap-3">
          <span class="px-4 py-1.5 rounded-full text-xs font-black bg-[#088C7E] text-white tracking-wider uppercase shadow-xl flex items-center gap-2 border border-emerald-400/30">
            <i class="fa-solid fa-award text-amber-300 text-sm"></i>
            <span>Zameen Verified Architectural Partner</span>
          </span>
          <span class="px-4 py-1.5 rounded-full text-xs font-extrabold bg-slate-900/90 text-amber-300 backdrop-blur-md border border-amber-500/30 flex items-center gap-1.5 shadow-lg">
            <i class="fa-solid fa-location-dot text-[#088C7E]"></i>
            <span>Parkview City Studio · Lahore</span>
          </span>
          <span class="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 hidden sm:flex items-center gap-1.5 shadow-lg">
            <i class="fa-solid fa-shield-halved text-emerald-400"></i>
            <span>CDA & DHA Bylaws Compliant</span>
          </span>
        </div>

        <!-- Main Heading & Subtitle -->
        <div class="max-w-4xl space-y-4">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-2xl">
            Pakistan's Premier <span class="text-gradient-zameen">Architecture & 3D Design</span> Studio
          </h1>
          <p class="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
            Transforming raw plot dimensions into photorealistic 4K 3D elevation renders, submission maps, and luxury turnkey interiors across Parkview City, DHA, and Gulberg Lahore.
          </p>
        </div>

        <!-- Zameen Property Search Filter Glassmorphic Widget -->
        <div class="p-5 sm:p-7 rounded-3xl bg-slate-950/75 backdrop-blur-2xl border border-slate-700/60 shadow-2xl space-y-5 max-w-5xl">
          
          <!-- Category Tabs -->
          <div class="flex flex-wrap items-center gap-2 border-b border-slate-700/60 pb-3 text-xs font-extrabold">
            <button 
              v-for="tab in zameenTabs" 
              :key="tab"
              @click="activeZameenTab = tab"
              :class="[
                'px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider',
                activeZameenTab === tab ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/40' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <!-- Dropdown Selectors Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
            
            <!-- City / Location Selector -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">City / Housing Society</label>
              <select v-model="searchLocation" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="Parkview City">Parkview City, Lahore</option>
                <option value="DHA Lahore">DHA Phase 1-9, Lahore</option>
                <option value="Gulberg Lahore">Gulberg III, Lahore</option>
                <option value="Bahria Town">Bahria Town, Lahore</option>
                <option value="Overseas Client">Overseas (Saudi Arabia / KSA)</option>
              </select>
            </div>

            <!-- Service Category -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Design Deliverable</label>
              <select v-model="searchCategory" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="Architectural Floor Plans">Architectural Floor Plans</option>
                <option value="4K 3D Exterior Elevation">4K 3D Exterior Elevation</option>
                <option value="Luxury Interior Styling">Luxury Interior Styling</option>
                <option value="Commercial Plaza Map">Commercial Plaza Blueprint</option>
              </select>
            </div>

            <!-- Plot Size Selector -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Plot Dimension</label>
              <select v-model="searchPlot" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="5 Marla">5 Marla (25x45)</option>
                <option value="10 Marla">10 Marla (35x70)</option>
                <option value="1 Kanal">1 Kanal (50x90)</option>
                <option value="Commercial">Commercial Plaza</option>
              </select>
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button 
                @click="performZameenSearch"
                class="w-full py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#088C7E]/40 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Find Floor Plans</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- Floating Stats Footbar Inside Full Hero -->
      <div class="max-w-[1440px] mx-auto w-full relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-300">
        <div class="flex items-center gap-6 flex-wrap">
          <span class="flex items-center gap-2"><i class="fa-solid fa-building-user text-amber-400 text-base"></i> 500+ Villas Designed</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-emerald-400 text-base"></i> Photorealistic 4K 3D Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-file-signature text-cyan-400 text-base"></i> Submission Approval Guarantee</span>
        </div>
        <a href="https://wa.me/966507143124" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-extrabold">
          <i class="fa-brands fa-whatsapp text-sm"></i> Direct WhatsApp Desk: +966 50 714 3124 →
        </a>
      </div>

    </section>

    <!-- Infinite Auto-Scrolling Announcement Marquee Ticker -->
    <section class="w-full overflow-hidden bg-[#088C7E] text-white py-3 shadow-md border-y border-[#088C7E]/30">
      <div class="flex w-max animate-marquee space-x-12">
        <div class="flex items-center gap-12 text-xs font-bold shrink-0">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-300"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting"></i> 500+ Villas Designed</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-amber-300"></i> 4K 3D Render Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> Call 0341-6887454</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-300"></i> Affiliated with Zameen.com</span>
        </div>
        <div class="flex items-center gap-12 text-xs font-bold shrink-0 pr-12">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-300"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting"></i> 500+ Villas Designed</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-amber-300"></i> 4K 3D Render Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> Call 0341-6887454</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-300"></i> Affiliated with Zameen.com</span>
        </div>
      </div>
    </section>

    <!-- Quick Category Cards Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Explore Architectural Specializations</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400">Discover floor plans, 3D renderings, and interior packages by category.</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div 
          v-for="cat in quickCategories" 
          :key="cat.name"
          @click="$router.push('/portfolio')"
          class="p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2 hover:border-[#088C7E] hover:-translate-y-1 transition-all cursor-pointer group shadow-sm"
        >
          <div class="w-12 h-12 rounded-xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl mx-auto group-hover:bg-[#088C7E] group-hover:text-white transition-colors">
            <i :class="cat.icon"></i>
          </div>
          <h3 class="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">{{ cat.name }}</h3>
          <span class="text-[10px] text-slate-400 block font-medium">{{ cat.count }}</span>
        </div>
      </div>
    </section>

    <!-- Client Proof Stats Counter -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 text-center shadow-sm">
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">500+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Projects Completed</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">15+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">200+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Happy Clients</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">50+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Design Awards</p>
        </div>
      </div>
    </section>

    <!-- End-to-End Architectural Services Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
          Our Specializations
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          End-to-End Design & Build Excellence
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm">
          Comprehensive architectural and interior solutions tailored to your unique lifestyle and luxury aspirations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#088C7E] group-hover:text-white transition-colors">
              <i :class="service.iconClass"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{{ service.description }}</p>
          </div>
          <button 
            @click="$emit('open-start-project')" 
            class="inline-flex items-center gap-1.5 text-xs font-bold text-[#088C7E] hover:gap-3 transition-all cursor-pointer"
          >
            <span>Get Custom Quote</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Interactive Project Estimator Tool -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectEstimator @request-quote="$emit('open-start-project')" />
    </section>

    <!-- Zameen Featured Projects Showcase -->
    <section id="results" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
            Zameen Featured Listings
          </span>
          <h2 class="text-3xl font-black text-slate-900 dark:text-white mt-2">
            Top Architecture & Interior Projects
          </h2>
        </div>
        <router-link 
          to="/portfolio" 
          class="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-[#088C7E] text-xs font-bold text-slate-900 dark:text-white transition-colors flex items-center gap-2"
        >
          <span>View All Projects</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="project in zameenListings" 
          :key="project.id"
          class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black shadow-lg">
                {{ project.price }}
              </div>
              <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/20 flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-emerald-400"></i> Zameen Verified
              </div>
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> {{ project.location }}</span>
                <span class="font-bold text-slate-900 dark:text-white">{{ project.plotSize }}</span>
              </div>
              
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">{{ project.title }}</h3>
              
              <!-- Specification Badges (Residential vs Commercial) -->
              <div class="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <template v-if="project.isCommercial">
                  <span class="flex items-center gap-1"><i class="fa-solid fa-building text-[#088C7E]"></i> {{ project.type }}</span>
                  <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#088C7E]"></i> {{ project.floors }}</span>
                </template>
                <template v-else>
                  <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#088C7E]"></i> {{ project.beds }}</span>
                  <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#088C7E]"></i> {{ project.baths }}</span>
                </template>
                <span class="flex items-center gap-1"><i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> 3D Render</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button 
              @click="$emit('open-start-project')"
              class="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#088C7E] hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-eye text-xs"></i>
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <p class="text-xs text-slate-500 dark:text-slate-400">Everything you need to know about working with H&Q Design Services.</p>
      </div>

      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 overflow-hidden transition-all shadow-sm"
        >
          <button 
            @click="faq.open = !faq.open"
            class="w-full p-5 text-left font-bold text-sm text-slate-900 dark:text-white flex justify-between items-center gap-4 hover:text-[#088C7E] transition-colors"
          >
            <span>{{ faq.q }}</span>
            <i :class="['fa-solid text-xs transition-transform', faq.open ? 'fa-chevron-up rotate-180 text-[#088C7E]' : 'fa-chevron-down']"></i>
          </button>
          <div v-if="faq.open" class="px-5 pb-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
            {{ faq.a }}
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom Lead CTA Banner (Zameen Style) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-14 text-white overflow-hidden border border-slate-800 text-center space-y-6">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <h2 class="text-3xl sm:text-5xl font-black tracking-tight">
          Ready to Build Your <span class="text-gradient-zameen">Dream Villa?</span>
        </h2>
        <p class="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Visit our flagship architectural studio in Parkview City, Lahore or book a free 3D design consultation today.
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <button 
            @click="$emit('open-start-project')"
            class="px-8 py-4 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-bold text-base shadow-xl shadow-[#088C7E]/30 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-paper-plane"></i>
            <span>Get Free Consultation</span>
          </button>
          <a 
            href="https://wa.me/966507143124" 
            target="_blank"
            class="px-8 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-base transition-all hover:scale-105 flex items-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>WhatsApp +966 50 714 3124</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectEstimator from '../components/ProjectEstimator.vue'
import { useI18n } from '../composables/useI18n.js'

const emit = defineEmits(['open-start-project'])

const { t } = useI18n()

const zameenTabs = ['ALL DESIGNS', '5 MARLA VILLA', '10 MARLA LUXURY', '1 KANAL ESTATE', 'COMMERCIAL PLAZA']
const activeZameenTab = ref('ALL DESIGNS')

const popularTab = ref('sale')

const searchLocation = ref('Parkview City')
const searchCategory = ref('Architectural Floor Plans')
const searchPlot = ref('10 Marla')
const searchBudget = ref('Standard')

const performZameenSearch = () => {
  emit('open-start-project')
}

const quickCategories = ref([
  { name: 'Houses & Villas', count: '320+ Designs', icon: 'fa-solid fa-house-chimney' },
  { name: '3D Elevation Renders', count: '450+ 4K Renders', icon: 'fa-solid fa-cube' },
  { name: 'Luxury Interiors', count: '200+ Styling Pkgs', icon: 'fa-solid fa-couch' },
  { name: 'Commercial Plazas', count: '45+ Plazas', icon: 'fa-solid fa-building' },
  { name: 'Space Planning', count: '500+ Layouts', icon: 'fa-solid fa-ruler-combined' },
  { name: 'Full Renovation', count: '80+ Turnkey Builds', icon: 'fa-solid fa-hammer' }
])

const zameenNews = ref([
  {
    title: 'Rawalpindi Ring Road & Lahore Bypass Infrastructure Progress',
    date: '19 July 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80'
  },
  {
    title: 'Ground Broken: Future Sealed at Marbella Drive Park View City',
    date: '18 July 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'
  },
  {
    title: 'Grand Orchard & DHA Islamabad Investment & Architectural Trends',
    date: '16 July 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80'
  },
  {
    title: 'Live Now: Zameen Aurum & Property Blocks in Gulberg III Lahore',
    date: '14 July 2026',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&q=80'
  }
])

const zameenListings = ref([
  {
    id: 1,
    title: 'Modern 10 Marla Spanish Villa Floor Plan',
    location: 'Parkview City, Lahore',
    plotSize: '10 Marla',
    price: 'PKR 2.8 Lac',
    beds: '5 Beds',
    baths: '6 Baths',
    isCommercial: false,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 2,
    title: 'Executive DHA Phase 6 Interior Package',
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal',
    price: 'PKR 4.8 Lac',
    beds: '4 Beds',
    baths: '5 Baths',
    isCommercial: false,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Gulberg 3 Corporate Commercial Glass Plaza',
    location: 'Gulberg 3, Lahore',
    plotSize: '6,000 sq.ft',
    price: 'PKR 6.5 Lac',
    isCommercial: true,
    type: 'Glass High-Rise',
    floors: 'G + 5 Floors',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
  }
])

const services = ref([
  {
    title: 'Architectural Design',
    description: 'Complete architectural solutions from concept floor plans to structural submission drawings for residential & commercial builds.',
    iconClass: 'fa-solid fa-compass-drafting'
  },
  {
    title: 'Luxury Interior Design',
    description: 'Transform your living room, master suite, or executive workspace with customized furniture, lighting, and marble styling.',
    iconClass: 'fa-solid fa-couch'
  },
  {
    title: 'Photorealistic 3D Renders',
    description: 'Ultra HD 4K 3D visualizations and video walkthroughs to preview your building elevation before construction begins.',
    iconClass: 'fa-solid fa-cube'
  },
  {
    title: 'Space & Layout Planning',
    description: 'Maximize flow, natural light, and space efficiency for 5 Marla, 10 Marla, 1 Kanal villas, and commercial spaces.',
    iconClass: 'fa-solid fa-ruler-combined'
  },
  {
    title: 'Custom Furniture Crafting',
    description: 'Handcrafted luxury sofas, dining sets, media walls, and custom wood paneling fitted precisely to your interior layout.',
    iconClass: 'fa-solid fa-chair'
  },
  {
    title: 'Full Home Renovation',
    description: 'Give your existing property a modern luxury upgrade with our structural & aesthetic overhaul services.',
    iconClass: 'fa-solid fa-hammer'
  }
])

const faqs = ref([
  {
    q: 'Where is H&Q Design Services located?',
    a: 'Our flagship architectural studio is located in Parkview City, Lahore, Pakistan. We serve clients across Lahore (Parkview City, DHA, Gulberg, Bahria Town) as well as overseas Pakistani clients.',
    open: true
  },
  {
    q: 'Are you affiliated with Zameen.com?',
    a: 'Yes! H&Q Design Services is an official partner affiliated with Zameen.com, ensuring verified engineering standards and trust.',
    open: false
  },
  {
    q: 'How does the 3D visualization process work?',
    a: 'We create photorealistic 3D renders and video walkthroughs of your exterior elevation and interior rooms so you can visualize materials, color schemes, and lighting before ground construction.',
    open: false
  },
  {
    q: 'How can I get an initial cost estimate for my plot?',
    a: 'You can use our interactive Design Estimator tool right on this page, or click "Get Free Consultation" to submit your plot details for a custom proposal.',
    open: false
  }
])
</script>
