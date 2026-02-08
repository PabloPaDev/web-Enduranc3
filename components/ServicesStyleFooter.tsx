"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import FooterDeveloperCredit from "./FooterDeveloperCredit";

/**
 * Footer con el mismo estilo que la página de Servicios:
 * logo centrado, línea, grid 4 columnas, copyright y crédito desarrollador.
 */
export default function ServicesStyleFooter() {
	const { t } = useLanguage();

	return (
		<footer className="relative z-10 bg-[#2B2B2B] text-white">
			<div className="container mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-6">
				<div className="flex justify-center mb-2 sm:mb-4">
					<Image
						src="/images/logoEndurance.png"
						alt="Enduranc3 Logo"
						width={250}
						height={80}
						sizes="(max-width: 640px) 120px, 300px"
						className="h-auto brightness-0 invert w-[120px] sm:w-[300px]"
						quality={100}
					/>
				</div>

				<div className="w-full h-px bg-white/30 mb-2 sm:mb-4" />

				<div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-2 sm:mb-4 text-[8px] sm:text-sm max-w-4xl mx-auto">
					<div>
						<h4 className="font-bold text-white mb-0.5 sm:mb-1">Endurance3</h4>
						<p className="text-white/60 leading-snug">
							{t("footer.description")}
						</p>
						<p className="text-white/50 mt-1 leading-snug">
							{t("footer.basedIn")}
						</p>
					</div>
					<div>
						<h4 className="font-bold text-white mb-0.5 sm:mb-1">{t("footer.servicios")}</h4>
						<ul className="space-y-0 sm:space-y-0.5 text-white/60">
							<li><Link href="/services#entrenamiento-online" className="hover:text-white">{t("footer.entrenamientoOnline")}</Link></li>
							<li><Link href="/services#testing" className="hover:text-white">Testing</Link></li>
							<li><Link href="/services#gestion-clubes" className="hover:text-white">{t("footer.valoraciones")}</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold text-white mb-0.5 sm:mb-1">{t("footer.empresa")}</h4>
						<ul className="space-y-0 sm:space-y-0.5 text-white/60">
							<li><Link href="/about" className="hover:text-white">{t("footer.sobreNosotros")}</Link></li>
							<li><Link href="/blog" className="hover:text-white">{t("footer.blog")}</Link></li>
							<li><Link href="/#contacto" className="hover:text-white">{t("footer.contacto")}</Link></li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold text-white mb-0.5 sm:mb-1">{t("footer.legal")}</h4>
						<ul className="space-y-0 sm:space-y-0.5 text-white/60">
							<li><Link href="/privacidad" className="hover:text-white">{t("footer.privacidad")}</Link></li>
							<li><Link href="/terminos" className="hover:text-white">{t("footer.terminos")}</Link></li>
						</ul>
					</div>
				</div>

				<p className="text-white/40 text-[7px] sm:text-xs text-center">
					© {new Date().getFullYear()} Endurance3. {t("footer.copyright")}
				</p>
				<FooterDeveloperCredit />
			</div>
		</footer>
	);
}
