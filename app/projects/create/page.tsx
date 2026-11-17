import CreateProjectForm from "./create-project-form";

export default function CreateProjectPage() {
  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>
      <CreateProjectForm />
    </div>
  );
}
