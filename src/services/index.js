import axios from "axios";
const axiosInstance = axios.create({
});
axiosInstance.interceptors.request.use(
    (config) => {

    },
    (error) => {
    }
);


export default axiosInstance;
