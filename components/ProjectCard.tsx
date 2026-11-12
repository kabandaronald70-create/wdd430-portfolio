interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border-2 border-slate-300 bg-slate-50/70 p-5 shadow-sm transition-colors hover:border-slate-400">
      <h3 className="text-lg font-bold leading-snug text-slate-950">{title}</h3>
      <p className="mt-3 flex-grow leading-relaxed text-slate-600">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border-2 border-teal-700 bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-900"
          >
            {technology}
          </li>
        ))}
      </ul>
      {link && (
        <p className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700"
            aria-label={`View ${title} project`}
          >
            View Project
          </a>
        </p>
      )}
    </article>
  );
}
