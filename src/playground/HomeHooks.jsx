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
      implemented: false
    },
    {
      name: 'useContext',
      description: 'Consume datos de contexto sin prop drilling.',
      category: 'Contexto y datos externos',
      route: '/playground/usecontext',
      implemented: false
    },
    {
      name: 'useReducer',
      description: 'Maneja estado complejo mediante una función reductora.',
      category: 'Estado',
      route: '/playground/usereducer',
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
