<template>
  <aside 
    aria-label="Quick Contact and Social Links"
    class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex items-center transition-transform duration-300 ease-in-out select-none"
    :class="[isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-28px)]']"
  >
    <!-- Toggle Collapse / Expand Tab -->
    <button 
      @click="isOpen = !isOpen"
      :title="isOpen ? 'Collapse Quick Bar' : 'Expand Quick Bar'"
      aria-label="Toggle Quick Contact Bar"
      class="w-7 h-11 bg-slate-950 text-white flex items-center justify-center rounded-l-xl shadow-2xl border-l border-t border-b border-slate-700 hover:bg-[#088C7E] hover:text-white transition-colors cursor-pointer text-xs focus:outline-none"
    >
      <i 
        class="fa-solid transition-transform duration-300 text-xs" 
        :class="isOpen ? 'fa-chevron-right' : 'fa-chevron-left'"
      ></i>
    </button>

    <!-- Main Vertical Column -->
    <div class="flex flex-col w-12 sm:w-14 rounded-l-2xl overflow-hidden shadow-2xl border-l border-t border-b border-slate-800/80">
      
      <!-- 1. Contact Us Button -->
      <button 
        @click="$emit('open-start-project')"
        class="group relative w-full bg-[#5E52E0] hover:bg-[#4E41D9] text-white py-5 flex flex-col items-center justify-center transition-colors cursor-pointer focus:outline-none"
        title="Contact Us / Book Consultation"
      >
        <i class="fa-regular fa-envelope text-base sm:text-lg mb-2 group-hover:scale-110 transition-transform"></i>
        <span class="text-[10px] sm:text-[11px] font-black uppercase tracking-widest leading-none [writing-mode:vertical-rl] rotate-180">
          CONTACT US
        </span>

        <!-- Tooltip -->
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800 flex items-center gap-1.5">
          <i class="fa-solid fa-calendar-check text-[#088C7E]"></i>
          <span>Schedule Architectural Consultation</span>
        </div>
      </button>

      <!-- 2. Facebook -->
      <a 
        href="https://www.facebook.com/profile.php?id=100063665456115" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit H&amp;Q Design Services on Facebook"
        class="group relative w-full h-11 sm:h-12 bg-[#1877F2] hover:bg-[#1565C0] text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-facebook-f group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          Facebook Page
        </div>
      </a>

      <!-- 3. YouTube -->
      <a 
        href="https://www.youtube.com/@HQDesignservices" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit H&amp;Q Design Services on YouTube"
        class="group relative w-full h-11 sm:h-12 bg-[#FF0000] hover:bg-[#CC0000] text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-youtube group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          YouTube Channel &amp; 3D Tours
        </div>
      </a>

      <!-- 4. Instagram -->
      <a 
        href="https://www.instagram.com/hq_design_services/?hl=en" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit H&amp;Q Design Services on Instagram"
        class="group relative w-full h-11 sm:h-12 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white flex items-center justify-center transition-all text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-instagram group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          Instagram Portfolio
        </div>
      </a>

      <!-- LinkedIn -->
      <a 
        href="https://www.linkedin.com/company/h-q-design-services/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit H&amp;Q Design Services on LinkedIn"
        class="group relative w-full h-11 sm:h-12 bg-[#0A66C2] hover:bg-[#084E96] text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-linkedin-in group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          LinkedIn Company Page
        </div>
      </a>

      <!-- 5. WhatsApp Click to Chat -->
      <a 
        href="https://api.whatsapp.com/send/?phone=966507143124&amp;text=Hello%20H%26Q%20Design%20Services,%20I%20want%20to%20inquire%20about%20architectural%20and%20interior%20design%20services.&amp;type=phone_number&amp;app_absent=0" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        class="group relative w-full h-11 sm:h-12 bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-whatsapp group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800 flex items-center gap-1.5">
          <i class="fa-brands fa-whatsapp text-emerald-400"></i>
          <span>WhatsApp +966 50 714 3124</span>
        </div>
      </a>

      <!-- 6. TikTok -->
      <a 
        href="https://www.tiktok.com/@hqdesignservices?lang=en" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit H&amp;Q Design Services on TikTok"
        class="group relative w-full h-11 sm:h-12 bg-black hover:bg-slate-900 text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-brands fa-tiktok group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          TikTok Project Renders
        </div>
      </a>

      <!-- 7. Studio Location / Google Maps Pin -->
      <a 
        href="https://maps.google.com/?q=Parkview+City+Lahore" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="View Studio Location on Google Maps"
        class="group relative w-full h-11 sm:h-12 bg-[#EA4335] hover:bg-[#D93025] text-white flex items-center justify-center transition-colors text-base sm:text-lg cursor-pointer"
      >
        <i class="fa-solid fa-location-dot group-hover:scale-110 transition-transform"></i>
        <div class="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-slate-800">
          Studio Location: Parkview City Lahore
        </div>
      </a>

    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['open-start-project'])

const isOpen = ref(true)
</script>
