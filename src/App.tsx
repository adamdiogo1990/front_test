import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BandDetail from './pages/BandDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/band/:id" element={<BandDetail />} />
    </Routes>
  );
}

export default App;
