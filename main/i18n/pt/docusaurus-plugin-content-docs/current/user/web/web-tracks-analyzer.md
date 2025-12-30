---
source-hash: fe9500be3570d2dbf08995ee5614eb89cd647a44f0360730e48015dced34c738
sidebar_position: 7
sidebar_label: Tracks Analyzer
title: Tracks Analyzer
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

**Tracks Analyzer** é uma ferramenta web que ajuda a analisar segmentos de trilhas repetidos entre pontos selecionados no mapa. Ela escaneia suas trilhas e encontra todos os segmentos que passam pelos locais escolhidos, permitindo que você compare velocidade, elevação, distância e tempo em várias atividades.

## Como Usar {#how-to-use}

Após abrir o Tracks Analyzer (mostrado como uma chave inglesa), a ferramenta abre com uma visão do mapa e um estado vazio. A partir daqui, você pode escolher quais trilhas serão incluídas na análise usando o painel **Selecionar trilhas**. O analisador permite trabalhar com todas as trilhas disponíveis ou limitar a análise a pastas específicas.

Para iniciar a análise, defina um ou dois pontos diretamente no mapa. Clique com o botão direito no local desejado e selecione **Ponto A / Ponto B** do menu de contexto. O analisador então procura por segmentos de trilha que passem pelo ponto selecionado ou entre os dois pontos.

![Analisador de Trilhas](@site/static/img/web/web_analyzer_select.png) ![Analisador de Trilhas](@site/static/img/web/web_analyzer_points.png)


## Classificação e Parâmetros Visíveis {#sorting-and-visible-parameters}
Após o analisador encontrar segmentos correspondentes, os resultados são mostrados como uma lista. A lista pode ser reordenada usando a opção **Classificar**, que altera como os segmentos são listados. Além disso, o botão **Campos** abre o painel Parâmetros Visíveis, onde você pode controlar quais parâmetros de análise são mostrados para cada segmento. Você pode exibir todos os parâmetros disponíveis ou selecionar apenas aqueles relevantes para sua análise.

Os parâmetros disponíveis são agrupados por tipo:

**Velocidade**
- Vel. máx.
- Vel. média
- Vel. mín.

**Altitude**
- Alt. máx.
- Alt. média
- Alt. mín.

**Subida / Descida**

**Data e hora**
- Data
- Hora de início
- Hora de fim
- Período de tempo
- Duração
- Tempo em movimento

**Comprimento**

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