import { FiArrowRight, FiBookOpen, FiClock, FiFeather, FiImage, FiPlay, FiSun, FiTarget } from 'react-icons/fi'
import Navbar from './navbar'

function Home({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen bg-[#fbf8f2] text-[#403832]">
      <Navbar activeItem="home" onNavigate={onNavigate} onLogout={onLogout} />

      <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <header>
            <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Good morning, Susan <span className="text-[#789d7d]">🍃</span>
            </h1>
            <p className="mt-4 text-base text-[#756b64] sm:text-lg">Take a few quiet moments for yourself today.</p>
          </header>

          <section className="mt-14 overflow-hidden rounded-[2rem] bg-[#4b403a] px-7 py-9 text-white shadow-sm sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-5 py-2.5 text-sm">🎨 Today&apos;s Creative Moment</span>
                <h2 className="mt-7 font-serif text-2xl font-semibold sm:text-3xl">Autumn Leaf Watercolour</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  Gather a few fallen leaves and let their shapes guide your brush. A gentle exercise in observation and presence.
                </p>
                <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70 sm:text-base">
                  <span className="inline-flex items-center gap-2"><FiClock aria-hidden="true" />20 minutes</span>
                  <span className="inline-flex items-center gap-2"><FiFeather aria-hidden="true" />Beginner-friendly</span>
                  <span className="inline-flex items-center gap-2">🍂 Autumn theme</span>
                </div>
                <button type="button" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#8eae8e] px-7 py-4 text-base font-semibold transition hover:bg-[#a3bea1]">
                  <FiPlay aria-hidden="true" /> Begin Activity
                </button>
              </div>
              <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=85" alt="Painting a watercolour artwork" className="h-64 w-full rounded-3xl object-cover lg:h-72" />
            </div>
          </section>

          <div className="mt-9 grid gap-6 lg:grid-cols-2">
            <section className="rounded-[2rem] border border-[#c6dac8] bg-[#edf4ef] p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#789d7d]">Today&apos;s affirmation</p>
              <p className="mt-7 max-w-xl font-serif text-xl italic leading-relaxed text-[#403832] sm:text-2xl">
                &quot;I am enough exactly as I am, and my creativity flows freely.&quot;
              </p>
              <button type="button" className="mt-8 rounded-xl border-2 border-[#adc7af] bg-white px-6 py-3.5 text-[#5f8065] transition hover:bg-[#f8fcf8]">Reflect on this</button>
            </section>

            <section className="rounded-[2rem] border border-[#e5d9ce] bg-white/70 p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c28775]">Continue your journal</p>
              <p className="mt-7 text-base text-[#9a8d82]">Yesterday · Autumn Leaves Activity</p>
              <p className="mt-5 text-base leading-7 text-[#403832]">&quot;Today&apos;s activity helped me notice the beauty in small things. I hadn&apos;t looked closely at leaves in years...&quot;</p>
              <button type="button" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#c58c79] px-6 py-3.5 text-white transition hover:bg-[#b97c68]">
                <FiSun aria-hidden="true" /> Open Journal
              </button>
            </section>
          </div>

          <section className="mt-9 rounded-[2rem] border border-[#e5d9ce] bg-white p-7 sm:p-9">
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Your Creative Journey</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                [FiTarget, '12', 'Activities completed'],
                [FiBookOpen, '8', 'Creative days'],
                [FiSun, '5', 'Day streak'],
                [FiImage, '7', 'Artworks created'],
              ].map(([Icon, value, label]) => (
                <div key={label} className="rounded-2xl bg-[#fbf8f2] px-5 py-6 text-center">
                  <Icon className="mx-auto h-7 w-7 text-[#789d7d]" aria-hidden="true" />
                  <p className="mt-4 font-serif text-3xl font-semibold text-[#403832]">{value}</p>
                  <p className="mt-2 text-sm text-[#9a8d82]">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-7">
              <div className="flex items-center justify-between text-sm text-[#9a8d82]">
                <span>Monthly goal</span>
                <span>12 / 20 activities</span>
              </div>
              <div className="mt-3 h-3 overflow-hidden rounded-full bg-[#eee7df]">
                <div className="h-full w-[60%] rounded-full bg-[#8eae8e]" />
              </div>
            </div>
          </section>

          <section className="mt-9 rounded-[2rem] border border-[#e5d9ce] bg-white p-7 sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-2xl font-semibold sm:text-3xl">Recent Creations</h2>
              <button type="button" onClick={() => onNavigate('art')} className="inline-flex items-center gap-2 text-sm text-[#789d7d] transition hover:text-[#5f8065] sm:text-base">
                View My Gallery <FiArrowRight aria-hidden="true" />
              </button>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {[
                ['Autumn Leaves', 'Today', 'photo-1473448912268-2022ce9509d8'],
                ['Morning Light', 'Yesterday', 'photo-1547891654-e66ed7ebb968'],
                ['Quiet Garden', '3 days ago', 'photo-1513364776144-60967b0f800f'],
              ].map(([title, date, image]) => (
                <article key={title} className="overflow-hidden rounded-2xl border border-[#e5d9ce]">
                  <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=700&q=85`} alt={`${title} artwork`} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-base font-medium text-[#403832]">{title}</h3>
                    <p className="mt-2 text-sm text-[#9a8d82]">{date}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
