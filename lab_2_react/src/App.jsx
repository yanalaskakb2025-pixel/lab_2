import { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTimeForTheme = () => {
      const currentHour = new Date().getHours();
      const shouldBeDark = currentHour >= 20 || currentHour < 8;
      setIsDark(shouldBeDark);
    };

    checkTimeForTheme();
    const interval = setInterval(checkTimeForTheme, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`min-h-screen p-4 md:p-8 font-sans transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-slate-100' // Темна тема для ночі
          : 'bg-gradient-to-br from-pink-100 via-purple-100 to-sky-100 text-slate-800'     // Світла пастельна тема для дня
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Кнопка для ручного перемикання*/}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all ${
              isDark
                ? 'bg-purple-800 text-purple-200 hover:bg-purple-700'
                : 'bg-white/80 text-purple-800 hover:bg-white'
            }`}
          >
            {isDark ? '🌙 Темна тема (Ніч)' : '☀️ Світла тема (День)'}
          </button>
        </div>

        <Header isDark={isDark} />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <Profile isDark={isDark} />
          </div>
          <Education isDark={isDark} />
          <Skills isDark={isDark} />
          <div className="md:col-span-2">
            <Projects isDark={isDark} />
          </div>
          <div className="md:col-span-2">
            <Certificates isDark={isDark} />
          </div>
        </main>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;