import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Returns true when the page is scrolled past `threshold` pixels.
export default function useScrollPosition(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold, pathname]);

  return scrolled;
}
