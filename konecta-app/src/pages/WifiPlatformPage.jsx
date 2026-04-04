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
import "../css/wifi-platform.css";

export default function WifiPlatformPage() {
  return (
    <>
      {/* ── SUB-NAV ── */}
      <div className="wfp-subnav">
        <a href="#wfp-how">How It Works</a>
        <a href="#wfp-sectors">Sectors</a>
        <a href="#wfp-clients">Live Clients</a>
        <a href="#wfp-platform">Platform</a>
        <Link to="/contact" className="wfp-subnav-cta">
          Book a Demo
        </Link>
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
          <Link to="/contact" className="btn-primary">
            Book a 20-Min Demo
          </Link>
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
              <div className="wfp-step-icon">{step.icon}</div>
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
              <div className="wfp-sector-icon">{sector.icon}</div>
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
                <div className="wfp-client-icon">{client.icon}</div>
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

      {/* ── CTA ── */}
      <section className="wfp-section wfp-cta-section">
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
        <div className="wfp-cta-buttons">
          <Link to="/contact" className="btn-primary">
            Book a 20-Min Demo
          </Link>
          <a
            href="https://dash.konecta.co.za/portal/portal.php"
            className="wfp-btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the Live Platform
          </a>
        </div>
        <p className="wfp-cta-note">
          No commitment required · POPIA compliant · Deploys on existing
          infrastructure
        </p>
      </section>
    </>
  );
}
