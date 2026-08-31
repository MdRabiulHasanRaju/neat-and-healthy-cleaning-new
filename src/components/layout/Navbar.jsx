import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiPhone, FiChevronDown, FiSun, FiMoon } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import { navItems } from '../../data/nav.js';
import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import useScrollPosition from '../../hooks/useScrollPosition.js';
import Button from '../ui/Button.jsx';
import Logo from './Logo.jsx';

// Sticky navbar with glassmorphism, mega menu for Services & Areas, mobile
// drawer, theme toggle, and prominent CTA buttons.
export default function Navbar() {
  const scrolled = useScrollPosition(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4 lg:h-20" aria-label="Main navigation">
        <Logo scrolled={scrolled} />

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setMegaOpen(item.mega ? item.label : null)}
              onMouseLeave={() => setMegaOpen(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-ink-soft hover:text-primary dark:text-slate-200 dark:hover:text-primary-200'
                  }`
                }
              >
                {item.label}
                {item.mega && <FiChevronDown size={14} className={`transition-transform ${megaOpen === item.label ? 'rotate-180' : ''}`} />}
              </NavLink>

              {/* Mega menu */}
              {item.mega && (
                <AnimatePresence>
                  {megaOpen === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                    >
                      <div className="w-[640px] rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900 dark:ring-white/10">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                          {item.groups.map((group) => (
                            <div key={group.title}>
                              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray dark:text-slate-400">
                                {group.title}
                              </p>
                              <ul className="space-y-1">
                                {group.items.map((s) => (
                                  <li key={s.slug}>
                                    <Link
                                      to={`${item.to}/${s.slug}`}
                                      className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-primary/10 hover:text-primary dark:text-slate-200"
                                    >
                                      {s.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                          <p className="text-sm text-gray dark:text-slate-400">Not sure what you need?</p>
                          <Button to="/contact" size="sm">Get a free quote</Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a
            href={`tel:${site.whatsapp}`}
            aria-label="Call us"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 sm:flex"
          >
            <FiPhone size={18} />
          </a>
          <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} size="sm" className="hidden sm:inline-flex">
            Book Now
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft dark:text-slate-200 lg:hidden"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </nav>
    </header>
    {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-ink/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[100] w-[85%] max-w-sm overflow-y-auto bg-white p-6 shadow-card dark:bg-slate-900 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ink-soft dark:text-slate-200"
                >
                  <FiX size={22} />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'bg-primary/10 text-primary'
                            : 'text-ink-soft hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                    {item.mega && (
                      <ul className="ml-3 mt-1 space-y-0.5 border-l border-slate-100 pl-3 dark:border-white/10">
                        {item.groups.flatMap((g) => g.items).map((s) => (
                          <li key={s.slug}>
                            <Link
                              to={`${item.to}/${s.slug}`}
                              className="block rounded-lg px-3 py-2 text-sm text-gray hover:text-primary dark:text-slate-300"
                            >
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-3">
                <Button href={`tel:${site.whatsapp}`} className="w-full">Book Now</Button>
                <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} variant="outline" className="w-full" icon={FaWhatsapp}>
                  WhatsApp
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      </>
  );
}
