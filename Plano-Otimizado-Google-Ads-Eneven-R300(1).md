# Plano otimizado de Google Ads — Eneven Tech

## Campanha de Landing Page Premium com orçamento total de R$ 300

> **Data da revisão:** 10 de agosto de 2026  
> **Objetivo:** gerar conversas qualificadas no WhatsApp e validar se a Rede de Pesquisa pode adquirir clientes para a Eneven Tech.  
> **Conclusão principal:** o plano original tem uma boa base, mas precisa de ajustes importantes. Com R$ 300, a melhor estratégia é uma única campanha de Pesquisa, muito concentrada, com orçamento total limitado, palavras-chave de intenção comercial, página exclusiva e acompanhamento de leads reais — não apenas cliques no WhatsApp.

---

## 0. Status de execução (atualizado em 18 de agosto de 2026)

O plano abaixo foi executado. Esta seção registra o que foi de fato configurado, incluindo os pontos em que a execução real ficou diferente da recomendação original (por limitação da interface do Google Ads ou por decisão tomada durante a implementação).

### Página (seção 8) — concluído

- Página exclusiva já publicada em `https://lp.eneven.com.br`, com HTTPS válido e domínio próprio (sem `www`; o `www.lp.eneven.com.br` foi configurado como redirecionamento 301 permanente).
- Preço, prazo e escopo já estavam unificados (R$ 397, 72h, copy inclusa) — nenhuma correção de conteúdo necessária nesses pontos.
- Estrutura já seguia o formato enxuto recomendado (hero, diferencial GEO/AEO, entrega, como funciona, investimento, carrossel de projetos, prova social, FAQ, CTA final), sem distrações de outros serviços.
- Corrigido: inconsistência entre `reviewCount: 4` no schema JSON-LD e apenas 3 depoimentos visíveis — adicionado o 4º depoimento real (Emerson Pr, adaptado de outro material da Eneven) e ajustado o grid para 4 colunas.
- Corrigido: os 12 `alt` genéricos do carrossel de templates ("Landing page criada pela Eneven Tech") foram substituídos por descrições específicas por projeto (segmento do cliente + diferenciais), identificadas visualmente imagem por imagem.

### Rastreamento (seção 9) — concluído, com uma adaptação

- Google Tag Manager instalado: `GTM-TQBJ7WML`.
- Google Analytics 4 criado como propriedade separada da `eneven.com.br` (para não misturar tráfego institucional com o da campanha): `G-3F5T7V8ZVF`.
- O evento de clique no WhatsApp **já existia no código** (`app.js`) sob o nome `clique_whatsapp`, disparando para o `dataLayer` com a seção de origem (`secao_origem`). Em vez de renomear para `whatsapp_click` no código, o mapeamento foi feito dentro do GTM: gatilho de evento personalizado `clique_whatsapp` → tag GA4 de evento `whatsapp_click` com o parâmetro `secao_origem`. Testado e confirmado via Tag Assistant (hit `whatsapp_click` chegando ao GA4 com o parâmetro preenchido).
- UTMs configurados no nível da campanha do Google Ads (sufixo de URL final), não em cada link manualmente — ver seção "Campanha" abaixo.
- Níveis 2 e 3 (`qualified_lead`, `sale`) permanecem manuais, como o plano original já previa (registro em planilha/Hub).

### Planejador de Palavras-chave (seção 3) — concluído

Pesquisa rodada com a localização correta (São Paulo + Guarulhos, não Brasil inteiro). Além das 6 palavras técnicas do plano original, também foram testados termos leigos (ex.: "criar página de vendas", "como fazer página de vendas"), já que muitos clientes em potencial não conhecem o termo "landing page". A pesquisa também revelou um risco não previsto no plano original: várias palavras próximas ao tema retornam intenção de **loja virtual/e-commerce** (Nuvemshop, Hotmart, WordPress), que não é o serviço vendido — esses termos foram descartados e viraram negativas adicionais.

**CPC máximo definido: R$ 8,00** (a faixa de lance de topo de página observada foi de R$ 2,60 a R$ 46,18 conforme a palavra; R$ 8 cobre a faixa baixa/média das palavras compatíveis sem participar dos leilões mais caros).

### Campanha no Google Ads — publicada e ativa

|Configuração|Valor real aplicado|
|---|---|
|Nome|`Search \| Landing Page \| SP-GRU \| R300`|
|Status|Ativa (publicada em 18/08/2026)|
|Objetivo / Meta de conversão|Leads → Cliques de saída (não havia opção exata para "clique no WhatsApp" no assistente; configuração manual da conversão via GA4/GTM, não pelo recurso nativo de conversão de cliques de saída do Ads)|
|Tipo|Pesquisa (Rede de Display e parceiros de pesquisa desativados)|
|IA Max|Desativada (personalização de texto e expansão de URL final desligadas)|
|Locais|São Paulo (capital) + Guarulhos, opção "Presença"|
|Idioma|Português|
|Período|18/08/2026 a 02/09/2026 (15 dias — ajustado depois da publicação, que atrasou o início real em relação à data planejada)|
|Orçamento|R$ 300, **orçamento total da campanha** (a opção esteve disponível, diferente do cenário alternativo previsto no plano)|
|Lances|Maximizar cliques, CPC máximo R$ 8,00|
|Programação de anúncios|Seg–sex 8h–20h, sáb 9h–14h, dom pausado|
|Palavras-chave|8, todas em correspondência exata (ver lista abaixo)|
|UTMs|Configurados no sufixo de URL final da campanha: `utm_source=google&utm_medium=cpc&utm_campaign=lp_sp_r300&utm_term={keyword}&utm_content={creative}`|

**Palavras-chave finais (correspondência exata):**

```text
[criação de landing page]
[landing page profissional]
[orçamento landing page]
[desenvolvedor de landing page]
[criar página de vendas]
[como fazer página de vendas]
[como criar página de vendas]
[página de vendas de alta conversão]
```

Diferença em relação à seção 6 original: as palavras `[empresa de landing page]` e `[agência de landing page]` do plano não entraram (substituídas pelas variantes leigas de "página de vendas", com CPC mais baixo e volume real confirmado no Planejador). Negativas adicionais recomendadas com base na pesquisa: `loja virtual`, `ecommerce`, `e-commerce`, `nuvemshop`, `hotmart`, `wordpress`, `rd station`, `carrinho`.

**Anúncio**: usa os 12 títulos e as 4 descrições da seção 7 quase sem alteração (pequenos cortes para caber no limite de 30/25 caracteres de título e frases de destaque). Sitelinks apontam para as âncoras reais da página (`#como`, `#geo`, `#investimento`, `#duvidas`) em vez dos textos genéricos do plano original. Recurso de "Preços" adicionado com 3 itens reais (R$ 397 total, entrada de R$ 79,40, restante de R$ 317,60) em vez de incluir itens com preço R$ 0,00. Recurso de "Mensagem" (seção 7, opcional) não foi ativado — depende de verificação do anunciante, que ainda estava pendente no momento da publicação.

### Pendências

- [ ] Confirmar se a verificação do anunciante (nome/CPF, obrigatória para o Google liberar a veiculação real) foi concluída — estava pendente no momento da publicação da campanha.
- [ ] Certificado SSL de `www.lp.eneven.com.br` — confirmar se já foi emitido (estava pendente no Let's Encrypt/EasyPanel logo após a configuração do DNS).
- [ ] Seguir a rotina de otimização da seção 10 (dias 1–3: checar termos de pesquisa diariamente e adicionar negativas).

---

## 1. Veredito profissional

O plano original está correto ao priorizar:

- Rede de Pesquisa;
- um único serviço;
- segmentação geográfica restrita;
- palavras-chave negativas;
- página específica de landing pages;
- rastreamento do clique no WhatsApp.

Porém, há sete problemas que podem consumir o orçamento sem gerar cliente:

1. **R$ 300 ainda é verba de validação.** Pode gerar um cliente, mas não há volume suficiente para prometer “alguns clientes”.
2. **O CPC máximo de R$ 6 foi definido sem dados do Planejador de Palavras-chave.** O limite deve partir da previsão atual para São Paulo e Guarulhos.
3. **Correspondência de frase em todas as palavras aumenta o risco de buscas pouco comerciais.** Hoje esse tipo de correspondência considera o significado da busca, e não apenas a frase literal.
4. **O plano trata clique no WhatsApp como se fosse lead.** Muitas pessoas clicam e não enviam mensagem.
5. **A regra de esperar 20 a 30 conversões para usar lances de conversão não é uma exigência técnica do Google.** Mesmo assim, com pouco histórico e uma microconversão, “Maximizar cliques” é mais controlável para este primeiro teste.
6. **A página e o anúncio apresentam promessas e condições que precisam ser consistentes e comprováveis.** Preço, prazo, copy incluída, revisões, quantidade de projetos e nota média não podem se contradizer.
7. **A página atual contém distrações.** Outros serviços, chat de IA e perguntas que não são sobre landing pages tiram o visitante do caminho até o WhatsApp.

### Expectativa correta

Com R$ 300, a meta realista é encontrar sinais de viabilidade:

- buscas realmente comerciais;
- custo por clique aceitável;
- conversas iniciadas no WhatsApp;
- pelo menos 1 a 3 leads com perfil de compra;
- idealmente 1 venda.

**Dois clientes seriam um resultado muito bom, mas não devem ser usados como previsão.**

---

## 2. A conta financeira que o plano original não considerou

A página da Eneven anuncia a Landing Page Premium a partir de **R$ 397**. Com R$ 300 investidos:

|Vendas|Receita bruta|ROAS de receita|Leitura correta|
|---:|---:|---:|---|
|0|R$ 0|0,00|Teste sem retorno financeiro|
|1|R$ 397|1,32|A receita supera a mídia, mas pode não cobrir mão de obra, taxas e impostos|
|2|R$ 794|2,65|Resultado comercial mais saudável|
|3|R$ 1.191|3,97|Resultado excelente para um teste tão pequeno|

O plano antigo dizia que uma venda já pagaria a campanha “com lucro”. Isso não é necessariamente verdade, porque receita não é lucro. É preciso descontar:

- horas de desenvolvimento;
- atendimento e revisões;
- ferramentas e imagens;
- taxa do meio de pagamento;
- impostos;
- eventual hospedagem ou suporte.

### Recomendação de negócio

O Google Ads fica mais sustentável se o ticket médio não terminar em R$ 397. A oferta de entrada pode continuar, mas deve existir uma progressão honesta, por exemplo:

- landing page base;
- integração ou automação adicional;
- criação de copy e imagens, quando não estiverem incluídas;
- hospedagem e manutenção mensal;
- pacote futuro de otimização e acompanhamento.

Não é para empurrar itens desnecessários. É para aumentar o valor entregue e evitar que o custo de aquisição consuma quase toda a margem.

---

## 3. Simulação do que R$ 300 pode comprar

Sem acesso ao Planejador da conta, nenhum CPC exato deve ser tratado como fato. Estes números são apenas cenários para orientar a decisão:

|CPC médio|Cliques possíveis com R$ 300|Conversas a 5%|Conversas a 10%|
|---:|---:|---:|---:|
|R$ 4|75|aprox. 4|aprox. 8|
|R$ 6|50|aprox. 3|aprox. 5|
|R$ 8|37|aprox. 2|aprox. 4|
|R$ 10|30|aprox. 1 a 2|aprox. 3|

“Conversa” significa mensagem realmente enviada, não apenas clique no botão. Parte dessas conversas ainda será desqualificada por falta de orçamento, urgência ou aderência ao serviço.

Antes de ativar, use o [Planejador de Palavras-chave do Google Ads](https://support.google.com/google-ads/answer/7337243?hl=pt-BR) com:

- local: São Paulo e Guarulhos;
- idioma: português;
- período da campanha;
- orçamento total: R$ 300;
- lista de palavras-chave deste documento;
- previsão por cliques e faixa de lance de topo da página.

O próprio Google informa que as previsões consideram orçamento, lance, sazonalidade e histórico recente e são atualizadas diariamente.

---

## 4. Estrutura recomendada da campanha

|Configuração|Recomendação|
|---|---|
|Objetivo|Leads|
|Tipo|Rede de Pesquisa|
|Nome|`Search | Landing Page | SP-GRU | R300`|
|Campanhas|1|
|Grupos de anúncios|1 no início|
|Rede de Display|Desativada|
|Parceiros de pesquisa|Desativados no primeiro teste|
|Locais|São Paulo capital + Guarulhos|
|Opção de local|Presença: pessoas que estão ou costumam estar nas regiões segmentadas|
|Idioma|Português|
|Período|15 dias|
|Orçamento|R$ 300 de orçamento total da campanha|
|Lances|Maximizar cliques com teto definido após a previsão|
|Programação|Somente nos horários em que Ricardo consegue responder rapidamente|
|Destino|Página exclusiva para a campanha de Landing Page Premium|
|Conversão inicial|Mensagem no WhatsApp e lead qualificado registrados separadamente|

### Como impedir que a campanha passe de R$ 300

Se a opção estiver disponível na conta, use **orçamento total da campanha de R$ 300**, com início e fim definidos em 15 dias. O Google informa que esse tipo de orçamento funciona como teto rígido para o período. Ele está disponível para campanhas de Pesquisa com duração definida, embora a disponibilidade possa variar por conta.

Se a opção não aparecer:

- use orçamento médio de R$ 20 por dia;
- defina a data final para 15 dias;
- crie alertas ao atingir R$ 240 e R$ 280;
- acompanhe o custo diariamente e pause manualmente ao chegar a R$ 300.

O Google pode gastar, em um dia, até duas vezes o orçamento diário médio na maioria das campanhas. Por isso, **R$ 20/dia não é um teto diário rígido**. Consulte [limites de gastos](https://support.google.com/google-ads/answer/10486637?hl=pt-BR) e [orçamento total de campanha](https://support.google.com/google-ads/answer/10486938?hl=pt-BR).

### Horários

Configuração inicial sugerida:

- segunda a sexta: 8h às 20h;
- sábado: 9h às 14h;
- domingo: pausado.

Se houver disponibilidade real para responder à noite, amplie o horário. O critério não é uma regra genérica: o anúncio deve rodar quando alguém consegue atender o contato rapidamente.

---

## 5. Estratégia de lances

### Primeira fase: Maximizar cliques

Para este teste, “Maximizar cliques” com limite de CPC é uma escolha defensável porque:

- a conta ainda não possui histórico confiável de leads qualificados;
- a conversão de clique no WhatsApp é uma microconversão e pode enganar o algoritmo;
- o teto de CPC evita que poucas buscas consumam quase todo o orçamento.

O [Google confirma que a estratégia permite definir um CPC máximo](https://support.google.com/google-ads/answer/6268626?hl=pt-BR), mas alerta que um teto baixo demais pode impedir a campanha de participar dos leilões.

### Como definir o teto

1. Rode a previsão no Planejador.
2. Comece próximo da faixa baixa ou intermediária de topo de página.
3. Se quase não houver impressões após 48 horas, aumente gradualmente.
4. Se o CPC médio passar de R$ 8 sem gerar conversas, não continue aumentando automaticamente: reavalie a palavra-chave, o anúncio e a viabilidade econômica.

Não existe justificativa para fixar R$ 6 antes de consultar a previsão atual.

### Quando considerar Maximizar conversões

O Google permite estratégias orientadas a conversão mesmo sem um número obrigatório de conversões anteriores. Porém, para a Eneven, a troca só faz sentido quando houver dados de **conversas reais ou leads qualificados**, e não apenas cliques no botão.

Neste teste de R$ 300, provavelmente será melhor manter Maximizar cliques até o fim e usar os dados para uma segunda campanha.

---

## 6. Palavras-chave mais seguras

Nome do grupo: `Landing Page | Intenção Alta`

### Correspondência exata — prioridade

```text
[criação de landing page]
[landing page profissional]
[orçamento landing page]
[empresa de landing page]
[agência de landing page]
[desenvolvedor de landing page]
```

### Correspondência de frase — expansão controlada

```text
"criação de landing page profissional"
"landing page para empresa"
```

O [Google explica que correspondências exata e de frase podem alcançar buscas relacionadas por significado](https://support.google.com/google-ads/answer/7478529?hl=pt-BR). Por isso, o relatório de termos de pesquisa deve ser verificado desde o primeiro dia.

### Palavras que não devem entrar inicialmente

```text
"fazer landing page"
"quanto custa uma landing page"
```

Essas buscas podem gerar vendas, mas também atraem muito conteúdo educacional e comparação sem urgência. Devem ser testadas apenas depois que as palavras de intenção alta mostrarem desempenho.

### Negativas iniciais

```text
grátis
gratis
gratuito
gratuita
free
curso
cursos
tutorial
como fazer
como criar
faça você mesmo
o que é
significado
template
modelo pronto
download
canva
gerador
ferramenta grátis
vaga
vagas
emprego
estágio
salário
pdf
apostila
```

### Não negativar sem analisar os termos reais

- `freelancer` — pode ser exatamente o profissional que o comprador procura;
- `wordpress` — pode ser um cliente querendo contratar uma solução nessa tecnologia;
- `preço`, `valor`, `quanto custa` — indicam comparação, mas também podem indicar compra;
- `barato` — pode trazer lead ruim, porém o preço de entrada da Eneven é acessível;
- `agência` — é uma busca comercial relevante.

Palavras negativas não incluem automaticamente todas as variações próximas. Revise plural, acento e variações relevantes. Veja a documentação sobre [palavras-chave negativas](https://support.google.com/google-ads/answer/2453972?hl=pt-BR).

---

## 7. Anúncio responsivo revisado

Use apenas promessas que sejam verdadeiras, comprováveis e consistentes com a página e o contrato.

### Títulos

1. Landing Page Profissional
2. Criação de Landing Page
3. Landing Page Para Empresas
4. Peça Seu Orçamento Agora
5. A Partir de R$ 397
6. Design Premium e Responsivo
7. Feita Para Gerar Contatos
8. Integração com WhatsApp
9. SEO Técnico Incluído
10. Suporte Por 30 Dias
11. Projeto Sob Medida
12. Eneven Tech

### Descrições

1. Landing page sob medida, responsiva e integrada ao WhatsApp. Orçamento sem compromisso.
2. Transforme sua oferta em uma página clara e profissional. Fale direto com a Eneven.
3. Design premium, SEO técnico e suporte por 30 dias. Projetos a partir de R$ 397.
4. Conte seu objetivo no WhatsApp e receba uma proposta personalizada para o seu negócio.

O anúncio responsivo aceita até 15 títulos e 4 descrições, mas os recursos devem ser diferentes entre si, e não preenchimentos repetitivos. O Google recomenda variedade e alerta que fixar muitos recursos reduz as combinações disponíveis. Consulte [anúncios responsivos de pesquisa](https://support.google.com/google-ads/answer/7684791?hl=pt-BR) e [força do anúncio](https://support.google.com/google-ads/answer/9921843?hl=pt-BR).

### Recursos do anúncio

**Sitelinks no mesmo domínio:**

- Ver Projetos;
- Preços e Condições;
- Como Funciona;
- Depoimentos.

**Destaques:**

- Suporte por 30 dias;
- Design responsivo;
- Integração com WhatsApp;
- Pagamento em duas etapas.

**Imagens:**

- adicionar pelo menos quatro imagens diferentes de projetos reais;
- usar capturas nítidas das páginas em desktop e celular;
- evitar mockups genéricos ou trabalhos que não possam ser demonstrados.

**Recurso de mensagem:**

Se estiver disponível na conta, adicione o WhatsApp como recurso de mensagem. O recurso está em beta, exige conta elegível, bom histórico de políticas e verificação do anunciante. Veja [recursos de mensagem do Google Ads](https://support.google.com/google-ads/answer/14888522?hl=pt-BR).

---

## 8. Correções obrigatórias na página antes de anunciar

A análise da página atual `eneven.com.br/servicos/landing-pages/` encontrou os seguintes pontos.

### 1. Unificar preço

A página exibe R$ 397 e R$ 480 na mesma oferta. Se R$ 480 for o preço anterior riscado, isso precisa ficar visualmente inequívoco. O anúncio, a página, o WhatsApp e a proposta devem repetir a mesma condição.

### 2. Unificar prazo

O plano antigo menciona:

- entrega em 7 dias;
- entrega em 7 a 14 dias.

A página atual informa 3 a 7 dias. Escolha uma única promessa realista e use-a em todos os lugares.

### 3. Corrigir o conflito sobre copy

Na oferta, “copy persuasiva” aparece como incluída. Na FAQ, criação de textos aparece como serviço adicional. É preciso definir claramente:

- o que está incluído no pacote de R$ 397;
- o que é adicional;
- quantas seções e revisões fazem parte do escopo.

### 4. Reduzir distrações

Para tráfego pago, crie uma versão exclusiva, por exemplo:

```text
eneven.com.br/landing-page-google/
```

Essa versão deve retirar:

- menu com outros serviços;
- cards de automação, site institucional e EnevenBio;
- chat de IA concorrendo com o WhatsApp;
- perguntas de FAQ sobre automação e IA;
- links que levem o visitante para fora da oferta.

### 5. Reforçar prova real

Cada case deve ter:

- imagem real da landing page;
- segmento do cliente;
- objetivo do projeto;
- resultado ou funcionalidade que possa ser comprovada;
- link, quando houver autorização e o projeto estiver publicado.

### 6. Usar alegações verificáveis

Só mantenha no anúncio e na página:

- “+80 projetos entregues”;
- “+50 clientes satisfeitos”;
- “nota 4,9”;
- depoimentos;
- garantia ou desconto por atraso;

se houver registro real que sustente cada alegação. Caso contrário, substitua por diferenciais objetivos do serviço.

### Estrutura enxuta da página da campanha

1. Hero com promessa clara e botão de WhatsApp.
2. Para quem é a Landing Page Premium.
3. Três projetos reais com imagens.
4. O que está incluído e o que é adicional.
5. Preço inicial, prazo e forma de pagamento.
6. Processo em quatro etapas.
7. Depoimentos verificáveis.
8. FAQ exclusiva de landing pages.
9. CTA final para WhatsApp.

---

## 9. Rastreamento que diferencia clique, lead e cliente

Criar três níveis separados:

|Nível|Evento|O que significa|
|---|---|---|
|1|`whatsapp_click`|A pessoa clicou no botão, mas pode não ter enviado mensagem|
|2|`qualified_lead`|A conversa tem necessidade real, orçamento e prazo compatíveis|
|3|`sale`|Contrato ou pagamento confirmado|

### Implementação mínima

1. Instalar Google Tag Manager e Google Analytics 4.
2. Disparar `whatsapp_click` em todo link para `wa.me` ou `api.whatsapp.com`.
3. Criar uma conversão no Google Ads com contagem “uma” por interação.
4. Usar mensagem preenchida: “Olá, vim pelo Google e quero um orçamento para landing page.”
5. Adicionar UTMs à URL final.

Exemplo:

```text
utm_source=google
utm_medium=cpc
utm_campaign=lp_sp_r300
utm_term={keyword}
utm_content={creative}
```

6. Registrar em uma planilha ou no Eneven Hub:

- data;
- termo ou palavra-chave;
- origem Google Ads;
- conversa iniciada;
- lead qualificado;
- proposta enviada;
- venda;
- receita.

O Google documenta o [rastreamento de cliques no site como conversões](https://support.google.com/google-ads/answer/6331304?hl=pt-BR). Em uma etapa futura, a Eneven pode importar leads qualificados e vendas com [conversões otimizadas para leads](https://support.google.com/google-ads/answer/14274408?hl=pt-BR), permitindo que os lances aprendam com qualidade e não apenas com volume de cliques.

---

## 10. Rotina de otimização para 15 dias

### Antes de ligar

- [ ] Corrigir preço, prazo e escopo da oferta.
- [ ] Criar ou ajustar a página exclusiva da campanha.
- [ ] Testar os botões de WhatsApp em celular e computador.
- [ ] Testar o evento de conversão.
- [ ] Rodar a previsão no Planejador de Palavras-chave.
- [ ] Confirmar que as promessas e depoimentos são comprováveis.
- [ ] Configurar UTMs e mensagem preenchida.

### Dias 1 a 3

- não alterar orçamento ou estratégia de lance;
- verificar termos de pesquisa diariamente;
- adicionar negativas imediatamente quando houver busca claramente inútil;
- confirmar se os contatos aparecem no WhatsApp e no rastreamento.

### Dias 4 a 7

- pausar palavras que gastaram muito sem intenção comercial;
- comparar São Paulo e Guarulhos no relatório de localização;
- avaliar CPC, CTR e taxa de conversa;
- confirmar se a página funciona bem no celular.

### Dias 8 a 12

- concentrar o tráfego nas palavras com melhores termos e sinais de contato;
- trocar títulos apenas se houver impressões suficientes e baixa relevância;
- não aceitar automaticamente recomendações que ampliem palavras-chave, rede ou local.

### Dias 13 a 15

- não gastar o restante apenas para “fechar o orçamento” se os termos forem ruins;
- registrar conversas, leads, propostas e vendas;
- decidir se a segunda campanha deve continuar, mudar a oferta ou ser pausada.

---

## 11. Métricas de decisão

Use estes limites como sinais de diagnóstico, não como garantias universais:

|Sinal|Ação sugerida|
|---|---|
|Muitas impressões e CTR abaixo de 4%|Revisar intenção da palavra e correspondência entre busca e anúncio|
|Poucas ou nenhuma impressão em 48 horas|Conferir previsão, política, ranking e teto de CPC|
|CPC médio acima de R$ 8 sem conversas|Não aumentar lances automaticamente; revisar economia e termos|
|30 cliques e taxa de conversa abaixo de 5%|Revisar página, prova, oferta e funcionamento do WhatsApp|
|Cliques no WhatsApp, mas nenhuma mensagem|O evento está medindo curiosidade; melhorar mensagem preenchida e CTA|
|Leads, mas ninguém qualificado|Ajustar anúncio, preço visível, perguntas e termos de busca|
|Lead qualificado até R$ 100|Sinal positivo, desde que a margem e o fechamento sustentem o custo|
|Custo por lead qualificado acima de R$ 150|Pausar e revisar antes de colocar mais verba|

### Pergunta final de validação

Não avalie a campanha apenas por “teve cliente ou não”. Responda:

1. Quais buscas trouxeram pessoas com intenção real?
2. Quanto custou cada conversa iniciada?
3. Quanto custou cada lead qualificado?
4. Quantas propostas foram enviadas?
5. Quantas vendas ocorreram e qual foi a receita?
6. A margem do serviço permite repetir esse custo de aquisição?

---

## 12. Decisão recomendada para a Eneven

### Executar, mas com estas condições

Vale testar os R$ 300 no Google Ads se, antes de ativar:

- a página for focada apenas na Landing Page Premium;
- preço, prazo e escopo forem unificados;
- as provas sociais forem reais e demonstráveis;
- a conversão for testada;
- o teto de CPC vier do Planejador;
- Ricardo conseguir responder rapidamente aos contatos.

### Não executar ainda se

- a página continuar contradizendo o que está incluído;
- os cases não puderem ser demonstrados;
- o WhatsApp não estiver rastreado;
- a campanha depender de uma venda para não gerar prejuízo;
- não houver disponibilidade para atender os leads.

### Melhor uso dos R$ 300

**Uma campanha, uma oferta, uma página, um grupo de anúncios e uma conversão principal.** Não dividir entre Pesquisa, Display, Performance Max, Instagram ou vários serviços. A verba é pequena e precisa produzir aprendizado legível.

O resultado mais valioso deste primeiro teste não será o número de cliques. Será descobrir se a Eneven consegue comprar uma conversa qualificada por um valor compatível com a margem da Landing Page Premium.

---

## Fontes consultadas

- [Planejador de Palavras-chave — Google Ads](https://support.google.com/google-ads/answer/7337243?hl=pt-BR)
- [Previsões do Planejador — Google Ads](https://support.google.com/google-ads/answer/3022575?hl=pt-BR)
- [Maximizar cliques e limite de CPC — Google Ads](https://support.google.com/google-ads/answer/6268626?hl=pt-BR)
- [Correspondências de palavras-chave — Google Ads](https://support.google.com/google-ads/answer/7478529?hl=pt-BR)
- [Palavras-chave negativas — Google Ads](https://support.google.com/google-ads/answer/2453972?hl=pt-BR)
- [Relatório de termos de pesquisa — Google Ads](https://support.google.com/google-ads/answer/2472708?hl=pt-BR)
- [Opções de local — Google Ads](https://support.google.com/google-ads/answer/6317?hl=pt-BR)
- [Orçamento e limites de gasto — Google Ads](https://support.google.com/google-ads/answer/10486637?hl=pt-BR)
- [Orçamento total da campanha — Google Ads](https://support.google.com/google-ads/answer/10486938?hl=pt-BR)
- [Anúncios responsivos de pesquisa — Google Ads](https://support.google.com/google-ads/answer/7684791?hl=pt-BR)
- [Recursos de mensagem e WhatsApp — Google Ads](https://support.google.com/google-ads/answer/14888522?hl=pt-BR)
- [Rastreamento de cliques como conversão — Google Ads](https://support.google.com/google-ads/answer/6331304?hl=pt-BR)
- [Conversões otimizadas para leads — Google Ads](https://support.google.com/google-ads/answer/14274408?hl=pt-BR)
- [Página atual de Landing Pages da Eneven](https://eneven.com.br/servicos/landing-pages/)
