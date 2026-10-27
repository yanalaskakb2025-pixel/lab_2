function Header({ isDark }) {
  return (
    <header className={`flex flex-col items-center p-8 rounded-2xl border-b-4 shadow-lg text-center mb-8 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/90 backdrop-blur-md border-purple-500 text-slate-100' 
        : 'bg-white/80 backdrop-blur-md border-purple-300 text-slate-800'
    }`}>
      <h1 className={`text-4xl font-bold tracking-wide mb-2 ${isDark ? 'text-purple-300' : 'text-purple-900'}`}>
        Laska Yana
      </h1>
      <p className={`text-sm md:text-base font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
        <span className="inline-block mr-2">🗓️ 12.10.2007</span> | 
        <span className="inline-block mx-2">🇺🇦 Ukrainian</span> | 
        <span className="inline-block mx-2">♀️ Female</span> | 
        <span className="inline-block ml-2">📞 (+380)972660596</span>
      </p>
    </header>
  );
}

export default Header;