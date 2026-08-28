import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Button from '../components/ui/Button.jsx';
import ServiceCard from '../components/ui/ServiceCard.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { getLocation, locations } from '../data/locations.js';
import { services } from '../data/services.js';
import { images } from '../data/images.js';

// Area detail template — unique SEO content per emirate with nearby services,
// map embed, and CTA.
export default function AreaDetail() {
  const { slug } = useParams();
  const area = getLocation(slug);
  if (!area) return <Navigate to="/404" replace />;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Areas', path: '/areas' },
    { name: area.name },
  ];

  return (
    <>
      <Seo
        title={`Cleaning Services in ${area.name}`}
        description={`${area.intro} Book professional residential and commercial cleaning in ${area.name} with Neat & Healthy Cleaning. Eco-friendly, trained staff, satisfaction guaranteed.`}
        keywords={`cleaning services ${area.name}, ${area.name} cleaning company, cleaners ${area.name} UAE`}
        path={`/areas/${area.slug}`}
        image={images.villa}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title={`Cleaning Services in ${area.name}`}
        description={area.intro}
        image={images.villa}
        crumbs={crumbs}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button to="/contact" size="lg">Book Now</Button>
          <Button to="/services" variant="outline" size="lg" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20">
            Browse services
          </Button>
        </div>
      </PageHero>

      {/* Communities */}
      <Section>
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">Communities</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white">
                We clean across {area.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray dark:text-slate-300">
                Our local crews know {area.name} inside out — from high-rise towers to sprawling villas. We coordinate with building management, concierge, and security so you don't have to.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {area.neighborhoods.map((n, i) => (
                  <Reveal key={n} delay={(i % 2) * 0.05}>
                    <div className="flex items-center gap-2 rounded-xl bg-white p-3 shadow-soft ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                      <FiCheck className="text-accent" size={16} />
                      <span className="text-sm font-medium text-ink dark:text-slate-200">{n}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <span className="section-eyebrow">Find Us</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white">
                Serving all of {area.name}
              </h2>
              <div className="mt-6 overflow-hidden rounded-3xl shadow-card ring-1 ring-slate-900/5 dark:ring-white/10">
                <iframe
                  title={`Map of ${area.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(area.mapQuery)}&output=embed`}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Popular services in this area */}
      <Section className="bg-white dark:bg-slate-900/30">
        <div className="container-px">
          <SectionHeading
            eyebrow="Popular Services"
            title={`Top services in ${area.name}`}
            description="The services most booked by customers in your area."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Other areas */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Other Areas" title="We also serve" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {locations.filter((l) => l.slug !== area.slug).map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.06}>
                <Link
                  to={`/areas/${loc.slug}`}
                  className="group flex items-center gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/50 dark:ring-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary-gradient group-hover:text-white">
                    <FiMapPin size={20} />
                  </span>
                  <span className="flex-1 font-bold text-ink dark:text-white">{loc.name}</span>
                  <FiArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        title={`Ready for a spotless space in ${area.name}?`}
        description="Book in 60 seconds. Same-day and next-day slots available across the emirate."
      />
    </>
  );
}
