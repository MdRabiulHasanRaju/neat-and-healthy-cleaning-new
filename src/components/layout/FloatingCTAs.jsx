import { FaWhatsapp } from 'react-icons/fa6';
import { FiPhone } from 'react-icons/fi';
// import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext';

// Sticky floating WhatsApp + Call buttons, fixed bottom-right on mobile and
// bottom-right on desktop. Always visible for conversion.
export default function FloatingCTAs() {
  const { site } = useTheme();
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow-accent transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Chat with us
        </span>
      </a>
      <a
        href={`tel:${site.whatsapp}`}
        aria-label="Call us"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary-gradient text-white shadow-glow transition-transform hover:scale-110"
      >
        <FiPhone size={24} />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 md:block">
          Call now
        </span>
      </a>
    </div>
  );
}
