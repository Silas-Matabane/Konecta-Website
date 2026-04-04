import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@components/layout/Layout";
import HomePage from "@pages/HomePage";
import PlatformPage from "@pages/PlatformPage";
import ServicesPage from "@pages/ServicesPage";
import MicrosoftPage from "@pages/MicrosoftPage";
import EventsPage from "@pages/EventsPage";
import ImpactPage from "@pages/ImpactPage";
import InsightsPage from "@pages/InsightsPage";
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";
import WifiPlatformPage from "@pages/WifiPlatformPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="microsoft" element={<MicrosoftPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="insights" element={<InsightsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="wifi-platform" element={<WifiPlatformPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
