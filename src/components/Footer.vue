<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-px bg-gradient-to-r from-transparent via-[#088C7E]/50 to-transparent"></div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Top 5-Column Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        
        <!-- Brand Info with Official Image Logo -->
        <div class="lg:col-span-2 space-y-5">
          
          <!-- Official H&Q Design Services Image Logo -->
          <router-link to="/" class="inline-block group h-24 sm:h-28">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-full w-full object-contain hover:scale-105 transition-transform"
            />
          </router-link>

          <p class="text-xs leading-relaxed text-slate-400 max-w-sm">
            Pakistan's Premier Architecture & Interior Design Studio. Transforming spaces into luxury homes, offices, and commercial landmarks across DHA, Gulberg, and Bahria Town Lahore.
          </p>

          <!-- Status Indicator -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-slate-300 font-mono text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-handshake text-[#088C7E] text-xs"></i>
              Licensed PEC Architects · Lahore, Pakistan
            </span>
          </div>

          <!-- Contact Snippet -->
          <div class="text-xs text-slate-300 space-y-2 pt-2">
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#088C7E] text-xs"></i>
              <span>DHA Lahore, Punjab, Pakistan</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-[#088C7E] text-xs"></i>
              <span>0341-6887454 | 🇸🇦 +966 50 714 3124</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-envelope text-[#088C7E] text-xs"></i>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=asadali28997@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:underline hover:text-emerald-400 font-bold transition-colors flex items-center gap-1"
                title="Open Gmail Compose"
              >
                <span>asadali28997@gmail.com</span>
                <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#088C7E]"></i>
              </a>
            </p>
          </div>
        </div>

        <!-- Popular Real Estate Searches (Internal Links) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Properties & Portals</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/properties" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house text-[10px] text-[#088C7E]"></i> Homes for Sale in Lahore</router-link></li>
            <li><router-link to="/properties" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map-location-dot text-[10px] text-[#088C7E]"></i> Plots in DHA Lahore</router-link></li>
            <li><router-link to="/projects" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-[#088C7E]"></i> New Housing Projects 2026</router-link></li>
            <li><router-link to="/properties" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-building text-[10px] text-[#088C7E]"></i> Commercial Plazas Gulberg</router-link></li>
            <li><router-link to="/agents" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-users-gear text-[10px] text-[#088C7E]"></i> Certified Agents & Architects</router-link></li>
            <li><router-link to="/forum" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-comments text-[10px] text-[#088C7E]"></i> Real Estate Forum Q&A</router-link></li>
            <li><router-link to="/partners" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-handshake-simple text-[10px] text-[#088C7E]"></i> Industry Collaborations & Partners</router-link></li>
            <li><router-link to="/privacy-policy" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-shield-halved text-[10px] text-[#088C7E]"></i> Privacy Policy</router-link></li>
            <li><router-link to="/terms-of-service" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-file-contract text-[10px] text-[#088C7E]"></i> Terms of Service</router-link></li>
            <li><router-link to="/disclaimer" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-circle-exclamation text-[10px] text-[#088C7E]"></i> Website Disclaimer</router-link></li>
          </ul>
        </div>

        <!-- Tools & Area Guides (Internal Links) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Tools & Area Guides</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[10px] text-[#088C7E]"></i> Construction Cost Calculator</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map text-[10px] text-[#088C7E]"></i> Plot Finder & Master Maps</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-ruler-combined text-[10px] text-[#088C7E]"></i> Area Unit Converter</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-landmark text-[10px] text-[#088C7E]"></i> Mortgage EMI Calculator</router-link></li>
            <li><router-link to="/area-guides" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-[10px] text-amber-500"></i> Lake City Lahore Guide</router-link></li>
            <li><router-link to="/trends" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-arrow-trend-up text-[10px] text-emerald-400"></i> Price Index & Trends</router-link></li>
          </ul>
        </div>

        <!-- Newsletter & Mobile Apps -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Newsletter & Alerts</h4>
          <p class="text-xs text-slate-400">Get instant plot price alerts, 3D design releases, and verified listings.</p>
          
          <form @submit.prevent="subscribe" class="space-y-2">
            <div class="relative">
              <input 
                v-model="email" 
                type="email" 
                required
                placeholder="asadali28997@gmail.com" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#088C7E] transition-colors"
              />
              <button 
                type="submit"
                class="absolute right-1 top-1 bottom-1 px-3 bg-[#088C7E] hover:bg-[#066D62] text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
              >
                Join
              </button>
            </div>
            <p v-if="subscribed" class="text-[11px] text-[#088C7E] flex items-center gap-1">
              <i class="fa-solid fa-circle-check"></i> Subscribed successfully!
            </p>
          </form>

          <!-- Mobile Apps Badge -->
          <div class="pt-2 flex items-center gap-2">
            <button @click="$emit('open-start-project')" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#088C7E] text-white text-[10px] font-bold flex items-center gap-1.5 cursor-pointer">
              <i class="fa-brands fa-google-play text-xs text-[#088C7E]"></i>
              <span>Google Play</span>
            </button>
            <button @click="$emit('open-start-project')" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#088C7E] text-white text-[10px] font-bold flex items-center gap-1.5 cursor-pointer">
              <i class="fa-brands fa-apple text-xs text-amber-400"></i>
              <span>App Store</span>
            </button>
          </div>
        </div>

      </div>

      <!-- INDUSTRY PARTNERS & STRATEGIC COLLABORATIONS -->
      <div class="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 text-xs space-y-4">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="px-2.5 py-0.5 rounded-full bg-[#088C7E]/20 text-[#088C7E] text-[10px] font-black uppercase tracking-wider">
              Strategic Industry Collaborations
            </span>
            <h4 class="text-sm font-extrabold text-white">
              Official Material, Structural Engineering & Technology Partners
            </h4>
            <p class="text-xs text-slate-400 max-w-2xl">
              H&Q Design Services collaborates with verified structural engineers, top building material manufacturers (Mughal & Amreli Steel, DG Cement), premium sanitary brands (Grohe, Kohler), and smart-home automation providers across Pakistan.
            </p>
          </div>

          <router-link 
            to="/partners" 
            class="px-5 py-3 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2.5 shrink-0"
          >
            <i class="fa-solid fa-handshake text-sm"></i>
            <span>View Partner Network →</span>
          </router-link>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
          <span class="font-bold text-slate-300">Industry Directory:</span>
          <router-link to="/partners" class="text-emerald-400 hover:text-emerald-300 hover:underline font-bold transition-colors">
            Certified Structural Engineers
          </router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-white transition-colors">
            Grade 60 Steel & Ready-Mix Suppliers
          </router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-white transition-colors">
            Imported Sanitary & Architectural Glass
          </router-link>
          <span>·</span>
          <router-link to="/keywords-directory" class="text-[#088C7E] hover:underline font-bold transition-colors">
            Architecture Knowledge Glossary
          </router-link>
        </div>
      </div>

      <!-- Trending Keywords -->
      <div class="pt-4 border-t border-slate-800/80">
        <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Trending Real Estate & Architecture Searches</h4>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
          <router-link to="/keywords/5-marla-house-design" class="hover:text-[#088C7E] transition-colors">5 Marla House Design</router-link>
          <span>·</span>
          <router-link to="/keywords/10-marla-spanish-villa" class="hover:text-[#088C7E] transition-colors">10 Marla Spanish Villa</router-link>
          <span>·</span>
          <router-link to="/keywords/1-kanal-house-plan" class="hover:text-[#088C7E] transition-colors">1 Kanal Modern House Plan</router-link>
          <span>·</span>
          <router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-[#088C7E] transition-colors">House Construction Cost Pakistan 2026</router-link>
          <span>·</span>
          <router-link to="/keywords/interior-designers-in-lahore" class="hover:text-[#088C7E] transition-colors">Interior Designers in Lahore</router-link>
          <span>·</span>
          <router-link to="/keywords/architects-in-dha-lahore" class="hover:text-[#088C7E] transition-colors">Architects in DHA Lahore</router-link>
          <span>·</span>
          <router-link to="/keywords/3d-house-elevation-design" class="hover:text-[#088C7E] transition-colors">3D House Elevation Design</router-link>
          <span>·</span>
          <router-link to="/keywords/furniture-showrooms-in-dha-lahore" class="hover:text-[#088C7E] transition-colors">Furniture Showrooms in DHA</router-link>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs border-t border-slate-900">
        <div class="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-400">
          <span>© 2026 H&amp;Q Design Services. All rights reserved.</span>
          <span class="hidden sm:inline text-slate-700">|</span>
          <router-link to="/privacy-policy" class="hover:text-emerald-400 transition-colors">Privacy Policy</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/terms-of-service" class="hover:text-emerald-400 transition-colors">Terms of Service</router-link>
          <span class="text-slate-700">·</span>
          <router-link to="/disclaimer" class="hover:text-emerald-400 transition-colors">Disclaimer</router-link>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 text-slate-400">
          <a href="https://www.facebook.com/profile.php?id=100063665456115" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hq_design_services/?hl=en" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/h-q-design-services/" target="_blank" rel="noopener" class="hover:text-[#0A66C2] transition-colors text-base" title="LinkedIn">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@HQDesignservices" target="_blank" rel="noopener" class="hover:text-red-500 transition-colors text-base" title="YouTube">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@hqdesignservices?lang=en" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="TikTok">
            <i class="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=asadali28997@gmail.com" target="_blank" rel="noopener" class="hover:text-emerald-400 transition-colors text-base" title="Email via Gmail">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
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
