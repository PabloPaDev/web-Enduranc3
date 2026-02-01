"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Hero";
import Servicios from "./Servicios";
import StrideTogether from "./StrideTogether";
import Team from "./Team";

gsap.registerPlugin(ScrollTrigger);

export default function HeroServicios() {
  const containerRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !serviciosRef.current || !contentRef.current) return;

    // =========================
    //  DESKTOP/MÓVIL → CINEMÁTICO
    // =========================
    const ctx = gsap.context(() => {
      const section = serviciosRef.current!.querySelector("section");
      const grid = section?.querySelector(".grid");
      if (!grid) return;

      const [leftCol, rightCol] = Array.from(grid.children) as HTMLElement[];

      const windowWidth = window.innerWidth || 1920;

      // ⏱️ 3 secciones → duración x3
      const totalDuration = windowWidth * 3;

      // Cortinas fuera
      gsap.set(leftCol, { xPercent: -100 });
      gsap.set(rightCol, { xPercent: 100 });

      // Contenido oculto inicialmente
      gsap.set(contentRef.current, {
        opacity: 0,
        zIndex: 10,
      });

      // Cortinas activas al inicio para clicks en Servicios
      gsap.set(serviciosRef.current, { pointerEvents: "auto" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalDuration}`,
          pin: true,
          pinSpacing: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      // 🟥 FASE 1 — Cerrar cortinas
      tl.to(leftCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0)
        .to(rightCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0);

      // 🟩 FASE 2 — Abrir cortinas
      tl.to(leftCol, { xPercent: -100, ease: "power2.in", duration: 0.5 }, 0.5)
        .to(rightCol, { xPercent: 100, ease: "power2.in", duration: 0.5 }, 0.5);

      // Tras abrir cortinas, permitir interacción con el contenido
      tl.set(serviciosRef.current, { pointerEvents: "none" }, 0.5);

      //  Revelar contenido (Stride → Team → Contact)
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          ease: "power2.out",
          duration: 0.5,
        },
        0.5
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* HERO */}
      <div className="relative h-[70vh] sm:h-[75vh] md:h-screen z-0">
        <Hero />
      </div>

      {/* CONTENIDO INTERPUESTO */}
      {/* Desktop: absolute para superposición | Móvil: flujo normal */}
      <div
        ref={contentRef}
        className="absolute top-0 left-0 right-0 w-full z-10"
      >
        <StrideTogether />
        <Team />
      </div>

      {/* CORTINAS (SERVICIOS) */}
      {/* Solo desktop */}
      <div
        ref={serviciosRef}
        className="absolute inset-0 z-20"
      >
        <Servicios variant="overlay" />
      </div>
    </div>
  );
}
