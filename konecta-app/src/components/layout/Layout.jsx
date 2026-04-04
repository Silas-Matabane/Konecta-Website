import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "@components/common/ScrollToTop";
import PageTransition from "@components/common/PageTransition";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-konecta-orange focus:text-konecta-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold focus:outline-none"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="pt-[72px]">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
