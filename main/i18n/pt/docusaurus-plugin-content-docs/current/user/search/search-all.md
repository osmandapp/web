---
source-hash: a37206b0786e0c2a77928c36df15a5b99385e8522ae259e744dfd7222696eb76
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


## Visão Geral {#overview}

A **Pesquisa** é uma ferramenta útil para encontrar rapidamente localizações. Pode utilizar a Pesquisa para encontrar uma localização por endereço, coordenadas, pontos de interesse (POI) ou pesquisas anteriores. A [Pesquisa de Endereço](#search-address) permite-lhe introduzir o endereço que pretende para obter uma localização exata. A pesquisa de [Coordenadas](#search-coordinates) funciona com coordenadas geográficas, como latitude e longitude. Com a pesquisa de [POI](#search-poi) pode procurar locais próximos em categorias específicas, como cafés, hotéis ou postos de abastecimento. O [Histórico](#search-history) de pesquisa guarda pesquisas anteriores para acesso rápido a locais já encontrados. A funcionalidade de pesquisa facilita o planeamento de viagens, a navegação em terrenos desconhecidos e a localização de POIs próximos.


## Como Usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de POIs de Pesquisa Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de POIs de Pesquisa iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

É necessário seguir um dos passos para iniciar a sua pesquisa:

- Toque no [botão de Pesquisa](../widgets/map-buttons.md#search) no ecrã da aplicação do mapa e introduza a sua consulta.

- Vá ao *Menu principal → Pesquisar → introduza a sua consulta de pesquisa*.

- Ao preparar-se para iniciar uma rota, toque em [*Navegação → Definir destino → Campo de pesquisa*](../navigation/setup/route-navigation.md#set-target-point) *→ consulta de pesquisa*.  


Informação importante:

- ***Mapas vetoriais offline descarregados são necessários para pesquisar com o OsmAnd***.

- Inicialmente, **a pesquisa baseia-se nos dados localizados no mapa na área visível do ecrã do dispositivo**, mas se nada for encontrado, o OsmAnd oferece-se para aumentar o raio de pesquisa.  

### Consultas Básicas {#basic-queries}

***Lista de consultas*:**

- Coordenadas em todos os formatos disponíveis.
- Endereço:
    - Rua, Número da Casa;
    - Cidade, Rua;
    - Cruzamentos de Ruas;
    - Cidade;
    - Dados Tiger;
    - Código Postal, Número da Casa;
    - Código Postal, Rua, Número da Casa.
- Pesquisar POI por nome e por categoria com filtros adicionais.
- Pesquisar rotas OSM por nome e por categoria com filtros adicionais.
- Pesquisar pelos picos e vulcões mais proeminentes.
- Pesquisar por Favoritos e Pontos de Referência.
- Pesquisar ícones por nomes de subcategorias de POI.
- Pesquisar por trilhos.
- Pesquisar por estabelecimentos comerciais e nomes de marcas.
- Pesquisa online (Nominatim).
- Pesquisa de URL (Google e OsmAnd).
- Histórico de Pesquisa.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Ordenar Resultados da Pesquisa {#sorting-search-results}

O OsmAnd ordena automaticamente os resultados da pesquisa por três critérios principais:

1. **Consultas correspondentes** — Os resultados que contêm correspondências exatas ou parciais com as palavras que introduziu são exibidos mais acima.

2. **Tipo de objeto** - Ao ordenar por nome, cidades e ruas são priorizadas em relação aos POIs ao exibir os resultados.

3. **Distância** - Quando os resultados têm critérios de correspondência e tipos de objeto semelhantes, os resultados mais próximos da localização atual do utilizador são mostrados primeiro.

***Por exemplo***, uma consulta de pesquisa *correios* mostrará os correios mais próximos primeiro, mesmo que existam outros itens com nomes semelhantes a uma distância maior.  

***Limitações atuais:***

- Não há configuração manual para alterar a ordem de ordenação dos resultados da pesquisa.
- O processo de ordenação é **automaticamente gerido** pelo OsmAnd, com base nos critérios listados acima.
- Em casos onde os resultados da pesquisa são muito amplos, o OsmAnd pode **limitar os resultados exibidos** àqueles com a maior precisão de correspondência de palavras.


### Pesquisa de Texto Completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de favoritos Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de favoritos iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Pode encontrar a localização pretendida no mapa a partir da lista de pontos que aparecem à medida que introduz uma consulta.

1. Comece a digitar o nome ou endereço na barra de pesquisa.

2. À medida que digita, a lista exibe os pontos mais próximos da consulta, aproximadamente nesta ordem:
    - Categorias de POI
    - Favoritos, POI, Rotas e Pontos de Referência
    - Trilhos
    - Endereços
    - Mapas para descarregar

3. Se introduzir um [nome de marca](../search/search-poi.md#how-to-use), a lista começará com os resultados por esse nome, ordenados pela distância mais próxima.

:::note Limitações dos dados TIGER nas pesquisas de endereço
O OsmAnd integrou [**dados TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) nos mapas dos EUA para fornecer informações sobre endereços dos EUA. O conjunto de dados TIGER é **baseado em intervalos** e não contém números de casa precisos, pelo que alguns endereços podem estar em falta ou imprecisos.
:::


### Pesquisar no Mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Pesquisa de POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

O OsmAnd permite-lhe procurar pontos exibidos num mapa no ecrã do seu dispositivo. Para fazer isto:

- Utilize [uma das formas](#how-to-use) para aceder à ferramenta de Pesquisa.
- Comece a digitar o nome ou endereço na caixa de pesquisa.
- Uma caixa com o botão *Mostrar no mapa* aparecerá abaixo do campo de entrada de pesquisa.
- Toque neste botão para ir para o mapa.
- Pode continuar a digitar a sua consulta na parte superior do ecrã.


### Pesquisar Perto {#search-nearby}

![Pesquisar Android](@site/static/img/search/search_all_near_location_andr.png)

Pode utilizar a pesquisa nas proximidades de uma localização específica. Para fazer isto, selecione o ponto pretendido [da lista no menu de pesquisa](#full-text-search) ou selecione-o diretamente no mapa. No [menu de contexto do mapa](../map/map-context-menu.md#actions), selecione *Ações → Pesquisar nas proximidades*.


## Pesquisar Endereço {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

A **Pesquisa de Endereço** utiliza dados do OpenStreetMap. Este tipo de pesquisa permite-lhe encontrar a localização e a direção para um endereço específico a partir de uma lista já ordenada. Leia mais no artigo [Pesquisar Endereço](./search-address.md).


## Histórico de Pesquisa {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Histórico de pesquisa](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Histórico de pesquisa](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Pode utilizar o **Histórico de Pesquisa** para procurar novamente locais, endereços ou locais frequentemente visitados sem ter de introduzir a consulta novamente. Mais detalhes podem ser encontrados no artigo [Histórico de Pesquisa](./search-history.md).


## Pesquisar POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

A **Pesquisa de POI** é uma lista, ordenada por categoria, com a qual pode facilmente encontrar locais e serviços perto da sua localização atual ou de uma área selecionada no mapa.

- A [pesquisa de POI personalizada](./search-poi.md#custom-poi-search) permite-lhe combinar diferentes categorias de POI para simplificar e personalizar a sua pesquisa.  
Por exemplo, se precisar de encontrar vários tipos de serviços numa determinada área ou numa determinada secção de uma rota.

- O OsmAnd fornece uma [pesquisa online](./search-poi.md#online-search) que funciona em tempo real, dando-lhe acesso rápido aos resultados da pesquisa.  
É conveniente utilizar quando os mapas da região não estão disponíveis, mas é necessária uma ligação à Internet constante e estável.

- Leia o artigo [Pesquisar POI](./search-poi.md) para mais informações.


## Pesquisar Coordenadas {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Coordenadas Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar Coordenadas iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

A pesquisa de coordenadas fornece uma localização precisa. Pode introduzir coordenadas precisas obtidas, por exemplo, de outras fontes como um mapa, dispositivo GPS ou serviços online, o que é particularmente útil quando se trata de locais que não têm um endereço exato. Para mais informações, consulte o artigo [Pesquisar Coordenadas](./search-coordinates.md).


## Artigos Relacionados {#related-articles}

- [Pesquisar Endereço](./search-address.md)
- [Histórico de Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)

> *Última atualização: abril de 2025*