<template>
  <div class="space-y-10 sm:space-y-14 pb-14 bg-[#F8F9FA] dark:bg-[#0B0E14] text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300">
    
    <!-- 1. TECTURE FULLSCREEN ARCHITECTURAL SERVICES HERO SLIDER WITH GSAP ANIMATIONS -->
    <section 
      ref="heroSectionRef"
      class="w-full relative min-h-[520px] sm:min-h-[600px] lg:min-h-[660px] flex flex-col justify-between border-b border-white/10 group select-none overflow-hidden"
      @mouseenter="pauseAutoplay"
      @mouseleave="startAutoplay"
    >
      
      <!-- Slide Background Images with Crossfade & Ken Burns Zoom -->
      <div 
        v-for="(slide, idx) in heroSlides" 
        :key="slide.id"
        :class="[
          'absolute inset-0 transition-opacity duration-1000 ease-in-out',
          currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
        ]"
      >
        <img 
          :src="slide.image" 
          :alt="slide.titlePart1 + ' ' + slide.titlePart2" 
          width="1920"
          height="1080"
          :class="[
            'w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out',
            currentSlide === idx ? 'scale-105' : 'scale-100'
          ]"
        />
        <!-- Architectural Dark Overlays for Maximum Text Contrast -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#0B0E14]/95 via-[#0B0E14]/80 to-[#0B0E14]/50 pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-[#0B0E14]/70 pointer-events-none"></div>
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <!-- Slide Top Indicator & Architectural Tag -->
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 relative z-10">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="gsap-hero-tag tecture-tag text-[#DFC8A5] flex items-center gap-2 bg-[#0B0E14]/80 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
              <span>{{ heroSlides[currentSlide].tag }}</span>
            </span>
            <span class="hidden sm:inline-flex px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-[#C5A880]/15 text-[#DFC8A5] border border-[#C5A880]/30 backdrop-blur-md">
              <i class="fa-solid fa-award mr-1.5 text-[#C5A880]"></i> Official PCATP &amp; PEC Registered Studio
            </span>
          </div>

          <!-- Slide Counter (e.g. 01 / 04) -->
          <div class="flex items-center gap-2 font-mono text-xs font-bold text-slate-400 bg-[#0B0E14]/80 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span class="text-[#DFC8A5] text-sm font-black">0{{ currentSlide + 1 }}</span>
            <span class="text-white/30">/</span>
            <span>0{{ heroSlides.length }}</span>
          </div>
        </div>
      </div>

      <!-- Slide Main Content (Animated with GSAP) -->
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6 sm:py-10 space-y-4 sm:space-y-6">
        <div class="max-w-4xl space-y-3 sm:space-y-4">
          <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] drop-shadow-2xl">
            <span class="gsap-hero-title1 block">{{ heroSlides[currentSlide].titlePart1 }}</span>
            <span class="gsap-hero-title2 block text-gradient-gold">{{ heroSlides[currentSlide].titlePart2 }}</span>
          </h1>
          <p class="gsap-hero-desc text-slate-300 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-3xl drop-shadow-md">
            {{ heroSlides[currentSlide].description }}
          </p>
        </div>

        <!-- Service Consultation Action CTAs with GSAP Fade -->
        <div class="gsap-hero-ctas flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
          <button 
            @click="$emit('open-start-project')"
            class="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full tecture-btn-gold text-xs shadow-2xl flex items-center gap-2.5 cursor-pointer"
          >
            <i class="fa-solid fa-calendar-check text-xs"></i>
            <span>Book Design Consultation</span>
          </button>

          <router-link 
            to="/services" 
            class="px-6 sm:px-8 py-3.5 sm:py-4 rounded-full tecture-btn-outline text-xs flex items-center gap-2.5 cursor-pointer backdrop-blur-md bg-black/30"
          >
            <i class="fa-solid fa-compass-drafting text-[#C5A880]"></i>
            <span>Explore All Services</span>
          </router-link>

          <button 
            type="button"
            @click="openWhatsApp('923134487315')" 
            class="px-5 py-3.5 sm:py-4 rounded-full bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md"
          >
            <i class="fa-brands fa-whatsapp text-sm text-emerald-400"></i>
            <span>WhatsApp Architect Desk</span>
          </button>
        </div>

      </div>

      <!-- Hero Bottom Controls & Project Stats Footbar -->
      <div class="relative z-10 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-transparent pt-3 pb-5 border-t border-white/10">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          <!-- Slide Switcher Number Tabs with Progress Indicator -->
          <div class="flex items-center gap-2 sm:gap-3">
            <button 
              v-for="(slide, idx) in heroSlides" 
              :key="'tab-' + slide.id"
              @click="goToSlide(idx)"
              :class="[
                'group flex items-center gap-2 px-3.5 py-1.5 rounded-full transition-all text-xs font-mono cursor-pointer border',
                currentSlide === idx 
                  ? 'bg-[#C5A880]/20 text-[#DFC8A5] border-[#C5A880]/60 font-black' 
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10'
              ]"
            >
              <span>0{{ idx + 1 }}</span>
              <span class="text-[10px] hidden sm:inline tracking-wider font-sans uppercase font-bold">{{ slide.shortName }}</span>
              <span v-if="currentSlide === idx" class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
            </button>
          </div>

          <!-- Slide Controls & Verified Stats Snippet -->
          <div class="flex items-center gap-6 justify-between w-full md:w-auto">
            <div class="hidden xl:flex items-center gap-6 text-xs font-bold text-slate-300">
              <span class="flex items-center gap-1.5 text-slate-200">
                <i class="fa-solid fa-building-user text-[#C5A880]"></i> 500+ Villas Designed
              </span>
              <span class="text-white/20">·</span>
              <span class="flex items-center gap-1.5 text-slate-200">
                <i class="fa-solid fa-cube text-[#C5A880]"></i> 4K 3D Photorealism
              </span>
              <span class="text-white/20">·</span>
              <span class="flex items-center gap-1.5 text-emerald-400">
                <i class="fa-solid fa-shield-halved"></i> 100% DHA/LDA Sanctioned
              </span>
            </div>

            <!-- Arrow Navigation Buttons -->
            <div class="flex items-center gap-2">
              <button 
                @click="prevSlide" 
                class="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] text-slate-300 hover:text-[#0B0E14] border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Slide"
              >
                <i class="fa-solid fa-arrow-left text-xs"></i>
              </button>
              <button 
                @click="nextSlide" 
                class="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A880] text-slate-300 hover:text-[#0B0E14] border border-white/15 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Slide"
              >
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>

    <!-- 2. QUICK ARCHITECTURAL SERVICE INQUIRY & ESTIMATE WIDGET -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div class="p-5 sm:p-7 rounded-3xl bg-white/95 dark:bg-[#121620]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 shadow-2xl space-y-4">
        
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-white/10 pb-4">
          <div class="space-y-1">
            <span class="tecture-tag text-[#C5A880]">INSTANT DESIGN INQUIRY</span>
            <h3 class="text-lg font-black text-slate-900 dark:text-white">Request an Architectural &amp; Interior Design Proposal</h3>
          </div>
          <div class="text-[11px] font-bold text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1.5">
            <i class="fa-solid fa-certificate text-[#C5A880]"></i>
            <span>Guaranteed Fixed Consultation Rate &amp; BOQ</span>
          </div>
        </div>

        <!-- Service Inquiry Form Controls -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
          
          <!-- Service Type -->
          <div class="space-y-1.5">
            <label class="tecture-tag text-slate-700 dark:text-slate-400 block">Service Needed</label>
            <select v-model="quickServiceType" class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 focus:outline-none focus:border-[#C5A880] shadow-inner font-semibold cursor-pointer">
              <option value="Architectural Design & Floor Plans">Architectural Floor Plans &amp; Blueprints</option>
              <option value="Luxury Interior Design">Luxury Interior Architecture &amp; Styling</option>
              <option value="4K 3D Exterior Elevation">4K 3D Exterior Elevation &amp; VR</option>
              <option value="Turnkey Construction (Grey to Finish)">Turnkey Construction (Grey to Finish)</option>
              <option value="Full House Renovation">Full House Renovation &amp; Remodeling</option>
            </select>
          </div>

          <!-- Plot Dimension -->
          <div class="space-y-1.5">
            <label class="tecture-tag text-slate-700 dark:text-slate-400 block">Plot Dimension</label>
            <select v-model="quickPlotSize" class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 focus:outline-none focus:border-[#C5A880] shadow-inner font-semibold cursor-pointer">
              <option value="5 Marla (25x45)">5 Marla (25x45)</option>
              <option value="10 Marla (35x70)">10 Marla (35x70)</option>
              <option value="1 Kanal (50x90)">1 Kanal (50x90)</option>
              <option value="2 Kanal (75x120)">2 Kanal (75x120)</option>
              <option value="Commercial Plaza">Commercial Plaza</option>
            </select>
          </div>

          <!-- Society / Location -->
          <div class="space-y-1.5">
            <label class="tecture-tag text-slate-700 dark:text-slate-400 block">Location / Society</label>
            <select v-model="quickLocation" class="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 focus:outline-none focus:border-[#C5A880] shadow-inner font-semibold cursor-pointer">
              <option value="DHA Lahore">DHA Lahore (Phase 1-9)</option>
              <option value="Bahria Town Lahore">Bahria Town Lahore</option>
              <option value="Gulberg Lahore">Gulberg III, Lahore</option>
              <option value="Lake City Lahore">Lake City Lahore</option>
              <option value="Park View City">Park View City Lahore</option>
              <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
              <option value="Overseas Client (KSA / UAE / UK)">Overseas Client (KSA / UAE / UK)</option>
            </select>
          </div>

          <!-- Submit CTA -->
          <div class="flex items-end">
            <button 
              @click="submitQuickInquiry"
              class="w-full py-3.5 rounded-2xl tecture-btn-gold text-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Get Service Quote Now</span>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- 3. INFINITE ARCHITECTURAL MARQUEE TICKER -->
    <section class="w-full overflow-hidden bg-slate-100 dark:bg-[#121620] text-slate-800 dark:text-slate-200 py-3.5 border-y border-slate-200 dark:border-white/10 shadow-sm">
      <div class="flex w-max animate-marquee space-x-12">
        <div class="flex items-center gap-12 text-xs font-extrabold tracking-wider shrink-0 uppercase">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-[#C5A880]"></i> Licensed PCATP &amp; PEC Architects</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-[#C5A880]"></i> Studio Lahore, Pakistan</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting text-[#C5A880]"></i> 2D Blueprints &amp; Municipal Drawings</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-couch text-[#C5A880]"></i> Luxury Interior Architecture</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-[#C5A880]"></i> 4K 3D Photorealistic Lumion Renders</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-hammer text-[#C5A880]"></i> Turnkey Construction Engineering</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone text-[#C5A880]"></i> Direct Studio Desk: 0313-4487315</span>
        </div>
        <div class="flex items-center gap-12 text-xs font-extrabold tracking-wider shrink-0 pr-12 uppercase">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-[#C5A880]"></i> Licensed PCATP &amp; PEC Architects</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-[#C5A880]"></i> Studio Lahore, Pakistan</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting text-[#C5A880]"></i> 2D Blueprints &amp; Municipal Drawings</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-couch text-[#C5A880]"></i> Luxury Interior Architecture</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-[#C5A880]"></i> 4K 3D Photorealistic Lumion Renders</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-hammer text-[#C5A880]"></i> Turnkey Construction Engineering</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone text-[#C5A880]"></i> Direct Studio Desk: 0313-4487315</span>
        </div>
      </div>
    </section>

    <!-- 4. ABOUT OUR SERVICE FIRM (With GSAP Floating Badge) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left: Image Composition with GSAP Floating Stamp -->
        <div class="lg:col-span-6 relative">
          <div class="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
            <img 
              src="/images/portfolio/interior_render_01.jpg" 
              alt="H&Q Architectural Studio Lahore" 
              class="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-transparent to-transparent pointer-events-none"></div>
          </div>

          <!-- GSAP Animated Floating Badge -->
          <div class="gsap-float-badge absolute -bottom-6 -right-3 sm:-right-6 p-5 sm:p-6 rounded-3xl bg-white/95 dark:bg-[#121620]/95 border border-slate-200 dark:border-[#C5A880]/50 shadow-2xl backdrop-blur-xl space-y-2 max-w-xs">
            <div class="flex items-center gap-3">
              <span class="text-3xl sm:text-4xl font-black text-gradient-gold">15+</span>
              <div class="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-200 leading-tight">
                Years of Architectural Mastery
              </div>
            </div>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/10 pt-2">
              Over 500+ executed luxury villas &amp; commercial towers across Lahore, DHA, and Islamabad.
            </p>
          </div>
        </div>

        <!-- Right: Studio Services Philosophy -->
        <div class="lg:col-span-6 space-y-5 lg:pl-4">
          <div class="space-y-2">
            <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
              <span class="w-6 h-px bg-[#C5A880]"></span>
              <span>01 // ABOUT OUR STUDIO</span>
            </span>
            <h2 class="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Designing Visionary Homes Engineered for Generations
            </h2>
          </div>

          <p class="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            <strong class="text-slate-900 dark:text-white">H&amp;Q Design Services (HANDQ)</strong> is an award-winning architecture and luxury interior design firm headquartered in Lahore, Pakistan. We guide private clients, developers, and corporate institutions through full-scope architectural design, municipal drawing approvals, photorealistic 3D visualization, and turnkey construction management.
          </p>

          <!-- 4 Pillars of Our Service Excellence -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div class="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-1 hover:border-[#C5A880]/60 transition-colors">
              <div class="w-7 h-7 rounded-lg bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xs font-black">
                <i class="fa-solid fa-stamp"></i>
              </div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">100% LDA &amp; DHA Approval</h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-400">Complete municipal drawings conforming strictly to DHA and LDA bylaws.</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-1 hover:border-[#C5A880]/60 transition-colors">
              <div class="w-7 h-7 rounded-lg bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xs font-black">
                <i class="fa-solid fa-cube"></i>
              </div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">4K 3D Photorealism</h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-400">Lumion and 3ds Max VR renders showing exact exterior and interior textures.</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-1 hover:border-[#C5A880]/60 transition-colors">
              <div class="w-7 h-7 rounded-lg bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xs font-black">
                <i class="fa-solid fa-calculator"></i>
              </div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Turnkey Estimation</h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-400">Accurate bill of quantities (BOQ) with realistic Pakistan 2026 material costs.</p>
            </div>

            <div class="p-3.5 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm space-y-1 hover:border-[#C5A880]/60 transition-colors">
              <div class="w-7 h-7 rounded-lg bg-[#C5A880]/20 text-[#8C6A38] dark:text-[#DFC8A5] flex items-center justify-center text-xs font-black">
                <i class="fa-solid fa-comments"></i>
              </div>
              <h4 class="text-xs font-black uppercase tracking-wider text-slate-900 dark:text-white">Lead Architect Direct Desk</h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-400">1-on-1 consultations directly with licensed PCATP chief engineers.</p>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <router-link 
              to="/about" 
              class="px-6 py-3 rounded-full tecture-btn-gold text-xs flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Explore Our Heritage</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </router-link>

            <router-link 
              to="/contact" 
              class="px-6 py-3 rounded-full tecture-btn-outline text-xs flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Studio Visit</span>
            </router-link>
          </div>

        </div>

      </div>
    </section>

    <!-- 5. CORE ARCHITECTURAL & INTERIOR SERVICES (Animated with GSAP Stagger) -->
    <section id="services-section" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
        <div class="space-y-1">
          <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
            <span class="w-6 h-px bg-[#C5A880]"></span>
            <span>02 // SPECIALIZED SERVICES</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Architectural &amp; Interior Design Capabilities
          </h2>
        </div>
        <router-link to="/services" class="text-xs font-bold text-[#DFC8A5] hover:underline flex items-center gap-1.5 shrink-0">
          <span>View Detailed Deliverables &amp; Pricing</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </router-link>
      </div>

      <!-- 6 Numbered Service Cards Grid with GSAP Class Hooks -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <!-- Service 01 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">01</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-compass-drafting"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              Architectural Floor Planning
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete layout planning for 5 Marla, 10 Marla, 1 Kanal, and 2 Kanal residences. Includes 2D working floor plans, structural framing calculations, cross-sections, and certified submission files for DHA, LDA, and Bahria Town approvals.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> 2D Blueprints &amp; Section Cuts</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> 100% Municipal Approval Guarantee</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> PEC Certified Structural Engineering</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire Floor Plan Service →
          </button>
        </div>

        <!-- Service 02 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">02</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-couch"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              Luxury Interior Architecture
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Bespoke interior architecture for living lounges, executive drawing rooms, master bed suites, and kitchens. Curated Italian bookmatched Calacatta marble, fluted timber acoustic wall panels, false ceiling lighting layouts, and custom joinery.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> 3D Photorealistic Interior Views</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> False Ceiling &amp; Cove Lighting Plans</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Bespoke Wardrobes &amp; Vanities</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire Interior Design →
          </button>
        </div>

        <!-- Service 03 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">03</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-cube"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              4K 3D Exterior Elevations &amp; VR
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Ultra-high-definition 4K 3D exterior elevations rendered in Lumion and 3ds Max. Preview daytime sunlight, atmospheric nighttime illumination, rockwall stone cladding, and 360° virtual reality walkthroughs before laying a single brick.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Spanish, Modern &amp; Classical Facades</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Day &amp; Night Illuminations</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> 60-Second 4K Video Animations</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire 3D Elevation →
          </button>
        </div>

        <!-- Service 04 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">04</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-hammer"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              Turnkey Construction Engineering
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Rigorous on-site engineering supervision and turnkey construction across Lahore. Grade-60 steel reinforcement, OPC cement standards, German sanitary fittings, and guaranteed delivery schedule.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Grey Structure &amp; Full A+ Luxury</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Comprehensive Bill of Quantities (BOQ)</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Regular Milestone Quality Audits</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire Construction Service →
          </button>
        </div>

        <!-- Service 05 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">05</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              House Renovation &amp; Remodeling
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete home transformation in Lahore. Revamp dated 10 Marla and 1 Kanal facades into sleek contemporary masterpieces, overhaul bathrooms and kitchens, and expand living areas with structural compliance.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Modern Facade Elevation Upgrades</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Complete Bathroom &amp; Kitchen Overhaul</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Space Optimization &amp; Structural Retrofit</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire Renovation Service →
          </button>
        </div>

        <!-- Service 06 -->
        <div class="gsap-service-card p-6 sm:p-8 rounded-3xl tecture-card space-y-5 flex flex-col justify-between group">
          <div class="space-y-3.5">
            <div class="flex items-center justify-between">
              <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">06</span>
              <div class="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 group-hover:bg-[#C5A880] text-[#8C6A38] dark:text-[#DFC8A5] group-hover:text-[#0B0E14] flex items-center justify-center text-xl transition-all">
                <i class="fa-solid fa-building"></i>
              </div>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">
              Commercial Plaza &amp; Office Design
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              High-performance architectural engineering for commercial high-rises, shopping plazas, and corporate headquarters in Gulberg, DHA Phase 6, and Islamabad. Full curtain-wall structural detailing and parking layouts.
            </p>
            <div class="space-y-1.5 pt-1 text-xs text-slate-700 dark:text-slate-300">
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Curtain-Wall Glass Facade Design</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Corporate Headquarters Ergonomics</div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-[#C5A880]"></i> Basement Parking &amp; Elevator Shaft Plans</div>
            </div>
          </div>
          <button 
            @click="$emit('open-start-project')"
            class="w-full py-3 rounded-full tecture-btn-outline text-xs cursor-pointer group-hover:bg-[#C5A880] group-hover:text-[#0B0E14] transition-all text-center"
          >
            Inquire Commercial Design →
          </button>
        </div>

      </div>

    </section>

    <!-- 6. OUR 4-STEP ARCHITECTURAL SERVICE WORKFLOW (With GSAP Stagger) -->
    <section id="workflow-section" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="text-center max-w-3xl mx-auto space-y-1.5">
        <span class="tecture-tag text-[#C5A880]">OUR STRUCTURED WORKFLOW</span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">How We Deliver Architectural Excellence</h2>
        <p class="text-slate-400 text-xs sm:text-sm">From initial sketch to turnkey delivery, our 4-step workflow ensures transparency, bylaw compliance, and precision.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
        
        <div class="gsap-workflow-step p-6 sm:p-7 rounded-3xl tecture-card space-y-3 group">
          <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">01</span>
          <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">Consultation &amp; Brief</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">In-depth discussion on plot orientation, family space requirements, aesthetic preference, and budget targets.</p>
        </div>

        <div class="gsap-workflow-step p-6 sm:p-7 rounded-3xl tecture-card space-y-3 group">
          <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">02</span>
          <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">2D Planning &amp; 3D Elevation</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Developing optimized 2D floor plans, spatial zoning, and photorealistic 4K 3D exterior &amp; interior renderings.</p>
        </div>

        <div class="gsap-workflow-step p-6 sm:p-7 rounded-3xl tecture-card space-y-3 group">
          <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">03</span>
          <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">Municipal Approvals &amp; BOQ</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Filing complete structural blueprints with LDA, CDA, or DHA authorities along with itemized material cost breakdown.</p>
        </div>

        <div class="gsap-workflow-step p-6 sm:p-7 rounded-3xl tecture-card space-y-3 group">
          <span class="font-mono text-2xl sm:text-3xl font-black text-[#C5A880]">04</span>
          <h4 class="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-[#946E3A] dark:group-hover:text-[#DFC8A5] transition-colors">Execution &amp; Handover</h4>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Rigorous turnkey construction execution with daily engineer supervision and milestone-based transparent delivery.</p>
        </div>

      </div>
    </section>

    <!-- 7. TECTURE INTERACTIVE 2026 ESTIMATOR WIDGET -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-6 sm:p-10 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#121620] dark:via-[#0E121B] dark:to-[#121620] border border-slate-200 dark:border-[#C5A880]/30 shadow-2xl relative overflow-hidden space-y-6">
        
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-200 dark:border-white/10 pb-6">
          <div class="space-y-1.5">
            <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
              <span class="w-6 h-px bg-[#C5A880]"></span>
              <span>03 // ESTIMATION SUITE</span>
            </span>
            <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              Instant 2026 Architectural &amp; Construction Cost Estimator
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Calculate realistic Lahore &amp; Pakistan construction budgets based on 2026 market material rates.
            </p>
          </div>

          <router-link 
            to="/tools?tab=cost-calc" 
            class="px-6 py-3 rounded-full tecture-btn-outline text-xs flex items-center gap-2 shrink-0"
          >
            <i class="fa-solid fa-calculator text-[#C5A880]"></i>
            <span>Open Advanced 50-Item Calculator →</span>
          </router-link>
        </div>

        <!-- Calculator Interactive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          <!-- Step 1: Select Plot Dimension -->
          <div class="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <label class="tecture-tag text-slate-800 dark:text-slate-300 block font-black">1. Select Plot Dimension</label>
            <div class="grid grid-cols-2 gap-2 text-xs font-bold">
              <button 
                v-for="size in ['5 Marla', '10 Marla', '1 Kanal', '2 Kanal']" 
                :key="size"
                @click="estimatorPlot = size"
                :class="[
                  'py-2.5 px-3 rounded-xl border transition-all cursor-pointer font-extrabold',
                  estimatorPlot === size 
                    ? 'bg-[#C5A880] text-[#0B0E14] font-black border-[#C5A880] shadow-md' 
                    : 'bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 border-slate-300 dark:border-white/15 hover:border-[#C5A880] shadow-sm'
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Step 2: Quality Finish Package -->
          <div class="space-y-3 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <label class="tecture-tag text-slate-800 dark:text-slate-300 block font-black">2. Construction Package</label>
            <div class="grid grid-cols-2 gap-2 text-xs font-bold">
              <button 
                @click="estimatorType = 'Grey'"
                :class="[
                  'py-2.5 px-3 rounded-xl border transition-all cursor-pointer font-extrabold',
                  estimatorType === 'Grey' 
                    ? 'bg-[#C5A880] text-[#0B0E14] font-black border-[#C5A880] shadow-md' 
                    : 'bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 border-slate-300 dark:border-white/15 hover:border-[#C5A880] shadow-sm'
                ]"
              >
                Grey Structure
              </button>
              <button 
                @click="estimatorType = 'Turnkey'"
                :class="[
                  'py-2.5 px-3 rounded-xl border transition-all cursor-pointer font-extrabold',
                  estimatorType === 'Turnkey' 
                    ? 'bg-[#C5A880] text-[#0B0E14] font-black border-[#C5A880] shadow-md' 
                    : 'bg-white dark:bg-[#121620] text-slate-800 dark:text-slate-200 border-slate-300 dark:border-white/15 hover:border-[#C5A880] shadow-sm'
                ]"
              >
                Luxury Turnkey
              </button>
            </div>
          </div>

          <!-- Step 3: Real-Time Estimated Cost Display -->
          <div class="p-6 rounded-2xl bg-slate-50 dark:bg-[#0B0E14] border-2 border-[#C5A880]/50 shadow-xl space-y-3 text-center">
            <span class="tecture-tag text-[#8C6A38] dark:text-[#DFC8A5] block font-black">Estimated 2026 Budget</span>
            <div class="text-3xl sm:text-4xl font-black text-[#9E7D4E] dark:text-gradient-gold font-mono">
              {{ computedEstimate }}
            </div>
            <p class="text-xs text-slate-700 dark:text-slate-400">
              Estimated covered area: <strong class="text-slate-900 dark:text-white font-black">{{ computedCoveredArea }} sq. ft.</strong>
            </p>
            <button 
              type="button"
              @click="openEstimateWhatsApp"
              class="w-full py-3 rounded-full tecture-btn-gold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Get Itemized BOQ on WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- 8. RECENT ARCHITECTURAL WORKS SHOWCASE (Section 04 // Portfolio Gallery) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div class="space-y-1.5">
          <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
            <span class="w-6 h-px bg-[#C5A880]"></span>
            <span>04 // RECENT WORKS</span>
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Architectural Landmarks &amp; Luxury Interiors
          </h2>
        </div>
        <router-link to="/portfolio" class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] hover:underline flex items-center gap-1.5 shrink-0">
          <span>View All Completed Works</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </router-link>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="rounded-3xl tecture-card overflow-hidden flex flex-col justify-between group">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="/images/scene1_villa.jpg" alt="1 Kanal Luxury Villa DHA Phase 6" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-4 left-4 px-3.5 py-1 rounded-full tecture-btn-gold text-[10px]">
              1 Kanal (50x90)
            </div>
            <div class="absolute bottom-4 left-4 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-black text-xs border border-white/10">
              DHA Phase 6, Lahore
            </div>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">
              Modern Luxury Villa Architectural Elevation
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              Contemporary geometric villa featuring cantilevered limestone slabs, floor-to-ceiling thermal glass facades, and architectural LED illumination.
            </p>
            <div class="pt-2 flex items-center justify-between">
              <router-link to="/portfolio" class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1 hover:underline">
                View Project Details →
              </router-link>
              <span class="text-[11px] text-[#8C6A38] dark:text-[#C5A880] font-bold">5 Beds · Double Story</span>
            </div>
          </div>
        </div>

        <div class="rounded-3xl tecture-card overflow-hidden flex flex-col justify-between group">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="/images/scene9_hero.jpg" alt="Double-Height Royal Penthouse Suite" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-4 left-4 px-3.5 py-1 rounded-full tecture-btn-gold text-[10px]">
              Penthouse Suite
            </div>
            <div class="absolute bottom-4 left-4 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-black text-xs border border-white/10">
              DHA Phase 6 Boulevard, Lahore
            </div>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">
              Double-Height Royal Penthouse Interior
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              Sculptural floating illuminated spiral staircase, double-height panoramic skyline windows, and bookmatched Calacatta marble flooring.
            </p>
            <div class="pt-2 flex items-center justify-between">
              <router-link to="/portfolio" class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1 hover:underline">
                View Project Details →
              </router-link>
              <span class="text-[11px] text-[#8C6A38] dark:text-[#C5A880] font-bold">Luxury Interior</span>
            </div>
          </div>
        </div>

        <div class="rounded-3xl tecture-card overflow-hidden flex flex-col justify-between group">
          <div class="relative h-72 overflow-hidden bg-black">
            <img src="/images/portfolio/interior_render_02.jpg" alt="Executive Master Bedroom Suite" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute top-4 left-4 px-3.5 py-1 rounded-full tecture-btn-gold text-[10px]">
              Master Suite
            </div>
            <div class="absolute bottom-4 left-4 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-2xl text-white font-black text-xs border border-white/10">
              DHA Phase 5, Lahore
            </div>
          </div>
          <div class="p-6 space-y-3">
            <h3 class="text-xl font-black text-slate-900 dark:text-white group-hover:text-[#8C6A38] dark:group-hover:text-[#DFC8A5] transition-colors">
              Executive Master Suite &amp; Ambient Lighting
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
              Curated master bedroom interior featuring plush upholstered back wall, ambient LED cove illumination, integrated reading profiles, and bespoke nightstands.
            </p>
            <div class="pt-2 flex items-center justify-between">
              <router-link to="/portfolio" class="text-xs font-bold text-[#8C6A38] dark:text-[#DFC8A5] flex items-center gap-1 hover:underline">
                View Project Details →
              </router-link>
              <span class="text-[11px] text-[#8C6A38] dark:text-[#C5A880] font-bold">Master Suite · Luxury Interior</span>
            </div>
          </div>
        </div>

      </div>

    </section>

    <!-- 9. TECTURE 4K CINEMATIC BRAND SHOWREEL -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-6">
        <div class="space-y-1.5">
          <span class="tecture-tag text-[#C5A880] flex items-center gap-2">
            <span class="w-6 h-px bg-[#C5A880]"></span>
            <span>CINEMATIC SHOWCASE</span>
          </span>
          <h2 class="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Experience <span class="text-gradient-gold">H&amp;Q Luxury Architecture</span> in Motion
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Watch our complete 60-second architectural showcase featuring luxury villas, master bedroom suites, open-concept living, and complete before-and-after space transformations.
          </p>
        </div>
        <router-link to="/portfolio" class="px-5 py-2.5 rounded-full tecture-btn-outline text-xs flex items-center gap-2 shrink-0">
          <i class="fa-solid fa-images text-[#C5A880]"></i>
          <span>View Full Gallery</span>
        </router-link>
      </div>

      <CinematicShowreel />
    </section>

    <!-- 10. CLIENT PROOF STATS COUNTER (Animated with GSAP Numbers Interpolation) -->
    <section id="stats-section" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-10 rounded-3xl tecture-card text-center">
        <div class="space-y-1">
          <div class="text-4xl sm:text-5xl font-black text-gradient-gold">
            {{ statNumbers.projects }}+
          </div>
          <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Villas Completed</p>
        </div>
        <div class="space-y-1">
          <div class="text-4xl sm:text-5xl font-black text-gradient-gold">
            {{ statNumbers.years }}+
          </div>
          <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Years Leadership</p>
        </div>
        <div class="space-y-1">
          <div class="text-4xl sm:text-5xl font-black text-gradient-gold">
            {{ statNumbers.clients }}+
          </div>
          <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Happy Homeowners</p>
        </div>
        <div class="space-y-1">
          <div class="text-4xl sm:text-5xl font-black text-gradient-gold">
            {{ statNumbers.approval }}%
          </div>
          <p class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">Approval Rate</p>
        </div>
      </div>
    </section>

    <!-- 11. GOOGLE CLIENT REVIEWS (5.0★) -->
    <GoogleReviews />

    <!-- 12. CALL TO ACTION: VISIT OUR LAHORE STUDIO -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-14 rounded-3xl bg-[#0B0E14] dark:bg-[#121620] border border-[#C5A880]/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-80 h-80 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none"></div>
        <span class="tecture-tag text-[#C5A880] block">BEGIN YOUR PROJECT</span>
        <h3 class="text-3xl sm:text-5xl font-black text-white">
          Ready to Craft Your Architectural Masterpiece?
        </h3>
        <p class="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Book an in-person design consultation with our Chief Architects in Lahore. Bring your plot dimensions or preliminary sketches, and let's craft a timeless living space.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button 
            @click="$emit('open-start-project')"
            class="px-8 py-4 rounded-full tecture-btn-gold text-xs shadow-xl flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-calendar-check text-xs"></i>
            <span>Schedule Studio Consultation</span>
          </button>

          <button 
            type="button"
            @click="openWhatsApp('923134487315')" 
            class="px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xl flex items-center gap-2 cursor-pointer border-0"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>Chat Directly on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 13. COMPREHENSIVE 100+ INTERNAL LINKING NETWORK (Full SEO Preservation) -->
    <InternalLinkingHub />

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { openWhatsApp } from '../utils/whatsapp.js'
import CinematicShowreel from '../components/CinematicShowreel.vue'
import GoogleReviews from '../components/GoogleReviews.vue'
import InternalLinkingHub from '../components/InternalLinkingHub.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

defineEmits(['open-start-project'])

const router = useRouter()

// Register ScrollTrigger if in browser
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// 1. Tecture Hero Slider Data - Service Business Focus
const heroSlides = [
  {
    id: 1,
    tag: 'ARCHITECTURAL DESIGN & BLUEPRINTS',
    shortName: 'Architectural Planning',
    titlePart1: 'Visionary Architectural',
    titlePart2: 'Design & Engineering Services',
    description: 'Licensed PCATP architects & PEC structural engineers in Lahore. Specializing in luxury 5 Marla, 10 Marla, 1 Kanal and 2 Kanal villas, guaranteed LDA/DHA approved submission drawings, and precision BIM modeling.',
    image: '/images/scene1_villa.jpg'
  },
  {
    id: 2,
    tag: 'BESPOKE LUXURY INTERIOR ARCHITECTURE',
    shortName: 'Luxury Interiors',
    titlePart1: 'Bespoke Interior',
    titlePart2: 'Architecture & Styling Services',
    description: 'Transforming luxury residences in DHA & Gulberg with curated Italian Calacatta marble, acoustic woodwork, architectural lighting plans, bespoke wardrobe joinery, and turnkey execution.',
    image: '/images/portfolio/interior_render_03.jpg'
  },
  {
    id: 3,
    tag: '4K 3D ELEVATION VISUALIZATION & VR',
    shortName: '3D Elevations',
    titlePart1: 'Photorealistic 4K',
    titlePart2: '3D Elevations & Virtual Reality',
    description: 'Experience your dream villa in cinematic 4K Lumion and 3ds Max before laying a single brick. Spanish, Contemporary Modern, Classical, and Minimalist exterior facades with exact daylight and night illumination.',
    image: '/images/scene9_hero.jpg'
  },
  {
    id: 4,
    tag: 'TURNKEY CONSTRUCTION ENGINEERING',
    shortName: 'Turnkey Construction',
    titlePart1: 'Turnkey Construction',
    titlePart2: '& Complete Home Remodeling',
    description: 'End-to-end engineering execution in Lahore from grey structure to opulent turnkey handover with transparent bill of quantities (BOQ), Grade-60 steel, OPC cement, and rigorous site supervision.',
    image: '/images/portfolio/interior_render_04.jpg'
  }
]

const currentSlide = ref(0)
let autoplayInterval = null
const heroSectionRef = ref(null)

// Animated counter values
const statNumbers = ref({
  projects: 500,
  years: 15,
  clients: 200,
  approval: 100
})

const animateSlideWithGsap = () => {
  if (typeof window === 'undefined') return
  nextTick(() => {
    const tl = gsap.timeline()
    tl.fromTo('.gsap-hero-tag', 
      { y: -15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    )
    .fromTo('.gsap-hero-title1', 
      { y: 35, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 
      '-=0.3'
    )
    .fromTo('.gsap-hero-title2', 
      { y: 35, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 
      '-=0.5'
    )
    .fromTo('.gsap-hero-desc', 
      { y: 25, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
      '-=0.4'
    )
    .fromTo('.gsap-hero-ctas', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 
      '-=0.3'
    )
  })
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  animateSlideWithGsap()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
  animateSlideWithGsap()
}

const goToSlide = (idx) => {
  if (currentSlide.value === idx) return
  currentSlide.value = idx
  animateSlideWithGsap()
}

const startAutoplay = () => {
  if (!autoplayInterval) {
    autoplayInterval = setInterval(nextSlide, 6500)
  }
}

const pauseAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

// 2. Quick Service Inquiry Form State
const quickServiceType = ref('Architectural Design & Floor Plans')
const quickPlotSize = ref('10 Marla (35x70)')
const quickLocation = ref('DHA Lahore')

const submitQuickInquiry = () => {
  const msg = `*Assalam-o-Alaikum H&Q Architectural Studio* 🏛️\n\n` +
    `I would like to inquire about design services for my project:\n` +
    `📌 *Service Needed:* ${quickServiceType.value}\n` +
    `📐 *Plot Scale:* ${quickPlotSize.value}\n` +
    `📍 *Location:* ${quickLocation.value}\n\n` +
    `Please share your portfolio, packages, and consultation availability.`
  openWhatsApp('923134487315', msg)
}

// 3. Estimator Widget State
const estimatorPlot = ref('10 Marla')
const estimatorType = ref('Turnkey')

const computedCoveredArea = computed(() => {
  if (estimatorPlot.value === '5 Marla') return '2,000'
  if (estimatorPlot.value === '10 Marla') return '3,300'
  if (estimatorPlot.value === '1 Kanal') return '5,500'
  return '9,500'
})

const computedEstimate = computed(() => {
  const isGrey = estimatorType.value === 'Grey'
  if (estimatorPlot.value === '5 Marla') {
    return isGrey ? 'PKR 52 - 58 Lacs' : 'PKR 1.15 - 1.30 Crore'
  }
  if (estimatorPlot.value === '10 Marla') {
    return isGrey ? 'PKR 88 - 98 Lacs' : 'PKR 1.95 - 2.25 Crore'
  }
  if (estimatorPlot.value === '1 Kanal') {
    return isGrey ? 'PKR 1.45 - 1.65 Crore' : 'PKR 3.30 - 3.80 Crore'
  }
  return isGrey ? 'PKR 2.80 - 3.20 Crore' : 'PKR 6.00 - 7.20 Crore'
})

const openEstimateWhatsApp = () => {
  const msg = `Assalam-o-Alaikum H&Q Architects, I want a detailed 2026 BOQ quotation for:
Plot Dimension: ${estimatorPlot.value}
Covered Area: ~${computedCoveredArea.value} sq. ft.
Package: ${estimatorType.value} Structure
Estimated Budget: ${computedEstimate.value}`
  openWhatsApp('923134487315', msg)
}

onMounted(() => {
  startAutoplay()
  animateSlideWithGsap()

  if (typeof window !== 'undefined') {
    nextTick(() => {
      // 1. GSAP Animation for Service Cards (ALWAYS visible, smooth entrance without black holes)
      const serviceCards = document.querySelectorAll('.gsap-service-card')
      if (serviceCards.length > 0) {
        if ('IntersectionObserver' in window) {
          const serviceObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                gsap.fromTo(serviceCards, 
                  { opacity: 0.7, y: 18 },
                  { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out', clearProps: 'all' }
                )
                obs.disconnect()
              }
            })
          }, { threshold: 0.05, rootMargin: '80px 0px' })
          const triggerEl = document.querySelector('#services-section') || serviceCards[0]
          serviceObserver.observe(triggerEl)
        } else {
          gsap.to(serviceCards, { opacity: 1, y: 0, clearProps: 'all' })
        }
      }

      // 2. GSAP Animation for 4-Step Workflow
      const workflowSteps = document.querySelectorAll('.gsap-workflow-step')
      if (workflowSteps.length > 0) {
        if ('IntersectionObserver' in window) {
          const workflowObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                gsap.fromTo(workflowSteps, 
                  { opacity: 0.7, y: 18 },
                  { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', clearProps: 'all' }
                )
                obs.disconnect()
              }
            })
          }, { threshold: 0.05, rootMargin: '80px 0px' })
          const triggerEl = document.querySelector('#workflow-section') || workflowSteps[0]
          workflowObserver.observe(triggerEl)
        } else {
          gsap.to(workflowSteps, { opacity: 1, y: 0, clearProps: 'all' })
        }
      }

      // 3. GSAP Animated Counter Numbers
      const statsSection = document.querySelector('#stats-section')
      if (statsSection && 'IntersectionObserver' in window) {
        const statsObserver = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(statNumbers.value, {
                projects: 500,
                years: 15,
                clients: 200,
                approval: 100,
                duration: 2,
                ease: 'power2.out',
                roundProps: 'projects,years,clients,approval'
              })
              obs.disconnect()
            }
          })
        }, { threshold: 0.1 })
        statsObserver.observe(statsSection)
      }

      // 4. GSAP Continuous Floating Motion for Experience Badge
      const floatBadge = document.querySelector('.gsap-float-badge')
      if (floatBadge) {
        gsap.to(floatBadge, {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      }
    })
  }
})

onUnmounted(() => {
  pauseAutoplay()
})
</script>
