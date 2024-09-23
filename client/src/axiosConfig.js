import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5050/api',               // Adjust based on backend URL
});

export default axiosInstance;
