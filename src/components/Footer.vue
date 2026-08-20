<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-px bg-gradient-to-r from-transparent via-[#088C7E]/50 to-transparent"></div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Top 5-Column Zameen Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        
        <!-- Brand Info with Official Image Logo -->
        <div class="lg:col-span-2 space-y-5">
          
          <!-- Official H&Q Design Services Image Logo -->
          <router-link to="/" class="inline-block group">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-24 sm:h-28 w-auto object-contain hover:scale-105 transition-transform"
            />
          </router-link>

          <p class="text-xs leading-relaxed text-slate-400 max-w-sm">
            Pakistan's Premier Architecture & Interior Design Studio. Official partner affiliated with <strong class="text-white">Zameen.com</strong>. Transforming spaces into luxury homes, offices, and commercial landmarks across Parkview City, DHA, and Gulberg Lahore.
          </p>

          <!-- Status Indicator -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-slate-300 font-mono text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-handshake text-[#088C7E] text-xs"></i>
              Official Zameen Partner · Parkview City Studio Lahore
            </span>
          </div>

          <!-- Contact Snippet -->
          <div class="text-xs text-slate-300 space-y-2 pt-2">
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#088C7E] text-xs"></i>
              <span>Parkview City, Lahore, Punjab, Pakistan</span>
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
            <li><router-link to="/properties" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map-location-dot text-[10px] text-[#088C7E]"></i> Plots in Parkview City</router-link></li>
            <li><router-link to="/projects" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-[#088C7E]"></i> New Housing Projects 2026</router-link></li>
            <li><router-link to="/properties" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-building text-[10px] text-[#088C7E]"></i> Commercial Plazas Gulberg</router-link></li>
            <li><router-link to="/agents" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-users-gear text-[10px] text-[#088C7E]"></i> Certified Agents & Architects</router-link></li>
            <li><router-link to="/forum" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-comments text-[10px] text-[#088C7E]"></i> Real Estate Forum Q&A</router-link></li>
          </ul>
        </div>

        <!-- Zameen Tools & Area Guides (Internal Links) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Tools & Area Guides</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-calculator text-[10px] text-[#088C7E]"></i> Construction Cost Calculator</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-map text-[10px] text-[#088C7E]"></i> Plot Finder & Master Maps</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-ruler-combined text-[10px] text-[#088C7E]"></i> Area Unit Converter</router-link></li>
            <li><router-link to="/tools" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-landmark text-[10px] text-[#088C7E]"></i> Mortgage EMI Calculator</router-link></li>
            <li><router-link to="/area-guides" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-[10px] text-amber-500"></i> Parkview City Guide</router-link></li>
            <li><router-link to="/trends" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-arrow-trend-up text-[10px] text-emerald-400"></i> Price Index & Trends</router-link></li>
          </ul>
        </div>

        <!-- Newsletter & Mobile Apps -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Zameen App & Alerts</h4>
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

      <!-- HIGH AUTHORITY PARTNER NETWORK & FEATURED BACKLINK SPOTLIGHT -->
      <div class="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 text-xs space-y-4">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="space-y-1">
            <span class="px-2.5 py-0.5 rounded-full bg-[#088C7E]/20 text-[#088C7E] text-[10px] font-black uppercase tracking-wider">
              Featured Partner Network & Textile Sponsor
            </span>
            <h4 class="text-sm font-extrabold text-white">
              Official Collaboration & Premium Fashion Fabric Partner
            </h4>
            <p class="text-xs text-slate-400 max-w-2xl">
              H&Q Design Services partners with leading lifestyle and luxury brands in Pakistan. For premium unstitched fabrics, men's luxury shalwar kameez, wash & wear suits, and designer festive wear, explore our partner brand:
            </p>
          </div>

          <!-- Direct Authority Backlink Card with Targeted Anchor Text -->
          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            title="Ahmad Cloths - Buy Premium Unstitched Fabrics & Men's Luxury Suits Online"
            class="px-5 py-3 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2.5 shrink-0"
          >
            <i class="fa-solid fa-shirt text-sm"></i>
            <span>Visit Ahmad Cloths Official →</span>
          </a>
        </div>

        <div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
          <span class="font-bold text-slate-300">Partner Links:</span>
          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            class="text-emerald-400 hover:text-emerald-300 hover:underline font-bold transition-colors"
          >
            Ahmad Cloths (ahmad-cloths.vercel.app)
          </a>
          <span>·</span>
          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            class="hover:text-white transition-colors"
          >
            Men's Luxury Unstitched Fabric Collection
          </a>
          <span>·</span>
          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            class="hover:text-white transition-colors"
          >
            Designer Summer Wash & Wear & Cotton Suits
          </a>
          <span>·</span>
          <a 
            href="https://www.zameen.com/" 
            target="_blank" 
            rel="noopener"
            class="hover:text-white transition-colors"
          >
            Zameen.com Real Estate Portal
          </a>
        </div>
      </div>

      <!-- Trending Keywords -->
      <div class="pt-4 border-t border-slate-800/80">
        <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Trending Real Estate & Architecture Searches</h4>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
          <router-link to="/properties" class="hover:text-[#088C7E] transition-colors">Properties for Sale in Lahore</router-link>
          <span>·</span>
          <router-link to="/tools" class="hover:text-[#088C7E] transition-colors">House Construction Cost in Pakistan 2026</router-link>
          <span>·</span>
          <router-link to="/projects" class="hover:text-[#088C7E] transition-colors">Park View City Installment Plans</router-link>
          <span>·</span>
          <router-link to="/properties" class="hover:text-[#088C7E] transition-colors">5 Marla House Design & Elevation</router-link>
          <span>·</span>
          <router-link to="/area-guides" class="hover:text-[#088C7E] transition-colors">DHA Lahore Phase 6 Reviews</router-link>
          <span>·</span>
          <router-link to="/trends" class="hover:text-[#088C7E] transition-colors">Pakistan Property Price Index 2026</router-link>
          <span>·</span>
          <router-link to="/agents" class="hover:text-[#088C7E] transition-colors">Best Architects in Lahore</router-link>
          <span>·</span>
          <router-link to="/forum" class="hover:text-[#088C7E] transition-colors">LDA Building Bylaws Forum</router-link>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-6">
          <span>© 2026 H&Q Design Services · Official Zameen.com Partner. All rights reserved.</span>
          <span class="hidden sm:inline text-slate-700">|</span>
          <span class="hover:text-slate-300">Parkview City Studio, Lahore</span>
        </div>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 text-slate-400">
          <a href="https://www.facebook.com/profile.php?id=100063665456115" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/hq_design_services/?hl=en" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asadali28997@gmail.com" target="_blank" rel="noopener" class="hover:text-emerald-400 transition-colors text-base" title="Email via Gmail">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import logoImg from '../assets/logo.jpg'

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
