import { FiBookOpen, FiEdit3, FiGrid, FiPlus } from 'react-icons/fi'
import Navbar from './navbar'

const pageContent = {
  create: {
    title: 'Create',
    description: 'Make space for a creative moment and let your ideas take shape.',
    icon: FiEdit3,
    action: 'Start a new activity',
    cards: ['Autumn Leaf Watercolour', 'Colour and Emotion', 'Mindful Mark Making'],
  },
  journal: {
    title: 'Journal',
    description: 'Capture what you noticed, felt, and discovered during your creative practice.',
    icon: FiBookOpen,
    action: 'Write a new entry',
    cards: ['Yesterday · Autumn Leaves Activity', 'Monday · Morning Reflection', 'Sunday · Colour Meditation'],
  },
  art: {
    title: 'My Art',
    description: 'A private gallery for the creations you have made along your journey.',
    icon: FiGrid,
    action: 'Add artwork',
    cards: ['Autumn Leaves', 'Morning Light', 'Quiet Garden'],
  },
}

function Feature({ type, onNavigate, onLogout }) {
  const content = pageContent[type]
  const Icon = content.icon

  return (
    <div className="flex min-h-screen bg-[#fbf8f2] text-[#403832]">
      <Navbar activeItem={type} onNavigate={onNavigate} onLogout={onLogout} />
      <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3 text-[#789d7d]"><Icon className="h-7 w-7" aria-hidden="true" /><span className="text-sm font-semibold uppercase tracking-[0.18em]">My space</span></div>
              <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">{content.title}</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#756b64] sm:text-lg">{content.description}</p>
            </div>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#789d7d] px-6 py-3.5 font-semibold text-white transition hover:bg-[#648b6b]"><FiPlus aria-hidden="true" /> {content.action}</button>
          </div>

          <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.cards.map((card, index) => (
              <article key={card} className="overflow-hidden rounded-3xl border border-[#e5d9ce] bg-white shadow-sm">
                {type === 'art' ? <img src={`https://images.unsplash.com/${['photo-1473448912268-2022ce9509d8', 'photo-1547891654-e66ed7ebb968', 'photo-1513364776144-60967b0f800f'][index]}?auto=format&fit=crop&w=700&q=85`} alt={`${card} artwork`} className="h-52 w-full object-cover" /> : <div className="flex h-52 items-center justify-center bg-[#edf4ef]"><Icon className="h-14 w-14 text-[#8eae8e]" aria-hidden="true" /></div>}
                <div className="p-6"><h2 className="font-serif text-xl font-semibold">{card}</h2><p className="mt-3 text-sm leading-6 text-[#9a8d82]">{type === 'journal' ? 'Continue reflecting on this entry.' : type === 'create' ? 'A gentle practice for your creative journey.' : 'Created recently'}</p><button type="button" className="mt-5 text-sm font-medium text-[#648b6b] hover:underline">Open</button></div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Feature
