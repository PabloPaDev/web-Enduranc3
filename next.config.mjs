/** @type {import('next').NextConfig} */

/**
 * Integración path: /cicloactiva/* → origen del proyecto CicloActiva (Next 16).
 * Local: CICLOACTIVA_ORIGIN=http://localhost:3001
 * Vercel (build Endurance): CICLOACTIVA_ORIGIN=https://<proyecto-cicloactiva>.vercel.app
 *
 * CicloActiva debe construirse con NEXT_PUBLIC_BASE_PATH=/cicloactiva.
 */
const cicloOrigin = (process.env.CICLOACTIVA_ORIGIN || "")
	.trim()
	.replace(/\/$/, "");

const nextConfig = {
	images: {
		unoptimized: false,
		formats: ["image/avif", "image/webp"],
	},
	async rewrites() {
		if (!cicloOrigin) return [];
		return [
			{
				source: "/cicloactiva",
				destination: `${cicloOrigin}/cicloactiva`,
			},
			{
				source: "/cicloactiva/:path*",
				destination: `${cicloOrigin}/cicloactiva/:path*`,
			},
		];
	},
};

export default nextConfig;
