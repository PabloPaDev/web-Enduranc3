"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Ancho por debajo del cual se considera móvil (mismo criterio que Tailwind md:) */
const MOBILE_BREAKPOINT = 768;

function forceScrollToTop() {
	window.scrollTo(0, 0);
	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

function scrollToSection(sectionId: string) {
	const el = document.getElementById(sectionId);
	if (el) {
		el.scrollIntoView({ behavior: "smooth", block: "start" });
	}
}

/**
 * - En carga/recarga sin hash: va al hero (scroll top).
 * - Si se navega a / con hash (ej. desde otra página con "Equipo" o "Contacto"): hace scroll a esa sección.
 * - En el resto de páginas: scroll al inicio de la nueva página.
 */
export default function ScrollToHero() {
	const pathname = usePathname();

	useEffect(() => {
		if (typeof window === "undefined") return;

		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		const hash = window.location.hash.replace("#", "");

		if (pathname === "/" && hash) {
			// Navegación a home con sección: ir a esa sección (ej. desde /blog clic en "Equipo")
			const delay = setTimeout(() => scrollToSection(hash), 100);
			return () => clearTimeout(delay);
		}

		// Sin hash en / o en otra página: ir al inicio
		if (pathname !== "/" || !hash) {
			if (window.location.hash) {
				window.history.replaceState(null, "", pathname + window.location.search);
			}
			forceScrollToTop();
			const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
			const delays = isMobile ? [100, 250, 500, 800] : [100, 300];
			const timeouts = delays.map((ms) => setTimeout(forceScrollToTop, ms));
			return () => timeouts.forEach((t) => clearTimeout(t));
		}
	}, [pathname]);

	return null;
}
