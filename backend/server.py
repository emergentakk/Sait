from fastapi import FastAPI, APIRouter, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
from pathlib import Path
from typing import List, Optional
import os
import logging

# Import models
from models.car import Car, CarCreate, CarUpdate
from models.customer_request import CustomerRequest, CustomerRequestCreate, CustomerRequestUpdate
from database.seed_data import SEED_CARS

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "BM Motors API"}

# Car endpoints
@api_router.get("/cars", response_model=List[Car])
async def get_cars(
    brand: Optional[str] = Query(None),
    min_price: Optional[int] = Query(None),
    max_price: Optional[int] = Query(None),
    min_year: Optional[int] = Query(None),
    max_year: Optional[int] = Query(None)
):
    """Get all cars with optional filtering"""
    try:
        # Build filter query
        filter_query = {"available": True}
        
        if brand and brand != "all":
            filter_query["brand"] = brand
        if min_price is not None:
            filter_query.setdefault("price", {})["$gte"] = min_price
        if max_price is not None:
            filter_query.setdefault("price", {})["$lte"] = max_price
        if min_year is not None:
            filter_query.setdefault("year", {})["$gte"] = min_year
        if max_year is not None:
            filter_query.setdefault("year", {})["$lte"] = max_year
        
        cars_cursor = db.cars.find(filter_query)
        cars = await cars_cursor.to_list(1000)
        
        return [Car(**car) for car in cars]
    except Exception as e:
        logger.error(f"Error fetching cars: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch cars")

@api_router.get("/cars/{car_id}", response_model=Car)
async def get_car(car_id: str):
    """Get single car by ID"""
    try:
        car = await db.cars.find_one({"id": car_id, "available": True})
        if not car:
            raise HTTPException(status_code=404, detail="Car not found")
        return Car(**car)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching car {car_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch car")

@api_router.post("/cars", response_model=Car)
async def create_car(car_data: CarCreate):
    """Create new car"""
    try:
        car = Car(**car_data.dict())
        await db.cars.insert_one(car.dict())
        return car
    except Exception as e:
        logger.error(f"Error creating car: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create car")

# Customer request endpoints
@api_router.post("/requests", response_model=CustomerRequest)
async def create_request(request_data: CustomerRequestCreate):
    """Submit customer request"""
    try:
        request = CustomerRequest(**request_data.dict())
        await db.customer_requests.insert_one(request.dict())
        logger.info(f"New customer request from {request.name}: {request.phone}")
        return request
    except Exception as e:
        logger.error(f"Error creating customer request: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to submit request")

@api_router.get("/requests", response_model=List[CustomerRequest])
async def get_requests():
    """Get all customer requests"""
    try:
        requests_cursor = db.customer_requests.find({}).sort("created_at", -1)
        requests = await requests_cursor.to_list(1000)
        return [CustomerRequest(**req) for req in requests]
    except Exception as e:
        logger.error(f"Error fetching requests: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch requests")

# Initialize database with seed data
@api_router.post("/seed")
async def seed_database():
    """Seed database with initial car data"""
    try:
        # Check if cars already exist
        existing_cars = await db.cars.count_documents({})
        if existing_cars > 0:
            return {"message": f"Database already has {existing_cars} cars"}
        
        # Insert seed data
        cars_data = [car.dict() for car in SEED_CARS]
        result = await db.cars.insert_many(cars_data)
        
        return {"message": f"Successfully seeded {len(result.inserted_ids)} cars"}
    except Exception as e:
        logger.error(f"Error seeding database: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to seed database")

# Include the router in the main app
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()