---
source-hash: 4a76625c2bb84dea3475d937395b2dcabeed514e2bbf68736a1f6e8649b066f9
sidebar_position: 8
title:  Marcadores
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

Los marcadores son puntos especiales marcados en el mapa como banderas que se pueden crear rápidamente con un solo toque sin especificar nombre y otra información, a diferencia de los [Puntos favoritos](./favorites.md). Además, los marcadores proporcionan funcionalidad adicional con [widgets](../widgets/markers.md), **flechas** (<Translate android="true" ids="show_arrows_on_the_map"/>) e **indicación de distancia** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Marcadores de mapa Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Marcadores de mapa iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Marcadores {#markers}

### Añadir / Editar Marcadores {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Toque corto o largo en el mapa y seleccione la acción requerida en el [menú contextual del mapa](../map/map-context-menu.md#add--edit-marker).

![Acción de añadir/editar marcador Android](@site/static/img/map/add_marker_android.png) ![Acción de pasar marcador Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Toque corto o largo en el mapa y elija la acción necesaria en el [menú contextual del mapa](../map/map-context-menu.md#add--edit-marker).

![Acción de añadir/editar marcador iOS](@site/static/img/map/add_marker_ios.png) ![Acción de restaurar marcador Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es posible marcar un punto o un objeto para facilitar la planificación de la navegación. Solo necesita tocar el icono de la *bandera* (*Android*) o la *flecha* (*iOS*) en el menú para mostrar la dirección y la distancia al punto seleccionado desde su ubicación actual (o el punto central del mapa / el punto inicial de toque del mapa cuando la Ubicación está desactivada).

***Acciones***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Pone un nuevo marcador en el punto seleccionado.
- **Marcar como pasado** (*Android*) / Descartar (iOS). Desactiva el marcador y lo pone en el Historial.
- **Hacer activo** (*Android*). Mueve el marcador a la primera posición (en el panel superior).
- **Restaurar marcador** (*Android*). Mueve el marcador del Historial a la lista activa.

:::note
No puede eliminar un marcador inmediatamente, primero debe desactivarlo (marcarlo como pasado), para que se mueva al [Historial](#history) y luego puede eliminarlo permanentemente del historial. Una vez que el marcador se desactiva, se eliminará del mapa y de la lista de itinerario.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Lista de itinerario {#itinerary-list}

La lista de itinerario representa una lista ordenada de marcadores donde el primer marcador superior se utiliza en los widgets para la navegación. Lea más sobre esto en el artículo [Navegar por marcadores](../navigation/setup/markers-navigation.md#itinerary-list).

### Grupos de marcadores {#marker-groups}

<InfoAndroidOnly />

![Grupos de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Los marcadores se pueden añadir y eliminar como un grupo completo desde un grupo de Favoritos o un archivo GPX con puntos de ruta. Esto hace que sea muy conveniente para ser utilizado en un modo de navegación especial - [Navegar por marcadores](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Historial {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Historial de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Historial de marcadores de mapa iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

El historial es una lista de todos los marcadores desactivados (pasados). Desde esta lista es posible eliminar permanentemente un marcador o restaurarlo.


## Apariencia en el mapa {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![apariencia_en_el_mapa](@site/static/img/widgets/appearence_on_the_map-01.png) ![apariencia_en_el_mapa](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Apariencia de marcadores de mapa iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Apariencia de marcadores de mapa iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

El menú *Apariencia en el mapa* es una configuración general para mostrar marcadores y punteros adicionales a ellos.
En la versión de iOS de OsmAnd, *Apariencia en el mapa* también es una configuración para mostrar widgets. También hay configuraciones adicionales para [configurar los widgets con marcadores](../widgets/markers.md#configure-marker-widgets).

- **Marcadores activos**. Muestra información sobre el primer o los dos primeros marcadores en la lista de marcadores de mapa.
- **Indicación de distancia** *(para iOS)*. Permite elegir si se muestran o no los widgets y cómo aparecerán: encima del mapa (Barra superior) o en el lado derecho de la pantalla (Widgets).
- **Flechas en el mapa**. Indica la dirección al marcador seguido (uno o dos) como una flecha en el mapa. Si el marcador está en la parte visible del mapa, no se muestra ninguna flecha.
- **Línea de dirección**. Muestra la dirección, como una línea discontinua, desde un punto particular en el mapa hasta el marcador seguido en línea recta.
- ***Un toque*** activo (*para Android*). Con un solo toque en el marcador deseado en el mapa, este marcador se mueve a la parte superior de la lista de marcadores de mapa activos sin abrir el menú contextual.
- **Mantener marcadores pasados en el mapa** *(para Android)*. Los marcadores añadidos como un grupo de Favoritos o puntos de ruta GPX marcados como Pasados permanecerán en el mapa. Si el grupo no está activo, los marcadores desaparecerán del mapa.


## Planificar ruta para marcadores {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Puntos de planificación de ruta de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Opciones de planificación de ruta de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Usando la funcionalidad de la herramienta Planificar una ruta en la lista de Marcadores, puede ordenar los *Marcadores* *Puerta a puerta*, ponerlos en orden inverso o crear un *Viaje de ida y vuelta*. Si toca una opción de *Navegación*, los *Marcadores* se utilizarán como [destinos intermedios](../navigation/setup/route-navigation.md#intermediate-destinations).


## Acciones {#actions}

<InfoAndroidOnly />

![Más opciones de marcadores de mapa Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Los marcadores se pueden ordenar en la lista por nombre, proximidad, tiempo de adición.
- **<Translate android="true" ids="appearance_on_the_map"/>** o **<Translate ios="true" ids="shared_string_appearance"/>**. [Configuración para Marcadores de mapa](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Añade Marcadores mediante [entrada de coordenadas](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Construye una ruta [para la navegación](../navigation/setup/markers-navigation.md) utilizando los marcadores elegidos.
- **<Translate android="true" ids="marker_save_as_track"/>**. Guarda los marcadores activos en un archivo GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Desactiva todos los marcadores y los mueve al [Historial](#history).


## Artículos relacionados {#related-articles}

- [Navegación por marcadores](../navigation/setup/markers-navigation.md)
- [Widgets de marcadores](../widgets/markers.md)