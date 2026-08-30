<template>
  <div class="py-12 space-y-20">
    
    <!-- Services Hero -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-compass-drafting"></i> Architecture & Interior Catalog
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Our Architectural <span class="text-gradient">Services & Deliverables</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            From preliminary sketch drawings to turnkey interior execution, explore our comprehensive range of design solutions for luxury residences and commercial plazas.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="service in fullServices" 
          :key="service.id"
          class="p-8 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-6"
        >
          <div class="space-y-4">
            <div class="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-3xl">
              <i :class="service.icon"></i>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ service.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ service.desc }}</p>

            <!-- Deliverables Pills -->
            <div class="space-y-2 pt-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Included Deliverables:</span>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                <li v-for="item in service.deliverables" :key="item" class="flex items-center gap-2">
                  <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
            <span class="text-xs font-semibold text-amber-500 flex items-center gap-1.5">
              <i class="fa-solid fa-clock"></i> Est. Delivery: {{ service.timeframe }}
            </span>
            <button 
              @click="$emit('open-start-project')"
              class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Get Custom Quote</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Estimator CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectEstimator @request-quote="$emit('open-start-project')" />
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectEstimator from '../components/ProjectEstimator.vue'

defineEmits(['open-start-project'])

const fullServices = ref([
  {
    id: 'arch',
    title: 'Architectural Floor Planning & Elevation',
    icon: 'fa-solid fa-compass-drafting',
    desc: 'Complete architectural layout design for 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal villas, including municipal submission drawings compliant with DHA and Bahria Town bylaws.',
    timeframe: '2-3 Weeks',
    deliverables: ['2D Floor Plans & Sections', 'Front Elevation Design', 'Structural Calculations', 'DHA Submission Files']
  },
  {
    id: 'interior',
    title: 'Luxury Interior Design & Styling',
    icon: 'fa-solid fa-couch',
    desc: 'Custom interior design concepts for living rooms, master bedrooms, kitchens, and executive offices with curated color schemes and Italian marble selections.',
    timeframe: '3-4 Weeks',
    deliverables: ['3D Moodboards', 'Lighting & Ceiling Layout', 'Custom Wall Paneling', 'Furniture Specification']
  },
  {
    id: '3d-render',
    title: 'Photorealistic 3D Renders & VR Walkthrough',
    icon: 'fa-solid fa-cube',
    desc: 'Ultra HD 4K 3D visualizations and interactive VR video walkthroughs using Lumion and 3ds Max to preview lighting, texture, and furniture before construction.',
    timeframe: '1-2 Weeks',
    deliverables: ['4K HD Rendered Views', '360° Panorama Views', 'Animation Walkthrough Video', 'Material Sample Palette']
  },
  {
    id: 'space',
    title: 'Space & Flow Planning',
    icon: 'fa-solid fa-ruler-combined',
    desc: 'Optimize circulation, room dimensions, natural sunlight penetration, and ventilation efficiency for residential homes and commercial plazas.',
    timeframe: '1 Week',
    deliverables: ['Furniture Placement Plan', 'Sunlight & Shadow Analysis', 'Ventilation Mapping', 'Zoning Blueprint']
  },
  {
    id: 'furniture',
    title: 'Custom Furniture & Woodwork Crafting',
    icon: 'fa-solid fa-chair',
    desc: 'Handcrafted luxury sofas, dining tables, media console units, and fitted wardrobes manufactured specifically for your room layout.',
    timeframe: '3-5 Weeks',
    deliverables: ['Bespoke Woodworking', 'Custom Upholstery', 'Built-in Closet Systems', 'On-Site Fitting']
  },
  {
    id: 'renovation',
    title: 'Full Property Renovation & Remodeling',
    icon: 'fa-solid fa-hammer',
    desc: 'Transform your existing house or commercial office space into a state-of-the-art modern property with structural retrofitting and interior updates.',
    timeframe: '4-8 Weeks',
    deliverables: ['Demolition & Civil Plan', 'Plumbing & Electrical Update', 'New Elevation Facing', 'Final Turnkey Handover']
  }
])
</script>
