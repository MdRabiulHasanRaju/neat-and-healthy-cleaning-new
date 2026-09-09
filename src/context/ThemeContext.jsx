// import { createContext, useContext, useEffect, useState } from 'react';

// const ThemeContext = createContext(null);

// // Reads the stored preference (or system) and keeps the `dark` class on <html>
// // in sync. Provides a `theme` value and a `toggle` function.
// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState(() => {
//     if (typeof window === 'undefined') return 'dark';
//     const stored = localStorage.getItem('theme');
//     if (stored) return stored;
//     return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === 'dark') root.classList.add('dark');
//     else root.classList.remove('dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

//   return (
//     <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
//   return ctx;
// }

// export default ThemeContext;

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // Always start with dark theme
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;

    // Always apply dark class initially
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Save current theme
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const base_url = "http://localhost";

  return (
    <ThemeContext.Provider value={{ theme, toggle, base_url }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return ctx;
}

export default ThemeContext;
