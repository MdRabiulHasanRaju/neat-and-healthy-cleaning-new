import { useEffect, useRef, useState } from 'react';

// Returns a ref and a boolean indicating whether the element is in view.
// Used to trigger scroll animations and counter effects.
export default function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.once !== false) observer.disconnect();
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, inView];
}
