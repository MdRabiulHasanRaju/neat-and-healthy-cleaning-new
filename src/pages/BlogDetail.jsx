import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiClock, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import Seo, { articleSchema, breadcrumbSchema } from '../seo/Seo.jsx';
import { Section } from '../components/ui/Section.jsx';
import LazyImage from '../components/ui/LazyImage.jsx';
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx';
import NewsletterForm from '../components/forms/NewsletterForm.jsx';
import { getPost, blogPosts } from '../data/blog.js';
import { formatDate } from '../utils/helpers.js';
import CTASection from '../components/common/CTASection.jsx';

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/404" replace />;

  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title },
  ];
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length ? related : fallbackRelated;

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase()}`}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
        schema={[
          articleSchema(post, `/blog/${post.slug}`),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Hero */}
      <article>
        <header className="relative overflow-hidden bg-ink pt-16 lg:pt-20">
          <div className="absolute inset-0 -z-10">
            <LazyImage
              src={post.image}
              alt=""
              className="absolute inset-0 h-full w-full"
              imgClassName="h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/60" />
          </div>
          <div className="container-px py-16 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <div className="mb-5 [&_*]:text-white/70 [&_span:last-child]:text-white">
                <Breadcrumbs crumbs={crumbs} />
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-slate-300">
                <span>{post.author}</span>
                <span>•</span>
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><FiClock size={12} /> {post.readTime}</span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Body */}
        <Section className="bg-white dark:bg-slate-900/30">
          <div className="container-px">
            <div className="mx-auto max-w-3xl">
              <div className="overflow-hidden rounded-4xl shadow-card">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full"
                  imgClassName="h-full w-full object-cover"
                />
              </div>
              <div className="mt-8 space-y-6">
                {post.content.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="text-lg leading-relaxed text-ink-soft dark:text-slate-200"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  <FiArrowLeft /> Back to all articles
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <Section>
            <div className="container-px">
              <h2 className="text-2xl font-bold text-ink dark:text-white">Related articles</h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((p) => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex gap-4 rounded-3xl bg-white p-5 shadow-card ring-1 ring-slate-900/5 transition-all hover:-translate-y-1 hover:shadow-glow dark:bg-slate-900/70 dark:ring-white/10">
                    <LazyImage
                      src={p.image}
                      alt={p.title}
                      className="h-24 w-32 shrink-0 overflow-hidden rounded-2xl"
                      imgClassName="h-full w-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-primary">{p.category}</span>
                      <h3 className="mt-1 font-bold text-ink dark:text-white group-hover:text-primary">{p.title}</h3>
                      <span className="mt-auto inline-flex items-center gap-1 text-sm text-primary">Read <FiArrowRight /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* Newsletter */}
        <Section className="bg-white dark:bg-slate-900/30 !py-16">
          <div className="container-px">
            <div className="mx-auto max-w-xl rounded-3xl bg-primary-gradient p-8 text-center text-white sm:p-12">
              <h2 className="text-2xl font-bold">Enjoyed this article?</h2>
              <p className="mt-2 text-white/80">Subscribe for more cleaning tips and exclusive offers.</p>
              <div className="mt-6 [&_input]:!bg-white/10 [&_input]:!text-white [&_input]:!placeholder:text-white/60">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </Section>
      </article>

      <CTASection />
    </>
  );
}
