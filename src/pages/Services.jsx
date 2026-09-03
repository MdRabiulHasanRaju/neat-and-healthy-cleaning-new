import { useEffect, useMemo, useState } from 'react';
import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section } from '../components/ui/Section.jsx';
import ServiceCard from '../components/ui/ServiceCard.jsx';
import { FiSearch } from 'react-icons/fi';
import { images } from '../data/images.js';
import CTASection from '../components/common/CTASection.jsx';
import ServicesSkeleton from '../components/common/ServicesSkeleton.jsx';

export default function Services() {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services' }
  ];

  const [services, setServices] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          'http://localhost/admin/api/services'
        );

        const result = await response.json();

        console.log('Services API:', result);

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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) {
      return services;
    }

    return services.filter((s) =>
      s.name?.toLowerCase().includes(q) ||
      s.short?.toLowerCase().includes(q)
    );
  }, [query, services]);

  return (
    <>
      <Seo
        title="Cleaning Services"
        description="Explore our full range of residential, commercial, and specialist cleaning services across the UAE — from deep cleaning to marble polishing."
        keywords="cleaning services, residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, marble polishing, office cleaning UAE"
        path="/services"
        image={images.cleanersDining}
        schema={[breadcrumbSchema(crumbs)]}
      />

      <PageHero
        title="Cleaning services for every need"
        description="16 specialist services covering homes, offices, and everything in between. All eco-friendly, all guaranteed."
        image="/images/deep-cleaning-dubai-neat-and-healthy-cleaning.webp"
        crumbs={crumbs}
      />

      <Section>
        <div className="container-px">

          {/* Search */}
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <FiSearch
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray"
                size={18}
              />

              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services…"
                aria-label="Search services"
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Loading */}
          {loading && <ServicesSkeleton />}

          {/* Services */}
          {!loading && filtered.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* No Result */}
          {!loading && filtered.length === 0 && (
            <p className="py-12 text-center text-gray dark:text-slate-400">
              No services match “{query}”. Try a different search.
            </p>
          )}

        </div>
      </Section>

      <CTASection />
    </>
  );
}