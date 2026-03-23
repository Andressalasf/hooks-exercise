import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">CODECOMP</p>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-lg px-4 py-2 font-['Space_Grotesk'] text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/playground"
              className="rounded-lg border border-slate-300 px-4 py-2 font-['Space_Grotesk'] text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Ver Hooks
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-28 lg:grid-cols-12">
        <section className="space-y-8 lg:col-span-5">
          <div>
            <h1 className="font-['Space_Grotesk'] text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Construye tu futuro,
              <br />
              <span className="text-blue-700">linea por linea.</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
              Registra tu cuenta para acceder a tus ejercicios y seguir practicando tu logica de programacion de manera
              organizada.
            </p>
          </div>

    
        </section>

        <section className="lg:col-span-7 lg:flex lg:justify-end">
          <div className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-10">
            <div className="mb-7">
              <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">Crear cuenta</h2>
              <p className="mt-1 text-sm text-slate-600">Completa los datos para registrarte.</p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="apellido" className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600">
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    type="text"
                    placeholder="Tu apellido"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="codigo" className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600">
                  Codigo
                </label>
                <input
                  id="codigo"
                  type="text"
                  placeholder="Ej: 191000"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600">
                  Correo electronico
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="password" className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600">
                    Contrasena
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="********"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Confirmar contrasena
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 py-3.5 font-['Space_Grotesk'] text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99]"
              >
                Registrarse
              </button>
            </form>

            <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 md:flex-row">
              <p>Ya tienes cuenta?</p>
              <Link to="/login" className="font-semibold text-blue-700 hover:underline">
                Ir a inicio de sesion
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterPage;