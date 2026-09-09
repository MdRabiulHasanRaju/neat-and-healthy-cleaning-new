import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
// import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import { services } from '../../data/services.js';
import { locations } from '../../data/locations.js';
import NewsletterForm from '../forms/NewsletterForm.jsx';

// Site-wide footer with service links, area links, contact info, social icons,
// and newsletter signup.
export default function Footer() {
  const { site } = useTheme();
  const socials = [
    { Icon: FaInstagram, href: site.social.instagram, label: 'Instagram' },
    { Icon: FaFacebookF, href: site.social.facebook, label: 'Facebook' },
    { Icon: FaXTwitter, href: site.social.twitter, label: 'X' },
    { Icon: FaLinkedinIn, href: site.social.linkedin, label: 'LinkedIn' },
    { Icon: FaYoutube, href: site.social.youtube, label: 'YouTube' },
  ];

  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-16 w-16 items-center justify-center rounded-xl">
                <img src="/images/logo/logo-h.png" className="w-16 text-white" alt="Neat and Healthy Cleaning Company Logo" />
              </span>
              <span className="text-lg font-extrabold text-white">Neat &amp; Healthy Cleaning</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Premium residential and commercial deep cleaning across Dubai. Eco-friendly products, trained staff, and a 100% satisfaction guarantee.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-white">Get cleaning tips & offers</p>
              <NewsletterForm compact />
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {services.slice(0, 10).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-400 transition-colors hover:text-primary-200">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Areas</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link to={`/areas/${l.slug}`} className="text-slate-400 transition-colors hover:text-primary-200">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 shrink-0 text-primary-300" size={16} />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="mt-0.5 shrink-0 text-primary-300" size={16} />
                <a href={`tel:${site.whatsapp}`} className="hover:text-primary-200">{site.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="mt-0.5 shrink-0 text-primary-300" size={16} />
                <a href={`mailto:${site.email}`} className="hover:text-primary-200">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <FiClock className="mt-0.5 shrink-0 text-primary-300" size={16} />
                <span>{site.hours}</span>
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary-200">About</Link>
            <Link to="/contact" className="hover:text-primary-200">Contact</Link>
            <Link to="/blog" className="hover:text-primary-200">Blog</Link>
            <Link to="/pricing" className="hover:text-primary-200">Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
