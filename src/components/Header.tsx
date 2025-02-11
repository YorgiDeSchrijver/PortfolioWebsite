import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 200) {
        setIsInitial(true);
        setIsScrolled(false);
      } else if (window.scrollY > 200) {
        setIsInitial(false);
        setIsScrolled(true);
      } else {
        throw new Error("Unexpected scroll position");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`grid grid-cols-3 items-center py-4 px-16 text-white font-sans w-full transition-all duration-1000 ${isInitial ? "absolute top-0" : isScrolled ? "bg-dark fixed top-0 z-[75] translate-y-0" : "fixed top-0 -translate-y-full"}`}
    >
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
    </header>
  );
}
