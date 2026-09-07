<template>
  <div class="p-4 sm:p-6 bg-slate-950 text-white font-sans rounded-2xl border border-slate-800 max-w-4xl mx-auto shadow-2xl space-y-5">
    
    <!-- Widget Top Header -->
    <div class="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-[#088C7E] flex items-center justify-center font-black text-white text-xs shadow-md">
          H&Q
        </div>
        <div>
          <h2 class="text-sm sm:text-base font-black text-white leading-tight">
            Pakistan House Construction Cost Calculator 2026
          </h2>
          <p class="text-[11px] text-slate-400">Live updated market rates for Lahore, Islamabad & Karachi</p>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded-full bg-[#088C7E]/20 text-[#088C7E] text-[10px] font-bold uppercase tracking-wider border border-[#088C7E]/30">
        Live 2026 Index
      </span>
    </div>

    <!-- Selectors -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-bold">
      <!-- Plot Size -->
      <div class="space-y-1">
        <label class="text-[10px] uppercase tracking-wider text-slate-400 block">House Size</label>
        <select v-model="calcSize" class="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#088C7E]">
          <option value="3 Marla">3 Marla (1,150 sq.ft.)</option>
          <option value="5 Marla">5 Marla (1,950 sq.ft.)</option>
          <option value="10 Marla">10 Marla (3,300 sq.ft.)</option>
          <option value="1 Kanal">1 Kanal (5,900 sq.ft.)</option>
          <option value="2 Kanal">2 Kanal (10,500 sq.ft.)</option>
        </select>
      </div>

      <!-- Finish Quality -->
      <div class="space-y-1">
        <label class="text-[10px] uppercase tracking-wider text-slate-400 block">Scope of Work</label>
        <select v-model="calcScope" class="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#088C7E]">
          <option value="turnkey_premium">Complete Turnkey (A+ Luxury)</option>
          <option value="turnkey_standard">Complete Turnkey (A-Grade)</option>
          <option value="grey_structure">Grey Structure (Bricks & Steel)</option>
        </select>
      </div>

      <!-- City -->
      <div class="space-y-1">
        <label class="text-[10px] uppercase tracking-wider text-slate-400 block">Location</label>
        <select v-model="calcCity" class="w-full px-3 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-[#088C7E]">
          <option value="Lahore">Lahore (DHA / Bahria / Gulberg)</option>
          <option value="Islamabad">Islamabad & Rawalpindi</option>
          <option value="Karachi">Karachi</option>
        </select>
      </div>
    </div>

    <!-- Output Banner -->
    <div class="p-5 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border border-[#088C7E]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
      <div class="space-y-1 text-center sm:text-left">
        <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Estimated Total Budget</span>
        <div class="text-3xl sm:text-4xl font-black text-white">
          {{ calculatedCost.totalFormatted }}
        </div>
        <p class="text-[11px] text-slate-300">
          Rate: <strong class="text-amber-300">{{ calculatedCost.ratePerSqFt }}</strong> · Covered Area: {{ calculatedCost.sqft }} sq.ft.
        </p>
      </div>

      <a 
        :href="'https://wa.me/923416887454?text=' + encodeURIComponent('Assalam-o-Alaikum H&Q Design Services, I checked the construction cost calculator for ' + calcSize + ' in ' + calcCity + ' (Estimated: ' + calculatedCost.totalFormatted + '). I want a 3D elevation and turnkey quote.')"
        target="_blank" 
        rel="noopener"
        class="px-5 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 shrink-0 cursor-pointer"
      >
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>Get Official BOQ on WhatsApp</span>
      </a>
    </div>

    <!-- Itemized Material Breakdown -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
      <div v-for="item in calculatedCost.breakdown" :key="item.name" class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
        <div>
          <span class="font-bold text-slate-200 block text-[11px]">{{ item.name }}</span>
          <span class="text-[10px] text-slate-400 block">{{ item.quantity }}</span>
        </div>
        <div class="text-right">
          <span class="font-black text-[#088C7E] text-xs">{{ item.cost }}</span>
          <span class="text-[9px] text-slate-400 block">{{ item.share }}</span>
        </div>
      </div>
    </div>

    <!-- Referral / Outbound Traffic Attribution Footer -->
    <div class="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
      <div class="flex items-center gap-2">
        <span class="text-slate-400 text-[11px]">Widget Powered by:</span>
        <a 
          href="https://h-q-design-services.vercel.app/?utm_source=embed_calc_widget&utm_medium=referral&utm_campaign=partner_network" 
          target="_blank" 
          rel="noopener"
          class="text-[#088C7E] hover:text-emerald-300 font-extrabold text-[11px] underline underline-offset-2 flex items-center gap-1"
        >
          <span>H&Q Design Services (Best Architects in Lahore)</span>
          <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
        </a>
      </div>

      <div class="flex items-center gap-3">
        <a 
          href="https://h-q-design-services.vercel.app/partners?utm_source=embed_calc_widget&utm_medium=referral" 
          target="_blank" 
          rel="noopener"
          class="text-slate-400 hover:text-slate-200 text-[10px] font-semibold transition-colors"
        >
          &lt;/&gt; Embed this tool on your website
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const calcSize = ref('5 Marla')
const calcScope = ref('turnkey_premium')
const calcCity = ref('Lahore')

const calculatedCost = computed(() => {
  let sqft = 1950
  if (calcSize.value === '3 Marla') sqft = 1150
  if (calcSize.value === '5 Marla') sqft = 1950
  if (calcSize.value === '10 Marla') sqft = 3300
  if (calcSize.value === '1 Kanal') sqft = 5900
  if (calcSize.value === '2 Kanal') sqft = 10500

  let rate = 5200
  if (calcScope.value === 'grey_structure') {
    rate = 2650
  } else if (calcScope.value === 'turnkey_standard') {
    rate = 4300
  } else if (calcScope.value === 'turnkey_premium') {
    rate = 5200
  }

  if (calcCity.value === 'Islamabad') rate = Math.round(rate * 1.05)
  if (calcCity.value === 'Karachi') rate = Math.round(rate * 1.03)

  const total = sqft * rate

  const formatPKR = (num) => {
    if (num >= 10000000) {
      return 'PKR ' + (num / 10000000).toFixed(2) + ' Crore'
    }
    return 'PKR ' + (num / 100000).toFixed(2) + ' Lacs'
  }

  const breakdown = [
    { name: 'Bricks & Blockwork', quantity: 'First Class Awwal', cost: formatPKR(total * 0.16), share: '16%' },
    { name: 'Deformed Steel', quantity: 'Grade 60 Steel', cost: formatPKR(total * 0.22), share: '22%' },
    { name: 'Cement & Concrete', quantity: 'OPC Ordinary Portland', cost: formatPKR(total * 0.18), share: '18%' },
    { name: 'Finishing & Tiles', quantity: 'Porcelain & Granite', cost: formatPKR(total * 0.20), share: '20%' },
    { name: 'MEP Electrical/Plumb', quantity: 'Copper Cable & PPRC', cost: formatPKR(total * 0.12), share: '12%' },
    { name: 'Labor & Superint.', quantity: 'Supervised Execution', cost: formatPKR(total * 0.12), share: '12%' }
  ]

  return {
    sqft,
    ratePerSqFt: 'PKR ' + rate.toLocaleString() + ' / sq.ft.',
    totalFormatted: formatPKR(total),
    breakdown
  }
})
</script>
