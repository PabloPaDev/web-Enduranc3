"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const STORAGE_KEY = "ciclo-activa-accompaniment-minimized";

export default function CicloActivaPersistentAccompaniment() {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [isMinimized, setIsMinimized] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted || typeof window === "undefined") return;
		try {
			const stored = window.localStorage.getItem(STORAGE_KEY);
			setIsMinimized(stored === "true");
		} catch {
			// ignore
		}
	}, [mounted]);

	const handleClose = () => {
		setIsOpen(false);
		try {
			window.localStorage.setItem(STORAGE_KEY, "true");
			setIsMinimized(true);
		} catch {
			// ignore
		}
	};

	if (!mounted) return null;

	return (
		<div
			className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-0 max-w-[calc(100vw-3rem)]"
			aria-label={t("mujer.accompanimentPersistent.ariaLabel")}
			role="complementary"
		>
			{isOpen ? (
				<div className="w-full sm:w-80 rounded-2xl bg-[#2B2B2B] text-white shadow-lg border border-white/10 overflow-hidden">
					<div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10">
						<div className="flex items-center gap-2 min-w-0">
							<Image
								src="/images/Ciclo-Activa.png"
								alt=""
								width={28}
								height={28}
								className="shrink-0 rounded-full object-contain"
								aria-hidden
							/>
							<span className="text-sm font-medium text-white/95 truncate">
								{t("mujer.accompanimentPersistent.panelTitle")}
							</span>
						</div>
						<button
							type="button"
							onClick={handleClose}
							className="shrink-0 p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
							aria-label={t("mujer.accompanimentPersistent.close")}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div className="px-4 py-4">
						<p className="text-white/90 text-sm leading-relaxed">
							{t("mujer.accompanimentPersistent.panelBody")}
						</p>
						<button
							type="button"
							onClick={handleClose}
							className="mt-4 w-full py-2 text-sm text-white/70 hover:text-white/90 border border-white/20 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2B2B2B]"
						>
							{t("mujer.accompanimentPersistent.close")}
						</button>
					</div>
				</div>
			) : null}

			<button
				type="button"
				onClick={() => setIsOpen((o) => !o)}
				className={`
					flex items-center gap-2 rounded-2xl bg-ciclo-activa text-white border border-ciclo-activa/50 shadow-lg
					transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
					hover:opacity-90
					${isOpen ? "rounded-b-none border-b-0" : ""}
					${isMinimized ? "px-3 py-2.5" : "px-4 py-3"}
				`}
				aria-expanded={isOpen}
				aria-label={isOpen ? t("mujer.accompanimentPersistent.close") : t("mujer.accompanimentPersistent.invite")}
			>
				<Image
					src="/images/Ciclo-Activa.png"
					alt=""
					width={isMinimized ? 24 : 28}
					height={isMinimized ? 24 : 28}
					className="shrink-0 rounded-full object-contain"
					aria-hidden
				/>
				{(!isMinimized || isOpen) && (
					<span className="text-sm text-white/95 text-left max-w-[220px] sm:max-w-[260px]">
						{t("mujer.accompanimentPersistent.invite")}
					</span>
				)}
			</button>
		</div>
	);
}
