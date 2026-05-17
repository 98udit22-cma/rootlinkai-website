# RootlinkAI Marketing Site — PRD

## Original Problem Statement
Build a marketing website for RootlinkAI, a service business that helps Indian consultants,
coaches, solopreneurs, and small service businesses implement AI and automation in their daily
workflows — without them needing to learn code. Primary goal: lead generation through an inquiry
form. Refined, confident, light-mode editorial aesthetic.

## Tech Stack
- Frontend: React 19 + JavaScript, Tailwind, react-router-dom, sonner (toasts), lucide-react
- Backend: FastAPI + Motor (async MongoDB)
- DB: MongoDB (`db.inquiries`, `db.newsletter`)
- Email: deferred (skip Resend per user choice)

## User Personas
- Indian consultants who want to stop redoing the same workflow
- Coaches running 1:1 practices solo
- Solopreneurs juggling 5 tools to do 1 job
- Small agencies tired of patching things with Zapier

## Core Requirements (static)
- 4 pages: Home, About, Services, Contact
- Sticky nav with "Book a session" CTA scrolling to inquiry form on Home
- Inquiry form fields: name, email, whatsapp, business_type, needs, tools (optional)
- Newsletter signup (MongoDB only) with live subscriber count
- Light-mode editorial design: paper #FAF7F2, ink #141210, moss #1F3D2F, terra #C76E3F
- Fraunces serif headings, Inter body
- Hero "root → link" line animation on page load (1.2s)
- 120–160px vertical section spacing, hairline dividers, max width 1100px

## What's Been Implemented (2026-05)
- Backend endpoints:
  - POST /api/inquiries — store inquiry, returns Inquiry model
  - GET  /api/inquiries — list inquiries (admin/internal)
  - POST /api/newsletter — subscribe (dedup on email)
  - GET  /api/newsletter/count — public count
- Home page with all sections: Hero (root→link SVG draw animation), Who This Is For (moss dots),
  Services (3 numbered rows + hairlines), How We Work (3 steps), 1:1 Session (terracotta tint),
  Trust (3 testimonials), Newsletter (terracotta tint, live count), Inquiry CTA (form + side panel)
- About page (editorial, pull quotes on moss + terra accent rules)
- Services page (expanded 01/02/03 with includes / who it's for / outcomes)
- Contact page (form + email + WhatsApp note + hours block)
- Sticky Nav with mobile menu, smooth-scroll-to-#inquiry, hash-aware
- Footer (3 columns, LinkedIn icon, copyright)
- SEO meta tags + OG tags in index.html
- All interactive elements have data-testid
- 100% pass on testing_agent_v3 iteration 1 (backend + frontend)
- Pytest suite at /app/backend/tests/test_rootlinkai_api.py (11 tests)

## Prioritized Backlog
- P1: Resend integration for inquiry email notification to 98udit22@gmail.com
- P1: Admin route to view inquiries (currently only via GET /api/inquiries)
- P2: Rate limiting / spam protection on public POST endpoints
- P2: Real testimonials & logo wall (once available)
- P2: Honeypot field on inquiry form
- P3: Blog/notes index page once newsletter has posts
- P3: Favicon + custom OG image

## Next Tasks
- Add Resend (or alt) when API key is provided
- Build /admin/inquiries view if user wants in-app dashboard
