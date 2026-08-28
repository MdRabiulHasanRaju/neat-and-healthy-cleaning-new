import { motion } from 'framer-motion';

// Animation wrapper: fades/slides children into view on scroll. Defaults to a
// gentle upward slide. Use `delay` to stagger groups.
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  once = true,
  className,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
