import { useMemo, useState } from 'react'
import { FiClock, FiSearch } from 'react-icons/fi'
import Header from '../../components/header'
import Footer from '../../components/footer'

const categories = ['All', 'Art Therapy Activities', 'Worksheets', 'Workbooks', 'Journals', 'Meditations', 'Guides', 'Mindfulness', 'Creative Exercises']

const resources = [
  { category: 'Art Therapy Activities', type: 'Activity', title: 'Autumn Leaf Watercolour', description: 'A mindful painting exercise using fallen leaves as your guide.', duration: '20 min', action: 'View', image: 'photo-1547891654-e66ed7ebb968' },
  { category: 'Worksheets', type: 'PDF', title: 'Morning Reflection Worksheet', description: 'A gentle printable worksheet to begin your day with intention.', duration: '15 min', action: 'Download', image: 'photo-1497250681960-ef046c08a56e' },
  { category: 'Workbooks', type: 'PDF', title: 'Seasonal Feelings Workbook', description: 'A 30-page journey through your emotional seasons. Beautifully illustrated.', duration: '30 days', action: 'Download', image: 'photo-1471879832106-c7ab9e0cee23' },
  { category: 'Meditations', type: 'Audio', title: 'Body Scan Meditation', description: 'A 12-minute guided audio meditation for relaxation and self-connection.', duration: '12 min', action: 'View', image: 'photo-1515377905703-c4788e51af15' },
  { category: 'Journals', type: 'PDF', title: 'Creative Journal Prompts', description: '52 thoughtful prompts to support a year of reflective journaling.', duration: '10 min each', action: 'Download', image: 'photo-1516979187457-637abb4f9353' },
  { category: 'Guides', type: 'PDF', title: 'Colour & Emotion Guide', description: 'Explore the therapeutic connections between colour and emotional wellbeing.', duration: '20 min', action: 'Download', image: 'photo-1544256718-3bcf237f3974' },
]

function Resources({ onHome, onPricing, onLogin, onStartJourney }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const visibleResources = useMemo(() => resources.filter((resource) => {
    const matchesCategory = activeCategory === 'All' || resource.category === activeCategory
    const query = search.toLowerCase()
    return matchesCategory && `${resource.title} ${resource.description} ${resource.category}`.toLowerCase().includes(query)
  }), [activeCategory, search])

  return (
    <div className="bg-[#fbf8f2] text-[#403832]">
      <Header onHome={onHome} onResources={() => {}} onPricing={onPricing} onLogin={onLogin} onStartJourney={onStartJourney} />
      <main>
        <section className="border-b border-[#e5d9ce] bg-[#f7f0e6] px-5 py-20 text-center sm:px-8 lg:py-24">
          <h1 className="font-serif text-5xl font-semibold sm:text-6xl">Creative Resource Library</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-[#756b64]">A growing collection of art therapy activities, worksheets and mindfulness resources.</p>
          <label className="mx-auto mt-12 flex max-w-3xl items-center gap-4 rounded-2xl border border-[#dfd0c4] bg-white px-5 py-4 text-[#9a8d82] shadow-[0_10px_30px_rgba(77,60,45,0.08)]">
            <FiSearch className="shrink-0 text-xl" aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search activities, worksheets, workbooks..." className="w-full bg-transparent text-base outline-none placeholder:text-[#b0a7a0]" />
          </label>
        </section>
        <section className="px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <div className="flex gap-3 overflow-x-auto pb-3 lg:flex-wrap lg:justify-center">{categories.map((category) => <button type="button" key={category} onClick={() => setActiveCategory(category)} className={`whitespace-nowrap rounded-full border px-5 py-3 text-sm transition ${activeCategory === category ? 'border-[#789d7d] bg-[#edf4ef] font-medium text-[#5f8065]' : 'border-[#e5d9ce] bg-white text-[#756b64] hover:border-[#789d7d]'}`}>{category}</button>)}</div>
            <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">{visibleResources.map((resource) => <article key={resource.title} className="overflow-hidden rounded-2xl border border-[#e5d9ce] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><img src={`https://images.unsplash.com/${resource.image}?auto=format&fit=crop&w=800&q=85`} alt="" className="h-64 w-full object-cover" /><div className="p-7"><div className="flex flex-wrap gap-2"><span className="rounded-full bg-[#edf4ef] px-3 py-1 text-xs font-medium text-[#648b6b]">{resource.category}</span><span className="rounded-full bg-[#f7f0e6] px-3 py-1 text-xs font-medium text-[#bc806c]">{resource.type}</span></div><h2 className="mt-5 font-serif text-2xl font-semibold">{resource.title}</h2><p className="mt-3 min-h-14 leading-7 text-[#756b64]">{resource.description}</p><div className="mt-6 flex items-center justify-between"><span className="inline-flex items-center gap-2 text-sm text-[#a49489]"><FiClock aria-hidden="true" />{resource.duration}</span><button type="button" className="rounded-xl bg-[#789d7d] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#648b6b]">{resource.action}</button></div></div></article>)}</div>
            {visibleResources.length === 0 && <p className="py-20 text-center text-[#847970]">No resources match your search yet.</p>}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Resources
