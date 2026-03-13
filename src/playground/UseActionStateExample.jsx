import { startTransition } from "react";
import { useActionState } from "react";
import { Link } from 'react-router-dom';



const UseActionStateExample = () => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });
    const addToCart = async (count) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        return count + 1;
    }

    const [count, dispatchAction, isPending] = useActionState(async (prevCount) => {
        return await addToCart(prevCount)
    }, 0);

    const handleClick = () => {
        startTransition(() => {
            dispatchAction();
        });
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useActionState Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useActionState es un Hook que te permite actualizar 
                            el estado basándose en el resultado de una acción de formulario. 
                            Retorna un arreglo con el valor actual del estado, una función llamada dentro de las acciones
                             y un valor bandera para saber si se tienen acciones pendientes.
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>const [state, dispatchAction, isPending] = useActionState(reducerAction, initialState, permalink?);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Carrito
                    </h2>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div></div>
                        <div className="flex justify-between">
                            <span>Tour Tickets</span>
                            <span>Cantidad: {count}</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div></div>
                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Agregar Ticket{isPending ? ' 🌀' : '  '}</button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div></div>
                        <hr />
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div></div>
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span>{formatter.format(count * 9999)}</span>
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
}

export default UseActionStateExample;