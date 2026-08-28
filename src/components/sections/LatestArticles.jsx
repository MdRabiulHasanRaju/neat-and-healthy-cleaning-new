import { Link } from 'react-router-dom';
import { Section, SectionHeading } from '../ui/Section.jsx';
import LazyImage from '../ui/LazyImage.jsx';
import Button from '../ui/Button.jsx';
import { FiArrowRight, FiClock } from 'react-icons/fi';
import { blogPosts } from '../../data/blog.js';
import { formatDate } from '../../utils/helpers.js';
import { motion } from 'framer-motion';

// Latest blog articles preview on the homepage.
export default function LatestArticles() {
  return (
    <Section>
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Blog"
            title="Tips, guides & cleaning know-how"
            description="Practical advice to keep your space healthy between professional visits."
            align="left"
          />
          <Button to="/blog" variant="outline" iconRight={FiArrowRight} className="shrink-0">
            Read all articles
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="group block h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10">
                <div className="overflow-hidden">
                  <LazyImage
                    src={post.image}
                    alt={post.title}
                    className="aspect-[16/10] w-full"
                    imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray dark:text-slate-400">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">{post.category}</span>
                    <span className="inline-flex items-center gap-1"><FiClock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-ink dark:text-white group-hover:text-primary">{post.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray dark:text-slate-400">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-gray dark:text-slate-500">{formatDate(post.date)}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
