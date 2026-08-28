import useIcon from '../../hooks/useIcon.js';
import { trustBadges } from '../../data/trustBadges.js';
import { motion } from 'framer-motion';

// Row of trust badges (insured, trained, eco-friendly, guarantee).
export default function TrustBadges({ className }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className ?? ''}`}>
      {trustBadges.map((b, i) => {
        const Icon = useIcon(b.icon);
        return (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-900/5 backdrop-blur dark:bg-slate-900/50 dark:ring-white/10"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-ink dark:text-white">{b.title}</p>
              <p className="text-xs text-gray dark:text-slate-400">{b.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
