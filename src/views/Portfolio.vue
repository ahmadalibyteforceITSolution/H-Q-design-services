<template>
  <div>
    <section id="portfolio-hero" class="relative py-20 lg:py-32 bg-gradient-to-br from-zameen-green to-zameen-green-dark overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="portfolio-title text-4xl lg:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <p class="portfolio-subtitle text-xl text-white/90">Explore Our Finest Architecture & Interior Design Projects</p>
        </div>
      </div>
    </section>

    <section id="portfolio-filter" class="py-8 bg-white border-b sticky top-16 lg:top-20 z-40">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-all',
              activeCategory === category
                ? 'bg-zameen-green text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <section id="portfolio-grid" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card group cursor-pointer"
          >
            <div class="relative overflow-hidden rounded-2xl mb-6 bg-white shadow-lg">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span class="bg-zameen-gold text-gray-900 px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                    {{ project.location }}
                  </span>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ project.title }}</h3>
                  <p class="text-white/80 mb-4">{{ project.description }}</p>
                  <button class="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-zameen-gold transition-colors inline-flex items-center">
                    View Details
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                {{ project.category }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="interior-gallery" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Interior Design</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Stunning Interior Spaces</h2>
          <p class="text-gray-600 text-lg">From modern minimalism to classic elegance, our interior designs transform spaces into experiences.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="(image, index) in interiorImages"
            :key="index"
            class="interior-item relative overflow-hidden rounded-xl cursor-pointer group"
            :class="index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''"
          >
            <img
              :src="image.url"
              :alt="image.label"
              class="w-full h-full object-cover min-h-[200px] group-hover:scale-110 transition-transform duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span class="text-white font-medium">{{ image.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="process" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">Our Process</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
          <p class="text-gray-600 text-lg">A systematic approach to turning your vision into reality.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="step.title" class="process-card relative">
            <div class="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div class="w-12 h-12 bg-zameen-green text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
            <div v-if="index < 3" class="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <svg class="w-8 h-8 text-zameen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="cta" class="py-20 lg:py-28 bg-gradient-to-r from-zameen-green to-zameen-green-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's create something amazing together.
          </p>
          <router-link to="/contact" class="inline-flex items-center bg-white text-zameen-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-zameen-gold hover:text-gray-900 transition-colors">
            Get Free Consultation
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Portfolio | H&Q Design Services - Architecture & Interior Projects',
  meta: [
    { name: 'description', content: 'Explore our portfolio of stunning architecture and interior design projects across Lahore, including DHA, Parkview City, and Gulberg.' },
    { name: 'keywords', content: 'architecture portfolio Lahore, interior design projects Pakistan, residential design Lahore, commercial interior design' }
  ]
})

const categories = ['All', 'Architecture', 'Interior', 'Commercial', 'Residential']
const activeCategory = ref('All')

const projects = ref([
  {
    id: 1,
    title: 'Modern Villa',
    description: 'Luxurious 5 Marla house with contemporary design',
    category: 'Architecture',
    location: 'Parkview City',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 2,
    title: 'Luxury Apartment',
    description: 'Elegant interior with modern finishes',
    category: 'Interior',
    location: 'DHA Lahore',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Corporate Office',
    description: 'Professional workspace design',
    category: 'Commercial',
    location: 'Gulberg',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  },
  {
    id: 4,
    title: 'Family Home',
    description: 'Comfortable and stylish residence',
    category: 'Residential',
    location: 'Parkview City',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80'
  },
  {
    id: 5,
    title: 'Penthouse Suite',
    description: 'Premium penthouse with city views',
    category: 'Interior',
    location: 'DHA Phase 6',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80'
  },
  {
    id: 6,
    title: 'Restaurant Design',
    description: 'Fine dining restaurant interior',
    category: 'Commercial',
    location: 'MM Alam Road',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80'
  },
  {
    id: 7,
    title: 'Modern Mansion',
    description: '10 Marla contemporary house',
    category: 'Architecture',
    location: 'Parkview City',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
  },
  {
    id: 8,
    title: 'Minimalist Living',
    description: 'Clean and simple interior design',
    category: 'Interior',
    location: 'Cantt Lahore',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80'
  },
  {
    id: 9,
    title: 'Retail Store',
    description: 'Modern retail space design',
    category: 'Commercial',
    location: 'Packages Mall',
    image: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80'
  }
])

const interiorImages = ref([
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80', label: 'Living Room' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80', label: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80', label: 'Bedroom' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80', label: 'Dining' },
  { url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80', label: 'Bathroom' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', label: 'Luxury Interior' },
  { url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80', label: 'Study Room' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&q=80', label: 'Drawing Room' },
])

const processSteps = ref([
  {
    title: 'Consultation',
    description: 'We start by understanding your vision, requirements, and budget through an in-depth consultation.'
  },
  {
    title: 'Design',
    description: 'Our team creates detailed blueprints and 3D visualizations to bring your ideas to life.'
  },
  {
    title: 'Execution',
    description: 'Skilled craftsmen and project managers ensure quality execution of the design.'
  },
  {
    title: 'Delivery',
    description: 'We hand over your dream space with complete satisfaction and after-sales support.'
  }
])

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeCategory.value)
})

onMounted(() => {
  gsap.from('.portfolio-title', {
    scrollTrigger: {
      trigger: '.portfolio-title',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 1
  })

  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1
    })
  })

  gsap.utils.toArray('.interior-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%'
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: i * 0.05
    })
  })

  gsap.utils.toArray('.process-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: i * 0.15
    })
  })
})
</script>
