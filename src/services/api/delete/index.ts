import axiosInstance from "../../axios";

export const deleteMovie = (id: string) =>
  axiosInstance.delete(`/movies/${id}`);
