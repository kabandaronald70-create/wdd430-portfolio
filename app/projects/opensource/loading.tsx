export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse space-y-4">
      <div className="h-10 w-1/3 rounded bg-slate-200 mb-6" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-32 rounded-xl bg-slate-200" />
        <div className="h-32 rounded-xl bg-slate-200" />
      </div>
    </div>
  );
}
