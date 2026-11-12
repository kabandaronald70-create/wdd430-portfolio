export default function Loading() {
  return (
    <div className="space-y-5 py-1" role="status" aria-label="Loading projects">
      <div className="h-9 w-48 animate-pulse rounded bg-slate-200" />
      <div className="grid animate-pulse gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((card) => (
          <div
            key={card}
            aria-hidden="true"
            className="h-56 rounded-2xl border-2 border-slate-300 bg-slate-100 p-5"
          >
            <div className="h-5 w-3/4 rounded-full bg-slate-200" />
            <div className="mt-4 h-3 w-full rounded-full bg-slate-200" />
            <div className="mt-2 h-3 w-11/12 rounded-full bg-slate-200" />
            <div className="mt-2 h-3 w-2/3 rounded-full bg-slate-200" />
            <div className="mt-5 flex gap-2">
              <div className="h-8 w-24 rounded-full bg-slate-200" />
              <div className="h-8 w-24 rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
