<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
    <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative my-8 text-slate-900 dark:text-white flex flex-col">
      
      <!-- Modal Header -->
      <div class="bg-[#088C7E] text-white p-6 relative flex items-center justify-between">
        <div class="space-y-1">
          <div class="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-200">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Property Management Portal</span>
          </div>
          <h2 class="text-xl sm:text-2xl font-black">Add Property / List Property</h2>
        </div>
        <button 
          @click="$emit('close')" 
          class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center text-base transition-colors cursor-pointer"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Form Body -->
      <div class="p-6 sm:p-8 space-y-6">
        <div v-if="submitted" class="p-8 text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-[#088C7E] flex items-center justify-center text-3xl mx-auto">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white">Submission Received Successfully!</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Our Senior Architectural Team and Property Desk will review your listing/requirements and contact you via WhatsApp/Phone within 15 minutes.
          </p>
          <button 
            @click="resetAndClose" 
            class="px-6 py-2.5 rounded-xl bg-[#088C7E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#066D62] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="space-y-4 text-xs font-bold">
          
          <!-- Requirement Type -->
          <div class="space-y-1.5">
            <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">I Want To</label>
            <div class="grid grid-cols-2 gap-2">
              <button 
                type="button" 
                v-for="purp in ['Sell Property', 'Rent Out']" 
                :key="purp"
                @click="form.purpose = purp"
                :class="[
                  'py-2.5 px-3 rounded-xl border text-center transition-all cursor-pointer text-xs',
                  form.purpose === purp ? 'bg-[#088C7E] text-white border-[#088C7E] shadow-sm' : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                ]"
              >
                {{ purp }}
              </button>
            </div>
          </div>

          <!-- Property / Plot Type & Size -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Property Type</label>
              <select v-model="form.type" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="Residential House / Villa">Residential House / Villa</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Commercial Plaza / Shop">Commercial Plaza / Shop</option>
                <option value="Apartment / Flat">Apartment / Flat</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Plot / Unit Size</label>
              <select v-model="form.size" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="3.5 Marla">3.5 Marla</option>
                <option value="5 Marla (25x45)">5 Marla (25x45)</option>
                <option value="10 Marla (35x70)">10 Marla (35x70)</option>
                <option value="1 Kanal (50x90)">1 Kanal (50x90)</option>
                <option value="2 Kanal or Commercial">2 Kanal / Commercial</option>
              </select>
            </div>
          </div>

          <!-- City & Locality -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">City</label>
              <select v-model="form.city" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]">
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
                <option value="Karachi">Karachi</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Society / Location</label>
              <input 
                v-model="form.location" 
                type="text" 
                required 
                placeholder="e.g. DHA Phase 6, Overseas Block" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              />
            </div>
          </div>

          <!-- Asking Price / Budget -->
          <div class="space-y-1.5">
            <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Expected Price / Design Budget (PKR)</label>
            <input 
              v-model="form.price" 
              type="text" 
              placeholder="e.g. 1.85 Crore or 50,000 for 3D layout" 
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
            />
          </div>

          <!-- Contact Details -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">Your Name</label>
              <input 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Full Name" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              />
            </div>

            <div class="space-y-1.5">
              <label class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">WhatsApp / Phone Number</label>
              <input 
                v-model="form.phone" 
                type="tel" 
                required 
                placeholder="0341-6887454" 
                class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button 
              type="submit" 
              class="w-full py-3.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#088C7E]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-paper-plane"></i>
              <span>Submit Property Listing</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const submitted = ref(false)
const form = ref({
  purpose: 'Sell Property',
  type: 'Residential House / Villa',
  size: '5 Marla (25x45)',
  city: 'Lahore',
  location: '',
  price: '',
  name: '',
  phone: ''
})

const handleSubmit = () => {
  submitted.value = true
}

const resetAndClose = () => {
  submitted.value = false
  form.value = {
    purpose: 'Sell Property',
    type: 'Residential House / Villa',
    size: '5 Marla (25x45)',
    city: 'Lahore',
    location: '',
    price: '',
    name: '',
    phone: ''
  }
  emit('close')
}
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
