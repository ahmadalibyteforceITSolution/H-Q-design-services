<template>
  <div class="space-y-12 pb-20 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Banner (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">Find Certified Architects &amp; Verified Agents</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">PCATP &amp; PEC LICENSED ARCHITECTS</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Pakistan's Certified <span class="text-gradient-gold">Architects &amp; Real Estate</span> Experts
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
          class="tecture-card border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
        >
          
          <div class="space-y-4">
            <!-- Header Row -->
            <div class="flex items-start gap-4">
              <img :src="agent.avatar" :alt="agent.name" class="w-20 h-20 rounded-2xl object-cover shadow-md shrink-0 border-2 border-[#C5A880]" />
              <div class="space-y-1 flex-1">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 text-[10px] font-black uppercase">
                    {{ agent.verifiedBadge }}
                  </span>
                  <div class="flex items-center gap-1 text-xs font-black text-amber-400">
                    <i class="fa-solid fa-star"></i>
                    <span>{{ agent.rating }}</span>
                    <span class="text-slate-400 font-normal">({{ agent.reviewCount }})</span>
                  </div>
                </div>
                <h2 class="text-xl font-black text-slate-900 dark:text-white">{{ agent.name }}</h2>
                <p class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5]">{{ agent.role }}</p>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-semibold">{{ agent.company }}</p>
              </div>
            </div>

            <!-- Specialties & Badges -->
            <div class="space-y-2 pt-2">
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {{ agent.specialty }}
              </p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="(badge, idx) in agent.badges" 
                  :key="idx"
                  class="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-[10px] font-bold"
                >
                  {{ badge }}
                </span>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 text-center text-xs font-bold">
              <div>
                <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-extrabold uppercase">Experience</span>
                <span class="text-slate-900 dark:text-white">{{ agent.experience }}</span>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-extrabold uppercase">Projects</span>
                <span class="text-[#8C6A38] dark:text-[#DFC8A5] font-black">{{ agent.completedProjects }}+</span>
              </div>
              <div>
                <span class="text-slate-500 dark:text-slate-400 text-[10px] block font-extrabold uppercase">Listings</span>
                <span class="text-slate-900 dark:text-white">{{ agent.activeListings }} Active</span>
              </div>
            </div>

          </div>

          <!-- Actions -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              :href="'tel:' + agent.phone"
              class="flex-1 py-3 rounded-full tecture-btn-outline text-slate-900 dark:text-white text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-phone text-[#C5A880]"></i>
              <span>Call: {{ agent.phone }}</span>
            </a>
            <button 
              type="button"
              @click="openWhatsApp(agent.whatsapp, 'Assalam-o-Alaikum ' + agent.name + ', I would like to consult regarding architectural 3D design and property in Lahore.')"
              class="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 shadow-md flex items-center justify-center gap-2 cursor-pointer border-0"
            >
              <i class="fa-brands fa-whatsapp text-base"></i>
              <span>WhatsApp</span>
            </button>
          </div>

        </div>

      </div>

    </main>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { agentsData } from '../data/agentsData.js'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'
</script>