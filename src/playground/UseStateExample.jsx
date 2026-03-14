import { useState } from 'react';
import { Link } from 'react-router-dom';

const UseStateExample = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const increment = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  const reset = () => {
    setCounter(0);
    setStep(1);
  };

  const handleShowMessage = () => {
    if (name.trim()) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useState Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useState es un Hook que permite agregar estado local a 
            componentes funcionales. Retorna un array con el valor actual del estado y una función 
            para actualizarlo.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm">
            <code>const [state, setState] = useState(valorInicial);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Contador Interactivo
          </h2>

          <div className="bg-blue-500 rounded p-6 mb-6 text-center">
            <div className="text-white text-5xl font-bold">
              {counter}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded"
            >
              - {step}
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded"
            >
              Reset
            </button>
            <button
              onClick={increment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded"
            >
              + {step}
            </button>
          </div>

          <div className="bg-gray-50 rounded p-4 mb-6 border border-gray-200">
            <label className="block text-gray-700 font-semibold mb-2">
              Tamaño del paso: {step}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Mensaje Personalizado
            </h3>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Escribe tu nombre..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleShowMessage}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Mostrar
              </button>
            </div>
            
            {showMessage && name && (
              <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded">
                <p>
                  ¡Hola {name}! El contador está en: {counter}
                </p>
              </div>
            )}
          </div>

          <div className="bg-gray-50 rounded p-4 mt-6 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3">Estados utilizados:</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex justify-between">
                <span>counter:</span>
                <span className="font-bold">{counter}</span>
              </div>
              <div className="flex justify-between">
                <span>step:</span>
                <span className="font-bold">{step}</span>
              </div>
              <div className="flex justify-between">
                <span>name:</span>
                <span className="font-bold">"{name || 'vacío'}"</span>
              </div>
              <div className="flex justify-between">
                <span>showMessage:</span>
                <span className="font-bold">{String(showMessage)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/playground"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            ← Volver al Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;
