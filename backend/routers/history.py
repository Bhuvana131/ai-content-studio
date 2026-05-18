
from fastapi import APIRouter, Depends, Request
from firebase_auth import verify_token
from database import get_database
from datetime import datetime

router = APIRouter()

@router.post("/save")
async def save_content(request: Request, user=Depends(verify_token)):
    db = get_database()
    data = await request.json()
    item = {
        "uid": user["uid"],
        "tool": data.get("tool"),
        "input": data.get("input"),
        "result": data.get("result"),
        "created_at": datetime.utcnow()
    }
    await db.history.insert_one(item)
    return {"message": "Saved successfully"}

@router.get("/list")
async def get_history(user=Depends(verify_token)):
    db = get_database()
    cursor = db.history.find(
        {"uid": user["uid"]},
        {"_id": 0}
    ).sort("created_at", -1).limit(20)
    items = await cursor.to_list(length=20)
    return {"history": items}

@router.delete("/delete/{tool}")
async def delete_history(tool: str, user=Depends(verify_token)):
    db = get_database()
    await db.history.delete_many({
        "uid": user["uid"],
        "tool": tool
    })
    return {"message": "Deleted successfully"}