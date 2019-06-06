import axios from 'axios';

const API_URL = 'https://api.stackexchange.com';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 20000,
});

export default axiosInstance;