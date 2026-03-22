import Header from "@/components/Header";
import ServicesStyleFooter from "@/components/ServicesStyleFooter";
import Mujer from "@/sections/Mujer";
import CicloActivaProblemaSection from "@/sections/CicloActivaProblemaSection";
import CicloActivaSolucionSection from "@/sections/CicloActivaSolucionSection";
import CicloActivaEquipoSection from "@/sections/CicloActivaEquipoSection";
import CicloActivaChatbot from "@/components/CicloActivaChatbot";

export default function MujerPage() {
	return (
		<main className="min-h-screen bg-[#2B2B2B] text-white">
			<Header logoVariant="white" />
			<Mujer />
			<div className="h-screen" aria-hidden />
			<div className="sticky top-0 z-10 scroll-mt-20 rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-[#2B2B2B]">
				<CicloActivaProblemaSection />
			</div>
			<div className="sticky top-0 z-20 min-h-screen flex flex-col justify-center scroll-mt-20 rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-ciclo-activa">
				<CicloActivaSolucionSection />
			</div>
			<div className="relative z-30 scroll-mt-20 rounded-t-3xl shadow-[0_-30px_60px_rgba(0,0,0,0.8)] overflow-hidden bg-ciclo-activa">
				<CicloActivaEquipoSection />
			</div>
			<div className="relative z-40 bg-[#2B2B2B]">
				<ServicesStyleFooter />
			</div>
			<CicloActivaChatbot />
		</main>
	);
}
