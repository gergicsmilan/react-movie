import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import NotFound from "../pages/404/NotFound";

const BrowserSwitch = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default BrowserSwitch;
