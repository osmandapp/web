---
source-hash: cf566fbf4725e593ede70401c18b9dd79befb8e6c4e2a8f1fb000487ef2f0277
sidebar_position: 18
title:  Plugins
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



## Resumen {#overview}

Los plugins amplían significativamente la funcionalidad de OsmAnd. Cada uno está diseñado para abordar una tarea o caso de uso específico, como grabar un viaje, acceder a artículos de Wikipedia sin conexión, visualizar datos del terreno o proporcionar una vista a nivel de calle.

Los plugins pueden ser internos, activados en la aplicación OsmAnd, o externos, programas instalados por separado. Los plugins de terceros funcionan a través de la API de OsmAnd y pueden acceder a los datos de OsmAnd.


## Configurar Plugin {#configure-plugin}

Para acceder a la funcionalidad de un plugin, primero debe ser [activado](#enable--disable), y algunos plugins requieren una [compra](#purchase) antes de su uso. Luego, en algunos casos, se debe activar una capa de mapa específica, o se debe [configurar](#plugin-settings) un perfil de usuario.


### Activar / Desactivar {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Activar*

![Activar plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Ejemplo de plugin Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Activar plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Ejemplo de plugin iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Compra {#purchase}

La mayoría de los plugins están disponibles de forma gratuita, solo los plugins de la siguiente lista requieren la compra de una licencia [OsmAnd+ o OsmAnd Pro](../purchases/index.md) para su uso:  

- [Topografía](../plugins/topography.md)
- [Relieve 3D](../plugins/topography.md#3d-relief) (característica del plugin de Topografía)
- [Wikipedia](../plugins/wikipedia.md)
- [Vista de mapa náutico](../plugins/nautical-charts.md)
- [Tiempo](../plugins/weather.md)

Puede encontrar información detallada sobre la compra de la aplicación en la sección [Compra](../purchases/).

### Características del plugin {#plugin-features}

Los plugins de OsmAnd pueden aumentar estos grupos de características: **Capas**, **Widgets**, **Acciones del menú contextual**, **Acciones del panel lateral**, **Estilo de mapa**, **Fuente de mapa**, **Perfil**.

🤖 *- solo para la versión de Android de OsmAnd.*

| Nombre del plugin |Características |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Capa de mapa](../plugins/wikipedia.md#download-wikipedia-packages), [Menú contextual](../plugins/wikipedia.md#wikipedia-settings) |
| [Mapas en línea](#online-maps) |[Capa de mapa](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Grabación de viaje](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Perfil](../plugins/trip-recording.md#recording-settings) |
| [Topografía](#topography) | [Capa de mapa](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Relieve 3D](#topography) 🤖  | [Capa de mapa](../plugins/topography.md#3d-relief) |
| [Tiempo](../plugins/weather.md) | [Capa de mapa](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Pantalla](../plugins/weather.md#weather-forecast-screen) |
| [Vista de mapa náutico](#nautical-map-view) | [Estilo de mapa](../plugins/nautical-charts.md#nautical-map-style), [Perfil](../plugins/nautical-charts.md#nautical-profile)  |
| [Vista de mapa de esquí](#ski-map-view) | [Estilo de mapa](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Perfil](../plugins/ski-maps.md#skiing-profile) |
|[Notas de audio/vídeo](#audiovideo-notes) 🤖  | [Capa de mapa](../plugins/audio-video-notes.md#show-all-on-the-map), [Menú contextual](../plugins/audio-video-notes.md#create-a-single-note), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Edición de OpenStreetMap](#openstreetmap-editing)| [Capa de mapa](../plugins/osm-editing.md#authorization) |
|[Posición de aparcamiento](#parking-position) | [Menú contextual](../plugins/parking.md#set-a-spot), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Capa de mapa](../plugins/mapillary.md#map-layer), [Menú contextual](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Sensores externos](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Accesibilidad](#accessibility) 🤖  | [Ajustes personalizados](../plugins/accessibility.md#plugin-settings) |
| [Desarrollo de OsmAnd](#osmand-development) | [Ajustes personalizados](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Capa de mapa](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#tracker-widget), [Menú contextual](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Rastreador de embarcaciones AIS](#ais-vessel-tracker) 🤖  |  [Ajustes personalizados](../plugins/ais-tracker.md#plugin-settings) |


### Ajustes del plugin {#plugin-settings}

:::caution NOTA
Solo el plugin de desarrollo de OsmAnd y el plugin de edición de OSM cambian los ajustes para todos los perfiles. Los plugins restantes se configuran para cada perfil por separado.  
:::

La mayoría de los plugins proporcionan ajustes de perfil específicos o globales, a los que se puede acceder a través de:

- *Menú principal → Plugins → Nombre del plugin → Ajustes (&#x2699 para iOS)* o  
- *Menú principal → Ajustes → Perfil → [Ajustes del plugin](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes del plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Ajustes del plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes del plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Ajustes del plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Los siguientes plugins proporcionan sus propios ajustes:

🤖 *- solo para la versión de Android de OsmAnd.*

| Nombre del plugin | Ajustes |
|:------------|:-------|
| [Grabación de viaje](#trip-recording) | Configurar los [modos de operación](../plugins/trip-recording.md#required-setup-parameters) de la grabación de viaje |
| [Tiempo](#weather) | Configurar las unidades de medida para mostrar los eventos meteorológicos |
|[Notas de audio/vídeo](#audiovideo-notes) 🤖  | Seleccionar [formato de vídeo, tiempo de almacenamiento, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Edición de OpenStreetMap](#openstreetmap-editing)| Especificar el [inicio de sesión](../plugins/osm-editing.md#settings) del usuario |
|  [Sensores externos](#external-sensors) 🤖  | Conectar a un dispositivo externo [Ajustes](../plugins/external-sensors.md#required-setup-parameters) |
|  [Accesibilidad](#accessibility) 🤖  | Los [Ajustes](../plugins/accessibility.md#plugin-settings) le permiten usar las [características de accesibilidad de Android](https://www.android.com/accessibility/) dentro de OsmAnd. |
| [Desarrollo de OsmAnd](#osmand-development) | Los [Ajustes del plugin](../plugins/development.md#plugin-settings) le permiten habilitar características especiales para desarrolladores o usuarios experimentados |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Todos los ajustes son configurables en una aplicación separada |
| [Rastreador de embarcaciones AIS](#ais-vessel-tracker) | Los [Ajustes del plugin](../plugins/ais-tracker.md#plugin-settings) le permiten habilitar ajustes especiales |

### Acciones del plugin {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *usando esta opción, los ajustes del plugin se pueden restablecer a los valores predeterminados*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *los ajustes del plugin se pueden copiar desde otro perfil*.


## Lista de plugins {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Tener Wikipedia en su viaje le ayuda a aprender más sobre los lugares que visita. Está disponible sin conexión y muestra artículos de Wikipedia relacionados con los puntos de interés directamente en el mapa.

### [Mapas en línea](./online-map.md) {#online-maps}

Los mapas en línea de OsmAnd son una amplia adición a la base de datos de OpenStreetMap ya presente en la aplicación. Con este plugin, puede agregar capas a su mapa con información de diversas fuentes.  

### [Grabación de viaje](./trip-recording.md) {#trip-recording}

Para contar una historia de dónde ha estado, los datos GPS, como la latitud y longitud de su ubicación, se pueden grabar y almacenar en un archivo, y luego reutilizarse, mejorarse, enriquecerse con puntos de ruta, proporcionarse para la navegación, compartirse con amigos, etc.  

### [Topografía](./topography.md) {#topography}

La información topográfica, como las curvas de nivel, el sombreado de relieve, la pendiente y el relieve 3D, ayuda a realizar una evaluación visual del terreno al ver la elevación, el relieve, los extremos, la inclinación, los puntos de igual altura, etc.  

### [Vista de mapa náutico](./nautical-charts.md) {#nautical-map-view}

La vista de mapa náutico proporciona una representación gráfica detallada de océanos, mares, áreas costeras y ríos para ayudarle a navegar en el agua, ver rutas de tráfico populares, obstáculos en la vía fluvial, puertos, fondeaderos y otras referencias esenciales.

### [Vista de mapa de esquí](./ski-maps.md) {#ski-map-view}

La vista de mapa de esquí muestra colores de invierno y pistas de esquí alpino o de fondo, así como teleféricos, telesillas, instalaciones y servicios cercanos, lo que es útil para navegar en destinos como áreas de recreo, estaciones de esquí y parques de terreno.

### [Notas de audio/vídeo](./audio-video-notes.md) {#audiovideo-notes}

Cree notas de audio/vídeo para referencia futura, por ejemplo, para recordar un evento, una escena o una interacción. Las notas de audio/vídeo creadas están disponibles desde *Mis lugares*, así como en el mapa como una capa individual de historias y pensamientos creados por el usuario y vinculados a una geolocalización. Solo para Android.  

### [Posición de aparcamiento](./parking.md) {#parking-position}

Establezca un punto en el mapa donde dejó su coche en la calle y notifique a su calendario cuándo termina el tiempo de estacionamiento. Esto le facilitará el seguimiento del tiempo y la ubicación de su coche.

### [Edición de OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

El plugin de edición de OpenStreetMap le permite contribuir a OpenStreetMap, una comunidad global que crea un mapa completo del mundo y proporciona datos de código abierto, actualizados y disponibles públicamente.  

### [Mapillary](./mapillary.md) {#mapillary}

Vea vistas a nivel de calle de sus rutas o lugares de interés, proporcionadas por [Mapillary](https://www.mapillary.com/) (se requiere una conexión a internet).  

### [Accesibilidad](./accessibility.md) {#accessibility}

El plugin de Accesibilidad hace que las características de accesibilidad del dispositivo estén directamente disponibles en OsmAnd. Solo para Android.  

### [Sensores externos](./external-sensors.md) {#external-sensors}

Conecte sensores externos para mostrar sus datos en OsmAnd y almacenar la información en las grabaciones de viaje.  

### [Métricas del vehículo](./vehicle-metrics.md) {#vehicle-metrics}

Conecte un escáner OBD-II para mostrar los datos del vehículo en OsmAnd y almacenar la información en las grabaciones de viaje.  

### [Tiempo](./weather.md) {#weather}

Muestra el pronóstico por hora para el día actual y para los 7 días siguientes.  

### [Desarrollo de OsmAnd](./development.md) {#osmand-development}

El plugin de desarrollo de OsmAnd está dirigido a desarrolladores y usuarios experimentados. Le permite simular rutas de navegación, verificar el rendimiento de la representación de la pantalla, etc.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker le ayuda a ver dónde están sus contactos en el mapa en OsmAnd. Solo para Android.  

### [Rastreador de embarcaciones AIS](./ais-tracker.md) {#ais-vessel-tracker}

Muestra las posiciones AIS y la información sobre las embarcaciones circundantes. Los datos AIS se reciben a través de la red desde un receptor AIS externo.

## [Crear un plugin personalizado](./custom.md) {#create-a-custom-plugin}

Puede crear su propio plugin siguiendo el artículo *Paquete personalizado*.


_______