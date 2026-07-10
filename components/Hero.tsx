"use client";
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;

    type P = {
      cx: number; // chaos position
      cy: number;
      gx: number; // grid position
      gy: number;
      x: number;
      y: number;
      seed: number;
    };

    let particles: P[] = [];
    let cols = 0;
    let rows = 0;
    const mouse = { x: -9999, y: -9999 };
    let order = 0; // 0 = chaos, 1 = grid — eased toward target

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const gap = width < 640 ? 44 : 56;
      cols = Math.floor(width / gap);
      rows = Math.floor(height / gap);
      const ox = (width - (cols - 1) * gap) / 2;
      const oy = (height - (rows - 1) * gap) / 2;

      particles = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const gx = ox + c * gap;
          const gy = oy + r * gap;
          const cx = Math.random() * width;
          const cy = Math.random() * height;
          particles.push({ cx, cy, gx, gy, x: cx, y: cy, seed: Math.random() * Math.PI * 2 });
        }
      }
    };

    const targetOrder = () => {
      const rect = section.getBoundingClientRect();
      // 0 at top of page, 1 once user scrolled ~60% of hero height
      const progress = Math.min(Math.max(-rect.top / (rect.height * 0.6), 0), 1);
      return progress;
    };

    let t = 0;
    const draw = () => {
      t += 0.008;
      order += (targetOrder() - order) * 0.06;
      ctx.clearRect(0, 0, width, height);

      const ease = order * order * (3 - 2 * order); // smoothstep

      for (const p of particles) {
        const driftX = Math.cos(t * 1.4 + p.seed) * 18 * (1 - ease);
        const driftY = Math.sin(t * 1.1 + p.seed * 2) * 18 * (1 - ease);
        let tx = p.cx + (p.gx - p.cx) * ease + driftX;
        let ty = p.cy + (p.gy - p.cy) * ease + driftY;

        // cursor repulsion
        const dx = tx - mouse.x;
        const dy = ty - mouse.y;
        const d2 = dx * dx + dy * dy;
        const radius = 120;
        if (d2 < radius * radius) {
          const d = Math.sqrt(d2) || 1;
          const f = (1 - d / radius) * 34;
          tx += (dx / d) * f;
          ty += (dy / d) * f;
        }

        p.x += (tx - p.x) * 0.18;
        p.y += (ty - p.y) * 0.18;
      }

      // connective lines emerge as structure forms
      if (ease > 0.12) {
        ctx.lineWidth = 1;
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            const p = particles[i];
            if (!p) continue;
            const alpha = (ease - 0.12) * 0.14;
            ctx.strokeStyle = `oklch(0.85 0.15 185 / ${alpha})`;
            if (c < cols - 1) {
              const n = particles[i + 1];
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(n.x, n.y);
              ctx.stroke();
            }
            if (r < rows - 1) {
              const n = particles[i + cols];
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(n.x, n.y);
              ctx.stroke();
            }
          }
        }
      }

      for (const p of particles) {
        const size = 1.4 + ease * 0.8;
        const alpha = 0.35 + ease * 0.45;
        ctx.fillStyle = `oklch(0.85 0.15 185 / ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    build();
    draw();
    window.addEventListener("resize", build);
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex h-[calc(100vh-65px)] flex-col items-center"
    >
      <canvas
        ref={canvasRef}
        className="pointer-events-auto absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="pointer-events-none sticky top-0 flex h-screen flex-col items-center justify-center px-5 text-center sm:px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-mono-label text-teal-500"
        >
          Intelligence Workspace
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.05] sm:text-5xl md:text-7xl"
        >
          Raw data, given
          <span className="text-primary"> structure</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-6 max-w-md text-base text-muted-foreground "
        >
          Xai turns noise into structured intelligence, actionable insight and
          AI automations — in one workspace.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;