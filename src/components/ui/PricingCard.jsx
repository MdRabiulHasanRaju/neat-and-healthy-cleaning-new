import { FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useIcon from '../../hooks/useIcon.js';
import { formatAed } from '../../utils/helpers.js';
import Button from './Button.jsx';

export default function PricingCard({ pkg, index = 0 }) {
  const Icon = useIcon(pkg.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
        pkg.popular
          ? 'bg-ink text-white shadow-glow ring-2 ring-primary'
          : 'bg-white text-ink shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:text-white dark:ring-white/10'
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-glow-accent">
          Most Popular
        </span>
      )}
      <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${pkg.popular ? 'bg-white/10' : 'bg-primary/10'}`}>
        <Icon size={26} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold">{pkg.name}</h3>
      <p className={`mt-1 text-sm ${pkg.popular ? 'text-slate-300' : 'text-gray dark:text-slate-400'}`}>
        {pkg.tagline}
      </p>
      <div className="mt-6 flex items-end gap-2">
        <span className="text-4xl font-extrabold tracking-tight">
          {formatAed(pkg.price)}
        </span>
        <span className={`mb-1 text-sm ${pkg.popular ? 'text-slate-400' : 'text-gray'}`}>
          {pkg.unit}
        </span>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <FiCheck className={`mt-0.5 shrink-0 ${pkg.popular ? 'text-accent' : 'text-accent'}`} size={18} />
            <span className={pkg.popular ? 'text-slate-200' : 'text-gray dark:text-slate-300'}>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button
          to="/contact"
          variant={pkg.popular ? 'accent' : 'outline'}
          className="w-full"
        >
          {pkg.cta}
        </Button>
      </div>
    </motion.div>
  );
}
