import { ref, computed } from 'vue'

const currentLang = ref(localStorage.getItem('hq-lang') || 'EN')

const translations = {
  EN: {
    // Header
    properties: 'PROPERTIES',
    propertyBlocks: 'PROPERTY BLOCKS',
    societyGuides: 'SOCIETY GUIDES',
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
    officialPartner: 'TOP DESIGN ARCHITECTS',
    studioLahore: 'LAHORE STUDIO, PAKISTAN',
    heroTitle: 'Search Architecture & Design Solutions in Pakistan',
    heroSubtitle: 'Find 5 Marla, 10 Marla, 1 Kanal Floor Plans, 3D Elevation Renders & Luxury Interior Styling in DHA, Gulberg & Bahria Town, Lahore.',
    findDesign: 'FIND DESIGN',
    citySociety: 'City / Society',
    designType: 'Design Type',
    plotScale: 'Plot Scale',
    budgetPackage: 'Budget Package',

    // Footer
    popularSearches: 'Popular Searches',
    areaGuides: 'Cities & Area Guides',
    appUpdates: 'App & Updates',
    copyright: '© 2026 H&Q Design Services. All rights reserved.'
  },

  UR: {
    // Header
    properties: 'پراپرٹیز',
    propertyBlocks: 'پراپرٹی بلاکس',
    societyGuides: 'سوسائٹی گائیڈز',
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
    officialPartner: 'معروف آرکیٹیکچر اسٹوڈیو',
    studioLahore: 'لاہور اسٹوڈیو، پاکستان',
    heroTitle: 'پاکستان میں آرکیٹیکچر اور ڈیزائن کا حل تلاش کریں',
    heroSubtitle: 'ڈی ایچ اے، بحریہ ٹاؤن اور گلبرگ لاہور میں 5 مرلہ، 10 مرلہ، 1 کنال فلور پلانز اور 3D نقشے حاصل کریں۔',
    findDesign: 'ڈیزائن تلاش کریں',
    citySociety: 'شہر / سوسائٹی',
    designType: 'ڈیزائن کی قسم',
    plotScale: 'پلاٹ کا سائز',
    budgetPackage: 'بجٹ پیکیج',

    // Footer
    popularSearches: 'مقبول تلاش',
    areaGuides: 'شهر اور ایریا گائیڈز',
    appUpdates: 'ایپ اور اپ ڈیٹس',
    copyright: '© 2026 H&Q ڈیزائن سروسز۔ جملہ حقوق محفوظ ہیں۔'
  },

  AR: {
    // Header
    properties: 'العقارات',
    propertyBlocks: 'المجمعات العقارية',
    societyGuides: 'دليل المجتمعات السكنية',
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
    officialPartner: 'استوديو التصميم الرائد',
    studioLahore: 'استوديو لاهور، باكستان',
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
    appUpdates: 'التطبيق والتحديثات',
    copyright: '© 2026 H&Q للخدمات الهندسية. جميع الحقوق محفوظة.'
  }
}

export function useI18n() {
  const setLanguage = (lang, isInitial = false) => {
    currentLang.value = lang
    localStorage.setItem('hq-lang', lang)

    if (lang === 'UR' || lang === 'AR') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', lang.toLowerCase())
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }

    if (!isInitial) {
      try {
        const codeMap = {
          'EN': 'en',
          'UR': 'ur',
          'AR': 'ar'
        }
        const targetCode = codeMap[lang] || 'en'
        document.cookie = `googtrans=/en/${targetCode}; path=/; domain=${window.location.hostname}`
        document.cookie = `googtrans=/en/${targetCode}; path=/`
        
        const selectEl = document.querySelector('.goog-te-combo')
        if (selectEl) {
          selectEl.value = targetCode
          selectEl.dispatchEvent(new Event('change'))
        } else {
          window.location.reload()
        }
      } catch (e) {
        console.error('Google Translate trigger error:', e)
      }
    }
  }

  // Initialize on load
  const initI18n = () => {
    setLanguage(currentLang.value, true)
  }

  const t = computed(() => translations[currentLang.value] || translations.EN)

  return {
    currentLang,
    setLanguage,
    initI18n,
    t
  }
}
