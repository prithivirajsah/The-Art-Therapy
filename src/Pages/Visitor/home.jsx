import Header from '../../components/header'
import Footer from '../../components/footer'
import { FiArrowRight, FiHeart, FiMessageCircle } from 'react-icons/fi'

const resources = [
  ['🎨', 'Art Therapy Activities', 'Guided exercises grounded in therapeutic practice'],
  ['📄', 'Worksheets', 'Printable and digital creative exploration sheets'],
  ['📓', 'Workbooks', 'Step-by-step creative journeys to work through'],
  ['✍️', 'Guided Journaling', 'Prompts to help you reflect and process emotions'],
  ['🌿', 'Mindfulness', 'Gentle practices to anchor you in the present'],
  ['🖌️', 'Creative Exercises', 'Playful explorations for every skill level'],
]

const plans = [
  { name: 'Free', tone: 'bg-[#e7d9cf] text-[#665d57]', features: ['5 activities per month', 'Limited worksheets', 'Basic journaling', 'Community view'], action: 'Get started free' },
  { name: 'Member', tone: 'bg-[#789d7d] text-white', popular: true, features: ['Unlimited activities', 'All worksheets & workbooks', 'Full journaling', 'Community sharing', 'Seasonal themes', 'New content weekly'], action: 'Become a member' },
  { name: 'Premium', tone: 'bg-[#403832] text-white', features: ['Everything in Member', 'Online courses', 'Live workshops', 'Priority support', 'Printable resource packs', 'Expert Q&A sessions'], action: 'Go premium' },
]

function Home({ onHome, onResources, onPricing, onLogin, onStartJourney }) {
	return (
		<div className="bg-[#fbf8f2] text-[#403832]">
			<Header onHome={onHome} onResources={onResources} onPricing={onPricing} onLogin={onLogin} onStartJourney={onStartJourney} />

			<main>
				<section id="home" className="relative overflow-hidden bg-[#f7f0e6]">
					<div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#e8e5d9] opacity-70" />
					<div className="absolute -bottom-48 -left-24 h-80 w-80 rounded-full bg-[#eee0d3] opacity-70" />
					<div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-24">
						<div className="max-w-xl">
							<p className="inline-flex rounded-full bg-[#edf4ef] px-4 py-2 text-sm text-[#5f8065]">🌿 A gentle creative practice, every day</p>
							<h1 className="mt-8 font-serif text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl">Your daily <span className="block italic text-[#789d7d]">creative moment</span></h1>
							<p className="mt-8 max-w-lg text-lg leading-8 text-[#756b64]">Discover gentle creative activities, mindful reflection and meaningful moments designed to help you slow down, create and connect with yourself.</p>
							<div className="mt-9 flex flex-col gap-3 sm:flex-row">
								<button type="button" onClick={onStartJourney} className="rounded-xl bg-[#789d7d] px-7 py-4 font-medium text-white shadow-lg shadow-[#789d7d]/20 transition hover:bg-[#648b6b]">Begin Your Journey</button>
								<a href="#resources" className="rounded-xl border border-[#dfd0c4] bg-white px-7 py-4 text-center font-medium transition hover:border-[#789d7d]">Explore Resources</a>
							</div>
						</div>
						<div className="relative mx-auto w-full max-w-xl">
							<img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1000&q=85" alt="Artist painting a colorful canvas" className="aspect-[1.08] w-full rounded-[1.5rem] object-cover shadow-2xl" />
							<div className="absolute -bottom-6 left-1/6 w-[50%] -translate-x-1/2 rounded-2xl bg-white px-5 py-5 shadow-xl sm:px-7"><strong className="block text-sm">✨ Today&apos;s activity is ready</strong><span className="mt-1 block text-sm text-[#9a8d82]">Autumn leaf watercolour · 20 min</span></div>
						</div>
					</div>
				</section>

				<section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
					<div className="mx-auto max-w-6xl text-center"><h2 className="font-serif text-3xl font-semibold sm:text-5xl">A little time for yourself, every day</h2><p className="mt-4 text-lg text-[#847970]">A simple, unhurried ritual to come back to again and again.</p>
						<div className="mt-16 grid gap-10 md:grid-cols-4">{[['01', 'Discover', 'Find an activity or resource that resonates with you today'], ['02', 'Create', 'Give yourself quiet, unhurried time to make something'], ['03', 'Reflect', 'Write a few thoughts about your experience'], ['04', 'Connect', 'Optionally share with a gentle, supportive community']].map(([number, title, text]) => <div key={number} className="relative"><span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#b1ceb4] bg-[#edf4ef] font-serif text-2xl font-semibold text-[#648b6b]">{number}</span><h3 className="mt-6 font-serif text-2xl font-semibold">{title}</h3><p className="mx-auto mt-3 max-w-xs leading-7 text-[#847970]">{text}</p></div>)}</div>
					</div>
				</section>

				<section className="bg-[#fbf8f2] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-6xl text-center"><p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9a8d82]">Today&apos;s inspiration</p><div className="mt-8 rounded-[2rem] border border-[#e5d9ce] bg-white px-6 py-16 shadow-[0_18px_50px_rgba(77,60,45,0.06)] sm:px-10"><span className="text-4xl text-[#dfd0c4]">&quot;</span><blockquote className="mx-auto max-w-4xl font-serif text-3xl italic leading-tight sm:text-5xl">Take a quiet moment to notice what is around you.</blockquote><a href="#activity" className="mt-10 inline-block rounded-xl bg-[#cb8b78] px-7 py-4 font-medium text-white transition hover:bg-[#b97865]">Explore today&apos;s activity</a></div></div></section>

				<section id="resources" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-6xl"><div className="text-center"><h2 className="font-serif text-3xl font-semibold sm:text-5xl">Explore creative resources</h2><p className="mt-4 text-lg text-[#847970]">A growing library of therapeutic creative activities and materials.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{resources.map(([icon, title, text], index) => <a href={`#resource-${index + 1}`} key={title} className={`rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-lg ${index === 3 ? 'border-[#a8c8ac] bg-[#edf4ef]' : 'border-[#e5d9ce] bg-[#fbf8f2]'}`}><span className="text-3xl">{icon}</span><h3 className="mt-8 font-serif text-xl font-semibold">{title}</h3><p className="mt-3 leading-6 text-[#756b64]">{text}</p></a>)}</div></div></section>

				<section id="community" className="bg-[#f7f0e6] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-6xl"><div className="text-center"><h2 className="font-serif text-3xl font-semibold sm:text-5xl">Join a nurturing creative community</h2><p className="mt-4 text-lg text-[#847970]">A gentle space to share your creations and find inspiration in others.</p></div><div className="mt-12 grid gap-7 lg:grid-cols-3">{[['Margaret', 'M', 'Today&apos;s leaf painting reminded me of walks in my garden. I felt so peaceful.', '14', '3', 'photo-1513364776144-60967b0f800f'], ['Anne', 'A', 'I&apos;ve never painted before but the watercolour activity was so calming. I&apos;m hooked.', '22', '7', 'photo-1516979187457-637abb4f9353'], ['Susan', 'S', 'The morning journaling prompt was exactly what I needed. Thank you for this space.', '31', '5', 'photo-1547891654-e66ed7ebb968']].map(([name, initial, quote, likes, comments, image]) => <article key={name} className="overflow-hidden rounded-2xl border border-[#e5d9ce] bg-white"><img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=80`} alt="Creative community artwork" className="h-56 w-full object-cover" /><div className="p-6"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#cb8b78] text-white">{initial}</span><div><h3 className="font-medium">{name}</h3><p className="text-sm text-[#a49489]">Today</p></div></div><p className="mt-5 leading-7 text-[#756b64]">&quot;{quote}&quot;</p><div className="mt-5 flex items-center gap-4 text-sm text-[#a49489]"><span className="inline-flex items-center gap-1.5"><FiHeart aria-hidden="true" />{likes}</span><span className="inline-flex items-center gap-1.5"><FiMessageCircle aria-hidden="true" />{comments}</span></div></div></article>)}</div></div></section>

				<section id="pricing" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mx-auto max-w-5xl"><div className="text-center"><h2 className="font-serif text-3xl font-semibold sm:text-5xl">Make creativity part of your routine</h2><p className="mt-4 text-lg text-[#847970]">Choose a plan that feels right for you.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-3xl p-8 ${plan.tone} ${plan.popular ? 'border-2 border-[#5f8065] shadow-xl shadow-[#789d7d]/20' : ''}`}>{plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#5f8065] px-4 py-2 text-xs font-medium text-white">Most popular</span>}<h3 className="text-center font-serif text-3xl font-semibold">{plan.name}</h3><ul className="mt-8 space-y-4 text-sm">{plan.features.map((feature) => <li key={feature}>✓ &nbsp;{feature}</li>)}</ul><a href="#journey" className={`mt-9 block rounded-xl border px-5 py-3 text-center font-medium ${plan.popular ? 'border-white bg-white text-[#5f8065]' : 'border-current/30 bg-white/5'}`}>{plan.action}</a></article>)}</div><a href="#plan-features" onClick={(event) => { event.preventDefault(); onPricing() }} className="mx-auto mt-10 flex w-fit items-center gap-2 text-lg text-[#789d7d] transition hover:text-[#5f8065]">Compare all plan features <FiArrowRight aria-hidden="true" /></a></div></section>
			</main>
			<Footer />
		</div>
	)
}

export default Home
