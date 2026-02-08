"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Bloque discreto de acompañamiento para Ciclo Activa.
 * No es un bot ni un chat: invita a leer contexto adicional si el usuario lo desea.
 * Solo toggle de estado; texto estático, sin APIs ni animaciones llamativas.
 */
export default function CicloActivaAccompaniment() {
	const { t } = useLanguage();
	const [expanded, setExpanded] = useState(false);

	return (
		<section
			aria-label={t("mujer.accompaniment.ariaLabel")}
			className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/15"
		>
			{!expanded ? (
				<button
					type="button"
					onClick={() => setExpanded(true)}
					className="w-full text-left text-white/80 text-sm sm:text-base leading-relaxed hover:text-ciclo-activa transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B] rounded"
				>
					{t("mujer.accompaniment.invite")}
				</button>
			) : (
				<div className="space-y-4">
					<p className="text-white/85 text-sm sm:text-base leading-relaxed">
						{t("mujer.accompaniment.body")}
					</p>
					<button
						type="button"
						onClick={() => setExpanded(false)}
						className="text-white/60 text-sm hover:text-ciclo-activa transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B] rounded"
					>
						{t("mujer.accompaniment.close")}
					</button>
				</div>
			)}
		</section>
	);
}
