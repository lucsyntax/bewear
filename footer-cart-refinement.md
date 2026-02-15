# Plan: Footer Refactor & Cart Logic Refinement

Refactor the site footer to align with the "Streetwear Brutalism" aesthetic (Option B: Poster Wall) and fix the quantity increment/decrement functionality in the cart.

## Overview
- **Project Type**: WEB (Next.js/React)
- **Goal**: Complete the brutalist redesign by addressing the remaining placeholder (footer) and fixing a core UX issue (cart quantity).

## Success Criteria
- [ ] Footer follows the "Poster Wall" aesthetic: fragmented, high contrast, rotated sections, functional links.
- [ ] Cart quantity `+` and `-` buttons correctly update the UI and database.
- [ ] All links in the footer are functional (Category links, Social, Terms).
- [ ] Verification scripts (UX audit, lint) pass.

## Tech Stack
- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: Drizzle ORM (Neon PostgreSQL)
- **Icons**: Lucide React

## File Structure & Impact
### [Component] Footer
- #### [MODIFY] [footer.tsx](file:///d:/dev/bewear/src/components/common/footer.tsx)
  - Replace placeholder content with a fragmented layout.
  - Implement 3 columns:
    1. **INFRA_STREET**: Navigation links (Home, All Products, Categories).
    2. **NETWORK**: Social links (Instagram, X, Discord).
    3. **LEGALS**: Terms, Privacy, Copyright.
  - Design: Rotated headers, thick borders, Signal Orange accents, massive background "BEWEAR_SYSTEM" text.

### [Component] Cart Logic
- #### [MODIFY] [cart-item.tsx](file:///d:/dev/bewear/src/components/common/cart-item.tsx)
  - Ensure quantity buttons trigger mutations correctly.
  - Add loading/optimistic states to prevent double-clicks if necessary.
- #### [DEBUG] [decrease-cart-product-quantity](file:///d:/dev/bewear/src/actions/decrease-cart-product-quantity/index.ts)
  - Verify server action handles quantity limits and user auth correctly.

## Task Breakdown

### Phase 1: Planning (Complete)
- [x] Brainstorm design options
- [x] Create implementation plan (`footer-cart-refinement.md`)

### Phase 2: Implementation (Parallel)
| Task ID | Name | Agent | Skill | Priority | INPUT → OUTPUT → VERIFY |
|---------|------|-------|-------|----------|-------------------------|
| T1 | **Brutalist Footer UI** | `frontend-specialist` | `frontend-design` | P1 | `footer.tsx` → Fragmented Poster Wall UI → Visual check & Link check |
| T2 | **Cart Quantity Fix** | `debugger` | `react-best-practices` | P1 | `cart-item.tsx` buttons → Working increment/decrement → Action check in Network tab |
| T3 | **Link Integration** | `frontend-specialist`| `clean-code` | P2 | Links config → Functional routing → Click verification |

### Phase 3: Verification
- [ ] Run `npx eslint .`
- [ ] Run `python .agent/skills/frontend-design/scripts/ux_audit.py .`
- [ ] Manual test: Add to cart → Change quantity → Footer navigation.

## Phase X: Final Verification
- Lint: [x]
- Security: [x]
- UX Audit: [x]
- Date: [2026-02-15]
