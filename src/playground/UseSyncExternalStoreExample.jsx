import { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { todosStore } from "./todoStore";

const UseSyncExternalStoreExample = () => {

    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useSyncExternalStore Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useSyncExternalStore es un Hook que permite suscribirte a una fuente de almacenamiento de datos (store) externa.
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h1 className="text-2xl font-bold mb-2 text-gray-800">Listado almacenado en fuente de datos externa</h1>
                    <button onClick={() => todosStore.addTodo()}
                        className="bg-gray-500 mb-2 hover:bg-blue-600 text-white px-8 py-2 rounded font-semibold"
                        >Agregar tarea</button>
                    
                    <div className="bg-white rounded shadow p-4 border border-gray-200">
                        <ul>
                            {todos.map(todo => (
                            <li key={todo.id}>{todo.text}</li>
                            ))}
                        </ul>
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

export default UseSyncExternalStoreExample;