import MovieAdd from "../pages/movie/add/MovieAdd";
import MovieEdit from "../pages/movie/edit/MovieEdit";
import Movies from "../pages/movies/Movies";
import { Route } from "./types";

const routes: Route[] = [
  { path: "/", component: <Movies /> },
  { path: "/movie/edit/:id", component: <MovieEdit /> },
  { path: "/movie/add", component: <MovieAdd /> },
];

export default routes;
