import Image from "next/image";

/**
 * Crédito del desarrollador: debajo de todo en el footer, en todas las versiones.
 * Logo en blanco para ir acorde al footer oscuro.
 */
export default function FooterDeveloperCredit() {
	return (
		<div className="flex flex-wrap items-center justify-center gap-1 mt-2 text-center text-[7px] sm:text-xs text-white/40">
			<span>Objetivo alcanzado por</span>
			<a
				href="https://pablopadev.es/"
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-0.5 sm:gap-1 hover:text-white transition-colors"
			>
				<span>PabloPaDev</span>
				<Image
					src="/images/pablodev.png"
					alt="Pablo Palacios - Desarrollador Web"
					width={24}
					height={24}
					sizes="24px"
					className="h-3 w-3 sm:h-4 sm:w-4 object-contain brightness-0 invert opacity-90"
					quality={100}
				/>
			</a>
		</div>
	);
}
