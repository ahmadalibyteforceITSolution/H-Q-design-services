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
  'Luxury Interiors',
  'Living & Lounges',
  'Master Suites',
  'Kitchens & Dining',
  '1 Kanal Estates',
  '10 Marla Luxury',
  '5 Marla Villas'
]
const activeCategory = ref('All Projects')

const selectedProject = ref(null)

const projects = ref([
  {
    id: 101,
    title: 'Modern Luxury Villa Architectural Masterpiece',
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
    category: 'Living & Lounges',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
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
    category: 'Master Suites',
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
    category: 'Kitchens & Dining',
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
    id: 108,
    title: 'Contemporary Marble & Walnut Dining Salon',
    category: 'Kitchens & Dining',
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
    title: 'Warm Minimalist Living Room & Media Wall',
    category: 'Living & Lounges',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal Luxury Residence',
    price: 'PKR 3.8 Lac Interior Plan',
    beds: 'Living Suite',
    baths: 'Powder Room',
    floors: 'Ground Floor Lounge',
    image: '/images/portfolio/interior_render_01.jpg',
    description: 'Curated modern living space featuring vertical acoustic wood paneling, recessed shadow line lighting, floating media console, and neutral bespoke sectional.'
  },
  {
    id: 2,
    title: 'Executive Master Bedroom Suite with Ambient Cove Lighting',
    category: 'Master Suites',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '10 Marla Master Suite',
    price: 'PKR 4.2 Lac Interior Plan',
    beds: 'Master Bed',
    baths: 'En-Suite Bath',
    floors: '1st Floor Master',
    image: '/images/portfolio/interior_render_02.jpg',
    description: 'Contemporary master suite featuring plush upholstered back wall, warm perimeter LED cove illumination, integrated reading lights, and minimalist bedside tables.'
  },
  {
    id: 3,
    title: 'Modern Open-Plan Kitchen & Waterfall Island',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'Bahria Town, Lahore',
    plotSize: '1 Kanal Villa Kitchen',
    price: 'PKR 4.5 Lac Interior Plan',
    beds: 'Kitchen Suite',
    baths: 'Dirty Kitchen',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_03.jpg',
    description: 'Sleek handleless matte cabinetry, quartz countertop with breakfast seating, premium built-in oven stack, and architectural strip downlighting.'
  },
  {
    id: 4,
    title: 'Calacatta Gold Dining Salon & Backlit Showcase',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'Gulberg 3, Lahore',
    plotSize: '1 Kanal Formal Dining',
    price: 'PKR 3.5 Lac Interior Plan',
    beds: 'Formal Dining',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_04.jpg',
    description: 'Full-height bronze tinted display cabinetry, statement marble dining table, bespoke velvet dining chairs, and mood-adaptive dimmable lighting.'
  },
  {
    id: 5,
    title: 'Contemporary Guest Reception Lounge & Foyer',
    category: 'Living & Lounges',
    isCommercial: false,
    location: 'DHA Phase 8, Lahore',
    plotSize: '10 Marla Villa Lounge',
    price: 'PKR 3.2 Lac Interior Plan',
    beds: 'Lounge Suite',
    baths: 'Guest Powder',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_05.jpg',
    description: 'Sophisticated reception lounge with micro-cement accent walls, curated abstract artwork, sculptured armchair, and bronze ambient floor lamps.'
  },
  {
    id: 6,
    title: 'Luxury Walk-in Dressing Suite & Glass Wardrobes',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: 'Penthouse Dressing Suite',
    price: 'PKR 4.0 Lac Interior Plan',
    beds: 'Dressing Suite',
    baths: 'Vanity Suite',
    floors: 'Upper Floor',
    image: '/images/portfolio/interior_render_06.jpg',
    description: 'Floor-to-ceiling glass-door wardrobes with interior sensor LEDs, leather-wrapped accessory island, and backlit makeup vanity mirrors.'
  },
  {
    id: 7,
    title: 'Hotel-Style Luxury Spa Bathroom with Soaking Tub',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 7, Lahore',
    plotSize: 'Master Spa Bath',
    price: 'PKR 2.8 Lac Interior Plan',
    beds: 'Spa Suite',
    baths: 'Master Bath',
    floors: 'Master Suite',
    image: '/images/portfolio/interior_render_07.jpg',
    description: 'Large format porcelain slabs, freestanding soaking tub, frameless glass rain-shower enclave, and wall-hung vanity with concealed Grohe fixtures.'
  },
  {
    id: 8,
    title: 'Minimalist Modern Bedroom with Warm Oak Paneling',
    category: 'Master Suites',
    isCommercial: false,
    location: 'DHA Phase 9 Prism, Lahore',
    plotSize: '5 Marla Villa (25x45)',
    price: 'PKR 2.4 Lac Interior Plan',
    beds: 'Bedroom Suite',
    baths: 'En-Suite',
    floors: 'First Floor',
    image: '/images/portfolio/interior_render_08.jpg',
    description: 'Space-optimized 5 Marla bedroom interior with warm oak finish, floating nightstands, linear acoustic panels, and natural sunlight layout.'
  },
  {
    id: 9,
    title: 'Private Home Cinema & Acoustic Media Den',
    category: 'Living & Lounges',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: 'Basement Media Den',
    price: 'PKR 4.8 Lac Interior Plan',
    beds: 'Media Den',
    baths: 'Powder Room',
    floors: 'Basement',
    image: '/images/portfolio/interior_render_09.jpg',
    description: 'Acoustic fabric wall panels, starlight fiber-optic ceiling, custom reclining loungers, and integrated subwoofer audio cabinetry.'
  },
  {
    id: 10,
    title: 'Architectural Executive Study & Home Office Library',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: '1 Kanal Study Suite',
    price: 'PKR 3.4 Lac Interior Plan',
    beds: 'Executive Office',
    baths: 'En-Suite',
    floors: 'First Floor',
    image: '/images/portfolio/interior_render_10.jpg',
    description: 'Custom walnut bookshelf library with LED backlighting, executive marble desk, leather task seating, and quiet sound-dampened acoustic ceiling.'
  },
  {
    id: 11,
    title: 'Grand Double-Height Foyer & Architectural Chandelier',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'Bahria Town, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 5.2 Lac Design Package',
    beds: 'Main Entrance Foyer',
    baths: 'Powder Room',
    floors: 'Double-Height Ground',
    image: '/images/portfolio/interior_render_11.jpg',
    description: 'Grand double-height entrance lobby featuring floating stone steps, floor-to-ceiling accent stone cladding, and cascading bespoke light installation.'
  },
  {
    id: 12,
    title: 'Scandinavian Chic Family Lounge & Living Space',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'DHA Phase 7, Lahore',
    plotSize: '10 Marla (35x70)',
    price: 'PKR 2.9 Lac Interior Plan',
    beds: 'Family Lounge',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_12.jpg',
    description: 'Clean Scandinavian aesthetic with light oak flooring, modular low-profile sofa, subtle textured lime-wash walls, and recessed downlights.'
  },
  {
    id: 13,
    title: 'Moody Charcoal & Brass Master Bedroom Suite',
    category: 'Master Suites',
    isCommercial: false,
    location: 'Gulberg 3, Lahore',
    plotSize: '1 Kanal Penthouse',
    price: 'PKR 4.6 Lac Interior Plan',
    beds: 'Master Suite',
    baths: 'Master Bath',
    floors: 'Top Floor',
    image: '/images/portfolio/interior_render_13.jpg',
    description: 'Charcoal and warm brass palette with textural fabric wall panels, ambient linear baseboard LEDs, and floor-to-ceiling panoramic glass windows.'
  },
  {
    id: 14,
    title: 'Minimalist Island Kitchen with Scullery Preparation Area',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal Modern Villa',
    price: 'PKR 4.9 Lac Interior Plan',
    beds: 'Show Kitchen',
    baths: 'Scullery',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_14.jpg',
    description: 'Seamless integrated kitchen design with pocket doors concealing full prep kitchen, waterfall quartz island, and flush induction cooktop.'
  },
  {
    id: 15,
    title: 'Modern 5 Marla Turnkey Luxury Villa Interior',
    category: '5 Marla Villas',
    isCommercial: false,
    location: 'DHA Phase 9 Town, Lahore',
    plotSize: '5 Marla (25x45)',
    price: 'PKR 2.1 Lac Complete Package',
    beds: '3 Beds',
    baths: '4 Baths',
    floors: 'Double Story',
    image: '/images/portfolio/interior_render_15.jpg',
    description: 'Compact luxury architectural floor plan maximizing every square foot with open-plan living, modern lighting profiles, and integrated joinery.'
  },
  {
    id: 16,
    title: 'Bespoke Powder Room with Backlit Onyx Stone',
    category: 'Luxury Interiors',
    isCommercial: false,
    location: 'DHA Phase 5, Lahore',
    plotSize: 'Guest Suite',
    price: 'PKR 2.2 Lac Interior Plan',
    beds: 'Powder Room',
    baths: '1 Bath',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_16.jpg',
    description: 'Translucent backlit onyx stone feature wall, floating vessel sink with wall-mounted brass faucet, and concealed perimeter mood lighting.'
  },
  {
    id: 17,
    title: 'Contemporary Villa Lounge with Courtyard Garden Vista',
    category: '1 Kanal Estates',
    isCommercial: false,
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal (50x90)',
    price: 'PKR 4.8 Lac Interior Plan',
    beds: 'Garden Lounge',
    baths: 'Powder Room',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_17.jpg',
    description: 'Floor-to-ceiling slimline aluminium sliding doors framing outdoor private water feature, custom curved seating, and Italian porcelain tiles.'
  },
  {
    id: 18,
    title: 'Executive Bedroom with Integrated Study Nook',
    category: '10 Marla Luxury',
    isCommercial: false,
    location: 'Bahria Town, Lahore',
    plotSize: '10 Marla Villa',
    price: 'PKR 2.7 Lac Interior Plan',
    beds: 'Junior Suite',
    baths: 'En-Suite Bath',
    floors: 'First Floor',
    image: '/images/portfolio/interior_render_18.jpg',
    description: 'Integrated study desk, built-in fluted closet system, warm wood laminates, and directional task lighting for modern living.'
  },
  {
    id: 19,
    title: 'Penthouse Skyline Dining Salon & Wine Showcase',
    category: 'Kitchens & Dining',
    isCommercial: false,
    location: 'Gulberg Main Boulevard, Lahore',
    plotSize: 'Duplex Penthouse',
    price: 'PKR 5.0 Lac Interior Plan',
    beds: 'Formal Dining',
    baths: 'Powder Room',
    floors: 'Upper Penthouse',
    image: '/images/portfolio/interior_render_19.jpg',
    description: 'Panoramic city vista backdrop, sculptural bronze dining table, Italian leather chairs, and architectural trimless recessed downlights.'
  },
  {
    id: 20,
    title: 'Modern Minimalist Bedroom with Fluted Wood Feature Wall',
    category: 'Master Suites',
    isCommercial: false,
    location: 'DHA Phase 8, Lahore',
    plotSize: '1 Kanal Suite',
    price: 'PKR 3.9 Lac Interior Plan',
    beds: 'Master Suite',
    baths: 'En-Suite Bath',
    floors: 'Ground Floor',
    image: '/images/portfolio/interior_render_20.jpg',
    description: 'Subtle geometric acoustic headboard wall, hidden curtain pelmet with warm LED glow, and custom walnut wardrobe joinery.'
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
