function Profile({ isDark }) {
  return (
    <section className={`p-6 rounded-2xl border shadow-md mb-6 transition-colors duration-500 ${
      isDark 
        ? 'bg-slate-900/80 border-pink-900/50 text-slate-200' 
        : 'bg-white/90 border-pink-200 text-slate-700'
    }`}>
      <h2 className={`text-2xl font-semibold border-b-2 pb-2 mb-3 ${
        isDark ? 'text-pink-400 border-pink-900/50' : 'text-purple-700 border-pink-200'
      }`}>
        Personal Profile
      </h2>
      <p className="italic leading-relaxed">
        Motivated Cybersecurity student at Lviv Polytechnic National University with hands-on experience from SoftServe Academy and AWS Cloud Security Foundations certification. Proficient in Python and C# automation, network analysis, and basic ethical hacking. Combines 13 years of professional athletic experience (Master of sports in karate) with strong problem-solving skills to protect systems and data.
      </p>
    </section>
  );
}

export default Profile;