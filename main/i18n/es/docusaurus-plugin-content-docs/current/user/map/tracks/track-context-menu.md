---
source-hash: d55b5a0fc81682b066b7df15d53ce4c417c7dc366dac8b7d40d13d50c6f094e7
sidebar_position: 4
title:  Menú contextual del track
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




## Vista general {#overview}

El *Menú contextual del track* proporciona información sobre el *[Track](../../personal/tracks/index.md)* tanto en formato de texto como [gráfico](#altitude--speed-graphs). Permite añadir información, realizar cambios, editar y realizar otras acciones con el track. Puedes acceder al *menú contextual del track* simplemente tocando el track necesario en el mapa o usando el menú *[Mis lugares](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Es posible que necesites abrir la carpeta del track y seleccionar el track deseado tocándolo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista general del menú contextual del track en Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vista general del menú contextual del track en iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Vista general del track {#track-overview}

Cuando tocas un track, se abre la primera pantalla del *Menú contextual del track*: la pestaña *Vista general*. En esta pestaña, puedes encontrar un resumen sobre el track elegido (*[Panel de información](#info-panel)*) y realizar las acciones más comunes con el track utilizando el *[Menú de acciones del track](#track-actions)*. Puedes ver la [descripción e información de servicio](#description-and-info) sobre tu track si deslizas la pestaña Vista general hacia arriba.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Panel de información {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista general del panel de información en Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vista general del panel de información en iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

En la parte superior del panel de información, puedes ver el nombre del track y el símbolo utilizado para marcarlo (*solo en Android*). El nombre del track se puede cambiar utilizando la función de renombrar en el [menú Opciones](#options). Algunos tracks (principalmente las *[Guías de viaje](../../plan-route/travel-guides.md#manage-as-gpx-track)*) pueden tener una breve *[descripción](#description-and-info)* y/o una imagen debajo del *Nombre del track*. Una flecha muestra la *Dirección al punto más cercano del track* desde [Mi ubicación](../../map/interact-with-map.md#my-location-and-zoom).

El panel de información también proporciona información sobre lo siguiente:

- *<Translate android="true" ids="distance"/>*. Muestra la longitud del track.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Muestra la suma total de ascensos y descensos durante el viaje.
- *<Translate android="true" ids="altitude_range"/>*. Indica la altitud mínima y máxima en un track.

:::note
En caso de que tu track haya sido creado en OsmAnd o en cualquier otra aplicación de seguimiento (por lo que sus puntos tienen etiquetas de [`time` y `speed`](../../plugins/trip-recording#recorded-gpx-file)), el panel de información también contendrá información sobre *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) o *<Translate ios="true" ids="total_time"/>* (*iOS*) (la duración del tiempo entre los puntos de inicio y fin del track), *<Translate android="true" ids="shared_string_time_moving"/>* (la suma del tiempo mientras se conduce).
:::

### Acciones del track {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista general del menú contextual del track en Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vista general del menú contextual del track en iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Botones Mostrar / ocultar**. Cambia la visibilidad del track en el mapa.
- [Apariencia](./appearance.md). Personaliza la apariencia de tu track.
- **Editar track** (*Android*). Abre el track en la herramienta [Planificar una ruta](../../plan-route/create-route.md).
- **Exportar** (*iOS*). Te permite [exportar un track](../../personal/tracks/manage-tracks.md#export).
- **Direcciones**. Abre el track en modo *[Navegación](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opciones {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Opciones del menú del track en Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Opciones del menú del track en iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

El menú **Opciones** te permite gestionar y modificar el track seleccionado con diversas herramientas y ajustes.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controla la visibilidad del track en el mapa.
- **<Translate android="true" ids="shared_string_appearance"/>** – Abre el [menú Apariencia](../tracks/appearance.md) para personalizar el color, el ancho y la transparencia del track.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Inicia la [navegación por track](../../navigation/setup/gpx-navigation.md), alineando tu ruta con el track seleccionado.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Solo Android*) – Une segmentos del track para rellenar huecos.
- **<Translate android="true" ids="analyze_on_map"/>**. Abre la herramienta [Analizar en el mapa](../tracks/index.md#analyze-track-on-map) para inspeccionar la elevación, velocidad y distancia del track.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Solo Android*) - Analiza el track por [intervalos](./track-context-menu.md#split-interval) de tiempo o distancia.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporta el track seleccionado en formato GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Sube](../../plugins/osm-editing.md#upload-gps-track) el track seleccionado a OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Abre la herramienta [Planificar ruta](../../plan-route/create-route.md) para modificar el track.
- **Duplicar track** (*Solo iOS*) – Crea y guarda una copia del track.
- **<Translate android="true" ids="rename_track"/>** – Permite cambiar el nombre del track.
- **<Translate android="true" ids="change_folder"/>** – Mueve el track a otra carpeta o crea una nueva.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Solo Android*) - Permite [filtrar puntos del track](#gps-filter) para refinar la precisión.
- **<Translate android="true" ids="altitude_correction"/>** (*Solo Android*) - Para [recibir datos de elevación](#calculate-missing-elevation), [adjunta tu track a las carreteras](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) o calcúlalo sin conexión (se necesitan [Mapas de terreno](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Solo Android*) - [Simula tu posición](../../plugins/development.md#gpx-track-simulation) usando un track GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Elimina el track.


### Descripción e Información {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Descripción e Información en Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![Descripción e Información en Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Descripción de un track en iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Esta sección de la pestaña *Vista general* muestra ***datos de etiquetas*** y ***toda la información general***.

- **Descripción**. El botón *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) se utiliza para editar la descripción del track. Etiqueta `desc`.

- **General**. Contiene información sobre el *tamaño del archivo GPX*, la *carpeta del archivo* y la *fecha de creación* con la etiqueta `time`.

- **Información**. Etiquetas: *Palabras clave* - `keywords`, &nbsp;*Enlace* - `link`, &nbsp;*Actividad* - `activities`.

- **Autor**. Etiquetas: *Autor* - `author`, &nbsp;*Nombre* - `name`, &nbsp;*Dirección de correo electrónico* - `email`, &nbsp;*Enlace* - `link`.

- **Copyright**. Etiquetas: *Copyright* - `copyright`, &nbsp;*Autor* - `author`, &nbsp;*Año* - `year`, &nbsp;*Licencia* - `license`.

- **Adicional**. Todas las etiquetas de la sección ***extensiones***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Ejemplo de código XML de un archivo GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Tipo de actividad del track {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tipo de actividad del track](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tipo de actividad del track](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


La función *Actividad* en OsmAnd te permite etiquetar los tracks GPX grabados con actividades específicas para su posterior análisis y organización en carpetas.

- [Etiquetas de actividad para tracks GPX](../../plugins/trip-recording.md#recording-settings). Al grabar un track GPX, puedes asignar un tipo de actividad. Este etiquetado de actividad te ayuda a categorizar inicialmente los tracks.
- [Filtro de actividad](../../personal/tracks/smart-folder.md#search-filter). Puedes filtrar los tracks GPX grabados por actividad, lo que te permite centrarte en encontrar tipos específicos de grabaciones, como todos los tracks de ciclismo o senderismo.
- [Gestionar tipos de actividad](../../personal/tracks/manage-tracks.md#selection-mode). Puedes cambiar el tipo de actividad para carpetas o tracks seleccionados utilizando el modo de selección en la pestaña Tracks del menú Mis Lugares.
- **Lista de actividades**. Las categorías y grupos de actividades se definen en los recursos de OsmAnd. Para desarrolladores y colaboradores, la lista de actividades se mantiene en un formato estructurado en [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), que detalla los grupos y tipos de actividades disponibles.


## Gráficos de Altitud / Velocidad {#altitude--speed-graphs}

En la pestaña *<Translate android="true" ids="shared_string_gpx_track"/>*, puedes encontrar información sobre el track en forma gráfica. Usando el interruptor, puedes elegir qué datos mostrar en el gráfico: datos separados sobre *[<Translate android="true" ids="altitude"/>](#altitude)*, sobre la *[Velocidad](#speed)* (esta opción está disponible solo para tracks grabados) o mostrar todo junto (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interacción con el gráfico:

- ***Colocar un punto en el gráfico***. Si quieres ver la información en un punto particular de un track, puedes tocar en cualquier parte del gráfico y aparecerá un puntero con los valores. Al mismo tiempo, aparecerá un marcador azul en el mapa, señalando esa ubicación en el track.
- ***Acercar/alejar***. Puedes usar [movimientos con dos dedos](../../map/interact-with-map.md#gestures) para acercar y alejar para una vista más detallada. Después de acercar, puedes mover el gráfico a la derecha y a la izquierda, lo que corresponde a avanzar y retroceder a lo largo de la ruta.
- ***Información adicional***. El lado derecho del gráfico contiene datos sobre la altitud más baja, más alta y promedio, la pendiente y la velocidad. En la parte inferior del gráfico, puedes ver las marcas de distancia.


### Información general {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del track Gráficos en Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del track Gráficos en iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

En la pestaña **Vista general**, puedes ver parámetros como:

- *<Translate android="true" ids="distance"/>*. La suma de la distancia total recorrida en el track, o la longitud del track en sí.
- *<Translate android="true" ids="shared_string_time_span"/>*. El intervalo de tiempo entre los puntos de inicio y fin del track.
- *<Translate android="true" ids="shared_string_start_time"/>* La hora exacta en que comienza la grabación del track.
- *<Translate android="true" ids="shared_string_end_time"/>*. La hora de finalización de la grabación del track.

Los **botones** activos dan acceso a acciones como:

- El botón **<Translate android="true" ids="analyze_on_map"/>** abre el [menú Analizar track](../tracks/index.md#analyze-track-on-map) para el track.
- El botón **<Translate android="true" ids="shared_string_options"/>** abre un menú con:

  - *Editar* abre el track en la [herramienta Planificar ruta](../../plan-route/index.md).
  - *Eliminar* te permite eliminar el elemento del track seleccionado.
  - *Dividir intervalo* abre la [función Dividir intervalo](#split-interval) para el track.


### Velocidad {#speed}

:::note Solo tracks grabados
Esta pestaña solo puede ser visible en los tracks grabados. Los puntos en este tipo de track tienen etiquetas de **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gráfico del track Velocidad en Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gráfico del track Velocidad en iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

El gráfico de **Velocidad** muestra métricas como:

- *<Translate android="true" ids="average_speed"/>*. Indica la velocidad media durante el viaje.
- *<Translate android="true" ids="max_speed"/>*. Muestra la velocidad máxima durante el viaje.
- *<Translate android="true" ids="moving_time"/>*. Muestra el tiempo total durante el viaje solo en movimiento.
- *<Translate android="true" ids="distance_moving"/>*. Indica la distancia ajustada del viaje.


### Altitud {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Gráfico del track altitud en Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Gráfico del track altitud en iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

El gráfico de **Altitud** muestra métricas como:

- *<Translate android="true" ids="average_altitude"/>*. Indica la altitud media sobre el nivel del mar en la ruta.
- *<Translate android="true" ids="altitude_range"/>*. La altitud más alta y más baja registrada en la ruta.
- *<Translate android="true" ids="altitude_ascent"/>*. La ganancia acumulada de altitud sobre el nivel del mar a lo largo de la ruta.
- *<Translate android="true" ids="altitude_descent"/>*. La pérdida acumulada de altitud a lo largo de la ruta.

**Obtener datos de elevación.**
Si no hay *información de elevación* en la ruta, puedes añadirla de las siguientes maneras:

- *Botón Calcular elevación → [Usar carreteras cercanas](../../plan-route/create-route.md#get-elevation-data)*. Utiliza un mapa sin conexión para encontrar carreteras cercanas y datos de elevación. Te permite personalizar la geometría del track.
- [Usar mapas de terreno](#calculate-missing-elevation). Utiliza mapas de terreno para obtener datos de elevación. La geometría del track permanece sin cambios.


### Calcular elevación faltante {#calculate-missing-elevation}

:::note Suscripción OsmAnd Pro
La función de calcular la elevación sin conexión solo está disponible para los [**suscriptores de OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Esta función te permite calcular el perfil de elevación para un track GPX sin conexión para cualquier terreno entre 70 grados de latitud norte y 70 grados de latitud sur, basándose en los [datos del mapa de terreno](../../plugins/topography.md#download-maps). *Los mapas de terreno (3D) deben haber sido descargados previamente*.

1. Descarga los [Mapas de terreno (3D)](../../plugins/topography.md#download-maps) para la región requerida.
2. Si el track no contiene datos de altitud, ve al menú contextual del track (*Menú contextual del track → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), selecciona *Usar mapas de terreno*, y después del cálculo obtendrás un gráfico del track basado en los datos del terreno.

    ![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_2.png) ![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_4.png) ![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Si estás creando una ruta con la herramienta [Planificar una ruta](../../plan-route/create-route.md#graph) usando el método *Línea recta* y no hay datos de elevación en el gráfico, necesitas:
    - Tocar *Obtener datos de elevación*, luego seleccionar *Usar mapas de terreno*.
    - Después del cálculo, obtendrás el gráfico completo de Altitud/Pendiente de tu ruta basado en los datos del terreno.

  ![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_9.png) ![Gráfico del track altitud en Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Puntos / Waypoints {#points--waypoints}

Los waypoints son uno de los tipos de puntos disponibles en el mapa. En general, pueden ser puntos de track que forman parte de archivos GPX. Una descripción detallada está disponible en el artículo [puntos en el mapa](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del track Puntos en Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual del track Puntos en iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

En esta pestaña *Puntos*:

- [Mostrar datos de los puntos del track](#display-custom-gpx-tags) y modificar los puntos de tu track (waypoints y puntos de ruta), [eliminarlos y añadir](#points--waypoints) waypoints a un track.
- Crear y modificar [Grupo (carpeta) de puntos](#waypoint-groups).


### Añadir Waypoint a un Track {#add-waypoint-to-a-track}

Los waypoints se pueden añadir al track que se está grabando actualmente o a cualquier track desde [*Mis Lugares → Lista de Tracks*](../../personal/tracks/manage-tracks.md):

- Usa el [menú contextual del mapa](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Los waypoints se muestran automáticamente si el track seleccionado está activado en el mapa.
  - [Mantén pulsado](../../map/map-context-menu.md#select-any-point-long-tap) el mapa en cualquier ubicación elegida para crear un waypoint.
  - Puedes establecer información sobre el waypoint en el [menú contextual del mapa](../../map/map-context-menu.md#-add--edit-track-waypoint) que se abre.

- Usa el botón [Añadir Waypoint](#points--waypoints) del menú contextual del track.

- Añade un waypoint como un botón de [acción rápida](../../widgets/quick-action.md#my-places).

### Crear Waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![Añadir waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![Añadir waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Toca el botón *Añadir Waypoint* para abrir la pantalla de creación de waypoints (esta pantalla es similar al [Menú contextual de Favoritos](../../personal/favorites.md#create)).

1. **Añade** el *Nombre* del waypoint, la *Dirección* de la ubicación seleccionada y una *Descripción* para él (opcional).
2. **Selecciona** Grupo.

    - Selecciona categorías de grupos creadas previamente o crea una nueva.
    - Crea un nombre y una apariencia para el nuevo grupo de waypoints. Esto también se llama *nueva categoría* en la aplicación.
    - El **icono**, el **color del icono** y la **forma** se usarán para todos los nuevos waypoints añadidos al grupo.

3. Ajuste de **Apariencia**:

    - Selecciona un [**icono**](../../personal/favorites.md#favorite-icons) de la lista de todos los iconos de categorías de PDI.
    - Selecciona el **Color** del icono.
    - Luego selecciona la **Forma** del icono: *Círculo, Octágono, Cuadrado*.

4. **Reemplaza** otro punto con este, si es necesario.


### Acciones con Grupos {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de Grupo del menú del track en Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de Grupo del menú del track en iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

El *menú de tres puntos* ( &#8285; ) abre el *Menú de Grupo* de waypoints.

**Acciones:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Te permite mostrar o no mostrar los waypoints del grupo en el mapa. O puedes usar [el botón de pantalla](#points--waypoints) para mostrar u omitir los waypoints del grupo en el mapa.
- **<Translate android="true" ids="shared_string_rename"/>** - Cambia el nombre del grupo.
- **<Translate android="true" ids="change_default_appearance"/>** - Cambia las opciones de visualización para un grupo de waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** o **Eliminar** (*Solo Android*) - Mueve los waypoints del grupo a la lista de [Marcadores de mapa](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Solo Android*) - Mueve los waypoints del grupo a [Favoritos](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Solo Android*) - Crea una ruta entre waypoints. El primer y último punto se convierten en el inicio y el final de la ruta, y el resto se convierten en puntos intermedios.
- **<Translate android="true" ids="shared_string_delete"/>** - Elimina un grupo de waypoints.


### Grupos de Waypoints {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Mapa de Grupo del menú del track en Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Mapa de Grupo del menú del track en Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapa de Grupo del menú del track en iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Mapa de Grupo del menú del track en iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gestiona la visibilidad de los grupos en el mapa: si ocultas un track, todo el grupo también se ocultará.

Puedes activar o desactivar los waypoints del grupo en el mapa usando el botón en la esquina superior derecha del menú contextual del track en el mapa. Tócalo y selecciona la acción requerida.

### Mostrar etiquetas GPX personalizadas {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Puntos](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Puntos](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Ejemplo de código XML de etiquetas de Waypoint</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Ejemplo de código XML de etiquetas de punto de ruta</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Etiquetas:**

| Parámetro | Descripción |
| --- | --- |
| `lat` | **Latitud** es una de las coordenadas geográficas con las que se puede determinar una ubicación. |
| `lon` | **Longitud** es otra de las coordenadas geográficas con las que se puede determinar una ubicación. |
| `time` | **Marca de tiempo** es la fecha y hora en que se registró el punto. |
| `name` | **Nombre** es el nombre del punto. Se permiten todos los caracteres. |
| `desc` | **Descripción** contiene información adicional sobre el punto. |
| `type` | **Seleccionar grupo** es el nombre de la carpeta de OsmAnd en la que se guarda este waypoint. |
| `cmt` | **Comentario** es un comentario breve sobre un punto. |
| `link` | **Enlace** es un enlace a cualquier fuente. |
| `ele` | **Elevación** es la elevación de un punto. |


**Extensiones:**

| Extensión | Descripción |
| --- | --- |
| `osmand:icon` | **Icono** es el nombre del icono que seleccionaste. |
| `osmand:color` | **Color** es el color en formato HEX. |
| `osmand:background` | **Fondo** es la forma del icono, como un círculo, octágono o cuadrado. |
| `osmand:country` | **País** es el nombre del país. |
| `osmand:address` | **Dirección** es la dirección. |
| `osmand:postcode` | **Código postal** es el código postal. |
| `osmand:telephone` | **Teléfono** es el número de teléfono. |
| `osmand:state` | **Estado** es el nombre del estado. |
| `osmand:start_date` | **Fecha de inicio** son los datos de programación de un punto. |

Los waypoints se graban con el track en el [archivo GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Cada uno de estos waypoints tiene su propio conjunto de etiquetas para la descripción. Todas las etiquetas directamente relacionadas con la descripción de los waypoints que se pueden editar directamente en la aplicación OsmAnd se enumeran en esta sección.
Para cambiar la descripción del Waypoint, puedes seguir uno de los siguientes caminos:

1. Encuentra el track requerido en la lista de la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Toca el track en el mapa, si está incluido en la [lista de visibles](../tracks/index.md#display-tracks-on-the-map).
3. Toca el waypoint requerido si está [visible](../../personal/tracks/manage-tracks.md#track-menu) en el mapa.

    Luego, en el [Menú contextual de Tracks](./track-context-menu.md), toca *puntos*, el campo de la carpeta requerida con los waypoints disponibles y el Waypoint que estás buscando. Selecciona el menú *Acciones →* **Editar waypoint GPX** y realiza los cambios. No puedes cambiar la fecha de creación de un punto, *marca de tiempo*, en la aplicación.

Las **etiquetas de servicios** que describen información adicional, como horarios de apertura o número de teléfono, específicas del PDI, toman esa información de los datos de OpenStreetMap o de los datos que introdujiste al crear el PDI. Puedes editar dichas etiquetas y [etiquetas personalizadas](#display-custom-gpx-tags) solo en el código del archivo GPX, que puedes abrir con cualquier editor de texto en tu dispositivo.


## Dividir intervalo {#split-interval}

<InfoAndroidOnly />

Puedes dividir el track en intervalos, como distancia y tiempo, y analizarlo.

Divide el track por intervalo de distancia o tiempo.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Pantalla de división de intervalo del track en Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Pantalla de división de intervalo del track por tiempo en Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## Filtro GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Pantalla de filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Este filtro te permite mejorar las estadísticas de tu track excluyendo datos innecesarios o incorrectos. Puedes filtrar los puntos del track que no se ajustan a los parámetros de tu track y, como resultado, obtener un gráfico más preciso y una línea de ruta visual sin distorsiones ni ruido de grabación. Puedes realizar cambios con filtros como *Suavizado*, *Velocidad*, *Altitud* y *Precisión GPS*, que ocultan los puntos filtrados del track actual. Además, en el menú *Estadísticas*, puedes comprobar cómo se muestran tus cambios en el gráfico antes de guardarlos. También puedes *Restablecer al original* y *Guardar como una copia* de tu track en este filtro sin guardar el original.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La página de la aplicación Filtro GPS de Android incluye lo siguiente:

- Un mapa con un track guardado y un botón extra, *Ubicación de mi track* (alinea un track al centro de un mapa).
- Botones *Actualizar* y *Menú* en la parte superior (el *Menú* abre el campo *Acción* en la parte inferior de la página).
- Bloques *Filtro*, *Estadísticas*, *Acción*.


### Menú de filtro {#filter-menu}

En este menú, puedes cambiar algunos parámetros de tu track como *Suavizado*, *Velocidad*, *Altitud* o *Precisión GPS* usando filtros. El menú se divide en una *parte de Puntos* y una *parte de Acciones*.

| ***Puntos*** |
|:------------|
|Esta parte muestra el número de puntos después del filtrado y el número total de puntos en el track seleccionado antes de que se usaran los filtros.|
|![Números de puntos del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Acciones*** |
|*Suavizado*. Establece la distancia umbral entre puntos. Los puntos del track que están al menos a esta distancia del último punto visible se ocultan. Todos los puntos del track que están a una distancia entre sí menor que la distancia seleccionada por el filtro se ocultarán. Los puntos del track se cuentan desde el último punto visible. Ten en cuenta que umbrales altos pueden simplificar en exceso la geometría del track.|
|![Números de suavizado del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Velocidad*. Solo los puntos del track correspondientes al intervalo de velocidad seleccionado se muestran en el gráfico y en el mapa, los demás se ocultan.|
|![Números de velocidad del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitud*. Solo los puntos del track correspondientes al intervalo de altitud seleccionado se muestran en el gráfico y en el mapa, los demás se ocultan.|
|![Números de altitud del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precisión GPS*. Establece el valor máximo permitido para HDOP. Los puntos con un valor superior se ocultan.|
|![Números de precisión del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Estadísticas {#statistics}

![Gráfico del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

La pestaña Estadísticas muestra información sobre el track **modificado**, es decir, el track sin los valores filtrados. Se muestra en los bloques de estadísticas y en los datos del gráfico.

- La parte de *Datos* muestra estadísticas similares al [Menú de filtro](#filter-menu).
- La parte de *Gráfico* muestra tres tipos de gráficos por parámetros: Vista general, Altitud y Velocidad. Esta funcionalidad es una copia del [Gráfico del track](#altitude--speed-graphs).

### Acciones {#actions}

![Acción del filtro GPS en Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

La lista de acciones está disponible en la parte inferior de la pestaña **Filtro** o **Estadísticas**. OsmAnd aplica todos los cambios realizados en el track sin actualizar el archivo, pero puedes guardar los cambios manualmente.

- *<Translate android="true" ids="reset_to_original"/>*. Te permite devolver los parámetros a su estado original.
- *<Translate android="true" ids="save_as_copy"/>*. Te permite guardar el track como uno nuevo.
- *<Translate android="true" ids="save_changes_into_file"/>*. Te permite reescribir el track con los nuevos parámetros.


## Artículos relacionados {#related-articles}

- [Tracks GPX](../../personal/tracks/manage-tracks.md)
- [Tracks en el mapa](./track-context-menu.md)
- [Navegación por track](../../navigation/setup/gpx-navigation.md)
- [Planificar ruta](../../plan-route/index.md)
- [Plugin de Grabación de viaje](../../plugins/trip-recording.md)
- [Analizar en el mapa](../tracks/index.md#analyze-track-on-map)