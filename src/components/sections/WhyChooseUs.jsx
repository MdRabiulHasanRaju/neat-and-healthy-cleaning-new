import { Section, SectionHeading } from '../ui/Section.jsx';
import { whyChooseUs } from '../../data/company.js';
import useIcon from '../../hooks/useIcon.js';
import Reveal from '../ui/Reveal.jsx';

// Why choose us grid with icon cards.
export default function WhyChooseUs() {
  return (
    <Section>
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The premium difference"
          description="We hold ourselves to a higher standard than expected — so you never have to think about cleaning again."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = useIcon(item.icon);
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary-gradient group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray dark:text-slate-300">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
