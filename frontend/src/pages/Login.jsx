
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Login() {
  const navigate = useNavigate()

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      toast.success('Welcome!')
      navigate('/dashboard')
    } catch (error) {
      toast.error('Login failed. Try again.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 p-10 rounded-2xl border border-gray-800 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-white mb-2">✨ AI Content Studio</h1>
        <p className="text-gray-400 mb-8">Generate captions, posts, scripts & more with AI</p>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-medium py-3 px-6 rounded-xl hover:bg-gray-100 transition-all"
        >
          <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
          Continue with Google
        </button>
        <p className="text-gray-600 text-xs mt-6">Free to use · Powered by Groq AI</p>
      </div>
    </div>
  )
}