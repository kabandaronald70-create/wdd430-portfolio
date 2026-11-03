import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

// GET /api/projects/1
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }, // <-- Changed to Promise
) {
  // Await the params object before accessing id
  const resolvedParams = await params;

  // Now convert the string ID into a number
  const id = Number(resolvedParams.id);

  // Validate: Is it a real number?
  if (Number.isNaN(id)) {
    return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
  }

  // Look up the project
  const project = getProjectById(id);

  // Validate: Did we find it?
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  // Return the project
  return NextResponse.json(project);
}
