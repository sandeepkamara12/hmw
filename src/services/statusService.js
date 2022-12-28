import axiosInstance from ".";

const statusService = {
  save(payload) {
    // if (payload._id) {
    //   return axiosInstance.put(`project/update/${payload._id}`, {
    //     content: payload.content,
    //   });
    // }
    return axiosInstance.post("project-status/new", payload);
  },
  getByProjectId(project_id) {
    return axiosInstance.get(`project-status/${project_id}`);
  },
};

export default statusService;
