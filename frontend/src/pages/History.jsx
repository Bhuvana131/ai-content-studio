
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import axios from 'axios'
import toast from 'react-hot-toast'

const API = 'http://localhost:8000/api'

const toolEmojis = {
  caption: '📸',
  linkedin: '💼',
  youtube: '🎥',
  hooks: '🔥',
  hashtags: '#️⃣',
  calendar: '📅'
}

export default function History() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHistory()
  }, [])

  const fetchHistory = async () => {
    try {
      const token = await auth.currentUser.getIdToken()
      const res = await axios.get(`${API}/history/list`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setHistory(res.data.history)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    toast.success('Copied!')
  }

  const handleDelete = async (tool) => {
    try {
      const token = await auth.currentUser.getIdToken()
      await axios.delete(`${API}/history/delete/${tool}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      toast.success('Deleted!')
      fetchHistory()
    } catch (err) {
      toast.error('Delete failed!')
    }
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-1">🕒 History</h2>
        <p className="text-gray-400 mb-6">Your past generations</p>

        {loading ? (
          <div className="text-gray-500">Loading...</div>
        ) : history.length === 0 ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-gray-400">No history yet.</p>
            <p className="text-gray-600 text-sm mt-1">Start generating content to see it here!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, i) => (
              <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{toolEmojis[item.tool] || '✨'}</span>
                    <span className="text-purple-400 text-sm font-medium capitalize">{item.tool}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600 text-xs">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                    <button
                      onClick={() => handleCopy(item.result)}
                      className="text-xs text-gray-400 hover:text-white border border-gray-700 px-2 py-1 rounded-lg transition-all"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => handleDelete(item.tool)}
                      className="text-xs text-red-400 hover:text-red-300 border border-gray-700 px-2 py-1 rounded-lg transition-all"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <p className="text-white text-sm whitespace-pre-wrap leading-relaxed line-clamp-4">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}