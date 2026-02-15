# Plano: Redesign de Layout da Página 404 (Video Center)

## 📌 Contexto
O usuário solicitou um novo layout para a página 404.
- **Feedback**: O layout anterior não agradou.
- **Requisito 1**: Manter o vídeo `public/404.mp4` como peça central (substituindo o "0").
- **Requisito 2**: **NÃO inverter as cores** do vídeo (remover `invert` e `hue-rotate`).
- **Estilo**: Streetwear Brutalism (mantendo a coerência com o resto do site).

## 🎯 Objetivo
Criar um layout impactante onde o vídeo é o protagonista, sem distorções de cor, mantendo a identidade da marca.

## 🛠️ Estratégia de Implementação

### 1. Novo Layout (`frontend-specialist`)
- **Conceito**: "The Monolith".
- **Estrutura**:
    - O vídeo será maior, ocupando mais destaque.
    - A tipografia "4" e "4" ao redor pode ser ajustada para não competir tanto, ou integrada de forma mais limpa.
    - Remover filtros de inversão de cor do vídeo.
    - Manter o vídeo em loop, autoplay, muted.
- **Motion**:
    - Manter o "jitter" (tremor) se fizer sentido, ou suavizar para uma apresentação mais "cinematográfica" e menos "glitch caótico" se o glitch estava incomodando (embora o usuário só tenha reclamado do layout e cores). *Assumiremos manter o glitch de movimento, mas limpar as cores.*

### 2. Refatoração Visual
- Remover `invert` e `hue-rotate` das classes do vídeo.
- Ajustar o tamanho do container do vídeo para garantir que ele seja o ponto focal.
- Garantir que o texto "SYSTEM_ERROR" e o botão de retorno estejam bem posicionados.

## 📋 Plano de Execução

### Fase 1: Frontend (`frontend-specialist`)
- [ ] Atualizar `src/app/not-found.tsx`.
- [ ] Remover classes Tailwind `invert` e `hue-rotate`.
- [ ] Ajustar layout CSS (Flexbox/Grid) para destacar o vídeo.
- [ ] Verificar responsividade.

### Fase 2: Verificação (`test-engineer`)
- [ ] Linting.
- [ ] Verificar se o vídeo está com as cores originais.

## Equipe Recomendada
1.  **Project Planner**: Definição.
2.  **Frontend Specialist**: Implementação.
3.  **Test Engineer**: Validação.

## Critérios de Sucesso
- Vídeo com cores originais.
- Layout aprovado pelo usuário (mais limpo/impactante).
