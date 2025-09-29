---
source-hash: 8b4b667b38727ca309c90df02690584a8e0ee6676ef632e8d21492801ca58e69
sidebar_position: 10
title: Rotas
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

## Visão geral {#overview}

OsmAnd tem muitos recursos poderosos para exibir diferentes [rotas](#type-of-routes) no mapa. Por padrão, essas rotas fazem parte de [mapas vetoriais](./vector-maps.md#routes) (dados do OpenStreetMap), no entanto, funcionalidade semelhante é fornecida por [trilhas](./tracks/index.md) que podem ser criadas com [Planejar uma Rota](../plan-route/create-route.md), importadas como [trilhas GPX](#save-as-a-track), gravadas com o [plugin de Gravação de Viagem](../plugins/trip-recording.md). A Legenda do Mapa de Rotas está [aqui](../map-legend/osmand.md#routes).

## Tipo de Rotas {#type-of-routes}

As rotas representam diferentes atividades ao ar livre usando dados do [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tocar no **ícone de escudo com um número de rota ou bandeira de rota** no mapa abrirá um menu de contexto que fornece informações adicionais sobre a rota e permite usá-la como parte da navegação.

Você pode configurar a filtragem de alguns tipos de rota no menu [Configurar Mapa](../map/configure-map-menu.md).

### Rotas de bicicleta {#cycle-routes}

[Rotas de bicicleta](https://wiki.openstreetmap.org/wiki/Cycle_routes) estão presentes em três tipos: *local* (`lcn`), *regional* (`rcn`), *nacional* (`ncn`), *internacional* (`icn`). Além disso, as rotas de bicicleta podem fazer parte de [redes de nós](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Você pode escolher como atribuir cor aos segmentos da rota:

- ***<Translate android="true" ids="layer_route"/>***.
![Rotas do mapa - rotas de bicicleta](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Rotas do mapa - redes de nós de bicicleta](@site/static/img/map/map-routes-cycle-node-networks.png)

Você pode encontrar mais informações no artigo [Legenda do Mapa](../map-legend/index.md).

### Rotas de mountain bike {#mountain-bike-routes}

As rotas de MTB têm um mapeamento específico no [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) e podem ser selecionadas separadamente das rotas de ciclismo.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Mostra trilhas de acordo com a escala MTB. Mais informações estão no artigo [Legenda do Mapa](../map-legend/index.md). | ![Rotas do mapa - trilhas MTB](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Mostra trilhas MTB de acordo com a International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Mais informações estão no artigo [Legenda do Mapa](../map-legend/index.md). | ![Rotas do mapa - trilhas MTB](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Mostra trilhas de acordo com a escala MTB. Mais informações estão no artigo [Legenda do Mapa](../map-legend/index.md).
![Rotas do mapa - trilhas MTB](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Mostra trilhas MTB de acordo com a International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Mais informações estão no artigo [Legenda do Mapa](../map-legend/index.md).
![Rotas do mapa - trilhas MTB](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Rotas de caminhada / trilha {#hiking--walking-routes}

[Rotas de caminhada](https://wiki.openstreetmap.org/wiki/Walking_Routes) estão presentes em três tipos: *local* (`lwn`), *regional* (`rwn`), *nacional* (`nwn`), *internacional* (`iwn`). Além disso, as rotas de caminhada podem fazer parte de [redes de nós](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). O OsmAnd não separa as rotas de caminhada e trilha e as combina em 1 grupo. Você pode escolher como atribuir cor aos segmentos da rota:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Colore as rotas de acordo com sua [cor local](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individual (se disponível no OpenStreetMap) e o símbolo do escudo turístico.
![Rotas do mapa - caminhada osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Colore por [afiliação de rede](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![Rotas do mapa - rede de caminhada](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Colore as rotas de acordo com o tipo de [rede de nós](https://wiki.openstreetmap.org/wiki/Node_Networks) (internacional, regional ou local).
![Rotas do mapa - redes de nós de caminhada](@site/static/img/map/map-routes-hiking-node-networks.png)

### Trilhas de Moto de Trilha {#dirt-bike-trails}

![Rotas do mapa - Trilhas de Moto de Trilha](@site/static/img/map/map-routes-dirt-bike-trails.png)

O recurso **Trilhas de Moto de Trilha** permite exibir rotas específicas para motos de trilha no mapa com base na tag `dirtbike:scale`. Essa escala destaca trilhas adequadas para motos de trilha, com uma sobreposição colorida mostrando os níveis de dificuldade ([Legenda do Mapa](../map-legend/osmand.md#routes)).

Você pode ativar esse recurso em *Menu → Configurar mapa → Rotas → Rotas de moto de trilha*. O sistema funciona de forma semelhante à escala MTB, oferecendo uma representação visual de rotas adaptadas para motos de trilha — mais sobre a [`dirtbike` tag pode ser encontrado aqui](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).

### Rotas de Escalada {#climbing-routes}

![Rotas do mapa - Rotas de Escalada](@site/static/img/map/map-routes-climbing-routes.png)

O OsmAnd suporta *áreas de escalada* (`climbing=area`) e *paredões de escalada* (`climbing=crag`), permitindo que você encontre locais de [escalada em rocha](https://wiki.openstreetmap.org/wiki/Climbing) diretamente no mapa.

- **Áreas de escalada** representam **zonas maiores** onde existem várias rotas de escalada.

- **Paredões de escalada** referem-se a **formações rochosas específicas** ou paredes adequadas para escalada.

- Esses locais incluem **atributos detalhados** como:

    - *Grau de escalada* (por exemplo, UIAA, Francês, YDS).
    - *Tipo de rocha* (por exemplo, calcário, granito).
    - *Comprimento da rota* (em metros).
    - *Qualidade da escalada* (sólida, solta, mista).
    - *Disponibilidade de registro de cume*.

Para ativar os locais de escalada no mapa, vá para: *Menu → Configurar Mapa → Rotas → Rotas de Escalada*.

### Grau de Dificuldade de Trilhas de Caminhada {#hiking-trails-difficulty-grade}

![Rotas do mapa - caminhada alpina](@site/static/img/map/map-routes-alpine-hiking.png)

Alguns segmentos de estrada podem fazer parte de muitas rotas, mas podem ser coloridos individualmente para representar a dificuldade do segmento em áreas montanhosas. Atualmente, o OsmAnd suporta as classificações italiana e suíça, e cada uma tem uma lista específica de requisitos de equipamento para acessar este segmento.

1. [Escala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Escala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)

### Rotas de esqui {#ski-routes}

![Rotas do mapa - pistas de esqui](@site/static/img/map/map-routes-ski-slopes.png)

As rotas de esqui são um grupo específico de [rotas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) no OpenStreetMap. Tipicamente, essas rotas podem ser usadas com o estilo de mapa [Inverno e Esqui](../map/vector-maps.md#winter-and-ski) com todas as [Pistas](https://wiki.openstreetmap.org/wiki/Pistes) visíveis.

### Rotas de cavalo {#horse-routes}

![Rotas do mapa - rotas de cavalo](@site/static/img/map/map-routes-horse.png)

[Rotas de cavalo](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) são exibidas como rotas coloridas com símbolos para equitação.

### Esportes aquáticos {#whitewater-sports}

![Rotas do mapa - esporte aquático](@site/static/img/map/map-routes-whitewater-sport.png)

[Rotas de águas bravas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) são mostradas juntamente com ícones de acesso, zonas de perigo para [turismo de águas bravas](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).

### Rotas de corrida {#running-routes}

![Rotas de fitness](@site/static/img/map/fitness_1.png)

[Rotas de corrida](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) no OpenStreetMap são usadas para rotas de corrida nomeadas, numeradas ou marcadas de outra forma, principalmente para atletismo.

### Trilhas de fitness {#fitness-trails}

![Rotas de fitness](@site/static/img/map/fitness_route.png)

Uma [trilha de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) é uma trilha ou caminho equipado com obstáculos ou estações ao longo de seu comprimento para exercitar o corpo humano para melhorar a saúde.

### Rotas de viagem {#travel-routes}

<InfoAndroidOnly />

![Rotas de viagem](@site/static/img/map/travel_route_2.png) ![Rotas de viagem](@site/static/img/map/travel_routes.png)

As rotas de viagem fazem parte de arquivos personalizados de [Livro de Viagens](../plan-route/travel-guides.md) (`travel.obf`), que podem ser gerados a partir das [rotas do usuário](https://osmand.net/blog/routes#generated-travel-routes) ou fazer parte de [plugins](../plugins/index.md) adicionais.

Você pode personalizar a exibição de certos ***Livros de Viagens*** e tipos de ***trilhas***, exibir trilhas como pontos ou ***Grupos de Pontos*** (por exemplo, para livros de viagem do Wikivoyage). Saiba mais sobre [Guias de Viagem aqui](../plan-route/travel-guides.md).

## Exibir Rotas no Mapa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Seção de Rotas do Mapa de Configuração](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Menu de trilhas iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Para exibir as rotas necessárias no mapa, habilite-as na *lista de Rotas* do menu [Configurar Mapa](../map/configure-map-menu.md).
- O OsmAnd pode destacar [rotas presentes no OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Elas podem ser selecionadas tocando [no símbolo da rota](#save-as-a-track), e se o conjunto visível de rotas estiver configurado corretamente, você pode seguir a cor e os ícones.
- Você pode criar uma trilha sobre as rotas usando a ferramenta [Planejar uma Rota](../plan-route/create-route.md).

![Rotas do mapa - caminhada osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Rotas do mapa - redes de nós de bicicleta](@site/static/img/map/map-routes-cycle-node-networks.png)

## Detalhes da Área de Escalada e Paredão {#climbing-area-and-crag-details}

![Detalhes de escalada](@site/static/img/map/climbing_andr.png)

Ao selecionar uma [área de escalada ou paredão](../map/routes.md#climbing-routes), o OsmAnd fornece um resumo detalhado do local de escalada, incluindo: nome e localização, classificação de dificuldade de escalada (UIAA, Francês, YDS, etc.), tipo de rocha, altura e comprimento da rota, qualidade da escalada e condições da superfície.

## Ações com Rotas {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informações da rota](@site/static/img/map/routes_osm.png) ![Informações da rota](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informações da rota](@site/static/img/map/routes_osm_ios.png) ![Informações da rota](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

No mapa, você pode selecionar rotas para [caminhada, bicicleta, viagem e muito mais](#type-of-routes), que são marcadas com [símbolos OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) quando aplicável.

Ao tocar em um **símbolo de rota** no mapa:

- Uma **lista das rotas próximas** naquele local é exibida.
- Após selecionar uma rota da lista, um [menu de contexto](../map/tracks/track-context-menu.md) para essa rota é aberto, exibindo informações detalhadas e ações disponíveis.

No **menu de contexto**, você pode:

- Visualizar [informações adicionais](#route-info-and-elevation) sobre a rota selecionada.
- [Salvar a rota](#save-as-a-track) como um **arquivo GPX**.
- [Iniciar navegação](#start-navigation) ao longo da rota.

### Informações da Rota e Elevação {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Informações da rota](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Informações da rota](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

As seguintes informações estarão visíveis no menu de contexto:

- **Informações da rota**: Nome da rota, link OSM (plugin de Edição OSM necessário), Tipo, Descrição, Distância, Direção, Subida/Descida, Faixa de altitude, Rede, Operador, Estado, Cor, Ida e volta, Pontos de início/fim e muito mais.
- **Geral**: Tamanho, Localização, Criado em.
- **Informações Adicionais**. Exibe o tipo de atividade.
- Botões de ação: [Salvar como](#save-as-a-track) e [Iniciar Navegação](#start-navigation).
- [Informações de elevação](../navigation/setup/route-details.md#elevation-info). Exibe informações sobre os dados de elevação na rota.
- [Analisar Trilha no Mapa](../map/tracks/index.md#analyze-track-on-map). Exibe análise detalhada dos dados da trilha usando gráficos e mapas.

Para visualizar o gráfico de elevação, inclinação ou detalhes de altitude para uma rota selecionada, basta tocar em qualquer um dos seguintes valores no menu de contexto: **Distância**, **Subida**, **Descida** ou **Altitude**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Salvar como uma Trilha {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/routes-4.png) ![Rotas no chão](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/hiking.png) ![Rotas no chão](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Para salvar a rota como um *arquivo GPX*, toque no botão **Salvar (Download)** abaixo do [painel de Informações](../map/tracks/track-context-menu.md#info-panel). Isso abrirá o painel de botões [Ações rápidas](../map/tracks/track-context-menu.md#track-actions) onde você terá acesso a ações de trilha, como alterar [Aparência](./tracks/appearance.md), [Navegação](../navigation/setup/route-navigation.md) ou editar [Planejar uma rota](../plan-route/create-route.md).

### Iniciar Navegação {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Para iniciar a navegação ao longo da rota OSM selecionada, toque no botão **Iniciar Navegação** no [**painel de Informações**](../map/tracks/track-context-menu.md#info-panel).

Isso iniciará o modo [**Navegação por trilha**](../navigation/setup/gpx-navigation.md), permitindo que você siga a rota com orientação por voz e recursos de navegação.

### Ações Rápidas {#quick-actions}

Você pode personalizar se as rotas são ativadas ou desativadas usando o widget [Ação Rápida](../widgets/quick-action.md#configure-map).

## Pesquisa de Rotas {#routes-search}

Encontre rotas usando a função [Pesquisar](../search/index.md) por nome ou selecionando "Rotas" na seção [Categorias](../search/search-poi.md#).

Para pesquisar, vá para o menu *<Translate android="true" ids="search_button"/>* ou *<Translate android="true" ids="search_button,search_categories"/>* e insira sua atividade.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Navegue até *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* para encontrar as rotas desejadas. As rotas incluem nome, tipo de atividade, comprimento, localização e distância até o ponto mais próximo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Use o botão de filtros (canto superior direito) para exibir apenas as rotas desejadas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Rotas no chão](@site/static/img/map/route_search_2.png) ![Rotas no chão](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rotas no chão](@site/static/img/map/route_search_2_ios.png) ![Rotas no chão](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

## Artigos Relacionados {#related-articles}

- [Menu de Contexto do Mapa](./map-context-menu.md)
- [Configurar Mapa](./configure-map-menu.md)
- [Trilhas](./tracks/index.md)
- [Menu de Contexto de Trilhas](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)
- [Aparência da linha da rota de navegação](../navigation/guidance/map-during-navigation.md#route-line-appearance)