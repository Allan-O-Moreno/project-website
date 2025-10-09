// pages/Insights.js - Field insights for Redline Technical Services LLC
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Insights = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
  <div className="container py-5">
    <h1 className="text-center mb-4">Insights & Field Notes</h1>
    <p className="lead text-center">Guidance from Redline Technical Services LLC on schematics, automation, commissioning, and maintenance for industrial facilities.</p>
    
    <article className="blog-post" id="field-services" style={{ borderBottom: '1px solid #ddd', padding: '20px 0' }}>
      <h3>Documenting and updating electrical drawings</h3>
      <p><strong>Published:</strong> September 2025</p>
      <p>Clear electrical schematics and timely redline modifications are the foundation for safe work. We share the checklist we use on-site to capture field deviations, validate point-to-point continuity, and deliver drawing packages that make future troubleshooting painless.</p>
      <a href="/services#schematics">Explore our schematic services</a>
    </article>
    
    <article className="blog-post" id="automation-best-practices" style={{ borderBottom: '1px solid #ddd', padding: '20px 0' }}>
      <h3>Optimizing PLC, DCS, and HMI performance</h3>
      <p><strong>Published:</strong> August 2025</p>
      <p>From controller selection to HMI alarm strategies, our automation specialists outline how we program PLCs, DCS platforms, VFDs, and SCADA systems for reliability, maintainability, and operator clarity.</p>
      <a href="/services#automation">See how we program automation platforms</a>
    </article>
    
    <article className="blog-post" id="maintenance-programs" style={{ borderBottom: '1px solid #ddd', padding: '20px 0' }}>
      <h3>Building resilient maintenance programs</h3>
      <p><strong>Published:</strong> July 2025</p>
      <p>Long-term success comes from disciplined calibration, NIST-aligned testing, and proactive upgrades. Learn how Redline designs maintenance schedules covering instrumentation, switchgear, MCCs, and facility lighting.</p>
      <a href="/services#maintenance">Review our maintenance approach</a>
    </article>

    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} Redline Technical Services LLC. All rights reserved. | <a href="/contact" className="text-white">Contact</a> | <a href="/insights" className="text-white">More insights</a></p>
    </footer>
  </div>
  );
};

export default Insights;

