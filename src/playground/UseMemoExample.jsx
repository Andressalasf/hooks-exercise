import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const estudiantes = [
  { id: 1, nombre: 'Laura Gómez', nota: 4.5 },
  { id: 2, nombre: 'Carlos Ruiz', nota: 3.2 },
  { id: 3, nombre: 'María Torres', nota: 4.8 },
  { id: 4, nombre: 'Jorge Pérez', nota: 2.9 },
  { id: 5, nombre: 'Sofía Vargas', nota: 3.7 },
  { id: 6, nombre: 'Andrés Mora', nota: 4.1 },
  { id: 7, nombre: 'Valentina Cruz', nota: 2.5 },
  { id: 8, nombre: 'Felipe Díaz', nota: 3.9 },
];

const temas = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  purple: 'bg-purple-600',
};

const UseMemoExample = () => {
  const [minNota, setMinNota] = useState(3.0);
  const [tema, setTema] = useState('blue');

  const resultado = useMemo(() => {
    const filtrados = estudiantes.filter(e => e.nota >= minNota);
    const promedio =
      filtrados.length > 0
        ? (filtrados.reduce((acc, e) => acc + e.nota, 0) / filtrados.length).toFixed(2)
        : '—';
    const mejor =
      filtrados.length > 0 ? Math.max(...filtrados.map(e => e.nota)).toFixed(1) : '—';
    return { filtrados, promedio, mejor };
  }, [minNota]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useMemo Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useMemo memoriza el resultado de un cálculo y solo
            lo vuelve a ejecutar cuando alguna de sus dependencias cambia. Sirve para evitar
            recalcular valores derivados en cada render.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const valor = useMemo(() =&gt; calculo(), [dependencias]);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Filtro de Estudiantes</h2>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-1">
              Nota mínima:{' '}
              <span className="text-blue-600 font-mono">{minNota.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={minNota}
              onChange={e => setMinNota(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Al mover el slider cambia la dependencia de useMemo y el cálculo se vuelve a ejecutar.
            </p>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Color del encabezado:
            </label>
            <div className="flex gap-2">
              {Object.keys(temas).map(t => (
                <button
                  key={t}
                  onClick={() => setTema(t)}
                  className={`px-4 py-2 rounded text-white font-semibold ${temas[t]} ${
                    tema === t ? 'ring-2 ring-offset-2 ring-gray-400' : 'opacity-70'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Cambiar el color actualiza el estado pero useMemo no se recalcula porque su
              dependencia (minNota) no cambió.
            </p>
          </div>

          <div className={`${temas[tema]} rounded p-5 mb-5 text-white`}>
            <div className="flex justify-between">
              <div>
                <p className="text-sm opacity-80">Aprueban</p>
                <p className="text-3xl font-bold">
                  {resultado.filtrados.length} / {estudiantes.length}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-80">Promedio</p>
                <p className="text-3xl font-bold">{resultado.promedio}</p>
              </div>
              <div className="text-right">
                <p className="text-sm opacity-80">Nota más alta</p>
                <p className="text-3xl font-bold">{resultado.mejor}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700 mb-3">Lista filtrada</h3>
            {resultado.filtrados.length === 0 ? (
              <p className="text-gray-400 italic text-sm">
                Ningún estudiante cumple el filtro.
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {resultado.filtrados.map(e => (
                  <div
                    key={e.id}
                    className="flex justify-between items-center border border-gray-200 rounded px-4 py-2"
                  >
                    <span className="text-gray-800">{e.nombre}</span>
                    <span
                      className={`font-bold ${
                        e.nota >= 4 ? 'text-green-600' : 'text-yellow-600'
                      }`}
                    >
                      {e.nota.toFixed(1)}
                    </span>
                  </div>
                ))}
              </div>
            )}
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

export default UseMemoExample;
