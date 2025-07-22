---
source-hash: a299ff4aecadfdc9bf18081279073760b514c798b579cc75e3642a2a8f646195
sidebar_position: 7
title: Puntos en el mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Descripción general {#overview}

El mapa puede mostrar puntos como [Favoritos](#favorites), [Puntos de interés](#points-of-interest-pois), [Marcadores](#markers), [Wikipedia](#-wikipedia--wikipedia), [Resultados de búsqueda](#search-results-poi), [Notas de audio y vídeo](#-audio--video-points-android--audio--video-points-android) y [Edición de OSM](#-osm-edit-points--osm-edit-points).

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

Los [Favoritos](../personal/favorites.md) son puntos especiales marcados por los usuarios. Por defecto, aparecen como estrellas amarillas en el mapa, aunque se pueden personalizar con cualquier color, forma e icono. Se hacen visibles en el mapa a partir del nivel de zoom 6.

:::info
En la versión de Android de OsmAnd, puedes mostrar solo ciertos grupos de favoritos en el mapa y durante la búsqueda. Ve a *Menú → Mis lugares → Favoritos*, toca &#8942; y elige si *Mostrar en el mapa* o no.
:::

## Nombres de favoritos y POI {#favorite-and-poi-names}

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

Por defecto, los favoritos y los puntos de interés (POI) se muestran sin nombres, para no saturar el mapa con texto. Puedes habilitar los nombres en el menú Configurar mapa.

## Puntos de interés (POI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![Superposición de POI Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![Superposición de POI iOS](@site/static/img/map/poi_overlay_ios.png)

</TabItem>

</Tabs>

Los [Puntos de interés (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) son ubicaciones específicas marcadas con un símbolo en el mapa. Indican lugares y objetos interesantes o útiles y forman parte de los [Mapas vectoriales](../map/vector-maps.md).

Los POI más notables se muestran en el mapa automáticamente. Sin embargo, puedes seleccionar un tipo específico de POI (por ejemplo, *Restaurantes*) y todos ellos se resaltarán en el mapa con un **círculo naranja** (a partir del nivel de zoom 9).

La información detallada sobre un punto de interés se puede encontrar en el [menú contextual](../map/map-context-menu.md) que aparece cuando [toca](../map/map-context-menu.md#select-an-object-single-tap) el punto.

### Tipos de POI {#poi-types}

![Selección de POI único](@site/static/img/map/single_selection_android.png) ![Selección de POI múltiple](@site/static/img/map/multiple_selection_android.png)

Puedes seleccionar uno o varios de los tipos de POI estándar de OsmAnd, o crear tu propio [filtro de POI](../search/search-poi.md) y seleccionarlo para mostrar los POI en el mapa.

**Android**. Toca el botón inferior izquierdo para alternar entre seleccionar uno o varios puntos de interés.

### POI de estilo de mapa {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI en estilo de mapa](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI en estilo topo](@site/static/img/map/poi_layer_topo_style.png)

</TabItem>

</Tabs>

Cada tipo de POI en OsmAnd tiene asignado un icono y un color específicos. El [nivel de zoom](../map/vector-maps.md#details) y el diseño de los POI pueden ser diferentes en algunos [estilos de mapa](../map/vector-maps.md#default-map-styles).

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

Los [marcadores de mapa](../personal/markers.md) son puntos temporales marcados en el mapa como banderas. Su apariencia se puede personalizar usando **flechas** (Flechas en el mapa) e **indicación de distancia** (Líneas de dirección).

Puedes leer más sobre la apariencia de los marcadores en este [artículo](../personal/markers#appearance-on-the-map).

## Puntos de ruta de la pista {#track-waypoints}

![Pista en el mapa](@site/static/img/map/track_point_on_map.png)

Los puntos de la pista (waypoints) forman parte de los archivos de pista (GPX). Estos puntos se muestran automáticamente si la pista está en el mapa. Se ven y se pueden configurar de manera similar a los [Favoritos](#favorites): icono, nombres, color, forma. Cómo crear y agregar un punto de ruta, lee en el [artículo](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).

[Leer más](../map/tracks/index.md) sobre las pistas en el mapa.

## Resultados de búsqueda (POI) {#search-results-poi}

![Búsqueda de POI](@site/static/img/map/poi_search.png) ![Resultado de búsqueda de POI](@site/static/img/map/poi_search_result.png)

Los resultados de búsqueda se pueden mostrar en el mapa como una capa especial de POI. Durante la búsqueda, toca una fila especial (**<Translate android="true" ids="shared_string_show_on_map"/>**) para mostrar los POI en el mapa.

Para desactivar los POI, toca la **X** en la esquina superior derecha.

Leer más sobre la [búsqueda](../search/index.md).

## * Imágenes a nivel de calle {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Filtro Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Vista de calle Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

Las [imágenes a nivel de calle (Mapillary)](../plugins/mapillary.md) se muestran como puntos verdes en el mapa. Las fotos de la vista de calle se adjuntan a estos puntos. Puedes crear un [filtro](../plugins/mapillary.md#data-filtering) y seleccionar las fotos que deseas mostrar en el mapa. Para abrir una foto de vista de calle, toca el punto verde.

Requiere el [plugin de Mapillary](../plugins/mapillary.md).

## * Punto de estacionamiento {#-parking-point}

![Estacionamiento limitado](@site/static/img/map/context_menu_limited_parking.png) ![Estacionamiento ilimitado](@site/static/img/map/context_menu_unlimited_parking.png)

Un [punto de estacionamiento](../plugins/parking.md) es un punto marcado por los usuarios en el mapa para almacenar información sobre la ubicación exacta del vehículo. Se puede dividir en zonas de estacionamiento restringido y no restringido.

Requiere el [plugin de posición de estacionamiento](../plugins/parking.md).

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

OsmAnd tiene puntos de interés especiales marcados con un logotipo de "W" y vinculados a artículos de Wikipedia. Estos puntos se pueden mostrar como cualquier otro tipo de POI, a través de la búsqueda o yendo a <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Sin embargo, existe una forma especial de filtrar los artículos de Wikipedia por **idiomas disponibles**.

[Leer más](../plugins/wikipedia.md) sobre cómo descargar y usar la función de Wikipedia en OsmAnd.

## * Puntos de audio/vídeo (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![POI AV](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Las notas de audio/vídeo son puntos con datos de audio, foto y vídeo en el mapa creados por los usuarios.

Requiere el [plugin de notas de audio/vídeo](../plugins/audio-video-notes.md).

## * Puntos de edición de OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![POI de edición de OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![POI de edición de OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Los puntos de edición de OSM son POI creados por los usuarios para ser añadidos al [proyecto OpenStreetMap](https://www.openstreetmap.org/).

Requiere el [plugin de edición de OSM](../plugins/osm-editing.md).

## * Notas de OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Notas de OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![Notas de OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Las notas de OSM son POI creados por los usuarios para informar sobre problemas con los datos del mapa en [OpenStreetMap](https://www.openstreetmap.org/). Las notas nuevas (aún no subidas a OpenStreetMap) se marcan en verde con un **+**, las notas cerradas se marcan en verde con una "V" y las notas abiertas se marcan en rojo. Puedes personalizar el nivel de zoom para mostrar las notas y elegir si mostrar u ocultar las notas cerradas.

Requiere el [plugin de edición de OSM](../plugins/osm-editing.md).

## Puntos a lo largo de la ruta {#points-along-the-route}

Los puntos de ruta, los POI, los puntos favoritos y las notas de audio/vídeo se refieren al concepto de guardar ubicaciones y rutas en [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Puedes usar [las mismas etiquetas](../map/tracks/track-context-menu.md#display-custom-gpx-tags) para describirlos y editarlos.

Los [Puntos de ruta](#track-waypoints) son puntos individuales en un mapa o ruta. Se pueden usar para marcar ciertos lugares que pueden ser importantes para navegar o registrar tus viajes. Por ejemplo, puedes crear un punto de ruta en el mapa para indicar una intersección importante o un cambio de dirección.

Los [Puntos de interés (POI)](#points-of-interest-pois) son lugares de especial interés para los usuarios. Estos pueden ser puntos de referencia, restaurantes, hoteles, gasolineras y otros lugares de interés que quizás quieras anotar o visitar.

Los [Puntos favoritos](#favorites) son lugares que los usuarios encuentran particularmente importantes o interesantes y los guardan en su lista de lugares favoritos. Los lugares pueden incluir cualquier ubicación que desees encontrar y a la que desees regresar más tarde.

[Notas de audio/vídeo](#-audio--video-points-android--audio--video-points-android). En formato GPX, puedes guardar grabaciones de audio y vídeo como puntos de ruta. Esto te permite asociar archivos multimedia a ubicaciones específicas en el mapa o ruta.

Todos estos tipos de puntos se pueden guardar en formato GPX para proporcionarte información de ubicación y ayudarte con la navegación y la planificación de rutas. Sirven para diferentes propósitos, pero la idea general es almacenar y transmitir información geográfica para que puedas usarla en tus tareas de navegación.

## Artículos relacionados {#related-articles}

- [Menú Configurar mapa](../map/configure-map-menu.md)
- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas ráster (en línea/sin conexión)](./raster-maps.md)

> *Última actualización: junio de 2025*