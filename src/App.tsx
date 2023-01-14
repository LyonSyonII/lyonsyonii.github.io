import { HashRouter, Route, Routes } from "react-router-dom";
import config from "../gitprofile.config";
import Home from "./components/pages/Home";
import DeckToolbox from "./components/pages/DeckToolbox";

function App() {
  return (
    <HashRouter>
      // @ts-expect-error TS(2322): Type 'Element' is not assignable to type 'ReactNod... Remove
      this comment to see the full error message
      <Routes>
        // @ts-expect-error TS(2322): Type 'Element' is not assignable to type 'ReactNod... Remove
        this comment to see the full error message
        <Route path="/deck-toolbox" element={<DeckToolbox />} />
        // @ts-expect-error TS(2322): Type 'Element' is not assignable to type 'ReactNod... Remove
        this comment to see the full error message
        <Route path="/" element={<Home config={config} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
