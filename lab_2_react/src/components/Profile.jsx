import React from 'react';

const Profile = () => {
  return (
    <>
      {/* Перша картка: Ім'я та контакти */}
      <div className="bg-[#e2e0e8] text-slate-900 rounded-2xl p-6 text-center shadow-lg border border-purple-200">
        <h1 className="text-3xl font-extrabold text-purple-900 mb-2">Laska Yana</h1>
        <p className="text-sm text-slate-700 flex items-center justify-center gap-2 flex-wrap">
          <span>📅 12.10.2007</span>
          <span>|</span>
          <span>UA Ukrainian</span>
          <span>|</span>
          <span>👤 Female</span>
          <span>|</span>
          <span>📞 (+380)972660596</span>
        </p>
      </div>

      {/* Друга картка: Personal Profile */}
      <div className="bg-[#e2e0e8] text-slate-900 rounded-2xl p-6 shadow-lg border border-purple-200">
        <h2 className="text-xl font-bold text-purple-800 mb-3">Personal Profile</h2>
        <p className="text-sm italic leading-relaxed text-slate-800">
          Motivated Cybersecurity student at Lviv Polytechnic National University with hands-on experience from SoftServe Academy and AWS Cloud Security Foundations certification. Proficient in Python and C# automation, network analysis, and basic ethical hacking. Combines 13 years of professional athletic experience (Master of sports in karate) with strong problem-solving skills to protect systems and data.
        </p>
      </div>
    </>
  );
};

export default Profile;