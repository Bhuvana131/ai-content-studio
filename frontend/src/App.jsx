
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Caption from './pages/Caption'
import LinkedIn from './pages/LinkedIn'
import YouTube from './pages/YouTube'
import Hooks from './pages/Hooks'
import Hashtags from './pages/Hashtags'
import Calendar from './pages/Calendar'
import History from './pages/History'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast'

function App() {
  const [user, loading] = useAuthState(auth)

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-white text-lg">Loading...</div>
    </div>
  )

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/" element={user ? <Layout /> : <Navigate to="/login" />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="caption" element={<Caption />} />
          <Route path="linkedin" element={<LinkedIn />} />
          <Route path="youtube" element={<YouTube />} />
          <Route path="hooks" element={<Hooks />} />
          <Route path="hashtags" element={<Hashtags />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App