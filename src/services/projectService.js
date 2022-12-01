import axiosInstance from ".";

const projectService = {
  saveProject(payload) {
    return axiosInstance.post("projects/new", payload);
  },
  getProjectsByUserId(userId) {
    return axiosInstance.get(`projects/all/${userId}`);
  },
};

export default projectService;
