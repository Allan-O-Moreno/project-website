import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Home";

const services = [
  ["power", "Electrical Power Systems", "Distribution, switchgear, panels and service infrastructure installed and commissioned for reliable operation.", ["High-voltage substations", "MV & LV switchgear", "Transformers and metering", "MCCs, VFDs and soft starts"]],
  ["automation", "Controls & Automation", "Multi-platform programming and integration across leading PLC, HMI and SCADA systems.", ["Allen-Bradley, Siemens, Modicon, DeltaV & Omron", "FactoryTalk, EcoStruxure, Wonderware & Ignition", "Industrial network configuration", "Historian and server/client builds"]],
  ["instrumentation", "Instrumentation & Calibration", "Precise field installation, calibration, documentation and maintenance for process instrumentation.", ["Level, pressure, flow and temperature", "NIST-traceable calibration", "NETA-compliant test equipment", "Data acquisition and analysis"]],
  ["commissioning", "Commissioning & Startup", "Disciplined verification and startup support that brings complex facilities online with confidence.", ["Wire-tag verification and loop checks", "Cause-and-effect testing", "SCADA I/O verification", "Performance testing and turnover"]],
  ["maintenance", "Maintenance & Outage Support", "Lifecycle support that minimizes downtime and keeps critical systems performing.", ["Preventive maintenance", "Planned outages and turnarounds", "Troubleshooting and retrofits", "24/7 emergency response"]],
  ["integration", "System Integration", "One accountable team connecting electrical equipment, instrumentation, controls and communications.", ["Control-panel design and fabrication", "Fiber termination and OTDR testing", "Safety systems", "Custom engineered solutions"]],
];

const Products = () => (
  <main className="rt-site rt-inner-page">
    <header className="rt-page-hero"><div className="rt-shell"><p className="rt-kicker">Capabilities</p><h1>Technical depth.<br /><em>Field accountability.</em></h1><p>NFPA 70E-certified crews supporting the full electrical, automation, instrumentation and commissioning lifecycle.</p></div></header>
    <section className="rt-section"><div className="rt-shell rt-service-list">
      {services.map(([id,title,copy,items],index) => <article id={id} key={id}><div className="rt-service-list__num">0{index+1}</div><div><h2>{title}</h2><p>{copy}</p></div><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></article>)}
    </div></section>
    <section className="rt-credential-strip"><div className="rt-shell"><div><strong>NFPA 70E</strong><span>Certified</span></div><div><strong>NETA</strong><span>Standards</span></div><div><strong>NIST</strong><span>Traceable</span></div><div><strong>AZ · NV · UT</strong><span>Licensed</span></div></div></section>
    <section className="rt-cta"><div className="rt-shell"><p className="rt-kicker">Your scope. Our accountability.</p><h2>Put the right technical team on site.</h2><Link className="rt-button rt-button--red" to="/contact">Discuss your project <span>→</span></Link></div></section>
    <Footer />
  </main>
);
export default Products;
