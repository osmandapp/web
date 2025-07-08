---
source-hash: 7e2ccc0ea2e0d19c95b956a22f974da03bc1dcae580234c1cfcce8ededbdeb06
sidebar_position: 4
title:  Menú contextual de pista
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

El *menú contextual de pista* proporciona información sobre la *[pista](../../personal/tracks/index.md)* tanto en formato de texto como [gráfico](#altitude--speed-graphs). Permite añadir información, realizar cambios, editar y llevar a cabo varias otras acciones con la pista. Puedes acceder al *menú contextual de pista* simplemente tocando la pista deseada en el mapa o utilizando el menú *[Mis lugares](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Es posible que necesites abrir la carpeta de pistas y seleccionar la pista deseada tocándola.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Resumen de la pista {#track-overview}

Al tocar una pista, se abre la primera pantalla del *Menú contextual de pista* - la *pestaña de Resumen*. En esta pestaña, puedes encontrar un resumen de la pista elegida (*[Panel de información](#info-panel)*) y realizar las acciones más comunes con la pista utilizando el *[menú de Acciones de pista](#track-actions)*. Puedes ver [descripción e información de servicio](#description-and-info) sobre tu pista si deslizas la pestaña de Resumen hacia arriba.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Panel de información {#info-panel}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

En la parte superior del panel de información, puedes ver el nombre de la pista y el símbolo utilizado para marcarla (*solo Android*). El nombre de la pista se puede cambiar utilizando la función de renombrar en el [menú de Opciones](#options). Algunas pistas (principalmente las *[Guías de viaje](../../plan-route/travel-guides.md#manage-as-gpx-track)*) pueden tener una *[descripción](#description-and-info)* corta y (o) una imagen debajo del *nombre de la pista*. Una flecha muestra la *dirección al punto más cercano de la pista* desde [Mi ubicación](../../map/interact-with-map#my-location-and-zoom).

El panel de información también proporciona información sobre lo siguiente:

- *<Translate android="true" ids="distance"/>*. Muestra la longitud de la pista.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Muestra la suma total de ascensos y descensos durante el viaje.
- *<Translate android="true" ids="altitude_range"/>*. Indica la altitud mínima y máxima en una pista.

:::note
En caso de que tu pista haya sido creada en OsmAnd o cualquier otra aplicación de seguimiento (por lo que sus puntos tienen etiquetas de [`tiempo` y `velocidad`](../../plugins/trip-recording#recorded-gpx-file)), el panel informativo también contendrá información sobre la *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) o *<Translate ios="true" ids="total_time"/>* (*iOS*) (la duración entre el punto de inicio y el punto final de la pista), *<Translate android="true" ids="shared_string_time_moving"/>* (la suma del tiempo en movimiento).
:::

### Acciones de pista {#track-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Botones de **Mostrar / ocultar**. Cambia la visibilidad de la pista en el mapa.
- [Apariencia](./appearance.md). Personaliza la apariencia de tu pista.
- **Editar pista** (*Android*). Abre la pista en la herramienta [Planificar una ruta](../../plan-route/create-route.md).
- **Exportar** (*iOS*). Permite [exportar una pista](../../personal/tracks/manage-tracks.md#exportar).
- **Direcciones**. Abre la pista en el modo *[Navegación](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Opciones {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

El menú **Opciones** te permite gestionar y modificar la pista seleccionada con diversas herramientas y configuraciones.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controla la visibilidad de la pista en el mapa.
- **<Translate android="true" ids="shared_string_appearance"/>** – Abre el [menú de Apariencia](../tracks/appearance.md) para personalizar el color, el ancho y la transparencia de la pista.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Inicia la [navegación por pista](../../navigation/setup/gpx-navigation.md), alineando tu ruta con la pista seleccionada.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Solo Android*) – Fusiona segmentos de pista para rellenar huecos.
- **<Translate android="true" ids="analyze_on_map"/>**. Abre la herramienta [Analizar en el mapa](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) para inspeccionar la elevación, velocidad y distancia de la pista.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Solo Android*) - Analiza la pista por [intervalos de tiempo o distancia](./track-context-menu.md#split-interval).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exporta la pista seleccionada en formato GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Sube](../../plugins/osm-editing.md#upload-gps-track) la pista seleccionada a OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Abre la herramienta [Planificar ruta](../../plan-route/create-route.md) para modificar la pista.
- **Duplicar pista** (*Solo iOS*) – Crea y guarda una copia de la pista.
- **<Translate android="true" ids="rename_track"/>** – Permite cambiar el nombre de la pista.
- **<Translate android="true" ids="change_folder"/>** – Mueve la pista a otra carpeta o crea una nueva.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Solo Android*) - Permite [filtrar puntos de la pista](#gps-filter) para refinar la precisión.
- **<Translate android="true" ids="altitude_correction"/>** (*Solo Android*) - Para [recibir datos de elevación](#calculate-missing-elevation), [adjuntar tu pista a las carreteras](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) o calcularla sin conexión (se necesitan [mapas de terreno](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Solo Android*) - [Simula tu posición](../../plugins/development.md#gpx-track-simulation) utilizando una pista GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Elimina la pista.


### Descripción e información {#description-and-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Esta sección de la pestaña *Resumen* muestra ***datos de etiquetas*** y ***toda la información general***.

- **Descripción**. El botón *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) se utiliza para editar la descripción de la pista. Etiqueta `desc`.

- **General**. Contiene información sobre el *tamaño del archivo GPX*, la *carpeta del archivo* y la *fecha de creación* con la etiqueta `time`.

- **Información**. Etiquetas: *Palabras clave* - `keywords`, &nbsp;*Enlace* - `link`, &nbsp;*Actividad* - `activities`.

- **Autor**. Etiquetas: *Autor* - `author`, &nbsp;*Nombre* - `name`, &nbsp;*Dirección de correo electrónico* - `email`, &nbsp;*Enlace* - `link`.

- **Copyright**. Etiquetas: *Copyright* - `copyright`, &nbsp;*Autor* - `author`, &nbsp;*Año* - `year`, &nbsp;*Licencia* - `license`.

- **Adicional**. Todas las etiquetas de la sección ***extensiones***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Ejemplo de código XML de archivo GPX</summary>

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


### Actividad de información de pista {#track-information-activity}

<InfoAndroidOnly />

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_andr.png)

La función *Actividad* en OsmAnd te permite etiquetar pistas GPX grabadas con actividades específicas para su posterior análisis y organización en carpetas.

- [Etiquetas de actividad para pistas GPX](../../plugins/trip-recording.md#recording-settings). Al grabar una pista GPX, puedes asignar un tipo de actividad. Este etiquetado de actividad te ayuda a categorizar inicialmente las pistas.
- [Filtro de actividad](../../personal/tracks/smart-folder.md#search-filter). Puedes filtrar las pistas GPX grabadas por actividad, lo que te permite centrarte en encontrar tipos específicos de grabaciones, como todas las pistas de ciclismo o senderismo.
- [Gestionar tipos de actividad](../../personal/tracks/manage-tracks.md#selection-mode). Puedes cambiar el tipo de actividad para carpetas o pistas seleccionadas utilizando el modo de selección en la pestaña Pistas del menú Mis lugares.
- **Lista de actividades**. Las categorías y grupos de actividades se definen en los recursos de OsmAnd. Para desarrolladores y colaboradores, la lista de actividades se mantiene en un formato estructurado en [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), que detalla los grupos y tipos de actividades disponibles.


## Gráficos de altitud / velocidad {#altitude--speed-graphs}

En la pestaña *<Translate android="true" ids="shared_string_gpx_track"/>*, puedes encontrar información sobre la pista en formato gráfico. Usando el interruptor, puedes elegir qué datos mostrar en el gráfico: datos separados sobre *[<Translate android="true" ids="altitude"/>](#altitude)*, sobre la *[Velocidad](#speed)* (esta opción solo está disponible para pistas grabadas) o mostrar todo junto (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interacción con el gráfico:

- ***Colocar un punto en el gráfico***. Si quieres ver la información en un punto particular de una pista, puedes tocar en cualquier parte del gráfico y aparecerá un puntero con los valores. Al mismo tiempo, aparecerá un marcador azul en el mapa, señalando esa ubicación en la pista.
- ***Acercar/alejar***. Puedes usar [movimientos de dos dedos](../../map/interact-with-map.md#gestures) para acercar y alejar para una vista más detallada. Después de acercar, puedes mover el gráfico a la derecha y a la izquierda, lo que corresponde a avanzar y retroceder a lo largo de la ruta.
- ***Información adicional***. El lado derecho del gráfico contiene datos sobre la altitud más baja, más alta y promedio, la pendiente y la velocidad. En la parte inferior del gráfico, puedes ver las marcas de distancia.


### Información general {#overview-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

En la pestaña **Resumen**, puedes ver parámetros como:

- *<Translate android="true" ids="distance"/>*. La suma de la distancia total recorrida en la pista, o la longitud de la pista misma.
- *<Translate android="true" ids="shared_string_time_span"/>*. El intervalo de tiempo entre los puntos de inicio y fin de la pista.
- *<Translate android="true" ids="shared_string_start_time"/>* La hora exacta en que comienza la grabación de la pista.
- *<Translate android="true" ids="shared_string_end_time"/>*. La hora de finalización de la grabación de la pista.

Los **botones** activos dan acceso a acciones como:

- El botón **<Translate android="true" ids="analyze_on_map"/>** abre el [menú Analizar pista](../tracks/index.md#analyze-track-on-map) para la pista.
- El botón **<Translate android="true" ids="shared_string_options"/>** abre un menú con:

  - *Editar* abre la pista en la herramienta [Planificar ruta](../../plan-route/index.md).
  - *Eliminar* permite eliminar el elemento de pista seleccionado.
  - *Dividir intervalo* abre la [función Dividir intervalo](#split-interval) para la pista.


### Velocidad {#speed}

:::note Solo pistas grabadas
Esta pestaña solo puede ser visible en pistas grabadas. Los puntos de este tipo de pista tienen etiquetas de **[`velocidad`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

El gráfico de **Velocidad** muestra métricas como:

- *<Translate android="true" ids="average_speed"/>*. Indica la velocidad promedio durante el viaje.
- *<Translate android="true" ids="max_speed"/>*. Muestra la velocidad máxima durante el viaje.
- *<Translate android="true" ids="moving_time"/>*. Muestra el tiempo total durante el viaje solo en movimiento.
- *<Translate android="true" ids="distance_moving"/>*. Indica la distancia ajustada del viaje.


### Altitud {#altitude}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

El gráfico de **Altitud** muestra métricas como:

- *<Translate android="true" ids="average_altitude"/>*. Indica la altitud promedio sobre el nivel del mar en la ruta.
- *<Translate android="true" ids="altitude_range"/>*. La altitud más alta y más baja registrada en la ruta.
- *<Translate android="true" ids="altitude_ascent"/>*. La ganancia acumulada de altitud sobre el nivel del mar a lo largo de la ruta.
- *<Translate android="true" ids="altitude_descent"/>*. La pérdida acumulada de altitud a lo largo de la ruta.

**Obtener datos de elevación.**
Si no hay *información de elevación* en la ruta, puedes añadirla de las siguientes maneras:

- *Botón Calcular elevación → [Usar carreteras cercanas](../../plan-route/create-route.md#get-elevation-data)*. Utiliza un mapa sin conexión para encontrar carreteras cercanas y datos de elevación. Permite personalizar la geometría de la pista.
- [Usar mapas de terreno](#calculate-missing-elevation). Utiliza mapas de terreno para obtener datos de elevación. La geometría de la pista permanece sin cambios.


### Calcular elevación faltante {#calculate-missing-elevation}

:::note Suscripción a OsmAnd Pro
La función de calcular elevación sin conexión solo está disponible para [**suscriptores de OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Esta función te permite calcular el perfil de elevación para pistas GPX sin conexión para cualquier terreno entre 70 grados de latitud norte y 70 grados de latitud sur, basándose en [datos de mapas de terreno](../../plugins/topography.md#download-maps). *Los mapas de terreno (3D) deben haberse descargado previamente*.

1. Descarga [mapas de terreno (3D)](../../plugins/topography.md#download-maps) para la región requerida.
2. Si la pista no contiene datos de altitud, ve al menú contextual de la pista (*Menú contextual de la pista → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), selecciona *Usar mapas de terreno*, y después del cálculo obtendrás un gráfico de la pista basado en los datos del terreno.

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Si estás creando una ruta con la herramienta [Planificar una ruta](../../plan-route/create-route.md#graph) utilizando el método *Línea recta* y no hay datos de elevación en el gráfico, necesitas:
    - Tocar *Obtener datos de elevación*, luego seleccionar *Usar mapas de terreno*.
    - Después del cálculo, obtendrás el gráfico completo de Altitud/Pendiente de tu ruta basado en los datos del terreno.

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png) ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Puntos / Waypoints {#points--waypoints}

Los waypoints son uno de los tipos de puntos disponibles en el mapa. En general, pueden ser puntos de pista que forman parte de archivos GPX. Una descripción detallada está disponible en el artículo [puntos en el mapa](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

En esta pestaña de *Puntos*:

- [Muestra los datos de los puntos de la pista](#display-custom-gpx-tags) y modifica tus puntos de pista (waypoints y puntos de ruta), [elimínalos y añade](#points--waypoints) waypoints a una pista.
- Crea y modifica [Grupos (carpetas) de puntos](#waypoint-groups).


### Añadir Waypoint a una pista {#add-waypoint-to-a-track}

Los waypoints se pueden añadir a la pista actualmente grabada o a cualquier pista de la lista de *Mis lugares → Pistas* ([*My Places → Tracks list*](../../personal/tracks/manage-tracks.md)):

- Utiliza el [menú contextual del mapa](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - Los waypoints se muestran automáticamente si la pista seleccionada está habilitada en el mapa.
  - [Mantén pulsado](../../map/map-context-menu.md#select-any-point-long-tap) el mapa en cualquier ubicación elegida para crear un waypoint.
  - Puedes establecer información sobre el waypoint en el [menú contextual del mapa](../../map/map-context-menu.md#-add--edit-track-waypoint) que se abre.

- Utiliza el botón [Añadir Waypoint](#points--waypoints) del menú contextual de la pista.

- Añade un waypoint como botón de [Acción rápida](../../widgets/quick-action.md#my-places).

#### Crear Waypoint {#create-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Toca el botón *Añadir Waypoint* para abrir la pantalla de creación de waypoints (esta pantalla es familiar con el [menú contextual de Favoritos](../../personal/favorites.md#create)).

1. **Añade** *Nombre* del waypoint, *Dirección* de la ubicación seleccionada y *Descripción* para el mismo (opcional).
2. **Selecciona** Grupo.

    - Selecciona categorías de grupos creadas previamente o crea una nueva.
    - Crea un nombre y apariencia para el nuevo grupo de waypoints. Esto también se llama *nueva categoría* en la aplicación.
    - El **icono**, el **color del icono** y la **forma** se utilizarán para todos los nuevos waypoints añadidos al grupo.

3. Configuración de **Apariencia**:

    - Selecciona un [**icono**](../../personal/favorites.md#favorite-icons) de la lista de todos los iconos de categorías de PDI.
    - Selecciona el **Color** del icono.
    - Luego selecciona la **Forma** del icono: *Círculo, Octágono, Cuadrado*.

4. **Reemplaza** otro punto con este, si es necesario.


### Acciones con grupos {#actions-with-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

El *menú de tres puntos* ( &#8285; ) abre el *menú de grupo* de waypoints.

**Acciones:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Permite mostrar o no los waypoints del grupo en el mapa. O puedes usar [el botón de pantalla](#points--waypoints) para mostrar u omitir los waypoints del grupo en el mapa.
- **<Translate android="true" ids="shared_string_rename"/>** - Cambiar el nombre del grupo.
- **<Translate android="true" ids="change_default_appearance"/>** - Cambiar las opciones de visualización para un grupo de waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** o **Eliminar** (*Solo Android*) - Mover los waypoints del grupo a la lista de [Marcadores de mapa](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Solo Android*) - Mover los waypoints del grupo a [Favoritos](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Solo Android*) - Crea una ruta entre waypoints. El primer y último punto se convierten en el inicio y el final de la ruta, y el resto se convierten en puntos intermedios.
- **<Translate android="true" ids="shared_string_delete"/>** - Eliminar un grupo de waypoints.


### Grupos de Waypoints {#waypoint-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Gestiona la visibilidad de los grupos en el mapa: si ocultas una pista, todo el grupo también se ocultará.

Puedes activar o desactivar los waypoints de grupo en el mapa usando el botón en la esquina superior derecha del menú contextual de la pista en el mapa. Tócalo y selecciona la acción requerida.

### Mostrar etiquetas GPX personalizadas {#display-custom-gpx-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

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
| `lat` | La **Latitud** es una de las coordenadas geográficas por las que se puede determinar una ubicación. |
| `lon` | La **Longitud** es otra de las coordenadas geográficas por las que se puede determinar una ubicación. |
| `time` | La **Marca de tiempo** es la fecha y hora en que se registró el punto. |
| `name` | El **Nombre** es el nombre del punto. Se permiten todos los caracteres. |
| `desc` | La **Descripción** contiene información adicional sobre el punto. |
| `type` | **Seleccionar grupo** es el nombre de la carpeta de OsmAnd en la que se guarda este waypoint. |
| `cmt` | El **Comentario** es un comentario corto sobre un punto. |
| `link` | El **Enlace** es un enlace a cualquier fuente. |
| `ele` | La **Elevación** es la elevación de un punto. |


**Extensiones:**

| Extensión | Descripción |
| --- | --- |
| `osmand:icon` | El **Icono** es el nombre del icono que seleccionaste. |
| `osmand:color` | El **Color** está en formato HEX. |
| `osmand:background` | El **Fondo** es la forma del icono, como un círculo, octágono o cuadrado. |
| `osmand:country` | El **País** es el nombre del país. |
| `osmand:address` | La **Dirección** es la dirección. |
| `osmand:postcode` | El **Código postal** es el código postal. |
| `osmand:telephone` | El **Teléfono** es el número de teléfono. |
| `osmand:state` | El **Estado** es el nombre del estado. |
| `osmand:start_date` | La **Fecha de inicio** son los datos de programación de un punto. |

Los waypoints se registran con la pista en el [archivo GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Cada uno de estos waypoints tiene su propio conjunto de etiquetas para la descripción. Todas las etiquetas directamente relacionadas con la descripción de los waypoints que se pueden editar directamente en la aplicación OsmAnd se enumeran en esta sección.
Para cambiar la descripción del Waypoint, puedes seguir uno de los siguientes caminos:

1. Encuentra la pista requerida en la lista de la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Toca la pista en el mapa, si está incluida en la [lista de visibles](../tracks/index.md#display-tracks-on-the-map).
3. Toca el waypoint requerido si está [visible](../../personal/tracks/manage-tracks.md#track-menu) en el mapa.

    Luego, en el [menú contextual de Pistas](./track-context-menu.md), toca *puntos*, el campo de la carpeta requerida con los waypoints disponibles y el Waypoint que buscas. Selecciona el menú *Acciones →* **Editar waypoint GPX** y realiza los cambios. No puedes cambiar la fecha de creación de un punto, *marca de tiempo*, en la aplicación.

Las **etiquetas de servicio** que describen información adicional, como el horario de apertura o el número de teléfono, específicas del PDI, toman esa información de los datos de OpenStreetMap o de los datos que introdujiste al crear el PDI. Puedes editar dichas etiquetas y [etiquetas personalizadas](#display-custom-gpx-tags) solo en el código del archivo GPX, que puedes abrir con cualquier editor de texto en tu dispositivo.


## Intervalo de división {#split-interval}

<InfoAndroidOnly />

Puedes dividir la pista en intervalos, como distancia y tiempo, y analizarla.

Divide la pista por distancia o intervalo de tiempo.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## Filtro GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Este filtro te permite mejorar las estadísticas de tu pista excluyendo datos innecesarios o incorrectos. Puedes filtrar puntos de pista que no se ajustan a los parámetros de tu pista y, como resultado, obtener un gráfico y una línea de ruta visual más precisos sin distorsiones ni ruido de grabación. Puedes realizar cambios con filtros como *Suavizado*, *Velocidad*, *Altitud* y *Precisión GPS*, que ocultan los puntos filtrados de la pista actual. Además, en el menú *Estadísticas*, puedes verificar cómo se muestran tus cambios en el gráfico antes de guardarlos. También puedes *Restablecer al original* y *Guardar como copia* de tu pista en este filtro sin guardar la original.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

La página de la aplicación Android GPS Filter incluye lo siguiente:

- Un mapa con una pista guardada y un botón adicional, *Mi ubicación de pista* (alinea una pista al centro de un mapa).
- Botones *Actualizar* y *Menú* en la parte superior (*Menú* abre el campo *Acción* en la parte inferior de la página).
- Bloques *Filtro*, *Estadísticas*, *Acción*.


### Menú de filtro {#filter-menu}

En este menú, puedes cambiar algunos parámetros de tu pista como *Suavizado*, *Velocidad*, *Altitud* o *Precisión GPS* usando filtros. El menú se divide en una *parte de Puntos* y una *parte de Acciones*.

| ***Puntos*** |
|:------------|
|Esta parte muestra el número de puntos después de filtrar y el número total de puntos en la pista seleccionada antes de que se usaran los filtros.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Acciones*** |
|*Suavizado*. Establece la distancia umbral entre puntos. Los puntos de la pista que están al menos a esta distancia del último punto visible se ocultan. Todos los puntos de la pista que estén a una distancia entre sí menor que la distancia seleccionada por el filtro se ocultarán. Los puntos de la pista se cuentan desde el último punto visible. Ten en cuenta que los umbrales altos pueden simplificar demasiado la geometría de la pista.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Velocidad*. Solo los puntos de la pista que corresponden al intervalo de velocidad seleccionado se muestran en el gráfico y el mapa, los demás se ocultan.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitud*. Solo los puntos de la pista que corresponden al intervalo de altitud seleccionado se muestran en el gráfico y el mapa, los demás se ocultan.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Precisión GPS*. Establece el valor máximo permisible para HDOP. Los puntos con un valor más alto se ocultan.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Estadísticas {#statistics}

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

La pestaña Estadísticas muestra información sobre la pista **modificada**, es decir, la pista sin valores filtrados. Se muestra en los bloques de estadísticas y en los datos del gráfico.

- La parte de *Datos* muestra estadísticas similares al [menú Filtro](#filter-menu).
- La parte de *Gráfico* muestra tres tipos de gráficos por parámetros: Resumen, Altitud y Velocidad. Esta funcionalidad es una copia del [Gráfico de pista](#altitude--speed-graphs).

### Acciones {#actions}

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

La lista de acciones está disponible en la parte inferior de la pestaña **Filtro** o **Estadísticas**. OsmAnd aplica todos los cambios realizados en la pista sin actualizar el archivo, pero puedes guardar los cambios manualmente.

- *<Translate android="true" ids="reset_to_original"/>*. Permite devolver los parámetros a su estado original.
- *<Translate android="true" ids="save_as_copy"/>*. Permite guardar la pista como una nueva.
- *<Translate android="true" ids="save_changes_into_file"/>*. Permite reescribir la pista con los nuevos parámetros.


## Artículos relacionados {#related-articles}

- [Pistas GPX](../../personal/tracks/manage-tracks.md)
- [Pistas en el mapa](./track-context-menu.md)
- [Navegación por pista](../../navigation/setup/gpx-navigation.md)
- [Planificar ruta](../../plan-route/index.md)
- [Plugin de grabación de viajes](../../plugins/trip-recording.md)
- [Analizar en el mapa](../index.md#analyze-track-on-map)

> *Última actualización: Noviembre de 2024*