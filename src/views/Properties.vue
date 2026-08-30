<template>
  <div class="space-y-12 pb-16">
    
    <!-- Top Hero Banner with Search Engine -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(#088C7E_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
      
      <div class="max-w-[1440px] mx-auto space-y-6 relative z-10">
        
        <!-- Breadcrumb & Tag -->
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Properties for Sale & Rent in Pakistan</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Find Your Dream <span class="text-gradient-hq">House, Plot & Commercial</span> Property
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Search 100% verified residential villas, commercial plazas, and on-ground plots with approved architectural 3D blueprints across Lahore, Islamabad, and Karachi.
          </p>
        </div>

        <!-- Filter Controls Container -->
        <div class="p-4 sm:p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl space-y-4">
          
          <!-- Purpose Tabs (Buy / Rent / Commercial / Plots) -->
          <div class="flex flex-wrap items-center gap-2 border-b border-slate-700 pb-3 text-xs font-black">
            <button 
              v-for="p in ['All', 'For Sale', 'For Rent', 'Plots', 'Commercial']" 
              :key="p"
              @click="selectedPurpose = p"
              :class="[
                'px-4 py-2 rounded-xl transition-all cursor-pointer uppercase tracking-wider',
                selectedPurpose === p ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/40' : 'text-slate-400 hover:text-white hover:bg-slate-800'
              ]"
            >
              {{ p }}
            </button>
          </div>

          <!-- Dropdowns Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs font-bold text-slate-900 dark:text-white">
            
            <!-- City -->
            <div class="space-y-1">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">City</label>
              <select v-model="selectedCity" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E]">
                <option value="All">All Cities</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

            <!-- Society / Locality -->
            <div class="space-y-1">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Housing Society</label>
              <select v-model="selectedSociety" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E]">
                <option value="All">All Societies</option>
                <option value="Bahria Town">Bahria Town</option>
                <option value="DHA Lahore">DHA Lahore</option>
                <option value="Lake City">Lake City</option>
                <option value="Gulberg Lahore">Gulberg</option>
                <option value="DHA Islamabad">DHA Islamabad</option>
                <option value="Bahria Town Karachi">Bahria Town Karachi</option>
              </select>
            </div>

            <!-- Property Type -->
            <div class="space-y-1">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Property Type</label>
              <select v-model="selectedType" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E]">
                <option value="All">All Types</option>
                <option value="House">House / Villa</option>
                <option value="Plot">Residential / Commercial Plot</option>
                <option value="Commercial">Commercial Plaza</option>
                <option value="Apartment">Apartment / Penthouse</option>
              </select>
            </div>

            <!-- Size / Marla -->
            <div class="space-y-1">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Size</label>
              <select v-model="selectedSize" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E]">
                <option value="All">All Sizes</option>
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
              </select>
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button 
                @click="resetFilters" 
                class="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-rotate-left"></i>
                <span>Reset</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Main Content & Listings Grid -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Toolbar (Count, Verified Toggle & Sort) -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
        <div class="flex items-center gap-3">
          <span class="text-sm font-black text-slate-900 dark:text-white">{{ filteredProperties.length }} Properties Found</span>
          <span class="px-2.5 py-0.5 rounded-md bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-extrabold">Live Listings</span>
        </div>

        <div class="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          
          <!-- Only Verified Toggle -->
          <label class="flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" v-model="onlyVerified" class="rounded text-[#088C7E] focus:ring-[#088C7E] w-4 h-4" />
            <span class="flex items-center gap-1">
              <i class="fa-solid fa-shield-check text-[#088C7E]"></i>
              <span>Verified Only</span>
            </span>
          </label>

          <!-- Sort Dropdown -->
          <div class="flex items-center gap-1.5">
            <span class="text-slate-400">Sort:</span>
            <select v-model="sortBy" class="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none">
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Listings Grid -->
      <div v-if="filteredProperties.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div 
          v-for="item in filteredProperties" 
          :key="item.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          
          <!-- Card Image & Badges -->
          <div class="relative h-60 overflow-hidden bg-slate-950 cursor-pointer" @click="openDetail(item)">
            <img 
              :src="item.image" 
              :alt="item.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            <!-- Top Badges -->
            <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
              <span v-if="item.isVerified" class="px-2.5 py-1 rounded-lg bg-[#088C7E] text-white text-[10px] font-black uppercase tracking-wider shadow flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-amber-300"></i>
                <span>Verified</span>
              </span>
              <span v-if="item.isSuperHot" class="px-2.5 py-1 rounded-lg bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider shadow flex items-center gap-1 animate-pulse">
                <i class="fa-solid fa-fire"></i>
                <span>Super Hot</span>
              </span>
            </div>

            <!-- Video Tour Badge -->
            <div v-if="item.hasVideoTour" class="absolute top-3 right-3 bg-slate-950/70 backdrop-blur-md px-2 py-1 rounded-lg text-white text-[10px] font-bold flex items-center gap-1">
              <i class="fa-solid fa-video text-amber-400"></i>
              <span>3D Tour</span>
            </div>

            <!-- Price Strip -->
            <div class="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white font-black text-lg shadow-lg border border-white/10">
              {{ item.priceFormatted }}
            </div>
            
            <div class="absolute bottom-3 right-3 bg-[#088C7E]/90 px-2.5 py-1 rounded-lg text-white font-bold text-[10px]">
              {{ item.purpose }}
            </div>
          </div>

          <!-- Card Content -->
          <div class="p-5 space-y-4 flex-1 flex flex-col justify-between">
            
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-[11px] font-bold text-[#088C7E]">
                <i class="fa-solid fa-location-dot"></i>
                <span class="truncate">{{ item.location }}</span>
              </div>

              <h3 
                @click="openDetail(item)"
                class="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 hover:text-[#088C7E] transition-colors cursor-pointer"
              >
                {{ item.title }}
              </h3>
            </div>

            <!-- Specs Grid -->
            <div class="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 dark:border-slate-800 text-center text-xs font-bold text-slate-600 dark:text-slate-400">
              <div class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-ruler text-[#088C7E]"></i>
                <span>{{ item.size }}</span>
              </div>
              <div v-if="item.bedrooms > 0" class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-bed text-[#088C7E]"></i>
                <span>{{ item.bedrooms }} Beds</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-map text-[#088C7E]"></i>
                <span>{{ item.type }}</span>
              </div>
              <div v-if="item.bathrooms > 0" class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-bath text-[#088C7E]"></i>
                <span>{{ item.bathrooms }} Baths</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1.5 text-emerald-500 font-bold">
                <i class="fa-solid fa-check"></i>
                <span>Approved</span>
              </div>
            </div>

            <!-- Actions Row -->
            <div class="flex items-center gap-2 pt-1">
              <button 
                @click="openDetail(item)"
                class="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                View Details
              </button>
              <a 
                :href="'https://wa.me/' + (item.agent?.whatsapp || '966507143124') + '?text=' + encodeURIComponent('Assalam-o-Alaikum, I am interested in: ' + item.title + ' (ID: ' + item.id + ')') "
                target="_blank"
                class="px-3.5 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black transition-transform hover:scale-105 shadow-md shadow-[#088C7E]/20 flex items-center justify-center gap-1.5 cursor-pointer"
                title="Direct WhatsApp"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>

          </div>

        </div>

      </div>

      <!-- No Results State -->
      <div v-else class="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
        <i class="fa-solid fa-house-circle-xmark text-4xl text-slate-400"></i>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">No properties matched your exact filter criteria.</h3>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">Try resetting filters to view all verified villas, plots, and commercial listings.</p>
        <button @click="resetFilters" class="px-5 py-2 rounded-xl bg-[#088C7E] text-white font-bold text-xs uppercase tracking-wider">
          Show All Properties
        </button>
      </div>

    </main>

    <!-- Global Property Detail Modal -->
    <PropertyDetailModal 
      v-if="selectedProperty" 
      :property="selectedProperty" 
      @close="selectedProperty = null" 
    />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { propertiesData } from '../data/propertiesData.js'
import PropertyDetailModal from '../components/PropertyDetailModal.vue'

const selectedPurpose = ref('All')
const selectedCity = ref('All')
const selectedSociety = ref('All')
const selectedType = ref('All')
const selectedSize = ref('All')
const onlyVerified = ref(false)
const sortBy = ref('featured')

const selectedProperty = ref(null)

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
