import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const CRUD_ID = import.meta.env.VITE_CRUD_ID;

const axiosInstance = axios.create({
  baseURL: `${API_URL}${CRUD_ID}`,
});

export default axiosInstance;
