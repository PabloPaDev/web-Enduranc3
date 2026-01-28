"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function StrideTogether() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { t } = useLanguage();

	return (
		<>
			<section className="relative bg-[#2B2B2B] text-white py-20 md:py-32">
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/End-6.png"
						alt="Background"
						fill
						className="object-cover"
						quality={100}
					/>
					<div className="absolute inset-0 bg-[#2B2B2B]/60"></div>
				</div>
				
				<div className="relative z-10 container mx-auto px-6">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
							{t("strideTogether.title")}
						</h2>
						<p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
							{t("strideTogether.description")}
						</p>
						<button
							onClick={() => setIsModalOpen(true)}
							className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
						>
							{t("strideTogether.button")}
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</section>

			{/* Modal */}
			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="bg-[#2B2B2B] border border-white/10 rounded-lg shadow-xl max-w-md w-full p-6 md:p-8 relative"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
						>
							<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
						<div className="text-center">
							<div className="w-16 h-16 mx-auto mb-4 bg-[#E10613]/20 rounded-full flex items-center justify-center">
								<svg className="w-8 h-8 text-[#E10613]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
								</svg>
							</div>
							<h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
								{t("strideTogether.modal.title")}
							</h3>
							<div className="w-16 h-1 bg-[#E10613] mx-auto mb-6"></div>
							<p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
								{t("strideTogether.modal.description1")}
							</p>
							<p className="text-white/80 text-sm md:text-base mb-6">
								{t("strideTogether.modal.description2")}
							</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
							>
								{t("strideTogether.modal.button")}
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
