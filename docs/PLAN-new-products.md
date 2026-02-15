# Plan: New Products for "Novos Produtos"

> Add 8 new products (at least 1 per category) to the seed data, with AI-generated white-background product images and color variants.
>
> **STATUS: ✅ Seed data added. ⏳ Placeholder images used (replace with real photos later).**

## Current State

| Category | Existing Products | Count |
|----------|------------------|-------|
| Acessórios | Mochila, Meia Alta, Boné Nocta, Boné Curvo | 4 |
| Bermuda & Shorts | Shorts Active, Shorts Core, Shorts Challenger, Bermuda Premier | 4 |
| Calças | Calça Nike Club, Calça Knit, Calça Brooklin, Calça Jordan | 4 |
| Camisetas | Camiseta ACG, Camiseta Run, Camiseta Active, Camiseta Nature | 4 |
| Jaquetas & Moletons | Corta Vento, Jaqueta Windrunner, Jaqueta Style, Jaqueta Nike Club | 4 |
| Tênis | Tênis Nike Vomero, Tênis Nike Panda, Tênis Nike Air Force, Tênis Nike Dunk Low | 4 |

## New Products

### Acessórios
1. **Shoulder Bag** — Bolsa lateral compacta streetwear
   - Variantes: Preta, Bege
   - Preço: R$ 89,99

2. **Bucket Hat** — Chapéu bucket estilo urban
   - Variantes: Preto, Branco, Verde
   - Preço: R$ 69,99

### Bermuda & Shorts
3. **Shorts Fleece** — Shorts de moletom premium
   - Variantes: Cinza, Preto
   - Preço: R$ 74,99

### Calças
4. **Calça Cargo** — Calça cargo com bolsos laterais
   - Variantes: Verde, Preta, Bege
   - Preço: R$ 169,99

### Camisetas
5. **Camiseta Oversized** — Camiseta oversized corte largo
   - Variantes: Preta, Branca, Cinza
   - Preço: R$ 79,99

6. **Regata Training** — Regata para treinos
   - Variantes: Preta, Branca
   - Preço: R$ 49,99

### Jaquetas & Moletons
7. **Moletom Hoodie** — Moletom com capuz e bolso canguru
   - Variantes: Preto, Cinza, Verde
   - Preço: R$ 199,99

### Tênis
8. **Tênis Nike Air Max** — Tênis Nike Air Max com amortecimento a ar
   - Variantes: Preto, Branco, Azul
   - Preço: R$ 899,99

---

## Implementation Steps

### Phase 1: Generate Images (8 products × 2-3 variants = ~20 images)
- ⏳ Using `placehold.co` placeholder images temporarily
- Replace later with: `public/products/{category}/{product-number}/`
- Style: clean product photography, white background, streetwear aesthetic

### Phase 2: Update `seed.ts` ✅
- ✅ Added image URLs to `productImages` object
- ✅ Added product entries to `products` array
- ✅ Follows existing pattern exactly (name, description, categoryName, variants)

### Phase 3: Run Seed ✅
- ✅ Executed `npx tsx src/db/seed.ts` — 32 products, 83 variants, 6 categories
- ✅ Added `placehold.co` to `next.config.ts` remote patterns

### Phase 4: Verify
- Check `localhost:3000` — new products visible in "Novos Produtos"
- Check category pages — new products appear in correct categories
- Verify variant color swatches display correctly

---

## Image Prompt Template

> **White background product photo, [product type] in [color], streetwear fashion, clean studio lighting, e-commerce product photography style, professional, high contrast, centered on white background**

All images will be generated as standalone product shots — no model, no lifestyle context.
