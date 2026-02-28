import axios from 'axios';

// Update this to match your deployment URL when pushing to production
// Currently pointing to your backend default logic port or environment variables
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor to attach JWT token to every request if it exists
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('dome_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
