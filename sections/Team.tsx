"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Team() {
	const [expandedCard, setExpandedCard] = useState<number | null>(null);
	const { t } = useLanguage();

	const toggleCard = (cardId: number) => {
		setExpandedCard(expandedCard === cardId ? null : cardId);
	};

	const teamMembers = [
		{
			id: 1,
			name: t("team.carlos.name"),
			items: t("team.carlos.items"),
			image: "/images/E-1.jpg"
		},
		{
			id: 2,
			name: t("team.chantal.name"),
			items: t("team.chantal.items"),
			image: "/images/E-2.jpg"
		},
		{
			id: 3,
			name: t("team.eva.name"),
			items: t("team.eva.items"),
			image: "/images/E-3.jpeg"
		}
	];

	return (
		<section className="bg-[#E10613] text-white min-h-screen flex items-center py-4 sm:py-12 md:py-12">
			<div className="container mx-auto px-2 sm:px-6 w-full">
				<h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-1 sm:mb-6 md:mb-8">
					{t("team.title")}
				</h2>
				<p className="text-white/90 text-[9px] sm:text-base md:text-xl text-center max-w-3xl mx-auto mb-2 sm:mb-8 md:mb-16 px-1 leading-tight">
					{t("team.description")}
				</p>
				
				{/* Móvil: vertical, Desktop: 3 columnas */}
				<div className="flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
					{teamMembers.map((member) => {
						const isFlipped = expandedCard === member.id;
						return (
							<div
								key={member.id}
								className="cursor-pointer"
								onClick={() => toggleCard(member.id)}
							>
								{/* Móvil: Tarjeta con flip */}
								<div
									className="md:hidden h-[20vh] sm:h-[22vh]"
									style={{ perspective: "1000px" }}
								>
									<div
										className="relative w-full h-full transition-transform duration-500 ease-out"
										style={{
											transformStyle: "preserve-3d",
											transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
										}}
									>
										{/* Cara frontal - Foto */}
										<div
											className="absolute inset-0 w-full h-full rounded-md overflow-hidden shadow-lg"
											style={{ backfaceVisibility: "hidden" }}
										>
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover object-center"
												quality={100}
											/>
											{/* Nombre en la parte inferior */}
											<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1.5">
												<p className="text-white text-[8px] sm:text-[10px] font-bold text-center truncate">
													{member.name.split(" ")[0]}
												</p>
											</div>
										</div>
										
										{/* Cara trasera - Info */}
										<div
											className="absolute inset-0 w-full h-full rounded-md overflow-hidden bg-[#2B2B2B] flex flex-col p-2.5 shadow-lg"
											style={{
												backfaceVisibility: "hidden",
												transform: "rotateY(180deg)",
											}}
										>
											<h3 className="text-[11px] font-bold text-white mb-1 uppercase">
												{member.name}
											</h3>
											<div className="w-8 border-t border-[#E10613] mb-1.5"></div>
											<ul className="text-white/90 text-[10px] space-y-0.5 list-none pl-0 leading-snug flex-1">
												{(Array.isArray(member.items) ? member.items : []).map((item: string, index: number) => (
													<li key={index} className="flex items-start">
														<span className="text-[#E10613] mr-1 flex-shrink-0">•</span>
														<span className="line-clamp-2">{item}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Vista Desktop - Tarjetas con flip */}
								<div
									className="hidden md:block h-[500px]"
									style={{ perspective: "1000px" }}
									onMouseEnter={() => setExpandedCard(member.id)}
									onMouseLeave={() => setExpandedCard(null)}
								>
									<div
										className="relative w-full h-full transition-transform duration-500"
										style={{
											transformStyle: "preserve-3d",
											transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
										}}
									>
										{/* Cara frontal */}
										<div
											className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
											style={{ backfaceVisibility: "hidden" }}
										>
											<Image
												src={member.image}
												alt={member.name}
												fill
												className="object-cover object-center"
												quality={100}
											/>
										</div>
										
										{/* Cara trasera */}
										<div
											className="absolute inset-0 w-full h-full rounded-lg overflow-hidden border-2 border-[#E10613] bg-[#2B2B2B] flex flex-col items-start justify-start p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
											style={{
												backfaceVisibility: "hidden",
												transform: "rotateY(180deg)",
											}}
										>
											<h3 className="text-2xl font-bold text-white mb-2 uppercase">
												{member.name}
											</h3>
											<div className="w-20 border-t-4 border-[#E10613] mb-3"></div>
											<ul className="text-white/90 text-base space-y-2 list-none pl-0 leading-snug">
												{(Array.isArray(member.items) ? member.items : []).map((item: string, index: number) => (
													<li key={index} className="flex items-start">
														<span className="text-[#E10613] mr-2">•</span>
														<span>{item}</span>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
