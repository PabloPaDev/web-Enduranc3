import type { Metadata } from "next";

export const metadata: Metadata = {
	alternates: { canonical: "/blog" },
	title: "Blog",
	description:
		"Artículos y experiencias del equipo Enduranc3 sobre entrenamiento, rendimiento y deporte.",
	openGraph: {
		title: "Blog | Enduranc3",
		description: "Artículos y experiencias sobre entrenamiento y rendimiento deportivo.",
	},
};

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
