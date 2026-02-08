import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT_EMAIL = "enduranc3.es@gmail.com";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { nombre, email, asunto, mensaje } = body;

		if (!nombre?.trim() || !email?.trim() || !asunto?.trim() || !mensaje?.trim()) {
			return NextResponse.json(
				{ ok: false, error: "Faltan campos obligatorios" },
				{ status: 400 }
			);
		}

		const user = process.env.EMAIL_USER;
		const pass = process.env.EMAIL_APP_PASSWORD;

		if (!user || !pass) {
			console.error("EMAIL_USER o EMAIL_APP_PASSWORD no configurados");
			return NextResponse.json(
				{ ok: false, error: "Servicio de correo no configurado" },
				{ status: 503 }
			);
		}

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: { user, pass },
		});

		await transporter.sendMail({
			from: `"Web Enduranc3" <${user}>`,
			to: RECIPIENT_EMAIL,
			replyTo: email.trim(),
			subject: `[Web] ${asunto.trim()}`,
			text: [
				`Nombre: ${nombre.trim()}`,
				`Email: ${email.trim()}`,
				`Asunto: ${asunto.trim()}`,
				"",
				mensaje.trim(),
			].join("\n"),
			html: [
				`<p><strong>Nombre:</strong> ${escapeHtml(nombre.trim())}</p>`,
				`<p><strong>Email:</strong> <a href="mailto:${escapeHtml(email.trim())}">${escapeHtml(email.trim())}</a></p>`,
				`<p><strong>Asunto:</strong> ${escapeHtml(asunto.trim())}</p>`,
				"<hr/>",
				`<p>${escapeHtml(mensaje.trim()).replace(/\n/g, "<br/>")}</p>`,
			].join(""),
		});

		return NextResponse.json({ ok: true });
	} catch (err) {
		console.error("Error enviando correo:", err);
		return NextResponse.json(
			{ ok: false, error: "No se pudo enviar el mensaje" },
			{ status: 500 }
		);
	}
}

function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}
