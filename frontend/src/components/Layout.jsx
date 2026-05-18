
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import toast from 'react-hot-toast'

const navItems = [
  { path: '/dashboard', label: '🏠 Dashboard' },
  { path: '/caption', label: '📸 Caption' },
  { path: '/linkedin', label: '💼 LinkedIn' },
  { path: '/youtube', label: '🎥 YouTube' },
  { path: '/hooks', label: '🔥 Viral Hooks' },
  { path: '/hashtags', label: '# Hashtags' },
  { path: '/calendar', label: '📅 Calendar' },
  { path: '/history', label: '🕒 History' },
]

export default function Layout() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    toast.success('Logged out!')
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-xl font-bold text-purple-400">✨ AI Content Studio</h1>
          <p className="text-xs text-gray-500 mt-1">Your AI content assistant</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'bg-purple-600 text-white font-medium'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-800 rounded-lg transition-all"
          >
            🚪 Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}