import axios from 'axios'

const baseURL = import.meta.env.VITE_BACK_URI as string

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api