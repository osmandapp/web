---
source-hash: 18d9873a363946b476ae9c98d895b7afc2dcac45571f524bfe437e0a7bba8153
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




## Resumen {#overview}

Los [Marcadores del mapa](../../personal/markers.md) son puntos en el mapa marcados con banderas. Se pueden usar para una variedad de propósitos, como indicar una ubicación que desea visitar, un punto de interés que desea recordar o para crear una ruta personalizada.

Pueden ser particularmente útiles para excursionistas, ciclistas o cualquier persona que explore una nueva área y quiera marcar ubicaciones interesantes o puntos de referencia en el mapa. La principal diferencia con los [puntos Favoritos](../../personal/favorites.md) es que los Marcadores son más rápidos de crear ya que no requieren un nombre.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Marcador de navegación Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcador de navegación iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Usar Marcadores en la Navegación {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Diferencia de navegación por marcador Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Diferencia de navegación por marcador Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Diferencia de navegación por marcador iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Diferencia de navegación por marcador iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

Los *Marcadores del mapa* pueden servir como [destinos](./route-navigation#set-destinations) al construir una ruta. Son especialmente convenientes cuando necesita establecer una ruta con puntos intermedios.

Sin embargo, los *Marcadores del mapa* también proporcionan diversas funcionalidades como [widgets](../../widgets/markers.md), dirección de movimientos, líneas en el mapa, por lo que podría usar estas herramientas para la navegación sin construir una línea de ruta y entrar en la guía de navegación por voz completa.

En caso de que necesite una navegación simple de punto a punto mostrada como líneas rectas, puede construir y ordenar una ***Lista de itinerario*** compuesta por marcadores como puntos intermedios y usar widgets para una navegación simple.


### Recomendaciones {#recommendations}

Aquí hay unos sencillos pasos recomendados para *Navegar por marcadores*:

1. Crear marcadores. Encuentre el(los) objeto(s) deseado(s) en el mapa, tóquelo y elija el *[botón Marcador](../../personal/markers.md#add--edit-markers)* en el *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*. También puede crear marcadores a partir de [favoritos](#add-group-of-favorite) o [rutas GPX](#add-group-of-track-waypoints).
2. [*Ordenar marcadores*](#sort-markers) de la manera preferida en que desea pasarlos.
3. Personalice la *Vista de marcadores del mapa* si desea usar Marcadores sin iniciar la Navegación. Habilite las opciones **Flechas en el mapa** y **Línea de dirección** en la sección *[Apariencia](../../personal/markers.md#appearance-on-the-map)* del *[Menú de marcadores del mapa](../../personal/markers.md#actions)*.
4. Añada *[Widgets de marcadores](../../personal/markers.md#markers)* en el *[menú Configurar pantalla](../../widgets/configure-screen.md)* (opcional).
5. [*Marcar como pasados*](#pass-markers) los marcadores ya visitados o restaurarlos desde el historial si desea pasarlos de nuevo.

:::note
Cuando las opciones **Flechas en el mapa** y **Línea de dirección** están habilitadas en la sección *Apariencia* del [Menú de marcadores del mapa](../../personal/markers.md#appearance-on-the-map), verá una flecha o una línea discontinua en el mapa. La flecha muestra la dirección hacia el marcador activo cuando está fuera de la pantalla actual del mapa. La línea de dirección se dibuja cuando su geolocalización y el marcador están ambos en la misma pantalla.
:::


## Lista de Itinerario {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista de marcadores Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Lista de marcadores iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


La lista de itinerario representa una lista ordenada de marcadores *transitables* que son visibles en el mapa. Puede añadir y eliminar puntos uno por uno o hacerlo en lote usando un [archivo GPX](#add-group-of-track-waypoints) preparado de antemano o un [grupo de Favoritos](#add-group-of-favorite). Para competiciones locales o aventuras, puede ser útil crear una lista de puntos a partir de coordenadas usando la [herramienta de entrada de coordenadas](../../plan-route/coordinate-input.md).


### Añadir Marcadores Individuales {#add-single-markers}

Los *Marcadores* se pueden añadir o eliminar del mapa con un solo toque en la pantalla en la ubicación deseada. Luego, debe seguir las instrucciones del artículo *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*.


### Añadir Grupo de Favoritos {#add-group-of-favorite}

<InfoAndroidOnly />

![Favoritos a marcadores 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favoritos a marcadores 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Puede crear *Marcadores del mapa* a partir de *[Favoritos](../../personal/favorites.md)* usando:

- *[Menú de grupos de favoritos](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mis Favoritos)*.
- Icono &#128681; en el menú de la página de Favoritos *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Mis Favoritos→&#128681;)*.
- Opción **'+'** (añadir) en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú Marcadores del mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Añadir Grupo de Waypoints de Ruta {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX a marcadores 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Las rutas GPX con waypoints se pueden usar como *Marcadores del mapa* y desactivarse rápidamente:

- Use la opción **'+'** (añadir) en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú Marcadores del mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Active el interruptor cerca de la ruta en la *[pestaña Grupos](../../personal/markers.md#marker-groups)* en el menú Marcadores del mapa *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
Solo las rutas con waypoints se pueden añadir a la *Lista de marcadores del mapa*. La ruta que pretende añadir también debe ser visible (activa) en el mapa.
:::

![GPX a marcadores 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX a marcadores 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- También puede crear *Marcadores* a partir de una ruta con waypoints usando el *[menú contextual de la ruta](../../map/tracks/track-context-menu.md#points--waypoints)*: *Toque una ruta visible en el mapa → en el menú contextual de la ruta elija Puntos → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Ordenar Marcadores {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ordenar Marcadores en una lista Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ordenar Marcadores en una lista iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Presionando en la esquina izquierda (*Android*) o en la esquina derecha (*iOS*) de una pestaña de *Marcador del mapa* en la *[Lista de marcadores del mapa](../../personal/markers.md#itinerary-list)* y moviéndola hacia arriba o hacia abajo, puede cambiar su orden en la *Lista de navegación* (mientras mueve una tarjeta de marcador, verá una línea que indica dónde se colocará el marcador).

En la versión de Android de la aplicación OsmAnd, hay otras opciones de ordenación para los *Marcadores del mapa* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Ordenar por* o *Planificar una ruta*).


### Ordenar por Atributos {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ordenación alternativa de Marcadores Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Ordenación alternativa de Marcadores Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Puede ordenar *Marcadores* por:

- **Nombre** (*alfabéticamente*) — Si los marcadores tienen nombres descriptivos, esta puede ser una forma útil de encontrar rápidamente el marcador que está buscando.
- **Distancia** (*más cercano o más lejano primero*) - Esta opción ordenará los marcadores por su distancia desde su ubicación actual.
- **Fecha** (*recientemente o hace mucho tiempo*) - Esto ordenará los marcadores por la fecha en que fueron añadidos. Si ha añadido muchos marcadores a lo largo del tiempo, esta puede ser una forma útil de ver cuáles son los más recientes.


### Reordenar con la Herramienta Planificar una Ruta {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Ordenación alternativa de Marcadores Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Ordenación alternativa de Marcadores Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Usando la funcionalidad de la herramienta Planificar una ruta en la lista de Marcadores, puede ordenar los *Marcadores* *Puerta a puerta*, ponerlos en orden inverso o crear un *Viaje de ida y vuelta*. Si toca una opción de *Navegación*, los *Marcadores* se usarán como [destinos intermedios](../setup/route-navigation.md#intermediate-destinations).


## Pasar Marcadores {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pasar Marcador Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pasar Marcador Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pasar Marcador iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pasar Marcador iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

Un *Marcador* puede ser marcado como pasado (*Android*) o descartado (*iOS*).

- A través del *[menú contextual del mapa](../../map/map-context-menu.md#add--edit-marker)*.
- Cuando se acerca a un *Marcador* a una distancia inferior a 40 metros (*Android*) o 50 metros (*iOS*), se activa un interruptor en la barra de *[Widgets de marcadores](../../widgets/markers.md#top-bar-widget)*.

Después de pasar un *Marcador*, se mueve a la carpeta [Historial](../../personal/markers.md#history), desde donde se puede restaurar si es necesario. El siguiente marcador en la [lista](#itinerary-list) se vuelve activo. Dependiendo de su [configuración](#use-markers-in-navigation), puede ser guiado hacia él con una flecha o una línea discontinua.


## Artículos Relacionados {#related-articles}

- [Acerca de los marcadores del mapa](../../personal/markers.md).
- [Widget de marcadores](../../widgets/markers.md).
__
- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de la ruta](./route-navigation.md)
- [Detalles de la ruta](./route-details.md)
- [Navegación por ruta GPX](./gpx-navigation.md)
- [Ajustes de navegación](../guidance/navigation-settings.md)
- [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)