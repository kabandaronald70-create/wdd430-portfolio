import { Suspense } from "react";
import { getProjects } from "@/lib/projects-db";
import ProjectList from "@/components/ProjectList";

async function FeaturedProjects() {
  const projects = await getProjects();

  return (
    <ProjectList
      projects={projects.map(({ title, description, technologies, link }) => ({
        title,
        description,
        technologies,
        link,
      }))}
    />
  );
}

function ProjectGridSkeleton() {
  return (
    <div
      className="grid animate-pulse gap-5 sm:grid-cols-2 lg:grid-cols-3"
      role="status"
      aria-label="Loading featured projects"
    >
      {[0, 1, 2].map((card) => (
        <div
          key={card}
          aria-hidden="true"
          className="h-56 rounded-2xl border-2 border-slate-300 bg-slate-100 p-5"
        >
          <div className="h-5 w-3/4 rounded-full bg-slate-200" />
          <div className="mt-4 h-3 w-full rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-11/12 rounded-full bg-slate-200" />
          <div className="mt-2 h-3 w-2/3 rounded-full bg-slate-200" />
          <div className="mt-5 flex gap-2">
            <div className="h-8 w-24 rounded-full bg-slate-200" />
            <div className="h-8 w-24 rounded-full bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 py-1">
      <h1 className="text-3xl font-bold tracking-tight text-slate-950">
        Portfolio
      </h1>
      <section
        aria-labelledby="hero-heading"
        className="rounded-2xl border-2 border-slate-200 bg-white p-5 sm:p-6"
      >
        <h2 id="hero-heading" className="text-lg font-bold text-slate-800">
          Hello, I&apos;m Ronald Kabanda
        </h2>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-600">
          I&apos;m a full-stack developer learning Next.js and React. I build
          thoughtful web experiences and enjoy turning ideas into useful
          projects.
        </p>
      </section>
      <section aria-labelledby="projects-heading" className="space-y-4">
        <h2 id="projects-heading" className="text-lg font-bold text-slate-800">
          Featured Projects
        </h2>
        <Suspense fallback={<ProjectGridSkeleton />}>
          <FeaturedProjects />
        </Suspense>
      </section>
    </div>
  );
}
