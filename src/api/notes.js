import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE;

export const fetchNotes = async () => {
  const res = await axios.get(`${API_BASE}/notes`);
  return res.data;
};

export const createNote = async (note) => {
  return axios.post(`${API_BASE}/notes/create`, note);
};

export const updateNote = async (id, data) => {
  return axios.patch(`${API_BASE}/notes/${id}`, data);
};

export const deleteNote = async (id) => {
  return axios.delete(`${API_BASE}/notes/delete${id}`);
};
