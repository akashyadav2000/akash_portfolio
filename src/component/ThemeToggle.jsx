import { useTheme } from "../context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const { isDark, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative w-[52px] h-[27px] rounded-full transition-all duration-500 flex items-center px-[3px] flex-shrink-0
        ${isDark
          ? "bg-gradient-to-r from-cyan-500 to-purple-600 neon-cyan"
          : "bg-gradient-to-r from-cyan-300 to-pink-300"
        }`}
    >
      {/* Sliding pill */}
      <span className={`absolute w-[21px] h-[21px] rounded-full flex items-center justify-center transition-all duration-500 shadow-md
        ${isDark
          ? "translate-x-[25px] bg-[#0a0a1a]"
          : "translate-x-0 bg-white"
        }`}
      >
        {isDark
          ? <HiMoon  className="text-cyan-400 text-[12px]" />
          : <HiSun   className="text-yellow-500 text-[12px]" />
        }
      </span>
    </button>
  );
}
