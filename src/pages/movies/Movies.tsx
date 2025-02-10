import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getMovies } from "../../services/api/get";
import MovieItem from "./components/MovieItem";
import { useMemo } from "react";

const Movies = () => {
  const navigate = useNavigate();
  const { isPending, isError, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const movies = useMemo(() => data?.data ?? [], [data?.data]);

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={() => navigate("/movie/add")}>Add Movie</button>
      {isError && <p>Something went wrong...</p>}
      {isPending && <p>Loading data...</p>}
      {!isError && !isPending && movies.length === 0 && <p>No movie found!</p>}

      <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
        {movies.map((movie) => (
          <MovieItem key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
