# Backend (FastAPI)

## Development

1. Create and activate a virtual environment
   - Windows PowerShell: `python -m venv .venv; .venv/Scripts/Activate.ps1`
   - Unix/macOS: `python3 -m venv .venv && source .venv/bin/activate`
2. Install deps: `pip install -r requirements.txt`
3. Run: `uvicorn backend.main:app --reload --port 8000`
4. Open docs: http://localhost:8000/docs

### Endpoints
- `GET /api/health` → `{ status: "ok" }`
- `GET /api/greet?name=Alice` → `{ message: "Hello, Alice!" }`

CORS is configured for `http://localhost:5173`.
