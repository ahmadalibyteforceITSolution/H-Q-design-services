<template>
  <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 py-6">
    
    <!-- Top Trust & Google Rating Header Banner -->
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 shadow-xl space-y-6 transition-colors duration-300">
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
                <div class="text-[11px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <i class="fa-solid fa-circle-check"></i>
                  <span>EXCELLENT · Verified Google Reviews</span>
                </div>
              </div>
            </div>

            <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 hidden sm:inline-block">
              100% Recommended Studio
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            What Clients Say About <span class="text-gradient-gold">H&amp;Q Design Services</span>
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            Authentic, verified reviews from homeowners, real estate developers, and overseas Pakistanis across DHA Lahore, Bahria Town, and Gulberg who trusted H&amp;Q with their architectural dreams.
          </p>
        </div>

        <!-- Right: Action Buttons -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
          <!-- Write Review Button -->
          <a 
            :href="businessData.writeReviewUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-3 rounded-full tecture-btn-gold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Write a Google Review</span>
          </a>

          <!-- View on Google Maps Button -->
          <a 
            :href="businessData.mapsUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-5 py-3 rounded-full tecture-btn-outline text-xs flex items-center justify-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-map-location-dot text-[#C5A880]"></i>
            <span>View on Google Maps</span>
          </a>
        </div>

      </div>

      <!-- Quick Trust Counters Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-white/10 text-xs font-bold">
        <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-award text-[#C5A880] text-base"></i>
          <span>5.0 Star Average</span>
        </div>
        <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-user-check text-[#C5A880] text-base"></i>
          <span>100% Real Clients</span>
        </div>
        <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-certificate text-amber-500 text-base"></i>
          <span>PEC &amp; LDA Compliant</span>
        </div>
        <div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
          <i class="fa-solid fa-globe text-cyan-500 text-base"></i>
          <span>Overseas Friendly (KSA/UAE)</span>
        </div>
      </div>

    </div>

    <!-- Category Filter Tabs & Slider Controls Header -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      
      <!-- Category Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs font-extrabold max-w-full">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer text-xs font-bold border',
            activeCategory === cat 
              ? 'tecture-btn-gold border-[#C5A880] shadow-md' 
              : 'bg-white dark:bg-[#121620] text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200 dark:border-white/10'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Live Slider Indicator Pill -->
      <div class="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-400 shrink-0">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span class="text-[11px] uppercase tracking-wider">Live Slider · Moving Right to Left</span>
        <span class="text-[10px] text-slate-400 hidden lg:inline">(Hover to pause)</span>
      </div>

    </div>

    <!-- CONTINUOUS RIGHT-TO-LEFT REVIEWS SLIDER -->
    <div class="relative w-full overflow-hidden py-3 select-none">
      
      <!-- Left & Right Gradient Soft Fading Edges -->
      <div class="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-r from-[#F8F9FA] dark:from-[#0B0E14] to-transparent"></div>
      <div class="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-l from-[#F8F9FA] dark:from-[#0B0E14] to-transparent"></div>

      <!-- Continuous Infinite Slider Track (Always Moves Right-to-Left) -->
      <div class="animate-reviews-slider flex items-stretch gap-6">
        
        <div 
          v-for="(review, rIdx) in displayedReviews" 
          :key="'review-' + review.id + '-' + rIdx"
          class="w-[300px] sm:w-[370px] shrink-0 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-[#C5A880]/60 transition-all flex flex-col justify-between space-y-4 group"
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
                  <h3 class="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors line-clamp-1">
                    {{ review.author_name }}
                  </h3>
                  <div class="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
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
              <span class="inline-block px-2.5 py-1 rounded-lg text-[10px] font-extrabold bg-slate-100 dark:bg-white/5 text-[#8C6A38] dark:text-[#DFC8A5] border border-slate-200 dark:border-white/10">
                <i class="fa-solid fa-compass-drafting mr-1"></i>{{ review.project_tag }}
              </span>
            </div>

            <!-- Review Content -->
            <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal line-clamp-4">
              "{{ review.text }}"
            </p>

          </div>

          <!-- Review Card Bottom Footbar -->
          <div class="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-bold">
            <button 
              @click="likeReview(review.id)" 
              class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-[#C5A880] transition-colors cursor-pointer"
              title="Helpful Review"
            >
              <i class="fa-regular fa-thumbs-up"></i>
              <span>Helpful ({{ review.likes }})</span>
            </button>

            <a 
              :href="businessData.mapsUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-[#8C6A38] dark:text-[#DFC8A5] hover:underline flex items-center gap-1 text-[11px]"
            >
              <span>Verified on Maps</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
            </a>
          </div>

        </div>

      </div>

    </div>

    <!-- Client Invitation Card -->
    <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121620] border border-slate-200 dark:border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-2xl bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 flex items-center justify-center text-xl shrink-0">
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <div>
          <h4 class="text-base font-black text-slate-900 dark:text-white">
            Have you completed an architectural project with H&amp;Q?
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Your review helps future homeowners make informed decisions. Share your experience with our floor plans, 3D elevations, and engineering supervision.
          </p>
        </div>
      </div>

      <a 
        :href="businessData.writeReviewUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="px-6 py-3 rounded-full tecture-btn-gold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0 uppercase tracking-wider"
      >
        <i class="fa-solid fa-pen-to-square"></i>
        <span>Share Your Review</span>
      </a>
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

// Duplicate reviews to create a continuous gapless right-to-left marquee loop
const displayedReviews = computed(() => {
  const list = filteredReviews.value
  if (!list || list.length === 0) return []
  // Repeat to ensure smooth seamless right-to-left loop on all screen widths
  return [...list, ...list, ...list]
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