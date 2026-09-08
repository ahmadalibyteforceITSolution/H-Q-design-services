<template>
  <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-6">
    
    <!-- Top Trust & Google Rating Header Banner -->
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        <!-- Left: Rating Overview & Google Brand -->
        <div class="space-y-3">
          <div class="flex items-center gap-3 flex-wrap">
            <!-- Google Official Multi-Color "G" SVG Icon -->
            <div class="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-md shrink-0">
              <svg class="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>

            <div class="flex items-center gap-2">
              <span class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono">5.0</span>
              <div class="space-y-0.5">
                <div class="flex text-amber-400 text-base">
                  <i v-for="i in 5" :key="i" class="fa-solid fa-star"></i>
                </div>
                <div class="text-[11px] font-black uppercase tracking-wider text-[#088C7E] flex items-center gap-1">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>EXCELLENT · Verified Google Reviews</span>
                </div>
              </div>
            </div>

            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-[#088C7E] border border-emerald-500/30 hidden sm:inline-block">
              100% Recommended
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            What Clients Say About <span class="text-gradient-hq">H&Q Design Services</span>
          </h2>
          <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Authentic, verified reviews from homeowners, real estate developers, and overseas Pakistanis across DHA Lahore, Bahria Town, and Gulberg who trusted H&Q with their architectural dreams.
          </p>
        </div>

        <!-- Right: Action Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
          <!-- Write Review Button -->
          <a 
            :href="businessData.writeReviewUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-3 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#088C7E]/30 flex items-center justify-center gap-2 hover:scale-[1.02] cursor-pointer"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Write a Google Review</span>
          </a>

          <!-- View on Google Maps Button -->
          <a 
            :href="businessData.mapsUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-200 dark:border-slate-700"
          >
            <i class="fa-solid fa-map-location-dot text-amber-500"></i>
            <span>View on Google Maps</span>
          </a>
        </div>

      </div>

      <!-- Quick Trust Counters Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-bold">
        <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-award text-[#088C7E] text-base"></i>
          <span>5.0 Star Average</span>
        </div>
        <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-user-check text-[#088C7E] text-base"></i>
          <span>100% Real Clients</span>
        </div>
        <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-certificate text-amber-500 text-base"></i>
          <span>PEC & LDA Compliant</span>
        </div>
        <div class="flex items-center gap-2 text-slate-600 dark:text-slate-300">
          <i class="fa-solid fa-globe text-cyan-500 text-base"></i>
          <span>Overseas Friendly (KSA/UAE)</span>
        </div>
      </div>

    </div>

    <!-- Category Filter Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-extrabold">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeCategory = cat"
        :class="[
          'px-4 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer',
          activeCategory === cat 
            ? 'bg-[#088C7E] text-white shadow-md shadow-[#088C7E]/30' 
            : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Reviews Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      <div 
        v-for="review in filteredReviews" 
        :key="review.id"
        class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between space-y-4 group"
      >
        <!-- Reviewer Card Top -->
        <div class="space-y-3">
          
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-center gap-3">
              <!-- Avatar -->
              <div :class="['w-11 h-11 rounded-2xl text-white font-black text-sm flex items-center justify-center shadow-md shrink-0', review.profile_photo_color || 'bg-[#088C7E]']">
                {{ review.initials }}
              </div>
              <div>
                <h3 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors line-clamp-1">
                  {{ review.author_name }}
                </h3>
                <div class="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <i class="fa-solid fa-circle-check text-[#088C7E] text-[10px]"></i>
                  <span class="truncate">{{ review.author_title || 'Verified Client' }}</span>
                </div>
              </div>
            </div>

            <!-- Google G logo on each card -->
            <div class="w-6 h-6 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" title="Google Review">
              <svg viewBox="0 0 24 24" class="w-full h-full">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
            </div>
          </div>

          <!-- Star Rating & Time -->
          <div class="flex items-center justify-between text-xs pt-1">
            <div class="flex text-amber-400 gap-1 text-sm">
              <i v-for="i in review.rating" :key="i" class="fa-solid fa-star"></i>
            </div>
            <span class="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{{ review.relative_time_description }}</span>
          </div>

          <!-- Project Tag -->
          <div v-if="review.project_tag" class="pt-0.5">
            <span class="inline-block px-2.5 py-1 rounded-lg text-[10px] font-extrabold bg-slate-100 dark:bg-slate-800 text-[#088C7E] border border-emerald-500/20">
              <i class="fa-solid fa-compass-drafting mr-1"></i>{{ review.project_tag }}
            </span>
          </div>

          <!-- Review Content -->
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            "{{ review.text }}"
          </p>

        </div>

        <!-- Review Card Bottom Footbar -->
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold">
          <button 
            @click="likeReview(review.id)" 
            class="flex items-center gap-1.5 text-slate-400 hover:text-[#088C7E] transition-colors cursor-pointer"
            title="Helpful Review"
          >
            <i class="fa-regular fa-thumbs-up"></i>
            <span>Helpful ({{ review.likes }})</span>
          </button>

          <a 
            :href="businessData.mapsUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-[#088C7E] hover:underline flex items-center gap-1 text-[11px]"
          >
            <span>Verified on Maps</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </a>
        </div>

      </div>

      <!-- CTA Card: Are You An H&Q Client? -->
      <div class="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-xl flex flex-col justify-between space-y-4">
        <div class="space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-[#088C7E]/20 text-[#088C7E] border border-emerald-500/30 flex items-center justify-center text-xl">
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <h3 class="text-lg font-black text-white">
            Have you built with H&Q Design Services?
          </h3>
          <p class="text-xs text-slate-400 leading-relaxed">
            Your feedback inspires our architectural innovation! Share your experience with our floor plans, 3D elevations, and engineering services on Google.
          </p>
        </div>

        <a 
          :href="businessData.writeReviewUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="w-full py-3 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider text-center transition-all hover:scale-[1.02] shadow-lg shadow-[#088C7E]/30 flex items-center justify-center gap-2 cursor-pointer"
        >
          <i class="fa-solid fa-star text-amber-300"></i>
          <span>Leave a Review on Google</span>
        </a>
      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { 
  GOOGLE_BUSINESS, 
  initialGoogleReviews, 
  fetchGoogleReviews, 
  generateGoogleReviewSchema 
} from '../data/googleReviewsData.js'

const businessData = ref(GOOGLE_BUSINESS)
const reviews = ref(initialGoogleReviews)
const activeCategory = ref('All Reviews')

const categories = [
  'All Reviews',
  '3D Elevation',
  'Architectural Planning',
  'Luxury Interior',
  'Turnkey Construction',
  'Commercial'
]

const filteredReviews = computed(() => {
  if (activeCategory.value === 'All Reviews') {
    return reviews.value
  }
  return reviews.value.filter(r => r.category === activeCategory.value)
})

const likeReview = (id) => {
  const target = reviews.value.find(r => r.id === id)
  if (target) {
    target.likes++
  }
}

// Inject Google Rich Snippet JSON-LD structured data
try {
  const schema = generateGoogleReviewSchema(reviews.value)
  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(schema)
      }
    ]
  })
} catch (e) {
  // Graceful fallback if useHead context is not ready
}

onMounted(async () => {
  try {
    const data = await fetchGoogleReviews()
    if (data && data.reviews && data.reviews.length > 0) {
      reviews.value = data.reviews
      if (data.rating) businessData.value.rating = data.rating
      if (data.user_ratings_total) businessData.value.reviewCount = data.user_ratings_total
    }
  } catch (err) {
    // Graceful fallback to initial reviews
  }
})
</script>
