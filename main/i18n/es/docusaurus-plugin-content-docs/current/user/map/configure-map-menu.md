---
source-hash: cc4a39deaa5305aa029009f3f9baff5a545f3a163336fd6ca3c80b085166c351
sidebar_position: 4
title:  Configurar mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Resumen {#overview}

El menú **Configurar mapa** es un elemento importante en el *Menú principal* de OsmAnd, donde puedes personalizar la visualización del mapa para adaptarla a tus necesidades. Puedes resaltar puntos favoritos, marcadores de navegación o puntos de interés especiales en el mapa, mostrar rutas específicas o archivos GPX de terceros, superponer información del terreno, imágenes de satélite o cualquier otra imagen rasterizada disponible, mostrar información de transporte público y cambiar el estilo del mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sección **Mostrar**:

![Configurar mapa android](@site/static/img/map/configure_map_show1_andr.png)  ![Configurar mapa android](@site/static/img/map/configure_map_show2_andr.png)

Sección **Topografía**:

![Configurar mapa android](@site/static/img/map/configure_map_topography_andr.png)

Sección **OpenStreetMap**:

![Configurar mapa android](@site/static/img/map/configure_map_osm_andr.png)

Secciones **Rutas y Renderizado de mapa**:

![Configurar mapa android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


El menú **<Translate android="true" ids="configure_map"/>** se divide en dos categorías:

- [Parámetros de estilo de mapa](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (o **<Translate ios="true" ids="map_widget_renderer"/>**) es un grupo de ajustes que te permiten cambiar la forma en que se muestra el mapa principal.
- [Capas del mapa](#map-layers). Estas capas te permiten colocar información encima (o debajo) de la capa del mapa principal, pero no cambian la visualización del mapa en sí.

**Notas:**

- Para cambiar la información en la pantalla (widgets, iconos), puedes realizar ajustes en la [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Los ajustes de Configurar mapa dependen de tu [perfil](../personal/profiles.md).
- Presta atención: el menú Configurar mapa **se cierra** cuando tocas el campo del mapa.

## Capas del mapa {#map-layers}

- [Capa de mapa vectorial](../map/vector-maps.md) - muestra toda la información del mapa vectorial, incluyendo OpenStreetMap, líneas de contorno y datos náuticos.
- [Fuentes de mapa ráster](../map/raster-maps.md#select-raster-maps) - permite seleccionar un mapa de subcapa / fuente principal / superposición con niveles de transparencia.
- [Terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers) - muestra información de pendiente / sombreado, relieve 3D.
- [Límites de mapas descargados](../map/vector-maps.md#show-borders) - muestra todos los límites de los mapas descargados en la capa del mapa principal.
- [Cuadrícula de coordenadas](../map/vector-maps.md#coordinates-grid) - controla la visibilidad de la cuadrícula de coordenadas en el mapa.

## Capas de datos del mapa {#map-data-layers}

   - [Favoritos](../map/point-layers-on-map.md) - muestra los puntos favoritos.
   - [PDI](../map/point-layers-on-map.md) - muestra puntos de interés de las categorías seleccionadas.
   - [Marcadores de mapa](../map/point-layers-on-map.md) - muestra los marcadores de mapa.
   - [Etiquetas superpuestas](../map/point-layers-on-map.md) - muestra nombres de puntos y favoritos en el mapa.
   - [Transporte](../map/vector-maps.md#transport) - muestra las paradas de transporte público.
   - [Tracks](../map/tracks/index.md) - muestra tracks importados, planificados o grabados sobre el mapa.
   - [Imágenes a nivel de calle](../plugins/mapillary.md#map-layer) - muestra puntos con imágenes a nivel de calle disponibles.
   - [Guías de viaje](../plan-route/travel-guides.md) - muestra guías de viaje en el mapa.
   - [Wikipedia](../plugins/wikipedia.md) - resalta artículos de Wikipedia vinculados al mapa.
   - [Otras capas de complementos](../plugins/index.md#configure-plugin) - muchos complementos añaden sus capas con información extra.

## Parámetros de estilo de mapa {#map-style-parameters}

Los ajustes de estilo de mapa dependen del estilo de mapa principal que se muestra. Puedes leer más sobre ello en el artículo [Estilos de mapa](../map/vector-maps).

   - [Estilo de mapa](../map/vector-maps.md#default-map-styles) - incluye OsmAnd (Ciudad), Topo, Náutico y otros.
   - [Modo de mapa](../map/vector-maps.md#map-mode) - te permite seleccionar la vista del mapa y la navegación dependiendo de la hora del día.
   - [Lupa de mapa](../map/vector-maps.md#map-magnifier) - permite cambiar la ampliación del mapa.
   - [Tamaño del texto](../map/vector-maps.md#text-size) - permite aumentar o disminuir el tamaño del texto en el mapa.
   - [Idioma del mapa](../map/vector-maps.md#map-language) - permite seleccionar el idioma preferido que se muestra en el mapa.
   - [Detalles](../map/vector-maps.md#details) - muestra objetos específicos.
   - [Ocultar](../map/vector-maps.md#hide) - oculta objetos específicos.
   - [Rutas](../map/vector-maps.md#routes) - permite resaltar rutas y sus símbolos.


## Personalización de la interfaz de usuario (Android) {#ui-customization-android}

Para cada perfil seleccionado en el sistema Android, puedes cambiar el orden de los elementos del menú <Translate android="true" ids="configure_map"/>, ocultar los elementos, restablecer los ajustes predeterminados o copiarlos desde otro perfil. Esto ayudará a mejorar tu interacción con la aplicación OsmAnd.

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elementos de Configurar mapa](@site/static/img/settings/configure-screen-ui-customization.png)