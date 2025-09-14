import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

// function StatusBadge() {
//   const [online, setOnline] = useState<boolean | null>(null)

//   useEffect(() => {
//     fetch('/api/health')
//       .then((r) => r.json())
//       .then((d) => setOnline(d.status === 'ok'))
//       .catch(() => setOnline(false))
//   }, [])

//   const color = online == null ? '#a0a0a0' : online ? '#22c55e' : '#ef4444'
//   const text = online == null ? 'Checking' : online ? 'Online' : 'Offline'

//   return (
//     <span className="status-badge" title={`API: ${text}`}>
//       <span className="dot" style={{ backgroundColor: color }} />
//       <span className="status-text">API: {text}</span>
//     </span>
//   )
// }

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img src="/RedLineLogo.png" alt="Redline logo" className="nav-logo" />
          <span className="brand-text">REDLINE
            <span className="brand-sub">TECHNICAL SERVICES LLC</span>
          </span>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">About Us <span className="plus">+</span></NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/services">Services <span className="plus">+</span></NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/contact">Contact</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/careers">Careers</NavLink>
        </nav>
        <div className="nav-actions">
          <button className="search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <NavLink to="/contact" className="cta-btn">Get a Quote</NavLink>
          {/* <StatusBadge /> */}
        </div>
      </div>
    </header>
  )
}
