<template>
  <section class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white p-6 sm:p-10 shadow-2xl space-y-8">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-3 py-1 rounded-full text-[10px] font-black uppercase bg-[#088C7E] text-white tracking-wider flex items-center gap-1.5 shadow-md">
              <i class="fa-solid fa-network-wired text-amber-300"></i>
              <span>H&Q Architecture Network</span>
            </span>
            <span class="text-xs font-bold text-slate-400">Explore Complete Ecosystem</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Explore <span class="text-[#088C7E]">Architectural Services</span>, Tools & Area Guides
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Quickly navigate across our full portfolio of 3D elevations, 2026 house construction cost calculators, Lahore society bylaws, verified properties, and architecture knowledge articles.
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

      <!-- 4-Column Internal Linking Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
        
        <!-- Hub 1: Architecture & Interior Design -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-[#088C7E] transition-colors group">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm font-black text-white group-hover:text-[#088C7E] transition-colors">
              <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i>
              <span>Design & Deliverables</span>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li>
                <router-link to="/services" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Architectural Design Services</span>
                </router-link>
              </li>
              <li>
                <router-link to="/portfolio" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>3D Elevations & Floor Plans</span>
                </router-link>
              </li>
              <li>
                <router-link to="/case-studies" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Completed Case Studies</span>
                </router-link>
              </li>
              <li>
                <router-link to="/reviews" class="hover:text-amber-400 flex items-center gap-2 transition-colors text-amber-300 font-semibold">
                  <i class="fa-solid fa-star text-[9px] text-amber-400"></i>
                  <span>Google Client Reviews (5.0 ★)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>About H&Q Design Studio</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="pt-3 border-t border-slate-800">
            <router-link to="/portfolio" class="text-[11px] font-bold text-[#088C7E] hover:underline flex items-center gap-1">
              <span>View 500+ Projects</span>
              <i class="fa-solid fa-arrow-right text-[9px]"></i>
            </router-link>
          </div>
        </div>

        <!-- Hub 2: Interactive Construction & Planning Tools -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-[#088C7E] transition-colors group">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm font-black text-white group-hover:text-[#088C7E] transition-colors">
              <i class="fa-solid fa-calculator text-[#088C7E]"></i>
              <span>Interactive Tools</span>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li>
                <router-link to="/tools?tab=cost-calc" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>2026 Construction Cost Calculator</span>
                </router-link>
              </li>
              <li>
                <router-link to="/tools?tab=plot-finder" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Society Plot Finder & Master Maps</span>
                </router-link>
              </li>
              <li>
                <router-link to="/tools?tab=unit-converter" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Area Unit Converter (Marla/SqFt)</span>
                </router-link>
              </li>
              <li>
                <router-link to="/tools?tab=mortgage-calc" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Bank Mortgage EMI Calculator</span>
                </router-link>
              </li>
              <li>
                <router-link to="/embed/calculator" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Embed Calculator Widget</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="pt-3 border-t border-slate-800">
            <router-link to="/tools" class="text-[11px] font-bold text-[#088C7E] hover:underline flex items-center gap-1">
              <span>Open Tools Suite</span>
              <i class="fa-solid fa-arrow-right text-[9px]"></i>
            </router-link>
          </div>
        </div>

        <!-- Hub 3: Housing Societies & Area Bylaws -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-[#088C7E] transition-colors group">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm font-black text-white group-hover:text-[#088C7E] transition-colors">
              <i class="fa-solid fa-city text-[#088C7E]"></i>
              <span>Societies & Bylaws</span>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li>
                <router-link to="/area-guides" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>DHA & Bahria Area Guides</span>
                </router-link>
              </li>
              <li>
                <router-link to="/trends" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Market Price Index & Trends</span>
                </router-link>
              </li>
              <li>
                <router-link to="/properties" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Verified Houses & Plots for Sale</span>
                </router-link>
              </li>
              <li>
                <router-link to="/projects" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>New Projects with Installments</span>
                </router-link>
              </li>
              <li>
                <router-link to="/agents" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Certified Engineers & Agents</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="pt-3 border-t border-slate-800">
            <router-link to="/area-guides" class="text-[11px] font-bold text-[#088C7E] hover:underline flex items-center gap-1">
              <span>Explore Bylaw Guides</span>
              <i class="fa-solid fa-arrow-right text-[9px]"></i>
            </router-link>
          </div>
        </div>

        <!-- Hub 4: Knowledge Glossary & Trending Topics -->
        <div class="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between hover:border-[#088C7E] transition-colors group">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-sm font-black text-white group-hover:text-[#088C7E] transition-colors">
              <i class="fa-solid fa-book-open text-[#088C7E]"></i>
              <span>Knowledge & Blueprints</span>
            </div>
            <ul class="space-y-2 text-slate-300">
              <li>
                <router-link to="/keywords/5-marla-house-design" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>5 Marla House Design</span>
                </router-link>
              </li>
              <li>
                <router-link to="/keywords/10-marla-spanish-villa" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>10 Marla Spanish Villa</span>
                </router-link>
              </li>
              <li>
                <router-link to="/keywords/1-kanal-house-plan" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>1 Kanal Modern House Plan</span>
                </router-link>
              </li>
              <li>
                <router-link to="/keywords/house-construction-cost-in-pakistan" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>House Construction Cost 2026</span>
                </router-link>
              </li>
              <li>
                <router-link to="/keywords/interior-designers-in-lahore" class="hover:text-emerald-400 flex items-center gap-2 transition-colors">
                  <i class="fa-solid fa-chevron-right text-[9px] text-[#088C7E]"></i>
                  <span>Interior Designers in Lahore</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="pt-3 border-t border-slate-800 flex items-center justify-between">
            <router-link to="/keywords-directory" class="text-[11px] font-bold text-[#088C7E] hover:underline flex items-center gap-1">
              <span>Keywords Hub</span>
              <i class="fa-solid fa-arrow-right text-[9px]"></i>
            </router-link>
            <router-link to="/blog" class="text-[11px] font-bold text-slate-400 hover:text-white flex items-center gap-1">
              <span>Blog (2,000+)</span>
            </router-link>
          </div>
        </div>

      </div>

      <!-- Quick Action Footprint Strip -->
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
          <a 
            href="https://wa.me/966507143124" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-3.5 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 transition-all font-bold flex items-center gap-1.5"
          >
            <i class="fa-brands fa-whatsapp text-sm"></i>
            <span>KSA Desk: +966 50 714 3124</span>
          </a>
          <a 
            href="tel:03416887454" 
            class="px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-all font-bold flex items-center gap-1.5"
          >
            <i class="fa-solid fa-phone text-xs text-[#088C7E]"></i>
            <span>0341-6887454</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Reusable SEO internal linking hub component
</script>
