import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UseEffectExample = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState('bg-blue-500');

  useEffect(() => {
    let interval = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  useEffect(() => {
    if (seconds > 0 && seconds % 10 === 0) {
      const colors = ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-red-500'];
      const availableColors = colors.filter(c => c !== color);
      const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
      setColor(randomColor);
    }
  }, [seconds, color]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
    setColor('bg-blue-500');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useEffect Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useEffect permite ejecutar código después de que 
            el componente se renderiza. Es útil para temporizadores, suscripciones y efectos secundarios.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm">
            <code>useEffect(() =&gt; &#123; /* código */ &#125;, [dependencias]);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Temporizador con Cambio de Color
          </h2>
          
          <div className={`${color} rounded p-8 mb-6 text-center transition-colors duration-500`}>
            <div className="text-white text-6xl font-bold">
              {seconds}
            </div>
            <div className="text-white text-sm mt-2">
              segundos
            </div>
          </div>

          <div className="flex gap-3 justify-center mb-6">
            <button
              onClick={toggleTimer}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded font-semibold"
            >
              {isActive ? 'Pausar' : 'Iniciar'}
            </button>
            <button
              onClick={resetTimer}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded font-semibold"
            >
              Reiniciar
            </button>
          </div>

          <div className="bg-gray-50 rounded p-4 border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-3">Cómo funciona:</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>useEffect 1:</strong> Crea un interval cuando isActive es true. Se limpia cuando el componente se desmonta o isActive cambia.</li>
              <li><strong>useEffect 2:</strong> Cada 10 segundos cambia el color del temporizador aleatoriamente.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/playground"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded"
          >
            Volver al Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseEffectExample;
