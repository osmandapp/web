---
source-hash: 7ffc2f81e01f087845308b0e23b9eaeb8284b235849c71743dcd0c92adb43df9
sidebar_position: 2
title:  Navegar por Pista
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

La opción *Navegación por pista* (GPX) le permite seguir una ruta o pista predefinida en un mapa. Puede ser particularmente útil para actividades al aire libre como senderismo, ciclismo o conducción todoterreno, donde tener una ruta planificada mejora la seguridad y la eficiencia. Si viaja en un grupo organizado, esta función le ayuda a usted y a cada miembro del grupo a tener la misma información de ruta que los demás.

La opción *Navegación por pista* también se puede utilizar en la vida cotidiana. Puede usar una [pista grabada](../../plugins/trip-recording.md) previamente o [crear una pista](../../personal/tracks/manage-tracks.md#create-a-track) y compartirla con su familia o amigos en lugar de explicarles la ruta. También puede usar las [rutas en el mapa de OsmAnd](../../../../blog/routes/) para la navegación. Cómo resaltarlas en el mapa y qué significan sus colores se describe en la [sección Rutas](../../map/vector-maps.md#routes) del artículo *Mapas vectoriales*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pantalla de navegación por pista Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación por pista iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Seleccionar la Pista {#select-the-track}

Antes de utilizar la opción *Navegación por pista*, debe [mostrar la pista en el mapa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd admite pistas como una línea (**Geometría**) y pistas como una ruta (**Ruta**) o una combinación de ambas (**OsmAnd** mediante [Planificar ruta](../../plan-route/create-route.md)). Si tiene una pista como una colección de **Puntos de ruta**, puede usar la [Navegación por marcadores](./markers-navigation.md).


- La pista de **Geometría** tendrá una navegación muy básica por defecto y no proporcionará giros precisos, nombres de calles ni carriles de giro. Para obtener la información que falta, debe utilizar la herramienta [Ajustar a las carreteras](#attach-to-the-roads).

- La pista de **Ruta** calculará la ruta entre los puntos de la ruta según el perfil seleccionado. Básicamente, todos los puntos de la ruta se considerarán puntos intermedios. Si su ruta consta de más de 50 puntos, es muy probable que sea una pista de **Geometría** mal configurada.

- La pista de **OsmAnd** consta de partes de geometría y de ruta, y es adecuada para proporcionar exactamente la misma guía que la navegación por defecto. Estas pistas son producidas por [Planificar ruta](../../plan-route/create-route.md) o la [Versión web](../../web/index.md). Es posible volver a guardar esta pista como una pista de solo **Geometría** como [**Simplificada**](../../plan-route/create-route.md#save-route) para ser utilizada en programas de terceros.


### Iniciar Navegación GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Seleccionar pista para navegar Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Seleccionar pista para navegar Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleccionar pista para navegar iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Seleccionar pista para navegar iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navegación en una pista se puede iniciar utilizando el botón de acción rápida en el [menú contextual de la pista](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (se abre seleccionando una de las [pistas resaltadas](./route-navigation.md#history-of-previous-routes) en el mapa, o tocando un archivo de pista en la sección [Mis Lugares](../../personal/myplaces.md) del *Menú Principal*) o desde el menú de navegación, que se abre tocando:

- [*Botón de Navegación*](../../widgets/map-buttons.md#directions) en la pantalla del mapa.
- *Sección de Navegación* en el *Menú Principal* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- En el [*Menú de navegación*](./route-navigation.md#navigation-menu) vaya a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Elegir Segmentos {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Segmentos Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmentos iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Para la navegación, si la pista seleccionada consta de varios segmentos o pistas, puede seleccionar un segmento específico o el archivo de pista GPX completo. Al [**importar**](../../personal/tracks/manage-tracks.md#import) puede elegir si guardarlo en un solo archivo o en varios archivos.


### Opciones de Seguir Pista {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Pantalla de navegación por pista Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Pantalla de navegación por pista iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Editar** (*icono de lápiz* junto al nombre de la pista) — Abre la pista en la herramienta [*Planificar una ruta*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleccione un archivo GPX diferente para la navegación.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Si esta configuración está habilitada, la dirección del movimiento a lo largo de la pista se invierte.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura el [ajuste de una pista a las carreteras](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Puede seleccionar cómo navegar desde mi ubicación hasta la pista:
al *<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* en la pista.
- Elija el **Tipo de navegación** para el primer y último segmento: ya sea construir una [*línea recta*](../routing/straight-line-routing.md) o usar el [*tipo de enrutamiento*](../routing/osmand-routing.md#routing-types) del perfil actual.


### Ajustar a las carreteras {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ajustar a las carreteras 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustar a las carreteras 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La función **Ajustar a las carreteras** alinea su pista con la carretera más cercana para una experiencia de navegación más precisa. Disponible en el menú [Seguir pista](#follow-track-options), esta función garantiza que su ruta siga la red de carreteras adecuada según el *perfil de navegación* seleccionado y la **distancia umbral**. Esto mejora tanto los [detalles de la ruta](../setup/route-details.md) como las [instrucciones de voz](#guidance) durante la navegación.

***Cómo funciona:***

- OsmAnd hace coincidir cada punto de la pista con la **carretera más cercana** dentro de la **distancia umbral** establecida (por defecto: **50 metros**).
- La **distancia umbral** define la distancia máxima permitida entre un punto de la pista GPS y una carretera para el ajuste.
- **Reajuste automático** — Al cambiar de **perfil de navegación**, OsmAnd reajusta automáticamente la pista a las carreteras que son adecuadas para el nuevo perfil.
- Para pistas grandes con muchos puntos, el proceso de ajuste puede tardar un poco más. Verá un **indicador de progreso** (*línea de estado naranja*) que muestra el estado del ajuste.
- Una vez completado el ajuste, toque **Aplicar** para usar la pista modificada para la navegación.

### Ajuste automático a las carreteras {#automatic-attachment-to-the-roads}

OsmAnd ajusta automáticamente las rutas a las carreteras cuando se utiliza la herramienta **Planificar una ruta**:

- Los **Puntos de ruta** se alinean automáticamente con la carretera disponible más cercana (*excepto para el [Enrutamiento en línea recta](../../navigation/routing/straight-line-routing.md) y el [Enrutamiento directo al punto](../../navigation/routing/direct-to-point-routing.md)*).
- Si no se detectan carreteras (por ejemplo, en entornos todoterreno), la ruta seguirá **segmentos en línea recta**.
- Puede **ajustar manualmente** la ruta arrastrando los puntos de ruta a diferentes ubicaciones.

Por defecto, la función **Ajustar a las carreteras** se ejecuta **automáticamente** cuando se selecciona una pista para la navegación. Puede cambiar esta configuración según sea necesario. Para más detalles, consulte [Guía detallada de la pista](../guidance/navigation-settings.md#detailed-track-guidance) en el artículo *Ajustes de navegación*.


## Puntos {#points}

### Punto de Inicio / Fin {#start--finish-point}

Puede especificar el punto de inicio y fin de una ruta que no sea el inicio/fin especificado en el archivo GPX. Simplemente cámbielo de la misma manera que lo hace para la [Navegación](../setup/route-navigation.md#select-starting-point).

En el [menú Seguir pista](#follow-track-options), puede elegir si desea navegar desde su ubicación actual hasta el punto de inicio de la pista o hasta el punto más cercano en la pista GPX. Además, puede elegir el [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) que se utilizará para el segmento de inicio y fin de su ruta.

### Puntos de ruta {#waypoints}

Si la pista tiene puntos de ruta, puede usar [Mostrar a lo largo de la ruta](../guidance/map-during-navigation.md#show-points-along-the-route) y [Guía de voz](../guidance/voice-navigation.md#voice-settings) para recibir notificaciones sobre Puntos de Interés. Puede agregar **Puntos de ruta** a una pista existente a través del [Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint), la pista debe estar visible en el mapa.

### Puntos intermedios {#intermediate-points}

Al preparar o navegar por una pista GPX, no puede agregar lugares intermedios por los que planea pasar dentro de esa pista. Solo puede asignar puntos de inicio y fin además de la pista o segmento que planea seguir.

## Guía {#guidance}

La *Navegación por pista GPX* contiene las mismas [instrucciones de voz](../guidance/voice-navigation.md) que la navegación por ruta. Sin embargo, algunos giros o rotondas pueden no interpretarse correctamente porque no hay información sobre las intersecciones de carreteras en GPX, excepto en los archivos GPX creados por OsmAnd. Para eliminar estos problemas, debe utilizar la función [Ajustar a las carreteras](#attach-to-the-roads).

Durante la navegación, puede usar varias opciones como acercar o alejar, desplazar el mapa o cambiar a un estilo de mapa diferente. Si se desvía de la pista, OsmAnd recalculará automáticamente la ruta para volver a encarrilarlo. También puede ajustar la velocidad de la pista y establecer alertas audibles para puntos que se aproximan o desviaciones de la ruta.


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de la ruta](./route-navigation.md)
- [Detalles de la ruta](./route-details.md)
- [Navegación por marcadores](./markers-navigation.md)
- [Ajustes de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)