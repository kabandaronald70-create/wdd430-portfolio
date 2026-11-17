import { updateProject } from "@/app/lib/actions";
import { getProjectById } from "@/lib/projects-db";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const project = await getProjectById(Number(id));
  if (!project) return notFound();

  // Bind the ID to the action
  const updateProjectWithId = updateProject.bind(null, id);

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>
      <form
        action={updateProjectWithId}
        className="space-y-4 bg-white p-6 rounded-lg shadow"
      >
        <div>
          <label htmlFor="title" className="block font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={project.title}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
            required
            rows={4}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="block font-semibold mb-1">
            Technologies (comma-separated)
          </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            defaultValue={project.technologies.join(", ")}
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label htmlFor="type" className="block font-semibold mb-1">
            Project Type
          </label>
          <select
            id="type"
            name="type"
            defaultValue={project.type}
            required
            className="w-full border p-2 rounded"
          >
            <option value="opensource">Open Source</option>
            <option value="school">School Project</option>
          </select>
        </div>

        <div>
          <label htmlFor="link" className="block font-semibold mb-1">
            GitHub/Live Link (Optional)
          </label>
          <input
            type="url"
            id="link"
            name="link"
            defaultValue={project.link || ""}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Update Project
          </button>
          <Link
            href="/projects"
            className="px-6 py-2 rounded border hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
