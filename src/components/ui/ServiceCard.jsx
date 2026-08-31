import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import useIcon from '../../hooks/useIcon.js';
import { formatAed } from '../../utils/helpers.js';

// Service card used on the home page, services index, and related-services
// blocks. Shows icon, name, summary, price-from, and a link to the detail page.
export default function ServiceCard({ service, index = 0 }) {
  const Icon = useIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10"
      >
        <div className="mb-5 inline-flex items-center justify-center text-white">
          <img className='shadow-glow rounded-2xl h-52 w-96 object-cover' src={service.heroImage} alt={service.heroImage} />
        </div>

        {service.flag
          ?
          <div className="absolute top-10 left-10 mb-5 px-3 py-1 inline-flex items-center justify-center text-[11px] rounded-2xl bg-primary-gradient text-white shadow-glow">
            {service.flag}
          </div>
          :''
        }
        

        <h3 className="text-base font-bold text-ink dark:text-white">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray dark:text-slate-300">
          {service.short}
        </p>
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
          <span className="text-sm font-semibold text-gray dark:text-slate-400">
            From <span className="text-primary">{formatAed(service.priceFrom)}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
            View more <FiArrowRight />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
