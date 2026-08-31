import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section.jsx';
import ServiceCard from '../ui/ServiceCard.jsx';
import Button from '../ui/Button.jsx';
import { FiArrowRight } from 'react-icons/fi';
import { services } from '../../data/services.js';

// Featured services grid — shows the first 6 services on the homepage.
export default function FeaturedServices() {
  const featured = services
    .filter(item => item.featured === true)
    .sort((a, b) => a.position - b.position);

  return (
    <Section>
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Cleaning services for every space"
            description="From everyday home cleaning to specialist marble polishing, we have a service tailored to your needs."
            align="left"
          />
          <Button to="/services" variant="outline" iconRight={FiArrowRight} className="shrink-0">
            View all services
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}
