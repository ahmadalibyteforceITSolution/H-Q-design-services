<template>
  <div class="space-y-12 pb-20">
    
    <!-- Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Pakistan Real Estate Area Guides</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Comprehensive <span class="text-gradient-zameen">Society & Neighborhood</span> Guides
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            In-depth analysis of Pakistan's premier housing societies: Parkview City, DHA Lahore, Bahria Town, and Gulberg. Compare average plot rates, schools, hospitals, and municipal bylaws.
          </p>
        </div>

      </div>
    </section>

    <!-- Main Guides Grid -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div 
          v-for="guide in areaGuidesData" 
          :key="guide.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
        >
          
          <!-- Image Banner -->
          <div class="relative h-64 overflow-hidden bg-slate-950">
            <img :src="guide.image" :alt="guide.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 border border-white/10">
              <i class="fa-solid fa-location-dot text-rose-500"></i>
              <span>{{ guide.city }}</span>
            </div>
            <div class="absolute bottom-4 right-4 bg-[#088C7E] text-white font-black text-xs px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
              <i class="fa-solid fa-star text-amber-300"></i>
              <span>Lifestyle Score: {{ guide.lifestyleScore }} / 10</span>
            </div>
          </div>

          <!-- Guide Content -->
          <div class="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            
            <div class="space-y-3">
              <h2 class="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {{ guide.name }}
              </h2>
              <p class="text-xs font-bold text-[#088C7E]">
                {{ guide.tagline }}
              </p>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ guide.overview }}
              </p>
            </div>

            <!-- Price Averages Strip -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
              <span class="text-[10px] font-black uppercase text-slate-400 block tracking-wider">Average Property Price Benchmarks</span>
              <div class="grid grid-cols-3 gap-2 text-center font-bold">
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <span class="text-slate-400 text-[10px] block">5 Marla</span>
                  <strong class="text-slate-900 dark:text-white text-xs">{{ guide.avgPrice5Marla.split('-')[0] }}</strong>
                </div>
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <span class="text-slate-400 text-[10px] block">10 Marla</span>
                  <strong class="text-slate-900 dark:text-white text-xs">{{ guide.avgPrice10Marla.split('-')[0] }}</strong>
                </div>
                <div class="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <span class="text-slate-400 text-[10px] block">1 Kanal</span>
                  <strong class="text-slate-900 dark:text-white text-xs">{{ guide.avgPrice1Kanal.split('-')[0] }}</strong>
                </div>
              </div>
            </div>

            <!-- Amenities Ratings Grid -->
            <div class="space-y-2">
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Neighborhood Amenities Rating
              </h3>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div 
                  v-for="(amenity, idx) in guide.amenities" 
                  :key="idx"
                  class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold"
                >
                  <span class="text-slate-700 dark:text-slate-300 flex items-center gap-2 truncate">
                    <i :class="amenity.icon + ' text-[#088C7E] text-xs shrink-0'"></i>
                    <span class="truncate">{{ amenity.name }}</span>
                  </span>
                  <span class="text-emerald-500 font-extrabold ml-1 shrink-0">{{ amenity.rating }}</span>
                </div>
              </div>
            </div>

            <!-- Municipal Bylaws Hint -->
            <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-500/30 text-amber-900 dark:text-amber-300 text-xs leading-relaxed font-medium">
              <strong class="font-bold flex items-center gap-1 mb-1">
                <i class="fa-solid fa-file-contract"></i>
                <span>Architectural & Bylaws Summary:</span>
              </strong>
              <span>{{ guide.bylawsSummary }}</span>
            </div>

            <!-- CTA Row -->
            <div class="pt-2">
              <router-link 
                to="/properties" 
                class="w-full py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                <span>View Live Properties in {{ guide.name }}</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </router-link>
            </div>

          </div>

        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { areaGuidesData } from '../data/areaGuidesData.js'
</script>
