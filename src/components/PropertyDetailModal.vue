<template>
  <div v-if="property" class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-8 text-slate-900 dark:text-white flex flex-col max-h-[90vh]">
      
      <!-- Close Button -->
      <button 
        @click="$emit('close')" 
        class="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-900 text-white flex items-center justify-center text-lg transition-transform hover:scale-110 shadow-lg cursor-pointer"
        aria-label="Close Property Details"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>

      <!-- Scrollable Modal Body -->
      <div class="overflow-y-auto p-6 sm:p-8 space-y-6">
        
        <!-- Header Info -->
        <div class="space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black uppercase tracking-wider flex items-center gap-1.5 shadow">
              <i class="fa-solid fa-circle-check text-amber-300"></i>
              <span>{{ property.tag || 'Zameen Verified' }}</span>
            </span>
            <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-[#088C7E] border border-[#088C7E]/30 text-xs font-bold uppercase">
              {{ property.purpose }}
            </span>
            <span class="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold">
              ID: {{ property.id }}
            </span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {{ property.title }}
          </h2>

          <div class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            <i class="fa-solid fa-location-dot text-rose-500"></i>
            <span>{{ property.location }}</span>
          </div>
        </div>

        <!-- Main Gallery Showcase -->
        <div class="space-y-3">
          <div class="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-950">
            <img 
              :src="selectedImage || property.image" 
              :alt="property.title" 
              class="w-full h-full object-cover object-center transition-all duration-300"
            />
            <div class="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-white font-black text-lg sm:text-2xl shadow-xl border border-white/10">
              {{ property.priceFormatted }}
            </div>
            <div v-if="property.installmentAvailable" class="absolute bottom-4 right-4 bg-[#088C7E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-white font-bold text-xs shadow-lg flex items-center gap-1.5">
              <i class="fa-solid fa-calculator"></i>
              <span>Installment Available</span>
            </div>
          </div>

          <!-- Thumbnails Strip -->
          <div v-if="property.gallery && property.gallery.length > 1" class="flex items-center gap-3 overflow-x-auto pb-2">
            <button 
              v-for="(img, idx) in property.gallery" 
              :key="idx"
              @click="selectedImage = img"
              :class="[
                'shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all cursor-pointer',
                selectedImage === img ? 'border-[#088C7E] scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
              ]"
            >
              <img :src="img" alt="Thumbnail" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Key Metrics Strip (Zameen Style) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-center">
          <div class="space-y-1">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Area Size</span>
            <span class="text-base font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
              <i class="fa-solid fa-ruler-combined text-[#088C7E] text-xs"></i>
              {{ property.size }}
            </span>
          </div>
          <div v-if="property.bedrooms > 0" class="space-y-1">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Bedrooms</span>
            <span class="text-base font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
              <i class="fa-solid fa-bed text-[#088C7E] text-xs"></i>
              {{ property.bedrooms }} Beds
            </span>
          </div>
          <div v-if="property.bathrooms > 0" class="space-y-1">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Baths</span>
            <span class="text-base font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
              <i class="fa-solid fa-bath text-[#088C7E] text-xs"></i>
              {{ property.bathrooms }} Baths
            </span>
          </div>
          <div class="space-y-1">
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-bold uppercase block">Type / Status</span>
            <span class="text-base font-extrabold text-slate-900 dark:text-white flex items-center justify-center gap-1">
              <i class="fa-solid fa-house-chimney text-[#088C7E] text-xs"></i>
              {{ property.type }}
            </span>
          </div>
        </div>

        <!-- Description -->
        <div class="space-y-2">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-align-left text-[#088C7E]"></i>
            <span>Property & Architectural Overview</span>
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ property.description }}
          </p>
        </div>

        <!-- Features Checklist -->
        <div v-if="property.features && property.features.length" class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-list-check text-[#088C7E]"></i>
            <span>Architectural Highlights & Finishes</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div 
              v-for="(feat, idx) in property.features" 
              :key="idx"
              class="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <i class="fa-solid fa-circle-check text-[#088C7E] text-sm shrink-0"></i>
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>

        <!-- Society & Utility Amenities (Zameen Style) -->
        <div v-if="property.amenities && property.amenities.length" class="space-y-3">
          <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-bolt-lightning text-amber-500"></i>
            <span>Society Infrastructure & Utilities</span>
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div 
              v-for="(amenity, idx) in property.amenities" 
              :key="idx"
              class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200"
            >
              <i :class="amenity.icon + ' text-[#088C7E] text-sm'"></i>
              <span>{{ amenity.name }}</span>
            </div>
          </div>
        </div>

        <!-- Verified Floor Plan Layout View -->
        <div v-if="property.floorPlanImage" class="space-y-3 pt-2">
          <div class="flex items-center justify-between">
            <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
              <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i>
              <span>Architectural Floor Plan Blueprint</span>
            </h3>
            <span class="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-lg border border-emerald-500/20">
              H&Q Certified Layout
            </span>
          </div>
          <div class="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950/40 max-h-72 flex items-center justify-center p-2">
            <img :src="property.floorPlanImage" alt="Floor Plan Blueprint" class="max-h-64 object-contain rounded-xl" />
          </div>
        </div>

        <!-- Contact & Agent Box -->
        <div class="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900/60 border border-[#088C7E]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="space-y-1 text-center sm:text-left">
            <span class="text-[10px] font-black uppercase tracking-wider text-[#088C7E]">Verified Desk Architect</span>
            <h4 class="text-base font-extrabold text-slate-900 dark:text-white">{{ property.agent?.name || 'Engr. Asad Ali' }}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">{{ property.agent?.agency || 'H&Q Design Services' }}</p>
          </div>

          <div class="flex items-center gap-3 w-full sm:w-auto">
            <a 
              :href="'tel:' + (property.agent?.phone || '03416887454')"
              class="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-phone text-[#088C7E]"></i>
              <span>Call</span>
            </a>
            <a 
              :href="'https://wa.me/' + (property.agent?.whatsapp || '966507143124') + '?text=' + encodeURIComponent('Assalam-o-Alaikum, I am interested in: ' + property.title + ' (ID: ' + property.id + ') on H&Q Design Services.')"
              target="_blank" 
              class="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-[#088C7E]/30 flex items-center justify-center gap-2"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  property: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])

const selectedImage = ref('')

watch(() => props.property, (newVal) => {
  if (newVal) {
    selectedImage.value = newVal.image
  }
}, { immediate: true })
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
