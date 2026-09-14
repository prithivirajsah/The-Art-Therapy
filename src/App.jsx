import { useState } from 'react'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import Home from './Pages/Visitor/home'
import Pricing from './Pages/Visitor/pricing'
import Resources from './Pages/Visitor/resources'
import UserHome from './Pages/User/home'
import Community from './Pages/User/community'
import AdminDashboard from './Pages/Admin/Admindashboard'
import AdminUsers from './Pages/Admin/users'
import AdminActivities from './Pages/Admin/activities'
import AdminResources from './Pages/Admin/resources'
import AdminModeration from './Pages/Admin/moderation'

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
    return <UserHome onNavigate={(destination) => setView(destination === 'community' ? 'community' : destination === 'resources' ? 'resources' : destination === 'admin' ? 'admin' : 'dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'community') {
    return <Community onNavigate={(destination) => setView(destination === 'community' ? 'community' : destination === 'resources' ? 'resources' : destination === 'admin' ? 'admin' : 'dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'admin') {
    return <AdminDashboard onNavigate={(destination) => setView(destination === 'users' ? 'admin-users' : destination === 'activities' ? 'admin-activities' : destination === 'resources' ? 'admin-resources' : destination === 'community' ? 'admin-moderation' : 'admin')} onUserView={() => setView('dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'admin-users') {
    return <AdminUsers onNavigate={(destination) => setView(destination === 'dashboard' ? 'admin' : destination === 'users' ? 'admin-users' : destination === 'activities' ? 'admin-activities' : destination === 'resources' ? 'admin-resources' : destination === 'community' ? 'admin-moderation' : 'admin')} onUserView={() => setView('dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'admin-activities') {
    return <AdminActivities onNavigate={(destination) => setView(destination === 'dashboard' ? 'admin' : destination === 'users' ? 'admin-users' : destination === 'activities' ? 'admin-activities' : destination === 'resources' ? 'admin-resources' : 'admin')} onUserView={() => setView('dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'admin-resources') {
    return <AdminResources onNavigate={(destination) => setView(destination === 'dashboard' ? 'admin' : destination === 'users' ? 'admin-users' : destination === 'activities' ? 'admin-activities' : destination === 'resources' ? 'admin-resources' : destination === 'community' ? 'admin-moderation' : 'admin')} onUserView={() => setView('dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
  }

  if (view === 'admin-moderation') {
    return <AdminModeration onNavigate={(destination) => setView(destination === 'dashboard' ? 'admin' : destination === 'users' ? 'admin-users' : destination === 'activities' ? 'admin-activities' : destination === 'resources' ? 'admin-resources' : destination === 'community' ? 'admin-moderation' : 'admin')} onUserView={() => setView('dashboard')} onLogout={() => { setIsAuthenticated(false); setView('home') }} />
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
