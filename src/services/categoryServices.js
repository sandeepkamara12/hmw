import axiosInstance from ".";

const categoryService = {
    getAllExpenses() {
        return axiosInstance("category/all");
    },
};

export default categoryService;
