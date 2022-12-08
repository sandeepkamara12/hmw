import axiosInstance from ".";

const sectionService = {
  saveSection(payload) {
    return axiosInstance.post("projects/section", payload);
  },
  // requestVerificationCodeByEmail(email) {
  //     return axiosInstance.post("auth/request/email", {email});
  // },
  // authVerify(payload) {
  //     return axiosInstance.post("auth/verify", payload);
  // },
  // authVerifyEmail(payload) {
  //     return axiosInstance.post("auth/verify/email", payload);
  // }
};

export default sectionService;
