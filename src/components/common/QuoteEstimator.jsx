import { useEffect, useMemo, useState } from 'react';
import { FiArrowRight, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { services } from '../../data/services_quote.js';
// import site from "../../data/site.js"
import { formatAed } from '../../utils/helpers.js';
import Button from '../ui/Button.jsx';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function QuoteEstimator() {
  const { site } = useTheme();
  const [serviceSlug, setServiceSlug] = useState('');
  const [size, setSize] = useState('');

  // Selected service
  const service = useMemo(() => {
    if (!serviceSlug) return null;

    return services.find((s) => s.slug === serviceSlug) || null;
  }, [serviceSlug]);

  // Available property sizes for selected service
  const availableSizes = useMemo(() => {
    return Object.keys(service?.priceRanges || {});
  }, [service]);

  // Reset property size when service changes
  useEffect(() => {
    setSize('');
  }, [serviceSlug]);

  // Selected price range
  const estimate = useMemo(() => {
    if (!service || !size) {
      return null;
    }

    const priceRange = service.priceRanges?.[size];

    if (!priceRange) {
      return null;
    }

    return {
      low: priceRange.low,
      high: priceRange.high,
      plus: Boolean(priceRange.plus),
    };
  }, [service, size]);

  // Formatted price
  const formattedPrice = useMemo(() => {
    if (!estimate) {
      return null;
    }

    return `${formatAed(estimate.low)} – ${formatAed(
      estimate.high
    )}${estimate.plus ? '+' : ''}`;
  }, [estimate]);

  return (
    <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">

      {/* Header */}
      <div className="mb-5 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <FiZap size={18} />
        </span>

        <div>
          <h3 className="text-lg font-bold text-ink dark:text-white">
            Instant Quote Estimator
          </h3>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Get an estimated price in seconds
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-4">

        {/* Service */}
        <div>
          <label
            htmlFor="quote-service"
            className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200"
          >
            Service
          </label>

          <select
            id="quote-service"
            value={serviceSlug}
            onChange={(e) => setServiceSlug(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
          >
            <option value="" disabled>
              Select Service
            </option>

            {services
              .filter((s) => s.priceRanges)
              .map((s) => (
                <option
                  key={s.slug}
                  value={s.slug}
                >
                  {s.name}
                </option>
              ))}
          </select>
        </div>

        {/* Property Size */}
        <div>
          <label
            htmlFor="quote-size"
            className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200"
          >
            Property size
          </label>

          <select
            id="quote-size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={!service}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10 dark:bg-slate-900 dark:text-white"
          >
            <option value="" disabled>
              {service
                ? 'Select Property Size'
                : 'Select Service First'}
            </option>

            {availableSizes.map((propertySize) => (
              <option
                key={propertySize}
                value={propertySize}
              >
                {propertySize}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Price */}
      {estimate ? (
        <motion.div
          key={`${serviceSlug}-${size}`}
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mt-6 rounded-2xl bg-primary-gradient p-5 text-white"
        >
          <p className="text-sm text-white/80">
            Estimated price
          </p>

          <p className="mt-1 text-2xl font-extrabold tracking-tight">
            {formattedPrice}
          </p>

          <p className="mt-2 text-xs leading-relaxed text-white/70">
            Final price may vary depending on property condition,
            size, and specific cleaning requirements.
          </p>
        </motion.div>
      ) : (
        <div className="mt-6 rounded-2xl bg-slate-50 p-5 dark:bg-slate-800/60">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Select your service and property size to see the estimated price.
          </p>
        </div>
      )}

      {/* CTA */}
      <Button
        to={`https://api.whatsapp.com/send?phone=${site.whatsapp}`}
        className="mt-5 w-full"
        iconRight={FiArrowRight}
      >
        Get Exact Quote
      </Button>

      {/* Trust */}
      <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
        No obligation • Quick response • Transparent pricing
      </p>
    </div>
  );
}