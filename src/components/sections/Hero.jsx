import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiPhone, FiStar } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { useRef } from 'react';
import Button from '../ui/Button.jsx';
import LazyImage from '../ui/LazyImage.jsx';
import TrustBadges from '../ui/TrustBadges.jsx';
// import { images } from '../../data/images.js';
import { site } from '../../data/site.js';

// Hero section with parallax background image, headline, dual CTA, trust
// badges, and floating stat cards.
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <LazyImage
          src="/images/Deep Cleaning Services Dubai - Neat and Healthy Cleaning.webp"
          alt="Bright, clean modern living room with sunlight"
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-bg dark:from-ink/80 dark:via-ink/70 dark:to-ink" />
        <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-40" />
      </motion.div>

      <div className="container-px py-14 sm:py-16 lg:py-20">
        <motion.div style={{ opacity }} className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            <FiStar size={12} /> Rated 4.9/5 by 4,500+ customers
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-2xl font-extrabold leading-[1.1] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-5xl text-balance"
          >
            DUBAI'S PROFESSIONAL <span className="gradient-text">DEEP CLEANING COMPANY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-sm lg:text-base leading-relaxed text-ink-muted dark:text-slate-300"
          >
            Looking for a trusted deep cleaning company in Dubai? Neat and Healthy Cleaning's trained professionals provide thorough deep cleaning for villas, apartments, offices, and commercial properties across Dubai, using professional equipment and quality cleaning products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact" size="lg" iconRight={FiArrowRight}>
              Book Now
            </Button>
            <Button to="/pricing" variant="outline" size="lg" icon={FiPhone}>
              Get Free Quote
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <TrustBadges className="max-w-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
