# ✦ AI Content Studio

An AI-powered content creation platform that helps creators generate captions, LinkedIn posts, YouTube scripts, viral hooks, hashtags, and content calendars in seconds.

## 🚀 Features
- 📸 **Caption Generator** — Engaging captions for Instagram, TikTok, Facebook
- 💼 **LinkedIn Post Generator** — Professional posts that get engagement
- 🎥 **YouTube Script Writer** — Full scripts with hooks and CTAs
- 🔥 **Viral Hooks** — 5 scroll-stopping opening lines
- #️⃣ **Hashtag Generator** — Best hashtags for maximum reach
- 📅 **Content Calendar** — Plan your full week of content
- 🕒 **History** — Save and revisit all your generations

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Tailwind CSS |
| Backend | FastAPI + Python |
| Database | MongoDB Atlas |
| Auth | Firebase Authentication |
| AI | Groq API (Llama 3.3) |
| Deployment | Vercel + Render |

## 📁 Project Structure
ai-content-studio/
├── frontend/          # React app
│   ├── src/
│   │   ├── pages/     # All page components
│   │   ├── components/# Reusable components
│   │   └── firebase.js# Firebase config
└── backend/           # FastAPI app
├── routers/       # API routes
├── services/      # AI service
├── main.py        # Entry point
└── database.py    # MongoDB connection
## ⚙️ Setup & Installation

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\Activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🔑 Environment Variables

### Backend `.env`
GROQ_API_KEY=your_groq_api_key
MONGODB_URL=your_mongodb_atlas_url
DATABASE_NAME=ai_content_studio
FIREBASE_ADMIN_SDK=firebase-admin.json
### Frontend `.env`
VITE_API_URL=your_backend_url

## 🌐 Live Demo
Coming soon...

## 👩‍💻 Built By
Bhuvana — Final Year B.Tech Student