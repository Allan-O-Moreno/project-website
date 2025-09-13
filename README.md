# Full‑Stack App: React (frontend) + FastAPI (backend)

This repo contains a Vite + React + TypeScript frontend and a FastAPI backend.

## Structure

- `frontend/`: React app (Vite + TS)
- `backend/`: FastAPI app (Uvicorn server)

## Setup

### Backend
1. Create a virtual environment (recommended):
   - Windows PowerShell: `python -m venv backend/.venv; backend/.venv/Scripts/Activate.ps1`
   - Unix/macOS: `python3 -m venv backend/.venv && source backend/.venv/bin/activate`
2. Install deps: `pip install -r backend/requirements.txt`
3. Run server: `uvicorn backend.main:app --reload --port 8000`
4. API docs: http://localhost:8000/docs

### Frontend
1. Install deps: `cd frontend && npm install`
2. Start dev: `npm run dev`
3. Open: http://localhost:5173

The Vite dev server proxies `/api/*` to the backend at `http://localhost:8000`.

## Notes

- Update proxy target in `frontend/vite.config.ts` if the backend port changes.
- CORS is enabled server-side for local dev; consider tightening for production.
