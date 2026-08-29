import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import useScrollPosition from '../../hooks/useScrollPosition.js';

// Scroll-to-top button that appears after the user scrolls down the page.
export default function BackToTop() {
  const show = useScrollPosition(500);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-40 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white shadow-card ring-1 ring-white/10 transition-transform hover:-translate-y-1 dark:bg-white dark:text-ink"
        >
          <FiArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
