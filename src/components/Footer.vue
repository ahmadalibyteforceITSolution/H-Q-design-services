<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-px bg-gradient-to-r from-transparent via-[#088C7E]/50 to-transparent"></div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
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
            Pakistan's Premier Architecture & Interior Design Studio. Official partner affiliated with <strong class="text-white">Zameen.com</strong>. Transforming spaces into luxury homes, offices, and commercial landmarks in Parkview City, DHA, and Gulberg, Lahore.
          </p>

          <!-- Status Indicator -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span class="text-slate-300 font-mono text-[11px] flex items-center gap-1.5">
              <i class="fa-solid fa-handshake text-[#088C7E] text-xs"></i>
              {{ t.officialZameenPartner }} · {{ t.parkviewStudioLahore }}
            </span>
          </div>

          <!-- Contact Snippet with Direct Gmail Compose Link -->
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

        <!-- Popular Searches Column (All Internal Website Links) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.popularSearches }}</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house-chimney text-[10px] text-[#088C7E]"></i> 5 Marla Villa Designs</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house-user text-[10px] text-[#088C7E]"></i> 10 Marla Spanish House Maps</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-landmark text-[10px] text-[#088C7E]"></i> 1 Kanal Luxury Elevation</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-building text-[10px] text-[#088C7E]"></i> Commercial Plazas Gulberg</router-link></li>
            <li><router-link to="/services" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-couch text-[10px] text-[#088C7E]"></i> DHA Interior Design Pkg</router-link></li>
            <li><router-link to="/services" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-hammer text-[10px] text-[#088C7E]"></i> Turnkey Villa Renovation</router-link></li>
          </ul>
        </div>

        <!-- Area Guides & Cities (All Internal Website Links) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.areaGuides }}</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-[10px] text-amber-500"></i> Parkview City Lahore</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> DHA Lahore (Ph 1-9)</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> Gulberg 3 Commercial</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> Bahria Town Lahore</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-globe text-[10px] text-[#088C7E]"></i> Islamabad & DHA Phase 2</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-globe text-[10px] text-[#088C7E]"></i> Karachi & Scheme 33</router-link></li>
          </ul>
        </div>

        <!-- Newsletter & Mobile Apps (Internal Action Handlers) -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.zameenAppUpdates }}</h4>
          <p class="text-xs text-slate-400">Get instant floor plan estimates and 3D design updates right on your phone.</p>
          
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

          <!-- Mobile Apps Badge (Internal Consultation Trigger) -->
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

      <!-- Trending Architecture & Construction Keywords (100k Traffic SEO Footer Links) -->
      <div class="mt-12 pt-8 border-t border-slate-800/80">
        <h4 class="text-xs font-bold uppercase tracking-wider text-white mb-4">Trending Architecture & Construction Keywords</h4>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
          <router-link to="/services" class="hover:text-[#088C7E] transition-colors">Best Architects in Lahore</router-link>
          <span>·</span>
          <router-link to="/case-studies" class="hover:text-[#088C7E] transition-colors">House Construction Cost in Pakistan 2026</router-link>
          <span>·</span>
          <router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors">5 Marla House Design & Elevation</router-link>
          <span>·</span>
          <router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors">10 Marla Spanish Villa Map</router-link>
          <span>·</span>
          <router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors">1 Kanal Luxury House Plan</router-link>
          <span>·</span>
          <router-link to="/services" class="hover:text-[#088C7E] transition-colors">Top Interior Designers in Lahore</router-link>
          <span>·</span>
          <router-link to="/blog" class="hover:text-[#088C7E] transition-colors">DHA Lahore Building Bylaws</router-link>
          <span>·</span>
          <router-link to="/portfolio" class="hover:text-[#088C7E] transition-colors">Modern Front Elevation Renders 4K</router-link>
          <span>·</span>
          <router-link to="/about" class="hover:text-[#088C7E] transition-colors">Parkview City Lahore Map & Layout</router-link>
          <span>·</span>
          <router-link to="/services" class="hover:text-[#088C7E] transition-colors">3D House Design Elevation Lahore</router-link>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-6">
          <span>{{ t.copyright }}</span>
          <span class="hidden sm:inline text-slate-700">|</span>
          <span class="hover:text-slate-300 cursor-pointer">Parkview City Studio, Lahore</span>
        </div>

        <!-- Social Icons & H&Q Links -->
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
import { useI18n } from '../composables/useI18n.js'
import logoImg from '../assets/logo.jpg'

defineEmits(['open-start-project'])

const { t } = useI18n()

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
