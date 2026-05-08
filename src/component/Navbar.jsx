import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Portfolio", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const observerRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 55,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
      { rootMargin: "-55px 0px -80% 0px", threshold: 0 },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (!e.target.closest("nav")) setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
      <div className="w-full px-8 flex justify-between items-center h-[55px]">
        <img
          src={logo}
          alt="Logo"
          className="h-9 w-auto object-contain cursor-pointer"
          onClick={() => scrollToSection("home")}
        />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-10 text-base lg:text-lg font-[500]">
          {navItems.map(({ label, id }) => {
            const isActive = activeId === id;
            return (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className={`relative cursor-pointer pb-1 group transition-colors duration-200
                  ${isActive ? "text-cyan-400" : "text-black hover:text-cyan-400"}`}
              >
                {label}
                {/* underline — always rendered, width animates */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400
                  transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"}`}
                />
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-[8px] text-[15px] font-semibold rounded-md transition-colors duration-200"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-700 text-xl focus:outline-none"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff] border-t border-gray-100">
          <ul className="flex flex-col space-y-4 text-[17px] font-semibold">
            {navItems.map(({ label, id }) => {
              const isActive = activeId === id;
              return (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`cursor-pointer flex items-center gap-3 transition-colors duration-200
                    ${isActive ? "text-cyan-400" : "text-gray-800 hover:text-cyan-400"}`}
                >
                  <span
                    className={`w-[6px] h-[6px] rounded-full bg-cyan-400 flex-shrink-0 transition-opacity duration-200
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                  />
                  {label}
                </li>
              );
            })}
          </ul>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-5 w-full bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-200"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
