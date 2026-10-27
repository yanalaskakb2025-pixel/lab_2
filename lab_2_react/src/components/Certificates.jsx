function Certificates({ isDark }) {
  return (
    <section className={`p-6 rounded-2xl border shadow-md mb-6 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/80 border-purple-900/50 text-slate-200' 
        : 'bg-white/90 border-purple-200 text-slate-700'
    }`}>
      <h2 className={`text-2xl font-semibold border-b-2 pb-2 mb-3 ${
        isDark ? 'text-purple-300 border-purple-900/50' : 'text-purple-700 border-purple-200'
      }`}>
        Certifications & Achievements
      </h2>
      <ul className="space-y-3">
        <li className="flex items-center gap-2">
          <span>Cybersecurity Certificate:</span>
          <a href="Certificate.pdf" target="_blank" className="inline-block bg-sky-500 hover:bg-pink-500 text-white font-medium text-sm px-3 py-1 rounded-lg transition-colors">
            View Certificate (PDF)
          </a>
        </li>
        <li className="flex items-center gap-2">
          <span>Master of Sports:</span>
          <a href="МС.png" target="_blank" className="inline-block bg-sky-500 hover:bg-pink-500 text-white font-medium text-sm px-3 py-1 rounded-lg transition-colors">
            View Master of Sports (PNG)
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Certificates;