import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api/auth', // Adjust based on backend URL
});

export default instance;
