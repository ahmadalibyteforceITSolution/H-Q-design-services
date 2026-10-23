<template>
  <div class="space-y-12 pb-20 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Banner (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">New Projects &amp; Mega Developments in Pakistan</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">MASTER COMMUNITIES &amp; TOWERS</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Verified <span class="text-gradient-gold">New Housing &amp; Commercial</span> Developments
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Discover LDA, CDA &amp; SBCA approved residential master communities, corporate towers, and off-plan high-rise apartments with 1 to 5 years easy installment plans.
          </p>
        </div>

      </div>
    </section>

    <!-- Main Projects Catalog -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Filter Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl tecture-card border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xl">
        <div class="flex items-center gap-2">
          <span class="text-sm font-black text-slate-900 dark:text-white">{{ projectsData.length }} Mega Projects</span>
          <span class="px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] text-[11px] font-extrabold border border-[#C5A880]/30">All Approved</span>
        </div>

        <div class="flex items-center gap-2">
          <button 
            v-for="city in ['All', 'Lahore', 'Islamabad']" 
            :key="city"
            @click="filterCity = city"
            :class="[
              'px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer border tracking-wider',
              filterCity === city 
                ? 'tecture-btn-gold shadow-md border-[#C5A880]' 
                : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#C5A880]'
            ]"
          >
            {{ city }}
          </button>
        </div>
      </div>

      <!-- Projects Cards List -->
      <div class="space-y-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="tecture-card border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0 group"
        >
          <!-- Left Visual Banner -->
          <div class="lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] bg-slate-950 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full tecture-btn-gold text-[10px] shadow">
                {{ project.nocStatus.split(' ')[0] }} Approved
              </span>
              <span class="px-3 py-1 rounded-full bg-[#0B0E14]/90 text-amber-300 text-[10px] font-black uppercase tracking-wider backdrop-blur-md border border-white/10">
                {{ project.status }}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 bg-[#0B0E14]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white font-black text-sm border border-white/10 shadow-xl">
              Starts: {{ project.priceStarting }}
            </div>
          </div>

          <!-- Right Project Content -->
          <div class="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5]">
                <i class="fa-solid fa-location-dot text-[#C5A880]"></i>
                <span>{{ project.location }}</span>
              </div>

              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {{ project.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {{ project.overview }}
              </p>
            </div>

            <!-- Installments & Payment Offerings Table -->
            <div class="space-y-2">
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <i class="fa-solid fa-money-check-dollar text-[#C5A880]"></i>
                <span>Available Units &amp; Payment Plans ({{ project.installmentPlan }})</span>
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div 
                  v-for="(offering, idx) in project.offerings" 
                  :key="idx"
                  class="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 flex items-center justify-between font-bold"
                >
                  <div>
                    <span class="text-slate-900 dark:text-white block font-extrabold">{{ offering.size }}</span>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400">Monthly: {{ offering.monthly }}</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[#8C6A38] dark:text-[#DFC8A5] font-black">{{ offering.price }}</span>
                    <span class="text-[10px] text-amber-500 dark:text-amber-400 block font-bold">Down: {{ offering.downPayment }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Features & Amenities -->
            <div class="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span 
                v-for="(feat, idx) in project.features" 
                :key="idx"
                class="px-2.5 py-1 rounded-lg bg-[#C5A880]/10 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/20 flex items-center gap-1.5 font-bold"
              >
                <i class="fa-solid fa-check text-[10px] text-[#C5A880]"></i>
                <span>{{ feat }}</span>
              </span>
            </div>

            <!-- Actions Row -->
            <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button 
                type="button"
                @click="openWhatsApp('923134487315', 'Assalam-o-Alaikum, I want brochure and booking details for ' + project.title)"
                class="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border-0"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>Download Payment Plan &amp; Book</span>
              </button>

              <a 
                href="tel:03134487315"
                class="w-full sm:w-auto px-5 py-3 rounded-full tecture-btn-outline text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-phone text-[#C5A880]"></i>
                <span>Call Project Desk</span>
              </a>
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
import { ref, computed } from 'vue'
import { projectsData } from '../data/projectsData.js'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'

const filterCity = ref('All')

const filteredProjects = computed(() => {
  if (filterCity.value === 'All') return projectsData
  return projectsData.filter(p => p.city === filterCity.value)
})
</script>