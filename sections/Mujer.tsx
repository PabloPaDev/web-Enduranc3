"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Mujer() {
	const { t } = useLanguage();

	return (
		<section
			id="mujer"
			className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
		>
			<div className="absolute inset-0">
				<Image
					src="/images/End-1.jpg"
					alt="Imagen de fondo, sección Ciclo Activa — entrenamiento y fisiología femenina"
					fill
					sizes="100vw"
					className="object-cover object-center"
					priority
					quality={100}
				/>
				<div className="absolute inset-0 bg-black/40" />
			</div>
			<div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 py-12 text-center">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight max-w-2xl mx-auto">
					{t("mujer.hero.headline")}
				</h1>
				<p className="mt-4 sm:mt-5 text-white/85 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto">
					{t("mujer.hero.subline")}
				</p>
				<p className="mt-8 sm:mt-10">
					<span className="inline-block px-4 py-2 rounded-full bg-ciclo-activa text-white text-sm sm:text-base tracking-wide border border-ciclo-activa/50 backdrop-blur-sm">
						{t("mujer.hero.cta")}
					</span>
				</p>
				<div className="mt-4 sm:mt-5 flex flex-col items-center gap-2">
					<p className="text-white/80 text-sm sm:text-base text-center">
						{t("mujer.hero.instagram")}
					</p>
					<a
						href="https://www.instagram.com/ciclo_activa?igsh=MWc0NWI0ZWNyd2VjbA=="
						target="_blank"
						rel="noopener noreferrer"
						className="text-white/80 hover:text-ciclo-activa transition-colors"
						aria-label={t("mujer.hero.instagram")}
					>
						<svg
							className="w-6 h-6 sm:w-7 sm:h-7"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden
						>
							<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
