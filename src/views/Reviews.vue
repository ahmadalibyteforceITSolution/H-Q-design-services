<template>
  <div class="py-12 space-y-16 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Banner -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 text-white overflow-hidden border border-slate-800 dark:border-white/10 shadow-2xl space-y-6">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4 relative z-10">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-3.5 py-1 rounded-full text-xs font-black bg-[#C5A880] text-[#0B0E14] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-star text-[#0B0E14]"></i>
              <span>Official Google Business Reviews</span>
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#0B0E14]/80 text-[#DFC8A5] border border-white/10 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-emerald-400"></i>
              <span>5.0 / 5.0 Rating</span>
            </span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Client Reviews &amp; <span class="text-gradient-gold">Google Ratings</span>
          </h1>

          <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            See how H&amp;Q Design Services is transforming luxury villas, commercial plazas, and residential architecture across DHA Lahore, Bahria Town, and Saudi Arabia.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
            <a 
              :href="businessData.writeReviewUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-6 py-3.5 rounded-full tecture-btn-gold text-xs shadow-xl flex items-center gap-2"
            >
              <i class="fa-solid fa-pen-nib"></i>
              <span>Leave a Google Review</span>
            </a>
            <button 
              type="button"
              @click="openWhatsApp(businessData.whatsappKSA)" 
              class="px-6 py-3.5 rounded-full tecture-btn-outline text-xs flex items-center gap-2 cursor-pointer"
            >
              <i class="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
              <span>Talk to Senior Architect</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Reviews Main Showcase (Right-to-Left Infinite Slider) -->
    <GoogleReviews />

    <!-- Why Homeowners & Investors Trust H&Q -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-2">
        <span class="tecture-tag text-[#C5A880] block">THE H&amp;Q GUARANTEE</span>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Why Clients Give Us 5 Stars</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-3xl tecture-card space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xl">
            <i class="fa-solid fa-file-signature"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">100% Submission Approval</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            All floor plans, elevations, and structural drawings strictly comply with DHA Lahore, LDA, and Bahria Town bylaws, ensuring rapid NOC approvals.
          </p>
        </div>

        <div class="p-6 rounded-3xl tecture-card space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xl">
            <i class="fa-solid fa-video"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">4K Lumion Walkthroughs</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Before a single brick is laid, our clients experience their finished villa in photorealistic 4K 3D elevation renders and cinematic VR video tours.
          </p>
        </div>

        <div class="p-6 rounded-3xl tecture-card space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xl">
            <i class="fa-solid fa-headset"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Overseas Client Desk</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Dedicated WhatsApp consultation and weekly video check-ins for clients living in Saudi Arabia, the UAE, UK, and USA building their homes in Pakistan.
          </p>
        </div>
      </div>

      <!-- Cross Navigation Action Strip -->
      <div class="p-6 sm:p-8 rounded-3xl bg-[#0B0E14] dark:bg-[#121620] text-white border border-[#C5A880]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
          <h4 class="font-extrabold text-base sm:text-lg text-white">Experience 5-Star Architectural Services</h4>
          <p class="text-xs text-slate-400">Discover completed floor plans, calculate construction costs, or meet our architects.</p>
        </div>
        <div class="flex flex-wrap items-center gap-3">
          <router-link to="/portfolio" class="px-5 py-2.5 rounded-full tecture-btn-gold text-xs shadow-md flex items-center gap-1.5">
            <i class="fa-solid fa-cubes"></i>
            <span>3D Portfolio</span>
          </router-link>
          <router-link to="/tools?tab=cost-calc" class="px-5 py-2.5 rounded-full tecture-btn-outline text-xs flex items-center gap-1.5">
            <i class="fa-solid fa-calculator text-[#C5A880]"></i>
            <span>Cost Calculator</span>
          </router-link>
          <router-link to="/contact" class="px-5 py-2.5 rounded-full tecture-btn-gold text-xs shadow-md flex items-center gap-1.5">
            <i class="fa-solid fa-phone"></i>
            <span>Contact Studio</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import GoogleReviews from '../components/GoogleReviews.vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { GOOGLE_BUSINESS } from '../data/googleReviewsData.js'
import { openWhatsApp } from '../utils/whatsapp.js'

const businessData = GOOGLE_BUSINESS
</script>