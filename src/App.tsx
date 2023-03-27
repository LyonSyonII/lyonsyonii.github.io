import { HashRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import config from "../gitprofile.config";
import DeckToolbox from "./components/pages/DeckToolbox";
import Home from "./components/pages/Home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/deck-toolbox" element={<DeckToolbox />} />
        <Route path="/" element={<Home config={config} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;