import axiosInstance from ".";

const userService = {
    updateProfile(payload) {
        payload.is_updated = true;
        payload.managed_by_org = true;
        return axiosInstance.put(`users/update/${payload.user_id}`, payload);
    },
};

export default userService;
