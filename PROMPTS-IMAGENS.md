# Prompts de imagem — LP Ads Eneven Tech

Cole cada prompt no ChatGPT (GPT-4o / DALL·E) ou no Midjourney.
**Todas as imagens são opcionais** — a página funciona 100% sem elas, porque o
visual foi construído com CSS. Use estas imagens quando quiser reforçar a
seção com uma foto real.

## Identidade que deve aparecer em todas
- Roxo `#6117C4` · Azul `#21A8E4` · Fundo quase-preto azulado `#080A14`
- Clima: escuro, cinematográfico, tecnológico, brasileiro e real (não stock genérico)
- Sempre pedir: **sem texto, sem letras, sem logos, sem marca d'água**

---

## 1 — Open Graph (compartilhamento no WhatsApp / redes)

**Onde vai:** `assets/img/og-lp.jpg` — é a miniatura que aparece quando alguém
compartilha o link no WhatsApp, Facebook ou LinkedIn.
**Tamanho:** `1200 × 630 px` (proporção 1.91:1)
**Já referenciado no HTML** em `og:image`.

```
Cinematic 8K product photograph of a modern smartphone floating in dark space,
screen glowing with an abstract dark-purple and blue landing page interface,
no readable text on screen. Deep near-black background (#080A14) with soft
violet (#6117C4) and cyan-blue (#21A8E4) volumetric light beams crossing behind
the device. Subtle particle dust in the light. Shot on Hasselblad X2D 100C with
XCD 90mm f/2.5 lens, f/4, studio rim lighting from both sides, high contrast,
premium tech advertising aesthetic. Composition centered with generous negative
space on the left third. No text, no letters, no logos, no watermark.
--ar 1.91:1
```

---

## 2 — Hero (opcional, fundo atrás do título)

**Onde vai:** atrás do `.hero`, como camada de fundo com opacidade baixa (~15%).
**Tamanho:** `2400 × 1400 px`
**Como aplicar:** ver instruções no fim deste arquivo.

```
Cinematic 8K wide shot of a Brazilian small business owner in her early 40s
looking at a glowing smartphone in a dimly lit modern space at night, warm
expression of quiet confidence. Deep near-black environment (#080A14) with
violet (#6117C4) and cyan (#21A8E4) light spilling from the phone onto her
face and hands. Shallow depth of field, bokeh city lights far in the
background. Shot on ARRI Alexa 35 with Zeiss Supreme Prime 50mm T1.5, wide
open, anamorphic flare, cinematic color grade, film grain. Authentic Brazilian
woman, natural skin texture, no makeup gloss. Composition with subject on the
right third, empty dark space on the left for text overlay.
No text, no letters, no logos, no watermark. --ar 12:7
```

---

## 3 — Prova / portfólio (opcional, seção "O que você recebe")

**Onde vai:** dentro do card destacado da seção `.sec-entrega`.
**Tamanho:** `1600 × 1200 px` (4:3)

```
Cinematic 8K photograph of three devices — a smartphone, a tablet and a laptop
— arranged on a dark reflective surface, all screens showing the same abstract
dark landing page layout in purple and blue tones, no readable text. Deep
near-black background (#080A14). Violet (#6117C4) and cyan (#21A8E4) rim light
tracing the edges of each device. Soft reflections on the glossy surface below.
Shot on Phase One IQ4 150MP with Schneider 80mm LS f/2.8, f/8 for full sharpness,
controlled studio softbox lighting from above, premium Apple-style product
photography. Slight high angle, three-quarter view.
No text, no letters, no logos, no watermark. --ar 4:3
```

---

## 4 — Retrato (opcional, seção de depoimentos ou "quem faz")

**Onde vai:** ao lado dos depoimentos, se você quiser aparecer na página.
**Tamanho:** `1000 × 1000 px` (quadrado)
**Observação:** para esta, o ideal é uma **foto sua real** — retrato gerado por
IA em página de vendas pode gerar desconfiança se o cliente perceber.

```
Cinematic 8K portrait of a Brazilian man in his 30s, short dark hair, wearing a
plain dark t-shirt, seated at a desk in a dark home office at night, looking
directly at camera with a calm approachable expression, slight smile. Two
monitors out of focus behind him casting violet (#6117C4) and cyan (#21A8E4)
light on his shoulders and the side of his face. Near-black background
(#080A14). Shot on Sony A1 with 85mm GM f/1.4, wide open, single key softbox
at 45 degrees plus practical monitor backlight, natural skin texture, editorial
tech-founder portrait style. Square crop, subject centered.
No text, no letters, no logos, no watermark. --ar 1:1
```

---

## Como aplicar a imagem de fundo no hero (item 2)

1. Salve a imagem em `assets/img/hero-bg.webp`
2. Adicione ao final de `assets/css/style.css`:

```css
.hero::before{
  content:"";
  position:absolute; inset:0; z-index:-1;
  background:url('../img/hero-bg.webp') center/cover no-repeat;
  opacity:.15;
  mask-image:linear-gradient(180deg,#000 0%,transparent 85%);
  -webkit-mask-image:linear-gradient(180deg,#000 0%,transparent 85%);
}
```

Converta para `.webp` antes de subir (https://squoosh.app) e mantenha cada
imagem **abaixo de 200 KB** para não perder velocidade — velocidade conta
pontos no Google Ads e derruba o custo por clique.
