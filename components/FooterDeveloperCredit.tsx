import Image from "next/image";

/**
 * Crédito del desarrollador: debajo de todo en el footer, en todas las versiones.
 * Logo en blanco para ir acorde al footer oscuro.
 */
export default function FooterDeveloperCredit() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-1 mt-2 text-center text-[8px] sm:text-xs text-white/40">
			<span>Objetivo web alcanzado por</span>
			<a
				href="https://pablopadev.es/"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-0.5 hover:text-white transition-colors"
			>
				<span>PabloPaDev</span>
				<Image
					src="/images/pablodev.png"
					alt="Pablo Palacios - Desarrollador Web"
					width={14}
					height={14}
					className="h-3.5 w-3.5 object-contain brightness-0 invert opacity-90"
				/>
			</a>
		</div>
	);
}
