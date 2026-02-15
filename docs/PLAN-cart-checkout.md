# Plano de Implementação: Carrinho e Checkout Brutalista

**Objetivo:** Transformar a experiência de compra aplicando o "Streetwear Brutalism" no Carrinho (Lateral) e criar a página de Checkout (atualmente inexistente).

## 1. Carrinho (Drawer)
Arquivo: `src/components/common/cart.tsx` e `cart-item.tsx`

### Problemas Atuais
- Estilo genérico `shadcn/ui` (arredondado, soft).
- Imagens pequenas e arredondadas.
- Botão "Finalizar compra" sem ação.

### Solução Brutalista
- **Header:** "SEU CARRINHO" (Uppercase, Black, Sublinhado Grosso).
- **Lista de Itens:**
  - **Imagens:** Quadradas (`rounded-none`), borda fina preta.
  - **Controles:** Seletor de quantidade quadrado (igual à PDP).
  - **Remover:** Botão de lixeira com hover agressivo (vermelho/preto).
- **Resumo:**
  - Separadores grossos (`border-t-2 border-black`).
  - Total em destaque (`bg-primary text-primary-foreground`).
- **Ação:** Link para `/checkout`.

## 2. Página de Checkout (Nova)
Arquivo: `src/app/checkout/page.tsx`

### Estrutura
- **Layout:** Grid 2 Colunas (Desktop).
  - **Esquerda:** Formulário de Dados (Endereço, Pagamento).
  - **Direita:** Resumo do Pedido (Sticky).

### Estilo Brutalista
- **Inputs:** `rounded-none`, `border-2`, focus com `ring-0` e sombra dura.
- **Seções:** Caixas delimitadas por bordas grossas.
- **Títulos:** Steps numerados (ex: "01. ENVIO", "02. PAGAMENTO").

## 3. Plano de Execução

### Fase 1: Redesign do Carrinho (Drawer)
- [x] Refatorar `CartItem` (remover arredondamentos, ajustar layout).
- [x] Atualizar `Cart` (Header, Resumo e Botão de Checkout).
- [x] Adicionar Link para `/checkout`.

### Fase 2: Construção do Checkout
- [x] Criar rota `src/app/checkout/page.tsx`.
- [x] Criar componentes de formulário brutalistas (`Input`, `Label`).
- [x] Implementar layout visual (sem integração de pagamento real por enquanto, apenas UI).

## 4. Verificação
- [x] **Visual:** Verificar consistência com PDP/Home.
- [x] **Fluxo:** Adicionar item -> Abrir Carrinho -> Clicar Checkout -> Ver Página.
