"use client"; // This directive makes it a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-white sm:text-base">
      <li>
        <Link
          href="/"
          className={
            isActive("/")
              ? "font-bold text-yellow-300 underline decoration-2 underline-offset-4"
              : "transition-colors hover:text-blue-100"
          }
          aria-current={isActive("/") ? "page" : undefined}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            isActive("/about")
              ? "font-bold text-yellow-300 underline decoration-2 underline-offset-4"
              : "transition-colors hover:text-blue-100"
          }
          aria-current={isActive("/about") ? "page" : undefined}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className={
            isActive("/projects") || pathname.startsWith("/projects/")
              ? "font-bold text-yellow-300 underline decoration-2 underline-offset-4"
              : "transition-colors hover:text-blue-100"
          }
          aria-current={isActive("/projects") ? "page" : undefined}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className={
            isActive("/contact")
              ? "font-bold text-yellow-300 underline decoration-2 underline-offset-4"
              : "transition-colors hover:text-blue-100"
          }
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
