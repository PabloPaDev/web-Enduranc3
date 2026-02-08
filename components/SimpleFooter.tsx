"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import FooterDeveloperCredit from "./FooterDeveloperCredit";

export default function SimpleFooter() {
	const { t } = useLanguage();

	return (
		<footer className="bg-[#2B2B2B] text-white py-8">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
					<div>
						<h3 className="font-bold text-white mb-2 text-lg">Endurance3</h3>
						<p className="text-white/70 text-sm leading-relaxed">
							{t("footer.description")}
						</p>
						<p className="text-white/50 text-sm mt-1 leading-snug">
							{t("footer.basedIn")}
						</p>
					</div>
					
					<div>
						<h3 className="font-bold text-white mb-2 text-lg">{t("footer.servicios")}</h3>
						<ul className="space-y-1">
							<li>
								<Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.entrenamientoOnline")}
								</Link>
							</li>
							<li>
								<Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.presencial")}
								</Link>
							</li>
							<li>
								<Link href="/services" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.valoraciones")}
								</Link>
							</li>
						</ul>
					</div>
					
					<div>
						<h3 className="font-bold text-white mb-2 text-lg">{t("footer.empresa")}</h3>
						<ul className="space-y-1">
							<li>
								<Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.sobreNosotros")}
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.blog")}
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.contacto")}
								</Link>
							</li>
						</ul>
					</div>
					
					<div>
						<h3 className="font-bold text-white mb-2 text-lg">{t("footer.legal")}</h3>
						<ul className="space-y-1">
							<li>
								<Link href="/privacidad" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.privacidad")}
								</Link>
							</li>
							<li>
								<Link href="/terminos" className="text-white/70 hover:text-white text-sm transition-colors">
									{t("footer.terminos")}
								</Link>
							</li>
						</ul>
					</div>
				</div>
				
				<div className="border-t border-gray-700 pt-6">
					<p className="text-white/70 text-sm text-center">
						© {new Date().getFullYear()} Endurance3. {t("footer.copyright")}
					</p>
					<FooterDeveloperCredit />
				</div>
			</div>
		</footer>
	);
}
