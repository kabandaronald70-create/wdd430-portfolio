import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="mb-4 rounded-xl border-2 border-blue-500 bg-blue-600 px-5 py-4 text-white shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div
          id="header-title"
          className="text-xl font-bold tracking-tight text-white"
        >
          Ronald Kabanda
        </div>
        <nav aria-label="Main navigation">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}
