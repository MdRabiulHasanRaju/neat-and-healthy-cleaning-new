import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiMapPin } from 'react-icons/fi';
import Seo, { serviceSchema, faqSchema, breadcrumbSchema } from '../seo/Seo.jsx';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/ui/PageHero.jsx';
import ServiceDetailSkeleton from '../components/common/ServiceDetailSkeleton.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import useIcon from '../hooks/useIcon.js';
import Button from '../components/ui/Button.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import BeforeAfterSlider from '../components/ui/BeforeAfterSlider.jsx';
import ServiceCard from '../components/ui/ServiceCard.jsx';
import QuoteEstimator from '../components/common/QuoteEstimator.jsx';
import CTASection from '../components/common/CTASection.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
// import ElfsightWidget from '../components/common/ElfsightWidget.jsx';
import { getService, services } from '../data/services.js';
import { whyChooseUs } from '../data/whyChooseUs.js';
import { locations } from '../data/locations.js';
import { formatAed } from '../utils/helpers.js';
import site from '../data/site.js'
import { useEffect, useState } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setService(null);

      try {
        const [serviceResponse, servicesResponse] = await Promise.all([
          fetch(
            `http://localhost/admin/api/service-details?slug=${slug}`
          ),
          fetch(
            `http://localhost/admin/api/services`
          ),
        ]);

        const serviceResult = await serviceResponse.json();
        const servicesResult = await servicesResponse.json();

        console.log('Service:', serviceResult);
        console.log('All Services:', servicesResult);

        if (serviceResult.success) {
          setService(serviceResult.data);
        }

        if (servicesResult.success) {
          setServices(servicesResult.data);
        }

      } catch (error) {
        console.error('Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [slug]);

  if (loading) {
    return <ServiceDetailSkeleton />;
  }
    
  // const service = getService(slug);

  if (!service) return <Navigate to="/404" replace />;

  // const related = service.related.map(getService).filter(Boolean);

  const servicesBySlug = Object.fromEntries(
    services.map((item) => [item.slug, item])
  );

  const related = (service.related || [])
    .map((slug) => servicesBySlug[slug])
  .filter(Boolean);

  console.log(related)

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: service.name },
  ];

  return (
    <>
      <Seo
        title={service.name}
        description={service.summary}
        keywords={`${service.name.toLowerCase()}, ${service.short}, cleaning UAE`}
        path={`/services/${service.slug}`}
        image={service.heroImage}
        type="article"
        schema={[
          serviceSchema(service, `/services/${service.slug}`),
          faqSchema(service.faqs),
          breadcrumbSchema(crumbs),
        ]}
      />
      <PageHero
        title={service.name}
        description={service.short}
        image={service.heroImage}
        video={service.video??service.video}
        // mobileVideo="/videos/deep-cleaning-hero-mobile.mp4"
        crumbs={crumbs}
      >
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} size="lg">Book Now</Button>
          <Button href="#" variant="outline" size="lg" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20">
            From {formatAed(service.priceFrom)}
          </Button>
        </div>
      </PageHero>

      {/* Description + Benefits */}
      <Section>
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="section-eyebrow">Overview</span>
              <p className="mt-4 text-lg font-bold tracking-tight text-ink dark:text-white">
                {service.summaryTitle}
              </p>
              <p className="mt-4 text-base text-justify leading-relaxed text-gray dark:text-slate-300">
                {service.summary}
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {service.benefits.map((b, i) => {
                  const Icon = useIcon(b.icon);
                  return (
                    <Reveal key={b.title} delay={(i % 2) * 0.08}>
                      <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon size={22} />
                        </span>
                        <div>
                          <h3 className="font-bold text-ink dark:text-white">{b.title}</h3>
                          <p className="text-sm text-gray dark:text-slate-400">{b.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <p className='text-center'>
                <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} className="mt-5" iconRight={FiArrowRight}>
                      Book This Service
                </Button>
              </p>
            </div>

            {/* Sticky quote estimator */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <QuoteEstimator />
            </div>
          </div>
        </div>
      </Section>

            {/* Before / After */}
      <Section className="pt-0 pb-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Before & After"
            title="See the difference"
            description="Drag the slider to compare before and after our professional clean."
          />
          <div className="mx-auto mt-10 max-w-4xl">
            <BeforeAfterSlider
              before={service.beforeAfter.before}
              after={service.beforeAfter.after}
            />
          </div>
        </div>
      </Section>

      {/* What's included + Process */}
      <Section className="bg-white dark:bg-slate-900/30">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">What's Included</span>
              <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
                Everything in this service
              </h2>
              <ul className="mt-6 space-y-3">
                {service.included.map((item, i) => (
                  <Reveal key={i} delay={(i % 4) * 0.05}>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                        <FiCheck size={14} />
                      </span>
                      <span className="text-base text-ink-soft dark:text-slate-200">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <p className='text-center'>
                <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} className="mt-5" iconRight={FiArrowRight}>
                      Book This Service
                </Button>
              </p>
            </div>
            

            <div>
              <span className="section-eyebrow">Our Process</span>
              <h2 className="mt-4 text-2xl font-bold text-ink dark:text-white sm:text-3xl">
                How we deliver it
              </h2>
              <div className="mt-6 space-y-4">
                {service.process.map((step, i) => (
                  <Reveal key={step.step} delay={i * 0.08}>
                    <div className="flex items-start gap-4 rounded-2xl bg-bg p-5 ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-gradient text-sm font-bold text-white shadow-glow">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-bold text-ink dark:text-white">{step.title}</h3>
                        <p className="text-sm text-gray dark:text-slate-400">{step.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <p className='text-center'>
                <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} className="mt-5" iconRight={FiArrowRight}>
                      Book This Service
                </Button>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* why choose us */}
      <Section className="bg-white dark:bg-slate-900/30 !py-16">
        <div className="container-px">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink dark:text-white sm:text-4xl">
              Why Choose Neat & Healthy Cleaning?
            </h2>

            <p className="mt-4 leading-7 text-gray dark:text-slate-400">
              We combine professional cleaning standards, trained teams, flexible
              scheduling, and transparent pricing to make your cleaning experience
              simple, reliable, and hassle-free.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = useIcon(item.icon);

              return (
                <Reveal
                  key={item.title}
                  delay={(i % 3) * 0.08}
                >
                  <div
                    className="
                      group h-full rounded-2xl bg-white p-6
                      shadow-soft ring-1 ring-slate-900/5
                      transition-all duration-300
                      hover:-translate-y-1 hover:shadow-card
                      dark:bg-slate-900/60 dark:ring-white/10
                    "
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <span
                        className="
                          flex h-12 w-12 shrink-0 items-center justify-center
                          rounded-xl bg-primary/10 text-primary
                          transition-all duration-300
                          group-hover:bg-primary group-hover:text-white
                        "
                      >
                        <Icon size={23} />
                      </span>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3 className="font-bold leading-snug text-ink dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray dark:text-slate-400">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>


      {/* Pricing CTA */}
      <Section className="bg-white dark:bg-slate-900/30 !py-16">
        <div className="container-px">
          <div className="flex flex-col items-center justify-between gap-6 rounded-4xl bg-primary-gradient px-8 py-10 text-white sm:flex-row sm:px-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to book {service.name.toLowerCase()}?</h2>
              <p className="mt-2 text-white/80">From {formatAed(service.priceFrom)}. No deposit. Satisfaction guaranteed.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={`https://api.whatsapp.com/send?phone=${site.whatsapp}`} variant="accent" size="lg">Book Now</Button>
              <Button to="/pricing" variant="outline" size="lg" className="!border-white/30 !bg-white/10 !text-white hover:!bg-white/20">View pricing</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="FAQ" title={`${service.name} questions, answered`} />
          <div className="mt-10">
            <Accordion items={service.faqs} />
          </div>
        </div>
      </Section>

      <Testimonials />
      {/* <ElfsightWidget /> */}

      {/* Related services */}
      {related.length > 0 && (
        <Section className="bg-white dark:bg-slate-900/30">
          <div className="container-px">
            <SectionHeading eyebrow="Related" title="You might also like" align="left" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((s, i) => (
                <ServiceCard key={s.slug} service={s} index={i} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Areas we serve */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Areas" title="Available in your area" description="Click your emirate to see local service details." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={i * 0.06}>
                <Link
                  to={`/areas/${loc.slug}`}
                  className="group flex items-center gap-3 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/50 dark:ring-white/10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary-gradient group-hover:text-white">
                    <FiMapPin size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-bold text-ink dark:text-white">{service.name} in {loc.name}</span>
                    <span className="text-xs text-gray dark:text-slate-400">{loc.neighborhoods.length} communities</span>
                  </span>
                  <FiArrowRight className="text-primary transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
