import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost.com/",
    withCredentials: true, 
});

export default axiosInstance;