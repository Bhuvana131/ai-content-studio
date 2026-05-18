
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu421OuSrzEHyiWvjVBD1uLTm9MSyum4A",
  authDomain: "ai-content-studio-83c56.firebaseapp.com",
  projectId: "ai-content-studio-83c56",
  storageBucket: "ai-content-studio-83c56.firebasestorage.app",
  messagingSenderId: "954063831668",
  appId: "1:954063831668:web:0e0e1507d4d8f783d78721"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();