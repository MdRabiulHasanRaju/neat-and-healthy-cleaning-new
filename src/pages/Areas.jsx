import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Button from '../components/ui/Button.jsx';
import { FiMapPin, FiArrowRight, FiCheck } from 'react-icons/fi';
import { locations } from '../data/locations.js';
import { images } from '../data/images.js';
import CTASection from '../components/common/CTASection.jsx';

export default function Areas() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Areas' }];
  return (
    <>
      <Seo
        title="Areas We Serve"
        description="Neat & Healthy Cleaning serves Dubai, Abu Dhabi, Sharjah, and Ajman with same-day and next-day cleaning appointments across all major communities."
        keywords="cleaning services Dubai, cleaning Abu Dhabi, cleaning Sharjah, cleaning Ajman, cleaning near me UAE"
        path="/areas"
        image={images.villa}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Cleaning across the UAE"
        description="Four emirates, hundreds of communities, one premium standard. Find your area and book in 60 seconds."
        image={images.villa}
        crumbs={crumbs}
      />
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Service Areas" title="Find your emirate" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 2) * 0.1}>
                <div className="h-full rounded-3xl bg-white p-8 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-glow">
                        <FiMapPin size={24} />
                      </span>
                      <h3 className="mt-4 text-2xl font-bold text-ink dark:text-white">{loc.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray dark:text-slate-300">{loc.intro}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {loc.neighborhoods.map((n) => (
                      <span key={n} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-200">
                        <FiCheck size={12} /> {n}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button to={`/areas/${loc.slug}`} variant="outline" iconRight={FiArrowRight}>
                      {loc.name} cleaning services
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
