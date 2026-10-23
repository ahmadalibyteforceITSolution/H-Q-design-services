<template>
  <div class="space-y-12 pb-20 bg-transparent text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- Hero Banner (Tecture Architectural Style) -->
    <section class="bg-gradient-to-br from-slate-900 via-[#121620] to-slate-900 border-b border-slate-800 dark:border-white/10 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#DFC8A5] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-[#DFC8A5]">Real Estate &amp; Construction Community Forum</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <span class="tecture-tag text-[#C5A880]">VERIFIED ARCHITECTURAL KNOWLEDGE BASE</span>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Real Estate &amp; <span class="text-gradient-gold">Architecture Q&amp;A</span> Forum
          </h1>
          <p class="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
            Ask questions about plot prices, construction material rates, LDA/DHA bylaws, and architectural layouts. Answered by certified engineers and fellow investors.
          </p>
        </div>

      </div>
    </section>

    <!-- Main Content & Threads List -->
    <main class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <!-- Ask Question Card & Filters -->
      <div class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div class="space-y-1 text-center sm:text-left">
          <h2 class="text-lg font-black text-slate-900 dark:text-white">Have a question about plot construction or bylaws?</h2>
          <p class="text-xs text-slate-600 dark:text-slate-400 font-medium">Get direct verified answers from H&amp;Q Senior Architects within minutes.</p>
        </div>
        <button 
          @click="showAskModal = true"
          class="px-6 py-3 rounded-full tecture-btn-gold text-xs font-black uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
        >
          <i class="fa-solid fa-plus"></i>
          <span>Ask a Question</span>
        </button>
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap items-center gap-2">
        <button 
          v-for="cat in ['All Topics', 'Construction & Architecture', 'Investment Advice', 'Bylaws & Legal', 'Design Trends']" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border',
            activeCategory === cat 
              ? 'tecture-btn-gold shadow-md border-[#C5A880]' 
              : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-[#C5A880]'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Threads List -->
      <div class="space-y-6">
        <div 
          v-for="thread in filteredThreads" 
          :key="thread.id"
          class="p-6 sm:p-8 rounded-3xl tecture-card border border-slate-200 dark:border-white/10 space-y-4 shadow-sm hover:border-[#C5A880] transition-all"
        >
          
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 font-black uppercase text-[10px]">
                {{ thread.category }}
              </span>
              <span v-if="thread.solved" class="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-[10px] flex items-center gap-1 border border-blue-500/20">
                <i class="fa-solid fa-check-circle"></i> Architect Answered
              </span>
            </div>
            <span class="text-slate-500 dark:text-slate-400 font-semibold">{{ thread.date }} · Posted by {{ thread.author }}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors cursor-pointer">
            {{ thread.title }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            {{ thread.excerpt }}
          </p>

          <!-- Verified Answer Box if present -->
          <div v-if="thread.bestAnswer" class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/30 space-y-2 text-xs">
            <div class="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-extrabold text-[11px] uppercase">
              <i class="fa-solid fa-certificate text-amber-500"></i>
              <span>Verified Answer from {{ thread.answeredBy }}</span>
            </div>
            <p class="text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {{ thread.bestAnswer }}
            </p>
          </div>

          <!-- Thread Stats Footbar -->
          <div class="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/10 text-xs font-bold text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-thumbs-up text-[#C5A880]"></i> {{ thread.upvotes }} Upvotes</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-comments text-amber-500"></i> {{ thread.repliesCount }} Replies</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> {{ thread.views }} Views</span>
            </div>
            <button 
              @click="showAskModal = true"
              class="text-[#8C6A38] dark:text-[#DFC8A5] hover:underline font-extrabold cursor-pointer"
            >
              Reply / Join Thread →
            </button>
          </div>

        </div>
      </div>

    </main>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

    <!-- Ask Question Modal -->
    <div v-if="showAskModal" class="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-white/10 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-white shadow-2xl relative animate-modal-scale">
        <button @click="showAskModal = false" class="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-[#C5A880] text-slate-500 dark:text-slate-400 hover:text-[#0B0E14] flex items-center justify-center font-bold text-sm cursor-pointer transition-colors">
          ✕
        </button>

        <div class="space-y-1">
          <span class="tecture-tag text-[#C5A880]">COMMUNITY FORUM DESK</span>
          <h3 class="text-xl font-black text-slate-900 dark:text-white">Ask Real Estate / Architectural Question</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 font-medium">Our senior architects will publish a detailed response.</p>
        </div>

        <form @submit.prevent="showAskModal = false" class="space-y-4 text-xs font-bold">
          <div class="space-y-1.5">
            <label class="text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-extrabold">Question Title</label>
            <input type="text" required placeholder="e.g. What is the height limit for a 10 Marla house in DHA Phase 6?" class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 font-medium" />
          </div>
          <div class="space-y-1.5">
            <label class="text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-extrabold">Category</label>
            <select class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 font-medium">
              <option>Construction &amp; Architecture</option>
              <option>Investment Advice</option>
              <option>Bylaws &amp; Legal</option>
              <option>Design Trends</option>
            </select>
          </div>
          <div class="space-y-1.5">
            <label class="text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-extrabold">Your Question Details</label>
            <textarea rows="4" required placeholder="Provide more context regarding your plot, location, or construction requirement..." class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-[#C5A880] focus:ring-2 focus:ring-[#C5A880]/20 font-medium resize-none"></textarea>
          </div>
          <button type="submit" class="w-full py-3.5 rounded-full tecture-btn-gold text-xs font-black uppercase tracking-wider transition-all shadow-md">
            Post Question to Community
          </button>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { forumThreadsData } from '../data/forumData.js'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'

const activeCategory = ref('All Topics')
const showAskModal = ref(false)

const filteredThreads = computed(() => {
  if (activeCategory.value === 'All Topics') return forumThreadsData
  return forumThreadsData.filter(t => t.category === activeCategory.value)
})
</script>