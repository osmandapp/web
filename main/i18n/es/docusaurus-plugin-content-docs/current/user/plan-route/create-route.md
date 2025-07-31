---
source-hash: 73fd3987a12239ff567c70bd00c4dac78fb02e95a9841f96a04a50b80ef31390
sidebar_position: 1
title: Planificar una ruta
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

La herramienta **Planificar una ruta** (*Menú → Planificar una ruta*) es una potente función de la aplicación OsmAnd que permite [crear nuevas rutas](#create-new-route) como pistas GPX, [editar y añadir nuevos segmentos](#segments) a pistas ya guardadas, [medir distancias](#distance-measurement) en el mapa y [adjuntar segmentos de pista](#attach-track-to-roads) a la carretera más cercana disponible utilizando diferentes perfiles de navegación. La función está diseñada para funcionar en *modo sin conexión*.

Una ruta consta de un conjunto de segmentos entre puntos especificados. Los segmentos pueden ser líneas rectas o rutas adaptadas al perfil seleccionado. La ruta se puede guardar como GPX para su posterior importación, edición y [navegación](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Casos de uso principales {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*

![Planificar una ruta Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*

![Planificar una ruta iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Crear una nueva ruta {#create-new-route}

Para crear una nueva pista en formato GPX, utiliza la función principal de la herramienta *Planificar una ruta*. La creación previa de una ruta tiene muchas ventajas, a diferencia de la grabación de la pista actual con el *[plugin de grabación de viajes](../plugins/trip-recording.md)*. Puedes [añadir](#adding-points) tantos puntos como quieras a la ruta, [eliminarlos y moverlos](#point-context-menu), cambiar los tipos de ruta por [segmentos](#route-between-points) y obtener [información detallada sobre la ruta](#graph).

Por defecto, el tipo de ruta coincidirá con el perfil seleccionado previamente; toca el icono de ruta para seleccionar cómo debe calcular la aplicación el segmento para conectar los puntos. El perfil disponible debe configurarse [por separado](../navigation/routing/osmand-routing.md#routing-types).

Puedes **acercar y alejar** para facilitar la colocación de puntos al crear o editar una pista. Cuando **alejas**, los puntos de la pista se vuelven invisibles para una mejor vista de toda la longitud de la pista y del mapa en su conjunto. Solo el último punto añadido y el puntero para añadir el siguiente punto permanecen visibles.


### Modificar una pista GPX existente {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>

La herramienta *Planificar una ruta* permite modificar una pista GPX existente, así como una [pista importada](../personal/tracks/manage-tracks.md#import). Sin embargo, en caso de que necesites excluir una gran cantidad de puntos basándote en criterios genéricos, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) podría ser una herramienta más adecuada.


### Medición de distancia {#distance-measurement}

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_lines_andr.png)

*Planificar una ruta* es una forma rápida y sencilla de medir la distancia entre puntos.

- Selecciona el método de planificación de ruta *Línea recta*. Se dibujará una línea discontinua entre los puntos.
- [Añade](#adding-points) el primer punto en el mapa desde el que se dibujará la línea.
- Mueve el mapa para determinar la distancia y el acimut. La información se mostrará en un campo con una lista de puntos debajo del mapa.

:::nota
La *Línea Recta* es necesaria y se utilizará para áreas no cubiertas por datos de enrutamiento, como áreas fuera de carretera y fuera de pista.
:::


### Obtener datos de elevación {#get-elevation-data}

<InfoAndroidOnly />

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

Si faltan [datos de elevación](../map/tracks/track-context-menu.md#calculating-missing-elevation) en una pista existente, es posible añadirlos utilizando las siguientes herramientas:

- [Utilizar carreteras cercanas](#attach-track-to-roads). Este modo utiliza mapas sin conexión para encontrar las carreteras más cercanas para construir una pista, por lo que los datos de elevación se recuperarán de las carreteras adjuntas. La geometría de la pista se puede ajustar.
- [Utilizar mapas de terreno](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) El modo calcula la altitud basándose en los datos del mapa de terreno (3D). La diferencia entre las altitudes registradas por tu dispositivo se puede utilizar para la corrección de elevación. La geometría de la pista permanece inalterada.


### Adjuntar pista a carreteras {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta ajustar a carretera iOS](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta ajustar a carretera iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

La configuración **Adjuntar a las carreteras** permite adjuntar una pista grabada o importada a las carreteras de los mapas sin conexión de OsmAnd para obtener información adicional:

- Información de giro correcta para [Navegar por pista](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (especialmente en rotondas).
- Nombres de calles e información de carriles.
- Datos de elevación.
- [Atributos de la carretera](../navigation/setup/route-details.md#road-attributes).

Puedes seleccionar un [valor de umbral](../navigation/setup/gpx-navigation.md#attach-to-the-roads) para la distancia a la que los puntos de pista simplificados pueden estar de los puntos de pista originales.

:::nota Icono de perfil no especificado
Si seleccionas una pista y el icono de perfil ***no especificado*** ("?") se muestra junto al icono de *Configuración*, tócalo para elegir si adjuntar la pista a las carreteras o simplemente conectar los puntos con una línea recta y tratarla como una pista grabada.
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

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>

Para medir una distancia o planificar un viaje, añade puntos en la ubicación del *Puntero* uno por uno y toca el botón *Añadir punto*. Al acceder a la **lista de puntos** a continuación, puedes reordenar puntos, eliminarlos o acceder a un [menú contextual de puntos](#point-context-menu) específico.

:::nota
También puedes **Deshacer**/**Rehacer** cada acción que hayas realizado en la planificación de la ruta.
:::

### Ruta entre puntos {#route-between-points}

Los puntos añadidos en el editor se pueden conectar como una línea recta o como una ruta entre puntos de un perfil seleccionado. Se puede acceder a *Ruta entre puntos* de varias maneras:

1. Desde el menú *Opciones* *→* *Ruta entre puntos*.
2. Toca el *icono de perfil* en la esquina inferior izquierda de la pantalla del mapa. No en el icono superior, se abrirá el menú Configurar mapa.
3. En el *[Menú contextual de puntos](#point-context-menu) → Cambiar tipo de ruta antes/después*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Planificar una ruta Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Puedes cambiar la ruta entre 2 puntos específicos o entre varios puntos:

- *Pista completa*. Toda la pista se recalculará utilizando el perfil seleccionado.
- *Siguiente segmento*. Solo el siguiente segmento se recalculará utilizando el perfil seleccionado.
- *Cambiar el tipo de ruta antes/después del punto*. En el *menú contextual del punto*, puedes cambiar la forma en que se calcula la ruta para la sección desde este punto hasta el más cercano o hasta el punto final. La configuración proporciona información sobre la distancia desde este punto hasta el principio o el final de la ruta, o hasta el punto siguiente/anterior.
- *Recalcular rutas*. Puedes usar el recálculo de rutas sin cambiar el tipo de perfil. El icono de perfil que se muestra en la ruta planificada en la herramienta no cambiará, pero el tipo de ruta coincidirá con el seleccionado. Es posible que necesites esto para encontrar rutas alternativas.

### Segmentos {#segments}

Un segmento de pista es una colección de puntos conectados sin **huecos**. En una herramienta de planificación de rutas, es posible:

- Fusionar segmentos: la opción [Unir segmentos](#point-context-menu) elimina el hueco a segmentos previamente separados.
- Dividir o crear nuevas secciones desconectadas de una pista. Para crear una, usa la opción [Iniciar nuevo segmento](#point-context-menu) o selecciona la función [Dividir](#point-context-menu) del menú contextual del punto.

### Menú contextual del punto {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Cada punto de tu ruta tiene su menú contextual. Muestra el *número de secuencia* del punto, la *distancia desde el inicio de la ruta*, la función para moverlo en el mapa y eliminarlo, y un conjunto de acciones con secciones de la ruta antes y después de este punto. Para editar, toca el punto requerido en la [lista de puntos](#adding-points) o directamente en el mapa.

- ***Información sobre el punto***. El número de puntos en la lista. La distancia al primer punto se basa en el tipo de ruta establecido, la distancia puede cambiar al recalcularse al nuevo tipo si se cambia el parámetro *Ruta entre puntos*.

- ***<Translate ios="true" ids="move_point"/>***. Te permite cambiar la posición de un punto en el mapa. Mueve el mapa usando gestos para cambiar la ubicación del punto. El indicador de punto estará en el centro de la parte visible del mapa.

- ***<Translate ios="true" ids="add_point_after"/>***. Mueve el mapa para añadir un punto después del punto seleccionado. Puedes añadir tantos puntos como necesites hasta que toques cancelar o aplicar.

- ***<Translate ios="true" ids="add_point_before"/>***. Mueve el mapa para añadir tantos puntos como sea necesario después del punto seleccionado en el segmento entre este punto y el siguiente.

- ***<Translate ios="true" ids="trim_before"/>***. Puedes recortar toda la sección de la ruta, puntos y segmentos, desde su inicio hasta el punto seleccionado. La distancia a recortar se indica debajo del nombre de la opción.

- ***<Translate ios="true" ids="trim_after"/>***. Puedes recortar una ruta, puntos y segmentos, desde el último punto añadido hasta el punto seleccionado. La distancia a recortar se indica debajo del nombre de la opción.

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Permite dividir la ruta antes del punto seleccionado en segmentos separados y desconectados.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Permite dividir la ruta después del punto seleccionado en segmentos separados y desconectados.

- ***<Translate ios="true" ids="join_segments"/>***. El último punto en uno de los segmentos divididos y el siguiente en la lista de puntos en el otro segmento tienen esta configuración de conexión.

- ***<Translate ios="true" ids="change_route_type_before"/>***. Puedes cambiar el tipo de ruta configurado para un perfil disponible, entre puntos en el segmento anterior, o para todos los segmentos desde el inicio de la ruta hasta el punto seleccionado.

- ***<Translate ios="true" ids="change_route_type_after"/>***. Puedes cambiar el tipo de ruta entre puntos en el siguiente segmento, o para todos los segmentos desde el punto seleccionado hasta el último punto añadido.

- ***<Translate ios="true" ids="delete_point"/>***. Elimina el punto seleccionado de la ruta. Similar a eliminar un punto en una lista.

### Rutas multimodales {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android-línea de ruta](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS-pantalla](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Utilizando la herramienta *Planificar una ruta* y la opción [Ruta entre puntos](#route-between-points), puedes crear rutas multimodales donde, por ejemplo, la primera parte puede ser una ruta *ciclista*, la segunda parte una ruta *recta* y luego una *peatonal*. Ten en cuenta que la navegación en rutas multimodales no está disponible, por lo que debes seleccionar uno de los perfiles más adecuados para poder seguir las instrucciones paso a paso.


## Editor {#editor}

### Guardar ruta {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>

Después de [haber añadido](#adding-points) al menos un punto al mapa, puedes usar la opción de guardar. Todas las pistas guardadas en *Planificar una ruta* se pueden encontrar en el *<Translate android="true" ids="shared_string_menu"/> principal → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.

Hay cuatro formas de guardar:

- ***Guardado rápido***. El botón superior derecho ***Hecho*** / ***Guardar*** (para pistas existentes) permite guardar rápidamente los cambios y salir de la herramienta *Planificar una ruta*. El nombre se genera en función de la fecha actual.
- ***Guardar cambios*** en el [menú Opciones](#options) te permite guardar los cambios en un archivo y continuar planificando la ruta.
- ***Guardar como nueva pista*** en el [menú Opciones](#options) abre un diálogo donde especificas el nombre de la pista y la carpeta donde se guardará la ruta.
- ***Añadir cambios a una pista***. Adjunta una pista creada como un [segmento separado](#segments) a otra pista existente. Los cambios en una pista seleccionada *no se pueden deshacer*.

:::nota Opción de pista simplificada
Al guardar una nueva pista, puedes seleccionar la opción de pista ***Simplificada*** para que la pista sea compatible con otras aplicaciones de terceros. Técnicamente, la pista se guardará sin instrucciones de ruta como una pista puramente geométrica.
:::

### Opciones {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android-opciones](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta iOS-opciones](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Muestra el perfil de aplicación seleccionado (por defecto es una línea recta). Tocar esta acción es lo mismo que tocar el botón *Perfil*, que abre el [menú de perfil](../personal/profiles.md) de la aplicación.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) o **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Dibuja nuevos segmentos de ruta que no se conectan al segmento anterior.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Si es una pista nueva sin vincular a la existente, se abre el menú *Guardar como nueva pista*. Cuando añades nuevos segmentos a una pista abierta o importada, aparece la notificación sobre el guardado del archivo GPS en el almacenamiento, después de lo cual puedes continuar creando el siguiente segmento.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Guarda tu ruta como una pista GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Añade tu ruta a una pista de tu carpeta de pistas y guarda la nueva pista.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Inicia la navegación desde tu posición hasta el punto final utilizando una ruta dibujada.
- **<Translate android="true" ids="reverse_route"/>**. Intercambias el punto de *Inicio* de la ruta y el último punto añadido. La configuración del segmento de ruta no cambia cuando se aplica la inversión.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Crea una ruta aproximada. Cada punto de la pista se corresponde con la carretera permitida más cercana en el mapa según el perfil seleccionado y la distancia umbral.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (solo Android). Puedes filtrar los puntos de ruta que no coinciden con el tipo de ruta seleccionado, eliminar datos innecesarios o corregir datos inexactos. El filtro GPS solo funcionará si el tipo de ruta se especifica como *Línea recta*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Solo Android*). Esta opción solo se muestra en el menú si no hay datos de elevación disponibles. Con esta [opción](#get-elevation-data), puedes calcular la altitud utilizando *datos de mapas de terreno* o utilizar datos de mapas descargados para encontrar las *carreteras cercanas*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Archiva completamente todas tus acciones. Un "artefacto" permanece en el mapa: las líneas punteadas de la ruta recién borrada. Desaparece en el siguiente, añadiendo nuevos puntos. Puedes cancelar la función Borrar todo con el botón Deshacer acción. La función no afecta las partes inalteradas de las rutas abiertas en la herramienta.

### Gráfico {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta ajustar a carretera iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Durante la planificación de la ruta, el [gráfico](../navigation/setup/route-details.md#elevation-graph) muestra la altitud de la ruta y la información del porcentaje de pendiente, además puedes tocar en cualquier parte del gráfico para mostrar un puntero con datos particulares.

- Para **Android**, el gráfico se muestra en la pestaña *Gráfico* al crear o abrir una pista, y al [Navegar](../navigation/setup/gpx-navigation.md) usando *Planificar una ruta*.
- Para **iOS**, el gráfico solo está disponible a través del menú *[Opciones](#options) → Navegación*.

Al calcular una ruta para la navegación en *Planificar una ruta*, puedes encontrar información adicional de la pista como [Información de elevación](../navigation/setup/route-details.md#elevation-info) y [Atributos de la carretera](../navigation/setup/route-details.md#road-attributes), y usar la herramienta [Analizar en el mapa](../navigation/setup/route-details.md#analyse-on-map). Toca el botón *Detalles* debajo del gráfico.


## Artículos relacionados {#related-articles}

- [Mostrar pista en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de la pista](../map/tracks/track-context-menu.md)
- [Navegación por pista](../navigation/setup/gpx-navigation.md)
- [Grabación de viajes](../plugins/trip-recording.md)

> *Última actualización: mayo de 2025*