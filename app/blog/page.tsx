"use client";

import Header from "@/components/Header";
import Image from "next/image";
import ServicesStyleFooter from "@/components/ServicesStyleFooter";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
	const [expandedPost, setExpandedPost] = useState<number | null>(null);
	const { t } = useLanguage();

	const blogPosts = [
		{
			id: 1,
			title: t("blogPage.posts.carlos.title"),
			author: "Carlos Cabrera",
			date: "14 abril 2021",
			category: t("blogPage.category"),
			excerpt: t("blogPage.posts.carlos.excerpt"),
			content: t("blogPage.posts.carlos.content"),
			image: "/images/S-1.jpg",
			slug: "mi-camino-endurance-carlos"
		},
		{
			id: 2,
			title: t("blogPage.posts.chantal.title"),
			author: "Chantal",
			date: "14 abril 2021",
			category: t("blogPage.category"),
			excerpt: t("blogPage.posts.chantal.excerpt"),
			content: t("blogPage.posts.chantal.content"),
			image: "/images/End-1.jpg",
			slug: "mi-camino-endurance-chantal"
		},
		{
			id: 3,
			title: t("blogPage.posts.eva.title"),
			author: "Eva",
			date: "14 abril 2021",
			category: t("blogPage.category"),
			excerpt: t("blogPage.posts.eva.excerpt"),
			content: t("blogPage.posts.eva.content"),
			image: "/images/E-3.jpeg",
			slug: "mi-camino-endurance-eva"
		}
	];

	const togglePost = (postId: number) => {
		setExpandedPost(expandedPost === postId ? null : postId);
	};

	return (
		<main className="min-h-screen bg-[#2B2B2B] text-white">
			<Header />
			
			{/* Hero Section */}
			<section className="relative bg-[#2B2B2B] py-12 sm:py-20 md:py-32">
				<div className="container mx-auto px-4 sm:px-6">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-4 sm:mb-6">
						{t("blogPage.hero.title")}
					</h1>
					<p className="text-white/80 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
						{t("blogPage.hero.description")}
					</p>
				</div>
			</section>

			{/* Blog Posts */}
			<section aria-labelledby="blog-articles" className="py-12 sm:py-16 md:py-24 bg-[#2B2B2B]">
				<h2 id="blog-articles" className="sr-only">
					{t("blogPage.articlesHeading")}
				</h2>
				<div className="container mx-auto px-4 sm:px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
						{blogPosts.map((post, index) => {
							const isExpanded = expandedPost === post.id;
							return (
								<article
									key={post.id}
									className={`bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:border-[#E10613]/50 group col-span-1 ${
										isExpanded ? "lg:col-span-3 md:col-span-2" : ""
									}`}
								>
									<div className="relative w-full h-48 sm:h-64 md:h-80 overflow-hidden">
										<Image
											src={post.image}
											alt={post.title}
											fill
											sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
											className="object-cover group-hover:scale-105 transition-transform duration-300"
											priority={index === 0}
											quality={100}
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/80 to-transparent"></div>
									</div>
									<div className="p-4 sm:p-6">
										<div className="flex items-center gap-3 mb-3 text-sm text-white/70">
											<span className="text-[#E10613]">{post.category}</span>
											<span>•</span>
											<span>{post.date}</span>
										</div>
										<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#E10613] transition-colors">
											{post.title}
										</h3>
										<p className={`text-white/80 mb-4 transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
											{post.excerpt}
										</p>
										<div
											className={`overflow-hidden transition-all duration-500 ease-in-out ${
												isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
											}`}
										>
											<div className="pt-4 border-t border-white/10">
												<p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
													{post.content}
												</p>
											</div>
										</div>
										<button
											onClick={() => togglePost(post.id)}
											className="flex items-center gap-2 text-[#E10613] font-semibold hover:gap-3 transition-all cursor-pointer"
										>
											<span>{isExpanded ? t("blogPage.leerMenos") : t("blogPage.continuarLeyendo")}</span>
											<svg
												className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
											</svg>
										</button>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<ServicesStyleFooter />
		</main>
	);
}
