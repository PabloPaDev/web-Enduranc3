import Header from "@/components/Header";
import SimpleFooter from "@/components/SimpleFooter";
import Mujer from "@/sections/Mujer";

export default function MujerPage() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header logoVariant="white" />
			<Mujer />
			<SimpleFooter />
		</main>
	);
}
