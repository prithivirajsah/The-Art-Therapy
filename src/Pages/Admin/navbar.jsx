import { FiBarChart2, FiBookOpen, FiChevronLeft, FiFeather, FiLogOut, FiMessageCircle, FiUsers } from 'react-icons/fi'

const links = [
  ['dashboard', FiBarChart2, 'Dashboard'],
  ['users', FiUsers, 'Users'],
  ['activities', FiFeather, 'Activities'],
  ['resources', FiBookOpen, 'Resources'],
  ['community', FiMessageCircle, 'Community'],
]

function Navbar({ activeItem = 'dashboard', onNavigate, onLogout, onUserView }) {
  return (
    <aside className="sticky top-0 flex h-screen w-full max-w-[240px] shrink-0 flex-col overflow-hidden bg-[#2b211f] text-[#b7aeac]">
      <div className="border-b border-white/10 px-6 pb-6 pt-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#9d9492]">Mindful Arts Therapy</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-[#fffaf7]">Admin Portal</h1>
      </div>

      <nav className="flex-1 px-4 py-5" aria-label="Admin navigation">
        <div className="space-y-1">
          {links.map(([id, Icon, label]) => (
            <button
              type="button"
              key={id}
              onClick={() => onNavigate(id)}
              className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-base transition ${
                activeItem === id
                  ? 'border border-[#718568] bg-[#414238] text-[#b8d4ba]'
                  : 'border border-transparent text-[#b7aeac] hover:bg-white/5 hover:text-[#fffaf7]'
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <div className="border-t border-white/10 px-4 py-5">
        <button type="button" onClick={onUserView} className="flex w-full items-center gap-3 px-4 py-3 text-left text-base text-[#b7aeac] transition hover:text-[#fffaf7]">
          <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
          <span>User view</span>
        </button>
        <button type="button" onClick={onLogout} className="mt-1 flex w-full items-center gap-4 px-4 py-3 text-left text-base text-[#b7aeac] transition hover:text-[#fffaf7]">
          <FiLogOut className="h-5 w-5" aria-hidden="true" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default Navbar
