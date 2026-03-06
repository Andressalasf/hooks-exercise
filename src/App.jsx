import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeHooks from './playground/HomeHooks';
import UseStateExample from './playground/UseStateExample';
import UseEffectExample from './playground/UseEffectExample';
import UseContextExample from './playground/UseContextExample';
import UseReducerExample from './playground/UseReducerExample';
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
        <Route path="/playground/usecontext" element={<UseContextExample />} />
        <Route path="/playground/usereducer" element={<UseReducerExample />} />
      </Routes>
    </Router>
  );
}

export default App;
