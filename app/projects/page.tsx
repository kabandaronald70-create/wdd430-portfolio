import { getProjects } from "@/lib/projects-db";

export default async function ProjectsPage() {
  // This fetches the latest data from your Postgres database every time
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Projects Overview</h2>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.id} className="p-4 bg-gray-100 rounded shadow-sm">
            <strong className="text-xl">{p.title}</strong> -{" "}
            <span className="capitalize text-gray-600">{p.type}</span>
            <p className="text-gray-700 mt-2">{p.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Tech: {p.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
