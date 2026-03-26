import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '@components/common/ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
