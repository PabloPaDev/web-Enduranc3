import Header from "@/components/Header";
import ServicesStyleFooter from "@/components/ServicesStyleFooter";
import Mujer from "@/sections/Mujer";
import CicloActivaChatbot from "@/components/CicloActivaChatbot";

export default function MujerPage() {
	return (
		<main className="min-h-screen flex flex-col">
			<Header logoVariant="white" />
			<Mujer />
			<ServicesStyleFooter />
			<CicloActivaChatbot />
		</main>
	);
}
