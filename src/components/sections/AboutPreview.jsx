import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { Section } from '../ui/Section.jsx';
import Button from '../ui/Button.jsx';
import LazyImage from '../ui/LazyImage.jsx';
import { images } from '../../data/images.js';
import { coreValues } from '../../data/company.js';
import useIcon from '../../hooks/useIcon.js';

// About preview section on the homepage with image, story, and core values.
export default function AboutPreview() {
  return (
    <Section className="bg-white dark:bg-slate-900/30">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <LazyImage
                src="/images/Carpet Cleaning Services Dubai - Neat and Healthy Cleaning.webp"
                alt="Carpet Cleaning Services Dubai - Neat and Healthy Cleaning"
                className="aspect-[4/3] w-full"
                imgClassName="h-full w-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 hidden rounded-3xl bg-white p-5 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10 sm:block"
            >
              <p className="text-3xl font-extrabold text-primary">4.9★</p>
              <p className="text-xs text-gray dark:text-slate-400">Average rating</p>
            </motion.div>
          </motion.div>

          <div>
            <span className="section-eyebrow">About Us</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl text-balance">
              Trusted by thousands of homes and offices
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray dark:text-slate-300">
              We started in 2018 with a simple belief: cleaning should be effortless for you and kind to the planet. Today, our 120-strong team delivers premium cleaning across four emirates — with the same care we started with.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {coreValues.map((v, i) => {
                const Icon = useIcon(v.icon);
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-semibold text-ink dark:text-white">{v.title}</p>
                      <p className="text-sm text-gray dark:text-slate-400">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="mt-8">
              <Button to="/about" variant="primary">Our story</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
