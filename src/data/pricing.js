// Pricing packages for the pricing page and quote estimator.
export const pricingPackages = [
  {
    slug: 'facade-window-cleaning',
    name: 'Facade & Window Cleaning',
    icon: 'FiGrid',
    tagline: 'Crystal-clear windows & spotless building facades',
    price: 499,
    unit: 'from / per visit',
    popular: false,
    features: [
      'Professional facade & window cleaning',
      'Interior & exterior window cleaning',
      'Glass, frames & window tracks cleaned',
      'Trained & experienced cleaning professionals',
      'Eco-friendly cleaning products included',
      'Suitable for villas, offices & commercial buildings',
      'Safe cleaning methods for different facade surfaces',
    ],
    cta: 'Book Facade & Window Cleaning',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning Services',
    icon: 'FiZap',
    tagline: 'A thorough clean for every corner',
    price: 299,
    unit: 'from / per visit',
    popular: true,
    features: [
      'Detailed cleaning of kitchens & bathrooms',
      'Dusting of furniture, doors & surfaces',
      'Floor cleaning & mopping',
      'Window glass & frame cleaning',
      'Appliance exterior cleaning',
      'Hard-to-reach areas cleaned',
      'Trained professional cleaning team',
    ],
    cta: 'Book Deep Clean',
  },

  {
    slug: 'full-villa-deep-cleaning',
    name: 'Full Villa Deep Cleaning',
    icon: 'FiHome',
    tagline: 'Complete villa cleaning from top to bottom',
    price: 699,
    unit: 'from / per visit',
    popular: false,
    features: [
      'Complete villa cleaning',
      'Bedrooms, living rooms & common areas',
      'Detailed kitchen & bathroom cleaning',
      'Floor, doors & surface cleaning',
      'Interior window glass cleaning',
      'Staircases & hard-to-reach areas',
      'Suitable for multi-storey villas',
    ],
    cta: 'Book Villa Clean',
  },

  {
    slug: 'full-office-cleaning',
    name: 'Full Office Deep Cleaning',
    icon: 'FiBriefcase',
    tagline: 'A complete clean for a fresh, professional workspace',
    price: 499,
    unit: 'from / per visit',
    popular: false,
    features: [
      'Complete office area cleaning',
      'Workstations, desks & common areas',
      'Kitchen & pantry cleaning',
      'Restroom deep cleaning',
      'Floor vacuuming & mopping',
      'Glass doors & interior windows',
      'Flexible scheduling around office hours',
    ],

    cta: 'Request Quote',
  },
];

export default pricingPackages;
