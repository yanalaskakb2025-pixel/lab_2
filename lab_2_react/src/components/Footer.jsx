function Footer({ isDark }) {
  return (
    <footer className={`text-center py-6 font-medium text-sm transition-colors duration-500 ${
      isDark ? 'text-purple-300' : 'text-purple-800'
    }`}>
      <p>&copy; 2026 Laska Yana. All rights reserved.</p>
    </footer>
  );
}

export default Footer;