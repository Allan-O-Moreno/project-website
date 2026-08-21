import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Home";

const About = () => (
  <main className="rt-site rt-inner-page">
    <header className="rt-page-hero"><div className="rt-shell"><p className="rt-kicker">Who we are</p><h1>Built between<br /><em>field and engineering.</em></h1><p>A distinguished team of experienced technicians specializing in electrical instrumentation and controls.</p></div></header>
    <section className="rt-section rt-about-copy"><div className="rt-shell rt-about-grid">
      <div><p className="rt-kicker">Company overview</p><h2>Reliable systems start with accountable people.</h2></div>
      <div className="rt-long-copy">
        <p>At Redline Technical Services LLC, we are a distinguished team of experienced technicians specializing in electrical instrumentation and controls. With a rich history in the industry, we bring a wealth of expertise to every project, ensuring top-notch services that go beyond expectations.</p>
        <p>Our comprehensive services encompass a wide spectrum, including electrical construction, maintenance, instrumentation calibrations, and process automation. Whether it&apos;s building robust electrical systems, ensuring seamless maintenance, calibrating intricate instrumentation, or optimizing processes through automation, we have the knowledge and skills to deliver results.</p>
        <p>Redline Technical Services LLC is dedicated to precision, reliability, and excellence in every aspect of the industrial process world. Our team understands the critical role that electrical systems play in various industries, and we are committed to providing tailored solutions that meet the unique needs of our clients.</p>
        <p>Choose Redline Technical Services LLC for a partner that combines seasoned expertise with a diverse range of services. We take pride in our commitment to quality, ensuring that your projects are handled with the utmost professionalism and efficiency.</p>
        <p>Experience the difference with Redline Technical Services LLC &ndash; where excellence in electrical construction, maintenance, instrumentation, and process automation is our hallmark. Your satisfaction is our priority, and we look forward to exceeding your expectations.</p>
      </div>
    </div></section>
    <section className="rt-section rt-dark"><div className="rt-shell"><p className="rt-kicker">Credentials</p><h2>Qualified to self-perform.</h2><div className="rt-license-grid"><article><span>Arizona</span><h3>C-11 Electrical</h3><p>ROC 362659</p></article><article><span>Nevada</span><h3>C2 Electrical</h3><p>0091278</p></article><article><span>Utah</span><h3>E200 / E100 Electrical<br />B100 General Contractor</h3><p>14213943-5501</p></article></div></div></section>
    <section className="rt-section rt-about-copy"><div className="rt-shell"><p className="rt-kicker">Leadership team</p><div className="rt-team-grid"><article><h3>Maria B</h3><p>Co-founder & Operations Director</p></article><article><h3>Thomas Williams</h3><p>Co-founder & Technical Manager</p></article><article><h3>James Humphries</h3><p>Co-founder & I&C Specialist</p></article><article><h3>Larry Pruit Jr</h3><p>Project Manager</p></article></div></div></section>
    <section className="rt-cta"><div className="rt-shell"><p className="rt-kicker">Precision · Reliability · Excellence</p><h2>Choose a partner built for the work.</h2><Link className="rt-button rt-button--red" to="/contact">Meet your project team <span>→</span></Link></div></section>
    <Footer />
  </main>
);
export default About;
