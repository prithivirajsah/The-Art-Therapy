import { FiBookOpen, FiCompass, FiEdit3, FiGrid, FiHome, FiLogOut, FiMenu, FiSettings, FiUsers } from 'react-icons/fi'

const spaceLinks = [
  ['home', FiHome, 'Home'],
  ['create', FiEdit3, 'Create'],
  ['journal', FiBookOpen, 'Journal'],
  ['art', FiGrid, 'My Art'],
  ['community', FiUsers, 'Community'],
]

const exploreLinks = [
  ['resources', FiCompass, 'Resources'],
  ['admin', FiSettings, 'Admin'],
]

function NavLink({ item, activeItem, onNavigate }) {
  const [id, Icon, label] = item

  return (
    <button
      type="button"
      onClick={() => onNavigate(id)}
      className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left text-base leading-none transition ${
        activeItem === id
          ? 'bg-[#edf4ef] text-[#5f8065]'
          : 'text-[#6b5f59] hover:bg-[#faf6f0] hover:text-[#5f8065]'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}

function Navbar({ activeItem = 'home', onNavigate, onLogout }) {
  return (
    <aside className="flex min-h-screen w-full max-w-[280px] flex-col border-r border-[#e5d9ce] bg-white text-[#6b5f59]">
      <div className="flex items-center justify-between border-b border-[#e5d9ce] px-5 py-6">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#8da98a] to-[#c78a6c] text-[#fffaf0] shadow-sm" aria-hidden="true"><FiCompass className="h-6 w-6" /></span>
          <div className="leading-tight">
            <strong className="block font-serif text-lg font-semibold text-[#403832]">Art Therapy</strong>
            <span className="block text-sm text-[#789d7d]">Resources Hub</span>
          </div>
        </div>
        <button type="button" onClick={() => onNavigate('collapse')} className="text-xl text-[#9a8d82] transition hover:text-[#5f8065]" aria-label="Collapse navigation"><FiMenu /></button>
      </div>

      <nav className="flex-1 px-4 py-6" aria-label="User navigation">
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a8d82]">My space</p>
        <div className="mt-3 space-y-1">
          {spaceLinks.map((item) => <NavLink key={item[0]} item={item} activeItem={activeItem} onNavigate={onNavigate} />)}
        </div>
        <div className="my-6 border-t border-[#e5d9ce]" />
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#9a8d82]">Explore</p>
        <div className="mt-3 space-y-1">
          {exploreLinks.map((item) => <NavLink key={item[0]} item={item} activeItem={activeItem} onNavigate={onNavigate} />)}
        </div>
      </nav>

      <div className="border-t border-[#e5d9ce] p-4">
        <button type="button" onClick={onLogout} className="flex w-full items-center gap-4 px-4 py-3 text-left text-base text-[#9a8d82] transition hover:text-[#5f8065]">
          <FiLogOut className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  )
}

export default Navbar
