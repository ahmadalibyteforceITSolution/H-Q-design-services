<template>
  <div class="space-y-12 pb-20 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Banner (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">Pakistan Real Estate Area Guides</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">SOCIETY BYLAWS &amp; RATES</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Comprehensive <span class="text-gradient-gold">Society &amp; Neighborhood</span> Guides
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            In-depth analysis of Pakistan's premier housing societies: Lake City, DHA Lahore, Bahria Town, and Gulberg. Compare average plot rates, schools, hospitals, and municipal bylaws.
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
          class="tecture-card border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
        >
          
          <!-- Image Banner -->
          <div class="relative h-64 overflow-hidden bg-slate-950">
            <img :src="guide.image" :alt="guide.name" class="w-full h-full object-cover" />
            <div class="absolute top-4 left-4 bg-[#0B0E14]/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 border border-white/10">
              <i class="fa-solid fa-location-dot text-[#C5A880]"></i>
              <span>{{ guide.city }}</span>
            </div>
            <div class="absolute bottom-4 right-4 tecture-btn-gold text-[#0B0E14] font-black text-xs px-3.5 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
              <i class="fa-solid fa-star"></i>
              <span>Lifestyle Score: {{ guide.lifestyleScore }} / 10</span>
            </div>
          </div>

          <!-- Guide Content -->
          <div class="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
            
            <div class="space-y-3">
              <h2 class="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {{ guide.name }}
              </h2>
              <p class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5]">
                {{ guide.tagline }}
              </p>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {{ guide.overview }}
              </p>
            </div>

            <!-- Price Averages Strip -->
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-2 text-xs">
              <span class="text-[10px] font-black uppercase text-slate-500 dark:text-slate-400 block tracking-wider font-extrabold">Average Property Price Benchmarks</span>
              <div class="grid grid-cols-3 gap-2 text-center font-bold">
                <div class="p-2.5 rounded-xl bg-white dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10">
                  <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-bold">5 Marla</span>
                  <strong class="text-slate-900 dark:text-white text-xs font-black">{{ guide.avgPrice5Marla.split('-')[0] }}</strong>
                </div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10">
                  <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-bold">10 Marla</span>
                  <strong class="text-slate-900 dark:text-white text-xs font-black">{{ guide.avgPrice10Marla.split('-')[0] }}</strong>
                </div>
                <div class="p-2.5 rounded-xl bg-white dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10">
                  <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-bold">1 Kanal</span>
                  <strong class="text-slate-900 dark:text-white text-xs font-black">{{ guide.avgPrice1Kanal.split('-')[0] }}</strong>
                </div>
              </div>
            </div>

            <!-- Amenities Ratings Grid -->
            <div class="space-y-2">
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <i class="fa-solid fa-list-check text-[#C5A880]"></i>
                <span>Neighborhood Amenities Rating</span>
              </h3>
              <div class="grid grid-cols-2 gap-2 text-xs">
                <div 
                  v-for="(amenity, idx) in guide.amenities" 
                  :key="idx"
                  class="p-2.5 rounded-xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 flex items-center justify-between font-bold"
                >
                  <span class="text-slate-700 dark:text-slate-300 flex items-center gap-2 truncate">
                    <i :class="amenity.icon + ' text-[#C5A880] text-xs shrink-0'"></i>
                    <span class="truncate">{{ amenity.name }}</span>
                  </span>
                  <span class="text-[#8C6A38] dark:text-[#DFC8A5] font-black ml-1 shrink-0">{{ amenity.rating }}</span>
                </div>
              </div>
            </div>

            <!-- Municipal Bylaws Hint -->
            <div class="p-3.5 rounded-2xl bg-[#C5A880]/10 border border-[#C5A880]/30 text-slate-800 dark:text-slate-200 text-xs leading-relaxed font-medium">
              <strong class="font-bold flex items-center gap-1.5 mb-1 text-slate-900 dark:text-white">
                <i class="fa-solid fa-file-contract text-[#C5A880]"></i>
                <span>Architectural &amp; Bylaws Summary:</span>
              </strong>
              <span>{{ guide.bylawsSummary }}</span>
            </div>

            <!-- CTA Row with Cross-Links -->
            <div class="pt-2 space-y-2.5">
              <router-link 
                to="/properties" 
                class="w-full py-3.5 rounded-full tecture-btn-gold text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                <span>View Live Properties in {{ guide.name }}</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </router-link>
              <div class="grid grid-cols-2 gap-2 text-xs font-bold text-center">
                <router-link 
                  to="/tools?tab=cost-calc" 
                  class="p-2.5 rounded-full tecture-btn-outline transition-colors flex items-center justify-center gap-1.5"
                >
                  <i class="fa-solid fa-calculator text-[#C5A880]"></i>
                  <span>Cost Calculator</span>
                </router-link>
                <router-link 
                  to="/portfolio" 
                  class="p-2.5 rounded-full tecture-btn-outline transition-colors flex items-center justify-center gap-1.5"
                >
                  <i class="fa-solid fa-cubes text-[#C5A880]"></i>
                  <span>3D Elevations</span>
                </router-link>
              </div>
            </div>

          </div>

        </div>

      </div>

    </main>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { areaGuidesData } from '../data/areaGuidesData.js'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
</script>