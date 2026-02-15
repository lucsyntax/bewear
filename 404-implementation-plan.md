# Plan: Brutalist 404 Page (The Lost Sector)

Implement a high-impact 404 page featuring an animated graffiti character as the "0".

## Overview
- **Goal**: Create `src/app/not-found.tsx` with a "Streetwear Brutalism" aesthetic.
- **Key Element**: The "0" in "404" will be replaced by "The Spray Can Rebel" (Graffiti Sketch Option A).
- **Animation**: "Boiling Line" effect (frame-by-frame jitter) or Glitch effect to bring the static sketch to life.

## Selected Options
- **Character**: Option A (Spray Can Rebel).
- **Technique**: Generate static sketch assets → Animate via CSS/Framer Motion.

## Success Criteria
- [ ] 404 Page renders at `/random-url` (and triggers correctly).
- [ ] Massive "4 4" typography frames the center character.
- [ ] "Spray Can Rebel" character is visible and animated (glitch/jitter).
- [ ] "Return to Base" button works.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (for the character jitter/reveal).
- **Assets**: AI Generated Sketch (saved to `/public`).

## File Structure & Impact
### [NEW] [not-found.tsx](file:///d:/dev/bewear/src/app/not-found.tsx)
-   Main error page component.
-   Uses `layout.tsx` (so header/footer remain? Or maybe a raw layout? Standard `not-found.tsx` usually inherits root layout).

### [ASSET] Spray Can Rebel
-   Generate an image: `public/404-graffiti-rebel.png`.

## Task Breakdown

### Phase 1: Planning (Complete)
- [x] Brainstorm options (`404_page_brainstorm.md`, `404_character_brainstorm.md`).
- [x] Create implementation plan (`404-implementation-plan.md`).

### Phase 2: Implementation (Parallel)
| Task ID | Name | Agent | Skill | Priority | INPUT → OUTPUT → VERIFY |
|---------|------|-------|-------|----------|-------------------------|
| T1 | **Asset Generation** | `frontend-specialist` | `web-design-guidelines` | P1 | `generate_image` → `public/404-rebel.png` → Visual Check |
| T2 | **Page Structure** | `frontend-specialist` | `frontend-design` | P1 | `not-found.tsx` → Layout with big text → Browser check |
| T3 | **Animation** | `frontend-specialist` | `frontend-design` | P2 | Framer Motion Component → Jitter Effect → Browser check |

### Phase 3: Verification
- [ ] Run `npm run lint`.
- [ ] Manual test: Navigate to a non-existent URL.

## Phase X: Final Verification
- Lint: [ ]
- Security: [ ]
- Date: [Pending]
