
from dotenv import load_dotenv
import os

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "ai_content_studio")
FIREBASE_ADMIN_SDK = os.getenv("FIREBASE_ADMIN_SDK", "firebase-admin.json")