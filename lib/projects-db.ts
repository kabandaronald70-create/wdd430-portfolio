// lib/projects-db.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  type: "opensource" | "school";
  technologies: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HOSA Website",
    description:
      "A responsive web application for former students of Highway Secondary School.",
    type: "opensource",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/kabandaronald70-create/hosa_website",
  },
  {
    id: 2,
    title: "ResearchPro Analytics",
    description:
      "A portfolio project demonstrating survey data analysis and statistical inference.",
    type: "school", // Assuming this is a school project
    technologies: ["Python", "Jupyter Notebook"],
    link: "https://github.com/kabandaronald70-create/ResearchPro-Analytics",
  },
];

export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter((p) => p.type === type);
  return projects;
}

export function getProjectById(id: number): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}
