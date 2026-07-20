<template>
  <div class="py-12 space-y-12">
    
    <!-- Portfolio Hero Header (Zameen Style) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/20 text-[#088C7E] border border-[#088C7E]/40 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-award text-amber-300"></i> Zameen Verified Design Listings
          </span>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
            Explore 500+ Architecture & <span class="text-gradient-zameen">Interior Designs</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Browse floor plans, 3D elevation renders, and luxury interiors completed across Parkview City, DHA Phase 1-9, Gulberg, and Bahria Town Lahore.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Bar (Zameen Property Tabs) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2">
          <button 
            v-for="cat in filterCategories" 
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-extrabold transition-all uppercase flex items-center gap-1.5 cursor-pointer',
              activeCategory === cat 
                ? 'bg-[#088C7E] text-white shadow-md' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            ]"
          >
            <span>{{ cat }}</span>
          </button>
        </div>

        <!-- Listing Count Badge -->
        <span class="text-xs font-bold text-slate-500 dark:text-slate-400">
          Showing <strong class="text-[#088C7E]">{{ filteredProjects.length }}</strong> Verified Listings
        </span>
      </div>
    </section>

    <!-- Zameen Property & Design Cards Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          @click="openDetail(project)"
          class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black shadow-lg">
                {{ project.price }}
              </div>
              <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/20 flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-emerald-400"></i> Zameen Verified
              </div>
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> {{ project.location }}</span>
                <span class="font-bold text-slate-900 dark:text-white">{{ project.plotSize }}</span>
              </div>
              
              <h3 class="text-lg font-extrabold group-hover:text-[#088C7E] transition-colors leading-snug">{{ project.title }}</h3>
              <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{{ project.desc }}</p>

              <div class="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-800">
                <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#088C7E]"></i> {{ project.beds }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#088C7E]"></i> {{ project.baths }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-cube text-[#088C7E]"></i> 4K 3D Render</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button 
              class="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-[#088C7E] group-hover:text-white text-slate-800 dark:text-slate-200 text-xs font-extrabold transition-all text-center flex items-center justify-center gap-2"
            >
              <i class="fa-solid fa-eye text-xs"></i>
              <span>View Property Details</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Zameen Property Detail Modal -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      @click.self="selectedProject = null"
    >
      <div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl max-w-2xl w-full border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl space-y-6 p-6 sm:p-8 relative">
        <button 
          @click="selectedProject = null"
          class="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white"
        >
          <i class="fa-solid fa-xmark text-base"></i>
        </button>

        <div class="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
          <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
          <span class="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#088C7E] text-white font-black text-sm shadow">
            {{ selectedProject.price }}
          </span>
        </div>

        <div class="space-y-3">
          <div class="flex items-center gap-2 text-xs text-amber-500 font-bold">
            <i class="fa-solid fa-award"></i>
            <span>Zameen.com Verified Listing · Parkview City Approval Ready</span>
          </div>

          <h3 class="text-2xl font-black">{{ selectedProject.title }}</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <i class="fa-solid fa-location-dot text-[#088C7E]"></i>
            <span>{{ selectedProject.location }} | Plot Scale: {{ selectedProject.plotSize }}</span>
          </p>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ selectedProject.desc }}
          </p>

          <div class="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 text-center text-xs">
            <div>
              <span class="text-slate-400 block text-[10px] uppercase font-bold">Bedrooms</span>
              <strong class="text-base text-[#088C7E]">{{ selectedProject.beds }}</strong>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase font-bold">Bathrooms</span>
              <strong class="text-base text-[#088C7E]">{{ selectedProject.baths }}</strong>
            </div>
            <div>
              <span class="text-slate-400 block text-[10px] uppercase font-bold">3D Render</span>
              <strong class="text-base text-amber-500">Ultra HD 4K</strong>
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <button 
            @click="contactArchitect"
            class="flex-1 py-3.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-phone"></i>
            <span>Call Architect 0313-4487315</span>
          </button>
          <a 
            href="https://wa.me/923134487315" 
            target="_blank"
            class="flex-1 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-500 border border-emerald-500/40 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-base"></i>
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['open-start-project'])

const filterCategories = ['ALL', '5 MARLA VILLA', '10 MARLA LUXURY', '1 KANAL ESTATE', 'COMMERCIAL PLAZA', 'INTERIOR STYLING']
const activeCategory = ref('ALL')
const selectedProject = ref(null)

const openDetail = (project) => {
  selectedProject.value = project
}

const contactArchitect = () => {
  selectedProject.value = null
  emit('open-start-project')
}

const projects = ref([
  {
    id: 1,
    category: '10 MARLA LUXURY',
    title: 'Modern 10 Marla Spanish Villa Floor Plan',
    location: 'Parkview City, Lahore',
    plotSize: '10 Marla',
    price: 'PKR 2.8 Lac',
    beds: '5 Beds',
    baths: '6 Baths',
    desc: 'Complete architectural floor planning with Spanish arch exterior elevation, double height foyer, and 4K photorealistic interior walkthroughs.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 2,
    category: '1 KANAL ESTATE',
    title: 'Executive DHA Phase 6 Luxury Villa',
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal',
    price: 'PKR 4.8 Lac',
    beds: '6 Beds',
    baths: '7 Baths',
    desc: 'Bespoke modern minimalism villa layout featuring basement theater room, rooftop swimming pool patio, and Italian marble finishings.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 3,
    category: 'COMMERCIAL PLAZA',
    title: 'Gulberg 3 Corporate Office & Retail Plaza',
    location: 'Gulberg 3, Lahore',
    plotSize: '6,000 sq.ft',
    price: 'PKR 6.5 Lac',
    beds: '8 Pods',
    baths: '4 Baths',
    desc: 'Glass curtain wall facade design with high-density workspace zoning, underground parking structural plan, and fire safety compliance.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    id: 4,
    category: '5 MARLA VILLA',
    title: '5 Marla Contemporary Smart Residence',
    location: 'Parkview City, Lahore',
    plotSize: '5 Marla',
    price: 'PKR 1.8 Lac',
    beds: '3 Beds',
    baths: '4 Baths',
    desc: 'Maximum space efficiency layout optimizing natural sunlight circulation, open plan lounge, and garage space.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80'
  },
  {
    id: 5,
    category: 'INTERIOR STYLING',
    title: 'Luxury DHA Penthouse Interior Styling',
    location: 'DHA Phase 5, Lahore',
    plotSize: 'Penthouse',
    price: 'PKR 3.5 Lac',
    beds: '3 Beds',
    baths: '4 Baths',
    desc: 'Custom wooden wall paneling, LED cove lighting moodboards, bespoke velvet sofas, and marble dining table setup.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
  },
  {
    id: 6,
    category: '1 KANAL ESTATE',
    title: 'Bahria Town Royal Classical Mansion',
    location: 'Bahria Town, Lahore',
    plotSize: '1 Kanal',
    price: 'PKR 5.2 Lac',
    beds: '5 Beds',
    baths: '6 Baths',
    desc: 'Neoclassical architectural pillars, intricate plaster ceiling moldings, and master suite balcony lounge.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'ALL') return projects.value
  return projects.value.filter(p => p.category === activeCategory.value)
})
</script>
