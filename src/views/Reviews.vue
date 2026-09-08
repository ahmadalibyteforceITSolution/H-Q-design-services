<template>
  <div class="py-12 space-y-16">
    
    <!-- Hero Banner -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl space-y-6">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-0 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4 relative z-10">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-3.5 py-1 rounded-full text-xs font-black bg-[#088C7E] text-white uppercase tracking-wider flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-star text-amber-300"></i>
              <span>Official Google Business Reviews</span>
            </span>
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/90 text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
              <i class="fa-solid fa-circle-check text-emerald-400"></i>
              <span>5.0 / 5.0 Rating</span>
            </span>
          </div>

          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Client Reviews & <span class="text-gradient-hq">Google Ratings</span>
          </h1>

          <p class="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            See how H&Q Design Services is transforming luxury villas, commercial plazas, and residential architecture across DHA Lahore, Bahria Town, and Saudi Arabia.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
            <a 
              :href="businessData.writeReviewUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="px-6 py-3.5 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white uppercase tracking-wider transition-all shadow-xl shadow-[#088C7E]/40 flex items-center gap-2 hover:scale-105"
            >
              <i class="fa-solid fa-pen-nib"></i>
              <span>Leave a Google Review</span>
            </a>
            <a 
              :href="'https://wa.me/' + (businessData.whatsappKSA.replace(/[^0-9]/g, ''))" 
              target="_blank" 
              class="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 uppercase tracking-wider transition-colors flex items-center gap-2 border border-slate-700"
            >
              <i class="fa-brands fa-whatsapp text-emerald-400 text-sm"></i>
              <span>Talk to Senior Architect</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Reviews Main Showcase -->
    <GoogleReviews />

    <!-- Why Homeowners & Investors Trust H&Q -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="space-y-2">
        <span class="text-xs font-black uppercase tracking-wider text-[#088C7E]">The H&Q Guarantee</span>
        <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Why Clients Give Us 5 Stars</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#088C7E] flex items-center justify-center text-xl">
            <i class="fa-solid fa-file-signature"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">100% Submission Approval</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            All floor plans, elevations, and structural drawings strictly comply with DHA Lahore, LDA, and Bahria Town bylaws, ensuring rapid NOC approvals.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-video"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">4K Lumion Walkthroughs</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Before a single brick is laid, our clients experience their finished villa in photorealistic 4K 3D elevation renders and cinematic VR video tours.
          </p>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-headset"></i>
          </div>
          <h3 class="text-base font-extrabold text-slate-900 dark:text-white">Overseas Client Desk</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Dedicated WhatsApp consultation and weekly video check-ins for clients living in Saudi Arabia, the UAE, UK, and USA building their homes in Pakistan.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import GoogleReviews from '../components/GoogleReviews.vue'
import { GOOGLE_BUSINESS } from '../data/googleReviewsData.js'

const businessData = GOOGLE_BUSINESS
</script>
