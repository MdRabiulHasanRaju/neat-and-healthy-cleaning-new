import { motion } from 'framer-motion';

// Reusable section wrapper with consistent vertical padding and an optional
// eyebrow + heading + description header block.
export function Section({ children, className, id }) {
  return (
    <section id={id} className={className ?? 'py-20 sm:py-24'}>
      {children}
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = 'center', className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className ?? (align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl')}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-gray dark:text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default Section;
