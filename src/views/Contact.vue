<template>
  <div class="py-12 space-y-16 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Header in Tecture Style -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="tecture-tag text-[#8C6A38] dark:text-[#DFC8A5] inline-flex items-center gap-2 bg-white dark:bg-[#121620] px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/10 shadow-sm">
        <i class="fa-solid fa-headset text-[#C5A880]"></i>
        <span>Lahore Studio Consultation Desk</span>
      </span>
      <h1 class="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
        Connect with Our <span class="text-gradient-gold">Senior Architects</span>
      </h1>
      <p class="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        Visit our studio in Lahore, Pakistan, or connect directly with our WhatsApp desk (0313-4487315) and Gmail team.
      </p>
    </div>

    <!-- Contact Cards Grid in Tecture Architectural Style -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <!-- Call Direct -->
      <div class="p-8 rounded-3xl tecture-card space-y-4 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
            <i class="fa-solid fa-phone"></i>
          </div>
          <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">Call Chief Architect</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">Direct phone line for quick plot inquiries &amp; 3D render consultations.</p>
        </div>
        <div class="pt-2">
          <a href="tel:03134487315" class="text-sm font-black text-[#8C6A38] dark:text-[#DFC8A5] hover:underline block font-mono">0313-4487315</a>
        </div>
      </div>

      <!-- WhatsApp Direct -->
      <div class="p-8 rounded-3xl tecture-card space-y-4 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">WhatsApp Direct Desk</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">Send plot dimensions or architectural sketches directly to our WhatsApp desk.</p>
        </div>
        <div class="pt-2">
          <button 
            type="button"
            @click="openWhatsApp('923134487315')" 
            class="px-4 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-2 shadow hover:bg-emerald-500 transition-colors w-full justify-center cursor-pointer border-0"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>

      <!-- Email Direct via Gmail -->
      <div class="p-8 rounded-3xl tecture-card space-y-4 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xl">
            <i class="fa-solid fa-envelope"></i>
          </div>
          <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">Official Gmail Inbox</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">Send blueprints, CAD files, or project RFPs directly to our Gmail inbox.</p>
        </div>
        <div class="pt-2">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=asadali28997@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-full tecture-btn-outline text-xs inline-flex items-center gap-2 w-full justify-center text-center"
          >
            <i class="fa-solid fa-paper-plane text-xs text-[#C5A880]"></i>
            <span>Open in Gmail</span>
          </a>
        </div>
      </div>

      <!-- Official LinkedIn Company Page -->
      <div class="p-8 rounded-3xl tecture-card space-y-4 flex flex-col justify-between group">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-2xl bg-[#0A66C2]/15 text-[#0A66C2] flex items-center justify-center text-xl">
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <h3 class="text-lg font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">Official LinkedIn</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">Follow our corporate profile, architectural updates, and career opportunities.</p>
        </div>
        <div class="pt-2">
          <a 
            href="https://www.linkedin.com/company/h-q-design-services/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-full bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-[#0A66C2] dark:text-white text-xs font-bold inline-flex items-center gap-2 border border-[#0A66C2]/30 w-full justify-center text-center transition-colors"
          >
            <i class="fa-brands fa-linkedin text-sm"></i>
            <span>Visit LinkedIn Page</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Contact Form & Map Section in Tecture Style -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      
      <!-- Inquiry Form -->
      <div class="p-8 sm:p-10 rounded-3xl tecture-card shadow-2xl space-y-6">
        <div class="space-y-1">
          <span class="tecture-tag text-[#C5A880]">PROJECT INQUIRY</span>
          <h3 class="text-2xl font-black text-slate-900 dark:text-white">Send Us Your Plot Details</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400">Submitting will send all project inquiry details directly to our WhatsApp (0313-4487315).</p>
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
                class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              />
            </div>

            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp *</label>
              <input 
                v-model="form.phone"
                type="tel" 
                required
                placeholder="0313-4487315" 
                class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] transition-colors"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">City / Society Location</label>
              <select 
                v-model="form.location"
                class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="DHA Lahore">DHA Lahore</option>
                <option value="Gulberg Lahore">Gulberg 3, Lahore</option>
                <option value="Bahria Town">Bahria Town, Lahore</option>
                <option value="Overseas Client (Saudi Arabia / UAE / UK)">Overseas Client (KSA / UAE / UK)</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Plot Size &amp; Scale</label>
              <select 
                v-model="form.plotSize"
                class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="5 Marla">5 Marla</option>
                <option value="10 Marla">10 Marla</option>
                <option value="1 Kanal">1 Kanal</option>
                <option value="Commercial Plaza">Commercial Plaza</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 dark:text-slate-300 mb-1">Project Details &amp; Requirements</label>
            <textarea 
              v-model="form.message"
              rows="4" 
              placeholder="Tell us about floor requirements, 3D render style preferences, or budget..." 
              class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] transition-colors"
            ></textarea>
          </div>

          <button 
            type="submit" 
            class="w-full py-4 rounded-full tecture-btn-gold text-xs shadow-xl cursor-pointer flex items-center justify-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-base"></i>
            <span>Send Details to WhatsApp (0313-4487315)</span>
          </button>
          
          <p v-if="submitted" class="text-xs text-center text-[#8C6A38] dark:text-[#DFC8A5] font-bold flex items-center justify-center gap-1">
            <i class="fa-solid fa-circle-check text-emerald-500"></i> Redirecting to WhatsApp (0313-4487315)...
          </p>
        </form>
      </div>

      <!-- Studio Google Maps in Tecture Frame -->
      <div class="rounded-3xl overflow-hidden border border-white/10 bg-[#121620] h-full min-h-[400px] relative shadow-2xl">
        <iframe 
          title="DHA Lahore Studio Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54455.0645607317!2d74.32688849999999!3d31.4807455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190603c7c61725%3A0xf3db69fecf1450a2!2sDHA%20Phase%206%20Lahore!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk" 
          class="w-full h-full border-0 min-h-[400px] grayscale contrast-125" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { openWhatsApp } from '../utils/whatsapp.js'

const form = ref({
  name: '',
  phone: '',
  location: 'DHA Lahore',
  plotSize: '10 Marla',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  if (!form.value.name || !form.value.phone) return

  submitted.value = true

  const waText = `*H&Q Design Services - New Website Inquiry* 🏛️\n\n` +
    `👤 *Client Name:* ${form.value.name}\n` +
    `📞 *Phone / WhatsApp:* ${form.value.phone}\n` +
    `📍 *Location:* ${form.value.location}\n` +
    `📐 *Plot Scale:* ${form.value.plotSize}\n` +
    `📝 *Details & Vision:* ${form.value.message || 'Floor plan & 3D render consultation requested.'}`

  setTimeout(() => {
    openWhatsApp('923134487315', waText)
    submitted.value = false
  }, 400)
}
</script>
