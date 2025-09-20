from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class CustomerRequest(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = None
    message: str
    type: str = "general"  # 'general' or 'car_inquiry'
    car_id: Optional[str] = None
    status: str = "new"  # 'new', 'contacted', 'closed'
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CustomerRequestCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = None
    message: str
    type: str = "general"
    car_id: Optional[str] = None

class CustomerRequestUpdate(BaseModel):
    status: Optional[str] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)