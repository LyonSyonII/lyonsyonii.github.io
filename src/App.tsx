import { HashRouter, Route, Routes } from "react-router-dom";
import config from "../gitprofile.config";
import Home from "./components/pages/Home";
import DeckToolbox from "./components/pages/DeckToolbox";

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
