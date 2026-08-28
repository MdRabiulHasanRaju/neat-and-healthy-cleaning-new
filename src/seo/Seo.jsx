import { Helmet } from 'react-helmet-async';
import { site } from '../data/site.js';

// Centralized SEO component. Renders all meta tags + JSON-LD schema for a page.
// Pass a `schema` array to inject LocalBusiness, Service, FAQ, and Breadcrumb
// structured data.
export default function Seo({
  title,
  description,
  keywords,
  path = '/',
  image,
  schema = [],
  type = 'website',
}) {
  const canonical = `${site.url}${path}`;
  const ogImage = image || `${site.url}/favicon.svg`;
  const fullTitle = title
    ? `${title} | ${site.name}`
    : `${site.name} | Premium Residential & Commercial Cleaning`;

  const mergedSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: site.name,
      url: site.url,
      telephone: site.phone,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
      areaServed: site.areas,
      openingHours: site.hours,
    },
    ...schema,
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {mergedSchema.map((s, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}

// Helper builders for common schema types.
export const serviceSchema = (service, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  description: service.summary,
  provider: {
    '@type': 'LocalBusiness',
    name: site.name,
    telephone: site.phone,
  },
  areaServed: site.areas.map((a) => ({ '@type': 'City', name: a })),
  url: `${site.url}${path}`,
});

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.path ? `${site.url}${c.path}` : undefined,
  })),
});

export const articleSchema = (post, path) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.date,
  author: { '@type': 'Organization', name: post.author },
  image: post.image,
  url: `${site.url}${path}`,
});
