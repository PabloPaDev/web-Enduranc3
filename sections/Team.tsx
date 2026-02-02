"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const { t } = useLanguage();

	return (
		<section className="bg-[#E10613] text-white min-h-screen flex items-center py-6 sm:py-8 md:py-12">
			<div className="container mx-auto px-4 sm:px-6 w-full">
				<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-3 sm:mb-6 md:mb-8">
					{t("team.title")}
				</h2>
				<p className="text-white/90 text-sm sm:text-base md:text-xl text-center max-w-3xl mx-auto mb-4 sm:mb-8 md:mb-16 px-2">
					{t("team.description")}
				</p>
				
				{/* Scroll horizontal en móvil, grid en desktop */}
				<div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
					{/* Tarjeta 1 - Carlos Cabrera López */}
					<div
						className="min-w-[200px] w-[200px] sm:min-w-0 sm:w-auto h-[280px] sm:h-80 md:h-[500px] cursor-pointer snap-center flex-shrink-0 md:flex-shrink"
						style={{ perspective: "1000px" }}
						onPointerEnter={() => setHoveredCard(1)}
						onPointerLeave={() => setHoveredCard(null)}
						onMouseEnter={() => setHoveredCard(1)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => setHoveredCard(hoveredCard === 1 ? null : 1)}
						onFocus={() => setHoveredCard(1)}
						onBlur={() => setHoveredCard(null)}
						tabIndex={0}
					>
						<div
							className="relative w-full h-full transition-transform duration-500 cursor-pointer"
							style={{
								transformStyle: "preserve-3d",
								transform: hoveredCard === 1 ? "rotateY(180deg)" : "rotateY(0deg)",
							}}
						>
							{/* Cara frontal - Solo foto */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-white/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{ backfaceVisibility: "hidden" }}
							>
								<Image
									src="/images/E-1.jpg"
									alt="Carlos Cabrera López"
									fill
									className="object-cover"
									quality={100}
								/>
							</div>
							
							{/* Cara trasera - Descripción */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-4 sm:p-5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 uppercase">
									{t("team.carlos.name")}
								</h3>
								<div className="w-20 border-t-4 border-[#E10613] mb-3"></div>
								<ul className="text-white/90 text-[11px] sm:text-sm md:text-base space-y-1.5 sm:space-y-2 list-none pl-0 leading-snug">
									{(Array.isArray(t("team.carlos.items")) ? t("team.carlos.items") : []).map((item: string, index: number) => (
										<li key={index} className="flex items-start">
											<span className="text-[#E10613] mr-2">•</span>
											<span style={{ whiteSpace: "pre-line" }}>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Tarjeta 2 - Chantal */}
					<div
						className="min-w-[200px] w-[200px] sm:min-w-0 sm:w-auto h-[280px] sm:h-80 md:h-[500px] cursor-pointer snap-center flex-shrink-0 md:flex-shrink"
						style={{ perspective: "1000px" }}
						onPointerEnter={() => setHoveredCard(2)}
						onPointerLeave={() => setHoveredCard(null)}
						onMouseEnter={() => setHoveredCard(2)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => setHoveredCard(hoveredCard === 2 ? null : 2)}
						onFocus={() => setHoveredCard(2)}
						onBlur={() => setHoveredCard(null)}
						tabIndex={0}
					>
						<div
							className="relative w-full h-full transition-transform duration-500 cursor-pointer"
							style={{
								transformStyle: "preserve-3d",
								transform: hoveredCard === 2 ? "rotateY(180deg)" : "rotateY(0deg)",
							}}
						>
							{/* Cara frontal - Solo foto */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-white/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{ backfaceVisibility: "hidden" }}
							>
								<Image
									src="/images/E-2.jpg"
									alt="Chantal"
									fill
									className="object-cover"
									quality={100}
								/>
							</div>
							
							{/* Cara trasera - Descripción */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-4 sm:p-5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 uppercase">
									{t("team.chantal.name")}
								</h3>
								<div className="w-20 border-t-4 border-[#E10613] mb-3"></div>
								<ul className="text-white/90 text-[11px] sm:text-sm md:text-base space-y-1.5 sm:space-y-2 list-none pl-0 leading-snug">
									{(Array.isArray(t("team.chantal.items")) ? t("team.chantal.items") : []).map((item: string, index: number) => (
										<li key={index} className="flex items-start">
											<span className="text-[#E10613] mr-2">•</span>
											<span style={{ whiteSpace: "pre-line" }}>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Tarjeta 3 - Eva */}
					<div
						className="min-w-[200px] w-[200px] sm:min-w-0 sm:w-auto h-[280px] sm:h-80 md:h-[500px] cursor-pointer snap-center flex-shrink-0 md:flex-shrink"
						style={{ perspective: "1000px" }}
						onPointerEnter={() => setHoveredCard(3)}
						onPointerLeave={() => setHoveredCard(null)}
						onMouseEnter={() => setHoveredCard(3)}
						onMouseLeave={() => setHoveredCard(null)}
						onClick={() => setHoveredCard(hoveredCard === 3 ? null : 3)}
						onFocus={() => setHoveredCard(3)}
						onBlur={() => setHoveredCard(null)}
						tabIndex={0}
					>
						<div
							className="relative w-full h-full transition-transform duration-500 cursor-pointer"
							style={{
								transformStyle: "preserve-3d",
								transform: hoveredCard === 3 ? "rotateY(180deg)" : "rotateY(0deg)",
							}}
						>
							{/* Cara frontal - Solo foto */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-white/10 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{ backfaceVisibility: "hidden" }}
							>
								<Image
									src="/images/E-3.jpeg"
									alt="Eva"
									fill
									className="object-cover object-left-bottom"
									quality={100}
								/>
							</div>
							
							{/* Cara trasera - Descripción */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-4 sm:p-5 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-base sm:text-lg md:text-2xl font-bold text-white mb-2 uppercase">
									{t("team.eva.name")}
								</h3>
								<div className="w-20 border-t-4 border-[#E10613] mb-3"></div>
								<ul className="text-white/90 text-[11px] sm:text-sm md:text-base space-y-1.5 sm:space-y-2 list-none pl-0 leading-snug">
									{(Array.isArray(t("team.eva.items")) ? t("team.eva.items") : []).map((item: string, index: number) => (
										<li key={index} className="flex items-start">
											<span className="text-[#E10613] mr-2">•</span>
											<span style={{ whiteSpace: "pre-line" }}>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
