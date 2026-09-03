export default function FeaturedServicesSkeleton() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
        >
          {/* Image */}
          <div className="h-56 w-full animate-pulse bg-gray-200" />

          <div className="p-6">
            {/* Icon */}
            <div className="mb-4 h-10 w-10 animate-pulse rounded-lg bg-gray-200" />

            {/* Title */}
            <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-gray-200" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Button */}
            <div className="mt-6 h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}