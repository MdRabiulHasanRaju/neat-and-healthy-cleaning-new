export default function ServicesSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-slate-900"
        >
          {/* Image */}
          <div className="h-56 w-full animate-pulse bg-slate-200 dark:bg-slate-800" />

          <div className="p-6">
            {/* Icon */}
            <div className="mb-4 h-10 w-10 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

            {/* Title */}
            <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
            </div>

            {/* Button */}
            <div className="mt-6 h-10 w-32 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      ))}
    </div>
  );
}