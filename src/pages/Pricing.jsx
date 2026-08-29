import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import PricingCard from '../components/ui/PricingCard.jsx';
import QuoteForm from '../components/forms/QuoteForm.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { FiCheck } from 'react-icons/fi';
import { pricingPackages } from '../data/pricing.js';
import { images } from '../data/images.js';
import CTASection from '../components/common/CTASection.jsx';

const includedEverywhere = [
  'Trained, insured, uniformed professionals',
  'Eco-friendly, non-toxic products',
  'All equipment and supplies provided',
  '52-point cleaning checklist',
  '100% satisfaction guarantee',
  'No deposit — pay after completion',
];

export default function Pricing() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Pricing' }];
  return (
    <>
      <Seo
        title="Pricing & Packages"
        description="Transparent cleaning pricing with no hidden fees. Choose hourly, deep, villa, or office cleaning — or request a custom quote."
        keywords="cleaning prices UAE, cleaning packages, hourly cleaning rate, deep cleaning price, villa cleaning price, office cleaning quote"
        path="/pricing"
        image={images.ecoProducts}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Simple, transparent pricing"
        description="No hidden fees, no surprises. Pick a package or request a custom quote — you approve the price before we begin."
        image="/images/deep-cleaning-dubai-neat-and-healthy-cleaning.webp"
        crumbs={crumbs}
      />

      {/* Packages */}
      <Section>
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingPackages.map((pkg, i) => (
              <PricingCard key={pkg.slug} pkg={pkg} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* Included everywhere */}
      <Section className="bg-white dark:bg-slate-900/30 !py-16">
        <div className="container-px">
          <SectionHeading eyebrow="Always Included" title="No matter which package you choose" />
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {includedEverywhere.map((item, i) => (
              <Reveal key={i} delay={(i % 2) * 0.05}>
                <div className="flex items-start gap-3 rounded-2xl bg-bg p-4 ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <FiCheck size={14} />
                  </span>
                  <span className="text-sm font-medium text-ink-soft dark:text-slate-200">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Custom quote */}
      <Section>
        <div className="container-px">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Custom Quote"
              title="Need something tailored?"
              description="Tell us about your space and priorities. We will email a detailed estimate within 24 hours — no obligation."
            />
            <div className="mt-10 rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10 sm:p-10">
              <QuoteForm />
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
