import { useState } from 'react'
import logo from '../../assets/image1.png'

function Login({ onCreateAccount, onForgotPassword, onLoginSuccess, onBackToHome }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    onLoginSuccess()
  }

  return (
    <main className="min-h-screen bg-[#f8f4ed] px-5 py-8 text-[#403832] sm:px-8 lg:px-12">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl overflow-hidden rounded-[2rem] border border-[#e5d9ce] bg-[#fffdf9] shadow-[0_24px_80px_rgba(77,60,45,0.12)] lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#e8eee2] px-8 py-12 lg:min-h-full lg:px-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-[#9baf88]/50" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#c8794c]/40" />
          <div className="relative text-center">
            <div className="mx-auto mb-6 w-36 rounded-[5rem] bg-[#fffaf0] p-2 shadow-[0_10px_30px_rgba(71,87,56,0.12)] sm:w-44">
              <img src={logo} alt="Arts Therapy Hub" className="h-auto w-full rounded-[4.5rem]" />
            </div>
            <p className="mx-auto max-w-xs text-sm leading-6 text-[#66725e]">
              A gentle space for creativity, collaboration, and connection.
            </p>
          </div>
        </section>

        <section className="flex items-center px-7 py-12 sm:px-14 lg:px-20">
          <div className="w-full max-w-md">
            <button type="button" onClick={onBackToHome} className="mb-14 text-sm text-[#8a8178] transition hover:text-[#719477]">
              ← Back to home
            </button>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-[#719477]">Welcome back</p>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-[#403832] sm:text-5xl">Continue creating.</h1>
            <p className="mt-4 text-base text-[#847970]">Return to your creative space and pick up where you left off.</p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <label className="block text-sm font-medium text-[#403832]">
                Email address
                <input required type="email" placeholder="you@example.com" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" />
              </label>
              <label className="block text-sm font-medium text-[#403832]">
                <span className="flex items-center justify-between">
                  Password
                  <button type="button" onClick={onForgotPassword} className="font-normal text-[#719477] hover:underline">Forgot password?</button>
                </span>
                <input required type="password" placeholder="Your password" className="mt-2 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white px-4 text-base outline-none transition placeholder:text-[#b0a7a0] focus:border-[#719477] focus:ring-4 focus:ring-[#719477]/10" />
              </label>
              <label className="flex items-center gap-3 text-sm text-[#756b64]">
                <input type="checkbox" className="h-4 w-4 accent-[#719477]" />
                Remember me
              </label>
              <button type="submit" className="h-14 w-full rounded-xl bg-[#789d7d] text-base font-semibold text-white transition hover:bg-[#648b6b] focus:outline-none focus:ring-4 focus:ring-[#789d7d]/25">
                Log in
              </button>
              {submitted && <p className="text-center text-sm text-[#719477]" role="status">Welcome back. Your sign-in details are ready.</p>}
            </form>

            <button type="button" onClick={onCreateAccount} className="mt-4 h-14 w-full rounded-xl border border-[#dfd0c4] bg-white text-base font-medium text-[#403832] transition hover:border-[#789d7d] hover:text-[#648b6b]">
              Create an account
            </button>
            <p className="mt-8 rounded-xl border border-[#e6dacc] bg-[#f5efe7] px-4 py-3 text-xs leading-5 text-[#9a8d82]">
              🌿 We may occasionally be in touch with freebies, offers and art therapy news. You can update your preferences any time.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login
