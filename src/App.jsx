import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeHooks from './playground/HomeHooks';
import UseStateExample from './playground/UseStateExample';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        //Rutas
        <Route path="/" element={<Navigate to="/playground" replace />} />
        <Route path="/playground" element={<HomeHooks />} />
        <Route path="/playground/usestate" element={<UseStateExample />} />
      </Routes>
    </Router>
  );
}

export default App;
