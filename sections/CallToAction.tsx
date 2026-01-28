import Link from "next/link";

export default function CallToAction() {
	return (
		<section className="bg-green-400 py-16 md:py-20 relative">
			<div className="container mx-auto px-6">
				<p className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-5xl mx-auto mb-8">
					Our mission is to improve suburban quality of life by reducing car dependency and promoting active transportation.
				</p>
				<div className="flex justify-start">
					<Link
						href="/register"
						className="inline-flex items-center gap-2 border-2 border-green-400 bg-[#2B2B2B] hover:bg-[#2B2B2B]/80 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
					>
						REGISTER
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</Link>
				</div>
			</div>
		</section>
	);
}
