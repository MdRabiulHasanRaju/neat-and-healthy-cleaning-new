import Seo, { faqSchema } from '../seo/Seo.jsx';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero.jsx';
import FeaturedServices from '../components/sections/FeaturedServices.jsx';
import AboutPreview from '../components/sections/AboutPreview.jsx';
import ProcessTimeline from '../components/sections/ProcessTimeline.jsx';
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx';
import StatsBand from '../components/sections/StatsBand.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import AreasWeServe from '../components/sections/AreasWeServe.jsx';
import GalleryPreview from '../components/sections/GalleryPreview.jsx';
import PricingPreview from '../components/sections/PricingPreview.jsx';
import HomeFaq from '../components/sections/HomeFaq.jsx';
import LatestArticles from '../components/sections/LatestArticles.jsx';
import CTASection from '../components/common/CTASection.jsx';
import { homeFaqs } from '../data/faqs.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Premium Residential & Commercial Cleaning in the UAE"
        description="Neat & Healthy Cleaning delivers eco-friendly residential and commercial cleaning across Dubai, Abu Dhabi, Sharjah, and Ajman. Trained staff, 100% satisfaction guarantee. Book in 60 seconds."
        keywords="cleaning services Dubai, residential cleaning, commercial cleaning, deep cleaning, move in move out cleaning, carpet cleaning, sofa cleaning, marble polishing, office cleaning UAE"
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(homeFaqs))}
        </script>
      </Helmet>
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <ProcessTimeline />
      <WhyChooseUs />
      <StatsBand />
      <Testimonials />
      <AreasWeServe />
      <GalleryPreview />
      <PricingPreview />
      <HomeFaq />
      <LatestArticles />
      <CTASection />
    </>
  );
}
