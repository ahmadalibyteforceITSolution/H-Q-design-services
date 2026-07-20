<template>
  <div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#088C7E] selection:text-white">
    <!-- Main Top Navigation -->
    <Navbar @open-start-project="showModal = true" />

    <!-- Page Content Container with Smooth Router View Transitions -->
    <main class="flex-1 w-full">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" @open-start-project="showModal = true" />
        </transition>
      </router-view>
    </main>

    <!-- Main Footer -->
    <Footer @open-start-project="showModal = true" />

    <!-- Interactive AI Advisor Chatbot Widget -->
    <ChatBot />

    <!-- Multi-step Lead Consultation Modal -->
    <StartProjectModal :isOpen="showModal" @close="showModal = false" />

    <!-- Floating Direct WhatsApp Button to Saudi Arabia Desk (+966 50 714 3124) -->
    <a 
      href="https://wa.me/966507143124" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with Chief Architect"
      class="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
    >
      <i class="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
      <span class="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none border border-slate-800">
        WhatsApp +966 50 714 3124
      </span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatBot from './components/ChatBot.vue'
import StartProjectModal from './components/StartProjectModal.vue'

const showModal = ref(false)
</script>

<style>
/* Page Transition Animation */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
