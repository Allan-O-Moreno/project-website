// pages/Home.js - Updated for Redline Technical Services LLC
import React from "react";
import "./home.landing.css";

const Home = () => {
  const trustLogos = [
    { src: "/images/nexoraAnalyticsLogo.png", alt: "Industrial Operator" },
    { src: "/images/nexoraAnalyticsNavBarLogo.png", alt: "Utilities Partner" },
    { src: "/images/nexoraAnalyticsLogo.png", alt: "Manufacturing Client" },
    { src: "/images/nexoraAnalyticsNavBarLogo.png", alt: "Energy Producer" },
    { src: "/images/nexoraAnalyticsLogo.png", alt: "Processing Facility" },
  ];

  return (
  <div className="nx-landing">
    {/* Hero */}
    <section className="nx-hero">
      <div className="nx-hero__wrap">
        <div className="fade-in" style={{ animationDelay: '40ms' }}>
          <div className="nx-hero__eyebrow">Redline Technical Services LLC</div>
          <h1 className="nx-hero__title">Electrical & automation specialists from design to maintenance</h1>
          <p className="nx-hero__desc">Redline Technical Services LLC delivers electrical schematics, PLC/DCS/SCADA programming, commissioning, and lifecycle support that keep industrial facilities running with confidence.</p>
          <div className="nx-hero__ctas">
            <a className="nx-btn_primary" href="/contact">Schedule a consultation</a>
            <a className="nx-btn_ghost" href="/services">See our services</a>
          </div>
        </div>
        <div className="nx-hero__media fade-in" style={{ animationDelay: '120ms' }}>
          <img
            src="/images/RedlineLogo2.png"
            alt="Redline Technical Services logo"
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px', backgroundColor: 'var(--bg-card)', padding: '24px' }}
          />
        </div>
      </div>
      <div className="nx-trust">
        <div className="nx-trust__label">Trusted by industrial and utility partners</div>
        <div className="nx-carousel" aria-label="Trusted logos carousel">
          <div className="nx-carousel__track" role="list">
            <div className="nx-logos" aria-hidden="false">
              {trustLogos.map((l, idx) => (
                <div className="nx-logo" role="listitem" key={`logo-a-${idx}`} >
                  <img src={l.src} alt={l.alt} width="120" height="36" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
            <div className="nx-logos" aria-hidden="true">
              {trustLogos.map((l, idx) => (
                <div className="nx-logo" role="listitem" key={`logo-b-${idx}`} >
                  <img src={l.src} alt="" aria-hidden="true" width="120" height="36" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="nx-features">
      <div className="nx-feature fade-in" style={{ animationDelay: '60ms' }}>
        <div className="nx-feature__icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M3 5h18v2H3zm0 6h12v2H3zm0 6h18v2H3z"/></svg></div>
        <div className="nx-feature__title">Comprehensive documentation</div>
        <div className="nx-feature__desc">Electrical schematics, P&amp;IDs, and redline updates captured with precision to simplify installation and troubleshooting.</div>
      </div>
      <div className="nx-feature fade-in" style={{ animationDelay: '100ms' }}>
        <div className="nx-feature__icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M12 2l4 7h-8l4-7zm0 20l-4-7h8l-4 7zM2 12l7-4v8l-7-4zm20 0l-7 4V8l7 4z"/></svg></div>
        <div className="nx-feature__title">Automation & control mastery</div>
        <div className="nx-feature__desc">Expert PLC, DCS, VFD, SCADA, and HMI programming tailored to optimize performance and uptime.</div>
      </div>
      <div className="nx-feature fade-in" style={{ animationDelay: '140ms' }}>
        <div className="nx-feature__icon"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M5 3h14v2H5zm0 4h14v6H5zm0 8h14v2H5v-2z"/></svg></div>
        <div className="nx-feature__title">Lifecycle partnership</div>
        <div className="nx-feature__desc">From commissioning through long-term maintenance, we stay engaged to keep power, controls, and safety systems performing.</div>
      </div>
    </section>

    {/* Stats */}
    <section className="nx-stats slide-up" style={{ animationDelay: '80ms' }}>
      <div className="nx-stats__wrap">
        <div className="nx-stat"><div className="nx-stat__num">25+</div><div className="nx-stat__label">Years combined field experience</div></div>
        <div className="nx-stat"><div className="nx-stat__num">100%</div><div className="nx-stat__label">NIST-aligned calibrations</div></div>
        <div className="nx-stat"><div className="nx-stat__num">24/7</div><div className="nx-stat__label">Facility support availability</div></div>
        <div className="nx-stat"><div className="nx-stat__num">0</div><div className="nx-stat__label">Tolerance for downtime</div></div>
      </div>
    </section>

    {/* Service areas */}
    <section className="nx-integrations fade-in" style={{ animationDelay: '80ms' }}>
      <h2>Core Service Areas</h2>
      <div className="nx-integrations__grid">
        <div className="nx-integration">Electrical schematic development</div>
        <div className="nx-integration">Redline modification services</div>
        <div className="nx-integration">PLC, DCS, VFD, SCADA &amp; HMI programming</div>
        <div className="nx-integration">Instrumentation &amp; control design, field testing, and calibration</div>
        <div className="nx-integration">P&amp;ID development</div>
        <div className="nx-integration">Facility startup &amp; commissioning</div>
        <div className="nx-integration">Long-term facility maintenance</div>
        <div className="nx-integration">Medium &amp; low voltage power, control, and lighting</div>
        <div className="nx-integration">Substations, switchgear &amp; MCC solutions</div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="nx-testimonial fade-in" style={{ animationDelay: '120ms' }}>
      <div className="nx-quote">"Redline delivered rock-solid schematics, tuned our PLCs, and stayed on-site through startup. They are our go-to partner for critical expansions."<small>Maintenance Manager, Gulf Coast Processing Plant</small></div>
    </section>

    {/* Resources */}
    <section className="nx-resources">
      <article className="nx-card fade-in" style={{ animationDelay: '60ms' }}>
        <div className="nx-card__eyebrow">Checklist</div>
        <div className="nx-card__title">Commissioning essentials for new control systems</div>
        <a className="nx-card__cta" href="/insights">Download guide ?</a>
      </article>
      <article className="nx-card fade-in" style={{ animationDelay: '100ms' }}>
        <div className="nx-card__eyebrow">Case study</div>
        <div className="nx-card__title">How a refinery reduced downtime with proactive redlines</div>
        <a className="nx-card__cta" href="/insights">Read story ?</a>
      </article>
      <article className="nx-card fade-in" style={{ animationDelay: '140ms' }}>
        <div className="nx-card__eyebrow">Webinar</div>
        <div className="nx-card__title">Designing NIST-aligned calibration programs</div>
        <a className="nx-card__cta" href="/insights">Watch on-demand ?</a>
      </article>
    </section>

    {/* CTA */}
    <section className="nx-cta slide-up" style={{ animationDelay: '100ms' }}>
      <div className="nx-cta__wrap">
        <div>
          <div className="nx-cta__title">Ready to strengthen your electrical infrastructure?</div>
          <div style={{ color: 'var(--text-muted)' }}>Partner with Redline Technical Services LLC for schematics, automation, commissioning, and maintenance you can trust.</div>
        </div>
        <div className="nx-cta__actions">
          <a className="nx-btn_primary" href="/contact">Talk with our team</a>
          <a className="nx-btn_ghost" href="/services">View capabilities</a>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="nx-footer">
      <div className="nx-footer__wrap">
        <div className="nx-footer__grid">
          <div className="nx-footer__col">
            <h4>Services</h4>
            <a className="nx-footer__link" href="/services#schematics">Electrical schematics</a>
            <a className="nx-footer__link" href="/services#automation">PLC &amp; automation</a>
            <a className="nx-footer__link" href="/services#commissioning">Startup &amp; commissioning</a>
            <a className="nx-footer__link" href="/services#maintenance">Maintenance programs</a>
          </div>
          <div className="nx-footer__col">
            <h4>Expertise</h4>
            <a className="nx-footer__link" href="/services#instrumentation">Instrumentation &amp; controls</a>
            <a className="nx-footer__link" href="/services#pid">P&amp;ID development</a>
            <a className="nx-footer__link" href="/services#power">Medium &amp; low voltage power</a>
            <a className="nx-footer__link" href="/services#substations">Substations &amp; switchgear</a>
          </div>
          <div className="nx-footer__col">
            <h4>Support</h4>
            <a className="nx-footer__link" href="/contact/form">Request support</a>
            <a className="nx-footer__link" href="/contact/info">Company info</a>
            <a className="nx-footer__link" href="/insights">Insights</a>
            <a className="nx-footer__link" href="/docs">Documentation</a>
          </div>
          <div className="nx-footer__col">
            <h4>Company</h4>
            <a className="nx-footer__link" href="/about">About</a>
            <a className="nx-footer__link" href="/about/team">Team</a>
            <a className="nx-footer__link" href="/about/mission">Mission</a>
            <a className="nx-footer__link" href="/about/values">Values</a>
          </div>
          <div className="nx-footer__col">
            <h4>Standards</h4>
            <a className="nx-footer__link" href="/insights">NIST alignment</a>
            <a className="nx-footer__link" href="/insights">Safety practices</a>
            <a className="nx-footer__link" href="/insights">Quality management</a>
          </div>
        </div>
        <div className="nx-footer__bottom">
          <div>&copy; {new Date().getFullYear()} Redline Technical Services LLC</div>
          <div className="nx-social" aria-label="Social links">
            <a className="nx-social__link" href="https://www.linkedin.com/company/redline-technical-services/" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.3V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V24h-5V8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Home;
