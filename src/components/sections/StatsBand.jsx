import { Section } from '../ui/Section.jsx';
import Counter from '../ui/Counter.jsx';
import { stats } from '../../data/stats.js';
import { motion } from 'framer-motion';

// Animated statistics band with a gradient background.
export default function StatsBand() {
  return (
    <Section className="!py-0">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl bg-ink px-6 py-14 sm:px-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
