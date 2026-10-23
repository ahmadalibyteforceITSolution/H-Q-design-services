<template>
  <div>
    <!-- Pop-up Lead Generation Modal (Tecture Architectural Studio Aesthetic) -->
    <Teleport to="body">
      <Transition name="lead-modal-fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
          @click.self="handleClose"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            class="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white dark:bg-[#0E131F] text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden transform transition-all my-auto animate-modal-scale"
          >
            <!-- Top Obsidian & Gold Header Banner -->
            <div class="shrink-0 relative bg-gradient-to-r from-[#0B0E14] via-[#161B26] to-[#0B0E14] px-5 sm:px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b border-[#C5A880]/20 overflow-hidden">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A880]/15 rounded-full blur-2xl pointer-events-none"></div>
              
              <div class="flex items-center gap-3 relative z-10">
                <img :src="logoImg" alt="H&Q Design Services" class="h-10 w-auto object-contain rounded-xl bg-white/10 p-1 border border-white/10" />
                <div>
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#C5A880]/15 text-[#DFC8A5] border border-[#C5A880]/30 uppercase tracking-wider">
                      Studio Consultation Desk
                    </span>
                    <span class="flex h-2 w-2 relative">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-[#C5A880]"></span>
                    </span>
                  </div>
                  <h3 id="modal-title" class="text-base sm:text-lg font-black tracking-tight mt-1 text-white">
                    Get Free Architectural Consultation
                  </h3>
                </div>
              </div>
              <button 
                @click="handleClose"
                class="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#C5A880] text-white/80 hover:text-[#0B0E14] flex items-center justify-center transition-all cursor-pointer text-sm font-bold border border-white/10"
                aria-label="Close form"
              >
                ✕
              </button>
            </div>

            <!-- Content Area -->
            <div class="p-5 sm:p-7 overflow-y-auto flex-1">
              <!-- Success State -->
              <div v-if="submitted" class="text-center py-6 sm:py-8 space-y-4">
                <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
                  <i class="fa-solid fa-check text-3xl"></i>
                </div>
                <h4 class="text-2xl font-black text-slate-900 dark:text-white">Inquiry Submitted Successfully!</h4>
                <p class="text-slate-600 dark:text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
                  Your project query has been sent to our team at <strong class="text-slate-900 dark:text-white">asadali28997@gmail.com</strong> and redirected to our WhatsApp desk (<strong class="text-[#8C6A38] dark:text-[#DFC8A5]">0313-4487315</strong>).
                </p>

                <!-- WhatsApp Redirect Button Fallback -->
                <div class="pt-3 space-y-2.5">
                  <a 
                    :href="whatsappUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                  >
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    <span>Chat on WhatsApp (0313-4487315)</span>
                  </a>
                  <button 
                    @click="handleClose"
                    class="w-full py-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                  >
                    Done &amp; Return to Website
                  </button>
                </div>
              </div>

              <!-- Form State (Phone, Email, Message) -->
              <div v-else class="space-y-4">
                <div class="space-y-1">
                  <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    Leave your contact details and project requirements. Our Senior Architects at <strong class="text-slate-900 dark:text-white">0313-4487315</strong> will respond promptly.
                  </p>
                </div>

                <form @submit.prevent="submitQuery" class="space-y-4 text-left">
                  <!-- Field 1: Phone / WhatsApp Number -->
                  <div>
                    <label class="flex items-center justify-between text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                      <span class="flex items-center gap-1.5">
                        <i class="fa-solid fa-phone text-[#C5A880] text-xs"></i>
                        Phone / WhatsApp Number <span class="text-rose-500">*</span>
                      </span>
                    </label>
                    <input 
                      v-model="form.phone"
                      type="tel"
                      required
                      placeholder="e.g. 0313-4487315"
                      class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-xs sm:text-sm transition-all font-medium shadow-sm"
                    />
                  </div>

                  <!-- Field 2: Email Address -->
                  <div>
                    <label class="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                      <i class="fa-solid fa-envelope text-[#C5A880] text-xs"></i>
                      Email Address <span class="text-rose-500">*</span>
                    </label>
                    <input 
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-xs sm:text-sm transition-all font-medium shadow-sm"
                    />
                  </div>

                  <!-- Field 3: Project Message / Query -->
                  <div>
                    <label class="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 dark:text-slate-200 mb-1.5">
                      <i class="fa-solid fa-message text-[#C5A880] text-xs"></i>
                      Project Query / Requirements <span class="text-rose-500">*</span>
                    </label>
                    <textarea 
                      v-model="form.message"
                      rows="3"
                      required
                      placeholder="Tell us about your plot size (e.g. 5 Marla, 10 Marla, 1 Kanal), location, or requirements (floor plan, 3D elevation, interior design, renovation)..."
                      class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 text-xs sm:text-sm transition-all font-medium resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <!-- Privacy & Trust Badges -->
                  <div class="py-2 px-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between text-[11px] text-slate-700 dark:text-slate-300 font-bold">
                    <span class="flex items-center gap-1.5">
                      <i class="fa-solid fa-shield-halved text-emerald-500"></i>
                      100% Privacy Protected
                    </span>
                    <span class="flex items-center gap-1.5">
                      <i class="fa-solid fa-bolt text-[#C5A880]"></i>
                      Instant Reply &amp; Quotation
                    </span>
                  </div>

                  <!-- Submit Button -->
                  <button 
                    type="submit" 
                    :disabled="loading"
                    class="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/30 disabled:opacity-75"
                  >
                    <span v-if="loading" class="inline-block animate-spin mr-1">⟳</span>
                    <i v-else class="fa-brands fa-whatsapp text-lg"></i>
                    <span>{{ loading ? 'Sending Inquiry...' : 'Submit Query & Send to WhatsApp (0313-4487315)' }}</span>
                  </button>

                  <div class="text-center pt-1">
                    <button 
                      type="button" 
                      @click="handleClose"
                      class="text-xs text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      Maybe later, browse website first
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Footer Strip -->
            <div class="px-6 py-3 bg-slate-100 dark:bg-[#0B0E14] border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-700 dark:text-slate-300 font-bold">
              <a href="tel:03134487315" class="flex items-center gap-1.5 hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">
                <i class="fa-solid fa-phone text-[#C5A880]"></i> 0313-4487315
              </a>
              <a href="mailto:asadali28997@gmail.com" class="flex items-center gap-1.5 hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">
                <i class="fa-solid fa-envelope text-[#C5A880]"></i> asadali28997@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Floating Reopen Pill Button (Lead Magnet when modal is closed - Desktop only) -->
    <div 
      v-if="!isOpen"
      class="hidden md:block fixed bottom-24 right-6 z-40 animate-fade-in"
    >
      <button 
        @click="openModal"
        class="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#121620]/95 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-[#C5A880]/40 cursor-pointer backdrop-blur-md"
        title="Get Free Architectural Consultation &amp; Quote"
      >
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C5A880]"></span>
        </span>
        <i class="fa-solid fa-pen-to-square text-xs text-[#DFC8A5] group-hover:rotate-12 transition-transform"></i>
        <span class="text-xs font-bold tracking-wide text-slate-100">Free Design Quote</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import logoImg from '../assets/logo.png'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'open'])

const form = reactive({
  phone: '',
  email: '',
  message: ''
})

const loading = ref(false)
const submitted = ref(false)
const whatsappUrl = ref('')

const handleClose = () => {
  emit('close')
}

const openModal = () => {
  emit('open')
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    handleClose()
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeyDown)
  }
})

const submitQuery = async () => {
  if (!form.phone || !form.email || !form.message) return

  loading.value = true

  const studioNumber = '923134487315'
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'H&Q Website'
  const pageTitle = typeof document !== 'undefined' ? document.title : 'Architectural Design Consultation'

  // 1. Build Pre-formatted WhatsApp message for Studio desk
  const waText = 
    `🏛️ *NEW ARCHITECTURAL INQUIRY (H&Q DESIGN SERVICES)*\n\n` +
    `📱 *Client Phone / WhatsApp:* ${form.phone}\n` +
    `✉️ *Client Email:* ${form.email}\n` +
    `💬 *Project Query & Details:*\n${form.message}\n\n` +
    `📍 *Page Source:* ${pageTitle}\n` +
    `🌐 *URL:* ${currentUrl}\n` +
    `⚡ *Sent via Website Quick Consultation Form*`

  whatsappUrl.value = `https://wa.me/${studioNumber}?text=${encodeURIComponent(waText)}`

  // 2. Submit to backend API (/api/contact)
  try {
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `Website Client (${form.phone})`,
        email: form.email,
        phone: form.phone,
        service: 'Quick Architectural Inquiry',
        location: 'Lahore / Pakistan / Overseas',
        message: form.message
      })
    }).catch(err => console.warn('Database logging warning:', err))
  } catch (err) {
    console.warn('API error:', err)
  }

  // 3. Submit directly to respective email: asadali28997@gmail.com
  try {
    fetch('https://formsubmit.co/ajax/asadali28997@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        _subject: `New Lead: ${form.phone} - Architectural Design Inquiry`,
        phone: form.phone,
        email: form.email,
        message: form.message,
        source_page: currentUrl,
        sent_to: 'asadali28997@gmail.com & WhatsApp (0313-4487315)'
      })
    }).catch(err => console.warn('Email dispatch warning:', err))
  } catch (err) {
    console.warn('Email error:', err)
  }

  // 4. Trigger WhatsApp redirection to 0313-4487315
  setTimeout(() => {
    loading.value = false
    submitted.value = true

    // Open WhatsApp in new tab/window
    try {
      window.open(whatsappUrl.value, '_blank')
    } catch (e) {
      console.warn('Popup blocked, using direct link:', e)
    }
  }, 400)
}
</script>

<style scoped>
.lead-modal-fade-enter-active,
.lead-modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.lead-modal-fade-enter-from,
.lead-modal-fade-leave-to {
  opacity: 0;
}

@keyframes modalScale {
  0% {
    transform: scale(0.92) translateY(12px);
    opacity: 0;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animate-modal-scale {
  animation: modalScale 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>