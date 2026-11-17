import { createProject } from "@/app/lib/actions";
import Link from "next/link";

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>
      <form
        action={createProject}
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
            required
            placeholder="React, Next.js, Tailwind"
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
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Project
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
