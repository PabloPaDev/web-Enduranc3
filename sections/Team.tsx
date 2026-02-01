"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);
	const { t } = useLanguage();

	return (
		<section id="equipo" className="bg-[#E10613] text-white pt-8 pb-16 md:pt-12 md:pb-24 scroll-mt-20">
			<div className="container mx-auto px-6">
				<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 md:mb-8">
					{t("team.title")}
				</h2>
				<p className="text-white/90 text-lg md:text-xl text-center max-w-3xl mx-auto mb-12 md:mb-16">
					{t("team.description")}
				</p>
				
				<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{/* Tarjeta 1 - Carlos Cabrera López */}
					<div
						className="h-96 md:h-[500px]"
						style={{ perspective: "1000px" }}
						onMouseEnter={() => setHoveredCard(1)}
						onMouseLeave={() => setHoveredCard(null)}
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
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-white/10 backdrop-blur-sm"
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
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-6"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase">
									{t("team.carlos.name")}
								</h3>
								<div className="w-24 border-t-4 border-[#E10613] mb-4"></div>
								<ul className="text-white/90 text-sm md:text-base space-y-2.5 list-none pl-0">
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
						className="h-96 md:h-[500px]"
						style={{ perspective: "1000px" }}
						onMouseEnter={() => setHoveredCard(2)}
						onMouseLeave={() => setHoveredCard(null)}
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
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-white/10 backdrop-blur-sm"
								style={{ backfaceVisibility: "hidden" }}
							>
								<Image
									src="/images/E-2.jpg"
									alt="Carlos Cabrera López"
									fill
									className="object-cover"
									quality={100}
								/>
							</div>
							
							{/* Cara trasera - Descripción */}
							<div
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-6"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase">
									{t("team.chantal.name")}
								</h3>
								<div className="w-24 border-t-4 border-[#E10613] mb-4"></div>
								<ul className="text-white/90 text-sm md:text-base space-y-2.5 list-none pl-0">
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
						className="h-96 md:h-[500px]"
						style={{ perspective: "1000px" }}
						onMouseEnter={() => setHoveredCard(3)}
						onMouseLeave={() => setHoveredCard(null)}
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
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-white/10 backdrop-blur-sm"
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
								className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-6"
								style={{
									backfaceVisibility: "hidden",
									transform: "rotateY(180deg)",
								}}
							>
								<h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase">
									{t("team.eva.name")}
								</h3>
								<div className="w-24 border-t-4 border-[#E10613] mb-4"></div>
								<ul className="text-white/90 text-sm md:text-base space-y-2.5 list-none pl-0">
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
