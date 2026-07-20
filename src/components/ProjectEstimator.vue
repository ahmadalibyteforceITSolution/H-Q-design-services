<template>
  <div class="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl relative overflow-hidden">
    <div class="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-8">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-3">
          <i class="fa-solid fa-bolt text-xs"></i>
          Interactive Design Estimator
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Estimate Your Architecture & Interior Cost</h3>
        <p class="text-slate-600 dark:text-slate-400 text-sm mt-2">Instant preliminary budget & design timeline for your Parkview City, DHA, or Lahore property.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <!-- Input Options -->
        <div class="md:col-span-7 space-y-6">
          <!-- Plot Size Choice -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">1. Select Plot Size / Scale</label>
            <div class="grid grid-cols-2 gap-2.5">
              <button 
                v-for="p in plotSizes" 
                :key="p.id"
                @click="selectedPlot = p.id"
                type="button"
                :class="[
                  'p-3 rounded-xl text-left border transition-all text-xs font-semibold flex items-center justify-between',
                  selectedPlot === p.id 
                    ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/20' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50'
                ]"
              >
                <span class="flex items-center gap-1.5">
                  <i :class="p.icon + ' text-emerald-500'"></i>
                  {{ p.name }}
                </span>
                <span class="text-[10px] text-slate-400">{{ p.sqft }} sq.ft</span>
              </button>
            </div>
          </div>

          <!-- Services Selection -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">2. Select Scope & Deliverables</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                v-for="s in servicesList" 
                :key="s.id"
                @click="toggleService(s.id)"
                type="button"
                :class="[
                  'p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between',
                  selectedServices.includes(s.id) 
                    ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-semibold' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50'
                ]"
              >
                <span class="flex items-center gap-1.5">
                  <i :class="s.icon"></i>
                  {{ s.name }}
                </span>
                <i :class="selectedServices.includes(s.id) ? 'fa-solid fa-check text-amber-500' : 'fa-solid fa-plus text-slate-400'"></i>
              </button>
            </div>
          </div>

          <!-- Quality Finish -->
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">3. Finish & Material Quality</label>
            <div class="grid grid-cols-3 gap-2">
              <button 
                v-for="q in finishLevels" 
                :key="q.id"
                @click="selectedFinish = q.id"
                type="button"
                :class="[
                  'p-2.5 rounded-xl border text-center text-xs transition-all font-medium flex items-center justify-center gap-1.5',
                  selectedFinish === q.id 
                    ? 'border-teal-500 bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold' 
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50'
                ]"
              >
                <i :class="q.icon"></i>
                <span>{{ q.name }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Output Summary Card -->
        <div class="md:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-2xl relative">
          <div class="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Estimated Design Investment</div>
          <div class="text-3xl font-extrabold text-gradient-cyan mb-2">
            PKR {{ estimatedMin.toLocaleString() }} - {{ estimatedMax.toLocaleString() }}
          </div>
          
          <div class="flex items-center gap-2 text-xs text-slate-400 mb-6 border-b border-slate-800 pb-4">
            <i class="fa-solid fa-clock text-emerald-400"></i>
            <span>Complete Design Delivery:</span>
            <span class="font-bold text-white">{{ estimatedWeeks }} Weeks</span>
          </div>

          <div class="space-y-2 mb-6 text-xs text-slate-300">
            <div class="flex justify-between">
              <span class="text-slate-400">Architectural Drawings:</span>
              <span class="font-mono text-emerald-400">Included</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">3D Photorealistic Views:</span>
              <span class="font-mono text-emerald-400">HD Walkthrough</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Parkview City Approval:</span>
              <span class="font-mono text-emerald-400">Full Support</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-400">Zameen.com Assurance:</span>
              <span class="font-mono text-amber-400">Verified Partner</span>
            </div>
          </div>

          <button 
            @click="$emit('request-quote')"
            class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-emerald-500/30 transition-all text-center flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-calendar-check"></i>
            <span>Lock In Estimate & Request Call</span>
          </button>
          
          <p class="text-[10px] text-slate-500 text-center mt-3">Free initial consultation at our Parkview City Studio.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['request-quote'])

const selectedPlot = ref('10-marla')
const selectedServices = ref(['arch-drawings', '3d-elevation', 'interior-plan'])
const selectedFinish = ref('premium')

const plotSizes = [
  { id: '5-marla', name: '5 Marla Villa', sqft: '1,250', basePrice: 150000, baseWeeks: 2, icon: 'fa-solid fa-house-chimney' },
  { id: '10-marla', name: '10 Marla Luxury', sqft: '2,500', basePrice: 280000, baseWeeks: 3, icon: 'fa-solid fa-house-user' },
  { id: '1-kanal', name: '1 Kanal Estate', sqft: '4,500', basePrice: 480000, baseWeeks: 4, icon: 'fa-solid fa-landmark' },
  { id: 'commercial', name: 'Commercial Plaza', sqft: '6,000+', basePrice: 650000, baseWeeks: 5, icon: 'fa-solid fa-building' }
]

const servicesList = [
  { id: 'arch-drawings', name: 'Architectural Floor Plans', price: 80000, weeks: 1, icon: 'fa-solid fa-compass-drafting' },
  { id: '3d-elevation', name: '3D Elevation Views', price: 60000, weeks: 1, icon: 'fa-solid fa-cube' },
  { id: 'interior-plan', name: 'Luxury Interior Layout', price: 90000, weeks: 1, icon: 'fa-solid fa-couch' },
  { id: 'structure', name: 'Structural Engineering', price: 50000, weeks: 0.5, icon: 'fa-solid fa-hard-hat' },
  { id: 'landscape', name: 'Lawn & Landscape', price: 40000, weeks: 0.5, icon: 'fa-solid fa-tree' },
  { id: 'lighting-mep', name: 'MEP & Lighting Plan', price: 45000, weeks: 0.5, icon: 'fa-solid fa-lightbulb' }
]

const finishLevels = [
  { id: 'standard', name: 'Standard Modern', multiplier: 1, icon: 'fa-solid fa-layer-group' },
  { id: 'premium', name: 'Luxury Premium', multiplier: 1.25, icon: 'fa-solid fa-crown' },
  { id: 'royal', name: 'Royal Classic', multiplier: 1.5, icon: 'fa-solid fa-gem' }
]

const toggleService = (id) => {
  if (selectedServices.value.includes(id)) {
    selectedServices.value = selectedServices.value.filter(item => item !== id)
  } else {
    selectedServices.value.push(id)
  }
}

const rawTotal = computed(() => {
  const plot = plotSizes.find(p => p.id === selectedPlot.value) || plotSizes[0]
  const base = plot.basePrice
  const servCost = selectedServices.value.reduce((acc, sId) => {
    const s = servicesList.find(item => item.id === sId)
    return acc + (s ? s.price : 0)
  }, 0)
  const mult = (finishLevels.find(f => f.id === selectedFinish.value) || finishLevels[0]).multiplier
  return (base + servCost) * mult
})

const estimatedMin = computed(() => Math.round(rawTotal.value * 0.9 / 5000) * 5000)
const estimatedMax = computed(() => Math.round(rawTotal.value * 1.2 / 5000) * 5000)

const estimatedWeeks = computed(() => {
  const plot = plotSizes.find(p => p.id === selectedPlot.value) || plotSizes[0]
  let weeks = plot.baseWeeks
  selectedServices.value.forEach(sId => {
    const s = servicesList.find(item => item.id === sId)
    if (s) weeks += s.weeks
  })
  return Math.ceil(weeks)
})
</script>
