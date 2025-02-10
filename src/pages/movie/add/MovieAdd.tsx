import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { addMovie } from "../../../services/api/post";
import { Link, useNavigate } from "react-router-dom";
import MovieForm from "../components/MovieForm";
import { Movie } from "../../../services/api/types";

const MovieAdd = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    isPending,
    isError,
    mutate: createMovie,
  } = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      navigate("/");
    },
  });

  const handleSubmit = useCallback(
    (movie: Movie) => {
      createMovie(movie);
    },
    [createMovie]
  );

  return (
    <>
      <h1>Add Movie</h1>
      <Link to="/">Back to Movies</Link>
      <MovieForm
        handleSubmit={handleSubmit}
        isError={isError}
        isPending={isPending}
        submitText="Create Movie"
      />
    </>
  );
};

export default MovieAdd;
