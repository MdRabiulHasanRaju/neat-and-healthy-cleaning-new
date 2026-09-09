import { useMemo, useState } from 'react';
import { FiArrowRight, FiZap } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { services } from '../../data/services.js';
// import { site } from '../../data/site.js';
import { formatAed } from '../../utils/helpers.js';
import Button from '../ui/Button.jsx';

// Instant quote estimator: pick service, property size, and frequency to get
// an estimated price range. Purely client-side — no backend needed.
const sizeMultipliers = {
  Studio: 0.7,
  '1BR': 0.85,
  '2BR': 1,
  '3BR': 1.25,
  '4BR': 1.55,
  '5BR+': 1.9,
  Office: 1.4,
};

const frequencyDiscounts = {
  'one-off': 1,
  weekly: 0.85,
  fortnightly: 0.9,
  monthly: 0.95,
};

export default function QuoteEstimator() {
  const [serviceSlug, setServiceSlug] = useState('residential-cleaning');
  const [size, setSize] = useState('2BR');
  const [frequency, setFrequency] = useState('one-off');

  const service = useMemo(
    () => services.find((s) => s.slug === serviceSlug) || services[0],
    [serviceSlug],
  );

  const estimate = useMemo(() => {
    const base = service.priceFrom || 100;
    const mult = sizeMultipliers[size] ?? 1;
    const disc = frequencyDiscounts[frequency] ?? 1;
    const total = Math.round((base * mult * disc) / 5) * 5;
    return { low: total, high: Math.round((total * 1.3) / 5) * 5 };
  }, [service, size, frequency]);

  return (
    <div className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
      <div className="mb-5 flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <FiZap size={18} />
        </span>
        <h3 className="text-lg font-bold text-ink dark:text-white">Instant Quote Estimator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200">Service</label>
          <select
            value={serviceSlug}
            onChange={(e) => setServiceSlug(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
          >
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200">Property size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
            >
              {Object.keys(sizeMultipliers).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink dark:text-slate-200">Frequency</label>
            <select
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
            >
              <option value="one-off">One-off</option>
              <option value="weekly">Weekly (15% off)</option>
              <option value="fortnightly">Fortnightly (10% off)</option>
              <option value="monthly">Monthly (5% off)</option>
            </select>
          </div>
        </div>
      </div>

      <motion.div
        key={`${estimate.low}-${estimate.high}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 rounded-2xl bg-primary-gradient p-5 text-white"
      >
        <p className="text-sm text-white/80">Estimated price</p>
        <p className="text-3xl font-extrabold">
          {formatAed(estimate.low)} – {formatAed(estimate.high)}
        </p>
        <p className="mt-1 text-xs text-white/70">
          Final price confirmed after a quick call. No obligation.
        </p>
      </motion.div>

      <Button to="/contact" className="mt-5 w-full" iconRight={FiArrowRight}>
        Book This Service
      </Button>
    </div>
  );
}
