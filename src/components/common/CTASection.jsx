import { motion } from 'framer-motion';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';
import Button from '../ui/Button.jsx';
// import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext.jsx';

// Reusable conversion-focused CTA banner. Used at the bottom of most pages.
export default function CTASection({
  title = 'Ready for a spotless space?',
  description = 'Book in 60 seconds and let our vetted crew handle the rest. Same-day and next-day slots available across all four emirates.',
}) {
  const { site } = useTheme();
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-4xl bg-ink px-6 py-16 text-center shadow-card sm:px-16 sm:py-20"
        >
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`tel:${site.whatsapp}`} variant="accent" size="lg" icon={FiPhone}>
                Book Now
              </Button>
              <Button
                href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`}
                variant="outline"
                size="lg"
                icon={FiMessageCircle}
                className="!border-white/20 !bg-white/5 !text-white hover:!border-white/40 hover:!text-white"
              >
                WhatsApp Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
