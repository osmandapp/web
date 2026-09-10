---
source-hash: cfeff8f8f57fbdb014fad35d6ada3afdf1bf6cd5443cc3e69f77460144202dd0
sidebar_position: 1
title:  Planificar una ruta
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


## Visión general {#overview}

La herramienta **Planificar una ruta** (*Menú → Planificar una ruta*) es una potente función de la aplicación OsmAnd que le permite [crear nuevas rutas](#create-new-route) como tracks GPX, [editar y añadir nuevos segmentos](#segments) a tracks ya guardados, [medir distancias](#distance-measurement) en el mapa y [adjuntar segmentos de track](#attach-track-to-roads) a la carretera más cercana disponible utilizando diferentes perfiles de navegación. La función está diseñada para funcionar en *modo sin conexión*.

Una ruta consiste en un conjunto de segmentos entre puntos especificados. Los segmentos pueden ser líneas rectas o rutas adaptadas al perfil seleccionado. La ruta se puede guardar como GPX para su posterior importación, edición y [navegación](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.webp)

</TabItem>

</Tabs>


## Principales casos de uso {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Crear nueva ruta {#create-new-route}

Para crear un nuevo track en formato GPX, utilice la función principal de la herramienta *Planificar una ruta*. La creación previa de una ruta tiene muchas ventajas, a diferencia de la grabación del track actual con el *[Plugin de grabación de viajes](../plugins/trip-recording.md)*. Puede [añadir](#adding-points) tantos puntos como desee a la ruta, [eliminarlos y moverlos](#point-context-menu), cambiar los tipos de ruta por [segmentos](#route-between-points) y obtener [información detallada sobre la ruta](#graph--analyze).  

Por defecto, el tipo de enrutamiento coincidirá con el perfil previamente seleccionado, toque el icono de enrutamiento para seleccionar cómo la aplicación debe calcular el segmento para conectar los puntos. El perfil disponible debe configurarse [por separado](../navigation/routing/osmand-routing.md#routing-types).  

Puede **acercar y alejar** para facilitar la colocación de puntos al crear o editar un track. Al **alejar**, los puntos del track se vuelven invisibles para una mejor visualización de toda la longitud del track y del mapa en su conjunto. Sólo permanecen visibles el último punto añadido y el puntero para añadir el siguiente punto.


### Modificar track GPX existente {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

La herramienta *Planificar una ruta* permite modificar un track GPX existente, así como un [track importado](../personal/tracks/manage-tracks.md#import). Sin embargo, en caso de que necesite excluir una gran cantidad de puntos basándose en criterios genéricos, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) podría ser una herramienta más adecuada.


### Medición de distancia {#distance-measurement}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_lines_ios.webp)

</TabItem>

</Tabs>  

*Planificar una ruta* es una forma rápida y sencilla de medir la distancia entre puntos.

- Seleccione el método de planificación de ruta *Línea recta*. Se dibujará una línea discontinua entre los puntos.
- [Añada](#adding-points) el primer punto en el mapa desde el que se dibujará la línea.
- Mueva el mapa para determinar la distancia y el acimut. La información se mostrará en un campo con una lista de puntos debajo del mapa.

:::note
La *Línea recta* es necesaria y se utilizará para zonas no cubiertas por datos de enrutamiento, como zonas fuera de carretera y fuera de pista.
:::


### Obtener datos de elevación {#get-elevation-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_graph_ios.webp)

</TabItem>

</Tabs> 

Si faltan [Datos de elevación](../map/tracks/track-context-menu.md#calculate-missing-elevation) en un track existente, es posible añadirlos utilizando las siguientes herramientas:

- [Usar carreteras cercanas](#attach-track-to-roads). Este modo utiliza mapas sin conexión para encontrar las carreteras más cercanas para construir un track, por lo que los datos de elevación se recuperarán de las carreteras adjuntas. La geometría del track se puede ajustar.  
- [Usar mapas de terreno](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) El modo calcula la altitud basándose en los datos del mapa de terreno (3D). La diferencia entre las altitudes registradas por su dispositivo puede utilizarse para la corrección de la elevación.  La geometría del track no se modifica.

:::note

La **corrección de elevación en línea** (basada en servidor) se eliminó en las versiones recientes de OsmAnd y no está disponible.  
En versiones anteriores, estaba obsoleta e poco fiable.  
Utilice opciones sin conexión en su lugar: adjuntar a carreteras o mapas de terreno (Pro).  

:::

### Adjuntar track a carreteras {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-andr](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios_2.webp)

</TabItem>

</Tabs>  

El ajuste **Adjuntar a las carreteras** permite adjuntar un track grabado o importado a las carreteras de los mapas sin conexión de OsmAnd para obtener información adicional:

- Información de giro correcta para [Navegar por track](../navigation/setup/gpx-navigation.md#follow-track-options) (especialmente en rotondas).
- Nombres de calles e información de carriles.
- Datos de elevación.
- [Atributos de la carretera](../navigation/setup/route-details.md#road-attributes).
- Perfil de elevación actualizado basado en la geometría de la carretera.
- Posible recálculo de la geometría del track (simplificando o ajustando puntos a la red de carreteras).

Cuando un track se adjunta a carreteras, los siguientes parámetros pueden cambiar porque se recalculan la geometría y la elevación del track: *Distancia, Ascenso / Descenso, Velocidad media (y el gráfico de velocidad), Velocidad máxima, Tiempo en movimiento* y *Duración*. Estos valores pueden diferir del track GPX original si la elevación o geometría basada en carreteras recalculada se desvía significativamente de los datos GPS registrados.

Puede seleccionar un [valor umbral](../navigation/setup/gpx-navigation.md#attach-to-the-roads) para la distancia a la que los puntos simplificados del track pueden estar de los puntos originales del track.

:::note Icono de perfil no especificado
Si selecciona un track y el icono de perfil ***no especificado*** ("?") aparece junto al icono de *Ajustes*, púlselo para elegir si desea adjuntar el track a las carreteras o simplemente conectar los puntos con una línea recta y tratarlo como un track grabado.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Puntos y segmentos {#points--segments}

### Añadir puntos {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Plan a route Favorites android](@site/static/img/plan-route/plan_route_favorites_and.png)

Para medir una distancia o planificar un viaje, añada puntos en la ubicación del *Puntero* uno por uno y pulse el botón *Añadir*. Accediendo a la **lista de puntos** de abajo, puede reordenar los puntos, eliminarlos o acceder a un [menú contextual de punto](#point-context-menu) específico.

También puede añadir un punto intermedio directamente desde el mapa tocando un POI o Favorito para abrir su menú contextual y luego tocando *AÑADIR PUNTO*. En este modo, no se muestran los menús contextuales para objetos no puntos. Al añadir un POI/Favorito, su nombre se preserva como el nombre del punto de ruta; si mueve este punto en el mapa más tarde, el nombre se restablece.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.webp)

Para medir una distancia o planificar un viaje, añada puntos en la ubicación del *Puntero* uno por uno y pulse el botón *Route +*. Accediendo a la **lista de puntos** de abajo, puede reordenar los puntos, eliminarlos o acceder a un [menú contextual de punto](#point-context-menu) específico.

</TabItem>

</Tabs>  

:::note
También puede **Deshacer**/**Rehacer** cada acción que haya realizado en la planificación de la ruta.
:::

### Añadir waypoints (solo iOS) {#adding-waypoints}

![Plan a route ios](@site/static/img/plan-route/adding_poi_ios.webp) ![Plan a route ios](@site/static/img/plan-route/adding_poi_2_ios.webp)

La pestaña POI permite añadir y gestionar waypoints mientras se planifica una ruta.

Para añadir un waypoint, seleccione una ubicación en el mapa y toque el botón *+ POI*. Se abre la pantalla Waypoint, donde puede introducir un nombre, una descripción y una dirección, seleccionar un grupo y personalizar el icono, el color y la forma. Puede seleccionar un grupo existente o tocar *Añadir un grupo* para crear uno nuevo.

La pestaña POI muestra los puntos añadidos agrupados por carpetas. Cada grupo muestra su nombre y el número de puntos que contiene. Para cada grupo, toque el menú de tres puntos para acceder a las acciones del grupo:
- **Renombrar** — cambiar el nombre del grupo.
- **Cambiar apariencia** — cambiar la apariencia del grupo.
- **Ordenar** — cambiar el orden de los puntos en el grupo.
- **Eliminar** — eliminar el grupo.

El menú Ordenar ofrece las siguientes opciones: *Última modificación*, *Nombre A–Z*, *Nombre Z–A*, *Fecha más reciente primero* y *Fecha más antigua primero*.

Toque un punto de un grupo para abrir su menú contextual. Puede:
- **Editar** — abrir la pantalla Editar waypoint.
- **Eliminar** — eliminar el punto del grupo.
  
### Ruta entre puntos {#route-between-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

Los puntos añadidos en el editor pueden conectarse como una línea recta o como una ruta entre puntos de un perfil seleccionado. Se puede acceder a *Ruta entre puntos* de varias maneras:

1. Desde el menú *Opciones* *→* *Ruta entre puntos*.
2. Toque el *icono de perfil* en la esquina inferior izquierda de la pantalla del mapa. No en el icono superior, se abrirá el menú Configurar mapa.
3. En el *[Menú contextual de punto](#point-context-menu) → Cambiar tipo de ruta antes/después*.  

Puede cambiar la ruta entre 2 puntos específicos o entre varios puntos:

- *Track completo*. Todo el track se recalculará utilizando el perfil seleccionado.
- *Siguiente segmento*. Sólo el siguiente segmento se recalculará utilizando el perfil seleccionado.  
- *Cambiar el tipo de ruta antes/después del punto*. En el *menú contextual del punto*, puede cambiar la forma en que se calcula la ruta para el tramo desde este punto hasta el punto más cercano o hasta el punto extremo. El ajuste proporciona información sobre la distancia desde este punto hasta el principio o el final de la ruta, o hasta el punto siguiente/anterior.
- *Recalcular rutas*. Puede utilizar el recálculo de la ruta sin cambiar el tipo de perfil. El icono de perfil que se muestra en la ruta planificada en la herramienta no cambiará, pero el tipo de ruta coincidirá con el seleccionado. Es posible que necesite esto para encontrar rutas alternativas.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/route_between_points_ios.webp) ![Plan a route ios](@site/static/img/plan-route/settings_tab_ios.webp)

Los puntos añadidos pueden conectarse con una línea recta o una ruta calculada utilizando un perfil de enrutamiento seleccionado. El menú Ruta entre puntos permite ver y cambiar el tipo de enrutamiento y la configuración de los segmentos y secciones de la ruta.

Puede abrir Ruta entre puntos tocando el botón *Ruta entre puntos*, que muestra el icono del perfil de enrutamiento seleccionado actualmente, o desde un menú [Segmento](#segments) o Sección.

En la pestaña Tipo de ruta, puede seleccionar un perfil de enrutamiento para el segmento o sección seleccionado. La línea recta está disponible como primera opción, seguida de los perfiles de enrutamiento disponibles.

Cuando una ruta contiene solo un tipo de enrutamiento, se muestra la vista simple de Ruta entre puntos. Cuando una ruta contiene varios tipos de enrutamiento, la vista compleja muestra todos los segmentos y secciones, lo que le permite seleccionar qué parte de la ruta modificar.

También puede:
- **Iniciar nuevo segmento** — crear un nuevo segmento y continuar añadiendo puntos de ruta. El nuevo segmento utiliza el mismo tipo de ruta que el actual.
- **Cambiar para todo el track** — seleccionar un tipo de enrutamiento para aplicarlo a todo el track.

En la pestaña Ajustes, puede seleccionar ajustes de enrutamiento predefinidos para el tipo de ruta seleccionado.

</TabItem>

</Tabs>


### Segmentos {#segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Un segmento de track es una colección de puntos conectados sin **huecos**. En una herramienta de planificación de rutas, es posible:

- Para fusionar segmentos: la opción [Unir segmentos](#point-context-menu) elimina el hueco con los segmentos previamente separados.
- Para dividir o crear secciones nuevas y no conectadas de un track. Para crear una, utilice la opción [Iniciar nuevo segmento](#point-context-menu) o seleccione la función [Dividir](#point-context-menu) en el menú contextual del punto.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/segment_menu.webp) ![Plan a route ios](@site/static/img/plan-route/section_menu.webp)

Una ruta puede contener uno o más segmentos. Un segmento puede utilizar un único tipo de ruta o contener varias secciones con diferentes tipos de ruta.

En la pestaña Ruta, cada segmento se muestra con su tipo de ruta y distancia. Cuando un segmento contiene varias secciones, cada sección muestra su tipo de ruta y distancia.

Puede gestionar un segmento mediante su menú de tres puntos:
- **Cambiar tipo de ruta** — disponible para un segmento con un único tipo de ruta. Abre Ruta entre puntos, donde puede seleccionar un tipo de ruta diferente.
- **Establecer un único tipo de ruta** — disponible cuando un segmento contiene varias secciones con diferentes tipos de ruta. Abre Ruta entre puntos, donde puede aplicar un tipo de ruta al segmento.
- **Ordenar** — reordenar los puntos de ruta manualmente o utilizar Ordenar puerta a puerta para reordenarlos minimizando la distancia total de viaje.
- **Guardar como…** — guardar el segmento como un archivo independiente.
- **Eliminar segmento** — eliminar el segmento.

Para crear un nuevo segmento no conectado, toque *Iniciar nuevo segmento* en la parte inferior de la pestaña Ruta.

Un segmento puede dividirse en [secciones](#multimodal-routes) cuando se utilizan diferentes tipos de ruta para distintas partes del segmento. Cada sección muestra su tipo de ruta y distancia.

Toque el menú de tres puntos de una sección para:
- **Cambiar tipo de ruta** — abrir Ruta entre puntos y seleccionar otro tipo de ruta.
- **Ordenar** — acceder a las opciones de ordenación disponibles.
- **Eliminar sección** — eliminar la sección.

</TabItem>

</Tabs>


### Menú contextual de punto {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.webp)

</TabItem>

</Tabs>

Cada punto de su ruta tiene su menú contextual. Muestra el *número de secuencia* del punto, la *distancia desde el inicio de la ruta*, la función para moverlo en el mapa y eliminarlo, y un conjunto de acciones con secciones de la ruta antes y después de este punto. Para editar, toque el punto deseado en la [lista de puntos](#adding-points) o directamente en el mapa.

- ***Información sobre el punto***. El número de puntos de la lista. La distancia al primer punto se basa en el tipo de enrutamiento establecido, la distancia puede cambiar al recalcular al nuevo tipo si se cambia el parámetro *Ruta entre puntos*.  

- ***<Translate ios="true" ids="move_point"/>***. Permite cambiar la posición de un punto en el mapa. Mueva el mapa mediante gestos para cambiar la ubicación del punto. El indicador de punto estará en el centro de la parte visible del mapa.  

- ***<Translate ios="true" ids="add_point_after"/>***. Mueva el mapa para añadir un punto después del punto seleccionado. Puede añadir tantos puntos como necesite hasta que pulse cancelar o aplicar.  

- ***<Translate ios="true" ids="add_point_before"/>***. Mueva el mapa para añadir tantos puntos como sea necesario después del punto seleccionado en el segmento entre este punto y el siguiente.  

- ***<Translate ios="true" ids="trim_before"/>***. Puede recortar toda la sección de la ruta, puntos y segmentos, desde su inicio hasta el punto seleccionado. La distancia a recortar se indica bajo el nombre de la opción.  

- ***<Translate ios="true" ids="trim_after"/>***. Puede recortar una ruta, puntos y segmentos, desde el último punto añadido hasta el punto seleccionado. La distancia a recortar se indica bajo el nombre de la opción.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Permite dividir la ruta antes del punto seleccionado en segmentos separados y no conectados.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Permite dividir la ruta después del punto seleccionado en segmentos separados y no conectados.  

- ***<Translate ios="true" ids="join_segments"/>***. El último punto de uno de los segmentos divididos y el siguiente en la lista de puntos del otro segmento tienen este ajuste de conexión.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Puede cambiar el tipo de enrutamiento configurado para un perfil disponible, entre puntos del segmento anterior, o para todos los segmentos desde el inicio de la ruta hasta el punto seleccionado.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Puede cambiar el tipo de enrutamiento entre puntos del siguiente segmento, o para todos los segmentos desde el punto seleccionado hasta el último punto añadido.  

- ***<Translate ios="true" ids="delete_point"/>***. Elimina el punto seleccionado de la ruta. Similar a eliminar un punto en una lista.

### Rutas multimodales {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.webp)

</TabItem>

</Tabs>

Utilizando la herramienta *Planificar una ruta* y la opción [Ruta entre puntos](#route-between-points), puede crear rutas multimodales en las que, por ejemplo, la primera parte puede ser una ruta en *bicicleta*, la segunda una ruta en *línea recta* y luego una *peatonal*. Tenga en cuenta que la navegación en rutas multimodales no está disponible, por lo que debe seleccionar uno de los perfiles más adecuados para poder seguir las instrucciones giro a giro.


## Editor {#editor}

### Guardar ruta {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

Después de que [haya añadido](#adding-points) al menos un punto al mapa, puede utilizar la opción de guardar. Todos los tracks guardados en *Planificar una ruta* se pueden encontrar en el *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)* principal.  

Hay cuatro formas de guardar:

- ***Guardado rápido***. El botón superior derecho ***Hecho*** (para tracks existentes) permite guardar rápidamente los cambios y salir de la herramienta *Planificar una ruta*. El nombre se genera en función de la fecha actual.
- ***Guardar cambios*** en el [menú Opciones](#options) le permite guardar los cambios en un archivo y continuar planificando la ruta.
- ***Guardar como nuevo track*** en el [menú Opciones](#options) abre un diálogo donde se especifica el nombre del track y la carpeta donde se guardará la ruta.
- ***Añadir cambios a un track***. Adjunta un track creado como un [segmento separado](#segments) a otro track existente. Los cambios en un track seleccionado *no se pueden deshacer*.

Al guardar, el track hereda el tipo de actividad del perfil de enrutamiento utilizado para la planificación. La actividad se guarda en los metadatos del track y se preserva después de exportar o importar el archivo GPX.

:::note Opción de track simplificado
Al guardar un nuevo track, puede seleccionar la opción de track ***Simplificado*** para que el track sea compatible con otras aplicaciones de terceros. Técnicamente, el track se guardará sin instrucciones de ruta como un track puramente geométrico.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.webp)

Después de que [haya añadido](#adding-points) al menos un punto al mapa, puede utilizar la opción de guardar. Todos los tracks guardados en *Planificar una ruta* se pueden encontrar en el *<Translate ios="true" ids="shared_string_menu"/> → <Translate ios="true" ids="shared_string_my_places"/> →* *[<Translate ios="true" ids="shared_string_gpx_tracks"/>](../personal/tracks/manage-tracks.md)* principal.

Para una nueva ruta, toque *Guardar* en la barra de herramientas superior para guardar el track actual. También puede utilizar *Guardar como…* desde el menú Opciones para introducir un nombre de archivo y guardar la ruta.

Al editar un track existente, *Guardar* guarda los cambios actuales. También puede utilizar las siguientes opciones:
- **Guardar como…** — guarda el track con un nuevo nombre de archivo.
- **Guardar como copia** — guarda un duplicado del track.
- **Añadir a track existente** — añade el track planificado como un segmento separado a un track existente.

Al guardar, el track hereda el tipo de actividad del perfil de enrutamiento utilizado para la planificación. La actividad se guarda en los metadatos del track y se preserva después de exportar o importar el archivo GPX.

</TabItem>

</Tabs>  


### Opciones {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Muestra el perfil de la aplicación seleccionado (por defecto es una línea recta). Tocar esta acción es lo mismo que tocar el botón *Perfil*, que abre el [menú de perfiles](../personal/profiles.md) de la aplicación.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) o **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Dibuja nuevos segmentos de ruta que no se conectan con el segmento anterior.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Si se trata de un nuevo track sin vinculación con el existente, se abre el menú *Guardar como nuevo track*. Cuando añade nuevos segmentos a un track abierto o importado, aparece la notificación sobre el guardado del archivo GPS en el almacenamiento, después de lo cual puede continuar creando el siguiente segmento.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Guarda su ruta como un track GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Añade su ruta a un track de su carpeta de tracks y guarda el nuevo track.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Inicia la navegación desde su posición hasta el punto de llegada utilizando una ruta dibujada.
- **<Translate android="true" ids="reverse_route"/>**. Intercambia el punto de *Inicio* de la ruta y el último punto añadido. La configuración del segmento de ruta no cambia cuando se aplica Invertir.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Crea una ruta aproximada. Cada punto del track se corresponde con la carretera permitida más cercana en el mapa según el perfil seleccionado y la distancia umbral.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (solo Android). Puede filtrar los puntos de la ruta que no coincidan con el tipo de enrutamiento seleccionado, eliminar datos innecesarios o corregir datos inexactos. El filtro GPS solo funcionará si el tipo de enrutamiento se especifica como *Línea recta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Solo Android*). Esta opción solo se muestra en el menú si no hay datos de elevación disponibles. Con esta [opción](#get-elevation-data), puede calcular la altitud utilizando los *datos del mapa de terreno* o utilizar los datos de los mapas descargados para encontrar las *carreteras cercanas*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Archiva completamente todas sus acciones. En el mapa queda un "artefacto": las líneas de puntos de la ruta que acaba de borrar. Desaparece en la siguiente, al añadir nuevos puntos. Puede cancelar la función Borrar todo con el botón Devolver acción. La función no afecta a las partes no modificadas de las rutas abiertas en la herramienta.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.webp)

Toque el menú de tres puntos en la barra de herramientas superior para abrir el menú *Opciones*. Las acciones disponibles dependen de si está creando una nueva ruta o editando un track existente.

- **Guardar como…** — guardar la ruta con un nuevo nombre de archivo. Disponible tanto para rutas nuevas como para tracks editados.
- **Guardar como copia** — guardar un duplicado de un track existente. Disponible al editar un track existente.
- **Añadir a track existente** — añadir la ruta planificada como un segmento separado a un track existente.
- **Cambiar orden de segmentos** — cambiar el orden de los segmentos de la ruta.
- **Invertir ruta** — invertir la dirección de la ruta.
- **Navegación** — cerrar Planificar una ruta e iniciar la navegación utilizando la ruta planificada.
- **Borrar todos los puntos** — eliminar todos los puntos de la ruta planificada.

</TabItem>

</Tabs>


### Gráfico / Analizar {#graph--analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

Durante la planificación de la ruta, el [gráfico](../navigation/setup/route-details.md#elevation-graph) muestra información sobre la altitud de la ruta y el porcentaje de pendiente, además puede tocar en cualquier parte del gráfico para mostrar un puntero con datos particulares.  

El gráfico se muestra en la pestaña *Gráfico* al crear o abrir un track, y al [Navegar](../navigation/setup/gpx-navigation.md) usando *Planificar una ruta*.

Al calcular una ruta para la navegación en *Planificar una ruta*, puede encontrar información adicional del track como [Información de elevación](../navigation/setup/route-details.md#elevation-info) y [Atributos de la carretera](../navigation/setup/route-details.md#road-attributes), y utilizar la herramienta [Analizar en el mapa](../navigation/setup/route-details.md#analyze-on-map). Toque el botón *Detalles* debajo del gráfico.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios_2.webp)

La sección Resumen muestra un gráfico basado en el eje seleccionado. Utilice los controles de selección de eje para elegir los datos mostrados en el gráfico. *Recalcular elevación* permite recalcular los datos de elevación cuando sea necesario. Si los datos de elevación no están disponibles, la pestaña Analizar muestra Sin datos de elevación. El mensaje explica que OsmAnd puede obtener datos de elevación de carreteras cercanas o mapas de terreno. Toque *Obtener datos de elevación* para calcular los datos de elevación. Para más información, consulte la sección [Obtener datos de elevación](#get-elevation-data).

La sección Estadísticas de resumen muestra *Ascenso*, *Descenso*, *Rango de altitud*, *Velocidad media*, *Velocidad máx.* y *Tiempo en movimiento*. Se muestra un guion `–` cuando los datos no están disponibles. Por ejemplo, la velocidad y el tiempo en movimiento pueden no estar disponibles para rutas planificadas.

Las secciones Tipos de carretera, Pendiente, Superficie y Suavidad muestran las características correspondientes de la ruta. Toque una sección para expandirla y ver información detallada en la leyenda.

</TabItem>

</Tabs>


## Artículos relacionados {#related-articles}

- [Mostrar track en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual del track](../map/tracks/track-context-menu.md)
- [Navegación por track](../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../plugins/trip-recording.md)