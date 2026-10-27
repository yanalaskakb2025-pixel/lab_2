function Skills({ isDark }) {
  return (
    <section className={`p-6 rounded-2xl border shadow-md mb-6 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/80 border-sky-900/50 text-slate-200' 
        : 'bg-white/90 border-sky-200 text-slate-700'
    }`}>
      <h2 className={`text-2xl font-semibold border-b-2 pb-2 mb-3 ${
        isDark ? 'text-sky-300 border-sky-900/50' : 'text-purple-700 border-sky-200'
      }`}>
        Technical Skills
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li><strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>Programming and scripting:</strong> Python, C# (OOP fundamentals).</li>
        <li><strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>Cybersecurity and networking:</strong> Network security, fundamentals of vulnerability assessment, threat analysis basics.</li>
        <li><strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>Tools:</strong> Linux basics, AWS (Cloud security foundations).</li>
      </ul>
    </section>
  );
}

export default Skills;