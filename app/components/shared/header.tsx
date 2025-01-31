import { Link } from "@remix-run/react";

const links = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contacts" },
];

export default function Header() {
  return (
    <header className="grid grid-cols-3 items-center py-4 text-white font-sans">
      <Link to="/" className="flex flex-col text-xl">
        <span>Yorgi</span>
        <span>De Schrijver</span>
      </Link>
      <nav className="flex space-x-16 items-center justify-center text-light font-medium">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex flex-col items-end text-lg">
        <button className="hover:underline active:underline">NL</button>
        <button className="hover:underline text-gray-light active:underline">EN</button>
      </div>
      <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 h-80 w-80 flex items-center justify-center rounded-full border-2 opacity-75 border-gray-dark pointer-events-none" />
    </header>
  );
}
