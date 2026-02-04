"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Ancho por debajo del cual se considera móvil (mismo criterio que Tailwind md:) */
const MOBILE_BREAKPOINT = 768;

/**
 * Al cargar o recargar la página, SIEMPRE se vuelve al Hero (scroll top).
 * En móvil se refuerza con más intentos y scroll en html/body para evitar
 * que el navegador restaure la posición.
 * - Quita el hash para que no se haga scroll a #equipo u otra sección.
 * - Desactiva la restauración de scroll del navegador (importante en móvil).
 */
function forceScrollToHero() {
	window.scrollTo(0, 0);
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

export default function ScrollToHero() {
	const pathname = usePathname();

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Evitar que el navegador restaure la posición de scroll al recargar
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		// Quitar hash para que nada haga scroll a otra sección
		if (window.location.hash) {
			window.history.replaceState(null, "", window.location.pathname + window.location.search);
		}

		const isMobile = window.innerWidth < MOBILE_BREAKPOINT;

		// Inmediato
		forceScrollToHero();

		// En móvil: más intentos y más tarde para ganar al restore del navegador
		const delays = isMobile ? [0, 50, 150, 300, 500, 800, 1200] : [50, 200];
		const timeouts = delays.map((ms) => setTimeout(forceScrollToHero, ms));

		return () => timeouts.forEach((t) => clearTimeout(t));
	}, [pathname]);

	return null;
}
