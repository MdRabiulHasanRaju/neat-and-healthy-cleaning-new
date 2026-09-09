import { Link } from 'react-router-dom';
// import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext';

// Brand logo: gradient droplet mark + wordmark. `scrolled` adjusts contrast on
// the transparent navbar.
export default function Logo({ scrolled = true }) {
  const { site } = useTheme();
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>

      <span className="flex h-16 w-16 items-center justify-center rounded-xl">
        {/* <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13z" opacity="0.95" />
          <circle cx="12" cy="15" r="3" fill="#00C853" />
        </svg> */}
        <img src="/images/logo/logo-h.png" className="w-16 text-white" alt="Neat and Healthy Cleaning Company Logo" />
      </span>

      <span className={`text-base font-extrabold tracking-tight ${scrolled ? 'text-ink dark:text-white' : 'text-ink dark:text-white'}`}>
        Neat <span className="text-primary">&amp;</span> Healthy Cleaning
      </span>

    </Link>
  );
}
