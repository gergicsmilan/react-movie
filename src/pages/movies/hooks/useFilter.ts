import { useMemo, useState } from "react";
import { Movie } from "../../../services/api/types";

const useFilter = (movies: Movie[] | undefined) => {
  const [selectedFilter, setSelectedFilter] = useState("");

  const filteredMovies = useMemo(
    () =>
      (movies ?? []).filter((movie) =>
        selectedFilter !== "" ? movie.ageLimit === selectedFilter : true
      ),
    [movies, selectedFilter]
  );

  return { filteredMovies, selectedFilter, setSelectedFilter };
};

export default useFilter;
