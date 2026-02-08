import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/services" },
	title: "Servicios",
	description:
		"Entrenamiento online, testing deportivo, gestión de clubes y asesoramiento. Servicios de planificación y rendimiento de Enduranc3.",
	openGraph: {
		title: "Servicios | Enduranc3",
		description:
			"Entrenamiento online, testing, gestión de clubes y asesoramiento. Planificación y rendimiento.",
	},
};

export default function ServicesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
