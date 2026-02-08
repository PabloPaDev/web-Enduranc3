import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/mujer" },
	title: "Ciclo Activa",
	description:
		"Ciclo Activa: entrenamiento adaptado a la fisiología femenina. Integración de evidencia científica en el rendimiento deportivo. Proyecto Enduranc3.",
	icons: {
		icon: "/images/Ciclo-Activa.png",
		apple: "/images/Ciclo-Activa.png",
	},
	openGraph: {
		title: "Ciclo Activa | Enduranc3",
		description:
			"Entrenamiento adaptado a la fisiología femenina. Enfoque multidisciplinar y basado en evidencia.",
	},
};

export default function MujerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
