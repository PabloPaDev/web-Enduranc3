"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("es");
	const [translations, setTranslations] = useState<Record<string, any>>({});

	useEffect(() => {
		// Cargar el idioma guardado en localStorage
		const savedLanguage = localStorage.getItem("language") as Language | null;
		if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
			setLanguageState(savedLanguage);
		}
	}, []);

	useEffect(() => {
		// Cargar traducciones según el idioma
		import(`@/translations/${language}.json`)
			.then((mod) => {
				setTranslations(mod.default);
			})
			.catch(() => {
				// Si falla, usar español por defecto
				import(`@/translations/es.json`)
					.then((mod) => {
						setTranslations(mod.default);
					});
			});
	}, [language]);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		localStorage.setItem("language", lang);
	};

	const t = (key: string): any => {
		const keys = key.split(".");
		let value: any = translations;
		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				return key; // Retornar la clave si no se encuentra la traducción
			}
		}
		return value !== undefined ? value : key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
