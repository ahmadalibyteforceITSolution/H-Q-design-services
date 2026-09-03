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

    <!-- Tier 3: Luxury Sanitary, Architectural Glass & Interior Partners -->
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

    <!-- Tier 4: Collaboration Inquiry Form / Panel -->
    <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-2xl space-y-6">
      <div class="max-w-3xl space-y-3">
        <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider">
          Vendor & Professional Outreach
        </span>
        <h3 class="text-2xl sm:text-3xl font-black text-white">
          Collaborate with H&Q Design Services
        </h3>
        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Are you a licensed structural engineering firm, certified building material supplier, smart-home automation integrator, or interior craftsman in Pakistan? We welcome project-level collaborations on our luxury residential and commercial developments.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
          <h4 class="font-bold text-[#088C7E] text-xs uppercase">Turnkey Construction</h4>
          <p class="text-[11px] text-slate-400">Sub-contracting for grey structure, waterproofing, and MEP installations.</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
          <h4 class="font-bold text-[#088C7E] text-xs uppercase">Bespoke Millwork & Marble</h4>
          <p class="text-[11px] text-slate-400">Custom cabinetry, Italian marble processing, and CNC stone dry-cladding.</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
          <h4 class="font-bold text-[#088C7E] text-xs uppercase">Architectural Glass & Automation</h4>
          <p class="text-[11px] text-slate-400">Low-E thermal break windows, motorized louvers, and smart home lighting.</p>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
        <a 
          href="https://wa.me/923416887454?text=Hello%20H%26Q%20Design%20Services!%20We%20would%20like%20to%20inquire%20about%20a%20professional%20vendor%20or%20engineering%20collaboration."
          target="_blank" 
          rel="noopener"
          class="px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center gap-2"
        >
          <i class="fa-brands fa-whatsapp text-sm"></i>
          <span>WhatsApp Procurement Desk</span>
        </a>
        <a 
          href="mailto:asadali28997@gmail.com?subject=Vendor%20Collaboration%20Inquiry%20-%20H%26Q%20Design%20Services"
          class="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border border-slate-700"
        >
          <i class="fa-solid fa-envelope text-sm"></i>
          <span>Email Partnership Proposal</span>
        </a>
      </div>
    </section>

  </div>
</template>

<script setup>
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
</script>
