import axiosInstance from ".";

const notesService = {
  save(payload) {
    return axiosInstance.post("notes/project/new", payload);
  },
  get(projectId) {
    return axiosInstance.get(`notes/project/active/${projectId}`);
  },
  inActive(noteId) {
    return axiosInstance.put(`notes/update-inactie/${noteId}`);
  },
  resolved(noteId) {
    return axiosInstance.put(`notes/update-resolved/${noteId}`);
  },
};

export default notesService;
