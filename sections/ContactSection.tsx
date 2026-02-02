"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		asunto: "",
		mensaje: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí iría la lógica para enviar el email
		console.log("Formulario enviado:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const { t } = useLanguage();
	const whatsappNumber = "+34633940227";
	const whatsappMessage = encodeURIComponent(
		t("contact.whatsappMessage")
	);
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

	return (
		<section id="contacto" className="relative bg-[#2B2B2B] text-white min-h-screen flex flex-col scroll-mt-20 overflow-x-hidden">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/End-4.jpg"
					alt="Cyclist background"
					fill
					className="object-cover object-center"
					quality={100}
				/>
				<div className="absolute inset-0 bg-[#2B2B2B]/50 sm:bg-[#2B2B2B]/60"></div>
			</div>

			<div className="relative z-10 container mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-6 flex-1 flex flex-col justify-center">
				{/* Título - Compacto en móvil */}
				<div className="max-w-4xl mx-auto text-center mb-6 sm:mb-10">
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-6">
						{t("contact.title")}
					</h1>
					<p className="text-white/90 text-sm sm:text-lg md:text-xl">
						{t("contact.subtitle")}
					</p>
				</div>

				{/* Grid - Columna en móvil, 2 columnas en desktop */}
				<div className="max-w-6xl mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-10 mb-6 sm:mb-10">
					{/* WhatsApp Button - Compacto en móvil */}
					<div className="flex flex-col justify-center space-y-4 sm:space-y-8 order-2 sm:order-1">
						<a
							href={whatsappUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 sm:px-8 sm:py-6 rounded-lg transition-colors flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg min-h-[48px]"
						>
							<svg
								className="w-5 h-5 sm:w-7 sm:h-7"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.372a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
							</svg>
							Contáctanos por WhatsApp
						</a>
						<p className="text-white/70 text-xs sm:text-sm text-center">
							Respuesta rápida y directa
						</p>
					</div>

					{/* Formulario - Primero en móvil, segundo en desktop */}
					<div className="order-1 sm:order-2">
						<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
							<input
								type="text"
								name="nombre"
								placeholder={t("contact.form.nombre")}
								value={formData.nombre}
								onChange={handleChange}
								required
								className="w-full bg-[#2B2B2B]/80 border border-gray-700 rounded-lg px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#E10613] transition-colors min-h-[48px]"
							/>
							<input
								type="email"
								name="email"
								placeholder={t("contact.form.email")}
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full bg-[#2B2B2B]/80 border border-gray-700 rounded-lg px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#E10613] transition-colors min-h-[48px]"
							/>
							<input
								type="text"
								name="asunto"
								placeholder={t("contact.form.asunto")}
								value={formData.asunto}
								onChange={handleChange}
								required
								className="w-full bg-[#2B2B2B]/80 border border-gray-700 rounded-lg px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#E10613] transition-colors min-h-[48px]"
							/>
							<textarea
								name="mensaje"
								placeholder={t("contact.form.mensaje")}
								value={formData.mensaje}
								onChange={handleChange}
								required
								rows={6}
								className="w-full bg-gray-800/80 border border-gray-700 rounded-lg px-4 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-[#E10613] transition-colors resize-none"
							/>
							<button
								type="submit"
								className="w-full bg-[#E10613] hover:bg-[#C10510] text-white font-semibold px-6 py-3 sm:px-8 rounded-lg transition-colors text-sm sm:text-base min-h-[48px]"
							>
								{t("contact.form.submit")}
							</button>
						</form>
					</div>
				</div>

				{/* Información de contacto - Columna en móvil */}
				<div className="max-w-6xl mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-8 mb-4 sm:mb-6">
					<div>
						<div className="space-y-4 sm:space-y-8">
							<div>
								<h3 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">{t("contact.email")}</h3>
								<p className="text-white/80 text-sm sm:text-base">endurance3.es@gmail.com</p>
							</div>
							<div>
								<h3 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">{t("contact.sponsors")}</h3>
								<p className="text-white/80 text-sm sm:text-base">sponsors@endurance3.es</p>
							</div>
						</div>
					</div>
					
					<div>
						<h3 className="font-bold text-white mb-3 sm:mb-6 text-base sm:text-lg">{t("contact.social")}</h3>
						<div className="flex gap-3 mb-3 sm:mb-6">
							<a
								href="https://www.instagram.com/endurance3.es?igsh=dDVtdHhxaG9nc24="
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-[#2B2B2B] border border-white/30 rounded flex items-center justify-center hover:bg-[#2B2B2B]/80 transition-colors cursor-pointer"
							>
								<svg
									className="w-5 h-5 text-white"
									fill="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</a>
						</div>
						<p className="text-white/70 text-xs sm:text-sm leading-relaxed">
							{t("contact.description")}
						</p>
					</div>
				</div>
			</div>
			
			{/* Footer con datos y logo */}
			<div className="relative z-10 container mx-auto px-4 sm:px-6 mt-auto pt-4 pb-6">
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
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-xs sm:text-sm">
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
	);
}
