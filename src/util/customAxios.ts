import axios, { AxiosError } from "axios";
import { server } from "config/config.json"

const customAxios = axios.create({
    baseURL: server,
    timeout: 2500
});

customAxios.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
            config.headers = {
                Authorization: `Bearer ${accessToken}`,
            }
        }
        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    }
);

export default customAxios