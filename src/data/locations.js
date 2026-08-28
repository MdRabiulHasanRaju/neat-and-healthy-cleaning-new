// Service areas with unique SEO content for local SEO pages.

export const locations = [
  {
    slug: 'central-downtown-dubai',
    name: 'Central & Downtown Dubai',
    intro:
      'From Downtown Dubai to Business Bay, our professional deep cleaning teams serve apartments, villas, offices, and commercial properties across the city centre.',
    neighborhoods: [
      'Downtown Dubai',
      'Business Bay',
      'DIFC',
      'City Walk',
      'Al Wasl',
      'Zabeel',
      'MBR City',
      'Meydan',
      'Sobha Hartland',
      'District One',
    ],
    mapQuery: 'Central & Downtown Dubai, UAE',
  },

  {
    slug: 'marina-waterfront-areas',
    name: 'Marina & Waterfront Areas',
    intro:
      'Our deep cleaning teams provide reliable residential and commercial cleaning across Dubai’s most popular waterfront communities, from Dubai Marina and JBR to Palm Jumeirah and Bluewaters Island.',
    neighborhoods: [
      'Dubai Marina',
      'Jumeirah Beach Residence (JBR)',
      'Palm Jumeirah',
      'Emaar Beachfront',
      'Bluewaters Island',
      'Dubai Creek Harbour',
      'Jumeirah Bay Island',
    ],
    mapQuery: 'Dubai Marina, UAE',
  },

  {
    slug: 'jumeirah-beachside-areas',
    name: 'Jumeirah & Beachside Areas',
    intro:
      'Keep your home fresh and spotless with professional deep cleaning services across Jumeirah and Dubai’s popular beachside communities. We serve villas, apartments, and residential properties with detailed cleaning solutions.',
    neighborhoods: [
      'Jumeirah 1',
      'Jumeirah 2',
      'Jumeirah 3',
      'Umm Suqeim 1',
      'Umm Suqeim 2',
      'Umm Suqeim 3',
      'Al Sufouh',
      'Madinat Jumeirah',
    ],
    mapQuery: 'Jumeirah, Dubai, UAE',
  },

  {
    slug: 'premium-villa-communities',
    name: 'Premium Villa Communities',
    intro:
      'Our premium deep cleaning services are available across Dubai’s leading villa communities. From Emirates Hills and Arabian Ranches to Dubai Hills Estate and Tilal Al Ghaf, our teams deliver detailed cleaning for luxury homes and large properties.',
    neighborhoods: [
      'Emirates Hills',
      'Arabian Ranches',
      'Arabian Ranches 2',
      'Arabian Ranches 3',
      'Dubai Hills Estate',
      'Jumeirah Islands',
      'Jumeirah Golf Estates',
      'The Lakes',
      'The Meadows',
      'The Springs',
      'The Greens',
      'The Views',
      'Al Barari',
      'Tilal Al Ghaf',
      'The Oasis',
    ],
    mapQuery: 'Emirates Hills, Dubai, UAE',
  },

  {
    slug: 'popular-family-communities',
    name: 'Popular Family Communities',
    intro:
      'Professional deep cleaning for families across Dubai’s popular residential communities. Our experienced cleaners serve apartments, villas, townhouses, and larger family homes with flexible scheduling.',
    neighborhoods: [
      'Jumeirah Village Circle (JVC)',
      'Jumeirah Village Triangle (JVT)',
      'DAMAC Hills',
      'DAMAC Hills 2',
      'DAMAC Lagoons',
      'Motor City',
      'Dubai Sports City',
      'Mudon',
      'Town Square Dubai',
      'Villanova',
      'Serena',
      'Al Furjan',
      'Discovery Gardens',
      'The Valley',
    ],
    mapQuery: 'Jumeirah Village Circle, Dubai, UAE',
  },

  {
    slug: 'apartment-residential-areas',
    name: 'Apartment & Residential Areas',
    intro:
      'Get your apartment or residential property professionally deep cleaned by experienced Dubai cleaners. We cover established and growing residential communities across the city.',
    neighborhoods: [
      'Dubai Silicon Oasis',
      'Dubai Production City (IMPZ)',
      'International City',
      'Liwan',
      'Majan',
      'Al Barsha 1',
      'Al Barsha 2',
      'Al Barsha 3',
      'Mirdif',
      'Al Warqa',
      'Al Jaddaf',
      'Dubai South',
      'Dubai Investments Park (DIP)',
    ],
    mapQuery: 'Dubai Silicon Oasis, Dubai, UAE',
  },

  {
    slug: 'older-eastern-dubai-areas',
    name: 'Older & Eastern Dubai Areas',
    intro:
      'Our professional deep cleaning services are available across established communities in eastern and older parts of Dubai. From Deira and Bur Dubai to Al Qusais and Al Nahda, we provide reliable cleaning for homes and businesses.',
    neighborhoods: [
      'Deira',
      'Bur Dubai',
      'Al Karama',
      'Oud Metha',
      'Al Qusais',
      'Al Nahda Dubai',
      'Al Twar',
      'Al Rashidiya',
      'Nad Al Sheba',
    ],
    mapQuery: 'Deira, Dubai, UAE',
  },
];

export const getLocation = (slug) =>
  locations.find((l) => l.slug === slug);

export default locations;