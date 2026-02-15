# Plano: Refresh de Copywriting (Soft Brutalism)

## 📌 Contexto
O usuário deseja suavizar a estética "Hard Brutalism" dos textos, mantendo o impacto visual (layout/design) mas tornando a linguagem mais neutra, legível e padrão de e-commerce.

**Diretrizes Aprovadas:**
1.  **Capitalização**: Manter **ALL CAPS**.
2.  **Formatação**: Remover `_` (underscores) entre as palavras.
3.  **Vocabulário**: Padrão E-commerce (ex: "Catálogo", "Carrinho").
4.  **Tom**: Minimalista e Direto.

## 🎯 Objetivo
Substituir todos os textos "edgy" (com underscores e termos técnicos como MANIFEST/SECTOR) por versões limpas e funcionais em todo o site.

## 🛠️ Estratégia de Implementação

### 1. Global (Header & Footer)
-   `FULL_CATALOG` → `TODA A COLEÇÃO`
-   `SEARCH_DATABASE` → `BUSCAR PRODUTO`
-   `CART_IS_EMPTY` → `SEU CARRINHO ESTÁ VAZIO`
-   `SYSTEM_STATUS` → `STATUS` ou Remover
-   `NEWSLETTER_RITUAL` → `NEWSLETTER`

### 2. Página Inicial (Hero & Seções)
-   `LATEST_DROP` → `LANÇAMENTOS`
-   `VIEW_COLLECTION` → `VER COLEÇÃO`
-   `FEATURED_ITEMS` → `DESTAQUES`

### 3. Catálogo & Produtos
-   `ARCHIVE_INDEX` → `CATÁLOGO`
-   `FILTER_matrix` → `FILTROS`
-   `SORT_BY` → `ORDENAR POR`
-   `ADD_TO_CART` → `ADICIONAR AO CARRINHO`
-   `OUT_OF_STOCK` → `ESGOTADO`

### 4. Carrinho & Checkout
-   `INITIATE_CHECKOUT` → `FINALIZAR COMPRA`
-   `ORDER_SUMMARY` → `RESUMO DO PEDIDO`
-   `SHIPPING_CALC` → `CALCULAR FRETE`
-   `PLACE_ORDER` → `CONFIRMAR PAGAMENTO`

### 5. Página 404
-   `SYSTEM_ERROR` → `PÁGINA NÃO ENCONTRADA`
-   `OBJECT_NOT_FOUND` → `ERRO 404`
-   `RETURN_TO_BASE` → `VOLTAR AO INÍCIO`
-   Texto descritivo: "A página que você procura não existe ou foi removida."

## 📋 Plano de Execução

### Fase 1: Frontend (`frontend-specialist`)
- [ ] Atualizar `src/components/common/header.tsx`
- [ ] Atualizar `src/components/common/footer.tsx`
- [ ] Atualizar `src/app/page.tsx` (Hero)
- [ ] Atualizar `src/app/catalog/page.tsx` & Sidebar
- [ ] Atualizar `src/components/common/cart.tsx`
- [ ] Atualizar `src/app/checkout/page.tsx`
- [ ] Atualizar `src/app/not-found.tsx`

### Fase 2: Verificação (`test-engineer`)
- [ ] Verificar se sobrou algum `_` indesejado nos textos visíveis.
- [ ] Garantir que o layout não quebrou com textos mais longos (ex: "ADICIONAR AO CARRINHO").

## Equipe Recomendada
1.  **Project Planner**: (Eu) Definição.
2.  **Frontend Specialist**: Edição em massa dos arquivos TSX.
3.  **Test Engineer**: Validação visual.

## Critérios de Sucesso
- Zero underscores visíveis em títulos/botões.
- Linguagem clara e funcional.
- Design brutalista mantido (apenas texto mudou).
