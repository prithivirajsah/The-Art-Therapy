import Navbar from './navbar'

function Dashboard({ onNavigate, onLogout }) {
  return (
    <div className="flex min-h-screen bg-[#fbf8f2]">
      <Navbar onNavigate={onNavigate} onLogout={onLogout} />
      <main className="flex-1 p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#789d7d]">Good morning</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#403832]">Welcome back to your creative space.</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#756b64]">Choose a gentle practice for today and make a little room for yourself.</p>
      </main>
    </div>
  )
}

export default Dashboard
