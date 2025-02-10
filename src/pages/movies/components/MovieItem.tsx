import { Link } from "react-router-dom";
import { Movie } from "../../../services/api/types";

type Props = { movie: Movie };

const MovieItem = ({ movie }: Props) => (
  <Link
    to={`/movie/edit/${movie._id}`}
    key={movie._id}
    style={{
      display: "flex",
      flexFlow: "column",
      padding: "4px",
      borderRadius: "10px",
      border: "1px solid black",
      textDecoration: "none",
      color: "black",
    }}
  >
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  </Link>
);

export default MovieItem;
