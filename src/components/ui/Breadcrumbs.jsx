import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

// Breadcrumb navigation with schema support. Pass crumbs as
// [{ name, path }]; the last item is rendered as plain text.
export default function Breadcrumbs({ crumbs = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-gray dark:text-slate-400">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.path && !last ? (
                <Link to={c.path} className="hover:text-primary">
                  {c.name}
                </Link>
              ) : (
                <span className="font-medium text-ink dark:text-white" aria-current="page">
                  {c.name}
                </span>
              )}
              {!last && <FiChevronRight size={14} className="text-slate-400" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
