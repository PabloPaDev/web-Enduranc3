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

		const ctx = gsap.context(() => {
				const section = serviciosRef.current!.querySelector("section");
				const grid = section?.querySelector(".grid");
				if (!grid) return;

				const [leftCol, rightCol] = Array.from(grid.children) as HTMLElement[];

				// Obtener el ancho de la ventana
				const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1920;
				
				// Duración total del efecto (cierre + apertura)
				const totalDuration = windowWidth * 2;

				// Cortinas fuera al inicio (completamente ocultas)
				gsap.set(leftCol, { xPercent: -100 });
				gsap.set(rightCol, { xPercent: 100 });

				// Contenido oculto inicialmente (se revelará cuando las cortinas se abran)
				const content = contentRef.current;
				
				
				if (content) {
					// Posicionar el contenido de manera absoluta durante la animación para superponerse con el Hero
					gsap.set(content, { 
						opacity: 0,
						zIndex: 10
					});
				}

				// Timeline con dos fases: cierre y apertura de cortinas
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

				// FASE 1: Cierre de cortinas (tapando el Hero)
				// Las cortinas se mueven desde fuera hacia el centro (0% a 50% del timeline)
				tl.to(leftCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0)
					.to(rightCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0);

				// FASE 2: Apertura de cortinas (revelando StrideTogether y Team)
				// Las cortinas se mueven desde el centro hacia fuera (50% a 100% del timeline)
				tl.to(leftCol, { xPercent: -100, ease: "power2.in", duration: 0.5 }, 0.5)
					.to(rightCol, { xPercent: 100, ease: "power2.in", duration: 0.5 }, 0.5);

				// Revelar el contenido cuando las cortinas se abren
				if (content) {
					tl.to(content, { 
						opacity: 1,
						zIndex: 10,
						ease: "power2.out", 
						duration: 0.5 
					}, 0.5);
				}

			}, containerRef);

		return () => ctx.revert();
	}, []);

	return (
		<>
			<div ref={containerRef} className="relative">
				{/* Hero - fondo fijo */}
				<div className="relative h-screen z-0">
					<Hero />
				</div>

				{/* Contenido que se revela cuando las cortinas se abren (StrideTogether y Team) */}
				{/* Este contenido está oculto inicialmente y se revela cuando las cortinas se abren */}
				<div ref={contentRef} className="absolute top-0 left-0 right-0 w-full z-10">
					<StrideTogether />
					<Team />
				</div>

				{/* Cortinas (Servicios) - se mueven tapando y luego revelando */}
				<div ref={serviciosRef} className="absolute inset-0 z-20 pointer-events-none">
					<Servicios variant="overlay" />
				</div>
			</div>
		</>
	);
}
