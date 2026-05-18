
import { useState } from 'react'
import { auth } from '../firebase'
import axios from 'axios'
import toast from 'react-hot-toast'

const API = 'http://localhost:8000/api'

export default function ToolPage({ title, icon, endpoint, fields }) {
  const [form, setForm] = useState({})
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    // Check if required fields are filled
    const firstField = fields[0]
    if (!form[firstField.name]) {
      toast.error('Please fill in the required field!')
      return
    }

    setLoading(true)
    try {
      const token = await auth.currentUser.getIdToken()

      // Generate content
      const res = await axios.post(`${API}/ai/${endpoint}`, form, {
        headers: { Authorization: `Bearer ${token}` }
      })
      const generatedResult = res.data.result
      setResult(generatedResult)

      // Save to history
      await axios.post(`${API}/history/save`, {
        tool: endpoint,
        input: form,
        result: generatedResult
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })

      toast.success('Generated & saved!')
    } catch (err) {
      toast.error('Something went wrong!')
      console.error(err)
    }
    setLoading(false)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(result)
    toast.success('Copied to clipboard!')
  }

  const handleClear = () => {
    setResult('')
    setForm({})
  }

  return (
    <div className="p-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-1">{icon} {title}</h2>
        <p className="text-gray-400 mb-6">Fill in the details and let AI do the work</p>

        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-6">
          <div className="space-y-4">
            {fields.map(field => (
              <div key={field.name}>
                <label className="block text-sm text-gray-400 mb-1.5">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 resize-none transition-colors"
                    rows={3}
                    placeholder={field.placeholder}
                    value={form[field.name] || ''}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                  />
                ) : field.type === 'select' ? (
                  <select
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    value={form[field.name] || field.options[0]}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                  >
                    {field.options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder={field.placeholder}
                    value={form[field.name] || ''}
                    onChange={e => setForm({ ...form, [field.name]: e.target.value })}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-xl transition-all"
            >
              {loading ? '⏳ Generating...' : '✨ Generate'}
            </button>
            {result && (
              <button
                onClick={handleClear}
                className="px-4 py-3 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500 rounded-xl transition-all"
              >
                🗑️ Clear
              </button>
            )}
          </div>
        </div>

        {/* Result box */}
        {loading && (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <span className="text-gray-400 text-sm ml-1">AI is generating your content...</span>
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-300">✅ Generated Result</span>
              <button
                onClick={handleCopy}
                className="text-xs text-purple-400 hover:text-purple-300 border border-gray-700 hover:border-purple-500 px-3 py-1.5 rounded-lg transition-all"
              >
                📋 Copy
              </button>
            </div>
            <p className="text-white text-sm whitespace-pre-wrap leading-relaxed">{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}