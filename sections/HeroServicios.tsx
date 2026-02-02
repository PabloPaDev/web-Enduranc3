"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Hero";
import Servicios from "./Servicios";
import Team from "./Team";

gsap.registerPlugin(ScrollTrigger);

export default function HeroServicios() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const serviciosRef = useRef<HTMLDivElement>(null);
	const heroRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		if (!containerRef.current || !serviciosRef.current) return;

		const triggerId = "hero-servicios-pin";

		const ctx = gsap.context(() => {
			const section = serviciosRef.current!.querySelector("section");
			const grid = section?.querySelector(".grid");
			if (!grid) return;

			const [leftCol, rightCol] = Array.from(grid.children) as HTMLElement[];

			const windowWidth = window.innerWidth || 1920;
			// Reducir duración en móvil para mejor experiencia
			const isMobile = windowWidth < 768;
			const totalDuration = isMobile ? windowWidth * 1.5 : windowWidth * 3;

			// Cortinas fuera inicialmente (Hero visible)
			gsap.set(leftCol, { xPercent: -100 });
			gsap.set(rightCol, { xPercent: 100 });

			// Cortinas activas al inicio
			gsap.set(serviciosRef.current, { pointerEvents: "auto" });

			const tl = gsap.timeline({
				scrollTrigger: {
					id: triggerId,
					trigger: containerRef.current,
					start: "top top",
					end: `+=${totalDuration}`,
					pin: true,
					pinSpacing: true,
					scrub: true,
					anticipatePin: 1,
				},
			});

			// FASE 1 — Cerrar cortinas (tapan Hero)
			tl.to(leftCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0)
				.to(rightCol, { xPercent: 0, ease: "power2.out", duration: 0.5 }, 0);

			// Ocultar Hero mientras cortinas cerradas
			if (heroRef.current) {
				tl.to(heroRef.current, { opacity: 0, duration: 0.01 }, 0.49);
			}

			// FASE 2 — Abrir cortinas (revelan Team que está detrás)
			tl.to(leftCol, { xPercent: -100, ease: "power2.in", duration: 0.5 }, 0.5)
				.to(rightCol, { xPercent: 100, ease: "power2.in", duration: 0.5 }, 0.5);

			// Tras abrir cortinas, desactivar pointer events para que Team reciba clicks
			tl.set(serviciosRef.current, { pointerEvents: "none" }, 0.5);
			tl.set(heroRef.current, { pointerEvents: "none" }, 0.5);
			tl.set(wrapperRef.current, { pointerEvents: "none" }, 1);
		}, containerRef);

		return () => {
			ScrollTrigger.getById(triggerId)?.kill();
			ctx.revert();
		};
	}, []);

	return (
		<>
			{/* Team - Fixed en el fondo, siempre visible detrás */}
			<div className="fixed inset-0 z-0">
				<Team />
			</div>

			{/* Wrapper con espaciado para el scroll */}
			<div ref={wrapperRef} className="relative z-10">
				{/* Container de animación */}
				<div ref={containerRef} className="relative h-screen">
					{/* HERO - Visible al inicio */}
					<div ref={heroRef} className="absolute inset-0">
						<Hero />
					</div>

					{/* CORTINAS (SERVICIOS) */}
					<div ref={serviciosRef} className="absolute inset-0 z-10">
						<Servicios variant="overlay" />
					</div>
				</div>
				
				{/* Anchor para navegación a Equipo - más altura en móvil para ver todas las tarjetas */}
				<div id="equipo" className="h-[150vh] sm:h-[120vh] md:h-screen pointer-events-none"></div>
			</div>
		</>
	);
}
