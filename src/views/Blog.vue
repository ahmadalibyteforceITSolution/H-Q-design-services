<template>
  <div>
    <section id="blog-hero" class="relative py-20 lg:py-32 bg-gradient-to-br from-zameen-green to-zameen-green-dark overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="blog-title text-4xl lg:text-6xl font-bold text-white mb-6">Our Blog</h1>
          <p class="blog-subtitle text-xl text-white/90">Design Insights, Tips & Latest Trends</p>
        </div>
      </div>
    </section>

    <section id="featured-post" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="featured-image relative">
            <img :src="featuredPost.image" :alt="featuredPost.title" class="rounded-2xl shadow-2xl w-full">
            <div class="absolute top-4 left-4 bg-zameen-gold text-gray-900 px-4 py-2 rounded-full font-bold">
              Featured
            </div>
          </div>
          <div class="featured-content">
            <div class="flex items-center space-x-4 mb-4">
              <span class="bg-zameen-green/10 text-zameen-green px-3 py-1 rounded-full text-sm font-medium">
                {{ featuredPost.category }}
              </span>
              <span class="text-gray-500 text-sm">{{ featuredPost.date }}</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{{ featuredPost.title }}</h2>
            <p class="text-gray-600 text-lg mb-6">{{ featuredPost.excerpt }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <img :src="featuredPost.authorImage" :alt="featuredPost.author" class="w-12 h-12 rounded-full">
                <div>
                  <p class="font-medium text-gray-900">{{ featuredPost.author }}</p>
                  <p class="text-sm text-gray-500">{{ featuredPost.readTime }}</p>
                </div>
              </div>
              <router-link :to="'/blog/' + featuredPost.slug" class="text-zameen-green font-medium hover:text-zameen-green-dark inline-flex items-center">
                Read More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- AdSense Autorelaxed Ad -->
    <div class="container mx-auto px-4 mb-20">
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="autorelaxed"
           data-ad-client="ca-pub-1888138480311828"
           data-ad-slot="2951340854"></ins>
    </div>

    <section id="blog-grid" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8">
          <aside class="lg:w-64 flex-shrink-0">
            <div class="sticky top-24 bg-white rounded-2xl p-6 shadow-lg">
              <h3 class="font-bold text-lg mb-4">Categories</h3>
              <ul class="space-y-2">
                <li v-for="cat in categories" :key="cat.name">
                  <button
                    @click="changeCategory(cat.name)"
                    :class="[
                      'w-full text-left px-4 py-2 rounded-lg transition-colors',
                      selectedCategory === cat.name
                        ? 'bg-zameen-green text-white'
                        : 'hover:bg-gray-100'
                    ]"
                  >
                    {{ cat.name }} ({{ cat.count }})
                  </button>
                </li>
              </ul>
            </div>
          </aside>

          <div class="flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article v-for="post in filteredPosts" :key="post.id" class="blog-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div class="relative">
                  <img :src="post.image" :alt="post.title" class="w-full h-56 object-cover">
                  <div class="absolute top-4 left-4">
                    <span class="bg-zameen-green text-white px-3 py-1 rounded-full text-sm font-medium">
                      {{ post.category }}
                    </span>
                  </div>
                </div>
                <div class="p-6">
                  <div class="flex items-center space-x-4 mb-3">
                    <span class="text-gray-500 text-sm">{{ post.date }}</span>
                    <span class="text-gray-300">|</span>
                    <span class="text-gray-500 text-sm">{{ post.readTime }}</span>
                  </div>
                  <router-link :to="'/blog/' + post.slug">
                    <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-zameen-green transition-colors cursor-pointer">
                      {{ post.title }}
                    </h3>
                  </router-link>
                  <p class="text-gray-600 mb-4 line-clamp-2">{{ post.excerpt }}</p>
                  <div class="flex items-center justify-between pt-4 border-t">
                    <div class="flex items-center space-x-3">
                      <img :src="post.authorImage" :alt="post.author" class="w-10 h-10 rounded-full">
                      <span class="text-gray-700 font-medium">{{ post.author }}</span>
                    </div>
                    <router-link :to="'/blog/' + post.slug" class="text-zameen-green font-medium hover:text-zameen-green-dark">
                      Read More
                    </router-link>
                  </div>
                </div>
              </article>
            </div>

            <div v-if="totalPages > 1" class="mt-12 flex justify-center">
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="page in totalPages"
                  :key="page"
                  @click="currentPage = page"
                  :class="[
                    'w-10 h-10 rounded-lg font-medium transition-colors',
                    currentPage === page
                      ? 'bg-zameen-green text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  ]"
                >
                  {{ page }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="categories" class="py-20 lg:py-28 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-gold/20 text-zameen-gold px-4 py-2 rounded-full text-sm font-medium mb-4">Explore Topics</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Browse by Category</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="cat in categories.slice(1)" :key="cat.name" @click="changeCategory(cat.name)" class="category-card bg-gray-50 rounded-xl p-6 text-center hover:bg-zameen-green hover:text-white transition-all cursor-pointer group">
            <div class="text-4xl mb-3">{{ cat.icon }}</div>
            <h4 class="font-bold">{{ cat.name }}</h4>
            <p class="text-sm opacity-70">{{ cat.count }} Posts</p>
          </div>
        </div>
      </div>
    </section>

    <section id="popular-posts" class="py-20 lg:py-28 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="inline-block bg-zameen-green/10 text-zameen-green px-4 py-2 rounded-full text-sm font-medium mb-4">Most Read</span>
          <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Popular Articles</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(post, index) in popularPosts" :key="post.id" class="popular-card bg-white rounded-xl p-4 shadow-lg flex gap-4">
            <div class="text-3xl font-bold text-zameen-green/30">{{ index + 1 }}</div>
            <div>
              <router-link :to="'/blog/' + post.slug">
                <h4 class="font-bold text-gray-900 mb-2 hover:text-zameen-green transition-colors cursor-pointer">{{ post.title }}</h4>
              </router-link>
              <p class="text-sm text-gray-500">{{ post.category }} | {{ post.readTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="newsletter" class="py-20 lg:py-28 bg-gradient-to-r from-zameen-green to-zameen-green-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-black/10"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl lg:text-5xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
          <p class="text-white/90 text-lg mb-8">Get the latest design tips, trends, and exclusive offers delivered to your inbox.</p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              class="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-zameen-gold"
              required
            >
            <button type="submit" class="bg-zameen-gold text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
          <p v-if="subscribed" class="text-white mt-4">Thank you for subscribing!</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { featuredPost, blogPosts } from '../data/blogs'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useHead({
  title: 'Blog | H&Q Design Services - Architecture & Design Insights',
  meta: [
    { name: 'description', content: 'Read the latest articles on architecture trends, interior design tips, and sustainable building in Pakistan from H&Q Design Services.' },
    { name: 'keywords', content: 'architecture blog Pakistan, interior design tips Lahore, home renovation blog, sustainable building trends' }
  ]
})

const email = ref('')
const subscribed = ref(false)
const selectedCategory = ref('All')
const currentPage = ref(1)
const postsPerPage = 6

const categories = ref([
  { name: 'All', icon: '📚', count: 50 },
  { name: 'Architecture', icon: '🏛️', count: 12 },
  { name: 'Interior Design', icon: '🛋️', count: 18 },
  { name: 'Tips & Tricks', icon: '💡', count: 8 },
  { name: 'Renovation', icon: '🔧', count: 4 },
  { name: 'Sustainability', icon: '🌿', count: 3 },
  { name: 'Technology', icon: '💻', count: 3 },
  { name: 'Commercial', icon: '🏢', count: 2 }
])

const popularPosts = computed(() => blogPosts.slice(0, 4))

const filteredPosts = computed(() => {
  let posts = selectedCategory.value === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory.value)

  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return posts.slice(start, end)
})

const totalPages = computed(() => {
  const posts = selectedCategory.value === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory.value)
  return Math.ceil(posts.length / postsPerPage)
})

const changeCategory = (name) => {
  selectedCategory.value = name
  currentPage.value = 1
}

const subscribeNewsletter = () => {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => {
      subscribed.value = false
    }, 3000)
  }
}

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch (err) {
    console.error('AdSense error:', err)
  }
  
  gsap.from('.blog-title', {
    scrollTrigger: { trigger: '.blog-title', start: 'top 80%' },
    opacity: 0, y: 50, duration: 1
  })

  gsap.from('.featured-image', {
    scrollTrigger: { trigger: '.featured-image', start: 'top 80%' },
    opacity: 0, x: -50, duration: 1
  })

  gsap.from('.featured-content', {
    scrollTrigger: { trigger: '.featured-content', start: 'top 80%' },
    opacity: 0, x: 50, duration: 1
  })

  gsap.utils.toArray('.blog-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 85%' },
      opacity: 0, y: 50, duration: 0.6, delay: i * 0.1
    })
  })

  gsap.utils.toArray('.category-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 90%' },
      opacity: 0, scale: 0.8, duration: 0.4, delay: i * 0.05
    })
  })
})
</script>
