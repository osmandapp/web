---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title: Navegar por ruta
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

La opción *Navegación por ruta* (GPX) te permite seguir una ruta o un track predefinido en un mapa. Puede ser particularmente útil para actividades al aire libre como senderismo, ciclismo o conducción todoterreno, donde tener una ruta planificada mejora la seguridad y la eficiencia. Si viajas en un grupo organizado, esta función te ayuda a ti y a cada miembro del grupo a tener la misma información de ruta que los demás.

La opción *Navegación por ruta* también se puede utilizar en la vida cotidiana. Puedes usar una [ruta grabada](../../plugins/trip-recording.md) previamente o [crear una ruta](../../personal/tracks/manage-tracks.md#create-a-track) y compartirla con tu familia o amigos en lugar de explicarles la ruta. También puedes usar las [rutas en el mapa de OsmAnd](../../../../blog/routes/) para la navegación. Cómo resaltarlas en el mapa y qué significan sus colores se describe en la [sección Rutas](../../map/vector-maps.md#routes) del artículo *Mapas vectoriales*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pantalla de navegación por ruta Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pantalla de navegación por ruta iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Seleccionar la ruta {#select-the-track}

Antes de usar la opción *Navegación por ruta*, debes [mostrar la ruta en el mapa](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd admite la ruta como una línea (**Geometría**) y la ruta como un camino (**Ruta**) o una combinación de ellas (**OsmAnd** por [Planificar ruta](../../plan-route/create-route.md)). Si tienes una ruta como una colección de **Puntos de referencia**, puedes usar la [navegación por marcadores](./markers-navigation.md).


- La ruta de **Geometría** tendrá una navegación muy básica por defecto y no proporcionará giros precisos, nombres de calles y carriles de giro. Para obtener la información que falta, debes usar la herramienta [Adjuntar a las carreteras](#attach-to-the-roads).

- La ruta de **Camino** calculará el camino entre los puntos de ruta por el perfil seleccionado. Básicamente, todos los puntos de ruta se considerarán puntos intermedios. Si tu ruta consta de más de 50 puntos, es muy probable que sea una ruta de **Geometría** mal configurada.

- La ruta de **OsmAnd** consta de partes de geometría y de camino, y es adecuada para proporcionar exactamente la misma guía que la navegación por defecto. Estas rutas son producidas por [Planificar ruta](../../plan-route/create-route.md) o [Versión web](../../web/index.md). Es posible volver a guardar esta ruta como una ruta de solo **Geometría** como [**Simplificada**](../../plan-route/create-route.md#save-route) para usarla en programas de terceros.


### Iniciar navegación GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Seleccionar ruta para navegar Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Seleccionar ruta para navegar Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleccionar ruta para navegar iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Seleccionar ruta para navegar iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

La navegación en una ruta se puede iniciar utilizando el botón de acción rápida en el [menú contextual de la ruta](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (se abre seleccionando una de las [rutas resaltadas](./route-navigation.md#history-of-previous-routes) en el mapa, o tocando un archivo de ruta en la sección [Mis lugares](../../personal/myplaces.md) del *Menú principal*) o desde el menú de navegación, que se abre tocando:

- [*Botón de navegación*](../../widgets/map-buttons.md#directions) en la pantalla del mapa.
- *Sección de navegación* en el *Menú principal* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- En el [*menú de navegación*](./route-navigation.md#navigation-menu) ve a *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Elegir segmentos {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segmentos Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segmentos iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Para la navegación, si la ruta seleccionada consta de varios segmentos o rutas, puedes seleccionar un segmento específico o el archivo de ruta GPX completo. Al **[importar](../../personal/tracks/manage-tracks.md#import)** puedes elegir si guardarlo en un solo archivo o en varios archivos.


### Opciones de seguimiento de ruta {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Pantalla de navegación por ruta Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Pantalla de navegación por ruta iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Editar** (*icono de lápiz* junto al nombre de la ruta) — Abre la ruta en la herramienta [*Planificar una ruta*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Selecciona un archivo GPX diferente para la navegación.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Si esta configuración está habilitada, la dirección del movimiento a lo largo de la ruta se invierte.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Configura [adjuntar una ruta a las carreteras](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Puedes seleccionar cómo navegar desde mi ubicación hasta la ruta:
al *<Translate android="true" ids="start_of_the_track"/>* o al *<Translate android="true" ids="nearest_point"/>* en la ruta.
- Elige el **Tipo de navegación** para el primer y último segmento: construir una [*línea recta*](../routing/straight-line-routing.md) o usar el [*tipo de enrutamiento*](../routing/osmand-routing.md#routing-types) del perfil actual.


### Adjuntar a las carreteras {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Adjuntar a las carreteras 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Adjuntar a las carreteras 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

La función **Adjuntar a las carreteras** alinea tu ruta con la carretera más cercana para una experiencia de navegación más precisa. Disponible en el menú [Seguir ruta](#follow-track-options), esta función garantiza que tu ruta siga la red de carreteras adecuada según el *perfil de navegación* seleccionado y la **distancia umbral**. Esto mejora tanto los [detalles de la ruta](../setup/route-details.md) como las [instrucciones de voz](#guidance) durante la navegación.

***Cómo funciona:***

- OsmAnd hace coincidir cada punto de la ruta con la **carretera más cercana** dentro de la **distancia umbral** establecida (por defecto: **50 metros**).
- La **distancia umbral** define la distancia máxima permitida entre un punto de ruta GPS y una carretera para la conexión.
- **Reconexión automática** — Al cambiar los **perfiles de navegación**, OsmAnd reconecta automáticamente la ruta a las carreteras que son adecuadas para el nuevo perfil.
- Para rutas grandes con muchos puntos, el proceso de conexión puede tardar un poco más. Verás un **indicador de progreso** (*línea de estado naranja*) que muestra el estado de la conexión.
- Una vez completada la conexión, toca **Aplicar** para usar la ruta modificada para la navegación.

#### Conexión automática a las carreteras {#automatic-attachment-to-the-roads}

OsmAnd ajusta automáticamente las rutas a las carreteras cuando se utiliza la herramienta **Planificar una ruta**:

- Los **puntos de referencia** se alinean automáticamente con la carretera disponible más cercana (excepto para el [enrutamiento en línea recta](../../navigation/routing/straight-line-routing.md) y el [enrutamiento directo a un punto](../../navigation/routing/direct-to-point-routing.md)).
- Si no se detectan carreteras (por ejemplo, en entornos todoterreno), la ruta seguirá **segmentos de línea recta**.
- Puedes **ajustar manualmente** la ruta arrastrando los puntos de referencia a diferentes ubicaciones.

Por defecto, la función **Adjuntar a las carreteras** se ejecuta **automáticamente** cuando se selecciona una ruta para la navegación. Puedes cambiar esta configuración según sea necesario. Para obtener más detalles, consulta [Guía detallada de rutas](../guidance/navigation-settings.md#detailed-track-guidance) en el artículo *Configuración de navegación*.


## Puntos {#points}

### Punto de inicio / fin {#start--finish-point}

Puedes especificar el punto de inicio y fin de una ruta diferente al inicio/fin especificado en el archivo GPX. Solo cámbialo de la misma manera que lo haces para la [Navegación](../setup/route-navigation.md#select-starting-point).

En el [menú Seguir ruta](#follow-track-options), puedes elegir si quieres navegar desde tu ubicación actual hasta el punto de inicio de la ruta o hasta el punto más cercano en la ruta GPX. Además, puedes elegir [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types) que se utilizará para el segmento de inicio y fin de tu ruta.

### Puntos de referencia {#waypoints}

Si la ruta tiene puntos de referencia, puedes usar [Mostrar a lo largo de la ruta](../guidance/map-during-navigation.md#show-points-along-the-route) y [Guía por voz](../guidance/voice-navigation.md#voice-settings) para recibir notificaciones sobre puntos de interés. Puedes agregar **Puntos de referencia** a una ruta existente a través del [Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), la ruta debe estar visible en el mapa.

### Puntos intermedios {#intermediate-points}

Al preparar o navegar por una ruta GPX, no puedes añadir lugares intermedios por los que planeas conducir dentro de esa ruta. Solo puedes asignar puntos de inicio y fin además de la ruta o segmento que planeas seguir.

## Guía {#guidance}

La *navegación por ruta GPX* contiene las mismas [instrucciones de voz](../guidance/voice-navigation.md) que la navegación por ruta. Sin embargo, algunos giros o rotondas pueden no interpretarse correctamente porque no hay información sobre intersecciones de carreteras en GPX, excepto para los archivos GPX creados por OsmAnd. Para eliminar estos problemas, debes usar la función [adjuntar a las carreteras](#attach-to-the-roads).

Durante la navegación, puedes usar varias opciones como acercar o alejar, mover el mapa o cambiar a un estilo de mapa diferente. Si te desvías de la ruta, OsmAnd recalculará automáticamente la ruta para que vuelvas a ella. También puedes ajustar la velocidad de la ruta y establecer alertas audibles para los puntos de aproximación o las desviaciones de la ruta.


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](./route-navigation.md)
- [Detalles de ruta](./route-details.md)
- [Navegación por marcadores](./markers-navigation.md)
- [Configuración de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Mensajes de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: abril de 2025*