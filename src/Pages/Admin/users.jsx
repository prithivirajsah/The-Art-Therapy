import { useMemo, useState } from 'react'
import Navbar from './navbar'

const users = [
  ['Margaret Wilson', 'margaret@email.com', 'Member', 'Active', 'Jan 2026'],
  ['Anne Thompson', 'anne@email.com', 'Premium', 'Active', 'Mar 2026'],
  ['Susan Davies', 'susan@email.com', 'Free', 'Active', 'Aug 2026'],
  ['Elizabeth Clark', 'elizabeth@email.com', 'Member', 'Suspended', 'Jun 2026'],
  ['Patricia Moore', 'patricia@email.com', 'Premium', 'Active', 'Feb 2026'],
]

function Users({ onNavigate, onLogout, onUserView }) {
  const [search, setSearch] = useState('')
  const filteredUsers = useMemo(() => users.filter(([name, email]) => `${name} ${email}`.toLowerCase().includes(search.toLowerCase())), [search])

  return (
    <div className="flex min-h-screen bg-[#f3eee8] text-[#403832]">
      <Navbar activeItem="users" onNavigate={onNavigate} onLogout={onLogout} onUserView={onUserView} />
      <main className="min-w-0 flex-1 px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <h1 className="font-serif text-4xl font-semibold">Users</h1>
            <label className="block sm:w-[310px]">
              <span className="sr-only">Search users</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Search users..." className="h-14 w-full rounded-2xl border-2 border-[#dfd4ca] bg-transparent px-6 text-base text-[#403832] outline-none placeholder:text-[#9a928c] focus:border-[#a9bca9]" />
            </label>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-[#dfd4ca] bg-white">
            <table className="w-full min-w-[950px] border-collapse text-left">
              <thead className="bg-[#f7f2ec] text-lg text-[#665d57]">
                <tr>{['Name', 'Email', 'Role', 'Status', 'Joined', 'Actions'].map((heading) => <th key={heading} className="px-7 py-6 font-semibold">{heading}</th>)}</tr>
              </thead>
              <tbody>
                {filteredUsers.map(([name, email, role, status, joined]) => (
                  <tr key={email} className="border-t border-[#e8ded5] text-lg">
                    <td className="px-7 py-7 font-medium">{name}</td>
                    <td className="px-7 py-7 text-[#756b64]">{email}</td>
                    <td className="px-7 py-7"><span className={`inline-flex rounded-full px-4 py-2 text-base font-medium ${role === 'Free' ? 'bg-[#f0ece8] text-[#9a8d82]' : role === 'Premium' ? 'bg-[#edf4ef] text-[#648365]' : 'bg-[#f6f0e7] text-[#b77558]'}`}>{role}</span></td>
                    <td className="px-7 py-7"><span className={`inline-flex rounded-full px-4 py-2 text-base font-medium ${status === 'Active' ? 'bg-[#edf4ef] text-[#648365]' : 'bg-[#fdf0ed] text-[#c58674]'}`}>{status}</span></td>
                    <td className="px-7 py-7 text-[#9a8d82]">{joined}</td>
                    <td className="px-7 py-7"><div className="flex gap-3"><button type="button" className="rounded-xl border-2 border-[#dfd4ca] px-4 py-2 text-base text-[#756b64] transition hover:border-[#789d7d]">View</button><button type="button" className="rounded-xl border-2 border-[#dfd4ca] px-4 py-2 text-base text-[#756b64] transition hover:border-[#789d7d]">Edit</button><button type="button" className="rounded-xl border-2 border-[#efcfc5] bg-[#fff8f5] px-4 py-2 text-base text-[#c58674] transition hover:bg-[#fdf0ed]">Suspend</button></div></td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredUsers.length === 0 && <p className="px-7 py-12 text-center text-[#9a8d82]">No users match your search.</p>}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Users
