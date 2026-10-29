import SkillCard from "@/components/SkillCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Ronald Kabanda's background, current work, and experience with React and Next.js.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">About Me</h1>
      <p className="text-lg text-gray-700 mb-6">
        This about page shares more information about my background and work. I
        am currently learning Next.js and how to build server-rendered
        applications.
      </p>

      {/* Here is your custom component! */}
      <SkillCard
        skillName="React & Next.js"
        proficiency="Intermediate"
        description="I am learning how to build server-rendered applications using the Next.js App Router and component composition."
      />
    </div>
  );
}
