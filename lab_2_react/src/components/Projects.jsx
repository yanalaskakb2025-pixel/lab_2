function Projects({ isDark }) {
  return (
    <section className={`p-6 rounded-2xl border shadow-md mb-6 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/80 border-pink-900/50 text-slate-200' 
        : 'bg-white/90 border-pink-200 text-slate-700'
    }`}>
      <h2 className={`text-2xl font-semibold border-b-2 pb-2 mb-4 ${
        isDark ? 'text-pink-400 border-pink-900/50' : 'text-purple-700 border-pink-200'
      }`}>
        Projects
      </h2>
      <div className="space-y-4">
        <article className={`p-4 rounded-xl border transition-colors duration-500 ${
          isDark 
            ? 'bg-slate-800/60 border-pink-900/40 text-slate-200' 
            : 'bg-pink-50/50 border-pink-100 text-slate-700'
        }`}>
          <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
            Cybersecurity Audit Simulation
          </h3>
          <p className={`text-sm mb-2 ${isDark ? 'text-pink-300' : 'text-purple-600'}`}>
            <strong>Technologies:</strong> Network analysis, security assessment
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Conducted a simulated security audit to check system safety and network risks.</li>
            <li>Identified potential cyber threats and checked system vulnerabilities.</li>
            <li>Suggested simple step-by-step solutions to improve network protection according to international standards.</li>
          </ul>
        </article>

        <article className={`p-4 rounded-xl border transition-colors duration-500 ${
          isDark 
            ? 'bg-slate-800/60 border-sky-900/40 text-slate-200' 
            : 'bg-sky-50/50 border-sky-100 text-slate-700'
        }`}>
          <h3 className={`text-lg font-bold ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
            Academic Programming Projects
          </h3>
          <p className={`text-sm mb-2 ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>
            <strong>Technologies:</strong> Python, C#
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Developed a set of desktop applications focused on simple algorithms and OOP logic.</li>
            <li>Wrote clean, readable code and managed basic project files using Git.</li>
            <li>Built small tools to automate routine tasks and analyze data.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Projects;