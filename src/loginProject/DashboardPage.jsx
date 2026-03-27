import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-slate-900">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
        <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">CODECOMP</p>
        <div className="my-6 border-t border-slate-200" />
        <h1 className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Has iniciado sesión correctamente. Trabajando en ello, próximamente.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/login"
            className="rounded-lg border border-slate-200 px-5 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Volver al login
          </Link>
          <Link
            to="/reset"
            className="rounded-lg border border-slate-200 px-5 py-2.5 font-['Space_Grotesk'] text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Cambiar contraseña
          </Link>
          <Link
            to="/playground"
            className="rounded-lg bg-blue-500 px-5 py-2.5 font-['Space_Grotesk'] text-sm font-bold text-white transition hover:brightness-110"
          >
            Ver Hooks
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
