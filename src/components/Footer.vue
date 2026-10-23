<template>
  <footer class="bg-[#080B10] text-slate-400 border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
    <!-- Tecture Gold Gradient Divider -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[2px] bg-gradient-to-r from-transparent via-[#C5A880] to-transparent"></div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      <!-- Top Architectural Statement Banner (Tecture Signature) -->
      <div class="pb-12 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div class="space-y-2 max-w-2xl">
          <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
            <span class="w-8 h-px bg-[#C5A880]"></span>
            <span>LET'S CREATE ARCHITECTURAL EXCELLENCE</span>
          </span>
          <h3 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have an architectural vision in mind? Let's bring it to life.
          </h3>
          <p class="text-sm text-slate-400">
            From 5 Marla modern homes to grand 2 Kanal luxury villas in DHA Lahore, our team delivers complete 3D elevations, LDA approvals, and turnkey engineering.
          </p>
        </div>

        <div class="flex flex-wrap items-center gap-4 shrink-0">
          <button 
            type="button"
            @click="openWhatsApp('923134487315')" 
            class="px-6 py-3.5 rounded-full tecture-btn-gold text-xs shadow-xl cursor-pointer flex items-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Architect Desk</span>
          </button>
          <router-link 
            to="/contact" 
            class="px-6 py-3.5 rounded-full tecture-btn-outline text-xs cursor-pointer flex items-center gap-2"
          >
            <i class="fa-solid fa-compass-drafting text-xs"></i>
            <span>Book Studio Visit</span>
          </router-link>
        </div>
      </div>

      <!-- 5-Column Architectural Directory Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
        
        <!-- Brand Info with Updated 3D Gold Logo -->
        <div class="space-y-5">
          <router-link to="/" class="flex items-center gap-3 group">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-16 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform"
            />
            <div class="flex flex-col">
              <span class="text-base font-extrabold tracking-[0.16em] text-white">H&amp;Q DESIGN</span>
              <span class="text-[9px] font-bold tracking-[0.22em] text-[#C5A880] uppercase">STUDIO LAHORE</span>
            </div>
          </router-link>

          <p class="text-xs leading-relaxed text-slate-400">
            Pakistan's Premier Architecture &amp; Interior Design Studio. Transforming spaces into luxury homes, corporate offices, and commercial landmarks across DHA, Gulberg, and Bahria Town Lahore.
          </p>

          <!-- Licensed PEC Architectural Status Indicator -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-[#C5A880]"></span>
            </span>
            <span class="text-slate-300 font-mono text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-award text-[#C5A880] text-xs"></i>
              Licensed PCATP &amp; PEC Architects
            </span>
          </div>

          <!-- Contact Snippet -->
          <div class="text-xs text-slate-300 space-y-1.5 pt-1">
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#C5A880] text-xs"></i>
              <span>DHA Lahore &amp; Park View City, Pakistan</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-[#C5A880] text-xs"></i>
              <span>0313-4487315</span>
            </p>
          </div>
        </div>

        <!-- Architecture & Studio Services -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-[0.16em] text-white flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            <span>Architecture &amp; Design</span>
          </h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/services" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-pen-ruler text-[10px] text-[#C5A880]"></i> Architectural Design</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-cubes text-[10px] text-[#C5A880]"></i> 3D Elevations &amp; Plans</router-link></li>
            <li><router-link to="/services" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-couch text-[10px] text-[#C5A880]"></i> Luxury Interior Design</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-file-lines text-[10px] text-[#C5A880]"></i> Design Case Studies</router-link></li>
            <li><router-link to="/about" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-building-user text-[10px] text-[#C5A880]"></i> About H&amp;Q Studio</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-headset text-[10px] text-[#C5A880]"></i> Contact &amp; Location</router-link></li>
            <li><router-link to="/reviews" class="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-[#DFC8A5] font-bold"><i class="fa-solid fa-star text-[10px] text-amber-400"></i> Google Reviews (5.0 ★)</router-link></li>
          </ul>
        </div>

        <!-- Properties & Housing Portals -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-[0.16em] text-white flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            <span>Properties &amp; Portals</span>
          </h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/properties?purpose=For Sale" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-[10px] text-[#C5A880]"></i> Homes for Sale in Lahore</router-link></li>
            <li><router-link to="/properties?purpose=Plots" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map-location-dot text-[10px] text-[#C5A880]"></i> Plots in DHA Lahore</router-link></li>
            <li><router-link to="/projects" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-[#C5A880]"></i> New Housing Projects 2026</router-link></li>
            <li><router-link to="/properties?purpose=Commercial" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-store text-[10px] text-[#C5A880]"></i> Commercial Plazas Gulberg</router-link></li>
            <li><router-link to="/agents" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-users-gear text-[10px] text-[#C5A880]"></i> Certified Agents &amp; Architects</router-link></li>
            <li><router-link to="/forum" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-comments text-[10px] text-[#C5A880]"></i> Real Estate Forum Q&amp;A</router-link></li>
            <li><router-link to="/blog" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-newspaper text-[10px] text-[#C5A880]"></i> Architecture Guides (3,000+)</router-link></li>
          </ul>
        </div>

        <!-- Tools & Area Guides -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-[0.16em] text-white flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            <span>Tools &amp; Area Guides</span>
          </h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/tools?tab=cost-calc" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[10px] text-[#C5A880]"></i> Construction Cost Calculator</router-link></li>
            <li><router-link to="/tools?tab=plot-finder" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map text-[10px] text-[#C5A880]"></i> Plot Finder &amp; Master Maps</router-link></li>
            <li><router-link to="/tools?tab=unit-converter" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-ruler-combined text-[10px] text-[#C5A880]"></i> Area Unit Converter</router-link></li>
            <li><router-link to="/tools?tab=mortgage-calc" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-landmark text-[10px] text-[#C5A880]"></i> Mortgage EMI Calculator</router-link></li>
            <li><router-link to="/area-guides" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-[10px] text-[#C5A880]"></i> Society Bylaw Guides</router-link></li>
            <li><router-link to="/trends" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-arrow-trend-up text-[10px] text-emerald-400"></i> Price Index &amp; Trends</router-link></li>
            <li><router-link to="/embed/calculator" class="hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-code text-[10px] text-[#C5A880]"></i> Embeddable Widget</router-link></li>
          </ul>
        </div>

        <!-- Newsletter & Direct Support -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-[0.16em] text-white flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            <span>Studio Updates</span>
          </h4>
          <p class="text-xs text-slate-400">Subscribe for 3D villa releases, Pakistan construction rate indices, and society bylaws.</p>
          
          <form @submit.prevent="subscribe" class="space-y-2">
            <div class="relative">
              <input 
                v-model="email" 
                type="email" 
                required
                placeholder="asadali28997@gmail.com" 
                class="w-full px-3.5 py-2.5 rounded-full bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A880] transition-colors"
              />
              <button 
                type="submit"
                class="absolute right-1 top-1 bottom-1 px-4 tecture-btn-gold rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
            <p v-if="subscribed" class="text-[11px] text-[#DFC8A5] flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-emerald-400"></i> Subscribed successfully!
            </p>
          </form>

          <!-- Direct Architect Consultation Buttons -->
          <div class="pt-2 space-y-2">
            <button 
              type="button"
              @click="openWhatsApp('923134487315')" 
              class="w-full py-2.5 px-3 rounded-full bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-all text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp 0313-4487315</span>
            </button>
            <router-link 
              to="/contact" 
              class="w-full py-2.5 px-3 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A880]/50 text-slate-300 hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-building-user text-[#C5A880]"></i>
              <span>Book Lahore Studio Visit</span>
            </router-link>
          </div>
        </div>

      </div>

      <!-- INDUSTRY PARTNERS & STRATEGIC COLLABORATIONS -->
      <div class="p-6 rounded-3xl bg-[#121620] border border-white/10 text-xs space-y-4">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="tecture-tag text-[#C5A880]">
              STRATEGIC INDUSTRY COLLABORATIONS
            </span>
            <h4 class="text-sm font-extrabold text-white">
              Official Material, Structural Engineering &amp; Technology Partners
            </h4>
            <p class="text-xs text-slate-400 max-w-2xl">
              H&amp;Q Design Services collaborates with verified structural engineers, top building material manufacturers (Mughal &amp; Amreli Steel, DG Cement), premium sanitary brands (Grohe, Kohler), and smart-home automation providers across Pakistan.
            </p>
          </div>

          <router-link 
            to="/partners" 
            class="px-5 py-3 rounded-full tecture-btn-outline text-xs flex items-center gap-2.5 shrink-0"
          >
            <i class="fa-solid fa-handshake text-[#C5A880]"></i>
            <span>View Partner Network →</span>
          </router-link>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-white/5 text-[11px] text-slate-400">
          <span class="font-bold text-slate-300">Industry Directory:</span>
          <router-link to="/partners" class="text-[#DFC8A5] hover:text-white hover:underline font-bold transition-colors">
            Certified Structural Engineers
          </router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-white transition-colors">
            Grade 60 Steel &amp; Ready-Mix Suppliers
          </router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-white transition-colors">
            Imported Sanitary &amp; Architectural Glass
          </router-link>
          <span>·</span>
          <router-link to="/keywords-directory" class="text-[#C5A880] hover:underline font-bold transition-colors">
            Architecture Knowledge Glossary
          </router-link>
        </div>
      </div>

      <!-- Trending Keywords & Architecture Deep Links -->
      <div class="pt-4 border-t border-white/10 space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold uppercase tracking-[0.16em] text-white">Trending Architectural Searches &amp; Bylaws</h4>
          <router-link to="/keywords-directory" class="text-xs font-bold text-[#DFC8A5] hover:underline flex items-center gap-1">
            <span>Browse Complete 10-Cluster Index</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </router-link>
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
          <router-link to="/keywords/5-marla-house-design" class="hover:text-[#DFC8A5] transition-colors">5 Marla House Design</router-link>
          <span>·</span>
          <router-link to="/keywords/10-marla-spanish-villa" class="hover:text-[#DFC8A5] transition-colors">10 Marla Spanish Villa</router-link>
          <span>·</span>
          <router-link to="/keywords/1-kanal-house-plan" class="hover:text-[#DFC8A5] transition-colors">1 Kanal Modern House Plan</router-link>
          <span>·</span>
          <router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-[#DFC8A5] transition-colors">House Construction Cost Pakistan 2026</router-link>
          <span>·</span>
          <router-link to="/keywords/interior-designers-in-lahore" class="hover:text-[#DFC8A5] transition-colors">Interior Designers in Lahore</router-link>
          <span>·</span>
          <router-link to="/keywords/architects-in-dha-lahore" class="hover:text-[#DFC8A5] transition-colors">Architects in DHA Lahore</router-link>
          <span>·</span>
          <router-link to="/keywords/3d-house-elevation-design" class="hover:text-[#DFC8A5] transition-colors">3D House Elevation Design</router-link>
          <span>·</span>
          <router-link to="/area-guides" class="hover:text-[#DFC8A5] transition-colors">DHA &amp; Bahria Town Bylaws</router-link>
          <span>·</span>
          <router-link to="/tools?tab=cost-calc" class="hover:text-[#DFC8A5] transition-colors">Grey Structure Cost 2026</router-link>
          <span>·</span>
          <router-link to="/case-studies" class="hover:text-[#DFC8A5] transition-colors">Completed Case Studies</router-link>
          <span>·</span>
          <router-link to="/blog" class="hover:text-[#DFC8A5] transition-colors font-bold text-slate-300">All 3,100+ Blog Guides</router-link>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-t border-white/5">
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-400">
          <span>© 2026 H&amp;Q Design Services. All rights reserved.</span>
          <span class="hidden sm:inline text-slate-700">|</span>
          <router-link to="/privacy-policy" class="hover:text-[#DFC8A5] transition-colors">Privacy Policy</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/terms-of-service" class="hover:text-[#DFC8A5] transition-colors">Terms of Service</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/disclaimer" class="hover:text-[#DFC8A5] transition-colors">Disclaimer</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/about" class="hover:text-[#DFC8A5] transition-colors">About Studio</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/contact" class="hover:text-[#DFC8A5] transition-colors">Contact</router-link>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 text-slate-400">
          <a href="https://www.facebook.com/profile.php?id=100063665456115" target="_blank" rel="noopener" class="hover:text-[#DFC8A5] transition-colors text-base" title="Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hq_design_services/?hl=en" target="_blank" rel="noopener" class="hover:text-[#DFC8A5] transition-colors text-base" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/h-q-design-services/" target="_blank" rel="noopener" class="hover:text-[#0A66C2] transition-colors text-base" title="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@HQDesignservices" target="_blank" rel="noopener" class="hover:text-red-500 transition-colors text-base" title="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@hqdesignservices?lang=en" target="_blank" rel="noopener" class="hover:text-[#DFC8A5] transition-colors text-base" title="TikTok">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=asadali28997@gmail.com" target="_blank" rel="noopener" class="hover:text-[#DFC8A5] transition-colors text-base" title="Email via Gmail">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { openWhatsApp } from '../utils/whatsapp.js'
import logoImg from '../assets/logo.png'

defineEmits(['open-start-project'])

const email = ref('')
const subscribed = ref(false)

const subscribe = () => {
  if (!email.value) return
  subscribed.value = true
  setTimeout(() => {
    email.value = ''
  }, 2000)
}
</script>
