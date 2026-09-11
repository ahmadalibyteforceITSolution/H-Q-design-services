<template>
  <div class="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Breadcrumb -->
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs text-slate-500">
      <router-link to="/" class="hover:text-[#088C7E] flex items-center gap-1">
        <i class="fa-solid fa-house text-[10px]"></i> Home
      </router-link>
      <span>/</span>
      <span class="text-slate-900 dark:text-white font-semibold">Industry Partners & Collaborations</span>
    </nav>

    <!-- Header Section -->
    <div class="text-center max-w-3xl mx-auto space-y-4">
      <span class="px-4 py-1.5 rounded-full text-xs font-black bg-[#088C7E]/10 text-[#088C7E] border border-[#088C7E]/20 uppercase tracking-widest">
        Professional Network & Standards
      </span>
      <h1 class="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight">
        Industry Partners & <span class="text-[#088C7E]">Strategic Collaborations</span>
      </h1>
      <p class="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
        Delivering turnkey architectural excellence, structural safety, and luxury interiors through certified partnerships with Pakistan's leading engineering bodies, material manufacturers, and premium sanitary brands.
      </p>
    </div>

    <!-- Tier 1: Regulatory & Engineering Accreditations -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Professional Council & Regulatory Affiliations
        </h2>
        <p class="text-xs text-slate-500">
          Our senior design leads and structural vetting teams are fully licensed by statutory regulatory bodies in Pakistan.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div 
          v-for="aff in regulatoryAffiliations" 
          :key="aff.name"
          class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] dark:hover:border-[#088C7E] transition-all hover:shadow-lg flex flex-col justify-between space-y-4"
        >
          <div class="flex items-center justify-between">
            <span class="w-12 h-12 rounded-xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl">
              <i :class="aff.icon"></i>
            </span>
            <span class="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md uppercase">
              {{ aff.badge }}
            </span>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-base">
              {{ aff.name }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
              {{ aff.description }}
            </p>
          </div>
          <span class="text-xs font-semibold text-[#088C7E] pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check text-xs"></i> Verified Credential
          </span>
        </div>
      </div>
    </section>

    <!-- Tier 2: Certified Construction Materials & Structural Partners -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Certified Structural & Building Material Manufacturers
        </h2>
        <p class="text-xs text-slate-500">
          We specify only ASTM Grade 60 deformed rebar, certified ready-mix concrete, and laboratory-tested waterproofing chemicals.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="mat in materialPartners" 
          :key="mat.name"
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-[#088C7E]/10 text-[#088C7E] text-[10px] font-bold uppercase">
                {{ mat.category }}
              </span>
              <span class="text-[10px] font-bold text-slate-400 uppercase">
                ISO 9001 Standard
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-lg">
              {{ mat.name }}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ mat.description }}
            </p>
          </div>
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <i class="fa-solid fa-shield-halved text-[#088C7E]"></i>
            <span>{{ mat.spec }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tier 3: National Real Estate & Construction Portals -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Real Estate Portals & Property Intelligence Networks
        </h2>
        <p class="text-xs text-slate-500">
          Syndicating verified house designs, plot dimensions, and turnkey valuations across Pakistan's major real estate portals.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="portal in realEstatePortals" 
          :key="portal.name"
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4 hover:border-[#088C7E] transition-all hover:scale-[1.02]"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase">
                {{ portal.badge }}
              </span>
              <span class="text-[10px] font-bold text-slate-400">
                DA {{ portal.da }}
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-lg flex items-center gap-2">
              <i :class="portal.icon + ' text-[#088C7E]'"></i>
              <span>{{ portal.name }}</span>
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ portal.description }}
            </p>
          </div>
          <a 
            :href="portal.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs font-bold text-[#088C7E] hover:underline flex items-center justify-between"
          >
            <span>Explore Integration</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[11px]"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Tier 4: Luxury Sanitary, Architectural Glass & Interior Partners -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Sanitary Ware, Glazing & Smart Home Solutions
        </h2>
        <p class="text-xs text-slate-500">
          World-class finishings integrated seamlessly into our 3D visualization and turnkey villa deliverables.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          v-for="brand in luxuryBrands" 
          :key="brand.name"
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between space-y-4"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase">
                {{ brand.tag }}
              </span>
              <span class="text-[10px] font-bold text-emerald-500 uppercase">
                Approved Supplier
              </span>
            </div>
            <h3 class="font-extrabold text-slate-900 dark:text-white text-lg">
              {{ brand.name }}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ brand.description }}
            </p>
          </div>
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <i class="fa-solid fa-award text-amber-500"></i>
            <span>{{ brand.feature }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Tier 5: Global Architectural Design Networks & Portfolios -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          International Architecture Portals & Citation Networks
        </h2>
        <p class="text-xs text-slate-500">
          High-Domain-Authority global platforms featuring H&Q 3D elevation renders and luxury villa case studies.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div 
          v-for="network in globalNetworks" 
          :key="network.name"
          class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <i :class="network.icon + ' text-xl text-[#088C7E]'"></i>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                DA {{ network.da }}
              </span>
            </div>
            <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">{{ network.name }}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{{ network.description }}</p>
          </div>
          <a 
            :href="network.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800"
          >
            <span>View Network</span>
            <i class="fa-solid fa-arrow-right text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Tier 6: Reciprocal Backlink & Guest Posting Exchange Hub -->
    <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-2xl space-y-6">
      <div class="max-w-3xl space-y-3">
        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider">
          Organic & Inorganic Backlink Exchange
        </span>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          Reciprocal Backlinks & Guest Post Collaboration
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Are you a real estate portal, architecture blog, construction company, building material supplier, or home decor brand? Boost your domain authority and organic traffic by linking with H&Q Design Services.
        </p>
      </div>

      <!-- Embed Widget Code for Partners -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Option A: Text Anchor Link Badge -->
        <div class="space-y-2 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between text-xs text-slate-300 font-bold">
            <span class="text-[#088C7E]">Option 1: Backlink & Trust Badge</span>
            <span v-if="copiedSnippet" class="text-emerald-400 font-black">Copied!</span>
          </div>
          <p class="text-[11px] text-slate-400">Pinnable HTML badge with dofollow anchor text pointing to H&Q Lahore Studio.</p>
          <div class="relative">
            <textarea 
              readonly 
              rows="3"
              class="w-full font-mono text-[11px] p-3 rounded-xl bg-slate-950 border border-slate-700 text-emerald-400 focus:outline-none select-all"
              :value="embedSnippet"
            ></textarea>
            <button 
              @click="copyText(embedSnippet, 'snippet')"
              class="absolute right-2 bottom-3 px-3 py-1 rounded-lg bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-bold transition-all shadow cursor-pointer"
            >
              <i class="fa-solid fa-copy mr-1"></i> Copy Link
            </button>
          </div>
        </div>

        <!-- Option B: Full Interactive 2026 Construction Calculator Widget -->
        <div class="space-y-2 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div class="flex items-center justify-between text-xs text-slate-300 font-bold">
            <span class="text-amber-400">Option 2: Live Calculator iFrame (Traffic Magnet)</span>
            <span v-if="copiedWidget" class="text-emerald-400 font-black">Copied!</span>
          </div>
          <p class="text-[11px] text-slate-400">Embed our full live 2026 house cost calculator on your blog or portal. Passes referral traffic and brand authority.</p>
          <div class="relative">
            <textarea 
              readonly 
              rows="3"
              class="w-full font-mono text-[11px] p-3 rounded-xl bg-slate-950 border border-slate-700 text-amber-400 focus:outline-none select-all"
              :value="embedWidgetSnippet"
            ></textarea>
            <button 
              @click="copyText(embedWidgetSnippet, 'widget')"
              class="absolute right-2 bottom-3 px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow cursor-pointer"
            >
              <i class="fa-solid fa-code mr-1"></i> Copy Widget
            </button>
          </div>
        </div>
      </div>

      <!-- Live Widget Preview -->
      <div class="space-y-3 pt-4 border-t border-slate-800">
        <h4 class="text-xs uppercase font-bold text-slate-400 tracking-wider">Live Embed Preview on Partner Sites:</h4>
        <div class="w-full overflow-hidden rounded-2xl border border-slate-700">
          <iframe 
            src="/embed/calculator" 
            class="w-full h-[520px] border-0" 
            title="H&Q Construction Cost Calculator Widget"
          ></iframe>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
        <a 
          href="https://wa.me/923416887454?text=Hello%20H%26Q%20Design%20Services!%20I%20would%20like%20to%20exchange%20backlinks%20and%20guest%20posts%20with%20your%20website."
          target="_blank" 
          rel="noopener"
          class="px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer"
        >
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>WhatsApp Link Exchange</span>
        </a>
        <a 
          href="mailto:asadali28997@gmail.com?subject=Backlink%20and%20Guest%20Post%20Collaboration%20-%20H%26Q%20Design%20Services"
          class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border border-slate-700"
        >
          <i class="fa-solid fa-envelope text-sm"></i>
          <span>Email Partnership Proposal</span>
        </a>
      </div>
    </section>

    <!-- Tier 7: Top Pakistani Local Business Directories (Direct Referral & High-DA Citations) -->
    <section class="space-y-6">
      <div class="border-l-4 border-[#088C7E] pl-4">
        <h2 class="text-lg sm:text-2xl font-black text-slate-900 dark:text-white">
          Pakistan High-DA Directories & Local Citations
        </h2>
        <p class="text-xs text-slate-500">
          Verified business directories where H&Q's profile drives direct consumer inquiries and powerful dofollow SEO authority.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div 
          v-for="dir in localDirectories" 
          :key="dir.name"
          class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                {{ dir.type }}
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                DA {{ dir.da }}
              </span>
            </div>
            <h4 class="font-extrabold text-slate-900 dark:text-white text-sm">{{ dir.name }}</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{{ dir.description }}</p>
          </div>
          <a 
            :href="dir.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800"
          >
            <span>Submit / View Listing</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Comprehensive Internal Linking Network -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'

const copiedSnippet = ref(false)
const copiedWidget = ref(false)

const embedSnippet = `<a href="https://h-q-design-services.vercel.app/" target="_blank" rel="noopener">H&Q Design Services - Best Architects & Luxury Interior Designers in Lahore</a>`
const embedWidgetSnippet = `<iframe src="https://h-q-design-services.vercel.app/embed/calculator" width="100%" height="540" frameborder="0" style="border:none;border-radius:16px;max-width:850px;width:100%;display:block;margin:auto;"></iframe>`

const copyText = (text, type) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
    if (type === 'snippet') {
      copiedSnippet.value = true
      setTimeout(() => { copiedSnippet.value = false }, 3000)
    } else {
      copiedWidget.value = true
      setTimeout(() => { copiedWidget.value = false }, 3000)
    }
  }
}

const localDirectories = [
  {
    name: 'Google Business Profile (Google Maps)',
    type: 'Local Pack #1',
    da: '98',
    url: 'https://business.google.com',
    description: 'The single most powerful local search ranking asset in Lahore. Directly drives phone calls, direction requests, and site visits from nearby clients searching for architects.'
  },
  {
    name: 'YellowPages Pakistan',
    type: 'Business Citation',
    da: '68',
    url: 'https://www.yellowpages.com.pk',
    description: 'National business directory with high-authority trust signals, driving organic directory referral inquiries for engineering & architectural firms.'
  },
  {
    name: 'PakistanBizDir',
    type: 'Commercial Index',
    da: '55',
    url: 'https://www.pakistanbizdir.com',
    description: 'Comprehensive business directory covering corporate offices, building construction contractors, and interior decor suppliers across Punjab.'
  },
  {
    name: 'Yalwa Lahore Business Directory',
    type: 'City Directory',
    da: '62',
    url: 'https://lahore.yalwa.com.pk',
    description: 'City-specific directory connecting Lahore residents with certified local service providers, consultants, and architectural draughtsmen.'
  },
  {
    name: 'HamariWeb Business Directory',
    type: 'Portal Directory',
    da: '72',
    url: 'https://hamariweb.com',
    description: 'Prominent Pakistan portal directory with extensive audience reach across all major Pakistani metropolitan cities.'
  },
  {
    name: 'BusinessDirectory.pk',
    type: 'Verified Listing',
    da: '50',
    url: 'https://businessdirectory.pk',
    description: 'Dedicated directory for local Pakistani startups, architectural studios, and property development agencies.'
  }
]

const regulatoryAffiliations = [
  {
    name: 'PCATP Pakistan',
    badge: 'Statutory Body',
    icon: 'fa-solid fa-compass-drafting',
    description: 'Pakistan Council of Architects and Town Planners registration ensuring strictly compliant architectural designs and ethical practice.'
  },
  {
    name: 'PEC Registered Engineers',
    badge: 'Structural Safety',
    icon: 'fa-solid fa-building-columns',
    description: 'Pakistan Engineering Council certified structural vetting for earthquake Zone 2B compliance and soil load bearing vetting.'
  },
  {
    name: 'DHA Lahore Approved',
    badge: 'Municipal Authority',
    icon: 'fa-solid fa-city',
    description: 'Full municipal compliance with DHA Lahore building bylaws, compulsory open spaces (COS), and height clearance regulations.'
  },
  {
    name: 'LDA Compliant Submissions',
    badge: 'Town Planning',
    icon: 'fa-solid fa-map-location-dot',
    description: 'Lahore Development Authority approved architectural layouts, sewerage clearance certificates, and structural stability documentation.'
  }
]

const materialPartners = [
  {
    name: 'Mughal & Amreli Steels',
    category: 'Deformed Rebar',
    description: 'Prime ASTM A615 Grade 60 deformed steel bars providing maximum tensile strength and earthquake-resistant reinforcement for residential foundations and RCC slabs.',
    spec: 'ASTM A615 Grade 60 Standard'
  },
  {
    name: 'DG & Maple Leaf Cement',
    category: 'Structural Cement',
    description: 'Ordinary Portland Cement (OPC) and Sulphate Resistant Cement (SRC) for underground water tanks, retaining basement walls, and continuous raft foundations.',
    spec: 'High Early Strength OPC & SRC'
  },
  {
    name: 'Master Tiles & Ceramics',
    category: 'Glazed Porcelain',
    description: 'High-density glazed porcelain floor tiles (60x120cm, 80x160cm) and exterior rough textured stone-finish tiles for weather-resistant front facades.',
    spec: 'Zero Porosity Porcelain 60x120cm'
  }
]

const realEstatePortals = [
  {
    name: 'Zameen.com',
    badge: 'National Portal',
    da: '76',
    icon: 'fa-solid fa-building',
    url: 'https://www.zameen.com',
    description: "Pakistan's largest property portal. Cross-referencing DHA Lahore, Bahria Town, and Islamabad verified plot listings and construction rate benchmarks."
  },
  {
    name: 'Graana.com',
    badge: 'Smart Property',
    da: '52',
    icon: 'fa-solid fa-city',
    url: 'https://www.graana.com',
    description: "Digital real estate marketplace and advisory platform covering new housing projects, commercial plazas, and residential societies."
  },
  {
    name: 'OLX Pakistan Properties',
    badge: 'High Traffic',
    da: '78',
    icon: 'fa-solid fa-house-chimney',
    url: 'https://www.olx.com.pk/properties_c2',
    description: 'Direct consumer property marketplace for buying, selling, and leasing 5 Marla, 10 Marla, and 1 Kanal villas and commercial spaces in Lahore.'
  },
  {
    name: 'Lamudi Pakistan',
    badge: 'Regional Network',
    da: '60',
    icon: 'fa-solid fa-globe',
    url: 'https://www.lamudi.pk',
    description: 'Emerging real estate platform providing locality guides, developer directory listings, and property market price indices.'
  },
  {
    name: 'PakWheels Properties',
    badge: 'National Community',
    da: '64',
    icon: 'fa-solid fa-users',
    url: 'https://www.pakwheels.com',
    description: 'Community network and lifestyle portal connecting verified residential plots and executive housing projects across Punjab.'
  },
  {
    name: 'PropSure Digital Solutions',
    badge: 'Verification Tech',
    da: '48',
    icon: 'fa-solid fa-shield-halved',
    url: 'https://propsure.com.pk',
    description: 'Cadastral spatial mapping, regulatory title vetting, and approved society master plan digitization in Pakistan.'
  }
]

const luxuryBrands = [
  {
    name: 'Grohe & Kohler Sanitary',
    tag: 'German / US Luxury',
    description: 'Concealed thermostatic shower mixers, wall-hung rimless toilets, touchless sensor faucets, and matte black brassware for spa master bathrooms.',
    feature: '10-Year Anti-Limescale Warranty'
  },
  {
    name: 'Chawla Thermal-Break Aluminium',
    tag: 'Architectural Glazing',
    description: '1.6mm - 2.0mm powder-coated aluminum profiles with Low-E double-glazed insulated glass units (IGU) delivering 65% thermal insulation and noise suppression.',
    feature: 'Double-Glazed Soundproof Low-E'
  },
  {
    name: 'Schneider & Philips Automation',
    tag: 'Smart Home Living',
    description: 'Integrated home automation systems including mood lighting control, magnetic track lights, motorized curtain tracks, and smart video intercoms.',
    feature: 'Zigbee & App Smart Control'
  }
]

const globalNetworks = [
  {
    name: 'Houzz Architecture',
    da: '91',
    icon: 'fa-brands fa-houzz',
    url: 'https://www.houzz.com',
    description: 'Global authority platform for high-end residential architectural designs and luxury home interiors.'
  },
  {
    name: 'ArchDaily Global',
    da: '89',
    icon: 'fa-solid fa-cubes',
    url: 'https://www.archdaily.com',
    description: "The world's most visited architecture website showcasing contemporary facades, spatial plans, and materials."
  },
  {
    name: 'Behance Architecture',
    da: '93',
    icon: 'fa-brands fa-behance',
    url: 'https://www.behance.net',
    description: 'Adobe creative network showcasing 4K 3D elevation renderings and photorealistic architectural walk-throughs.'
  },
  {
    name: 'Pinterest Design Board',
    da: '94',
    icon: 'fa-brands fa-pinterest',
    url: 'https://www.pinterest.com',
    description: 'High-intent visual discovery engine driving thousands of daily organic impressions for luxury home decor.'
  }
]
</script>
