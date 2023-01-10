import Router from 'preact-router';
import config from '../gitprofile.config';
import Home from './components/pages/Home';
import DeckToolbox from './components/pages/DeckToolbox';

function App() {
  return (
    <Router>
      <Home path="/" config={config} />
      <DeckToolbox path="/deck-toolbox" />
    </Router>
  );
}

export default App;
