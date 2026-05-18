
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'
import { Link } from 'react-router-dom'

const tools = [
  { path: '/caption', label: 'Caption Generator', desc: 'Create engaging captions for any platform', icon: '📸', color: 'hover:border-pink-500' },
  { path: '/linkedin', label: 'LinkedIn Post', desc: 'Write professional posts that get engagement', icon: '💼', color: 'hover:border-blue-500' },
  { path: '/youtube', label: 'YouTube Script', desc: 'Full scripts with hooks and CTAs', icon: '🎥', color: 'hover:border-red-500' },
  { path: '/hooks', label: 'Viral Hooks', desc: '5 scroll-stopping opening lines', icon: '🔥', color: 'hover:border-orange-500' },
  { path: '/hashtags', label: 'Hashtag Generator', desc: 'Best hashtags for maximum reach', icon: '#️⃣', color: 'hover:border-green-500' },
  { path: '/calendar', label: 'Content Calendar', desc: 'Plan your week of content', icon: '📅', color: 'hover:border-purple-500' },
]

export default function Dashboard() {
  const [user] = useAuthState(auth)

  return (
    <div className="p-8">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-purple-900 to-gray-900 border border-purple-800 rounded-2xl p-6 mb-8">
        <h2 className="text-2xl font-bold text-white">
          Welcome back, {user?.displayName?.split(' ')[0]} 👋
        </h2>
        <p className="text-purple-300 mt-1">
          You have access to 6 AI-powered content tools. What are we creating today?
        </p>
      </div>

      {/* Tool cards */}
      <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Your Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(tool => (
          <Link
            key={tool.path}
            to={tool.path}
            className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 ${tool.color} transition-all group`}
          >
            <div className="text-3xl mb-3">{tool.icon}</div>
            <h3 className="text-white font-semibold group-hover:text-white transition-colors">
              {tool.label}
            </h3>
            <p className="text-gray-500 text-sm mt-1">{tool.desc}</p>
            <div className="mt-4 text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
              Click to generate →
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}