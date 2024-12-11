import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "https://travel-sphere-zeta.vercel.app", // Backend URL
});

// Attach token to every request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
