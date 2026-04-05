import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "@components/common/ScrollToTop";
import PageTransition from "@components/common/PageTransition";
import ScrollProgressBar from "@components/common/ScrollProgressBar";
import FloatingNav from "@components/common/FloatingNav";
import Breadcrumbs from "@components/common/Breadcrumbs";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <>
      <ScrollToTop />
      <ScrollProgressBar />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-konecta-orange focus:text-konecta-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-[72px]">
        {!isHome && <Breadcrumbs />}
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <FloatingNav />
    </>
  );
}
