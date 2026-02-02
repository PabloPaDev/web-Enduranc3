"use client";

import { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import HeroServicios from "@/sections/HeroServicios";
import ContactSection from "@/sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const mainRef = useRef<HTMLDivElement>(null);
	const contactTextRef = useRef<HTMLDivElement>(null);

	// Manejar navegación con hash desde otras páginas
	useEffect(() => {
		const hash = window.location.hash;
		if (hash) {
			// Esperar a que las animaciones se inicialicen
			const timer = setTimeout(() => {
				const element = document.getElementById(hash.replace("#", ""));
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}, 100);
			return () => clearTimeout(timer);
		}
	}, []);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Animación de entrada suave para ContactSection
			if (contactTextRef.current) {
				gsap.from(contactTextRef.current, {
					opacity: 0,
					y: 60,
					ease: "power2.out",
					scrollTrigger: {
						trigger: contactTextRef.current.parentElement,
						start: "top 95%",
						end: "top 60%",
						scrub: 0.8,
					},
				});
			}
		}, mainRef);

		return () => ctx.revert();
	}, []);

	return (
		<main ref={mainRef} className="min-h-screen">
			<Header />
			<HeroServicios />
			
			{/* Contacto - pasa por encima de Team con parallax suave */}
			<div className="relative z-20">
				{/* Gradiente superior para transición suave */}
				<div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#2B2B2B] pointer-events-none" />
				
				<div className="bg-[#2B2B2B] rounded-t-3xl shadow-[0_-20px_50px_rgba(0,0,0,0.6)]">
					<div ref={contactTextRef}>
						<ContactSection />
					</div>
				</div>
			</div>
		</main>
	);
}
