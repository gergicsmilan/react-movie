import { AxiosResponse } from "axios";
import axiosInstance from "../../axios";
import { Movie } from "../types";

export const getMovies = (): Promise<AxiosResponse<Movie[], unknown>> =>
  axiosInstance.get("/movies");

export const getMovie = (
  id: string | undefined
): Promise<AxiosResponse<Movie, unknown>> => axiosInstance.get(`/movies/${id}`);
