<template>
  <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-label="Internal Linking Directory">
    <div class="rounded-3xl bg-white dark:bg-[#0E131F] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white p-6 sm:p-10 shadow-xl space-y-8 transition-colors duration-300">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-[#C5A880]/15 text-[#8C6A38] dark:text-[#DFC8A5] border border-[#C5A880]/30 tracking-wider flex items-center gap-1.5 shadow-sm">
              <i class="fa-solid fa-network-wired text-[#C5A880]"></i>
              <span>Pakistan Real Estate &amp; Architecture Network (100+ Portals)</span>
            </span>
            <span class="text-xs font-bold text-slate-500 dark:text-slate-400">Complete Internal Linking Hub</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Explore <span class="text-gradient-gold">Architectural Services</span>, 3D Blueprints &amp; Verified Properties
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Quickly navigate across our comprehensive 100+ page ecosystem: 3D front elevations, verified property listings across Lahore, Islamabad, Rawalpindi &amp; Karachi, 2026 turnkey construction cost calculators, housing society bylaws, and regulatory citations.
          </p>
        </div>

        <router-link 
          to="/contact" 
          class="px-5 py-3 rounded-2xl tecture-btn-gold text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2 shrink-0 w-fit"
        >
          <i class="fa-solid fa-calendar-check"></i>
          <span>Book Architect Consultation →</span>
        </router-link>
      </div>

      <!-- 6-Column Mega Internal Linking Grid (100+ Links) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
        
        <!-- Category 1: Core Design & Architectural Hubs (16 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-compass-drafting text-[#C5A880]"></i>
            <span>Architecture &amp; Design Deliverables</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/services" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Architectural Design Services Lahore</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 3D Elevations &amp; Modern House Plans</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Completed Villa Case Studies</router-link></li>
            <li><router-link to="/reviews" class="text-amber-500 dark:text-amber-300 font-bold hover:underline">• Google Client Reviews (5.0 ★)</router-link></li>
            <li><router-link to="/about" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• About H&amp;Q Design Studio</router-link></li>
            <li><router-link to="/properties" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Verified Pakistan Properties Portal</router-link></li>
            <li><router-link to="/projects" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• New Housing Projects &amp; Master Communities</router-link></li>
            <li><router-link to="/area-guides" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Society Bylaws &amp; Area Guides</router-link></li>
            <li><router-link to="/trends" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Real Estate Price Index &amp; Trends 2026</router-link></li>
            <li><router-link to="/agents" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Licensed Architects &amp; Property Agents</router-link></li>
            <li><router-link to="/forum" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Community Real Estate Q&amp;A Forum</router-link></li>
            <li><router-link to="/partners" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Building Material Manufacturers &amp; Partners</router-link></li>
            <li><router-link to="/blog" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Architectural &amp; Real Estate Blog (2,000+)</router-link></li>
            <li><router-link to="/keywords-directory" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10-Cluster Keywords Glossary Hub</router-link></li>
            <li><router-link to="/contact" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Contact Studio &amp; Book Site Visit</router-link></li>
            <li><router-link to="/embed/calculator" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Free Embeddable Construction Calculator</router-link></li>
          </ul>
        </div>

        <!-- Category 2: Lahore Prime Housing Societies (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-tree-city text-[#C5A880]"></i>
            <span>Lahore Real Estate &amp; Societies</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/properties?city=Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Lahore Properties for Sale &amp; Rent</router-link></li>
            <li><router-link to="/area-guides?society=dha-lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Lahore Phase 1 to 9 Building Bylaws</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Houses for Sale in DHA Phase 5 Lahore</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10 Marla Spanish Villa in DHA Phase 6</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 1 Kanal Modern Palace in DHA Phase 7</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 2 Kanal Presidential Estate in DHA Phase 8</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 1 Kanal Residential Plot DHA Phase 9 Prism</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Lahore Sector C &amp; Sector E Houses</router-link></li>
            <li><router-link to="/area-guides?society=bahria-town-lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Lahore Master Guide &amp; Rates</router-link></li>
            <li><router-link to="/properties?society=Lake+City" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Lake City Lahore Golf Estate 10 Marla Villas</router-link></li>
            <li><router-link to="/properties?society=Park+View+City" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Park View City Lahore Crystal &amp; Tulip Plots</router-link></li>
            <li><router-link to="/properties?society=Gulberg+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Main Boulevard Gulberg III Commercial Plazas</router-link></li>
            <li><router-link to="/properties?society=Model+Town+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Model Town Lahore Heritage &amp; Spanish Villas</router-link></li>
            <li><router-link to="/properties?society=New+Lahore+City" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• New Lahore City Canal Road 3 &amp; 5 Marla Homes</router-link></li>
            <li><router-link to="/properties?society=Central+Park+Lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Central Park Ferozepur Road 10 Marla Plots</router-link></li>
            <li><router-link to="/keywords/interior-designers-in-lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Luxury Interior Designers in DHA Lahore</router-link></li>
            <li><router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Grey Structure Construction Cost in Lahore</router-link></li>
            <li><router-link to="/keywords/best-architects-in-lahore" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• PCATP Best Architects in Lahore Profile</router-link></li>
          </ul>
        </div>

        <!-- Category 3: Islamabad & Rawalpindi Societies (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-mountain-city text-[#C5A880]"></i>
            <span>Islamabad &amp; Rawalpindi Real Estate</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/properties?city=Islamabad" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Islamabad Luxury Houses &amp; Plots Portal</router-link></li>
            <li><router-link to="/properties?city=Rawalpindi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Rawalpindi Commercial &amp; Residential Real Estate</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Islamabad Phase 2 1 Kanal Designer Villa</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Phase 5 Islamabad Expressway 10 Marla Home</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Phase 1 Rawalpindi 1 Kanal Luxury House</router-link></li>
            <li><router-link to="/properties?society=Bahria+Enclave" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Enclave Islamabad Margalla View Homes</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Rawalpindi Phase 7 10 Marla Villa</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Phase 8 Double Storey 5 Marla House</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Civic Center Bahria Phase 4 Commercial Shops</router-link></li>
            <li><router-link to="/properties?society=Gulberg+Greens" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Gulberg Greens Islamabad 4 Kanal Luxury Farmhouse</router-link></li>
            <li><router-link to="/properties?society=Capital+Smart+City" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Capital Smart City Overseas Prime 10 Marla Plot</router-link></li>
            <li><router-link to="/properties?society=Faisal+Hills" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Faisal Hills Taxila Margalla View Residential Plots</router-link></li>
            <li><router-link to="/properties?society=Top+City-1" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Top City-1 Islamabad Airport Metro Connected Plots</router-link></li>
            <li><router-link to="/blog/cda-approved-societies-islamabad-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Complete List of CDA Approved Societies 2026</router-link></li>
            <li><router-link to="/blog/rda-approved-societies-rawalpindi-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• RDA Approved Housing Schemes in Rawalpindi</router-link></li>
            <li><router-link to="/blog/dha-islamabad-building-bylaws-guide" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Islamabad Compulsory Open Space Bylaws</router-link></li>
            <li><router-link to="/blog/capital-smart-city-noc-masterplan-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Capital Smart City Smart Villa Blueprints</router-link></li>
            <li><router-link to="/blog/bahria-enclave-islamabad-plot-rates-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Enclave Sector-wise Plot Price Trends</router-link></li>
          </ul>
        </div>

        <!-- Category 4: Karachi Prime Real Estate & Seafront Locations (16 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-water text-[#C5A880]"></i>
            <span>Karachi Coastal &amp; Prime Real Estate</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/properties?city=Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Karachi Verified Properties &amp; Luxury Apartments</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Karachi Precinct 1 250 Sq. Yds Villa</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Karachi Precinct 10A 125 Sq. Yds Home</router-link></li>
            <li><router-link to="/properties?society=DHA+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Karachi Phase 6 500 Sq. Yds Spanish Villa</router-link></li>
            <li><router-link to="/properties?society=DHA+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Phase 8 Marine Drive 1000 Sq. Yds Sea View Palace</router-link></li>
            <li><router-link to="/properties?society=Clifton+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Clifton Block 4 Sea View Luxury Condominium Flats</router-link></li>
            <li><router-link to="/properties?society=Scheme+33+Karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Scheme 33 Karachi 120 Sq. Yards Leased Plot</router-link></li>
            <li><router-link to="/blog/bahria-town-karachi-2026-rates-update" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bahria Town Karachi Current Market Rates 2026</router-link></li>
            <li><router-link to="/blog/dha-karachi-phase-8-plot-prices-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Karachi Phase 8 Beachfront Valuation Guide</router-link></li>
            <li><router-link to="/blog/sbca-approved-high-rise-projects-karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• SBCA Approved High-Rise Apartments in Clifton</router-link></li>
            <li><router-link to="/blog/scheme-33-karachi-noc-verification" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Scheme 33 KDA Sub-Registrar Lease Verification</router-link></li>
            <li><router-link to="/blog/construction-cost-in-karachi-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Construction Cost per Sq Ft in Karachi Coastal Climate</router-link></li>
            <li><router-link to="/keywords/interior-designers-in-karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Coastal Interior Design &amp; Anti-Rust Materials</router-link></li>
            <li><router-link to="/keywords/luxury-villas-karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bespoke Beach House Architectural Plans</router-link></li>
            <li><router-link to="/keywords/commercial-architects-karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• SBCA Compliant Commercial Complex Blueprints</router-link></li>
            <li><router-link to="/keywords/3d-elevation-karachi" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Contemporary Elevation Design for 120 &amp; 250 Sq Yds</router-link></li>
          </ul>
        </div>

        <!-- Category 5: House Plans, Blueprints & 3D Elevations (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-shapes text-[#C5A880]"></i>
            <span>3D Elevations &amp; House Map Plans</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/keywords/3-marla-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 3 Marla Modern Compact House Plan (20x35)</router-link></li>
            <li><router-link to="/keywords/5-marla-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 5 Marla Double Story House Design (25x45)</router-link></li>
            <li><router-link to="/keywords/5-marla-spanish-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 5 Marla Spanish Elevation with Rooftop Terrace</router-link></li>
            <li><router-link to="/keywords/7-marla-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 7 Marla Contemporary Luxury House Plan (30x50)</router-link></li>
            <li><router-link to="/keywords/10-marla-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10 Marla Double Story Family Layout (35x65)</router-link></li>
            <li><router-link to="/keywords/10-marla-spanish-villa" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10 Marla Spanish Villa with Swimming Pool</router-link></li>
            <li><router-link to="/keywords/1-kanal-house-plan" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 1 Kanal Modern Minimalist House Blueprint (50x90)</router-link></li>
            <li><router-link to="/keywords/1-kanal-classical-house" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 1 Kanal Classical Victorian Bungalow Elevation</router-link></li>
            <li><router-link to="/keywords/2-kanal-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 2 Kanal Presidential Palace &amp; Landscaped Estate</router-link></li>
            <li><router-link to="/keywords/corner-plot-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Corner Plot Double Front Elevation Solutions</router-link></li>
            <li><router-link to="/keywords/basement-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Full Basement Design with Waterproofing Details</router-link></li>
            <li><router-link to="/keywords/modern-front-elevation" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 2026 Modern Front Elevations with Rockwall &amp; Grooves</router-link></li>
            <li><router-link to="/keywords/spanish-front-elevation" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Spanish Front Elevation with Arches &amp; Terracotta Tiles</router-link></li>
            <li><router-link to="/keywords/commercial-plaza-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 4 &amp; 8 Marla Commercial Plaza Elevations</router-link></li>
            <li><router-link to="/keywords/farmhouse-design-pakistan" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Modern Farmhouse Plans for Islamabad &amp; Bedian Road</router-link></li>
            <li><router-link to="/keywords/swimming-pool-villa-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Luxury Villa with Indoor Heated Swimming Pool</router-link></li>
            <li><router-link to="/keywords/duplex-house-design" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Rental Friendly Dual Unit Duplex Floor Plans</router-link></li>
            <li><router-link to="/keywords/4k-photorealistic-renders" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 4K Day &amp; Night Photorealistic 3D Visualizations</router-link></li>
          </ul>
        </div>

        <!-- Category 6: 2026 Construction Costs, Calculators & Official Citations (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-50 dark:bg-[#121620] border border-slate-200 dark:border-white/10 space-y-3 hover:border-[#C5A880] transition-colors shadow-sm">
          <div class="flex items-center gap-2 text-sm font-black text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10 pb-2">
            <i class="fa-solid fa-calculator text-[#C5A880]"></i>
            <span>2026 Material Rates &amp; Official Citations</span>
          </div>
          <ul class="space-y-1.5 text-slate-600 dark:text-slate-300">
            <li><router-link to="/tools?tab=cost-calc" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] font-bold transition-colors">• 2026 Construction Cost Calculator (Turnkey &amp; Grey)</router-link></li>
            <li><router-link to="/tools?tab=unit-converter" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] font-bold transition-colors">• Marla, Kanal, Sq. Ft &amp; Sq. Yards Converter</router-link></li>
            <li><router-link to="/tools?tab=mortgage-calc" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] font-bold transition-colors">• Bank Islamic Home Finance EMI Calculator</router-link></li>
            <li><router-link to="/tools?tab=plot-finder" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] font-bold transition-colors">• Society Master Plot Finder &amp; Sector Maps</router-link></li>
            <li><router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Complete 5 Marla Construction Cost Breakdown 2026</router-link></li>
            <li><router-link to="/blog/10-marla-house-construction-cost-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10 Marla Turnkey Finishing Cost itemized BOQ</router-link></li>
            <li><router-link to="/blog/steel-rate-in-pakistan-today-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Mughal &amp; Amreli Grade 60 Steel Rate Today</router-link></li>
            <li><router-link to="/blog/cement-bag-price-in-pakistan-today" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Bestway, Lucky &amp; DG Khan Cement Bag Price Today</router-link></li>
            <li><router-link to="/blog/red-bricks-rate-lahore-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Awal Red Clay Bricks &amp; Ravi Sand Rates</router-link></li>
            <li><router-link to="/blog/solar-system-installation-cost-pakistan" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• 10kW On-Grid Solar System Net-Metering Cost</router-link></li>
            <li><router-link to="/blog/fbr-property-taxes-filer-vs-non-filer-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• FBR Advance Tax &amp; CVT Transfer Rates 2026</router-link></li>
            <li><router-link to="/blog/dha-lahore-building-bylaws-2026" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• DHA Lahore 2026 Building Bylaws &amp; Setbacks</router-link></li>
            <li><router-link to="/blog/lda-map-approval-process-guide" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• LDA Lahore Online Map Approval &amp; Completion NOC</router-link></li>
            <li><router-link to="/blog/cda-building-regulations-islamabad" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• CDA Islamabad Building Regulations &amp; Setbacks</router-link></li>
            <li><router-link to="/blog/fuel-subsidy-pakistan-2026-policy" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Government of Pakistan Fuel Subsidy Policy 2026</router-link></li>
            <li><router-link to="/privacy-policy" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Privacy Policy &amp; Google AdSense Compliance</router-link></li>
            <li><router-link to="/terms-of-service" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Terms of Service &amp; Architectural Copyrights</router-link></li>
            <li><router-link to="/disclaimer" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">• Material Rates &amp; Estimation Disclaimer</router-link></li>
          </ul>
        </div>

      </div>

      <!-- Verified National Authorities & Citations Footprint Banner -->
      <div class="pt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-stamp text-[#C5A880] text-sm"></i>
            <span class="font-black uppercase text-slate-900 dark:text-white tracking-wider">Official Pakistani Regulatory Standards &amp; Verified Citations:</span>
          </div>
          <span class="text-[11px] text-[#8C6A38] dark:text-[#DFC8A5] font-extrabold">100% Compliant with Municipal &amp; Engineering Codes</span>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-[11px]">
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">PCATP:</strong> Pakistan Council of Architects &amp; Town Planners
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">PEC:</strong> Pakistan Engineering Council Registered
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">LDA:</strong> Lahore Development Authority Approved
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">CDA:</strong> Capital Development Authority Islamabad
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">RDA:</strong> Rawalpindi Development Authority
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">SBCA:</strong> Sindh Building Control Authority
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">SBP:</strong> State Bank of Pakistan Islamic Mortgage Rules
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">FBR:</strong> Federal Board of Revenue Property Valuations
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
            <strong class="text-slate-900 dark:text-white">ASTM / ACI:</strong> Structural Concrete &amp; Steel Grade 60 Codes
          </span>
        </div>
      </div>

      <!-- Quick Action Contact & Hotlines Strip -->
      <div class="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex flex-wrap items-center gap-4 text-slate-500 dark:text-slate-400">
          <span class="font-extrabold text-slate-900 dark:text-slate-200">Quick Navigation:</span>
          <router-link to="/forum" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">Forum Q&amp;A</router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-[#8C6A38] dark:hover:text-[#DFC8A5] transition-colors">Industry Partners</router-link>
          <span>·</span>
          <router-link to="/reviews" class="text-amber-500 dark:text-amber-400 hover:underline font-bold">Google Reviews</router-link>
          <span>·</span>
          <router-link to="/privacy-policy" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Privacy</router-link>
          <span>·</span>
          <router-link to="/terms-of-service" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Terms</router-link>
          <span>·</span>
          <router-link to="/disclaimer" class="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Disclaimer</router-link>
        </div>

        <div class="flex items-center gap-3">
          <button 
            type="button"
            @click="openWhatsApp('923134487315', 'Assalam-o-Alaikum H&Q Design Services, I would like to consult with an architect.')" 
            class="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 cursor-pointer shadow-md transition-all border-0 text-xs"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Consultation</span>
          </button>
          <a 
            href="tel:03134487315" 
            class="px-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:border-[#C5A880] transition-all font-bold flex items-center gap-1.5 text-xs"
          >
            <i class="fa-solid fa-phone text-xs text-[#C5A880]"></i>
            <span>0313-4487315</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { openWhatsApp } from '../utils/whatsapp.js'
</script>