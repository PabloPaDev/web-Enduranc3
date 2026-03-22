"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CicloActivaSolucionSection() {
	const { t } = useLanguage();

	return (
		<section
			className="relative isolate w-full min-h-[min(85vh,52rem)] bg-ciclo-activa text-white py-20 sm:py-24 px-4 sm:px-6"
			aria-labelledby="ciclo-activa-solucion-heading"
		>
			<div
				className="absolute inset-x-0 bottom-0 z-0 pointer-events-none select-none flex justify-start items-end overflow-hidden"
				aria-hidden
			>
				<div className="relative h-[min(62vh,32rem)] w-[min(100vw,42rem)] sm:h-[min(66vh,36rem)] sm:w-[min(100vw,52rem)] md:h-[min(72vh,40rem)] md:w-[min(100vw,64rem)] -translate-x-10 sm:-translate-x-16 md:-translate-x-24">
					<Image
						src="/images/linea-bici2.png"
						alt=""
						fill
						sizes="(max-width: 768px) 100vw, 64rem"
						className="object-contain object-bottom object-left"
						quality={100}
					/>
				</div>
			</div>
			<div className="relative z-10 mx-auto w-full max-w-3xl md:max-w-4xl text-center space-y-5 sm:space-y-6 md:space-y-7">
				<h2
					id="ciclo-activa-solucion-heading"
					className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.45),0_2px_12px_rgba(0,0,0,0.3)]"
				>
					{t("mujer.solucion.title")}
				</h2>
				<div className="space-y-4 sm:space-y-5 text-base sm:text-lg md:text-xl text-white/95 font-normal leading-relaxed">
					<p>{t("mujer.solucion.p1")}</p>
					<p>{t("mujer.solucion.p2")}</p>
					<p>{t("mujer.solucion.p3")}</p>
					<p>{t("mujer.solucion.p4")}</p>
				</div>
				<p className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed max-w-2xl mx-auto pt-1">
					{t("mujer.solucion.purpose")}
				</p>
				<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white leading-snug pt-3 sm:pt-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.45),0_1px_4px_rgba(0,0,0,0.35)]">
					<span className="block">{t("mujer.solucion.closingLine1")}</span>
					<span className="block mt-2 sm:mt-3">{t("mujer.solucion.closingLine2")}</span>
				</p>
			</div>
		</section>
	);
}
