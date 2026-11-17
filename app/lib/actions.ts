"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProjectFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters."),
  technologies: z.string().min(2, "Technologies are required."),
  type: z.enum(["opensource", "school"]),
  link: z.string().optional(),
});

// 1. CREATE ACTION
export async function createProject(formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    type: formData.get("type"),
    link: formData.get("link") || undefined,
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, type, link } = parsed.data;

  // Convert the comma-separated string to a Postgres array format string like {"React","Next.js"}
  const techString = `{${technologies
    .split(",")
    .map((t) => `"${t.trim()}"`)
    .join(",")}}`;

  await sql`
    INSERT INTO projects (title, description, technologies, type, link)
    VALUES (${title}, ${description}, ${techString}::text[], ${type}, ${link || null})
  `;

  revalidatePath("/projects");
  redirect("/projects");
}

// 2. UPDATE ACTION
export async function updateProject(id: string, formData: FormData) {
  const raw = {
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    type: formData.get("type"),
    link: formData.get("link") || undefined,
  };

  const parsed = ProjectFormSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Invalid project input.");
  }

  const { title, description, technologies, type, link } = parsed.data;
  const techString = `{${technologies
    .split(",")
    .map((t) => `"${t.trim()}"`)
    .join(",")}}`;

  await sql`
    UPDATE projects 
    SET title = ${title}, 
        description = ${description}, 
        technologies = ${techString}::text[], 
        type = ${type}, 
        link = ${link || null}
    WHERE id = ${id}
  `;

  revalidatePath("/projects");
  redirect("/projects");
}

// 3. DELETE ACTION
export async function deleteProject(id: string) {
  await sql`DELETE FROM projects WHERE id = ${id}`;
  revalidatePath("/projects");
}
