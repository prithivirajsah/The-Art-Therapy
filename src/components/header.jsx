import { useState } from 'react'

function Header({ onHome, onResources, onPricing, onLogin, onStartJourney, isAuthenticated, onDashboard, onLogout }) {
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header className="border-b border-[#e5ddd3] bg-[#fbf8f2] text-[#665d57]">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
				<a href="#home" className="flex items-center gap-3" aria-label="The Art Therapy Resources Hub home">
					<span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8da98a] to-[#c78a6c] text-2xl shadow-sm" aria-hidden="true">🌿</span>
					<span className="leading-tight">
						<strong className="block font-serif text-lg font-semibold text-[#403832] sm:text-xl">The Art Therapy</strong>
						<span className="block text-sm text-[#789d7d]">Resources Hub</span>
					</span>
				</a>

				<nav className="hidden items-center gap-2 md:flex" aria-label="Main navigation">
					<button type="button" onClick={onHome} className="rounded-xl bg-[#edf4ef] px-5 py-3 text-[#719477] transition hover:bg-[#e2eee5]">Home</button>
					<button type="button" onClick={onResources} className="rounded-xl px-5 py-3 transition hover:bg-[#f0ebe4] hover:text-[#719477]">Resources</button>
					<button type="button" onClick={onPricing} className="rounded-xl px-5 py-3 transition hover:bg-[#f0ebe4] hover:text-[#719477]">Pricing</button>
				</nav>

				<div className="hidden items-center gap-9 md:flex">
					{isAuthenticated ? (
						<>
							<button type="button" onClick={onDashboard} className="text-base transition hover:text-[#719477]">Dashboard</button>
							<button type="button" onClick={onLogout} className="rounded-xl border-2 border-[#e5d9ce] bg-white px-7 py-3.5 text-base transition hover:border-[#789d7d] hover:text-[#719477]">Log out</button>
						</>
					) : (
						<>
							<button type="button" onClick={onLogin} className="text-base transition hover:text-[#719477]">Log in</button>
							<button type="button" onClick={onStartJourney} className="rounded-xl bg-[#789d7d] px-7 py-3.5 font-medium text-white shadow-sm transition hover:bg-[#648b6b]">Start Your Journey</button>
						</>
					)}
				</div>

				<button type="button" onClick={() => setMenuOpen((open) => !open)} className="rounded-lg p-2 text-[#403832] hover:bg-[#f0ebe4] md:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label="Toggle navigation">
					<span className="block h-0.5 w-6 bg-current" />
					<span className="my-1.5 block h-0.5 w-6 bg-current" />
					<span className="block h-0.5 w-6 bg-current" />
				</button>
			</div>

			{menuOpen && (
				<nav id="mobile-navigation" className="border-t border-[#e5ddd3] px-5 pb-5 pt-3 md:hidden" aria-label="Mobile navigation">
					<button type="button" onClick={onHome} className="block w-full rounded-lg px-3 py-2 text-left text-[#719477]">Home</button>
					<button type="button" onClick={onResources} className="block w-full rounded-lg px-3 py-2 text-left hover:bg-[#f0ebe4]">Resources</button>
					<button type="button" onClick={onPricing} className="block w-full rounded-lg px-3 py-2 text-left hover:bg-[#f0ebe4]">Pricing</button>
					{isAuthenticated ? (
						<>
							<button type="button" onClick={onDashboard} className="mt-2 block w-full rounded-lg px-3 py-2 text-left hover:bg-[#f0ebe4]">Dashboard</button>
							<button type="button" onClick={onLogout} className="mt-2 block w-full rounded-xl border border-[#e5d9ce] bg-white px-3 py-3 text-center">Log out</button>
						</>
					) : (
						<>
							<button type="button" onClick={onLogin} className="mt-2 block w-full rounded-lg px-3 py-2 text-left hover:bg-[#f0ebe4]">Log in</button>
							<button type="button" onClick={onStartJourney} className="mt-2 block w-full rounded-xl bg-[#789d7d] px-3 py-3 text-center font-medium text-white">Start Your Journey</button>
						</>
					)}
				</nav>
			)}
		</header>
	)
}

export default Header
