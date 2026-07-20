<template>
  <div class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
    
    <!-- Title Header -->
    <div class="text-center max-w-2xl mx-auto space-y-2">
      <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
        Official Pakistan Architectural Rates Estimator
      </span>
      <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Calculate Your Design & Blueprint Package</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400">Based on standard Pakistan architectural rates (PKR 50 - 150 / sq ft).</p>
    </div>

    <!-- Estimator Selectors Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Property Type -->
      <div class="space-y-2">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Property Type</label>
        <select 
          v-model="propertyType" 
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
        >
          <option value="Residential Villa">Residential Villa</option>
          <option value="Commercial Plaza">Commercial Plaza</option>
          <option value="Luxury Interior Only">Luxury Interior (PKR 1,000+/sq ft)</option>
        </select>
      </div>

      <!-- Plot Scale (Fixed Fees By Plot Size) -->
      <div class="space-y-2">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Plot Scale</label>
        <select 
          v-model="plotScale" 
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
        >
          <option value="5 Marla">Up to 7 Marla (1,375 - 1,925 sq ft)</option>
          <option value="10 Marla">8 to 12 Marla (2,200 - 3,300 sq ft)</option>
          <option value="1 Kanal">1 Kanal (4,500 sq ft)</option>
          <option value="2 Kanal+">2 Kanal+ Estate (9,000+ sq ft)</option>
        </select>
      </div>

      <!-- Pricing Model / Package Tier -->
      <div class="space-y-2">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pricing Model</label>
        <select 
          v-model="packageTier" 
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
        >
          <option value="Fixed Package (2D + 3D Elevation)">Fixed Package (2D Plans + 3D Renders)</option>
          <option value="Per Sq. Ft Rate (PKR 50 - 150/sq ft)">Per Sq. Ft Rate (PKR 50 - 150/sq ft)</option>
          <option value="Full Design & Supervision (5% - 8%)">Full Design & Site Supervision (5% - 8%)</option>
        </select>
      </div>

    </div>

    <!-- Rate Breakdown Reference Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
        <span class="text-slate-400 font-bold block">UP TO 7 MARLAS</span>
        <span class="text-slate-900 dark:text-white font-extrabold text-sm">PKR 150,000 – 250,000</span>
        <span class="text-[10px] text-slate-500 block">Complete 2D/3D design package</span>
      </div>
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
        <span class="text-slate-400 font-bold block">8 TO 12 MARLAS</span>
        <span class="text-slate-900 dark:text-white font-extrabold text-sm">PKR 200,000 – 350,000</span>
        <span class="text-[10px] text-slate-500 block">Structural + MEP + 4K 3D elevation</span>
      </div>
      <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
        <span class="text-slate-400 font-bold block">1 KANAL ESTATES</span>
        <span class="text-slate-900 dark:text-white font-extrabold text-sm">PKR 350,000 – 700,000+</span>
        <span class="text-[10px] text-slate-500 block">Turnkey blueprints + supervision option</span>
      </div>
    </div>

    <!-- Calculated Result Card & KSA WhatsApp Direct Send -->
    <div class="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
      <div class="space-y-1 text-center sm:text-left">
        <span class="text-xs text-slate-400 font-medium">Official Rate Design Estimate</span>
        <div class="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
          PKR {{ estimatedPriceRange }}
        </div>
        <p class="text-[11px] text-slate-400">Calculated based on standard PKR 50 – 150 / sq. ft architectural design rates.</p>
      </div>

      <button 
        @click="sendEstimateToWhatsApp"
        class="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
      >
        <i class="fa-brands fa-whatsapp text-lg"></i>
        <span>Send Quote to WhatsApp (+966507143124)</span>
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const propertyType = ref('Residential Villa')
const plotScale = ref('10 Marla')
const packageTier = ref('Fixed Package (2D + 3D Elevation)')

const estimatedPriceRange = computed(() => {
  if (plotScale.value === '5 Marla') {
    return '150,000 – 250,000'
  } else if (plotScale.value === '10 Marla') {
    return '200,000 – 350,000'
  } else if (plotScale.value === '1 Kanal') {
    return '350,000 – 700,000+'
  } else {
    return '750,000 – 1,200,000+'
  }
})

const sendEstimateToWhatsApp = () => {
  const waText = `*H&Q Design Services - Instant Estimate Inquiry* 🏛️\n\n` +
    `🏠 *Property Type:* ${propertyType.value}\n` +
    `📐 *Plot Scale:* ${plotScale.value}\n` +
    `💎 *Pricing Model:* ${packageTier.value}\n` +
    `💰 *Estimated Design Fee:* PKR ${estimatedPriceRange.value}\n\n` +
    `Hi H&Q Architects! I would like to book a 3D floor plan review for this plot estimate.`

  const targetUrl = `https://wa.me/966507143124?text=${encodeURIComponent(waText)}`
  window.open(targetUrl, '_blank')
}
</script>
