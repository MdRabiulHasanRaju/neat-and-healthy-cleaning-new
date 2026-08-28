import { Section, SectionHeading } from '../ui/Section.jsx';
import Button from '../ui/Button.jsx';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { locations } from '../../data/locations.js';
import { motion } from 'framer-motion';

// Areas we serve section — clickable cards for each emirate.
export default function AreasWeServe() {
  return (
    <Section>
      <div className="container-px">
        <SectionHeading
          eyebrow="Service Areas"
          title="Deep Cleaning Services across the Dubai"
          description="Same-day and next-day appointments in dubai — with local crews who know your community."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Button
                to={`/areas/${loc.slug}`}
                variant="ghost"
                className="group h-full w-full flex-col items-start !p-6 text-left hover:!bg-white dark:hover:!bg-slate-900/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary-gradient group-hover:text-white">
                  <FiMapPin size={22} />
                </span>
                <span className="mt-4 text-lg font-bold text-ink dark:text-white">{loc.name}</span>
                <span className="mt-1 line-clamp-2 text-sm text-gray dark:text-slate-400">
                  {loc.neighborhoods.slice(0, 3).join(', ')}…
                </span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View area <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
