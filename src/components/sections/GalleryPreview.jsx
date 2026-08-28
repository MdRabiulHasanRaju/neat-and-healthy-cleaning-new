import { Section, SectionHeading } from '../ui/Section.jsx';
import LazyImage from '../ui/LazyImage.jsx';
import Button from '../ui/Button.jsx';
import { FiArrowRight } from 'react-icons/fi';
import { galleryItems } from '../../data/gallery.js';
import { motion } from 'framer-motion';

// Gallery preview — a masonry-style grid of the first 6 images.
export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6);
  return (
    <Section className="bg-white dark:bg-slate-900/30">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Gallery"
            title="A look at our work"
            description="Real results from real homes and offices across the UAE."
            align="left"
          />
          <Button to="/gallery" variant="outline" iconRight={FiArrowRight} className="shrink-0">
            View full gallery
          </Button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-900/5 dark:ring-white/10 ${i === 0 ? 'col-span-2 row-span-2 sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <LazyImage
                src={item.image}
                alt={item.alt}
                className={`w-full ${i === 0 ? 'aspect-square sm:aspect-auto sm:h-full' : 'aspect-square'}`}
                imgClassName="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 transition-opacity hover:opacity-100">
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
