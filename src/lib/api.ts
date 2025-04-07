import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://niger-agro.rxhub.com.ng/public";
const api = axios.create({
     baseURL: BASE_URL,
    timeout: 1500000,
    headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config; 
    },
    (error)=>{
        return Promise.reject(error)
    }
)

export default api;