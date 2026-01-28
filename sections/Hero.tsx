"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
	const { t } = useLanguage();
	const titleLines = t("hero.title").split("\n");

	return (
		<section className="relative w-full h-screen overflow-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/End-3.jpg"
					alt="Athlete hero"
					fill
					className="object-cover"
					priority
					quality={100}
				/>
				<div className="absolute inset-0 bg-[#2B2B2B]/60 z-0"></div>
			</div>
			<div className="absolute inset-0 z-10 flex flex-col items-center justify-start px-6 pt-16 md:pt-48">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center uppercase tracking-tight">
					{titleLines.map((line, index) => (
						<span key={index}>
							{line}
							{index < titleLines.length - 1 && <br />}
						</span>
					))}
				</h1>
			</div>
			<div className="absolute bottom-0 right-0 z-10 p-6 md:p-8 max-w-xl lg:max-w-2xl text-right">
				<p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-white">
					<Image
						src="/images/logoEndurance.png"
						alt="Enduranc3"
						width={180}
						height={54}
						className="h-[1.2em] w-auto inline align-text-bottom mr-1"
						quality={100}
					/>{t("hero.description")}
				</p>
			</div>
		</section>
	);
}
