# Plano: Integração de Vídeo 404 (Typographic Portal)

## 📌 Contexto
O usuário selecionou a **Opção A: The Typographic Portal** para a página de erro 404.
- **Asset**: `public/404.mp4`
- **Conceito**: O vídeo é exibido **dentro** ou **estilizado** no espaço do caractere "0", substituindo a imagem estática. Funciona como uma "janela para outra dimensão".
- **Estética**: Brutalista, Glitch, Scanlines (manter o que já foi construído).

## 🎯 Objetivo
Substituir a lógica atual de imagem (`404-rebel.png`) por uma tag `<video>` otimizada, mantendo os efeitos de glitch e a integração visual (multiply blending se necessário, ou máscaras).

## 🛠️ Estratégia de Implementação

### 1. Integração de Vídeo (`frontend-specialist`)
- **Tag HTML**: Usar `<video autoPlay loop muted playsInline>` para garantir reprodução automática.
- **Posicionamento**: Substituir o container da imagem pelo vídeo.
- **Estilo**:
    - Manter as dimensões responsivas do "0".
    - Aplicar `object-cover` ou `object-contain` conforme necessário para preencher o "buraco".
    - **Filtros**: Manter os efeitos de glitch (contrast, brightness) que já existem na animação do Framer Motion.
    - **Blending**: Testar se `mix-blend-multiply` ainda é necessário (depende se o vídeo tem fundo branco ou é full-frame). O "Portal" sugere um recorte ou frame.
    - **Overlay**: Manter Scanlines e Noise sobre o vídeo.

### 2. Efeitos de Glitch (`frontend-specialist`)
- Adaptar o "RGB Split" para usar clones do vídeo (se performático) ou remover se o vídeo já tiver movimento suficiente. *Nota: Clonar vídeos pode ser pesado. Vamos tentar manter a animação de deslocamento (translate/jitter) no container do vídeo.*

## 📋 Plano de Execução

### Fase 1: Frontend (`frontend-specialist`)
- [ ] Atualizar `src/app/not-found.tsx`.
- [ ] Substituir `Image` por `video`.
- [ ] Ajustar propriedades de reprodução (`muted`, `loop`).
- [ ] Refinar CSS para garantir que o vídeo se integre ao fundo.

### Fase 2: Verificação (`test-engineer`)
- [ ] Verificar console loops/erros.
- [ ] Linting (`npm run lint`).
- [ ] Validar responsividade.

## Equipe Recomendada
1.  **Project Planner**: (Eu) Definição do plano.
2.  **Frontend Specialist**: Implementação React/Video.
3.  **Test Engineer**: Validação.

## Critérios de Sucesso
- O vídeo roda automaticamente sem som.
- O vídeo se encaixa perfeitamente entre os números "4" e "4".
- A estética "glitch" é preservada.
