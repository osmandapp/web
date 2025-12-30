---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Rotas de transporte público
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Visão geral {#overview}

A navegação de transporte público no aplicativo OsmAnd permite que você trace rotas usando o transporte público, o que certamente o ajudará a se locomover mais rapidamente pela "selva de pedra".

Os dados sobre as rotas de transporte público são retirados do projeto [OpenStreetMap](http://openstreetmap.org/). O OsmAnd usa o [esquema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) para navegação. O OsmAnd suporta as seguintes rotas do OpenStreetMap para navegação: *ônibus*, *trólebus*, *táxi compartilhado*, *funicular*, *metrô*, *trem leve*, *monotrilho*, *trem*, *bonde*, *balsa*. A velocidade padrão para cada tipo de veículo é configurada em [Roteamento xml](../../../technical/build-osmand/routing.md) e é usada para encontrar as rotas mais rápidas.

:::note
O roteamento de transporte público está em fase de testes. Por enquanto, você pode construir e visualizar sua rota sem a função de navegação completa.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegação de transporte público Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Navegação de transporte público iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Como usar {#how-to-use}

Para começar a navegar pela cidade de transporte público, use [o botão de navegação](../../widgets/map-buttons.md#directions) na tela do mapa ou selecione a opção de navegação no *Menu Principal*.  

**1.** Você precisa escolher o *perfil de navegação de transporte público*, os pontos de partida e destino.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas de transporte público de navegação Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Rotas de transporte público de navegação iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** O OsmAnd oferece opções de rota com tempos de caminhada e rotas de transporte público com informações de rota: tempo, distância, baldeação e rotas públicas. Você precisa rolar a tela de navegação para selecionar a opção desejada.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Caminho de transporte público de navegação Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Caminho de transporte público de navegação iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Você pode visualizar todas as sugestões de rota possíveis no mapa usando o botão *Mostrar no mapa*. Deslize pelas telas para visualizar a próxima opção de rota.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Detalhes de transporte público de navegação Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Detalhes de transporte público de navegação iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Toque no botão "Detalhes" para abrir uma descrição da rota selecionada com todas as paradas e baldeações.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de paradas de transporte público de navegação Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de paradas de transporte público de navegação iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Tipos de transporte público {#public-transport-types}

Você pode pesquisar Rotas de Transporte Público bem curadas de acordo com suas preferências e escolher para:

- Evitar ônibus (e trólebus)
- Evitar metrôs
- Evitar trens
- Evitar bondes
- Evitar balsas
- Evitar táxi compartilhado

Por padrão, o OsmAnd pesquisa rotas que incluem todos os tipos de transporte público suportados.

## Rotas alternativas {#alternative-routes}

Rotas alternativas são seções de uma rota que são atendidas por diferentes serviços de transporte e compartilham o mesmo caminho e paradas.

Diferentes serviços de transporte podem usar números de rota (refs) diferentes ou até mesmo tipos diferentes de transporte.

A interface do usuário exibe Rotas Alternativas como distintivos coloridos com seus refs.

## Desempenho e resultados {#performance-and-results}

**Perfil de transporte público -> Configurações -> Configurações de navegação -> Parâmetros de rota**

1. **Número máximo de trocas de transporte**.

O desempenho e o consumo de memória do Roteador de Transporte Público dependem da profundidade da pesquisa.

O parâmetro mais importante que afeta essa profundidade é o **Número máximo de trocas de transporte**.

Usamos **2** como valor padrão, que parece ótimo para redes modernas de transporte público.

Se você encontrar baixo desempenho ou erros de falta de memória, tente diminuir esse valor.

Se você estiver em uma cidade pequena ou viajar rotas curtas, um valor de **1** pode funcionar melhor.
<!--
Existem mais dois parâmetros que ajudam você a escolher as melhores rotas.

2. **Exibir N melhores rotas** (especifique o número de melhores rotas a exibir)

Por padrão, o OsmAnd exibe as **10** melhores rotas (incluindo rotas alternativas).

Você pode diminuir ou aumentar esse limite, ou até exibir todas as rotas.

Nota: exibir rotas ilimitadas pode desacelerar seu dispositivo.

Valores possíveis: 0 (mostrar todas), 5, 10 (padrão), 15, 100
-->

## Dados e diretrizes {#data-and-guideline}

O OsmAnd usa um novo esquema de transporte público, também chamado de Public Transport Version 2 (PTv2) para o algoritmo de navegação de transporte público do OsmAnd.

- Você pode verificar seu transporte público [aqui](http://tools.geofabrik.de/osmi/).
- Um guia para construir ou ajustar rotas de transporte público está disponível em nosso [blog](https://osmand.net/blog/guideline-pt).
- A apresentação [2019: Navegação de Transporte Público usando OpenStreetMap por OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).