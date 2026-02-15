# Plan: Cart & Checkout Redesign (Typographic Chaos)

## Overview
Redesign the existing Cart drawer and Checkout page for **Bewear** to align with a radical "Streetwear Brutalism" aesthetic. The goal is to move away from standard SaaS layouts and embrace a fragmented, high-impact typographic design.

## Project Type
**WEB** (Next.js / Tailwind CSS)

## Success Criteria
- [ ] Cart drawer replaced/refactored with "Fragmented Typographic" layer.
- [ ] Checkout page 70/30 split abolished in favor of "Asymmetric Chaos".
- [ ] Massive display typography (headers taking up 40-50% of viewport).
- [ ] 0px border-radius and high-contrast (Black/White/Signal Orange).
- [ ] Mobile-first responsive layouts that maintain tension.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS v4 (Vanilla CSS tokens)
- **Icons**: Lucide React
- **Animations**: Framer Motion (for staggered fragments)

## File Structure
- `src/components/common/cart.tsx` (REFACTOR)
- `src/components/common/cart-item.tsx` (MODIFY)
- `src/app/checkout/page.tsx` (REFACTOR)

## Task Breakdown

### Phase 1: Cart Redesign (Typographic Chaos)
- [ ] **Task ID: cart-layout**
  - **Name**: Fragmented Cart Layout
  - **Agent**: `frontend-specialist`
  - **Description**: Replace the standard `Sheet` with a custom full-screen/layered fragment system.
  - **INPUT**: `src/components/common/cart.tsx`
  - **OUTPUT**: Radical cart overlay with massive background "CARRINHO" title.
  - **VERIFY**: Check layout tension and overlapping layers.

- [ ] **Task ID: cart-items**
  - **Name**: Fragmented Cart Items
  - **Agent**: `frontend-specialist`
  - **Description**: Redesign `CartItem` to look like shipping labels or manifesto fragments.
  - **INPUT**: `src/components/common/cart-item.tsx`
  - **OUTPUT**: Item cards with sharp borders and mono typography.
  - **VERIFY**: Visual audit for brutalist alignment.

### Phase 2: Checkout Redesign (Asymmetric Tension)
- [ ] **Task ID: checkout-topology**
  - **Name**: Abolish 70/30 Checkout
  - **Agent**: `frontend-specialist`
  - **Description**: Fragment the checkout sections (Identificação, Entrega, Pagamento) into scattered, overlapping boxes.
  - **INPUT**: `src/app/checkout/page.tsx`
  - **OUTPUT**: A checkout page that looks like an editorial spread.
  - **VERIFY**: Ensure form functionality remains intuitive despite the chaos.

- [ ] **Task ID: checkout-typography**
  - **Name**: Massive Checkout Display
  - **Agent**: `frontend-specialist`
  - **Description**: Add massive vertical/horizontal headers and mono-spaced technical details.
  - **INPUT**: `src/app/checkout/page.tsx`
  - **OUTPUT**: Integrated massive "PAGAMENTO" / "ENTREGA" display text.
  - **VERIFY**: Manual visual check.

### Phase X: Final Verification
- [ ] **Task ID: verification**
  - **Name**: Final Design Audit
  - **Agent**: `frontend-specialist`
  - **Description**: Run `ux_audit.py` and manual checks for "Standard SaaS Safe Harbor" violations.
  - **VERIFY**: `python .agent/skills/frontend-design/scripts/ux_audit.py .`
