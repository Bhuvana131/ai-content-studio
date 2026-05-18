
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import ai, auth, history

app = FastAPI(title="AI Content Studio")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(ai.router, prefix="/api/ai", tags=["AI"])
app.include_router(auth.router, prefix="/api/auth", tags=["Auth"])
app.include_router(history.router, prefix="/api/history", tags=["History"])

@app.get("/health")
def health():
    return {"status": "ok", "message": "AI Content Studio API is running"}