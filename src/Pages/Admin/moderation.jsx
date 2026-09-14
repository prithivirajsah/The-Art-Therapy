import { useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import Navbar from './navbar'

const initialReports = [
  ['Unknown', '2 hours ago', 'Inappropriate content reported by 2 users.'],
  ['Margaret W.', '1 day ago', 'Spam comment on community artwork.'],
]

function Moderation({ onNavigate, onLogout, onUserView }) {
  const [reports, setReports] = useState(initialReports)

  function removeReport(index) {
    setReports((currentReports) => currentReports.filter((_, reportIndex) => reportIndex !== index))
  }

  return (
    <div className="flex min-h-screen bg-[#f3eee8] text-[#403832]">
      <Navbar activeItem="community" onNavigate={onNavigate} onLogout={onLogout} onUserView={onUserView} />
      <main className="min-w-0 flex-1 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Community Moderation</h1>

          <section className="mt-12 rounded-3xl border border-[#efc6ba] bg-[#fff7f5] p-8 sm:p-10">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-[#bd8879]">
              <FiAlertTriangle className="h-6 w-6 text-[#e4b300]" aria-hidden="true" />
              Reported content ({reports.length})
            </h2>

            <div className="mt-8 space-y-4">
              {reports.map(([author, time, description], index) => (
                <article key={`${author}-${time}`} className="flex flex-col gap-6 rounded-2xl border border-[#e9dfd8] bg-white px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div>
                    <p className="text-xl"><span className="font-medium">{author}</span> <span className="text-[#a69b94]">· {time}</span></p>
                    <p className="mt-4 text-lg text-[#756b64]">{description}</p>
                  </div>
                  <div className="flex shrink-0 gap-3">
                    <button type="button" onClick={() => removeReport(index)} className="rounded-xl border-2 border-[#dbcfc7] px-5 py-3 text-lg text-[#648365] transition hover:border-[#789d7d]">Approve</button>
                    <button type="button" onClick={() => removeReport(index)} className="rounded-xl bg-[#fdf4f2] px-5 py-3 text-lg text-[#c78d7d] transition hover:bg-[#f9e9e5]">Hide</button>
                    <button type="button" onClick={() => removeReport(index)} className="rounded-xl bg-[#c28c7b] px-5 py-3 text-lg text-white transition hover:bg-[#b57968]">Delete</button>
                  </div>
                </article>
              ))}
            </div>

            {reports.length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-[#e4cfc6] bg-white px-6 py-10 text-center text-lg text-[#9a8d82]">No reported content needs review.</p>}
          </section>
        </div>
      </main>
    </div>
  )
}

export default Moderation
