import { useMemo, useState } from 'react';
import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section } from '../components/ui/Section.jsx';
import LazyImage from '../components/ui/LazyImage.jsx';
import { FiX } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { galleryItems, galleryCategories } from '../data/gallery.js';
import { images } from '../data/images.js';
import CTASection from '../components/common/CTASection.jsx';
import { cn } from '../utils/helpers.js';

export default function Gallery() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Gallery' }];
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () => (active === 'All' ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active],
  );

  const tabs = ['All', ...galleryCategories];

  return (
    <>
      <Seo
        title="Gallery"
        description="See real before & after results, customer projects, our team in action, and the professional equipment we use."
        keywords="cleaning gallery, before after cleaning, cleaning projects UAE, professional cleaning photos"
        path="/gallery"
        image={images.cleanersDining}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Our work, in pictures"
        description="Real results from real homes and offices across the UAE. Filter by category to explore."
        image="/images/deep-cleaning-dubai-neat-and-healthy-cleaning.webp"
        crumbs={crumbs}
      />

      <Section>
        <div className="container-px">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-all',
                  active === tab
                    ? 'bg-primary-gradient text-white shadow-glow'
                    : 'bg-white text-ink-soft ring-1 ring-slate-900/5 hover:text-primary dark:bg-slate-900/50 dark:text-slate-200 dark:ring-white/10',
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setLightbox(item)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-900/5 dark:ring-white/10"
              >
                <LazyImage
                  src={item.image}
                  alt={item.alt}
                  className="aspect-[4/3] w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="absolute bottom-3 left-3 text-sm font-semibold text-white">{item.title}</span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/20 px-2.5 py-1 text-xs text-white backdrop-blur">{item.category}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <FiX size={22} />
            </button>
            <motion.figure
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl"
            >
              <img src={lightbox.image} alt={lightbox.alt} className="max-h-[80vh] w-full rounded-2xl object-contain" />
              <figcaption className="mt-3 text-center text-white">
                <span className="font-semibold">{lightbox.title}</span>
                <span className="ml-2 text-sm text-slate-400">— {lightbox.category}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
