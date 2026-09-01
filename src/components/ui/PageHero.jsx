import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Breadcrumbs from './Breadcrumbs.jsx';
import TrustBadges from './TrustBadges.jsx';

// Reusable inner-page hero with responsive background video,
// poster fallback, breadcrumb, title, description, and trust badges.
export default function PageHero({
  title,
  description,
  image,
  video,
  mobileVideo,
  crumbs = [],
  children,
}) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '25%']
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[420px] overflow-hidden"
    >

      {/* Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        {/* Fallback / Poster */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Background Video */}
        {video && (
          <video
            key={`${video}-${image || ''}`}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={image}
            aria-hidden="true"
          >
            {mobileVideo && (
              <source
                src={mobileVideo}
                type="video/mp4"
                media="(max-width: 767px)"
              />
            )}

            <source
              src={video}
              type="video/mp4"
            />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/70 to-primary/60" />
      </motion.div>

      {/* Content */}
      <div className="container-px py-16 sm:py-20 lg:py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >

          {/* Breadcrumb */}
          {crumbs.length > 0 && (
            <div className="mb-5 [&_*]:text-white/80 [&_span:last-child]:text-white">
              <Breadcrumbs crumbs={crumbs} />
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-5xl text-balance">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
              {description}
            </p>
          )}

          {/* Optional Content */}
          {children}

        </motion.div>

        {/* Trust Badges */}
        <div className="mt-8">
          <TrustBadges className="max-w-2xl" />
        </div>

      </div>

    </section>
  );
}