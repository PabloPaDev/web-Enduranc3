import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/contact" },
	title: "Contacto",
	description:
		"Contacta con Enduranc3. Consultas sobre planificación deportiva, entrenamiento y rendimiento.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
