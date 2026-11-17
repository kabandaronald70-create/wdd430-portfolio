"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const currentYear = new Date().getFullYear();

const ProjectFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters."),
  technologies: z.string().min(2, "Add at least one technology."),
  type: z.enum(["opensource", "school"]),
  yearCompleted: z.coerce
    .number()
    .int("Year must be a whole number.")
    .gte(2000, "Year must be 2000 or later.")
    .lte(currentYear, `Year cannot be greater than ${currentYear}.`),
  link: z.string().optional(),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    yearCompleted?: string[];
    type?: string[];
  };
  message?: string | null;
};

// 1. CREATE ACTION (with validation state)
export async function createProject(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = ProjectFormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    technologies: formData.get("technologies"),
    type: formData.get("type"),
    yearCompleted: formData.get("yearCompleted"),
    link: formData.get("link") || undefined,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to create project.",
    };
  }

  const { title, description, technologies, type, yearCompleted, link } =
    validatedFields.data;
  const techString = `{${technologies
    .split(",")
    .map((t) => `"${t.trim()}"`)
    .join(",")}}`;

  try {
    await sql`
      INSERT INTO projects (title, description, technologies, type, year_completed, link)
      VALUES (${title}, ${description}, ${techString}::text[], ${type}, ${yearCompleted}, ${link || null})
    `;
  } catch (error) {
    console.error("Database Error:", error);
    return { message: "Database Error: Failed to create project." };
  }

  revalidatePath("/projects");
  redirect("/projects");
}

// 2. UPDATE ACTION
export async function updateProject(id: string, formData: FormData) {
  // Keep your existing updateProject logic here,
  // but make sure to add yearCompleted if you want to edit it too!
  // For this activity, focus on the Create action.
}

// 3. DELETE ACTION
export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to delete project.");
  }
  revalidatePath("/projects");
}
