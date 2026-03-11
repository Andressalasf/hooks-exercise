import { useId, useState } from 'react';
import { Link } from 'react-router-dom';

const CampoTexto = ({ label, type = 'text', placeholder }) => {
  const id = useId();
  const [value, setValue] = useState('');

  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <label htmlFor={id} className="text-gray-700 font-semibold text-sm">
          {label}
        </label>
        <span className="text-xs font-mono bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
          id: {id}
        </span>
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

const FormularioReserva = ({ titulo, color }) => (
  <div className={`bg-white rounded shadow p-5 border-t-4 ${color} border-x border-b border-gray-200 flex-1`}>
    <h3 className="text-lg font-bold text-gray-800 mb-4">{titulo}</h3>
    <div className="flex flex-col gap-4">
      <CampoTexto label="Nombre" placeholder="Tu nombre" />
      <CampoTexto label="Correo" type="email" placeholder="correo@ejemplo.com" />
      <CampoTexto label="Teléfono" placeholder="+57 300 000 0000" />
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm font-semibold">
        Reservar
      </button>
    </div>
  </div>
);

const UseIdExample = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useId Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useId genera un identificador único y estable por cada
            llamada al hook. Está diseñado para vincular elementos de formulario accesibles
            (atributos <code className="bg-gray-100 px-1 rounded font-mono text-sm">htmlFor</code> /{' '}
            <code className="bg-gray-100 px-1 rounded font-mono text-sm">id</code>) dentro de
            componentes reutilizables, evitando colisiones de IDs cuando el mismo componente
            se renderiza varias veces.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>const id = useId();</code>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">IDs sin colisión</h2>
          <p className="text-gray-600 text-sm mb-5">
            Los dos formularios usan el mismo componente <code className="bg-gray-100 px-1 rounded font-mono">CampoTexto</code>.
            Cada campo muestra su <code className="bg-gray-100 px-1 rounded font-mono">id</code> generado
            por <code className="bg-gray-100 px-1 rounded font-mono">useId</code>. Observe que
            ningún ID se repite entre formularios, lo que garantiza accesibilidad correcta.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <FormularioReserva titulo="Formulario A" color="border-blue-500" />
            <FormularioReserva titulo="Formulario B" color="border-purple-500" />
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

export default UseIdExample;
