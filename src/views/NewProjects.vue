<template>
  <div class="space-y-12 pb-20">
    
    <!-- Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">New Projects & Mega Developments in Pakistan</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Verified <span class="text-gradient-zameen">New Housing & Commercial</span> Developments
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Discover LDA, CDA & SBCA approved residential master communities, corporate towers, and off-plan high-rise apartments with 1 to 5 years easy installment plans.
          </p>
        </div>

      </div>
    </section>

    <!-- Main Projects Catalog -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Filter Bar -->
      <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
        <div class="flex items-center gap-2">
          <span class="text-sm font-black text-slate-900 dark:text-white">{{ projectsData.length }} Mega Projects</span>
          <span class="px-2.5 py-0.5 rounded-md bg-[#088C7E]/10 text-[#088C7E] text-[11px] font-extrabold">All Approved</span>
        </div>

        <div class="flex items-center gap-2">
          <button 
            v-for="city in ['All', 'Lahore', 'Islamabad']" 
            :key="city"
            @click="filterCity = city"
            :class="[
              'px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer',
              filterCity === city ? 'bg-[#088C7E] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
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
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-0 group"
        >
          <!-- Left Visual Banner -->
          <div class="lg:col-span-5 relative h-72 lg:h-auto min-h-[280px] bg-slate-950 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
              <span class="px-3 py-1 rounded-full bg-[#088C7E] text-white text-[10px] font-black uppercase tracking-wider shadow">
                {{ project.nocStatus.split(' ')[0] }} Approved
              </span>
              <span class="px-3 py-1 rounded-full bg-slate-900/90 text-amber-300 text-[10px] font-black uppercase tracking-wider backdrop-blur-md">
                {{ project.status }}
              </span>
            </div>
            <div class="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white font-black text-sm border border-white/10">
              Starts: {{ project.priceStarting }}
            </div>
          </div>

          <!-- Right Project Content -->
          <div class="lg:col-span-7 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div class="space-y-3">
              <div class="flex items-center gap-2 text-xs font-bold text-[#088C7E]">
                <i class="fa-solid fa-location-dot"></i>
                <span>{{ project.location }}</span>
              </div>

              <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                {{ project.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ project.overview }}
              </p>
            </div>

            <!-- Installments & Payment Offerings Table -->
            <div class="space-y-2">
              <h3 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">
                Available Units & Payment Plans ({{ project.installmentPlan }})
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div 
                  v-for="(offering, idx) in project.offerings" 
                  :key="idx"
                  class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between font-bold"
                >
                  <div>
                    <span class="text-slate-900 dark:text-white block">{{ offering.size }}</span>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400">Monthly: {{ offering.monthly }}</span>
                  </div>
                  <div class="text-right">
                    <span class="text-[#088C7E] font-black">{{ offering.price }}</span>
                    <span class="text-[10px] text-amber-500 block">Down: {{ offering.downPayment }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Key Features & Amenities -->
            <div class="flex flex-wrap gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span 
                v-for="(feat, idx) in project.features" 
                :key="idx"
                class="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5"
              >
                <i class="fa-solid fa-check text-[10px]"></i>
                <span>{{ feat }}</span>
              </span>
            </div>

            <!-- Actions Row -->
            <div class="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a 
                :href="'https://wa.me/966507143124?text=' + encodeURIComponent('Assalam-o-Alaikum, I want brochure and booking details for ' + project.title)"
                target="_blank"
                class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
                <span>Download Payment Plan & Book</span>
              </a>

              <a 
                href="tel:03416887454"
                class="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <i class="fa-solid fa-phone text-[#088C7E]"></i>
                <span>Call Project Desk</span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projectsData } from '../data/projectsData.js'

const filterCity = ref('All')

const filteredProjects = computed(() => {
  if (filterCity.value === 'All') return projectsData
  return projectsData.filter(p => p.city === filterCity.value)
})
</script>
