<template>
  <div class="space-y-12 pb-16 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Top Hero Banner with Search Engine (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="max-w-[1440px] mx-auto space-y-6 relative z-10">
        
        <!-- Breadcrumb & Tag -->
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">Properties for Sale &amp; Rent in Pakistan</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">VERIFIED ARCHITECTURAL INVENTORY</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Find Your Dream <span class="text-gradient-gold">House, Plot &amp; Commercial</span> Property
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Search 100% verified residential villas, commercial plazas, and on-ground plots with approved architectural 3D blueprints across Lahore, Islamabad, Rawalpindi, and Karachi.
          </p>
        </div>

        <!-- City Quick Filter Badges in Tecture Style -->
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <span class="tecture-tag text-slate-400 mr-1">Top Cities:</span>
          <button 
            v-for="c in cityCounters" 
            :key="c.name"
            @click="selectedCity = c.name"
            :class="[
              'px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 border tracking-wider',
              selectedCity === c.name 
                ? 'tecture-btn-gold shadow-md border-[#C5A880]' 
                : 'bg-white dark:bg-[#0B0E14] text-slate-800 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-[#C5A880] hover:text-slate-900 dark:hover:text-white shadow-sm'
            ]"
          >
            <span>{{ c.name }}</span>
            <span class="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-[#DFC8A5]">{{ c.count }}</span>
          </button>
        </div>

        <!-- Filter Controls Container -->
        <div class="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 shadow-2xl space-y-4">
          
          <!-- Purpose Tabs in Tecture Style -->
          <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-white/10 pb-3 text-xs font-black">
            <button 
              v-for="p in ['All', 'For Sale', 'For Rent', 'Plots', 'Commercial']" 
              :key="p"
              @click="selectedPurpose = p"
              :class="[
                'px-4 py-2 rounded-full transition-all cursor-pointer uppercase tracking-wider text-[11px] font-bold border',
                selectedPurpose === p 
                  ? 'tecture-btn-gold shadow-lg border-[#C5A880]' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-white'
              ]"
            >
              {{ p }}
            </button>
          </div>

          <!-- Dropdowns Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-bold text-slate-900 dark:text-white">
            
            <!-- City -->
            <div class="space-y-1">
              <label class="tecture-tag text-slate-700 dark:text-slate-400 block font-bold">City</label>
              <select v-model="selectedCity" class="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#121620] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#C5A880] cursor-pointer">
                <option value="All">All Cities</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

            <!-- Society / Locality -->
            <div class="space-y-1">
              <label class="tecture-tag text-slate-700 dark:text-slate-400 block font-bold">Housing Society</label>
              <select v-model="selectedSociety" class="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#121620] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#C5A880] cursor-pointer">
                <option value="All">All Societies</option>
                <option value="DHA Lahore">DHA Lahore (Phase 1-9)</option>
                <option value="Bahria Town">Bahria Town Lahore</option>
                <option value="Lake City">Lake City Lahore</option>
                <option value="Park View City">Park View City Lahore</option>
                <option value="Gulberg Lahore">Gulberg Lahore</option>
                <option value="Model Town Lahore">Model Town Lahore</option>
                <option value="New Lahore City">New Lahore City</option>
                <option value="Central Park Lahore">Central Park Lahore</option>
                <option value="DHA Islamabad">DHA Islamabad / Rawalpindi</option>
                <option value="Bahria Enclave">Bahria Enclave Islamabad</option>
                <option value="Capital Smart City">Capital Smart City</option>
                <option value="Gulberg Greens">Gulberg Greens Islamabad</option>
                <option value="Faisal Hills">Faisal Hills Taxila</option>
                <option value="Bahria Town Rawalpindi">Bahria Town Rawalpindi</option>
                <option value="Top City-1">Top City-1 Rawalpindi</option>
                <option value="Bahria Town Karachi">Bahria Town Karachi</option>
                <option value="DHA Karachi">DHA Karachi</option>
                <option value="Clifton Karachi">Clifton Karachi</option>
                <option value="Scheme 33 Karachi">Scheme 33 Karachi</option>
              </select>
            </div>

            <!-- Property Type -->
            <div class="space-y-1">
              <label class="tecture-tag text-slate-700 dark:text-slate-400 block font-bold">Property Type</label>
              <select v-model="selectedType" class="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#121620] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#C5A880] cursor-pointer">
                <option value="All">All Types</option>
                <option value="House">House / Villa</option>
                <option value="Plot">Residential / Commercial Plot</option>
                <option value="Commercial">Commercial Plaza / Shop</option>
                <option value="Apartment">Apartment / Flat</option>
              </select>
            </div>

            <!-- Size / Marla -->
            <div class="space-y-1">
              <label class="tecture-tag text-slate-700 dark:text-slate-400 block font-bold">Size</label>
              <select v-model="selectedSize" class="w-full px-3.5 py-2.5 rounded-2xl bg-slate-50 dark:bg-[#121620] text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 focus:outline-none focus:border-[#C5A880] cursor-pointer">
                <option value="All">All Sizes</option>
                <option value="3 Marla">3 Marla</option>
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
                <option value="2 Kanal">2 Kanal</option>
                <option value="4 Kanal">4 Kanal Farmhouse</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <!-- Reset Button -->
            <div class="flex items-end">
              <button 
                @click="resetFilters" 
                class="w-full py-2.5 rounded-2xl tecture-btn-outline text-xs cursor-pointer flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-rotate-left"></i>
                <span>Reset Filters</span>
              </button>
            </div>

          </div>

        </div>

        <!-- Popular Real Estate Searches Strip in Tecture Style -->
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <span class="tecture-tag text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1 font-bold">
            <i class="fa-solid fa-fire text-amber-500"></i>
            <span>Popular Searches:</span>
          </span>
          <button 
            v-for="s in popularSearches" 
            :key="s.label"
            @click="applyQuickSearch(s)"
            class="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#C5A880] text-slate-700 dark:text-slate-300 hover:text-[#0B0E14] border border-slate-200 dark:border-white/10 transition-all text-[11px] font-bold cursor-pointer"
          >
            {{ s.label }}
          </button>
        </div>

      </div>
    </section>

    <!-- Main Content & Listings Grid in Tecture Cards -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Toolbar (Count, Verified Toggle & Sort) -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl tecture-card text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xl border border-slate-200 dark:border-white/10">
        <div class="flex items-center gap-3">
          <span class="text-sm font-black text-slate-900 dark:text-white">{{ filteredProperties.length }} Verified Properties Found</span>
          <span class="px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] text-[11px] font-extrabold border border-[#C5A880]/30">Live Inventory</span>
        </div>

        <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          
          <!-- Only Verified Toggle -->
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" v-model="onlyVerified" class="rounded accent-[#C5A880] w-4 h-4 cursor-pointer" />
            <span class="flex items-center gap-1 text-slate-800 dark:text-slate-200 font-bold">
              <i class="fa-solid fa-shield-check text-[#C5A880]"></i>
              <span>Verified Only</span>
            </span>
          </label>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-1.5">
            <span class="text-slate-600 dark:text-slate-400 font-medium">Sort:</span>
            <select v-model="sortBy" class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] cursor-pointer font-bold">
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Listings Grid (32+ Properties) -->
      <div v-if="filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="item in filteredProperties" 
          :key="item.id"
          class="rounded-3xl tecture-card overflow-hidden flex flex-col justify-between group"
        >
          
          <!-- Card Image & Badges -->
          <div class="relative h-64 overflow-hidden bg-black cursor-pointer" @click="openDetail(item)">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <!-- Top Badges -->
            <div class="absolute top-4 left-4 flex flex-wrap gap-1.5">
              <span v-if="item.isVerified" class="px-3 py-1 rounded-full tecture-btn-gold text-[10px] shadow flex items-center gap-1.5">
                <i class="fa-solid fa-circle-check text-xs"></i>
                <span>Verified</span>
              </span>
              <span v-if="item.isSuperHot" class="px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider shadow flex items-center gap-1 animate-pulse">
                <i class="fa-solid fa-fire"></i>
                <span>Super Hot</span>
              </span>
            </div>

            <!-- Video Tour Badge -->
            <div v-if="item.hasVideoTour" class="absolute top-4 right-4 bg-[#0B0E14]/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[#DFC8A5] text-[10px] font-bold border border-white/10 flex items-center gap-1">
              <i class="fa-solid fa-video text-[#C5A880]"></i>
              <span>3D Tour</span>
            </div>

            <!-- Price Strip -->
            <div class="absolute bottom-4 left-4 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-black text-lg border border-white/10 shadow-xl">
              {{ item.priceFormatted }}
            </div>
            
            <div class="absolute bottom-4 right-4 bg-[#C5A880]/90 px-3 py-1 rounded-xl text-[#0B0E14] font-black text-[10px] uppercase tracking-wider">
              {{ item.purpose }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5]">
                <div class="flex items-center gap-1.5 truncate">
                  <i class="fa-solid fa-location-dot text-[#C5A880]"></i>
                  <span class="truncate">{{ item.location }}</span>
                </div>
                <span class="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-extrabold uppercase shrink-0">
                  {{ item.city }}
                </span>
              </div>

              <h3 
                @click="openDetail(item)"
                class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors line-clamp-2 cursor-pointer leading-snug"
              >
                {{ item.title }}
              </h3>

              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {{ item.description }}
              </p>

              <!-- Municipal Compliance Badge -->
              <div class="flex items-center gap-1.5 text-[11px] font-bold text-[#8C6A38] dark:text-[#DFC8A5] bg-[#C5A880]/10 px-3 py-1 rounded-full border border-[#C5A880]/20">
                <i class="fa-solid fa-stamp text-[#C5A880] text-[10px]"></i>
                <span class="truncate">{{ item.bylawCompliance || '100% Municipal Approved' }}</span>
              </div>
            </div>

            <!-- Specs Grid (Size, Beds, Baths, Type) -->
            <div class="pt-3 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-700 dark:text-slate-300">
              <div class="flex items-center justify-center gap-1 bg-slate-50 dark:bg-[#0B0E14] py-1.5 rounded-xl border border-slate-200 dark:border-white/5">
                <i class="fa-solid fa-ruler-combined text-[#C5A880] text-[10px]"></i>
                <span>{{ item.size }}</span>
              </div>
              <div v-if="item.bedrooms > 0" class="flex items-center justify-center gap-1 bg-slate-50 dark:bg-[#0B0E14] py-1.5 rounded-xl border border-slate-200 dark:border-white/5">
                <i class="fa-solid fa-bed text-[#C5A880] text-[10px]"></i>
                <span>{{ item.bedrooms }} Beds</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1 bg-slate-50 dark:bg-[#0B0E14] py-1.5 rounded-xl border border-slate-200 dark:border-white/5">
                <i class="fa-solid fa-map text-[#C5A880] text-[10px]"></i>
                <span>{{ item.type }}</span>
              </div>
              <div v-if="item.bathrooms > 0" class="flex items-center justify-center gap-1 bg-slate-50 dark:bg-[#0B0E14] py-1.5 rounded-xl border border-slate-200 dark:border-white/5">
                <i class="fa-solid fa-bath text-[#C5A880] text-[10px]"></i>
                <span>{{ item.bathrooms }} Baths</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1 bg-slate-50 dark:bg-[#0B0E14] py-1.5 rounded-xl border border-slate-200 dark:border-white/5">
                <i class="fa-solid fa-certificate text-emerald-500 text-[10px]"></i>
                <span>Ready</span>
              </div>
            </div>

            <!-- Actions Row -->
            <div class="pt-3 border-t border-slate-200 dark:border-white/10 flex items-center gap-3">
              <button 
                @click="openDetail(item)"
                class="flex-1 py-2.5 rounded-full tecture-btn-outline text-xs cursor-pointer text-center"
              >
                <span>Check Details</span>
              </button>

              <button 
                type="button"
                @click="openWhatsApp(item.agent?.whatsapp || '923134487315', 'Assalam-o-Alaikum, I am inquiring about: ' + item.title + ' (' + item.priceFormatted + ') in ' + item.location + ' on H&Q Design Services.')"
                class="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer border-0 shrink-0"
                aria-label="WhatsApp Inquiry"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span class="hidden sm:inline">WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- No Results State -->
      <div v-else class="p-12 text-center rounded-3xl tecture-card space-y-4 border border-slate-200 dark:border-white/10">
        <i class="fa-solid fa-house-circle-xmark text-4xl text-[#C5A880]"></i>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">No properties matched your exact filter criteria.</h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 max-w-sm mx-auto">Try resetting filters to view all verified villas, plots, and commercial listings across Pakistan.</p>
        <button @click="resetFilters" class="px-6 py-2.5 rounded-full tecture-btn-gold text-xs cursor-pointer">
          Show All 32+ Properties
        </button>
      </div>

    </main>

    <!-- Comprehensive 100+ Internal Linking Network -->
    <InternalLinkingHub />

    <!-- Global Property Detail Modal with Issue Verification Checklist -->
    <PropertyDetailModal 
      v-if="selectedProperty" 
      :property="selectedProperty" 
      @close="selectedProperty = null" 
    />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { propertiesData } from '../data/propertiesData.js'
import PropertyDetailModal from '../components/PropertyDetailModal.vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'

const route = useRoute()

const selectedPurpose = ref('All')
const selectedCity = ref('All')
const selectedSociety = ref('All')
const selectedType = ref('All')
const selectedSize = ref('All')
const onlyVerified = ref(false)
const sortBy = ref('featured')

const selectedProperty = ref(null)

const cityCounters = computed(() => {
  const cities = ['All', 'Lahore', 'Islamabad', 'Rawalpindi', 'Karachi']
  return cities.map(c => {
    if (c === 'All') return { name: 'All', count: propertiesData.length }
    return {
      name: c,
      count: propertiesData.filter(p => p.city === c).length
    }
  })
})

const popularSearches = [
  { label: '5 Marla DHA Lahore', city: 'Lahore', society: 'DHA Lahore', size: '5 Marla' },
  { label: '10 Marla Spanish Villa', city: 'Lahore', size: '10 Marla' },
  { label: 'DHA Phase 9 Prism Plots', city: 'Lahore', society: 'DHA Lahore', purpose: 'Plots' },
  { label: 'Park View City Lahore', city: 'Lahore', society: 'Park View City' },
  { label: 'DHA Islamabad Villas', city: 'Islamabad', society: 'DHA Islamabad' },
  { label: 'Bahria Town Rawalpindi', city: 'Rawalpindi', society: 'Bahria Town Rawalpindi' },
  { label: 'Karachi Sea View Flats', city: 'Karachi', society: 'Clifton Karachi' },
  { label: 'Gulberg Commercial Plazas', city: 'Lahore', society: 'Gulberg Lahore', purpose: 'Commercial' }
]

const applyQuickSearch = (s) => {
  resetFilters()
  if (s.city) selectedCity.value = s.city
  if (s.society) selectedSociety.value = s.society
  if (s.size) selectedSize.value = s.size
  if (s.purpose) selectedPurpose.value = s.purpose
}

const applyQueryFilters = () => {
  selectedPurpose.value = route.query.purpose || 'All'
  selectedCity.value = route.query.city || 'All'
  selectedSociety.value = route.query.society || 'All'
  selectedType.value = route.query.type || 'All'
  selectedSize.value = route.query.size || 'All'
}

onMounted(() => {
  applyQueryFilters()
})

watch(() => route.query, () => {
  applyQueryFilters()
}, { deep: true })

const openDetail = (item) => {
  selectedProperty.value = item
}

const resetFilters = () => {
  selectedPurpose.value = 'All'
  selectedCity.value = 'All'
  selectedSociety.value = 'All'
  selectedType.value = 'All'
  selectedSize.value = 'All'
  onlyVerified.value = false
  sortBy.value = 'featured'
}

const filteredProperties = computed(() => {
  return propertiesData.filter(item => {
    if (selectedPurpose.value === 'For Sale' && item.purpose !== 'For Sale') return false
    if (selectedPurpose.value === 'For Rent' && item.purpose !== 'For Rent') return false
    if (selectedPurpose.value === 'Plots' && item.category !== 'Plots') return false
    if (selectedPurpose.value === 'Commercial' && item.category !== 'Commercial') return false

    if (selectedCity.value !== 'All' && item.city !== selectedCity.value) return false
    if (selectedSociety.value !== 'All' && item.society !== selectedSociety.value) return false
    if (selectedType.value !== 'All' && item.type !== selectedType.value) return false
    if (selectedSize.value !== 'All' && !item.size.includes(selectedSize.value)) return false
    if (onlyVerified.value && !item.isVerified) return false

    return true
  }).sort((a, b) => {
    if (sortBy.value === 'price-low') return a.price - b.price
    if (sortBy.value === 'price-high') return b.price - a.price
    return 0
  })
})
</script>
