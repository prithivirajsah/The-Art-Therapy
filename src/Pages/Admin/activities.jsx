import { FiPlus } from 'react-icons/fi'
import Navbar from './navbar'

const activities = [
  ['Autumn Leaf Watercolour', 'Seasonal', '20 min', 'Published', 'Sep 1, 2026'],
  ['Morning Colour Meditation', 'Mindfulness', '15 min', 'Published', 'Aug 28, 2026'],
  ['Winter Landscape Sketch', 'Seasonal', '30 min', 'Draft', 'Sep 10, 2026'],
  ['Emotion Colour Wheel', 'Art Therapy', '25 min', 'Published', 'Aug 15, 2026'],
]

function Activities({ onNavigate, onLogout, onUserView }) {
  return (
    <div className="flex min-h-screen bg-[#f3eee8] text-[#403832]">
      <Navbar activeItem="activities" onNavigate={onNavigate} onLogout={onLogout} onUserView={onUserView} />
      <main className="min-w-0 flex-1 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex items-center justify-between gap-6">
            <h1 className="font-serif text-4xl font-semibold">Activities</h1>
            <button type="button" className="inline-flex items-center gap-3 rounded-2xl bg-[#88a287] px-6 py-4 text-lg font-semibold text-white transition hover:bg-[#789477]">
              <FiPlus className="h-5 w-5" aria-hidden="true" /> Add Activity
            </button>
          </div>

          <div className="mt-12 overflow-x-auto rounded-3xl border border-[#dfd4ca] bg-white">
            <table className="w-full min-w-[1050px] border-collapse text-left">
              <thead className="bg-[#f7f2ec] text-lg text-[#665d57]">
                <tr>
                  {['Activity', 'Category', 'Duration', 'Status', 'Created', 'Actions'].map((heading) => (
                    <th key={heading} className="px-7 py-6 font-semibold">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activities.map(([name, category, duration, status, created]) => (
                  <tr key={name} className="border-t border-[#e8ded5] text-lg">
                    <td className="px-7 py-7 font-medium">{name}</td>
                    <td className="px-7 py-7 text-[#756b64]">{category}</td>
                    <td className="px-7 py-7 text-[#756b64]">{duration}</td>
                    <td className="px-7 py-7">
                      <span className={`inline-flex rounded-full px-4 py-2 text-base font-medium ${status === 'Published' ? 'bg-[#edf4ef] text-[#648365]' : 'bg-[#f6f0e7] text-[#b77558]'}`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-7 py-7 text-[#9a8d82]">{created}</td>
                    <td className="px-7 py-7">
                      <div className="flex gap-3">
                        <button type="button" className="rounded-xl border-2 border-[#dfd4ca] px-4 py-2 text-base text-[#756b64] transition hover:border-[#789d7d]">Edit</button>
                        <button type="button" className="rounded-xl border-2 border-[#dfd4ca] px-4 py-2 text-base text-[#756b64] transition hover:border-[#789d7d]">{status === 'Published' ? 'Unpublish' : 'Publish'}</button>
                        <button type="button" className="rounded-xl border-2 border-[#efcfc5] bg-[#fff8f5] px-4 py-2 text-base text-[#c58674] transition hover:bg-[#fdf0ed]">Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Activities
