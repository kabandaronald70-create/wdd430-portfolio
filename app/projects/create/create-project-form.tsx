"use client";

import { useActionState } from "react";
import { createProject, type State } from "@/app/lib/actions";
import Link from "next/link";

const initialState: State = { message: null, errors: {} };

export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      {/* TITLE */}
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Project Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="title-error"
          required
        />
        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="description-error"
          required
        />
        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div>
        <label
          htmlFor="technologies"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Technologies (comma-separated)
        </label>
        <input
          id="technologies"
          name="technologies"
          type="text"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="technologies-error"
          required
        />
        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* TYPE */}
      <div>
        <label
          htmlFor="type"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Project Type
        </label>
        <select
          id="type"
          name="type"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          required
        >
          <option value="opensource">Open Source</option>
          <option value="school">School Project</option>
        </select>
        <div id="type-error" aria-live="polite" aria-atomic="true">
          {state.errors?.type?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* YEAR COMPLETED */}
      <div>
        <label
          htmlFor="yearCompleted"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Year Completed
        </label>
        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          min="2000"
          max="2099"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
          aria-describedby="yearCompleted-error"
          required
        />
        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      {/* LINK */}
      <div>
        <label
          htmlFor="link"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          GitHub/Live Link (Optional)
        </label>
        <input
          id="link"
          name="link"
          type="url"
          className="block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-blue-500 focus:ring-2"
        />
      </div>

      {/* GENERAL ERROR MESSAGE */}
      {state.message ? (
        <p className="text-sm text-red-600">{state.message}</p>
      ) : null}

      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Saving..." : "Save Project"}
        </button>
        <Link
          href="/projects"
          className="rounded-md border border-slate-300 px-6 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
