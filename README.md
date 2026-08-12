# LP Ads — Eneven Tech · lp.eneven.com.br

Landing page independente para campanha de Google Ads, focada no serviço de
**criação de landing pages**. Objetivo único: levar o visitante ao WhatsApp.

Pasta autossuficiente — não depende do Eleventy nem do resto do repositório.
Pode ser copiada inteira para qualquer hospedagem.

---

## Como abrir localmente

Basta abrir o `index.html` no navegador. Para testar como servidor:

```bash
npx serve .
```

---

## Estrutura

```
projeto-LP-ads/
├── index.html              Página completa
├── llms.txt                Apresenta o negócio para IAs (parte da estratégia GEO)
├── robots.txt              Libera rastreadores de IA de propósito
├── sitemap.xml
├── PROMPTS-IMAGENS.md      Prompts prontos para gerar as imagens
└── assets/
    ├── css/style.css
    ├── js/app.js
    └── img/                Logo (versão clara para fundo escuro) e fotos
```

---

## Antes de publicar — o que precisa mudar

1. **Google Analytics / Ads** — cole a tag antes de `</head>` no `index.html`.
   O rastreio de cliques já está pronto no `app.js` e dispara sozinho assim que
   o `gtag` existir.

2. **Imagem de compartilhamento** — gere a imagem do item 1 do
   `PROMPTS-IMAGENS.md` e salve como `assets/img/og-lp.jpg`. É o que aparece
   quando alguém manda o link no WhatsApp.

3. **Confirme os valores** — R$ 397, 20%/80%, 72h e 30 dias estão no HTML e
   também no `llms.txt`. Se mudar um, mude nos dois.

---

## Publicando no subdomínio

Suba o conteúdo da pasta na raiz do `lp.eneven.com.br`. Não precisa de build.

**Netlify / Vercel:** arraste a pasta, sem comando de build.
**Hospedagem tradicional:** envie tudo por FTP para a pasta do subdomínio.

Depois de publicar, cadastre `https://lp.eneven.com.br/sitemap.xml` no Google
Search Console.

---

## Rastreio de conversão

Cada botão de WhatsApp dispara o evento `clique_whatsapp` com a seção de origem:

| Origem | Onde fica |
|---|---|
| `menu-topo` / `menu-mobile` | Navegação |
| `hero` | Primeiro botão da página |
| `geo` | Seção GEO & AEO |
| `entrega` | Bloco de agendamento automático |
| `invest` | Bloco de preço |
| `final` | Chamada final |
| `rodape` | Telefone no rodapé |
| `botao-flutuante` | Botão verde flutuante |

No GA4, marque `clique_whatsapp` como conversão e importe para o Google Ads.
Assim você descobre qual seção convence mais e otimiza a campanha por ela.

---

## Decisões tomadas

- **Sem quiz** — o clique vai direto para o WhatsApp, com mensagem já escrita
  indicando de onde o lead veio. Menos atrito em tráfego pago.
- **Hospedagem e domínio sem valor à mostra** — a página avisa que ficam à parte
  e que o domínio é registrado no nome do cliente, mas em nota discreta.
  Os valores você passa na conversa.
- **Sem banner de LGPD/cookies** — a página não usa cookies próprios. Se você
  adicionar o Google Analytics, avalie incluir o aviso.
- **Sem imagens pesadas** — todo o visual é CSS. A página inteira pesa ~14 KB,
  o que ajuda no índice de qualidade do Google Ads e derruba o custo por clique.
