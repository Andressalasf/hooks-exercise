import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeHooks from './playground/HomeHooks';
import UseStateExample from './playground/UseStateExample';
import UseEffectExample from './playground/UseEffectExample';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        //Rutas
        <Route path="/" element={<Navigate to="/playground" replace />} />
        <Route path="/playground" element={<HomeHooks />} />
        <Route path="/playground/usestate" element={<UseStateExample />} />
        <Route path="/playground/useeffect" element={<UseEffectExample />} />
      </Routes>
    </Router>
  );
}

export default App;
