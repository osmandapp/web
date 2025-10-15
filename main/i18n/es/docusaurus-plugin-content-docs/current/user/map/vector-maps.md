---
source-hash: f80d7d2ec2e1df970dcaad604965df0d177218ef2e96f439521a590197b70506
sidebar_position: 5
title:  Mapas vectoriales (Estilos de mapa)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Vista general {#overview}

Los mapas vectoriales están pensados para ser utilizados como la fuente de datos de mapa por defecto para OsmAnd, por lo que **necesitas descargarlos en tu dispositivo**. Los mapas vectoriales admiten un gran número de estilos de mapa para diferentes actividades como ciclismo, senderismo, conducción en coche o moto de nieve, y otras.  

Cada estilo de mapa se puede personalizar para resaltar u ocultar objetos específicos, y para cambiar entre los modos diurno y nocturno. Los datos de los mapas vectoriales se pueden aumentar con datos vectoriales y mostrarse en el estilo de mapa por defecto, como la información de *Líneas de nivel*. Puedes *crear tu propio estilo de mapa de OsmAnd* para mostrar la información requerida.


## Casos de uso {#use-cases}

Los estilos de mapa personalizables son una de las principales ventajas de OsmAnd. Puedes personalizar la visualización del mapa para adaptarla a ti y a tus aficiones, ajustar la visualización u ocultación de ciertos objetos del mapa, los tamaños y colores de estos objetos, y cambiar la escala de visualización de ciertos objetos.


## Estilos de mapa por defecto {#default-map-styles}

OsmAnd te ofrece muchos estilos de mapa y capas de datos que se ajustan por defecto. Esta sección describe los principales para los modos diurno y nocturno.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Estilo de mapa OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

El estilo de renderizado de mapa estándar de OsmAnd equilibra el detalle y la simplicidad, lo que lo hace ideal para la exploración urbana y al aire libre. Detalla características de la ciudad como calles, edificios y paradas de transporte, mientras que simplifica el desorden visual haciendo los mapas más claros.  

Los beneficios clave incluyen el mapeo de rutas, la calidad de la superficie, las restricciones de acceso, la señalización vial, las representaciones de senderos a escala SAC y los detalles topográficos como las líneas de nivel.


### Vista de viaje {#touring-view}

![Estilo de mapa de vista de viaje](@site/static/img/map/map-style-touring.png)

Estilo de viaje con alto contraste y máximo detalle. Incluye todas las opciones del estilo OsmAnd por defecto, mostrando el mayor detalle posible, en particular carreteras, caminos y otras formas de viajar. Clara distinción de los tipos de carretera en un *atlas de viaje*. Adecuado para uso diurno, nocturno y al aire libre.

### UniRS y LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Los estilos UniRS y LightRS son estilos de autor que representan la información básica del mapa pero en diferentes esquemas de color.  

- **Estilo UniRS**. Este estilo es una versión modificada del predeterminado para mejorar el contraste de los senderos para peatones y bicicletas. Conserva el esquema de color clásico de Mapnik.  

    ![Estilo de mapa LightRS](@site/static/img/map/map-style-lightrs.png)

- **Estilo LightRS**. Este es un estilo de conducción simple que presenta un modo nocturno suave. Resalta las carreteras en un color naranja contrastante, atenúa los objetos secundarios del mapa y muestra características topográficas como las líneas de nivel.

    ![Estilo de mapa UniRS](@site/static/img/map/map-style-unirs.png)

### Náutico {#nautical}

![Estilo de mapa náutico](@site/static/img/map/map-style-nautical.png)

Este es un estilo de navegación náutica que presenta boyas, faros, rutas fluviales, rutas marítimas, marcas, puertos, marcas náuticas y curvas de nivel de profundidad. Lea más en el artículo [Vista de mapa náutico](../plugins/nautical-charts.md).

### Invierno y esquí {#winter-and-ski}

![Estilo de mapa de invierno y esquí](@site/static/img/map/map-style-winter-ski.png)

Este es un estilo para deportes de esquí que describe las pistas, los remontes y las pistas de esquí de fondo, además de ocultar los objetos secundarios del mapa. El **estilo de invierno y esquí** está diseñado para ayudarte con la navegación en deportes de invierno.  

Puedes ver las pistas de esquí y otros detalles como la dificultad de las pistas y los marcadores de los remontes. Los beneficios clave incluyen la visualización conveniente de pistas, remontes y otras características de esquí. Menos objetos secundarios del mapa que distraen. Lea más en el artículo [Mapas de esquí](../plugins/ski-maps.md).

### Topo {#topo}

![Estilo de mapa Topo](@site/static/img/map/map-style-topo.png)

Este estilo está diseñado para senderismo, acampada y ciclismo en la naturaleza. Presenta carreteras y características naturales contrastantes, diferentes tipos de senderos, opciones extendidas de líneas de nivel y detalles adicionales. Es legible al aire libre. El ajuste *Integridad de la superficie* permite distinguir la calidad de la carretera.

### OSM-carto {#osm-carto}

![Estilo de mapa OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Este estilo imita el [estilo web por defecto de OpenStreetMap](https://www.openstreetmap.org/). El código fuente de la versión web está disponible en [Github](https://github.com/gravitystorm/openstreetmap-carto), el código de OsmAnd está disponible en [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desierto {#desert}

![Estilo de mapa Desierto](@site/static/img/map/map-style-desert.png)

Diseñado para desiertos y otras regiones escasamente pobladas, ofreciendo información de mapa más detallada.

### Offroad {#offroad}

![Estilo de mapa Offroad](@site/static/img/map/map-style-offroad.png)

Diseñado para la navegación todoterreno, este estilo se basa en el diseño del mapa [Topo](#topo) y funciona bien con imágenes de satélite como capa base. Presenta carreteras principales más delgadas para resaltar caminos, pistas, rutas de bicicleta y otros senderos todoterreno, lo que lo hace ideal para explorar rutas no pavimentadas en áreas rurales o remotas.

### Moto de nieve {#snowmobile}

![Estilo de mapa de moto de nieve](@site/static/img/map/map-style-snowmobile.png)

Diseñado para la navegación en moto de nieve, este estilo resalta los caminos, carreteras y pistas aptos para motos de nieve. Destaca los caminos especializados en regiones nevadas, ofreciendo una navegación clara a través de terrenos cubiertos de nieve donde las carreteras estándar pueden no estar disponibles.


## Leyenda del mapa {#map-legend}

La leyenda del mapa sirve como clave para entender los símbolos utilizados en los mapas de OsmAnd. Explica el significado detrás de varios símbolos del mapa, incluyendo puntos, líneas y áreas. Por ejemplo, símbolos como líneas sinuosas azules indican ríos, mientras que diferentes colores y formas pueden representar edificios, caminos y rutas.  

La leyenda ayuda a los usuarios a interpretar lo que ven en el mapa. Puedes acceder a la leyenda completa del mapa de OsmAnd [aquí](../map-legend/index.md).


## Fuentes del mapa (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Fuentes del mapa versión Android](@site/static/img/map/map_fonts.png) ![Versión de fuentes del mapa](@site/static/img/map/map_fonts_1.png)

Para mapas en chino simplificado/tradicional, japonés y coreano, pueden aparecer caracteres o símbolos incorrectos (como cuadrados) si tu dispositivo carece de las fuentes necesarias. Este problema ocurre al renderizar nombres locales y se puede resolver descargando las fuentes requeridas a través de OsmAnd.  

Algunos problemas de fuentes relacionados han sido documentados en GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Líneas de nivel {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Estilo de mapa de líneas de nivel](@site/static/img/map/contour_lines.png)

Las líneas de nivel en OsmAnd se muestran como líneas de elevación en los mapas vectoriales. Para usarlas, primero debes habilitar el [complemento de Topografía](../plugins/topography.md), descargar los datos regionales necesarios y configurar la visualización. Esta función no está habilitada por defecto y requiere una [compra](../purchases/index.md).  

Las líneas de nivel son compatibles con todos los estilos de mapa y se pueden personalizar a través del [menú de Líneas de nivel](../plugins/topography.md#contour-lines). Para más detalles, visita el artículo del [complemento de Topografía](../plugins/topography.md).


## * Profundidad náutica {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Las líneas de contorno de profundidad náutica representan áreas de igual profundidad, ayudando a visualizar los cambios de la topografía submarina. Esta función está disponible en todos los estilos y modos de mapa y se puede ajustar con o sin el complemento de vista de mapa náutico habilitado.  

Para más detalles sobre la vista de mapa náutico, visita la [página del complemento de Mapa Náutico](../plugins/nautical-charts).


## Mostrar bordes {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Esta función te permite alternar la visibilidad de los bordes de los mapas previamente descargados de la lista de mapas disponibles. Su propósito principal es ayudar a despejar el mapa principal ocultando los contornos de los mapas descargados, lo cual es especialmente útil si tienes muchos mapas instalados.  

Por defecto, los bordes del mapa aparecerán cuando hagas zoom hasta el nivel 7 y desaparecerán en el nivel de zoom 3 e inferiores.

:::tip Color de Mostrar bordes de mapas descargados
Cuando la función *Mostrar bordes de mapas descargados* está habilitada, los mapas descargados se colorean de **Verde** tanto en la versión de Android como en la de iOS de OsmAnd.  

En Android, los mapas archivados se muestran en **Naranja**. En iOS, los mapas que se pueden actualizar también se marcan en **Naranja**.
:::


## Cuadrícula de coordenadas {#coordinates-grid}


Ir a: *Menú → Configurar mapa → Mostrar → Cuadrícula de coordenadas*  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de cuadrícula de coordenadas](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


La función **Cuadrícula de coordenadas** superpone una cuadrícula de referencia en el mapa, permitiéndote visualizar las líneas de latitud y longitud basadas en diferentes sistemas de coordenadas. Esta función es útil para la referencia de ubicación precisa y la navegación geoespacial. Puedes seleccionar ***Ajustes de nivel de zoom:*** para mostrar entre 2 - 22, ***Posición de las etiquetas*** - **Bordes**/**Centro** y ***Color de la cuadrícula*** por separado para el modo Día/Noche.


***Formatos de coordenadas disponibles:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Grados, Minutos, Segundos)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Grados Decimales - formato por defecto de WGS84)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Grados, Minutos Decimales)
- **UTM** (EPSG:6387, Universal Transverse Mercator - sistema de cuadrícula basado en zonas). El nivel de zoom mínimo es 9, solo se muestra una zona UTM a la vez, ya que las zonas están separadas por meridianos cada 6°
- **MGRS** (Sistema de Referencia de Cuadrícula Militar)

Por defecto, la aplicación utiliza el formato de coordenadas seleccionado en los [Ajustes generales](../personal/profiles.md#units--formats).

## Configurar estilo de mapa {#configure-map-style}

### Modo de mapa {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Modo de mapa](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Modo de mapa](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

El mapa se puede mostrar en un tema claro u oscuro según el modo seleccionado de una lista de opciones. Por defecto y para todos los nuevos usuarios, el [estilo de mapa](#default-map-styles) se alinea con el tema elegido en la configuración del sistema de tu dispositivo.

- **<Translate android="true" ids="daynight_mode_day"/>**. Siempre muestra el mapa en un tema claro para una visibilidad diurna óptima.

- **<Translate android="true" ids="daynight_mode_night"/>**. Siempre muestra el mapa en un tema oscuro, ideal para condiciones nocturnas o de poca luz.

- **Amanecer / Atardecer**. Transita automáticamente entre los temas diurno y nocturno según las horas locales de amanecer y atardecer, que se detallan en esta pestaña en la aplicación.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Solo Android*). Utiliza el sensor de luz del dispositivo para cambiar automáticamente entre los temas claro y oscuro según los niveles de luz ambiental.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. La visualización del mapa se adapta al tema general de la aplicación, mostrando el modo diurno en el tema claro y el modo nocturno en el tema oscuro.


### Detalles {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Muestra polígonos, senderos, puntos y señales en el mapa a bajo zoom. Esto significa que puedes ver más detalles en el mapa con poca ampliación. Ten en cuenta que el renderizado en tu dispositivo puede no ser rápido.  
    ![Parámetro de mapa - Más detallado](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Muestra el tipo de superficie de la carretera. El color de la carretera te ayuda a entender cuál es la superficie de la carretera, como asfalto, hierba o arena. Consulta la [Leyenda del mapa](../map-legend/index.md).  
    ![Parámetro de mapa - Superficie de la carretera](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indica la calidad de la carretera. Indica la suavidad (pendiente) de la carretera. Qué tan suaves son tus carreteras: buenas, malas, posiblemente terribles, etc. Mira la [Leyenda del mapa](../map-legend/index.md) para determinar la suavidad de tu carretera.  
    ![Parámetro de mapa - Suavidad de la carretera](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Muestra la accesibilidad de la carretera: privada o permitida, solo para emergencias o carretera de peaje. Consulta la [Leyenda del mapa](../map-legend/index.md) para encontrar las carreteras disponibles.  
    ![Parámetro de mapa - Acceso a la carretera](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. La función [Zonas de Bajas Emisiones (ZBE)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) muestra bordes verdes y etiquetas "ZBE" en los mapas para áreas en ciudades donde el acceso está restringido para ciertos vehículos contaminantes. Las ZBE tienen como objetivo mejorar la calidad del aire limitando la entrada a vehículos que cumplen con estándares de emisiones específicos. El uso de esta función ayuda a los usuarios a evitar multas al identificar y navegar alrededor de estas zonas verdes, asegurando el cumplimiento de las regulaciones ambientales locales mientras viajan por los centros de las ciudades.  

    ![Parámetro de mapa - Zonas de bajas emisiones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Diferentes categorías de edificios, como residenciales, industriales y comerciales, están codificadas por colores. Consulta la [Leyenda del mapa](../map-legend/index.md) para más detalles.  
    ![Parámetro de mapa - Edificios coloreados](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Muestra calles iluminadas y no iluminadas, así como vías subterráneas e iluminadas temporalmente. Consulta la [Leyenda del mapa](../map-legend/index.md) para detalles específicos.  
    ![Parámetro de mapa - Alumbrado público](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Diseñada para mapeadores, esta función muestra referencias, observaciones y comentarios de otros usuarios en el mapa.  
    ![Parámetro de mapa - Asistente de mapa](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Muestra las curvas de nivel de profundidad del mar. Necesitas instalar el [complemento Náutico](../plugins/nautical-charts) y descargar los mapas Náuticos.  
    ![Parámetro de mapa - Curvas de profundidad](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Muestra un borde verde y etiquetas "RN" para el [Territorio de reserva natural](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Resalta las áreas protegidas con un borde verde y la etiqueta "RN" para las zonas de conservación de la vida silvestre.  

    &nbsp;&nbsp;&nbsp;![Parámetro de mapa - Reserva natural](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

### Rutas {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Rutas de mapa - rutas de ciclismo](@site/static/img/map/map-routes-cycle-routes.png)  ![Rutas de mapa - red de senderismo](@site/static/img/map/map-routes-hiking-network.png)

Una ruta es un camino predeterminado que debe seguirse para llegar a un destino específico. Una ruta puede optimizarse para diferentes tipos de viaje, como ciclismo, senderismo, carrera, transporte público y otros. Puedes leer más sobre las rutas y sus tipos en el [artículo de Rutas](../map/routes.md).


### Transporte {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Al navegar por las ciudades, necesitas una vista más contrastada del transporte público y las paradas. Puedes tocar una parada de transporte público y seleccionar una de las rutas o paradas de la lista. Las rutas de tren también se muestran en esta configuración.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Muestra las paradas de transporte público.  
    ![Paradas de transporte en el mapa](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Muestra las rutas de autobús, trolebús y lanzadera.  
    ![Autobús de transporte en el mapa](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Muestra las rutas de tranvía y tren.  
    ![Tranvía de transporte en el mapa](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Muestra las rutas de metro.  
    ![Metro de transporte en el mapa](@site/static/img/map/map-transport-subway.png)

### Ocultar {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Para mejorar la visibilidad del mapa, es posible que necesites ocultar ciertos objetos. Por ejemplo, puedes ocultar el agua cuando usas los [mapas en línea de Satélite con la capa de Subcapa](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Oculta los límites regionales dentro de los países, pero los límites estatales son visibles.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Oculta todos los polígonos de objetos naturales, función especial para la [capa de Subcapa/Superposición](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Oculta todos los polígonos de edificios.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Oculta todos los polígonos de agua (mares, lagos, embalses, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Oculta los números de las casas en el mapa.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Oculta los objetos propuestos - aquellos objetos que están planeados para construcción pero solo tienen un proyecto (carreteras proyectadas, intersecciones, edificios y otros).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Oculta los iconos de PDI del mapa. Sin embargo, las etiquetas de estos PDI seguirán apareciendo en el mapa.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Oculta las etiquetas de PDI del mapa. Sin embargo, los iconos de PDI seguirán apareciendo en el mapa.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Oculta todos los objetos subterráneos, como túneles, pasajes, pisos, etc. Especial para limpiar los mapas de las ciudades de objetos no útiles.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Oculta todos los objetos sobre el suelo. Especial para ver solo objetos subterráneos como túneles, pasajes, etc.

### Estilo de carretera {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Configuraciones especiales para carreteras, donde puedes cambiar los colores para que coincidan con el atlas de carreteras o agregar carreteras de alto contraste o contornos audaces para las carreteras.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Estilo predeterminado para autopistas. Mira la [Leyenda del mapa](../map-legend/index.md).  
![Estilo de carretera de mapa predeterminado](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Estilo de atlas de carreteras alemán.  
![Estilo de carretera de mapa alemán](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Estilo de atlas de carreteras americano.  
![Estilo de carretera de mapa americano](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. El alto contraste de las carreteras.  
![Estilo de carretera de mapa de alto contraste](@site/static/img/map/map-road-style-high-contrast.png)
- **Pálido**. Colores menos contrastantes de las carreteras.  
![Estilo de carretera de mapa con contorno audaz](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Contorno audaz para las carreteras.  
![Estilo de carretera de mapa con contorno audaz](@site/static/img/map/map-road-style-bold-outline.png)


### Tamaño del texto {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Tamaño del texto del mapa 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Tamaño del texto del mapa 200%](@site/static/img/map/map-text-size-200.png)


### Lupa del mapa {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Puedes elegir esta configuración manteniendo presionado el botón "+" o "-" en la pantalla o:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Puedes elegir esta configuración manteniendo presionado el botón "+" o "-" en la pantalla o:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Esta configuración ayuda a cambiar la ampliación del mapa. Es aplicable para mapas ráster y vectoriales. Para los mapas ráster aplica un efecto de ampliación, por lo que las etiquetas de texto se ven más grandes o más pequeñas. Para los mapas vectoriales hace que el mapa se vea más o menos detallado, si lo configuras en un valor bajo, el mapa se verá ruidoso/lento.  

- **75%**  
    ![Lupa del mapa 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Lupa del mapa 200%](@site/static/img/map/map-magnifier-200.png)


### Idioma del mapa {#map-language}

La opción **Idioma del mapa** configura la ortografía de los nombres en el mapa de OsmAnd para los niveles de zoom del 7 al 20, inclusive. Para los niveles de zoom del 2 al 6, los nombres se muestran en el idioma establecido para OsmAnd en el menú de configuración del sistema (ver sección *[Cómo cambiar el idioma de la aplicación](../start-with/first-steps.md#how-to-change-app-language)*).  

Si los nombres en el mapa no están traducidos al idioma requerido por la comunidad de OSM, puedes usar [nombres transliterados](https://en.wikipedia.org/wiki/Transliteration): interruptor *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) o *<Translate ios="true" ids="translit_names"/>* (iOS).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Nombres locales**  
    ![Idioma del mapa nombres locales](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)
    ![Idioma del mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Usar nombre latino si falta**  
    ![Idioma del mapa transliterado](@site/static/img/map/map-language-transliterate_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Nombres locales**  
    ![Idioma del mapa nombres locales](@site/static/img/map/map-language-local-names_2.png)

- **Idioma preferido** (ucraniano)
    ![Idioma del mapa ucraniano](@site/static/img/map/map-language-urkanian_2.png)

- **Mostrar nombres locales** (añade una segunda etiqueta si el nombre local es diferente)
    ![Idioma del mapa local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterar nombres**  
    ![Idioma del mapa transliterado](@site/static/img/map/map-language-transliterate_2.png)



</TabItem>

</Tabs>  



## Estilo de mapa personalizado {#custom-map-style}

Si tienes un estilo de mapa personalizado, personal o de terceros, creado según la [Especificación](../../technical/osmand-file-formats/osmand-rendering-style.md), puedes instalarlo en tu dispositivo de estas maneras:

- Copia el archivo `.render.xml` a tu dispositivo y ábrelo con OsmAnd.
- Usa los [diálogos estándar de importación/exportación](../personal/import-export.md) para exportar o importar estilos de renderizado. Si creas un paquete `.osf`, funciona como un complemento que puedes compartir con otros.
- Después de la instalación, puedes seleccionar el estilo de mapa desde el menú.


## Artículos relacionados {#related-articles}

- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)