"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
	const { t } = useLanguage();
	const heroTextRef = useRef<HTMLDivElement>(null);
	const entrenamientoRef = useRef<HTMLDivElement>(null);
	const clubesTextRef = useRef<HTMLDivElement>(null);
	const asesoramientoRef = useRef<HTMLDivElement>(null);
	const sectionsRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Fade del texto del Hero mientras se tapa
			if (heroTextRef.current) {
				gsap.to(heroTextRef.current, {
					opacity: 0,
					y: -50,
					ease: "none",
					scrollTrigger: {
						trigger: heroTextRef.current.parentElement,
						start: "top top",
						end: "50% top",
						scrub: 1,
					},
				});
			}

			// Animación de entrada para Entrenamiento Online - aparece antes
			if (entrenamientoRef.current) {
				gsap.from(entrenamientoRef.current, {
					opacity: 0,
					y: 60,
					ease: "power2.out",
					scrollTrigger: {
						trigger: entrenamientoRef.current.parentElement,
						start: "top 100%",
						end: "top 70%",
						scrub: 0.5,
					},
				});
			}

			// Animación de entrada para Clubes - aparece antes
			if (clubesTextRef.current) {
				gsap.from(clubesTextRef.current, {
					opacity: 0,
					y: 80,
					ease: "power2.out",
					scrollTrigger: {
						trigger: clubesTextRef.current.parentElement,
						start: "top 100%",
						end: "top 60%",
						scrub: 0.5,
					},
				});

				// Fade al salir
				gsap.to(clubesTextRef.current, {
					opacity: 0,
					y: -30,
					ease: "none",
					scrollTrigger: {
						trigger: clubesTextRef.current.parentElement,
						start: "top top",
						end: "50% top",
						scrub: 1,
					},
				});
			}

			// Animación de entrada para Asesoramiento - aparece antes
			if (asesoramientoRef.current) {
				gsap.from(asesoramientoRef.current, {
					opacity: 0,
					y: 60,
					ease: "power2.out",
					scrollTrigger: {
						trigger: asesoramientoRef.current.parentElement,
						start: "top 100%",
						end: "top 70%",
						scrub: 0.5,
					},
				});
			}
		}, sectionsRef);

		return () => ctx.revert();
	}, []);
	const whatsappNumber = "+34633940227";
	
	// URLs de WhatsApp con mensajes personalizados por sección
	const whatsappOnline = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("servicesPage.entrenamientoOnline.whatsappMessage") as string)}`;
	const whatsappTesting = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("servicesPage.testing.whatsappMessage") as string)}`;
	const whatsappClubes = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("servicesPage.gestionClubes.whatsappMessage") as string)}`;
	const whatsappAsesoramiento = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t("servicesPage.asesoramiento.whatsappMessage") as string)}`;

	return (
		<main ref={sectionsRef} className="min-h-screen bg-[#2B2B2B] text-white">
			<Header />
			
			{/* Hero Section - Fija, el contenido sube por encima */}
			<section className="fixed top-0 left-0 right-0 w-full h-screen overflow-hidden z-0">
				<div className="absolute inset-0">
					<Image
						src="/images/End-2.jpg"
						alt="Servicios Enduranc3"
						fill
						className="object-cover"
						priority
						quality={100}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#2B2B2B]/40 via-[#2B2B2B]/50 to-[#2B2B2B]/70"></div>
				</div>
				<div ref={heroTextRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-6">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4 sm:mb-6 uppercase tracking-tight">
						{t("servicesPage.hero.title")}
					</h1>
					<p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto">
						{t("servicesPage.hero.description")}
					</p>
				</div>
			</section>

			{/* Espaciador para el hero fijo */}
			<div className="h-screen"></div>

			{/* Entrenamiento Online y Testing - Sticky, tapa al hero */}
			<section id="entrenamiento-online" className="sticky top-0 z-10 py-12 sm:py-16 md:py-24 bg-[#2B2B2B] scroll-mt-20 rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
				<div ref={entrenamientoRef} className="container mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12">
						{/* Entrenamiento Online */}
						<div>
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
								{t("servicesPage.entrenamientoOnline.title")}
							</h2>
							
							<p className="text-white/80 text-sm sm:text-base mb-8">
								{t("servicesPage.entrenamientoOnline.description")}
							</p>
							
							<h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
								{t("servicesPage.entrenamientoOnline.serviciosIncluidos")}
							</h3>
							
							<div className="space-y-6 mb-8">
								{(Array.isArray(t("servicesPage.entrenamientoOnline.items")) ? t("servicesPage.entrenamientoOnline.items") : []).map((item: { title: string; description: string }, index: number) => (
									<div key={index}>
										<h4 className="text-white font-semibold text-sm sm:text-base mb-1">
											{item.title}
										</h4>
										<p className="text-white/60 text-sm">
											{item.description}
										</p>
									</div>
								))}
							</div>
							
							<Link
								href={whatsappOnline}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
							>
								{t("servicesPage.entrenamientoOnline.masInformacion")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>

						{/* Línea divisoria vertical */}
						<div className="hidden md:block w-0.5 bg-[#E10613] self-stretch"></div>

						{/* Testing */}
						<div id="testing" className="scroll-mt-20">
							<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
								{t("servicesPage.testing.title")}
							</h2>
							
							<p className="text-white/80 text-sm sm:text-base mb-4">
								{t("servicesPage.testing.description")}
							</p>
							
							<p className="text-white/80 text-sm sm:text-base mb-8 font-medium">
								{t("servicesPage.testing.resumen")}
							</p>
							
							<h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
								{t("servicesPage.testing.paraQueSirve")}
							</h3>
							
							<ul className="space-y-3 mb-8">
								{(Array.isArray(t("servicesPage.testing.items")) ? t("servicesPage.testing.items") : []).map((item: string, index: number) => (
									<li key={index} className="text-white/80 text-sm sm:text-base">
										{item}
									</li>
								))}
							</ul>
							
							<Link
								href={whatsappTesting}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
							>
								{t("servicesPage.testing.masInformacion")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Gestión de Clubes - Sticky, tapa a la anterior */}
			<section id="gestion-clubes" className="sticky top-0 z-20 h-screen text-white scroll-mt-20 overflow-hidden flex items-center rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
				<div className="absolute inset-0">
					<Image
						src="/images/servicios/Equipo.jpeg"
						alt="Equipo de ciclistas"
						fill
						className="object-cover"
						quality={100}
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#2B2B2B]/40 via-[#2B2B2B]/50 to-[#2B2B2B]/70"></div>
				</div>
				
				<div ref={clubesTextRef} className="relative z-10 container mx-auto px-4 sm:px-6">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 md:mb-10">
							{t("servicesPage.gestionClubes.title")}
						</h2>
						<p className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-8 sm:mb-10 md:mb-12 leading-relaxed">
							{t("servicesPage.gestionClubes.description")}
						</p>
						<Link
							href={whatsappClubes}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-4 lg:px-12 lg:py-5 rounded-lg transition-colors text-base sm:text-lg md:text-xl"
						>
							{t("servicesPage.gestionClubes.masInformacion")}
							<svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</section>

			{/* Asesoramiento - Sticky, tapa a la anterior, ocupa pantalla completa */}
			<section id="asesoramiento" className="sticky top-0 z-30 min-h-screen flex flex-col bg-[#2B2B2B] scroll-mt-20 rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
				{/* Contenido centrado en la pantalla */}
				<div ref={asesoramientoRef} className="flex-1 flex items-center justify-center px-4 sm:px-6">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8">
							{t("servicesPage.asesoramiento.title")}
						</h2>
						
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-bold text-white mb-4">{t("servicesPage.asesoramiento.deportivo.title")}</h3>
								<div className="w-16 h-1 bg-[#E10613] mb-4"></div>
								<p className="text-white/80 mb-4">
									{t("servicesPage.asesoramiento.deportivo.description")}
								</p>
								<ul className="text-white/80 text-sm space-y-2 list-none pl-0">
									{(Array.isArray(t("servicesPage.asesoramiento.deportivo.items")) ? t("servicesPage.asesoramiento.deportivo.items") : []).map((item: string, index: number) => (
										<li key={index} className="flex items-start">
											<span className="text-[#E10613] mr-2">•</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-bold text-white mb-4">{t("servicesPage.asesoramiento.profesional.title")}</h3>
								<div className="w-16 h-1 bg-[#E10613] mb-4"></div>
								<p className="text-white/80 mb-4">
									{t("servicesPage.asesoramiento.profesional.description")}
								</p>
								<ul className="text-white/80 text-sm space-y-2 list-none pl-0">
									{(Array.isArray(t("servicesPage.asesoramiento.profesional.items")) ? t("servicesPage.asesoramiento.profesional.items") : []).map((item: string, index: number) => (
										<li key={index} className="flex items-start">
											<span className="text-[#E10613] mr-2">•</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="text-center">
							<Link
								href={whatsappAsesoramiento}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
							>
								{t("servicesPage.asesoramiento.masInformacion")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>

				{/* Footer con logo y datos - al final */}
				<div className="container mx-auto px-4 sm:px-6 pt-6 pb-6">
					{/* Logo encima de la línea */}
					<div className="flex justify-center mb-4">
						<Image
							src="/images/logoEndurance.png"
							alt="Enduranc3 Logo"
							width={250}
							height={80}
							className="h-auto brightness-0 invert sm:w-[300px]"
							quality={100}
						/>
					</div>
					
					<div className="w-full h-px bg-white/30 mb-4"></div>
					
					{/* Grid de información del footer */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-xs sm:text-sm max-w-4xl mx-auto">
						<div>
							<h4 className="font-bold text-white mb-1">Endurance3</h4>
							<p className="text-white/60 leading-snug">
								{t("footer.description")}
							</p>
						</div>
						<div>
							<h4 className="font-bold text-white mb-1">{t("footer.servicios")}</h4>
							<ul className="space-y-0.5 text-white/60">
								<li><Link href="/services#entrenamiento-online" className="hover:text-white">{t("footer.entrenamientoOnline")}</Link></li>
								<li><Link href="/services#testing" className="hover:text-white">Testing</Link></li>
								<li><Link href="/services#gestion-clubes" className="hover:text-white">{t("footer.valoraciones")}</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-white mb-1">{t("footer.empresa")}</h4>
							<ul className="space-y-0.5 text-white/60">
								<li><Link href="/about" className="hover:text-white">{t("footer.sobreNosotros")}</Link></li>
								<li><Link href="/blog" className="hover:text-white">{t("footer.blog")}</Link></li>
								<li><Link href="/#contacto" className="hover:text-white">{t("footer.contacto")}</Link></li>
							</ul>
						</div>
						<div>
							<h4 className="font-bold text-white mb-1">{t("footer.legal")}</h4>
							<ul className="space-y-0.5 text-white/60">
								<li><Link href="/privacidad" className="hover:text-white">{t("footer.privacidad")}</Link></li>
								<li><Link href="/terminos" className="hover:text-white">{t("footer.terminos")}</Link></li>
							</ul>
						</div>
					</div>

					{/* Copyright */}
					<p className="text-white/40 text-xs text-center">
						© {new Date().getFullYear()} Endurance3. Todos los derechos reservados.
					</p>
				</div>
			</section>
		</main>
	);
}
