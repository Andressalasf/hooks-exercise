import { useState, useTransition } from 'react';
import { Link } from 'react-router-dom';

const TABS = ['Ventas', 'Clientes', 'Productos', 'Reportes'];

const estadoColor = {
  Activo: 'text-gray-700 bg-gray-100',
  Pendiente: 'text-gray-500 bg-gray-100',
  Cerrado: 'text-gray-400 bg-gray-100',
};

const generarDatos = (tipo, cantidad = 300) =>
  Array.from({ length: cantidad }, (_, i) => ({
    id: i + 1,
    nombre: `${tipo} ${String(i + 1).padStart(3, '0')}`,
    valor: (Math.floor((i * 7 + 13) % 90) + 10) * 10000,
    estado: ['Activo', 'Pendiente', 'Cerrado'][i % 3],
  }));

const datos = {
  Ventas: generarDatos('Venta'),
  Clientes: generarDatos('Cliente'),
  Productos: generarDatos('Producto'),
  Reportes: generarDatos('Reporte'),
};

const UseTransitionExample = () => {
  const [tabActiva, setTabActiva] = useState('Ventas');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = tab => {
    startTransition(() => {
      setTabActiva(tab);
    });
  };

  const items = datos[tabActiva];
  const activos = items.filter(i => i.estado === 'Activo').length;
  const total = items.reduce((acc, i) => acc + i.valor, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useTransition Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useTransition marca una actualización de estado como
            no urgente, permitiendo que React priorice interacciones del usuario (clics,
            inputs) mientras procesa la actualización pesada en segundo plano. Devuelve{' '}
            <code className="bg-gray-100 px-1 rounded font-mono text-sm">isPending</code> para
            mostrar retroalimentación mientras la transición está en curso.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const [isPending, startTransition] = useTransition();</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Panel de Datos por Módulo</h2>
          <p className="text-gray-600 text-sm mb-5">
            Cada pestaña carga <strong>300 registros</strong>. El cambio de pestaña se envuelve
            en <code className="bg-gray-100 px-1 rounded font-mono">startTransition</code> para
            marcarlo como no urgente. Mientras React procesa, <code className="bg-gray-100 px-1 rounded font-mono">isPending</code> es{' '}
            <code className="bg-gray-100 px-1 rounded font-mono">true</code> y las pestañas
            siguen siendo completamente clicables.
          </p>

          <div className="flex gap-1 border-b border-gray-200 mb-5">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-4 py-2 text-sm font-semibold rounded-t transition-colors ${
                  tabActiva === tab
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
            {isPending && (
              <span className="ml-auto self-center text-xs text-blue-500 font-semibold animate-pulse px-2">
                Cargando...
              </span>
            )}
          </div>

          <div className="flex gap-3 mb-5">
            <div className="bg-gray-50 border border-gray-200 rounded p-3 flex-1 text-center">
              <p className="text-xs text-gray-500">Total registros</p>
              <p className="text-2xl font-bold text-gray-700">{items.length}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 flex-1 text-center">
              <p className="text-xs text-gray-500">Activos</p>
              <p className="text-2xl font-bold text-gray-700">{activos}</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded p-3 flex-1 text-center">
              <p className="text-xs text-gray-500">Valor total</p>
              <p className="text-xl font-bold text-gray-700">
                ${(total / 1000000).toFixed(1)}M
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col gap-1 max-h-80 overflow-y-auto transition-opacity duration-200 ${
              isPending ? 'opacity-40' : 'opacity-100'
            }`}
          >
            {items.slice(0, 50).map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border border-gray-200 rounded px-4 py-2 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-mono text-xs w-8">#{item.id}</span>
                  <span className="text-gray-800 text-sm">{item.nombre}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gray-700 text-sm font-semibold">
                    ${item.valor.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${estadoColor[item.estado]}`}
                  >
                    {item.estado}
                  </span>
                </div>
              </div>
            ))}
            <p className="text-xs text-gray-400 text-center py-2">
              Mostrando 50 de {items.length} registros
            </p>
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

export default UseTransitionExample;
