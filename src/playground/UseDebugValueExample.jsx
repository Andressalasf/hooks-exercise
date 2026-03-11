import { useState, useDebugValue } from 'react';
import { Link } from 'react-router-dom';

const validaciones = {
  nombre: v => (v.trim().length < 3 ? 'Mínimo 3 caracteres' : null),
  email: v => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? null : 'Formato de correo inválido'),
  password: v => (v.length < 6 ? 'Mínimo 6 caracteres' : null),
};

const useFormField = (valorInicial = '', validar) => {
  const [value, setValue] = useState(valorInicial);
  const [touched, setTouched] = useState(false);

  const error = touched ? validar(value) : null;
  const isValid = validar(value) === null;

  useDebugValue(
    { value, isValid, touched },
    ({ value, isValid, touched }) =>
      `"${value || '(vacío)'}" | ${isValid ? '✓ válido' : '✗ inválido'} | ${touched ? 'tocado' : 'sin tocar'}`
  );

  const reset = () => {
    setValue(valorInicial);
    setTouched(false);
  };

  return {
    value,
    error,
    isValid,
    touched,
    onChange: e => setValue(e.target.value),
    onBlur: () => setTouched(true),
    reset,
  };
};

const inputClass = (field) =>
  `w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 ${
    field.error
      ? 'border-red-400 focus:ring-red-300'
      : field.isValid && field.touched
      ? 'border-green-400 focus:ring-green-300'
      : 'border-gray-300 focus:ring-blue-400'
  }`;

const UseDebugValueExample = () => {
  const nombre = useFormField('', validaciones.nombre);
  const email = useFormField('', validaciones.email);
  const password = useFormField('', validaciones.password);

  const [submitted, setSubmitted] = useState(false);

  const allValid = [nombre, email, password].every(f => f.isValid);

  const handleSubmit = e => {
    e.preventDefault();
    if (allValid) setSubmitted(true);
  };

  const handleReset = () => {
    nombre.reset();
    email.reset();
    password.reset();
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded shadow p-6 mb-6 border border-gray-200">
          <h1 className="text-3xl font-bold mb-3 text-gray-800">useDebugValue Hook</h1>
          <p className="text-gray-700 mb-3">
            <strong>Descripción:</strong> useDebugValue añade una etiqueta descriptiva a un
            hook personalizado visible en React DevTools. Acepta un segundo argumento opcional
            de formato para evitar cálculos costosos cuando DevTools no está abierto.
          </p>
          <div className="bg-gray-100 rounded p-3 font-mono text-sm text-gray-800">
            <code>useDebugValue(valor, valor =&gt; formatear(valor));</code>
          </div>
        </div>

        <div className="bg-gray-900 rounded shadow p-5 mb-6 border border-gray-700 font-mono text-sm">
          <p className="text-gray-500 text-xs mb-3 uppercase tracking-widest">
            ⚛ Simulación React DevTools — Hooks
          </p>
          <div className="flex flex-col gap-3">
            {[
              { label: 'useFormField (nombre)', field: nombre, mask: false },
              { label: 'useFormField (email)', field: email, mask: false },
              { label: 'useFormField (password)', field: password, mask: true },
            ].map(({ label, field, mask }) => (
              <div key={label} className="flex flex-wrap gap-2 items-center">
                <span className="text-yellow-400">{label}</span>
                <span className="text-white">
                  &quot;{mask && field.value
                    ? '●'.repeat(field.value.length)
                    : field.value || '(vacío)'}&quot;
                </span>
                <span>|</span>
                {field.isValid ? (
                  <span className="text-green-400">✓ válido</span>
                ) : (
                  <span className="text-red-400">✗ inválido</span>
                )}
                <span>|</span>
                <span className="text-gray-400">
                  {field.touched ? 'tocado' : 'sin tocar'}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Formulario de Registro</h2>

          {submitted && (
            <div className="flex items-center justify-between border-l-4 border-green-500 bg-green-50 px-4 py-3 mb-5 rounded-r">
              <p className="text-green-700 text-sm font-semibold">✓ Registro enviado correctamente.</p>
              <button
                onClick={handleReset}
                className="text-sm text-gray-500 hover:text-gray-700 underline ml-4"
              >
                Resetear
              </button>
            </div>
          )}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Nombre</label>
                <input
                  type="text"
                  value={nombre.value}
                  onChange={nombre.onChange}
                  onBlur={nombre.onBlur}
                  placeholder="Tu nombre completo"
                  className={inputClass(nombre)}
                />
                {nombre.error && <p className="text-red-500 text-xs mt-1">{nombre.error}</p>}
                {nombre.isValid && nombre.touched && (
                  <p className="text-green-500 text-xs mt-1">✓ Nombre válido</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Correo electrónico
                </label>
                <input
                  type="text"
                  value={email.value}
                  onChange={email.onChange}
                  onBlur={email.onBlur}
                  placeholder="correo@ejemplo.com"
                  className={inputClass(email)}
                />
                {email.error && <p className="text-red-500 text-xs mt-1">{email.error}</p>}
                {email.isValid && email.touched && (
                  <p className="text-green-500 text-xs mt-1">✓ Correo válido</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Contraseña</label>
                <input
                  type="password"
                  value={password.value}
                  onChange={password.onChange}
                  onBlur={password.onBlur}
                  placeholder="Mínimo 6 caracteres"
                  className={inputClass(password)}
                />
                {password.error && (
                  <p className="text-red-500 text-xs mt-1">{password.error}</p>
                )}
                {password.isValid && password.touched && (
                  <p className="text-green-500 text-xs mt-1">✓ Contraseña válida</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!allValid}
                className={`w-full py-2 rounded font-semibold text-white transition-colors ${
                  allValid
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                Registrarse
              </button>
            </form>
          ) : null}
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

export default UseDebugValueExample;
