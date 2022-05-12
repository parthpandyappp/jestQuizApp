import { Routes, Route } from "react-router-dom";
import { Home, Themes } from "../pages";

function Endpoints() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/themes" element={<Themes />} />
    </Routes>
  );
}

export { Endpoints as Routes };
