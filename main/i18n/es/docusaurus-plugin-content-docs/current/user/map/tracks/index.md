---
source-hash: f48138cc59c4ee27ce642e063d856f276b2f56ba4cb068db2cb6e337b797c4c1
title: Tracks
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

## Descripción general {#overview}

OsmAnd tiene muchas funciones potentes para mostrar varias rutas en el mapa. Las rutas se pueden construir como parte de la navegación, crearse a través de Planificar ruta, importarse como pistas GPX, grabarse a través del complemento Grabación de viaje, o buscarse y seleccionarse a partir de datos de OpenStreetMap.

## Tipos de pistas {#types-of-tracks}

[Pistas (GPX)](#display-tracks-on-the-map) - viaje grabado o planificado guardado en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Este tipo de ruta se puede importar desde una fuente externa, crearse en la aplicación o grabarse por usted. GPX puede contener uno de 3 tipos diferentes de datos, o todos ellos:

- Pista como una línea (***Geometría***). El archivo tiene una matriz de puntos ```<trkpt>```, cada punto tiene la ubicación y la hora opcional, la velocidad, la altitud y otros atributos. Estas pistas se muestran en el mapa como líneas continuas.
- Pista como una ruta (***Ruta***). El archivo tiene una matriz de puntos ```<rtept>```, cada punto descrito como un punto intermedio de la ruta. Depende de cómo se deben conectar los puntos dentro de una ruta, ya sea como pequeños segmentos de ruta o mediante una línea recta. Estas pistas se muestran en el mapa como líneas discontinuas.
- Puntos de interés (***Puntos***). El archivo tiene puntos ```<wpt>``` con atributos. Los puntos de interés se muestran como puntos circulares en el mapa. Puede tocarlos para obtener información adicional.

OsmAnd puede crear pistas con 1-3 combinaciones. [Planificar ruta](../../plan-route/create-route.md) crea una pista con ***Geometría*** y ***Ruta***, si la guarda como ***Pista simplificada***, solo se mantendrá la ***Geometría***. [Grabar pista](../../plugins/trip-recording.md#new-track-recording) crea solo ***Geometría***, pero también puede agregar ***Puntos*** a ella a través del menú contextual.

## Mostrar pistas en el mapa {#display-tracks-on-the-map}

Puede administrar la visibilidad de las pistas eligiendo cuáles mostrar u ocultar desde varios menús: el [menú Mis lugares](#my-places), el [menú Configurar mapa](#configure-map) y el [menú contextual de pista](#track-context-menu). Esta flexibilidad le permite cambiar rápidamente entre diferentes pistas, asegurando que solo las pistas relevantes sean visibles en su mapa en un momento dado.

### Configurar mapa {#configure-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configurar pistas de mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Configurar pistas de mapa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configurar pistas de mapa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Configurar pistas de mapa iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

La opción *Configurar mapa* le permite administrar rápidamente la visualización de todas las pistas mostradas recientemente, lo que le permite alternar la visibilidad para un grupo de pistas. La clasificación de las pistas sigue el orden configurado en la pestaña *Mis lugares → Pistas*. Puede acceder al [Menú de pista](../../personal/tracks/manage-tracks.md#track-menu) tocando prolongadamente un elemento de pista. Además, en este menú, puede modificar la apariencia de varias pistas seleccionadas simultáneamente.

### Mis lugares {#my-places}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Mis lugares con pistas en Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → toque prolongado la pista GPX elegida → Mostrar en el mapa*

![Menú contextual de una pista en iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

En la pestaña [Mis lugares *→* Pistas](../../personal/tracks/manage-tracks.md#manage-tracks) para mostrar la pista en el mapa, debe:

- *Android* - toque el *menú de tres puntos* en el campo con la pista requerida.
- *iOS* - toque prolongadamente la pista requerida en la lista.

### Menú contextual de pista {#track-context-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Vista general del menú contextual de pista Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vista general del menú contextual de pista iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Cuando selecciona una pista en el mapa o abre el [menú contextual de pista](./track-context-menu.md) después de grabar o importar una pista, puede controlar su visibilidad en el mapa. Simplemente use los botones *Mostrar* u *Ocultar* para mostrar o eliminar la pista de la vista del mapa.

## Analizar pista en el mapa {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Ir a: *Toque la pista → Pestaña Pista → <Translate android="true" ids="analyze_on_map"/>*

![Menú de pista analizar en el mapa Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Menú de pista analizar en el mapa distancia Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *Toque la pista → Pestaña Pista → <Translate ios="true" ids="analyze_on_map"/>*

![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_analyze_ios.png) ![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Esta herramienta proporciona un análisis detallado de los datos de [pista](../../map/tracks/track-context-menu.md#options) utilizando gráficos y mapas.

- Los **datos del gráfico (eje Y)** muestran: *Altitud*, *Pendiente*, *Velocidad*, [datos del sensor externo](../../plugins/external-sensors.md) y combinaciones de hasta dos opciones si están contenidas en los datos de la pista.
- La **dimensión del gráfico (eje X)** representa: *Distancia*, *Tiempo* y *Hora del día*.
- **Interacción de toque/deslizamiento**. Toque un gráfico para mostrar información sobre un punto específico de la pista. Deslizar sobre el gráfico resalta la ubicación adecuada en el mapa y muestra los detalles en la barra de información.
- **Escalado**. Use un [gesto de dos dedos](../../map/interact-with-map.md#gestures) para escalar el gráfico para una visualización más detallada.

### Seguir mi ubicación {#follow-my-location}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Menú de pista analizar en el mapa 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Menú de pista analizar en el mapa 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Menú de pista analizar en el mapa](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Toque el botón [Mi ubicación](../../map/interact-with-map.md#my-location-and-zoom) para sincronizar la vista del mapa y el gráfico con su ubicación.

- La **escala del gráfico** permanece igual y la **información de la barra** se fija 1/4 a la izquierda.
- A medida que se mueve, el **gráfico se deslizará** de izquierda a derecha, mostrando información por delante de su pista.
- No se muestran otros widgets en esta pantalla.
- Esta función es útil para practicar senderismo y ciclismo mientras navega por la pista.

## Artículos relacionados {#related-articles}

- [Apariencia de la pista](./appearance.md)
- [Menú contextual de pista](./track-context-menu.md)
- [Navegar por pista](../../navigation/setup/gpx-navigation.md)
- Artículo del blog [Rutas en el mapa](https://docs.osmand.net/blog/routes)
- [Configurar mapa](../../map/configure-map-menu.md)
- [Pistas GPX](../../personal/tracks/index.md)
- [Planificar ruta](../../plan-route/index.md)
- [Grabación de viaje](../../plugins/trip-recording.md)

> *Última actualización: noviembre de 2024*