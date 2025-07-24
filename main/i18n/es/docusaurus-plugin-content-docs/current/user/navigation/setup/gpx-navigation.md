---
source-hash: ae9687e6f1f23d70428677a5ebd5a73f6a67a71286137aec6ff175aad5589758
sidebar_position: 2
title:  Navegar por una Pista
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

La opción *Navegación por pista* (GPX) le permite seguir una ruta o pista predefinida en un mapa. Puede ser particularmente útil para actividades al aire libre como senderismo, ciclismo o conducción todoterreno, donde tener una ruta planificada mejora la seguridad y la eficiencia. Si viaja en un grupo organizado, esta función le ayuda a usted y a cada miembro del grupo a tener la misma información de ruta que los demás.

La opción *Navegación por pista* también se puede utilizar en la vida cotidiana. Puede usar una [pista grabada](../../plugins/trip-recording.md) anteriormente o [crear una pista](../../personal/tracks/manage-tracks.md#create-a-track) y compartirla con su familia o amigos en lugar de explicarles la ruta. También puede usar las [rutas en el mapa de OsmAnd](../../../../blog/routes/) para la navegación. Cómo resaltarlas en el mapa y qué significan sus colores se describe en la [sección Rutas](../../map/vector-maps.md#routes) del artículo *Mapas vectoriales*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación por pista Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación por pista iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Seleccionar la Pista {#select-the-track}

Antes de usar la opción *Navegación por pista*, debe [mostrar la pista en el mapa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd admite la pista como una línea (**Geometría**) y la pista como una ruta (**Ruta**) o una combinación de ellas (**OsmAnd** por [Planificar ruta](../../plan-route/create-route.md)). Si tiene una pista como una colección de **Puntos de referencia**, puede usar la [navegación por marcadores](./markers-navigation.md).


- La pista de **Geometría** tendrá una navegación muy básica por defecto y no proporcionará giros precisos, nombres de calles ni carriles de giro. Para obtener la información que falta, debe usar la herramienta [Adjuntar a las carreteras](#attach-to-the-roads).

- La pista de **Ruta** calculará la ruta entre los puntos de ruta por el perfil seleccionado. Básicamente, todos los puntos de ruta se considerarán puntos intermedios. Si su ruta consta de más de 50 puntos, es muy probable que sea una pista de **Geometría** mal configurada.

- La pista de **OsmAnd** consta de partes de geometría y de ruta, y es adecuada para proporcionar exactamente la misma guía que la navegación por defecto. Estas pistas son producidas por [Planificar ruta](../../plan-route/create-route.md) o [Versión web](../../web/index.md). Es posible volver a guardar esta pista en una pista solo de **Geometría** como [**Simplificada**](../../plan-route/create-route.md#save-route) para usarla en programas de terceros.


### Iniciar navegación GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seleccionar pista para navegar Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Seleccionar pista para navegar Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleccionar pista para navegar iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Seleccionar pista para navegar iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navegación en una pista se puede iniciar usando el botón de acción rápida en el [menú contextual de la pista](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (se abre seleccionando una de las [pistas resaltadas](./route-navigation.md#history-of-previous-routes) en el mapa, o tocando un archivo de pista en la sección [Mis lugares](../../personal/myplaces.md) del *Menú principal*) o desde el menú de navegación, que se abre tocando:

- [*Botón de navegación*](../../widgets/map-buttons.md#directions) en la pantalla del mapa.
- *Sección de navegación* en el *Menú principal* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- En el [*menú de navegación*](./route-navigation.md#navigation-menu) vaya a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Elegir segmentos {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segmentos Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmentos iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Para la navegación, si la pista seleccionada consta de múltiples segmentos o pistas, puede seleccionar un segmento específico o el archivo de pista GPX completo. Al **[importar](../../personal/tracks/manage-tracks.md#import)**, puede elegir si guardarlo en un solo archivo o en varios archivos.


### Opciones de seguir pista {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Pantalla de navegación por pista Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Pantalla de navegación por pista iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Editar** (*icono de lápiz* junto al nombre de la pista) — Abre la pista en la herramienta [*Planificar una ruta*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Seleccione un archivo GPX diferente para la navegación.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Si esta configuración está habilitada, la dirección del movimiento a lo largo de la pista se invierte.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura [adjuntar una pista a las carreteras](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Puede seleccionar cómo navegar desde mi ubicación a la pista:
al *<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* en la pista.
- Elija el **tipo de navegación** para el primer y último segmento: construir una [*línea recta*](../routing/straight-line-routing.md) o usar el [*tipo de enrutamiento*](../routing/osmand-routing.md#routing-types) del perfil actual.


### Adjuntar a las carreteras {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adjuntar a las carreteras 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adjuntar a las carreteras 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La función **Adjuntar a las carreteras** alinea su pista con la carretera más cercana para una experiencia de navegación más precisa. Disponible en el menú [Seguir pista](#follow-track-options), esta función garantiza que su ruta siga la red de carreteras adecuada según el *perfil de navegación* seleccionado y la **distancia umbral**. Esto mejora tanto los [detalles de la ruta](../setup/route-details.md) como las [instrucciones de voz](#guidance) durante la navegación.

***Cómo funciona:***

- OsmAnd hace coincidir cada punto de la pista con la **carretera más cercana** dentro de la **distancia umbral** establecida (por defecto: **50 metros**).
- La **distancia umbral** define la distancia máxima permitida entre un punto de la pista GPS y una carretera para su adjunción.
- **Readjunción automática** — Al cambiar de **perfiles de navegación**, OsmAnd readjunta automáticamente la pista a las carreteras que son adecuadas para el nuevo perfil.
- Para pistas grandes con muchos puntos, el proceso de adjunción puede tardar un poco más. Verá un **indicador de progreso** (*línea de estado naranja*) que muestra el estado de la adjunción.
- Una vez completada la adjunción, toque **Aplicar** para usar la pista modificada para la navegación.

#### Adjunto automático a las carreteras {#automatic-attachment-to-the-roads}

OsmAnd ajusta automáticamente las rutas a las carreteras cuando se utiliza la herramienta **Planificar una ruta**:

- Los **Puntos de referencia** se alinean automáticamente con la carretera disponible más cercana (*excepto para el [Enrutamiento en línea recta](../../navigation/routing/straight-line-routing.md) y el [Enrutamiento directo a un punto](../../navigation/routing/direct-to-point-routing.md)*).
- Si no se detectan carreteras (por ejemplo, en entornos todoterreno), la ruta seguirá **segmentos de línea recta**.
- Puede **ajustar manualmente** la ruta arrastrando los puntos de referencia a diferentes ubicaciones.

Por defecto, la función **Adjuntar a las carreteras** se ejecuta **automáticamente** cuando se selecciona una pista para la navegación. Puede cambiar esta configuración según sea necesario. Para obtener más detalles, consulte [Guía detallada de la pista](../guidance/navigation-settings.md#detailed-track-guidance) en el artículo *Configuración de navegación*.


## Puntos {#points}

### Punto de inicio/fin {#start--finish-point}

Puede especificar el punto de inicio y fin de una ruta diferente al inicio/fin especificado en el archivo GPX. Simplemente cámbielo de la misma manera que lo hace para la [Navegación](../setup/route-navigation.md#select-starting-point).

En el menú [Seguir pista](#follow-track-options), puede elegir si desea navegar desde su ubicación actual hasta el punto de inicio de la pista o hasta el punto más cercano en la pista GPX. Además, puede elegir [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) que se utilizará para el segmento de inicio y fin de su ruta.

### Puntos de referencia {#waypoints}

Si la pista tiene puntos de referencia, puede usar [Mostrar a lo largo de la ruta](../guidance/map-during-navigation.md#show-points-along-the-route) y [Guía por voz](../guidance/voice-navigation.md#voice-settings) para recibir notificaciones sobre Puntos de Interés. Puede agregar **Puntos de referencia** a una pista existente a través del [Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), la pista debe estar visible en el mapa.

### Puntos intermedios {#intermediate-points}

Al preparar o navegar por una pista GPX, no puede añadir lugares intermedios por los que planea pasar dentro de esa pista. Solo puede asignar puntos de inicio y fin además de la pista o segmento que planea seguir.

## Guía {#guidance}

La *Navegación por pista GPX* contiene las mismas [instrucciones de voz](../guidance/voice-navigation.md) que la navegación por ruta. Sin embargo, algunos giros o rotondas pueden no interpretarse correctamente porque no hay información sobre las intersecciones de carreteras en GPX, excepto para los archivos GPX creados por OsmAnd. Para eliminar estos problemas, debe usar la función [Adjuntar a las carreteras](#attach-to-the-roads).

Durante la navegación, puede usar varias opciones como acercar o alejar, desplazar el mapa o cambiar a un estilo de mapa diferente. Si se desvía de la pista, OsmAnd recalculará automáticamente la ruta para volver a la pista. También puede ajustar la velocidad de la pista y establecer alertas audibles para los puntos de aproximación o las desviaciones de la ruta.


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](./route-navigation.md)
- [Detalles de ruta](./route-details.md)
- [Navegación por marcadores](./markers-navigation.md)
- [Configuración de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: abril de 2025*