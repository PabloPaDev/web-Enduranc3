/**
 * Genera iconos PWA: logo centrado sobre fondo blanco (192x192 y 512x512).
 * Uso: npm run generate-pwa-icons
 * Requiere: sharp (devDependency)
 */
const path = require("path");
const fs = require("fs");

const ROOT = path.join(__dirname, "..");
const LOGO = path.join(ROOT, "public", "images", "logo.png");
const OUT_512 = path.join(ROOT, "public", "images", "icon-pwa-512.png");
const OUT_192 = path.join(ROOT, "public", "images", "icon-pwa-192.png");

async function main() {
	let sharp;
	try {
		sharp = require("sharp");
	} catch {
		console.error("Instala sharp: npm install --save-dev sharp");
		process.exit(1);
	}

	if (!fs.existsSync(LOGO)) {
		console.error("No se encuentra public/images/logo.png");
		process.exit(1);
	}

	const size = 512;
	const padding = Math.round(size * 0.1);
	const logoSize = size - padding * 2;

	const logoBuf = await sharp(LOGO)
		.resize(logoSize, logoSize, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
		.png()
		.toBuffer();

	const base512 = sharp({
		create: {
			width: 512,
			height: 512,
			channels: 3,
			background: { r: 255, g: 255, b: 255 },
		},
	})
		.png()
		.composite([{ input: logoBuf, left: padding, top: padding }]);

	await base512.toFile(OUT_512);
	console.log("Generado:", "public/images/icon-pwa-512.png");

	const size192 = 192;
	const padding192 = Math.round(size192 * 0.1);
	const logoSize192 = size192 - padding192 * 2;
	const logoBuf192 = await sharp(LOGO)
		.resize(logoSize192, logoSize192, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
		.png()
		.toBuffer();

	const base192 = sharp({
		create: {
			width: 192,
			height: 192,
			channels: 3,
			background: { r: 255, g: 255, b: 255 },
		},
	})
		.png()
		.composite([{ input: logoBuf192, left: padding192, top: padding192 }]);

	await base192.toFile(OUT_192);
	console.log("Generado:", "public/images/icon-pwa-192.png");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
