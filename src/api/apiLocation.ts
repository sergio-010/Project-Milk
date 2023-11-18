import axios from "axios";

export const apiLocation = axios.create({
  baseURL: "https://api-colombia.com/api/v1",
});

apiLocation.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
