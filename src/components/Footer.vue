<template>
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-px bg-gradient-to-r from-transparent via-[#088C7E]/50 to-transparent"></div>
    
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Top 5-Column Zameen Footer Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        
        <!-- Brand Info (Zameen Partner Studio) -->
        <div class="lg:col-span-2 space-y-5">
          <router-link to="/" class="flex items-center gap-3">
            <span class="font-black text-2xl text-white tracking-tight">H&Q</span>
            <span class="w-2.5 h-2.5 rounded-full bg-[#088C7E]"></span>
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

          <!-- Contact Snippet -->
          <div class="text-xs text-slate-300 space-y-2 pt-2">
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-[#088C7E] text-xs"></i>
              <span>Parkview City, Lahore, Punjab, Pakistan</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-phone text-[#088C7E] text-xs"></i>
              <span>0313-4487315 | 🇸🇦 +966 50 714 3124</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="fa-solid fa-envelope text-[#088C7E] text-xs"></i>
              <span>asadali2899@gmail.com</span>
            </p>
          </div>
        </div>

        <!-- Zameen Popular Searches Column -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.popularSearches }}</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house-chimney text-[10px] text-[#088C7E]"></i> 5 Marla Villa Designs</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-house-user text-[10px] text-[#088C7E]"></i> 10 Marla Spanish House Maps</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-landmark text-[10px] text-[#088C7E]"></i> 1 Kanal Luxury Elevation</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-building text-[10px] text-[#088C7E]"></i> Commercial Plazas Gulberg</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-couch text-[10px] text-[#088C7E]"></i> DHA Interior Design Pkg</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-hammer text-[10px] text-[#088C7E]"></i> Turnkey Villa Renovation</a></li>
          </ul>
        </div>

        <!-- Zameen Area Guides & Cities -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.areaGuides }}</h4>
          <ul class="space-y-2 text-xs">
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-location-dot text-[10px] text-amber-500"></i> Parkview City Lahore</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> DHA Lahore (Ph 1-9)</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> Gulberg 3 Commercial</router-link></li>
            <li><router-link to="/about" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-city text-[10px] text-slate-500"></i> Bahria Town Lahore</router-link></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-globe text-[10px] text-[#088C7E]"></i> Islamabad & DHA Phase 2</a></li>
            <li><a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-[#088C7E] transition-colors flex items-center gap-1.5"><i class="fa-solid fa-globe text-[10px] text-[#088C7E]"></i> Karachi & Scheme 33</a></li>
          </ul>
        </div>

        <!-- Newsletter & Zameen Apps Download -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">{{ t.zameenAppUpdates }}</h4>
          <p class="text-xs text-slate-400">Get instant floor plan estimates and 3D design updates right on your phone.</p>
          
          <form @submit.prevent="subscribe" class="space-y-2">
            <div class="relative">
              <input 
                v-model="email" 
                type="email" 
                required
                placeholder="your.email@gmail.com" 
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
            <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#088C7E] text-white text-[10px] font-bold flex items-center gap-1.5">
              <i class="fa-brands fa-google-play text-xs text-[#088C7E]"></i>
              <span>Google Play</span>
            </a>
            <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#088C7E] text-white text-[10px] font-bold flex items-center gap-1.5">
              <i class="fa-brands fa-apple text-xs text-amber-400"></i>
              <span>App Store</span>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="flex items-center gap-6">
          <span>{{ t.copyright }}</span>
          <span class="hidden sm:inline text-slate-700">|</span>
          <span class="hover:text-slate-300 cursor-pointer">Parkview City Studio, Lahore</span>
        </div>

        <!-- Social Icons & Zameen Links -->
        <div class="flex items-center gap-4 text-slate-400">
          <a href="https://www.facebook.com/share/1JFuAoDXzr/" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Facebook">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/chasad_ali/" target="_blank" rel="noopener" class="hover:text-white transition-colors text-base" title="Instagram">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="hover:text-amber-400 transition-colors text-base" title="Zameen.com Partner">
            <i class="fa-solid fa-award"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n.js'

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
