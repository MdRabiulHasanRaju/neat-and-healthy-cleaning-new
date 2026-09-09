import { Helmet } from 'react-helmet-async';
import { useTheme } from '../context/ThemeContext.jsx';

// Centralized SEO component.
// Renders meta tags + JSON-LD schema for a page.
export default function Seo({
  title,
  description,
  keywords,
  path = '/',
  image,
  schema = [],
  type = 'website',
}) {
  const { site } = useTheme();

  const siteUrl = site?.url || '';
  const siteName = site?.name || '';
  const sitePhone = site?.phone || '';
  const siteEmail = site?.email || '';
  const siteAreas = Array.isArray(site?.areas) ? site.areas : [];
  const siteHours = site?.hours || '';

  const canonical = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/favicon.svg`;

  const fullTitle = title
    ? `${title} | ${siteName}`
    : `${siteName} | Premium Residential & Commercial Cleaning`;

  const mergedSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: siteName,
      url: siteUrl,
      telephone: sitePhone,
      email: siteEmail,

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },

      areaServed: siteAreas,

      ...(siteHours
        ? {
            openingHours: siteHours,
          }
        : {}),
    },

    ...schema,
  ];

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      {description && (
        <meta
          name="description"
          content={description}
        />
      )}

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <link
        rel="canonical"
        href={canonical}
      />

      {/* Open Graph */}
      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description || ''}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:image"
        content={ogImage}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description || ''}
      />

      <meta
        name="twitter:image"
        content={ogImage}
      />

      {/* JSON-LD */}
      {mergedSchema.map((s, i) => (
        <script
          type="application/ld+json"
          key={i}
        >
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}


/* =========================================================
   SERVICE SCHEMA
   ========================================================= */

export const serviceSchema = (service, path, site) => {
  const siteUrl = site?.url || '';
  const siteName = site?.name || '';
  const sitePhone = site?.phone || '';
  const siteAreas = Array.isArray(site?.areas)
    ? site.areas
    : [];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',

    serviceType: service?.name || '',

    description: service?.summary || '',

    provider: {
      '@type': 'LocalBusiness',
      name: siteName,
      telephone: sitePhone,
      url: siteUrl,
    },

    areaServed: siteAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),

    url: `${siteUrl}${path}`,
  };
};


/* =========================================================
   FAQ SCHEMA
   ========================================================= */

export const faqSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',

  mainEntity: faqs.map((f) => ({
    '@type': 'Question',

    name: f.q,

    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});


/* =========================================================
   BREADCRUMB SCHEMA
   ========================================================= */

export const breadcrumbSchema = (crumbs = [], site) => {
  const siteUrl = site?.url || '';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',

    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',

      position: i + 1,

      name: c.name,

      ...(c.path
        ? {
            item: `${siteUrl}${c.path}`,
          }
        : {}),
    })),
  };
};


/* =========================================================
   ARTICLE / BLOG SCHEMA
   ========================================================= */

export const articleSchema = (post, path, site) => {
  const siteUrl = site?.url || '';

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',

    headline: post?.title || '',

    description: post?.excerpt || '',

    datePublished: post?.date || '',

    author: {
      '@type': 'Organization',
      name: post?.author || '',
    },

    image: post?.image || '',

    url: `${siteUrl}${path}`,
  };
};