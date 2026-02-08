"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const QUESTION_IDS = ["whatIs", "status", "whoFor", "whoBehind", "needs"] as const;
type QuestionId = (typeof QUESTION_IDS)[number];

const STORAGE_KEY = "ciclo-activa-chatbot-minimized";
const SUGGESTION_HIDE_AFTER_MS = 6000;

export default function CicloActivaChatbot() {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [isClosing, setIsClosing] = useState(false);
	const [selectedId, setSelectedId] = useState<QuestionId | null>(null);
	const [isMinimized, setIsMinimized] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [showSuggestion, setShowSuggestion] = useState(false);

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

	// Sugerencia al entrar: mostrar un momento y ocultar al abrir el chat o tras un tiempo
	useEffect(() => {
		if (!mounted) return;
		setShowSuggestion(true);
		const timer = setTimeout(() => setShowSuggestion(false), SUGGESTION_HIDE_AFTER_MS);
		return () => clearTimeout(timer);
	}, [mounted]);

	useEffect(() => {
		if (isOpen) setShowSuggestion(false);
	}, [isOpen]);

	const handleClosePanel = () => {
		setIsClosing(true);
	};

	const handleCloseAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.animationName !== "chat-panel-close") return;
		setIsClosing(false);
		setIsOpen(false);
		setSelectedId(null);
		try {
			window.localStorage.setItem(STORAGE_KEY, "true");
			setIsMinimized(true);
		} catch {
			// ignore
		}
	};

	const handleOtherQuestion = () => {
		setSelectedId(null);
	};

	if (!mounted) return null;

	return (
		<div
			className="fixed bottom-6 right-2 z-40 flex flex-col items-end gap-2 max-w-[calc(100vw-1rem)]"
			aria-label={t("mujer.chatbot.ariaLabel")}
			role="complementary"
		>
			{showSuggestion && !isOpen && (
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
					className={`w-full sm:w-96 rounded-2xl bg-ciclo-activa/95 text-white shadow-lg border border-ciclo-activa/50 overflow-hidden flex flex-col max-h-[min(70vh,28rem)] ${isClosing ? "chat-panel-close" : "chat-panel-open"}`}
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

					<div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-ciclo-activa/85">
						{selectedId === null ? (
							<>
								<p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
									{t("mujer.chatbot.welcome")}
								</p>
								<div className="flex flex-col gap-2">
									{QUESTION_IDS.map((id) => (
										<button
											key={id}
											type="button"
											onClick={() => setSelectedId(id)}
											className="w-full text-left px-4 py-3 rounded-xl bg-ciclo-activa/60 text-white/95 text-sm border border-ciclo-activa/50 hover:bg-ciclo-activa/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
										>
											{t(`mujer.chatbot.questions.${id}`)}
										</button>
									))}
								</div>
							</>
						) : (
							<>
								<p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
									{t(`mujer.chatbot.answers.${selectedId}`)}
								</p>
								<div className="flex flex-col sm:flex-row gap-2 pt-2">
									<button
										type="button"
										onClick={handleOtherQuestion}
										className="flex-1 px-4 py-2.5 rounded-lg bg-ciclo-activa/60 text-white/90 text-sm border border-ciclo-activa/50 hover:bg-ciclo-activa/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
									>
										{t("mujer.chatbot.otherQuestion")}
									</button>
									<button
										type="button"
										onClick={handleClosePanel}
										className="flex-1 px-4 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-ciclo-activa/50 border border-ciclo-activa/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa"
									>
										{t("mujer.chatbot.closeButton")}
									</button>
								</div>
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
						flex items-center gap-2 sm:gap-3 rounded-2xl bg-ciclo-activa text-white border border-ciclo-activa/50 shadow-lg
						transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ciclo-activa focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
						hover:opacity-90
						${isMinimized ? "px-3 py-2.5 sm:px-5 sm:py-4" : "px-4 py-3 sm:px-6 sm:py-5"}
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
					{!isMinimized && (
						<span className="text-base sm:text-lg text-white/95 text-left max-w-[200px] sm:max-w-[300px]">
							{t("mujer.chatbot.invite")}
						</span>
					)}
				</button>
			)}
		</div>
	);
}
