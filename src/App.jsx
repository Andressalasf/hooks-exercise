import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import HomeHooks from './playground/HomeHooks';
import UseStateExample from './playground/UseStateExample';
import UseEffectExample from './playground/UseEffectExample';
import UseContextExample from './playground/UseContextExample';
import UseReducerExample from './playground/UseReducerExample';
import UseRefExample from './playground/UseRefExample';
import UseMemoExample from './playground/UseMemoExample';
import UseCallbackExample from './playground/UseCallbackExample';
import UseDebugValueExample from './playground/UseDebugValueExample';
import UseIdExample from './playground/UseIdExample';
import UseDeferredValueExample from './playground/UseDeferredValueExample';
import UseLayoutEffectExample from './playground/UseLayoutEffectExample';
import UseTransitionExample from './playground/UseTransitionExample';
import UseActionStateExample from './playground/UseActionStateExample';
import UseEffectEventExample from './playground/UseEffectEventExample';
import UseImperativeHandleExample from './playground/UseImperativeHandleExample';
import UseInsertionEffectExample from './playground/UseInsertionEffectExample';
import UseOptimisticExample from './playground/UseOptimisticExample';
import UseSyncExternalStoreExample from './playground/UseSyncExternalStoreExample';
import RegisterPage from './loginProject/RegisterPage';
import LoginPage from './loginProject/LoginPage';
import DashboardPage from './loginProject/DashboardPage';
import UserHistoryPage from './loginProject/UserHistoryPage';
import RecoverPage from './loginProject/RecoverPage';
import ResetPage from './loginProject/ResetPage';
import CompleteProfilePage from './loginProject/CompleteProfilePage';
import TournamentsPage from './loginProject/TournamentsPage';
import GruposPage from './loginProject/GruposPage';
import HomePage from './loginProject/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/torneos" element={<TournamentsPage />} />
        <Route path="/dashboard/grupos"  element={<GruposPage />} />
        <Route path="/historial-usuarios" element={<UserHistoryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/recover" element={<RecoverPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/complete-profile" element={<CompleteProfilePage />} />
        <Route path="/playground" element={<HomeHooks />} />
        <Route path="/playground/usestate" element={<UseStateExample />} />
        <Route path="/playground/useeffect" element={<UseEffectExample />} />
        <Route path="/playground/usecontext" element={<UseContextExample />} />
        <Route path="/playground/usereducer" element={<UseReducerExample />} />
        <Route path="/playground/useref" element={<UseRefExample />} />
        <Route path="/playground/usememo" element={<UseMemoExample />} />
        <Route path="/playground/usecallback" element={<UseCallbackExample />} />
        <Route path="/playground/usedebugvalue" element={<UseDebugValueExample />} />
        <Route path="/playground/useid" element={<UseIdExample />} />
        <Route path="/playground/usedeferredvalue" element={<UseDeferredValueExample />} />
        <Route path="/playground/uselayouteffect" element={<UseLayoutEffectExample />} />
        <Route path="/playground/usetransition" element={<UseTransitionExample />} />
        <Route path="/playground/useactionstate" element={<UseActionStateExample />} />
        <Route path="/playground/useeffectevent" element={<UseEffectEventExample />} />
        <Route path="/playground/useimperativehandle" element={<UseImperativeHandleExample />} />
        <Route path="/playground/useinsertioneffect" element={<UseInsertionEffectExample />} />
        <Route path="/playground/useoptimistic" element={<UseOptimisticExample />} />
        <Route path="/playground/usesyncexternalstore" element={<UseSyncExternalStoreExample />} />
      </Routes>
    </Router>
  );
}

export default App;
