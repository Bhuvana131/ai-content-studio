
from fastapi import APIRouter, Depends
from firebase_auth import verify_token

router = APIRouter()

@router.get("/me")
def get_me(user=Depends(verify_token)):
    return {
        "uid": user["uid"],
        "email": user.get("email"),
        "name": user.get("name")
    }
