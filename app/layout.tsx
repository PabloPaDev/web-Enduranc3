import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";

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
	return (
		<html lang="es" className={righteous.variable}>
			<body>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}
