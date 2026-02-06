"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePathname } from "next/navigation";

type HeaderProps = {
	logoVariant?: "default" | "white";
};

export default function Header({ logoVariant = "default" }: HeaderProps) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { t, language, setLanguage } = useLanguage();
	const pathname = usePathname();
	const logoClassName = `${logoVariant === "white" ? "brightness-0 invert" : ""} h-auto w-[140px] sm:w-[200px]`;

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Cerrar menú al cambiar de página
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	// Ya no bloqueamos scroll porque el menú es compacto

	const toggleLanguage = () => {
		setLanguage(language === "es" ? "en" : "es");
	};

	const handleMobileLink = () => {
		setIsMenuOpen(false);
	};

	return (
		<>
			<header 
				className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 bg-transparent ${
					isScrolled && !isMenuOpen ? "md:opacity-0 md:pointer-events-none" : "opacity-100"
				}`}
			>
				<nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 md:py-6 flex items-center justify-between">
					<Link href="/" className="flex items-center relative h-[40px] sm:h-[50px] md:h-[70px]" onClick={handleMobileLink}>
						{/* Logo principal - visible en desktop siempre, en móvil solo sin scroll */}
						<Image
							src="/images/logoEndurance.png"
							alt="Enduranc3 Logo"
							width={200}
							height={70}
							sizes="(max-width: 768px) 140px, 200px"
							className={`${logoClassName} transition-opacity duration-300 ${isScrolled ? "md:opacity-100 opacity-0" : "opacity-100"}`}
							priority
							quality={100}
						/>
						{/* Logo alternativo (móvil con scroll) - solo visible en móvil al hacer scroll */}
						<Image
							src="/images/logo.png"
							alt="Enduranc3 Logo"
							width={48}
							height={48}
							sizes="48px"
							className={`absolute top-1/2 -translate-y-1/2 left-0 w-[38px] h-[38px] sm:w-[46px] sm:h-[46px] brightness-0 invert transition-opacity duration-300 md:opacity-0 ${isScrolled ? "opacity-100" : "opacity-0"}`}
							priority
							quality={100}
						/>
					</Link>
					<div className="hidden md:block">
						<Navigation />
					</div>
					
					{/* Botón hamburguesa animado - visible en móvil */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 text-white relative w-10 h-10 flex items-center justify-center"
						aria-label="Menú"
					>
						<div className="w-6 h-5 relative flex flex-col justify-between">
							<span 
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out origin-center ${
									isMenuOpen ? "rotate-45 translate-y-[9px]" : ""
								}`}
							/>
							<span 
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out ${
									isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
								}`}
							/>
							<span 
								className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out origin-center ${
									isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""
								}`}
							/>
						</div>
					</button>
				</nav>
			</header>
			
			{/* Overlay para cerrar menú al tocar fuera - con animación */}
			<div 
				className={`fixed inset-0 z-[54] bg-black/50 md:hidden transition-opacity duration-400 ease-in-out ${
					isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsMenuOpen(false)}
			/>
			
			{/* Menú móvil desplegable desde arriba con animaciones suaves */}
			<div
				className={`fixed top-0 left-0 right-0 z-[55] bg-white/10 backdrop-blur-xl shadow-lg transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden ${
					isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
				}`}
			>
				{/* Logo para volver al inicio */}
				<Link 
					href="/" 
					onClick={handleMobileLink}
					className={`absolute top-4 left-4 transition-all duration-300 ease-out ${
						isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-75"
					}`}
					style={{ transitionDelay: isMenuOpen ? "150ms" : "0ms" }}
				>
					<Image
						src="/images/logo.png"
						alt="Enduranc3 Logo"
						width={36}
						height={36}
						sizes="36px"
						className="w-[36px] h-[36px] brightness-0 invert"
						quality={100}
					/>
				</Link>
				
				{/* Botón cerrar animado */}
				<button
					onClick={() => setIsMenuOpen(false)}
					className={`absolute top-4 right-4 p-2 text-white transition-all duration-300 ease-out ${
						isMenuOpen ? "rotate-0 opacity-100 scale-100" : "rotate-180 opacity-0 scale-75"
					}`}
					style={{ transitionDelay: isMenuOpen ? "200ms" : "0ms" }}
					aria-label="Cerrar menú"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				
				<div className="pt-16 pb-6 px-6">
					{/* Links de navegación con animación escalonada */}
					<nav className="flex flex-col space-y-4">
						<Link
							href="/#equipo"
							onClick={handleMobileLink}
							className={`text-white text-lg font-medium hover:text-[#E10613] active:text-[#E10613] transition-all duration-300 ease-out py-2 transform ${
								isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
							}`}
							style={{ transitionDelay: isMenuOpen ? "80ms" : "200ms" }}
						>
							{t("nav.equipo")}
						</Link>
						<Link
							href="/services"
							onClick={handleMobileLink}
							className={`text-white text-lg font-medium hover:text-[#E10613] active:text-[#E10613] transition-all duration-300 ease-out py-2 transform ${
								isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
							}`}
							style={{ transitionDelay: isMenuOpen ? "120ms" : "160ms" }}
						>
							{t("nav.servicios")}
						</Link>
						<Link
							href="/mujer"
							onClick={handleMobileLink}
							className={`text-white text-lg font-medium hover:text-[#E10613] active:text-[#E10613] transition-all duration-300 ease-out py-2 transform ${
								isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
							}`}
							style={{ transitionDelay: isMenuOpen ? "160ms" : "120ms" }}
						>
							{t("nav.mujer")}
						</Link>
						<Link
							href="/#contacto"
							onClick={handleMobileLink}
							className={`text-white text-lg font-medium hover:text-[#E10613] active:text-[#E10613] transition-all duration-300 ease-out py-2 transform ${
								isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
							}`}
							style={{ transitionDelay: isMenuOpen ? "200ms" : "80ms" }}
						>
							{t("nav.contacto")}
						</Link>
						<Link
							href="/blog"
							onClick={handleMobileLink}
							className={`text-white text-lg font-medium hover:text-[#E10613] active:text-[#E10613] transition-all duration-300 ease-out py-2 transform ${
								isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
							}`}
							style={{ transitionDelay: isMenuOpen ? "240ms" : "40ms" }}
						>
							{t("nav.blog")}
						</Link>
					</nav>
					
					{/* Selector de idioma con animación */}
					<div 
						className={`pt-4 mt-4 border-t border-white/20 transition-all duration-300 ease-out ${
							isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
						}`}
						style={{ transitionDelay: isMenuOpen ? "280ms" : "0ms" }}
					>
						<button
							onClick={toggleLanguage}
							className="text-white text-base font-medium flex items-center gap-3"
						>
							<span className={language === "es" ? "text-[#E10613]" : "opacity-50"}>ES</span>
							<span className="opacity-30">|</span>
							<span className={language === "en" ? "text-[#E10613]" : "opacity-50"}>EN</span>
						</button>
					</div>
				</div>
			</div>
			
			{/* Botón hamburguesa flotante animado - aparece al hacer scroll en desktop */}
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] p-2 sm:p-3 bg-[#2B2B2B]/90 backdrop-blur-sm rounded-lg transition-all duration-500 hidden md:flex items-center justify-center ${
					isScrolled || isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				aria-label="Menú"
			>
				<div className="w-5 h-4 sm:w-6 sm:h-5 relative flex flex-col justify-between">
					<span 
						className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out origin-center ${
							isMenuOpen ? "rotate-45 translate-y-[7px] sm:translate-y-[9px]" : ""
						}`}
					/>
					<span 
						className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out ${
							isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
						}`}
					/>
					<span 
						className={`block h-0.5 w-full bg-white rounded-full transition-all duration-500 ease-in-out origin-center ${
							isMenuOpen ? "-rotate-45 -translate-y-[7px] sm:-translate-y-[9px]" : ""
						}`}
					/>
				</div>
			</button>
		</>
	);
}
