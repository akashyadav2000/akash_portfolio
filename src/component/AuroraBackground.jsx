import { useTheme } from "../context/ThemeContext";

/**
 * Full-page aurora background.
 * Light mode: soft pastel blobs drifting slowly.
 * Dark mode: neon glowing orbs on deep dark base.
 * Fixed position, sits behind everything.
 */
export default function AuroraBackground() {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className={`absolute inset-0 transition-colors duration-700 ${
        isDark ? "bg-[#05050f]" : "bg-[#f8fbff]"
      }`} />

      {/* Aurora blob 1 — top left */}
      <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-60 animate-aurora1 ${
        isDark
          ? "bg-[#0ff0fc]"
          : "bg-[#c8ffc4]"
      }`} />

      {/* Aurora blob 2 — top right */}
      <div className={`absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-50 animate-aurora2 ${
        isDark
          ? "bg-[#a855f7]"
          : "bg-[#fba0e3]"
      }`} />

      {/* Aurora blob 3 — center */}
      <div className={`absolute top-[35%] left-[30%] w-[700px] h-[400px] rounded-full blur-[130px] opacity-30 animate-aurora3 ${
        isDark
          ? "bg-[#06b6d4]"
          : "bg-[#aefcff]"
      }`} />

      {/* Aurora blob 4 — bottom right */}
      <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-50 animate-aurora4 ${
        isDark
          ? "bg-[#ff51ff]"
          : "bg-[#fce7f3]"
      }`} />

      {/* Aurora blob 5 — bottom left */}
      <div className={`absolute -bottom-20 left-[20%] w-[400px] h-[400px] rounded-full blur-[90px] opacity-40 animate-aurora5 ${
        isDark
          ? "bg-[#10b981]"
          : "bg-[#d1fae5]"
      }`} />

      {/* Dark mode: noise grain texture overlay for depth */}
      {isDark && (
        <div className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />
      )}
    </div>
  );
}
