<template>
  <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10" aria-label="Internal Linking Directory">
    <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white p-6 sm:p-10 shadow-2xl space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-network-wired text-amber-300"></i>
              <span>Pakistan Real Estate & Architecture Network (100+ Portals)</span>
            </span>
            <span class="text-xs font-bold text-slate-400">Complete Internal Linking Hub</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Explore <span class="text-[#088C7E]">Architectural Services</span>, 3D Blueprints & Verified Properties
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 max-w-3xl leading-relaxed">
            Quickly navigate across our comprehensive 100+ page ecosystem: 3D front elevations, verified property listings across Lahore, Islamabad, Rawalpindi & Karachi, 2026 turnkey construction cost calculators, housing society bylaws, and regulatory citations.
          </p>
        </div>

        <router-link 
          to="/contact" 
          class="px-5 py-3 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2 shrink-0 w-fit"
        >
          <i class="fa-solid fa-calendar-check"></i>
          <span>Book Architect Consultation →</span>
        </router-link>
      </div>

      <!-- 6-Column Mega Internal Linking Grid (100+ Links) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
        
        <!-- Category 1: Core Design & Architectural Hubs (16 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i>
            <span>Architecture & Design Deliverables</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/services" class="hover:text-emerald-400">• Architectural Design Services Lahore</router-link></li>
            <li><router-link to="/portfolio" class="hover:text-emerald-400">• 3D Elevations & Modern House Plans</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-emerald-400">• Completed Villa Case Studies</router-link></li>
            <li><router-link to="/reviews" class="hover:text-amber-400 text-amber-300 font-semibold">• Google Client Reviews (5.0 ★)</router-link></li>
            <li><router-link to="/about" class="hover:text-emerald-400">• About H&amp;Q Design Studio</router-link></li>
            <li><router-link to="/properties" class="hover:text-emerald-400">• Verified Pakistan Properties Portal</router-link></li>
            <li><router-link to="/projects" class="hover:text-emerald-400">• New Housing Projects & Master Communities</router-link></li>
            <li><router-link to="/area-guides" class="hover:text-emerald-400">• Society Bylaws & Area Guides</router-link></li>
            <li><router-link to="/trends" class="hover:text-emerald-400">• Real Estate Price Index & Trends 2026</router-link></li>
            <li><router-link to="/agents" class="hover:text-emerald-400">• Licensed Architects & Property Agents</router-link></li>
            <li><router-link to="/forum" class="hover:text-emerald-400">• Community Real Estate Q&amp;A Forum</router-link></li>
            <li><router-link to="/partners" class="hover:text-emerald-400">• Building Material Manufacturers &amp; Partners</router-link></li>
            <li><router-link to="/blog" class="hover:text-emerald-400">• Architectural &amp; Real Estate Blog (2,000+)</router-link></li>
            <li><router-link to="/keywords-directory" class="hover:text-emerald-400">• 10-Cluster Keywords Glossary Hub</router-link></li>
            <li><router-link to="/contact" class="hover:text-emerald-400">• Contact Studio &amp; Book Site Visit</router-link></li>
            <li><router-link to="/embed/calculator" class="hover:text-emerald-400">• Free Embeddable Construction Calculator</router-link></li>
          </ul>
        </div>

        <!-- Category 2: Lahore Prime Housing Societies (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-tree-city text-[#088C7E]"></i>
            <span>Lahore Real Estate &amp; Societies</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/properties?city=Lahore" class="hover:text-emerald-400">• Lahore Properties for Sale &amp; Rent</router-link></li>
            <li><router-link to="/area-guides?society=dha-lahore" class="hover:text-emerald-400">• DHA Lahore Phase 1 to 9 Building Bylaws</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-emerald-400">• Houses for Sale in DHA Phase 5 Lahore</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-emerald-400">• 10 Marla Spanish Villa in DHA Phase 6</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-emerald-400">• 1 Kanal Modern Palace in DHA Phase 7</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-emerald-400">• 2 Kanal Presidential Estate in DHA Phase 8</router-link></li>
            <li><router-link to="/properties?society=DHA+Lahore" class="hover:text-emerald-400">• 1 Kanal Residential Plot DHA Phase 9 Prism</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town" class="hover:text-emerald-400">• Bahria Town Lahore Sector C &amp; Sector E Houses</router-link></li>
            <li><router-link to="/area-guides?society=bahria-town-lahore" class="hover:text-emerald-400">• Bahria Town Lahore Master Guide &amp; Rates</router-link></li>
            <li><router-link to="/properties?society=Lake+City" class="hover:text-emerald-400">• Lake City Lahore Golf Estate 10 Marla Villas</router-link></li>
            <li><router-link to="/properties?society=Park+View+City" class="hover:text-emerald-400">• Park View City Lahore Crystal &amp; Tulip Plots</router-link></li>
            <li><router-link to="/properties?society=Gulberg+Lahore" class="hover:text-emerald-400">• Main Boulevard Gulberg III Commercial Plazas</router-link></li>
            <li><router-link to="/properties?society=Model+Town+Lahore" class="hover:text-emerald-400">• Model Town Lahore Heritage &amp; Spanish Villas</router-link></li>
            <li><router-link to="/properties?society=New+Lahore+City" class="hover:text-emerald-400">• New Lahore City Canal Road 3 &amp; 5 Marla Homes</router-link></li>
            <li><router-link to="/properties?society=Central+Park+Lahore" class="hover:text-emerald-400">• Central Park Ferozepur Road 10 Marla Plots</router-link></li>
            <li><router-link to="/keywords/interior-designers-in-lahore" class="hover:text-emerald-400">• Luxury Interior Designers in DHA Lahore</router-link></li>
            <li><router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-emerald-400">• Grey Structure Construction Cost in Lahore</router-link></li>
            <li><router-link to="/keywords/best-architects-in-lahore" class="hover:text-emerald-400">• PCATP Best Architects in Lahore Profile</router-link></li>
          </ul>
        </div>

        <!-- Category 3: Islamabad & Rawalpindi Societies (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-mountain-city text-[#088C7E]"></i>
            <span>Islamabad &amp; Rawalpindi Real Estate</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/properties?city=Islamabad" class="hover:text-emerald-400">• Islamabad Luxury Houses &amp; Plots Portal</router-link></li>
            <li><router-link to="/properties?city=Rawalpindi" class="hover:text-emerald-400">• Rawalpindi Commercial &amp; Residential Real Estate</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-emerald-400">• DHA Islamabad Phase 2 1 Kanal Designer Villa</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-emerald-400">• DHA Phase 5 Islamabad Expressway 10 Marla Home</router-link></li>
            <li><router-link to="/properties?society=DHA+Islamabad" class="hover:text-emerald-400">• DHA Phase 1 Rawalpindi 1 Kanal Luxury House</router-link></li>
            <li><router-link to="/properties?society=Bahria+Enclave" class="hover:text-emerald-400">• Bahria Enclave Islamabad Margalla View Homes</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-emerald-400">• Bahria Town Rawalpindi Phase 7 10 Marla Villa</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-emerald-400">• Bahria Town Phase 8 Double Storey 5 Marla House</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Rawalpindi" class="hover:text-emerald-400">• Civic Center Bahria Phase 4 Commercial Shops</router-link></li>
            <li><router-link to="/properties?society=Gulberg+Greens" class="hover:text-emerald-400">• Gulberg Greens Islamabad 4 Kanal Luxury Farmhouse</router-link></li>
            <li><router-link to="/properties?society=Capital+Smart+City" class="hover:text-emerald-400">• Capital Smart City Overseas Prime 10 Marla Plot</router-link></li>
            <li><router-link to="/properties?society=Faisal+Hills" class="hover:text-emerald-400">• Faisal Hills Taxila Margalla View Residential Plots</router-link></li>
            <li><router-link to="/properties?society=Top+City-1" class="hover:text-emerald-400">• Top City-1 Islamabad Airport Metro Connected Plots</router-link></li>
            <li><router-link to="/blog/cda-approved-societies-islamabad-2026" class="hover:text-emerald-400">• Complete List of CDA Approved Societies 2026</router-link></li>
            <li><router-link to="/blog/rda-approved-societies-rawalpindi-2026" class="hover:text-emerald-400">• RDA Approved Housing Schemes in Rawalpindi</router-link></li>
            <li><router-link to="/blog/dha-islamabad-building-bylaws-guide" class="hover:text-emerald-400">• DHA Islamabad Compulsory Open Space Bylaws</router-link></li>
            <li><router-link to="/blog/capital-smart-city-noc-masterplan-2026" class="hover:text-emerald-400">• Capital Smart City Smart Villa Blueprints</router-link></li>
            <li><router-link to="/blog/bahria-enclave-islamabad-plot-rates-2026" class="hover:text-emerald-400">• Bahria Enclave Sector-wise Plot Price Trends</router-link></li>
          </ul>
        </div>

        <!-- Category 4: Karachi Prime Real Estate & Seafront Locations (16 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-water text-[#088C7E]"></i>
            <span>Karachi Coastal &amp; Prime Real Estate</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/properties?city=Karachi" class="hover:text-emerald-400">• Karachi Verified Properties &amp; Luxury Apartments</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Karachi" class="hover:text-emerald-400">• Bahria Town Karachi Precinct 1 250 Sq. Yds Villa</router-link></li>
            <li><router-link to="/properties?society=Bahria+Town+Karachi" class="hover:text-emerald-400">• Bahria Town Karachi Precinct 10A 125 Sq. Yds Home</router-link></li>
            <li><router-link to="/properties?society=DHA+Karachi" class="hover:text-emerald-400">• DHA Karachi Phase 6 500 Sq. Yds Spanish Villa</router-link></li>
            <li><router-link to="/properties?society=DHA+Karachi" class="hover:text-emerald-400">• DHA Phase 8 Marine Drive 1000 Sq. Yds Sea View Palace</router-link></li>
            <li><router-link to="/properties?society=Clifton+Karachi" class="hover:text-emerald-400">• Clifton Block 4 Sea View Luxury Condominium Flats</router-link></li>
            <li><router-link to="/properties?society=Scheme+33+Karachi" class="hover:text-emerald-400">• Scheme 33 Karachi 120 Sq. Yards Leased Plot</router-link></li>
            <li><router-link to="/blog/bahria-town-karachi-2026-rates-update" class="hover:text-emerald-400">• Bahria Town Karachi Current Market Rates 2026</router-link></li>
            <li><router-link to="/blog/dha-karachi-phase-8-plot-prices-2026" class="hover:text-emerald-400">• DHA Karachi Phase 8 Beachfront Valuation Guide</router-link></li>
            <li><router-link to="/blog/sbca-approved-high-rise-projects-karachi" class="hover:text-emerald-400">• SBCA Approved High-Rise Apartments in Clifton</router-link></li>
            <li><router-link to="/blog/scheme-33-karachi-noc-verification" class="hover:text-emerald-400">• Scheme 33 KDA Sub-Registrar Lease Verification</router-link></li>
            <li><router-link to="/blog/construction-cost-in-karachi-2026" class="hover:text-emerald-400">• Construction Cost per Sq Ft in Karachi Coastal Climate</router-link></li>
            <li><router-link to="/keywords/interior-designers-in-karachi" class="hover:text-emerald-400">• Coastal Interior Design &amp; Anti-Rust Materials</router-link></li>
            <li><router-link to="/keywords/luxury-villas-karachi" class="hover:text-emerald-400">• Bespoke Beach House Architectural Plans</router-link></li>
            <li><router-link to="/keywords/commercial-architects-karachi" class="hover:text-emerald-400">• SBCA Compliant Commercial Complex Blueprints</router-link></li>
            <li><router-link to="/keywords/3d-elevation-karachi" class="hover:text-emerald-400">• Contemporary Elevation Design for 120 &amp; 250 Sq Yds</router-link></li>
          </ul>
        </div>

        <!-- Category 5: House Plans, Blueprints & 3D Elevations (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-shapes text-[#088C7E]"></i>
            <span>3D Elevations &amp; House Map Plans</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/keywords/3-marla-house-design" class="hover:text-emerald-400">• 3 Marla Modern Compact House Plan (20x35)</router-link></li>
            <li><router-link to="/keywords/5-marla-house-design" class="hover:text-emerald-400">• 5 Marla Double Story House Design (25x45)</router-link></li>
            <li><router-link to="/keywords/5-marla-spanish-house-design" class="hover:text-emerald-400">• 5 Marla Spanish Elevation with Rooftop Terrace</router-link></li>
            <li><router-link to="/keywords/7-marla-house-design" class="hover:text-emerald-400">• 7 Marla Contemporary Luxury House Plan (30x50)</router-link></li>
            <li><router-link to="/keywords/10-marla-house-design" class="hover:text-emerald-400">• 10 Marla Double Story Family Layout (35x65)</router-link></li>
            <li><router-link to="/keywords/10-marla-spanish-villa" class="hover:text-emerald-400">• 10 Marla Spanish Villa with Swimming Pool</router-link></li>
            <li><router-link to="/keywords/1-kanal-house-plan" class="hover:text-emerald-400">• 1 Kanal Modern Minimalist House Blueprint (50x90)</router-link></li>
            <li><router-link to="/keywords/1-kanal-classical-house" class="hover:text-emerald-400">• 1 Kanal Classical Victorian Bungalow Elevation</router-link></li>
            <li><router-link to="/keywords/2-kanal-house-design" class="hover:text-emerald-400">• 2 Kanal Presidential Palace &amp; Landscaped Estate</router-link></li>
            <li><router-link to="/keywords/corner-plot-house-design" class="hover:text-emerald-400">• Corner Plot Double Front Elevation Solutions</router-link></li>
            <li><router-link to="/keywords/basement-house-design" class="hover:text-emerald-400">• Full Basement Design with Waterproofing Details</router-link></li>
            <li><router-link to="/keywords/modern-front-elevation" class="hover:text-emerald-400">• 2026 Modern Front Elevations with Rockwall &amp; Grooves</router-link></li>
            <li><router-link to="/keywords/spanish-front-elevation" class="hover:text-emerald-400">• Spanish Front Elevation with Arches &amp; Terracotta Tiles</router-link></li>
            <li><router-link to="/keywords/commercial-plaza-design" class="hover:text-emerald-400">• 4 &amp; 8 Marla Commercial Plaza Elevations</router-link></li>
            <li><router-link to="/keywords/farmhouse-design-pakistan" class="hover:text-emerald-400">• Modern Farmhouse Plans for Islamabad &amp; Bedian Road</router-link></li>
            <li><router-link to="/keywords/swimming-pool-villa-design" class="hover:text-emerald-400">• Luxury Villa with Indoor Heated Swimming Pool</router-link></li>
            <li><router-link to="/keywords/duplex-house-design" class="hover:text-emerald-400">• Rental Friendly Dual Unit Duplex Floor Plans</router-link></li>
            <li><router-link to="/keywords/4k-photorealistic-renders" class="hover:text-emerald-400">• 4K Day &amp; Night Photorealistic 3D Visualizations</router-link></li>
          </ul>
        </div>

        <!-- Category 6: 2026 Construction Costs, Calculators & Official Citations (18 Links) -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 hover:border-[#088C7E] transition-colors">
          <div class="flex items-center gap-2 text-sm font-black text-white border-b border-slate-800 pb-2">
            <i class="fa-solid fa-calculator text-[#088C7E]"></i>
            <span>2026 Material Rates &amp; Official Citations</span>
          </div>
          <ul class="space-y-1.5 text-slate-300">
            <li><router-link to="/tools?tab=cost-calc" class="hover:text-emerald-400 font-bold">• 2026 Construction Cost Calculator (Turnkey &amp; Grey)</router-link></li>
            <li><router-link to="/tools?tab=unit-converter" class="hover:text-emerald-400 font-bold">• Marla, Kanal, Sq. Ft &amp; Sq. Yards Converter</router-link></li>
            <li><router-link to="/tools?tab=mortgage-calc" class="hover:text-emerald-400 font-bold">• Bank Islamic Home Finance EMI Calculator</router-link></li>
            <li><router-link to="/tools?tab=plot-finder" class="hover:text-emerald-400 font-bold">• Society Master Plot Finder &amp; Sector Maps</router-link></li>
            <li><router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-emerald-400">• Complete 5 Marla Construction Cost Breakdown 2026</router-link></li>
            <li><router-link to="/blog/10-marla-house-construction-cost-2026" class="hover:text-emerald-400">• 10 Marla Turnkey Finishing Cost itemized BOQ</router-link></li>
            <li><router-link to="/blog/steel-rate-in-pakistan-today-2026" class="hover:text-emerald-400">• Mughal &amp; Amreli Grade 60 Steel Rate Today</router-link></li>
            <li><router-link to="/blog/cement-bag-price-in-pakistan-today" class="hover:text-emerald-400">• Bestway, Lucky &amp; DG Khan Cement Bag Price Today</router-link></li>
            <li><router-link to="/blog/red-bricks-rate-lahore-2026" class="hover:text-emerald-400">• Awal Red Clay Bricks &amp; Ravi Sand Rates</router-link></li>
            <li><router-link to="/blog/solar-system-installation-cost-pakistan" class="hover:text-emerald-400">• 10kW On-Grid Solar System Net-Metering Cost</router-link></li>
            <li><router-link to="/blog/fbr-property-taxes-filer-vs-non-filer-2026" class="hover:text-emerald-400">• FBR Advance Tax &amp; CVT Transfer Rates 2026</router-link></li>
            <li><router-link to="/blog/dha-lahore-building-bylaws-2026" class="hover:text-emerald-400">• DHA Lahore 2026 Building Bylaws &amp; Setbacks</router-link></li>
            <li><router-link to="/blog/lda-map-approval-process-guide" class="hover:text-emerald-400">• LDA Lahore Online Map Approval &amp; Completion NOC</router-link></li>
            <li><router-link to="/blog/cda-building-regulations-islamabad" class="hover:text-emerald-400">• CDA Islamabad Building Regulations &amp; Setbacks</router-link></li>
            <li><router-link to="/blog/fuel-subsidy-pakistan-2026-policy" class="hover:text-emerald-400">• Government of Pakistan Fuel Subsidy Policy 2026</router-link></li>
            <li><router-link to="/privacy-policy" class="hover:text-emerald-400">• Privacy Policy &amp; Google AdSense Compliance</router-link></li>
            <li><router-link to="/terms-of-service" class="hover:text-emerald-400">• Terms of Service &amp; Architectural Copyrights</router-link></li>
            <li><router-link to="/disclaimer" class="hover:text-emerald-400">• Material Rates &amp; Estimation Disclaimer</router-link></li>
          </ul>
        </div>

      </div>

      <!-- Verified National Authorities & Citations Footprint Banner -->
      <div class="pt-6 border-t border-slate-800 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div class="flex items-center gap-2">
            <i class="fa-solid fa-stamp text-amber-400 text-sm"></i>
            <span class="font-black uppercase text-white tracking-wider">Official Pakistani Regulatory Standards &amp; Verified Citations:</span>
          </div>
          <span class="text-[11px] text-[#088C7E] font-bold">100% Compliant with Municipal &amp; Engineering Codes</span>
        </div>

        <div class="flex flex-wrap items-center gap-2 text-[11px]">
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">PCATP:</strong> Pakistan Council of Architects &amp; Town Planners
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">PEC:</strong> Pakistan Engineering Council Registered
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">LDA:</strong> Lahore Development Authority Approved
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">CDA:</strong> Capital Development Authority Islamabad
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">RDA:</strong> Rawalpindi Development Authority
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">SBCA:</strong> Sindh Building Control Authority
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">SBP:</strong> State Bank of Pakistan Islamic Mortgage Rules
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">FBR:</strong> Federal Board of Revenue Property Valuations
          </span>
          <span class="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200">
            <strong class="text-white">ASTM / ACI:</strong> Structural Concrete &amp; Steel Grade 60 Codes
          </span>
        </div>
      </div>

      <!-- Quick Action Contact & Hotlines Strip -->
      <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div class="flex flex-wrap items-center gap-4 text-slate-400">
          <span class="font-bold text-slate-300">Quick Navigation:</span>
          <router-link to="/forum" class="hover:text-emerald-400 transition-colors">Forum Q&amp;A</router-link>
          <span>·</span>
          <router-link to="/partners" class="hover:text-emerald-400 transition-colors">Industry Partners</router-link>
          <span>·</span>
          <router-link to="/reviews" class="text-amber-400 hover:underline font-semibold">Google Reviews</router-link>
          <span>·</span>
          <router-link to="/privacy-policy" class="hover:text-slate-300 transition-colors">Privacy</router-link>
          <span>·</span>
          <router-link to="/terms-of-service" class="hover:text-slate-300 transition-colors">Terms</router-link>
          <span>·</span>
          <router-link to="/disclaimer" class="hover:text-slate-300 transition-colors">Disclaimer</router-link>
        </div>

        <div class="flex items-center gap-3">
          <button 
            type="button"
            @click="openWhatsApp('923416887454', 'Assalam-o-Alaikum H&Q Design Services, I would like to consult with an architect.')" 
            class="px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-all font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>WhatsApp Consultation</span>
          </button>
          <a 
            href="tel:03416887454" 
            class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-all font-bold flex items-center gap-1.5"
          >
            <i class="fa-solid fa-phone text-xs text-[#088C7E]"></i>
            <span>0341-6887454</span>
          </a>
          <a 
            href="tel:03134487315" 
            class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-all font-bold flex items-center gap-1.5"
          >
            <i class="fa-solid fa-phone text-xs text-[#088C7E]"></i>
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
