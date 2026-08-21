import React, { useState } from "react";
import { Footer } from "./Home";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const submit = (event) => { event.preventDefault(); setSent(true); };
  return <main className="rt-site rt-inner-page">
    <header className="rt-page-hero"><div className="rt-shell"><p className="rt-kicker">Let's build it right.</p><h1>Put Redline<br /><em>on your project.</em></h1><p>Tell us about your facility, schedule or service need. Our team will follow up to discuss the right technical approach.</p></div></header>
    <section className="rt-section rt-contact"><div className="rt-shell rt-contact__grid">
      <div><p className="rt-kicker">Contact Redline</p><h2>Start the conversation.</h2><div className="rt-contact-cards"><a href="tel:+17754006054"><span>Call</span>775-400-6054</a><a href="mailto:Services@redline-ts.com"><span>Email</span>Services@redline-ts.com</a><address><span>Visit</span>5595 Tarzyn Rd<br />Fallon, NV 89406</address></div></div>
      <form onSubmit={submit} className="rt-form"><label>Name<input name="name" required /></label><label>Work email<input name="email" type="email" required /></label><label>Company<input name="company" /></label><label>Project type<select name="type" defaultValue=""><option value="" disabled>Select a capability</option><option>Electrical power systems</option><option>Automation & controls</option><option>Instrumentation & calibration</option><option>Commissioning & startup</option><option>Maintenance & outage support</option></select></label><label className="rt-form__wide">How can we help?<textarea name="message" rows="5" required /></label><button className="rt-button rt-button--red" type="submit">Send project details <span>→</span></button>{sent && <p className="rt-form__success" role="status">Thanks—your project details are ready to send. Connect this form to your preferred email or CRM endpoint before launch.</p>}</form>
    </div></section>
    <Footer />
  </main>;
};
export default Contact;
