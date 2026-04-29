<template>
  <div v-if="post" class="pt-20">
    <section class="relative py-20 lg:py-32 bg-gradient-to-br from-zameen-green to-zameen-green-dark overflow-hidden">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <span class="inline-block bg-zameen-gold text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-6">
            {{ post.category }}
          </span>
          <h1 class="text-4xl lg:text-6xl font-bold text-white mb-6">{{ post.title }}</h1>
          <div class="flex items-center justify-center space-x-6 text-white/90">
            <div class="flex items-center space-x-2">
              <img :src="post.authorImage" :alt="post.author" class="w-10 h-10 rounded-full border-2 border-white/20">
              <span class="font-medium">{{ post.author }}</span>
            </div>
            <span>|</span>
            <span>{{ post.date }}</span>
            <span>|</span>
            <span>{{ post.readTime }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <img :src="post.image" :alt="post.title" class="w-full h-[400px] lg:h-[600px] object-cover rounded-3xl shadow-2xl mb-12">
          
          <div class="prose prose-lg max-w-none text-gray-600" v-html="post.content"></div>
          
          <div class="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div class="flex items-center space-x-4">
              <span class="font-bold text-gray-900">Share this post:</span>
              <div class="flex space-x-2">
                <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-zameen-green hover:text-white transition-colors">
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-zameen-green hover:text-white transition-colors">
                  <i class="fab fa-twitter"></i>
                </button>
                <button class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-zameen-green hover:text-white transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </button>
              </div>
            </div>
            <router-link to="/blog" class="inline-flex items-center text-zameen-green font-bold hover:text-zameen-green-dark">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to Blog
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Posts -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Related Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="related in relatedPosts" :key="related.id" class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img :src="related.image" :alt="related.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <span class="text-zameen-green text-sm font-bold mb-2 block">{{ related.category }}</span>
              <h3 class="text-xl font-bold text-gray-900 mb-4 line-clamp-2">{{ related.title }}</h3>
              <router-link :to="'/blog/' + related.id" class="text-gray-900 font-bold hover:text-zameen-green inline-flex items-center">
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
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Post not found</h2>
      <router-link to="/blog" class="text-zameen-green font-bold">Return to Blog</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
import { blogPosts, featuredPost } from '../data/blogs'

const route = useRoute()
const post = ref(null)

const allPosts = [featuredPost, ...blogPosts]

const loadPost = () => {
  const id = parseInt(route.params.id)
  if (id === 0) {
    post.value = featuredPost
  } else {
    post.value = blogPosts.find(p => p.id === id)
  }

  if (post.value) {
    useHead({
      title: `${post.value.title} | H&Q Design Services Blog`,
      meta: [
        { name: 'description', content: post.value.excerpt },
        { name: 'keywords', content: `${post.value.category}, architecture, interior design, Pakistan` },
        { property: 'og:title', content: post.value.title },
        { property: 'og:description', content: post.value.excerpt },
        { property: 'og:image', content: post.value.image }
      ]
    })
  }
}

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts
    .filter(p => p.category === post.value.category && p.id !== post.value.id)
    .slice(0, 3)
})

onMounted(loadPost)
watch(() => route.params.id, loadPost)
</script>

<style scoped>
.prose h2 {
  @apply text-2xl font-bold text-gray-900 mt-12 mb-6;
}
.prose h3 {
  @apply text-xl font-bold text-gray-900 mt-8 mb-4;
}
.prose p {
  @apply mb-6 leading-relaxed;
}
.prose blockquote {
  @apply border-l-4 border-zameen-gold pl-6 italic my-8 text-xl text-gray-700;
}
</style>
