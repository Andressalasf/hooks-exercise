import { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetPage = () => {
    const [formData, setFormData] = useState({
        password: '',
        newPassword: '',
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
        [name]: value,
        }));
    };
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200">
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                    <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">CODECOMP</p>
                    <div className="flex items-center gap-3">
                        <Link
                        to="/register"
                        className="rounded-lg px-4 py-2 font-['Space_Grotesk'] text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
                        >
                        Registrarse
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
            <main className="flex min-h-screen flex-col items-center justify-center px-6 pb-12 pt-24">
                <div className="w-full max-w-[440px]">
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] md:p-10">
                        <div className="mb-7">
                            <h2 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight">Recuperar tu contraseña</h2>
                            <p className="mt-1 text-sm text-slate-600">Ingresa tu contraseña actual y luego la nueva.</p>
                        </div>
                        <form className="space-y-5" noValidate>
                            <div className="space-y-2">
                                <label
                                htmlFor="password"
                                className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600"
                                >
                                    Contraseña actual
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border bg-slate-50 px-4 py-3 pr-11 text-sm text-slate-900 outline-none transition focus:bg-white`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                htmlFor="password"
                                className="ml-1 block font-['Space_Grotesk'] text-xs font-bold uppercase tracking-wider text-slate-600"
                                >
                                    Contraseña nueva
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    className={`w-full rounded-lg border bg-slate-50 px-4 py-3 pr-11 text-sm text-slate-900 outline-none transition focus:bg-white`}
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-700 to-blue-500 py-3.5 font-['Space_Grotesk'] text-sm font-bold text-white transition hover:brightness-110 active:scale-[0.99]"
                            >
                                Cambiar contraseña
                            </button>
                        </form>
                        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 md:flex-row">
                            <p>¿No quieres cambiar tu contraseña?</p>
                            <Link to="/dashboard" className="font-semibold text-blue-700 hover:underline">
                                Ir a dashboard
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ResetPage;