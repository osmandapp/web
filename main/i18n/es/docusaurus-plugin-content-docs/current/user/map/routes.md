---
source-hash: 24073bbbba8108ac4befa02adbada3ce95bc6b6c5197b214d7ffa297c6ee56c5
sidebar_position: 10
title: Rutas
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



## Generalidades {#overview}

OsmAnd tiene muchas funciones potentes para mostrar diferentes [rutas](#type-of-routes) en el mapa. Por defecto, estas rutas forman parte de los [mapas vectoriales](./vector-maps.md#routes) (datos de OpenStreetMap); sin embargo, una funcionalidad similar es proporcionada por los [trazados](./tracks/index.md) que pueden crearse con [Planificar una ruta](../plan-route/create-route.md), importarse como [trazados GPX](#save-as-a-track) o grabarse con el [plugin de Grabación de viajes](../plugins/trip-recording.md).


## Tipo de rutas {#type-of-routes}

Las rutas representan diferentes actividades al aire libre utilizando datos de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Al tocar el **icono de escudo con un número de ruta o una bandera de ruta** en el mapa, se abrirá un menú contextual que proporciona información adicional sobre la ruta y permite utilizarla como parte de la navegación.

Puedes configurar el filtrado de algunos tipos de rutas en el menú [Configurar mapa](../map/configure-map-menu.md).

### Rutas ciclistas {#cycle-routes}

Las [rutas ciclistas](https://wiki.openstreetmap.org/wiki/Cycle_routes) se presentan en tres tipos: *local* (`lcn`), *regional* (`rcn`), *nacional* (`ncn`), *internacional* (`icn`). Además, las rutas ciclistas pueden formar parte de [redes de nodos](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Puedes elegir cómo asignar color a los segmentos de ruta:

- ***<Translate android="true" ids="layer_route"/>***.
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Puedes encontrar más información en el artículo [Leyenda del mapa](../map-legend/index.md).


### Rutas de bicicleta de montaña {#mountain-bike-routes}

Las rutas de BTT tienen un mapeo específico en [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) y pueden seleccionarse por separado de las rutas ciclistas.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Muestra los senderos según la escala de BTT. Más información en el artículo [Leyenda del mapa](../map-legend/index.md).
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***. Muestra los senderos de BTT según la Asociación Internacional de Ciclismo de Montaña, [MTB IMBA](https://www.imba.com/). Más información en el artículo [Leyenda del mapa](../map-legend/index.md).
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Rutas de senderismo / a pie {#hiking--walking-routes}

Las [rutas de senderismo](https://wiki.openstreetmap.org/wiki/Walking_Routes) se presentan en tres tipos: *local* (`lwn`), *regional* (`rwn`), *nacional* (`nwn`), *internacional* (`iwn`). Además, las rutas a pie pueden formar parte de [redes de nodos](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd no separa las rutas a pie y de senderismo y las combina en 1 grupo. Puedes elegir cómo asignar color a los segmentos de ruta:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Colorea las rutas según su [color local](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) individual (si está disponible en OpenStreetMap) y el símbolo de escudo turístico.
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Colores por [afiliación a la red](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Colorea las rutas según el tipo de [red de nodos](https://wiki.openstreetmap.org/wiki/Node_Networks) (internacional, regional o local).
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Senderos para motos de cross {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

La función **Senderos para motos de cross** te permite mostrar rutas específicas para motos de cross en el mapa, basándose en la etiqueta `dirtbike:scale`. Esta escala resalta los senderos adecuados para motos de cross, con una superposición de colores que muestra los niveles de dificultad.

Puedes activar esta función en *Menú → Configurar mapa → Rutas → Rutas de motos de cross*. El sistema funciona de manera similar a la escala de BTT, ofreciendo una representación visual de las rutas adaptadas para motos de cross — más información sobre la etiqueta [`dirtbike` se puede encontrar aquí](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Rutas de escalada {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd es compatible con *áreas de escalada* (`climbing=area`) y *paredes de escalada* (`climbing=crag`), lo que te permite encontrar lugares para [escalada en roca](https://wiki.openstreetmap.org/wiki/Climbing) directamente en el mapa.

- Las **áreas de escalada** representan **zonas más grandes** donde existen múltiples rutas de escalada.

- Las **paredes de escalada** se refieren a **formaciones rocosas específicas** o paredes adecuadas para la escalada.

- Estas ubicaciones incluyen **atributos detallados** como:

    - *Grado de escalada* (por ejemplo, UIAA, francés, YDS).
    - *Tipo de roca* (por ejemplo, caliza, granito).
    - *Longitud de la ruta* (en metros).
    - *Calidad de la escalada* (sólida, suelta, mixta).
    - *Disponibilidad de registro de cumbre*.

Para habilitar las ubicaciones de escalada en el mapa, ve a: *Menú → Configurar mapa → Rutas → Rutas de escalada*.


### Grado de dificultad de los senderos de montaña {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Algunos segmentos de carretera pueden formar parte de muchas rutas, pero pueden colorearse individualmente para representar la dificultad del segmento en zonas montañosas. Actualmente, OsmAnd es compatible con las clasificaciones italiana y suiza, y cada una tiene una lista específica de requisitos de equipo para acceder a este segmento.

1. [Escala SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Escala CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)


### Rutas de esquí {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Las rutas de esquí son un grupo específico de [rutas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) en OpenStreetMap. Normalmente, estas rutas pueden utilizarse con el estilo de mapa [Invierno y esquí](../map/vector-maps.md#winter-and-ski) con todas las [Pistas](https://wiki.openstreetmap.org/wiki/Pistes) visibles.


### Rutas ecuestres {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

Las [rutas ecuestres](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) se muestran como rutas indicadas por colores con símbolos para la equitación.


### Deportes de aguas bravas {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

Las [rutas de aguas bravas](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) se muestran junto con iconos de acceso y zonas de peligro para el [turismo de aguas bravas](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).


### Rutas de carrera {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

Las [rutas de carrera](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) en OpenStreetMap se utilizan para rutas de carrera con nombre, numeradas o marcadas de otra manera, principalmente para atletismo.


### Senderos de fitness {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

Un [sendero de fitness](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) es un sendero o camino equipado con obstáculos o estaciones a lo largo de su recorrido para ejercitar el cuerpo humano y mejorar la salud.


### Rutas de viaje {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png) ![Travel routes](@site/static/img/map/travel_routes.png)

Las rutas de viaje forman parte de los archivos personalizados de [Guías de viaje](../plan-route/travel-guides.md) (`travel.obf`), que pueden generarse a partir de las [rutas del usuario](https://osmand.net/blog/routes#generated-travel-routes) o formar parte de [plugins](../plugins/index.md) adicionales.

Puedes personalizar la visualización de ciertos ***Travelbooks*** y tipos de ***trazados***, mostrar trazados como puntos o ***grupos de puntos*** (por ejemplo, para guías de viaje de Wikivoyage). Obtén más información sobre las [Guías de viaje aquí](../plan-route/travel-guides.md).


## Mostrar rutas en el mapa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Para mostrar las rutas requeridas en el mapa, habilítalas en la *lista de Rutas* del menú [Configurar mapa](../map/configure-map-menu.md).
- OsmAnd puede resaltar [rutas presentes en OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Se pueden seleccionar tocando [el símbolo en la ruta](#save-as-a-track), y si el conjunto visible de rutas está configurado correctamente, puedes seguir el color y los iconos.
- Puedes crear un trazado sobre las rutas usando la herramienta [Planificar una ruta](../plan-route/create-route.md).

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)



## Acciones con rutas {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

En el mapa, puedes seleccionar rutas para [senderismo, ciclismo, viajes y más](#type-of-routes), que están marcadas con [símbolos OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) cuando corresponda.

Al tocar un **símbolo de ruta** en el mapa:

- Se muestra una **lista de las rutas cercanas** en esa ubicación.
- Después de seleccionar una ruta de la lista, se abre un [menú contextual](../map/tracks/track-context-menu.md) para esa ruta, mostrando información detallada y acciones disponibles.

En el **menú contextual**, puedes:

- Ver [información adicional](#route-info-and-elevation) sobre la ruta seleccionada.
- [Guardar la ruta](#save-as-a-track) como un **trazado GPX**.
- [Iniciar la navegación](#start-navigation) a lo largo de la ruta.


### Información de ruta y elevación {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

La siguiente información será visible en el menú contextual:

- **Información de la ruta**: Nombre de la ruta, enlace OSM (se requiere el plugin de edición de OSM), Tipo, Descripción, Distancia, Dirección, Ascenso/Descenso, Rango de altitud, Red, Operador, Estado, Color, Ida y vuelta, Puntos de inicio/fin, y más.
- **General**: Tamaño, Ubicación, Creado el.
- **Información adicional**. Muestra el tipo de actividad.
- Botones de acción: [Guardar como](#save-as-a-track) e [Iniciar navegación](#start-navigation).
- [Información de elevación](../navigation/setup/route-details.md#elevation-info). Muestra información sobre los datos de elevación en la ruta.
- [Analizar trazado en el mapa](../map/tracks/index.md#analyze-track-on-map). Muestra un análisis detallado de los datos del trazado utilizando gráficos y mapas.

Para ver el gráfico de la elevación, la pendiente o los detalles de altitud de una ruta seleccionada, simplemente toca cualquiera de los siguientes valores en el menú contextual: **Distancia**, **Ascenso**, **Descenso** o **Altitud**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Guardar como trazado {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png) ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png) ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Para guardar la ruta como un *archivo GPX*, toca el botón **Guardar (Descargar)** debajo del [panel de información](../map/tracks/track-context-menu.md#info-panel). Esto abrirá el panel de botones de [Acciones rápidas](../map/tracks/track-context-menu.md#track-actions) donde tendrás acceso a acciones de trazado como cambiar la [Apariencia](./tracks/appearance.md), la [Navegación](../navigation/setup/route-navigation.md) o editar [Planificar una ruta](../plan-route/create-route.md).


### Iniciar navegación {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Para iniciar la navegación a lo largo de la ruta OSM seleccionada, toca el botón **Iniciar navegación** en el [**panel de información**](../map/tracks/track-context-menu.md#info-panel).

Esto iniciará el modo [**Navegación por trazado**](../navigation/setup/gpx-navigation.md), lo que te permitirá seguir la ruta con guía por voz y funciones de navegación.



### Acciones rápidas {#quick-actions}

Puedes personalizar si las rutas se activan o desactivan utilizando el widget [Acción rápida](../widgets/quick-action.md#configure-map).


## Búsqueda de rutas {#routes-search}

Encuentra rutas utilizando la [función de búsqueda](../search/index.md) por nombre o seleccionando "Rutas" en la [sección Categorías](../search/search-poi.md#).

Para buscar, ve al menú *<Translate android="true" ids="search_button"/>* o *<Translate android="true" ids="search_button,search_categories"/>* e introduce tu actividad.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Navega a *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* para encontrar las rutas deseadas. Las rutas incluyen nombre, tipo de actividad, longitud, ubicación y distancia al punto más cercano.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Utiliza el botón de filtros (esquina superior derecha) para mostrar solo las rutas deseadas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](./map-context-menu.md)
- [Configurar mapa](./configure-map-menu.md)
- [Trazados](./tracks/index.md)
- [Menú contextual de trazados](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)
- [Apariencia de la línea de ruta de navegación](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Última actualización: mayo de 2025*