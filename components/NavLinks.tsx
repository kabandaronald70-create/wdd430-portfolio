"use client"; // This directive makes it a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path: string) => pathname === path;

  return (
    <ul className="flex gap-6">
      <li>
        <Link
          href="/"
          className={
            isActive("/")
              ? "text-yellow-300 font-bold underline"
              : "hover:underline"
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
              ? "text-yellow-300 font-bold underline"
              : "hover:underline"
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
              ? "text-yellow-300 font-bold underline"
              : "hover:underline"
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
              ? "text-yellow-300 font-bold underline"
              : "hover:underline"
          }
          aria-current={isActive("/contact") ? "page" : undefined}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
