import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { getMovies } from "../../services/api/get";
import useFilter from "./hooks/useFilter";
import MovieItem from "./components/MovieItem";
import Filter from "./components/Filter";

const Movies = () => {
  const navigate = useNavigate();
  const { isPending, isError, data } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  const { filteredMovies, selectedFilter, setSelectedFilter } = useFilter(
    data?.data
  );

  return (
    <div>
      <h1>Movies</h1>
      <button onClick={() => navigate("/movie/add")}>Add Movie</button>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {isError && <p>Something went wrong...</p>}
      {isPending && <p>Loading data...</p>}
      {!isError && !isPending && filteredMovies.length === 0 && (
        <p>No movie found!</p>
      )}

      <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
        {filteredMovies.map((movie) => (
          <MovieItem key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
