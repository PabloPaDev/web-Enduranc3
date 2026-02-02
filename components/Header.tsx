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
				className={`${isMenuOpen ? "fixed bg-black/40 backdrop-blur-sm" : "absolute"} top-0 left-0 right-0 z-50 w-full transition-opacity duration-500 ${
					isScrolled && !isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
				}`}
			>
				<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
					<Link href="/" className="flex items-center" onClick={handleMobileLink}>
						<Image
							src="/images/logoEndurance.png"
							alt="Enduranc3 Logo"
							width={200}
							height={70}
							className={logoClassName}
							priority
						/>
					</Link>
					<div className="hidden md:block">
						<Navigation />
					</div>
					
					{/* Botón hamburguesa - visible en móvil */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 text-white"
						aria-label="Menú"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMenuOpen ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</nav>
			</header>
			
			{/* Overlay para cerrar menú al tocar fuera */}
			{isMenuOpen && (
				<div 
					className="fixed inset-0 z-[54] bg-black/50 md:hidden"
					onClick={() => setIsMenuOpen(false)}
				/>
			)}
			
			{/* Menú móvil desplegable desde arriba */}
			<div
				className={`fixed top-0 left-0 right-0 z-[55] bg-[#2B2B2B] shadow-lg transition-transform duration-300 md:hidden ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="pt-20 pb-6 px-6">
					{/* Links de navegación */}
					<nav className="flex flex-col space-y-4">
						<Link
							href="/#equipo"
							onClick={handleMobileLink}
							className="text-white text-lg font-medium hover:text-[#E10613] transition-colors py-2"
						>
							{t("nav.equipo")}
						</Link>
						<Link
							href="/services"
							onClick={handleMobileLink}
							className="text-white text-lg font-medium hover:text-[#E10613] transition-colors py-2"
						>
							{t("nav.servicios")}
						</Link>
						<Link
							href="/mujer"
							onClick={handleMobileLink}
							className="text-white text-lg font-medium hover:text-[#E10613] transition-colors py-2"
						>
							{t("nav.mujer")}
						</Link>
						<Link
							href="/#contacto"
							onClick={handleMobileLink}
							className="text-white text-lg font-medium hover:text-[#E10613] transition-colors py-2"
						>
							{t("nav.contacto")}
						</Link>
						<Link
							href="/blog"
							onClick={handleMobileLink}
							className="text-white text-lg font-medium hover:text-[#E10613] transition-colors py-2"
						>
							{t("nav.blog")}
						</Link>
					</nav>
					
					{/* Selector de idioma */}
					<div className="pt-4 mt-4 border-t border-white/20">
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
			
			{/* Botón hamburguesa flotante - aparece al hacer scroll en desktop */}
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] p-2 sm:p-3 bg-[#2B2B2B]/90 backdrop-blur-sm rounded-lg transition-all duration-500 hidden md:block ${
					isScrolled || isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				aria-label="Menú"
			>
				<svg
					className="w-5 h-5 sm:w-6 sm:h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{isMenuOpen ? (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					) : (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					)}
				</svg>
			</button>
		</>
	);
}
