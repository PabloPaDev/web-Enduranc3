"use client";

import { LanguageProvider as BaseLanguageProvider } from "@/contexts/LanguageContext";

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
	return <BaseLanguageProvider>{children}</BaseLanguageProvider>;
}
