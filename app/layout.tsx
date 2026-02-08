import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";
import ScrollToHero from "@/components/ScrollToHero";

const inter = Inter({ 
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const righteous = Righteous({
	subsets: ["latin"],
	weight: ["400"],
	display: "swap",
	variable: "--font-righteous",
});

const siteName = "Enduranc3";

/**
 * JSON-LD: una única entidad (SportsOrganization).
 * No se declaran SoftwareApplication, Product ni entidades de app o producto futuro.
 * url solo si existe NEXT_PUBLIC_SITE_URL.
 */
function getOrganizationSchema(): string {
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
	const schema = {
		"@context": "https://schema.org",
		"@type": "SportsOrganization",
		name: siteName,
		description:
			"Organización de planificación deportiva profesional con enfoque multidisciplinar en rendimiento y salud. Entrenamiento basado en evidencia.",
		...(baseUrl && { url: baseUrl.replace(/\/$/, "") }),
		sameAs: ["https://www.instagram.com/endurance3.es"],
		areaServed: [
			{ "@type": "City", name: "Gandia" },
			{ "@type": "AdministrativeArea", name: "Valencia" },
			{ "@type": "Country", name: "España" },
		],
		knowsAbout: [
			"Entrenamiento deportivo",
			"Rendimiento deportivo",
			"Prevención y readaptación de lesiones",
			"Integración salud y deporte",
		],
	};
	return JSON.stringify(schema);
}

export const metadata: Metadata = {
	metadataBase: process.env.NEXT_PUBLIC_SITE_URL
		? new URL(process.env.NEXT_PUBLIC_SITE_URL)
		: undefined,
	alternates: { canonical: "/" },
	title: {
		default: siteName,
		template: `%s | ${siteName}`,
	},
	description:
		"Enduranc3 es una organización de planificación deportiva profesional con enfoque multidisciplinar en rendimiento y salud. Entrenamiento basado en evidencia.",
	keywords: [
		"planificación deportiva",
		"entrenamiento profesional",
		"rendimiento deportivo",
		"ciencias del deporte",
		"salud y deporte",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: { index: true, follow: true },
	},
	openGraph: {
		type: "website",
		locale: "es_ES",
		alternateLocale: "en_GB",
		siteName,
		title: siteName,
		description:
			"Enduranc3. Planificación deportiva profesional, enfoque multidisciplinar en rendimiento y salud.",
	},
	icons: {
		icon: "/images/logo.png",
		apple: "/images/logo.png",
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const lang = cookieStore.get("language")?.value === "en" ? "en" : "es";

	const scrollToTopScript = `
		(function() {
			if (typeof history !== 'undefined' && 'scrollRestoration' in history) history.scrollRestoration = 'manual';
			if (!window.location.hash) {
				window.scrollTo(0, 0);
				if (document.documentElement) document.documentElement.scrollTop = 0;
				if (document.body) document.body.scrollTop = 0;
			}
		})();
	`;

	const organizationSchema = getOrganizationSchema();

	return (
		<html lang={lang} className={righteous.variable}>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<link rel="apple-touch-icon" href="/images/icon-pwa-512.png" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: organizationSchema }}
				/>
			</head>
			<body>
				<script dangerouslySetInnerHTML={{ __html: scrollToTopScript }} />
				<LanguageProvider initialLanguage={lang}>
					<ScrollToHero />
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
