import React from "react";
import { useCurser } from "../provider/curserProvider";
import Link from "next/link";
interface NavLink {
  id: string;
  title: string;
  url: string;
}

const navLinks: NavLink[] = [
  { id: "home", title: "Home", url: "#home" },
  { id: "about", title: "About Us", url: "#about" },
  { id: "projects", title: "Projects", url: "#projects" },
  { id: "experience", title: "Experience", url: "#experience" },
  { id: "contact", title: "Contact", url: "#contact" },
];
const Header = () => {
  const { setIsActive } = useCurser();
  return (
    <header>
      <div className="flex items-center border-b border-gray-700/50 justify-between w-full py-2 px-6">
        <div className="group flex cursor-pointer">
          <p className="m-0 transition-all duration-500 ease-in-out">©</p>

          <div
            onMouseLeave={() => setIsActive(false)}
            onMouseEnter={() => setIsActive(true)}
            className="flex relative overflow-hidden whitespace-nowrap ml-2 transition-all duration-500 ease-in-out"
          >
            <p className="relative transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
              Code by
            </p>
            <p className="relative transition-transform duration-500 ease-in-out pl-1 group-hover:-translate-x-16">
              Gokul
            </p>
            <p className="absolute left-28 transition-transform duration-500 ease-in-out group-hover:-translate-x-16">
              krishnan
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              onMouseLeave={() => setIsActive(false)}
              onMouseEnter={() => setIsActive(true)}
              key={link.id}
              href={link.url}
              className="px-4 py-2 text-white hover:bg-white hover:text-black rounded-full transition duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.querySelector(link.url);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
