import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [systemInfo, setSystemInfo] = useState(null);

  useEffect(() => {
    // 1. Зчитування системних даних
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
    };

    // 2. Збереження в localStorage
    localStorage.setItem('react_system_info', JSON.stringify(info));

    // 3. Зчитування з localStorage та збереження у стан
    const savedInfo = localStorage.getItem('react_system_info');
    if (savedInfo) {
      setSystemInfo(JSON.parse(savedInfo));
    }
  }, []);

  return (
    <footer className="mt-12 pt-6 border-t border-slate-700/50 text-center text-xs text-slate-400">
      <p>© {new Date().getFullYear()} Ласка Яна. Усі права захищені.</p>
      
      {systemInfo && (
        <div className="mt-3 p-3 bg-slate-800/50 rounded-lg max-w-2xl mx-auto border border-slate-700">
          <p className="font-semibold text-purple-400 mb-1">Системна інформація користувача:</p>
          <p><span className="font-medium text-slate-300">User Agent:</span> {systemInfo.userAgent}</p>
          <p><span className="font-medium text-slate-300">Платформа:</span> {systemInfo.platform}</p>
        </div>
      )}
    </footer>
  );
};

export default Footer;