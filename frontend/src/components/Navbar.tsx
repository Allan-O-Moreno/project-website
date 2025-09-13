import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

function StatusBadge() {
  const [online, setOnline] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((r) => r.json())
      .then((d) => setOnline(d.status === 'ok'))
      .catch(() => setOnline(false))
  }, [])

  const color = online == null ? '#a0a0a0' : online ? '#22c55e' : '#ef4444'
  const text = online == null ? 'Checking' : online ? 'Online' : 'Offline'

  return (
    <span className="status-badge" title={`API: ${text}`}>
      <span className="dot" style={{ backgroundColor: color }} />
      <span className="status-text">API: {text}</span>
    </span>
  )
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img src="/RedLineLogo.png" alt="Redline logo" className="nav-logo" />
          <span>Redline</span>
        </div>
        <nav className="nav-links">
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">About</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/careers">Careers</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/services">Services</NavLink>
          <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/contact">Contact</NavLink>
        </nav>
        <StatusBadge />
      </div>
    </header>
  )
}
