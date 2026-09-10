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
const initialSite = {
  name: '',
  shortName: '',
  url: '',
  phone: '',
  phoneHref: '',
  whatsapp: '',
  email: '',
  address: '',
  hours: '',

  social: {
    instagram: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    youtube: '',
  },

  areas: [],
};

export function ThemeProvider({ children }) {
  // =========================
  // Theme
  // =========================
  const [theme, setTheme] = useState('dark');

  // =========================
  // Base URL
  // =========================
  const base_url = 'http://localhost';
  // const base_url = 'https://app-server.neatandhealthycleaning.com';

  // =========================
  // Site Data
  // =========================
  const [site, setSite] = useState(initialSite);
  const [siteLoading, setSiteLoading] = useState(true);
  const [siteError, setSiteError] = useState(null);

  // =========================
  // Theme Effect
  // =========================
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  // =========================
  // Fetch Site Data
  // =========================
  useEffect(() => {
    let cancelled = false;

    async function fetchSiteData() {
      try {
        setSiteLoading(true);
        setSiteError(null);

        const response = await fetch(`${base_url}/admin/api/site`);

        if (!response.ok) {
          throw new Error(
            `Failed to fetch site data. Status: ${response.status}`
          );
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(
            result.message || 'Failed to fetch site data'
          );
        }

        if (!cancelled && result.data) {
          setSite({
            ...initialSite,
            ...result.data,

            // Make sure nested objects remain available
            social: {
              ...initialSite.social,
              ...(result.data.social || {}),
            },

            areas: Array.isArray(result.data.areas)
              ? result.data.areas
              : [],
          });
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Site data error:', error);
          setSiteError(error.message);
        }
      } finally {
        if (!cancelled) {
          setSiteLoading(false);
        }
      }
    }

    fetchSiteData();

    return () => {
      cancelled = true;
    };
  }, [base_url]);

  // =========================
  // Theme Toggle
  // =========================
  const toggle = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  // =========================
  // Context
  // =========================
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,

        base_url,

        site,
        siteLoading,
        siteError,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// =========================
// useTheme Hook
// =========================
export function useTheme() {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return ctx;
}

export default ThemeContext;