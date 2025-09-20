# BM Motors API Contracts

## Overview
This document outlines the API contracts and data structures for the BM Motors car import website backend integration.

## Database Models

### 1. Car Model
```javascript
{
  _id: ObjectId,
  brand: String, // BMW, Mercedes-Benz, etc.
  model: String, // X5, E-Class, etc.
  year: Number, // 2019-2024
  price: Number, // in rubles
  mileage: Number, // in kilometers
  fuel: String, // Бензин, Дизель
  transmission: String, // Автомат, Механика
  color: String, // Черный, Белый, etc.
  description: String,
  features: [String], // Array of features
  image: String, // URL to car image
  available: Boolean, // true/false
  createdAt: Date,
  updatedAt: Date
}
```

### 2. Customer Request Model
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String, // optional
  message: String,
  type: String, // 'general' or 'car_inquiry'
  carId: ObjectId, // optional, if inquiry about specific car
  status: String, // 'new', 'contacted', 'closed'
  createdAt: Date,
  updatedAt: Date
}
```

## API Endpoints

### Cars Endpoints
- `GET /api/cars` - Get all cars with optional filtering
  - Query params: brand, minPrice, maxPrice, minYear, maxYear
  - Response: Array of car objects

- `GET /api/cars/:id` - Get single car by ID
  - Response: Car object

- `POST /api/cars` - Create new car (admin only - for now not implemented)
- `PUT /api/cars/:id` - Update car (admin only - for now not implemented)
- `DELETE /api/cars/:id` - Delete car (admin only - for now not implemented)

### Customer Requests Endpoints
- `POST /api/requests` - Submit customer request
  - Body: { name, phone, email?, message, type?, carId? }
  - Response: Created request object

- `GET /api/requests` - Get all requests (admin only - for now basic implementation)

## Frontend Integration Plan

### Replace Mock Data
1. Remove mock.js imports in components
2. Replace mockCars with API calls to /api/cars
3. Replace form submissions with API calls to /api/requests
4. Add loading states and error handling

### Updated Components
- **CatalogPage**: Fetch cars from /api/cars with filtering
- **HomePage**: Submit customer requests to /api/requests
- **ContactPage**: Submit contact forms to /api/requests

### State Management
- Use React useState and useEffect for API calls
- Add loading and error states
- Implement proper form validation

## Mock Data Migration
Current mock data from mock.js will be seeded into MongoDB:
- 6 cars (BMW X5, Mercedes E-Class, etc.)
- European brands focus
- Realistic pricing in rubles
- Professional descriptions in Russian