import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:80/api",
    withCredentials: true, 
});

export default axiosInstance;