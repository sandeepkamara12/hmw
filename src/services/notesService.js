import axiosInstance from ".";

const notesService = {
  save(payload) {
    if (payload._id) {
      return axiosInstance.put(`notes/update/${payload._id}`, {
        content: payload.content,
      });
    }
    return axiosInstance.post("notes/project/new", payload);
  },
  get(projectId) {
    return axiosInstance.get(`notes/project/active/${projectId}`);
  },
  inActive(noteId) {
    return axiosInstance.put(`notes/update-inactive/${noteId}`);
  },
  resolved(noteId) {
    return axiosInstance.put(`notes/update-resolved/${noteId}`);
  },
};

export default notesService;
