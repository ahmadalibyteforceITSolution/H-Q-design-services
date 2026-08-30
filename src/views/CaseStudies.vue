<template>
  <div class="py-12 space-y-16">
    
    <!-- Hero Header -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
            Architectural Case Studies & Outcomes
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Design Case Studies & <span class="text-gradient">Client Proof</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Detailed breakdowns of how H&Q Design Services solves complex spatial challenges, secures municipal approvals, and delivers award-winning interiors.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies List -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div 
        v-for="cs in caseStudies" 
        :key="cs.id"
        class="p-8 sm:p-10 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
      >
        <div class="lg:col-span-7 space-y-4">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold">{{ cs.location }}</span>
            <span class="text-xs text-slate-400">Scale: {{ cs.scale }}</span>
          </div>

          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{{ cs.title }}</h2>
          <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ cs.challenge }}</p>

          <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div class="font-bold text-emerald-400 uppercase tracking-wider">H&Q Technical Solution:</div>
            <p>{{ cs.solution }}</p>
          </div>

          <!-- Impact Metrics -->
          <div class="grid grid-cols-3 gap-3 pt-2">
            <div v-for="m in cs.metrics" :key="m.label" class="p-3 rounded-xl bg-emerald-500/10 text-center">
              <div class="text-lg font-bold text-emerald-600 dark:text-emerald-400">{{ m.val }}</div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400">{{ m.label }}</div>
            </div>
          </div>

          <div class="pt-2">
            <button 
              @click="$emit('open-start-project')"
              class="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              Discuss Similar Project →
            </button>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="rounded-2xl overflow-hidden h-80 border border-slate-200 dark:border-slate-800 shadow-xl">
            <img :src="cs.image" :alt="cs.title" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'

defineEmits(['open-start-project'])

const caseStudies = ref([
  {
    id: 1,
    title: 'Lake City 1 Kanal Luxury Modern Villa',
    location: 'Lake City, Lahore',
    scale: '1 Kanal (4,500 sq.ft)',
    challenge: 'The client required a contemporary open-plan floor design with maximum natural light while adhering strictly to Lake City structural setback bylaws.',
    solution: 'Designed a double-height central atrium with smart glass curtain walls, rainwater harvesting integration, and 4K VR walkthroughs prior to kickoff.',
    metrics: [
      { val: '100%', label: 'Approval Speed' },
      { val: '+45%', label: 'Natural Sunlight' },
      { val: 'Zero', label: 'Bylaw Rejections' }
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 2,
    title: 'DHA Phase 6 Executive Penthouse Renovation',
    location: 'DHA Phase 6, Lahore',
    scale: '3,800 sq.ft Penthouse',
    challenge: 'Outdated interior layout with dim lighting and cramped room dividers needed a complete modern luxury transformation.',
    solution: 'Removed non-structural partition walls to create an expansive lounge, installed Italian Statuario marble flooring, and added custom wood paneling.',
    metrics: [
      { val: '30 Days', label: 'Turnkey Handover' },
      { val: 'Custom', label: 'Italian Woodwork' },
      { val: '99.4%', label: 'Client Satisfaction' }
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  }
])
</script>
