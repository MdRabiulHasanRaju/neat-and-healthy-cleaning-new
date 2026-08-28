import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import Seo from '../seo/Seo.jsx';
import Button from '../components/ui/Button.jsx';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist or has moved."
        path="/404"
      />
      <section className="flex min-h-[60vh] items-center justify-center px-5 py-20 text-center">
        <div>
          <p className="text-8xl font-extrabold gradient-text">404</p>
          <h1 className="mt-4 text-3xl font-bold text-ink dark:text-white">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md text-gray dark:text-slate-400">
            The page you are looking for may have been moved or never existed. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/" icon={FiHome}>Back to home</Button>
            <Button to="/services" variant="outline">Browse services</Button>
          </div>
        </div>
      </section>
    </>
  );
}
