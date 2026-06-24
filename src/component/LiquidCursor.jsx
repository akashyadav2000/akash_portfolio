import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function LiquidCursor() {
  const canvasRef  = useRef(null);
  const rafRef     = useRef(null);
  const mouseRef   = useRef({ x: -999, y: -999 });
  const curRef     = useRef({ x: -999, y: -999 });
  const ampRef     = useRef(0);
  const waveRef    = useRef(0);
  const prevRef    = useRef({ x: -999, y: -999 });
  const { isDark } = useTheme();
  const darkRef    = useRef(isDark);

  useEffect(() => { darkRef.current = isDark; }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const x = e.clientX ?? e.touches?.[0]?.clientX;
      const y = e.clientY ?? e.touches?.[0]?.clientY;
      if (x == null) return;
      const dx = x - prevRef.current.x;
      const dy = y - prevRef.current.y;
      const speed = Math.sqrt(dx*dx + dy*dy);
      prevRef.current  = { x, y };
      mouseRef.current = { x, y };
      ampRef.current = Math.min(ampRef.current + speed * 0.3, 25);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });

    const render = () => {
      rafRef.current = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      curRef.current.x += (mouseRef.current.x - curRef.current.x) * 0.1;
      curRef.current.y += (mouseRef.current.y - curRef.current.y) * 0.1;

      ampRef.current  *= 0.93;
      waveRef.current += 0.1;

      const { x: cx, y: cy } = curRef.current;
      const amp  = ampRef.current;
      const dark = darkRef.current;

      const c1 = dark ? "0,220,255"   : "0,200,240";
      const c2 = dark ? "180,60,255"  : "255,80,200";

      // Ripple rings
      const rings = 3;
      for (let i = 0; i < rings; i++) {
        const phase   = waveRef.current - i * 1.6;
        const t       = ((phase % (Math.PI*2)) + Math.PI*2) % (Math.PI*2);
        const prog    = t / (Math.PI*2);
        const r       = prog * 90;
        const opacity = (1-prog) * Math.min(1, amp/8) * 0.75;
        if (opacity < 0.01 || r < 1) continue;

        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(${c1},${opacity})`;
        ctx.lineWidth   = 2 * (1-prog*0.5);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, r*0.5, 0, Math.PI*2);
        ctx.strokeStyle = `rgba(${c2},${opacity*0.5})`;
        ctx.lineWidth   = 1.2 * (1-prog);
        ctx.stroke();
      }

      // Cursor glow blob
      const g = ctx.createRadialGradient(cx,cy,0,cx,cy,14);
      g.addColorStop(0,   `rgba(255,255,255,0.95)`);
      g.addColorStop(0.35,`rgba(${c1},0.6)`);
      g.addColorStop(1,   `rgba(${c1},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI*2);
      ctx.fillStyle = g;
      ctx.fill();

      // Center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI*2);
      ctx.fillStyle = "rgba(255,255,255,1)";
      ctx.fill();
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position:"fixed", top:0, left:0,
      width:"100%", height:"100%",
      pointerEvents:"none", zIndex:9999,
    }}/>
  );
}
