export default function Home() {
  return (
    <section>
      <h1>Welcome to Redline</h1>
      <p className="lead">A clean React + TypeScript starter with a Python FastAPI backend.</p>
      <div className="card-grid">
        <div className="card">
          <h3>Fast Frontend</h3>
          <p>Vite-powered React app for speedy dev and builds.</p>
        </div>
        <div className="card">
          <h3>Python Backend</h3>
          <p>FastAPI serving REST endpoints with simple CORS.</p>
        </div>
        <div className="card">
          <h3>DX Focused</h3>
          <p>Strict TypeScript, minimal setup, and clear structure.</p>
        </div>
      </div>
    </section>
  )
}

