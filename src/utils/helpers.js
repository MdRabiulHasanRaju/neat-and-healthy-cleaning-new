// Small utility helpers used across the app.

export const cn = (...classes) => classes.filter(Boolean).join(' ');

// Format a number as AED currency.
export const formatAed = (value) =>
  new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    maximumFractionDigits: 0,
  }).format(value);

// Format a date string (YYYY-MM-DD) into a readable label.
export const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

// Scroll to the top of the page (used on route change).
export const scrollToTop = () =>
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

// Build an absolute URL for a path — used for canonical/OG tags.
export const absoluteUrl = (path, base) =>
  new URL(path, base).href.replace(/\/$/, '') || base;
