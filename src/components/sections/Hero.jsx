import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiPhone, FiStar } from 'react-icons/fi';
import { useRef } from 'react';
import Button from '../ui/Button.jsx';
import TrustBadges from '../ui/TrustBadges.jsx';
import { site } from '../../data/site.js';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '30%']
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, 0]
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center"
    >

      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >

        {/* Fallback / Poster Image */}
        <img
          src="/images/Deep Cleaning Services Dubai - Neat and Healthy Cleaning.webp"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Background Video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/Deep Cleaning Services Dubai - Neat and Healthy Cleaning.webp"
          aria-hidden="true"
        >

          {/* <source
            src="/videos/deep-cleaning-hero-mobile.mp4"
            type="video/mp4"
            media="(max-width: 767px)"
          /> */}

          <source
            src="/videos/deep-cleaning-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark / White Overlay */}
        <div className="absolute inset-0 bg-white/45 dark:bg-ink/45" />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/40 to-bg dark:from-ink/75 dark:via-ink/65 dark:to-ink" />

        {/* Grid */}
        <div className="absolute inset-0 bg-hero-grid bg-[size:40px_40px] opacity-30" />

      </motion.div>

      {/* Content */}
      <div className="container-px w-full py-14 sm:py-16 lg:py-20">
        <motion.div
          style={{ opacity }}
          className="max-w-3xl"
        >

          {/* Rating */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-eyebrow"
          >
            <FiStar size={12} />
            Rated 4.9/5 by 4,500+ customers
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              mt-5
              text-2xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-ink
              dark:text-white
              sm:text-5xl
              lg:text-5xl
              text-balance
            "
          >
            DUBAI'S PROFESSIONAL{' '}
            <span className="gradient-text">
              DEEP CLEANING COMPANY.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-5
              max-w-xl
              text-sm
              leading-relaxed
              text-ink-muted
              dark:text-slate-300
              lg:text-base
            "
          >
            Looking for a trusted deep cleaning company in Dubai?
            Neat and Healthy Cleaning's trained professionals provide
            thorough deep cleaning for villas, apartments, offices,
            and commercial properties across Dubai, using professional
            equipment and quality cleaning products.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`}
              size="lg"
              iconRight={FiArrowRight}
            >
              Book Now
            </Button>

            <Button
              href={`tel:${site.whatsapp}`}
              variant="outline"
              size="lg"
              icon={FiPhone}
            >
              Get Free Quote
            </Button>
          </motion.div>

          {/* Trust */}
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