# Quiz — o que falta no seu feed (digitalflly)

Quiz de diagnóstico mobile (formato 9:16) que descobre **qual tipo de conteúdo
falta no feed do lead** e entrega o material correspondente. Construído como um
Design Component único e auto-contido — roda como site estático, sem build.

## Como rodar localmente

O projeto precisa ser servido por HTTP (não abra o arquivo via `file://`).
Qualquer servidor estático serve:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

Depois acesse `http://localhost:3000` (ou a porta indicada).

## Estrutura

```
quiz-conteudo.dc.html   ← a aplicação (telas, lógica, pontuação)
support.js              ← runtime do Design Component
_ds/                    ← design system digital flly (tokens, fontes, bundle)
materiais/              ← PDFs entregues em cada resultado
vercel.json             ← rota "/" → o quiz + content-types
```

## Resultados e materiais

Cada resultado baixa o PDF correspondente (pasta `materiais/`):

| Resultado | Material |
|---|---|
| entrada | `guia-produto-de-entrada.pdf` |
| principal | `guia-produto-principal.pdf` |
| mais_caro | `guia-mentoria.pdf` |
| sem_estrutura · quente (tráfego/comercial) | `guia-conteudo-com-funcao.pdf` |
| sem_estrutura · nutrição (orgânico/nenhum) | `guia-base.pdf` |

Só as 6 perguntas de diagnóstico pontuam (Q1 peso 2, Q2–Q6 peso 1); empate no
topo é resolvido pela Q1. Esteira, faturamento e canal são qualificação;
nome, instagram e whatsapp são captura de contato.

## Subir para o GitHub

```bash
git init
git add .
git commit -m "quiz de conteúdo digitalflly"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

## Publicar na Vercel

1. Acesse vercel.com e clique em **Add New → Project**.
2. Importe o repositório do GitHub.
3. Em **Framework Preset**, selecione **Other** (é site estático, sem build).
4. Deixe **Build Command** e **Output Directory** em branco.
5. Clique em **Deploy**.

O `vercel.json` já faz a rota `/` abrir o quiz e define o content-type dos PDFs.

## Notas

- **Botões "baixar material"** já apontam para os PDFs reais em `materiais/`.
- **"falar com a digitalflly"** ainda não tem link — apontar para o wa.me ou
  link do comercial antes de divulgar.
- **Captura de leads**: hoje os dados (nome, @, whatsapp, respostas) ficam só na
  sessão. Para registrar de verdade, conectar a um backend (ex.: Supabase) no
  envio do contato / na tela de resultado.
- **Fonte Berton** (display, hand-pressed) é versão *trial* CC-BY-NC: livre para
  uso não-comercial. Para uso comercial, licenciar a versão paga da fundição
  antes do deploy em produção.
