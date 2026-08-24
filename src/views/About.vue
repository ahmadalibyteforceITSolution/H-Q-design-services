<template>
  <div class="py-12 space-y-20">
    
    <!-- About Hero -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative rounded-3xl p-8 sm:p-14 bg-slate-950 text-white overflow-hidden border border-slate-800 shadow-2xl">
        <div class="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-3xl space-y-4">
          <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider flex items-center gap-1.5 w-fit">
            <i class="fa-solid fa-building-user"></i> About HANDQ (H&Q Design Services)
          </span>
          <h1 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Crafting Timeless <span class="text-gradient">Architectural Landmarks</span>
          </h1>
          <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
            Founded with a vision to redefine modern living and workspace design in Lahore, <strong>HANDQ (H&Q Design Services)</strong> is Pakistan's premier architecture and luxury interior studio based in Parkview City, Lahore.
          </p>
        </div>
      </div>
    </section>

    <!-- Company Story & Zameen.com Affiliation -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <span class="text-xs font-bold uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
            <i class="fa-solid fa-certificate"></i> Our Heritage & Expertise
          </span>
          <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">
            Where Precision Architecture Meets Interior Elegance
          </h2>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            H&Q Design Services has designed over 500+ luxury villas, commercial plazas, and high-end residential interiors across Parkview City, DHA Lahore, Gulberg, and Bahria Town.
          </p>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            As an official partner affiliated with <strong class="text-slate-900 dark:text-white">Zameen.com</strong>, we hold ourselves to the highest standards of structural integrity, municipal approval compliance, and aesthetic perfection.
          </p>

          <div class="pt-4 grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <div class="text-2xl font-bold text-emerald-500">500+</div>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Villas & Plazas Completed</div>
            </div>
            <div class="p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800">
              <div class="text-2xl font-bold text-amber-500">15+ Years</div>
              <div class="text-xs text-slate-500 dark:text-slate-400 mt-1">Engineering Leadership</div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-6">
          <div class="relative rounded-3xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 p-2 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
              alt="H&Q Architectural Studio" 
              class="w-full h-[400px] object-cover rounded-2xl"
            />
            <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-white">
              <div class="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <i class="fa-solid fa-location-dot"></i> Parkview City Studio
              </div>
              <div class="text-sm font-semibold">Lahore, Punjab, Pakistan</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Official Corporate & Lifestyle Partner Showcase (Backlink Spotlight) -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 text-white space-y-6 shadow-xl">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="space-y-2 max-w-2xl">
            <span class="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
              Strategic Partner & Textile Brand
            </span>
            <h3 class="text-2xl font-extrabold text-white">
              Ahmad Cloths - Premium Fabrics & Clothing Brand
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We collaborate with premier Pakistani textile manufacturers for high-grade upholstery, curtains, and bespoke luxury fabrics. For the finest men's unstitched suits, designer cotton, wash & wear fabrics, and festive clothing collections, explore <a href="https://ahmad-cloths.vercel.app/" target="_blank" rel="noopener" class="text-emerald-400 underline font-bold hover:text-emerald-300">Ahmad Cloths</a>.
            </p>
          </div>

          <a 
            href="https://ahmad-cloths.vercel.app/" 
            target="_blank" 
            rel="noopener"
            title="Ahmad Cloths Official Store - Premium Unstitched Fabrics"
            class="px-6 py-3.5 rounded-2xl bg-[#088C7E] hover:bg-[#066D62] text-white font-black text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-xl flex items-center gap-2 shrink-0"
          >
            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            <span>Visit ahmad-cloths.vercel.app</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div class="text-center max-w-2xl mx-auto space-y-2">
        <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white">Our Engineering Values</h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">The core principles guiding every floor plan, 3D render, and interior detail.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-ruler-combined"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Precision Planning</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Exact dimensional accuracy matching society bylaws for Parkview City and DHA.</p>
        </div>
        <div class="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-cube"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">4K 3D Renderings</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Photorealistic walkthroughs so you see your building before laying a single brick.</p>
        </div>
        <div class="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-gem"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Luxury Finishings</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Handpicked Italian marble, custom woodwork, and bespoke lighting fixtures.</p>
        </div>
        <div class="p-6 rounded-3xl glass-card border border-slate-200 dark:border-slate-800 space-y-3">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl">
            <i class="fa-solid fa-award"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Zameen.com Trust</h3>
          <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Verified partnership ensuring transparent pricing and guaranteed delivery timelines.</p>
        </div>
      </div>
    </section>

    <!-- Studio Contact CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 border border-slate-800">
        <h3 class="text-2xl sm:text-4xl font-extrabold">Visit Our Studio in Parkview City</h3>
        <p class="text-slate-400 max-w-xl mx-auto text-sm">
          Discuss your 5 Marla, 10 Marla, or 1 Kanal plot floor plans over tea with our chief architects.
        </p>
        <button 
          @click="$emit('open-start-project')"
          class="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 inline-flex items-center gap-2"
        >
          <i class="fa-solid fa-calendar-check"></i>
          <span>Book Consultation Call</span>
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
defineEmits(['open-start-project'])
</script>
