// import Router from 'preact-router';
import { HashRouter, Route, Routes } from 'react-router-dom';
import config from '../gitprofile.config';
import Home from './components/pages/Home';
import DeckToolbox from './components/pages/DeckToolbox';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/deck-toolbox" element={<DeckToolbox path="/deck-toolbox" />} />
        <Route path="/" element={ <Home path="/" config={config}/> } />
      </Routes>
    </HashRouter>
  );
}

export default App;
