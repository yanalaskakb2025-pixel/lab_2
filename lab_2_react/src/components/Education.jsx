function Education({ isDark }) {
  return (
    <section className={`p-6 rounded-2xl border shadow-md mb-6 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/80 border-purple-900/50 text-slate-200' 
        : 'bg-white/90 border-purple-200 text-slate-700'
    }`}>
      <h2 className={`text-2xl font-semibold border-b-2 pb-2 mb-3 ${
        isDark ? 'text-purple-300 border-purple-900/50' : 'text-purple-700 border-purple-200'
      }`}>
        Education
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>
            Bachelor in Cybersecurity (2nd year student)
          </strong><br />
          <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Lviv Polytechnic National University | <em>2025 – present</em>
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Education;