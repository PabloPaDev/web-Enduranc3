"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import esTranslations from "@/translations/es.json";

type Language = "es" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>("es");
	// Español por defecto: carga síncrona para primera pintada rápida
	const [translations, setTranslations] = useState<Record<string, any>>(esTranslations);

	useEffect(() => {
		// Aplicar idioma guardado después del primer render (primera carga siempre en español)
		const savedLanguage = localStorage.getItem("language") as Language | null;
		if (savedLanguage === "en") {
			setLanguageState("en");
		}
	}, []);

	useEffect(() => {
		if (language === "es") {
			setTranslations(esTranslations);
			return;
		}
		// Cargar inglés solo cuando el usuario cambie a inglés
		import(`@/translations/en.json`)
			.then((mod) => setTranslations(mod.default))
			.catch(() => setTranslations(esTranslations));
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
