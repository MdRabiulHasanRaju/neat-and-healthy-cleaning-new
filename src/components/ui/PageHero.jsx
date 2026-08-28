import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LazyImage from './LazyImage.jsx';
import Breadcrumbs from './Breadcrumbs.jsx';

// Reusable inner-page hero with background image, breadcrumb, title, and
// optional description. Used by service, area, and listing pages.
export default function PageHero({ title, description, image, crumbs = [], children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <LazyImage
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/70 to-primary/60" />
      </motion.div>
      <div className="container-px py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {crumbs.length > 0 && (
            <div className="mb-5 [&_*]:text-white/80 [&_span:last-child]:text-white">
              <Breadcrumbs crumbs={crumbs} />
            </div>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
