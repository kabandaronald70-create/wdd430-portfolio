import { getProjects } from "@/lib/projects-db";
export const instant = false;
export const dynamic = "force-dynamic";

export default async function SchoolPage() {
  const projects = await getProjects("school");

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">School Projects</h2>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.id} className="p-4 bg-gray-100 rounded shadow-sm">
            <strong className="text-xl">{p.title}</strong>
            <p className="text-gray-700 mt-2">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
