// Full-page loading skeleton shown while lazy-loaded pages resolve.
export default function PageSkeleton() {
  return (
    <div className="pt-20">
      <div className="container-px py-12">
        <div className="skeleton mb-6 h-10 w-2/3" />
        <div className="skeleton mb-3 h-4 w-full" />
        <div className="skeleton mb-10 h-4 w-5/6" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="skeleton h-48 w-full rounded-3xl" />
              <div className="skeleton h-5 w-3/4" />
              <div className="skeleton h-4 w-full" />
              <div className="skeleton h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
