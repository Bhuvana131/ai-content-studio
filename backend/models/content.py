
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class ContentItem(BaseModel):
    uid: str
    tool: str
    input: dict
    result: str
    created_at: Optional[datetime] = None