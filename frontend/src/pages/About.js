import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const team = [
  {
    name: "Maria B",
    role: "Co-founder & Operations Director",
  },
  {
    name: "Thomas Williams",
    role: "Co-founder & Technical Manager",
  },
  {
    name: "James Humphries",
    role: "Co-founder & I&C Specialist",
  },
  {
    name: "Larry Pruit Jr",
    role: "Project Manager",
  },
];

const About = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location]);

  return (
  <main className="container py-5" aria-labelledby="about-title">
    <header>
      <h1 id="about-title" className="text-center mb-4">About Redline Technical Services LLC</h1>
      <p className="lead text-center">We are an electrical and automation services company providing schematics, programming, commissioning, and maintenance for complex facilities across energy, manufacturing, and utilities.</p>
    </header>

    <section className="text-center mb-5" aria-labelledby="mission-title">
      <h2 id="mission-title">Our Mission</h2>
      <p>Deliver safe, well-documented, and reliable electrical systems that help customers operate with confidence, from the first drawing to long-term maintenance.</p>
    </section>

    <section className="text-center mb-5" aria-labelledby="values-title">
      <h2 id="values-title">What We Stand For</h2>
      <div>
        Precision documentation &mdash; every redline and schematic matters.<br />
        Field accountability &mdash; our engineers stay with you through testing and startup.<br />
        Safety & standards &mdash; NIST-aligned calibrations and industry best practices.<br />
        Partnership mindset &mdash; lifecycle support that adapts as your facility grows.
      </div>
    </section>

    <section aria-labelledby="team-title">
      <h2 id="team-title">Leadership Team</h2>
      <div className="row">
        {team.map((member) => (
          <div className="col-md-3 mb-4" key={member.name}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">{member.name}</h4>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <footer
      className="bg-dark text-white text-center py-3 mt-5"
      role="contentinfo"
    >
      <p>
        &copy; {new Date().getFullYear()} Redline Technical Services LLC. All rights reserved. |{' '}
        <a href="/contact" className="text-white text-decoration-underline">Contact</a>{' '}|{' '}
        <a href="/services" className="text-white text-decoration-underline">Services</a>
      </p>
    </footer>
  </main>
  );
};

export default About;
