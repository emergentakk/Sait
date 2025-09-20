from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Car(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    brand: str
    model: str
    year: int
    price: int  # in rubles
    mileage: int  # in kilometers
    fuel: str  # Бензин, Дизель
    transmission: str  # Автомат, Механика
    color: str
    description: str
    features: List[str]
    image: str
    available: bool = True
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class CarCreate(BaseModel):
    brand: str
    model: str
    year: int
    price: int
    mileage: int
    fuel: str
    transmission: str
    color: str
    description: str
    features: List[str]
    image: str
    available: bool = True

class CarUpdate(BaseModel):
    brand: Optional[str] = None
    model: Optional[str] = None
    year: Optional[int] = None
    price: Optional[int] = None
    mileage: Optional[int] = None
    fuel: Optional[str] = None
    transmission: Optional[str] = None
    color: Optional[str] = None
    description: Optional[str] = None
    features: Optional[List[str]] = None
    image: Optional[str] = None
    available: Optional[bool] = None
    updated_at: datetime = Field(default_factory=datetime.utcnow)