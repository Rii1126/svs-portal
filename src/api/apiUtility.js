import axios from 'axios';
import { apiConfig } from './apiConfig';
import { getTokenFromCookie } from '../utils/cookieUtils';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // Only necessary if the backend requires credentials (cookies, etc.)
});

// Add a request interceptor to dynamically add the Authorization header
apiClient.interceptors.request.use((config) => {
  const token = getTokenFromCookie(); // Get the token from cookie or another storage
  if (token) {
    config.headers['Authorization'] = `${token}`; // Set the Bearer token dynamically
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle API requests
export const apiRequest = async (method, endpoint, data = null, params = null) => {
  try {
    const response = await apiClient({
      method,
      url: endpoint,
      data,
      params, // Optional query parameters
    });
    return response.data; // Return the response data
  } catch (error) {
    console.error(`API Error: ${error.response?.status} ${error.response?.statusText}`);
    if (error.response) {
      // Return a structured error object
      return {
        success: false,
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
      };
    } else {
      return {
        success: false,
        message: 'Network Error or API Unreachable',
      };
    }
  }
};
