"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

		return (
			<>
				<header 
					className={`${isMenuOpen ? "fixed bg-black/40 backdrop-blur-sm" : "absolute"} top-0 left-0 right-0 z-50 w-full transition-opacity duration-500 ${
						isScrolled && !isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
					}`}
				>
				<nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
					<Link href="/" className="flex items-center">
						<Image
							src="/images/logoEndurance.png"
							alt="Enduranc3 Logo"
							width={200}
							height={70}
							className="h-auto w-[140px] sm:w-[200px]"
							priority
						/>
					</Link>
					<div className="hidden sm:block">
						<Navigation />
					</div>
				</nav>
			</header>
			
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] p-2 sm:p-3 bg-[#2B2B2B]/90 backdrop-blur-sm rounded-lg transition-all duration-500 ${
					isScrolled || isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				}`}
				aria-label="Menú"
			>
				<svg
					className="w-5 h-5 sm:w-6 sm:h-6 text-white"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					{isMenuOpen ? (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					) : (
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
					)}
				</svg>
			</button>
		</>
	);
}
