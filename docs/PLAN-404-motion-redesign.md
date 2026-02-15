# Plano: Redesign de Motion da Página 404 (Glitch Sketch)

## 📌 Contexto
O usuário rejeitou a implementação inicial da página 404.
- **Problema 1 (Visual)**: A imagem do mascote (`404-rebel.png`) tem um fundo quadrado branco que não se mistura com o grid do site.
- **Problema 2 (Motion)**: A animação atual é apenas um tremor ("jitter") sutil e não passa a sensação de "vídeo" ou "algo legal" que o usuário deseja.

## 🎯 Objetivo
Transformar a imagem estática em uma "transmissão de vídeo corrompida" que se integre perfeitamente ao fundo brutalista.

## 🛠️ Estratégia de Implementação

### 1. Fix de Integração Visual (Blending)
- **Técnica**: Usar CSS `mix-blend-mode: multiply` (ou `darken`) na imagem.
- **Resultado**: O fundo branco da imagem ficará transparente, mantendo apenas os traços pretos do sketch.
- **Benefício**: Faz o desenho parecer feito diretamente no papel de fundo (grid), eliminando a "caixa branca".

### 2. Upgrade de Animação (TV Glitch / Scanlines)
- **Camada de Scanlines**: Adicionar uma superposição de linhas horizontais animadas (CSS `linear-gradient` animado).
- **RGB Split (Aberração Cromática)**: Criar 2 clones da imagem (Vermelho/Azul) com baixa opacidade que tremem violentamente em intervalos aleatórios.
- **Ruído (Noise)**: Adicionar granulação animada para simular vídeo analógico.

### 3. Layout "Sistema Falho"
- Manter a tipografia massiva "4 4".
- Adicionar "glitches" no texto também, piscando ou trocando caracteres aleatoriamente.

## 📋 Plano de Execução

### Fase 1: Refatoração Visual (`frontend-specialist`)
- [ ] Aplicar `mix-blend-mode: multiply` na imagem do Rebel.
- [ ] Implementar overlay de Scanlines (linhas de TV CRT).
- [ ] Implementar efeito de RGB Split usando `::before` e `::after` ou camadas duplicadas.

### Fase 2: Refatoração de Motion (`frontend-specialist`)
- [ ] Criar animação keyframe agressiva (distorção, skew, scale).
- [ ] Adicionar ruído de fundo (GIF ou CSS noise).

### Fase 3: Verificação (`test-engineer`)
- [ ] Verificar se o fundo branco sumiu.
- [ ] Verificar performance da animação.

## Equipe Recomendada
1.  **Project Planner**: (Eu) Definição do plano.
2.  **Frontend Specialist**: Implementação avançada de CSS/Motion.

## Critérios de Sucesso
- A imagem parece desenhada no fundo (sem caixa branca).
- A animação parece um "vídeo quebrado" ou "sinal perdido".
- O usuário aprova o fator "cool".
