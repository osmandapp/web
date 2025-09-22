---
source-hash: 479b492a4c86a0646befd8187d85091dd523d1e848bf8bd1a5f10175948ab1bf
sidebar_position: 6
title:  Mis lugares
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


<InfoIncompleteArticle/>

## Resumen {#overview}

**Mis lugares** es el centro neurálgico de la aplicación OsmAnd para gestionar y personalizar todos los datos personales. Puede utilizar esta sección para organizar [Puntos favoritos](#favorites) marcados como importantes o visitados con frecuencia. La pestaña [Tracks](#tracks) le permite ver, importar, grabar y crear archivos GPX para ayudarle a mantener un historial detallado de sus rutas y viajes. También puede gestionar sus [Ediciones de OpenStreetMap](#openstreetmap-edits), facilitando la contribución a las mejoras y actualizaciones de los mapas. El plugin [Notas de audio/vídeo](#audiovideo-notes) y los widgets permiten a los usuarios de Android crear y guardar notas multimedia relacionadas con ubicaciones específicas, añadiendo contexto a sus viajes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis lugares*  

![Mis lugares android](@site/static/img/personal/my_places_android.png) ![Menú Mis lugares Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis lugares*  

![Mis lugares ios](@site/static/img/personal/my_places_ios.png)  ![Menú Mis lugares iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Importar y exportar datos***](../personal/import-export.md):  

    Todos los datos almacenados en el menú *Mis lugares* se pueden mover utilizando un formato especial `.osf` a través de las aplicaciones de su dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y le permite compartirlos con otros usuarios de OsmAnd.  

    **Vaya a** la sección *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* y seleccione si desea exportar o importar datos. Si selecciona *exportar*, deberá expandir el *grupo Mis lugares* y marcar los datos requeridos.

- [***Mapas y recursos***](../personal/maps-resources.md):  

    El elemento *Mapas y recursos* del *Menú principal* de la aplicación OsmAnd proporciona acceso a la gestión de datos desde la sección *Mis lugares*. La pestaña [*Local*](../personal/maps-resources.md#local) le muestra cuánto espacio ocupan todos los datos existentes de OsmAnd en su dispositivo, y la sección *Mis lugares* en particular. Puede utilizarla para obtener información detallada sobre sus datos y acceder a su gestión. La sección sólo puede contener elementos para los que se hayan descargado datos.  

    **Vaya a** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Compruebe y gestione sus datos.


## Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de favoritos android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de favoritos iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoritos** le permite marcar lugares importantes o visitados con frecuencia. Estos puntos favoritos se organizan en carpetas y se pueden personalizar con diferentes colores, formas e iconos. Puede navegar rápidamente a cualquier lugar favorito a través del menú **Mis lugares** sin necesidad de buscarlo repetidamente.


1. ***Botones de acción***. Los *botones de acción* en la parte inferior de la pantalla Mis lugares le permiten gestionar la lista de carpetas con sus favoritos:  

    - **Importar** (botón *Añadir*) — Le permite importar archivos *favorite.gpx* desde el almacenamiento de su dispositivo.

    - **Exportar** — Guarde sus puntos favoritos como un archivo *favorites.gpx* para uso externo o copia de seguridad.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Solo Android*) — Puede añadir cualquier punto favorito o la lista completa de puntos favoritos de una carpeta a la [lista de marcadores del mapa](../personal/markers.md).

    - **Eliminar** (*en iOS, esta opción se encuentra en el menú Editar*) — Elimina puntos favoritos de uno en uno o carpetas de favoritos seleccionadas y todos los puntos que contienen.

2. ***Menú de tres puntos*** (*Android*) y ***pulsación larga*** (*iOS*). Utilice el menú de *tres puntos* junto a cada carpeta o *pulse prolongadamente* la carpeta para gestionar grupos de favoritos:  

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Menú de tres puntos](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Menú de favoritos iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Utilice esta opción para cambiar el nombre de la carpeta seleccionada.

    - **<Translate android="true" ids="change_default_appearance"/>** — Personalice la apariencia de los puntos favoritos de la carpeta en el mapa cambiando sus iconos, colores o etiquetas.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** o **Ocultar en el mapa** — Active esta opción para mostrar u ocultar los puntos favoritos de la carpeta en el mapa.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Eliminar de los marcadores del mapa** (*Solo Android*) — Añada todos los puntos favoritos de la carpeta a la *lista de marcadores del mapa* o elimínelos según sea necesario para facilitar la consulta.

    - **<Translate android="true" ids="shared_string_share"/>** — Comparta los puntos favoritos de la carpeta exportándolos como un archivo *Favorites.gpx*, lo que facilita la transferencia o la copia de seguridad de sus datos.

    - **<Translate android="true" ids="shared_string_delete"/>** — Elimina permanentemente la carpeta de favoritos seleccionada y todos los puntos que contiene.

Para obtener instrucciones más detalladas, consulte el artículo [Favoritos](../personal/favorites.md).


## Tracks {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> pestaña*

![Mis lugares con tracks en Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis lugares con tracks en iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Tracks** ofrece potentes herramientas para grabar, crear y gestionar rutas dentro de OsmAnd. Se pueden utilizar para la [navegación](../navigation/setup/gpx-navigation.md), la [grabación de viajes](../plugins/trip-recording.md) o la [integración](../personal/tracks/manage-tracks.md#import) de archivos GPX externos.

- **Pestaña Tracks** — Todos los tracks grabados, creados o importados se muestran automáticamente en la carpeta *Mis lugares* en la pestaña *Tracks*. Se organizan por carpetas o se muestran en una lista debajo de ellas.

- **Crear un track** — Comience a grabar utilizando la **Pestaña Tracks** o el [plugin de grabación de viajes](../plugins/trip-recording.md).

- **Ver y Editar** — Acceda a la lista de tracks a través de *Mis lugares* y gestiónelos utilizando el *menú de tres puntos* para [carpetas](../personal/tracks/manage-tracks.md#track-folder) o el menú de [track individual](../personal/tracks/manage-tracks.md#search).

- **Gestionar** — Utilice las herramientas [Filtro](../personal/tracks/smart-folder.md#available-filters) y [Carpeta inteligente](../personal/tracks/smart-folder.md#smart-folder) para organizar los tracks en función de parámetros específicos.

- **Apariencia y Análisis** — [Personalice](../map/tracks/appearance.md) el estilo visual de los tracks y [analícelos](../map/tracks/index.md#analyze-track-on-map) utilizando la herramienta [Planificar una ruta](../plan-route/create-route.md) de OsmAnd.

Para una guía completa, consulte el artículo [Gestionar Tracks](../personal/tracks/manage-tracks.md).


## Ediciones de OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Compartir](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Compartir](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

La función **Ediciones de OpenStreetMap** de OsmAnd le permite contribuir a la comunidad cartográfica mundial añadiendo, modificando o comentando datos de mapas.

1. ***Botones de acción***. Puede utilizar los *botones de acción* de la pantalla Mis lugares para gestionar su lista de notas:  

    ![Compartir](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Subir archivos a OSM** — Envíe sus notas y datos a OpenStreetMap para contribuir a la comunidad.

    - **Exportar** (*Solo Android*) — Guarde sus notas y PDI como archivos para uso externo o copia de seguridad, con opciones para exportar como notas OSM, PDI o todos los datos combinados.

    - **Eliminar** — Elimine permanentemente los elementos seleccionados de su lista.


2. ***Menú de tres puntos***. Puede gestionar PDI o notas específicas utilizando el *menú de tres puntos* situado junto a cada nota:  

    ![Menú de tres puntos](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Subir edición a OSM** — Envíe sus cambios o ediciones a OpenStreetMap para que otros los vean.

    - **Mostrar en el mapa** — Muestra la ubicación específica del PDI o de la nota en el mapa.

    - **Modificar cambio/nota OSM** — Realice más ediciones en el PDI o en la nota que ya se han añadido a OpenStreetMap.

    - **Eliminar** — Elimine el PDI o la nota seleccionados de su lista.

Consulte el [plugin de edición OSM](../plugins/osm-editing.md) para obtener instrucciones paso a paso.


## Notas de audio/vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Plugin de audio y vídeo Menú Mis lugares Tres acciones](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

El **plugin de Notas de audio/vídeo** le permite crear notas multimedia vinculadas a ubicaciones específicas del mapa. Estas notas se almacenan en **Mis lugares** en la **Pestaña Notas A/V**.

1. ***Botones de acción***. Puede utilizar los *botones de acción* en la parte inferior de la pantalla Mis lugares para gestionar su lista de notas:  

    ![Compartir](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Abre una selección de métodos de ordenación, *Por tipo* o *Por fecha*, y cuando se selecciona, ordena la lista en consecuencia.

    - **<Translate android="true" ids="shared_string_share"/>** — Muestra una lista de todas las notas, incluidas las añadidas a los archivos GPX como waypoints. Primero, se marcan las notas requeridas, luego el icono *Compartir* en la esquina superior derecha de la pantalla sugiere las opciones disponibles para compartir y, finalmente, estas notas están disponibles según la opción seleccionada.

    - **Compartir con waypoints GPX** — Puede compartir las notas seleccionadas como waypoints en el menú *Mis lugares* añadiéndoles [datos GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) mediante el botón **Compartir** en la parte inferior de la pantalla de la pestaña *Notas A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Muestra una lista de verificación de notas de audio, foto y vídeo únicamente. Primero, marque las notas innecesarias, luego toque el icono *Eliminar* en la esquina superior derecha de la pantalla, tras la confirmación, las notas seleccionadas se eliminarán permanentemente.


2. ***Menú de tres puntos***. Puede gestionar notas específicas de audio, vídeo o foto utilizando el *menú de tres puntos* situado junto a cada nota:  

    ![Menú de tres puntos](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Ve o escucha directamente la nota de audio, vídeo o foto seleccionada.

    - **<Translate android="true" ids="shared_string_share"/>** — Comparte la nota con otros a través de varias aplicaciones o plataformas.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Muestra la ubicación relacionada y el [Menú contextual](../plugins/audio-video-notes#show-on-the-map) de la nota en el mapa.

    - **<Translate android="true" ids="shared_string_rename"/>** — Cambie el nombre de la nota por algo más descriptivo o relevante.

    - **<Translate android="true" ids="shared_string_delete"/>** — Las notas seleccionadas se eliminan permanentemente de su colección.

Para más información, visite la página del [plugin de Notas de audio/vídeo](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Artículos relacionados {#related-articles}

- [Gestionar Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)