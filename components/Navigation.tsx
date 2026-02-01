"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navigation() {
	const [isServicesOpen, setIsServicesOpen] = useState(false);
	const { t, language, setLanguage } = useLanguage();

	const services = [
		{ name: t("nav.entrenamientoOnline"), href: "/services#entrenamiento-online" },
		{ name: t("nav.entrenamientoPresencial"), href: "/services#entrenamiento-presencial" },
		{ name: t("nav.formacion"), href: "/services#formacion" },
		{ name: t("nav.gestionClubes"), href: "/services#gestion-clubes" },
		{ name: t("nav.asesoramiento"), href: "/services#asesoramiento" }
	];

	const toggleLanguage = () => {
		setLanguage(language === "es" ? "en" : "es");
	};

	return (
		<nav className="flex items-center gap-8 md:gap-10">
			<Link href="/#equipo" scroll className="text-white hover:text-gray-300 transition-colors text-lg md:text-xl font-medium">
				{t("nav.equipo")}
			</Link>
			<div
				className="relative"
				onMouseEnter={() => setIsServicesOpen(true)}
				onMouseLeave={() => setIsServicesOpen(false)}
			>
				<Link
					href="/services"
					onClick={() => {
						// Cerrar el menú si está abierto, pero permitir navegación
						setIsServicesOpen(false);
					}}
					className="text-white hover:text-gray-300 transition-colors flex items-center gap-2 text-lg md:text-xl font-medium"
				>
					{t("nav.servicios")}
					<svg
						className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
					</svg>
				</Link>
				{isServicesOpen && (
					<div 
						className="absolute top-full left-0 pt-2 w-64 z-50"
						onMouseEnter={() => setIsServicesOpen(true)}
						onMouseLeave={() => setIsServicesOpen(false)}
					>
						<div className="bg-[#2B2B2B] border border-white/10 rounded-lg shadow-lg overflow-hidden">
							<div className="py-2">
								<Link
									href="/services"
									onClick={() => setIsServicesOpen(false)}
									className="block px-4 py-3 text-white hover:bg-[#E10613]/20 hover:text-[#E10613] transition-colors text-base border-b border-white/10"
								>
									{t("nav.verTodosServicios")}
								</Link>
								{services.map((service, index) => (
									<Link
										key={index}
										href={service.href}
										onClick={() => setIsServicesOpen(false)}
										className="block px-4 py-3 text-white hover:bg-[#E10613]/20 hover:text-[#E10613] transition-colors text-base"
									>
										{service.name}
									</Link>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
			<Link href="/#contacto" scroll className="text-white hover:text-gray-300 transition-colors text-lg md:text-xl font-medium">
				{t("nav.contacto")}
			</Link>
			<Link href="/blog" className="text-white hover:text-gray-300 transition-colors text-lg md:text-xl font-medium">
				{t("nav.blog")}
			</Link>
			<button
				onClick={toggleLanguage}
				className="text-white hover:text-gray-300 transition-colors text-lg md:text-xl font-medium flex items-center gap-2"
				aria-label="Cambiar idioma"
			>
				<span className={language === "es" ? "" : "opacity-50"}>ES</span>
				<span className="opacity-30">|</span>
				<span className={language === "en" ? "" : "opacity-50"}>EN</span>
			</button>
		</nav>
	);
}
