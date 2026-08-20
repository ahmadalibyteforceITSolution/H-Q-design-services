<template>
  <div class="space-y-16 pb-16">
    
    <!-- Edge-to-Edge Full-Width Hero Section (0 Padding Left/Right/Top) -->
    <section class="w-full relative overflow-hidden min-h-[660px] flex flex-col justify-between py-12 lg:py-16 border-b border-slate-800/80 shadow-2xl group">
      
      <!-- High-Resolution Architectural Design Background Image -->
      <img 
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85" 
        alt="H&Q Luxury Villa Architectural Elevation Render" 
        class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
      />

      <!-- Cinematic Multi-Layer Dark Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45 pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60 pointer-events-none"></div>
      <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#088C7E]/25 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Max-Width Inner Container for Text & Elements -->
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-8">
        
        <!-- Top Luxury Badges -->
        <div class="flex flex-wrap items-center gap-3">
          <span class="px-4 py-1.5 rounded-full text-xs font-black bg-[#088C7E] text-white tracking-wider uppercase shadow-xl flex items-center gap-2 border border-emerald-400/30">
            <i class="fa-solid fa-award text-amber-300 text-sm"></i>
            <span>Official Zameen.com Verified Partner</span>
          </span>
          <span class="px-4 py-1.5 rounded-full text-xs font-extrabold bg-slate-900/90 text-amber-300 backdrop-blur-md border border-amber-500/30 flex items-center gap-1.5 shadow-lg">
            <i class="fa-solid fa-location-dot text-[#088C7E]"></i>
            <span>Parkview City Studio · Lahore</span>
          </span>
          <span class="px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-300 backdrop-blur-md border border-emerald-500/30 hidden sm:flex items-center gap-1.5 shadow-lg">
            <i class="fa-solid fa-shield-halved text-emerald-400"></i>
            <span>LDA, CDA & DHA Bylaws Compliant</span>
          </span>
        </div>

        <!-- Main Heading & Subtitle -->
        <div class="max-w-4xl space-y-4">
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight drop-shadow-2xl">
            Search Properties, <span class="text-gradient-zameen">3D Architecture & Plots</span> in Pakistan
          </h1>
          <p class="text-slate-200 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
            Find verified villas, commercial plazas, on-ground plots, and photorealistic 4K 3D elevation blueprints across Parkview City, DHA, and Gulberg Lahore.
          </p>
        </div>

        <!-- Zameen Property Search Filter Glassmorphic Widget -->
        <div class="p-5 sm:p-7 rounded-3xl bg-slate-950/75 backdrop-blur-2xl border border-slate-700/60 shadow-2xl space-y-5 max-w-5xl">
          
          <!-- Category Tabs (Buy / Rent / Projects / Plots / Commercial) -->
          <div class="flex flex-wrap items-center gap-2 border-b border-slate-700/60 pb-3 text-xs font-extrabold">
            <button 
              v-for="tab in ['BUY', 'RENT', 'PLOTS', 'COMMERCIAL', 'NEW PROJECTS']" 
              :key="tab"
              @click="activeSearchTab = tab"
              :class="[
                'px-4 py-2 rounded-xl transition-all cursor-pointer tracking-wider',
                activeSearchTab === tab ? 'bg-[#088C7E] text-white shadow-lg shadow-[#088C7E]/40' : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              ]"
            >
              {{ tab }}
            </button>
          </div>

          <!-- Dropdown Selectors Row -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-bold">
            
            <!-- City / Location Selector -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">City / Housing Society</label>
              <select v-model="searchLocation" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="All">All Locations (Pakistan)</option>
                <option value="Parkview City">Parkview City, Lahore</option>
                <option value="DHA Lahore">DHA Phase 1-9, Lahore</option>
                <option value="Gulberg Lahore">Gulberg III, Lahore</option>
                <option value="Lake City">Lake City, Lahore</option>
                <option value="DHA Islamabad">DHA Islamabad</option>
                <option value="Bahria Town Karachi">Bahria Town Karachi</option>
              </select>
            </div>

            <!-- Property Type -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Property / Design Type</label>
              <select v-model="searchType" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="All">All Types</option>
                <option value="House">Residential Villa / House</option>
                <option value="Plot">Residential / Commercial Plot</option>
                <option value="Commercial">Commercial Plaza</option>
                <option value="Apartment">Apartment / Penthouse</option>
              </select>
            </div>

            <!-- Plot Size Selector -->
            <div class="space-y-1.5">
              <label class="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">Plot Dimension</label>
              <select v-model="searchPlot" class="w-full px-4 py-3 rounded-xl bg-slate-900/90 text-white border border-slate-700 focus:outline-none focus:border-[#088C7E] shadow-inner font-semibold">
                <option value="All">All Sizes</option>
                <option value="5 Marla">5 Marla (25x45)</option>
                <option value="10 Marla">10 Marla (35x70)</option>
                <option value="1 Kanal">1 Kanal (50x90)</option>
                <option value="Commercial">Commercial Plaza</option>
              </select>
            </div>

            <!-- Search Button -->
            <div class="flex items-end">
              <button 
                @click="goToProperties"
                class="w-full py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-[#088C7E]/40 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02]"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
                <span>Find Properties</span>
              </button>
            </div>

          </div>

        </div>

      </div>

      <!-- Floating Stats Footbar Inside Full Hero -->
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-300 mt-6">
        <div class="flex items-center gap-6 flex-wrap">
          <span class="flex items-center gap-2"><i class="fa-solid fa-building-user text-amber-400 text-base"></i> 500+ Completed Villas</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-cube text-emerald-400 text-base"></i> 4K 3D Photorealistic Engine</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-file-signature text-cyan-400 text-base"></i> 100% Submission Approval Guarantee</span>
        </div>
        <a href="https://wa.me/966507143124" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-extrabold">
          <i class="fa-brands fa-whatsapp text-sm"></i> WhatsApp Architect Desk: +966 50 714 3124 →
        </a>
      </div>

    </section>

    <!-- Infinite Auto-Scrolling Announcement Marquee Ticker -->
    <section class="w-full overflow-hidden bg-[#088C7E] text-white py-3 shadow-md border-y border-[#088C7E]/30">
      <div class="flex w-max animate-marquee space-x-12">
        <div class="flex items-center gap-12 text-xs font-bold shrink-0">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-300"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-calculator text-amber-300"></i> 2026 Construction Cost Calculator</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-city"></i> Verified Plots & New Mega Projects</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> Call 0341-6887454</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-300"></i> Affiliated with Zameen.com</span>
        </div>
        <div class="flex items-center gap-12 text-xs font-bold shrink-0 pr-12">
          <span class="flex items-center gap-2"><i class="fa-solid fa-award text-amber-300"></i> Official Partner: Zameen.com</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-location-dot"></i> Parkview City Studio Lahore</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-calculator text-amber-300"></i> 2026 Construction Cost Calculator</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-city"></i> Verified Plots & New Mega Projects</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-phone"></i> Call 0341-6887454</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-globe"></i> KSA +966 50 714 3124</span>
          <span class="flex items-center gap-2"><i class="fa-solid fa-handshake text-amber-300"></i> Affiliated with Zameen.com</span>
        </div>
      </div>
    </section>

    <!-- ZAMEEN CORE TOOLS HUB SHORTCUTS SECTION -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-[#088C7E]">Interactive Real Estate Suite</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Zameen Construction & Property Tools</h2>
        </div>
        <router-link to="/tools" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          <span>Open Full Tools Suite</span>
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <router-link 
          to="/tools" 
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:-translate-y-1 transition-all shadow-sm group space-y-4"
        >
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#088C7E] flex items-center justify-center text-xl group-hover:bg-[#088C7E] group-hover:text-white transition-colors">
            <i class="fa-solid fa-calculator"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">Cost Calculator</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Itemized 2026 construction estimates for Grey structure & Turnkey.</p>
          </div>
          <span class="text-xs font-bold text-[#088C7E] flex items-center gap-1">Calculate Now →</span>
        </router-link>

        <router-link 
          to="/tools" 
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:-translate-y-1 transition-all shadow-sm group space-y-4"
        >
          <div class="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-xl group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <i class="fa-solid fa-map-location-dot"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">Plot Finder & Maps</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">High-definition sector and block layouts for Parkview & DHA.</p>
          </div>
          <span class="text-xs font-bold text-[#088C7E] flex items-center gap-1">Explore Maps →</span>
        </router-link>

        <router-link 
          to="/tools" 
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:-translate-y-1 transition-all shadow-sm group space-y-4"
        >
          <div class="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center text-xl group-hover:bg-cyan-500 group-hover:text-white transition-colors">
            <i class="fa-solid fa-ruler-combined"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">Area Unit Converter</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Convert instantly between Marla, Kanal, Sq. Ft., Sq. Yd. and Acres.</p>
          </div>
          <span class="text-xs font-bold text-[#088C7E] flex items-center gap-1">Convert Units →</span>
        </router-link>

        <router-link 
          to="/tools" 
          class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] hover:-translate-y-1 transition-all shadow-sm group space-y-4"
        >
          <div class="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center text-xl group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <i class="fa-solid fa-landmark"></i>
          </div>
          <div>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors">Mortgage Calculator</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Estimate monthly EMI repayments based on loan tenure and KIBOR.</p>
          </div>
          <span class="text-xs font-bold text-[#088C7E] flex items-center gap-1">Calculate EMI →</span>
        </router-link>

      </div>
    </section>

    <!-- FEATURED VERIFIED PROPERTIES SECTION -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-[#088C7E]">Direct from Builder & Certified</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Featured Verified Properties</h2>
        </div>
        <router-link to="/properties" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          <span>View All {{ propertiesData.length }} Properties</span>
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="item in propertiesData.slice(0, 3)" 
          :key="item.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between"
        >
          <!-- Image Banner -->
          <div class="relative h-60 overflow-hidden bg-slate-950 cursor-pointer" @click="selectedProperty = item">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-3 left-3 flex gap-1.5">
              <span class="px-2.5 py-1 rounded-lg bg-[#088C7E] text-white text-[10px] font-black uppercase tracking-wider shadow flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-amber-300"></i>
                <span>Verified</span>
              </span>
            </div>
            <div class="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl text-white font-black text-lg shadow-lg border border-white/10">
              {{ item.priceFormatted }}
            </div>
            <div class="absolute bottom-3 right-3 bg-[#088C7E]/90 px-2.5 py-1 rounded-lg text-white font-bold text-[10px]">
              {{ item.purpose }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-5 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-[11px] font-bold text-[#088C7E]">
                <i class="fa-solid fa-location-dot"></i>
                <span class="truncate">{{ item.location }}</span>
              </div>
              <h3 @click="selectedProperty = item" class="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 hover:text-[#088C7E] transition-colors cursor-pointer">
                {{ item.title }}
              </h3>
            </div>

            <!-- Specs Grid -->
            <div class="grid grid-cols-3 gap-2 py-2 border-y border-slate-100 dark:border-slate-800 text-center text-xs font-bold text-slate-600 dark:text-slate-400">
              <div class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-ruler text-[#088C7E]"></i>
                <span>{{ item.size }}</span>
              </div>
              <div v-if="item.bedrooms > 0" class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-bed text-[#088C7E]"></i>
                <span>{{ item.bedrooms }} Beds</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-map text-[#088C7E]"></i>
                <span>{{ item.type }}</span>
              </div>
              <div v-if="item.bathrooms > 0" class="flex items-center justify-center gap-1.5">
                <i class="fa-solid fa-bath text-[#088C7E]"></i>
                <span>{{ item.bathrooms }} Baths</span>
              </div>
              <div v-else class="flex items-center justify-center gap-1.5 text-emerald-500 font-bold">
                <i class="fa-solid fa-check"></i>
                <span>Approved</span>
              </div>
            </div>

            <!-- Actions Row -->
            <div class="flex items-center gap-2 pt-1">
              <button 
                @click="selectedProperty = item"
                class="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-extrabold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                View Details
              </button>
              <a 
                :href="'https://wa.me/' + (item.agent?.whatsapp || '966507143124')"
                target="_blank"
                class="px-3.5 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black transition-transform hover:scale-105 shadow-md flex items-center justify-center"
                title="Direct WhatsApp"
              >
                <i class="fa-brands fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW PROJECTS & DEVELOPMENTS SHOWCASE -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-[#088C7E]">LDA & CDA Approved</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Top Mega Housing & Commercial Projects</h2>
        </div>
        <router-link to="/projects" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          <span>View All Mega Projects</span>
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="proj in projectsData.slice(0, 2)" 
          :key="proj.id"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all space-y-6 flex flex-col justify-between"
        >
          <div class="relative h-64 overflow-hidden bg-slate-950">
            <img :src="proj.image" :alt="proj.title" class="w-full h-full object-cover" />
            <div class="absolute top-4 left-4 flex gap-2">
              <span class="px-3 py-1 rounded-full bg-[#088C7E] text-white text-[10px] font-black uppercase">
                {{ proj.nocStatus.split(' ')[0] }} Approved
              </span>
            </div>
            <div class="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-white font-black text-sm border border-white/10">
              Starts: {{ proj.priceStarting }} · {{ proj.installmentPlan }}
            </div>
          </div>

          <div class="p-6 sm:p-8 space-y-4">
            <div class="space-y-2">
              <span class="text-xs font-bold text-[#088C7E]"><i class="fa-solid fa-location-dot mr-1"></i>{{ proj.location }}</span>
              <h3 class="text-xl font-black text-slate-900 dark:text-white">{{ proj.title }}</h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{{ proj.overview }}</p>
            </div>

            <div class="pt-2">
              <router-link 
                to="/projects" 
                class="w-full py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md text-center"
              >
                <span>View Units & Installment Plans</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- AREA GUIDES & NEIGHBORHOOD INSIGHTS -->
    <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div class="space-y-1">
          <span class="text-xs font-black uppercase tracking-wider text-[#088C7E]">Localities Directory</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Explore Top Society Area Guides</h2>
        </div>
        <router-link to="/area-guides" class="text-xs font-bold text-[#088C7E] hover:underline flex items-center gap-1">
          <span>Read All Area Guides</span>
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <router-link 
          v-for="guide in areaGuidesData" 
          :key="guide.id"
          to="/area-guides"
          class="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#088C7E] transition-all shadow-sm group space-y-3"
        >
          <div class="h-36 rounded-2xl overflow-hidden bg-slate-950">
            <img :src="guide.image" :alt="guide.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <span class="text-[10px] font-bold text-amber-500 flex items-center gap-1">
              <i class="fa-solid fa-star"></i> Lifestyle {{ guide.lifestyleScore }} / 10
            </span>
            <h3 class="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-[#088C7E] transition-colors mt-1">
              {{ guide.name }}
            </h3>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">5M: {{ guide.avgPrice5Marla }}</p>
          </div>
        </router-link>
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

    <!-- Global Property Detail Modal -->
    <PropertyDetailModal 
      v-if="selectedProperty" 
      :property="selectedProperty" 
      @close="selectedProperty = null" 
    />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { propertiesData } from '../data/propertiesData.js'
import { projectsData } from '../data/projectsData.js'
import { areaGuidesData } from '../data/areaGuidesData.js'
import PropertyDetailModal from '../components/PropertyDetailModal.vue'

const router = useRouter()

const activeSearchTab = ref('BUY')
const searchLocation = ref('All')
const searchType = ref('All')
const searchPlot = ref('All')

const selectedProperty = ref(null)

const goToProperties = () => {
  router.push('/properties')
}
</script>
