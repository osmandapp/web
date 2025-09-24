---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
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

Os dados sobre as rotas de transporte público são retirados do projeto [OpenStreetMap](http://openstreetmap.org/). O OsmAnd usa o [esquema PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) para navegação. O OsmAnd suporta as seguintes rotas do OpenStreetMap para navegação: *ônibus*, *trólebus*, *táxi compartilhado*, *funicular*, *metrô*, *bonde*, *monotrilho*, *trem*, *elétrico*, *balsa*. A velocidade padrão para cada tipo de veículo é configurada em [Roteamento xml](../../../technical/build-osmand/routing.md) e é usada para encontrar as rotas mais rápidas.

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


## Dados e diretrizes {#data-and-guideline}

O OsmAnd usa um novo esquema de transporte público, também chamado de Public Transport Version 2 (PTv2) para o algoritmo de navegação de transporte público do OsmAnd.

- Você pode verificar seu transporte público [aqui](http://tools.geofabrik.de/osmi/).
- Um guia para construir ou ajustar rotas de transporte público está disponível em nosso [blog](https://osmand.net/blog/guideline-pt).
- A apresentação [2019: Navegação de Transporte Público usando OpenStreetMap por OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).