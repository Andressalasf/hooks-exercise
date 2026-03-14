import { useState, useCallback, useRef, memo } from 'react';
import { Link } from 'react-router-dom';

const tareasIniciales = [
  { id: 1, texto: 'Estudiar React Hooks', completada: false },
  { id: 2, texto: 'Hacer ejercicio', completada: false },
  { id: 3, texto: 'Leer documentación oficial', completada: false },
  { id: 4, texto: 'Practicar con proyectos', completada: false },
];

const TareaItem = memo(({ tarea, onToggle, onEliminar }) => {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return (
    <div className="flex justify-between items-center border border-gray-200 rounded px-4 py-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => onToggle(tarea.id)}
          className="w-4 h-4 cursor-pointer"
        />
        <span
          className={`text-gray-800 ${
            tarea.completada ? 'line-through text-gray-400' : ''
          }`}
        >
          {tarea.texto}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
          renders: {renderCount.current}
        </span>
        <button
          onClick={() => onEliminar(tarea.id)}
          className="text-red-500 hover:text-red-700 text-sm font-semibold"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
});

const UseCallbackExample = () => {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleToggle = useCallback((id) => {
    setTareas(prev =>
      prev.map(t => (t.id === id ? { ...t, completada: !t.completada } : t))
    );
  }, []);

  const handleEliminar = useCallback((id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleAgregar = useCallback(() => {
    if (nuevaTarea.trim() === '') return;
    setTareas(prev => [
      ...prev,
      { id: Date.now(), texto: nuevaTarea.trim(), completada: false },
    ]);
    setNuevaTarea('');
  }, [nuevaTarea]);

  const completadas = tareas.filter(t => t.completada).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useCallback Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useCallback memoriza la referencia de una función
            entre renders. Solo la recrea cuando cambian sus dependencias. Combinado con{' '}
            <code className="bg-gray-100 px-1 rounded font-mono text-sm">React.memo</code>,
            evita que los componentes hijos se vuelvan a renderizar cuando el padre actualiza
            un estado que no afecta a esos hijos.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const fn = useCallback(() =&gt; lógica(), [dependencias]);</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Lista de Tareas con React.memo</h2>

          <div className="mb-5 flex gap-2">
            <input
              type="text"
              value={nuevaTarea}
              onChange={e => setNuevaTarea(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleAgregar()}
              placeholder="Nueva tarea..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleAgregar}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold"
            >
              Agregar
            </button>
          </div>

          <div className="mb-5 flex gap-3">
            <div className="bg-blue-50 rounded p-3 flex-1 text-center border border-blue-100">
              <p className="text-sm text-gray-500">Total</p>
              <p className="text-2xl font-bold text-blue-600">{tareas.length}</p>
            </div>
            <div className="bg-green-50 rounded p-3 flex-1 text-center border border-green-100">
              <p className="text-sm text-gray-500">Completadas</p>
              <p className="text-2xl font-bold text-green-600">{completadas}</p>
            </div>
            <div className="bg-yellow-50 rounded p-3 flex-1 text-center border border-yellow-100">
              <p className="text-sm text-gray-500">Pendientes</p>
              <p className="text-2xl font-bold text-yellow-600">{tareas.length - completadas}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {tareas.length === 0 ? (
              <p className="text-gray-400 italic text-sm">No hay tareas. Agrega una arriba.</p>
            ) : (
              tareas.map(tarea => (
                <TareaItem
                  key={tarea.id}
                  tarea={tarea}
                  onToggle={handleToggle}
                  onEliminar={handleEliminar}
                />
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

export default UseCallbackExample;
