import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex justify-between items-center pb-6 border-b border-slate-700/40">
      <div>
        {/* Замість просто «Портфоліо» вказуємо ваше ім'я */}
        <h1 className="text-3xl font-bold">Портфоліо: Ласка Яна</h1>
        <p className="text-sm opacity-70">Фахівець з кібербезпеки та веб-розробки</p>
      </div>

      {/* Кнопка перемикання теми з Пункту 4 */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-xl text-sm font-medium border border-purple-500/40 bg-purple-600/20 hover:bg-purple-600/30 transition-all flex items-center gap-2"
      >
        {theme === 'light' ? '🌙 Нічна тема' : '☀️ Денна тема'}
      </button>
    </header>
  );
};

export default Header;