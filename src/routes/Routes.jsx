import { Routes, Route } from "react-router-dom";
import { Home, Themes, Quest, Rules } from "../pages";

function Endpoints() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/quest/:qid" element={<Quest />} />
      <Route path="/quest/:qid/rules" element={<Rules />} />
    </Routes>
  );
}

export { Endpoints as Routes };
