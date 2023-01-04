import { Route, Routes } from 'react-router-dom';
import config from '../gitprofile.config';
import Home from './components/home';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home config={config} />} />
      </Routes>
    </div>
  );
}

export default App;
