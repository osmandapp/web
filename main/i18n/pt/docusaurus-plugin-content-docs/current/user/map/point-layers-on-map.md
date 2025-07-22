---
source-hash: a299ff4aecadfdc9bf18081279073760b514c798b579cc75e3642a2a8f646195
sidebar_position: 7
title:  Pontos no Mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Visão Geral {#overview}

O mapa pode exibir pontos como [Favoritos](#favorites), [Pontos de Interesse](#points-of-interest-pois), [Marcadores](#markers), [Wikipedia](#-wikipedia--wikipedia), [Resultados de Pesquisa](#search-results-poi), [Notas de Áudio e Vídeo](#-audio--video-points-android--audio--video-points-android) e [Edição OSM](#-osm-edit-points--osm-edit-points).


## Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Camada de Favoritos Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Camada de Favoritos iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favoritos](../personal/favorites.md) são pontos especiais marcados pelos usuários. Por padrão, eles aparecem como estrelas amarelas no mapa, embora possam ser personalizados com qualquer cor, forma e ícone. Eles se tornam visíveis no mapa a partir do nível de zoom 6.

:::info
Na versão Android do OsmAnd, você pode exibir apenas certos grupos de favoritos no mapa e durante a pesquisa. Vá para *Menu → Meus Lugares → Favoritos*, toque em &#8942; e escolha *Mostrar no mapa* ou não.
:::


## Nomes de Favoritos e POIs {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Camada de rótulos de favoritos](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Camada de rótulos de favoritos](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Por padrão, Favoritos e pontos de interesse (POIs) são exibidos sem nomes, para não sobrecarregar o mapa com texto. Você pode habilitar os nomes no menu Configurar mapa.  


## Pontos de Interesse (POIs) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Sobreposição de POI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Sobreposição de POI iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[Pontos de interesse (POIs)](https://wiki.openstreetmap.org/wiki/Points_of_interest) são locais específicos marcados com um símbolo no mapa. Eles indicam lugares e objetos interessantes ou úteis e fazem parte dos [Mapas Vetoriais](../map/vector-maps.md).  

Os POIs mais notáveis são exibidos no mapa automaticamente. No entanto, você pode selecionar um tipo específico de POIs (por exemplo, *Restaurantes*) e todos eles serão destacados no mapa com um **círculo laranja** (a partir do nível de zoom 9).  

Informações detalhadas sobre um ponto de interesse podem ser encontradas no [Menu de Contexto](../map/map-context-menu.md) que aparece quando você [toca](../map/map-context-menu.md#select-an-object-single-tap) no ponto.  


### Tipos de POI {#poi-types}

![Seleção de POI único](@site/static/img/map/single_selection_android.png) ![Seleção de múltiplos POIs](@site/static/img/map/multiple_selection_android.png)

Você pode selecionar um ou muitos dos tipos de POI padrão do OsmAnd, ou criar seu próprio [filtro de POI](../search/search-poi.md) e selecioná-lo para exibir POIs no mapa.

**Android**. Toque no botão inferior esquerdo para alternar entre a seleção de um ou mais pontos de interesse.


### POI de Estilo de Mapa {#map-style-poi}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI no estilo de mapa](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI no estilo topográfico](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

Cada tipo de POI no OsmAnd recebe um ícone e uma cor específicos. O [nível de zoom](../map/vector-maps.md#details) e o design do POI podem ser diferentes em alguns [estilos de mapa](../map/vector-maps.md#default-map-styles).  

[Leia mais](../map/vector-maps.md#hide).


## Marcadores {#markers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Marcadores de mapa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Marcadores de mapa iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Marcadores de mapa](../personal/markers.md) são pontos temporários marcados no mapa como bandeiras. Sua aparência pode ser personalizada usando **setas** (Setas no mapa) e **indicação de distância** (Linhas de direção).  

Você pode ler mais sobre a aparência dos marcadores neste [artigo](../personal/markers#appearance-on-the-map).


## Pontos de Rota da Trilha {#track-waypoints}

![Trilha no mapa](@site/static/img/map/track_point_on_map.png)

Os pontos de trilha (waypoints) fazem parte dos arquivos de trilha (GPX). Esses pontos são exibidos automaticamente se a trilha estiver no mapa. Eles se parecem e podem ser configurados de forma semelhante aos [Favoritos](#favorites) - ícone, nomes, cor, forma. Para criar e adicionar um Waypoint, leia o [artigo](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Leia mais](../map/tracks/index.md) sobre trilhas no mapa.


## Resultados da Pesquisa (POI) {#search-results-poi}

![Pesquisa de POI](@site/static/img/map/poi_search.png) ![Resultado da pesquisa de POI](@site/static/img/map/poi_search_result.png)

Os resultados da pesquisa podem ser exibidos no mapa como uma camada especial de POIs. Durante a pesquisa, toque em uma linha especial (**<Translate android="true" ids="shared_string_show_on_map"/>**) para exibir os POIs no mapa.  

Para desativar os POIs, toque em **X** no canto superior direito.  

Leia mais sobre [pesquisa](../search/index.md).


## * Imagens de Nível de Rua {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtro Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Visualização de rua Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Imagens de nível de rua (Mapillary)](../plugins/mapillary.md) são exibidas como pontos verdes no mapa. Fotos da vista da rua são anexadas a esses pontos. Você pode criar um [filtro](../plugins/mapillary.md#data-filtering) e selecionar as fotos que deseja exibir no mapa. Para abrir uma foto da vista da rua, toque no ponto verde.  

Requer o [plugin Mapillary](../plugins/mapillary.md).


## * Ponto de Estacionamento {#-parking-point}

![Estacionamento limitado](@site/static/img/map/context_menu_limited_parking.png) ![Estacionamento ilimitado](@site/static/img/map/context_menu_unlimited_parking.png)

Um [Ponto de estacionamento](../plugins/parking.md) é um ponto marcado pelos usuários no mapa para armazenar informações sobre a localização exata do veículo. Pode ser dividido em zonas de estacionamento restritas e irrestritas.  

Requer o [plugin de posição de estacionamento](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia no mapa](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Idioma da Wikipedia - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

O OsmAnd possui pontos de interesse especiais marcados com um logotipo "W" e vinculados a artigos da Wikipedia. Esses pontos podem ser exibidos como qualquer outro tipo de POI, por meio de pesquisa ou acessando <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. No entanto, há uma maneira especial de filtrar artigos da Wikipedia por **idiomas disponíveis**.  

[Leia mais](../plugins/wikipedia.md) sobre como baixar e usar o recurso Wikipedia no OsmAnd.


## * Pontos de Áudio / Vídeo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![POI AV](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Notas de Áudio / Vídeo são pontos com dados de áudio, foto e vídeo no mapa criados pelos usuários.  

Requer o [plugin de Notas de Áudio / Vídeo](../plugins/audio-video-notes.md).


## * Pontos de Edição OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![POI de edição OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![POI de edição OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Pontos de edição OSM são POIs criados por usuários para serem adicionados ao [projeto OpenStreetMap](https://www.openstreetmap.org/).  

Requer o [plugin de Edição OSM](../plugins/osm-editing.md).


## * Notas OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Vá para: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Notas OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vá para: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Notas OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Notas OSM são POIs criados por usuários para relatar problemas com dados de mapa no [OpenStreetMap](https://www.openstreetmap.org/). Novas notas (ainda não carregadas para o OpenStreetMap) são marcadas em verde com um **+**, notas fechadas são marcadas em verde com um "V", e notas abertas são marcadas em vermelho. Você pode personalizar o nível de zoom para exibir notas e escolher se deseja mostrar ou ocultar notas fechadas.  

Requer o [plugin de Edição OSM](../plugins/osm-editing.md).


## Pontos ao Longo da Rota {#points-along-the-route}

Waypoints, POIs, pontos Favoritos e notas de áudio/vídeo referem-se ao conceito de salvar locais e rotas em [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Você pode usar [as mesmas tags](../map/tracks/track-context-menu.md#display-custom-gpx-tags) para descrevê-los e editá-los.  

[Waypoints](#track-waypoints) são pontos individuais em um mapa ou rota. Eles podem ser usados para marcar certos lugares que podem ser importantes para navegar ou registrar suas viagens. Por exemplo, você pode criar um waypoint no mapa para indicar um cruzamento importante ou uma mudança de direção.  

[Pontos de interesse (POIs)](#points-of-interest-pois) são locais de interesse especial para os usuários. Podem ser marcos, restaurantes, hotéis, postos de gasolina e outros locais de interesse que você pode querer anotar ou visitar.  

[Pontos favoritos](#favorites) são lugares que os usuários consideram particularmente importantes ou interessantes e salvam em sua lista de lugares favoritos. Os lugares podem incluir qualquer local que você queira encontrar e retornar mais tarde.

[Notas de áudio/vídeo](#-audio--video-points-android--audio--video-points-android). No formato GPX, você pode salvar gravações de áudio e vídeo como waypoints. Isso permite associar arquivos de mídia a locais específicos no mapa ou rota.  

Todos esses tipos de pontos podem ser salvos no formato GPX para fornecer informações de localização e ajudar na navegação e planejamento de rotas. Eles servem a diferentes propósitos, mas a ideia geral é armazenar e transmitir informações geográficas para que você possa usá-las em suas tarefas de navegação.


## Artigos Relacionados {#related-articles}

- [Configurar menu do mapa](../map/configure-map-menu.md)
- [Mapas vetoriais (Estilos de mapa)](./vector-maps.md)
- [Mapas Raster (Online / Offline)](./raster-maps.md)

> *Última atualização: Junho de 2025*