<template>
  <header class="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-md">
    
    <!-- TOP UTILITY TIER (Green Bar) -->
    <div class="bg-[#088C7E] text-white py-2.5 px-4 text-xs">
      <div class="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
        
        <!-- Left Side: Contact Snippets -->
        <div class="flex flex-wrap items-center justify-center gap-4 font-bold text-[11px]">
          <a href="tel:03416887454" class="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <i class="fa-solid fa-phone text-xs"></i>
            <span>0341-6887454</span>
          </a>
          <span class="text-white/30 hidden sm:inline">|</span>
          <a href="https://wa.me/966507143124" target="_blank" class="hover:text-amber-300 transition-colors flex items-center gap-1.5">
            <i class="fa-brands fa-whatsapp text-sm text-emerald-400"></i>
            <span>KSA Architect Desk: +966 50 714 3124</span>
          </a>
        </div>

        <!-- Right Side: Secondary Links, Lang, Theme & Controls -->
        <div class="flex items-center gap-4 shrink-0 font-bold text-[11px]">
          
          <!-- Secondary Links (Forum, Blog, Partners, Keywords) -->
          <div class="hidden lg:flex items-center gap-4 uppercase tracking-wider text-white/90">
            <router-link to="/forum" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">FORUM Q&A</router-link>
            <router-link to="/blog" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">BLOG</router-link>
            <router-link to="/partners" class="hover:text-amber-300 transition-colors flex items-center gap-1" active-class="text-amber-300 font-black">
              <i class="fa-solid fa-link text-[10px]"></i>
              <span>PARTNERS</span>
            </router-link>
            <router-link to="/keywords-directory" class="hover:text-amber-300 transition-colors flex items-center gap-1" active-class="text-amber-300 font-black">
              <i class="fa-solid fa-tags text-[10px]"></i>
              <span>KEYWORDS</span>
            </router-link>
          </div>

          <span class="text-white/30 hidden lg:inline">|</span>

          <!-- Language Selector -->
          <div 
            ref="langDropdownRef"
            class="relative cursor-pointer" 
          >
            <button 
              @click="toggleLangDropdown"
              class="flex items-center gap-1.5 hover:text-amber-300 bg-white/10 px-2.5 py-1 rounded border border-white/20 text-[10px]"
            >
              <i class="fa-solid fa-globe text-xs"></i>
              <span>{{ activeLangLabel }}</span>
              <i class="fa-solid fa-caret-down text-[9px]"></i>
            </button>

            <!-- Language Dropdown Menu -->
            <div 
              v-if="langHovered" 
              class="absolute right-0 top-full mt-1.5 w-40 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl shadow-2xl py-2 border border-slate-200 dark:border-slate-800 z-50 text-xs font-bold"
            >
              <button 
                @click="selectLang('EN')" 
                class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E]"
              >
                <span>GB English</span>
              </button>
              <button 
                @click="selectLang('UR')" 
                class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E]"
              >
                <span>PK Urdu</span>
              </button>
              <button 
                @click="selectLang('AR')" 
                class="w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E]"
              >
                <span>SA Arabic</span>
              </button>
            </div>
          </div>

          <!-- Theme Switcher -->
          <button 
            @click="toggleTheme" 
            aria-label="Settings Theme Toggle"
            class="hover:text-amber-300 p-0.5 cursor-pointer text-xs"
            title="Toggle Light/Dark Theme"
          >
            <i v-if="isDark" class="fa-solid fa-sun text-amber-300"></i>
            <i v-else class="fa-solid fa-gear text-white"></i>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden ml-1 text-white text-base focus:outline-none cursor-pointer"
          >
            <i v-if="!mobileMenuOpen" class="fa-solid fa-bars"></i>
            <i v-else class="fa-solid fa-xmark"></i>
          </button>

        </div>

      </div>
    </div>

    <!-- MAIN MENU TIER (White/Dark Bar) -->
    <div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-6">
          
          <!-- Logo -->
          <router-link to="/" class="h-full flex items-center group focus:outline-none shrink-0 py-1">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-full w-full object-contain hover:scale-105 transition-transform"
            />
          </router-link>

          <!-- Consolidated Navigation Menu with Hover Dropdowns -->
          <nav class="hidden lg:flex items-center gap-6 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
            
            <!-- 1. Properties & Societies (Dropdown) -->
            <div class="relative group py-2">
              <button class="flex items-center gap-1 hover:text-[#088C7E] dark:hover:text-emerald-400 transition-colors font-bold uppercase cursor-pointer">
                <span>Properties</span>
                <i class="fa-solid fa-caret-down text-[10px] transition-transform group-hover:rotate-180"></i>
              </button>
              
              <div class="absolute left-0 top-full hidden group-hover:block w-60 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl shadow-2xl py-2.5 border border-slate-200 dark:border-slate-800 z-50 text-xs normal-case tracking-normal">
                <router-link to="/properties?purpose=For Sale" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-house text-[#088C7E]"></i>
                  <span>Homes for Sale</span>
                </router-link>
                <router-link to="/properties?purpose=Plots" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-map-location-dot text-[#088C7E]"></i>
                  <span>Plots & Society Maps</span>
                </router-link>
                <router-link to="/properties?purpose=Commercial" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-building text-[#088C7E]"></i>
                  <span>Commercial Plazas</span>
                </router-link>
                <div class="border-t border-slate-100 dark:border-slate-800 my-1.5"></div>
                <router-link to="/projects" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-city text-[#088C7E]"></i>
                  <span>New Housing Projects</span>
                </router-link>
                <router-link to="/area-guides" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-location-dot text-[#088C7E]"></i>
                  <span>Area & Bylaw Guides</span>
                </router-link>
                <router-link to="/trends" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-arrow-trend-up text-[#088C7E]"></i>
                  <span>Market Price Index</span>
                </router-link>
                <router-link to="/agents" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-users text-[#088C7E]"></i>
                  <span>Consultants & Dealers</span>
                </router-link>
              </div>
            </div>

            <!-- 2. Architectural Services (Dropdown) -->
            <div class="relative group py-2">
              <button class="flex items-center gap-1 hover:text-[#088C7E] dark:hover:text-emerald-400 transition-colors font-bold uppercase cursor-pointer">
                <span>Architecture</span>
                <i class="fa-solid fa-caret-down text-[10px] transition-transform group-hover:rotate-180"></i>
              </button>

              <div class="absolute left-0 top-full hidden group-hover:block w-56 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl shadow-2xl py-2.5 border border-slate-200 dark:border-slate-800 z-50 text-xs normal-case tracking-normal">
                <router-link to="/portfolio" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-cubes text-[#088C7E]"></i>
                  <span>3D Elevations & Portfolio</span>
                </router-link>
                <router-link to="/services" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i>
                  <span>Luxury Interior Design</span>
                </router-link>
                <router-link to="/case-studies" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-file-invoice text-[#088C7E]"></i>
                  <span>Completed Case Studies</span>
                </router-link>
              </div>
            </div>

            <!-- 3. Construction & Property Tools (Dropdown) -->
            <div class="relative group py-2">
              <button class="flex items-center gap-1 hover:text-[#088C7E] dark:hover:text-emerald-400 transition-colors font-bold uppercase cursor-pointer">
                <span>Interactive Tools</span>
                <i class="fa-solid fa-caret-down text-[10px] transition-transform group-hover:rotate-180"></i>
              </button>

              <div class="absolute left-0 top-full hidden group-hover:block w-64 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl shadow-2xl py-2.5 border border-slate-200 dark:border-slate-800 z-50 text-xs normal-case tracking-normal">
                <router-link to="/tools?tab=cost-calc" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-calculator text-[#088C7E]"></i>
                  <span>Construction Cost Calculator</span>
                </router-link>
                <router-link to="/tools?tab=plot-finder" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-map-location-dot text-[#088C7E]"></i>
                  <span>Plot Finder & Master Maps</span>
                </router-link>
                <router-link to="/tools?tab=unit-converter" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-ruler-combined text-[#088C7E]"></i>
                  <span>Area Unit Converter</span>
                </router-link>
                <router-link to="/tools?tab=mortgage-calc" class="block px-4 py-2 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-[#088C7E] dark:hover:text-emerald-400 font-bold flex items-center gap-2">
                  <i class="fa-solid fa-landmark text-[#088C7E]"></i>
                  <span>Mortgage & EMI Calculator</span>
                </router-link>
              </div>
            </div>

            <!-- Standalone Main Pages -->
            <router-link 
              to="/about" 
              class="hover:text-[#088C7E] dark:hover:text-emerald-400 transition-colors py-2"
              active-class="text-[#088C7E] dark:text-emerald-400 font-black"
            >
              About Studio
            </router-link>

            <router-link 
              to="/contact" 
              class="hover:text-[#088C7E] dark:hover:text-emerald-400 transition-colors py-2"
              active-class="text-[#088C7E] dark:text-emerald-400 font-black"
            >
              Contact Us
            </router-link>

          </nav>

          <!-- Right Action CTA Buttons -->
          <div class="hidden lg:flex items-center gap-3 shrink-0">
            <!-- Add Property CTA Button -->
            <button 
              @click="$emit('open-add-property')"
              class="px-4 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black tracking-tight shadow transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <i class="fa-solid fa-plus text-xs"></i>
              <span>+ Add Property</span>
            </button>

            <!-- Request Service CTA Button -->
            <button 
              @click="$emit('open-start-project')"
              class="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white text-xs font-black tracking-tight shadow transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            >
              <i class="fa-solid fa-pen-ruler text-xs"></i>
              <span>Request Service</span>
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div 
      v-if="mobileMenuOpen"
      class="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-4 pt-4 pb-6 space-y-2 shadow-2xl max-h-[80vh] overflow-y-auto"
    >
      <router-link 
        v-for="item in mobileNavLinks" 
        :key="item.path" 
        :to="item.path"
        @click="mobileMenuOpen = false"
        class="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-3"
        active-class="bg-emerald-500/10 text-[#088C7E] font-black"
      >
        <i :class="item.iconClass + ' text-[#088C7E] w-5 text-center'"></i>
        <span>{{ item.name }}</span>
      </router-link>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
        <div class="grid grid-cols-2 gap-2">
          <button 
            @click="openAddPropertyFromMobile"
            class="py-3 rounded-xl bg-[#088C7E] text-white font-black text-[10px] uppercase tracking-wider text-center shadow-lg shadow-[#088C7E]/20 flex items-center justify-center gap-1.5"
          >
            <i class="fa-solid fa-plus text-xs"></i>
            <span>+ Add Property</span>
          </button>

          <button 
            @click="openRequestServiceFromMobile"
            class="py-3 rounded-xl bg-amber-500 text-white font-black text-[10px] uppercase tracking-wider text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-1.5"
          >
            <i class="fa-solid fa-pen-ruler text-xs"></i>
            <span>Request Service</span>
          </button>
        </div>

        <div class="flex justify-center items-center gap-4 pt-2 text-xs font-bold">
          <button @click="selectLang('EN')" :class="currentLang === 'EN' ? 'text-[#088C7E]' : 'text-slate-400'">GB English</button>
          <span>|</span>
          <button @click="selectLang('UR')" :class="currentLang === 'UR' ? 'text-[#088C7E]' : 'text-slate-400'">PK اردو</button>
          <span>|</span>
          <button @click="selectLang('AR')" :class="currentLang === 'AR' ? 'text-[#088C7E]' : 'text-slate-400'">SA العربية</button>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
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
  { name: 'PROPERTIES (BUY/RENT)', path: '/properties', iconClass: 'fa-solid fa-house' },
  { name: 'NEW PROJECTS & INSTALLMENTS', path: '/projects', iconClass: 'fa-solid fa-city' },
  { name: 'CONSTRUCTION TOOLS & MAPS', path: '/tools', iconClass: 'fa-solid fa-calculator' },
  { name: 'AREA GUIDES & SOCIETIES', path: '/area-guides', iconClass: 'fa-solid fa-location-dot' },
  { name: 'PRICE TRENDS & INDEX', path: '/trends', iconClass: 'fa-solid fa-arrow-trend-up' },
  { name: 'CERTIFIED AGENTS & ARCHITECTS', path: '/agents', iconClass: 'fa-solid fa-users-gear' },
  { name: 'FORUM Q&A', path: '/forum', iconClass: 'fa-solid fa-comments' },
  { name: 'FEATURED 3D PORTFOLIO', path: '/portfolio', iconClass: 'fa-solid fa-images' },
  { name: 'SERVICES & DELIVERABLES', path: '/services', iconClass: 'fa-solid fa-compass-drafting' },
  { name: 'BLOG & NEWS', path: '/blog', iconClass: 'fa-solid fa-newspaper' },
  { name: 'PARTNERS & BACKLINKS HUB', path: '/partners', iconClass: 'fa-solid fa-link' },
  { name: 'TRENDING KEYWORDS', path: '/keywords-directory', iconClass: 'fa-solid fa-tags' },
  { name: 'ABOUT US', path: '/about', iconClass: 'fa-solid fa-circle-info' },
  { name: 'CONTACT & LOCATION', path: '/contact', iconClass: 'fa-solid fa-headset' }
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

const openAddPropertyFromMobile = () => {
  mobileMenuOpen.value = false
  emit('open-add-property')
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
