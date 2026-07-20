<template>
  <div class="space-y-16 pb-20">
    
    <!-- Hero Section (Zameen.com Style) -->
    <section class="relative min-h-[92vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden bg-slate-950 text-white">
      <!-- Glow Gradients -->
      <div class="absolute -top-30 -right-20 w-[500px] h-[500px] bg-[#088C7E]/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[100px] pointer-events-none"></div>
      
      <!-- Background Image Overlay -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" 
          alt="Zameen Architecture Hero" 
          class="w-full h-full object-cover opacity-30 mix-blend-overlay"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
      </div>

      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          
          <!-- Zameen Trust Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#088C7E]/20 border border-[#088C7E]/40 text-xs font-semibold backdrop-blur-md">
            <i class="fa-solid fa-award text-amber-300"></i>
            <span class="text-white font-bold">{{ t.officialZameenPartner }}</span>
            <span class="text-white/40">|</span>
            <span class="text-amber-300">{{ t.parkviewStudioLahore }}</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
            {{ t.heroTitle }}
          </h1>

          <p class="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto">
            {{ t.heroSubtitle }}
          </p>

          <!-- Authentic Zameen.com Search Box (Dark & Light Theme Adaptive) -->
          <div class="mt-8 p-4 sm:p-6 rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-2xl dark:bg-slate-900/95 dark:text-white dark:border-slate-800 backdrop-blur-2xl space-y-4 text-left transition-colors duration-300">
            
            <!-- Category Tabs (Zameen Style) -->
            <div class="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <button 
                v-for="tab in zameenTabs" 
                :key="tab"
                @click="activeZameenTab = tab"
                :class="[
                  'px-5 py-2 rounded-xl text-xs font-extrabold tracking-wide transition-all uppercase flex items-center gap-2',
                  activeZameenTab === tab 
                    ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/30' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#088C7E] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                ]"
              >
                <i class="fa-solid fa-house-chimney text-xs"></i>
                <span>{{ tab }}</span>
              </button>
            </div>

            <!-- Filter Inputs Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              
              <!-- Location Select -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-location-dot text-[#088C7E]"></i> {{ t.citySociety }}
                </label>
                <select 
                  v-model="searchLocation" 
                  class="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                >
                  <option value="Parkview City">Parkview City, Lahore</option>
                  <option value="DHA Lahore">DHA Phase 1-9, Lahore</option>
                  <option value="Gulberg 3">Gulberg 3, Lahore</option>
                  <option value="Bahria Town">Bahria Town, Lahore</option>
                  <option value="Overseas">Overseas Pakistani Client</option>
                </select>
              </div>

              <!-- Design Type Select -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> {{ t.designType }}
                </label>
                <select 
                  v-model="searchCategory" 
                  class="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                >
                  <option value="Architectural Floor Plans">Architectural Floor Plans</option>
                  <option value="3D Elevation Renders">3D Elevation Renders</option>
                  <option value="Luxury Interior Design">Luxury Interior Styling</option>
                  <option value="Full Home Renovation">Full Home Renovation</option>
                </select>
              </div>

              <!-- Plot Size Select -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-ruler-combined text-[#088C7E]"></i> {{ t.plotScale }}
                </label>
                <select 
                  v-model="searchPlot" 
                  class="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                >
                  <option value="5 Marla">5 Marla Villa</option>
                  <option value="10 Marla">10 Marla Luxury</option>
                  <option value="1 Kanal">1 Kanal Estate</option>
                  <option value="Commercial">Commercial Plaza</option>
                </select>
              </div>

              <!-- Budget Range Select -->
              <div>
                <label class="block text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1">
                  <i class="fa-solid fa-money-bill-wave text-[#088C7E]"></i> {{ t.budgetPackage }}
                </label>
                <select 
                  v-model="searchBudget" 
                  class="w-full px-3.5 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#088C7E]"
                >
                  <option value="Standard">Standard Package</option>
                  <option value="Premium">Premium Luxury</option>
                  <option value="Royal">Royal Custom Estate</option>
                </select>
              </div>

            </div>

            <!-- Action Row -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div class="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                <i class="fa-solid fa-shield-halved text-[#088C7E]"></i>
                <span>Zameen.com Verified Engineering Standard · Parkview City Approval Guaranteed</span>
              </div>
              <button 
                @click="performZameenSearch"
                class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-[#088C7E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>{{ t.findDesign }}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- Zameen Quick Category Icons Strip -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <div 
          v-for="cat in quickCategories" 
          :key="cat.name"
          @click="$emit('open-start-project')"
          class="p-4 rounded-2xl bg-white text-slate-900 dark:bg-slate-900/60 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] transition-all cursor-pointer text-center group space-y-2 shadow-sm"
        >
          <div class="w-12 h-12 rounded-xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-xl mx-auto group-hover:bg-[#088C7E] group-hover:text-white transition-colors">
            <i :class="cat.icon"></i>
          </div>
          <h4 class="text-xs font-bold group-hover:text-[#088C7E] transition-colors">{{ cat.name }}</h4>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 block">{{ cat.count }}</span>
        </div>
      </div>
    </section>

    <!-- Continuous Infinite Marquee Ticker (Right to Left Continuous Motion) -->
    <section class="border-y border-slate-200 dark:border-slate-800 py-3.5 overflow-hidden bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-white">
      <div class="flex w-max animate-marquee">
        <!-- Set 1 -->
        <div class="flex items-center gap-12 text-xs font-bold shrink-0 pr-12">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-500"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> 500+ Villas Designed</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-amber-500"></i> 4K 3D Render Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone text-[#088C7E]"></i> Call 0313-4487315</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe text-[#088C7E]"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-500"></i> Affiliated with Zameen.com</span>
        </div>
        <!-- Set 2 -->
        <div class="flex items-center gap-12 text-xs font-bold shrink-0 pr-12">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-500"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> 500+ Villas Designed</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-amber-500"></i> 4K 3D Render Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone text-[#088C7E]"></i> Call 0313-4487315</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe text-[#088C7E]"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-500"></i> Affiliated with Zameen.com</span>
        </div>
      </div>
    </section>

    <!-- Zameen Real Estate News & Projects Ticker Cards Section -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <div class="flex justify-between items-center">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-newspaper text-[#088C7E]"></i>
          <span>Zameen Design & Real Estate Trends</span>
        </h3>
        <router-link to="/blog" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          <span>Read All News</span>
          <i class="fa-solid fa-arrow-right text-[10px]"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          v-for="news in zameenNews" 
          :key="news.title"
          class="p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-[#088C7E] transition-all cursor-pointer group"
          @click="$router.push('/blog')"
        >
          <img :src="news.image" :alt="news.title" class="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform" />
          <div class="space-y-1">
            <h4 class="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors line-clamp-2">{{ news.title }}</h4>
            <span class="text-[10px] text-slate-400 block">{{ news.date }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Client Proof Stats Counter -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 text-center shadow-sm">
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">500+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Projects Completed</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">15+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Years Experience</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">200+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Happy Clients</p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-extrabold text-gradient-zameen">50+</div>
          <p class="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">Design Awards</p>
        </div>
      </div>
    </section>

    <!-- End-to-End Architectural Services Grid -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
          Our Specializations
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          End-to-End Design & Build Excellence
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-sm">
          Comprehensive architectural and interior solutions tailored to your unique lifestyle and luxury aspirations.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="group p-8 rounded-3xl bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-[#088C7E]/50 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-[#088C7E]/10 text-[#088C7E] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#088C7E] group-hover:text-white transition-colors">
              <i :class="service.iconClass"></i>
            </div>
            <h3 class="text-xl font-bold mb-3">{{ service.title }}</h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{{ service.description }}</p>
          </div>
          <button 
            @click="$emit('open-start-project')" 
            class="inline-flex items-center gap-1.5 text-xs font-bold text-[#088C7E] hover:gap-3 transition-all cursor-pointer"
          >
            <span>Get Custom Quote</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Interactive Project Estimator Tool -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <ProjectEstimator @request-quote="$emit('open-start-project')" />
    </section>

    <!-- Zameen Featured Projects Showcase -->
    <section id="results" class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span class="px-3.5 py-1 rounded-full text-xs font-bold bg-[#088C7E]/10 text-[#088C7E] uppercase tracking-wider border border-[#088C7E]/20">
            Zameen Featured Listings
          </span>
          <h2 class="text-3xl font-black text-slate-900 dark:text-white mt-2">
            Top Architecture & Interior Projects
          </h2>
        </div>
        <router-link 
          to="/portfolio" 
          class="px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-800 hover:border-[#088C7E] text-xs font-bold text-slate-900 dark:text-white transition-colors flex items-center gap-2"
        >
          <span>View All Projects</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="project in zameenListings" 
          :key="project.id"
          class="group rounded-3xl overflow-hidden bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div class="relative h-64 overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#088C7E] text-white text-xs font-black shadow-lg">
                {{ project.price }}
              </div>
              <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 text-xs font-bold border border-amber-500/20 flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-emerald-400"></i> Zameen Verified
              </div>
            </div>

            <div class="p-6 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span class="flex items-center gap-1"><i class="fa-solid fa-location-dot text-[#088C7E]"></i> {{ project.location }}</span>
                <span class="font-bold text-slate-900 dark:text-white">{{ project.plotSize }}</span>
              </div>
              
              <h3 class="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">{{ project.title }}</h3>
              
              <div class="flex items-center gap-4 text-xs text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span class="flex items-center gap-1"><i class="fa-solid fa-bed text-[#088C7E]"></i> {{ project.beds }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-bath text-[#088C7E]"></i> {{ project.baths }}</span>
                <span class="flex items-center gap-1"><i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> 3D Render</span>
              </div>
            </div>
          </div>

          <div class="p-6 pt-0">
            <button 
              @click="$emit('open-start-project')"
              class="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#088C7E] hover:text-white text-slate-800 dark:text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <i class="fa-solid fa-phone text-xs"></i>
              <span>Contact Architect</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Zameen Popular Locations Directory Section -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-4">
      <div class="border-t border-slate-200 dark:border-slate-800 pt-10 space-y-6">
        
        <!-- Header & Tabs -->
        <div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">Popular Locations</h2>
          <div class="flex items-center gap-6 border-b border-slate-200 dark:border-slate-800 text-sm font-bold pb-2">
            <button 
              @click="popularTab = 'sale'"
              :class="['pb-2 border-b-2 transition-colors', popularTab === 'sale' ? 'border-[#088C7E] text-[#088C7E]' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white']"
            >
              For Sale
            </button>
            <button 
              @click="popularTab = 'rent'"
              :class="['pb-2 border-b-2 transition-colors', popularTab === 'rent' ? 'border-[#088C7E] text-[#088C7E]' : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white']"
            >
              To Rent
            </button>
          </div>
        </div>

        <!-- Section 1: Most Popular Locations for Plots & Villa Designs -->
        <div class="space-y-4">
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">Most Popular Locations for Plots & Architectural Designs</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
            <!-- Lahore Column -->
            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-3">Lahore</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots & Designs in DHA Defence</span>
                <span class="text-slate-400 font-mono">(11,830)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots & Designs on Raiwind Road</span>
                <span class="text-slate-400 font-mono">(2,783)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots & Designs in Bahria Town</span>
                <span class="text-slate-400 font-mono">(2,047)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-[#088C7E] font-bold flex items-center justify-between">
                <span>↗ Villa Designs in Park View City</span>
                <span class="text-[#088C7E] font-mono">(1,925)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in Bahria Orchard</span>
                <span class="text-slate-400 font-mono">(1,621)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale on LDA Road</span>
                <span class="text-slate-400 font-mono">(1,415)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in Central Park Housing</span>
                <span class="text-slate-400 font-mono">(995)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in DHA 11 Rahbar</span>
                <span class="text-slate-400 font-mono">(899)</span>
              </a>
            </div>

            <!-- Karachi Column -->
            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-3">Karachi</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in Scheme 33</span>
                <span class="text-slate-400 font-mono">(3,244)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in DHA Defence</span>
                <span class="text-slate-400 font-mono">(1,995)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in Gadap Town</span>
                <span class="text-slate-400 font-mono">(1,665)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in DHA City Karachi</span>
                <span class="text-slate-400 font-mono">(1,624)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in Bahria Town Karachi</span>
                <span class="text-slate-400 font-mono">(1,063)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in Naya Nazimabad</span>
                <span class="text-slate-400 font-mono">(958)</span>
              </a>
            </div>

            <!-- Islamabad Column -->
            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-3">Islamabad</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in DHA Defence</span>
                <span class="text-slate-400 font-mono">(6,340)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in Gulberg</span>
                <span class="text-slate-400 font-mono">(2,411)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots for sale in B-17</span>
                <span class="text-slate-400 font-mono">(1,963)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in Bahria Town</span>
                <span class="text-slate-400 font-mono">(1,759)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Plots in Faisal Hills</span>
                <span class="text-slate-400 font-mono">(1,603)</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Section 2: Most Popular Locations for Flats & Interior Styling -->
        <div class="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <h3 class="text-base font-bold text-slate-800 dark:text-slate-200">Most Popular Locations for Flats & Interior Styling</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-2">Lahore</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Flats & Interiors in Bahria Town</span>
                <span class="text-slate-400 font-mono">(910)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Luxury Interiors in Askari</span>
                <span class="text-slate-400 font-mono">(806)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Modern Apartments in Gulberg</span>
                <span class="text-slate-400 font-mono">(374)</span>
              </a>
            </div>

            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-2">Karachi</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Luxury Apartments in DHA Defence</span>
                <span class="text-slate-400 font-mono">(2,314)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Flats in Gulshan-e-Iqbal Town</span>
                <span class="text-slate-400 font-mono">(1,395)</span>
              </a>
            </div>

            <div class="space-y-2.5">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-2">Islamabad</h4>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Luxury Apartments in DHA Defence</span>
                <span class="text-slate-400 font-mono">(794)</span>
              </a>
              <a href="https://www.zameen.com/" target="_blank" rel="noopener" class="text-slate-700 dark:text-slate-300 hover:text-[#088C7E] transition-colors flex items-center justify-between">
                <span>↗ Flats & Interiors in E-11</span>
                <span class="text-slate-400 font-mono">(266)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- FAQ Accordion Section -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">Everything you need to know about starting your project with H&Q Design Services.</p>
      </div>

      <div class="space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index"
          class="p-6 rounded-2xl bg-white dark:bg-slate-900/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 cursor-pointer transition-colors shadow-sm"
          @click="faq.open = !faq.open"
        >
          <div class="flex justify-between items-center font-bold text-base">
            <span>{{ faq.q }}</span>
            <span class="text-[#088C7E] text-xl font-bold">{{ faq.open ? '−' : '+' }}</span>
          </div>
          <p v-if="faq.open" class="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
            {{ faq.a }}
          </p>
        </div>
      </div>
    </section>

    <!-- Bottom Lead CTA Banner (Zameen Style) -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-14 text-white overflow-hidden border border-slate-800 text-center space-y-6">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#088C7E]/20 rounded-full blur-3xl pointer-events-none"></div>

        <h2 class="text-3xl sm:text-5xl font-black tracking-tight">
          Ready to Build Your <span class="text-gradient-zameen">Dream Villa?</span>
        </h2>
        <p class="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
          Visit our flagship architectural studio in Parkview City, Lahore or book a free 3D design consultation today.
        </p>

        <div class="flex flex-wrap justify-center gap-4 pt-2">
          <button 
            @click="$emit('open-start-project')"
            class="px-8 py-4 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-bold text-base shadow-xl shadow-[#088C7E]/30 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <i class="fa-solid fa-paper-plane"></i>
            <span>Get Free Consultation</span>
          </button>
          <a 
            href="https://wa.me/923134487315" 
            target="_blank"
            class="px-8 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-base transition-all hover:scale-105 flex items-center gap-2"
          >
            <i class="fa-brands fa-whatsapp text-lg"></i>
            <span>WhatsApp 0313-4487315</span>
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectEstimator from '../components/ProjectEstimator.vue'
import { useI18n } from '../composables/useI18n.js'

const emit = defineEmits(['open-start-project'])

const { t } = useI18n()

const zameenTabs = ['ALL DESIGNS', '5 MARLA VILLA', '10 MARLA LUXURY', '1 KANAL ESTATE', 'COMMERCIAL PLAZA']
const activeZameenTab = ref('ALL DESIGNS')

const popularTab = ref('sale')

const searchLocation = ref('Parkview City')
const searchCategory = ref('Architectural Floor Plans')
const searchPlot = ref('10 Marla')
const searchBudget = ref('Standard')

const performZameenSearch = () => {
  emit('open-start-project')
}

const quickCategories = ref([
  { name: 'Houses & Villas', count: '320+ Designs', icon: 'fa-solid fa-house-chimney' },
  { name: '3D Elevation Renders', count: '450+ 4K Renders', icon: 'fa-solid fa-cube' },
  { name: 'Luxury Interiors', count: '200+ Styling Pkgs', icon: 'fa-solid fa-couch' },
  { name: 'Commercial Plazas', count: '45+ Plazas', icon: 'fa-solid fa-building' },
  { name: 'Space Planning', count: '500+ Layouts', icon: 'fa-solid fa-ruler-combined' },
  { name: 'Full Renovation', count: '80+ Turnkey Builds', icon: 'fa-solid fa-hammer' }
])

const zameenNews = ref([
  {
    title: 'Rawalpindi Ring Road & Lahore Bypass Infrastructure Progress',
    date: '19 July 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80'
  },
  {
    title: 'Ground Broken: Future Sealed at Marbella Drive Park View City',
    date: '18 July 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80'
  },
  {
    title: 'Grand Orchard & DHA Islamabad Investment & Architectural Trends',
    date: '16 July 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80'
  },
  {
    title: 'Live Now: Zameen Aurum & Property Blocks in Gulberg III Lahore',
    date: '14 July 2026',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&q=80'
  }
])

const zameenListings = ref([
  {
    id: 1,
    title: 'Modern 10 Marla Spanish Villa Floor Plan',
    location: 'Parkview City, Lahore',
    plotSize: '10 Marla',
    price: 'PKR 2.8 Lac',
    beds: '5 Beds',
    baths: '6 Baths',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
  },
  {
    id: 2,
    title: 'Executive DHA Phase 6 Interior Package',
    location: 'DHA Phase 6, Lahore',
    plotSize: '1 Kanal',
    price: 'PKR 4.8 Lac',
    beds: '4 Beds',
    baths: '5 Baths',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
  },
  {
    id: 3,
    title: 'Gulberg 3 Corporate Office Design',
    location: 'Gulberg 3, Lahore',
    plotSize: '6,000 sq.ft',
    price: 'PKR 6.5 Lac',
    beds: '8 Pods',
    baths: '4 Baths',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
  }
])

const services = ref([
  {
    title: 'Architectural Design',
    description: 'Complete architectural solutions from concept floor plans to structural submission drawings for residential & commercial builds.',
    iconClass: 'fa-solid fa-compass-drafting'
  },
  {
    title: 'Luxury Interior Design',
    description: 'Transform your living room, master suite, or executive workspace with customized furniture, lighting, and marble styling.',
    iconClass: 'fa-solid fa-couch'
  },
  {
    title: 'Photorealistic 3D Renders',
    description: 'Ultra HD 4K 3D visualizations and video walkthroughs to preview your building elevation before construction begins.',
    iconClass: 'fa-solid fa-cube'
  },
  {
    title: 'Space & Layout Planning',
    description: 'Maximize flow, natural light, and space efficiency for 5 Marla, 10 Marla, 1 Kanal villas, and commercial spaces.',
    iconClass: 'fa-solid fa-ruler-combined'
  },
  {
    title: 'Custom Furniture Crafting',
    description: 'Handcrafted luxury sofas, dining sets, media walls, and custom wood paneling fitted precisely to your interior layout.',
    iconClass: 'fa-solid fa-chair'
  },
  {
    title: 'Full Home Renovation',
    description: 'Give your existing property a modern luxury upgrade with our structural & aesthetic overhaul services.',
    iconClass: 'fa-solid fa-hammer'
  }
])

const faqs = ref([
  {
    q: 'Where is H&Q Design Services located?',
    a: 'Our flagship architectural studio is located in Parkview City, Lahore, Pakistan. We serve clients across Lahore (Parkview City, DHA, Gulberg, Bahria Town) as well as overseas Pakistani clients.',
    open: true
  },
  {
    q: 'Are you affiliated with Zameen.com?',
    a: 'Yes! H&Q Design Services is an official partner affiliated with Zameen.com, ensuring verified engineering standards and trust.',
    open: false
  },
  {
    q: 'How does the 3D visualization process work?',
    a: 'We create photorealistic 3D renders and video walkthroughs of your exterior elevation and interior rooms so you can visualize materials, color schemes, and lighting before ground construction.',
    open: false
  },
  {
    q: 'How can I get an initial cost estimate for my plot?',
    a: 'You can use our interactive Design Estimator tool right on this page, or click "Get Free Consultation" to submit your plot details for a custom proposal.',
    open: false
  }
])
</script>
