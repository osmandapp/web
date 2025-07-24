---
source-hash: f1b6ce88c16188825c1c750fdab6393efc13e796dac9b76318385c1908db3134
sidebar_position: 3
title:  Navegar por Marcadores
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

Los [marcadores de mapa](../../personal/markers.md) son puntos en el mapa marcados con banderas. Se pueden usar para una variedad de propósitos, como indicar una ubicación que desea visitar, un punto de interés que desea recordar o para crear una ruta personalizada.

Pueden ser particularmente útiles para excursionistas, ciclistas o cualquier persona que explore un área nueva que quiera marcar ubicaciones o puntos de referencia interesantes en el mapa. La principal diferencia con los [puntos favoritos](../../personal/favorites.md) es que los marcadores son más rápidos de crear, ya que no requieren un nombre.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcador de navegación Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcador de navegación iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Usar marcadores en la navegación {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navegación de marcador de diferencia Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Navegación de marcador de diferencia Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navegación de marcador de diferencia iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Navegación de marcador de diferencia iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

Los *marcadores de mapa* pueden servir como [destinos](./route-navigation#set-destinations) al construir una ruta. Son especialmente convenientes cuando necesita establecer una ruta con puntos intermedios.

Sin embargo, los *marcadores de mapa* también proporcionan varias funcionalidades, como [widgets](../../widgets/markers.md), dirección de movimientos, líneas en el mapa, para que pueda usar estas herramientas para la navegación sin construir una línea de ruta e ingresar la navegación de guía de voz completa.

En caso de que necesite una navegación simple de punto a punto que se muestre como líneas rectas, puede construir y ordenar una ***lista de itinerarios*** que consista en marcadores como puntos intermedios y usar widgets para una navegación simple.


#### Recomendaciones {#recommendations}

Aquí hay pasos de recomendación simples para *Navegar por marcadores*:

1. Crear marcadores. Encuentre los objetos deseados en el mapa, tóquelos y elija el *[botón Marcador](../../personal/markers.md#add--edit-markers)* en el *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*. También puede crear marcadores a partir de [favoritos](#add-group-of-favorite) o [pistas GPX](#add-group-of-track-waypoints).
2. [*Ordenar marcadores*](#sort-markers) de la forma preferida en que desea pasarlos.
3. Personalice la *vista de marcadores de mapa* si desea usar marcadores sin iniciar la navegación. Habilite las opciones **Flechas en el mapa** y **Línea de dirección** en la sección *[Apariencia](../../personal/markers.md#appearance-on-the-map)* del *[menú de marcadores de mapa](../../personal/markers.md#actions)*.
4. Agregue *[widgets de marcadores](../../personal/markers.md#markers)* en el *[menú Configurar pantalla](../../widgets/configure-screen.md)* (opcional).
5. [*Marcar como pasados*](#pass-markers) los marcadores ya visitados o restaurarlos del historial si desea pasarlos nuevamente.

:::note
Cuando las opciones **Flechas en el mapa** y **Línea de dirección** están habilitadas en la sección *Apariencia* del [menú de marcadores de mapa](../../personal/markers.md#appearance-on-the-map), verá una flecha o una línea discontinua en el mapa. La flecha muestra la dirección al marcador activo cuando está fuera de la pantalla actual del mapa. La línea de dirección se dibuja cuando su geolocalización y el marcador están ambos en la misma pantalla.
:::


## Lista de itinerarios {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Lista de marcadores Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de marcadores iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


La lista de itinerarios representa una lista ordenada de marcadores *transitables* que son visibles en el mapa. Puede agregar y eliminar puntos uno por uno o hacerlo en lote usando un [archivo GPX](#add-group-of-track-waypoints) o un [grupo de favoritos](#add-group-of-favorite) preparados de antemano. Para competiciones locales o aventuras, puede ser útil crear una lista de puntos a partir de coordenadas utilizando la [herramienta de entrada de coordenadas](../../plan-route/coordinate-input.md).


### Añadir marcadores individuales {#add-single-markers}

Los *marcadores* se pueden agregar o eliminar del mapa tocando la pantalla en la ubicación deseada. Luego, debe seguir las instrucciones del artículo *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*.


### Añadir grupo de favoritos {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoritos a marcadores 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoritos a marcadores 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Puede crear *marcadores de mapa* a partir de *[favoritos](../../personal/favorites.md)* usando:

- *[Menú de grupos de favoritos](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mis favoritos)*.
- Icono &#128681; en el menú en la página de favoritos *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mis favoritos→&#128681;)*.
- Opción **'+'** (añadir) en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú de marcadores de mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Añadir grupo de puntos de referencia de pista {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX a marcadores 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Las pistas GPX con puntos de referencia se pueden usar como *marcadores de mapa* y se pueden desactivar rápidamente:

- Use la opción **'+'** (añadir) en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú de marcadores de mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Active el interruptor cerca de la pista en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú de marcadores de mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Solo las pistas con puntos de referencia se pueden agregar a la *lista de marcadores de mapa*. La pista que desea agregar también debe ser visible (activa) en el mapa.
:::

![GPX a marcadores 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX a marcadores 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- También puede crear *marcadores* a partir de una pista con puntos de referencia utilizando el *[menú contextual de la pista](../../map/tracks/track-context-menu.md#points--waypoints)*: *Toque una pista visible en el mapa → en el menú contextual de la pista elija Puntos → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Ordenar marcadores {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ordenar marcadores en una lista Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ordenar marcadores en una lista iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Al presionar en la esquina izquierda (*Android*) o en la esquina derecha (*iOS*) de una pestaña de *marcador de mapa* en la *[lista de marcadores de mapa](../../personal/markers.md#itinerary-list)* y moverla hacia arriba o hacia abajo, puede cambiar su orden en la *lista de navegación* (al mover una tarjeta de marcador, verá una línea que indica dónde se colocará el marcador).

En la versión de Android de la aplicación OsmAnd, hay otras opciones de clasificación para *marcadores de mapa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Ordenar por* o *Planificar una ruta*).


### Ordenar por atributos {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Clasificación alternativa de marcadores Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Clasificación alternativa de marcadores Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Puede ordenar *marcadores* por:

- **Nombre** (*alfabéticamente*) — Si los marcadores tienen nombres descriptivos, esta puede ser una forma útil de encontrar rápidamente el marcador que está buscando.
- **Distancia** (*más cercano o más lejano primero*) - Esta opción ordenará los marcadores por su distancia desde su ubicación actual.
- **Fecha** (*recientemente o hace mucho tiempo*) - Esto ordenará los marcadores por la fecha en que se agregaron. Si ha agregado muchos marcadores con el tiempo, esta puede ser una forma útil de ver cuáles son los más recientes.


### Reordenar con una herramienta de planificación de ruta {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Clasificación alternativa de marcadores Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Clasificación alternativa de marcadores Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Utilizando la funcionalidad de la herramienta Planificar una ruta en la lista de marcadores, puede ordenar los *marcadores* *puerta a puerta*, ponerlos en orden inverso o crear un *viaje de ida y vuelta*. Si toca la opción *Navegación*, los *marcadores* se usarán como [destinos intermedios](../setup/route-navigation.md#intermediate-destinations).


## Pasar marcadores {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pasar marcador Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pasar marcador Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pasar marcador iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pasar marcador iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *marcador* se puede marcar como pasado (*Android*) o descartado (*iOS*).

- A través del *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*.
- Cuando se acerca a un *marcador* a una distancia inferior a 40 metros (*Android*) o 50 metros (*iOS*), un interruptor en la barra de *[widgets de marcadores](../../widgets/markers.md#top-bar-widget)* se activa.

Después de pasar un *marcador*, este se mueve a la carpeta [Historial](../../personal/markers.md#history), desde donde se puede restaurar si es necesario. El siguiente marcador en la [lista](#itinerary-list) se activa. Dependiendo de su [configuración](#use-markers-in-navigation), es posible que se le guíe a él con una flecha o una línea discontinua.


## Artículos relacionados {#related-articles}

- [Acerca de los marcadores de mapa](../../personal/markers.md).
- [Widget de marcador](../../widgets/markers.md).
__
- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](./route-navigation.md)
- [Detalles de ruta](./route-details.md)
- [Navegación por pista](./gpx-navigation.md)
- [Configuración de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: junio de 2025*