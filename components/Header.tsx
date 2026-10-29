import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div
        id="header-title"
        className="text-2xl font-bold max-w-4xl mx-auto px-4 mb-2"
      >
        Ronald Kabanda
      </div>
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
