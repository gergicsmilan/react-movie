import axiosInstance from "../../axios";
import { Movie } from "../types";

export const addMovie = (movie: Movie) => {
  const { title, description, ageLimit } = movie;
  return axiosInstance.post("/movies", { title, description, ageLimit });
};
