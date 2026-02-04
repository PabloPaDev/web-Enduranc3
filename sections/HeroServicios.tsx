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
			const isMobile = windowWidth < 768;
			const totalDuration = isMobile ? windowWidth * 3 : windowWidth * 3;

			// Cortinas fuera de la vista: izquierda a la izquierda (-50vw), derecha a la derecha (+50vw). Solo movimiento horizontal.
			const offLeft = "-50vw";
			const offRight = "50vw";
			gsap.set(leftCol, { x: offLeft, y: 0, force3D: true });
			gsap.set(rightCol, { x: offRight, y: 0, force3D: true });

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
					// Más scrub en móvil para que el final no pegue un golpe
					scrub: isMobile ? 2 : 1.5,
					anticipatePin: 1,
					onUpdate: (self) => {
						const el = serviciosRef.current;
						const wrapper = wrapperRef.current;
						if (el) {
							el.style.visibility = self.progress >= 0.98 ? "hidden" : "visible";
						}
						// Desde que se abren las cortinas (0.6), el wrapper no captura toques para que en móvil las tarjetas del Team reciban el tap
						if (wrapper) {
							wrapper.style.pointerEvents = self.progress >= 0.6 ? "none" : "auto";
						}
					},
				},
			});

			const easeCurtain = "none";
			const closeDuration = 0.35;

			// FASE 1 — Cerrar: cortinas entran desde los lados (de -50vw/50vw a 0)
			tl.to(leftCol, { x: 0, y: 0, ease: easeCurtain, duration: closeDuration }, 0)
				.to(rightCol, { x: 0, y: 0, ease: easeCurtain, duration: closeDuration }, 0);

			// Ocultar Hero cuando cortinas están cerradas
			if (heroRef.current) {
				tl.to(heroRef.current, { opacity: 0, duration: 0.01 }, closeDuration - 0.01);
			}

			// Abrir un poco antes y terminar antes del 1: así las cortinas ya están fuera cuando llega el final y no hay golpe
			const openStart = 0.6;
			const openDuration = 0.32;
			// Ease out: frenan al salir, no llegan a “golpe” al final
			const easeOpen = "power2.out";

			// FASE 2 — Abrir: cortinas salen por los lados con ease out (suave al final)
			tl.to(leftCol, { x: offLeft, y: 0, ease: easeOpen, duration: openDuration }, openStart)
				.to(rightCol, { x: offRight, y: 0, ease: easeOpen, duration: openDuration }, openStart);

			tl.set(serviciosRef.current, { pointerEvents: "none" }, openStart);
			tl.set(heroRef.current, { pointerEvents: "none" }, openStart);
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

					{/* CORTINAS (SERVICIOS): overflow para que salgan por los lados sin artefactos */}
					<div ref={serviciosRef} className="absolute inset-0 z-10 overflow-hidden">
						<Servicios variant="overlay" />
					</div>
				</div>
				
				{/* Anchor para navegación a Equipo - más altura en móvil para ver todas las tarjetas */}
				<div id="equipo" className="h-[85vh] sm:h-[80vh] md:h-screen pointer-events-none"></div>
			</div>
		</>
	);
}
