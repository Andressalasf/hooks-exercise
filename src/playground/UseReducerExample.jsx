import { useReducer } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Teclado', price: 45000 },
  { id: 2, name: 'Mouse', price: 25000 },
  { id: 3, name: 'Monitor', price: 320000 },
  { id: 4, name: 'Audífonos', price: 80000 },
];

const initialState = { items: [], total: 0 };

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        items: [...state.items, action.product],
        total: state.total + action.product.price,
      };
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter(i => i.id !== action.id),
        total: state.total - action.price,
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const isInCart = (id) => state.items.some(i => i.id === id);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">useReducer Hook</h1>
          <p className="text-gray-700 mb-3">
            useReducer maneja estado complejo a través de una función reductora que recibe el estado actual y una acción, y devuelve el nuevo estado.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const [state, dispatch] = useReducer(reducer, initialState);</code>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded shadow border border-gray-200 p-4">
            <h2 className="font-bold text-lg text-gray-800 mb-4">Productos</h2>
            <div className="flex flex-col gap-3">
              {products.map(product => (
                <div key={product.id} className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{product.name}</p>
                    <p className="text-gray-500 text-xs">${product.price.toLocaleString('es-CO')}</p>
                  </div>
                  <button
                    onClick={() => dispatch({ type: 'ADD_ITEM', product })}
                    disabled={isInCart(product.id)}
                    className={`px-3 py-1 text-sm rounded ${isInCart(product.id) ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                  >
                    {isInCart(product.id) ? 'Agregado' : 'Agregar'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded shadow border border-gray-200 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg text-gray-800">Carrito</h2>
              {state.items.length > 0 && (
                <button
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  className="text-xs text-red-500 hover:text-red-700"
                >
                  Vaciar
                </button>
              )}
            </div>
            {state.items.length === 0 ? (
              <p className="text-gray-400 text-sm">El carrito está vacío</p>
            ) : (
              <div className="flex flex-col gap-2">
                {state.items.map(item => (
                  <div key={item.id} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">${item.price.toLocaleString('es-CO')}</p>
                    </div>
                    <button
                      onClick={() => dispatch({ type: 'REMOVE_ITEM', id: item.id, price: item.price })}
                      className="px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded"
                    >
                      Quitar
                    </button>
                  </div>
                ))}
                <div className="pt-2 flex justify-between items-center">
                  <span className="font-bold text-gray-800 text-sm">Total</span>
                  <span className="font-bold text-blue-600">${state.total.toLocaleString('es-CO')}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded shadow p-4 border border-gray-200 mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Estado actual del reducer</h3>
          <pre className="bg-gray-100 rounded p-3 text-xs text-gray-700 overflow-auto">
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>

        <div className="text-center">
          <Link
            to="/playground"
            className="inline-block px-6 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
          >
            Volver al Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UseReducerExample;
