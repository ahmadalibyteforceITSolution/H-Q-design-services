<template>
  <div>
    <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-zameen-green via-zameen-green-dark to-gray-900">
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Luxury Home" class="w-full h-full object-cover opacity-40">
      </div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl">
          <div class="hero-badge mb-6 inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <span class="bg-zameen-gold text-gray-900 px-2 py-1 rounded text-xs font-bold mr-2">PARKVIEW CITY</span>
            <span class="text-white text-sm">Affiliated with Zameen.com</span>
          </div>

          <h1 class="hero-title text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your <span class="text-zameen-gold">Vision</span> Into Reality
          </h1>

          <p class="hero-subtitle text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Pakistan's Premier Architecture & Interior Design Studio. Creating timeless spaces that inspire.
          </p>

          <div class="hero-cta flex flex-col sm:flex-row gap-4">
            <router-link to="/portfolio" class="bg-zameen-gold text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors inline-flex items-center justify-center">
              View Our Projects
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
            <router-link to="/contact" class="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors inline-flex items-center justify-center">
              Get Free Consultation
            </router-link>
          </div>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <section id="stats" class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="stat-item text-center">
            <div class="text-4xl lg:text-5xl font-bold text-zameen-green mb-2">{{ stat.value }}</div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-badge inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">Our Services</span>
          <h2 class="section-title text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <p class="section-subtitle text-gray-600 text-lg">Comprehensive design solutions tailored to your unique needs and vision.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title" class="service-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div class="w-16 h-16 bg-zameen-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-zameen-green transition-colors">
              <div v-html="service.icon" class="w-8 h-8 text-zameen-green group-hover:text-white transition-colors"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 mb-6">{{ service.description }}</p>
            <router-link :to="{ path: '/contact', query: { service: service.title.toLowerCase().split(' ')[0] }}" class="inline-flex items-center text-zameen-green font-medium hover:gap-3 transition-all">
              Learn More
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section id="featured" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="section-badge inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Featured Projects</span>
          <h2 class="section-title text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Our Latest Work</h2>
          <p class="section-subtitle text-gray-600 text-lg">Explore our stunning portfolio of completed projects in Lahore.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in featuredProjects" :key="project.title" class="project-card group cursor-pointer">
            <div class="relative overflow-hidden rounded-2xl mb-6">
              <img :src="project.image" :alt="project.title" class="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <router-link to="/portfolio" class="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-zameen-gold transition-colors">
                  View Project
                </router-link>
              </div>
              <div class="absolute top-4 left-4 bg-zameen-gold text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                {{ project.location }}
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ project.title }}</h3>
            <p class="text-gray-600">{{ project.category }}</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/portfolio" class="inline-flex items-center bg-zameen-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-zameen-green-dark transition-colors">
            View All Projects
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <section id="cta" class="py-20 lg:py-28 bg-gradient-to-r from-zameen-green to-zameen-green-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p class="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation. Let's create something beautiful together.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/contact" class="bg-white text-zameen-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-zameen-gold hover:text-gray-900 transition-colors inline-flex items-center justify-center">
              Book Consultation
            </router-link>
            <a href="https://zameen.com" target="_blank" class="bg-zameen-gold text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition-colors inline-flex items-center justify-center">
              Visit Zameen.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="partners" class="py-16 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <p class="text-gray-400 text-sm uppercase tracking-wider">Trusted Partners</p>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div class="text-center">
            <div class="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl">
              <span class="text-2xl font-bold text-zameen-gold">ZAMEEN.COM</span>
              <p class="text-gray-400 text-sm mt-1">Official Partner</p>
            </div>
          </div>
          <div class="text-center">
            <div class="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl">
              <span class="text-2xl font-bold text-white">PARKVIEW CITY</span>
              <p class="text-gray-400 text-sm mt-1">Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'H&Q Design Services | Best Architecture & Interior Design in Lahore',
  meta: [
    { name: 'description', content: 'H&Q Design Services offers premium architecture and interior design in Lahore. Specializing in residential and commercial projects in Parkview City and DHA.' },
    { name: 'keywords', content: 'architecture Lahore, interior design Pakistan, H&Q Design Services, house design Lahore, office interior Lahore, Parkview City architecture' },
    { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE' },
    { property: 'og:title', content: 'H&Q Design Services - Architecture & Interior Design' },
    { property: 'og:description', content: 'Premium design services for your dream home or office.' },
    { property: 'og:image', content: '/favicon.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "H&Q Design Services",
        "image": "https://h-q-design-services.vercel.app/favicon.png",
        "@id": "https://h-q-design-services.vercel.app/",
        "url": "https://h-q-design-services.vercel.app/",
        "telephone": ["0313-4487315", "+966 50 714 3124"],
        "email": "asadrogi@rocketmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Parkview City",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "postalCode": "54000",
          "addressCountry": "PK"
        },
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Architecture Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Interior Design"
              }
            }
          ]
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 31.4504,
          "longitude": 74.1952
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.facebook.com/share/1JFuAoDXzr/",
          "https://www.instagram.com/chasad_ali/"
        ]
      })
    }
  ]
})

const stats = ref([
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Happy Clients' },
  { value: '50+', label: 'Design Awards' }
])

const services = ref([
  {
    title: 'Architecture Design',
    description: 'Complete architectural solutions from concept to execution for residential and commercial projects.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>'
  },
  {
    title: 'Interior Design',
    description: 'Transform your interiors with our expert designers. From modern to classic, we do it all.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>'
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic 3D renders to visualize your project before construction begins.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>'
  },
  {
    title: 'Space Planning',
    description: 'Maximize functionality and flow with our expert space planning services.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>'
  },
  {
    title: 'Furniture Design',
    description: 'Custom furniture designed and crafted to perfectly fit your space and style.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>'
  },
  {
    title: 'Renovation',
    description: 'Give your existing space a fresh new look with our renovation expertise.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>'
  }
])

const featuredProjects = ref([
  {
    title: 'Modern Villa Design',
    location: 'Parkview City',
    category: 'Architecture & Interior',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    title: 'Luxury Apartment',
    location: 'DHA Lahore',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    title: 'Commercial Office',
    location: 'Gulberg',
    category: 'Workspace Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  }
])

onMounted(() => {
  const tl = gsap.timeline()

  tl.from('.hero-badge', { opacity: 0, y: 30, duration: 0.8 })
    .from('.hero-title', { opacity: 0, y: 50, duration: 1 }, '-=0.4')
    .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8 }, '-=0.6')
    .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8 }, '-=0.4')

  gsap.utils.toArray('.stat-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%'
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1
    })
  })

  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 80%'
      },
      opacity: 0,
      y: 30,
      duration: 0.8
    })
  })

  gsap.utils.toArray('.service-card').forEach((card, i) => {
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

  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.15
    })
  })
})
</script>
