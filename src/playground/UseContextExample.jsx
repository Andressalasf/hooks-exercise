import { createContext, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const ThemeContext = createContext();
const LangContext = createContext();

const texts = {
  es: {
    title: 'useContext Hook',
    description: 'useContext permite leer un valor de contexto dentro de un componente sin pasar props manualmente en cada nivel del árbol.',
    syntax: 'const valor = useContext(MiContexto);',
    card1Title: 'Tarjeta 1',
    card1Content: 'Este componente lee el contexto de tema e idioma sin recibir ningún prop desde el padre.',
    card2Title: 'Tarjeta 2',
    card2Content: 'Tanto el idioma como el tema cambian en todos los componentes al mismo tiempo porque todos consumen el mismo contexto.',
    howTitle: 'Cómo funciona',
    howContent: 'Dos proveedores envuelven todos los componentes. Cada componente que necesita el tema o el idioma lo lee directamente con useContext, sin que el padre lo pase como prop.',
    back: 'Volver al Home',
    toggleLang: 'English',
    lightMode: 'Modo claro',
    darkMode: 'Modo oscuro',
  },
  en: {
    title: 'useContext Hook',
    description: 'useContext lets you read a context value inside a component without passing props manually at every level of the tree.',
    syntax: 'const value = useContext(MyContext);',
    card1Title: 'Card 1',
    card1Content: 'This component reads the theme and language context without receiving any prop from the parent.',
    card2Title: 'Card 2',
    card2Content: 'Both language and theme change across all components at the same time because they all consume the same context.',
    howTitle: 'How it works',
    howContent: 'Two providers wrap all components. Each component that needs the theme or language reads it directly with useContext, without the parent passing it as a prop.',
    back: 'Back to Home',
    toggleLang: 'Español',
    lightMode: 'Light mode',
    darkMode: 'Dark mode',
  },
};

const useTheme = () => useContext(ThemeContext);
const useLang = () => useContext(LangContext);

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const t = texts[lang];

  return (
    <div className={`p-4 mb-6 rounded shadow flex justify-between items-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
      <span className="font-bold text-lg">{t.title}</span>
      <div className="flex gap-2">
        <button
          onClick={toggleLang}
          className="px-4 py-2 rounded font-semibold bg-blue-600 hover:bg-blue-700 text-white"
        >
          {t.toggleLang}
        </button>
        <button
          onClick={toggleTheme}
          className={`px-4 py-2 rounded font-semibold ${theme === 'dark' ? 'bg-white text-gray-800 hover:bg-gray-200' : 'bg-gray-800 text-white hover:bg-gray-700'}`}
        >
          {theme === 'dark' ? t.lightMode : t.darkMode}
        </button>
      </div>
    </div>
  );
};

const Card = ({ titleKey, contentKey }) => {
  const { theme } = useTheme();
  const { lang } = useLang();
  const t = texts[lang];

  return (
    <div className={`rounded shadow p-4 border ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200 text-gray-800'}`}>
      <h3 className="font-bold text-lg mb-2">{t[titleKey]}</h3>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t[contentKey]}</p>
    </div>
  );
};

const UseContextExample = () => {
  const { theme } = useTheme();
  const { lang } = useLang();
  const t = texts[lang];

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-3xl mx-auto">
        <div className={`rounded shadow p-6 mb-6 border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}>
          <h1 className="text-3xl font-bold mb-3">{t.title}</h1>
          <p className={`mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.description}
          </p>
          <div className={`rounded p-3 font-mono text-sm ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <code>{t.syntax}</code>
          </div>
        </div>

        <Navbar />

        <div className="grid grid-cols-1 gap-4 mb-6">
          <Card titleKey="card1Title" contentKey="card1Content" />
          <Card titleKey="card2Title" contentKey="card2Content" />
        </div>

        <div className={`rounded shadow p-4 border mb-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}>
          <h3 className="font-bold mb-2">{t.howTitle}:</h3>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{t.howContent}</p>
        </div>

        <div className="text-center">
          <Link
            to="/playground"
            className="inline-block px-6 py-2 rounded bg-gray-600 hover:bg-gray-700 text-white"
          >
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

const UseContextWrapper = () => {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('es');

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const toggleLang = () => setLang(prev => prev === 'es' ? 'en' : 'es');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <LangContext.Provider value={{ lang, toggleLang }}>
        <UseContextExample />
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
};

export default UseContextWrapper;
