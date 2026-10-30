---
source-hash: 10cbeafd902c636e09520ab4df9f764d8c01529060c7ee38d4e0bf4ae741b6a2
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<!--
<InfoIncompleteArticle/>
-->

## Visão geral {#overview}

A **Pesquisa** é uma ferramenta útil para encontrar rapidamente locais. Você pode usar a Pesquisa para encontrar um local por endereço, coordenadas, pontos de interesse (POI) ou pesquisas anteriores. A [Pesquisa de Endereço](#search-address) permite que você insira o endereço para obter um local exato. A pesquisa de [Coordenadas](#search-coordinates) funciona com coordenadas geográficas, como latitude e longitude. Com a pesquisa de [POI](#search-poi), você pode pesquisar locais próximos em categorias específicas, como cafés, hotéis ou postos de gasolina. A aba [Explorar](#search-explore) destaca locais populares próximos e fornece acesso rápido a locais visitados recentemente. O recurso de pesquisa facilita o planejamento de viagens, a navegação em terrenos desconhecidos e a localização de POIs próximos.


## Como usar {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de POIs de pesquisa Android](@site/static/img/search/search_online_2_andr_new.png)

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

***Lista de consultas*:**

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
- Pesquisar por artigos do Guia de viagem (requer o download do arquivo correspondente dos guias de viagem).
- Pesquisar por Favoritos e Pontos de Referência.
- Pesquisar ícones por nomes de subcategorias de POI.
- Pesquisar por trilhas.
- Pesquisar por estabelecimentos comerciais e nomes de marcas.
- Pesquisa online (Nominatim).
- Pesquisa de URL (Google e OsmAnd). O OsmAnd pode reconhecer muitos links compartilhados do Google Maps, incluindo links curtos de `maps.app.goo.gl`.
- Histórico de Pesquisa.

<!--
***Formatos suportados*:**  

***Tags*** podem ser usadas como uma consulta de pesquisa. Elas consistem em ***uma chave e um valor***, por exemplo:
*addr:street=StreetName*.  
Para evitar confusão, às vezes a chave ou o valor são cercados por aspas: **key="value" or "key"="value"**. As aspas e o sinal de igual não fazem parte do conteúdo da tag.
-->

### Classificando os resultados da pesquisa {#sorting-search-results}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de POIs de pesquisa Android](@site/static/img/search/search_sort_by.webp)

O OsmAnd classifica automaticamente os resultados da pesquisa por vários critérios:

1. **Consultas correspondentes** — Resultados que contêm correspondências exatas ou parciais com as palavras que você digitou são exibidos mais acima.

2. **Relevância** — Objetos cujos nomes correspondem de perto à consulta de pesquisa são geralmente exibidos mais acima nos resultados.

3. **Tipo de objeto** — Dependendo da consulta, os resultados podem incluir diferentes tipos de objetos, como cidades, ruas, endereços ou POIs.

4. **Distância** — Quando os resultados têm critérios de correspondência semelhantes e tipos de objeto, os resultados mais próximos da localização atual do usuário são mostrados primeiro.

5. **Importância** — Marcos bem conhecidos ou locais frequentemente referenciados podem aparecer mais acima nos resultados quando correspondem de perto à consulta de pesquisa.

Você também pode alterar manualmente a ordem de classificação dos resultados da pesquisa usando o chip de classificação no topo da lista de resultados da pesquisa. O chip mostra a opção selecionada. Toque nele e escolha uma das seguintes opções no menu *Classificar por*:
- **Relevância** — Classifica os resultados da pesquisa por relevância à consulta de pesquisa.
- **Mais próximo** — Classifica os resultados da pesquisa por distância, mostrando primeiro os resultados mais próximos.

</TabItem>

<TabItem value="ios" label="iOS">

O OsmAnd classifica automaticamente os resultados da pesquisa por vários critérios:

1. **Consultas correspondentes** — Resultados que contêm correspondências exatas ou parciais com as palavras que você digitou são exibidos mais acima.

2. **Relevância** — Objetos cujos nomes correspondem de perto à consulta de pesquisa são geralmente exibidos mais acima nos resultados.

3. **Tipo de objeto** — Dependendo da consulta, os resultados podem incluir diferentes tipos de objetos, como cidades, ruas, endereços ou POIs.

4. **Distância** — Quando os resultados têm critérios de correspondência semelhantes e tipos de objeto, os resultados mais próximos da localização atual do usuário são mostrados primeiro.

5. **Importância** — Marcos bem conhecidos ou locais frequentemente referenciados podem aparecer mais acima nos resultados quando correspondem de perto à consulta de pesquisa.

***Por exemplo***, uma consulta de pesquisa *correios* mostrará os correios mais próximos primeiro, mesmo que haja outros itens com nomes semelhantes a uma distância maior.  

***Limitações atuais:***

- Não há configuração manual para alterar a ordem de classificação dos resultados da pesquisa.
- O processo de classificação é **gerenciado automaticamente** pelo OsmAnd, com base nos critérios listados acima.
- Em casos em que os resultados da pesquisa são muito amplos, o OsmAnd pode **limitar os resultados exibidos** àqueles com a maior precisão de correspondência de palavras.

</TabItem>

</Tabs>


### Pesquisa de texto completo {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa de favoritos Android](@site/static/img/search/favorite_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de favoritos iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Você pode encontrar o local desejado no mapa a partir da lista de pontos que aparecem ao digitar uma consulta.

1. Comece a digitar o nome ou endereço na barra de pesquisa.

2. Enquanto você digita, a lista exibe os resultados que correspondem à sua consulta. Os resultados são classificados conforme descrito na seção [Classificando os resultados da pesquisa](#sorting-search-results).

3. Ao pesquisar por nome no Android, o OsmAnd exibe chips de tipo de POI com base nos tipos representados nos resultados da pesquisa. Toque em um chip para filtrar os resultados pelo tipo de POI selecionado. Você pode selecionar vários tipos de POI. Uma vez selecionado, um chip move-se para a primeira posição na lista. Toque novamente em um chip selecionado para desmarcá-lo e retornar aos resultados completos da pesquisa.

4. Se você inserir um [nome de marca](../search/search-poi.md#how-to-use), a lista começará com os resultados por esse nome, classificados pela distância mais próxima.

5. Os resultados da pesquisa também podem incluir um [artigo do Guia de viagem](../plan-route/travel-guides.md#travel-article). Tocar nele abre o artigo diretamente, em vez de mostrar uma localização no mapa.

:::note Limitações dos dados TIGER na pesquisa de endereços
O OsmAnd integrou os [**dados TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) nos mapas dos EUA para fornecer informações sobre endereços dos EUA. O conjunto de dados TIGER é **baseado em intervalos** e não contém números de casas precisos, portanto, alguns endereços podem estar ausentes ou imprecisos.
:::

### Pesquisa Espacial {#spatial-search}

<InfoAndroidOnly/>

![Pesquisa Espacial](@site/static/img/search/spatial_search.webp)

A Pesquisa Espacial é um mecanismo de pesquisa experimental que leva em conta onde os objetos estão localizados uns em relação aos outros, e não apenas o quanto seus nomes correspondem à sua consulta. Ela ajuda o OsmAnd a interpretar corretamente consultas que combinam várias partes, como o nome de um lugar e uma categoria de POI.

A Pesquisa Espacial está desativada por padrão. Para ativá-la, vá para as configurações do [plugin OsmAnd Development](../plugins/development.md#internal-algorithms) e ative *Usar pesquisa de texto espacial*. Quando ativada, a Pesquisa Espacial substitui o mecanismo de pesquisa padrão para consultas de POI e de endereço.

Com a Pesquisa Espacial, você pode:
- Pesquisar um POI em um lugar específico. Insira uma categoria e o nome de um lugar em uma única consulta, por exemplo, Hotel Berlim. O nome do lugar é usado como área de pesquisa, e a categoria é pesquisada dentro dela.
- Pesquisar lugares que correspondam a duas condições. Insira duas categorias ou uma categoria e uma propriedade, por exemplo, Combustível Diesel ou Café Vegano, para encontrar lugares que correspondam a ambas. Uma consulta como Combustível McDonald's encontra postos de combustível localizados perto de um McDonald's. A ordem das palavras importa. A primeira palavra define o que você procura, e a segunda define perto do que deve estar. Por exemplo, McDonald’s Combustível encontra restaurantes McDonald’s localizados perto de postos de combustível.
- Pesquisar ao redor de um lugar encontrado. Insira uma categoria e o nome de um lugar, por exemplo, *Hotel Berlim*, e depois toque em *Hotel perto de Berlim* no topo dos resultados da pesquisa. O nome desse lugar é adicionado ao chip [Pesquisar nas proximidades](#search-around).
- Usar diferentes formatos de nomes de ruas e nomes de categorias traduzidos em suas consultas.
- Obter resultados mais rápidos ao pesquisar por categorias de POI populares, como farmácia, estacionamento ou restaurante.

### Pesquisar nas proximidades {#search-around}

<InfoAndroidOnly/>

![Pesquisar nas proximidades](@site/static/img/search/search_around_berlin.webp)

Quando o centro do mapa está a mais de 50 m da sua localização e o mapa não segue a sua posição, a pesquisa é feita ao redor do centro do mapa, e o campo de pesquisa mostra *Pesquisar a N km de distância*. Quando o centro do mapa está a mais de 70 km da sua localização, um chip com a área de pesquisa aparece ao lado do chip de classificação. O chip mostra a opção selecionada. Toque nele e escolha uma das seguintes opções no menu *Pesquisar nas proximidades*:
- **Centro do mapa** — Pesquisa ao redor do centro atual do mapa. Esta opção é selecionada por padrão.
- **Minha localização** — Pesquisa ao redor da sua localização atual.
- **Nome do lugar** — Pesquisa ao redor de um lugar que você encontrou com a [Pesquisa Espacial](#spatial-search). Por exemplo, insira *Hotel Berlim*, depois toque em *Hotel perto de Berlim* no topo dos resultados da pesquisa. *Berlim* aparece no chip, e os hotéis ao redor de Berlim são exibidos. Esta opção está disponível somente quando a Pesquisa Espacial está ativada. 

### Pesquisar no mapa {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![POI de pesquisa Android](@site/static/img/search/poi_overlay_android_new.png) ![POI de pesquisa Android](@site/static/img/search/poi_overlay_android_new.webp)

</TabItem>

<TabItem value="ios" label="iOS">  

![POI de pesquisa iOS](@site/static/img/search/poi_overlay_ios_new.png) ![POI de pesquisa iOS](@site/static/img/search/poi_overlay_ios_new.webp)

</TabItem>

</Tabs>

O OsmAnd permite que você pesquise pontos exibidos em um mapa na tela do seu dispositivo. Para fazer isso:

- Use [uma das maneiras](#how-to-use) de acessar a ferramenta de Pesquisa.
- Comece a digitar o nome ou endereço na caixa de pesquisa.
- Uma caixa com o botão *Mostrar no mapa* aparecerá abaixo do campo de entrada de pesquisa. No Android, o Botão de Ação Flutuante (FAB) *Mostrar no mapa* aparece na parte inferior da tela de resultados da pesquisa.
- Toque neste botão para ir para o mapa.
- Você pode continuar digitando sua consulta na parte superior da tela.


### Pesquisar nas proximidades {#search-nearby}

![Pesquisar Android](@site/static/img/search/search_all_near_location_andr_new.png)

Você pode usar a pesquisa nas proximidades de um local específico. Para fazer isso, selecione o ponto desejado [na lista no menu de pesquisa](#full-text-search) ou selecione-o diretamente no mapa. No [menu de contexto do mapa](../map/map-context-menu.md#actions), selecione *Ações → Pesquisar nas proximidades*.


## Pesquisar endereço {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar Android](@site/static/img/search/search_address_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisar iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

A **Pesquisa de Endereço** usa dados do OpenStreetMap. Este tipo de pesquisa permite que você encontre a localização e a direção para um endereço específico a partir de uma lista já classificada. Leia mais no artigo [Pesquisar Endereço](./search-address.md).


## Explorar na Pesquisa {#search-explore}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisa Explorar](@site/static/img/search/explore_search_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Pesquisa de histórico](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

No Android, a aba **Explorar** na ferramenta de Pesquisa ajuda você a descobrir rapidamente locais perto da sua localização atual e acessar o seu histórico. No iOS, a aba **Histórico** permite que você pesquise novamente locais, endereços ou lugares visitados com frequência anteriormente, sem precisar digitar a consulta novamente. Para mais informações, consulte o artigo [Explorar na Pesquisa](./search-history.md).


## Pesquisar POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pesquisar POI Android](@site/static/img/search/search_poi_categoties_andr_new.png)

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
- [Explorar na Pesquisa](./search-history.md)
- [Pesquisar POI](./search-poi.md)
- [Pesquisar Coordenadas](./search-coordinates.md)
- [Locais Populares](../map/popular_places.md)