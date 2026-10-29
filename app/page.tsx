import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "HOSA Website",
    description:
      "A responsive web application for former students of Highway Secondary School (Kiganda Town Council, Kassanda District, Uganda).",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/kabandaronald70-create/hosa_website",
  },
  {
    title: "ResearchPro Analytics",
    description:
      "A portfolio project demonstrating survey data analysis, statistical inference, regression modelling, and responsible research practices.",
    technologies: ["Python", "Jupyter Notebook"],
    link: "https://github.com/kabandaronald70-create/ResearchPro-Analytics",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">My Portfolio</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I&apos;m a full-stack developer learning Next.js and React. Here are some
          of my recent projects.
        </p>
      </section>
      <section aria-labelledby="projects-heading">
        <h2
          id="projects-heading"
          className="text-2xl font-bold mb-4 text-gray-900"
        >
          Featured Projects
        </h2>
        <ProjectList projects={projects} />
      </section>
    </div>
  );
}
