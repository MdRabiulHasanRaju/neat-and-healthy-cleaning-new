import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import PageTransition from './components/common/PageTransition.jsx';
import PageSkeleton from './components/common/PageSkeleton.jsx';

// Lazy-load every page for code splitting.
const Home = lazy(() => import('./pages/Home.jsx'));

const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Areas = lazy(() => import('./pages/Areas.jsx'));
const AreaDetail = lazy(() => import('./pages/AreaDetail.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

const withSuspense = (Page) => (
  <Suspense fallback={<PageSkeleton />}>
    <PageTransition>
      <Page />
    </PageTransition>
  </Suspense>
);

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={withSuspense(Home)} />
        <Route path="about" element={withSuspense(About)} />
        <Route path="services" element={withSuspense(Services)} />
        <Route path="services/:slug" element={withSuspense(ServiceDetail)} />
        <Route path="areas" element={withSuspense(Areas)} />
        <Route path="areas/:slug" element={withSuspense(AreaDetail)} />
        <Route path="pricing" element={withSuspense(Pricing)} />
        <Route path="gallery" element={withSuspense(Gallery)} />
        <Route path="blog" element={withSuspense(Blog)} />
        <Route path="blog/:slug" element={withSuspense(BlogDetail)} />
        <Route path="contact" element={withSuspense(Contact)} />
        <Route path="*" element={withSuspense(NotFound)} />
      </Route>
    </Routes>
  );
}
