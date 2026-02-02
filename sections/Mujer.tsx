"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Mujer() {
	const { t } = useLanguage();

	return (
		<section
			id="mujer"
			className="relative flex-1 text-white bg-cover bg-center bg-no-repeat min-h-screen"
			style={{ backgroundImage: "url('/images/End-1.jpg')" }}
		>
			<div className="absolute inset-0 bg-black/50" />
			
			{/* Contenedor para móvil: centrado. Desktop: abajo derecha */}
			<div className="absolute inset-0 flex items-end justify-center md:justify-end p-4 sm:p-6 md:p-8 pb-8 sm:pb-12 md:pb-16">
				<div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl text-center md:text-right bg-black/30 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-lg">
					<p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug">
						{t("mujer.description")}
					</p>
					<div className="mt-4 sm:mt-6">
						<button
							type="button"
							className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 rounded-md transition-colors text-sm sm:text-base"
						>
							{t("mujer.button")}
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
