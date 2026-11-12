import { Suspense } from "react";
import SchoolProjectList from "@/components/SchoolProjectList";

export const instant = false;

// This is the skeleton that shows only while the list is loading
function ProjectListSkeleton() {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-32 rounded bg-slate-200" />
      <div className="h-32 rounded bg-slate-200" />
    </div>
  );
}

export default function SchoolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Notice how this header loads instantly! */}
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>

      <Suspense fallback={<ProjectListSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
