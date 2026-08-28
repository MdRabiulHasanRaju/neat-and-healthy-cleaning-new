import { Suspense, useState } from 'react';

// Native lazy-loading image with a skeleton placeholder and graceful fallback.
// Uses loading="lazy" and decoding="async" for Core Web Vitals.
export default function LazyImage({ src, alt, className, imgClassName, ...rest }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={className}>
      {!loaded && <div className="skeleton absolute inset-0" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={[
          'transition-opacity duration-700',
          loaded ? 'opacity-100' : 'opacity-0',
          imgClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      />
    </div>
  );
}

// Suspense-friendly wrapper for page-level image loading states.
export function ImageFallback() {
  return <div className="skeleton h-full w-full" />;
}
