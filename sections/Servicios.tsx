"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
	variant?: "normal" | "overlay";
};

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
	const [count, setCount] = useState(0);
	const [hasStarted, setHasStarted] = useState(false);
	const ref = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !hasStarted) {
					setHasStarted(true);
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [hasStarted]);

	useEffect(() => {
		if (!hasStarted) return;

		const startTime = Date.now();
		const interval = setInterval(() => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1);
			// Easing function for smooth animation
			const easeOut = 1 - Math.pow(1 - progress, 3);
			setCount(Math.floor(easeOut * target));

			if (progress >= 1) {
				clearInterval(interval);
				setCount(target);
			}
		}, 16);

		return () => clearInterval(interval);
	}, [hasStarted, target, duration]);

	return <span ref={ref}>+ {count}</span>;
}

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
							<AnimatedCounter target={150} duration={3500} /> {t("servicios.atletasText")}
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
						className="bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
					>
						{t("servicios.button")}
					</Link>
				</div>
			</div>
		</section>
	);
}
