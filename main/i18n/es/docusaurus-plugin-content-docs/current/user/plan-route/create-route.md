---
source-hash: e175b4348c1413c15e33f549f53698ae0970ca70deb9fd83602a6d9dbda79e15
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

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.png)

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

Para crear un nuevo track en formato GPX, utilice la función principal de la herramienta *Planificar una ruta*. La creación previa de una ruta tiene muchas ventajas, a diferencia de la grabación del track actual con el *[Plugin de grabación de viajes](../plugins/trip-recording.md)*. Puede [añadir](#adding-points) tantos puntos como desee a la ruta, [eliminarlos y moverlos](#point-context-menu), cambiar los tipos de ruta por [segmentos](#route-between-points) y obtener [información detallada sobre la ruta](#graph).  

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

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Planificar una ruta* es una forma rápida y sencilla de medir la distancia entre puntos.

- Seleccione el método de planificación de ruta *Línea recta*. Se dibujará una línea discontinua entre los puntos.
- [Añada](#adding-points) el primer punto en el mapa desde el que se dibujará la línea.
- Mueva el mapa para determinar la distancia y el acimut. La información se mostrará en un campo con una lista de puntos debajo del mapa.

:::note
La *Línea recta* es necesaria y se utilizará para zonas no cubiertas por datos de enrutamiento, como zonas fuera de carretera y fuera de pista.
:::


### Obtener datos de elevación {#get-elevation-data}

<InfoAndroidOnly />

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Si faltan [Datos de elevación](../map/tracks/track-context-menu.md#calculate-missing-elevation) en un track existente, es posible añadirlos utilizando las siguientes herramientas:

- [Usar carreteras cercanas](#attach-track-to-roads). Este modo utiliza mapas sin conexión para encontrar las carreteras más cercanas para construir un track, por lo que los datos de elevación se recuperarán de las carreteras adjuntas. La geometría del track se puede ajustar.  
- [Usar mapas de terreno](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) El modo calcula la altitud basándose en los datos del mapa de terreno (3D). La diferencia entre las altitudes registradas por su dispositivo puede utilizarse para la corrección de la elevación. La geometría del track no se modifica.


### Adjuntar track a carreteras {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

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

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

Para medir una distancia o planificar un viaje, añada puntos en la ubicación del *Puntero* uno por uno y pulse el botón *Añadir punto*. Accediendo a la **lista de puntos** de abajo, puede reordenar los puntos, eliminarlos o acceder a un [menú contextual de punto](#point-context-menu) específico.

</TabItem>

</Tabs>  

:::note
También puede **Deshacer**/**Rehacer** cada acción que haya realizado en la planificación de la ruta.
:::
  
### Ruta entre puntos {#route-between-points}

Los puntos añadidos en el editor pueden conectarse como una línea recta o como una ruta entre puntos de un perfil seleccionado. Se puede acceder a *Ruta entre puntos* de varias maneras:

1. Desde el menú *Opciones* *→* *Ruta entre puntos*.
2. Toque el *icono de perfil* en la esquina inferior izquierda de la pantalla del mapa. No en el icono superior, se abrirá el menú Configurar mapa.
3. En el *[Menú contextual de punto](#point-context-menu) → Cambiar tipo de ruta antes/después*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Puede cambiar la ruta entre 2 puntos específicos o entre varios puntos:

- *Track completo*. Todo el track se recalculará utilizando el perfil seleccionado.
- *Siguiente segmento*. Sólo el siguiente segmento se recalculará utilizando el perfil seleccionado.  
- *Cambiar el tipo de ruta antes/después del punto*. En el *menú contextual del punto*, puede cambiar la forma en que se calcula la ruta para el tramo desde este punto hasta el punto más cercano o hasta el punto extremo. El ajuste proporciona información sobre la distancia desde este punto hasta el principio o el final de la ruta, o hasta el punto siguiente/anterior.
- *Recalcular rutas*. Puede utilizar el recálculo de la ruta sin cambiar el tipo de perfil. El icono de perfil que se muestra en la ruta planificada en la herramienta no cambiará, pero el tipo de ruta coincidirá con el seleccionado. Es posible que necesite esto para encontrar rutas alternativas.  

### Segmentos {#segments}

Un segmento de track es una colección de puntos conectados sin **huecos**. En una herramienta de planificación de rutas, es posible:

- Para fusionar segmentos: la opción [Unir segmentos](#point-context-menu) elimina el hueco con los segmentos previamente separados.
- Para dividir o crear secciones nuevas y no conectadas de un track. Para crear una, utilice la opción [Iniciar nuevo segmento](#point-context-menu) o seleccione la función [Dividir](#point-context-menu) en el menú contextual del punto.

### Menú contextual de punto {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

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

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Utilizando la herramienta *Planificar una ruta* y la opción [Ruta entre puntos](#route-between-points), puede crear rutas multimodales en las que, por ejemplo, la primera parte puede ser una ruta en *bicicleta*, la segunda una ruta en *línea recta* y luego una *peatonal*. Tenga en cuenta que la navegación en rutas multimodales no está disponible, por lo que debe seleccionar uno de los perfiles más adecuados para poder seguir las instrucciones giro a giro.


## Editor {#editor}

### Guardar ruta {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Después de que [haya añadido](#adding-points) al menos un punto al mapa, puede utilizar la opción de guardar. Todos los tracks guardados en *Planificar una ruta* se pueden encontrar en el *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)* principal.  

Hay cuatro formas de guardar:

- ***Guardado rápido***. El botón superior derecho ***Hecho*** / ***Guardar*** (para tracks existentes) permite guardar rápidamente los cambios y salir de la herramienta *Planificar una ruta*. El nombre se genera en función de la fecha actual.
- ***Guardar cambios*** en el [menú Opciones](#options) le permite guardar los cambios en un archivo y continuar planificando la ruta.
- ***Guardar como nuevo track*** en el [menú Opciones](#options) abre un diálogo donde se especifica el nombre del track y la carpeta donde se guardará la ruta.
- ***Añadir cambios a un track***. Adjunta un track creado como un [segmento separado](#segments) a otro track existente. Los cambios en un track seleccionado *no se pueden deshacer*.

:::note Opción de track simplificado
Al guardar un nuevo track, puede seleccionar la opción de track ***Simplificado*** para que el track sea compatible con otras aplicaciones de terceros. Técnicamente, el track se guardará sin instrucciones de ruta como un track puramente geométrico.
:::

### Opciones {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

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

### Gráfico {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Durante la planificación de la ruta, el [gráfico](../navigation/setup/route-details.md#elevation-graph) muestra información sobre la altitud de la ruta y el porcentaje de pendiente, además puede tocar en cualquier parte del gráfico para mostrar un puntero con datos particulares.  

- Para **Android**, el gráfico se muestra en la pestaña *Gráfico* al crear o abrir un track, y al [Navegar](../navigation/setup/gpx-navigation.md) usando *Planificar una ruta*.
- Para **iOS**, el gráfico solo está disponible a través del menú *[Opciones](#options) → Navegación*.

Al calcular una ruta para la navegación en *Planificar una ruta*, puede encontrar información adicional del track como [Información de elevación](../navigation/setup/route-details.md#elevation-info) y [Atributos de la carretera](../navigation/setup/route-details.md#road-attributes), y utilizar la herramienta [Analizar en el mapa](../navigation/setup/route-details.md#analyze-on-map). Toque el botón *Detalles* debajo del gráfico.  


## Artículos relacionados {#related-articles}

- [Mostrar track en el mapa](../map/tracks/index.md)
- [Analizar en el mapa](../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual del track](../map/tracks/track-context-menu.md)
- [Navegación por track](../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../plugins/trip-recording.md)