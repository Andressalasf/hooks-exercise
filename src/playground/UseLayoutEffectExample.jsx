import { useState, useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const categorias = ['Todos', 'Electrónica', 'Ropa', 'Hogar', 'Deportes'];

const productos = [
  { id: 1, nombre: 'Laptop Pro', precio: 3200000, categoria: 'Electrónica' },
  { id: 2, nombre: 'Monitor 4K', precio: 1500000, categoria: 'Electrónica' },
  { id: 3, nombre: 'Camiseta Técnica', precio: 85000, categoria: 'Ropa' },
  { id: 4, nombre: 'Chaqueta Impermeable', precio: 320000, categoria: 'Ropa' },
  { id: 5, nombre: 'Lámpara LED', precio: 95000, categoria: 'Hogar' },
  { id: 6, nombre: 'Silla Ergonómica', precio: 780000, categoria: 'Hogar' },
  { id: 7, nombre: 'Balón de Fútbol', precio: 120000, categoria: 'Deportes' },
  { id: 8, nombre: 'Pesas Ajustables', precio: 450000, categoria: 'Deportes' },
];

const UseLayoutEffectExample = () => {
  const [activo, setActivo] = useState(0);
  const [indicador, setIndicador] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);
  const contenedorRef = useRef(null);

  useLayoutEffect(() => {
    const tab = tabsRef.current[activo];
    const contenedor = contenedorRef.current;
    if (tab && contenedor) {
      const tabRect = tab.getBoundingClientRect();
      const contenedorRect = contenedor.getBoundingClientRect();
      setIndicador({
        left: tabRect.left - contenedorRect.left,
        width: tabRect.width,
      });
    }
  }, [activo]);

  const filtrados =
    activo === 0
      ? productos
      : productos.filter(p => p.categoria === categorias[activo]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useLayoutEffect Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useLayoutEffect se ejecuta síncronamente después de
            que React aplica los cambios al DOM pero <strong>antes</strong> de que el navegador
            pinte la pantalla. Es ideal para leer medidas del DOM y ajustar elementos de forma
            inmediata, evitando el parpadeo visual que causaría un <code className="bg-gray-100 px-1 rounded font-mono text-sm">useEffect</code> equivalente.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>useLayoutEffect(() =&gt; {'{'} medirDOM(); {'}'}, [dependencias]);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Catálogo con Filtro por Categoría</h2>
          <p className="text-gray-600 text-sm mb-5">
            El indicador azul bajo las pestañas se posiciona con{' '}
            <code className="bg-gray-100 px-1 rounded font-mono">useLayoutEffect</code>, que mide el
            ancho y posición real de cada pestaña en el DOM antes del pintado. Si usaras{' '}
            <code className="bg-gray-100 px-1 rounded font-mono">useEffect</code>, verías el indicador
            saltar visualmente desde su posición anterior.
          </p>

          <div ref={contenedorRef} className="relative flex gap-1 border-b border-gray-200 mb-1">
            {categorias.map((cat, i) => (
              <button
                key={cat}
                ref={el => (tabsRef.current[i] = el)}
                onClick={() => setActivo(i)}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  activo === i ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
            <div
              className="absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-200"
              style={{ left: indicador.left, width: indicador.width }}
            />
          </div>

          <p className="text-xs text-gray-400 font-mono mb-5">
            useLayoutEffect midió → left: {Math.round(indicador.left)}px | width: {Math.round(indicador.width)}px
          </p>

          <div className="flex flex-col gap-2">
            {filtrados.length === 0 ? (
              <p className="text-gray-400 italic text-sm">Sin productos en esta categoría.</p>
            ) : (
              filtrados.map(p => (
                <div
                  key={p.id}
                  className="flex justify-between items-center border border-gray-200 rounded px-4 py-3 hover:bg-gray-50"
                >
                  <div>
                    <span className="text-gray-800 font-semibold text-sm">{p.nombre}</span>
                    <span className="ml-3 text-xs text-gray-400">{p.categoria}</span>
                  </div>
                  <span className="text-green-600 font-bold text-sm">
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

export default UseLayoutEffectExample;
