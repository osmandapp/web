---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
sidebar_position: 1
title: Pesquisar Tudo
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



<InfoIncompleteArticle/>


## Visão geral {#overview}

A **Pesquisa** é uma ferramenta útil para encontrar rapidamente locais. Você pode usar a Pesquisa para encontrar um local por endereço, coordenadas, pontos de interesse (POI) ou pesquisas anteriores. A [Pesquisa de Endereço](#search-address) permite que você insira o endereço para obter um local exato. A pesquisa de [Coordenadas](#search-coordinates) funciona com coordenadas geográficas, como latitude e longitude. Com a pesquisa de [POI](#search-poi), você pode pesquisar locais próximos em categorias específicas, como cafés, hotéis ou postos de gasolina. O [Histórico de Pesquisa](#search-history) salva pesquisas anteriores para acesso rápido a locais encontrados anteriormente. O recurso de pesquisa facilita o planejamento de viagens, a navegação em terrenos desconhecidos e a localização de POIs próximos.


## Como usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de POIs de pesquisa Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de POIs de pesquisa iOS](@site/static/img/search/poi_list_1_ios.png)

</TabItem>

</Tabs>

Você precisa seguir um dos passos para iniciar sua pesquisa:

- Toque no [botão Pesquisar](../widgets/map-buttons.md#search) na tela do aplicativo de mapa e insira sua consulta.

- Vá para o *Menu principal → Pesquisar → insira sua consulta de pesquisa*.

- Ao se preparar para iniciar uma rota, toque em [*Navegação → Definir destino → Campo de pesquisa*](../navigation/setup/route-navigation.md#set-target-point) *→ consulta de pesquisa*.


Informações importantes:

- ***Mapas vetoriais offline baixados são necessários para pesquisar com o OsmAnd***.

- Inicialmente, **a pesquisa é baseada nos dados localizados no mapa na área visível da tela do dispositivo**, mas se nada for encontrado lá, o OsmAnd oferece para aumentar o raio de pesquisa.

### Consultas básicas {#basic-queries}

***Lista de consultas***:

- Coordenadas em todos os formatos disponíveis.
- Endereço:
    - Rua, Número da Casa;
    - Cidade, Rua;
    - Cruzamentos de Ruas;
    - Cidade;
    - Dados do Tiger;
    - Código Postal, Número da Casa;
    - Código Postal, Rua, Número da Casa.
- Pesquisar POI por nome e por categoria com filtros adicionais.
- Pesquisar rotas OSM por nome e por categoria com filtros adicionais.
- Pesquisar pelos picos e vulcões mais proeminentes.
- Pesquisar por Favoritos e Pontos de Referência.
- Pesquisar ícones por nomes de subcategorias de POI.
- Pesquisar por trilhas.
- Pesquisar por estabelecimentos comerciais e nomes de marcas.
- Pesquisa online (Nominatim).
- Pesquisa de URL (Google e OsmAnd).
- Histórico de Pesquisa.

<!--
***Formatos suportados*:**

***Tags*** podem ser usadas como uma consulta de pesquisa. Elas consistem em ***uma chave e um valor***, por exemplo:
*addr:street=StreetName*.
Para evitar confusão, às vezes a chave ou o valor são cercados por aspas: **key="value" ou "key"="value"**. As aspas e o sinal de igual não fazem parte do conteúdo da tag.
-->

### Classificando os resultados da pesquisa {#sorting-search-results}

O OsmAnd classifica automaticamente os resultados da pesquisa por três critérios principais:

1. **Consultas correspondentes** — Resultados que contêm correspondências exatas ou parciais com as palavras que você digitou são exibidos mais acima.

2. **Tipo de objeto** - Ao classificar por nome, cidades e ruas são priorizadas em relação aos POIs ao exibir os resultados.

3. **Distância** - Quando os resultados têm critérios de correspondência e tipos de objeto semelhantes, os resultados mais próximos da localização atual do usuário são mostrados primeiro.

***Por exemplo***, uma consulta de pesquisa *correios* mostrará os correios mais próximos primeiro, mesmo que haja outros itens com nomes semelhantes a uma distância maior.

***Limitações atuais:***

- Não há configuração manual para alterar a ordem de classificação dos resultados da pesquisa.
- O processo de classificação é **gerenciado automaticamente** pelo OsmAnd, com base nos critérios listados acima.
- Em casos em que os resultados da pesquisa são muito amplos, o OsmAnd pode **limitar os resultados exibidos** àqueles com a maior precisão de correspondência de palavras.


### Pesquisa de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de favoritos Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de favoritos iOS](@site/static/img/search/favorite_search_ios.png)

</TabItem>

</Tabs>

Você pode encontrar o local desejado no mapa a partir da lista de pontos que aparecem ao digitar uma consulta.

1. Comece a digitar o nome ou endereço na barra de pesquisa.

2. Enquanto você digita, a lista exibe os pontos mais próximos da consulta, aproximadamente nesta ordem:
    - Categorias de POI
    - Favoritos, POI, Rotas e Pontos de Referência
    - Trilhas
    - Endereços
    - Mapas para download

3. Se você inserir um [nome de marca](../search/search-poi.md#how-to-use), a lista começará com os resultados por esse nome, classificados pela distância mais próxima.

:::note Limitações dos dados TIGER na pesquisa de endereços
O OsmAnd integrou os [**dados TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) nos mapas dos EUA para fornecer informações sobre endereços dos EUA. O conjunto de dados TIGER é **baseado em intervalos** e não contém números de casas precisos, portanto, alguns endereços podem estar ausentes ou imprecisos.
:::


### Pesquisar no mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI de pesquisa Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![POI de pesquisa iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

O OsmAnd permite que você pesquise pontos exibidos em um mapa na tela do seu dispositivo. Para fazer isso:

- Use [uma das maneiras](#how-to-use) de acessar a ferramenta de Pesquisa.
- Comece a digitar o nome ou endereço na caixa de pesquisa.
- Uma caixa com o botão *Mostrar no mapa* aparecerá abaixo do campo de entrada de pesquisa.
- Toque neste botão para ir para o mapa.
- Você pode continuar digitando sua consulta na parte superior da tela.


### Pesquisar nas proximidades {#search-nearby}

![Pesquisar Android](@site/static/img/search/search_all_near_location_andr.png)

Você pode usar a pesquisa nas proximidades de um local específico. Para fazer isso, selecione o ponto desejado [na lista no menu de pesquisa](#full-text-search) ou selecione-o diretamente no mapa. No [menu de contexto do mapa](../map/map-context-menu.md#actions), selecione *Ações → Pesquisar nas proximidades*.


## Pesquisar endereço {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

A **Pesquisa de Endereço** usa dados do OpenStreetMap. Este tipo de pesquisa permite que você encontre a localização e a direção para um endereço específico a partir de uma lista já classificada. Leia mais no artigo [Pesquisar Endereço](./search-address.md).


## Histórico de pesquisa {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de histórico](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de histórico](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Você pode usar o **Histórico de Pesquisa** para pesquisar novamente locais, endereços ou lugares frequentemente visitados anteriormente, sem precisar digitar a consulta novamente. Mais detalhes podem ser encontrados no artigo [Histórico de Pesquisa](./search-history.md).


## Pesquisar POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

A **Pesquisa de POI** é uma lista, classificada por categoria, com a qual você pode facilmente encontrar lugares e serviços perto de sua localização atual ou de uma área selecionada no mapa.

- A [pesquisa de POI personalizada](./search-poi.md#customize-poi-search) permite combinar diferentes categorias de POI para simplificar e personalizar sua pesquisa.
Por exemplo, se você precisar encontrar vários tipos de serviços em uma determinada área ou em uma determinada seção de uma rota.

- O OsmAnd oferece uma [pesquisa online](./search-poi.md#online-search) que funciona em tempo real, dando a você acesso rápido aos resultados da pesquisa.
É conveniente usar quando os mapas da região não estão disponíveis, mas é necessária uma conexão constante e estável com a Internet.

- Leia o artigo [Pesquisar POI](./search-poi.md) para obter mais informações.


## Pesquisar coordenadas {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

A pesquisa de coordenadas fornece uma localização precisa. Você pode inserir coordenadas precisas obtidas, por exemplo, de outras fontes, como um mapa, dispositivo GPS ou serviços online, o que é particularmente útil quando se trata de lugares que não têm um endereço exato. Para obter mais informações, consulte o artigo [Pesquisar Coordenadas](./search-coordinates.md).


## Artigos relacionados {#related-articles}

- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)