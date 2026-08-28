import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Seo, { breadcrumbSchema } from '../seo/Seo.jsx';
import PageHero from '../components/ui/PageHero.jsx';
import { Section } from '../components/ui/Section.jsx';
import LazyImage from '../components/ui/LazyImage.jsx';
import NewsletterForm from '../components/forms/NewsletterForm.jsx';
import { FiClock, FiSearch, FiArrowRight } from 'react-icons/fi';
import { blogPosts, blogCategories } from '../data/blog.js';
import { formatDate } from '../utils/helpers.js';
import { images } from '../data/images.js';
import CTASection from '../components/common/CTASection.jsx';
import { motion } from 'framer-motion';
import { cn } from '../utils/helpers.js';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const crumbs = [{ name: 'Home', path: '/' }, { name: 'Blog' }];
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesCat = category === 'All' || p.category === category;
      const matchesQuery = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const current = Math.min(page, totalPages);
  const shown = filtered.slice((current - 1) * POSTS_PER_PAGE, current * POSTS_PER_PAGE);

  return (
    <>
      <Seo
        title="Blog — Cleaning Tips & Guides"
        description="Practical cleaning tips, home maintenance guides, and expert advice on marble care, carpet care, office cleaning, and healthy living."
        keywords="cleaning tips, home maintenance, office cleaning tips, deep cleaning guide, marble care, carpet care"
        path="/blog"
        image={images.ecoBrushes}
        schema={[breadcrumbSchema(crumbs)]}
      />
      <PageHero
        title="Cleaning tips & guides"
        description="Expert advice to keep your space healthy between professional visits — and to help you choose the right service."
        image={images.ecoBrushes}
        crumbs={crumbs}
      />

      <Section>
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Main column */}
            <div className="lg:col-span-8">
              {/* Search */}
              <div className="relative mb-8">
                <FiSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray" size={18} />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  placeholder="Search articles…"
                  aria-label="Search articles"
                  className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-ink shadow-soft focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
                />
              </div>

              {/* Category filter */}
              <div className="mb-8 flex flex-wrap gap-2">
                {['All', ...blogCategories].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => { setCategory(cat); setPage(1); }}
                    className={cn(
                      'rounded-full px-4 py-1.5 text-xs font-semibold transition-all',
                      category === cat
                        ? 'bg-primary-gradient text-white shadow-glow'
                        : 'bg-white text-ink-soft ring-1 ring-slate-900/5 hover:text-primary dark:bg-slate-900/50 dark:text-slate-200 dark:ring-white/10',
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Posts */}
              <div className="grid gap-6 sm:grid-cols-2">
                {shown.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                  >
                    <Link to={`/blog/${post.slug}`} className="group block h-full overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-900/5 transition-all hover:-translate-y-1.5 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10">
                      <div className="overflow-hidden">
                        <LazyImage
                          src={post.image}
                          alt={post.title}
                          className="aspect-[16/10] w-full"
                          imgClassName="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-gray dark:text-slate-400">
                          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold text-primary">{post.category}</span>
                          <span className="inline-flex items-center gap-1"><FiClock size={12} /> {post.readTime}</span>
                        </div>
                        <h2 className="mt-3 text-lg font-bold text-ink dark:text-white group-hover:text-primary">{post.title}</h2>
                        <p className="mt-2 line-clamp-2 text-sm text-gray dark:text-slate-400">{post.excerpt}</p>
                        <p className="mt-3 text-xs text-gray dark:text-slate-500">{formatDate(post.date)}</p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {shown.length === 0 && (
                <p className="py-12 text-center text-gray dark:text-slate-400">
                  No articles found. Try a different search or category.
                </p>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPage(i + 1)}
                      className={cn(
                        'h-10 w-10 rounded-full text-sm font-semibold transition-all',
                        current === i + 1
                          ? 'bg-primary-gradient text-white shadow-glow'
                          : 'bg-white text-ink-soft ring-1 ring-slate-900/5 hover:text-primary dark:bg-slate-900/50 dark:text-slate-200',
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
                  <h3 className="text-lg font-bold text-ink dark:text-white">Newsletter</h3>
                  <p className="mt-1 text-sm text-gray dark:text-slate-400">Get cleaning tips and offers in your inbox.</p>
                  <div className="mt-4">
                    <NewsletterForm />
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
                  <h3 className="text-lg font-bold text-ink dark:text-white">Categories</h3>
                  <ul className="mt-4 space-y-2">
                    {blogCategories.map((cat) => (
                      <li key={cat}>
                        <button
                          type="button"
                          onClick={() => { setCategory(cat); setPage(1); }}
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray hover:bg-primary/10 hover:text-primary dark:text-slate-300"
                        >
                          {cat}
                          <FiArrowRight size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
