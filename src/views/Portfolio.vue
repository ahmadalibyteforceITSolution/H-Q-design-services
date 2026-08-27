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

    <!-- 4K Cinematic Commercial Showcase -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-play-circle text-[#088C7E]"></i>
          <span>Official 4K Cinematic Showcase</span>
        </h2>
        <span class="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          60-Second Full Tour
        </span>
      </div>
      <CinematicShowreel />
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

            <!-- Specification Badges (Residential vs Commercial) -->
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800">
              <template v-if="project.isCommercial">
                <span class="flex items-center gap-1"><i class="fa-solid fa-building text-[#088C7E]"></i> {{ project.type }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#088C7E]"></i> {{ project.floors }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-square-parking text-[#088C7E]"></i> {{ project.parking }}</span>
              </template>
              <template v-else>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#088C7E]"></i> {{ project.beds }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#088C7E]"></i> {{ project.baths }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#088C7E]"></i> {{ project.floors }}</span>
              </template>
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
            href="https://wa.me/966507143124" 
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
              <span class="text-slate-400 block text-[10px]">PROJECT TYPE</span>
              <span>{{ selectedProject.isCommercial ? selectedProject.type : selectedProject.beds + ' / ' + selectedProject.baths }}</span>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px]">FLOORS</span>
              <span>{{ selectedProject.floors }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div class="text-xs text-slate-500">
              <span>Direct Architect Desk: </span>
              <strong class="text-slate-900 dark:text-white">+966 50 714 3124</strong>
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
import CinematicShowreel from '../components/CinematicShowreel.vue'

const emit = defineEmits(['open-start-project'])

const categories = ['All Projects', '5 Marla Villas', '10 Marla Luxury', '1 Kanal Estates', 'Commercial Plazas', 'Luxury Interiors']
const activeCategory = ref('All Projects')

const selectedProject = ref(null)

const projects = ref([
  {
    id: 101,
    title: 'Modern Luxury Villa Architectural Masterpiece',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'Parkview City Golf Estate, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 6.5 Lac Design Package',
    beds: '5 Beds',
    baths: '6 Baths',
    floors: 'Double Story + Pool',
    image: '/images/scene1_villa.jpg',
    description: 'Contemporary geometric villa exterior featuring cantilevered limestone slabs, floor-to-ceiling thermal glass facades, infinity reflection pool, and warm integrated architectural LED illumination.'
  },
  {
    id: 102,
    title: 'Double-Height Royal Penthouse Suite',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 6 Main Boulevard, Lahore',
    plotSize: '3,800 sq.ft Penthouse',
    price: 'PKR 8.5 Lac Interior Fee',
    beds: '4 Master Suites',
    baths: '5 Baths',
    floors: 'Duplex Penthouse',
    image: '/images/scene9_hero.jpg',
    description: 'Sculptural floating illuminated spiral staircase, double-height panoramic skyline windows, Italian bookmatched Calacatta marble flooring, and custom cascading blown-glass chandelier.'
  },
  {
    id: 103,
    title: 'Open-Concept Calacatta Living Room & Lounge',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'Parkview City Executive Block, Lahore',
    plotSize: '10 Marla Luxury',
    price: 'PKR 4.2 Lac',
    beds: 'Lounge Suite',
    baths: 'Powder Room',
    floors: 'Ground Floor Lounge',
    image: '/images/scene3_living.jpg',
    description: 'Bespoke curved Italian bouclé sofa arrangement, full-height bookmatched Calacatta marble fireplace wall, acoustic fluted timber panels, and panoramic garden terrace access.'
  },
  {
    id: 104,
    title: '3D BIM CAD Blueprint to Photorealistic Visualization',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'DHA Phase 8, Lahore',
    plotSize: '10 Marla (35x70)',
    price: 'PKR 3.5 Lac',
    beds: '4 Beds',
    baths: '5 Baths',
    floors: 'Double Story',
    image: '/images/scene7_3d.jpg',
    description: 'Complete 3D structural BIM modeling transforming 2D municipal architectural blueprints into hyper-realistic 4K interior renderings before construction begins.'
  },
  {
    id: 105,
    title: 'Master Bedroom Suite with Fluted Acoustic Headboard',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'Bahria Town, Lahore',
    plotSize: '1 Kanal Luxury Suite',
    price: 'PKR 3.8 Lac',
    beds: 'Master Suite',
    baths: 'En-Suite Spa Bath',
    floors: 'Upper Floor Suite',
    image: '/images/scene4_bedroom.jpg',
    description: 'Serene modern master suite with custom fluted timber feature wall, ambient bedside pendant lighting, imported linen bedding, and private balcony overlooking landscaped grounds.'
  },
  {
    id: 106,
    title: 'Monolithic Waterfall Quartz Chef Kitchen',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'Gulberg 3, Lahore',
    plotSize: 'Luxury Villa Kitchen',
    price: 'PKR 4.5 Lac',
    beds: 'Kitchen Suite',
    baths: 'Pantry Room',
    floors: 'Ground Floor',
    image: '/images/scene6_kitchen.jpg',
    description: 'High-end contemporary kitchen featuring massive waterfall marble central island, matte charcoal handleless cabinetry, built-in Miele appliances, and champagne brass accents.'
  },
  {
    id: 107,
    title: 'Grey Structure to Turnkey Luxury Transformation',
    category: '5 Marla Villas',
    isCommercial: false,
    location: 'Parkview City, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 2.2 Lac',
    beds: '3 Beds',
    baths: '4 Baths',
    floors: 'Double Story',
    image: '/images/scene8_transformation.jpg',
    description: 'Complete before-and-after construction execution converting raw grey-structure concrete into an opulent, turnkey luxury residence with modern Venetian plaster and LED cove lighting.'
  },
  {
    id: 108,
    title: 'Contemporary Marble & Walnut Dining Salon',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '1 Kanal Dining Salon',
    price: 'PKR 3.2 Lac',
    beds: 'Dining Salon',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/scene5_dining.jpg',
    description: 'Monolithic Calacatta marble dining table seating 10, designer sculptural chairs, custom bronze halo pendant, and full-height glass sliders opening onto lush courtyard gardens.'
  },
  {
    id: 1,
    title: 'Gulberg 3 Corporate Commercial Glass Plaza',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'Gulberg 3, Lahore',
    plotSize: '8 Marla Commercial (6,000 sq.ft)',
    price: 'PKR 6.5 Lac Design Fee',
    type: 'Glass High-Rise Plaza',
    floors: 'Basement + G + 5 Floors',
    parking: 'Basement Parking',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'Modern curtain-wall glass facade commercial plaza design engineered for corporate headquarters, IT office suites, and ground-floor retail outlets in Gulberg 3 Lahore.'
  },
  {
    id: 2,
    title: 'DHA Phase 8 Commercial Arcade & Retail Complex',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'DHA Phase 8, Lahore',
    plotSize: '12 Marla Commercial',
    price: 'PKR 8.2 Lac Design Fee',
    type: 'Retail & Corporate Plaza',
    floors: 'G + 4 Commercial Floors',
    parking: 'Dedicated Parking Bay',
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80',
    description: 'High-visibility commercial arcade architectural plan featuring double-glazed glass front, modern showroom layouts, and DHA municipal approved elevator shaft plans.'
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
