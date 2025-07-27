import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "About",
    "Skills",
    "Portfolio",
    "Contact",
  ];

  return (
    <nav className="bg-[#f7fcff] shadow-md sticky top-0 z-999 font-roboto-serif">
      <div className="w-full px-8 flex justify-between items-center h-[57px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-9 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 text-base lg:text-lg font-[500] text-black">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-pink-500 transition"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="hidden md:block">
          <button className="bg-pink-500 text-white px-5 py-[8px] text-[15px] font-semibold rounded-md hover:bg-pink-600 transition">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 text-xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[#f7fcff]">
          <ul className="flex flex-col space-y-4 text-[17px] font-semibold text-gray-800">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-pink-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-5 w-full bg-pink-500 text-white px-5 py-2 text-[15px] font-semibold rounded-md hover:bg-pink-600 transition">
            Hire me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
