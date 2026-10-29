---
source-hash: b9d29f72bcf2d43d5cc26838609d63efd31b5183a4de6ef652bd49117b2c1149
sidebar_position: 7
sidebar_label: Analisador de Trilhas
title: Analisador de Trilhas
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Visão Geral {#overview}

O **Analisador de trilhas** é uma ferramenta web que ajuda a analisar segmentos de trilhas repetidos entre pontos selecionados no mapa. Por exemplo, você pode usá-la para comparar suas pedaladas na mesma subida ou seus trajetos diários. Para usar este recurso com seus próprios dados, você precisa de uma conta OsmAnd Pro com trilhas sincronizadas no OsmAnd Cloud — caso contrário, suas trilhas não estarão disponíveis no Web Planner. Ela escaneia suas trilhas e encontra todos os segmentos que passam pelos locais escolhidos, permitindo que você compare velocidade, elevação, distância e tempo em várias atividades.

## Como Usar {#how-to-use}

1. Faça [login](./web-cloud.md#login) na sua conta OsmAnd Pro no Web Map Portal. Suas trilhas devem estar sincronizadas com o [OsmAnd Cloud](./web-cloud.md#cloud-sync).
2. Abra *Menu → Analisador de trilhas* (o ícone de chave inglesa).
3. No painel **Selecionar trilhas**, escolha **Todas as trilhas** ou apenas as pastas de que você precisa.
4. Clique com o botão direito no mapa e selecione **Ponto A**. Para analisar um segmento entre dois pontos, defina também o **Ponto B**.
5. Revise a lista de segmentos encontrados, [classifique-a e escolha quais parâmetros exibir](#sorting-and-visible-parameters).

Com um ponto, o analisador encontra segmentos de trilha que passam pelo local selecionado. Com dois pontos, ele encontra e analisa segmentos entre o Ponto A e o Ponto B.

![Analisador de Trilhas](@site/static/img/web/web_analyzer_select.png) ![Analisador de Trilhas](@site/static/img/web/web_analyzer_points_new.png)


## Classificação e Parâmetros Visíveis {#sorting-and-visible-parameters}
Após o analisador encontrar segmentos correspondentes, os resultados são mostrados como uma lista. A lista pode ser reordenada usando a opção **Classificar**, que altera como os segmentos são listados. Além disso, o botão **Campos** abre o painel Parâmetros Visíveis, onde você pode controlar quais parâmetros de análise são mostrados para cada segmento. Você pode exibir todos os parâmetros disponíveis ou selecionar apenas aqueles relevantes para sua análise.

Os parâmetros disponíveis incluem:

- Vel. máx., Vel. média e Vel. mín.
- Alt. máx., Alt. média e Alt. mín.
- Subida e Descida.
- Data.
- Período de tempo, Hora de início, Hora de fim, Duração e Tempo em movimento.
- Comprimento.

![Analisador de Trilhas](@site/static/img/web/web_analyzer_sort.png) ![Analisador de Trilhas](@site/static/img/web/web_analyzer_fields.png)

## Análise de Dados {#data-analysis}

Cada segmento correspondente é mostrado na lista de resultados à esquerda. Para cada segmento, um conjunto de parâmetros calculados é exibido, dependendo de quais Parâmetros Visíveis estão ativados.

Cada segmento também tem um menu de três pontos (⋮) com as seguintes ações:
- Abrir trilha — abre a trilha completa relacionada ao segmento selecionado.
- Ocultar trilha / Tornar trilha visível — controla se a trilha é mostrada no mapa.
- Excluir — remove o segmento dos resultados atuais da análise.

![Analisador de Trilhas](@site/static/img/web/web_analyzer_menu.png)

### Gráficos {#graphs}

Abaixo do mapa, o analisador exibe um gráfico que visualiza os segmentos selecionados. O gráfico representa dados apenas para os segmentos encontrados entre os pontos selecionados, não para as trilhas inteiras.

O gráfico suporta alternar entre diferentes tipos de dados:
- Altitude.
- Inclinação.
- Velocidade.
Apenas um tipo de dados é exibido por vez, e alterá-lo atualiza o gráfico imediatamente.

Quando há múltiplos segmentos, o gráfico mostra dados para vários segmentos simultaneamente. Um seletor acima do gráfico permite que você escolha quantos gráficos de segmentos são exibidos de uma vez e alternar entre eles.

![Analisador de Trilhas](@site/static/img/web/web_analyzer_altitude.png) ![Analisador de Trilhas](@site/static/img/web/web_analyzer_tracks.png)

## Artigos Relacionados {#related-articles}

- [Trilhas](../web/web-tracks.md)
- [Gerenciar Trilhas](../personal/tracks/manage-tracks.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)