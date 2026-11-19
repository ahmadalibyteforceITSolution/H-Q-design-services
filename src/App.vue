<template>
  <div class="min-h-screen flex flex-col bg-[#F8F9FA] dark:bg-[#0B0E14] text-slate-800 dark:text-slate-100 transition-colors duration-300 font-sans selection:bg-[#C5A880] selection:text-[#0B0E14]">
    <!-- Main Top Navigation (Tecture Style) -->
    <Navbar 
      v-if="!route.meta?.hideHeaderFooter"
      @open-start-project="showLeadModal = true" 
      @open-add-property="showAddPropertyModal = true" 
    />

    <!-- Page Content Container with Smooth Router View Transitions -->
    <main class="flex-1 w-full pb-16 md:pb-0" :class="{ 'p-4 sm:p-6 bg-[#0B0E14] min-h-screen flex items-center justify-center': route.meta?.hideHeaderFooter }">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component 
            :is="Component" 
            @open-start-project="showLeadModal = true" 
            @open-add-property="showAddPropertyModal = true" 
          />
        </transition>
      </router-view>
    </main>

    <!-- Main Footer (Tecture Style) -->
    <Footer 
      v-if="!route.meta?.hideHeaderFooter"
      @open-start-project="showLeadModal = true" 
      @open-add-property="showAddPropertyModal = true" 
    />

    <!-- Interactive AI Advisor Chatbot Widget -->
    <ChatBot v-if="!route.meta?.hideHeaderFooter" />

    <!-- Multi-step Lead Consultation Modal -->
    <StartProjectModal v-if="!route.meta?.hideHeaderFooter" :isOpen="showModal" @close="showModal = false" />

    <!-- Add Property / Post Project Modal -->
    <AddPropertyModal v-if="!route.meta?.hideHeaderFooter" :isOpen="showAddPropertyModal" @close="showAddPropertyModal = false" />

    <!-- Floating Quick Contact & Social Sidebar (All Pages) -->
    <FloatingSideBar v-if="!route.meta?.hideHeaderFooter" @open-start-project="showLeadModal = true" />

    <!-- Global Lead Generation Pop-up Modal (Number, Email, Message -> KSA WhatsApp + Email) -->
    <LeadPopupModal 
      v-if="!route.meta?.hideHeaderFooter"
      :isOpen="showLeadModal" 
      @close="showLeadModal = false" 
      @open="showLeadModal = true" 
    />

    <!-- Mobile High-Converting Sticky Bottom Lead Bar (Powers 50 Leads / Day on Mobile) -->
    <div 
      v-if="!route.meta?.hideHeaderFooter"
      class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0E14]/95 backdrop-blur-xl border-t border-[#C5A880]/30 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl"
    >
      <a 
        href="tel:03134487315"
        class="flex-1 py-2.5 px-2 rounded-xl bg-slate-900 border border-white/10 text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all text-center"
      >
        <i class="fa-solid fa-phone text-[#C5A880] text-xs"></i>
        <span>Call Architect</span>
      </a>

      <a 
        href="https://api.whatsapp.com/send/?phone=923134487315&text=Hello%20H%26Q%20Design%20Services,%20I%20want%20to%20inquire%20about%20architectural%20and%20interior%20design%20services.&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        class="flex-1 py-2.5 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-all text-center border border-emerald-400/40"
      >
        <i class="fa-brands fa-whatsapp text-sm"></i>
        <span>WhatsApp</span>
      </a>

      <button 
        type="button"
        @click="showLeadModal = true"
        class="flex-1 py-2.5 px-2 rounded-xl tecture-btn-gold text-[11px] font-black flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all text-center cursor-pointer"
      >
        <i class="fa-solid fa-calculator text-[10px]"></i>
        <span>Get BOQ Quote</span>
      </button>
    </div>

    <!-- Floating Direct WhatsApp Button (Desktop) -->
    <a 
      v-if="!route.meta?.hideHeaderFooter"
      href="https://api.whatsapp.com/send/?phone=923134487315&text=Hello%20H%26Q%20Design%20Services,%20I%20want%20to%20inquire%20about%20architectural%20and%20interior%20design%20services.&type=phone_number&app_absent=0" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with Chief Architect"
      class="hidden md:flex fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer border border-emerald-400/40"
    >
      <i class="fa-brands fa-whatsapp text-2xl group-hover:rotate-12 transition-transform"></i>
      <span class="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-[#121620] text-slate-200 text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-2xl pointer-events-none border border-white/10">
        WhatsApp: 0313-4487315
      </span>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatBot from './components/ChatBot.vue'
import StartProjectModal from './components/StartProjectModal.vue'
import AddPropertyModal from './components/AddPropertyModal.vue'
import FloatingSideBar from './components/FloatingSideBar.vue'
import LeadPopupModal from './components/LeadPopupModal.vue'

const showModal = ref(false)
const showAddPropertyModal = ref(false)
const showLeadModal = ref(false)

const route = useRoute()
</script>

<style>
/* Page Transition Animation */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
