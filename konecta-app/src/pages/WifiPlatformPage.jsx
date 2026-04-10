import { useState } from "react";
import { Link } from "react-router-dom";
import {
  heroStats,
  steps,
  sectors,
  clients,
  platformFeatures,
  dashboardMetrics,
  dashboardBars,
} from "@data/wifiPlatform";
import SEO from "@components/common/SEO";
import ThemedIcon from "@components/common/ThemedIcon";
import { PAGE_SEO } from "@data/constants";
import "../css/wifi-platform.css";

const DEMO_API = import.meta.env.VITE_DEMO_API || "http://localhost:3001";

const INDUSTRY_OPTIONS = [
  "Hospitality",
  "Retail",
  "Healthcare",
  "Education",
  "Transport",
  "Corporate",
  "Government",
  "ISP / Telecoms",
  "Events / Venues",
  "Other",
];

const GOAL_OPTIONS = [
  { value: "analytics", label: "Guest Analytics & Insights" },
  { value: "marketing", label: "Marketing & Engagement" },
  { value: "monetisation", label: "WiFi Monetisation" },
  { value: "compliance", label: "POPIA / GDPR Compliance" },
  { value: "captive-portal", label: "Branded Captive Portal" },
  { value: "other", label: "Other" },
];

export default function WifiPlatformPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    country: "",
    locations: "",
    goals: [],
  });
  const [isIndividual, setIsIndividual] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoalToggle = (goalValue) => {
    setFormData((prev) => {
      const goals = prev.goals.includes(goalValue)
        ? prev.goals.filter((g) => g !== goalValue)
        : [...prev.goals, goalValue];
      return { ...prev, goals };
    });
  };

  const handleIndividualToggle = (e) => {
    const checked = e.target.checked;
    setIsIndividual(checked);
    setFormData((prev) => ({
      ...prev,
      companyName: checked ? "Individual" : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${DEMO_API}/api/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(
          data.errors?.join(" ") || data.error || "Something went wrong.",
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  };

  const inputClass = "wfp-form-input";

  return (
    <>
      <SEO
        title={PAGE_SEO.wifiPlatform.title}
        description={PAGE_SEO.wifiPlatform.description}
        path="/wifi-platform"
      />
      {/* ── SUB-NAV ── */}
      <div className="wfp-subnav">
        <a href="#wfp-how">How It Works</a>
        <a href="#wfp-sectors">Sectors</a>
        <a href="#wfp-clients">Live Clients</a>
        <a href="#wfp-platform">Platform</a>
        <a href="#wfp-demo" className="wfp-subnav-cta">
          Book a Demo
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="wfp-hero">
        <div className="wfp-hero-grid-lines" />
        <div className="wfp-hero-glow" />
        <div className="wfp-hero-glow2" />
        <div className="wfp-hero-eyebrow">WiFi Experience Platform</div>
        <h1>
          Turn Your WiFi
          <br />
          Into a <span>Data Platform.</span>
        </h1>
        <p className="wfp-hero-sub">
          Konecta transforms existing WiFi infrastructure into a secure,
          data-driven digital engagement platform. Every connection becomes a
          branded experience, a behaviour insight, and a revenue opportunity.
        </p>
        <div className="wfp-hero-ctas">
          <a href="#wfp-demo" className="btn-primary">
            Book A Demo
          </a>
          <a
            href="https://dash.konecta.co.za/portal/portal.php"
            className="wfp-btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See It Live →
          </a>
        </div>
        <div className="wfp-hero-proof">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <div className="wfp-proof-num">{stat.value}</div>
              <div className="wfp-proof-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="wfp-divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="wfp-section" id="wfp-how">
        <div className="wfp-section-eyebrow">How It Works</div>
        <h2 className="wfp-section-title">
          From connection to <span>engagement</span> in four steps.
        </h2>
        <p className="wfp-section-body">
          No infrastructure replacement. No months of re-cabling. Konecta layers
          on top of your existing WiFi and activates within days.
        </p>
        <div className="wfp-steps">
          {steps.map((step, i) => (
            <div className="wfp-step" key={step.number}>
              <div className="wfp-step-num">{step.number}</div>
              <div className="wfp-step-icon">
                <ThemedIcon name={step.icon} size={28} />
              </div>
              <div className="wfp-step-title">{step.title}</div>
              <p className="wfp-step-desc">{step.description}</p>
              {i < steps.length - 1 && <div className="wfp-step-connector" />}
            </div>
          ))}
        </div>
      </section>

      <div className="wfp-divider" />

      {/* ── SECTORS ── */}
      <section className="wfp-section" id="wfp-sectors">
        <div className="wfp-section-eyebrow">Industries We Serve</div>
        <h2 className="wfp-section-title">
          Built for every sector
          <br />
          with <span>WiFi to activate.</span>
        </h2>
        <p className="wfp-section-body">
          Same platform. Completely different configurations for each industry's
          specific goals, compliance requirements, and user journeys.
        </p>
        <div className="wfp-sectors-grid">
          {sectors.map((sector) => (
            <div
              className="wfp-sector-card"
              key={sector.name}
              style={{
                "--sector-color": sector.color || "var(--orange)",
                ...(sector.isHighlight
                  ? { background: "rgba(244, 129, 32, 0.06)" }
                  : {}),
              }}
            >
              <div className="wfp-sector-icon">
                <ThemedIcon name={sector.icon} size={32} />
              </div>
              <div className="wfp-sector-name">{sector.name}</div>
              <div className="wfp-sector-tag">{sector.tag}</div>
              <div className="wfp-sector-desc">{sector.description}</div>
              <div className="wfp-sector-outcomes">
                {sector.outcomes.map((outcome) => (
                  <div className="wfp-sector-outcome" key={outcome}>
                    {outcome}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wfp-divider" />

      {/* ── LIVE CLIENTS ── */}
      <section className="wfp-section" id="wfp-clients">
        <div className="wfp-section-eyebrow">Sector Deployments</div>
        <h2 className="wfp-section-title">
          Live across <span>multiple sectors</span> in Gauteng.
        </h2>
        <p className="wfp-section-body">
          Each deployment is a fully branded, sector-specific WiFi experience —
          configured for the unique goals, users, and compliance requirements of
          that industry.
        </p>
        <div className="wfp-client-cards">
          {clients.map((client) => (
            <div className="wfp-client-card" key={client.name}>
              <div className="wfp-client-header">
                <div className="wfp-client-icon">
                  <ThemedIcon name={client.icon} size={22} />
                </div>
                <div>
                  <div className="wfp-client-name">{client.name}</div>
                  <div className="wfp-client-type">{client.type}</div>
                </div>
              </div>
              <div className="wfp-client-body">
                <p className="wfp-client-desc">{client.description}</p>
                <div className="wfp-client-screens">
                  {client.screens.map((screen) => (
                    <span className="wfp-client-screen-tag" key={screen}>
                      {screen}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="wfp-divider" />

      {/* ── PLATFORM CAPABILITIES ── */}
      <section className="wfp-section" id="wfp-platform">
        <div className="wfp-section-eyebrow">The Platform</div>
        <h2 className="wfp-section-title">
          Everything in one
          <br />
          <span>connected platform.</span>
        </h2>
        <div className="wfp-platform-grid">
          <div className="wfp-feature-list">
            {platformFeatures.map((feature) => (
              <div className="wfp-feature-item" key={feature.title}>
                <div className="wfp-feature-dot" />
                <div>
                  <div className="wfp-feature-title">{feature.title}</div>
                  <p className="wfp-feature-desc">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wfp-platform-visual">
            <div className="wfp-platform-visual-title">
              Live Dashboard — Sample Metrics
            </div>

            {dashboardMetrics.map((metric) => (
              <div className="wfp-mini-metric" key={metric.label}>
                <div>
                  <div className="wfp-mini-metric-lbl">{metric.label}</div>
                  <div className="wfp-mini-metric-num">{metric.value}</div>
                </div>
                <div className="wfp-mini-metric-status">{metric.status}</div>
              </div>
            ))}

            {dashboardBars.map((bar) => (
              <div className="wfp-mini-bar" key={bar.label}>
                <div className="wfp-mini-bar-label">{bar.label}</div>
                <div className="wfp-bar-track">
                  <div
                    className="wfp-bar-fill"
                    style={{ width: `${bar.percentage}%` }}
                  />
                </div>
                <div className="wfp-bar-range">
                  <span>0%</span>
                  <span className="wfp-bar-value">{bar.percentage}%</span>
                </div>
              </div>
            ))}

            <div className="wfp-mini-metric">
              <div>
                <div className="wfp-mini-metric-lbl">Active Sites</div>
                <div className="wfp-mini-metric-num">50+</div>
              </div>
              <div className="wfp-mini-metric-status">Gauteng</div>
            </div>
          </div>
        </div>
      </section>

      <div className="wfp-divider" />

      {/* ── DEMO BOOKING FORM ── */}
      <section className="wfp-section wfp-cta-section" id="wfp-demo">
        <div className="wfp-section-eyebrow">Get Started</div>
        <h2 className="wfp-section-title">
          Your WiFi is already there.
          <br />
          <span>Make it work harder.</span>
        </h2>
        <p className="wfp-section-body">
          20 minutes. Live platform. Your questions. No deck, no sales script —
          just an honest look at what Konecta can do for your organisation.
        </p>

        {status === "success" ? (
          <div className="wfp-form-success">
            <div className="wfp-form-success-icon">✓</div>
            <h3>Demo Request Received!</h3>
            <p>
              Thanks, {formData.firstName}. We&apos;ll be in touch at{" "}
              <strong>{formData.email}</strong> within 24 hours to schedule your
              demo.
            </p>
          </div>
        ) : (
          <form className="wfp-demo-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1 — Name */}
            <div className="wfp-form-row">
              <div className="wfp-form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="First name"
                />
              </div>
              <div className="wfp-form-group">
                <label htmlFor="surname">Surname *</label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  required
                  value={formData.surname}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Surname"
                />
              </div>
            </div>

            {/* Row 2 — Contact */}
            <div className="wfp-form-row">
              <div className="wfp-form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@company.com"
                />
              </div>
              <div className="wfp-form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+27 xx xxx xxxx"
                />
              </div>
            </div>

            {/* Row 3 — Company */}
            <div className="wfp-form-row">
              <div className="wfp-form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Company name"
                  disabled={isIndividual}
                />
                <label className="wfp-form-checkbox">
                  <input
                    type="checkbox"
                    checked={isIndividual}
                    onChange={handleIndividualToggle}
                  />
                  <span>I&apos;m an individual</span>
                </label>
              </div>
              <div className="wfp-form-group">
                <label htmlFor="industry">Industry *</label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select your industry...</option>
                  {INDUSTRY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 — Location */}
            <div className="wfp-form-row">
              <div className="wfp-form-group">
                <label htmlFor="country">Country / Region *</label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. South Africa"
                />
              </div>
              <div className="wfp-form-group">
                <label htmlFor="locations">Number of Locations / Sites</label>
                <input
                  id="locations"
                  name="locations"
                  type="text"
                  value={formData.locations}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="e.g. 3, 25, 100+"
                />
              </div>
            </div>

            {/* Row 5 — Goals */}
            <div className="wfp-form-group wfp-form-group--full">
              <label>Primary Goals (select all that apply)</label>
              <div className="wfp-goals-grid">
                {GOAL_OPTIONS.map((goal) => (
                  <label
                    key={goal.value}
                    className="wfp-form-checkbox wfp-goal-chip"
                  >
                    <input
                      type="checkbox"
                      checked={formData.goals.includes(goal.value)}
                      onChange={() => handleGoalToggle(goal.value)}
                    />
                    <span>{goal.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {status === "error" && (
              <div className="wfp-form-error">{errorMsg}</div>
            )}

            <button
              type="submit"
              className="btn-primary wfp-form-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Book A Demo"}
            </button>
            <p className="wfp-cta-note">
              No commitment required · POPIA compliant · Deploys on existing
              infrastructure
            </p>
          </form>
        )}
      </section>
    </>
  );
}
