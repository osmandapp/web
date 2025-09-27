---
source-hash: a2c574750d2fad3f5b86fe34399e253d3561dee9bc81b7ec97490f6574b7c609
title:  Pistas
sidebar_position: 2
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



## Resumen {#overview}
OsmAnd tiene muchas funciones potentes para mostrar varias rutas en el mapa. Las rutas se pueden construir como parte de la [Navegación](../../navigation/index.md), crearse a través de [Planificar ruta](../../plan-route/index.md), importarse como pistas GPX, grabarse a través del [plugin de Grabación de viaje](../../plugins/trip-recording.md), o buscarse y seleccionarse a partir de los datos de OpenStreetMap.


## Tipos de Pistas {#types-of-tracks}

[Pistas (GPX)](#display-tracks-on-the-map) - viaje grabado o planificado guardado en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Este tipo de ruta puede importarse desde una fuente externa, crearse en la aplicación o ser grabada por usted. Un GPX puede contener uno de los 3 tipos diferentes de datos, o todos ellos:

- Pista como una línea (***Geometría***). El archivo tiene una matriz de puntos ```<trkpt>```, cada punto tiene la ubicación y opcionalmente tiempo, velocidad, altitud y otros atributos. Estas pistas se muestran en el mapa como líneas continuas.
- Pista como una ruta (***Ruta***). El archivo tiene una matriz de puntos ```<rtept>```, cada punto descrito como un punto intermedio de la ruta. Depende de cómo se deban conectar los puntos dentro de una ruta, ya sea como pequeños segmentos de ruta o mediante una línea recta. Estas pistas se muestran en el mapa como líneas discontinuas.
- Waypoints (***Puntos***). El archivo tiene puntos ```<wpt>``` con atributos. Los waypoints se muestran como puntos circulares en el mapa. Puede tocarlos para obtener información adicional.

OsmAnd puede crear pistas con 1–3 combinaciones. [Planificar ruta](../../plan-route/create-route.md) crea una pista con ***Geometría*** y ***Ruta***, si la guarda como ***Pista Simplificada***, solo se conservará la ***Geometría***. [Grabando pista](../../plugins/trip-recording.md#new-track-recording) crea solo ***Geometría***, pero también puede agregarle ***Puntos*** a través del menú contextual.


## Mostrar Pistas en el Mapa {#display-tracks-on-the-map}

Puede gestionar la visibilidad de las pistas eligiendo cuáles mostrar u ocultar desde varios menús: el [menú Mis Lugares](#my-places), el [menú Configurar mapa](#configure-map) y el [menú contextual de Pista](#track-context-menu). Esta flexibilidad le permite cambiar rápidamente entre diferentes pistas, asegurando que solo las pistas relevantes estén visibles en su mapa en cualquier momento.

### Configurar mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurar mapa de pistas Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configurar mapa de pistas Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurar mapa de pistas iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configurar mapa de pistas iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

La opción *Configurar mapa* le permite gestionar rápidamente la visualización de todas las pistas mostradas recientemente, permitiéndole alternar la visibilidad para un grupo de pistas. La clasificación de las pistas sigue el orden configurado en la pestaña *Mis Lugares → Pistas*. Puede acceder al [Menú de Pista](../../personal/tracks/manage-tracks.md#track-menu) haciendo una pulsación larga sobre un elemento de pista. Además, en este menú, puede modificar la apariencia de varias pistas seleccionadas simultáneamente.

### Mis Lugares {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mis Lugares con pistas en Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → pulsación larga en la pista GPX elegida → Mostrar en el mapa*

![Menú contextual de una pista en iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

En [Mis Lugares *→* pestaña Pistas](../../personal/tracks/manage-tracks.md#manage-tracks) para mostrar la pista en el mapa, necesita:

- *Android* - tocar el *menú de tres puntos* en el campo con la pista requerida.
- *iOS* - hacer una pulsación larga en la pista requerida en la lista.


### Menú Contextual de Pista {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Resumen del menú contextual de pista Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Resumen del menú contextual de pista iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Cuando selecciona una pista en el mapa o abre el [menú contextual de pista](./track-context-menu.md) después de grabar o importar una pista, puede controlar su visibilidad en el mapa. Simplemente use los botones *Mostrar* u *Ocultar* para mostrar o eliminar la pista de la vista del mapa.


## Analizar Pista en el Mapa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Tocar la pista → Pestaña Pista → <Translate android="true" ids="analyze_on_map"/>*  

![Menú de pista analizar en el mapa Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Menú de pista analizar en el mapa distancia Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Tocar la pista → Pestaña Pista → <Translate ios="true" ids="analyze_on_map"/>*  

![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Menú de pista analizar en el mapa ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Esta herramienta proporciona un análisis detallado de los datos de la [pista](../../map/tracks/track-context-menu.md#options) utilizando gráficos y mapas.

- **Datos del gráfico (eje Y)** muestra: *Altitud*, *Pendiente*, *Velocidad*, [*Datos de sensores externos*](../../plugins/external-sensors.md), y combinaciones de hasta dos opciones si están contenidas en los datos de la pista.
- **Dimensión del gráfico (eje X)** representa: *Distancia*, *Tiempo* y *Hora del día*.
- **Interacción de tocar/deslizar**. Toque un gráfico para mostrar información sobre un punto específico en la pista. Deslizar sobre el gráfico resalta la ubicación apropiada en el mapa y muestra detalles en la barra de información.
- **Escalado**. Use un [gesto con dos dedos](../../map/interact-with-map.md#gestures) para escalar el gráfico para una visualización más detallada.


### Seguir Mi Ubicación {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de pista analizar en el mapa 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menú de pista analizar en el mapa 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Menú de pista analizar en el mapa ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Toque el botón [Mi Ubicación](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar la vista del mapa y el gráfico con su ubicación.

- La **escala del gráfico** permanece igual, y la **información de la barra** se fija a 1/4 del lado izquierdo.
- A medida que se mueve, el **gráfico se deslizará** de izquierda a derecha, mostrando información por delante de su pista.
- No se muestran otros widgets en esta pantalla.
- Esta función es útil para hacer senderismo y ciclismo mientras navega por la pista.  


## Artículos Relacionados {#related-articles}

- [Apariencia de la pista](./appearance.md)
- [Menú contextual de la pista](./track-context-menu.md)
- [Navegar por pista](../../navigation/setup/gpx-navigation.md)
- [Rutas en el mapa](https://docs.osmand.net/blog/routes) artículo del blog
- [Configurar mapa](../../map/configure-map-menu.md)  
- [Pistas GPX](../../personal/tracks/index.md)  
- [Planificar ruta](../../plan-route/index.md)  
- [Grabación de viaje](../../plugins/trip-recording.md)