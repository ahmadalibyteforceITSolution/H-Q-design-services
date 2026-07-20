<template>
  <div class="py-12 space-y-12 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Hero Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
        Zameen Verified Portfolio
      </span>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
        Featured <span class="text-gradient-zameen">3D Elevation Renders</span> & Maps
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
        Explore 500+ completed residential villas, commercial plazas, and luxury interiors designed by H&Q Studio in Parkview City & DHA Lahore.
      </p>
    </div>

    <!-- Filter Category Pills -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer border',
          activeCategory === cat 
            ? 'bg-[#088C7E] text-white border-[#088C7E] shadow-lg shadow-[#088C7E]/30' 
            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#088C7E]'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Portfolio Listings Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <!-- Image Container with Zameen Price Badge -->
          <div class="relative h-64 overflow-hidden cursor-pointer" @click="selectedProject = project">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black shadow-lg">
              {{ project.price }}
            </div>
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/20 flex items-center gap-1">
              <i class="fa-solid fa-circle-check text-emerald-400"></i> Zameen Verified
            </div>
          </div>

          <!-- Content Info -->
          <div class="p-6 space-y-3">
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> {{ project.location }}</span>
              <span class="font-bold text-slate-900 dark:text-white">{{ project.plotSize }}</span>
            </div>

            <h3 
              @click="selectedProject = project" 
              class="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors cursor-pointer"
            >
              {{ project.title }}
            </h3>

            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800">
              <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#088C7E]"></i> {{ project.beds }}</span>
              <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#088C7E]"></i> {{ project.baths }}</span>
              <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#088C7E]"></i> {{ project.floors }}</span>
            </div>
          </div>
        </div>

        <!-- Action Row -->
        <div class="p-6 pt-0 flex items-center gap-3">
          <button 
            @click="selectedProject = project"
            class="flex-1 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow"
          >
            <i class="fa-solid fa-eye text-xs"></i>
            <span>View 3D Plan</span>
          </button>
          <a 
            href="https://wa.me/923416887454" 
            target="_blank" 
            class="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 transition-all text-sm"
            title="Chat on WhatsApp"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Zameen Project Detail Modal -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4"
      @click.self="selectedProject = null"
    >
      <div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white max-w-3xl w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button 
          @click="selectedProject = null" 
          class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center font-bold text-base"
        >
          ✕
        </button>

        <div class="rounded-2xl overflow-hidden h-72">
          <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-3.5 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black">
              {{ selectedProject.price }}
            </span>
            <span class="text-xs font-bold text-[#088C7E]">Zameen Verified Standard</span>
          </div>

          <h3 class="text-2xl font-black">{{ selectedProject.title }}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{{ selectedProject.description }}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 text-xs font-bold text-center">
            <div>
              <span class="text-slate-400 block text-[10px]">LOCATION</span>
              <span>{{ selectedProject.location }}</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">PLOT SCALE</span>
              <span>{{ selectedProject.plotSize }}</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">BEDS & BATHS</span>
              <span>{{ selectedProject.beds }} / {{ selectedProject.baths }}</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">FLOORS</span>
              <span>{{ selectedProject.floors }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div class="text-xs text-slate-500">
              <span>Direct Architect Desk: </span>
              <strong class="text-slate-900 dark:text-white">0341-6887454</strong>
            </div>
            <button 
              @click="requestThisProject"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-[#088C7E]/30 cursor-pointer"
            >
              Get Floor Plan Quote
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['open-start-project'])

const categories = ['All Projects', '5 Marla Villas', '10 Marla Luxury', '1 Kanal Estates', 'Commercial Plazas', 'Luxury Interiors']
const activeCategory = ref('All Projects')

const selectedProject = ref(null)

const projects = ref([
  {
    id: 1,
    title: 'Modern 10 Marla Spanish Villa Floor Plan',
    category: '10 Marla Luxury',
    location: 'Parkview City, Lahore',
    plotSize: '10 Marla (35x70)',
    price: 'PKR 2.8 Lac',
    beds: '5 Beds',
    baths: '6 Baths',
    floors: 'Triple Story',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'Spanish architectural villa design featuring double-height ceiling lounge, underground basement entertainment room, and open terrace.'
  },
  {
    id: 2,
    title: 'Executive DHA Phase 6 Interior Package',
    category: 'Luxury Interiors',
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 4.8 Lac',
    beds: '4 Beds',
    baths: '5 Baths',
    floors: 'Double Story',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    description: 'Custom interior styling with Italian Statuario marble floors, rosewood wall paneling, LED cove illumination, and modular kitchen.'
  },
  {
    id: 3,
    title: 'Gulberg 3 Corporate Commercial Plaza',
    category: 'Commercial Plazas',
    location: 'Gulberg 3, Lahore',
    plotSize: '6,000 sq.ft',
    price: 'PKR 6.5 Lac',
    beds: '8 Office Pods',
    baths: '4 Baths',
    floors: 'G+5 Floors',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    description: 'Curtain-wall glass facade commercial plaza design optimized for corporate headquarters and retail stores in Gulberg Lahore.'
  },
  {
    id: 4,
    title: '5 Marla Minimalist Modern House Map',
    category: '5 Marla Villas',
    location: 'Parkview City, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 1.8 Lac',
    beds: '3 Beds',
    baths: '4 Baths',
    floors: 'Double Story',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80',
    description: 'Compact 5 Marla floor plan engineered for max ventilation, natural light, Car Porch, and modern 3D elevation.'
  },
  {
    id: 5,
    title: '1 Kanal Royal Mansion Architectural Blueprint',
    category: '1 Kanal Estates',
    location: 'Bahria Town, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 5.5 Lac',
    beds: '6 Beds',
    baths: '7 Baths',
    floors: 'Triple Story + Basement',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    description: 'Royal classical mansion elevation complete with swimming pool layout, servant quarters, and municipal approval blueprint.'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All Projects') return projects.value
  return projects.value.filter(p => p.category === activeCategory.value)
})

const requestThisProject = () => {
  selectedProject.value = null
  emit('open-start-project')
}
</script>
