// H&Q Design Services - 1,000+ Comprehensive Architecture, Interior Design & Construction Guides
import { topKeywordsData, allFlatKeywords } from './keywordsData.js'

// Curated Architectural & Interior Design Imagery Pool
const architectureImages = [
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', // Luxury Villa Facade
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', // Contemporary Home Exterior
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80', // Modern Villa with Pool
  'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80', // Luxury Interior Lounge
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80', // Italian Kitchen Design
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80', // Master Bedroom Suite
  'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80', // Double-Height Foyer
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80', // Commercial Glass Tower
  'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1200&q=80', // Commercial Arcade Facade
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80', // Minimalist Living Room
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80', // Japandi & Wood Interior
  'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80', // Luxury Dining Room
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', // Bathroom Spa Sanctuary
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80', // Modern Spanish Villa
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80', // Contemporary Glass Mansion
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'  // Rooftop Terrace Lounge
]

// Determine short category name for UI pills
const getShortCategory = (keyword) => {
  const kw = keyword.toLowerCase()
  if (kw.includes('marla') || kw.includes('kanal') || kw.includes('house plan') || kw.includes('floor plan') || kw.includes('layout')) {
    return 'House Plans & Sizes'
  }
  if (kw.includes('interior') || kw.includes('kitchen') || kw.includes('bedroom') || kw.includes('living') || kw.includes('decor') || kw.includes('marble') || kw.includes('ceiling') || kw.includes('furniture')) {
    return 'Luxury Interior Design'
  }
  if (kw.includes('elevation') || kw.includes('3d') || kw.includes('facade') || kw.includes('render') || kw.includes('bim') || kw.includes('cad') || kw.includes('architect')) {
    return 'Architectural Styles & 3D'
  }
  if (kw.includes('dha') || kw.includes('parkview') || kw.includes('bahria') || kw.includes('lda') || kw.includes('society') || kw.includes('gulberg') || kw.includes('islamabad') || kw.includes('karachi')) {
    return 'Housing Societies & Bylaws'
  }
  return 'Construction & Engineering'
}

// Generate structured article content based on keyword and category
const generateArticleContent = (topic, category, id) => {
  return `
    <div class="space-y-8">
      <div class="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-[#088C7E]/30">
        <h3 class="text-xl font-bold text-[#088C7E] dark:text-emerald-400 mb-2">
          Executive Architectural Overview: ${topic}
        </h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Planning and executing premium architecture and interior design projects in Pakistan requires a synthesis of structural integrity, municipal bylaw compliance, and modern aesthetic elegance. At <strong>H&Q Design Services</strong> (Parkview City Lahore, partner studio with Zameen.com), our team of registered PCATP architects and structural engineers provides turnkey solutions tailored to <em>${topic}</em>.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl font-black text-slate-900 dark:text-white">
          1. Spatial Planning & Architectural Blueprints
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          When focusing on <strong>${topic}</strong>, spatial efficiency and natural light circulation form the foundation of our design philosophy. We balance gross covered area with compulsory open space setbacks (COS) to create unobstructed ventilation, double-height natural light corridors, and logical circulation between entertaining and private living zones.
        </p>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2">
          <li><strong>Sun-Path & Wind Direction Analysis:</strong> Positioning main living lounges and master bedrooms to maximize morning daylight while minimizing harsh western solar heat gain.</li>
          <li><strong>Zero-Waste Circulation:</strong> Eliminating narrow, dark corridors in favor of open-concept transitional foyers with glass partitions.</li>
          <li><strong>Smart Storage Integration:</strong> Concealed cabinetry, under-stair luggage storage, and walk-in dressing suites designed directly into the CAD architectural grid.</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl font-black text-slate-900 dark:text-white">
          2. 4K Photorealistic 3D Elevations & Material Curation
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Every project designed by H&Q Design Services comes with comprehensive 4K photorealistic 3D visualization before ground excavation begins. For <strong>${topic}</strong>, our material specifications prioritize longevity, low maintenance, and luxury aesthetics:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-[#088C7E] text-sm mb-1">Exterior Facades & Elevations</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              UV-resistant High-Pressure Laminate (HPL) sheets, imported Travertine stone cladding, fair-face concrete textures, and thermal-break double glazed Low-E aluminum windows.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <h4 class="font-bold text-[#088C7E] text-sm mb-1">Interior Luxury Finishes</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Italian Statuario & Botticino marble flooring, water-resistant acrylic modular kitchen cabinets, backlit translucent Onyx feature walls, and recessed COB magnetic track lights.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl font-black text-slate-900 dark:text-white">
          3. Municipal Bylaws Compliance (DHA, Parkview City & LDA)
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Building without verified bylaw compliance leads to costly demolition notices and delayed municipal approvals. For <strong>${topic}</strong>, our engineering department ensures strict alignment with regulatory authorities:
        </p>
        <ul class="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300 pl-2">
          <li><strong>Front & Rear Setbacks:</strong> Exact compliance with DHA Lahore and LDA residential bylaws to guarantee smooth NOC approvals.</li>
          <li><strong>Maximum Building Height:</strong> 35-foot standard residential height envelope and parapet wall stability specifications.</li>
          <li><strong>Structural & MEP Vetting:</strong> Soil test-calibrated raft foundations, Grade 60 deformed steel bar reinforcement, and seismic Zone 2B structural calculations.</li>
        </ul>
      </div>

      <div class="space-y-4">
        <h3 class="text-2xl font-black text-slate-900 dark:text-white">
          4. 2026 Construction & Turnkey Cost Estimates
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Accurate financial forecasting prevents mid-construction budget overruns. For projects involving <strong>${topic}</strong>, our quantity surveyors provide itemized Bill of Quantities (BOQ):
        </p>
        <div class="overflow-x-auto">
          <table class="min-w-full text-xs text-left border border-slate-200 dark:border-slate-800">
            <thead class="bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200">
              <tr>
                <th class="p-3 border-b">Phase / Milestone</th>
                <th class="p-3 border-b">Standard Scope</th>
                <th class="p-3 border-b">2026 Rate Benchmark</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-400">
              <tr>
                <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">Grey Structure Phase</td>
                <td class="p-3">Excavation, RCC columns/slabs, Class-A brickwork, plumbing & electrical conduits</td>
                <td class="p-3 text-[#088C7E] font-bold">PKR 2,800 - 3,400 / sq. ft.</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">Premium Turnkey Finishing</td>
                <td class="p-3">Imported tiles/marble, custom ash woodwork, Grohe/Kohler fixtures, false ceilings, 4K lighting</td>
                <td class="p-3 text-[#088C7E] font-bold">PKR 4,800 - 6,800 / sq. ft.</td>
              </tr>
              <tr>
                <td class="p-3 font-semibold text-slate-800 dark:text-slate-200">Architectural & 3D Package</td>
                <td class="p-3">Complete 2D submission drawings, structural vetting, MEP layouts & 4K photorealistic renders</td>
                <td class="p-3 text-amber-500 font-bold">Custom Fixed Package</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="p-6 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
        <h4 class="text-lg font-black text-amber-400">
          Book a Free Consultation with H&Q Senior Architects
        </h4>
        <p class="text-xs text-slate-300 leading-relaxed">
          Whether you own a 5 Marla, 10 Marla, 1 Kanal plot or a commercial plaza in Lahore, Islamabad, or Karachi, our studio in Parkview City is ready to transform your vision into an architectural masterpiece.
        </p>
        <div class="flex flex-wrap items-center gap-4 text-xs font-bold pt-2">
          <a href="tel:03416887454" class="px-5 py-2.5 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white transition-all">
            <i class="fa-solid fa-phone mr-1.5"></i> Call: 0341-6887454
          </a>
          <a href="https://wa.me/923416887454" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all">
            <i class="fa-brands fa-whatsapp mr-1.5"></i> WhatsApp Consultation
          </a>
        </div>
      </div>
    </div>
  `
}

// Generate the complete 1,008 architectural pages dataset
export const generate1000Blogs = () => {
  const blogs = []
  const totalKeywords = allFlatKeywords.length

  for (let i = 0; i < totalKeywords; i++) {
    const keyword = allFlatKeywords[i]
    const id = i + 1
    const category = getShortCategory(keyword)
    const img = architectureImages[i % architectureImages.length]
    
    // Slug generation
    const cleanTopicSlug = keyword
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    const slug = `article-${id}-${cleanTopicSlug}`
    
    // Publication date calculation spread across recent dates
    const day = ((i * 7) % 28) + 1
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August']
    const month = months[i % months.length]
    const dateStr = `${month} ${day}, 2026`
    
    const readTime = `${4 + (i % 5)} min read`
    const title = `${keyword} - Architecture & Interior Design Guide`
    const excerpt = `Complete 2026 architectural analysis and interior design guidelines for ${keyword}. Written by H&Q Design Services senior architects in Parkview City Lahore, affiliated with Zameen.com.`
    const content = generateArticleContent(keyword, category, id)

    blogs.push({
      id,
      slug,
      title,
      category,
      date: dateStr,
      readTime,
      image: img,
      excerpt,
      content,
      keyword
    })
  }

  return blogs
}

// Backwards compatibility alias
export const generate100Blogs = generate1000Blogs

// Singleton export of all 1,000+ generated pages
export const allBlogs = generate1000Blogs()
