// import { createContext, useContext, useEffect, useState } from "react";

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [isDark, setIsDark] = useState(() => {
//     const saved = localStorage.getItem("theme");
//     if (saved) return saved === "dark";
//     return window.matchMedia("(prefers-color-scheme: dark)").matches;
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (isDark) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   return (
//     <ThemeContext.Provider
//       value={{ isDark, toggle: () => setIsDark((p) => !p) }}
//     >
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export const useTheme = () => useContext(ThemeContext);

import { createContext, useContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const s = localStorage.getItem("theme");
    if (s) return s === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);
  return (
    <ThemeContext.Provider
      value={{ isDark, toggle: () => setIsDark((p) => !p) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
