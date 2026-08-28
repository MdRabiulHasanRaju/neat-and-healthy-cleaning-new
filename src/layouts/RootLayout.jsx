import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import FloatingCTAs from '../components/layout/FloatingCTAs.jsx';
import BackToTop from '../components/layout/BackToTop.jsx';
import ScrollToTop from '../components/common/ScrollToTop.jsx';

// Root layout: chrome (navbar, footer, floating CTAs) wraps every route.
export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="pt-16 lg:pt-20">
        <Outlet />
      </div>
      <Footer />
      <FloatingCTAs />
      <BackToTop />
    </>
  );
}
