import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/layout/Layout";
import HomePage from "@pages/HomePage";

const PlatformPage = lazy(() => import("@pages/PlatformPage"));
const ServicesPage = lazy(() => import("@pages/ServicesPage"));
const MicrosoftPage = lazy(() => import("@pages/MicrosoftPage"));
const EventsPage = lazy(() => import("@pages/EventsPage"));
const ImpactPage = lazy(() => import("@pages/ImpactPage"));
const InsightsPage = lazy(() => import("@pages/InsightsPage"));
const AboutPage = lazy(() => import("@pages/AboutPage"));
const ContactPage = lazy(() => import("@pages/ContactPage"));
const WifiPlatformPage = lazy(() => import("@pages/WifiPlatformPage"));
const EventDetailPage = lazy(() => import("@pages/EventDetailPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-konecta-black" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="platform" element={<PlatformPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="microsoft" element={<MicrosoftPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="events/:slug" element={<EventDetailPage />} />
            <Route path="impact" element={<ImpactPage />} />
            <Route path="insights" element={<InsightsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="wifi-platform" element={<WifiPlatformPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
