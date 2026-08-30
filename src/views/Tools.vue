<template>
  <div class="space-y-16 pb-20">
    
    <!-- Top Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Real Estate & Architectural Tools Hub</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Smart <span class="text-gradient-hq">Real Estate & Construction</span> Tools
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Calculate exact 2026 house construction costs, explore interactive society plot maps, convert Pakistani land area units, and estimate monthly bank mortgage EMIs.
          </p>
        </div>

        <!-- Tool Selection Tabs -->
        <div class="flex flex-wrap items-center gap-3 pt-4">
          <button 
            v-for="tool in toolsTabs" 
            :key="tool.id"
            @click="activeTool = tool.id"
            :class="[
              'px-5 py-3 rounded-2xl text-xs font-black transition-all cursor-pointer flex items-center gap-2.5 shadow-md',
              activeTool === tool.id ? 'bg-[#088C7E] text-white scale-105 shadow-[#088C7E]/40' : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700'
            ]"
          >
            <i :class="tool.icon"></i>
            <span>{{ tool.name }}</span>
          </button>
        </div>

      </div>
    </section>

    <!-- Main Active Tool View Container -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- 1. CONSTRUCTION COST CALCULATOR -->
      <section v-if="activeTool === 'cost-calc'" class="space-y-8 animate-fadeIn">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-black uppercase tracking-wider">
              Updated for Pakistan 2026 Rates
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              House Construction Cost Calculator
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Calculate total construction budget, material estimates (Bricks, Steel, Cement, Sand), and labor charges for Grey Structure vs Complete Turnkey.
            </p>
          </div>

          <!-- Selectors Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold">
            
            <!-- Plot Size -->
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">House Size</label>
              <select v-model="calcSize" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="3 Marla">3 Marla (Covered Area: 1,150 sq.ft.)</option>
                <option value="5 Marla">5 Marla (Covered Area: 1,950 sq.ft.)</option>
                <option value="10 Marla">10 Marla (Covered Area: 3,300 sq.ft.)</option>
                <option value="1 Kanal">1 Kanal (Covered Area: 5,900 sq.ft.)</option>
                <option value="2 Kanal">2 Kanal (Covered Area: 10,500 sq.ft.)</option>
              </select>
            </div>

            <!-- Finish Quality -->
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Construction Scope</label>
              <select v-model="calcScope" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="turnkey_premium">Complete Turnkey (A+ Luxury Standard)</option>
                <option value="turnkey_standard">Complete Turnkey (A-Grade Standard)</option>
                <option value="grey_structure">Grey Structure Only (Bricks + Concrete)</option>
              </select>
            </div>

            <!-- City Location -->
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">City</label>
              <select v-model="calcCity" class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="Lahore">Lahore (Park View / DHA / Bahria)</option>
                <option value="Islamabad">Islamabad & Rawalpindi</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

          </div>

          <!-- Total Cost Output Card -->
          <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-[#088C7E]/40 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div class="space-y-1 text-center sm:text-left">
              <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Estimated Total Construction Budget</span>
              <div class="text-3xl sm:text-5xl font-black text-white">
                {{ calculatedCost.totalFormatted }}
              </div>
              <p class="text-xs text-slate-300">
                Rate: <strong class="text-amber-300">{{ calculatedCost.ratePerSqFt }}</strong> · Total Area: {{ calculatedCost.sqft }} sq.ft.
              </p>
            </div>

            <a 
              :href="'https://wa.me/966507143124?text=' + encodeURIComponent('Assalam-o-Alaikum, I need complete 3D design & construction execution for ' + calcSize + ' (' + calcScope + ') in ' + calcCity + '. Estimated Cost: ' + calculatedCost.totalFormatted)"
              target="_blank"
              class="px-6 py-3.5 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-xl flex items-center gap-2 cursor-pointer shrink-0"
            >
              <i class="fa-brands fa-whatsapp text-base"></i>
              <span>Get Detailed Bill of Quantities (BOQ)</span>
            </a>
          </div>

          <!-- Itemized Breakdown Grid -->
          <div class="space-y-4">
            <h3 class="text-base font-black text-slate-900 dark:text-white uppercase tracking-wider">
              Itemized Material & Labor Bill of Quantities
            </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div v-for="item in calculatedCost.breakdown" :key="item.name" class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div class="space-y-0.5">
                  <span class="font-extrabold text-slate-900 dark:text-white">{{ item.name }}</span>
                  <span class="text-[11px] text-slate-500 dark:text-slate-400 block">{{ item.quantity }}</span>
                </div>
                <div class="text-right">
                  <span class="font-black text-[#088C7E] text-sm">{{ item.cost }}</span>
                  <span class="text-[10px] text-slate-400 block">{{ item.share }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 2. PLOT FINDER & SOCIETY MAPS -->
      <section v-if="activeTool === 'plot-finder'" class="space-y-8 animate-fadeIn">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-black uppercase tracking-wider">
              High Definition Master Society Maps
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Plot Finder & Society Maps Explorer
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Explore officially approved sector layouts, block maps, and boulevard plots with H&Q 3D design clearance.
            </p>
          </div>

          <!-- Society Selector Tabs -->
          <div class="flex flex-wrap items-center gap-2">
            <button 
              v-for="soc in ['DHA Lahore Phase 7', 'DHA Lahore Phase 6', 'DHA Phase 9 Prism', 'Lake City Lahore', 'Bahria Town Lahore']" 
              :key="soc"
              @click="selectedMapSociety = soc"
              :class="[
                'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer',
                selectedMapSociety === soc ? 'bg-[#088C7E] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              ]"
            >
              {{ soc }}
            </button>
          </div>

          <!-- Map Mock Viewer & Sectors -->
          <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 sm:p-10 text-white space-y-6 relative">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 class="text-xl font-bold text-white">{{ selectedMapSociety }} - Official Layout</h3>
                <p class="text-xs text-slate-400">Status: 100% Possession, Ready for Construction</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  LDA / DHA Sanctioned
                </span>
              </div>
            </div>

            <!-- Interactive Block Grid -->
            <div class="space-y-4">
              <h4 class="text-xs font-extrabold uppercase tracking-wider text-slate-400">Select Block to View Dimensions & 3D Elevations:</h4>
              <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                <button 
                  v-for="blk in ['Overseas Block', 'Golf Estate', 'Crystal Block', 'Diamond Block', 'Executive Block', 'Block J']" 
                  :key="blk"
                  @click="selectedBlock = blk"
                  :class="[
                    'p-4 rounded-2xl border text-center transition-all cursor-pointer space-y-1',
                    selectedBlock === blk ? 'bg-[#088C7E] border-emerald-400 text-white shadow-lg' : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                  ]"
                >
                  <i class="fa-solid fa-map-location-dot text-lg block"></i>
                  <span class="text-xs font-bold block">{{ blk }}</span>
                </button>
              </div>
            </div>

            <!-- Block Specs Summary Box -->
            <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-black uppercase text-[#088C7E]">{{ selectedBlock }} Overview</span>
                <span class="text-xs text-amber-300 font-bold">5M, 10M & 1 Kanal Plots</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div class="p-3 rounded-xl bg-slate-800/80">
                  <span class="text-slate-400 block text-[11px]">Average 5 Marla Price</span>
                  <strong class="text-white text-sm">PKR 85 Lacs - 1.25 Crore</strong>
                </div>
                <div class="p-3 rounded-xl bg-slate-800/80">
                  <span class="text-slate-400 block text-[11px]">Boulevard Width</span>
                  <strong class="text-white text-sm">80 ft & 150 ft Main Blvd</strong>
                </div>
                <div class="p-3 rounded-xl bg-slate-800/80">
                  <span class="text-slate-400 block text-[11px]">H&Q Villa Elevation Package</span>
                  <strong class="text-emerald-400 text-sm">Free Map Consultation</strong>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- 3. AREA UNIT CONVERTER -->
      <section v-if="activeTool === 'unit-converter'" class="space-y-8 animate-fadeIn">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-black uppercase tracking-wider">
              Pakistani Land Measurement System
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Real Estate Area Unit Converter
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Instantly convert between Marla, Kanal, Square Feet, Square Yards, Square Meters, Acres, and Murabba.
            </p>
          </div>

          <!-- Converter Inputs Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            
            <div class="space-y-2">
              <label class="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">From Value & Unit</label>
              <div class="flex gap-2">
                <input 
                  type="number" 
                  v-model.number="unitInput" 
                  class="w-1/2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-black text-base focus:outline-none focus:border-[#088C7E]"
                />
                <select v-model="fromUnit" class="w-1/2 px-3 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-bold focus:outline-none focus:border-[#088C7E]">
                  <option value="marla">Marla (225 sqft)</option>
                  <option value="kanal">Kanal (20 Marla)</option>
                  <option value="sqft">Sq. Ft.</option>
                  <option value="sqyd">Sq. Yd. (Ghaz)</option>
                  <option value="sqm">Sq. Meter</option>
                  <option value="acre">Acre</option>
                </select>
              </div>
            </div>

            <div class="flex justify-center">
              <div class="w-10 h-10 rounded-full bg-[#088C7E] text-white flex items-center justify-center text-base shadow-md">
                <i class="fa-solid fa-arrow-right-arrow-left"></i>
              </div>
            </div>

            <div class="space-y-2">
              <label class="text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">Converted Result</label>
              <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-[#088C7E] text-slate-900 dark:text-white font-black text-lg flex items-center justify-between">
                <span>{{ convertedValues.sqft }} Sq. Ft.</span>
                <span class="text-xs text-[#088C7E] font-bold">Standard</span>
              </div>
            </div>

          </div>

          <!-- All Equivalents Table -->
          <div class="space-y-4">
            <h3 class="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">
              Instant Equivalent Measurements for {{ unitInput }} {{ fromUnit.toUpperCase() }}
            </h3>

            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-bold">
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span class="text-slate-400 block">Marla</span>
                <strong class="text-[#088C7E] text-base">{{ convertedValues.marla }} Marla</strong>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span class="text-slate-400 block">Kanal</span>
                <strong class="text-[#088C7E] text-base">{{ convertedValues.kanal }} Kanal</strong>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span class="text-slate-400 block">Sq. Yards (Ghaz)</span>
                <strong class="text-[#088C7E] text-base">{{ convertedValues.sqyd }} Sq. Yd.</strong>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
                <span class="text-slate-400 block">Sq. Meters</span>
                <strong class="text-[#088C7E] text-base">{{ convertedValues.sqm }} Sq. M</strong>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 4. MORTGAGE EMI CALCULATOR -->
      <section v-if="activeTool === 'mortgage-calc'" class="space-y-8 animate-fadeIn">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div class="space-y-2">
            <span class="px-3 py-1 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-black uppercase tracking-wider">
              Bank Housing Finance Calculator
            </span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Home Loan & Mortgage EMI Calculator
            </h2>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Calculate monthly installment repayments based on property price, down payment, loan tenure, and KIBOR interest rates.
            </p>
          </div>

          <!-- Controls & Sliders -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <div class="lg:col-span-2 space-y-6 text-xs font-bold text-slate-900 dark:text-white">
              
              <!-- Total Property Price -->
              <div class="space-y-2">
                <div class="flex justify-between">
                  <label class="uppercase text-slate-500 dark:text-slate-400">Property Price (PKR)</label>
                  <span class="text-[#088C7E] font-black text-sm">PKR {{ (mortgagePrice / 10000000).toFixed(2) }} Crore</span>
                </div>
                <input type="range" min="3000000" max="150000000" step="500000" v-model.number="mortgagePrice" class="w-full accent-[#088C7E]" />
              </div>

              <!-- Down Payment -->
              <div class="space-y-2">
                <div class="flex justify-between">
                  <label class="uppercase text-slate-500 dark:text-slate-400">Down Payment ({{ mortgageDownPct }}%)</label>
                  <span class="text-[#088C7E] font-black text-sm">PKR {{ ((mortgagePrice * mortgageDownPct / 100) / 100000).toFixed(1) }} Lacs</span>
                </div>
                <input type="range" min="15" max="80" step="5" v-model.number="mortgageDownPct" class="w-full accent-[#088C7E]" />
              </div>

              <!-- Loan Tenure -->
              <div class="space-y-2">
                <div class="flex justify-between">
                  <label class="uppercase text-slate-500 dark:text-slate-400">Loan Tenure</label>
                  <span class="text-[#088C7E] font-black text-sm">{{ mortgageTenure }} Years ({{ mortgageTenure * 12 }} Months)</span>
                </div>
                <input type="range" min="3" max="25" step="1" v-model.number="mortgageTenure" class="w-full accent-[#088C7E]" />
              </div>

              <!-- Interest Rate -->
              <div class="space-y-2">
                <div class="flex justify-between">
                  <label class="uppercase text-slate-500 dark:text-slate-400">KIBOR + Spread Rate (%)</label>
                  <span class="text-[#088C7E] font-black text-sm">{{ mortgageRate }}% p.a.</span>
                </div>
                <input type="range" min="8" max="24" step="0.25" v-model.number="mortgageRate" class="w-full accent-[#088C7E]" />
              </div>

            </div>

            <!-- Output Box -->
            <div class="p-6 rounded-3xl bg-slate-900 border border-[#088C7E]/40 text-white space-y-6 text-center shadow-xl">
              <span class="text-xs font-bold uppercase tracking-wider text-emerald-400">Estimated Monthly EMI</span>
              <div class="text-3xl sm:text-4xl font-black text-white">
                PKR {{ emiCalculation.monthlyFormatted }}
              </div>
              <div class="space-y-3 pt-2 text-xs border-t border-slate-800 text-left">
                <div class="flex justify-between">
                  <span class="text-slate-400">Principal Loan:</span>
                  <span class="font-bold text-white">PKR {{ (emiCalculation.principal / 100000).toFixed(1) }} Lacs</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Total Interest:</span>
                  <span class="font-bold text-amber-400">PKR {{ (emiCalculation.totalInterest / 100000).toFixed(1) }} Lacs</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Total Payable:</span>
                  <span class="font-bold text-emerald-400">PKR {{ (emiCalculation.totalPayable / 10000000).toFixed(2) }} Crore</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const toolsTabs = [
  { id: 'cost-calc', name: 'Construction Cost Calculator', icon: 'fa-solid fa-calculator' },
  { id: 'plot-finder', name: 'Plot Finder & Master Maps', icon: 'fa-solid fa-map-location-dot' },
  { id: 'unit-converter', name: 'Area Unit Converter', icon: 'fa-solid fa-ruler-combined' },
  { id: 'mortgage-calc', name: 'Mortgage / Loan EMI Calculator', icon: 'fa-solid fa-landmark' }
]

const activeTool = ref('cost-calc')

// 1. Cost Calculator State
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
  let label = 'PKR 5,200 / sq.ft.'
  if (calcScope.value === 'grey_structure') {
    rate = 2600
    label = 'PKR 2,600 / sq.ft.'
  } else if (calcScope.value === 'turnkey_standard') {
    rate = 4400
    label = 'PKR 4,400 / sq.ft.'
  }

  const total = sqft * rate
  const totalFormatted = 'PKR ' + (total >= 10000000 ? (total / 10000000).toFixed(2) + ' Crore' : (total / 100000).toFixed(1) + ' Lacs')

  return {
    sqft,
    ratePerSqFt: label,
    totalFormatted,
    breakdown: [
      { name: 'Bricks & Foundation', quantity: (sqft * 25).toLocaleString() + ' First Class Bricks', cost: 'PKR ' + ((total * 0.16) / 100000).toFixed(1) + ' L', share: '16%' },
      { name: 'Cement Bags', quantity: Math.round(sqft * 0.45).toLocaleString() + ' Bags (OPC)', cost: 'PKR ' + ((total * 0.14) / 100000).toFixed(1) + ' L', share: '14%' },
      { name: 'Steel / Rebar (60 Grade)', quantity: (sqft * 0.0038).toFixed(1) + ' Metric Tons', cost: 'PKR ' + ((total * 0.20) / 100000).toFixed(1) + ' L', share: '20%' },
      { name: 'Sand & Crush (Chenab/Margalla)', quantity: Math.round(sqft * 2.8) + ' Cubic Feet', cost: 'PKR ' + ((total * 0.08) / 100000).toFixed(1) + ' L', share: '8%' },
      { name: 'Plumbing & Electrical Wiring', quantity: 'Complete Grade-A Conduit & Sanitary', cost: 'PKR ' + ((total * 0.12) / 100000).toFixed(1) + ' L', share: '12%' },
      { name: 'Tiles, Woodwork & Finishes', quantity: 'Imported Spanish Tiles & Solid Ash', cost: 'PKR ' + ((total * 0.18) / 100000).toFixed(1) + ' L', share: '18%' },
      { name: 'Labor & Architecture Fee', quantity: 'H&Q Supervision + Complete Masonry', cost: 'PKR ' + ((total * 0.12) / 100000).toFixed(1) + ' L', share: '12%' }
    ]
  }
})

// 2. Plot Finder State
const selectedMapSociety = ref('DHA Lahore Phase 7')
const selectedBlock = ref('Overseas Block')

// 3. Unit Converter State
const unitInput = ref(5)
const fromUnit = ref('marla')

const convertedValues = computed(() => {
  let sqftBase = 0
  if (fromUnit.value === 'marla') sqftBase = unitInput.value * 225
  else if (fromUnit.value === 'kanal') sqftBase = unitInput.value * 4500
  else if (fromUnit.value === 'sqft') sqftBase = unitInput.value
  else if (fromUnit.value === 'sqyd') sqftBase = unitInput.value * 9
  else if (fromUnit.value === 'sqm') sqftBase = unitInput.value * 10.7639
  else if (fromUnit.value === 'acre') sqftBase = unitInput.value * 43560

  return {
    sqft: Math.round(sqftBase).toLocaleString(),
    marla: (sqftBase / 225).toFixed(2),
    kanal: (sqftBase / 4500).toFixed(2),
    sqyd: (sqftBase / 9).toFixed(2),
    sqm: (sqftBase / 10.7639).toFixed(2)
  }
})

// 4. Mortgage Calculator State
const mortgagePrice = ref(20000000)
const mortgageDownPct = ref(25)
const mortgageTenure = ref(15)
const mortgageRate = ref(14.5)

const emiCalculation = computed(() => {
  const principal = mortgagePrice.value * (1 - mortgageDownPct.value / 100)
  const monthlyRate = mortgageRate.value / 100 / 12
  const totalMonths = mortgageTenure.value * 12

  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1)
  const totalPayable = emi * totalMonths
  const totalInterest = totalPayable - principal

  return {
    principal,
    monthlyFormatted: Math.round(emi).toLocaleString(),
    totalInterest,
    totalPayable
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>
