import axios from "axios";

/* =========================
   AXIOS INSTANCE
========================= */

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
});

/* =========================
   REQUEST INTERCEPTOR
========================= */
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* =========================
   RESPONSE INTERCEPTOR
========================= */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Unauthorized → force logout
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }

      console.error(
        "API Error:",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("Network Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
