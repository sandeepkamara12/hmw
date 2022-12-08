import axiosInstance from ".";

const projectService = {
  saveProject(payload, slug = "") {
    if (slug) {
      return axiosInstance.put(`projects/update/${slug}`, payload);
    }
    return axiosInstance.post("projects/new", payload);
  },
  getProjectsByUserId(userId) {
    return axiosInstance.get(`projects/all/${userId}`);
  },
  getProjectBySlug(slug) {
    return axiosInstance.get(`projects/${slug}`);
  },
  deleteProject(slug) {
    return axiosInstance.delete(`projects/${slug}`);
  },
};

export default projectService;
