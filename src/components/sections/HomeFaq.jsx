import { Section, SectionHeading } from '../ui/Section.jsx';
import Accordion from '../ui/Accordion.jsx';
import { homeFaqs } from '../../data/faqs.js';
import { faqSchema } from '../../seo/Seo.jsx';
import { Helmet } from 'react-helmet-async';

// Homepage FAQ section with FAQ schema injected for rich results.
export default function HomeFaq() {
  return (
    <Section className="bg-white dark:bg-slate-900/30">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before booking. Can't find your answer? Message us on WhatsApp."
        />
        <div className="mt-12">
          <Accordion items={homeFaqs} />
        </div>
      </div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(homeFaqs))}
        </script>
      </Helmet>
    </Section>
  );
}
