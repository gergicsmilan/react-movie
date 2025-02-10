import axiosInstance from "../../axios";
import { Movie } from "../types";

export const updateMovie = (updateData: Movie) => {
  const { _id, title, description, ageLimit } = updateData;
  return axiosInstance.put(`/movies/${_id}`, { title, description, ageLimit });
};
