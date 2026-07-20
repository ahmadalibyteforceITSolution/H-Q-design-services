import { ref, computed } from 'vue'

const currentLang = ref(localStorage.getItem('hq-lang') || 'EN')

const translations = {
  EN: {
    // Header
    properties: 'PROPERTIES',
    propertyBlocks: 'PROPERTY BLOCKS',
    parkviewGuides: 'PARKVIEW GUIDES',
    blog: 'BLOG',
    maps: 'MAPS',
    tools: 'TOOLS',
    more: 'MORE',
    addProject: '+ Add Property / Project',
    homesVillas: 'HOMES & VILLAS',
    plotsRenders: 'PLOTS & 3D RENDERS',
    commercialPlazas: 'COMMERCIAL PLAZAS',
    luxuryInteriors: 'LUXURY INTERIORS',
    agentsArchitects: 'AGENTS & ARCHITECTS',
    newProjects: 'NEW PROJECTS',
    getFreeQuote: 'Get Free Quote',

    // Hero
    officialZameenPartner: 'OFFICIAL ZAMEEN.COM PARTNER',
    parkviewStudioLahore: 'PARKVIEW CITY STUDIO, LAHORE',
    heroTitle: 'Search Architecture & Design Solutions in Pakistan',
    heroSubtitle: 'Find 5 Marla, 10 Marla, 1 Kanal Floor Plans, 3D Elevation Renders & Luxury Interior Styling in Parkview City, DHA & Gulberg, Lahore.',
    findDesign: 'FIND DESIGN',
    citySociety: 'City / Society',
    designType: 'Design Type',
    plotScale: 'Plot Scale',
    budgetPackage: 'Budget Package',

    // Footer
    popularSearches: 'Popular Searches',
    areaGuides: 'Cities & Area Guides',
    zameenAppUpdates: 'Zameen App & Updates',
    copyright: '© 2026 H&Q Design Services. Affiliated with Zameen.com. All rights reserved.'
  },

  UR: {
    // Header
    properties: 'پراپرٹیز',
    propertyBlocks: 'پراپرٹی بلاکس',
    parkviewGuides: 'پارک ویو گائیڈز',
    blog: 'بلاگ',
    maps: 'نقشے',
    tools: 'ٹولز',
    more: 'مزید',
    addProject: '+ پراپرٹی / پروجیکٹ شامل کریں',
    homesVillas: 'مکانات اور ولاز',
    plotsRenders: 'پلاٹس اور تھری ڈی نقشے',
    commercialPlazas: 'کمرشل پلازے',
    luxuryInteriors: 'لکژری انٹیریئر',
    agentsArchitects: 'آرکیٹیکٹس',
    newProjects: 'نئے پروجیکٹس',
    getFreeQuote: 'مفت کوٹ حاصل کریں',

    // Hero
    officialZameenPartner: 'زمین ڈاٹ کام کا آفیشل پارٹنر',
    parkviewStudioLahore: 'پارک ویو سٹی اسٹوڈیو، لاہور',
    heroTitle: 'پاکستان میں آرکیٹیکچر اور ڈیزائن کا حل تلاش کریں',
    heroSubtitle: 'پارک ویو سٹی، ڈی ایچ اے اور گلبرگ لاہور میں 5 مرلہ، 10 مرلہ، 1 کنال فلور پلانز اور 3D نقشے حاصل کریں۔',
    findDesign: 'ڈیزائن تلاش کریں',
    citySociety: 'شہر / سوسائٹی',
    designType: 'ڈیزائن کی قسم',
    plotScale: 'پلاٹ کا سائز',
    budgetPackage: 'بجٹ پیکیج',

    // Footer
    popularSearches: 'مقبول تلاش',
    areaGuides: 'شہر اور ایریا گائیڈز',
    zameenAppUpdates: 'زمین ایپ اور اپ ڈیٹس',
    copyright: '© 2026 H&Q ڈیزائن سروسز۔ زمین ڈاٹ کام سے الحاق شدہ۔ جملہ حقوق محفوظ ہیں۔'
  },

  AR: {
    // Header
    properties: 'العقارات',
    propertyBlocks: 'المجمعات العقارية',
    parkviewGuides: 'دليل بارك فيو',
    blog: 'المدونة',
    maps: 'الخرائط',
    tools: 'الأدوات',
    more: 'المزيد',
    addProject: '+ إضافة عقار / مشروع',
    homesVillas: 'المنازل والفيلا',
    plotsRenders: 'الأراضي والتصاميم 3D',
    commercialPlazas: 'المراكز التجارية',
    luxuryInteriors: 'التصميم الداخلي الفاخر',
    agentsArchitects: 'المهندسون المعماريون',
    newProjects: 'مشاريع جديدة',
    getFreeQuote: 'احصل على عرض سعر مجاني',

    // Hero
    officialZameenPartner: 'الشريك الرسمي لـ ZAMEEN.COM',
    parkviewStudioLahore: 'استوديو بارك فيو سيتي، لاهور',
    heroTitle: 'ابحث عن حلول الهندسة المعمارية والتصميم في باكستان',
    heroSubtitle: 'احصل على مخططات الطوابق والتصاميم ثلاثية الأبعاد 3D لمساحات 5 مرلة، 10 مرلة، و 1 کانال في لاهور.',
    findDesign: 'بحث عن تصميم',
    citySociety: 'المدينة / المجمع',
    designType: 'نوع التصميم',
    plotScale: 'مساحة الأرض',
    budgetPackage: 'باقة الميزانية',

    // Footer
    popularSearches: 'الأبحاث الشائعة',
    areaGuides: 'دليل المدن والمناطق',
    zameenAppUpdates: 'تطبيق Zameen والتحديثات',
    copyright: '© 2026 H&Q للخدمات الهندسية. الشريك الرسمي لـ Zameen.com. جميع الحقوق محفوظة.'
  }
}

export function useI18n() {
  const setLanguage = (lang) => {
    currentLang.value = lang
    localStorage.setItem('hq-lang', lang)

    if (lang === 'UR' || lang === 'AR') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', lang.toLowerCase())
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }

  // Initialize on load
  const initI18n = () => {
    setLanguage(currentLang.value)
  }

  const t = computed(() => translations[currentLang.value] || translations.EN)

  return {
    currentLang,
    setLanguage,
    initI18n,
    t
  }
}
