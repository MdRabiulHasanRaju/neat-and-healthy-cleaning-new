export default function ServiceDetailSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Hero */}
      <section className="relative min-h-[500px] bg-slate-200 dark:bg-slate-800">
        <div className="container-px flex min-h-[500px] items-center">
          <div className="w-full max-w-3xl">
            <div className="mb-5 h-4 w-32 rounded bg-slate-300 dark:bg-slate-700" />

            <div className="h-12 w-3/4 rounded-lg bg-slate-300 dark:bg-slate-700" />

            <div className="mt-5 h-5 w-full max-w-2xl rounded bg-slate-300 dark:bg-slate-700" />
            <div className="mt-3 h-5 w-2/3 rounded bg-slate-300 dark:bg-slate-700" />

            <div className="mt-8 flex gap-3">
              <div className="h-12 w-32 rounded-xl bg-slate-300 dark:bg-slate-700" />
              <div className="h-12 w-36 rounded-xl bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="h-4 w-24 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-5 h-7 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-5 space-y-3">
                <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-700" />
              </div>

              {/* Benefits */}
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white p-5 shadow-soft dark:bg-slate-900/50"
                  >
                    <div className="flex gap-4">
                      <div className="h-11 w-11 shrink-0 rounded-xl bg-slate-200 dark:bg-slate-700" />

                      <div className="flex-1">
                        <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700" />
                        <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                        <div className="mt-2 h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote estimator */}
            <div className="h-[420px] rounded-2xl bg-slate-200 dark:bg-slate-800" />
          </div>
        </div>
      </section>

      {/* Before After */}
      <section className="pb-20">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <div className="mx-auto h-6 w-40 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mx-auto mt-4 h-4 w-80 rounded bg-slate-200 dark:bg-slate-700" />

            <div className="mt-10 h-[450px] w-full rounded-2xl bg-slate-200 dark:bg-slate-700" />
          </div>
        </div>
      </section>

      {/* Included + Process */}
      <section className="bg-white py-20 dark:bg-slate-900/30">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-5 h-8 w-64 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-7 space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="h-6 w-6 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700" />
                    <div className="h-5 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-5 h-8 w-64 rounded bg-slate-200 dark:bg-slate-700" />

              <div className="mt-7 space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl bg-slate-100 p-5 dark:bg-slate-800"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-200 dark:bg-slate-700" />

                    <div className="flex-1">
                      <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700" />
                      <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-px">
          <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-4 h-9 w-96 max-w-full rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-4 h-4 w-full max-w-2xl rounded bg-slate-200 dark:bg-slate-700" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white p-6 shadow-soft dark:bg-slate-900/60"
              >
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-slate-200 dark:bg-slate-700" />

                  <div className="flex-1">
                    <div className="h-5 w-32 rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="mt-3 h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                    <div className="mt-2 h-4 w-4/5 rounded bg-slate-200 dark:bg-slate-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-px">
          <div className="h-4 w-20 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-4 h-8 w-96 max-w-full rounded bg-slate-200 dark:bg-slate-700" />

          <div className="mt-10 space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="h-16 rounded-xl bg-slate-200 dark:bg-slate-700"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}