export const marketTrendsData = {
  cities: ['Lahore', 'Islamabad', 'Karachi', 'Rawalpindi'],
  types: ['Homes', 'Plots', 'Commercial'],
  sizes: ['5 Marla', '10 Marla', '1 Kanal'],
  summaryStats: {
    totalSearchesMonthly: '2.8M+',
    avgYoYGrowth: '+18.4%',
    highestDemandSector: 'Park View City Lahore & DHA Phase 9',
    avgConstructionCostPerSqFt: 'PKR 4,850 / sq.ft. (A+ Turnkey)'
  },
  priceIndexHistory: [
    { year: '2021', avgIndex: 100, lahore: 100, islamabad: 105, karachi: 98 },
    { year: '2022', avgIndex: 122, lahore: 124, islamabad: 128, karachi: 114 },
    { year: '2023', avgIndex: 148, lahore: 152, islamabad: 156, karachi: 135 },
    { year: '2024', avgIndex: 176, lahore: 182, islamabad: 189, karachi: 158 },
    { year: '2025', avgIndex: 210, lahore: 218, islamabad: 224, karachi: 186 },
    { year: '2026 (Current)', avgIndex: 245, lahore: 256, islamabad: 262, karachi: 215 }
  ],
  topTrendingSocieties: [
    {
      name: 'Park View City Lahore',
      city: 'Lahore',
      type: 'LDA Approved',
      avg5MarlaPrice: 'PKR 1.25 Crore',
      growth1Year: '+24.5%',
      demandScore: '98/100',
      status: 'Super Hot'
    },
    {
      name: 'DHA Phase 6 & Phase 9 Prism',
      city: 'Lahore',
      type: 'DHA Certified',
      avg5MarlaPrice: 'PKR 2.20 Crore',
      growth1Year: '+19.2%',
      demandScore: '96/100',
      status: 'High Liquidity'
    },
    {
      name: 'Lake City Lahore',
      city: 'Lahore',
      type: 'LDA Approved',
      avg5MarlaPrice: 'PKR 1.45 Crore',
      growth1Year: '+16.8%',
      demandScore: '91/100',
      status: 'Steady Rise'
    },
    {
      name: 'DHA Phase 2 Islamabad',
      city: 'Islamabad',
      type: 'DHA Islamabad',
      avg5MarlaPrice: 'PKR 1.85 Crore',
      growth1Year: '+21.0%',
      demandScore: '94/100',
      status: 'Super Hot'
    },
    {
      name: 'Bahria Town Karachi (Precinct 10-19)',
      city: 'Karachi',
      type: 'Master Gated',
      avg5MarlaPrice: 'PKR 55 Lacs',
      growth1Year: '+14.2%',
      demandScore: '89/100',
      status: 'Value Pick'
    }
  ]
}
