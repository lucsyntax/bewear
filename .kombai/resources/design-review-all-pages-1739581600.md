# Design Review Results: All Pages

**Review Date**: 2026-02-15  
**Routes**: `/`, `/authentication`, `/checkout`, `/category/[slug]`, `/product-variant/[slug]`  
**Focus Areas**: Visual Design, UX/Usability, Responsive/Mobile, Accessibility, Micro-interactions, Consistency

## Summary

Bewear has a strong brutalist streetwear identity with bold typography, sharp borders, and creative shadow effects. However, there are **critical accessibility violations** (missing button labels, poor color contrast), **semantic HTML gaps** (no `<main>` landmark, wrong `lang` attribute), and several **UX inconsistencies** across pages. The overall design system is cohesive but has room for tightening consistency, especially with the "Add to Cart" button and form patterns.

## Issues

| # | Issue | Criticality | Category | Location |
|---|-------|-------------|----------|----------|
| 1 | **Header Menu and Cart buttons have no accessible name.** Screen readers cannot identify what these icon-only buttons do. Add `aria-label="Menu"` and `aria-label="Carrinho"` respectively. (WCAG 4.1.2) | 🔴 Critical | Accessibility | `src/components/common/header.tsx:30-31` and `src/components/common/cart.tsx:23-24` |
| 2 | **Footer has insufficient color contrast.** Copyright text on the accent (blue) background has a contrast ratio of 2.56:1 (needs 4.5:1). The "Todos os direitos reservados" muted text is even worse at 1.3:1. Use `text-white` or a lighter foreground. (WCAG 1.4.3) | 🔴 Critical | Accessibility | `src/components/common/footer.tsx:4-6` |
| 3 | **HTML `lang="en"` but content is in Portuguese.** The entire app is in Portuguese (pt-BR) but `<html lang="en">` tells assistive technologies it's English, causing incorrect pronunciation. Change to `lang="pt-BR"`. | 🔴 Critical | Accessibility | `src/app/layout.tsx:30` |
| 4 | **No `<main>` landmark on any page.** All pages wrap content in `<>` fragments or `<div>`s with no `<main>` element. Screen reader users cannot quickly jump to main content. Wrap the primary content area in `<main>`. (WCAG best practice) | 🟠 High | Accessibility | `src/app/page.tsx:32-53`, `src/app/checkout/page.tsx:26-163`, `src/app/authentication/page.tsx:9-27` |
| 5 | **Heading hierarchy skips levels on home page.** The page jumps from `<h1>` (hero) directly to `<h3>` (section titles like "Marcas parceiras"), skipping `<h2>`. Use `<h2>` for major page sections. | 🟠 High | Accessibility | `src/components/common/product-list.tsx:18`, `src/components/common/partner-brands.tsx:23` |
| 6 | **Authentication page has no `<h1>` heading.** The page starts with tab triggers and card titles but lacks a primary heading, making it harder for screen readers to understand the page purpose. | 🟠 High | Accessibility | `src/app/authentication/page.tsx:12-25` |
| 7 | **Hero headline "REVOLUTION" gets clipped on mobile (375px).** The text overflows the viewport width, causing horizontal text clipping. The `text-6xl` size is too large for small screens — consider `text-4xl` or `text-5xl` as the base size. | 🟠 High | Responsive | `src/components/home/hero.tsx:24-28` |
| 8 | **Extreme TTFB on home page (~13.8s) due to `force-dynamic`.** The page uses `export const dynamic = "force-dynamic"` which disables all caching. Consider using ISR (`revalidate`) or removing this directive to improve perceived performance. | 🟠 High | Performance | `src/app/page.tsx:1` |
| 9 | **Promo banner text says "Nova coleção Streetwear 2024" — outdated.** The current year is 2026. This stale content undermines brand credibility. Update to the current year or make it dynamic. | 🟠 High | Visual Design | `src/components/home/promo-banner.tsx:25` |
| 10 | **"Adicionar a sacola" button uses `rounded-full` — breaks brutalist consistency.** Every other element in the app uses `rounded-none` (sharp edges) per the brutalist design language (`--radius: 0rem`). This single button uses `rounded-full`, creating a jarring visual inconsistency. | 🟠 High | Consistency | `src/app/product-variant/[slug]/components/add-to-cart-button.tsx:32` |
| 11 | **Typo in header className: `"items centr"`.** Should be `"items-center"`. This means the flex items are not properly vertically centered. | 🟠 High | Visual Design | `src/components/common/header.tsx:27` |
| 12 | **Product images default to grayscale (`grayscale` class).** Users see products in grayscale by default and only see color on hover. This significantly hurts product presentation, especially on mobile where hover doesn't exist. Color should be the default state. | 🟡 Medium | UX/Usability | `src/components/common/product-item.tsx:28` |
| 13 | **Footer uses `<div>` instead of `<footer>` semantic HTML.** The component is named "Footer" but renders a `<div>`. Use the semantic `<footer>` element for better accessibility and SEO. | 🟡 Medium | Accessibility | `src/components/common/footer.tsx:2` |
| 14 | **Double padding on category selector.** Home page wraps categories in `<div className="px-5">` which is already inside a parent with `px-5`, causing 40px total padding on each side. | 🟡 Medium | Visual Design | `src/app/page.tsx:43-45` |
| 15 | **Checkout form has no submit handler or validation.** The form fields are purely visual — there's no `onSubmit`, no form state management (react-hook-form), and no validation. The "Finalizar Pedido" button has no `onClick` handler. | 🟡 Medium | UX/Usability | `src/app/checkout/page.tsx:157-158` |
| 16 | **Sign-up "Criar conta" button is not full-width unlike sign-in button.** In the sign-in form, the "Entrar" button uses `className="w-full"`, but in sign-up the "Criar conta" button doesn't, creating visual inconsistency. | 🟡 Medium | Consistency | `src/app/authentication/components/sign-up-form.tsx:163` |
| 17 | **Partner brand labels invisible until hover.** Brand names have `opacity-0` and only show on hover (`group-hover:opacity-100`). On mobile, hover doesn't exist, so users never see the brand names. Always show labels or use a tooltip alternative. | 🟡 Medium | Responsive | `src/components/common/partner-brands.tsx:41` |
| 18 | **"Novidade" badge hardcoded on every single product.** Every `ProductItem` shows a "Novidade" (New) badge regardless of actual product freshness. This makes the badge meaningless — it should be conditional based on product creation date. | 🟡 Medium | UX/Usability | `src/components/common/product-item.tsx:37-39` |
| 19 | **ProductList receives empty `title=""` on product detail page.** The "Talvez você goste" section title is passed via a separate `<h3>` but then `ProductList` is called with `title=""`, rendering an empty heading container with a border-left style and no text. | 🟡 Medium | Visual Design | `src/app/product-variant/[slug]/page.tsx:101` |
| 20 | **Page content not contained by landmarks.** Axe reports that main content areas (`<div class="space-y-6">`, tab panels) are not inside semantic landmark regions (`<main>`, `<nav>`, `<aside>`). | 🟡 Medium | Accessibility | `src/app/page.tsx:34`, `src/app/authentication/page.tsx:12` |
| 21 | **Checkout payment buttons lack selection state.** The "Cartão de Crédito" and "PIX" buttons look identical when clicked — there's no selected/active state indicating which payment method was chosen. | 🟡 Medium | UX/Usability | `src/app/checkout/page.tsx:98-106` |
| 22 | **Missing `<nav>` wrapper for header navigation.** The header contains navigation elements (logo link, menu, cart) but lacks a `<nav>` wrapper for semantic meaning. | ⚪ Low | Accessibility | `src/components/common/header.tsx:23` |
| 23 | **Pulsing dot in product card has no clear purpose.** Each product card footer has an `animate-pulse` green dot that provides no information or interactivity — it's purely decorative noise. Consider removing it or giving it meaning (e.g., "in stock" indicator with a tooltip). | ⚪ Low | UX/Usability | `src/components/common/product-item.tsx:61` |
| 24 | **Hardcoded shadow values repeated across components.** The brutalist shadow `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` and `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` are used in 10+ places. Extract these as Tailwind utilities or CSS custom properties for maintainability. | ⚪ Low | Consistency | Multiple files |
| 25 | **Cart price badge micro-rotations (`-rotate-1`, `-rotate-2`) may feel janky.** While creative, the slight rotations on price tags in the cart could appear misaligned rather than intentionally playful — especially at smaller text sizes. Test with real users. | ⚪ Low | Micro-interactions | `src/components/common/cart.tsx:80`, `src/components/common/cart-item.tsx:108` |

## Criticality Legend
- 🔴 **Critical** (3 issues): Breaks accessibility standards or core functionality
- 🟠 **High** (8 issues): Significantly impacts user experience, performance, or design quality
- 🟡 **Medium** (9 issues): Noticeable issue that should be addressed
- ⚪ **Low** (5 issues): Nice-to-have improvement

## Next Steps

**Immediate fixes (Critical):**
1. Add `aria-label` to Menu and Cart icon buttons in the header
2. Fix footer text colors for WCAG AA contrast compliance
3. Change `lang="en"` to `lang="pt-BR"` in layout.tsx

**Short-term (High priority):**
4. Add `<main>` landmarks to all pages
5. Fix heading hierarchy (use `<h2>` for section titles)
6. Fix hero text clipping on mobile
7. Evaluate removing `force-dynamic` for better performance
8. Fix `rounded-full` → `rounded-none` on AddToCartButton for consistency
9. Fix `"items centr"` typo in header

**Design refinements (Medium):**
10. Remove default grayscale on product images (keep color as default)
11. Wire up checkout form validation
12. Conditionally show "Novidade" badges
13. Extract repeated shadow values as design tokens
