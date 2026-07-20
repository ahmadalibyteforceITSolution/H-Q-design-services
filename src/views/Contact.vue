<template>
  <div class="py-12 space-y-16">
    
    <!-- Contact Hero (Zameen Style) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#088C7E]/20 text-[#088C7E] border border-[#088C7E]/40 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-headset text-amber-300"></i> Studio & Zameen Inquiry Desk
          </span>
          <h1 class="text-4xl sm:text-5xl font-black tracking-tight">
            Connect With Our <span class="text-gradient-zameen">Senior Architects</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Visit our architectural studio in Parkview City, Lahore or send an instant project inquiry. We respond within 1 business day.
          </p>
        </div>
      </div>
    </section>

    <!-- Studio Information Cards & Contact Form Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <!-- Left Column: Contact Cards -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Parkview City Studio Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div>
              <h3 class="text-lg font-black">Flagship Studio Location</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Parkview City, Lahore, Punjab, Pakistan</p>
            </div>
            <span class="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-bold border border-amber-500/20">
              <i class="fa-solid fa-award mr-1"></i> Zameen.com Official Partner Studio
            </span>
          </div>

          <!-- Phone Numbers Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div>
              <h3 class="text-lg font-black">Phone & WhatsApp Direct</h3>
              <div class="text-xs space-y-1.5 mt-2">
                <p class="flex items-center gap-2">
                  <span class="font-bold text-[#088C7E]">Pakistan Studio:</span>
                  <a href="tel:03134487315" class="hover:underline font-mono text-sm">0313-4487315</a>
                </p>
                <p class="flex items-center gap-2">
                  <span class="font-bold text-amber-500">Saudi Arabia (KSA):</span>
                  <a href="tel:+966507143124" class="hover:underline font-mono text-sm">+966 50 714 3124</a>
                </p>
              </div>
            </div>
          </div>

          <!-- Email & Working Hours Card -->
          <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div>
              <h3 class="text-lg font-black">Official Email & Studio Hours</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">asadali2899@gmail.com</p>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2">Monday – Saturday: 9:00 AM – 7:00 PM (PKT)</p>
            </div>
          </div>

          <!-- Quick WhatsApp CTA -->
          <a 
            href="https://wa.me/923134487315" 
            target="_blank"
            class="block p-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm text-center shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-xl"></i>
            <span>Chat Instantly on WhatsApp (0313-4487315)</span>
          </a>

        </div>

        <!-- Right Column: Interactive Consultation Form -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 class="text-2xl font-black">Send Project Inquiry</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Submit your plot details for a free 3D design quote from our chief architects.</p>
            </div>

            <form @submit.prevent="submitContact" class="space-y-4 text-xs">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold mb-1 text-slate-700 dark:text-slate-300">Your Full Name</label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    required 
                    placeholder="e.g. Asad Ali"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                  />
                </div>
                <div>
                  <label class="block font-bold mb-1 text-slate-700 dark:text-slate-300">Phone / WhatsApp Number</label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    required 
                    placeholder="0313-4487315"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                  />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block font-bold mb-1 text-slate-700 dark:text-slate-300">City / Housing Society</label>
                  <select 
                    v-model="form.location" 
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                  >
                    <option value="Parkview City">Parkview City, Lahore</option>
                    <option value="DHA Lahore">DHA Lahore</option>
                    <option value="Gulberg 3">Gulberg 3, Lahore</option>
                    <option value="Bahria Town">Bahria Town, Lahore</option>
                    <option value="Overseas">Overseas Client</option>
                  </select>
                </div>

                <div>
                  <label class="block font-bold mb-1 text-slate-700 dark:text-slate-300">Plot Scale</label>
                  <select 
                    v-model="form.plotSize" 
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                  >
                    <option value="5 Marla">5 Marla Villa</option>
                    <option value="10 Marla">10 Marla Luxury</option>
                    <option value="1 Kanal">1 Kanal Estate</option>
                    <option value="Commercial">Commercial Plaza</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block font-bold mb-1 text-slate-700 dark:text-slate-300">Project Requirements & Notes</label>
                <textarea 
                  v-model="form.message" 
                  rows="4" 
                  required
                  placeholder="Describe your design requirements (e.g., 5 Marla modern front elevation, 3D interior walkthrough, submission map)..."
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                ></textarea>
              </div>

              <button 
                type="submit"
                class="w-full py-4 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-paper-plane"></i>
                <span>Submit Inquiry to Architect</span>
              </button>
            </form>

            <div v-if="submitted" class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-bold text-center">
              <i class="fa-solid fa-circle-check mr-1"></i> Thank you! Your inquiry has been submitted. Opening WhatsApp...
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  location: 'Parkview City',
  plotSize: '10 Marla',
  message: ''
})

const submitted = ref(false)

const submitContact = () => {
  submitted.value = true
  const msg = `Hi H&Q Design Services! My name is ${form.value.name}. I am interested in a ${form.value.plotSize} project in ${form.value.location}. Notes: ${form.value.message}`
  const waUrl = `https://wa.me/923134487315?text=${encodeURIComponent(msg)}`
  
  setTimeout(() => {
    window.open(waUrl, '_blank')
    submitted.value = false
  }, 1500)
}
</script>
