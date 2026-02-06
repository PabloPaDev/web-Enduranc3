import type { Metadata } from "next";
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

export const metadata: Metadata = {
	title: "Enduranc3",
	description: "Web corporativa",
	icons: {
		icon: "/images/logo.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
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

	return (
		<html lang="es" className={righteous.variable}>
			<body>
				<script dangerouslySetInnerHTML={{ __html: scrollToTopScript }} />
				<LanguageProvider>
					<ScrollToHero />
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
