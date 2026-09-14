import Navbar from './navbar'
import { FiBookOpen, FiCheckCircle, FiImage, FiMessageCircle, FiUsers } from 'react-icons/fi'

const stats = [
  [FiUsers, '1,248', 'Total Users', '+12%', 'bg-[#edf4ef]'],
  [FiCheckCircle, '847', 'Active This Month', '+8%', 'bg-[#f7f0e6]'],
  [FiImage, '64', 'Activities', '+3', 'bg-[#fdf0ef]'],
  [FiImage, '3,921', 'Artworks Created', '+18%', 'bg-[#edf4ef]'],
  [FiMessageCircle, '512', 'Community Posts', '+24%', 'bg-[#f7f0e6]'],
  [FiBookOpen, '128', 'Resources', '+7', 'bg-[#fdf0ef]'],
]

const registrations = [
  ['Apr', 82],
  ['May', 97],
  ['Jun', 143],
  ['Jul', 128],
  ['Aug', 189],
  ['Sep', 204],
]

function AdminDashboard({ onNavigate, onLogout, onUserView }) {
  return (
    <div className="flex min-h-screen bg-[#f7f0e6] text-[#403832]">
      <Navbar onNavigate={onNavigate} onLogout={onLogout} onUserView={onUserView} />
      <main className="min-w-0 flex-1 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <header>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Admin Dashboard</h2>
            <p className="mt-4 text-base text-[#9a8d82]">Monday, 14 September 2026</p>
          </header>

          <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stats.map(([Icon, value, label, change, iconBackground]) => (
              <article key={label} className="rounded-3xl border border-[#e3d6cc] bg-white px-9 py-8">
                <div className="flex items-start justify-between">
                  <span className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBackground} text-[#789d7d]`}>
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-[#edf4ef] px-4 py-2 text-base font-medium text-[#648365]">{change}</span>
                </div>
                <p className="mt-8 font-serif text-3xl font-semibold">{value}</p>
                <p className="mt-3 text-base text-[#9a8d82]">{label}</p>
              </article>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-[#e3d6cc] bg-white px-8 py-9 sm:px-10">
            <h3 className="font-serif text-2xl font-semibold">New user registrations</h3>
            <div className="mt-12 flex h-64 items-end gap-3 sm:gap-5">
              {registrations.map(([month, value]) => (
                <div key={month} className="flex h-full flex-1 flex-col items-center justify-end gap-3">
                  <span className="text-base text-[#9a8d82]">{value}</span>
                  <div className="w-full rounded-t-lg bg-[#88a287]" style={{ height: `${(value / 204) * 72}%` }} />
                  <span className="text-base text-[#9a8d82]">{month}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard