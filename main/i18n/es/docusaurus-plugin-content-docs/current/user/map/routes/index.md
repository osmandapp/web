---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title:  Rutas
sidebar_position: 11
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


## Descripción general {#overview}

OsmAnd tiene muchas funciones potentes para mostrar diferentes [rutas](./types-of-routes.md) en el mapa. De forma predeterminada, estas rutas forman parte de los [mapas vectoriales](../../map/vector-maps.md#routes) (datos de OpenStreetMap); sin embargo, una funcionalidad similar la proporcionan las [pistas](../../map/tracks/index.md), que se pueden crear con [Planificar una ruta](../../plan-route/create-route.md), importar como [pistas GPX](#save-as-a-track) o registrar con el complemento [Registro de viaje](../../plugins/trip-recording.md). La leyenda del mapa de rutas está [aquí](../../map-legend/osmand.md#routes).


## Mostrar rutas en el mapa {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Para mostrar las rutas necesarias en el mapa, actívelas en la *lista de Rutas* del menú [Configurar mapa](../../map/configure-map-menu.md).
- OsmAnd puede resaltar [rutas presentes en OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Se pueden seleccionar tocando [el símbolo de la ruta](#save-as-a-track) y, si el conjunto visible de rutas está configurado correctamente, podrá seguir el color y los iconos.
- Los tipos principales de rutas también se pueden filtrar por clases y subclases, lo que permite mostrar solo grupos específicos dentro de cada tipo. Por ejemplo, puede mostrar rutas de senderismo por **símbolos OSMC** como clases y por redes *internacionales, nacionales, regionales* o *locales* como subclases, que están disponibles actualmente cuando el complemento [Desarrollo de OsmAnd](../../plugins/development.md) está activado.
- Puede crear una pista sobre las rutas con la herramienta [Planificar una ruta](../../plan-route/create-route.md).
- Cuando varias rutas discurren por la misma carretera, cada ruta se muestra como una línea semitransparente independiente colocada encima de las demás.
- Al tocar un lugar donde se solapan varias rutas, se muestra un menú contextual con todas las rutas que pasan por ese punto.
- Se requieren mapas vectoriales actualizados para mostrar todos los elementos del nuevo esquema de renderizado de rutas.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Para mostrar las rutas necesarias en el mapa, actívelas en la *lista de Rutas* del menú [Configurar mapa](../../map/configure-map-menu.md).
- OsmAnd puede resaltar [rutas presentes en OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Se pueden seleccionar tocando [el símbolo de la ruta](#save-as-a-track) y, si el conjunto visible de rutas está configurado correctamente, podrá seguir el color y los iconos.
- Puede crear una pista sobre las rutas con la herramienta [Planificar una ruta](../../plan-route/create-route.md).
- Cuando varias rutas discurren por la misma carretera, cada ruta se muestra como una línea semitransparente independiente colocada encima de las demás.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Acciones con rutas {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

En el mapa puede seleccionar rutas para [senderismo, ciclismo, esquí, MTB, moto de tierra, viajes y más](./types-of-routes.md). Cuando están disponibles, las rutas de senderismo muestran sus marcas de camino mediante [símbolos OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); otros tipos de rutas usan sus propias marcas.

Al tocar un **símbolo de ruta** en el mapa:

- Se muestra una **lista de las rutas cercanas** en ese lugar.
- Tras seleccionar una ruta de la lista, se abre un [menú contextual](../../map/tracks/track-context-menu.md) para esa ruta, que muestra información detallada y las acciones disponibles.
- La ruta seleccionada se abre en la vista de pista, lo que le permite interactuar con ella de la misma forma que con una pista GPX.

En el **menú contextual** puede:

- Ver [información adicional](#route-info-and-elevation) sobre la ruta seleccionada.
- [Guardar la ruta](#save-as-a-track) como una **pista GPX**.
- [Iniciar la navegación](#start-navigation) por la ruta.

### Detalles de zona y pared de escalada {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

Al seleccionar una [zona o pared de escalada](./types-of-routes.md#climbing-routes), OsmAnd proporciona un resumen detallado del lugar de escalada, que incluye: nombre y ubicación, grado de dificultad de escalada (UIAA, francés, YDS, etc.), tipo de roca, altura y longitud de la ruta, calidad de escalada y condiciones de la superficie.

### Información de la ruta y elevación {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

La siguiente información será visible en el menú contextual:

- **Información de la ruta**: nombre de la ruta, enlace OSM (se requiere el complemento Edición OSM), tipo, descripción, distancia, dirección, ascenso/descenso, rango de altitud, red, operador, estado, color, ida y vuelta, puntos de inicio/fin, etc.
- **General**: tamaño, ubicación, fecha de creación.
- **Información adicional**. Muestra el tipo de actividad.
- botones de acción: [Guardar como](#save-as-a-track) e [Iniciar navegación](#start-navigation).
- [Información de elevación](../../navigation/setup/route-details.md#elevation-info). Muestra información sobre los datos de elevación de la ruta.
- [Analizar pista en el mapa](../../map/tracks/index.md#analyze-track-on-map). Muestra un análisis detallado de los datos de la pista mediante gráficos y mapas.

Para ver el gráfico de elevación, pendiente o detalles de altitud de una ruta seleccionada, toque cualquiera de los siguientes valores en el menú contextual: **Distancia**, **Ascenso**, **Descenso** o **Altitud**.

También puede abrir la *pestaña Pista* y cambiar a la *vista de altitud* para ver el gráfico de elevación completo de la ruta.

**Nota:** los datos de elevación se generan automáticamente y pueden diferir ligeramente según los datos disponibles.

### Guardar como pista {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


Para guardar la ruta como un *archivo GPX*, toque el botón **Guardar (Descargar)** en el [panel de información](../../map/tracks/track-context-menu.md#info-panel). Se abrirá el panel de botones de [acciones rápidas](../../map/tracks/track-context-menu.md#track-actions), donde tendrá acceso a acciones de pista como cambiar la [Apariencia](../../map/tracks/appearance.md), la [Navegación](../../navigation/setup/route-navigation.md) o editar [Planificar una ruta](../../plan-route/create-route.md). Las rutas guardadas se comportan igual que otras pistas y están disponibles en su colección de pistas.

### Iniciar navegación {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Para iniciar la navegación por la ruta OSM seleccionada, toque el botón **Iniciar navegación** en el [**panel de información**](../../map/tracks/track-context-menu.md#info-panel).

Se iniciará el modo [**Navegación por pista**](../../navigation/setup/gpx-navigation.md), que le permitirá seguir la ruta con indicaciones por voz y funciones de navegación.

### Acciones rápidas {#quick-actions}

Puede personalizar si las rutas están activadas o desactivadas mediante el widget de [Acción rápida](../../widgets/quick-action.md#configure-map).


## Búsqueda de rutas {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Busque rutas con la [función de búsqueda](../../search/index.md) por nombre o seleccionando «Rutas» en la [sección Categorías](../../search/search-poi.md#).

Para buscar, vaya al menú *<Translate android="true" ids="search_button"/>* o *<Translate android="true" ids="search_button,search_categories"/>* e introduzca su actividad.

Vaya a *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* para encontrar las rutas deseadas. Los resultados de la búsqueda de rutas muestran el nombre de la ruta, el tipo de actividad, la longitud, la ubicación, el ascenso/descenso (en Android) y la distancia al punto más cercano.

### Filtros de rutas {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

En los resultados de la búsqueda de rutas, toque el botón **Filtros** en la esquina superior derecha para reducir la lista. La pantalla de filtros incluye un campo **Filtrar por nombre**; un bloque **Tipo** con *Oficina*, *Anexo de correos* y *Socio de correos*; y **criterios adicionales** que dependen de la categoría o actividad de ruta seleccionada, ya que cada categoría puede mostrar sus propias características y valores de filtro.

Puede activar o desactivar filtros con los interruptores y algunas secciones incluyen *Mostrar todo* para mostrar valores adicionales.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](../../map/map-context-menu.md)
- [Configurar mapa](../../map/configure-map-menu.md)
- [Pistas](../../map/tracks/index.md)
- [Menú contextual de pistas](../../map/tracks/track-context-menu.md)
- [Transporte público](../public-transport.md)
- [Apariencia de la línea de ruta de navegación](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Buscar PDI](../../search/search-poi.md#)
- [Tipos de rutas](./types-of-routes.md)