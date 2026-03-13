import { Link } from 'react-router-dom';

const HomeHooks = () => {
  const hooks = [
    {
      name: 'useState',
      description: 'Maneja el estado dentro de un componente funcional.',
      category: 'Estado',
      route: '/playground/usestate',
      implemented: true
    },
    {
      name: 'useEffect',
      description: 'Ejecuta efectos secundarios en componentes funcionales.',
      category: 'Efectos / ciclo de vida',
      route: '/playground/useeffect',
      implemented: true
    },
    {
      name: 'useContext',
      description: 'Consume datos de contexto sin prop drilling.',
      category: 'Contexto y datos externos',
      route: '/playground/usecontext',
      implemented: true
    },
    {
      name: 'useReducer',
      description: 'Maneja estado complejo mediante una función reductora.',
      category: 'Estado',
      route: '/playground/usereducer',
      implemented: true
    },
    {
      name: 'useRef',
      description: 'Persiste un valor mutable entre renders sin causar re-renderizaciones y permite acceder al DOM.',
      category: 'Referencias',
      route: '/playground/useref',
      implemented: true
    },
    {
      name: 'useMemo',
      description: 'Memoriza el resultado de un cálculo costoso y lo recalcula solo cuando cambian sus dependencias.',
      category: 'Performance',
      route: '/playground/usememo',
      implemented: true
    },
    {
      name: 'useCallback',
      description: 'Memoriza la referencia de una función para evitar re-renders innecesarios en componentes hijos.',
      category: 'Performance',
      route: '/playground/usecallback',
      implemented: true
    },
    {
      name: 'useDebugValue',
      description: 'Muestra una etiqueta personalizada para hooks personalizados en React DevTools.',
      category: 'Debug',
      route: '/playground/usedebugvalue',
      implemented: true
    },
    {
      name: 'useId',
      description: 'Genera identificadores únicos y estables para vincular elementos de formulario accesibles.',
      category: 'Contexto y datos externos',
      route: '/playground/useid',
      implemented: true
    },
    {
      name: 'useDeferredValue',
      description: 'Difiere la actualización de un valor no urgente para mantener la interfaz responsiva.',
      category: 'Performance',
      route: '/playground/usedeferredvalue',
      implemented: true
    },
    {
      name: 'useLayoutEffect',
      description: 'Ejecuta efectos síncronamente tras las mutaciones del DOM, antes de que el navegador pinte.',
      category: 'Efectos / ciclo de vida',
      route: '/playground/uselayouteffect',
      implemented: true
    },
    {
      name: 'useTransition',
      description: 'Marca actualizaciones de estado como no urgentes para priorizar interacciones del usuario.',
      category: 'Performance',
      route: '/playground/usetransition',
      implemented: true
    },
    {
      name: 'useActionState',
      description: 'Actualiza el estado basándose en el resultado de una acción de formulario.',
      category: 'Estado / Librerias',
      route: '/playground/useactionstate',
      implemented: true
    },
    {
      name: 'useEffectEvent',
      description: 'Ejecuta efectos secundarios basado en eventos específicos.',
      category: 'Efectos / ciclo de vida',
      route: '/playground/useeffectevent',
      implemented: false
    },
    {
      name: 'useImperativeHandle',
      description: 'Permite personalizar el identificador expuesto como una ref.',
      category: 'Referencias',
      route: '/playground/useimperativehandle',
      implemented: false
    },
    {
      name: 'useInsertionEffect',
      description: 'Inserta elementos en el DOM antes de que se dispare cualquier Efecto de diseño.',
      category: 'Efectos / ciclo de vida',
      route: '/playground/useinsertioneffect',
      implemented: false
    },
    {
      name: 'useOptimistic',
      description: 'Actualiza la interfaz de usuario / UI de manera optimista.',
      category: 'Estado',
      route: '/playground/useoptimistic',
      implemented: false
    },
    {
      name: 'useSyncExternalStore',
      description: 'Permite suscribirse a una fuente de almacenamiento de datos (store) externa.',
      category: 'Contexto y datos externos',
      route: '/playground/usesyncexternalstore',
      implemented: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 mb-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold">Práctica de React Hooks</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Hooks Implementados
        </h2>

        <div className="bg-white rounded shadow overflow-hidden border border-gray-200">
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold">Hook</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Descripción</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">Categoría</th>
                <th className="px-4 py-3 text-center text-sm font-semibold">Ruta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {hooks.map((hook, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-gray-50"
                >
                  <td className="px-4 py-3 border-t">
                    <span className="font-mono text-blue-600">
                      {hook.name}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-t text-gray-700">
                    {hook.description}
                  </td>
                  <td className="px-4 py-3 border-t">
                    <span className="text-sm text-gray-600">
                      {hook.category}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-t text-center">
                    {hook.implemented ? (
                      <Link
                        to={hook.route}
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
                      >
                        Ir a ejemplo
                      </Link>
                    ) : (
                      <span className="inline-block bg-gray-300 text-gray-600 px-4 py-2 rounded text-sm">
                        Próximamente
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HomeHooks;
