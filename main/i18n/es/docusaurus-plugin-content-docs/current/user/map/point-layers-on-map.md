---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
sidebar_position: 7
title:  Puntos en el mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Resumen {#overview}

El mapa puede mostrar puntos como [Favoritos](#favorites), [Puntos de Interés](#points-of-interest-pois), [Marcadores](#markers), [Wikipedia](#-wikipedia), [Resultados de búsqueda](#search-results-poi), [Notas de audio y vídeo](#-audio--video-points-android) y [Edición OSM](#-osm-edit-points).


## Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Capa de favoritos Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Capa de favoritos iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favoritos](../personal/favorites.md) son puntos especiales marcados por los usuarios. Por defecto, aparecen como estrellas amarillas en el mapa, aunque se pueden personalizar con cualquier color, forma e icono. Se hacen visibles en el mapa a partir del nivel de zoom 6.

:::info
En la versión de Android de OsmAnd, puede mostrar solo ciertos grupos de favoritos en el mapa y durante la búsqueda. Vaya a *Menú → Mis lugares → Favoritos*, toque &#8942; y elija *Mostrar en el mapa* o no.
:::


## Nombres de Favoritos y PDI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Capa de etiquetas de favoritos](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Capa de etiquetas de favoritos](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

Por defecto, los Favoritos y los puntos de interés (PDI) se muestran sin nombres, para no saturar el mapa con texto. Puede habilitar los nombres en el menú Configurar mapa.  


## Puntos de Interés (PDI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Superposición de PDI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Superposición de PDI iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[Puntos de interés (PDI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) son ubicaciones específicas marcadas con un símbolo en el mapa. Indican lugares y objetos interesantes o útiles y forman parte de los [Mapas vectoriales](../map/vector-maps.md).  

Los PDI más notables se muestran en el mapa automáticamente. Sin embargo, puede seleccionar un tipo específico de PDI (p. ej., *Restaurantes*) y todos ellos se resaltarán en el mapa con un **círculo naranja** (a partir del nivel de zoom 9).  

Se puede encontrar información detallada sobre un punto de interés en el [Menú contextual](../map/map-context-menu.md) que aparece cuando [toca](../map/map-context-menu.md#select-an-object-single-tap) el punto.  


### Tipos de PDI {#poi-types}

![Selección de PDI único](@site/static/img/map/single_selection_android.png) ![Selección de PDI múltiple](@site/static/img/map/multiple_selection_android.png)

Puede seleccionar uno o varios de los tipos de PDI estándar de OsmAnd, o crear su propio [filtro de PDI](../search/search-poi.md) y seleccionarlo para mostrar los PDI en el mapa.

**Android**. Toque el botón inferior izquierdo para cambiar entre la selección de uno o más puntos de interés.


### PDI de estilo de mapa {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![PDI en estilo de mapa](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![PDI en estilo topo](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

A cada tipo de PDI en OsmAnd se le asigna un icono y un color específicos. El [nivel de zoom](../map/vector-maps.md#details) y el diseño de los PDI pueden ser diferentes en algunos [estilos de mapa](../map/vector-maps.md#default-map-styles).  

[Leer más](../map/vector-maps.md#hide).


## Marcadores {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Marcadores de mapa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Marcadores de mapa iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Marcadores de mapa](../personal/markers.md) son puntos temporales marcados en el mapa como banderas. Su apariencia se puede personalizar usando **flechas** (Flechas en el mapa) e **indicación de distancia** (Líneas de dirección).  

Puede leer más sobre la apariencia de los marcadores en este [artículo](../personal/markers#appearance-on-the-map).


## Waypoints de la ruta {#track-waypoints}

![Ruta en el mapa](@site/static/img/map/track_point_on_map.png)

Los puntos de ruta (waypoints) forman parte de los archivos de Ruta (GPX). Estos puntos se muestran automáticamente si la ruta está en el mapa. Se ven y se pueden configurar de forma similar a los [Favoritos](#favorites): icono, nombres, color, forma. Cómo crear y agregar un Waypoint, lea en el [artículo](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Leer más](../map/tracks/index.md) sobre las rutas en el mapa.


## Resultados de búsqueda (PDI) {#search-results-poi}

![Búsqueda de PDI](@site/static/img/map/poi_search.png) ![Resultado de búsqueda de PDI](@site/static/img/map/poi_search_result.png)

Los resultados de la búsqueda se pueden mostrar en el mapa como una capa especial de PDI. Durante la búsqueda, toque una fila especial (**<Translate android="true" ids="shared_string_show_on_map"/>**) para mostrar los PDI en el mapa.  

Para desactivar los PDI, presione **X** en la esquina superior derecha.  

Leer más sobre la [búsqueda](../search/index.md).


## * Imágenes a nivel de calle {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtro de Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Vista de calle de Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Imágenes a nivel de calle (Mapillary)](../plugins/mapillary.md) se muestran como puntos verdes en el mapa. A estos puntos se adjuntan fotos de la vista de la calle. Puede crear un [filtro](../plugins/mapillary.md#data-filtering) y seleccionar las fotos que desea mostrar en el mapa. Para abrir una foto de la vista de la calle, toque el punto verde.  

Requiere el [plugin de Mapillary](../plugins/mapillary.md).


## * Punto de estacionamiento {#-parking-point}

![Estacionamiento limitado](@site/static/img/map/context_menu_limited_parking.png) ![Estacionamiento ilimitado](@site/static/img/map/context_menu_unlimited_parking.png)

Un [Punto de estacionamiento](../plugins/parking.md) es un punto marcado por los usuarios en el mapa para almacenar información sobre la ubicación exacta del vehículo. Se puede dividir en zonas de estacionamiento sin restricciones y restringidas.  

Requiere el [plugin de Posición de estacionamiento](../plugins/parking.md).


## * Wikipedia {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia en el mapa](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Idioma de Wikipedia - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd tiene puntos de interés especiales marcados con un logotipo "W" y vinculados a artículos de Wikipedia. Estos puntos se pueden mostrar como cualquier otro tipo de PDI, a través de la búsqueda o yendo a <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Sin embargo, existe una forma especial de filtrar los artículos de Wikipedia por **idiomas disponibles**.  

[Leer más](../plugins/wikipedia.md) sobre cómo descargar y usar la función de Wikipedia en OsmAnd.


## * Puntos de audio / vídeo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![PDI AV](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Las notas de audio/vídeo son puntos con datos de audio, foto y vídeo en el mapa creados por los usuarios.  

Requiere el [plugin de notas de audio/vídeo](../plugins/audio-video-notes.md).


## * Puntos de edición OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![PDI de edición OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![PDI de edición OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Los puntos de edición de OSM son PDI creados por los usuarios para ser agregados al [proyecto OpenStreetMap](https://www.openstreetmap.org/).  

Requiere el [plugin de edición de OSM](../plugins/osm-editing.md).


## * Notas OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Notas OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Notas OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Las notas de OSM son PDI creados por los usuarios para informar problemas con los datos del mapa en [OpenStreetMap](https://www.openstreetmap.org/). Las notas nuevas (aún no cargadas en OpenStreetMap) están marcadas en verde con un **+**, las notas cerradas están marcadas en verde con una "V" y las notas abiertas están marcadas en rojo. Puede personalizar el nivel de zoom para mostrar las notas y elegir si mostrar u ocultar las notas cerradas.  

Requiere el [plugin de edición de OSM](../plugins/osm-editing.md).


## Puntos a lo largo de la ruta {#points-along-the-route}

Waypoints, PDI, puntos Favoritos y notas de audio/vídeo se refieren al concepto de guardar ubicaciones y rutas en [formato de intercambio GPX (GPS)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Puede usar [las mismas etiquetas](../map/tracks/track-context-menu.md#display-custom-gpx-tags) para describirlos y editarlos.  

Los [Waypoints](#track-waypoints) son puntos individuales en un mapa o ruta. Se pueden usar para marcar ciertos lugares que pueden ser importantes para navegar o registrar sus viajes. Por ejemplo, puede crear un waypoint en el mapa para indicar una intersección importante o un cambio de dirección.  

Los [Puntos de interés (PDI)](#points-of-interest-pois) son lugares de especial interés para los usuarios. Estos pueden ser puntos de referencia, restaurantes, hoteles, gasolineras y otros lugares de interés que desee señalar o visitar.  

Los [puntos Favoritos](#favorites) son lugares que los usuarios consideran particularmente importantes o interesantes y que guardan en su lista de lugares favoritos. Los lugares pueden incluir cualquier ubicación que desee encontrar y a la que desee volver más tarde.

[Notas de audio/vídeo](#-audio--video-points-android). En formato GPX, puede guardar grabaciones de audio y vídeo como waypoints. Esto le permite asociar archivos multimedia a ubicaciones específicas en el mapa o la ruta.  

Todos estos tipos de puntos se pueden guardar en formato GPX para proporcionarle información de ubicación y ayudarle con la navegación y la planificación de rutas. Sirven para diferentes propósitos, pero la idea general es almacenar y transmitir información geográfica para que pueda usarla en sus tareas de navegación.


## Artículos relacionados {#related-articles}

- [Menú Configurar mapa](../map/configure-map-menu.md)
- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas rasterizados (en línea / sin conexión)](./raster-maps.md)