import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovie } from "../../../services/api/get";
import { Link, useNavigate, useParams } from "react-router";
import { useCallback } from "react";
import { updateMovie } from "../../../services/api/put";
import { deleteMovie } from "../../../services/api/delete";
import MovieForm from "../components/MovieForm";
import { Movie } from "../../../services/api/types";

const MovieEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isPending, isError, data } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovie(id),
  });

  const {
    isPending: isDeleteLoading,
    isError: isDeleteError,
    mutate: removeMovie,
  } = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      navigate("/");
    },
  });

  const {
    mutate: editMovie,
    isPending: isEditLoading,
    isError: isEditError,
  } = useMutation({
    mutationFn: updateMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      navigate("/");
    },
  });

  const handleSubmit = useCallback(
    (movie: Movie) => {
      editMovie(movie);
    },
    [editMovie]
  );

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      <h1>Edit Movie</h1>
      <Link to="/">Back to Movies</Link>
      <br />
      <button
        onClick={() => removeMovie(id!)}
        disabled={isDeleteLoading}
        style={{ margin: "4px 0" }}
      >
        Delete Movie
      </button>
      {isDeleteError && (
        <p>Something went wrong, could not delete the movie.</p>
      )}
      <MovieForm
        movie={data.data}
        isPending={isEditLoading}
        isError={isEditError}
        handleSubmit={handleSubmit}
        submitText="Edit Movie"
      />
    </>
  );
};

export default MovieEdit;
