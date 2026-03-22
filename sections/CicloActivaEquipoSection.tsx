"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type WorkflowStep = { n: string; title: string; text: string };

export default function CicloActivaEquipoSection() {
	const { t } = useLanguage();
	const steps = t("mujer.equipo.workflowSteps") as unknown as WorkflowStep[];
	const stepList = Array.isArray(steps) ? steps : [];

	return (
		<section
			className="relative isolate w-full overflow-hidden bg-ciclo-activa text-white py-20 sm:py-28 px-4 sm:px-6"
			aria-labelledby="ciclo-activa-equipo-heading"
		>
			<div
				className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden"
				aria-hidden
			>
				<Image
					src="/images/nadar.png"
					alt=""
					fill
					sizes="100vw"
					className="object-contain object-top object-left md:object-center scale-[1.18] origin-top-left md:origin-top md:scale-100"
					quality={100}
				/>
			</div>
			<div className="relative z-10 mx-auto max-w-xl md:max-w-2xl text-center">
				<h2
					id="ciclo-activa-equipo-heading"
					className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_12px_rgba(0,0,0,0.3)]"
				>
					{t("mujer.equipo.title")}
				</h2>
				<div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed">
					<p>{t("mujer.equipo.p1")}</p>
					<p>{t("mujer.equipo.p2")}</p>
				</div>

				<ol className="mt-12 sm:mt-14 list-none p-0 m-0 space-y-10 sm:space-y-12 text-left">
					{stepList.map((step) => (
						<li key={step.n} className="space-y-2 sm:space-y-2.5">
							<p className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug [text-shadow:0_1px_2px_rgba(0,0,0,0.4),0_2px_10px_rgba(0,0,0,0.25)]">
								{step.n}
								{" — "}
								{step.title}
							</p>
							<p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
								{step.text}
							</p>
						</li>
					))}
				</ol>

				<p className="mt-14 sm:mt-16 text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed">
					{t("mujer.equipo.value")}
				</p>
				<p className="mt-10 sm:mt-12 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white leading-snug [text-shadow:0_2px_12px_rgba(0,0,0,0.45),0_1px_4px_rgba(0,0,0,0.35)]">
					<span className="block">{t("mujer.equipo.closingLine1")}</span>
					<span className="block mt-2 sm:mt-3">{t("mujer.equipo.closingLine2")}</span>
				</p>
			</div>
		</section>
	);
}
