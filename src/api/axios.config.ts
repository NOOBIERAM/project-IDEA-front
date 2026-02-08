import axios from 'axios'

const baseURL = import.meta.env.VITE_BACK_URI as string
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshResponse = await api.post("/auth/refresh", {});
      const newAccessToken = refreshResponse.data.accessToken;

      api.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;
      originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    }


    return Promise.reject(error);
  }
);


export default api