import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomeHooks from './playground/HomeHooks';
import UseStateExample from './playground/UseStateExample';
import UseEffectExample from './playground/UseEffectExample';
import UseContextExample from './playground/UseContextExample';
import UseReducerExample from './playground/UseReducerExample';
import UseRefExample from './playground/UseRefExample';
import UseMemoExample from './playground/UseMemoExample';
import UseCallbackExample from './playground/UseCallbackExample';
import UseDebugValueExample from './playground/UseDebugValueExample';
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
        <Route path="/playground/useref" element={<UseRefExample />} />
        <Route path="/playground/usememo" element={<UseMemoExample />} />
        <Route path="/playground/usecallback" element={<UseCallbackExample />} />
        <Route path="/playground/usedebugvalue" element={<UseDebugValueExample />} />
      </Routes>
    </Router>
  );
}

export default App;
