# Plano de Implementação: Brutalismo nas Páginas Internas

**Objetivo:** Transformar as páginas de Produto (PDP) e Categoria (PLP) seguindo a estética "Streetwear Brutalism" já implementada na Home.

## 1. Página de Detalhes do Produto (PDP)
Arquivo: `src/app/product-variant/[slug]/page.tsx`

### Problemas Atuais
- Layout vertical simples demais.
- Tipografia genérica.
- Imagem com bordas arredondadas (inconsistente com Brutalismo).
- Seção de "Detalhes" e "Descrição" sem destaque.

### Solução Brutalista
- **Layout:** Grid assimétrico (Desktop: 6 cols imagem / 6 cols info). Mobile: Full width.
- **Imagens:**
  - Remover `rounded-3xl`.
  - Adicionar borda grossa (`border-2 border-border`).
  - Efeito de "Hard Shadow" no container da imagem principal.
- **Tipografia:**
  - Nome do Produto: `font-inter mb-4 text-4xl uppercase font-black tracking-tighter`.
  - Preço: `font-mono text-2xl bg-primary text-primary-foreground px-2 py-1 inline-block transform -rotate-2`.
- **Componentes:**
  - `VariantSelector`: Botões quadrados, borda grossa, sem arredondamento. Active state: preto sólido.
  - `ProductActions` (Botão Adicionar): Full width, uppercase, hover agressivo (inverter cores).
  - `Description`: Accordion estilo industrial (linhas divisórias grossas).

## 2. Página de Categoria (PLP)
Arquivo: `src/app/category/[slug]/page.tsx`

### Problemas Atuais
- Grid básico `grid-cols-2`.
- Título pequeno.
- Sem filtros ou ordenação (fora do escopo agora, mas layout deve prever).

### Solução Brutalista
- **Header:**
  - Título Gigante: `text-6xl uppercase font-black tracking-tighter`.
  - Sublinhado grosso ou fundo de destaque.
- **Grid de Produtos:**
  - Reutilizar lógica responsiva da Home: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
  - Card de produto já está estilizado (`ProductItem`), apenas garantir espaçamento correto.
- **Navegação (Breadcrumb):**
  - Estilo "Path de arquivo" (ex: `HOME / CAMISETAS / OVERSIZED`).

## 3. Plano de Execução

### Fase 1: Componentes da PDP
- [ ] Refatorar `VariantSelector` (brutalist style).
- [ ] Criar novo componente `ProductGallery` (se houver mais fotos) ou estilizar imagem única.
- [ ] Estilizar `ProductActions`.

### Fase 2: Layout da PDP
- [ ] Implementar Grid `md:grid-cols-2` na página.
- [ ] Aplicar tipografia e badges no preço.

### Fase 3: Layout da PLP
- [ ] Criar Header de Categoria Brutalista.
- [ ] Atualizar Grid para `lg:grid-cols-4`.

## 4. Verificação
- [ ] **Visual**: Verificar alinhamento, bordas e sombras (Desktop e Mobile).
- [ ] **Navegação**: Testar fluxo Home -> Categoria -> Produto.
- [ ] **Responsividade**: Garantir que nada quebre em telas pequenas.
