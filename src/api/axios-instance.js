import axios from "axios";

const _axiosInstance = axios.create();

_axiosInstance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

export const axiosInstance = _axiosInstance;
