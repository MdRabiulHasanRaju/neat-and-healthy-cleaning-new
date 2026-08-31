import { useRef, useState } from 'react';
import { FiMove } from 'react-icons/fi';
import LazyImage from './LazyImage.jsx';

export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);

  const updatePosition = (clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();

    if (!rect) return;

    const percentage = ((clientX - rect.left) / rect.width) * 100;

    setPos(Math.max(0, Math.min(100, percentage)));
  };

  const handlePointerDown = (e) => {
    updatePosition(e.clientX);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    // Only move while pointer is actively pressed
    if (e.buttons === 1) {
      updatePosition(e.clientX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="
        relative
        aspect-[16/10]
        w-full
        overflow-hidden
        rounded-3xl
        shadow-card
        ring-1
        ring-slate-900/5
        dark:ring-white/10
        select-none
      "
    >
      {/* =========================
          AFTER IMAGE
      ========================== */}
      <LazyImage
        src={after}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full"
        imgClassName="h-full w-full object-cover"
      />

      {/* AFTER LABEL */}
      <span className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {afterLabel}
      </span>

      {/* =========================
          BEFORE IMAGE
      ========================== */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - pos}% 0 0)`,
        }}
      >
        <LazyImage
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full object-cover"
        />

        {/* BEFORE LABEL */}
        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* =========================
          DIVIDER
      ========================== */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-lg"
        style={{
          left: `${pos}%`,
          transform: 'translateX(-50%)',
        }}
      />

      {/* =========================
          HANDLE
      ========================== */}
      <div
        className="pointer-events-none absolute top-1/2 z-30 flex -translate-y-1/2"
        style={{
          left: `${pos}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-primary">
          <FiMove
            size={19}
            className="text-primary"
          />
        </div>
      </div>

      {/* =========================
          INVISIBLE DRAG AREA
          This handles mouse + touch
      ========================== */}
      <div
        className="
          absolute
          inset-0
          z-40
          cursor-ew-resize
          touch-none
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      />
    </div>
  );
}