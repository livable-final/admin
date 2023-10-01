import axios, { AxiosError } from 'axios';

const API_BASE_URL = process.env.API_BASE_URL as string;

const apiInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// Request 인터셉터
apiInstance.interceptors.request.use(
  async (config) => {
    const storage = localStorage.getItem('user-storage');
    const userKey = storage ? JSON.parse(storage) : null;
    const token = userKey?.state?.user;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return Promise.resolve(config);
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// Response 인터셉터
apiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  },
);

export default apiInstance;
