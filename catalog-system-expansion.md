# Plan: Catalog & System Features Expansion

Implement the selected brutalist features to enhance system feedback and browsing capabilities.

## Overview
- **Project Type**: WEB (Next.js/React)
- **Goal**: Add "System Alerts" (Toasts), "Quant Box" (Cart Badge), and "The Archive" (Catalog Page) following the "Streetwear Brutalism" aesthetic.

## Selected Options
1.  **Toasts**: Option A (The Terminal Log)
    -   Jet Black background, White Monospace text, 0px border radius.
2.  **Cart Badge**: Option A (The Quant Box)
    -   Static `[ N ]` counter attached to the cart icon.
3.  **Catalog**: Option A (The Archive - Dense Grid)
    -   4-column grid, sticky sidebar filters, minimal "stockroom" aesthetic.

## Success Criteria
- [ ] Global Toasts (Sonner) styled as "Terminal Logs".
- [ ] Header Cart Icon displays accurate item count in a `[ N ]` box.
- [ ] New `/catalog` route implements the "Archive" grid with functional filters.
- [ ] Catalog page supports filtering by category and sorting.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **State**: React Query (for cart count and products)
- **Components**: Sonner (Toasts)

## File Structure & Impact
### [Feature] System Alerts
- #### [MODIFY] [layout.tsx](file:///d:/dev/bewear/src/app/layout.tsx)
  - Configure `Toaster` with custom `toastOptions` for the "Terminal Log" style.

### [Feature] Cart Badge
- #### [MODIFY] [header.tsx](file:///d:/dev/bewear/src/components/common/header.tsx)
  - Fetch cart data (item count).
  - Render the `[ N ]` badge conditionally.

### [Feature] Catalog Page
- #### [NEW] [page.tsx](file:///d:/dev/bewear/src/app/catalog/page.tsx)
  - Main entry point for the catalog.
- #### [NEW] [filter-sidebar.tsx](file:///d:/dev/bewear/src/components/catalog/filter-sidebar.tsx)
  - Sticky sidebar with "Checkboxes" style filters.
- #### [NEW] [product-grid.tsx](file:///d:/dev/bewear/src/components/catalog/product-grid.tsx)
  - 4-column dense grid implementation.

## Task Breakdown

### Phase 1: Planning (Complete)
- [x] Brainstorm design options (`catalog_features_brainstorm.md`)
- [x] Create implementation plan (`catalog-system-expansion.md`)

### Phase 2: Implementation (Parallel)
| Task ID | Name | Agent | Skill | Priority | INPUT → OUTPUT → VERIFY |
|---------|------|-------|-------|----------|-------------------------|
| T1 | **System Toasts** | `frontend-specialist` | `frontend-design` | P2 | `layout.tsx` → Styled Sonner → Trigger test toast |
| T2 | **Cart Quant Badge** | `frontend-specialist` | `react-best-practices` | P2 | `header.tsx` → Badge component → Add item & Verify count |
| T3 | **Catalog Architecture** | `backend-specialist` | `api-patterns` | P1 | DB Query (Products + Filters) → Server Action/API → Data verification |
| T4 | **Catalog UI** | `frontend-specialist` | `frontend-design` | P1 | `catalog/page.tsx` → Brutalist Grid + Sidebar → Visual check |

### Phase 3: Verification
- [ ] Run `npx eslint .`
- [ ] Run `python .agent/skills/frontend-design/scripts/ux_audit.py .`
- [ ] Manual test: formatting of toasts, accurate cart count, filter functionality.

## Phase X: Final Verification
- Lint: [ ]
- Security: [ ]
- UX Audit: [ ] 
- Date: [Pending]
