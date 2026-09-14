import { useState } from 'react'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Home from './Pages/Visitor/home'
import Pricing from './Pages/Visitor/pricing'
import Resources from './Pages/Visitor/resources'
import UserHome from './Pages/User/home'

function App() {
  const [view, setView] = useState('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (view === 'forgot-password') {
    return <ForgotPassword onBackToLogin={() => setView('login')} />
  }

  if (view === 'register') {
    return <Register onLogin={() => setView('login')} />
  }

  if (view === 'login') {
    return <Login onCreateAccount={() => setView('register')} onForgotPassword={() => setView('forgot-password')} onBackToHome={() => setView('home')} onLoginSuccess={() => { setIsAuthenticated(true); setView('home') }} />
  }

  if (view === 'dashboard') {
    return <UserHome onNavigate={() => {}} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  const visitorProps = {
    onHome: () => setView('home'),
    onResources: () => setView('resources'),
    onPricing: () => setView('pricing'),
    onLogin: () => setView('login'),
    onStartJourney: () => setView('register'),
    isAuthenticated,
    onDashboard: () => setView('dashboard'),
    onLogout: () => { setIsAuthenticated(false); setView('home') },
  }

  if (view === 'resources') {
    return <Resources {...visitorProps} />
  }

  if (view === 'pricing') {
    return <Pricing {...visitorProps} />
  }

  return <Home {...visitorProps} />
}

export default App
