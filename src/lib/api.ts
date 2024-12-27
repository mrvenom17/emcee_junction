// API utility functions for backend communication
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: any) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
};

export const anchorsAPI = {
  search: async (term: string) => {
    const response = await api.get(`/anchors/search?term=${term}`);
    return response.data;
  },
  getProfile: async (id: string) => {
    const response = await api.get(`/anchors/${id}`);
    return response.data;
  },
  updateProfile: async (id: string, data: any) => {
    const response = await api.put(`/anchors/${id}`, data);
    return response.data;
  },
};

export const eventsAPI = {
  getUpcoming: async () => {
    const response = await api.get('/events/upcoming');
    return response.data;
  },
  getPast: async () => {
    const response = await api.get('/events/past');
    return response.data;
  },
  create: async (eventData: any) => {
    const response = await api.post('/events', eventData);
    return response.data;
  },
};

export default api;