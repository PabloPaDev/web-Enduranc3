"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const TRACK_IDS = ["cycle", "fatigue", "performance", "injuries", "understand"] as const;
type TrackId = (typeof TRACK_IDS)[number];

type FlowPhase = "root" | "turn1" | "turn2";

const STORAGE_KEY = "ciclo-activa-chatbot-minimized";
const SUGGESTION_HIDE_AFTER_MS = 6000;
const SCROLL_Y_COMPACT = 140;
const WHATSAPP_NUMBER = "34633940227";

export default function CicloActivaChatbot() {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [phase, setPhase] = useState<FlowPhase>("root");
	const [track, setTrack] = useState<TrackId | null>(null);
	const [isMinimized, setIsMinimized] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const [isScrollCompact, setIsScrollCompact] = useState(false);

	const waMsg = t("mujer.chatbot.flow.closure.whatsappMessage");
	const whatsappHref =
		typeof waMsg === "string"
			? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`
			: "#";

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

	useEffect(() => {
		if (!mounted) return;
		setShowSuggestion(true);
		const timer = setTimeout(() => setShowSuggestion(false), SUGGESTION_HIDE_AFTER_MS);
		return () => clearTimeout(timer);
	}, [mounted]);

	useEffect(() => {
		if (isOpen) setShowSuggestion(false);
	}, [isOpen]);

	useEffect(() => {
		if (!mounted || typeof window === "undefined") return;
		const onScroll = () => {
			setIsScrollCompact(window.scrollY > SCROLL_Y_COMPACT);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [mounted]);

	const resetFlow = () => {
		setPhase("root");
		setTrack(null);
	};

	const handleClosePanel = () => {
		setIsClosing(true);
	};

	const handleCloseAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.animationName !== "chat-panel-close") return;
		setIsClosing(false);
		setIsOpen(false);
		resetFlow();
		try {
			window.localStorage.setItem(STORAGE_KEY, "true");
			setIsMinimized(true);
		} catch {
			// ignore
		}
	};

	const optionsRaw =
		track && phase === "turn1"
			? (t(`mujer.chatbot.flow.tracks.${track}.options1`) as unknown)
			: null;
	const optionList = Array.isArray(optionsRaw) ? (optionsRaw as string[]) : [];

	const iconOnly = isMinimized || isScrollCompact;

	if (!mounted) return null;

	return (
		<div
			className="fixed bottom-6 right-2 z-40 flex flex-col items-end gap-2 max-w-[calc(100vw-1rem)]"
			aria-label={t("mujer.chatbot.ariaLabel")}
			role="complementary"
		>
			{showSuggestion && !isOpen && !isScrollCompact && (
				<div
					className="relative rounded-xl bg-ciclo-activa/95 text-white/95 text-sm pl-4 pr-10 py-3 shadow-lg border border-ciclo-activa/50 max-w-[280px]"
					role="status"
					aria-live="polite"
				>
					<button
						type="button"
						onClick={() => setShowSuggestion(false)}
						className="absolute top-2 right-2 p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
						aria-label={t("mujer.chatbot.close")}
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
					<p>{t("mujer.chatbot.suggestionPrompt")}</p>
					<span className="block mt-1.5 text-right text-white/70 text-xs" aria-hidden>
						↓
					</span>
				</div>
			)}
			{(isOpen || isClosing) && (
				<div
					className={`w-full sm:w-96 rounded-2xl bg-ciclo-activa/95 text-white shadow-lg border border-ciclo-activa/50 overflow-hidden flex flex-col max-h-[min(82vh,36rem)] ${isClosing ? "chat-panel-close" : "chat-panel-open"}`}
					onAnimationEnd={handleCloseAnimationEnd}
				>
					<div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-ciclo-activa/50 shrink-0 bg-ciclo-activa/80">
						<div className="flex items-center gap-2 min-w-0">
							<Image
								src="/images/Ciclo-Activa.png"
								alt=""
								width={28}
								height={28}
								className="shrink-0 rounded-full object-contain"
								aria-hidden
							/>
							<span className="text-sm font-medium text-white truncate">
								{t("mujer.chatbot.panelTitle")}
							</span>
						</div>
						<button
							type="button"
							onClick={handleClosePanel}
							className="shrink-0 p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-ciclo-activa/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
							aria-label={t("mujer.chatbot.close")}
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					<div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ciclo-activa/85">
						{phase === "root" && (
							<>
								<p className="text-white/95 text-sm font-medium leading-snug">
									{t("mujer.chatbot.flow.intro")}
								</p>
								<div className="flex flex-col gap-2 pt-1">
									{TRACK_IDS.map((id) => (
										<button
											key={id}
											type="button"
											onClick={() => {
												setTrack(id);
												setPhase("turn1");
											}}
											className="w-full text-left px-3.5 py-2.5 rounded-xl bg-ciclo-activa/60 text-white/95 text-sm leading-snug border border-ciclo-activa/50 hover:bg-ciclo-activa/75 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
										>
											{t(`mujer.chatbot.flow.tracks.${id}.label`)}
										</button>
									))}
								</div>
							</>
						)}

						{phase === "turn1" && track && (
							<>
								<p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
									{t(`mujer.chatbot.flow.tracks.${track}.main`)}
								</p>
								<p className="text-white text-sm font-medium leading-snug mt-3 pt-3 border-t border-white/10">
									{t(`mujer.chatbot.flow.tracks.${track}.question1`)}
								</p>
								<div className="flex flex-col gap-2 pt-1">
									{optionList.map((label) => (
										<button
											key={label}
											type="button"
											onClick={() => setPhase("turn2")}
											className="w-full text-left px-3.5 py-2.5 rounded-xl bg-ciclo-activa/60 text-white/95 text-sm border border-ciclo-activa/50 hover:bg-ciclo-activa/75 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
										>
											{label}
										</button>
									))}
								</div>
								<button
									type="button"
									onClick={resetFlow}
									className="w-full mt-2 py-2 text-xs text-white/65 hover:text-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa rounded-lg"
								>
									{t("mujer.chatbot.flow.backToMenu")}
								</button>
							</>
						)}

						{phase === "turn2" && track && (
							<>
								<p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
									{t(`mujer.chatbot.flow.tracks.${track}.afterChoice`)}
								</p>
								<p className="text-white/95 text-sm font-medium leading-snug pt-3 border-t border-white/10 mt-3">
									{t("mujer.chatbot.flow.closure.invite")}
								</p>
								<a
									href={whatsappHref}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-3 flex w-full items-center justify-center rounded-xl border border-white/40 bg-white/5 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
								>
									{t("mujer.chatbot.flow.closure.ctaHint")}
								</a>
								<button
									type="button"
									onClick={resetFlow}
									className="w-full py-2 text-xs text-white/70 hover:text-white border border-ciclo-activa/50 rounded-lg hover:bg-ciclo-activa/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
								>
									{t("mujer.chatbot.flow.closure.restart")}
								</button>
							</>
						)}
					</div>
				</div>
			)}

			{!isOpen && (
				<button
					type="button"
					onClick={() => setIsOpen(true)}
					className={`
						flex items-center rounded-2xl bg-ciclo-activa text-white border border-ciclo-activa/50
						shadow-[0_10px_36px_rgba(0,0,0,0.42),0_4px_14px_rgba(0,0,0,0.32),0_2px_6px_rgba(0,0,0,0.22)]
						transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
						hover:opacity-90
						${iconOnly ? "gap-0 px-3 py-2.5 sm:px-4 sm:py-3.5" : "gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-5"}
					`}
					aria-expanded={false}
					aria-label={t("mujer.chatbot.invite")}
				>
					<span className="w-9 h-9 sm:w-[52px] sm:h-[52px] shrink-0 relative block">
						<Image
							src="/images/Ciclo-Activa.png"
							alt=""
							fill
							sizes="52px"
							className="object-contain rounded-full"
							aria-hidden
						/>
					</span>
					{!iconOnly && (
						<span className="text-base sm:text-lg text-white/95 text-left max-w-[200px] sm:max-w-[300px]">
							{t("mujer.chatbot.invite")}
						</span>
					)}
				</button>
			)}
		</div>
	);
}
