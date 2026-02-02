"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Mujer() {
	const { t } = useLanguage();

	return (
		<section
			id="mujer"
			className="relative flex-1 text-white bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: "url('/images/End-1.jpg')" }}
		>
			<div className="absolute inset-0 bg-black/50" />
			<div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-8 md:right-12 w-full max-w-2xl text-right bg-black/30 backdrop-blur-sm p-6 sm:p-8 rounded-lg">
					<p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
						{t("mujer.description")}
					</p>
					<div className="mt-6">
						<button
							type="button"
							className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
						>
							{t("mujer.button")}
						</button>
					</div>
			</div>
		</section>
	);
}
