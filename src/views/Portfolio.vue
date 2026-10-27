<template>
  <div class="py-12 space-y-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Header in Tecture Style -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="tecture-tag text-[#8C6A38] dark:text-[#DFC8A5] inline-flex items-center gap-2 bg-white dark:bg-[#121620] px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
        <i class="fa-solid fa-cubes text-[#C5A880]"></i>
        <span>Official Architectural Portfolio</span>
      </span>
      <h1 class="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        Featured <span class="text-gradient-gold">3D Elevations</span> &amp; Luxury Blueprints
      </h1>
      <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        Explore 500+ completed residential villas, commercial plazas, and luxury interiors designed by H&amp;Q Studio in DHA &amp; Bahria Town Lahore.
      </p>
    </div>

    <!-- 4K Cinematic Commercial Showcase -->
    <div class="space-y-4">
      <div class="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4">
        <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-play-circle text-[#C5A880]"></i>
          <span>Official 4K Cinematic Showcase</span>
        </h2>
        <span class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] bg-[#C5A880]/15 px-3.5 py-1.5 rounded-full border border-[#C5A880]/30">
          60-Second Full Tour
        </span>
      </div>
      <CinematicShowreel />
    </div>

    <!-- Filter Category Pills in Tecture Style -->
    <div class="flex flex-wrap items-center justify-center gap-2.5 pt-4">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer border tracking-wider uppercase',
          activeCategory === cat 
            ? 'tecture-btn-gold shadow-xl border-[#C5A880]' 
            : 'bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-300 border-slate-300 dark:border-white/10 hover:border-[#C5A880] hover:text-slate-900 dark:hover:text-white shadow-sm'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Portfolio Listings Grid in Tecture Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group rounded-3xl overflow-hidden tecture-card flex flex-col justify-between"
      >
        <div>
          <!-- Image Container with Price Badge -->
          <div class="relative h-72 overflow-hidden cursor-pointer bg-black" @click="selectedProject = project">
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute top-4 left-4 px-3.5 py-1.5 rounded-full tecture-btn-gold text-[10px] shadow-lg">
              {{ project.price }}
            </div>
            <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B0E14]/80 backdrop-blur-md text-[#DFC8A5] text-xs font-bold border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-[#C5A880]"></i> Verified Project
            </div>
          </div>

          <!-- Content Info -->
          <div class="p-6 sm:p-8 space-y-3">
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span class="flex items-center gap-1.5 text-[#8C6A38] dark:text-[#DFC8A5] font-bold"><i class="fa-solid fa-location-dot text-[#C5A880]"></i> {{ project.location }}</span>
              <span class="font-mono text-slate-900 dark:text-white text-[11px] font-bold">{{ project.plotSize }}</span>
            </div>

            <h3 
              @click="selectedProject = project" 
              class="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors cursor-pointer line-clamp-1"
            >
              {{ project.title }}
            </h3>

            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Specification Badges (Residential vs Commercial) -->
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-700 dark:text-slate-300 pt-3 border-t border-slate-200 dark:border-white/10">
              <template v-if="project.isCommercial">
                <span class="flex items-center gap-1"><i class="fa-solid fa-building text-[#C5A880]"></i> {{ project.type }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#C5A880]"></i> {{ project.floors }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-square-parking text-[#C5A880]"></i> {{ project.parking }}</span>
              </template>
              <template v-else>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#C5A880]"></i> {{ project.beds }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#C5A880]"></i> {{ project.baths }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-layer-group text-[#C5A880]"></i> {{ project.floors }}</span>
              </template>
            </div>
          </div>
        </div>

        <!-- Action Row -->
        <div class="p-6 sm:p-8 pt-0 flex items-center gap-3">
          <button 
            @click="selectedProject = project"
            class="flex-1 py-3.5 rounded-full tecture-btn-gold text-xs shadow cursor-pointer text-center flex items-center justify-center gap-2"
          >
            <i class="fa-solid fa-eye text-xs"></i>
            <span>View 3D Plan &amp; Specs</span>
          </button>
          <button 
            type="button"
            @click="openWhatsApp('923134487315')" 
            class="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-all text-sm cursor-pointer flex items-center justify-center shadow-lg shrink-0 border-0"
            title="Chat on WhatsApp"
          >
            <i class="fa-brands fa-whatsapp text-lg"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Next Steps & Technical Planning Bar -->
    <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-4 shadow-xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <span class="tecture-tag text-[#8C6A38] dark:text-[#DFC8A5]">TURNKEY ENGINEERING WORKFLOW</span>
          <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Ready to Design or Estimate Your House?</h3>
        </div>
        <div class="flex flex-wrap items-center gap-3 text-xs font-bold">
          <router-link to="/tools?tab=cost-calc" class="px-5 py-3 rounded-full tecture-btn-gold flex items-center gap-2">
            <i class="fa-solid fa-calculator"></i>
            <span>Calculate Cost</span>
          </router-link>
          <router-link to="/services" class="px-5 py-3 rounded-full tecture-btn-outline flex items-center gap-2">
            <i class="fa-solid fa-compass-drafting text-[#C5A880]"></i>
            <span>All Services</span>
          </router-link>
          <router-link to="/area-guides" class="px-5 py-3 rounded-full tecture-btn-outline flex items-center gap-2">
            <i class="fa-solid fa-location-dot text-[#C5A880]"></i>
            <span>Society Bylaws</span>
          </router-link>
          <router-link to="/case-studies" class="px-5 py-3 rounded-full tecture-btn-outline flex items-center gap-2">
            <i class="fa-solid fa-file-invoice text-[#C5A880]"></i>
            <span>Case Studies</span>
          </router-link>
          <router-link to="/contact" class="px-5 py-3 rounded-full tecture-btn-gold flex items-center gap-2">
            <i class="fa-solid fa-calendar-check"></i>
            <span>Book Consultation</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

    <!-- Project Detail Modal in Tecture Style -->
    <div 
      v-if="selectedProject" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      @click.self="selectedProject = null"
    >
      <div class="bg-white dark:bg-[#121620] text-slate-900 dark:text-slate-100 max-w-3xl w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-white/15 shadow-2xl space-y-6 p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button 
          @click="selectedProject = null" 
          class="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-[#C5A880] text-slate-600 dark:text-slate-400 hover:text-[#0B0E14] flex items-center justify-center font-bold text-base cursor-pointer border border-slate-200 dark:border-white/10 transition-colors"
        >
          ✕
        </button>

        <div class="rounded-2xl overflow-hidden h-72 bg-black">
          <img :src="selectedProject.image" :alt="selectedProject.title" class="w-full h-full object-cover" />
        </div>

        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="px-4 py-1.5 rounded-full tecture-btn-gold text-xs font-black">
              {{ selectedProject.price }}
            </span>
            <span class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1.5">
              <i class="fa-solid fa-certificate text-[#C5A880]"></i> Verified Premium Standard
            </span>
          </div>

          <h3 class="text-2xl font-black text-slate-900 dark:text-white">{{ selectedProject.title }}</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{{ selectedProject.description }}</p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-xs font-bold text-center">
            <div>
              <span class="text-slate-500 dark:text-slate-400 block text-[10px] uppercase tracking-wider font-extrabold">LOCATION</span>
              <span class="text-slate-900 dark:text-white">{{ selectedProject.location }}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400 block text-[10px] uppercase tracking-wider font-extrabold">PLOT SCALE</span>
              <span class="text-slate-900 dark:text-white">{{ selectedProject.plotSize }}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400 block text-[10px] uppercase tracking-wider font-extrabold">PROJECT TYPE</span>
              <span class="text-slate-900 dark:text-white">{{ selectedProject.isCommercial ? selectedProject.type : selectedProject.beds + ' / ' + selectedProject.baths }}</span>
            </div>
            <div>
              <span class="text-slate-500 dark:text-slate-400 block text-[10px] uppercase tracking-wider font-extrabold">FLOORS</span>
              <span class="text-slate-900 dark:text-white">{{ selectedProject.floors }}</span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
            <div class="text-xs text-slate-600 dark:text-slate-400 font-bold">
              <span>Direct Architect Desk: </span>
              <strong class="text-[#8C6A38] dark:text-[#DFC8A5] font-mono">0313-4487315</strong>
            </div>
            <button 
              @click="requestThisProject"
              class="w-full sm:w-auto px-8 py-3.5 rounded-full tecture-btn-gold text-xs shadow-xl cursor-pointer"
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
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'

const emit = defineEmits(['open-start-project'])

const categories = [
  'All Projects',
  'Commercial Plazas',
  '1 Kanal Estates',
  '10 Marla Luxury',
  '5 Marla Villas',
  'Luxury Interiors',
  'Master Suites',
  'Kitchens & Dining'
]
const activeCategory = ref('All Projects')

const selectedProject = ref(null)

const projects = ref([
  {
    id: 201,
    title: 'Gulberg 14-Story Corporate High-Rise Tower',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'Gulberg Main Boulevard, Lahore',
    plotSize: '16 Marla Commercial (18,000 sq.ft)',
    price: 'PKR 12.5 Lac Complete Blueprint',
    type: '14-Story Commercial & Residential Tower',
    floors: '2 Basements + G + 14 Floors',
    parking: 'Double Basement Parking',
    image: '/images/portfolio/NAHD.jpg',
    description: 'Modern high-rise architectural blueprint featuring perforated gold mashrabiya solar screens, double-glazed energy-efficient curtain walls, high-speed lift shafts, and DHA/LDA municipal submission approval compliance.'
  },
  {
    id: 202,
    title: 'DHA Phase 8 Commercial Arcade & Hypermart Complex',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'DHA Phase 8 Commercial Broadway, Lahore',
    plotSize: '24 Marla Commercial Complex',
    price: 'PKR 9.8 Lac Design Package',
    type: 'Hypermart & Retail Arcade Complex',
    floors: 'Basement + Ground + Mezzanine + 1st',
    parking: 'Front Dedicated Customer Parking Bay',
    image: '/images/portfolio/VA.jpg',
    description: 'Monumental retail shopping arcade featuring arched double-height showroom glass facades, classical pilasters, integrated hypermart anchor store layout, and pedestrian colonnade walkway.'
  },
  {
    id: 203,
    title: 'Executive Arabesque Retail Strip Plaza & Showrooms',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'Bahria Town Main Boulevard, Lahore',
    plotSize: '18 Marla Commercial (6 Showroom Bays)',
    price: 'PKR 7.5 Lac Architectural Blueprint',
    type: 'Multi-Unit Retail Strip Arcade',
    floors: 'Ground + Mezzanine + Rooftop Terrace',
    parking: 'Full Front Parking Paved Forecourt',
    image: '/images/portfolio/0111.jpg',
    description: 'Linear commercial shopping arcade showcasing monumental Moorish archways, intricate laser-cut jaali screens, bronze LED signage pelmets, and high-visibility glass entrance doors.'
  },
  {
    id: 204,
    title: 'Dual-Bay Flagship Commercial Showroom Plaza',
    category: 'Commercial Plazas',
    isCommercial: true,
    location: 'Canal Road Commercial Zone, Lahore',
    plotSize: '8 Marla Commercial (4,500 sq.ft)',
    price: 'PKR 5.8 Lac Architectural Blueprint',
    type: 'Double-Height Commercial Showrooms',
    floors: 'G + Mezzanine + First Floor',
    parking: 'Dedicated 8-Car Customer Parking',
    image: '/images/portfolio/A_FINAL.jpg',
    description: 'Symmetric double-bay retail plaza elevation with arched two-story glass entrance portals, decorative stone jaali panels, wood-slat rooftop privacy parapet, and integrated night illumination.'
  },
  {
    id: 205,
    title: 'Palatial Neoclassical 2 Kanal Royal Mansion Elevation',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '2 Kanal (100x90)',
    price: 'PKR 8.5 Lac Architectural Package',
    beds: '6 Master Suites',
    baths: '7 En-Suite Baths',
    floors: 'Triple Story + Basement',
    image: '/images/portfolio/D.jpg',
    description: 'Stately neoclassical estate elevation featuring symmetrical Corinthian pilasters, balustraded first-floor viewing balconies, warm exterior up/down sconce lighting, and grand arched portico.'
  },
  {
    id: 206,
    title: 'Grand Royal Classical 1 Kanal Villa Elevation',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'Bahria Town Golf View Residencia, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 6.2 Lac Design Package',
    beds: '5 Master Suites',
    baths: '6 Baths',
    floors: 'Double Story + Grand Arch Portal',
    image: '/images/portfolio/KHATABII.jpg',
    description: 'Monumental central horseshoe arch entryway with solid timber double doors, geometric Islamic brickwork parapet cornice, illuminated side pilasters, and 4-car paved driveway court.'
  },
  {
    id: 207,
    title: 'Contemporary 1 Kanal Executive Villa Elevation',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 5.8 Lac Design Package',
    beds: '5 Beds',
    baths: '6 Baths',
    floors: 'Double Story + Louvered Parapet',
    image: '/images/portfolio/V011.jpg',
    description: 'Minimalist modern rectangular villa elevation with illuminated geometric stone jaali rooftop border, warm architectural wall sconces, integrated window louvers, and recessed entryway.'
  },
  {
    id: 208,
    title: 'Modern Geometric 1 Kanal Luxury Villa & Reflection Pool',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 6.5 Lac Design Package',
    beds: '5 Beds',
    baths: '6 Baths',
    floors: 'Double Story + Pool',
    image: '/images/scene1_villa.jpg',
    description: 'Contemporary geometric villa exterior featuring cantilevered limestone slabs, floor-to-ceiling thermal glass facades, infinity reflection pool, and warm integrated architectural LED illumination.'
  },
  {
    id: 209,
    title: 'Modern 10 Marla Architectural Villa Elevation with Garden Entry',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'DHA Phase 7, Lahore',
    plotSize: '10 Marla (35x70)',
    price: 'PKR 3.8 Lac Design Package',
    beds: '4 Beds',
    baths: '5 Baths',
    floors: 'Double Story + Car Porch',
    image: '/images/portfolio/ATTIBI.jpg',
    description: 'Modern vertical volume villa design featuring warm architectural LED wash lighting, textured travertine boundary wall, rooftop louvered parapet, and manicured entryway greenery.'
  },
  {
    id: 210,
    title: 'Open-Concept Family Living Room with Gold Ring Chandelier',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'DHA Phase 8, Lahore',
    plotSize: '10 Marla (35x70)',
    price: 'PKR 3.4 Lac Interior Plan',
    beds: 'Family Lounge',
    baths: 'Powder Room',
    floors: 'Ground Floor Lounge',
    image: '/images/portfolio/interior_render_33.jpg',
    description: 'Open-concept family living room featuring bookmatched marble and geometric wood media wall, open glass display shelving, gold halo ring chandelier, and bespoke modular seating.'
  },
  {
    id: 211,
    title: 'Double-Height Staircase Gallery with Grey Marble Cladding',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '10 Marla Luxury Foyer',
    price: 'PKR 3.2 Lac Interior Plan',
    beds: 'Staircase Foyer',
    baths: 'Powder Room',
    floors: 'Double-Height Foyer',
    image: '/images/portfolio/interior_render_52.jpg',
    description: 'Spectacular double-height foyer with vertical bookmatched grey marble wall panels, frameless tempered glass railings, architectural sconce lights, and cascading tiered gold ring chandelier.'
  },
  {
    id: 212,
    title: '5 Marla Master Bedroom with Illuminated Horizon Mural',
    category: '5 Marla Villas',
    isCommercial: false,
    location: 'DHA Phase 9 Prism, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 2.2 Lac Interior Plan',
    beds: '3 Beds',
    baths: '4 Baths',
    floors: 'Double Story',
    image: '/images/portfolio/interior_render_28.jpg',
    description: 'Space-optimized luxury master bedroom with backlit textured landscape headboard mural, full-height walnut storage wardrobes, compact vanity station, and warm ceiling cove LED lighting.'
  },
  {
    id: 213,
    title: '5 Marla Compact Living Room with Backlit Marble TV Console',
    category: '5 Marla Villas',
    isCommercial: false,
    location: 'DHA Phase 9 Town, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 2.1 Lac Complete Package',
    beds: 'Ground Floor Lounge',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_45.jpg',
    description: 'Smart 5 Marla floor plan interior featuring fluted oak wall paneling, floating marble TV panel with LED halo glow, illuminated vertical shelving, and wall moldings.'
  },
  {
    id: 214,
    title: 'Grey Structure to Turnkey Luxury Transformation',
    category: '5 Marla Villas',
    isCommercial: false,
    location: 'DHA Phase 8, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 2.2 Lac',
    beds: '3 Beds',
    baths: '4 Baths',
    floors: 'Double Story',
    image: '/images/scene8_transformation.jpg',
    description: 'Complete before-and-after construction execution converting raw grey-structure concrete into an opulent, turnkey luxury residence with modern Venetian plaster and LED cove lighting.'
  },
  {
    id: 215,
    title: 'Walk-in Dressing Suite with Backlit Oval Mirror & Glass Closets',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal Master Dressing Room',
    price: 'PKR 4.2 Lac Interior Plan',
    beds: 'Dressing Suite',
    baths: 'Vanity Suite',
    floors: 'Upper Floor Suite',
    image: '/images/portfolio/interior_render_01.jpg',
    description: 'Bespoke walk-in wardrobe dressing suite featuring full-height illuminated smoked glass wardrobes, suspended slatted partition with backlit oval vanity mirror, and marble dressing table with ottoman.'
  },
  {
    id: 216,
    title: 'Executive Club Lounge & Cigar Salon with Chesterfield Banquettes',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: 'Basement Executive Salon',
    price: 'PKR 5.5 Lac Interior Plan',
    beds: 'Executive Club Salon',
    baths: 'Powder Room',
    floors: 'Basement Entertainment Suite',
    image: '/images/portfolio/interior_render_08.jpg',
    description: 'Sophisticated executive club lounge featuring tufted caramel Chesterfield leather banquettes, coffered grid ceiling with brass globe pendants, dark navy wainscoting, and marble cocktail tables.'
  },
  {
    id: 217,
    title: 'Executive Media Wall & Fireplace with Backlit Bookcase Library',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'Gulberg 3, Lahore',
    plotSize: 'Executive Lounge Suite',
    price: 'PKR 4.8 Lac Interior Plan',
    beds: 'Media Salon',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_11.jpg',
    description: 'Dramatic media entertainment centerpiece with bookmatched grey-veined marble slab, integrated panoramic electric flame fireplace, and twin navy display bookcases with ambient shelf LED lighting.'
  },
  {
    id: 218,
    title: 'High-Rise Penthouse Private Elevator Lobby & Hallway Gallery',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 6 Boulevard, Lahore',
    plotSize: 'Penthouse Private Lobby',
    price: 'PKR 3.5 Lac Interior Plan',
    beds: 'Private Elevator Foyer',
    baths: 'Gallery Corridor',
    floors: 'Penthouse Level',
    image: '/images/portfolio/interior_render_07.jpg',
    description: 'Private penthouse elevator vestibule featuring bookmatched marble lift cladding with digital floor indicator, matte graphite wainscot paneling, botanical accent mural, and marble console table.'
  },
  {
    id: 219,
    title: 'Biophilic Commercial Reception & Waiting Foyer',
    category: 'Luxury Interiors',
    isCommercial: true,
    location: 'Gulberg 3 Corporate Hub, Lahore',
    plotSize: 'Commercial Reception Hub',
    price: 'PKR 4.0 Lac Interior Plan',
    type: 'Commercial Reception Foyer',
    floors: 'Ground Floor Reception',
    parking: 'Dedicated Customer Parking',
    image: '/images/portfolio/interior_render_15.jpg',
    description: 'Biophilic architectural reception space with integrated indoor planter box partitions, fluted timber canopy ceiling, chartreuse sofa seating, marble accent columns, and track spotlights.'
  },
  {
    id: 220,
    title: 'Italian Grey Marble Designer Powder Room',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: 'VIP Guest Powder Room',
    price: 'PKR 2.8 Lac Interior Plan',
    beds: 'Powder Room',
    baths: '1 Bath',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_18.jpg',
    description: 'Italian grey marble slab walls, polished Nero Marquina marble floor with inlaid brass geometric dividing strips, round backlit vanity mirror, concrete cylindrical pendant lamps, and floating marble vanity.'
  },
  {
    id: 221,
    title: 'Grand Master Bedroom Suite with Timber Slat Partitions',
    category: 'Master Suites',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal Master Suite',
    price: 'PKR 4.8 Lac Interior Plan',
    beds: 'Master Suite',
    baths: 'En-Suite Spa Bath',
    floors: 'Upper Floor Master',
    image: '/images/portfolio/interior_render_04.jpg',
    description: 'Expansive luxury master bedroom featuring vertical oak acoustic slat partition walls, diamond-coffered ceiling with recessed perimeter cove lighting, black-and-gold marble columns, and garden window views.'
  },
  {
    id: 222,
    title: 'Walk-in Wardrobe Corridor & Dressing Suite',
    category: 'Master Suites',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '10 Marla Master Dressing Suite',
    price: 'PKR 3.9 Lac Interior Plan',
    beds: 'Master Suite',
    baths: 'Dressing Area',
    floors: 'First Floor',
    image: '/images/portfolio/interior_render_02.jpg',
    description: 'Curated master dressing hallway with backlit capsule vanity mirrors, textured metallic feature wall, bronze-tinted glass wardrobes with internal sensor lighting, and contemporary vanity station.'
  },
  {
    id: 223,
    title: 'Modern Chef Kitchen with Calacatta Backsplash & Island',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal Modern Villa',
    price: 'PKR 4.5 Lac Interior Plan',
    beds: 'Chef Kitchen',
    baths: 'Scullery Pantry',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_21.jpg',
    description: 'Contemporary open-plan kitchen with dual-tone charcoal and warm walnut upper cabinetry, full-height Calacatta marble backsplash, quartz waterfall breakfast bar with stools, and matte black drum pendants.'
  },
  {
    id: 224,
    title: 'Monolithic Charcoal Kitchen with Nero Marquina Island',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'Gulberg 3, Lahore',
    plotSize: '1 Kanal Luxury Villa Kitchen',
    price: 'PKR 4.9 Lac Interior Plan',
    beds: 'Show Kitchen',
    baths: 'Dirty Kitchen',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_54.jpg',
    description: 'Floor-to-ceiling handleless charcoal cabinetry with integrated microwave and espresso station, Nero Marquina marble waterfall island with cantilevered timber dining table, and modern rectangular suspended LED fixture.'
  },
  {
    id: 225,
    title: 'Warm Minimalist Living Room with Black Glass & Fluted Wood Media Wall',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 7, Lahore',
    plotSize: '10 Marla Luxury Lounge',
    price: 'PKR 3.6 Lac Interior Plan',
    beds: 'Living Suite',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_26.jpg',
    description: 'Minimalist living room showcase featuring high-gloss black glass TV panel with brass inlay reveals, vertical natural oak fluted paneling, floating media credenza, and embedded electric flame fireplace.'
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
