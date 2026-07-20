<template>
  <div class="py-12 space-y-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Hero Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
        Parkview City Studio & Direct Desk
      </span>
      <h1 class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
        Connect with Our <span class="text-gradient-zameen">Senior Architects</span>
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
        Visit our studio in Parkview City, Lahore, or get an immediate consultation for floor plans, 3D renders, and municipal approvals.
      </p>
    </div>

    <!-- Contact Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <!-- Call Direct -->
      <div class="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-[#088C7E] transition-all">
        <div class="w-12 h-12 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl">
          <i class="fa-solid fa-phone"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Call Chief Architect</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Direct phone line for quick plot inquiries & 3D render consultations.</p>
        <div class="pt-2">
          <a href="tel:03416887454" class="text-sm font-black text-[#088C7E] hover:underline block">0341-6887454</a>
          <a href="tel:+966507143124" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:underline block mt-1">🇸🇦 +966 50 714 3124</a>
        </div>
      </div>

      <!-- WhatsApp Direct -->
      <div class="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-emerald-500 transition-all">
        <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
          <i class="fa-brands fa-whatsapp"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">WhatsApp Chat</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Send plot dimensions or architectural sketches directly via WhatsApp.</p>
        <div class="pt-2">
          <a 
            href="https://wa.me/923416887454" 
            target="_blank" 
            class="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-2 shadow"
          >
            <i class="fa-brands fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <!-- Studio Location -->
      <div class="p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 hover:border-amber-500 transition-all">
        <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">Parkview Studio</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Parkview City, Multan Road, Lahore, Punjab, Pakistan.</p>
        <div class="pt-2">
          <span class="text-xs font-bold text-slate-700 dark:text-slate-300">Mon - Sat: 9:00 AM - 7:00 PM</span>
        </div>
      </div>

    </div>

    <!-- Contact Form & Map Section -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <!-- Inquiry Form -->
      <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div class="space-y-1">
          <h3 class="text-2xl font-black text-slate-900 dark:text-white">Send Us Your Plot Details</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">Fill out this form and our chief architect will reach out within 2 hours.</p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
              <input 
                v-model="form.name"
                type="text" 
                required
                placeholder="e.g. Asad Ali" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              />
            </div>

            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp *</label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                placeholder="03416887454" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">City / Society Location</label>
              <select 
                v-model="form.location"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              >
                <option value="Parkview City Lahore">Parkview City, Lahore</option>
                <option value="DHA Lahore">DHA Lahore</option>
                <option value="Gulberg Lahore">Gulberg 3, Lahore</option>
                <option value="Bahria Town">Bahria Town, Lahore</option>
                <option value="Overseas Client">Overseas Client</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Plot Size & Scale</label>
              <select 
                v-model="form.plotSize"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              >
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
                <option value="Commercial Plaza">Commercial Plaza</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Project Details & Requirements</label>
            <textarea 
              v-model="form.message"
              rows="4" 
              placeholder="Tell us about floor requirements, 3D render style preferences, or budget..." 
              class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full py-4 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#088C7E]/30 cursor-pointer"
          >
            Submit Inquiry to Chief Architect
          </button>
          
          <p v-if="submitted" class="text-xs text-center text-[#088C7E] font-bold">
            ✓ Inquiry received! Our team will contact you shortly at {{ form.phone }}.
          </p>
        </form>
      </div>

      <!-- Studio Google Maps Placeholder -->
      <div class="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 h-full min-h-[400px] relative">
        <iframe 
          title="Parkview City Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.653494793796!2d74.19543169999999!3d31.43022245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ffdfa9edab41%3A0x6b4fb6c81350ef9!2sPark%20View%20City%2C%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
          class="w-full h-full border-0 min-h-[400px]" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '03416887454',
  location: 'Parkview City Lahore',
  plotSize: '10 Marla',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value.name = ''
    form.value.message = ''
  }, 4000)
}
</script>
