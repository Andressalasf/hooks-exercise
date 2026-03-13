import { useState, useEffect, useEffectEvent } from "react";
import { Link } from "react-router-dom";

const UseEffectEventExample = () => {
    const [count, setCount] = useState(0);
    const [incremento, setIncremento] = useState(1);

    const onTick = useEffectEvent(() => {
        setCount(count + incremento);
    });

    useEffect(() => {
        const id = setInterval(() => {
            onTick();
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useEffectEvent Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useEffectEvent es un Hook que permite separar efectos de eventos, es decir
                            permite refrescar valores en la llamada a un efecto sin que estos causen el mismo a correr de nuevo.
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>const onEvent = useEffectEvent(callback);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Temporizador con intervalo variable
                    </h2>
                    <div className="bg-white rounded shadow p-6 border border-gray-200">
                        <div className="grid grid-cols-1 gap-2 mb-2">
                            <div className="flex justify-between">
                                <span>Contador:</span>
                                <span>{count}</span>
                                <button onClick={() => setCount(0)} 
                                className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-1 rounded">Reset</button>
                            </div>
                            <hr />
                            <div className="flex justify-between">
                                <span>Cada segundo, incrementar por:</span>
                                <button disabled={incremento === 0} onClick={() => {
                                    setIncremento(i => i - 1);
                                }} className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-0 rounded">-</button>
                                <span><b>{incremento}</b></span>
                                <button onClick={() => {
                                    setIncremento(i => i + 1);
                                }} className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-0 rounded">+</button>
                            </div>
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

export default UseEffectEventExample;