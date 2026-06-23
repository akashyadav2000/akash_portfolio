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

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const observerRef = useRef(null);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({
//       top: el.getBoundingClientRect().top + window.scrollY - 55,
//       behavior: "smooth",
//     });
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
//       { rootMargin: "-55px 0px -80% 0px", threshold: 0 },
//     );
//     navItems.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) observerRef.current.observe(el);
//     });
//     return () => observerRef.current?.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav")) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   return (
//     <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
//       <div className="w-full px-8 flex justify-between items-center h-[55px]">
//         <img
//           src={logo}
//           alt="Logo"
//           className="h-9 w-auto object-contain cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         />

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center space-x-10 text-base lg:text-lg font-[500]">
//           {navItems.map(({ label, id }) => {
//             const isActive = activeId === id;
//             return (
//               <li
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className={`relative cursor-pointer pb-1 group transition-colors duration-200
//                   ${isActive ? "text-cyan-400" : "text-black hover:text-cyan-400"}`}
//               >
//                 {label}
//                 {/* underline — always rendered, width animates */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400
//                   transition-all duration-300
//                   ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"}`}
//                 />
//               </li>
//             );
//           })}
//         </ul>

//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-[8px] text-[15px] font-semibold rounded-md transition-colors duration-200"
//         >
//           Hire Me
//         </button>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-gray-700 text-xl focus:outline-none"
//           onClick={() => setIsOpen((p) => !p)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff] border-t border-gray-100">
//           <ul className="flex flex-col space-y-4 text-[17px] font-semibold">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`cursor-pointer flex items-center gap-3 transition-colors duration-200
//                     ${isActive ? "text-cyan-400" : "text-gray-800 hover:text-cyan-400"}`}
//                 >
//                   <span
//                     className={`w-[6px] h-[6px] rounded-full bg-cyan-400 flex-shrink-0 transition-opacity duration-200
//                     ${isActive ? "opacity-100" : "opacity-0"}`}
//                   />
//                   {label}
//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="mt-5 w-full bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-200"
//           >
//             Hire Me
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const observerRef = useRef(null);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({
//       top: el.getBoundingClientRect().top + window.scrollY - 55,
//       behavior: "smooth",
//     });
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
//       { rootMargin: "-55px 0px -80% 0px", threshold: 0 },
//     );
//     navItems.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) observerRef.current.observe(el);
//     });
//     return () => observerRef.current?.disconnect();
//   }, []);

//   // Close mobile menu when clicking outside
//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav")) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   // Close mobile menu on Escape key
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape" && isOpen) setIsOpen(false);
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, [isOpen]);

//   return (
//     <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
//       <div className="w-full px-8 flex justify-between items-center h-[55px]">
//         <img
//           src={logo}
//           alt="Akash Yadav — Home"
//           className="h-9 w-auto object-contain cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         />

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center space-x-10 text-base lg:text-lg font-[500]">
//           {navItems.map(({ label, id }) => {
//             const isActive = activeId === id;
//             return (
//               <li
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className={`relative cursor-pointer pb-1 group transition-colors duration-200
//                   ${isActive ? "text-cyan-400" : "text-black hover:text-cyan-400"}`}
//               >
//                 {label}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400
//                   transition-all duration-300
//                   ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"}`}
//                 />
//               </li>
//             );
//           })}
//         </ul>

//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-[8px] text-[15px] font-semibold rounded-md transition-colors duration-200"
//         >
//           Hire Me
//         </button>

//         {/* Mobile toggle — aria-label added */}
//         <button
//           className="md:hidden text-gray-700 text-xl focus:outline-none"
//           onClick={() => setIsOpen((p) => !p)}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isOpen}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff] border-t border-gray-100">
//           <ul className="flex flex-col space-y-4 text-[17px] font-semibold">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`cursor-pointer flex items-center gap-3 transition-colors duration-200
//                     ${isActive ? "text-cyan-400" : "text-gray-800 hover:text-cyan-400"}`}
//                 >
//                   <span
//                     className={`w-[6px] h-[6px] rounded-full bg-cyan-400 flex-shrink-0 transition-opacity duration-200
//                     ${isActive ? "opacity-100" : "opacity-0"}`}
//                   />
//                   {label}
//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="mt-5 w-full bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-200"
//           >
//             Hire Me
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeId, setActiveId] = useState("home");
//   const observerRef = useRef(null);

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (!el) return;
//     window.scrollTo({
//       top: el.getBoundingClientRect().top + window.scrollY - 55,
//       behavior: "smooth",
//     });
//     setIsOpen(false);
//   };

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       (entries) =>
//         entries.forEach((e) => e.isIntersecting && setActiveId(e.target.id)),
//       { rootMargin: "-55px 0px -80% 0px", threshold: 0 },
//     );
//     navItems.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) observerRef.current.observe(el);
//     });
//     return () => observerRef.current?.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav")) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
//       <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
//         <img
//           src={logo}
//           alt="Akash Yadav"
//           className="h-9 w-auto object-contain cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         />

//         {/* Desktop nav — hidden below md */}
//         <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[16px] font-[500]">
//           {navItems.map(({ label, id }) => {
//             const isActive = activeId === id;
//             return (
//               <li
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className={`relative cursor-pointer pb-1 group transition-colors duration-200 ${isActive ? "text-cyan-400" : "text-black hover:text-cyan-400"}`}
//               >
//                 {label}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"}`}
//                 />
//               </li>
//             );
//           })}
//         </ul>

//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-4 lg:px-5 py-[7px] text-[13px] lg:text-[15px] font-semibold rounded-md transition-colors duration-200"
//         >
//           Hire Me
//         </button>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-gray-700 text-xl focus:outline-none"
//           onClick={() => setIsOpen((p) => !p)}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isOpen}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff] border-t border-gray-100">
//           <ul className="flex flex-col space-y-4 text-[16px] font-semibold">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`cursor-pointer flex items-center gap-3 transition-colors duration-200 ${isActive ? "text-cyan-400" : "text-gray-800 hover:text-cyan-400"}`}
//                 >
//                   <span
//                     className={`w-[6px] h-[6px] rounded-full bg-cyan-400 flex-shrink-0 ${isActive ? "opacity-100" : "opacity-0"}`}
//                   />
//                   {label}
//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="mt-5 w-full bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-200"
//           >
//             Hire Me
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
//   const observerRef = useRef(null);
//   const isScrollingRef = useRef(false);
//   const scrollTimerRef = useRef(null);

//   const scrollToSection = (id) => {
//     // 1. Close menu first
//     setIsOpen(false);

//     // 2. Wait one frame so the menu DOM collapses and page reflows,
//     //    THEN measure and scroll — this fixes the mid-page stop on mobile
//     requestAnimationFrame(() => {
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (!el) return;

//         // 3. Set active immediately on click — don't wait for observer
//         setActiveId(id);

//         // 4. Flag that we're programmatically scrolling so observer
//         //    doesn't override the active link during scroll animation
//         isScrollingRef.current = true;
//         clearTimeout(scrollTimerRef.current);
//         scrollTimerRef.current = setTimeout(() => {
//           isScrollingRef.current = false;
//         }, 800);

//         window.scrollTo({
//           top: el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT,
//           behavior: "smooth",
//         });
//       }, 50);
//     });
//   };

//   useEffect(() => {
//     // Slightly looser rootMargin so sections are detected reliably
//     // on both short mobile screens and tall desktop screens
//     observerRef.current = new IntersectionObserver(
//       (entries) => {
//         // Skip observer updates while user clicked a link
//         if (isScrollingRef.current) return;

//         entries.forEach((e) => {
//           if (e.isIntersecting) setActiveId(e.target.id);
//         });
//       },
//       {
//         rootMargin: `-${NAVBAR_HEIGHT}px 0px -60% 0px`,
//         threshold: 0,
//       },
//     );

//     navItems.forEach(({ id }) => {
//       const el = document.getElementById(id);
//       if (el) observerRef.current.observe(el);
//     });

//     return () => {
//       observerRef.current?.disconnect();
//       clearTimeout(scrollTimerRef.current);
//     };
//   }, []);

//   // Close mobile menu on outside click
//   useEffect(() => {
//     if (!isOpen) return;
//     const handler = (e) => {
//       if (!e.target.closest("nav")) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   // Close mobile menu on Escape
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

//   return (
//     <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
//       <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
//         <img
//           src={logo}
//           alt="Akash Yadav"
//           className="h-9 w-auto object-contain cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         />

//         {/* Desktop links */}
//         <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[16px] font-[500]">
//           {navItems.map(({ label, id }) => {
//             const isActive = activeId === id;
//             return (
//               <li
//                 key={id}
//                 onClick={() => scrollToSection(id)}
//                 className={`relative cursor-pointer pb-1 group transition-colors duration-200 ${
//                   isActive ? "text-cyan-400" : "text-black hover:text-cyan-400"
//                 }`}
//               >
//                 {label}
//                 <span
//                   className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
//                     isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
//                   }`}
//                 />
//               </li>
//             );
//           })}
//         </ul>

//         <button
//           onClick={() => scrollToSection("contact")}
//           className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-4 lg:px-5 py-[7px] text-[13px] lg:text-[15px] font-semibold rounded-md transition-colors duration-200"
//         >
//           Hire Me
//         </button>

//         {/* Mobile toggle */}
//         <button
//           className="md:hidden text-gray-700 text-xl focus:outline-none"
//           onClick={() => setIsOpen((p) => !p)}
//           aria-label={isOpen ? "Close menu" : "Open menu"}
//           aria-expanded={isOpen}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff] border-t border-gray-100">
//           <ul className="flex flex-col space-y-4 text-[16px] font-semibold">
//             {navItems.map(({ label, id }) => {
//               const isActive = activeId === id;
//               return (
//                 <li
//                   key={id}
//                   onClick={() => scrollToSection(id)}
//                   className={`cursor-pointer flex items-center gap-3 transition-colors duration-200 ${
//                     isActive
//                       ? "text-cyan-400"
//                       : "text-gray-800 hover:text-cyan-400"
//                   }`}
//                 >
//                   <span
//                     className={`w-[6px] h-[6px] rounded-full bg-cyan-400 flex-shrink-0 transition-opacity duration-200 ${
//                       isActive ? "opacity-100" : "opacity-0"
//                     }`}
//                   />
//                   {label}
//                 </li>
//               );
//             })}
//           </ul>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="mt-5 w-full bg-cyan-400 hover:bg-cyan-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md transition-colors duration-200"
//           >
//             Hire Me
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

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
//     setIsOpen(false);
//     isScrollingRef.current = true;
//     setActiveId(id);
//     clearTimeout(scrollTimerRef.current);

//     requestAnimationFrame(() => {
//       setTimeout(() => {
//         const el = document.getElementById(id);
//         if (!el) return;
//         window.scrollTo({
//           top: el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT,
//           behavior: "smooth",
//         });
//         scrollTimerRef.current = setTimeout(() => {
//           isScrollingRef.current = false;
//         }, 900);
//       }, 60);
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isScrollingRef.current) return;

//       // Find which section is currently most visible
//       let current = "home";
//       let minDistance = Infinity;

//       navItems.forEach(({ id }) => {
//         const el = document.getElementById(id);
//         if (!el) return;
//         const rect = el.getBoundingClientRect();
//         const distance = Math.abs(rect.top - NAVBAR_HEIGHT);
//         // Pick the section whose top is closest to just below the navbar
//         if (rect.top <= NAVBAR_HEIGHT + 10 && distance < minDistance) {
//           minDistance = distance;
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
//       if (!e.target.closest("nav")) setIsOpen(false);
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, [isOpen]);

//   // Close on Escape
//   useEffect(() => {
//     const handler = (e) => {
//       if (e.key === "Escape") setIsOpen(false);
//     };
//     document.addEventListener("keydown", handler);
//     return () => document.removeEventListener("keydown", handler);
//   }, []);

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

//       {/* Mobile fullscreen overlay menu — rendered outside nav so it
//           doesn't push page content down */}
//       {isOpen && (
//         <div
//           className="md:hidden fixed inset-0 z-[998] flex flex-col"
//           style={{ top: "55px" }}
//         >
//           {/* Menu panel */}
//           <div className="bg-white/95 backdrop-blur-md px-7 pt-6 pb-7 shadow-xl border-b border-gray-100">
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
//                         : "text-gray-800 hover:text-cyan-400"
//                     }`}
//                   >
//                     <span
//                       className={`w-[7px] h-[7px] rounded-full bg-cyan-400 flex-shrink-0 transition-all duration-200 ${
//                         isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
//                       }`}
//                     />
//                     {label}
//                   </li>
//                 );
//               })}
//             </ul>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="mt-6 w-full bg-cyan-400 hover:bg-cyan-500 text-white py-[10px] text-[15px] font-semibold rounded-lg transition-colors duration-200"
//             >
//               Hire Me
//             </button>
//           </div>

//           {/* Blurred backdrop for the rest of the screen */}
//           <div
//             className="flex-1 bg-black/30 backdrop-blur-sm"
//             onClick={() => setIsOpen(false)}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

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

const NAVBAR_HEIGHT = 55;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const isScrollingRef = useRef(false);
  const scrollTimerRef = useRef(null);

  const scrollToSection = (id) => {
    // 1. Set active immediately
    setActiveId(id);
    // 2. Close menu
    setIsOpen(false);
    // 3. Block observer for 1s
    isScrollingRef.current = true;
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
    // 4. Scroll after menu close reflow (100ms is enough on all devices)
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top, behavior: "smooth" });
    }, 100);
  };

  // Scroll-based active tracking
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      let current = "home";
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= NAVBAR_HEIGHT + 20) {
          current = id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimerRef.current);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (!e.target.closest("nav") && !e.target.closest("#mobile-menu"))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  return (
    <>
      <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-[999] font-roboto-serif">
        <div className="w-full px-5 sm:px-8 flex justify-between items-center h-[55px]">
          <img
            src={logo}
            alt="Akash Yadav"
            className="h-9 w-auto object-contain cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[14px] lg:text-[16px] font-[500]">
            {navItems.map(({ label, id }) => {
              const isActive = activeId === id;
              return (
                <li
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative cursor-pointer pb-1 group transition-colors duration-200 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-black hover:text-cyan-400"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
                    }`}
                  />
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:block bg-cyan-400 hover:bg-cyan-500 text-white px-4 lg:px-5 py-[7px] text-[13px] lg:text-[15px] font-semibold rounded-md transition-colors duration-200"
          >
            Hire Me
          </button>

          <button
            className="md:hidden text-gray-700 text-xl focus:outline-none"
            onClick={() => setIsOpen((p) => !p)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <>
          {/* Menu panel — z-[998] so it's below nav but above page */}
          <div
            id="mobile-menu"
            className="md:hidden fixed left-0 right-0 z-[998] bg-white/95 backdrop-blur-md px-7 pt-6 pb-7 shadow-xl border-b border-gray-100"
            style={{ top: "55px" }}
          >
            <ul className="flex flex-col space-y-5">
              {navItems.map(({ label, id }) => {
                const isActive = activeId === id;
                return (
                  <li
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`cursor-pointer flex items-center gap-3 text-[17px] font-semibold transition-colors duration-200 ${
                      isActive
                        ? "text-cyan-400"
                        : "text-gray-800 active:text-cyan-400"
                    }`}
                  >
                    <span
                      className={`w-[7px] h-[7px] rounded-full bg-cyan-400 flex-shrink-0 transition-all duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {label}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-6 w-full bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 text-white py-[10px] text-[15px] font-semibold rounded-lg transition-colors duration-200"
            >
              Hire Me
            </button>
          </div>

          {/* Blurred backdrop — click to close, pointer-events-none on nothing so clicks register */}
          <div
            className="md:hidden fixed inset-0 z-[997] bg-black/30 backdrop-blur-sm"
            style={{ top: "55px" }}
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
