---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Trazas
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



## Generalidades {#overview}

OsmAnd tiene muchas funciones potentes para mostrar varias rutas en el mapa. Las rutas se pueden construir como parte de la Navegación, crearse mediante Planificar Ruta, importarse como trazas GPX, grabarse mediante el complemento Grabación de Viajes, o buscarse y seleccionarse a partir de datos de OpenStreetMap.


## Tipos de Trazas {#types-of-tracks}

[Trazas (GPX)](#display-tracks-on-the-map) - viaje grabado o planificado guardado en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Este tipo de ruta se puede importar de una fuente externa, crearse en la aplicación o grabarse por usted. El GPX puede contener uno de 3 tipos diferentes de datos, o todos ellos:

- Traza como línea (***Geometría***). El archivo tiene una matriz de puntos ```<trkpt>```, cada punto tiene la ubicación y la hora opcional, velocidad, altitud y otros atributos. Estas trazas se muestran en el mapa como líneas sólidas.
- Traza como ruta (***Ruta***). El archivo tiene una matriz de puntos ```<rtept>```, cada punto descrito como un punto intermedio de la ruta. Depende de cómo se deben conectar los puntos dentro de una ruta, ya sea como pequeños segmentos de ruta o mediante una línea recta. Estas trazas se muestran en el mapa como líneas discontinuas.
- Puntos de interés (***Puntos***). El archivo tiene puntos ```<wpt>``` con atributos. Los puntos de interés se muestran como puntos circulares en el mapa. Puede tocarlos para obtener información adicional.

OsmAnd puede crear trazas con 1-3 combinaciones. [Planificar Ruta](../../plan-route/create-route.md) crea una traza con ***Geometría*** y ***Ruta***, si la guarda como ***Traza Simplificada***, solo se conservará la ***Geometría***. [Grabar traza](../../plugins/trip-recording.md#new-track-recording) crea solo ***Geometría***, pero también puede agregarle ***Puntos*** a través del menú contextual.


## Mostrar Trazas en el Mapa {#display-tracks-on-the-map}

Puede gestionar la visibilidad de las trazas eligiendo cuáles mostrar u ocultar desde varios menús: el [menú Mis Lugares](#my-places), el [menú Configurar Mapa](#configure-map) y el [menú contextual de Trazas](#track-context-menu). Esta flexibilidad le permite cambiar rápidamente entre diferentes trazas, asegurando que solo las trazas relevantes sean visibles en su mapa en un momento dado.

### Configurar Mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurar mapa de trazas Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Configurar mapa de trazas Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurar mapa de trazas iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Configurar mapa de trazas iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

La opción *Configurar Mapa* le permite gestionar rápidamente la visualización de todas las trazas mostradas recientemente, permitiéndole alternar la visibilidad para un grupo de trazas. La clasificación de las trazas sigue el orden configurado en la pestaña *Mis Lugares → Trazas*. Puede acceder al [Menú de Trazas](../../personal/tracks/manage-tracks.md#track-menu) manteniendo pulsado un elemento de traza. Además, en este menú, puede modificar la apariencia de varias trazas seleccionadas simultáneamente.

### Mis Lugares {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mis Lugares con trazas en Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → pulsación larga en la traza GPX elegida → Mostrar en el mapa*

![Menú contextual de una traza en iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

En [Mis Lugares *→* pestaña Trazas](../../personal/tracks/manage-tracks.md#manage-tracks) para mostrar la traza en el mapa, debe:

- *Android* - tocar el *menú de tres puntos* en el campo con la traza requerida.
- *iOS* - mantener pulsada la traza requerida en la lista.


### Menú Contextual de Trazas {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Vista general del menú contextual de trazas Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vista general del menú contextual de trazas iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Cuando selecciona una traza en el mapa o abre el [menú contextual de trazas](./track-context-menu.md) después de grabar o importar una traza, puede controlar su visibilidad en el mapa. Simplemente use los botones *Mostrar* u *Ocultar* para mostrar o eliminar la traza de la vista del mapa.


## Analizar Traza en el Mapa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *Tocar la traza → Pestaña Traza → <Translate android="true" ids="analyze_on_map"/>*

![Menú de trazas analizar en el mapa Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Menú de trazas analizar en la distancia del mapa Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Tocar la traza → Pestaña Traza → <Translate ios="true" ids="analyze_on_map"/>*

![Menú de trazas analizar en el mapa](@site/static/img/personal/tracks/track_analyze_ios.png) ![Menú de trazas analizar en el mapa ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Esta herramienta proporciona un análisis detallado de los datos de la [traza](../../map/tracks/track-context-menu.md#options) utilizando gráficos y mapas.

- Los **datos del gráfico (eje Y)** muestran: *Altitud*, *Pendiente*, *Velocidad*, [datos del sensor externo](../../plugins/external-sensors.md) y combinaciones de hasta dos opciones si están contenidas en los datos de la traza.
- La **dimensión del gráfico (eje X)** representa: *Distancia*, *Tiempo* y *Hora del día*.
- **Interacción de tocar/deslizar**. Toque un gráfico para mostrar información sobre un punto específico de la traza. Al deslizar el gráfico, se resalta la ubicación adecuada en el mapa y se muestran los detalles en la barra de información.
- **Escalado**. Use un [gesto de dos dedos](../../map/interact-with-map.md#gestures) para escalar el gráfico y obtener una visualización más detallada.


### Seguir Mi Ubicación {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de trazas analizar en el mapa 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menú de trazas analizar en el mapa 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de trazas analizar en el mapa](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Menú de trazas analizar en el mapa ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Toque el botón [Mi Ubicación](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar la vista del mapa y el gráfico con su ubicación.

- La **escala del gráfico** permanece igual y la **información de la barra** se fija 1/4 a la izquierda.
- A medida que se mueve, el **gráfico se deslizará** de izquierda a derecha, mostrando información por delante de su traza.
- No se muestran otros widgets en esta pantalla.
- Esta función es útil para practicar senderismo y ciclismo mientras navega por la traza.


## Artículos Relacionados {#related-articles}

- [Apariencia de la traza](./appearance.md)
- [Menú contextual de trazas](./track-context-menu.md)
- [Navegar por traza](../../navigation/setup/gpx-navigation.md)
- [Artículo del blog Rutas en el mapa](https://docs.osmand.net/blog/routes)
- [Configurar mapa](../../map/configure-map-menu.md)
- [Trazas GPX](../../personal/tracks/index.md)
- [Planificar ruta](../../plan-route/index.md)
- [Grabación de Viajes](../../plugins/trip-recording.md)

> *Última actualización: Noviembre de 2024*