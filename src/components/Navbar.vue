<template>
  <header class="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-2xl">
    
    <!-- TOP ARCHITECTURAL UTILITY STRIP -->
    <div class="bg-[#080B10] text-slate-300 py-2 px-3 sm:px-6 text-[11px] border-b border-white/5">
      <div class="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        
        <!-- Mobile Header Bar: Logo on Left, Controls on Right -->
        <div class="flex lg:hidden items-center justify-between w-full gap-2">
          <router-link to="/" class="flex items-center gap-2 shrink-0 py-0.5 min-w-0">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-9 w-auto object-contain drop-shadow-md shrink-0"
            />
            <div class="flex flex-col min-w-0">
              <span class="font-extrabold text-white text-[11px] sm:text-xs tracking-wider truncate">H&amp;Q DESIGN SERVICES</span>
              <span class="text-[8px] sm:text-[9px] text-[#C5A880] tracking-widest uppercase font-semibold">ARCHITECTURE</span>
            </div>
          </router-link>

          <div class="flex items-center gap-1.5 shrink-0">
            <!-- Mobile Call Button -->
            <a 
              href="tel:03134487315" 
              class="bg-white/5 hover:bg-[#C5A880]/20 text-white w-8 h-8 rounded-lg text-xs border border-white/10 flex items-center justify-center cursor-pointer transition-colors"
              title="Call Studio Lahore"
            >
              <i class="fa-solid fa-phone text-xs text-[#C5A880]"></i>
            </a>

            <!-- Mobile WhatsApp Button -->
            <button 
              type="button" 
              @click="openWhatsApp('923134487315')" 
              class="bg-emerald-600/30 hover:bg-emerald-600/50 text-white w-8 h-8 rounded-lg text-xs border border-emerald-500/30 flex items-center justify-center cursor-pointer transition-colors"
              title="WhatsApp 0313-4487315"
            >
              <i class="fa-brands fa-whatsapp text-sm text-emerald-400"></i>
            </button>

            <!-- Mobile Hamburger Toggle (Always Visible & Prominent) -->
            <button 
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="bg-[#C5A880] hover:bg-[#DFC8A5] text-[#0B0E14] w-9 h-9 rounded-lg text-base focus:outline-none cursor-pointer flex items-center justify-center font-bold shadow-lg shrink-0 ml-1"
              aria-label="Toggle Navigation Menu"
            >
              <i v-if="!mobileMenuOpen" class="fa-solid fa-bars text-sm"></i>
              <i v-else class="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
        </div>

        <!-- Left Side (Desktop): Architectural Studio Credentials -->
        <div class="hidden lg:flex items-center gap-5 font-semibold text-[11px] text-slate-400">
          <span class="flex items-center gap-1.5 text-slate-300">
            <i class="fa-solid fa-award text-[#C5A880] text-xs"></i>
            <span>Licensed PCATP &amp; PEC Architects · 15+ Years Experience</span>
          </span>
          <span class="text-white/20">|</span>
          <span class="flex items-center gap-1.5 text-slate-300">
            <i class="fa-solid fa-location-dot text-[#C5A880] text-xs"></i>
            <span>Lahore Studio · DHA &amp; Park View City</span>
          </span>
          <span class="text-white/20">|</span>
          <a href="tel:03134487315" class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors flex items-center gap-1.5 text-slate-300 font-bold" title="Call Studio Lahore">
            <i class="fa-solid fa-phone text-[#C5A880] text-xs"></i>
            <span>0313-4487315</span>
          </a>
        </div>

        <!-- Right Side (Desktop): WhatsApp Desk, Blog, Keywords, Lang, Theme -->
        <div class="hidden lg:flex items-center gap-4 shrink-0 font-bold text-[11px]">
          <button 
            type="button" 
            @click="openWhatsApp('923134487315')" 
            class="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-emerald-400 font-bold cursor-pointer bg-transparent border-0 p-0 text-[11px]"
          >
            <i class="fa-brands fa-whatsapp text-emerald-400 text-xs"></i>
            <span>Direct WhatsApp Desk: 0313-4487315</span>
          </button>

          <span class="text-white/20">|</span>

          <div class="flex items-center gap-4 uppercase tracking-[0.14em] text-slate-400 text-[10px]">
            <router-link to="/blog" class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors" active-class="text-[#C5A880] font-black">BLOG</router-link>
            <router-link to="/forum" class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors" active-class="text-[#C5A880] font-black">FORUM</router-link>
            <router-link to="/keywords-directory" class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors" active-class="text-[#C5A880] font-black">KEYWORDS</router-link>
          </div>

          <span class="text-white/20">|</span>

          <!-- Language Selector -->
          <div ref="langDropdownRef" class="relative cursor-pointer">
            <button 
              @click="toggleLangDropdown" 
              class="flex items-center gap-1.5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded border border-white/10 text-[10px] text-slate-300"
            >
              <i class="fa-solid fa-globe text-xs text-[#C5A880]"></i>
              <span>{{ activeLangLabel }}</span>
              <i class="fa-solid fa-caret-down text-[9px] text-slate-400"></i>
            </button>

            <div 
              v-if="langHovered" 
              class="absolute right-0 top-full mt-1.5 w-40 bg-[#121620] text-slate-200 rounded-xl shadow-2xl py-2 border border-white/10 z-50 text-xs font-bold"
            >
              <button @click="selectLang('EN')" class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5]">
                <span>GB English</span>
              </button>
              <button @click="selectLang('UR')" class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5]">
                <span>PK اردو</span>
              </button>
              <button @click="selectLang('AR')" class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5]">
                <span>SA العربية</span>
              </button>
            </div>
          </div>

          <!-- Theme Switcher -->
          <button 
            @click="toggleTheme" 
            aria-label="Settings Theme Toggle"
            class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] p-1 cursor-pointer text-xs text-slate-400 hover:bg-white/5 rounded"
            title="Toggle Light/Dark Theme"
          >
            <i v-if="isDark" class="fa-solid fa-sun text-amber-300"></i>
            <i v-else class="fa-solid fa-moon text-slate-300"></i>
          </button>
        </div>

      </div>
    </div>

    <!-- MAIN ARCHITECTURAL SERVICES NAVIGATION BAR -->
    <div class="hidden lg:block bg-white/95 dark:bg-[#0B0E14]/95 backdrop-blur-xl text-slate-800 dark:text-white border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-22 gap-6">
          
          <!-- Brand Logo with Updated 3D Gold Logo & Luxury Service Typography -->
          <router-link to="/" class="h-full flex items-center gap-3.5 group focus:outline-none shrink-0 py-2">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-14 w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
            <div class="flex flex-col">
              <span class="text-lg font-black tracking-[0.16em] text-slate-900 dark:text-white leading-tight group-hover:text-[#946E3A] dark:group-hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors">
                H&amp;Q DESIGN SERVICES
              </span>
              <span class="text-[9.5px] font-bold tracking-[0.24em] text-[#C5A880] uppercase">
                ARCHITECTURE &amp; INTERIOR STUDIO
              </span>
            </div>
          </router-link>

          <!-- Core Service Business Navigation Links -->
          <nav class="hidden lg:flex items-center gap-7 text-[11.5px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-[0.16em]">
            
            <router-link 
              to="/" 
              class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors py-2 relative group"
              active-class="text-[#C5A880] font-black"
            >
              <span>HOME</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <!-- 1. OUR SERVICES (Core Focus) -->
            <div class="relative group py-2">
              <router-link 
                to="/services" 
                class="flex items-center gap-1.5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors font-extrabold uppercase cursor-pointer"
                active-class="text-[#C5A880] font-black"
              >
                <span>SERVICES</span>
                <i class="fa-solid fa-angle-down text-[10px] text-slate-400 transition-transform group-hover:rotate-180"></i>
              </router-link>

              <div class="absolute left-0 top-full hidden group-hover:block w-72 bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 rounded-2xl shadow-2xl py-3 border border-slate-200 dark:border-white/10 z-50 text-xs normal-case tracking-normal">
                <router-link to="/services" class="block px-4 py-2.5 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-3">
                  <i class="fa-solid fa-compass-drafting text-[#C5A880] w-4 text-center"></i>
                  <div>
                    <span class="block">Architectural Floor Planning</span>
                    <span class="text-[10px] text-slate-400 block font-normal">2D Blueprints, Sections, DHA Submissions</span>
                  </div>
                </router-link>
                <router-link to="/services" class="block px-4 py-2.5 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-3">
                  <i class="fa-solid fa-couch text-[#C5A880] w-4 text-center"></i>
                  <div>
                    <span class="block">Luxury Interior Architecture</span>
                    <span class="text-[10px] text-slate-400 block font-normal">Italian Marble, False Ceilings, Bespoke Woodwork</span>
                  </div>
                </router-link>
                <router-link to="/services" class="block px-4 py-2.5 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-3">
                  <i class="fa-solid fa-cube text-[#C5A880] w-4 text-center"></i>
                  <div>
                    <span class="block">4K 3D Elevations &amp; VR</span>
                    <span class="text-[10px] text-slate-400 block font-normal">Photorealistic Lumion Exteriors &amp; Walkthroughs</span>
                  </div>
                </router-link>
                <router-link to="/services" class="block px-4 py-2.5 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-3">
                  <i class="fa-solid fa-hammer text-[#C5A880] w-4 text-center"></i>
                  <div>
                    <span class="block">Turnkey Construction</span>
                    <span class="text-[10px] text-slate-400 block font-normal">Grey Structure to A+ Luxury Turnkey Execution</span>
                  </div>
                </router-link>
                <router-link to="/services" class="block px-4 py-2.5 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-3">
                  <i class="fa-solid fa-wand-magic-sparkles text-[#C5A880] w-4 text-center"></i>
                  <div>
                    <span class="block">Complete House Renovation</span>
                    <span class="text-[10px] text-slate-400 block font-normal">Facade Updates, Bathroom &amp; Kitchen Remodeling</span>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- 2. PORTFOLIO & RECENT WORKS -->
            <div class="relative group py-2">
              <router-link 
                to="/portfolio" 
                class="flex items-center gap-1.5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors font-extrabold uppercase cursor-pointer"
                active-class="text-[#C5A880] font-black"
              >
                <span>PORTFOLIO</span>
                <i class="fa-solid fa-angle-down text-[10px] text-slate-400 transition-transform group-hover:rotate-180"></i>
              </router-link>

              <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 rounded-2xl shadow-2xl py-3 border border-slate-200 dark:border-white/10 z-50 text-xs normal-case tracking-normal">
                <router-link to="/portfolio" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-cubes text-[#C5A880] w-4"></i>
                  <span>3D Elevations &amp; Blueprints</span>
                </router-link>
                <router-link to="/portfolio" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-house-chimney-window text-[#C5A880] w-4"></i>
                  <span>5M, 10M &amp; 1K Luxury Villas</span>
                </router-link>
                <router-link to="/portfolio" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-building text-[#C5A880] w-4"></i>
                  <span>Commercial Glass Plazas</span>
                </router-link>
                <router-link to="/case-studies" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-file-invoice text-[#C5A880] w-4"></i>
                  <span>Completed Case Studies</span>
                </router-link>
              </div>
            </div>

            <!-- 3. COST ESTIMATOR (Interactive Pricing Tool) -->
            <router-link 
              to="/tools?tab=cost-calc" 
              class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors py-2 flex items-center gap-1.5 relative group"
              active-class="text-[#C5A880] font-black"
            >
              <i class="fa-solid fa-calculator text-[#C5A880] text-xs"></i>
              <span>ESTIMATOR</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <!-- 4. ABOUT STUDIO -->
            <router-link 
              to="/about" 
              class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors py-2 relative group"
              active-class="text-[#C5A880] font-black"
            >
              <span>ABOUT STUDIO</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

            <!-- 5. CLIENT REVIEWS -->
            <router-link 
              to="/reviews" 
              class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors py-2 flex items-center gap-1.5 relative group"
              active-class="text-[#C5A880] font-black"
            >
              <span>REVIEWS</span>
              <span class="px-1.5 py-0.5 rounded-full bg-[#C5A880]/15 text-[#DFC8A5] font-black text-[9px] flex items-center gap-0.5 border border-[#C5A880]/30">
                <i class="fa-solid fa-star text-[7px] text-[#C5A880]"></i>5.0
              </span>
            </router-link>

            <!-- 6. RESOURCES & PORTAL (Preserving all routes like /properties, /projects, /area-guides) -->
            <div class="relative group py-2">
              <button class="flex items-center gap-1.5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors font-extrabold uppercase cursor-pointer">
                <span>PORTAL</span>
                <i class="fa-solid fa-angle-down text-[10px] text-slate-400 transition-transform group-hover:rotate-180"></i>
              </button>
              
              <div class="absolute right-0 top-full hidden group-hover:block w-64 bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 rounded-2xl shadow-2xl py-3 border border-slate-200 dark:border-white/10 z-50 text-xs normal-case tracking-normal">
                <router-link to="/properties" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-house text-[#C5A880] w-4"></i>
                  <span>Verified Properties for Sale</span>
                </router-link>
                <router-link to="/projects" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-city text-[#C5A880] w-4"></i>
                  <span>New Housing Projects</span>
                </router-link>
                <router-link to="/area-guides" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-location-dot text-[#C5A880] w-4"></i>
                  <span>Society Area &amp; Bylaw Guides</span>
                </router-link>
                <router-link to="/tools" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-ruler-combined text-[#C5A880] w-4"></i>
                  <span>Plot Finder &amp; Unit Converter</span>
                </router-link>
                <router-link to="/trends" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-arrow-trend-up text-[#C5A880] w-4"></i>
                  <span>Price Index &amp; Market Trends</span>
                </router-link>
                <router-link to="/agents" class="block px-4 py-2 hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] font-bold flex items-center gap-2.5">
                  <i class="fa-solid fa-users text-[#C5A880] w-4"></i>
                  <span>Consultants &amp; Engineers</span>
                </router-link>
              </div>
            </div>

            <!-- 7. CONTACT US -->
            <router-link 
              to="/contact" 
              class="hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors py-2 relative group"
              active-class="text-[#C5A880] font-black"
            >
              <span>CONTACT</span>
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </router-link>

          </nav>

          <!-- Right Action CTA Buttons -->
          <div class="hidden lg:flex items-center gap-3 shrink-0">
            <!-- Book Studio Consultation CTA Button -->
            <button 
              @click="$emit('open-start-project')"
              class="px-6 py-3 rounded-full tecture-btn-gold text-xs shadow-xl cursor-pointer flex items-center gap-2 whitespace-nowrap"
            >
              <i class="fa-solid fa-calendar-check text-xs"></i>
              <span>Book Consultation</span>
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="mobileMenuOpen"
      class="lg:hidden border-t border-white/10 bg-white dark:bg-[#0B0E14] text-slate-800 dark:text-slate-200 px-4 pt-4 pb-6 space-y-2 shadow-2xl border-t border-slate-200 dark:border-white/10 max-h-[85vh] overflow-y-auto"
    >
      <div class="pb-3 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img :src="logoImg" alt="H&Q Logo" class="h-8 w-auto object-contain" />
          <span class="text-xs font-black tracking-wider text-slate-900 dark:text-white">H&amp;Q DESIGN SERVICES</span>
        </div>
        <span class="text-[10px] text-[#C5A880] font-bold">ARCHITECTURE STUDIO</span>
      </div>

      <router-link 
        v-for="item in mobileNavLinks" 
        :key="item.path" 
        :to="item.path"
        @click="mobileMenuOpen = false"
        class="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-[#946E3A] dark:hover:text-[#DFC8A5] transition-colors flex items-center gap-3"
        active-class="bg-[#C5A880]/15 text-[#DFC8A5] font-black border border-[#C5A880]/30"
      >
        <i :class="item.iconClass + ' text-[#C5A880] w-5 text-center'"></i>
        <span>{{ item.name }}</span>
      </router-link>

      <div class="pt-4 border-t border-white/10 space-y-3">
        <button 
          @click="openRequestServiceFromMobile"
          class="w-full py-3 rounded-xl tecture-btn-gold text-xs text-center flex items-center justify-center gap-2 cursor-pointer shadow-xl"
        >
          <i class="fa-solid fa-calendar-check text-xs"></i>
          <span>Book Architectural Consultation</span>
        </button>

        <div class="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-white/5 text-xs font-bold text-slate-400">
          <div class="flex items-center gap-2">
            <button @click="selectLang('EN')" :class="currentLang === 'EN' ? 'text-[#DFC8A5] font-black' : 'hover:text-white'">GB English</button>
            <span>|</span>
            <button @click="selectLang('UR')" :class="currentLang === 'UR' ? 'text-[#DFC8A5] font-black' : 'hover:text-white'">PK اردو</button>
            <span>|</span>
            <button @click="selectLang('AR')" :class="currentLang === 'AR' ? 'text-[#DFC8A5] font-black' : 'hover:text-white'">SA العربية</button>
          </div>
          <button @click="toggleTheme" class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5 cursor-pointer">
            <i v-if="isDark" class="fa-solid fa-sun text-amber-300"></i>
            <i v-else class="fa-solid fa-moon text-slate-300"></i>
            <span>{{ isDark ? 'Light' : 'Dark' }}</span>
          </button>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import { openWhatsApp } from '../utils/whatsapp.js'
import logoImg from '../assets/logo.png'

const emit = defineEmits(['open-start-project', 'open-add-property'])

const { currentLang, setLanguage, initI18n } = useI18n()

const mobileMenuOpen = ref(false)
const isDark = ref(true)

const langHovered = ref(false)
const langDropdownRef = ref(null)

const toggleLangDropdown = (event) => {
  event.stopPropagation()
  langHovered.value = !langHovered.value
}

const handleClickOutside = (event) => {
  if (langDropdownRef.value && !langDropdownRef.value.contains(event.target)) {
    langHovered.value = false
  }
}

const activeLangLabel = computed(() => {
  if (currentLang.value === 'UR') return 'PK اردو'
  if (currentLang.value === 'AR') return 'SA العربية'
  return 'GB English'
})

const selectLang = (langCode) => {
  setLanguage(langCode)
  langHovered.value = false
}

const mobileNavLinks = [
  { name: 'ARCHITECTURAL & INTERIOR SERVICES', path: '/services', iconClass: 'fa-solid fa-compass-drafting' },
  { name: 'FEATURED 3D PORTFOLIO & ELEVATIONS', path: '/portfolio', iconClass: 'fa-solid fa-cubes' },
  { name: '2026 CONSTRUCTION COST ESTIMATOR', path: '/tools?tab=cost-calc', iconClass: 'fa-solid fa-calculator' },
  { name: 'ABOUT OUR ARCHITECTURAL STUDIO', path: '/about', iconClass: 'fa-solid fa-building-user' },
  { name: 'COMPLETED CASE STUDIES', path: '/case-studies', iconClass: 'fa-solid fa-file-invoice' },
  { name: 'GOOGLE CLIENT REVIEWS (5.0 ★)', path: '/reviews', iconClass: 'fa-solid fa-star' },
  { name: 'CONTACT & STUDIO LOCATION', path: '/contact', iconClass: 'fa-solid fa-headset' },
  { name: 'PROPERTIES & HOUSING PORTAL', path: '/properties', iconClass: 'fa-solid fa-house' },
  { name: 'NEW MEGA PROJECTS', path: '/projects', iconClass: 'fa-solid fa-city' },
  { name: 'AREA BYLAW GUIDES', path: '/area-guides', iconClass: 'fa-solid fa-location-dot' },
  { name: 'PRICE TRENDS & MARKET INDEX', path: '/trends', iconClass: 'fa-solid fa-arrow-trend-up' },
  { name: 'CERTIFIED CONSULTANTS & DEALERS', path: '/agents', iconClass: 'fa-solid fa-users' },
  { name: 'FORUM Q&A', path: '/forum', iconClass: 'fa-solid fa-comments' },
  { name: 'BLOG GUIDES', path: '/blog', iconClass: 'fa-solid fa-newspaper' },
  { name: 'PARTNERS & MATERIAL NETWORK', path: '/partners', iconClass: 'fa-solid fa-link' },
  { name: 'KEYWORDS DIRECTORY', path: '/keywords-directory', iconClass: 'fa-solid fa-tags' }
]

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('hq-theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('hq-theme', 'light')
  }
}

const openRequestServiceFromMobile = () => {
  mobileMenuOpen.value = false
  emit('open-start-project')
}

onMounted(() => {
  initI18n()
  isDark.value = document.documentElement.classList.contains('dark')
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
