---
source-hash: 7e75b5e052216e2fd2c8684ffc936212758b2d1c0efb985a5c0f8ef838440750
sidebar_position: 18
title: Plugins
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

## Descripción general {#overview}

Los complementos amplían significativamente la funcionalidad de OsmAnd. Cada uno está diseñado para abordar una tarea o caso de uso específico, como registrar un viaje, acceder a artículos de Wikipedia sin conexión, visualizar datos del terreno o proporcionar una vista a nivel de calle.

Los complementos pueden ser internos, activados en la aplicación OsmAnd, o externos, programas instalados por separado. Los complementos de terceros funcionan a través de la API de OsmAnd y pueden acceder a los datos de OsmAnd.

## Configurar complemento {#configure-plugin}

Para acceder a la funcionalidad de un complemento, primero debe [habilitarse](#enable--disable), y algunos complementos requieren una [compra](#purchase) antes de usarse. Luego, en algunos casos, se debe activar una capa de mapa específica o se debe [configurar](#plugin-settings) un perfil de usuario.

### Habilitar / Deshabilitar {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Habilitar*

![Habilitar complementos Android](@site/static/img/settings/plugins_enable_android.png) ![Ejemplo de complemento Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Habilitar complementos iOS](@site/static/img/settings/plugins_enable_ios.png) ![Ejemplo de complemento iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Compra {#purchase}

La mayoría de los complementos están disponibles de forma gratuita, solo los complementos de la siguiente lista requieren la compra de una licencia [OsmAnd+ o OsmAnd Pro](../purchases/index.md) para usar:

- [Topografía](../plugins/topography.md)
- [Relieve 3D](../plugins/topography.md#3d-relief) (característica del complemento Topografía)
- [Wikipedia](../plugins/wikipedia.md)
- [Vista de mapa náutico](../plugins/nautical-charts.md)
- [Clima](../plugins/weather.md)

Puede encontrar información detallada sobre la compra de la aplicación en la sección [Compra](../purchases/).

### Características del complemento {#plugin-features}

Los complementos de OsmAnd pueden aumentar estos grupos de características: **Capas**, **Widgets**, **Acciones del menú contextual**, **Acciones del cajón**, **Estilo de mapa**, **Fuente de mapa**, **Perfil**.

🤖 - *solo para la versión de Android de OsmAnd.*

| Nombre del complemento | Características |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Capa de mapa](../plugins/wikipedia.md#download-wikipedia-packages), [Menú contextual](../plugins/wikipedia.md#wikipedia-languages) |
| [Mapas en línea](#online-maps) |[Capa de mapa](../plugins/online-map.md#configure-map-source) |
| [Grabación de viaje](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Perfil](../plugins/trip-recording.md#profile-settings) |
| [Topografía](#topography) | [Capa de mapa](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Relieve 3D](#topography) 🤖 | [Capa de mapa](../plugins/topography.md#3d-relief) |
| [Clima](../plugins/weather.md) | [Capa de mapa](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Pantalla](../plugins/weather.md#configure-screen) |
| [Vista de mapa náutico](#nautical-map-view) | [Estilo de mapa](../plugins/nautical-charts.md#nautical-map-style), [Perfil](../plugins/nautical-charts.md#nautical-options) |
| [Vista de mapa de esquí](#ski-map-view) | [Estilo de mapa](../plugins/ski-maps.md#set-winter-style), [Perfil](../plugins/ski-maps.md#skiing-profile) |
|[Notas de audio/video](#audiovideo-notes) 🤖 | [Capa de mapa](../plugins/audio-video-notes.md#show-all-on-the-map), [Menú contextual](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Edición de OpenStreetMap](#openstreetmap-editing)| [Capa de mapa](../plugins/osm-editing.md#how-to-use) |
|[Posición de estacionamiento](#parking-position) | [Menú contextual](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Capa de mapa](../plugins/mapillary.md#map-layer), [Menú contextual](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Sensores externos](#external-sensors) 🤖 | [Widget](../plugins/external-sensors.md#widgets) |
|[Accesibilidad](#accessibility) 🤖 | [Configuración personalizada](../plugins/accessibility.md#plugin-settings) |
| [Desarrollo de OsmAnd](#osmand-development) | [Configuración personalizada](../plugins/development.md#plugin-settings) |
| [Rastreador de OsmAnd](#osmand-tracker) 🤖 | [Capa de mapa](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Menú contextual](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Rastreador de embarcaciones AIS](#ais-vessel-tracker) 🤖 | [Configuración personalizada](../plugins/ais-tracker.md#plugin-settings) |

### Configuración del complemento {#plugin-settings}

:::caution NOTA
Solo el complemento de desarrollo de OsmAnd y el complemento de edición de OSM cambian la configuración para todos los perfiles. Los complementos restantes se configuran para cada perfil por separado.
:::

La mayoría de los complementos proporcionan configuraciones específicas de perfil o globales, a las que se puede acceder a través de:

- *Menú principal → Complementos → Nombre del complemento → Configuración (&#x2699 para iOS)* o
- *Menú principal → Configuración → Perfil → [Configuración del complemento](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración del complemento Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Configuración del complemento Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración del complemento iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Configuración del complemento iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Los siguientes complementos proporcionan su propia configuración:

🤖 - *solo para la versión de Android de OsmAnd.*

| Nombre del complemento | Configuración |
|:------------|:-------|
| [Grabación de viaje](#trip-recording) | Configurar los [modos de operación](../plugins/trip-recording.md#recording-parameters) de la grabación de viaje |
| [Clima](#weather) | Configurar las unidades de medida para mostrar los eventos meteorológicos |
|[Notas de audio/video](#audiovideo-notes) 🤖 | Seleccionar [formato de video, cuánto tiempo almacenar, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Edición de OpenStreetMap](#openstreetmap-editing)| Especificar [inicio de sesión](../plugins/osm-editing.md#plugin-settings) del usuario |
| [Sensores externos](#external-sensors) 🤖 | Conectarse a la [Configuración](../plugins/external-sensors.md#settings) del dispositivo externo |
| [Accesibilidad](#accessibility) 🤖 | La [Configuración](../plugins/accessibility.md#plugin-settings) le permite usar las [características de accesibilidad de Android](https://www.android.com/accessibility/) dentro de OsmAnd. |
| [Desarrollo de OsmAnd](#osmand-development) | La [Configuración del complemento](../plugins/development.md#plugin-settings) le permite habilitar características especiales para desarrolladores o usuarios experimentados |
| [Rastreador de OsmAnd](#osmand-tracker) 🤖 | Toda la configuración es configurable en una aplicación separada |
| [Rastreador de embarcaciones AIS](#ais-vessel-tracker) | La [Configuración del complemento](../plugins/ais-tracker.md#plugin-settings) le permite habilitar configuraciones especiales |

### Acciones del complemento {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *usando esta opción, la configuración del complemento se puede restablecer a los valores predeterminados*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *la configuración del complemento se puede copiar de otro perfil*.

## Lista de complementos {#plugins-list}

### [Wikipedia](./wikipedia.md) {#wikipedia}

Tener Wikipedia en su viaje le ayuda a aprender más sobre los lugares que visita. Está disponible sin conexión y muestra artículos de Wikipedia relacionados con los puntos de interés directamente en el mapa.

### [Mapas en línea](./online-map.md) {#online-maps}

Los mapas en línea de OsmAnd son una adición extensa a la base de datos de OpenStreetMap ya presente en la aplicación. Con este complemento, puede agregar capas a su mapa con información de varias fuentes.

### [Grabación de viaje](./trip-recording.md) {#trip-recording}

Para contar una historia de dónde ha estado, los datos GPS, como la latitud y la longitud de su ubicación, se pueden registrar y almacenar en un archivo, y luego reutilizarse, mejorarse, enriquecerse con puntos de referencia, proporcionarse para la navegación, compartirse con amigos, etc.

### [Topografía](./topography.md) {#topography}

La información topográfica, como las curvas de nivel, la sombra de relieve, la pendiente y el relieve 3D, ayuda a realizar una evaluación visual de la configuración del terreno al ver la elevación, el relieve, los extremos, la inclinación, los puntos de igual altura, etc.

### [Vista de mapa náutico](./nautical-charts.md) {#nautical-map-view}

La vista de mapa náutico proporciona una representación gráfica detallada de océanos, mares, áreas costeras y ríos para ayudarlo a navegar en el agua, ver rutas de tráfico populares, obstáculos en la vía fluvial, puertos, fondeaderos y otras referencias esenciales.

### [Vista de mapa de esquí](./ski-maps.md) {#ski-map-view}

La vista de mapa de esquí muestra colores de invierno y pistas de descenso o de fondo, así como teleféricos, telesillas, instalaciones y servicios cercanos, lo que es útil para navegar por destinos como áreas recreativas, estaciones de esquí y parques de terreno.

### [Notas de audio/video](./audio-video-notes.md) {#audiovideo-notes}

Cree notas de audio/video para futuras referencias, por ejemplo, para recordar un evento, escena o interacción. Las notas de audio/video creadas están disponibles en *Mis lugares*, así como en el mapa como una capa individual de historias y pensamientos creados por el usuario vinculados a una geolocalización. Solo para Android.

### [Posición de estacionamiento](./parking.md) {#parking-position}

Establezca un punto en el mapa donde su automóvil se deja en la calle y notifique a su calendario cuando finalice el tiempo de estacionamiento. Esto le facilitará el seguimiento del tiempo y la ubicación de su automóvil.

### [Edición de OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

El complemento de edición de OpenStreetMap le permite contribuir a OpenStreetMap, una comunidad global que crea un mapa completo del mundo y proporciona datos de código abierto actualizados y disponibles públicamente.

### [Mapillary](./mapillary.md) {#mapillary}

Vea vistas a nivel de calle de sus rutas o lugares de interés, proporcionadas por [Mapillary](https://www.mapillary.com/) (se requiere conexión a Internet).

### [Accesibilidad](./accessibility.md) {#accessibility}

El complemento de accesibilidad hace que las funciones de accesibilidad del dispositivo estén directamente disponibles en OsmAnd. Solo para Android.

### [Sensores externos](./external-sensors.md) {#external-sensors}

Conecte sensores externos para mostrar sus datos en OsmAnd y almacenar la información en grabaciones de seguimiento.

### [Métricas del vehículo](./vehicle-metrics.md) {#vehicle-metrics}

Conecte el escáner OBD-II para mostrar los datos del vehículo en OsmAnd y almacenar la información en las grabaciones de seguimiento.

### [Clima](./weather.md) {#weather}

Muestra el pronóstico por hora para el día actual y para 7 días.

### [Desarrollo de OsmAnd](./development.md) {#osmand-development}

El complemento de desarrollo de OsmAnd está dirigido a desarrolladores y usuarios experimentados. Le permite simular rutas de navegación, verificar el rendimiento de la representación de la pantalla, etc.

### [Rastreador de OsmAnd](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker le ayuda a ver dónde están sus contactos en el mapa en OsmAnd. Solo para Android.

### [Rastreador de embarcaciones AIS](./ais-tracker.md) {#ais-vessel-tracker}

Muestra las posiciones AIS e información sobre las embarcaciones circundantes. Los datos AIS se reciben a través de la red desde un receptor AIS externo.

## [Crear un complemento personalizado](./custom.md) {#create-a-custom-plugin}

Puede crear su propio complemento siguiendo el artículo *Paquete personalizado*.

_______

> *Última actualización: marzo de 2025*