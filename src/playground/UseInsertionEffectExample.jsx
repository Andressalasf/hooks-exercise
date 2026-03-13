import { useState, useRef, useInsertionEffect } from "react";
import { Link } from "react-router-dom";

const UseInsertionEffectExample = () => {

    const [tema, setTema] = useState('light');

    useInsertionEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = `
            .fondo{
                background-color: ${tema === 'light' ? '#ffffff' : '#333333'};
                color: ${tema === 'light' ? '#000000' : '#ffffff'};
                font-size: 30px;
            }
        `;
        document.head.appendChild(styleElement);
        return () => {
            document.head.removeChild(styleElement);
        };
    }, [tema]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
                    <h1 className="text-3xl font-bold mb-3 text-gray-800">useInsertionEffect Hook</h1>
                        <p className="text-gray-700 mb-3">
                            <strong>Descripción:</strong> useInsertionEffect es un Hook que permite insertar elementos en el DOM antes de que se dispare cualquier Efecto de diseño (layout).
                        </p>
                        <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                            <code>useInsertionEffect(setup, dependencies?);</code>
                        </div>
                </div>
                <div className="bg-white rounded shadow p-6 border border-gray-200">
                    <h1 className="fondo"><b>Cambio dinamico de fondo</b> 🌗
                        <p></p>
                        Las propiedades CSS pueden ser insertadas para que carguen antes que la pagina y asi no se presente flicker u otros errores.
                    </h1>
                    <p></p>
                    <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded font-semibold">
                        Cambiar a Tema {tema === 'light' ? 'Oscuro' : 'Claro'}
                    </button>
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
};

export default UseInsertionEffectExample;