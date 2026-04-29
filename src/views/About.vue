<template>
  <div>
    <section id="about-hero" class="relative py-20 lg:py-32 bg-gradient-to-br from-zameen-green to-zameen-green-dark overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="about-title text-4xl lg:text-6xl font-bold text-white mb-6">About H&Q Design Services</h1>
          <p class="about-subtitle text-xl text-white/90">Crafting Excellence in Architecture & Interior Design Since 2009</p>
        </div>
      </div>
    </section>

    <section id="story" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="about-image">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Our Studio" class="rounded-2xl shadow-2xl">
          </div>
          <div class="about-content">
            <span class="inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">Our Story</span>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Building Dreams in Pakistan</h2>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              H&Q Design Services was founded with a simple mission: to transform spaces into extraordinary experiences. Based in Lahore, we have grown to become one of Pakistan's most trusted architecture and interior design firms.
            </p>
            <p class="text-gray-600 text-lg mb-8 leading-relaxed">
              Our affiliation with Zameen.com and Parkview City has allowed us to work on some of the most prestigious projects in Lahore, delivering exceptional results that exceed client expectations.
            </p>
            <div class="flex flex-wrap gap-4">
              <div class="bg-gray-50 px-6 py-4 rounded-xl">
                <div class="text-3xl font-bold text-zameen-green">15+</div>
                <div class="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div class="bg-gray-50 px-6 py-4 rounded-xl">
                <div class="text-3xl font-bold text-zameen-green">500+</div>
                <div class="text-gray-600 text-sm">Projects Done</div>
              </div>
              <div class="bg-gray-50 px-6 py-4 rounded-xl">
                <div class="text-3xl font-bold text-zameen-green">100%</div>
                <div class="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="values" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Our Values</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">What Drives Us</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" class="value-card bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div class="w-16 h-16 bg-zameen-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <div v-html="value.icon" class="w-8 h-8 text-zameen-green"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ value.title }}</h3>
            <p class="text-gray-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="team" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">Our Team</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Meet the Experts</h2>
          <p class="text-gray-600 text-lg">Our talented team of architects, designers, and engineers bring your vision to life.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.name" class="team-card text-center">
            <div class="relative mb-6 overflow-hidden rounded-2xl">
              <img :src="member.image" :alt="member.name" class="w-full h-80 object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-1">{{ member.name }}</h3>
            <p class="text-zameen-green font-medium">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="partners" class="py-20 lg:py-28 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Our Partners</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">Trusted Partnerships</h2>
          <p class="text-gray-400 text-lg">We're proud to be affiliated with industry leaders</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-zameen-gold mb-2">ZAMEEN.COM</div>
            <p class="text-gray-400 mb-4">Official Partner</p>
            <p class="text-gray-300 text-sm">Pakistan's leading real estate platform</p>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div class="text-4xl font-bold text-white mb-2">PARKVIEW CITY</div>
            <p class="text-gray-400 mb-4">Premium Partner</p>
            <p class="text-gray-300 text-sm">Lahore's premier housing society</p>
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
  title: 'About H&Q Design Services | Architecture Firm in Lahore',
  meta: [
    { name: 'description', content: 'Learn about H&Q Design Services, a leading architecture and interior design firm in Lahore. Official partners with Zameen.com and Parkview City.' },
    { name: 'keywords', content: 'H&Q Design Services team, Hassan Qureshi architect, architecture studio Lahore, interior design experts Pakistan' }
  ]
})

const values = ref([
  {
    title: 'Excellence',
    description: 'We strive for excellence in every project we undertake.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>'
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge design solutions.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'
  },
  {
    title: 'Client Focus',
    description: 'Your vision is our priority. We listen and deliver.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
  },
  {
    title: 'Integrity',
    description: 'Transparent processes and honest communication always.',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>'
  }
])

const team = ref([
  {
    name: 'Hassan Qureshi',
    role: 'Founder & Lead Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'
  },
  {
    name: 'Ayesha Khan',
    role: 'Interior Design Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  },
  {
    name: 'Ali Hassan',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  }
])

onMounted(() => {
  gsap.from('.about-title', {
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 1
  })

  gsap.from('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%'
    },
    opacity: 0,
    x: -50,
    duration: 1
  })

  gsap.from('.about-content', {
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 80%'
    },
    opacity: 0,
    x: 50,
    duration: 1
  })

  gsap.utils.toArray('.value-card').forEach((card, i) => {
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

  gsap.utils.toArray('.team-card').forEach((card, i) => {
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
