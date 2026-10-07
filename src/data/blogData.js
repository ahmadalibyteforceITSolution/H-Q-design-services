// H&Q Design Services - Comprehensive Architecture, Interior Design, Real Estate & Construction Guides
import { topKeywordsData, allFlatKeywords } from './keywordsData.js'
import { propertiesData } from './propertiesData.js'

// Curated Architectural, Interior Design & Real Estate Imagery Pool
export const architectureImages = [
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
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80', // Rooftop Terrace Lounge
  'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80', // Master Bathroom Vanity
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80', // Open Concept Kitchen
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80', // Modern Spanish Balcony
  'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80'  // Luxury Outdoor Patio
]

// Determine category name for UI pills and schema
export const getCategoryForKeyword = (keyword) => {
  const kw = (keyword || '').toLowerCase()
  if (kw.includes('marla') || kw.includes('kanal') || kw.includes('house plan') || kw.includes('floor plan') || kw.includes('layout') || kw.includes('house design') || kw.includes('villa plan') || kw.includes('farmhouse') || kw.includes('plaza')) {
    return 'House Sizes & Layout Plans'
  }
  if (kw.includes('interior') || kw.includes('kitchen') || kw.includes('bedroom') || kw.includes('living') || kw.includes('decor') || kw.includes('marble') || kw.includes('ceiling') || kw.includes('furniture') || kw.includes('wardrobe') || kw.includes('bathroom') || kw.includes('foyer')) {
    return 'Luxury Interior Design'
  }
  if (kw.includes('elevation') || kw.includes('3d') || kw.includes('facade') || kw.includes('render') || kw.includes('bim') || kw.includes('cad') || kw.includes('architect') || kw.includes('style') || kw.includes('visual')) {
    return 'Architectural Styles & 3D'
  }
  if (kw.includes('dha') || kw.includes('bahria') || kw.includes('lda') || kw.includes('society') || kw.includes('gulberg') || kw.includes('islamabad') || kw.includes('karachi') || kw.includes('bylaw') || kw.includes('approval') || kw.includes('noc')) {
    return 'Housing Societies & Bylaws'
  }
  return '2026 Construction Rates & Costs'
}

// Backwards compatibility
export const getShortCategory = getCategoryForKeyword

// Dynamic matching properties generator (ensures each article gets unique, relevant property cards)
export const getMatchingPropertiesForTopic = (topic = '', id = 1) => {
  const t = (topic || '').toLowerCase()
  const matches = propertiesData.filter(p => {
    const hay = `${p.location} ${p.city} ${p.society} ${p.size} ${p.type} ${p.title} ${p.description}`.toLowerCase()
    if (t.includes('3 marla') && hay.includes('3 marla')) return true
    if (t.includes('5 marla') && hay.includes('5 marla')) return true
    if (t.includes('7 marla') && hay.includes('7 marla')) return true
    if (t.includes('8 marla') && hay.includes('8 marla')) return true
    if (t.includes('10 marla') && hay.includes('10 marla')) return true
    if (t.includes('1 kanal') && hay.includes('1 kanal')) return true
    if (t.includes('2 kanal') && hay.includes('2 kanal')) return true
    if (t.includes('commercial') && (hay.includes('commercial') || p.category === 'Commercial')) return true
    if (t.includes('dha') && hay.includes('dha')) return true
    if (t.includes('bahria') && hay.includes('bahria')) return true
    if (t.includes('lake city') && hay.includes('lake city')) return true
    if (t.includes('parkview') && hay.includes('parkview')) return true
    if (t.includes('islamabad') && hay.includes('islamabad')) return true
    if (t.includes('karachi') && hay.includes('karachi')) return true
    return false
  })

  // Fill up to 3 properties deterministically so EVERY blog displays different properties
  const safeId = typeof id === 'number' && !isNaN(id) ? id : 1
  const remaining = propertiesData.filter(p => !matches.some(m => m.id === p.id))
  
  while (matches.length < 3 && remaining.length > 0) {
    const pickIndex = (safeId * 7 + matches.length * 11) % remaining.length
    matches.push(remaining.splice(pickIndex, 1)[0])
  }

  return matches.slice(0, 3)
}

// Helper to format title case
export const toTitleCase = (str) => {
  if (!str) return ''
  return str
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

// Generate structured, in-depth architectural article content with unique metrics, tailored BOQ, bylaws, and matching properties
export const generateArticleContent = (topic, category, id) => {
  const safeId = typeof id === 'number' && !isNaN(id) ? id : 1
  const t = (topic || '').toLowerCase()
  const directWhatsAppUrl = 'https://wa.me/923134487315?text=' + encodeURIComponent(`Hello H&Q Design Services! I would like to consult with senior architects regarding: ${topic}`)

  // 1. Determine Typology & Technical Dimensions
  let sizeType = '5 Marla'
  let plotDim = "25' × 45' (1,125 Sq. Ft.)"
  let coveredArea = "2,180 Sq. Ft."
  let bedrooms = "4 Master Bedrooms"
  let bathrooms = "4 Luxury Baths"
  let carPorch = "1 Sedan Porch (Corolla/Civic)"
  let setbacks = "Front 5 ft | Rear 3 ft"
  let greyRate = "PKR 2,900 - 3,300 / sq. ft."
  let greyTotal = "PKR 6.3M - 7.2M"
  let turnkeyRate = "PKR 5,200 - 6,500 / sq. ft."
  let turnkeyTotal = "PKR 11.3M - 14.1M"
  let luxuryRate = "PKR 8,200 - 10,800 / sq. ft."
  let luxuryTotal = "PKR 17.8M - 23.5M"
  let concreteSpec = "3,500 PSI cylinder tested concrete, Grade 60 Mughal/Amreli rebar, and subterranean chemical anti-termite DPC barrier."

  if (t.includes('3 marla') || t.includes('2 marla')) {
    sizeType = '3 Marla'
    plotDim = "20' × 35' (700 Sq. Ft.)"
    coveredArea = "1,380 Sq. Ft."
    bedrooms = "3 Bed Suites"
    bathrooms = "3 Designer Baths"
    carPorch = "1 Compact Porch (Hatchback/Alto/Cultus)"
    setbacks = "Front 3 ft | Rear 2 ft"
    greyRate = "PKR 2,850 - 3,150 / sq. ft."
    greyTotal = "PKR 3.9M - 4.3M"
    turnkeyRate = "PKR 5,100 - 6,200 / sq. ft."
    turnkeyTotal = "PKR 7.0M - 8.5M"
    luxuryRate = "PKR 7,800 - 9,500 / sq. ft."
    luxuryTotal = "PKR 10.7M - 13.1M"
    concreteSpec = "3,000 to 3,500 PSI ready-mix concrete, Grade 60 high-yield deformed rebar, and compact stair-shaft lightwell ventilation."
  } else if (t.includes('7 marla')) {
    sizeType = '7 Marla'
    plotDim = "30' × 52.5' (1,575 Sq. Ft.)"
    coveredArea = "2,850 Sq. Ft."
    bedrooms = "4 to 5 Master Bedrooms"
    bathrooms = "5 Luxury Bathrooms"
    carPorch = "1 Large SUV + 1 Hatchback Porch"
    setbacks = "Front 5 ft | Rear 4 ft"
    greyRate = "PKR 2,950 - 3,350 / sq. ft."
    greyTotal = "PKR 8.4M - 9.5M"
    turnkeyRate = "PKR 5,400 - 6,800 / sq. ft."
    turnkeyTotal = "PKR 15.3M - 19.3M"
    luxuryRate = "PKR 8,500 - 11,200 / sq. ft."
    luxuryTotal = "PKR 24.2M - 31.9M"
    concreteSpec = "3,500 PSI compressive strength RCC columns, isolated footing pads with continuous tie-beams, and dual DPC membranes."
  } else if (t.includes('8 marla')) {
    sizeType = '8 Marla'
    plotDim = "30' × 60' (1,800 Sq. Ft.)"
    coveredArea = "3,200 Sq. Ft."
    bedrooms = "5 Master Bedrooms"
    bathrooms = "5 to 6 Bathrooms"
    carPorch = "2-Car Covered Porch"
    setbacks = "Front 5 ft | Rear 4 ft"
    greyRate = "PKR 2,950 - 3,400 / sq. ft."
    greyTotal = "PKR 9.4M - 10.8M"
    turnkeyRate = "PKR 5,500 - 6,900 / sq. ft."
    turnkeyTotal = "PKR 17.6M - 22.0M"
    luxuryRate = "PKR 8,600 - 11,500 / sq. ft."
    luxuryTotal = "PKR 27.5M - 36.8M"
    concreteSpec = "3,700 PSI cylinder-tested RCC frame, double-height lobby beam reinforcement, and Class-A Kiln burnt bricks."
  } else if (t.includes('10 marla') || t.includes('14 marla')) {
    sizeType = '10 Marla'
    plotDim = "35' × 70' (2,450 Sq. Ft.)"
    coveredArea = "4,500 Sq. Ft."
    bedrooms = "5 King Size Bedrooms"
    bathrooms = "6 En-Suite Bathrooms"
    carPorch = "2 Full SUV Covered Garage"
    setbacks = "Front 5 ft | Rear 5 ft | Side 3 ft"
    greyRate = "PKR 3,000 - 3,450 / sq. ft."
    greyTotal = "PKR 13.5M - 15.5M"
    turnkeyRate = "PKR 5,600 - 7,200 / sq. ft."
    turnkeyTotal = "PKR 25.2M - 32.4M"
    luxuryRate = "PKR 8,800 - 12,000 / sq. ft."
    luxuryTotal = "PKR 39.6M - 54.0M"
    concreteSpec = "4,000 PSI high-grade RCC raft foundation, Grade 60 deformed rebar (1/2\" to 3/4\"), and full basement tanking with Bituthene sheet."
  } else if (t.includes('1 kanal')) {
    sizeType = '1 Kanal'
    plotDim = "50' × 90' (4,500 Sq. Ft.)"
    coveredArea = "6,800 Sq. Ft."
    bedrooms = "5 to 6 Master Suites + Servant Suite"
    bathrooms = "7 Luxury Spa Baths"
    carPorch = "3 to 4 Cars Covered Portico"
    setbacks = "Front 10 ft | Rear 7 ft | Sides 5 ft"
    greyRate = "PKR 3,100 - 3,600 / sq. ft."
    greyTotal = "PKR 21.0M - 24.5M"
    turnkeyRate = "PKR 5,800 - 7,800 / sq. ft."
    turnkeyTotal = "PKR 39.4M - 53.0M"
    luxuryRate = "PKR 9,200 - 13,500 / sq. ft."
    luxuryTotal = "PKR 62.5M - 91.8M"
    concreteSpec = "4,000 PSI foundation raft with underground water reservoir, double-height structural beams, and seismic Zone 2B compliance."
  } else if (t.includes('2 kanal') || t.includes('4 kanal') || t.includes('farmhouse')) {
    sizeType = '2 to 4 Kanal Mansion'
    plotDim = "75' × 120' to 100' × 180'"
    coveredArea = "9,500 - 15,000 Sq. Ft."
    bedrooms = "6 to 8 Presidential Suites"
    bathrooms = "8 to 10 Spa Bathrooms"
    carPorch = "4 to 6 Cars Executive Portico"
    setbacks = "Front 15 ft | Rear 10 ft | Sides 7 ft"
    greyRate = "PKR 3,200 - 3,800 / sq. ft."
    greyTotal = "PKR 32.0M - 55.0M"
    turnkeyRate = "PKR 6,200 - 8,500 / sq. ft."
    turnkeyTotal = "PKR 62.0M - 120.0M"
    luxuryRate = "PKR 10,000 - 15,000 / sq. ft."
    luxuryTotal = "PKR 100M - 180M"
    concreteSpec = "Multi-story reinforced foundation, heated indoor swimming pool RCC shell, private elevator shafts, and comprehensive storm drainage."
  } else if (t.includes('commercial') || t.includes('plaza') || t.includes('shop') || t.includes('office') || t.includes('warehouse')) {
    sizeType = 'Commercial Plaza & Offices'
    plotDim = "Commercial High-Density Footprint"
    coveredArea = "4,000 - 25,000 Sq. Ft. Multi-Level"
    bedrooms = "Open Plan Office Floors"
    bathrooms = "Dedicated Male/Female Restrooms per Floor"
    carPorch = "Underground Basement Parking Ramp + Front Arcade"
    setbacks = "Per Municipal Commercial Arcade Bylaws"
    greyRate = "PKR 3,400 - 4,200 / sq. ft."
    greyTotal = "PKR 18.0M - 45.0M+"
    turnkeyRate = "PKR 6,500 - 9,500 / sq. ft."
    turnkeyTotal = "PKR 35.0M - 85.0M+"
    luxuryRate = "PKR 10,500 - 16,000 / sq. ft."
    luxuryTotal = "PKR 55.0M - 140.0M+"
    concreteSpec = "Heavy commercial raft footings, Grade 60 rebar, fire-rated stairwells, 12mm tempered Low-E curtain wall facade framing."
  } else if (category === 'Luxury Interior Design') {
    sizeType = 'Luxury Interior & Remodeling'
    plotDim = 'Custom Residential / Commercial Space'
    coveredArea = 'Full Interior Scope'
    bedrooms = 'Customized Joinery & Master Suites'
    bathrooms = 'Imported Kohler / Grohe Fixtures'
    carPorch = 'Architectural Lighting & Ceiling Troughs'
    setbacks = 'Millimeter-Accurate Woodwork Fits'
    greyRate = 'PKR 1,200 - 1,800 / sq. ft. (Base Prep)'
    greyTotal = 'PKR 2.5M - 4.5M'
    turnkeyRate = 'PKR 3,500 - 5,500 / sq. ft. (Wood & Tile)'
    turnkeyTotal = 'PKR 7.0M - 12.0M'
    luxuryRate = 'PKR 6,500 - 11,000 / sq. ft. (Italian Marble)'
    luxuryTotal = 'PKR 14.0M - 25.0M'
    concreteSpec = 'Laser-leveled subfloors, moisture-resistant green gypsum ceilings, PU deco paint finish, and Blum soft-close hardware.'
  }

  // 2. Determine Society & Authority Specific Bylaws
  let societyName = 'DHA Lahore & Punjab Authorities'
  let societyRules = 'Maximum building height envelope of 38 ft, compulsory front and rear open setbacks, mandatory rainwater soakage well (6 ft diameter x 15 ft depth), and structural vetting by a PCATP-registered architect.'
  let scrutinyProcess = 'Submit 2D AutoCAD submission blueprints with structural stability certificate to Building Control for verification.'

  if (t.includes('bahria')) {
    societyName = 'Bahria Town (Lahore / Karachi / Rawalpindi)'
    societyRules = 'Zero violation tolerance on front boundary lines, mandatory underground utility connection sleeve pipes, standardized exterior paint palette, and approved boundary wall height of 7 ft.'
    scrutinyProcess = 'Direct submission to Bahria Town Design & Engineering Services department with town-planning NOC clearance.'
  } else if (t.includes('lake city')) {
    societyName = 'Lake City Lahore'
    societyRules = 'Strict adherence to Ring Road interchange architectural setbacks, eco-friendly green lawn retention of at least 30% of open area, and Spanish/contemporary elevation vetting.'
    scrutinyProcess = 'Submission to Lake City Building Control Division with compulsory soil compaction test reports.'
  } else if (t.includes('parkview') || t.includes('park view')) {
    societyName = 'Park View City (Lahore & Islamabad)'
    societyRules = 'Compulsory structural retaining wall engineering for sloping and terrace plots, max 35 ft ridge height, and designated covered car porch placement.'
    scrutinyProcess = 'Vetting through Park View Town Planning Wing with certified MEP and plumbing schematic submission.'
  } else if (t.includes('islamabad') || t.includes('cda')) {
    societyName = 'CDA Islamabad Capital Territory'
    societyRules = 'Strict FAR (Floor Area Ratio) compliance, seismic Zone 2B/3 safety factor 1.25 calculation, Margalla sightline clearances, and compulsory solar net-metering conduits.'
    scrutinyProcess = 'Online or one-window CDA Building Control Directorate submission with licensed architect stamping.'
  } else if (t.includes('karachi') || t.includes('sbca') || t.includes('clifton') || t.includes('dha karachi')) {
    societyName = 'SBCA Karachi & DHA Karachi'
    societyRules = 'Coastal environmental norms including sulphate-resistant Type V cement for sub-structures, anti-rust epoxy coated rebar, and wind pressure load calculations for coastal storms.'
    scrutinyProcess = 'Sindh Building Control Authority (SBCA) and Cantonment Board / DHA Karachi scrutiny and NOC approvals.'
  } else if (t.includes('sialkot') || t.includes('gujranwala') || t.includes('faisalabad') || t.includes('multan')) {
    societyName = 'City Municipal Corporation & Development Authorities'
    societyRules = 'Front road widening setbacks per master plan, drainage connection approval, fire exit clearance for commercial zones, and structural integrity sign-off.'
    scrutinyProcess = 'Local TMA / GDA / FDA building inspector vetting and municipal tax registry record clearance.'
  } else if (t.includes('model town') || t.includes('johar town') || t.includes('lda') || t.includes('wapda town') || t.includes('valencia')) {
    societyName = 'LDA (Lahore Development Authority)'
    societyRules = 'LDA Building Bylaws 2026: Mandatory solar roof access, side setback 3-5 ft based on plot width, rainwater harvesting well, and max 38 ft residential height.'
    scrutinyProcess = 'Submission via LDA E-Khidmat online portal with PCATP registered architect registration details.'
  }

  // 3. Retrieve Matching Verified Properties
  const matchingProperties = getMatchingPropertiesForTopic(topic, safeId)
  const propertiesCardsHtml = matchingProperties.map(p => `
    <div class="rounded-2xl bg-slate-800 border border-slate-700/80 overflow-hidden shadow-lg hover:border-[#088C7E] transition-all flex flex-col justify-between group">
      <div>
        <div class="relative h-44 overflow-hidden">
          <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
          <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#088C7E] text-white text-[10px] font-black uppercase tracking-wider shadow">
            ${p.tag || 'Verified Listing'}
          </span>
          <span class="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 rounded-lg bg-slate-950/80 backdrop-blur-sm text-amber-300 text-xs font-black shadow">
            ${p.priceFormatted}
          </span>
        </div>
        <div class="p-4 space-y-2">
          <div class="text-[11px] text-[#088C7E] font-bold uppercase tracking-wider flex items-center gap-1">
            <i class="fa-solid fa-location-dot"></i>
            <span class="truncate">${p.city} • ${p.society}</span>
          </div>
          <h4 class="text-sm font-bold text-white line-clamp-2 leading-snug">
            ${p.title}
          </h4>
          <p class="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
            ${p.description}
          </p>
        </div>
      </div>
      <div class="p-4 pt-0 space-y-3">
        <div class="flex items-center justify-between text-[11px] text-slate-300 border-t border-slate-700/60 pt-2.5">
          <span><i class="fa-solid fa-ruler-combined text-[#088C7E]"></i> ${p.size}</span>
          ${p.bedrooms ? `<span><i class="fa-solid fa-bed text-[#088C7E]"></i> ${p.bedrooms} Beds</span>` : `<span><i class="fa-solid fa-building text-[#088C7E]"></i> Commercial</span>`}
          ${p.bathrooms ? `<span><i class="fa-solid fa-bath text-[#088C7E]"></i> ${p.bathrooms} Baths</span>` : ''}
        </div>
        <div class="flex items-center gap-2">
          <a href="/properties" class="flex-1 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-white text-[11px] font-bold text-center transition-colors">
            View Details
          </a>
          <button type="button" onclick="window.open('https://wa.me/923134487315?text=' + encodeURIComponent('Assalam-o-Alaikum, I am interested in ${p.title} (ID: ${p.id}) related to ${topic}'), '_blank', 'noopener,noreferrer')" class="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors cursor-pointer border-0 flex items-center justify-center">
            <i class="fa-brands fa-whatsapp text-sm"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('')

  return `
    <div class="space-y-8">
      
      <!-- Executive Architectural Specs Badge Panel -->
      <div class="p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-[#088C7E]/30 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#088C7E]/20 pb-3">
          <h3 class="text-xl font-black text-[#088C7E] dark:text-emerald-400">
            Executive Project Specification: ${topic}
          </h3>
          <span class="px-3 py-1 rounded-full bg-[#088C7E] text-white text-[11px] font-bold uppercase tracking-wider self-start sm:self-auto">
            ${sizeType} Benchmark
          </span>
        </div>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Planning and executing premium architecture and turnkey construction in Pakistan requires a synthesis of structural safety, climate-responsive ergonomics, and municipal bylaw compliance. At <strong>H&Q Design Services</strong> (Lahore, Pakistan), our team of licensed PCATP architects and structural engineers delivers tailor-made architectural blueprints, 4K 3D elevations, and complete turnkey execution for <em>${topic}</em>.
        </p>
        
        <!-- Technical Specifications Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <span class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Dimensions</span>
            <span class="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white truncate block">${plotDim}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <span class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Covered Area</span>
            <span class="font-extrabold text-xs sm:text-sm text-[#088C7E]">${coveredArea}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <span class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Bed / Bath Configuration</span>
            <span class="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">${bedrooms}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
            <span class="block text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Car Porch Capacity</span>
            <span class="font-extrabold text-xs sm:text-sm text-amber-500">${carPorch}</span>
          </div>
        </div>
      </div>

      <!-- Section 1: Spatial Planning & Blueprint Architecture -->
      <div class="space-y-4">
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-[#088C7E]">1.</span> Spatial Layout & Blueprint Architecture
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          When designing around <strong>${topic}</strong>, architectural excellence begins with maximizing usable square footage without compromising natural cross-ventilation or privacy. We eliminate dark, cramped passageways by incorporating double-height lightwells, open transitional foyers, and smart acoustic separation between guest reception areas and private family suites.
        </p>
        <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-3">
          <h4 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
            <i class="fa-solid fa-compass-drafting text-[#088C7E]"></i> Blueprint Technical Criteria for ${topic}:
          </h4>
          <ul class="list-disc list-inside space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-2">
            <li><strong>Sun-Path Solar Orientation:</strong> Primary living zones positioned to capture morning easterly daylight while deflecting severe southwest thermal solar gain.</li>
            <li><strong>Compulsory Open Space (COS):</strong> Mandatory setbacks (${setbacks}) strictly observed to ensure legal authority clearance without demolition liabilities.</li>
            <li><strong>Dual Kitchen Concept:</strong> Seamless transitional show kitchen paired with a fully equipped dirty grease kitchen with direct high-CFM exterior ducting.</li>
            <li><strong>Smart Home Conduits:</strong> Pre-planned concealed shafts for inverter solar cabling, VRF air conditioning lines, and CAT-6 high-speed automation wiring.</li>
          </ul>
        </div>
      </div>

      <!-- Section 2: Structural Engineering & Seismic Safety -->
      <div class="space-y-4">
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-[#088C7E]">2.</span> Structural Engineering & Material Standards
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Structural integrity is non-negotiable. For <strong>${topic}</strong>, our licensed structural engineers calibrate foundation footings based on laboratory soil-bearing reports:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 class="font-bold text-[#088C7E] text-sm flex items-center gap-1.5">
              <i class="fa-solid fa-cubes-stacked"></i> Concrete & Rebar Specs
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              ${concreteSpec}
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
            <h4 class="font-bold text-[#088C7E] text-sm flex items-center gap-1.5">
              <i class="fa-solid fa-shield-halved"></i> Seismic Code Compliance
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Engineered according to Uniform Building Code (UBC-97) and Building Code of Pakistan (BCP-2021) for Zone 2B seismic acceleration, preventing structural hair-cracking.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3: 4K 3D Facades & Exterior Material Curation -->
      <div class="space-y-4">
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-[#088C7E]">3.</span> 4K Photorealistic Visualizations & Facade Materials
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Before breaking ground on <strong>${topic}</strong>, our 3D visualization studio produces photorealistic 4K day and dusk architectural perspectives. This allows clients to inspect facade materials, lighting angles, and texture contrasts:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 class="text-xs font-bold uppercase text-[#088C7E] mb-1">Stone Cladding</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Imported Travertine, Silver Sandstone, and CNC-cut marble panels anchored with stainless steel dry brackets.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 class="text-xs font-bold uppercase text-[#088C7E] mb-1">Glazing & Aluminum</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">Thermal-break Low-E double-glazed aluminum sections (1.6mm - 2.0mm) providing 65% thermal heat deflection.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 class="text-xs font-bold uppercase text-[#088C7E] mb-1">Accents & Louvers</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400">UV-resistant High-Pressure Laminate (HPL) panels, powder-coated aluminum louvers, and warm 3000K facade beam spotlights.</p>
          </div>
        </div>
      </div>

      <!-- Section 4: Tailored 2026 Turnkey BOQ Cost Breakdown -->
      <div class="space-y-4">
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-[#088C7E]">4.</span> 2026 Construction & Turnkey Cost Estimates (BOQ)
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Transparent budgeting prevents unexpected expenses during construction. For projects centered on <strong>${topic}</strong> (${sizeType}), our quantity surveyors provide accurate milestone rates:
        </p>
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <table class="min-w-full text-xs sm:text-sm text-left">
            <thead class="bg-slate-100 dark:bg-slate-800 font-bold text-slate-800 dark:text-slate-200">
              <tr>
                <th class="p-3.5 border-b">Phase / Milestone</th>
                <th class="p-3.5 border-b">Scope & Material Standards</th>
                <th class="p-3.5 border-b">Rate per Sq. Ft.</th>
                <th class="p-3.5 border-b">Estimated Total (${coveredArea})</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900">
              <tr>
                <td class="p-3.5 font-bold text-slate-900 dark:text-white">Grey Structure Construction</td>
                <td class="p-3.5">Excavation, RCC columns/beams, Awal red bricks, Grade-60 steel, PPRC/UPVC pipes & electrical conduits</td>
                <td class="p-3.5 text-[#088C7E] font-extrabold">${greyRate}</td>
                <td class="p-3.5 text-[#088C7E] font-black">${greyTotal}</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 dark:text-white">Premium Turnkey Finishing</td>
                <td class="p-3.5">Imported porcelain tiles, custom ash woodwork, Grohe sanitary ware, gypsum false ceilings, LED track lights</td>
                <td class="p-3.5 text-[#088C7E] font-extrabold">${turnkeyRate}</td>
                <td class="p-3.5 text-[#088C7E] font-black">${turnkeyTotal}</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 dark:text-white">A+ Ultra-Luxury Signature Finish</td>
                <td class="p-3.5">Italian Statuario marble, smart automation, double-glazed Low-E facade, inverter VRF HVAC & bespoke joinery</td>
                <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-extrabold">${luxuryRate}</td>
                <td class="p-3.5 text-emerald-600 dark:text-emerald-400 font-black">${luxuryTotal}</td>
              </tr>
              <tr>
                <td class="p-3.5 font-bold text-slate-900 dark:text-white">Architectural & 3D Design Package</td>
                <td class="p-3.5">Complete 2D submission drawings, structural vetting, MEP diagrams, 4K Lumion renders & walkthrough video</td>
                <td class="p-3.5 text-amber-500 font-extrabold">All-Inclusive</td>
                <td class="p-3.5 text-amber-500 font-black">Fixed Guarantee</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-xs text-slate-500 dark:text-slate-400 italic">
          * Use our free <a href="/tools" class="text-[#088C7E] underline font-bold hover:text-teal-600">Online Construction Cost Calculator</a> for instant customization.
        </p>
      </div>

      <!-- Section 5: Municipal Bylaws & Building Approval Checklist -->
      <div class="space-y-4">
        <h3 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <span class="text-[#088C7E]">5.</span> Building Approvals & Bylaws: ${societyName}
        </h3>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Constructing without vetted municipal drawings risks construction halts and demolition penalties. For <strong>${topic}</strong>, our architectural drawings comply 100% with ${societyName} regulations:
        </p>
        <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2.5 text-xs sm:text-sm">
          <div class="flex items-start gap-2">
            <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0"></i>
            <span><strong>Bylaw Guidelines:</strong> ${societyRules}</span>
          </div>
          <div class="flex items-start gap-2">
            <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0"></i>
            <span><strong>NOC Process:</strong> ${scrutinyProcess}</span>
          </div>
        </div>
      </div>

      <!-- Section 6: Verified Properties Matching This Architectural Guide -->
      <div class="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-2xl border border-slate-800">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-[#088C7E]/40 text-[#088C7E] text-xs font-black uppercase tracking-wider mb-2">
              <i class="fa-solid fa-circle-check text-amber-300"></i>
              <span>Verified Architectural Portfolio</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white">
              Verified Properties Matching This Guide
            </h3>
            <p class="text-xs text-slate-300 mt-1">
              Explore hand-picked residential villas and plots reviewed by H&Q Senior Architects.
            </p>
          </div>
          <a href="/properties" class="text-xs font-bold text-[#088C7E] hover:text-emerald-400 flex items-center gap-1.5 self-start sm:self-auto">
            <span>View All Properties</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          ${propertiesCardsHtml}
        </div>
      </div>

      <!-- Section 7: Frequently Asked Questions (FAQ) -->
      <div class="space-y-4">
        <h3 class="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
          <i class="fa-solid fa-circle-question text-[#088C7E]"></i> Frequently Asked Questions: ${topic}
        </h3>
        <div class="space-y-3 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
            <h4 class="font-extrabold text-slate-900 dark:text-white">How long does it take to complete architectural drawings for ${topic}?</h4>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Standard 2D architectural blueprints and submission drawings take 7 to 10 working days. A complete turnkey package with 4K 3D elevations, structural vetting, and MEP layouts takes approximately 2 to 3 weeks.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
            <h4 class="font-extrabold text-slate-900 dark:text-white">What are the covered area and setback requirements for ${topic}?</h4>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              For ${sizeType}, the standard plot dimensions are ${plotDim} yielding approximately ${coveredArea} of covered area. The mandatory setbacks are ${setbacks} under ${societyName} bylaws.
            </p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm">
            <h4 class="font-extrabold text-slate-900 dark:text-white">Can H&Q Design Services manage the complete turnkey construction for ${topic}?</h4>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
              Yes. We offer complete A+ turnkey construction contracts with fixed pricing benchmarks (${turnkeyRate}) that cover grey structure, imported finishes, custom woodwork, and full municipal approvals.
            </p>
          </div>
        </div>
      </div>

      <!-- Direct Consultation & Call-to-Action Banner -->
      <div class="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl border border-slate-800">
        <div class="space-y-1">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-400">DHA Lahore &amp; Park View City Studio • PCATP Licensed</span>
          <h4 class="text-xl sm:text-2xl font-black text-white">
            Schedule a Design Review Session for: ${topic}
          </h4>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Whether you are building in DHA Lahore, Bahria Town, Gulberg, Islamabad, or anywhere in Pakistan, consult directly with H&Q Senior Architects to review your plot blueprints and cost estimates.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a href="tel:03134487315" class="px-6 py-3 rounded-xl bg-[#088C7E] hover:bg-[#066D62] text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg flex items-center gap-2">
            <i class="fa-solid fa-phone"></i> Call: 0313-4487315
          </a>
          <button type="button" onclick="window.open('${directWhatsAppUrl}', '_blank', 'noopener,noreferrer')" class="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 cursor-pointer border-0">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp Consultation
          </button>
        </div>
      </div>

    </div>
  `
}

// Generate the complete 2,000+ architectural pages dataset
export const generate2000Blogs = () => {
  const blogs = []
  
  // 1. Featured Editorial & Policy Post: Fuel Subsidy & Petrol Token System 2026
  const fuelSubsidySlug = 'fuel-subsidy-pakistan-2026-check-new-petrol-token-system-and-eligibility-rules'
  const fuelSubsidyTitle = 'Fuel Subsidy Pakistan 2026: Petrol Token System & Rates'
  const fuelSubsidyExcerpt = 'Comprehensive guide to Pakistan 2026 fuel subsidy, petrol token digital system, eligibility rules, and macroeconomic impact on residential construction freight.'
  const fuelSubsidyContent = `
    <div class="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed text-base">
      <div class="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-[#088C7E]/30">
        <h3 class="text-xl font-bold text-[#088C7E] dark:text-emerald-400 mb-2">
          Special Economic & Policy Report: Pakistan Fuel Subsidy 2026
        </h3>
        <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          The Government of Pakistan has rolled out a targeted <strong>Fuel Subsidy & Petrol Token System for 2026</strong> aimed at curbing inflation for lower and middle-income motorists, public transit riders, and essential logistics. This report explores the digital quota allocation, eligibility verification, and its critical ramifications on regional building material haulage and construction costs across Lahore and Punjab.
        </p>
      </div>

      <section class="space-y-4">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">
          1. Understanding the New Petrol Token System in Pakistan (2026)
        </h2>
        <p>
          Unlike blanket subsidies that previously strained the national exchequer, the 2026 petrol token mechanism utilizes automated digital verification linked to CNIC numbers, vehicle registration databases (Excise & Taxation), and the National Socio-Economic Registry (NSER).
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs p-5 rounded-2xl bg-slate-100 dark:bg-slate-800">
          <div><strong>Target Quota:</strong> Up to 30 Liters/Month</div>
          <div><strong>Eligible Engine Size:</strong> Up to 125cc Motorbikes & 800cc Cars</div>
          <div><strong>Verification Mode:</strong> SMS Short Code & Digital Wallet QR</div>
        </div>
        <p>
          Eligible citizens receive designated monthly subsidy allowances redeemed instantly at participating PSO, Total Parco, and Shell fuel stations upon QR code scan or OTP confirmation.
        </p>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">
          2. Official Eligibility Rules & Registration Criteria
        </h2>
        <p>
          To qualify for the 2026 petrol subsidy token system, applicants must satisfy specific benchmark criteria established by the Ministry of Energy (Petroleum Division):
        </p>
        <ul class="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Vehicle Ownership:</strong> Registered motorcycles/scooters (up to 125cc), auto-rickshaws, or economy motorcars under 800cc displacement registered under the applicant's own CNIC.</li>
          <li><strong>Income Threshold:</strong> Verified household monthly income below the designated national poverty and middle-class inflation baseline.</li>
          <li><strong>Single Beneficiary Rule:</strong> Only one fuel subsidy relief token allocation is sanctioned per family household / CNIC unit.</li>
          <li><strong>SIM Registration:</strong> The applicant's registered mobile SIM card must strictly correspond to the CNIC under which the vehicle is titled.</li>
        </ul>
        <div class="p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-2">
          <h4 class="text-xs uppercase font-extrabold text-[#088C7E] tracking-wider">Independent Media Citation & Analysis:</h4>
          <p class="text-xs text-slate-300">
            For real-time eligibility status checks, CNIC portal verification steps, and token disbursement schedules, consult the investigative coverage by <em>The Opinion Pakistan</em>:
          </p>
          <a 
            href="https://www.theopinion.com.pk/fuel-subsidy-pakistan-2026-check-new-petrol-token-system-and-eligibility-rules/" 
            target="_blank" 
            rel="noopener"
            class="inline-flex items-center gap-2 text-xs font-black text-[#088C7E] hover:underline"
          >
            <span>Read: Fuel Subsidy Pakistan 2026 – Check New Petrol Token System & Eligibility Rules on The Opinion Pakistan</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">
          3. Direct Impact on Construction Materials, Freight & Real Estate
        </h2>
        <p>
          At <strong>H&Q Design Services</strong>, our cost-engineering consultants constantly track the interplay between fuel tariffs and building costs. Transportation accounts for approximately <strong>8% to 14% of gross residential construction expenses</strong> in Pakistan:
        </p>
        <ul class="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Red Brick Haulage:</strong> Transporting baked clay bricks from Raiwind kilns to DHA Lahore and Bahria Town relies entirely on commercial diesel trucks. Targeted fuel interventions help prevent cascading price hikes per 1,000 bricks.</li>
          <li><strong>Ready-Mix Concrete & Cement:</strong> Transit mixer trucks and bulk cement tankers from Hattar and Dandot require predictable fuel pricing to stabilize per-bag retail quotations.</li>
          <li><strong>ASTM Grade 60 Rebar Freight:</strong> Transporting steel billets and deformed rebar from Karachi and Islamabad mills to Lahore job sites is heavily influenced by national diesel price adjustments.</li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-2xl font-black text-slate-900 dark:text-white">
          4. How Homeowners Can Lock in Turnkey Construction Rates
        </h2>
        <p>
          To shield your construction budget against fuel-driven material fluctuations, H&Q Design Services offers fixed turnkey procurement agreements. By securing major supplies (cement, Grade 60 steel, sanitary ware, and electrical cabling) in milestone-based bulk contracts, homeowners in DHA, Park View City, and Gulberg can avoid unexpected budget overruns.
        </p>
        <div class="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 space-y-3">
          <h4 class="font-extrabold text-sm text-slate-900 dark:text-white">Need a Guaranteed Turnkey Construction Estimate?</h4>
          <p class="text-xs text-slate-600 dark:text-slate-300">
            Consult with our registered PCATP architects and PEC structural engineers. Get an itemized Bill of Quantities (BOQ) with transparent logistics estimates for 2026.
          </p>
        </div>
      </section>
    </div>
  `

  blogs.push({
    id: 9999,
    slug: fuelSubsidySlug,
    title: fuelSubsidyTitle,
    category: '2026 Construction Rates & Costs',
    date: 'September 21, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    excerpt: fuelSubsidyExcerpt,
    content: fuelSubsidyContent,
    keyword: 'Fuel Subsidy Pakistan 2026'
  })

  const totalKeywords = allFlatKeywords.length

  for (let i = 0; i < totalKeywords; i++) {
    const keyword = allFlatKeywords[i]
    const id = i + 1
    const category = getCategoryForKeyword(keyword)
    const img = architectureImages[i % architectureImages.length]
    
    // Slug generation: clean, readable, canonical slug
    const cleanTopicSlug = keyword
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
    const slug = `article-${id}-${cleanTopicSlug}`
    
    // Publication date spread across recent dates
    const day = ((i * 7) % 28) + 1
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']
    const month = months[i % months.length]
    const dateStr = `${month} ${day}, 2026`
    
    const readTime = `${4 + (i % 5)} min read`
    const title = `${keyword} Architecture Guide`
    const excerpt = `Complete 2026 architectural analysis, floor plans, and turnkey construction guidelines for ${keyword}. Reviewed by H&Q Senior Architects in Pakistan.`
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

// Backwards compatibility aliases
export const generate1000Blogs = generate2000Blogs
export const generate100Blogs = generate2000Blogs

// Singleton export of all 2,000+ generated pages
export const allBlogs = generate2000Blogs()
