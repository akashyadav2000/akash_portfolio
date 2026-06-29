// import { useTheme } from "../context/ThemeContext";
// import { HiSun, HiMoon } from "react-icons/hi";

// export default function ThemeToggle() {
//   const { isDark, toggle } = useTheme();
//   return (
//     <button
//       onClick={toggle}
//       aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
//       className={`relative w-[52px] h-[27px] rounded-full transition-all duration-500 flex items-center px-[3px] flex-shrink-0
//         ${
//           isDark
//             ? "bg-gradient-to-r from-cyan-500 to-purple-600 neon-cyan"
//             : "bg-gradient-to-r from-cyan-300 to-pink-300"
//         }`}
//     >
//       {/* Sliding pill */}
//       <span
//         className={`absolute w-[21px] h-[21px] rounded-full flex items-center justify-center transition-all duration-500 shadow-md
//         ${
//           isDark ? "translate-x-[25px] bg-[#0a0a1a]" : "translate-x-0 bg-white"
//         }`}
//       >
//         {isDark ? (
//           <HiMoon className="text-cyan-400 text-[12px]" />
//         ) : (
//           <HiSun className="text-yellow-500 text-[12px]" />
//         )}
//       </span>
//     </button>
//   );
// }

import { useTheme } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Light mode" : "Dark mode"}
      className={`relative w-14 h-7 rounded-full transition-all duration-500 flex items-center px-1 flex-shrink-0 focus:outline-none
        ${isDark ? "bg-gradient-to-r from-violet-600 to-indigo-600" : "bg-gradient-to-r from-cyan-400 to-sky-400"}`}
    >
      <span
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg
        ${isDark ? "translate-x-7 bg-[#0a0a1a]" : "translate-x-0 bg-white"}`}
      >
        {isDark ? (
          <HiMoon className="text-violet-300 text-[11px]" />
        ) : (
          <HiSun className="text-amber-500 text-[11px]" />
        )}
      </span>
    </button>
  );
}
