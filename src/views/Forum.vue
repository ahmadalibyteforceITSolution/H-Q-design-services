<template>
  <div class="space-y-12 pb-20">
    
    <!-- Hero Banner -->
    <section class="bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-900 border-b border-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div class="max-w-[1440px] mx-auto space-y-4 relative z-10">
        
        <div class="flex items-center gap-2 text-xs font-bold text-slate-400">
          <router-link to="/" class="hover:text-[#088C7E] transition-colors">Home</router-link>
          <span>/</span>
          <span class="text-white">Real Estate & Construction Community Forum</span>
        </div>

        <div class="max-w-3xl space-y-2">
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Real Estate & <span class="text-gradient-zameen">Architecture Q&A</span> Forum
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
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div class="space-y-1 text-center sm:text-left">
          <h2 class="text-lg font-black text-slate-900 dark:text-white">Have a question about plot construction or bylaws?</h2>
          <p class="text-xs text-slate-500">Get direct verified answers from H&Q Senior Architects within minutes.</p>
        </div>
        <button 
          @click="showAskModal = true"
          class="px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0"
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
            'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer',
            activeCategory === cat ? 'bg-[#088C7E] text-white shadow' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
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
          class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm hover:border-[#088C7E] transition-all"
        >
          
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-[#088C7E] font-black uppercase text-[10px]">
                {{ thread.category }}
              </span>
              <span v-if="thread.solved" class="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold text-[10px] flex items-center gap-1">
                <i class="fa-solid fa-check-circle"></i> Architect Answered
              </span>
            </div>
            <span class="text-slate-400">{{ thread.date }} · Posted by {{ thread.author }}</span>
          </div>

          <h3 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white hover:text-[#088C7E] transition-colors cursor-pointer">
            {{ thread.title }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ thread.excerpt }}
          </p>

          <!-- Verified Answer Box if present -->
          <div v-if="thread.bestAnswer" class="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-2 text-xs">
            <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-extrabold text-[11px] uppercase">
              <i class="fa-solid fa-certificate text-amber-500"></i>
              <span>Verified Answer from {{ thread.answeredBy }}</span>
            </div>
            <p class="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              {{ thread.bestAnswer }}
            </p>
          </div>

          <!-- Thread Stats Footbar -->
          <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-500">
            <div class="flex items-center gap-4">
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-thumbs-up text-[#088C7E]"></i> {{ thread.upvotes }} Upvotes</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-comments text-amber-500"></i> {{ thread.repliesCount }} Replies</span>
              <span class="flex items-center gap-1.5"><i class="fa-solid fa-eye"></i> {{ thread.views }} Views</span>
            </div>
            <button 
              @click="showAskModal = true"
              class="text-[#088C7E] hover:underline font-extrabold cursor-pointer"
            >
              Reply / Join Thread →
            </button>
          </div>

        </div>
      </div>

    </main>

    <!-- Ask Question Modal -->
    <div v-if="showAskModal" class="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-white shadow-2xl relative">
        <button @click="showAskModal = false" class="absolute top-4 right-4 text-slate-400 hover:text-white text-base">
          <i class="fa-solid fa-xmark"></i>
        </button>

        <div class="space-y-1">
          <h3 class="text-xl font-black">Ask Real Estate / Architectural Question</h3>
          <p class="text-xs text-slate-500">Our senior architects will publish a detailed response.</p>
        </div>

        <form @submit.prevent="showAskModal = false" class="space-y-4 text-xs font-bold">
          <div class="space-y-1">
            <label class="text-[11px] uppercase text-slate-400">Question Title</label>
            <input type="text" required placeholder="e.g. What is the height limit for a 10 Marla house in DHA Phase 6?" class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] uppercase text-slate-400">Category</label>
            <select class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
              <option>Construction & Architecture</option>
              <option>Investment Advice</option>
              <option>Bylaws & Legal</option>
              <option>Design Trends</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="text-[11px] uppercase text-slate-400">Your Question Details</label>
            <textarea rows="4" required placeholder="Provide more context regarding your plot, location, or construction requirement..." class="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"></textarea>
          </div>
          <button type="submit" class="w-full py-3 rounded-xl bg-[#088C7E] text-white font-black uppercase tracking-wider">
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

const activeCategory = ref('All Topics')
const showAskModal = ref(false)

const filteredThreads = computed(() => {
  if (activeCategory.value === 'All Topics') return forumThreadsData
  return forumThreadsData.filter(t => t.category === activeCategory.value)
})
</script>
