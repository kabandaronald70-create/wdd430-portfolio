import { getProjects } from "@/lib/projects-db";
import { deleteProject } from "@/app/lib/actions";
import Link from "next/link";

export const instant = false;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Projects Overview</h2>
        <Link
          href="/projects/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add New Project
        </Link>
      </div>

      <ul className="space-y-4">
        {projects.map((p) => (
          <li
            key={p.id}
            className="p-4 bg-gray-100 rounded shadow-sm flex justify-between items-center"
          >
            <div>
              <strong className="text-xl">{p.title}</strong>
              <p className="text-gray-600">{p.description}</p>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/projects/${p.id}/edit`}
                className="px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Edit
              </Link>

              {/* Delete Form */}
              <form
                action={async () => {
                  "use server";
                  await deleteProject(String(p.id));
                }}
              >
                <button
                  type="submit"
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
