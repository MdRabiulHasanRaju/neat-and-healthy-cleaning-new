import { q } from 'framer-motion/client';
import { images } from './images.js';

// Shared process steps reused across most home/office services.
const standardProcess = [
  { step: 1, title: 'Book in 60 seconds', desc: 'Pick a date and time online or on WhatsApp. Get instant confirmation.' },
  { step: 2, title: 'Vetted crew arrives', desc: 'Background-checked, uniformed professionals with eco-friendly supplies.' },
  { step: 3, title: 'Deep clean performed', desc: 'We follow a checklist tailored to your space.' },
  { step: 4, title: 'Quality walk-through', desc: 'You inspect the result. We re-clean any spot, free.' },
];

const standardFaqs = [
  {
    q: 'Are your cleaning products safe for children and pets?',
    a: 'Yes. We use eco-friendly, non-toxic, biodegradable products that are safe for your family and pets while still delivering a hospital-grade clean.',
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: 'No. Most clients provide access via key, concierge, or smart lock. Our uniformed, vetted crew works independently and locks up securely after.',
  },
  {
    q: 'What if I am not satisfied with the result?',
    a: 'Every booking is backed by our 100% satisfaction guarantee. If anything is not perfect, contact us within 24 hours and we will re-clean it free of charge.',
  },
  {
    q: 'How do I pay, and is there a deposit?',
    a: 'We accept card, cash, and bank transfer. No deposit is required — you pay only after the service is completed to your satisfaction.',
  },
];

// Slug -> service object. The slug is used for routing and internal linking.
export const services = [
  {
    slug: 'residential-cleaning',
    name: 'Residential Cleaning',
    icon: 'FiHome',
    short: 'A spotless, healthy home — every visit, guaranteed.',
    summaryTitle:'',
    summary:
      'Reclaim your weekends. Our trained, insured crew keeps your apartment or villa immaculate with eco-friendly products and a checklist.',
    heroImage: "/images/services/Residential Cleaning in dubai - neat and healthy cleaning.webp",
    galleryImage: images.livingRoom,
    benefits: [
      { icon: 'FiShield', title: 'Vetted & insured', desc: 'Background-checked, uniformed professionals you can trust.' },
      { icon: 'FaLeaf', title: 'Eco-friendly', desc: 'Non-toxic, biodegradable products safe for kids and pets.' },
      { icon: 'FiCheckCircle', title: '52-point checklist', desc: 'Every room cleaned to the same exacting standard.' },
      { icon: 'FiClock', title: 'Flexible scheduling', desc: 'Weekly, fortnightly, monthly, or one-off — your call.' },
    ],
    process: standardProcess,
    included: [
      'Dusting & wiping of all surfaces, fixtures, and decor',
      'Floors vacuumed and mopped (hardwood, tile, marble)',
      'Kitchen counters, stovetop, and sink sanitised',
      'Bathroom tiles, basin, toilet, and shower deep cleaned',
      'Bed-making and linen change on request',
      'Interior windows, mirrors, and glass doors cleaned',
      'Bins emptied and liners replaced',
      'Cobwebs removed and skirting boards wiped',
    ],
    beforeAfter: { before: images.livingRoomWood, after: images.heroRoom },
    faqs: standardFaqs,
    related: ['deep-cleaning', 'apartment-cleaning', 'villa-cleaning', 'kitchen-cleaning'],
    priceFrom: 99,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    icon: 'FiBriefcase',
    short: 'Immaculate workspaces that impress clients and energise teams.',
    summaryTitle:'',
    summary:
      'From boutiques to corporate towers, we deliver reliable, discreet commercial cleaning with flexible after-hours scheduling and full compliance documentation.',
    heroImage: '/images/services/Commercial cleaning in dubai - neat and healthy cleaning.webp',
    galleryImage: images.officeWorkspace,
    benefits: [
      { icon: 'FiClock', title: 'After-hours service', desc: 'Minimal disruption — we clean before or after business hours.' },
      { icon: 'FiFileText', title: 'Full compliance', desc: 'Insurance, risk assessments, and audit-ready records.' },
      { icon: 'FiUsers', title: 'Dedicated team', desc: 'The same trained crew, every visit, for consistency.' },
      { icon: 'FiTrendingUp', title: 'Scalable scope', desc: 'From a single office to multi-floor facilities.' },
    ],
    process: standardProcess,
    included: [
      'Reception, meeting rooms, and workstations dusted and sanitised',
      'Glass partitions and doors streak-free cleaned',
      'Kitchen and breakroom sanitised and restocked',
      'Restrooms deep cleaned and disinfected',
      'Floors vacuumed, mopped, or polished as required',
      'High-touch surfaces disinfected (door handles, light switches)',
      'Waste segregation and recycling handled',
      'Monthly performance review with your account manager',
    ],
    beforeAfter: { before: images.officeWorkspace, after: images.officeDesk },
    faqs: standardFaqs,
    related: ['office-cleaning', 'window-cleaning', 'post-construction-cleaning', 'deep-cleaning'],
    priceFrom: 149,
    position:4,
    featured: true,
    flag: null
  },
  {
  slug: 'deep-cleaning',
  name: 'Deep Cleaning Services Dubai',
  icon: 'FiZap',

  short:
    'Professional top-to-bottom deep cleaning for villas, apartments, offices, and commercial spaces across Dubai.',

  summaryTitle:"Revamp Your Space with Professional Deep Cleaning Services in Dubai!",
  summary:
    'Is your home or office ready for a fresh beginning? Neay & Healthy Cleaning\'s deep cleaning services will completely transform your space, leaving it sparkling and healthy. We meticulously clean every corner, ensuring no dust, dirt, or allergens are left behind. Say farewell to hidden grime and enjoy the best clean today!',

  heroImage:
    '/images/services/A Cleaner clean the watch inside villa - Deep Cleaning of Villa Dubai- Neat and Healthy Cleaning.webp',

  galleryImage: images.cleanersVacuum,

  benefits: [
    {
      icon: 'FiZap',
      title: 'Top-to-Bottom Cleaning',
      desc:
        'Detailed cleaning of surfaces, corners, skirting boards, doors, fixtures, and other commonly missed areas.'
    },

    {
      icon: 'FiDroplet',
      title: 'Kitchen & Bathroom Detailing',
      desc:
        'Remove grease, soap residue, limescale, and built-up dirt from kitchens, bathrooms, tiles, fixtures, and appliances.'
    },

    {
      icon: 'FiWind',
      title: 'Hard-to-Reach Areas',
      desc:
        'Dust and clean areas behind and under furniture, high ledges, corners, vents, fans, and other difficult-to-reach spaces.'
    },

    {
      icon: 'FiClock',
      title: 'Professional Cleaning Team',
      desc:
        'Our trained cleaning teams work systematically to provide a detailed clean based on the size and condition of your property.'
    }
  ],

  process: standardProcess,

  included: [
    'Top-to-bottom dusting and surface cleaning throughout the property',
    'Deep cleaning of floors, corners, edges, and hard-to-reach areas',
    'Skirting boards, door frames, doors, and accessible light fixtures dusted and wiped',
    'Kitchen worktops, cabinets, drawers, backsplash, and surfaces cleaned',
    'Inside oven, refrigerator, and microwave cleaned and degreased',
    'Bathroom tiles, showers, bathtubs, sinks, toilets, and fixtures cleaned',
    'Limescale and soap residue removed from taps, showerheads, and tiles where possible',
    'Grout scrubbed and cleaned',
    'Windows and accessible glass surfaces cleaned',
    'Balconies and patios swept and wiped',
    'Carpet and upholstery vacuuming with stain pre-treatment where applicable',
    'Furniture surfaces and accessible areas underneath and behind furniture cleaned',
    'Dusting of vents, fans, accessible filters, and high-level surfaces',
    'Removal of visible dust, dirt, grease, and accumulated surface buildup',
  ],

  notIncluded: [
    'External window cleaning requiring special access equipment',
    'High-rise exterior glass cleaning',
    'Pest control',
    'Painting or maintenance work',
    'AC repair or technical servicing',
    'Heavy post-construction debris removal',
    'Biohazard or hazardous waste cleaning'
  ],

  beforeAfter: {
    before: "/images/services/Deep-Cleaning-Services-Before.webp",
    after: "/images/services/Deep-Cleaning-Services-after.webp"
  },

  faqs: [
    {
      q: 'What is deep cleaning in Dubai?',
      a:
        'Deep cleaning is a more detailed cleaning service than regular house cleaning. It focuses on areas that are often missed during routine cleaning, including corners, skirting boards, kitchen surfaces, bathrooms, fixtures, hard-to-reach areas, and accumulated dirt and buildup.'
    },

    {
      q: 'What is included in your deep cleaning service?',
      a:
        'Our deep cleaning service can include detailed cleaning of kitchens, bathrooms, floors, surfaces, doors, skirting boards, accessible fixtures, cabinets, appliances, balconies, carpets, upholstery, and hard-to-reach areas. The exact scope can vary depending on the property and service requirements.'
    },

    {
      q: 'How much does deep cleaning cost in Dubai?',
      a:
        'Deep cleaning prices in Dubai depend on the property type, size, number of rooms, condition of the property, and the cleaning work required. We provide pricing based on your specific requirements rather than using the same price for every property.'
    },

    {
      q: 'How long does deep cleaning take?',
      a:
        'The cleaning time depends on the size and condition of the property and the scope of work. A small apartment may require several hours, while a larger villa or heavily soiled property can take significantly longer.'
    },

    {
      q: 'Do you provide deep cleaning for villas in Dubai?',
      a:
        'Yes. We provide deep cleaning for villas and houses across Dubai, including detailed cleaning of bedrooms, living areas, kitchens, bathrooms, balconies, floors, surfaces, and other accessible areas.'
    },

    {
      q: 'Do you provide apartment deep cleaning in Dubai?',
      a:
        'Yes. Our apartment deep cleaning service is suitable for studios, 1-bedroom, 2-bedroom, 3-bedroom, and larger apartments. The cleaning scope can be adjusted according to the size and condition of the apartment.'
    },

    {
      q: 'Is deep cleaning different from regular cleaning?',
      a:
        'Yes. Regular cleaning generally focuses on maintaining everyday cleanliness, while deep cleaning involves more detailed work on areas that are not cleaned frequently, such as skirting boards, corners, fixtures, buildup, cabinets, appliances, and hard-to-reach areas.'
    },

    {
      q: 'Can I book deep cleaning before moving into a property?',
      a:
        'Yes. Deep cleaning is commonly booked before moving into a new apartment or villa. A move-in deep clean can help remove accumulated dust, dirt, residue, and previous occupants’ buildup before you settle into the property.'
    },

    {
      q: 'Do you provide move-out deep cleaning in Dubai?',
      a:
        'Yes. Deep cleaning can be arranged for tenants preparing to leave an apartment or villa. The service can focus on kitchens, bathrooms, floors, cabinets, surfaces, and other areas that need detailed cleaning before handover.'
    },

    {
      q: 'Do I need to provide cleaning products or equipment?',
      a:
        'Our cleaning team can bring the standard cleaning products and equipment required for the agreed cleaning service. If you have specific products, surfaces, or cleaning requirements, you can inform our team before the appointment.'
    }
  ],

  related: [
    'villa-cleaning',
    'move-in-out-deep-cleaning',
    'apartment-cleaning',
    'office-cleaning',
  ],

  priceFrom: 300,

  position:1,

  featured: true,

  flag: 'Most Popular'
},
  {
    slug: 'office-cleaning',
    name: 'Office Deep Cleaning',
    icon: 'FiMonitor',
    short: 'Daily, weekly, or one-off office cleaning tailored to your team.',
    summaryTitle:'',
    summary:
      'A clean office is a productive office. We keep desks, meeting rooms, kitchens, and washrooms pristine so your team can focus on what matters.',
    heroImage: "/images/services/office-deep-cleaning-dubai-neat-and-healthy-cleaning.webp",
    galleryImage: images.officeDesk,
    benefits: [
      { icon: 'FiCalendar', title: 'Daily or weekly', desc: 'Recurring contracts with the same reliable crew.' },
      { icon: 'FiShield', title: 'Discreet & secure', desc: 'Bonded staff who respect confidentiality and equipment.' },
      { icon: 'FiDroplet', title: 'Sanitisation focus', desc: 'High-touch surfaces disinfected to reduce sick days.' },
      { icon: 'FiPhone', title: 'Account manager', desc: 'One point of contact for any change request.' },
    ],
    process: standardProcess,
    included: [
      'Workstations, monitors, and peripherals dusted',
      'Meeting rooms reset and sanitised between uses',
      'Pantry and coffee station cleaned and restocked',
      'Washrooms sanitised and supplies replenished',
      'Floors vacuumed and mopped daily',
      'Glass partitions and doors cleaned',
      'Door handles and switches disinfected',
      'Waste and recycling removed',
    ],
    beforeAfter: { before: images.officeDesk, after: images.officeWorkspace },
    faqs: standardFaqs,
    related: ['commercial-cleaning', 'window-cleaning', 'carpet-cleaning', 'deep-cleaning'],
    priceFrom: 129,
    position:6,
    featured: true,
    flag: null
  },
  {
    slug: 'apartment-cleaning',
    name: 'Apartment Deep Cleaning',
    icon: 'FiGrid',
    short: 'Effortless apartment living — clean, fresh, and ready to enjoy.',
    summaryTitle:'',
    summary:
      'Studio or 3-bedroom, we know apartments. Our crew navigates tight spaces and shared facilities with care, leaving your home spotless.',
    heroImage: "/images/services/apartmen deep cleaning dubai - neat and healthy cleaning services.webp",
    galleryImage: images.livingRoomWood,
    benefits: [
      { icon: 'FiClock', title: 'Fast turnaround', desc: 'Most apartments cleaned in 2-4 hours.' },
      { icon: 'FiMapPin', title: 'Building-friendly', desc: 'We coordinate with concierge and security.' },
      { icon: 'FaLeaf', title: 'Low-noise', desc: 'Quiet equipment that respects neighbours.' },
      { icon: 'FiRefreshCw', title: 'Recurring options', desc: 'Weekly, fortnightly, or monthly plans.' },
    ],
    process: standardProcess,
    included: [
      'Living and bedroom dusting, vacuuming, and mopping',
      'Kitchen surfaces, sink, and appliances wiped',
      'Bathroom sanitised and limescale treated',
      'Balcony swept on request',
      'Interior glass and mirrors cleaned',
      'Bins emptied and liners replaced',
      'Cobwebs removed',
      'Air freshener on request',
    ],
    beforeAfter: { before: images.livingRoomWood, after: images.livingRoom },
    faqs: standardFaqs,
    related: ['residential-cleaning', 'deep-cleaning', 'villa-cleaning', 'kitchen-cleaning'],
    priceFrom: 89,
    position:5,
    featured: true,
    flag: null
  },
  {
  slug: 'villa-cleaning',

  name: 'Villa Deep Cleaning Dubai',

  icon: 'FiHome',

  short:
    'Professional villa deep cleaning for bedrooms, living areas, kitchens, bathrooms, stairs, outdoor spaces, and hard-to-reach areas across Dubai.',

  summaryTitle:
    'Is Your Villa Really Clean? Hidden Dirt Could Be Saying Otherwise!',

  summary:
    'A large villa needs more than routine cleaning. Dust can quickly build up around corners, skirting boards, stairs, furniture, windows, kitchens, bathrooms, and other areas that are easy to overlook. Neat & Healthy Cleaning provides professional villa deep cleaning services in Dubai to give your entire home a thorough refresh. Our trained cleaning team works systematically across bedrooms, living rooms, majlis areas, kitchens, bathrooms, staircases, balconies, patios, maid’s rooms, and other accessible areas. Whether you need a one-time deep clean, a seasonal refresh, or cleaning before moving in or out, we tailor the service to the size, condition, and requirements of your villa.',

  heroImage:
    "/images/services/villa deep cleaning inside dubai - neat and healthy cleaning.webp",

  galleryImage: images.villaHill,

  benefits: [
    {
      icon: 'FiUsers',
      title: 'Professional Cleaning Team',
      desc:
        'A trained team works systematically across your villa to provide detailed and efficient cleaning.'
    },

    {
      icon: 'FiHome',
      title: 'Whole-Villa Cleaning',
      desc:
        'Bedrooms, living areas, majlis, kitchen, bathrooms, stairs, maid’s room, and other accessible areas.'
    },

    {
      icon: 'FiLayers',
      title: 'Multi-Storey Expertise',
      desc:
        'Detailed cleaning across multiple floors, including stairs, landings, corners, and high-access areas.'
    },

    {
      icon: 'FiShield',
      title: 'Careful Surface Cleaning',
      desc:
        'Cleaning methods are selected according to the surface, furniture material, and condition of the area.'
    }
  ],

  process: standardProcess,

  included: [
    'Bedrooms, living rooms, dining areas, and majlis cleaned',
    'Dusting and wiping of accessible furniture and surfaces',
    'Skirting boards, door frames, doors, and accessible fixtures cleaned',
    'Staircases, handrails, balustrades, and landings dusted and wiped',
    'Kitchen worktops, cabinets, drawers, backsplash, and accessible surfaces cleaned',
    'Oven, refrigerator, and microwave cleaned where included in the selected service',
    'Bathrooms, showers, bathtubs, sinks, toilets, tiles, and fixtures deep cleaned',
    'Limescale and soap residue removed from suitable surfaces where possible',
    'Floors vacuumed and mopped throughout the villa',
    'Corners, edges, and other commonly missed areas thoroughly cleaned',
    'Maid’s room cleaned',
    'Balconies, patios, and accessible outdoor areas swept and wiped',
    'Outdoor furniture cleaned where accessible and suitable',
    'Garage swept and surface-cleaned',
    'Ground-floor accessible windows and glass surfaces cleaned where applicable',
    'Dust removed from accessible vents, fans, ledges, and high-level surfaces',
  ],

  notIncluded: [
    'High-rise or difficult-access exterior window cleaning',
    'External facade cleaning',
    'Specialized rope-access cleaning',
    'Pest control',
    'Painting or maintenance work',
    'AC repair or technical servicing',
    'Heavy construction debris removal',
    'Hazardous waste or biohazard cleaning',
  ],

  beforeAfter: {
    before: "/images/services/villa-Cleaning-Services-Before.jpeg",
    after: "/images/services/villa-Cleaning-Services-After.jpeg"
  },

  faqs: [
    {
      q: 'What is included in villa deep cleaning in Dubai?',
      a:
        'Villa deep cleaning generally includes detailed cleaning of bedrooms, living areas, majlis, kitchens, bathrooms, stairs, floors, skirting boards, doors, accessible fixtures, maid’s rooms, balconies, patios, and other accessible areas. The exact scope depends on the size and condition of the villa and the service selected.'
    },

    {
      q: 'How much does villa deep cleaning cost in Dubai?',
      a:
        'Villa deep cleaning prices in Dubai depend on the size of the villa, number of rooms and bathrooms, number of floors, property condition, and the cleaning work required. We recommend getting a quote based on your villa’s actual requirements rather than relying on a standard price for every property.'
    },

    {
      q: 'How long does villa deep cleaning take?',
      a:
        'The cleaning time depends on the size, number of floors, condition of the villa, and the scope of work. Larger villas or properties requiring extensive detailed cleaning naturally take longer than smaller or well-maintained villas.'
    },

    {
      q: 'Do you provide deep cleaning for large villas?',
      a:
        'Yes. Our villa cleaning service can be arranged for villas of different sizes and layouts, including multi-storey properties. The cleaning team and service scope can be adjusted according to the size and requirements of the property.'
    },

    {
      q: 'Do you clean kitchens and bathrooms during villa deep cleaning?',
      a:
        'Yes. Kitchens and bathrooms receive detailed attention during villa deep cleaning. Depending on the selected service, this can include worktops, cabinets, appliances, sinks, toilets, showers, bathtubs, tiles, fixtures, grease, soap residue, and limescale on suitable surfaces.'
    },

    {
      q: 'Do you clean villa stairs and common areas?',
      a:
        'Yes. Staircases, handrails, balustrades, landings, corridors, and other common areas can be included in the villa deep cleaning service. These areas are often overlooked during routine cleaning and therefore receive detailed attention.'
    },

    {
      q: 'Can you clean the maid’s room and garage?',
      a:
        'Yes. Maid’s rooms and garages can be included as part of the villa cleaning scope, subject to accessibility and the selected service package.'
    },

    {
      q: 'Do you clean outdoor areas of villas?',
      a:
        'Yes. Accessible patios, balconies, terraces, and outdoor furniture can be cleaned depending on the service requirements and condition of the area. Specialized exterior cleaning may require a separate service.'
    },

    {
      q: 'Can I book villa deep cleaning before moving in?',
      a:
        'Yes. Villa deep cleaning is a popular option before moving into a new property. A detailed clean can help remove accumulated dust, dirt, residue, and buildup before you start using the villa.'
    },

    {
      q: 'Do you provide move-out villa cleaning in Dubai?',
      a:
        'Yes. We can arrange detailed cleaning for villas before handover or moving out. The cleaning scope can focus on kitchens, bathrooms, floors, cabinets, rooms, and other areas that require attention before the property is handed over.'
    },

    {
      q: 'Do I need to provide cleaning equipment?',
      a:
        'Our cleaning team can bring the standard cleaning products and equipment required for the agreed service. If your villa has specific surfaces or special cleaning requirements, you can inform us before the appointment.'
    },

    {
      q: 'Which areas in Dubai do you cover for villa cleaning?',
      a:
        'We provide villa cleaning services across Dubai, subject to service availability. You can contact our team with your villa location and requirements to confirm availability and receive a suitable quote.'
    }
  ],

  related: [
    'residential-cleaning',
    'deep-cleaning',
    'marble-polishing',
    'window-cleaning'
  ],

  priceFrom: 500,

  position:3,

  featured: true,

  flag: null
},
  {
    slug: 'move-in-out-deep-cleaning',
    name: 'Move In/Out Deep Cleaning',
    icon: 'FiLogIn',
    short: 'Walk into a spotless new home — before your boxes arrive.',
    summaryTitle:'',
    summary:
      'Make your new place truly yours. We deep clean every surface before you move in so you arrive to a fresh, sanitised, ready-to-live space.',
    heroImage: "/images/services/move-in-out-deep-cleaning-dubai-neat-and-healthy-cleaning.webp",
    galleryImage: images.heroRoom,
    benefits: [
      { icon: 'FiZap', title: 'Empty-home deep clean', desc: 'Best results — we clean what is normally hidden by furniture.' },
      { icon: 'FiDroplet', title: 'Sanitised for health', desc: 'Bathrooms and kitchen disinfected to a clinical standard.' },
      { icon: 'FiCheckCircle', title: 'Move-in ready', desc: 'Handover walk-through with you before we leave.' },
      { icon: 'FiClock', title: 'Same-day available', desc: 'Tight timeline? We can often help the same day.' },
    ],
    process: standardProcess,
    included: [
      'Full deep clean of all rooms',
      'Inside all cabinets and wardrobes wiped',
      'Kitchen appliances degreased inside and out',
      'Bathrooms descaled and disinfected',
      'Windows, frames, and sills cleaned',
      'Floors vacuumed, mopped, or polished',
      'Air vents and light fixtures dusted',
      'Odour neutralisation',
    ],
    beforeAfter: { before: images.heroRoom, after: images.livingRoom },
    faqs: standardFaqs,
    related: ['move-out-cleaning', 'deep-cleaning', 'residential-cleaning', 'apartment-cleaning'],
    priceFrom: 199,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'kitchen-cleaning',
    name: 'Kitchen Cleaning',
    icon: 'FiCoffee',
    short: 'A grease-free, sanitised kitchen you will actually want to cook in.',
    summaryTitle:'',
    summary:
      'The kitchen is the heart of the home — and the hardest room to keep truly clean. Our specialists degrease, descale, and sanitise every surface and appliance.',
    heroImage: images.kitchen,
    galleryImage: images.kitchenWood,
    benefits: [
      { icon: 'FiDroplet', title: 'Grease removal', desc: 'Extractor hoods, tiles, and stovetops degreased.' },
      { icon: 'FiZap', title: 'Appliance inside-out', desc: 'Oven, microwave, and fridge detailed.' },
      { icon: 'FiShield', title: 'Food-safe', desc: 'Non-toxic products safe around food surfaces.' },
      { icon: 'FiWind', title: 'Odour removal', desc: 'Drains and bins sanitised to remove smells.' },
    ],
    process: standardProcess,
    included: [
      'Stovetop and burners degreased',
      'Oven interior and racks cleaned',
      'Range hood and filter degreased',
      'Backsplash and tiles scrubbed',
      'Sink and tap descaled and polished',
      'Countertops sanitised',
      'Cabinet exteriors wiped',
      'Fridge exterior and handles sanitised',
    ],
    beforeAfter: { before: images.kitchenWood, after: images.kitchen },
    faqs: standardFaqs,
    related: ['deep-cleaning', 'residential-cleaning', 'bathroom-cleaning', 'apartment-cleaning'],
    priceFrom: 119,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'bathroom-cleaning',
    name: 'Bathroom Cleaning',
    icon: 'FiDroplet',
    short: 'Sparkling, sanitised, limescale-free bathrooms.',
    summaryTitle:'',
    summary:
      'We make bathrooms shine. From grout brightening to descaling showerheads, our bathroom specialists deliver a hygienic, hotel-standard finish.',
    heroImage: images.bathroom,
    galleryImage: images.bathroomMarble,
    benefits: [
      { icon: 'FiDroplet', title: 'Limescale removal', desc: 'Taps, showerheads, and glass restored to shine.' },
      { icon: 'FiGrid', title: 'Grout brightening', desc: 'Tile grout scrubbed and whitened.' },
      { icon: 'FiShield', title: 'Disinfection', desc: 'All surfaces sanitised to a clinical standard.' },
      { icon: 'FiWind', title: 'Mould treatment', desc: 'Silicone and corners treated for mould.' },
    ],
    process: standardProcess,
    included: [
      'Toilet bowl, seat, and cistern disinfected',
      'Shower screen descaled and polished',
      'Showerhead descaled',
      'Tiles and grout scrubbed',
      'Basin and tap descaled',
      'Mirror and glass cleaned streak-free',
      'Floor mopped and sanitised',
      'Bin emptied and sanitised',
    ],
    beforeAfter: { before: images.bathroomMarble, after: images.bathroom },
    faqs: standardFaqs,
    related: ['deep-cleaning', 'kitchen-cleaning', 'residential-cleaning', 'marble-polishing'],
    priceFrom: 99,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    icon: 'FiLayers',
    short: 'Deep-extraction carpet cleaning that lifts stains and restores pile.',
    summaryTitle:'',
    summary:
      'Hot-water extraction lifts dirt, allergens, and stains from deep within your carpet — leaving it fresh, sanitised, and fast-drying.',
    heroImage: "/images/services/Carpet Cleaning Services Dubai - Neat and Healthy Cleaning.webp",
    galleryImage: images.vacuumSofa,
    benefits: [
      { icon: 'FiDroplet', title: 'Hot extraction', desc: 'Removes dirt and allergens from the carpet base.' },
      { icon: 'FiWind', title: 'Fast drying', desc: 'Low-moisture method — dry in 2-4 hours.' },
      { icon: 'FiShield', title: 'Stain treatment', desc: 'Targeted products for wine, coffee, and pet stains.' },
      { icon: 'FaLeaf', title: 'Safe products', desc: 'Eco-friendly, child- and pet-safe solutions.' },
    ],
    process: standardProcess,
    included: [
      'Pre-inspection and stain identification',
      'Pre-treatment of high-traffic and stained areas',
      'Hot-water extraction cleaning',
      'Fibre-safe stain treatment',
      'Deodorisation',
      'Carpet grooming to reset pile',
      'Furniture tabs placed under legs',
      'Post-clean inspection',
    ],
    beforeAfter: { before: images.vacuumSofa, after: images.vacuumCarpet },
    faqs: standardFaqs,
    related: ['sofa-cleaning', 'mattress-cleaning', 'residential-cleaning', 'deep-cleaning'],
    priceFrom: 129,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'sofa-cleaning',
    name: 'Sofa Cleaning',
    icon: 'FiHeart',
    short: 'Refresh and sanitise your upholstery — fabric, leather, or microfibre.',
    summaryTitle:'',
    summary:
      'From fabric sofas to leather lounges, we identify the right method for your upholstery and lift dirt, stains, and allergens safely.',
    heroImage: "/images/services/sofa cleaning in dubai - neat and healthy cleaning.webp",
    galleryImage: images.vacuumCarpet,
    benefits: [
      { icon: 'FiSearch', title: 'Fibre-specific', desc: 'Method matched to fabric, leather, or microfibre.' },
      { icon: 'FiDroplet', title: 'Stain lift', desc: 'Targeted treatment for food, ink, and pet stains.' },
      { icon: 'FiWind', title: 'Allergen removal', desc: 'Dust mites and pollen extracted for healthier air.' },
      { icon: 'FiClock', title: 'Fast drying', desc: 'Low-moisture method for minimal downtime.' },
    ],
    process: standardProcess,
    included: [
      'Fibre identification and test patch',
      'Vacuum extraction of loose soil',
      'Pre-treatment of stains',
      'Deep upholstery extraction',
      'Leather cleaning and conditioning (where applicable)',
      'Deodorisation',
      'Fabric protector application on request',
      'Final grooming',
    ],
    beforeAfter: { before: images.vacuumCarpet, after: images.vacuumSofa },
    faqs: standardFaqs,
    related: ['carpet-cleaning', 'mattress-cleaning', 'residential-cleaning', 'deep-cleaning'],
    priceFrom: 119,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'mattress-cleaning',
    name: 'Mattress Cleaning',
    icon: 'FiMoon',
    short: 'Sleep easier on a sanitised, dust-mite-free mattress.',
    summaryTitle:'',
    summary:
      'We extract dust mites, dead skin, and stains from deep within your mattress — sanitising and deodorising for a healthier night’s sleep.',
    heroImage: images.heroRoomAlt,
    galleryImage: images.heroRoom,
    benefits: [
      { icon: 'FiWind', title: 'Allergen removal', desc: 'Dust mites and pollen extracted.' },
      { icon: 'FiDroplet', title: 'Stain treatment', desc: 'Sweat, urine, and drink stains treated.' },
      { icon: 'FiShield', title: 'Sanitisation', desc: 'UV and anti-bacterial treatment available.' },
      { icon: 'FiWind', title: 'Deodorisation', desc: 'Fresh, neutral scent restored.' },
    ],
    process: standardProcess,
    included: [
      'Pre-vacuum of mattress surface',
      'UV-C sanitisation on request',
      'Stain pre-treatment',
      'Deep extraction cleaning',
      'Deodorisation',
      'Anti-allergen spray',
      'Both sides cleaned',
      'Quick-dry finish',
    ],
    beforeAfter: { before: images.heroRoom, after: images.heroRoomAlt },
    faqs: standardFaqs,
    related: ['sofa-cleaning', 'carpet-cleaning', 'residential-cleaning', 'deep-cleaning'],
    priceFrom: 109,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'marble-polishing',
    name: 'Marble Polishing',
    icon: 'FiAward',
    short: 'Restore the mirror shine to your marble floors and surfaces.',
    summaryTitle:'',
    summary:
      'Scratches, etching, and dullness removed. Our diamond-pad grinding and polishing process restores the depth and gloss of natural stone.',
    heroImage: images.marbleFloor,
    galleryImage: images.marbleLobby,
    benefits: [
      { icon: 'FiAward', title: 'Diamond polishing', desc: 'Multi-stage grinding for a true mirror finish.' },
      { icon: 'FiShield', title: 'Sealing', desc: 'Penetrating sealer protects against staining.' },
      { icon: 'FiZap', title: 'Etch removal', desc: 'Acid marks and dull spots restored.' },
      { icon: 'FiLayers', title: 'All stone', desc: 'Marble, terrazzo, travertine, and limestone.' },
    ],
    process: [
      { step: 1, title: 'Inspection', desc: 'We assess stone type, damage, and finish goals.' },
      { step: 2, title: 'Grinding & honing', desc: 'Diamond pads remove scratches and level the surface.' },
      { step: 3, title: 'Polishing', desc: 'Progressive grits bring up a deep, natural gloss.' },
      { step: 4, title: 'Sealing', desc: 'Penetrating sealer protects against future staining.' },
    ],
    included: [
      'Floor inspection and assessment',
      'Grinding to remove scratches and lippage',
      'Honing to refine the surface',
      'Polishing to the desired gloss level',
      'Penetrating sealer application',
      'Edge and corner detailing',
      'Final buff',
      'Care guide provided',
    ],
    beforeAfter: { before: images.marbleLobby, after: images.marbleFloor },
    faqs: standardFaqs,
    related: ['villa-cleaning', 'deep-cleaning', 'bathroom-cleaning', 'residential-cleaning'],
    priceFrom: 159,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'window-cleaning',
    name: 'Window Cleaning',
    icon: 'FiWind',
    short: 'Streak-free, crystal-clear windows — inside and out.',
    summaryTitle:'',
    summary:
      'From ground-floor villas to high-rise apartments, our pure-water-fed pole system and trained team deliver spotless, streak-free windows.',
    heroImage: "/images/services/window cleaning dubai - neat and healthy cleaning.webp",
    galleryImage: images.windowRoof,
    benefits: [
      { icon: 'FiDroplet', title: 'Pure-water system', desc: 'Deionised water for a spot-free, chemical-free finish.' },
      { icon: 'FiWind', title: 'Reach & wash', desc: 'Carbon poles reach up to 20m without ladders.' },
      { icon: 'FiShield', title: 'Fully insured', desc: 'Height-trained, certified, and insured team.' },
      { icon: 'FiCheckCircle', title: 'Streak-free', desc: 'Squeegee finish on interior glass.' },
    ],
    process: standardProcess,
    included: [
      'Interior and exterior glass cleaned',
      'Frames and sills wiped',
      'Pure-water rinse for exterior',
      'Squeegee finish for interior',
      'Spider-web and debris removal',
      'Screen cleaning on request',
      'Balcony glass cleaned',
      'Final spot inspection',
    ],
    beforeAfter: { before: images.windowRoof, after: images.windowClean },
    faqs: standardFaqs,
    related: ['commercial-cleaning', 'office-cleaning', 'villa-cleaning', 'post-construction-cleaning'],
    priceFrom: 89,
    position:null,
    featured: false,
    flag: null
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post Construction Cleaning',
    icon: 'FiTool',
    short: 'Remove the dust, debris, and residue — move-in ready, guaranteed.',
    summaryTitle:'',
    summary:
      'After the builders leave, the real clean begins. We remove fine dust, paint splatter, and adhesive residue to make your renovated space truly liveable.',
    heroImage: "/images/services/post-construction-cleaning-dubai-neat-and-healthy-cleaning.webp",
    galleryImage: images.heroRoom,
    benefits: [
      { icon: 'FiZap', title: 'Dust elimination', desc: 'Fine construction dust removed from every surface.' },
      { icon: 'FiTool', title: 'Residue removal', desc: 'Paint, adhesive, and grout haze cleaned.' },
      { icon: 'FiShield', title: 'Safe products', desc: 'Non-damaging methods for new finishes.' },
      { icon: 'FiCheckCircle', title: 'Handover ready', desc: 'Walk-through with you before sign-off.' },
    ],
    process: standardProcess,
    included: [
      'Full dust removal from all surfaces',
      'Paint and adhesive residue removed',
      'Windows and frames detailed',
      'Floors swept, scrubbed, and mopped',
      'Bathrooms descaled and sanitised',
      'Kitchen surfaces and appliances wiped',
      'Air vents and light fixtures dusted',
      'Final inspection and walk-through',
    ],
    beforeAfter: { before: images.construction, after: images.heroRoom },
    faqs: standardFaqs,
    related: ['move-in-cleaning', 'deep-cleaning', 'window-cleaning', 'villa-cleaning'],
    priceFrom: 249,
    position:null,
    featured: false,
    flag: null
  },
  {
  slug: 'facade-cleaning',

  name: 'Facade Cleaning Dubai',

  icon: 'FiLayers',

  short:
    'Professional facade cleaning for villas, buildings, offices, and commercial properties across Dubai.',

  summaryTitle:
    'Give Your Building Exterior a Cleaner, Fresher Look',

  summary:
    'Dubai’s heat, dust, sand, humidity, and everyday pollution can quickly leave marks on building exteriors. Over time, dirt, dust, water stains, bird droppings, and surface buildup can make a property look dull and poorly maintained. Neat & Healthy Cleaning provides professional facade cleaning services in Dubai to help restore the clean appearance of villas, residential buildings, offices, retail properties, and other commercial spaces. Our team uses suitable cleaning methods based on the facade material and condition, with careful attention to glass, walls, cladding, frames, and other accessible exterior surfaces. Whether you need a one-time facade refresh or scheduled exterior cleaning, we can tailor the service to your property requirements.',

  heroImage:
    '/images/services/facade-cleaning-dubai-neat-and-healthy-cleaning.webp',

  galleryImage: images.facadeCleaning,

  benefits: [
    {
      icon: 'FiSun',
      title: 'Restore Exterior Appearance',
      desc:
        'Remove accumulated dust, dirt, stains, and surface buildup to give your property a cleaner and fresher exterior.'
    },

    {
      icon: 'FiDroplet',
      title: 'Suitable Cleaning Methods',
      desc:
        'We select cleaning methods according to the facade material, surface condition, and type of dirt or buildup.'
    },

    {
      icon: 'FiShield',
      title: 'Careful Surface Treatment',
      desc:
        'Our team takes care when cleaning glass, cladding, painted surfaces, tiles, stone, and other exterior materials.'
    },

    {
      icon: 'FiHome',
      title: 'Residential & Commercial',
      desc:
        'Suitable for villas, apartment buildings, offices, retail properties, and other commercial or residential spaces.'
    }
  ],

  process: standardProcess,

  included: [
    'Exterior facade surface cleaning',
    'Removal of accumulated dust and loose dirt',
    'Cleaning of visible sand and surface deposits',
    'Removal of suitable water marks and surface stains',
    'Cleaning of accessible exterior walls',
    'Glass facade and exterior glass cleaning where applicable',
    'Window frames and accessible surrounding areas cleaned',
    'Cleaning of suitable cladding surfaces',
    'Cleaning of exterior tiles and selected hard surfaces',
    'Removal of visible bird droppings where safely accessible',
    'Cleaning around exterior entrances and accessible facade areas',
    'Final inspection of cleaned facade areas',
  ],

  notIncluded: [
    'Rope-access cleaning unless specifically arranged',
    'High-rise facade cleaning requiring specialized access equipment',
    'Building facade repairs',
    'Painting or repainting',
    'Crack or structural repairs',
    'Waterproofing or sealant application',
    'Glass replacement',
    'Permanent removal of damaged or deeply etched stains',
    'Pest control',
  ],

  beforeAfter: {
    before: images.facadeBefore,
    after: images.facadeAfter
  },

  faqs: [
    {
      q: 'What is facade cleaning?',
      a:
        'Facade cleaning is the professional cleaning of a building’s exterior surfaces to remove accumulated dust, dirt, sand, stains, water marks, bird droppings, and other surface buildup. The cleaning method depends on the facade material and condition.'
    },

    {
      q: 'Why is facade cleaning important in Dubai?',
      a:
        'Dubai’s dusty and sandy environment, high temperatures, humidity, and everyday pollution can cause dirt and deposits to accumulate on exterior surfaces. Regular facade cleaning helps maintain the appearance of a property and keeps exterior surfaces looking well maintained.'
    },

    {
      q: 'What types of facades can you clean?',
      a:
        'Depending on the property and surface condition, facade cleaning can be suitable for glass, cladding, tiles, painted surfaces, stone, and other compatible exterior materials. The appropriate cleaning method should be selected based on the specific facade material.'
    },

    {
      q: 'Do you provide facade cleaning for villas in Dubai?',
      a:
        'Yes. We provide facade cleaning for villas and residential properties in Dubai, subject to accessibility and the type of exterior surface. The service can focus on exterior walls, windows, glass, entrance areas, and other suitable facade surfaces.'
    },

    {
      q: 'Do you clean commercial building facades?',
      a:
        'Yes. Facade cleaning can be arranged for offices, retail properties, commercial buildings, and other business premises. The cleaning scope can be tailored according to the size, facade material, accessibility, and cleaning requirements.'
    },

    {
      q: 'Does facade cleaning remove dust and sand from buildings?',
      a:
        'Yes. Removing accumulated dust and sand is one of the common purposes of facade cleaning in Dubai. Depending on the surface, additional cleaning may also address suitable stains, water marks, bird droppings, and other visible buildup.'
    },

    {
      q: 'Can you remove water stains from building facades?',
      a:
        'Suitable water marks and surface deposits may be removed during facade cleaning. However, some stains can become deeply embedded or etched into the surface over time. The result depends on the material, age, and condition of the facade.'
    },

    {
      q: 'How often should a building facade be cleaned in Dubai?',
      a:
        'The ideal cleaning frequency depends on the property location, facade material, exposure to dust and sand, surrounding environment, and the desired appearance. Many properties benefit from periodic exterior cleaning to prevent heavy buildup.'
    },

    {
      q: 'How much does facade cleaning cost in Dubai?',
      a:
        'Facade cleaning prices depend on the size of the property, facade area, material, level of dirt, accessibility, required equipment, and scope of work. We recommend requesting a quote based on your specific property rather than using a standard price for every building.'
    },

    {
      q: 'How long does facade cleaning take?',
      a:
        'The required time depends on the size of the facade, building height, surface condition, accessibility, and cleaning method. A small villa facade may require significantly less time than a large commercial or multi-storey building.'
    },

    {
      q: 'Do you provide high-rise facade cleaning in Dubai?',
      a:
        'High-rise facade cleaning may require specialized access systems, equipment, permits, and safety arrangements. Contact our team with your building details so we can assess the requirements and confirm whether the requested service can be arranged.'
    },

    {
      q: 'Can facade cleaning damage exterior surfaces?',
      a:
        'Professional facade cleaning should use a method appropriate for the specific surface. Using excessive pressure or unsuitable chemicals can damage some materials, which is why the cleaning approach should be selected according to the facade type and condition.'
    }
  ],

  related: [
    'window-cleaning',
    'deep-cleaning',
    'pressure-washing',
    'villa-cleaning'
  ],

  priceFrom: 499,

  position:2,

  featured: true,

  flag: null
},
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export default services;
