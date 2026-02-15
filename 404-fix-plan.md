# Plan: Fix 404 Image & Animation

## Problem
The 404 page animation is broken because the image asset `public/404-rebel.png` was not correctly created/moved in the previous attempt.

## Analysis
Found 10+ generated character images in the artifacts directory.
**Winner**: `404_rebel_1771190588579.png` (103KB)
-   High detail.
-   Recent generation.
-   Fits the "Brutalist Sketch" criteria.

## Orchestration Team

### 1. Project Planner
-   **Role**: Define this plan and success criteria.
-   **Skill**: `plan-writing`.

### 2. Frontend Specialist
-   **Role**: Asset management and Code verification.
-   **Tasks**:
    -   Copy `404_rebel_1771190588579.png` -> `public/404-rebel.png`.
    -   Verify `not-found.tsx` renders correctly.
-   **Skill**: `frontend-design`.

### 3. Test Engineer
-   **Role**: System verification.
-   **Tasks**:
    -   Verify file existence.
    -   Check 404 route status.
-   **Skill**: `testing-patterns`.

## Execution Steps
1.  **Move Asset**: Copy the selected artifact to the project `public` folder.
2.  **Verify**: Check file size and existence to prevent 0-byte errors.
3.  **Refine**: If the user wants a "video" feel, we rely on the CSS/Framer Motion jitter already implemented.

## Verification
-   [ ] `public/404-rebel.png` exists (>0 bytes).
-   [ ] `npm run lint` passes.
