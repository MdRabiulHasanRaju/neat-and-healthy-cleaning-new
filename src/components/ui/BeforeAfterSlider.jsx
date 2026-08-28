import { useRef, useState } from 'react';
import { FiMove } from 'react-icons/fi';
import LazyImage from './LazyImage.jsx';

// Interactive before/after image comparison slider. Drag the handle to reveal.
export default function BeforeAfterSlider({ before, after, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  };

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-900/5 dark:ring-white/10"
      role="slider"
      aria-label="Before and after comparison. Drag to compare."
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4));
        if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* After (full) */}
      <LazyImage
        src={after}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full"
        imgClassName="h-full w-full object-cover"
      />
      <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div className="absolute inset-0 h-full" style={{ width: containerRef.current?.clientWidth || '100%' }}>
          <LazyImage
            src={before}
            alt={beforeLabel}
            className="absolute inset-0 h-full w-full"
            imgClassName="h-full w-full object-cover"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-10 flex items-center justify-center"
        style={{ left: `calc(${pos}% - 20px)` }}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-glow ring-2 ring-primary">
          <FiMove className="text-primary" size={18} />
        </div>
      </div>
    </div>
  );
}
