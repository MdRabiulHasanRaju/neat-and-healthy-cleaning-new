import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/ui/PageHero.jsx';
import { Section, SectionHeading } from '../components/ui/Section.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import Counter from '../components/ui/Counter.jsx';
import LazyImage from '../components/ui/LazyImage.jsx';
import useIcon from '../hooks/useIcon.js';
import { images } from '../data/images.js';
import { team } from '../data/team.js';
import { coreValues, achievements, whyChooseUs } from '../data/company.js';
import { stats } from '../data/stats.js';
import CTASection from '../components/common/CTASection.jsx';
import { motion } from 'framer-motion';

export default function About() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'About' }];
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Neat & Healthy Cleaning — a premium cleaning company serving Dubai, Abu Dhabi, Sharjah, and Ajman since 2018 with eco-friendly products and trained professionals."
        keywords="about cleaning company UAE, professional cleaners Dubai, eco-friendly cleaning company"
        path="/about"
        image={images.cleanersTeam}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Cleaning with care since 2018"
        description="We are a team of 120+ trained professionals on a mission to make premium cleaning effortless, eco-friendly, and reliable — for every home and office in the UAE."
        image={images.cleanersTeam}
        crumbs={crumbs}
      />

      {/* Story */}
      <Section>
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <LazyImage
                src={images.cleanersVan}
                alt="Neat & Healthy cleaning team loading their van"
                className="aspect-[4/3] w-full overflow-hidden rounded-4xl shadow-card"
                imgClassName="h-full w-full object-cover"
              />
            </Reveal>
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink dark:text-white sm:text-4xl">
                From a single van to four emirates
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-gray dark:text-slate-300">
                <p>Neat & Healthy Cleaning was founded in 2018 with a simple frustration: it was too hard to find a cleaning service that was both reliable and genuinely eco-friendly. We started with three people, one van, and a 52-point checklist.</p>
                <p>Today, we serve thousands of homes and offices across Dubai, Abu Dhabi, Sharjah, and Ajman — but our standards have not changed. Every cleaner is trained, insured, and background-checked. Every product is safe for children and pets. Every booking is backed by our satisfaction guarantee.</p>
                <p>We believe a clean space is a healthier, happier space. That belief drives everything we do.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission / Vision */}
      <Section className="bg-white dark:bg-slate-900/30">
        <div className="container-px">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { tag: 'Mission', title: 'Make premium cleaning effortless', desc: 'To deliver a spotless, healthy space every time — with zero effort from you. We handle the details so you can focus on what matters.' },
              { tag: 'Vision', title: 'The UAE’s most trusted cleaning brand', desc: 'To set the standard for professional cleaning in the region — through people, products, and processes that respect both people and the planet.' },
            ].map((b, i) => (
              <Reveal key={b.tag} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-bg p-8 ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                  <span className="section-eyebrow">{b.tag}</span>
                  <h3 className="mt-4 text-2xl font-bold text-ink dark:text-white">{b.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray dark:text-slate-300">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Core values */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Core Values" title="What we stand for" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => {
              const Icon = useIcon(v.icon);
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-3xl bg-white p-7 text-center shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-gradient text-white shadow-glow">
                      <Icon size={26} />
                    </span>
                    <h3 className="mt-5 text-lg font-bold text-ink dark:text-white">{v.title}</h3>
                    <p className="mt-2 text-sm text-gray dark:text-slate-400">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-white dark:bg-slate-900/30">
        <div className="container-px">
          <SectionHeading eyebrow="Our Team" title="The people behind the clean" description="Experienced, trained, and passionate about what they do." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-3xl bg-bg shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/50 dark:ring-white/10">
                  <LazyImage
                    src={member.photo}
                    alt={member.name}
                    className="aspect-square w-full overflow-hidden"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-bold text-ink dark:text-white">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Why trust us */}
      <Section>
        <div className="container-px">
          <SectionHeading eyebrow="Why Trust Us" title="Reasons customers stay with us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => {
              const Icon = useIcon(item.icon);
              return (
                <Reveal key={item.title} delay={(i % 3) * 0.08}>
                  <div className="group h-full rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10">
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

      {/* Achievements timeline */}
      <Section className="bg-white dark:bg-slate-900/30">
        <div className="container-px">
          <SectionHeading eyebrow="Achievements" title="Milestones along the way" />
          <div className="relative mt-14">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/20 sm:left-1/2" />
            <div className="space-y-10">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-start gap-6 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12' : 'sm:ml-auto sm:pl-12'}`}
                >
                  <span className="absolute left-4 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-gradient text-xs font-bold text-white shadow-glow sm:left-1/2" style={{ left: '16px' }}>
                    {i + 1}
                  </span>
                  <div className="ml-12 sm:ml-0">
                    <span className="text-sm font-bold text-primary">{a.year}</span>
                    <h3 className="mt-1 text-lg font-bold text-ink dark:text-white">{a.title}</h3>
                    <p className="text-sm text-gray dark:text-slate-400">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="!py-0">
        <div className="container-px">
          <div className="grid gap-8 rounded-4xl bg-ink px-6 py-14 text-center sm:grid-cols-2 lg:grid-cols-4 sm:px-12">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-extrabold text-white sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
