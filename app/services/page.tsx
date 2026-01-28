"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import SimpleFooter from "@/components/SimpleFooter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
	const { t } = useLanguage();
	const whatsappNumber = "+34633940227";
	const whatsappMessage = encodeURIComponent(t("servicesPage.whatsappMessage"));
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

	return (
		<main className="min-h-screen bg-[#2B2B2B] text-white">
			<Header />
			
			{/* Hero Section */}
			<section className="relative w-full h-screen overflow-hidden">
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/End-2.jpg"
						alt="Servicios Enduranc3"
						fill
						className="object-cover"
						priority
						quality={100}
					/>
					<div className="absolute inset-0 bg-[#2B2B2B]/60 z-0"></div>
				</div>
				<div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
					<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 uppercase tracking-tight">
						{t("servicesPage.hero.title")}
					</h1>
					<p className="text-white/90 text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto">
						{t("servicesPage.hero.description")}
					</p>
				</div>
			</section>

			{/* Entrenamiento Online y Presencial */}
			<section id="entrenamiento-online" className="py-16 md:py-24 bg-[#2B2B2B] scroll-mt-20">
				<div className="container mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
						{/* Columna Izquierda - Entrenamiento Online */}
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
								{t("servicesPage.entrenamientoOnline.title")}
							</h2>
							
							<div className="overflow-x-auto">
								<table className="w-full border-collapse bg-[#2B2B2B] text-white">
									<thead>
										<tr className="border-b border-white/20">
											<th className="text-left p-3 font-bold text-sm md:text-base">{t("servicesPage.entrenamientoOnline.table.serviciosBasicos")}</th>
											<th className="text-center p-3 font-bold text-sm md:text-base border-l border-white/20">{t("servicesPage.entrenamientoOnline.table.endurance")}</th>
											<th className="text-center p-3 font-bold text-sm md:text-base border-l border-white/20">{t("servicesPage.entrenamientoOnline.table.tempo")}</th>
											<th className="text-center p-3 font-bold text-sm md:text-base border-l border-white/20">{t("servicesPage.entrenamientoOnline.table.ftp")}</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.entrevista")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.videollamada")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.videollamada")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.videollamada")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.planificacion")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.semanal")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.semanal")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.semanal")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.feedback")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.resumenSemanal")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.cada2_3dias")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.cada2_3dias")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.comunicacion")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesApp")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesAppWhatsapp")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesAppWhatsapp")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.reajustes")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.alFinalSemana")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.diarios")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.diarios")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.gestionCompeticion")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesApp")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesAppLlamadaWhatsapp")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.aTravesAppLlamadaWhatsapp")}</td>
										</tr>
										<tr className="border-b border-white/10">
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.appsBasicas")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.hrvTrainingpeaks")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.hrvTrainingpeaksWko5")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.hrvTrainingpeaksWko5")}</td>
										</tr>
										<tr>
											<td className="p-3 text-xs md:text-sm">{t("servicesPage.entrenamientoOnline.table.consultoria")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.guion")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.guion")}</td>
											<td className="p-3 text-center text-xs md:text-sm border-l border-white/10">{t("servicesPage.entrenamientoOnline.table.unMes")}</td>
										</tr>
									</tbody>
								</table>
							</div>
							
							<div className="mt-8">
								<Link
									href={whatsappUrl}
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
						</div>

						{/* Columna Derecha - Entrenamiento Presencial */}
						<div id="entrenamiento-presencial" className="flex flex-col justify-center scroll-mt-20">
							<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
								{t("servicesPage.entrenamientoPresencial.title")}
							</h2>
							<p className="text-white/80 text-base md:text-lg mb-8">
								{t("servicesPage.entrenamientoPresencial.description")}
							</p>
							<Link
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 border-2 border-[#E10613] bg-transparent hover:bg-[#E10613]/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base w-fit"
							>
								{t("servicesPage.entrenamientoPresencial.masInformacion")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Formación */}
			<section id="formacion" className="py-16 md:py-24 bg-[#2B2B2B] border-t border-white/10 scroll-mt-20">
				<div className="container mx-auto px-6">
					<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
						{t("servicesPage.formacion.title")}
					</h2>
					
					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{/* Programa Mentoring Entrenadores */}
						<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
							<h3 className="text-2xl font-bold text-white mb-4">{t("servicesPage.formacion.mentoringEntrenadores.title")}</h3>
							<div className="w-16 h-1 bg-[#E10613] mb-4"></div>
							<p className="text-white/80 mb-6">
								{t("servicesPage.formacion.mentoringEntrenadores.description")}
							</p>
							<Link
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-[#E10613] hover:text-[#C10510] font-semibold transition-colors"
							>
								{t("servicesPage.formacion.mentoringEntrenadores.meInteresa")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>

						{/* Programa Mentoring Marketing y Marca Personal */}
						<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
							<h3 className="text-2xl font-bold text-white mb-4">{t("servicesPage.formacion.mentoringMarketing.title")}</h3>
							<div className="w-16 h-1 bg-[#E10613] mb-4"></div>
							<p className="text-white/80 mb-6">
								{t("servicesPage.formacion.mentoringMarketing.description")}
							</p>
							<Link
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-[#E10613] hover:text-[#C10510] font-semibold transition-colors"
							>
								{t("servicesPage.formacion.mentoringMarketing.meInteresa")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>

						{/* Programa Clubes y Federaciones */}
						<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
							<h3 className="text-2xl font-bold text-white mb-4">{t("servicesPage.formacion.clubesFederaciones.title")}</h3>
							<div className="w-16 h-1 bg-[#E10613] mb-4"></div>
							<p className="text-white/80 mb-6">
								{t("servicesPage.formacion.clubesFederaciones.description")}
							</p>
							<Link
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 text-[#E10613] hover:text-[#C10510] font-semibold transition-colors"
							>
								{t("servicesPage.formacion.clubesFederaciones.meInteresa")}
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Gestión de Clubes */}
			<section id="gestion-clubes" className="relative bg-[#2B2B2B] text-white py-24 md:py-40 border-t border-white/10 scroll-mt-20">
				<div className="absolute inset-0 z-0">
					<Image
						src="/images/servicios/Equipo.jpeg"
						alt="Equipo de ciclistas"
						fill
						className="object-cover"
						quality={100}
					/>
					<div className="absolute inset-0 bg-[#2B2B2B]/60"></div>
				</div>
				
				<div className="relative z-10 container mx-auto px-6">
					<div className="max-w-5xl mx-auto text-center">
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-10">
							{t("servicesPage.gestionClubes.title")}
						</h2>
						<p className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 leading-relaxed">
							{t("servicesPage.gestionClubes.description")}
						</p>
						<Link
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 border-2 border-[#E10613] bg-transparent hover:bg-[#E10613]/10 text-white font-semibold px-10 py-4 md:px-12 md:py-5 rounded-lg transition-colors text-lg md:text-xl"
						>
							{t("servicesPage.gestionClubes.masInformacion")}
							<svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</Link>
					</div>
				</div>
			</section>

			{/* Asesoramiento */}
			<section id="asesoramiento" className="py-16 md:py-24 bg-[#2B2B2B] border-t border-white/10 scroll-mt-20">
				<div className="container mx-auto px-6">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
							{t("servicesPage.asesoramiento.title")}
						</h2>
						
						<div className="grid md:grid-cols-2 gap-8 mb-8">
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
								href={whatsappUrl}
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
			</section>

			<SimpleFooter />
		</main>
	);
}
