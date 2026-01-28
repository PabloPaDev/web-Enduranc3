import Image from "next/image";

export default function Footer() {
	return (
		<footer className="relative bg-[#2B2B2B] text-white">
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/End-4.jpg"
					alt="Triathlete"
					fill
					className="object-cover opacity-40"
					quality={100}
				/>
				<div className="absolute inset-0 bg-[#2B2B2B]/70"></div>
			</div>
			
			<div className="relative z-10 container mx-auto px-6 py-24">
				<div className="grid md:grid-cols-2 gap-12 mb-16">
					<div>
						<div className="space-y-6">
							<div>
								<h3 className="font-bold text-white mb-2 text-xl">Email</h3>
								<p className="text-white/80 text-base">info@enduranc3.es</p>
							</div>
							<div>
								<h3 className="font-bold text-white mb-2 text-xl">Patrocinios</h3>
								<p className="text-white/80 text-base">patrocinios@enduranc3.es</p>
							</div>
						</div>
					</div>
					
					<div>
						<h3 className="font-bold text-white mb-4 text-xl">Redes Sociales</h3>
						<div className="flex gap-3 mb-6">
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
						<div>
							<p className="text-white/70 text-sm leading-relaxed text-justify">
								Enduranc3 es un movimiento/empresa que busca fomentar la actividad física y el bienestar social, promoviendo una vida activa y saludable para todos. Nuestro objetivo es crear una comunidad fuerte y comprometida que inspire a más personas a adoptar un estilo de vida activo y disfrutar de los beneficios del deporte.
							</p>
						</div>
					</div>
				</div>
				
				<div className="pt-6 flex flex-col items-center">
					<div className="w-full max-w-4xl border-t border-white/30 mb-6"></div>
					<h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase">ENDURANC3</h2>
				</div>
			</div>
		</footer>
	);
}

