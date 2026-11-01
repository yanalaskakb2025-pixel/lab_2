
import React, { useState, useEffect } from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 py-6 px-4 ${
        theme === 'dark' ? 'bg-[#1a0033] text-white' : 'bg-slate-100 text-slate-900'
      }`}
    >
      <div className="max-w-5xl mx-auto relative pt-12">
        {/* Плаваюча кнопка перемикання теми у правому верхньому кутку */}
        <button
          onClick={toggleTheme}
          className="absolute top-0 right-0 px-4 py-1.5 rounded-xl text-sm font-medium border border-purple-300/40 bg-purple-500/20 hover:bg-purple-500/30 backdrop-blur-md transition-all flex items-center gap-2 shadow-md text-white"
        >
          {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
        </button>

        <main className="space-y-6">
          <Profile />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Reviews />
        </main>

        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;