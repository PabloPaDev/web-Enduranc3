"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
	const { t } = useLanguage();
	const titleLines = (t("hero.title") as string).split("\n");

	return (
		<section aria-labelledby="hero-title" className="relative w-full h-screen overflow-hidden">
			{/* Background Image - Mantener siempre */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/End-3.jpg"
					alt="Atleta en entrenamiento, planificación deportiva profesional Enduranc3"
					fill
					sizes="100vw"
					className="object-cover object-[50%_45%] md:object-center"
					priority
					quality={100}
				/>
				{/* Overlay - Más sutil en móvil, completo en desktop */}
				<div className="absolute inset-0 bg-[#2B2B2B]/50 sm:bg-[#2B2B2B]/60 z-0"></div>
			</div>
			
			{/* Título - Arriba en móvil y desktop */}
			<div className="absolute inset-0 z-10 flex flex-col items-center justify-start px-4 sm:px-6 2xl:px-12 pt-28 sm:pt-28 md:pt-48">
				{/* Contenedor con max-w solo en ultrawide */}
				<div className="w-full max-w-full 2xl:max-w-content 2xl:mx-auto">
					<h1 id="hero-title" className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white text-center uppercase tracking-tight leading-tight">
						{titleLines.map((line: string, index: number) => (
							<span key={index}>
								{line}
								{index < titleLines.length - 1 && <br />}
							</span>
						))}
					</h1>
				</div>
			</div>
			
			{/* Descripción inferior derecha - Mantener estructura, ajustar posicionamiento */}
			<div className="absolute bottom-[22%] sm:bottom-0 right-0 z-10 p-4 sm:p-6 md:p-8 2xl:p-12 max-w-full sm:max-w-xl lg:max-w-2xl 2xl:max-w-text text-right">
				<p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl leading-relaxed text-white">
					<Image
						src="/images/logoEndurance.png"
						alt="Logo Enduranc3"
						width={140}
						height={42}
						sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, (max-width: 1280px) 180px, 200px"
						className="h-[1.2em] w-auto inline align-text-bottom mr-1 brightness-0 invert sm:w-[160px] md:w-[180px] lg:w-[180px] 2xl:w-[200px]"
						quality={100}
					/>{t("hero.description")}
				</p>
			</div>
		</section>
	);
}
