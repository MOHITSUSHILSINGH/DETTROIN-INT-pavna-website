Name - MOHIT SINGH
INTERN ID 
email - singhmohit8039@gmail.com
github username -MOHITSUSHILSINGH
SELECTED WEBSITE - 
Live DEMO Link-(https://dettroin-int-pavna-website.vercel.app/)
Technology used - Frontend
React.js – UI library
Vite – Build tool and development server
React Router DOM – Client-side routing
Tailwind CSS – Utility-first CSS framework
PostCSS – CSS processing
JavaScript (ES6+)
HTML5
CSS3
Backend
Node.js – JavaScript runtime
Express.js – Backend web framework
MongoDB – NoSQL database
Mongoose – MongoDB ODM (Object Data Modeling)
Environment & Configuration
dotenv – Environment variable management (.env)
CORS – Cross-Origin Resource Sharing
Nodemon – Automatic server restart during development
API
REST API using Express
Handles:
Contact form submissions
Enquiry form submissions
Database
MongoDB
Collections/Models:
ContactMessage
EnquiryForm
key improvement made =>


* Developed a complete Mern stack version by adding a Node.js and Express backend.
* Integrated MOngodb to persist Contact and Admission Enquiry data instead of handling only the frontend.
* Built Restful API for Contact and Enquiry form submissions.
* Added Mongoose model (`ContactMessage` and `EnquiryForm`) for structured database storage.
* Connected frontend forms with backend APIs for dynamic data submission and storage.
* Organized the backend into a modular architecture (`config`, `models`, `routes`) for better scalability and maintainability.
* Implemented enviroment based configuration using `.env` and `dotenv`.
* Configured *CORS to enable secure communication between the React frontend and Express backend.
* Structured the project as separate frontend and backend applications, making it suitable for independent deployment.
* Prepared the application for deployment using services such as MOngodb atlas , RENder, and VERCel

# Pavna School — Redesign (MERN Stack Assessment Project)

A ground-up redesign of the Pavna School, Aligarh website, built as a full MERN application
(MongoDB, Express, React, Node). Original content and purpose preserved; UI, UX, architecture,
and code are independently rebuilt.

## What changed vs. the original site

| Area | Original site | This redesign |
|---|---|---|
| Stack | WordPress + Elementor page builder | Custom React (Vite) frontend + Express/MongoDB API |
| Navigation | Flat nested dropdowns, no mobile drawer pattern | Sticky nav, real animated mobile drawer, active-route highlighting |
| Forms | None functional (static markup only) | Contact & Admission Enquiry forms wired to a real backend, validated both client- and server-side |
| Responsiveness | Breakpoints inconsistent, text/image overflow on tablet | Mobile-first Tailwind layout, tested at 375 / 768 / 1280 / 1536px |
| Accessibility | No skip link, weak focus states, decorative-only headings | Skip-to-content link, visible focus rings, semantic headings, `aria-expanded`/`aria-live` on interactive components |
| Performance | Elementor bloat (many blocking CSS/JS files, large uncompressed images) | Route-based code splitting, gzip build output, lazy-loaded pages, minimal dependency footprint |
| Animation | None | Deliberate, restrained motion (page-load reveal, scroll-triggered reveals, counted-up stats) — respects `prefers-reduced-motion` |
| Content structure | Duplicated sections (same content rendered twice in markup) | Single source of truth in `src/data/content.js`, rendered once per section |

## Design system

- **Palette:** Ink Navy `#142033`, Chalk `#EDEFE9`, Marigold `#E8A33D`, Oxblood `#7A2431`, Pine `#2F7A4D`
- **Type:** Space Grotesk (display), Inter (body), Lora italic (editorial accents/quotes)
- **Signature element:** the "Legacy Ledger" — a ruled, register-style timeline used for the school's
  28-year history, echoing the vernacular of an actual school attendance/mark register

## Project structure

```
pavna-redesign/
├── backend/                 # Express + MongoDB API
│   ├── config/db.js
│   ├── models/               # ContactMessage, EnquiryForm
│   ├── routes/               # /api/contact, /api/enquiry
│   ├── server.js
│   └── .env.example
└── frontend/                 # React 18 + Vite + Tailwind
    ├── src/
    │   ├── components/       # Navbar, Footer, Hero, forms, etc.
    │   ├── pages/             # Home, About, Academics, Admissions, Gallery, Contact
    │   ├── data/content.js    # Single source of site copy/content
    │   └── index.css
    └── .env.example
```

## Prerequisites

Install these once on your machine:

1. **Node.js** v18 or later (v20 LTS recommended) — https://nodejs.org
2. **MongoDB** — either:
   - Install locally: https://www.mongodb.com/docs/manual/installation/, or
   - Use a free cloud cluster on **MongoDB Atlas**: https://www.mongodb.com/cloud/atlas/register
     (copy the connection string it gives you — you'll need it below)
3. **Git** — https://git-scm.com/downloads
4. A code editor (VS Code recommended)

## Setup — Backend

```bash
cd pavna-redesign/backend
npm install
cp .env.example .env
```

Open `.env` and set your values:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/pavna_school   # or your Atlas connection string
CLIENT_ORIGIN=http://localhost:5173
```

Start MongoDB locally if you're not using Atlas (in a separate terminal):

```bash
mongod
```

Then run the API:

```bash
npm run dev     # nodemon, auto-restarts on changes
# or
npm start       # plain node
```

You should see:

```
MongoDB connected: 127.0.0.1
Server running on http://localhost:5000
```

Verify it's alive: open `http://localhost:5000/api/health` in a browser — it should return `{"status":"ok", ...}`.

## Setup — Frontend

In a **new terminal**:

```bash
cd pavna-redesign/frontend
npm install
cp .env.example .env
```

`.env` already points at `http://localhost:5000` by default — only change `VITE_API_BASE_URL`
if your backend runs somewhere else.

Run the dev server:

```bash
npm run dev
```

Open the URL it prints (default `http://localhost:5173`). The site is now running with the
Contact and Admission forms submitting live to your local MongoDB.

## Building for production

```bash
cd frontend
npm run build      # outputs to frontend/dist
npm run preview    # serve the production build locally to sanity-check it
```

Deploy `frontend/dist` to any static host (Vercel, Netlify, Render static site), and deploy
`backend/` to any Node host (Render, Railway, Fly.io). Set the same environment variables there
that you set locally, and update `VITE_API_BASE_URL` in the frontend's production env to point
at your deployed backend URL.

## Git & GitHub workflow (for the assessment submission)

```bash
cd pavna-redesign
git init
git add .
git commit -m "Initial commit: MERN redesign of Pavna School website"
```

Create a new empty repository on GitHub (no README/gitignore, since you already have them), then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Suggested extra commits to show iterative work (rather than one giant commit) if you have time
before the deadline:
- `feat: scaffold backend with Express + Mongoose`
- `feat: build design system and shared components`
- `feat: implement Home, About, Academics pages`
- `feat: connect Admission & Contact forms to API`
- `chore: add accessibility and performance polish`

## Notes for the reviewer

- Gallery images are intentionally placeholder color blocks (the grid, lazy-loading, and
  responsive `aspect-ratio` behavior are fully built — swap in real campus photography by
  replacing the `<figure>` content in `src/pages/Gallery.jsx`).
- Both forms perform real client-side validation (`required`, email format) and real
  server-side validation (`express-validator`), and persist submissions to MongoDB.
- Rate limiting is applied to both form endpoints (`express-rate-limit`) as a basic anti-spam
  measure appropriate for a production-facing school website.
