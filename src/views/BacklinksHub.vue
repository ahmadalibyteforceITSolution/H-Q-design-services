<template>
  <div class="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
      <router-link to="/" class="hover:text-[#088C7E] flex items-center gap-1">
        <i class="fa-solid fa-house text-[10px]"></i> Home
      </router-link>
      <span>/</span>
      <span class="text-slate-900 dark:text-white font-semibold">Partners & Backlinks Hub</span>
    </nav>

    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="px-4 py-1.5 rounded-full text-xs font-black bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/20 uppercase tracking-widest">
        SEO Authority & Trust Network
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
        H&Q Partners & <span class="text-[#088C7E]">Backlinks Hub</span>
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Building high-authority relationships across Pakistan's real estate, architecture, construction, and lifestyle ecosystem. Swap backlinks, copy optimized embeds, or connect with our verified entities.
      </p>
    </div>

    <!-- Tier 1: Authority Stack (Entity Interlinking) -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Our High-Authority Domain Entity Profiles
        </h2>
        <p class="text-xs text-slate-500">
          Official verified H&Q Design Services entity listings across DA 90+ networks.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <a 
          v-for="profile in authorityProfiles" 
          :key="profile.name" 
          :href="profile.url" 
          target="_blank" 
          rel="noopener"
          class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 hover:border-[#088C7E] dark:hover:border-[#088C7E] transition-all hover:shadow-lg flex flex-col justify-between group space-y-4"
        >
          <div class="flex items-center justify-between">
            <span class="w-10 h-10 rounded-xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-lg">
              <i :class="profile.icon"></i>
            </span>
            <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase">
              DA {{ profile.da }}
            </span>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-sm group-hover:text-[#088C7E] transition-colors">
              {{ profile.name }}
            </h3>
            <p class="text-[11px] text-slate-400 leading-relaxed">
              {{ profile.description }}
            </p>
          </div>
          <span class="text-xs font-bold text-[#088C7E] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-slate-100 dark:border-slate-800/50">
            View Listing <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </span>
        </a>
      </div>
    </section>

    <!-- Tier 2: Link Exchange Embed Generator -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      
      <!-- Embed Code Panel -->
      <div class="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-6">
        <div class="space-y-2">
          <h3 class="text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-code text-[#088C7E]"></i> Copy Backlink Embed Code
          </h3>
          <p class="text-xs text-slate-500">
            Webmasters and blogging partners can embed the following HTML snippets on their websites to link back to H&Q.
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(code, idx) in embedCodes" :key="idx" class="space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-slate-700 dark:text-slate-300">{{ code.label }}</span>
              <button 
                @click="copySnippet(code.html, idx)"
                class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <i class="fa-solid" :class="copiedIdx === idx ? 'fa-circle-check text-emerald-500' : 'fa-copy'"></i>
                <span>{{ copiedIdx === idx ? 'Copied!' : 'Copy Code' }}</span>
              </button>
            </div>
            <pre class="p-3.5 rounded-xl bg-slate-900 text-slate-300 font-mono text-[11px] overflow-x-auto border border-slate-800"><code>{{ code.html }}</code></pre>
          </div>
        </div>
      </div>

      <!-- Exchange Program Overview -->
      <div class="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
        <div class="space-y-4">
          <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-wider">
            Link Swap Collaboration
          </span>
          <h3 class="text-2xl font-black text-white leading-snug">
            Partner With H&Q: Real Estate, Builders & Blogs
          </h3>
          <p class="text-xs text-slate-300 leading-relaxed">
            We are looking to trade links and publish guest articles with related websites in the Home Improvement, Architectural Visualization, Paint & Cement, Structural Engineering, and Pakistan Local Business Directory sectors.
          </p>
          <div class="space-y-2 text-xs text-slate-300">
            <p class="flex items-start gap-2">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5"></i>
              <span>High DR context backlinks passed through specialized anchor text.</span>
            </p>
            <p class="flex items-start gap-2">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5"></i>
              <span>Increase crawl rates of new blog pages and indexation speed.</span>
            </p>
            <p class="flex items-start gap-2">
              <i class="fa-solid fa-circle-check text-emerald-400 mt-0.5"></i>
              <span>Strict compliance with Google spam policies - no PBN links.</span>
            </p>
          </div>
        </div>

        <div class="space-y-4 pt-4 border-t border-slate-800">
          <p class="text-xs text-slate-400">
            To apply for a link exchange, send your site metrics and target landing page via WhatsApp or Email:
          </p>
          <div class="flex flex-wrap items-center gap-3">
            <a 
              href="https://wa.me/966507143124?text=Hello!+I+am+interested+in+a+backlink+exchange+with+H%26Q+Design+Services." 
              target="_blank" 
              rel="noopener"
              class="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase transition-all shadow-lg flex items-center gap-2"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>WhatsApp Link Desk</span>
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asadali28997@gmail.com&su=Backlink+Exchange+Request+-+H%26Q" 
              target="_blank"
              class="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase transition-all flex items-center gap-2 border border-slate-700"
            >
              <i class="fa-solid fa-envelope"></i>
              <span>Email Request</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tier 3: Partner Directory -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Verified Partner Domain Directory
        </h2>
        <p class="text-xs text-slate-500">
          Contextual partner sites collaborating with H&Q Design Services.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Ahmad Cloths Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase border border-indigo-500/20">
                Premium Fashion
              </span>
              <span class="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Follow Backlink
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">
              Ahmad Cloths
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Official lifestyle & fabric sponsor. Shop premium unstitched wash & wear gents wear, luxury latha, designer shalwar kameez, and festive cotton suits.
            </p>
          </div>
          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors border border-slate-700/50"
            title="Shop Luxury Gents Suits on Ahmad Cloths"
          >
            Visit Ahmad Cloths Website →
          </a>
        </div>

        <!-- Zameen Real Estate Portal Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase border border-emerald-500/20">
                Real Estate Partner
              </span>
              <span class="text-[10px] font-bold text-slate-400 uppercase">
                Industry Partner
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">
              Zameen.com Portal
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Pakistan's largest property portal. Search houses, commercial zones, plots, and housing projects on installments across major Pakistani cities.
            </p>
          </div>
          <a 
            href="https://www.zameen.com/" 
            target="_blank" 
            rel="noopener"
            class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors border border-slate-700/50"
            title="Browse properties on Zameen.com"
          >
            Search on Zameen.com →
          </a>
        </div>

        <!-- DHA Lahore Portal Card -->
        <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase border border-amber-500/20">
                Building bylaws
              </span>
              <span class="text-[10px] font-bold text-slate-400 uppercase">
                Municipal Authority
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">
              DHA Lahore Official
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Official Defence Housing Authority Lahore. Download construction bylaws, check transfer fees, view maps, and verify registration guidelines.
            </p>
          </div>
          <a 
            href="https://dhalahore.org/" 
            target="_blank" 
            rel="noopener"
            class="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold text-center block transition-colors border border-slate-700/50"
            title="Check DHA Lahore Bylaws & Maps"
          >
            Visit DHA Lahore website →
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const copiedIdx = ref(null)

const authorityProfiles = [
  {
    name: 'Zameen.com Profile',
    icon: 'fa-solid fa-house-chimney',
    da: '68',
    url: 'https://www.zameen.com/',
    description: 'Our primary partner portal showcasing 500+ luxury listings and plot maps.'
  },
  {
    name: 'LinkedIn Company',
    icon: 'fa-brands fa-linkedin-in',
    da: '98',
    url: 'https://www.linkedin.com/company/h-q-design-services/',
    description: 'Official corporate channel containing professional certifications and updates.'
  },
  {
    name: 'Behance Portfolio',
    icon: 'fa-brands fa-behance',
    da: '93',
    url: 'https://www.instagram.com/hq_design_services/?hl=en',
    description: 'High-resolution renders, elevations, architectural drawings, and luxury models.'
  },
  {
    name: 'Pinterest Board',
    icon: 'fa-brands fa-pinterest-p',
    da: '94',
    url: 'https://www.instagram.com/hq_design_services/?hl=en',
    description: 'Curated catalogs of luxury bedrooms, modern elevations, and classical structures.'
  },
  {
    name: 'YouTube Channel',
    icon: 'fa-brands fa-youtube',
    da: '99',
    url: 'https://www.youtube.com/@hqdesignservices',
    description: '4K commercial showreels, cinematic walkthroughs, and build site logs.'
  },
  {
    name: 'TikTok Desk',
    icon: 'fa-brands fa-tiktok',
    da: '97',
    url: 'https://www.tiktok.com/@hqdesignservices',
    description: 'Behind-the-scenes layout design reviews and short interior decoration tips.'
  },
  {
    name: 'Facebook Business',
    icon: 'fa-brands fa-facebook-f',
    da: '96',
    url: 'https://www.facebook.com/profile.php?id=100063665456115',
    description: 'Community interactions, design announcements, and client feedback logs.'
  },
  {
    name: 'Instagram Grid',
    icon: 'fa-brands fa-instagram',
    da: '93',
    url: 'https://www.instagram.com/hq_design_services/?hl=en',
    description: 'Visual showcase of daily spatial plans and live finishing projects.'
  }
]

const embedCodes = [
  {
    label: 'Anchor Text: Best Architects in Lahore',
    html: '<a href="https://h-q-design-services.vercel.app/" title="H&Q Design Services - Best Architects in Lahore">Best Architects in Lahore</a>'
  },
  {
    label: 'Anchor Text: House Construction Cost in Pakistan',
    html: '<a href="https://h-q-design-services.vercel.app/tools" title="Calculate House Construction Cost in Pakistan 2026">House Construction Cost in Pakistan</a>'
  },
  {
    label: 'Anchor Text: Modern House Front Elevations',
    html: '<a href="https://h-q-design-services.vercel.app/portfolio" title="Modern House Front Elevations & 3D Plans">Modern House Front Elevations</a>'
  }
]

const copySnippet = (text, idx) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text)
    copiedIdx.value = idx
    setTimeout(() => {
      if (copiedIdx.value === idx) {
        copiedIdx.value = null
      }
    }, 2000)
  }
}

onMounted(() => {
  // Inject custom local entity schemas
  const breadcrumbId = 'partners-breadcrumb-schema'
  let breadcrumbScript = document.getElementById(breadcrumbId)
  if (!breadcrumbScript && typeof document !== 'undefined') {
    breadcrumbScript = document.createElement('script')
    breadcrumbScript.setAttribute('id', breadcrumbId)
    breadcrumbScript.setAttribute('type', 'application/ld+json')
    breadcrumbScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://h-q-design-services.vercel.app/" },
        { "@type": "ListItem", "position": 2, "name": "Partners & Backlinks Hub", "item": "https://h-q-design-services.vercel.app/partners" }
      ]
    }, null, 2)
    document.head.appendChild(breadcrumbScript)
  }
})

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    const el = document.getElementById('partners-breadcrumb-schema')
    if (el) el.remove()
  }
})
</script>
