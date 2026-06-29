// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "/images/logo.png";

// const navItems = [
//   { label: "Home", id: "home" },
//   { label: "Services", id: "services" },
//   { label: "About", id: "about" },
//   { label: "Skills", id: "skills" },
//   { label: "Portfolio", id: "projects" },
//   { label: "Contact", id: "contact" },
// ];

// const NAVBAR_HEIGHT = 55;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const isScrollingRef = useRef(false);
//   const scrollTimerRef = useRef(null);

//   const scrollToSection = (id) => {
//     // 1. Set active immediately
//     setActiveId(id);
//     // 2. Close menu
//     setIsOpen(false);
//     // 3. Block observer for 1s
//     isScrollingRef.current = true;
//     clearTimeout(scrollTimerRef.current);
//     scrollTimerRef.current = setTimeout(() => {
//       isScrollingRef.current = false;
//     }, 1000);
//     // 4. Scroll after menu close reflow (100ms is enough on all devices)
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       if (!el) return;
//       const top =
//         el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
//       window.scrollTo({ top, behavior: "smooth" });
//     }, 100);
//   };

//   // Scroll-based active tracking
//   useEffect(() => {
//     const handleScroll = () => {
//       if (isScrollingRef.current) return;
//       let current = "home";
//       navItems.forEach(({ id }) => {
//         const el = document.getElementById(id);
//         if (!el) return;
//         if (el.getBoundingClientRect().top <= NAVBAR_HEIGHT + 20) {
//           current = id;
//         }
//       });
//       setActiveId(current);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(scrollTimerRef.current);
//     };
//   }, []);

//   // Close on outside click
//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav") && !e.target.closest("#mobile-menu"))
//         setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   return (
//     <>
//       <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
//         <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
//           <img
//             src={logo}
//             alt="Akash Yadav"
//             className="h-9 w-auto object-contain cursor-pointer"
//             onClick={() => scrollToSection("home")}
//           />

//           {/* Desktop links */}
//           <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[16px] font-[500]">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`relative cursor-pointer pb-1 group transition-colors duration-200 ${
//                     isActive
//                       ? "text-cyan-400"
//                       : "text-black hover:text-cyan-400"
//                   }`}
//                 >
//                   {label}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
//                       isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
//                     }`}
//                   />
//                 </li>
//               );
//             })}
//           </ul>

//           <button
//             onClick={() => scrollToSection("contact")}
//             className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-4 lg:px-5 py-[7px] text-[13px] lg:text-[15px] font-semibold rounded-md transition-colors duration-200"
//           >
//             Hire Me
//           </button>

//           <button
//             className="md:hidden text-gray-700 text-xl focus:outline-none"
//             onClick={() => setIsOpen((p) => !p)}
//             aria-label={isOpen ? "Close menu" : "Open menu"}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile menu overlay */}
//       {isOpen && (
//         <>
//           {/* Menu panel — z-[998] so it's below nav but above page */}
//           <div
//             id="mobile-menu"
//             className="md:hidden fixed left-0 right-0 z-[998] bg-white/95 backdrop-blur-md px-7 pt-6 pb-7 shadow-xl border-b border-gray-100"
//             style={{ top: "55px" }}
//           >
//             <ul className="flex flex-col space-y-5">
//               {navItems.map(({ label, id }) => {
//                 const isActive = activeId === id;
//                 return (
//                   <li
//                     key={id}
//                     onClick={() => scrollToSection(id)}
//                     className={`cursor-pointer flex items-center gap-3 text-[17px] font-semibold transition-colors duration-200 ${
//                       isActive
//                         ? "text-cyan-400"
//                         : "text-gray-800 active:text-cyan-400"
//                     }`}
//                   >
//                     <span
//                       className={`w-[7px] h-[7px] rounded-full bg-cyan-400 flex-shrink-0 transition-all duration-200 ${
//                         isActive ? "opacity-100" : "opacity-0"
//                       }`}
//                     />
//                     {label}
//                   </li>
//                 );
//               })}
//             </ul>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="mt-6 w-full bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 text-white py-[10px] text-[15px] font-semibold rounded-lg transition-colors duration-200"
//             >
//               Hire Me
//             </button>
//           </div>

//           {/* Blurred backdrop — click to close, pointer-events-none on nothing so clicks register */}
//           <div
//             className="md:hidden fixed inset-0 z-[997] bg-black/30 backdrop-blur-sm"
//             style={{ top: "55px" }}
//             onClick={() => setIsOpen(false)}
//           />
//         </>
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "/images/logo.png";
// import ThemeToggle from "./ThemeToggle";
// import { useTheme } from "../context/ThemeContext";

// const navItems = [
//   { label: "Home", id: "home" },
//   { label: "Services", id: "services" },
//   { label: "About", id: "about" },
//   { label: "Skills", id: "skills" },
//   { label: "Portfolio", id: "projects" },
//   { label: "Contact", id: "contact" },
// ];
// const NAVBAR_HEIGHT = 55;

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const [scrolled, setScrolled] = useState(false);
//   const isScrollingRef = useRef(false);
//   const scrollTimerRef = useRef(null);
//   const { isDark } = useTheme();

//   const scrollToSection = (id) => {
//     setActiveId(id);
//     setIsOpen(false);
//     isScrollingRef.current = true;
//     clearTimeout(scrollTimerRef.current);
//     scrollTimerRef.current = setTimeout(() => {
//       isScrollingRef.current = false;
//     }, 1000);
//     setTimeout(() => {
//       const el = document.getElementById(id);
//       if (!el) return;
//       window.scrollTo({
//         top: el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT,
//         behavior: "smooth",
//       });
//     }, 100);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//       if (isScrollingRef.current) return;
//       let current = "home";
//       navItems.forEach(({ id }) => {
//         const el = document.getElementById(id);
//         if (el && el.getBoundingClientRect().top <= NAVBAR_HEIGHT + 20)
//           current = id;
//       });
//       setActiveId(current);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       clearTimeout(scrollTimerRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav") && !e.target.closest("#mobile-menu"))
//         setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   return (
//     <>
//       <nav
//         className={`sticky top-0 z-[999] font-roboto-serif transition-all duration-500
//         ${
//           scrolled
//             ? isDark
//               ? "bg-[#05050f]/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,240,252,0.08)]"
//               : "bg-white/80 backdrop-blur-xl border-b border-gray-100/80 shadow-sm"
//             : isDark
//               ? "bg-transparent"
//               : "bg-transparent"
//         }`}
//       >
//         <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
//           <img
//             src={logo}
//             alt="Akash Yadav"
//             className="h-9 w-auto object-contain cursor-pointer"
//             onClick={() => scrollToSection("home")}
//           />

//           {/* Desktop links */}
//           <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[16px] font-[500]">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`relative cursor-pointer pb-1 group transition-colors duration-200
//                     ${
//                       isActive
//                         ? isDark
//                           ? "text-cyan-400 neon-text-cyan"
//                           : "text-cyan-500"
//                         : isDark
//                           ? "text-gray-300 hover:text-cyan-400"
//                           : "text-gray-700 hover:text-cyan-500"
//                     }`}
//                 >
//                   {label}
//                   <span
//                     className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300
//                     ${isDark ? "bg-cyan-400" : "bg-cyan-500"}
//                     ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"}`}
//                   />
//                 </li>
//               );
//             })}
//           </ul>

//           <div className="hidden md:flex items-center gap-4">
//             <ThemeToggle />
//             <button
//               onClick={() => scrollToSection("contact")}
//               className={`px-4 lg:px-5 py-[7px] text-[13px] lg:text-[15px] font-semibold rounded-md transition-all duration-300
//                 ${
//                   isDark
//                     ? "bg-cyan-400 hover:bg-cyan-300 text-[#05050f] neon-cyan"
//                     : "bg-cyan-400 hover:bg-cyan-500 text-white"
//                 }`}
//             >
//               Hire Me
//             </button>
//           </div>

//           <div className="md:hidden flex items-center gap-3">
//             <ThemeToggle />
//             <button
//               className={`text-xl focus:outline-none transition-colors ${isDark ? "text-gray-300" : "text-gray-700"}`}
//               onClick={() => setIsOpen((p) => !p)}
//               aria-label={isOpen ? "Close menu" : "Open menu"}
//             >
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile menu */}
//       {isOpen && (
//         <>
//           <div
//             id="mobile-menu"
//             className={`md:hidden fixed left-0 right-0 z-[998] px-7 pt-6 pb-7 shadow-xl border-b transition-all duration-300
//               ${
//                 isDark
//                   ? "bg-[#05050f]/95 backdrop-blur-xl border-white/10"
//                   : "bg-white/95 backdrop-blur-xl border-gray-100"
//               }`}
//             style={{ top: "55px" }}
//           >
//             <ul className="flex flex-col space-y-5">
//               {navItems.map(({ label, id }) => {
//                 const isActive = activeId === id;
//                 return (
//                   <li
//                     key={id}
//                     onClick={() => scrollToSection(id)}
//                     className={`cursor-pointer flex items-center gap-3 text-[17px] font-semibold transition-colors duration-200
//                       ${
//                         isActive
//                           ? isDark
//                             ? "text-cyan-400"
//                             : "text-cyan-500"
//                           : isDark
//                             ? "text-gray-300"
//                             : "text-gray-800"
//                       }`}
//                   >
//                     <span
//                       className={`w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-200
//                       ${isDark ? "bg-cyan-400" : "bg-cyan-500"}
//                       ${isActive ? "opacity-100" : "opacity-0"}`}
//                     />
//                     {label}
//                   </li>
//                 );
//               })}
//             </ul>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className={`mt-6 w-full py-[10px] text-[15px] font-semibold rounded-lg transition-all duration-300
//                 ${
//                   isDark
//                     ? "bg-cyan-400 text-[#05050f] hover:bg-cyan-300"
//                     : "bg-cyan-400 text-white hover:bg-cyan-500"
//                 }`}
//             >
//               Hire Me
//             </button>
//           </div>
//           <div
//             className="md:hidden fixed inset-0 z-[997] bg-black/40 backdrop-blur-sm"
//             style={{ top: "55px" }}
//             onClick={() => setIsOpen(false)}
//           />
//         </>
//       )}
//     </>
//   );
// };
// export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.png";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Portfolio", id: "projects" },
  { label: "Contact", id: "contact" },
];
const H = 55;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const scrolling = useRef(false);
  const timer = useRef(null);
  const { isDark } = useTheme();

  const go = (id) => {
    setActive(id);
    setOpen(false);
    scrolling.current = true;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      scrolling.current = false;
    }, 1000);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - H,
        behavior: "smooth",
      });
    }, 80);
  };

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 30);
      if (scrolling.current) return;
      let cur = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= H + 20) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (!e.target.closest("nav") && !e.target.closest("#m-menu"))
        setOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [open]);

  const navBg = scrolled
    ? isDark
      ? "bg-[#07050f]/85 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
      : "bg-white/85 backdrop-blur-2xl border-b border-gray-100 shadow-sm"
    : "bg-transparent";

  return (
    <>
      <nav
        className={`sticky top-0 z-[999] transition-all duration-500 ${navBg}`}
      >
        <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
          <img
            src={logo}
            alt="Akash"
            className="h-9 w-auto object-contain"
            onClick={() => go("home")}
          />

          <ul className="hidden md:flex items-center space-x-6 lg:space-x-9 text-[14px] lg:text-[15px] font-[600]">
            {navItems.map(({ label, id }) => {
              const isActive = active === id;
              return (
                <li
                  key={id}
                  onClick={() => go(id)}
                  className={`relative pb-1 group transition-colors duration-200 tracking-wide
                    ${
                      isActive
                        ? isDark
                          ? "text-violet-400"
                          : "text-cyan-600"
                        : isDark
                          ? "text-gray-300 hover:text-violet-300"
                          : "text-gray-600 hover:text-cyan-600"
                    }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300
                    ${isDark ? "bg-violet-400" : "bg-cyan-500"}
                    ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-40"}`}
                  />
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => go("contact")}
              className={`px-5 py-2 text-[13px] lg:text-[14px] font-[700] rounded-xl transition-all duration-300 tracking-wide
                ${
                  isDark
                    ? "bg-violet-600 hover:bg-violet-500 text-white shadow-[0_4px_14px_rgba(124,58,237,0.4)]"
                    : "bg-cyan-500 hover:bg-cyan-600 text-white shadow-[0_4px_14px_rgba(6,182,212,0.35)]"
                }`}
            >
              Hire Me
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen((p) => !p)}
              aria-label="menu"
              className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <>
          <div
            id="m-menu"
            style={{ top: "55px" }}
            className={`md:hidden fixed left-0 right-0 z-[998] px-7 pt-6 pb-7 border-b
              ${isDark ? "bg-[#07050f]/96 backdrop-blur-2xl border-white/8" : "bg-white/96 backdrop-blur-2xl border-gray-100"}`}
          >
            <ul className="flex flex-col space-y-5">
              {navItems.map(({ label, id }) => {
                const isActive = active === id;
                return (
                  <li
                    key={id}
                    onClick={() => go(id)}
                    className={`flex items-center gap-3 text-[16px] font-[600] tracking-wide transition-colors
                      ${
                        isActive
                          ? isDark
                            ? "text-violet-400"
                            : "text-cyan-600"
                          : isDark
                            ? "text-gray-300"
                            : "text-gray-700"
                      }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${isDark ? "bg-violet-400" : "bg-cyan-500"} ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"} transition-all`}
                    />
                    {label}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => go("contact")}
              className={`mt-6 w-full py-[10px] text-[15px] font-[700] rounded-xl transition-all tracking-wide
                ${isDark ? "bg-violet-600 hover:bg-violet-500 text-white" : "bg-cyan-500 hover:bg-cyan-600 text-white"}`}
            >
              Hire Me
            </button>
          </div>
          <div
            className="md:hidden fixed inset-0 z-[997] bg-black/40 backdrop-blur-sm"
            style={{ top: "55px" }}
            onClick={() => setOpen(false)}
          />
        </>
      )}
    </>
  );
}
