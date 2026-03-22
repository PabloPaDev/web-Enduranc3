"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CicloActivaProblemaSection() {
	const { t } = useLanguage();
	const issues = t("mujer.problema.issues") as unknown as string[];
	const list = Array.isArray(issues) ? issues : [];

	return (
		<section
			className="relative w-full min-h-screen overflow-hidden bg-ciclo-activa text-white flex items-center justify-center px-4 sm:px-6 pt-16 pb-8 sm:py-16 md:py-24"
			aria-labelledby="ciclo-activa-problema-heading"
		>
			<div
				className="absolute inset-0 z-0 pointer-events-none select-none"
				aria-hidden
			>
				<Image
					src="/images/lineacorre.png"
					alt=""
					fill
					sizes="100vw"
					className="object-contain object-center sm:object-right"
					quality={100}
				/>
			</div>
			<div className="relative z-10 w-full max-w-3xl md:max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
				<h2
					id="ciclo-activa-problema-heading"
					className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_12px_rgba(0,0,0,0.3)]"
				>
					{t("mujer.problema.title")}
				</h2>
				<div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed">
					<p>{t("mujer.problema.p1")}</p>
					<p>{t("mujer.problema.p2")}</p>
					<div className="flex w-full justify-center px-2 sm:px-0 pt-1">
						<ul className="mt-1 w-full max-w-md sm:max-w-lg list-none space-y-2.5 sm:space-y-3 p-0 m-0 text-left">
							{list.map((item) => (
								<li
									key={item}
									className="grid grid-cols-[1.5rem_1fr] sm:grid-cols-[1.75rem_1fr] gap-x-3 sm:gap-x-4 items-start leading-relaxed"
								>
									<span
										className="text-white/50 shrink-0 text-center sm:text-right select-none pt-[0.12em]"
										aria-hidden
									>
										—
									</span>
									<span className="min-w-0 text-left">{item}</span>
								</li>
							))}
						</ul>
					</div>
					<p>{t("mujer.problema.pMental")}</p>
				</div>
				<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white pt-2 sm:pt-3 leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.45),0_1px_4px_rgba(0,0,0,0.35)]">
					{t("mujer.problema.closing")}
				</p>
			</div>
		</section>
	);
}
