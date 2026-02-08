"use client";

import {
	LanguageProvider as BaseLanguageProvider,
	type Language,
} from "@/contexts/LanguageContext";

interface LanguageProviderProps {
	children: React.ReactNode;
	initialLanguage: Language;
}

export default function LanguageProvider({
	children,
	initialLanguage,
}: LanguageProviderProps) {
	return (
		<BaseLanguageProvider initialLanguage={initialLanguage}>
			{children}
		</BaseLanguageProvider>
	);
}
