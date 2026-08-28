// Gallery items for the gallery page with filterable categories.
import { images } from './images.js';

export const galleryCategories = ['Before & After', 'Projects', 'Team', 'Equipment'];

export const galleryItems = [
  { id: 1, category: 'Before & After', title: 'Living room refresh', image: images.heroRoom, alt: 'Spotless modern living room after a residential clean' },
  { id: 2, category: 'Before & After', title: 'Kitchen deep clean', image: images.kitchen, alt: 'Gleaming modern kitchen after a deep clean' },
  { id: 3, category: 'Before & After', title: 'Marble restoration', image: images.marbleFloor, alt: 'Polished marble floor restored to a mirror finish' },
  { id: 4, category: 'Before & After', title: 'Bathroom renewal', image: images.bathroom, alt: 'Descaled and sanitised marble bathroom' },
  { id: 5, category: 'Projects', title: 'Downtown villa', image: images.villa, alt: 'Exterior of a luxury villa after a full clean' },
  { id: 6, category: 'Projects', title: 'Corporate office', image: images.officeWorkspace, alt: 'Clean modern office workspace' },
  { id: 7, category: 'Projects', title: 'Penthouse kitchen', image: images.kitchenWood, alt: 'Empty kitchen with wooden cabinets cleaned' },
  { id: 8, category: 'Projects', title: 'Marble lobby', image: images.marbleLobby, alt: 'Corporate lobby with polished marble walls' },
  { id: 9, category: 'Team', title: 'The crew', image: images.cleanersTeam, alt: 'Professional cleaning team in uniform' },
  { id: 10, category: 'Team', title: 'On the job', image: images.cleanersVacuum, alt: 'Cleaners vacuuming a modern living room' },
  { id: 11, category: 'Team', title: 'Deep clean in progress', image: images.cleanersDining, alt: 'Cleaners working in a modern dining room' },
  { id: 12, category: 'Equipment', title: 'Eco supplies', image: images.ecoProducts, alt: 'Eco-friendly cleaning products in green bottles' },
  { id: 13, category: 'Equipment', title: 'Pure-water window system', image: images.windowClean, alt: 'Window cleaner using a squeegee' },
  { id: 14, category: 'Equipment', title: 'Carpet extraction', image: images.vacuumCarpet, alt: 'Carpet being vacuumed with a deep-clean machine' },
  { id: 15, category: 'Equipment', title: 'Upholstery care', image: images.vacuumSofa, alt: 'Woman cleaning a sofa with a vacuum' },
];

export default galleryItems;
