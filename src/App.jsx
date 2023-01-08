import Router from 'preact-router';
import config from '../gitprofile.config';
import Home from './components/home';

function App() {
  return (
    <Router>
      <Home path="/" config={config} />
    </Router>
  );
}

export default App;
