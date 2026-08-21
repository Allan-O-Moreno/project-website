import React from "react";
import { Link } from "react-router-dom";
import { Footer } from "./Home";

const projects = [
  ["Battery materials", "Redwood Materials", "Carson City, Nevada", "$1.4M", "Controls, instrumentation and electrical improvements across three first-of-their-kind battery recycling facilities."],
  ["Geothermal & solar", "Ormat Technologies", "Western U.S. fleet", "$900K+", "Fleet-wide construction and operations support spanning turbine upgrades, solar fields, MV recovery and plant modernization."],
  ["Geothermal · EGS", "Fervo Energy", "Milford, Utah", "Active", "Commissioning, calibration, Ignition HMI and Allen-Bradley controls for the largest EGS development in history."],
  ["Renewable fuels", "Fulcrum Bioenergy", "Reno, Nevada", "$450K", "Process controls engineering, FAT/SAT, interlock testing, PID tuning and NIST-traceable calibration."],
  ["Oil re-refining", "Safety-Kleen", "Fallon, Nevada", "$400K", "Turnkey E/I&C implementation, DeltaV integration, MCC upgrades and twice-yearly turnaround support."],
  ["Solar & storage", "NextEra Energy", "Fernley, Nevada", "$150K", "800+ fiber splices and terminations, OTDR certification and battery-storage integration delivered ahead of schedule."],
  ["Mining", "Nevada Gold Mines", "Northern Nevada", "Active", "Safety projects, control-panel builds and programming across Meikle, Rodeo and Twin Creeks operations."],
  ["Semiconductor", "Bosch Semiconductor", "Roseville, California", "Complete", "I&C management and owner representation for a major U.S. semiconductor facility modernization."],
];

const Insights = () => (
  <main className="rt-site rt-inner-page">
    <header className="rt-page-hero"><div className="rt-shell"><p className="rt-kicker">Project experience</p><h1>Proven where<br /><em>failure isn't an option.</em></h1><p>Selected work across power generation, advanced manufacturing, refining, mining, data centers and EV production.</p></div></header>
    <section className="rt-section rt-project-page"><div className="rt-shell"><div className="rt-project-grid">
      {projects.map(([sector,name,location,value,copy]) => <article key={name}><p className="rt-kicker">{sector}</p><h2>{name}</h2><div className="rt-project-meta"><span>{location}</span><strong>{value}</strong></div><p>{copy}</p></article>)}
    </div></div></section>
    <section className="rt-cta"><div className="rt-shell"><p className="rt-kicker">Let's build it right.</p><h2>Experience that moves projects forward.</h2><Link className="rt-button rt-button--red" to="/contact">Request project references <span>→</span></Link></div></section>
    <Footer />
  </main>
);
export default Insights;
