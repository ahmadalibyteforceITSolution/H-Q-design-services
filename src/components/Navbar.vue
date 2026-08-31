<template>
  <header class="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-md">
    
    <!-- TOP GREEN TIER (Style Header Tier 1) -->
    <div class="bg-[#088C7E] text-white py-2 px-4 text-xs">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        <!-- Left Nav Links in Top Green Bar -->
        <div class="hidden lg:flex items-center gap-5 font-bold uppercase tracking-wider text-[11px]">
          <router-link to="/properties" class="hover:text-amber-300 transition-colors flex items-center gap-1.5" active-class="text-amber-300 font-black">
            <i class="fa-solid fa-house text-xs"></i>
            <span>PROPERTIES</span>
          </router-link>

          <router-link to="/projects" class="hover:text-amber-300 transition-colors flex items-center gap-1.5 relative" active-class="text-amber-300 font-black">
            <span>NEW PROJECTS</span>
            <span class="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-tight animate-pulse">NEW</span>
          </router-link>

          <router-link to="/area-guides" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">
            AREA GUIDES
          </router-link>

          <router-link to="/trends" class="hover:text-amber-300 transition-colors flex items-center gap-1" active-class="text-amber-300 font-black">
            <i class="fa-solid fa-arrow-trend-up text-[10px] text-amber-300"></i>
            <span>TRENDS</span>
          </router-link>

          <router-link to="/agents" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">
            AGENTS & ARCHITECTS
          </router-link>

          <router-link to="/forum" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">
            FORUM Q&A
          </router-link>

          <router-link to="/blog" class="hover:text-amber-300 transition-colors" active-class="text-amber-300 font-black">
            BLOG
          </router-link>

          <router-link to="/partners" class="hover:text-amber-300 transition-colors flex items-center gap-1" active-class="text-amber-300 font-black">
            <i class="fa-solid fa-link text-[10px] text-amber-300"></i>
            <span>PARTNERS & BACKLINKS</span>
          </router-link>

          <!-- Tools Dropdown (Cost Calc, Maps, Unit Converter, Mortgage) -->
          <div 
            class="relative cursor-pointer hover:text-amber-300 transition-colors" 
            @mouseenter="toolsHovered = true" 
            @mouseleave="toolsHovered = false"
          >
            <div class="flex items-center gap-1 py-1">
              <span>TOOLS</span>
              <i class="fa-solid fa-caret-down text-[10px]"></i>
            </div>
            <!-- Dropdown Menu -->
            <div v-if="toolsHovered" class="absolute left-0 top-full mt-1 w-56 bg-white text-slate-900 rounded-xl shadow-2xl py-2 border border-slate-200 z-50 text-xs normal-case tracking-normal">
              <router-link to="/tools" @click="toolsHovered = false" class="block px-4 py-2.5 hover:bg-emerald-50 hover:text-[#088C7E] font-bold flex items-center gap-2">
                <i class="fa-solid fa-calculator text-[#088C7E]"></i>
                <span>Construction Cost Calculator</span>
              </router-link>
              <router-link to="/tools" @click="toolsHovered = false" class="block px-4 py-2.5 hover:bg-emerald-50 hover:text-[#088C7E] font-bold flex items-center gap-2">
                <i class="fa-solid fa-map-location-dot text-[#088C7E]"></i>
                <span>Plot Finder & Master Maps</span>
              </router-link>
              <router-link to="/tools" @click="toolsHovered = false" class="block px-4 py-2.5 hover:bg-emerald-50 hover:text-[#088C7E] font-bold flex items-center gap-2">
                <i class="fa-solid fa-ruler-combined text-[#088C7E]"></i>
                <span>Area Unit Converter</span>
              </router-link>
              <router-link to="/tools" @click="toolsHovered = false" class="block px-4 py-2.5 hover:bg-emerald-50 hover:text-[#088C7E] font-bold flex items-center gap-2">
                <i class="fa-solid fa-landmark text-[#088C7E]"></i>
                <span>Mortgage & EMI Calculator</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right Side Controls in Top Green Bar -->
        <div class="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
          
          <!-- Add Property CTA Button -->
          <button 
            @click="$emit('open-add-property')"
            class="px-3.5 py-1.5 rounded-lg bg-white text-[#088C7E] hover:bg-slate-100 text-xs font-black tracking-tight shadow transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <i class="fa-solid fa-plus text-xs"></i>
            <span>+ Add Property</span>
          </button>

          <!-- Request Service CTA Button -->
          <button 
            @click="$emit('open-start-project')"
            class="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-white text-xs font-black tracking-tight shadow transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
          >
            <i class="fa-solid fa-pen-ruler text-xs"></i>
            <span>Request Service</span>
          </button>

          <!-- Language Selector Dropdown -->
          <div 
            ref="langDropdownRef"
            class="relative cursor-pointer font-bold text-xs px-1" 
          >
            <button 
              @click="toggleLangDropdown"
              class="flex items-center gap-1.5 hover:text-amber-300 bg-white/10 px-2.5 py-1 rounded-lg border border-white/20"
            >
              <i class="fa-solid fa-globe text-xs"></i>
              <span class="hidden sm:inline">{{ activeLangLabel }}</span>
              <i class="fa-solid fa-caret-down text-[10px]"></i>
            </button>

            <!-- Language Dropdown Menu -->
            <div 
              v-if="langHovered" 
              class="absolute right-0 top-full mt-1.5 w-44 bg-white text-slate-900 rounded-xl shadow-2xl py-2 border border-slate-200 z-50 text-xs font-bold"
            >
              <button 
                @click="selectLang('EN')" 
                :class="['w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 hover:text-[#088C7E]', currentLang === 'EN' ? 'text-[#088C7E] bg-emerald-50' : '']"
              >
                <span>GB English</span>
              </button>
              <button 
                @click="selectLang('UR')" 
                :class="['w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 hover:text-[#088C7E]', currentLang === 'UR' ? 'text-[#088C7E] bg-emerald-50' : '']"
              >
                <span>PK اردو</span>
              </button>
              <button 
                @click="selectLang('AR')" 
                :class="['w-full px-3.5 py-2 text-left flex items-center gap-2 hover:bg-emerald-50 hover:text-[#088C7E]', currentLang === 'AR' ? 'text-[#088C7E] bg-emerald-50' : '']"
              >
                <span>SA العربية</span>
              </button>
            </div>
          </div>

          <!-- Settings Theme Switcher -->
          <button 
            @click="toggleTheme" 
            aria-label="Settings Theme Toggle"
            class="hover:text-amber-300 text-xs p-1 cursor-pointer"
            title="Toggle Light/Dark Theme"
          >
            <i v-if="isDark" class="fa-solid fa-sun text-amber-300"></i>
            <i v-else class="fa-solid fa-gear text-white"></i>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden ml-2 text-white text-base focus:outline-none"
          >
            <i v-if="!mobileMenuOpen" class="fa-solid fa-bars"></i>
            <i v-else class="fa-solid fa-xmark"></i>
          </button>
        </div>

      </div>
    </div>

    <!-- MAIN BOTTOM TIER (White Bar Tier 2) -->
    <div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-6">
          
          <!-- Official H&Q DESIGN SERVICES Image Logo -->
          <router-link to="/" class="h-full flex items-center group focus:outline-none shrink-0 py-1">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-full w-full object-contain hover:scale-105 transition-transform"
            />
          </router-link>

          <!-- Secondary Navigation Links (Bottom Bar Layout) -->
          <nav class="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
            
            <router-link 
              to="/properties" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              HOMES FOR SALE
            </router-link>

            <router-link 
              to="/properties" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
            >
              PLOTS & MAPS
            </router-link>

            <router-link 
              to="/properties" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
            >
              COMMERCIAL PLAZAS
            </router-link>

            <span class="text-slate-300 dark:text-slate-700 font-normal">|</span>

            <router-link 
              to="/portfolio" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              3D ELEVATIONS
            </router-link>

            <router-link 
              to="/services" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              LUXURY INTERIORS
            </router-link>

            <span class="text-slate-300 dark:text-slate-700 font-normal">|</span>

            <router-link 
              to="/case-studies" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              CASE STUDIES
            </router-link>

            <router-link 
              to="/contact" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              CONTACT & MAPS
            </router-link>
          </nav>

          <!-- Contact Snippet on Right of Bottom Bar -->
          <div class="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0">
            <a href="tel:03416887454" class="hover:text-[#088C7E] flex items-center gap-1.5 font-bold">
              <i class="fa-solid fa-phone text-[#088C7E]"></i>
              <span>0341-6887454</span>
            </a>
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

const toolsHovered = ref(false)
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
  { name: 'CONTACT & STUDIO LOCATION', path: '/contact', iconClass: 'fa-solid fa-headset' }
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
