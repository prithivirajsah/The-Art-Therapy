import Header from '../../components/header'
import Footer from '../../components/footer'

const plans = [
  { name: 'Free', subtitle: 'A gentle start', tone: 'border-[#e5d9ce] bg-white text-[#403832]', contact: 'bg-[#f7f0e6] text-[#756b64]', features: ['5 creative activities per month', 'Limited worksheet downloads', 'Basic daily journaling', 'View community creations'], unavailable: ['Unlimited activities', 'Full resource library', 'Community sharing', 'Online courses'], action: 'Get started' },
  { name: 'Member', subtitle: 'The full creative journey', tone: 'bg-[#789d7d] text-white shadow-xl shadow-[#789d7d]/20', popular: true, contact: 'bg-white/15 text-white', features: ['Unlimited creative activities', 'All worksheets & workbooks', 'Full journaling tools', 'Community sharing', 'Seasonal themed collections', 'New content every week'], unavailable: ['Online courses', 'Live workshops'], action: 'Get started' },
  { name: 'Premium', subtitle: 'Everything, plus live learning', tone: 'bg-[#403832] text-white', contact: 'bg-[#665d57] text-white', features: ['Unlimited creative activities', 'Full resource library', 'Community sharing', 'Online courses', 'Live workshops', 'Priority support', 'Expert Q&A sessions'], unavailable: [], action: 'Get started' },
]

const comparison = [
  ['Monthly activities', '5', 'Unlimited', 'Unlimited'],
  ['Worksheet downloads', 'Limited', '✓ All', '✓ All'],
  ['Workbooks', '×', '✓ All', '✓ All'],
  ['Journaling', 'Basic', 'Full', 'Full'],
  ['Community sharing', '×', '✓', '✓'],
  ['Seasonal themes', '×', '✓', '✓'],
  ['Online courses', '×', '×', '✓'],
  ['Live workshops', '×', '×', '✓'],
  ['Expert Q&A', '×', '×', '✓'],
  ['Priority support', '×', '×', '✓'],
]

function Pricing({ onHome, onResources, onLogin, onStartJourney, isAuthenticated, onDashboard, onLogout }) {
  return (
    <div className="bg-[#fbf8f2] text-[#403832]">
      <Header onHome={onHome} onResources={onResources} onPricing={() => {}} onLogin={onLogin} onStartJourney={onStartJourney} isAuthenticated={isAuthenticated} onDashboard={onDashboard} onLogout={onLogout} />
      <main>
        <section className="px-5 py-20 text-center sm:px-8 lg:py-24"><p className="inline-flex rounded-full bg-[#edf4ef] px-4 py-2 text-sm text-[#5f8065]">🌿 Simple, clear pricing</p><h1 className="mt-7 font-serif text-5xl font-semibold sm:text-6xl">Make creativity part of your routine</h1><p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#756b64]">Choose the plan that feels right for where you are right now.<br className="hidden sm:block" /> You can change any time.</p>
          <div className="mx-auto mt-12 grid max-w-6xl gap-5 text-left lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-3xl border p-8 ${plan.tone} ${plan.popular ? 'border-[#5f8065] lg:-mt-4' : ''}`}>{plan.popular && <div className="absolute inset-x-0 top-0 rounded-t-3xl bg-[#5f8065] py-2 text-center text-sm font-medium">✨ Most popular</div>}<div className={plan.popular ? 'pt-8' : ''}><h2 className="font-serif text-3xl font-semibold">{plan.name}</h2><p className={`mt-3 text-sm ${plan.popular ? 'text-white/80' : 'text-[#9a8d82]'}`}>{plan.subtitle}</p><div className={`mt-8 rounded-xl px-5 py-5 text-center font-serif ${plan.contact}`}>Contact us for pricing</div><button type="button" onClick={onStartJourney} className={`mt-7 w-full rounded-xl border px-5 py-4 font-semibold transition hover:opacity-85 ${plan.popular ? 'border-white bg-white text-[#5f8065]' : 'border-current/20 bg-transparent'}`}>{plan.action}</button><ul className="mt-8 space-y-4 text-sm leading-6">{plan.features.map((feature) => <li key={feature}>✓ &nbsp;{feature}</li>)}{plan.unavailable.map((feature) => <li key={feature} className="opacity-45">× &nbsp;{feature}</li>)}</ul></div></article>)}</div>
        </section>
        <section id="plan-features" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-24"><div className="mx-auto max-w-5xl"><h2 className="text-center font-serif text-4xl font-semibold">What&apos;s included?</h2><div className="mt-10 overflow-x-auto rounded-2xl border border-[#e5d9ce]"><table className="w-full min-w-[680px] border-collapse text-left text-sm"><thead className="bg-[#f7f0e6]"><tr><th className="px-6 py-5 font-semibold">Feature</th><th className="px-6 py-5 text-center font-semibold">Free</th><th className="px-6 py-5 text-center font-semibold text-[#5f8065]">Member</th><th className="px-6 py-5 text-center font-semibold">Premium</th></tr></thead><tbody>{comparison.map(([feature, free, member, premium], index) => <tr key={feature} className={index % 2 ? 'bg-[#fbf8f2]' : 'bg-white'}><td className="border-t border-[#eee4da] px-6 py-4 text-[#756b64]">{feature}</td><td className={`border-t border-[#eee4da] px-6 py-4 text-center ${free.startsWith('✓') ? 'font-medium text-[#5f8065]' : 'text-[#756b64]'}`}>{free}</td><td className={`border-t border-[#eee4da] px-6 py-4 text-center ${member.startsWith('✓') ? 'font-medium text-[#5f8065]' : 'text-[#756b64]'}`}>{member}</td><td className={`border-t border-[#eee4da] px-6 py-4 text-center ${premium.startsWith('✓') ? 'font-medium text-[#5f8065]' : 'text-[#756b64]'}`}>{premium}</td></tr>)}</tbody></table></div></div></section>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
