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
import './App.css';

const LoginPagePlaceholder = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
        <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900">LoginPage pendiente</h1>
        <p className="mt-3 text-slate-600">La ruta principal ahora es LoginPage. Esta vista se implementara en el siguiente paso.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/register"
            className="rounded-lg bg-blue-700 px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Ir a registro
          </Link>
          <Link
            to="/playground"
            className="rounded-lg border border-slate-300 px-5 py-3 font-['Space_Grotesk'] text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Ir a Home Hooks
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPagePlaceholder />} />
        <Route path="/register" element={<RegisterPage />} />
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
