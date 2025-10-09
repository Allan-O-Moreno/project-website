// pages/Products.js - Reframed as Services for Redline Technical Services LLC
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import styles from "../styles/theme.module.css";

const services = [
  {
    id: 'schematics',
    title: 'Electrical schematic development',
    badge: 'Design',
    description: 'Comprehensive power and control schematics that become the blueprint for installation, commissioning, and troubleshooting.',
  },
  {
    id: 'redlines',
    title: 'Redline modification services',
    badge: 'Documentation',
    description: 'Fast, precise redline updates that capture field changes and keep drawing sets accurate for every stakeholder.',
  },
  {
    id: 'automation',
    title: 'PLC, DCS, VFD, SCADA & HMI programming',
    badge: 'Automation',
    description: 'Experienced programmers delivering optimized logic, intuitive interfaces, and seamless integrations across leading platforms.',
  },
  {
    id: 'instrumentation',
    title: 'Instrumentation & control design, field testing, calibration & configuration',
    badge: 'I&C',
    description: 'Design, commissioning, and NIST-aligned calibration of instrumentation loops to ensure accuracy and safe operation.',
  },
  {
    id: 'pid',
    title: 'P&ID development',
    badge: 'Process',
    description: 'Detailed Piping and Instrumentation Diagrams that communicate process intent and support maintenance teams.',
  },
  {
    id: 'commissioning',
    title: 'Facility startup & commissioning',
    badge: 'Startup',
    description: 'Structured commissioning plans, checkouts, and on-site support that get facilities online safely and efficiently.',
  },
  {
    id: 'maintenance',
    title: 'Long-term facility maintenance',
    badge: 'Lifecycle',
    description: 'Preventive and corrective programs that extend equipment life, minimize downtime, and keep documentation current.',
  },
  {
    id: 'power',
    title: 'Medium & low voltage power, controls, and lighting',
    badge: 'Power',
    description: 'Design and installation expertise spanning feeders, controls, and lighting systems for industrial environments.',
  },
  {
    id: 'substations',
    title: 'Substations, switchgear, and MCC solutions',
    badge: 'Distribution',
    description: 'Specification, installation, and maintenance of substations, switchgear, and motor control centers for reliable distribution.',
  },
];

const Products = () => {
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
    <h1 className="text-center mb-4">Our Services</h1>
    <p className="lead text-center">Redline Technical Services LLC supports every stage of your electrical and automation lifecycle, from design and documentation to commissioning and long-term maintenance.</p>

    <div className="row">
      {services.map((service, idx) => (
        <div className="col-md-6" key={service.id}>
          <div className={`${styles.productCard} mb-4 fade-in`} id={service.id} style={{ animationDelay: `${60 + idx * 40}ms` }}>
            <h3>{service.title} {service.badge && <span className={styles.badgeEnterprise}>{service.badge}</span>}</h3>
            <p>{service.description}</p>
            <a href="/contact" className={`btn ${styles.btnBrandPrimary}`}>Discuss your project</a>
          </div>
        </div>
      ))}
    </div>

    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>
        &copy; {new Date().getFullYear()} Redline Technical Services LLC. All rights reserved. |{' '}
        <a href="/insights" className="text-white">Safety &amp; quality</a>{' '}|{' '}
        <a href="/contact" className="text-white">Get in touch</a>
      </p>
    </footer>
  </div>
  );
};

export default Products;
