import { getProjects } from "@/lib/projects-db";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div>
      {" "}
      <h2 className="text-3xl font-bold mb-4">Projects Overview </h2>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="p-4 bg-gray-100 rounded">
            <strong>{p.title}</strong> - {p.type}
            <p className="text-gray-600 mt-2">{p.description}</p>
            <p className="text-sm mt-2">
              Technologies: {p.technologies.join(", ")}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
