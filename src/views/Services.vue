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

    <!-- Strategic Keywords & Technical Standards Link Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div class="space-y-2 max-w-2xl">
          <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider inline-flex items-center gap-1.5">
            <i class="fa-solid fa-book-bookmark text-amber-300"></i>
            <span>Architecture & Design Knowledge Index</span>
          </span>
          <h3 class="text-xl sm:text-2xl font-black text-white">
            Looking for Specific Plot Dimensions, DHA Bylaws or 3D Visualizations?
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Browse our comprehensive 10-cluster directory with technical specifications for 3 Marla to 4 Kanal villas, commercial plazas, and turnkey construction cost benchmarks.
          </p>
        </div>
        <router-link 
          to="/keywords-directory"
          class="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-950 text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shrink-0 shadow-lg flex items-center gap-2"
        >
          <span>Explore 10-Cluster Hub</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </router-link>
      </div>
    </section>

    <!-- Estimator CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectEstimator @request-quote="$emit('open-start-project')" />
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProjectEstimator from '../components/ProjectEstimator.vue'

defineEmits(['open-start-project'])

const fullServices = ref([
  {
    id: 'arch',
    title: 'Architectural Floor Planning & Municipal Approvals',
    icon: 'fa-solid fa-compass-drafting',
    desc: 'Complete architectural layout design for 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal villas, including municipal submission drawings compliant with DHA Lahore, LDA, and Bahria Town bylaws.',
    timeframe: '2-3 Weeks',
    deliverables: ['2D Floor Plans & Sections', 'Front Elevation Design', 'Structural Calculations', 'DHA Submission Files']
  },
  {
    id: 'interior',
    title: 'Luxury Residential Interior Design & Styling',
    icon: 'fa-solid fa-couch',
    desc: 'Custom interior design concepts for living rooms, master bedrooms, kitchens, and dining spaces with curated lighting schemes, Italian marble selections, and bespoke joinery.',
    timeframe: '3-4 Weeks',
    deliverables: ['3D Interior Renderings', 'Lighting & Ceiling Layout', 'Custom Wall Paneling', 'Furniture Specification']
  },
  {
    id: 'commercial',
    title: 'Commercial & Office Interior Design',
    icon: 'fa-solid fa-building',
    desc: 'Corporate office architecture, retail shop fitouts, executive showrooms, and restaurant/cafe interiors engineered for brand identity, ergonomic workflow, and customer engagement.',
    timeframe: '3-5 Weeks',
    deliverables: ['Corporate Workspace Layouts', 'Acoustic Wall Treatment', 'Retail Glass Facade & Display', 'Brand Themed Fitout']
  },
  {
    id: '3d-render',
    title: 'Photorealistic 4K 3D Architectural Visualization & VR',
    icon: 'fa-solid fa-cube',
    desc: 'Ultra HD 4K 3D visualizations and interactive VR video walkthroughs using Lumion and 3ds Max to preview daytime/nighttime lighting, material textures, and spatial flow before construction.',
    timeframe: '1-2 Weeks',
    deliverables: ['4K HD Rendered Views', '360° Panorama Views', 'Animation Walkthrough Video', 'Material Sample Palette']
  },
  {
    id: 'renovation',
    title: 'Complete House Renovation & Remodeling',
    icon: 'fa-solid fa-hammer',
    desc: 'Turnkey residential and commercial renovation in Lahore. Transform existing homes with modern front elevations, luxury kitchen/bathroom overhauls, structural retrofitting, and energy upgrades.',
    timeframe: '4-8 Weeks',
    deliverables: ['Demolition & Civil Retrofit', 'Kitchen & Bath Remodeling', 'Front Elevation Redesign', 'Turnkey Handover']
  },
  {
    id: 'furniture',
    title: 'Custom Furniture & Woodwork Crafting',
    icon: 'fa-solid fa-chair',
    desc: 'Handcrafted luxury solid wood sofas, dining tables, media console units, and fitted walk-in wardrobes manufactured specifically for your room layout.',
    timeframe: '3-5 Weeks',
    deliverables: ['Bespoke Woodworking', 'Custom Upholstery', 'Built-in Closet Systems', 'On-Site Fitting']
  }
])

onMounted(() => {
  const schemaId = 'services-page-schema'
  let script = document.getElementById(schemaId)
  if (!script) {
    script = document.createElement('script')
    script.setAttribute('id', schemaId)
    script.setAttribute('type', 'application/ld+json')
    document.head.appendChild(script)
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Architectural & Interior Design Services Lahore",
    "provider": {
      "@type": "ArchitecturalService",
      "name": "H&Q Design Services",
      "telephone": "+923416887454",
      "url": "https://h-q-design-services.vercel.app/"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "H&Q Design Services Portfolio",
      "itemListElement": fullServices.value.map(s => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": s.title,
          "description": s.desc
        }
      }))
    }
  }

  script.textContent = JSON.stringify(servicesSchema, null, 2)
})
</script>
