import { FiArrowRight, FiFileText, FiPlus } from 'react-icons/fi'
import Navbar from './navbar'

const resourceTypes = ['Articles', 'Activities', 'Worksheets', 'Workbooks', 'Guides', 'Meditations', 'Products', 'Journals']

function Resources({ onNavigate, onLogout, onUserView }) {
  return (
    <div className="flex min-h-screen bg-[#f3eee8] text-[#403832]">
      <Navbar activeItem="resources" onNavigate={onNavigate} onLogout={onLogout} onUserView={onUserView} />
      <main className="min-w-0 flex-1 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-center justify-between gap-6">
            <h1 className="font-serif text-4xl font-semibold">Resources</h1>
            <button type="button" className="inline-flex items-center gap-3 rounded-2xl bg-[#88a287] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#789477]">
              <FiPlus className="h-5 w-5" aria-hidden="true" /> Add Resource
            </button>
          </div>

          <section className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {resourceTypes.map((type) => (
              <article key={type} className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border border-[#dfd4ca] bg-white text-center transition hover:-translate-y-1 hover:shadow-lg">
                <FiFileText className="h-12 w-12 text-[#b9b1ab]" aria-hidden="true" />
                <h2 className="mt-8 text-2xl font-medium">{type}</h2>
                <button type="button" className="mt-5 inline-flex items-center gap-2 text-lg text-[#a09690] transition hover:text-[#789477]">
                  Manage <FiArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </article>
            ))}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Resources
