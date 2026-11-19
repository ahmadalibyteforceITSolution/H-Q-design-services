<template>
  <div class="my-6 w-full flex flex-col items-center justify-center overflow-hidden">
    <!-- AdSense Policy Compliant Label -->
    <span class="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-500 mb-1.5 select-none">
      Advertisement
    </span>

    <!-- Ad Container -->
    <div 
      class="w-full flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/5 p-2 sm:p-4 text-center transition-all min-h-[100px] overflow-hidden"
      :class="containerClass"
    >
      <ins 
        class="adsbygoogle"
        style="display:block; text-align:center;"
        :style="customStyle"
        :data-ad-client="client"
        :data-ad-slot="slotId"
        :data-ad-format="format"
        :data-full-width-responsive="responsive ? 'true' : 'false'"
      ></ins>

      <!-- Clean Placeholder when live ad is pending approval -->
      <div v-if="!adLoaded" class="text-xs text-slate-400 dark:text-slate-600 font-semibold py-4 flex flex-col items-center gap-1.5">
        <i class="fa-solid fa-rectangle-ad text-lg text-[#C5A880]/50"></i>
        <span>Google AdSense Display Space</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const props = defineProps({
  client: {
    type: String,
    default: 'ca-pub-1888138480311828'
  },
  slotId: {
    type: String,
    default: ''
  },
  format: {
    type: String,
    default: 'auto'
  },
  responsive: {
    type: Boolean,
    default: true
  },
  containerClass: {
    type: String,
    default: ''
  },
  customStyle: {
    type: String,
    default: 'width:100%;'
  }
})

const adLoaded = ref(false)

onMounted(async () => {
  await nextTick()
  try {
    if (typeof window !== 'undefined') {
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
      adLoaded.value = true
    }
  } catch (e) {
    // AdSense handles ad loading gracefully
  }
})
</script>
