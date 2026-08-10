<template>
  <header class="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 shadow-md">
    
    <!-- TOP GREEN TIER (Zameen.com Style Header Tier 1) -->
    <div class="bg-[#088C7E] text-white py-2 px-4 text-xs">
      <div class="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        <!-- Left Nav Links in Top Green Bar -->
        <div class="hidden lg:flex items-center gap-5 font-bold uppercase tracking-wider text-[11px]">
          <router-link to="/" class="hover:text-amber-300 transition-colors flex items-center gap-1.5" active-class="text-amber-300 font-black">
            <i class="fa-solid fa-house text-xs"></i>
            <span>{{ t.properties }}</span>
          </router-link>
          
          <router-link to="/portfolio" class="hover:text-amber-300 transition-colors flex items-center gap-1.5 relative">
            <span>{{ t.propertyBlocks }}</span>
            <span class="bg-red-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-tight animate-pulse">NEW</span>
          </router-link>

          <router-link to="/about" class="hover:text-amber-300 transition-colors">
            {{ t.parkviewGuides }}
          </router-link>

          <router-link to="/blog" class="hover:text-amber-300 transition-colors">
            {{ t.blog }}
          </router-link>

          <router-link to="/contact" class="hover:text-amber-300 transition-colors">
            {{ t.maps }}
          </router-link>

          <!-- Tools Dropdown (Static on Hover, Removed on Click) -->
          <div 
            class="relative cursor-pointer hover:text-amber-300 transition-colors" 
            @mouseenter="toolsHovered = true" 
            @mouseleave="toolsHovered = false"
          >
            <div class="flex items-center gap-1 py-1">
              <span>{{ t.tools }}</span>
              <i class="fa-solid fa-caret-down text-[10px]"></i>
            </div>
            <!-- Dropdown Menu -->
            <div v-if="toolsHovered" class="absolute left-0 top-full mt-1 w-48 bg-white text-slate-900 rounded-xl shadow-2xl py-2 border border-slate-200 z-50 text-xs normal-case tracking-normal">
              <a href="#results" @click="toolsHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">Design Estimator</a>
              <router-link to="/services" @click="toolsHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">3D Render Calculator</router-link>
              <router-link to="/case-studies" @click="toolsHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">Bylaw Checker</router-link>
            </div>
          </div>

          <!-- More Dropdown (Static on Hover, Removed on Click) -->
          <div 
            class="relative cursor-pointer hover:text-amber-300 transition-colors" 
            @mouseenter="moreHovered = true" 
            @mouseleave="moreHovered = false"
          >
            <div class="flex items-center gap-1 py-1">
              <span>{{ t.more }}</span>
              <i class="fa-solid fa-caret-down text-[10px]"></i>
            </div>
            <div v-if="moreHovered" class="absolute left-0 top-full mt-1 w-48 bg-white text-slate-900 rounded-xl shadow-xl py-2 border border-slate-200 z-50 text-xs normal-case tracking-normal">
              <router-link to="/about" @click="moreHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">About H&Q Studio</router-link>
              <router-link to="/case-studies" @click="moreHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">Case Studies</router-link>
              <router-link to="/contact" @click="moreHovered = false" class="block px-4 py-2 hover:bg-emerald-50 hover:text-[#088C7E]">Contact & Support</router-link>
            </div>
          </div>
        </div>

        <!-- Right Side Controls in Top Green Bar -->
        <div class="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
          
          <!-- Property ID Search Box -->
          <div class="hidden sm:flex items-center bg-white/10 border border-white/30 rounded-lg px-2.5 py-1 text-xs">
            <input 
              type="text" 
              placeholder="Property / Design ID" 
              class="bg-transparent text-white placeholder-white/70 w-28 focus:outline-none text-[11px]"
            />
            <i class="fa-solid fa-magnifying-glass text-white/80 text-[10px] cursor-pointer"></i>
          </div>

          <!-- Add Property / Get Quote White Button -->
          <button 
            @click="$emit('open-start-project')"
            class="hidden sm:flex px-3.5 py-1.5 rounded-lg bg-white text-[#088C7E] hover:bg-slate-100 text-xs font-black tracking-tight shadow transition-all cursor-pointer items-center gap-1.5 whitespace-nowrap"
          >
            <i class="fa-solid fa-plus text-xs"></i>
            <span>{{ t.addProject }}</span>
          </button>

          <!-- Language Selector Dropdown (Static on Hover, Removed on Click) -->
          <div 
            class="relative cursor-pointer font-bold text-xs px-1" 
            @mouseenter="langHovered = true" 
            @mouseleave="langHovered = false"
          >
            <button 
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

          <!-- User Icon -->
          <button @click="$emit('open-start-project')" class="hover:text-amber-300 text-xs p-1">
            <i class="fa-solid fa-user"></i>
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

    <!-- MAIN BOTTOM TIER (Zameen.com White Bar Tier 2) -->
    <div class="bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-6">
          
          <!-- Official H&Q DESIGN SERVICES Image Logo -->
          <router-link to="/" class="flex items-center group focus:outline-none shrink-0 py-1">
            <img 
              :src="logoImg" 
              alt="H&Q Design Services Logo" 
              class="h-14 sm:h-16 w-auto object-contain hover:scale-105 transition-transform"
            />
          </router-link>

          <!-- Secondary Navigation Links (Zameen Bottom Bar Layout) -->
          <nav class="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
            <span class="text-slate-400 font-normal flex items-center gap-1">
              DESIGNS <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
            </span>

            <router-link 
              to="/" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.homesVillas }}
            </router-link>

            <router-link 
              to="/services" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.plotsRenders }}
            </router-link>

            <router-link 
              to="/portfolio" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.commercialPlazas }}
            </router-link>

            <span class="text-slate-300 dark:text-slate-700 font-normal">|</span>

            <router-link 
              to="/services" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.luxuryInteriors }}
            </router-link>

            <span class="text-slate-300 dark:text-slate-700 font-normal">|</span>

            <router-link 
              to="/about" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.agentsArchitects }}
            </router-link>

            <span class="text-slate-300 dark:text-slate-700 font-normal">|</span>

            <router-link 
              to="/case-studies" 
              class="hover:text-[#088C7E] transition-colors py-1 px-2 border-b-2 border-transparent"
              active-class="border-[#088C7E] text-[#088C7E] font-black"
            >
              {{ t.newProjects }}
            </router-link>
          </nav>

          <!-- Contact Snippet on Right of Bottom Bar -->
          <div class="hidden xl:flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0">
            <a href="tel:03416887454" class="hover:text-[#088C7E] flex items-center gap-1.5">
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
      class="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white px-4 pt-4 pb-6 space-y-3 shadow-2xl"
    >
      <router-link 
        v-for="item in mobileNavLinks" 
        :key="item.path" 
        :to="item.path"
        @click="mobileMenuOpen = false"
        class="block px-4 py-3 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-3"
        active-class="bg-emerald-500/10 text-[#088C7E] font-black"
      >
        <i :class="item.iconClass + ' text-[#088C7E]'"></i>
        <span>{{ item.name }}</span>
      </router-link>

      <div class="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
        <button 
          @click="openProjectFromMobile"
          class="w-full py-3 rounded-xl bg-[#088C7E] text-white font-black text-xs uppercase tracking-wider text-center shadow-lg shadow-[#088C7E]/20 flex items-center justify-center gap-2"
        >
          <i class="fa-solid fa-plus text-xs"></i>
          <span>{{ t.addProject }}</span>
        </button>

        <!-- Mobile Language Selector -->
        <div class="flex justify-center items-center gap-4 pt-2 text-xs font-bold">
          <button @click="selectLang('EN')" :class="currentLang === 'EN' ? 'text-[#088C7E]' : 'text-slate-400'">GB English</button>
          <span>|</span>
          <button @click="selectLang('UR')" :class="currentLang === 'UR' ? 'text-[#088C7E]' : 'text-slate-400'">PK اردو</button>
          <span>|</span>
          <button @click="selectLang('AR')" :class="currentLang === 'AR' ? 'text-[#088C7E]' : 'text-slate-400'">SA العربية</button>
        </div>

        <div class="text-xs text-slate-500 dark:text-slate-400 space-y-1 text-center pt-2">
          <p><i class="fa-solid fa-location-dot text-amber-500 mr-1"></i> Parkview City Studio, Lahore</p>
          <p><i class="fa-solid fa-phone text-[#088C7E] mr-1"></i> 0341-6887454 | +966 50 714 3124</p>
        </div>
      </div>
    </div>

  </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'
import logoImg from '../assets/logo.jpg'

const emit = defineEmits(['open-start-project'])

const { currentLang, setLanguage, initI18n, t } = useI18n()

const mobileMenuOpen = ref(false)
const isDark = ref(true)

const toolsHovered = ref(false)
const moreHovered = ref(false)
const langHovered = ref(false)

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
  { name: 'PROPERTIES / HOME', path: '/', iconClass: 'fa-solid fa-house' },
  { name: 'ABOUT H&Q STUDIO', path: '/about', iconClass: 'fa-solid fa-building-user' },
  { name: 'SERVICES & DELIVERABLES', path: '/services', iconClass: 'fa-solid fa-compass-drafting' },
  { name: 'FEATURED PORTFOLIO', path: '/portfolio', iconClass: 'fa-solid fa-images' },
  { name: 'CASE STUDIES', path: '/case-studies', iconClass: 'fa-solid fa-file-contract' },
  { name: 'BLOG & NEWS', path: '/blog', iconClass: 'fa-solid fa-newspaper' },
  { name: 'CONTACT & MAPS', path: '/contact', iconClass: 'fa-solid fa-headset' }
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

const openProjectFromMobile = () => {
  mobileMenuOpen.value = false
  emit('open-start-project')
}

onMounted(() => {
  initI18n()
  isDark.value = document.documentElement.classList.contains('dark')
})
</script>
