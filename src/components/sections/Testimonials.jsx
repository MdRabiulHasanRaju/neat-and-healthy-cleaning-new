import { Section, SectionHeading } from '../ui/Section.jsx';
import TestimonialSlider from '../ui/TestimonialSlider.jsx';
import { FaStar } from 'react-icons/fa6';

// Testimonials section with the Swiper carousel and an aggregate rating badge.
export default function Testimonials() {
  return (
    <Section className="bg-white dark:bg-slate-900/30">
      <div className="container-px">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by homes and offices alike"
          description="Over 4,500 customers have rated us 4.9 out of 5. Here is what some of them say."
        />
        <div className="mt-8 flex items-center justify-center gap-2 text-accent">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar key={i} size={22} />
          ))}
          <span className="ml-2 text-sm font-semibold text-ink dark:text-white">4.9 / 5 average</span>
        </div>
        <div className="mt-10">
          <TestimonialSlider />
        </div>
      </div>
    </Section>
  );
}
