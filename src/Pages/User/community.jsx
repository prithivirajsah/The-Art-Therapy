import { useState } from 'react'
import { FiHeart, FiMoreHorizontal, FiMessageCircle, FiShare2, FiX } from 'react-icons/fi'
import Navbar from './navbar'

const posts = [
  {
    name: 'Sarah',
    initial: 'S',
    time: 'Today · 9:32 am',
    image: 'photo-1516979187457-637abb4f9353',
    title: 'A quiet moment with wildflowers',
    text: 'I let the colours guide me today and found so much peace in slowing down.',
    likes: 24,
    comments: 6,
  },
  {
    name: 'Margaret',
    initial: 'M',
    time: 'Yesterday · 4:18 pm',
    image: 'photo-1547891654-e66ed7ebb968',
    title: 'Autumn colours',
    text: 'This activity reminded me to notice the small, beautiful details around me.',
    likes: 18,
    comments: 4,
  },
]

function Community({ onNavigate, onLogout }) {
  const [shareOpen, setShareOpen] = useState(false)
  const [visibility, setVisibility] = useState('private')
  const [caption, setCaption] = useState('')

  return (
    <div className="flex min-h-screen bg-[#fbf8f2] text-[#403832]">
      <Navbar activeItem="community" onNavigate={onNavigate} onLogout={onLogout} />

      <main className="min-w-0 flex-1 px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <div className="mx-auto max-w-4xl">
          <header>
            <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">Creative Community</h1>
            <p className="mt-3 text-base text-[#756b64] sm:text-lg">A gentle space to share, inspire and connect.</p>
            <button type="button" onClick={() => setShareOpen(true)} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#789d7d] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#648b6b]">
              <FiShare2 aria-hidden="true" /> Share Your Creation
            </button>
          </header>

          <div className="mt-12 flex items-start gap-3 rounded-2xl border border-[#c6dac8] bg-[#edf4ef] px-5 py-5 text-base leading-7 text-[#5f8065]">
            <FiHeart className="mt-1 h-5 w-5 shrink-0" aria-hidden="true" />
            <p>This is a kind and welcoming space. Please be respectful, encouraging and gentle with one another.</p>
          </div>

          <section className="mt-8 space-y-7">
            {posts.map((post) => (
              <article key={post.name} className="overflow-hidden rounded-[2rem] border border-[#e5d9ce] bg-white shadow-sm">
                <div className="flex items-center justify-between px-7 py-6 sm:px-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c58c79] text-lg font-medium text-white">{post.initial}</span>
                    <div>
                      <h2 className="text-base font-semibold">{post.name}</h2>
                      <p className="mt-1 text-sm text-[#9a8d82]">{post.time}</p>
                    </div>
                  </div>
                  <button type="button" className="rounded-lg p-2 text-[#9a8d82] transition hover:bg-[#fbf8f2] hover:text-[#5f8065]" aria-label={`More options for ${post.name}'s post`}>
                    <FiMoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
                <img src={`https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=1200&q=85`} alt={post.title} className="h-72 w-full object-cover sm:h-96" />
                <div className="p-7 sm:p-8">
                  <h3 className="font-serif text-xl font-semibold">{post.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#756b64]">{post.text}</p>
                  <div className="mt-6 flex items-center gap-5 text-sm text-[#9a8d82]">
                    <button type="button" className="inline-flex items-center gap-2 transition hover:text-[#c28775]"><FiHeart /> {post.likes}</button>
                    <button type="button" className="inline-flex items-center gap-2 transition hover:text-[#789d7d]"><FiMessageCircle /> {post.comments}</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {shareOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#403832]/45 px-4 py-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setShareOpen(false) }}>
          <section role="dialog" aria-modal="true" aria-labelledby="share-title" className="max-h-full w-full max-w-xl overflow-y-auto rounded-[1.5rem] bg-white p-7 shadow-2xl sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <h2 id="share-title" className="font-serif text-3xl font-semibold text-[#403832]">Share your creation</h2>
              <button type="button" onClick={() => setShareOpen(false)} className="rounded-full p-2 text-[#9a8d82] transition hover:bg-[#fbf8f2] hover:text-[#5f8065]" aria-label="Close share dialog"><FiX className="h-5 w-5" /></button>
            </div>

            <img src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=85" alt="Your artwork preview" className="mt-7 h-48 w-full rounded-2xl object-cover sm:h-56" />

            <fieldset className="mt-7">
              <legend className="text-base font-medium text-[#403832]">Who can see this?</legend>
              <div className="mt-4 space-y-3">
                {[
                  ['private', '🔒', 'Only me', 'Your artwork stays private'],
                  ['community', '🌸', 'Community members', 'Share with the whole community'],
                  ['group', '👥', 'Private group', 'Share with your chosen group'],
                ].map(([value, icon, title, description]) => (
                  <label key={value} className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 px-4 py-4 transition ${visibility === value ? 'border-[#a8c6aa] bg-[#edf4ef]' : 'border-[#e5d9ce] bg-[#fbf8f2] hover:border-[#c6dac8]'}`}>
                    <input type="radio" name="visibility" value={value} checked={visibility === value} onChange={() => setVisibility(value)} className="mt-1 h-4 w-4 accent-[#789d7d]" />
                    <span className="text-lg" aria-hidden="true">{icon}</span>
                    <span><span className="block text-base font-medium text-[#403832]">{title}</span><span className="mt-1 block text-sm text-[#9a8d82]">{description}</span></span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-7 block">
              <span className="sr-only">Caption</span>
              <textarea value={caption} onChange={(event) => setCaption(event.target.value)} rows="3" placeholder="Write something about your creation... (optional)" className="w-full resize-none rounded-xl border-2 border-[#e5d9ce] bg-white px-4 py-4 text-base outline-none placeholder:text-[#aaa09a] focus:border-[#789d7d]" />
            </label>

            <div className="mt-7 flex gap-3">
              <button type="button" onClick={() => setShareOpen(false)} className="flex-1 rounded-xl border-2 border-[#e5d9ce] px-5 py-3.5 text-base font-medium text-[#6b5f59] transition hover:border-[#789d7d]">Cancel</button>
              <button type="button" onClick={() => setShareOpen(false)} className="flex-1 rounded-xl bg-[#88a989] px-5 py-3.5 text-base font-semibold text-white transition hover:bg-[#719477]">Share</button>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default Community
