// Navigation structure for the navbar and mega menu.
export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    mega: true,
    groups: [
      {
        title: 'Home',
        items: [
          { slug: 'residential-cleaning', name: 'Residential Cleaning' },
          { slug: 'apartment-cleaning', name: 'Apartment Cleaning' },
          { slug: 'villa-cleaning', name: 'Villa Cleaning' },
          { slug: 'deep-cleaning', name: 'Deep Cleaning' },
        ],
      },
      {
        title: 'Move & Build',
        items: [
          { slug: 'move-in-out-deep-cleaning', name: 'Move In/Out Deep Cleaning' },
          { slug: 'post-construction-cleaning', name: 'Post Construction Cleaning' },
        ],
      },
      {
        title: 'Commercial',
        items: [
          { slug: 'commercial-cleaning', name: 'Commercial Cleaning' },
          { slug: 'office-cleaning', name: 'Office Cleaning' },
          { slug: 'window-cleaning', name: 'Window Cleaning' },
        ],
      },
      {
        title: 'Specialist',
        items: [
          { slug: 'carpet-cleaning', name: 'Carpet Cleaning' },
          { slug: 'sofa-cleaning', name: 'Sofa Cleaning' },
          { slug: 'mattress-cleaning', name: 'Mattress Cleaning' },
          { slug: 'marble-polishing', name: 'Marble Polishing' },
          { slug: 'kitchen-cleaning', name: 'Kitchen Cleaning' },
          { slug: 'bathroom-cleaning', name: 'Bathroom Cleaning' },
        ],
      },
    ],
  },
  {
    label: 'Areas',
    to: '/areas',
    mega: true,
    groups: [
      {
        title: 'Dubai',
        items: [
          { slug: 'central-downtown-dubai', name: 'Central & Downtown Dubai' },
          { slug: 'marina-waterfront-areas', name: 'Marina & Waterfront Areas' },
          { slug: 'jumeirah-beachside-areas',name: 'Jumeirah & Beachside Areas' },
          { slug: 'premium-villa-communities', name: 'Premium Villa Communities' },
          { slug: 'popular-family-communities', name: 'Popular Family Communities' },
          { slug: 'apartment-residential-areas', name: 'Apartment & Residential Areas' },
          { slug: 'older-eastern-dubai-areas', name: 'Older & Eastern Dubai Areas' },
        ],
      },
    ],
  },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default navItems;
