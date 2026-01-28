import Header from "@/components/Header";
import HeroServicios from "@/sections/HeroServicios";
import ContactSection from "@/sections/ContactSection";
import SimpleFooter from "@/components/SimpleFooter";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<HeroServicios />
			<ContactSection />
			<SimpleFooter />
		</main>
	);
}
