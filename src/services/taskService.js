import axiosInstance from ".";

const taskService = {
  saveTask(payload) {
    return axiosInstance.post("tasks/new", payload);
  },
};

export default taskService;
