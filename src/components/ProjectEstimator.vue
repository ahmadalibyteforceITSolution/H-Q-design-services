<template>
  <div class="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
    <div class="text-center max-w-2xl mx-auto space-y-2">
      <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
        Interactive 3D Design Estimator
      </span>
      <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Calculate Your Architectural Package</h3>
      <p class="text-xs text-slate-500 dark:text-slate-400">Get an instant estimated quote for floor plans, 3D renders, and municipal submission maps.</p>
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
          <option value="Luxury Interior Only">Luxury Interior Only</option>
        </select>
      </div>

      <!-- Plot Scale -->
      <div class="space-y-2">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Plot Scale</label>
        <select 
          v-model="plotScale" 
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
        >
          <option value="5 Marla">5 Marla (25x45)</option>
          <option value="10 Marla">10 Marla (35x70)</option>
          <option value="1 Kanal">1 Kanal (50x90)</option>
          <option value="2 Kanal+">2 Kanal+ Estate</option>
        </select>
      </div>

      <!-- Package Tier -->
      <div class="space-y-2">
        <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Design Tier</label>
        <select 
          v-model="packageTier" 
          class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
        >
          <option value="Standard (2D Floor Plans + Submission)">Standard (2D Maps + Submission)</option>
          <option value="Premium (2D Plans + 4K 3D Exterior)">Premium (2D Maps + 4K 3D Elevation)</option>
          <option value="Royal (Turnkey 3D + Full Luxury Interior)">Royal (Turnkey 3D + Full Interiors)</option>
        </select>
      </div>

    </div>

    <!-- Calculated Result Card & Dual WhatsApp Direct Buttons -->
    <div class="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
      <div class="space-y-1 text-center lg:text-left">
        <span class="text-xs text-slate-400 font-medium">Estimated Investment Quote</span>
        <div class="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
          PKR {{ estimatedPrice.toLocaleString() }} <span class="text-xs text-slate-400 font-normal">Lac approx</span>
        </div>
        <p class="text-[11px] text-slate-400">Includes municipal submission drawing guarantee & 4K photorealistic 3D render files.</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
        <button 
          @click="sendEstimateToWhatsApp('pk')"
          class="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <i class="fa-brands fa-whatsapp text-base"></i>
          <span>🇵🇰 PK (03416887454)</span>
        </button>
        <button 
          @click="sendEstimateToWhatsApp('ksa')"
          class="px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
        >
          <i class="fa-brands fa-whatsapp text-base"></i>
          <span>🇸🇦 KSA (+966507143124)</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['request-quote'])

const propertyType = ref('Residential Villa')
const plotScale = ref('10 Marla')
const packageTier = ref('Premium (2D Plans + 4K 3D Exterior)')

const estimatedPrice = computed(() => {
  let base = 1.8 // Lacs

  if (plotScale.value === '10 Marla') base = 2.8
  if (plotScale.value === '1 Kanal') base = 4.8
  if (plotScale.value === '2 Kanal+') base = 7.5

  if (packageTier.value.includes('Royal')) base *= 1.4
  if (propertyType.value === 'Commercial Plaza') base *= 1.3

  return Math.round(base * 100) / 100
})

const sendEstimateToWhatsApp = (destination = 'pk') => {
  const waText = `*H&Q Design Services - Instant Estimate Inquiry* 🏛️\n\n` +
    `🏠 *Property Type:* ${propertyType.value}\n` +
    `📐 *Plot Scale:* ${plotScale.value}\n` +
    `💎 *Package:* ${packageTier.value}\n` +
    `💰 *Estimated Quote:* PKR ${estimatedPrice.value} Lac approx\n\n` +
    `Hi H&Q Architects! I would like to book a 3D floor plan review for this plot estimate.`

  const targetNumber = destination === 'ksa' ? '966507143124' : '923416887454'
  const targetUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(waText)}`
  window.open(targetUrl, '_blank')
}
</script>
