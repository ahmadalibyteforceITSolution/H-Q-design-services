<template>
  <div class="space-y-12 pb-20">
    
    <!-- Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Find Certified Architects & Verified Agents</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Pakistan's Certified <span class="text-gradient-hq">Architects & Real Estate</span> Experts
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Connect directly with verified architectural engineers, luxury interior stylists, and DHA/Bahria Town licensed real estate consultants.
          </p>
        </div>

      </div>
    </section>

    <!-- Agents Grid -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div 
          v-for="agent in agentsData" 
          :key="agent.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          
          <div class="space-y-4">
            <!-- Header Row -->
            <div class="flex items-start gap-4">
              <img :src="agent.avatar" :alt="agent.name" class="w-20 h-20 rounded-2xl object-cover shadow-md shrink-0 border-2 border-[#088C7E]" />
              <div class="space-y-1 flex-1">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[10px] font-black uppercase">
                    {{ agent.verifiedBadge }}
                  </span>
                  <div class="flex items-center gap-1 text-xs font-black text-amber-400">
                    <i class="fa-solid fa-star"></i>
                    <span>{{ agent.rating }}</span>
                    <span class="text-slate-400 font-normal">({{ agent.reviewCount }})</span>
                  </div>
                </div>
                <h2 class="text-xl font-black text-slate-900 dark:text-white">{{ agent.name }}</h2>
                <p class="text-xs font-bold text-[#088C7E]">{{ agent.role }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">{{ agent.company }}</p>
              </div>
            </div>

            <!-- Specialties & Badges -->
            <div class="space-y-2 pt-2">
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {{ agent.specialty }}
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="(badge, idx) in agent.badges" 
                  :key="idx"
                  class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold"
                >
                  {{ badge }}
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-center text-xs font-bold">
              <div>
                <span class="text-slate-400 text-[10px] block">Experience</span>
                <span class="text-slate-900 dark:text-white">{{ agent.experience }}</span>
              </div>
              <div>
                <span class="text-slate-400 text-[10px] block">Projects</span>
                <span class="text-[#088C7E] font-black">{{ agent.completedProjects }}+</span>
              </div>
              <div>
                <span class="text-slate-400 text-[10px] block">Listings</span>
                <span class="text-slate-900 dark:text-white">{{ agent.activeListings }} Active</span>
              </div>
            </div>

          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              :href="'tel:' + agent.phone"
              class="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-phone text-[#088C7E]"></i>
              <span>Call: {{ agent.phone }}</span>
            </a>
            <a 
              :href="'https://wa.me/' + agent.whatsapp + '?text=' + encodeURIComponent('Assalam-o-Alaikum ' + agent.name + ', I would like to consult regarding architectural 3D design and property in Lahore.')"
              target="_blank"
              class="flex-1 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2"
            >
              <i class="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { agentsData } from '../data/agentsData.js'
</script>
