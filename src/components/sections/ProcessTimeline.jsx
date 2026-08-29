import { motion } from 'framer-motion';
import { Section, SectionHeading } from '../ui/Section.jsx';
import { ourProcess } from '../../data/company.js';
import useIcon from '../../hooks/useIcon.js';

// Interactive process timeline with numbered steps and connecting line.
export default function ProcessTimeline() {
  return (
    <Section className="bg-white pt-14 dark:bg-slate-900/30">
      <div className="container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="Spotless in four simple steps"
          description="From booking to walk-through, we have made professional cleaning effortless."
        />
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {ourProcess.map((step, i) => {
              const Icon = useIcon(step.icon);
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative text-center"
                >
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-glow">
                    <Icon size={24} />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-glow-accent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray dark:text-slate-400">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
