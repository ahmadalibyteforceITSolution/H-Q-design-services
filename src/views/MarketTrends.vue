<template>
  <div class="space-y-12 pb-20">
    
    <!-- Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Pakistan Real Estate Trends & Price Index</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Real Estate <span class="text-gradient-hq">Price Index & Market</span> Trends
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Track historical property price growth (2021-2026), demand scores, and rental yields across Lahore, Islamabad, and Karachi with verified architectural insights.
          </p>
        </div>

        <!-- Metric KPI Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400">Avg. YoY Capital Growth</span>
            <div class="text-2xl font-black text-emerald-400">+18.4%</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400">Top Demand Sector</span>
            <div class="text-base font-extrabold text-white truncate">DHA & Bahria Town</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400">Average Construction Cost</span>
            <div class="text-base font-extrabold text-amber-300">PKR 4,850 / sq.ft.</div>
          </div>
          <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
            <span class="text-[10px] uppercase font-bold text-slate-400">Monthly Searches</span>
            <div class="text-2xl font-black text-cyan-400">2.8M+</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Main Content -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <!-- Price Index Growth Visual Chart -->
      <section class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Pakistan Property Price Index (Base 2021 = 100)
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Compound capital appreciation over 5 years across major metros.</p>
          </div>
          <div class="flex items-center gap-3 text-xs font-bold">
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[#088C7E]"></span> Lahore</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-amber-500"></span> Islamabad</span>
            <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-cyan-500"></span> Karachi</span>
          </div>
        </div>

        <!-- Responsive Bar / Chart Grid -->
        <div class="grid grid-cols-6 gap-2 sm:gap-4 pt-6 pb-2 border-b border-slate-200 dark:border-slate-800 items-end h-64">
          <div v-for="point in marketTrendsData.priceIndexHistory" :key="point.year" class="flex flex-col items-center h-full justify-end space-y-2">
            
            <div class="w-full flex items-end justify-center gap-1 h-44">
              <!-- Lahore Bar -->
              <div 
                :style="{ height: (point.lahore / 262 * 100) + '%' }" 
                class="w-3 sm:w-5 bg-[#088C7E] rounded-t-md transition-all hover:opacity-80"
                :title="'Lahore: ' + point.lahore"
              ></div>
              <!-- Islamabad Bar -->
              <div 
                :style="{ height: (point.islamabad / 262 * 100) + '%' }" 
                class="w-3 sm:w-5 bg-amber-500 rounded-t-md transition-all hover:opacity-80"
                :title="'Islamabad: ' + point.islamabad"
              ></div>
              <!-- Karachi Bar -->
              <div 
                :style="{ height: (point.karachi / 262 * 100) + '%' }" 
                class="w-3 sm:w-5 bg-cyan-500 rounded-t-md transition-all hover:opacity-80"
                :title="'Karachi: ' + point.karachi"
              ></div>
            </div>

            <span class="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 text-center">{{ point.year }}</span>
          </div>
        </div>

      </section>

      <!-- Top Trending Localities Table -->
      <section class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        
        <div class="space-y-1">
          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            Top 5 Trending Societies in 2026
          </h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Ranked by search volume, construction activity, and YoY price growth.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs font-bold">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-800 text-[10px] uppercase text-slate-400">
                <th class="py-3 px-4">Housing Society</th>
                <th class="py-3 px-4">City</th>
                <th class="py-3 px-4">Approval Status</th>
                <th class="py-3 px-4">Avg. 5M Price</th>
                <th class="py-3 px-4">1-Yr Capital Growth</th>
                <th class="py-3 px-4">Demand Rating</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr v-for="item in marketTrendsData.topTrendingSocieties" :key="item.name" class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                <td class="py-4 px-4 font-black text-slate-900 dark:text-white">{{ item.name }}</td>
                <td class="py-4 px-4 text-slate-600 dark:text-slate-300">{{ item.city }}</td>
                <td class="py-4 px-4"><span class="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-300 text-[10px]">{{ item.type }}</span></td>
                <td class="py-4 px-4 text-slate-900 dark:text-white font-extrabold">{{ item.avg5MarlaPrice }}</td>
                <td class="py-4 px-4 text-emerald-500 font-black">{{ item.growth1Year }}</td>
                <td class="py-4 px-4"><span class="px-2 py-1 rounded-md bg-[#088C7E] text-white text-[10px] font-black">{{ item.demandScore }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>

    </main>

  </div>
</template>

<script setup>
import { marketTrendsData } from '../data/marketTrendsData.js'
</script>
