<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
    <!-- Top Bar -->
    <div class="bg-gray-900 text-white py-2 hidden sm:block">
      <div class="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
        <div class="flex items-center space-x-6">
          <a href="tel:03134487315" class="flex items-center hover:text-zameen-green transition-colors">
            <svg class="w-4 h-4 mr-2 text-zameen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            0313-4487315
          </a>
          <a href="mailto:asadrogi@rocketmail.com" class="flex items-center hover:text-zameen-green transition-colors">
            <svg class="w-4 h-4 mr-2 text-zameen-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            asadrogi@rocketmail.com
          </a>
        </div>
        <div class="hidden md:flex items-center space-x-4">
          <span class="text-gray-400">Parkview City, Lahore</span>
        </div>
      </div>
    </div>

    <nav class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <router-link to="/" class="flex items-center space-x-2">
          <img src="@/assets/logo.png" alt="H&Q Logo" class="w-10 h-10 lg:w-12 lg:h-12 object-contain" />
          <div class="hidden xs:block">
            <h1 class="text-sm sm:text-lg lg:text-xl font-bold text-gray-800">H&Q Design Services</h1>
            <p class="text-[10px] sm:text-xs text-zameen-green font-medium">Architecture & Interior Design</p>
          </div>
        </router-link>

        <div class="hidden lg:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          <router-link to="/blog" class="nav-link">Blog</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
        </div>

        <div class="hidden lg:flex items-center space-x-4">
          <a href="https://zameen.com" target="_blank" class="text-xs text-gray-600 hover:text-zameen-green transition-colors">
            Powered by Zameen.com
          </a>
          <router-link to="/contact" class="bg-zameen-green text-white px-6 py-2 rounded-lg hover:bg-zameen-green-dark transition-colors font-medium">
            Get Quote
          </router-link>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2">
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div v-if="mobileMenuOpen" class="lg:hidden pb-4">
        <div class="flex flex-col space-y-3">
          <router-link to="/" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-zameen-green py-2">Home</router-link>
          <router-link to="/about" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-zameen-green py-2">About Us</router-link>
          <router-link to="/portfolio" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-zameen-green py-2">Portfolio</router-link>
          <router-link to="/blog" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-zameen-green py-2">Blog</router-link>
          <router-link to="/contact" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-zameen-green py-2">Contact Us</router-link>
          <router-link to="/contact" @click="mobileMenuOpen = false" class="bg-zameen-green text-white px-6 py-3 rounded-lg text-center font-medium">
            Get Quote
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 hover:text-zameen-green font-medium transition-colors relative;
}

.nav-link.router-link-exact-active {
  @apply text-zameen-green;
}

.nav-link.router-link-exact-active::after {
  content: '';
  @apply absolute bottom-0 left-0 right-0 h-0.5 bg-zameen-green;
}
</style>
