import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseRefExample = () => {
  const [text, setText] = useState('');
  const [savedText, setSavedText] = useState('');

  const inputRef = useRef(null);
  const renderCountRef = useRef(0);
  const prevTextRef = useRef('');

  renderCountRef.current += 1;

  useEffect(() => {
    prevTextRef.current = savedText;
  }, [savedText]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleSave = () => {
    if (text.trim()) {
      setSavedText(text);
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useRef Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useRef retorna un objeto mutable cuya propiedad{' '}
            <code className="bg-gray-100 px-1 rounded">.current</code> persiste durante toda
            la vida del componente sin causar re-renderizaciones. Se usa para acceder a
            elementos del DOM y para conservar valores mutables entre renders.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const ref = useRef(valorInicial);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Enfoque DOM y Persistencia de Valores
          </h2>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>Renders del componente:</strong>{' '}
              <span className="font-mono font-bold">{renderCountRef.current}</span>
              <span className="ml-2 text-yellow-600">
                — este conteo usa <code>useRef</code>, no <code>useState</code>, por eso no genera renders adicionales.
              </span>
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-1">
              Ref de DOM — enfocar el input con un botón
            </label>
            <p className="text-sm text-gray-500 mb-3">
              El botón "Enfocar" llama a <code className="bg-gray-100 px-1 rounded">inputRef.current.focus()</code> para mover el cursor directamente al campo.
            </p>
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Escribe algo y guárdalo..."
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleFocus}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold"
              >
                Enfocar
              </button>
              <button
                onClick={handleSave}
                disabled={!text.trim()}
                className={`px-4 py-2 rounded font-semibold ${
                  text.trim()
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Guardar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <p className="text-xs text-blue-600 font-semibold mb-2 uppercase tracking-wide">
                Valor guardado actual
              </p>
              <p className="text-gray-800 font-mono text-lg">
                {savedText || <span className="text-gray-400 italic text-base">— vacío —</span>}
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-4">
              <p className="text-xs text-gray-500 font-semibold mb-2 uppercase tracking-wide">
                Valor guardado anterior <span className="font-normal">(prevTextRef)</span>
              </p>
              <p className="text-gray-800 font-mono text-lg">
                {prevTextRef.current || <span className="text-gray-400 italic text-base">— vacío —</span>}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-3">Explicacion</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>
                <strong>inputRef</strong>: apunta directamente al elemento{' '}
                <code className="bg-gray-100 px-1 rounded">&lt;input&gt;</code> del DOM. El botón
                "Enfocar" llama a{' '}
                <code className="bg-gray-100 px-1 rounded">inputRef.current.focus()</code> sin tocar el estado.
              </li>
              <li>
                <strong>renderCountRef</strong>: se incrementa en cada render pero su cambio
                no dispara un nuevo render, al contrario de lo que haría un{' '}
                <code className="bg-gray-100 px-1 rounded">useState</code>.
              </li>
              <li>
                <strong>prevTextRef</strong>: almacena el valor anterior de{' '}
                <code className="bg-gray-100 px-1 rounded">savedText</code> usando un{' '}
                <code className="bg-gray-100 px-1 rounded">useEffect</code>. Así, en cada render
                el ref ya contiene el valor del render anterior.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to="/playground"
            className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded font-semibold"
          >
            ← Volver al Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UseRefExample;
