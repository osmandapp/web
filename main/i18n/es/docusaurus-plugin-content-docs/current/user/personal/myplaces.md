---
source-hash: 822817a60d43552808de6f3ba701ff373fc32cdd07367b0d49b825e58a1bdb4e
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

<!--
<InfoIncompleteArticle/>
-->

## Resumen {#overview}

**Mis lugares** es el centro neurálgico de la aplicación OsmAnd para gestionar y personalizar todos los datos personales. Puede utilizar esta sección para organizar [Puntos favoritos](#favorites) marcados como importantes o visitados con frecuencia. La pestaña [Tracks](#tracks) le permite ver, importar, grabar y crear archivos GPX para ayudarle a mantener un historial detallado de sus rutas y viajes. También puede gestionar sus [Ediciones de OpenStreetMap](#openstreetmap-edits), facilitando la contribución a las mejoras y actualizaciones de los mapas. El plugin [Notas de audio/vídeo](#audiovideo-notes) y los widgets permiten a los usuarios de Android crear y guardar notas multimedia relacionadas con ubicaciones específicas, añadiendo contexto a sus viajes.

## Menú Mis lugares {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis lugares*  

![Mis lugares android](@site/static/img/personal/my_places_android_new.png) ![Menú Mis lugares Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis lugares*  

![Mis lugares ios](@site/static/img/personal/my_places_ios_new.png)  ![Menú Mis lugares iOS](@site/static/img/personal/my_places_menu_ios_new.png)

</TabItem>

</Tabs>

Mis lugares está organizado por categorías. Seleccione una pestaña para gestionar los datos correspondientes.

**Nota:** Todos los datos almacenados en el menú *Mis lugares* se pueden mover utilizando un formato especial `.osf` a través de las aplicaciones de su dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y le permite compartirlos con otros usuarios de OsmAnd. 

### Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de favoritos android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de favoritos iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favoritos** le permiten marcar lugares importantes o visitados con frecuencia. Estos puntos favoritos se organizan en carpetas y se pueden personalizar con diferentes colores, formas e iconos. Puede navegar rápidamente a cualquier lugar favorito a través del menú **Mis lugares** sin necesidad de buscarlo repetidamente.

Para obtener instrucciones completas, consulte el artículo [Favoritos](../personal/favorites.md).

<!--
1. ***Action buttons***. *Action buttons* at the bottom of the My Places screen allow you to manage the list of folders with your favorites:  

    - **Import** (*Add* button) — Allows you to import *favorite.gpx* files from your device storage.

    - **Export** — Save your favorite points as a *favorites.gpx* file for external use or backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android only*) — You can add any favorite point or the entire list of favorite points in a folder to the [Map markers list](../personal/markers.md).

    - **Delete** (*on iOS, this option is located in the Edit menu*) — Deletes favorite points one at a time or selected favorite folders and all points contained in them.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Use the *three-dot* menu next to each folder or *long tap* the folder to manage groups of favorites. See [Favorite Group Actions](../personal/favorites.md#favorite-group-actions) for details.  
-->

### Tracks {#tracks}

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

Para obtener una guía completa, consulte el artículo [Gestionar Tracks](../personal/tracks/manage-tracks.md).

<!--
- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#track-folder) or the [single track](../personal/tracks/manage-tracks.md#search) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#available-filters) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.
-->

### Ediciones de OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Compartir](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Compartir](@site/static/img/plugins/osm-editing/my_places_osm_ios.png)

</TabItem>

</Tabs>

La función **Ediciones de OpenStreetMap** de OsmAnd le permite contribuir a la comunidad cartográfica mundial añadiendo, modificando o comentando datos de mapas.

Consulte el [plugin de edición OSM](../plugins/osm-editing.md) para obtener instrucciones paso a paso.

<!--
1. ***Action buttons***. You can use the *action buttons* on the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Upload files to OSM** — Send your notes and data to OpenStreetMap to contribute to the community.

    - **Export** (*Android only*) — Save your notes and POIs as files for external use or backup, with options to export as OSM notes, POIs, or all data combined.

    - **Delete** — Remove selected items from your list permanently.


2. ***Three-dot menu***. You can manage specific POIs or notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Upload edit to OSM** — Submit your changes or edits to OpenStreetMap for others to see.

    - **Show on map** — Display the specific location of the POI or note on the map.

    - **Modify OSM change/note** — Make further edits to the POI or note that have already been added to OpenStreetMap.

    - **Delete** — Remove the selected POI or note from your list.
    -->

### Notas de audio/vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Plugin de audio y vídeo Menú Mis lugares Tres acciones](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

El **plugin de Notas de audio/vídeo** le permite crear notas multimedia vinculadas a ubicaciones específicas del mapa. Estas notas se almacenan en **Mis lugares** en la **Pestaña Notas A/V**.

Para obtener más información, visite la página del [plugin de Notas de audio/vídeo](../plugins/audio-video-notes.md).

<!--
1. ***Action buttons***. You can use the *action buttons* at the bottom of the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Opens a selection of sorting methods, *By type* or *By date*, and when selected, sorts the list accordingly.

    - **<Translate android="true" ids="shared_string_share"/>** — Displays a checklist of all notes, including those added to GPX files as waypoints. First, the required notes are checked, then the *Share* icon in the upper right corner of the screen suggests available sharing options, and finally, these notes become available according to the selected option.

    - **Share with GPX waypoints** — You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

    - **<Translate android="true" ids="shared_string_delete"/>** — Displays a checklist of audio, photo, and video notes only. First, check the unnecessary notes, then tap the *Delete* icon in the upper right corner of the screen, after confirming, the selected notes will be deleted permanently.


2. ***Three-dot menu***. You can manage specific audio, video, or photo notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Views or listens to the selected audio, video, or photo note directly.

    - **<Translate android="true" ids="shared_string_share"/>** — Shares the note with others through various apps or platforms.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Displays the related location and [Context menu](../plugins/audio-video-notes#show-on-the-map) of the note on the map.

    - **<Translate android="true" ids="shared_string_rename"/>** — Change the name of the note to something more descriptive or relevant.

    - **<Translate android="true" ids="shared_string_delete"/>** — Selected notes are permanently deleted from your collection.


### Manage Storage {#manage-storage}

*Maps & Resources* *Main Menu* item of the OsmAnd application provides access to data management from the *My Places* section. The [*Local*](../personal/maps-resources.md#local-menu) tab shows you how much space is occupied by all existing OsmAnd data on your device, and the *My Places* section is in particular. You can use it to get detailed information about your data and access to manage it. The section can only contain items for which data has been downloaded.  

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Check and manage your data. For detailed information, see the [Maps & Resources](../personal/maps-resources.md) article.  


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
- [Favoritos](../personal/favorites.md)
- [Edición de OpenStreetMap](../plugins/osm-editing.md)
- [Notas de audio/vídeo](../plugins/audio-video-notes.md)
- [Historial de búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)