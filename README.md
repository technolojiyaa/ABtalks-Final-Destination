# ABTalks — 60-Day Coding Challenge Redesign

Mobile-first redesign for the ABTalks Vibe Code Hackathon.

## Routes

/
 /dashboard
 /day/12

## Highlights

- Cinematic intro sequence: **hi → hello → kinetic block reveal → ABTalks**
- Intro automatically transitions into the landing page.
- Playful auto-rotating visual reel with locally bundled SVG artwork.
- ABTalks 60-day challenge messaging and proof-of-work story.
- Dashboard with streak, today's task, progress, standing, achievements and recovery states.
- Challenge Day 12 with task, requirements, acceptance criteria and GitHub/LinkedIn proof submission.
- Responsive/mobile-first at the required 390px viewport.
- Mock data only; no authentication or production database required.
- `prefers-reduced-motion` is respected.
- Skip intro control is included for returning users/testing.

## Run

Requires Node.js 20.19+ (Node 22 recommended).

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

The project uses React, TypeScript, Vite, Tailwind CSS v4 and Framer Motion.
