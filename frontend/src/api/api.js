import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Car API functions
export const carsApi = {
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    
    if (filters.brand && filters.brand !== 'all') {
      params.append('brand', filters.brand);
    }
    if (filters.priceMin) {
      params.append('min_price', filters.priceMin);
    }
    if (filters.priceMax) {
      params.append('max_price', filters.priceMax);
    }
    if (filters.yearMin) {
      params.append('min_year', filters.yearMin);
    }
    if (filters.yearMax) {
      params.append('max_year', filters.yearMax);
    }
    
    const response = await axios.get(`${API}/cars?${params}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await axios.get(`${API}/cars/${id}`);
    return response.data;
  }
};

// Customer requests API functions
export const requestsApi = {
  create: async (requestData) => {
    const response = await axios.post(`${API}/requests`, requestData);
    return response.data;
  }
};

// Database seeding (for initial setup)
export const seedDatabase = async () => {
  try {
    const response = await axios.post(`${API}/seed`);
    return response.data;
  } catch (error) {
    console.warn('Database seeding:', error.response?.data?.detail || error.message);
    return null;
  }
};