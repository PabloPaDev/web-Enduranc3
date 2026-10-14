/**
 * Rutas de la herramienta CicloActiva bajo el mismo dominio
 * (rewrites → proyecto Vercel independiente con basePath /cicloactiva).
 */
export const CICLOACTIVA_BASE = "/cicloactiva" as const;

export const CICLOACTIVA_PATHS = {
	home: CICLOACTIVA_BASE,
	demo: `${CICLOACTIVA_BASE}/demo/evaluacion`,
	login: `${CICLOACTIVA_BASE}/login`,
} as const;
