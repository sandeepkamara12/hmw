import axiosInstance from ".";

const authServices = {
    requestVerificationCodeByPhone(phone_number) {
        return axiosInstance.post("auth/request", {phone_number});
    },
    requestVerificationCodeByEmail(email) {
        return axiosInstance.post("auth/request/email", {email});
    },
    authVerify(payload) {
        return axiosInstance.post("auth/verify", payload);
    },
    authVerifyEmail(payload) {
        return axiosInstance.post("auth/verify/email", payload);
    }
};

export default authServices;
