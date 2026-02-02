"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
	variant?: "normal" | "overlay";
};

export default function Servicios({ variant = "normal" }: Props) {
	const { t } = useLanguage();
	const titleLines = (t("servicios.title") as string).split("\n");
	const isOverlay = variant === "overlay";

	return (
		<section
			id="servicios"
			className={`text-white ${
				isOverlay ? "h-screen overflow-hidden bg-transparent" : "bg-[#2B2B2B]"
			}`}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 h-full">
				<div className={`relative overflow-hidden ${isOverlay ? "h-full" : "min-h-[900px]"}`}>
					<Image
						src="/images/End-5.jpg"
						alt="Runner"
						fill
						className="object-cover"
						quality={100}
					/>
					<div className="absolute inset-0 bg-[#2B2B2B]/50 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
						<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
							{t("servicios.atletas")}
						</h2>
						<p className="text-white/90">
							{t("servicios.llevadosNivel")}
						</p>
					</div>
				</div>

				<div className={`bg-[#2B2B2B] flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 ${isOverlay ? "h-full" : "min-h-[900px]"}`}>
					<h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
						{titleLines.map((line: string, i: number) => (
							<span key={i}>
								{line}
								{i < titleLines.length - 1 && <br />}
							</span>
						))}
					</h2>

					<p className="text-white/80 mb-6 sm:mb-8 text-center text-base sm:text-lg">
						{t("servicios.description")}
					</p>

					<Link
						href="/services"
						className="border-2 border-[#E10613] px-6 py-3 rounded-lg hover:bg-[#E10613]/10 transition"
					>
						{t("servicios.button")}
					</Link>
				</div>
			</div>
		</section>
	);
}
