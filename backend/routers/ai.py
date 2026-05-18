
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.claude_service import (
    generate_caption,
    generate_linkedin_post,
    generate_youtube_script,
    generate_viral_hooks,
    generate_hashtags,
    generate_content_calendar
)

router = APIRouter()

class CaptionRequest(BaseModel):
    topic: str
    tone: str = "Casual & fun"
    platform: str = "Instagram"

class LinkedInRequest(BaseModel):
    topic: str
    goal: str = "Share a lesson"
    length: str = "Medium (300 words)"

class YouTubeRequest(BaseModel):
    topic: str
    audience: str = "General audience"
    length: str = "Medium (8-12 min)"

class HooksRequest(BaseModel):
    topic: str
    platform: str = "Instagram Reel / TikTok"

class HashtagRequest(BaseModel):
    topic: str
    platform: str = "Instagram"
    mix: str = "Broad + niche (recommended)"

class CalendarRequest(BaseModel):
    niche: str
    frequency: str = "3 posts/week"
    platforms: str = "Instagram"

@router.post("/caption")
def caption(req: CaptionRequest):
    try:
        result = generate_caption(req.topic, req.tone, req.platform)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/linkedin")
def linkedin(req: LinkedInRequest):
    try:
        result = generate_linkedin_post(req.topic, req.goal, req.length)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/youtube")
def youtube(req: YouTubeRequest):
    try:
        result = generate_youtube_script(req.topic, req.audience, req.length)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/hooks")
def hooks(req: HooksRequest):
    try:
        result = generate_viral_hooks(req.topic, req.platform)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/hashtags")
def hashtags(req: HashtagRequest):
    try:
        result = generate_hashtags(req.topic, req.platform, req.mix)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/calendar")
def calendar(req: CalendarRequest):
    try:
        result = generate_content_calendar(req.niche, req.frequency, req.platforms)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))