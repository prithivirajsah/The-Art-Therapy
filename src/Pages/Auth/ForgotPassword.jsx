import { useState } from 'react'
import logo from '../../assets/image1.png'

function ForgotPassword({ onBackToLogin }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#f8f4ed] px-5 py-8 text-[#403832] sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-5xl overflow-hidden rounded-[2rem] border border-[#e5d9ce] bg-[#fffdf9] shadow-[0_24px_80px_rgba(77,60,45,0.12)] lg:grid-cols-[0.8fr_1.2fr]">
        <section className="relative flex min-h-[260px] items-center justify-center overflow-hidden bg-[#e8eee2] px-8 py-12 lg:min-h-full lg:px-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#9baf88]/50" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#c8794c]/40" />
          <div className="relative text-center">
            <div className="mx-auto mb-6 w-36 rounded-[5rem] bg-[#fffaf0] p-2 shadow-[0_10px_30px_rgba(71,87,56,0.12)] sm:w-44">
              <img src={logo} alt="Arts Therapy Hub" className="h-auto w-full rounded-[4.5rem]" />
            </div>
            <p className="mx-auto max-w-xs text-sm leading-6 text-[#66725e]">A little pause can make room for new beginnings.</p>
          </div>
        </section>

        <section className="flex items-center px-7 py-12 sm:px-14 lg:px-20">
          <div className="w-full max-w-md">
            <button type="button" onClick={onBackToLogin} className="mb-14 text-sm text-[#8a8178] transition hover:text-[#719477]">← Back to login</button>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#719477]">Need a reset?</p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#403832] sm:text-4xl">Forgot your password?</h1>
            <p className="mt-4 text-base leading-7 text-[#847970]">No worries. Enter your email and we&apos;ll send you a link to create a new password.</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <label className="block text-sm font-medium text-[#403832]">
                Email address
                <input required type="email" placeholder="you@example.com" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" />
              </label>
              <button type="submit" className="h-14 w-full rounded-xl bg-[#789d7d] text-base font-semibold text-white transition hover:bg-[#648b6b] focus:outline-none focus:ring-4 focus:ring-[#789d7d]/25">Send reset link</button>
              {submitted && <p className="rounded-xl border border-[#cfe0ce] bg-[#edf5eb] px-4 py-3 text-center text-sm leading-6 text-[#5d8062]" role="status">If an account exists for that email, a reset link is on its way.</p>}
            </form>

            <button type="button" onClick={onBackToLogin} className="mt-5 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white text-base font-medium text-[#403832] transition hover:border-[#789d7d] hover:text-[#648b6b]">Return to login</button>
          </div>
        </section>
      </div>
    </main>
  )
}

export default ForgotPassword
