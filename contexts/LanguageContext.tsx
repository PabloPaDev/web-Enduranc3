"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import esTranslations from "@/translations/es.json";
import enTranslations from "@/translations/en.json";

export type Language = "es" | "en";

const translations = {
	es: esTranslations as Record<string, unknown>,
	en: enTranslations as Record<string, unknown>,
};

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getByPath(obj: Record<string, unknown>, key: string): unknown {
	const keys = key.split(".");
	let value: unknown = obj;
	for (const k of keys) {
		if (value && typeof value === "object" && k in (value as object)) {
			value = (value as Record<string, unknown>)[k];
		} else {
			return key;
		}
	}
	return value !== undefined ? value : key;
}

interface LanguageProviderProps {
	children: ReactNode;
	initialLanguage: Language;
}

export function LanguageProvider({ children, initialLanguage }: LanguageProviderProps) {
	const [language, setLanguageState] = useState<Language>(initialLanguage);

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		if (typeof window !== "undefined") {
			window.localStorage.setItem("language", lang);
			document.cookie = `language=${lang}; path=/; max-age=31536000`;
		}
	};

	const t = (key: string): any => {
		const dict = translations[language];
		return getByPath(dict, key);
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
