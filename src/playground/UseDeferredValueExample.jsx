import { useState, useDeferredValue, useMemo } from 'react';
import { Link } from 'react-router-dom';

const categorias = ['Electrónica', 'Ropa', 'Hogar', 'Deportes', 'Libros'];

const productos = Array.from({ length: 500 }, (_, i) => ({
  id: i + 1,
  nombre: `Producto ${String(i + 1).padStart(3, '0')}`,
  categoria: categorias[i % 5],
  precio: Math.floor(Math.random() * 90 + 10) * 1000,
}));

const UseDeferredValueExample = () => {
  const [busqueda, setBusqueda] = useState('');
  const deferredBusqueda = useDeferredValue(busqueda);

  const isStale = busqueda !== deferredBusqueda;

  const resultados = useMemo(
    () =>
      productos.filter(
        p =>
          p.nombre.toLowerCase().includes(deferredBusqueda.toLowerCase()) ||
          p.categoria.toLowerCase().includes(deferredBusqueda.toLowerCase())
      ),
    [deferredBusqueda]
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useDeferredValue Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useDeferredValue recibe un valor y devuelve una
            versión diferida de ese valor. React actualiza la versión diferida solo cuando
            no hay actualizaciones más urgentes pendientes, manteniendo la interfaz
            responsiva mientras se procesan listas o cálculos pesados.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const valorDiferido = useDeferredValue(valor);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Buscador de Productos</h2>
          <p className="text-gray-600 text-sm mb-5">
            Lista de <strong>500 productos</strong>. El input actualiza{' '}
            <code className="bg-gray-100 px-1 rounded font-mono">busqueda</code> de forma
            inmediata, pero la lista filtra usando{' '}
            <code className="bg-gray-100 px-1 rounded font-mono">deferredBusqueda</code>.
            Escribe rápido para ver el indicador de actualización diferida.
          </p>

          <input
            type="text"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre o categoría..."
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-4 text-sm font-mono">
              <span className="text-gray-500">
                Valor actual:{' '}
                <span className="text-blue-600 font-semibold">
                  &quot;{busqueda || '—'}&quot;
                </span>
              </span>
              <span className="text-gray-500">
                Valor diferido:{' '}
                <span className="text-purple-600 font-semibold">
                  &quot;{deferredBusqueda || '—'}&quot;
                </span>
              </span>
            </div>
            {isStale && (
              <span className="text-xs bg-yellow-100 text-yellow-700 border border-yellow-300 px-2 py-1 rounded font-semibold">
                Actualizando lista...
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-500">
              {resultados.length} resultado{resultados.length !== 1 ? 's' : ''}
            </p>
          </div>

          <div
            className={`flex flex-col gap-1 max-h-80 overflow-y-auto transition-opacity ${
              isStale ? 'opacity-50' : 'opacity-100'
            }`}
          >
            {resultados.length === 0 ? (
              <p className="text-gray-400 italic text-sm text-center py-6">
                Sin resultados para &quot;{deferredBusqueda}&quot;.
              </p>
            ) : (
              resultados.map(p => (
                <div
                  key={p.id}
                  className="flex justify-between items-center border border-gray-200 rounded px-4 py-2 hover:bg-gray-50"
                >
                  <div>
                    <span className="text-gray-800 text-sm font-semibold">{p.nombre}</span>
                    <span className="ml-3 text-xs text-gray-400">{p.categoria}</span>
                  </div>
                  <span className="text-sm text-green-600 font-semibold">
                    ${p.precio.toLocaleString()}
                  </span>
                </div>
              ))
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

export default UseDeferredValueExample;
