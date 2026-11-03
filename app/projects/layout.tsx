import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Sub-navigation specifically for the Projects section */}
      <nav className="flex gap-4 mb-8 bg-gray-200 p-3 rounded-lg text-sm font-semibold">
        <Link href="/projects" className="hover:text-blue-600">
          Overview
        </Link>
        <span>|</span>
        <Link href="/projects/opensource" className="hover:text-blue-600">
          Open Source
        </Link>
        <span>|</span>
        <Link href="/projects/school" className="hover:text-blue-600">
          School Projects
        </Link>
      </nav>

      {/* The content of the specific project page renders here */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {children}
      </div>
    </section>
  );
}
