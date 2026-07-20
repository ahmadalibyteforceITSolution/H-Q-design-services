<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-md"
        @click.self="close"
      >
        <div 
          class="relative w-full max-w-2xl bg-white dark:bg-[#111827] text-slate-900 dark:text-slate-100 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transform transition-all my-8"
        >
          <!-- Top Bar -->
          <div class="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs">
                H&Q
              </div>
              <div>
                <h3 class="text-lg font-bold tracking-tight">Request Free Architectural Consultation</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Step {{ currentStep }} of 3 — Saudi Arabia & Lahore Studio</p>
              </div>
            </div>
            <button 
              @click="close"
              class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
            <div 
              class="bg-gradient-to-r from-emerald-500 to-amber-500 h-1.5 transition-all duration-300"
              :style="{ width: `${(currentStep / 3) * 100}%` }"
            ></div>
          </div>

          <!-- Form Content -->
          <div class="p-6 sm:p-8">
            <div v-if="submitted" class="text-center py-8 space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-2 animate-bounce">
                <i class="fa-brands fa-whatsapp text-3xl"></i>
              </div>
              <h3 class="text-2xl font-bold">Opening WhatsApp Chat...</h3>
              <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto text-sm">
                Thank you, <span class="font-semibold text-slate-900 dark:text-white">{{ form.name }}</span>! Opening WhatsApp to send your project details to <strong class="text-emerald-500">+966 50 714 3124</strong>.
              </p>
              <button 
                @click="resetAndClose"
                class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                Close Window
              </button>
            </div>

            <!-- Step 1: Service Selection -->
            <div v-else-if="currentStep === 1">
              <h4 class="text-xl font-bold mb-2">What service are you looking for?</h4>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Select your primary design or renovation requirement.</p>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div 
                  v-for="service in services" 
                  :key="service.id"
                  @click="form.service = service.title"
                  :class="[
                    'p-4 rounded-2xl border cursor-pointer transition-all flex items-center gap-3.5',
                    form.service === service.title 
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/30' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40'
                  ]"
                >
                  <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" v-html="service.svgPath"></svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-sm">{{ service.title }}</h5>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{{ service.desc }}</p>
                  </div>
                </div>
              </div>

              <div class="flex justify-end">
                <button 
                  @click="currentStep = 2"
                  :disabled="!form.service"
                  class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all flex items-center gap-2"
                >
                  Next: Plot Size & Scope →
                </button>
              </div>
            </div>

            <!-- Step 2: Plot Size & Budget -->
            <div v-else-if="currentStep === 2">
              <h4 class="text-xl font-bold mb-2">Plot Size & Project Location</h4>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Select your plot scale and society location in Lahore or Overseas.</p>

              <!-- Plot Size Options -->
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Plot Scale</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <button 
                  v-for="p in plotSizes" 
                  :key="p"
                  type="button"
                  @click="form.plotSize = p"
                  :class="[
                    'py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center',
                    form.plotSize === p 
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  ]"
                >
                  {{ p }}
                </button>
              </div>

              <!-- Location Options -->
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Project Location</label>
              <div class="grid grid-cols-3 gap-3 mb-8">
                <button 
                  v-for="loc in locationOptions" 
                  :key="loc"
                  type="button"
                  @click="form.location = loc"
                  :class="[
                    'py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center',
                    form.location === loc 
                      ? 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                  ]"
                >
                  {{ loc }}
                </button>
              </div>

              <div class="flex justify-between items-center">
                <button 
                  @click="currentStep = 1"
                  class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors"
                >
                  ← Back
                </button>
                <button 
                  @click="currentStep = 3"
                  :disabled="!form.plotSize || !form.location"
                  class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all flex items-center gap-2"
                >
                  Next: Your Contact Details →
                </button>
              </div>
            </div>

            <!-- Step 3: Contact Information -->
            <div v-else-if="currentStep === 3">
              <h4 class="text-xl font-bold mb-2">Where should we send your initial designs?</h4>
              <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Submitting will send all project details to Saudi Arabia WhatsApp desk (+966507143124).</p>

              <form @submit.prevent="submitForm" class="space-y-4 mb-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">Full Name *</label>
                    <input 
                      v-model="form.name" 
                      required 
                      type="text" 
                      placeholder="e.g. Asad Ali"
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">Phone / WhatsApp Number *</label>
                    <input 
                      v-model="form.phone" 
                      required 
                      type="tel" 
                      placeholder="0341-6887454"
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">Email Address</label>
                    <input 
                      v-model="form.email" 
                      type="email" 
                      placeholder="asadali2899@gmail.com"
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
                    />
                  </div>
                  <div>
                    <label class="block text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">Preferred Contact Time</label>
                    <select 
                      v-model="form.time" 
                      class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 5 PM)</option>
                      <option>Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-medium mb-1 text-slate-600 dark:text-slate-400">Design Vision / Requirements</label>
                  <textarea 
                    v-model="form.description" 
                    rows="3" 
                    placeholder="Tell us about your plot orientation, preferred architectural style (Modern Spanish, Minimalist, Classic), or interior budget..."
                    class="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:border-emerald-500 text-sm"
                  ></textarea>
                </div>

                <div class="flex justify-between items-center pt-2">
                  <button 
                    type="button"
                    @click="currentStep = 2"
                    class="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-sm transition-colors"
                  >
                    ← Back
                  </button>

                  <button 
                    type="submit"
                    :disabled="loading"
                    class="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
                  >
                    <i class="fa-brands fa-whatsapp text-lg"></i>
                    <span>Send Inquiry to WhatsApp (+966507143124)</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const currentStep = ref(1)
const submitted = ref(false)
const loading = ref(false)

const services = [
  { id: 'arch-design', title: 'Architecture Design', desc: 'Complete floor plans & structural elevation', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>' },
  { id: 'interior-design', title: 'Luxury Interior Design', desc: 'Custom furniture, lighting & decor styling', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>' },
  { id: '3d-render', title: '3D Visualization', desc: 'Photorealistic walkthroughs & 3D renders', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/>' },
  { id: 'space-planning', title: 'Space Planning', desc: 'Flow optimization for house & commercial', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>' },
  { id: 'renovation', title: 'Full Renovation', desc: 'Transform existing house or office', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>' },
  { id: 'furniture', title: 'Custom Furniture', desc: 'Bespoke woodwork & interior fittings', svgPath: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>' }
]

const plotSizes = ['5 Marla', '10 Marla', '1 Kanal', '2+ Kanal / Commercial']
const locationOptions = ['Parkview City', 'DHA Lahore', 'Gulberg', 'Bahria Town', 'Other Lahore', 'Saudi Arabia / Overseas']

const form = reactive({
  service: 'Architecture Design',
  plotSize: '10 Marla',
  location: 'Parkview City',
  name: '',
  phone: '',
  email: '',
  time: 'Morning (9 AM - 12 PM)',
  description: ''
})

const close = () => {
  emit('close')
}

const submitForm = () => {
  if (!form.name || !form.phone) return

  loading.value = true

  const waText = `*H&Q Design Services - Consultation Request* 🏛️\n\n` +
    `👤 *Client Name:* ${form.name}\n` +
    `📞 *Phone / WhatsApp:* ${form.phone}\n` +
    `✉️ *Email:* ${form.email || 'N/A'}\n` +
    `🏗️ *Service Required:* ${form.service}\n` +
    `📐 *Plot Scale:* ${form.plotSize}\n` +
    `📍 *Location:* ${form.location}\n` +
    `⏰ *Contact Time:* ${form.time}\n` +
    `📝 *Vision / Notes:* ${form.description || '3D consultation requested.'}`

  const targetUrl = `https://wa.me/966507143124?text=${encodeURIComponent(waText)}`

  setTimeout(() => {
    loading.value = false
    submitted.value = true
    window.open(targetUrl, '_blank')
  }, 400)
}

const resetAndClose = () => {
  submitted.value = false
  currentStep.value = 1
  close()
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
