import { Section, SectionHeading } from '../ui/Section.jsx';
import PricingCard from '../ui/PricingCard.jsx';
import Button from '../ui/Button.jsx';
import { pricingPackages } from '../../data/pricing.js';
import { FiArrowRight } from 'react-icons/fi';

// Pricing preview — shows the 4 main packages on the homepage.
export default function PricingPreview() {
  return (
    <Section>
      <div className="container-px">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          description="No hidden fees. Choose a package or request a custom quote — you approve the price before we begin."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPackages.map((pkg, i) => (
            <PricingCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/pricing" variant="outline" iconRight={FiArrowRight}>
            See full pricing details
          </Button>
        </div>
      </div>
    </Section>
  );
}
