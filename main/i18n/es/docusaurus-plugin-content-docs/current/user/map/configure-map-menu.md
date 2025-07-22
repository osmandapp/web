---
source-hash: afd8d811e22a04d300b6aceb6838f774b297758d02f07d66e5b085e41519527d
sidebar_position: 4
title: Configurar mapa
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## Descripción general {#overview}

El menú **Configurar mapa** es un elemento importante en el *Menú principal* de OsmAnd, donde puedes personalizar la visualización del mapa para adaptarla a tus necesidades. Puedes resaltar puntos favoritos, marcadores de navegación o puntos de interés especiales en el mapa, mostrar rutas específicas o archivos GPX de terceros, superponer información del terreno, imágenes satelitales o cualquier otra imagen ráster disponible, mostrar información de transporte público y cambiar el estilo del mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Sección **Mostrar**:

![Configurar mapa android](@site/static/img/map/configure_map_show1_andr.png) ![Configurar mapa android](@site/static/img/map/configure_map_show2_andr.png)

Sección **Topografía**:

![Configurar mapa android](@site/static/img/map/configure_map_topography_andr.png)

Sección **OpenStreetMap**:

![Configurar mapa android](@site/static/img/map/configure_map_osm_andr.png)

Secciones **Rutas y Representación del mapa**:

![Configurar mapa android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurar mapa ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>

El menú **<Translate android="true" ids="configure_map"/>** se divide en dos categorías:

- [Parámetros de estilo del mapa](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (o **<Translate ios="true" ids="map_widget_renderer"/>**) es un grupo de configuraciones que te permiten cambiar la forma en que se muestra el mapa principal.
- [Capas del mapa](#map-layers). Estas capas te permiten colocar información encima (o debajo) de la capa principal del mapa, pero no cambian la visualización del mapa en sí.

**Notas:**

- Para cambiar la información en pantalla (widgets, iconos), puedes realizar ajustes en la [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- La configuración de Configurar mapa depende de tu [perfil](../personal/profiles.md).
- Presta atención: el menú Configurar mapa **se cierra** cuando tocas el campo del mapa.

## Capas del mapa {#map-layers}

- [Capa de mapa vectorial](../map/vector-maps.md) - muestra toda la información del mapa vectorial, incluyendo OpenStreetMap, curvas de nivel y datos náuticos.
- [Fuentes ráster del mapa](../map/raster-maps.md#select-raster-maps) - permite seleccionar un mapa de fondo / fuente principal / superposición con niveles de transparencia.
- [Terreno](../plugins/topography.md#hillshade-slope-and-altitude-layers) - muestra información de pendiente / sombreado, relieve 3D.
- [Bordes de mapas descargados](../map/vector-maps.md#show-borders) - muestra todos los bordes de los mapas descargados en la capa principal del mapa.
- [Cuadrícula de coordenadas](../map/vector-maps.md#coordinates-grid) - controla la visibilidad de la cuadrícula de coordenadas en el mapa.

## Capas de datos del mapa {#map-data-layers}

- [Favoritos](../map/point-layers-on-map.md) - muestra puntos favoritos.
- [PDI](../map/point-layers-on-map.md) - muestra puntos de interés de categorías seleccionadas.
- [Marcadores de mapa](../map/point-layers-on-map.md) - muestra marcadores de mapa.
- [Etiquetas superpuestas](../map/point-layers-on-map.md) - muestra nombres de puntos y favoritos en el mapa.
- [Transporte](../map/vector-maps.md#transport) - muestra paradas de transporte público.
- [Rutas](../map/tracks/index.md) - muestra rutas importadas, planificadas o grabadas sobre el mapa.
- [Imágenes a nivel de calle](../plugins/mapillary.md#map-layer) - muestra puntos con imágenes a nivel de calle disponibles.
- [Guías de viaje](../plan-route/travel-guides.md) - muestra guías de viaje en el mapa.
- [Wikipedia](../plugins/wikipedia.md) - resalta artículos de Wikipedia vinculados al mapa.
- [Otras capas de plugins](../plugins/index.md#configure-plugin) - muchos plugins añaden sus capas con información extra.

## Parámetros de estilo del mapa {#map-style-parameters}

La configuración del estilo del mapa depende del estilo principal del mapa mostrado. Puedes leer más al respecto en el artículo [Estilos de mapa](../map/vector-maps).

- [Estilo de mapa](../map/vector-maps.md#default-map-styles) - incluye OsmAnd (Ciudad), Topo, Náutico y otros.
- [Modo de mapa](../map/vector-maps.md#map-mode) - te permite seleccionar la vista del mapa y la navegación según la hora del día.
- [Lupa del mapa](../map/vector-maps.md#map-magnifier) - permite cambiar la ampliación del mapa.
- [Tamaño del texto](../map/vector-maps.md#text-size) - permite aumentar o disminuir el tamaño del texto en el mapa.
- [Idioma del mapa](../map/vector-maps.md#map-language) - permite seleccionar el idioma preferido que se muestra en el mapa.
- [Detalles](../map/vector-maps.md#details) - muestra objetos específicos.
- [Ocultar](../map/vector-maps.md#hide) - oculta objetos específicos.
- [Rutas](../map/vector-maps.md#routes) - permite resaltar rutas y sus símbolos.

## Personalización de la interfaz de usuario (Android) {#ui-customization-android}

Para cada perfil seleccionado en el sistema Android, puedes cambiar el orden de los elementos del menú <Translate android="true" ids="configure_map"/>, ocultar los elementos, restablecer la configuración predeterminada o copiarlos de otro perfil. Esto ayudará a mejorar tu interacción con la aplicación OsmAnd.

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Elementos de configuración del mapa](@site/static/img/settings/configure-screen-ui-customization.png)

> *Última actualización: Febrero de 2025*