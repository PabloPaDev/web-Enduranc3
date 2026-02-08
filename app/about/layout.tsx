import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/about" },
	title: "Sobre nosotros",
	description:
		"Conoce al equipo y la filosofía de Enduranc3. Planificación deportiva profesional con enfoque multidisciplinar.",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
