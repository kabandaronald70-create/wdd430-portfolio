import { Project } from "@/lib/projects-db";

export default async function SchoolPage() {
  // Fetch only school projects
  const res = await fetch("http://localhost:3000/api/projects?type=school", {
    cache: "no-store",
  });
  const projects: Project[] = await res.json();

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="p-4 bg-gray-100 rounded">
            <strong>{p.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
