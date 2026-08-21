import React from "react";
import { Link } from "react-router-dom";

const capabilities = [
  ["01", "Electrical Power Systems", "Distribution, switchgear, panels, service infrastructure, and reliable power from low through high voltage."],
  ["02", "Automation & Controls", "PLC and HMI programming, control-panel fabrication, SCADA integration, and industrial network configuration."],
  ["03", "Instrumentation & Calibration", "Installation and NIST-traceable calibration of sensors, transmitters, meters, and process instrumentation."],
  ["04", "System Integration", "Equipment, sensors, controls, and communications unified into one accountable, high-performing system."],
  ["05", "Commissioning & Startup", "Loop checks, cause-and-effect testing, startup troubleshooting, energization, and performance testing."],
  ["06", "Maintenance & Outage Support", "Preventive maintenance, retrofits, planned turnarounds, and responsive 24/7 emergency support."],
];

const sectors = [
  ["Geothermal & renewable power", "Ormat · Fervo · Cyrq · NextEra"],
  ["Battery materials & manufacturing", "Redwood · Lilac · Polyglass"],
  ["Oil, gas & refining", "Safety-Kleen · Golden Gate · Fulcrum"],
  ["Mining & minerals", "Nevada Gold · Round Mountain · Mariana"],
  ["Semiconductor & data center", "Bosch · Google Comstock"],
  ["EV manufacturing", "Tesla / Pilot"],
];

const Footer = () => (
  <footer className="rt-footer">
    <div className="rt-shell rt-footer__grid">
      <div className="rt-footer__brand">
        <img src="/images/RedlineLogo2.png" alt="Redline Technical Services LLC" />
        <strong className="rt-brand__text">Redline <small>Technical Services LLC</small></strong>
      </div>
      <div><span>Visit</span>5595 Tarzyn Rd<br />Fallon, NV 89406</div>
      <div><span>Call</span><a href="tel:+17754006054">775-400-6054</a></div>
      <div><span>Email</span><a href="mailto:Services@redline-ts.com">Services@redline-ts.com</a></div>
      <div className="rt-footer__copyright">© {new Date().getFullYear()} Redline Technical Services LLC</div>
    </div>
  </footer>
);

const Home = () => (
  <main className="rt-site">
    <section className="rt-hero">
      <div className="rt-shell rt-hero__grid">
        <div className="rt-hero__copy">
          <p className="rt-kicker">Work experience · Qualifications · Project references</p>
          <h1>Industrial systems.<br /><em>Built to perform.</em></h1>
          <p className="rt-hero__lead">Industrial electrical, instrumentation, controls, and commissioning across the Western United States.</p>
          <div className="rt-actions">
            <Link className="rt-button rt-button--red" to="/contact">Get a Quote <span>→</span></Link>
            <Link className="rt-button rt-button--line" to="/services">Explore capabilities</Link>
          </div>
        </div>
        <div className="rt-hero__mark">
          <img src="/images/redline-electrician-panel.jpg" alt="Redline technician working inside an electrical control panel" />
          <p>Experienced technicians filling the gap between construction and engineering.</p>
        </div>
      </div>
      <div className="rt-shell rt-badges" aria-label="Credentials">
        <span>NFPA 70E certified</span><span>NETA standards</span><span>NIST-traceable</span><span>Licensed · AZ · NV · UT</span>
      </div>
    </section>

    <section className="rt-section rt-overview">
      <div className="rt-shell rt-overview__grid">
        <div>
          <p className="rt-kicker">Who we are</p>
          <h2>Power and automation, handled end to end.</h2>
          <p className="rt-intro">Redline Technical Services LLC is an electrical power and automation partner for industrial and commercial operations. We design, install, commission, and maintain the systems our clients depend on—engineered solutions grounded in rigorous standards, disciplined safety, and code-compliant execution.</p>
          <Link className="rt-text-link" to="/about">Meet Redline <span>→</span></Link>
        </div>
        <div className="rt-metrics">
          <article><strong>17</strong><span>Client references across NV, CA & UT</span></article>
          <article><strong>6</strong><span>Industrial sectors served</span></article>
          <article><strong>$3.3M+</strong><span>Referenced contract value</span></article>
          <article><strong>3</strong><span>States licensed</span></article>
        </div>
      </div>
    </section>

    <section className="rt-section rt-dark">
      <div className="rt-shell">
        <p className="rt-kicker">Capabilities</p>
        <div className="rt-heading-row"><h2>One accountable partner.</h2><p>For the full electrical, automation, and instrumentation lifecycle.</p></div>
        <div className="rt-cap-grid">
          {capabilities.map(([num, title, copy]) => <article key={title}><span>{num}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <Link className="rt-button rt-button--red" to="/services">View all capabilities <span>→</span></Link>
      </div>
    </section>

    <section className="rt-section rt-safety">
      <div className="rt-shell rt-safety__grid">
        <div className="rt-safety__headline"><p className="rt-kicker">Health & safety</p><h2>Safety is our number one priority.</h2></div>
        <div className="rt-safety__copy"><p>Health and safety is not just a goal—it drives how we do business, and it is part of the quality guarantee we give every client.</p><ul><li>Qualified-worker training and strict PPE requirements</li><li>Daily safety reports and job-specific hazard analysis</li><li>Field audits and mandatory hazard reporting</li><li>Comprehensive root-cause analysis</li></ul></div>
      </div>
    </section>

    <section className="rt-section rt-projects">
      <div className="rt-shell">
        <p className="rt-kicker">Project record</p>
        <div className="rt-heading-row"><h2>Proven in demanding environments.</h2><Link className="rt-text-link" to="/insights">See project experience <span>→</span></Link></div>
        <div className="rt-sector-grid">
          {sectors.map(([title, clients]) => <article key={title}><i></i><div><h3>{title}</h3><p>{clients}</p></div></article>)}
        </div>
      </div>
    </section>

    <section className="rt-cta">
      <div className="rt-shell"><p className="rt-kicker">Let's build it right.</p><h2>Bring your next facility online.<br />On schedule.</h2><Link className="rt-button rt-button--red" to="/contact">Talk with our team <span>→</span></Link></div>
    </section>
    <Footer />
  </main>
);

export { Footer };
export default Home;
