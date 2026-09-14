function Footer() {
	return (
		<footer className="bg-[#403832] text-[#d5cfca]">
			<div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:gap-16">
					<div>
						<h2 className="font-serif text-2xl font-semibold text-[#fffaf3]">The Art Therapy Resources Hub</h2>
						<p className="mt-4 max-w-sm text-base leading-7 text-[#bcb4ae]">A gentle space for creative healing and daily mindful practice.</p>
					</div>
					<nav aria-label="Explore links">
						<h3 className="font-medium text-[#fffaf3]">Explore</h3>
						<div className="mt-5 space-y-3 text-[#bcb4ae]">
							<a href="#resources" className="block transition hover:text-white">Resources</a>
							<a href="#courses" className="block transition hover:text-white">Courses</a>
							<a href="#community" className="block transition hover:text-white">Community</a>
						</div>
					</nav>
					<nav aria-label="Company links">
						<h3 className="font-medium text-[#fffaf3]">Company</h3>
						<div className="mt-5 space-y-3 text-[#bcb4ae]">
							<a href="#about" className="block transition hover:text-white">About</a>
							<a href="#contact" className="block transition hover:text-white">Contact</a>
							<a href="#pricing" className="block transition hover:text-white">Pricing</a>
						</div>
					</nav>
					<nav aria-label="Legal links">
						<h3 className="font-medium text-[#fffaf3]">Legal</h3>
						<div className="mt-5 space-y-3 text-[#bcb4ae]">
							<a href="#privacy" className="block transition hover:text-white">Privacy Policy</a>
							<a href="#terms" className="block transition hover:text-white">Terms of Use</a>
						</div>
					</nav>
				</div>

				<div className="mt-12 flex flex-col gap-5 border-t border-[#665c55] pt-6 text-sm text-[#bcb4ae] sm:flex-row sm:items-center sm:justify-between">
					<p>© 2026 Mindful Arts Therapy. All rights reserved.</p>
					<div className="flex gap-6">
						<a href="#instagram" className="transition hover:text-white">Instagram</a>
						<a href="#facebook" className="transition hover:text-white">Facebook</a>
						<a href="#pinterest" className="transition hover:text-white">Pinterest</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
