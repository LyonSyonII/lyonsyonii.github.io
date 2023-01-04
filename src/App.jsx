import { BrowserRouter, Route, Routes } from 'react-router-dom';
import config from '../gitprofile.config';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home config={config} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
