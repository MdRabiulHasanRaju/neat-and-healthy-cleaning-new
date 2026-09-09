import { FiMapPin, FiPhone, FiMail, FiClock, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import ContactForm from '../components/forms/ContactForm.jsx';
import BookForm from '../components/forms/BookForm.jsx';
// import { site } from '../data/site.js';
import { images } from '../data/images.js';
import { useTheme } from '../context/ThemeContext.jsx';


export default function Contact() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Contact' }];
  const { site } = useTheme();
  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with Neat & Healthy Cleaning. Call, WhatsApp, or book online for premium cleaning across Dubai, Abu Dhabi, Sharjah, and Ajman."
        keywords="contact cleaning company, book cleaning UAE, cleaning WhatsApp, cleaning phone number Dubai"
        path="/contact"
        image={images.cleanersVan}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Let's get your space spotless"
        description="Book a service, request a quote, or just ask a question. We reply within a few hours — every day."
        image="/images/team-banner-neat-and-healthy-cleaning.webp"
        crumbs={crumbs}
      />

      {/* Contact info cards */}
      <Section>
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { Icon: FiPhone, label: 'Call us', value: site.phone, href: `tel:${site.phoneHref}` },
              { Icon: FaWhatsapp, label: 'WhatsApp', value: 'Chat now', href: `https://wa.me/${site.whatsapp}` },
              { Icon: FiMail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
              { Icon: FiClock, label: 'Hours', value: site.hours },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href?.startsWith('http') ? '_blank' : undefined}
                rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-start gap-3 rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary-gradient group-hover:text-white">
                  <c.Icon size={24} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray dark:text-slate-400">{c.label}</p>
                  <p className="mt-1 font-bold text-ink dark:text-white">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Forms + map */}
      <Section className="bg-white dark:bg-slate-900/30 !pt-0">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Book */}
            <div>
              <span className="section-eyebrow">Book a Service</span>
              <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white">Book in 60 seconds</h2>
              <p className="mt-2 text-sm text-gray dark:text-slate-400">Pick a service, date, and time. We confirm by WhatsApp.</p>
              <div className="mt-6 rounded-3xl bg-bg p-7 ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                <BookForm />
              </div>
            </div>
            {/* Contact */}
            <div>
              <span className="section-eyebrow">Send a Message</span>
              <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white">Ask us anything</h2>
              <p className="mt-2 text-sm text-gray dark:text-slate-400">For general questions, custom requests, or feedback.</p>
              <div className="mt-6 rounded-3xl bg-bg p-7 ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Visit Us" title="Our service area" />
          <div className="mt-10 overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-900/5 dark:ring-white/10">
            <iframe
              title="Service area map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  );
}
