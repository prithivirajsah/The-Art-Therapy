import { useState } from 'react'

function Register({ onLogin }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f8f4ed] px-5 py-8 text-[#403832] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-[#e5d9ce] bg-[#fffdf9] px-7 py-10 shadow-[0_24px_80px_rgba(77,60,45,0.1)] sm:px-14 sm:py-12">
        <button type="button" className="mb-10 text-sm text-[#8a8178] transition hover:text-[#719477]">← Back to home</button>
        <div className="text-center">

          <p className="mb-2 text-sm font-medium uppercase tracking-[0.22em] text-[#719477]">Your creative space</p>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-[#403832] sm:text-4xl">Let&apos;s create your space.</h1>
          <p className="mt-3 text-sm leading-6 text-[#847970]">Join a community of women on a daily creative journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-9 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium">First name<input required type="text" placeholder="Your first name" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" /></label>
            <label className="block text-sm font-medium">Last name<input required type="text" placeholder="Your last name" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" /></label>
          </div>
          <label className="block text-sm font-medium">Email address<input required type="email" placeholder="you@example.com" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" /></label>
          <label className="block text-sm font-medium">Password<input required minLength="8" type="password" placeholder="Create a password" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" /></label>
          <label className="block text-sm font-medium">Confirm password<input required minLength="8" type="password" placeholder="Confirm your password" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" /></label>
          <div className="border-t border-[#eadfd5] pt-5">
            <label className="flex items-start gap-3 text-sm leading-6 text-[#756b64]"><input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#719477]" /> <span>I agree to the <a href="#terms" className="text-[#719477] hover:underline">Terms and Conditions</a> and <a href="#privacy" className="text-[#719477] hover:underline">Privacy Policy</a>.</span></label>
            <label className="mt-4 flex items-start gap-3 rounded-xl bg-[#f5efe7] p-4 text-sm leading-6 text-[#756b64]"><input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#719477]" /> <span><strong className="font-medium text-[#403832]">🌿 Creative news & freebies</strong><br /><span className="text-xs text-[#9a8d82]">Occasionally receive art therapy inspiration, seasonal resources and special offers.</span></span></label>
          </div>
          <button type="submit" className="h-14 w-full rounded-xl bg-[#789d7d] text-base font-semibold text-white transition hover:bg-[#648b6b] focus:outline-none focus:ring-4 focus:ring-[#789d7d]/25">Create account</button>
          {submitted && <p className="text-center text-sm text-[#719477]" role="status">Your creative space is ready to begin.</p>}
        </form>
        <p className="mt-7 text-center text-sm text-[#9a8d82]">Already have an account? <button type="button" onClick={onLogin} className="text-[#719477] hover:underline">Log in</button></p>
      </div>
    </main>
  )
}

export default Register
