import { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';
import { Section, SectionHeading } from '../ui/Section.jsx';
import ServiceCard from '../ui/ServiceCard.jsx';
import Button from '../ui/Button.jsx';
import { FiArrowRight } from 'react-icons/fi';
import FeaturedServicesSkeleton from '../common/FeaturedServicesSkeleton.jsx';

export default function FeaturedServices() {
  const {base_url} = useTheme();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${base_url}/admin/api/services`
        );

        const result = await response.json();

        if (result.success) {
          setServices(result.data);
        }
      } catch (error) {
        console.error('Services Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const featured = services
    .filter(item => Number(item.featured) === 1)
    .sort((a, b) => Number(a.position) - Number(b.position));

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

          <Button
            to="/services"
            variant="outline"
            iconRight={FiArrowRight}
            className="shrink-0"
          >
            View all services
          </Button>
        </div>

        {loading ? (
          <FeaturedServicesSkeleton />
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        )}

      </div>
    </Section>
  );
}