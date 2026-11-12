import { getProjects } from "@/lib/projects-db";

export default async function SchoolProjectList() {
  const projects = await getProjects("school");

  return (
    <ul className="space-y-4">
      {projects.map((p) => (
        <li key={p.id} className="p-4 bg-gray-100 rounded shadow-sm">
          <strong className="text-xl">{p.title}</strong>
          <p className="text-gray-700 mt-2">{p.description}</p>
          <p className="text-sm text-gray-500 mt-1">
            Tech: {p.technologies.join(", ")}
          </p>
        </li>
      ))}
    </ul>
  );
}
