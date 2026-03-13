import { useRef, forwardRef, useImperativeHandle } from "react";
import { Link } from "react-router-dom";

const UseImperativeHandleExample = () => {
    const MiEntrada = forwardRef((props, ref) => {
        const inputRef = useRef();

        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current.focus();
            },
            clear: () => {
                inputRef.current.value = "";
            },
        }), []);
        return <input {...props} ref={inputRef} type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />;
    });

    const inputRef = useRef();

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useImperativeHandle Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useImperativeHandle es un Hook que permite personalizar el identificador expuesto como una ref.
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>useImperativeHandle(ref, createHandle, dependencies?);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Modificando valores de una estancia hija, usando ref desde una instancia madre
                    </h2>
                    <div className="grid gap-2 mb-2">
                        <MiEntrada placeholder="Ingrese texto" ref={inputRef} />
                        <button onClick={() => inputRef.current.focus()}
                            className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-0 rounded">
                            Enfocar entrada
                        </button>
                        <button onClick={() => inputRef.current.clear()}
                            className="bg-gray-500 hover:bg-blue-600 text-white px-10 py-0 rounded">
                            Limpiar entrada
                        </button>
                    </div>
                    
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Explicación:
                    </h3>
                    La entrada es contralada por una instancia diferente a la de los botones, pero usando <b>useImperativeHandle</b> pueden interactuar con la ref
                    y realizar operaciones.
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

export default UseImperativeHandleExample;