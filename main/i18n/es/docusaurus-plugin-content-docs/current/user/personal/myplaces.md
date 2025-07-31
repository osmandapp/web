---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Mis Lugares
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

## Generalidades {#overview}

**Mis Lugares** es el centro neurálgico de la aplicación OsmAnd para gestionar y personalizar todos los datos personales. Puedes usar esta sección para organizar los [puntos favoritos](#favorites) marcados como importantes o visitados con frecuencia. La pestaña [Pistas](#tracks) te permite ver, importar, grabar y crear archivos GPX para ayudarte a mantener un historial detallado de tus rutas y viajes. También puedes gestionar tus [Ediciones de OpenStreetMap](#openstreetmap-edits), lo que facilita la contribución a las mejoras y actualizaciones de los mapas. El plugin y los widgets de [Notas de Audio/Vídeo](#audiovideo-notes) permiten a los usuarios de Android crear y guardar notas multimedia relacionadas con ubicaciones específicas, añadiendo contexto a sus viajes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis Lugares*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu"/> → Mis Lugares*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Importar y exportar datos***](../personal/import-export.md):

    Todos los datos almacenados en el menú *Mis Lugares* pueden moverse utilizando un formato `.osf` especial a través de las aplicaciones de tu dispositivo. Este proceso simplifica el guardado y la transferencia de datos entre dispositivos y te permite compartirlos con otros usuarios de OsmAnd.

    **Ve a** la sección *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* y selecciona si deseas exportar o importar datos. Si seleccionas *exportar*, deberás expandir el *grupo Mis Lugares* y marcar los datos requeridos.

- [***Mapas y Recursos***](../personal/maps-resources.md):

    El elemento del *Menú Principal* *Mapas y Recursos* de la aplicación OsmAnd proporciona acceso a la gestión de datos desde la sección *Mis Lugares*. La pestaña [*Local*](../personal/maps-resources.md#local) te muestra cuánto espacio ocupan todos los datos existentes de OsmAnd en tu dispositivo, y la sección *Mis Lugares* en particular. Puedes usarla para obtener información detallada sobre tus datos y acceso para gestionarlos. La sección solo puede contener elementos para los que se hayan descargado datos.

    **Ve a** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Comprueba y gestiona tus datos.


## Favoritos {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

Los **Favoritos** te permiten marcar ubicaciones importantes o visitadas con frecuencia. Estos puntos favoritos se organizan en carpetas y se pueden personalizar con diferentes colores, formas e iconos. Puedes navegar rápidamente a cualquier lugar favorito a través del menú **Mis Lugares** sin necesidad de buscarlo repetidamente.


1. ***Botones de acción***. Los *botones de acción* en la parte inferior de la pantalla Mis Lugares te permiten gestionar la lista de carpetas con tus favoritos:

    - **Importar** (botón *Añadir*) — Te permite importar archivos *favorite.gpx* desde el almacenamiento de tu dispositivo.

    - **Exportar** — Guarda tus puntos favoritos como un archivo *favorites.gpx* para uso externo o copia de seguridad.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Solo Android*) — Puedes añadir cualquier punto favorito o la lista completa de puntos favoritos de una carpeta a la [lista de marcadores del mapa](../personal/markers.md).

    - **Eliminar** (*en iOS, esta opción se encuentra en el menú Editar*) — Elimina puntos favoritos uno por uno o carpetas favoritas seleccionadas y todos los puntos contenidos en ellas.

2. ***Menú de tres puntos*** (*Android*) y ***pulsación larga*** (*iOS*). Usa el menú de *tres puntos* junto a cada carpeta o *pulsa prolongadamente* la carpeta para gestionar grupos de favoritos:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Usa esta opción para cambiar el nombre de la carpeta seleccionada.

    - **<Translate android="true" ids="change_default_appearance"/>** — Personaliza cómo aparecen los puntos favoritos de la carpeta en el mapa cambiando sus iconos, colores o etiquetas.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** o **Ocultar en el mapa** — Activa esta opción para mostrar u ocultar los puntos favoritos de la carpeta en el mapa.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** o **Eliminar de los marcadores del mapa** (*Solo Android*) — Añade todos los puntos favoritos de la carpeta a la *lista de marcadores del mapa* o elimínalos según sea necesario para una fácil referencia.

    - **<Translate android="true" ids="shared_string_share"/>** — Comparte los puntos favoritos de la carpeta exportándolos como un archivo *Favorites.gpx*, lo que facilita la transferencia o copia de seguridad de tus datos.

    - **<Translate android="true" ids="shared_string_delete"/>** — Elimina permanentemente la carpeta de favoritos seleccionada y todos los puntos que contiene.

Para obtener instrucciones más detalladas, consulta el artículo [Favoritos](../personal/favorites.md).


## Pistas {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> pestaña*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Las **Pistas** ofrecen potentes herramientas para grabar, crear y gestionar rutas dentro de OsmAnd. Se pueden utilizar para [navegación](../navigation/setup/gpx-navigation.md), [grabación de viajes](../plugins/trip-recording.md) o [integración](../personal/tracks/manage-tracks.md#import) de archivos GPX externos.

- **Pestaña Pistas** — Todas las pistas grabadas, creadas o importadas se muestran automáticamente en la carpeta *Mis Lugares* en la pestaña *Pistas*. Se organizan por carpeta o se muestran en una lista debajo de ellas.

- **Crear una pista** — Inicia la grabación utilizando la **Pestaña Pistas** o el [plugin de grabación de viajes](../plugins/trip-recording.md).

- **Ver y Editar** — Accede a la lista de pistas a través de *Mis Lugares* y gestiona con el *menú de tres puntos* para [carpetas](../personal/tracks/manage-tracks.md#track-folder) o el menú de [pista única](../personal/tracks/manage-tracks.md#single-track-menu).

- **Gestionar** — Utiliza las herramientas [Filtro](../personal/tracks/smart-folder.md#filter) y [Carpeta inteligente](../personal/tracks/smart-folder.md#smart-folder) para organizar las pistas según parámetros específicos.

- **Apariencia y Análisis** — [Personaliza](../map/tracks/appearance.md) el estilo visual de las pistas y [analízalas](../map/tracks/index.md#analyze-track-on-map) utilizando la herramienta [Planificar una ruta](../plan-route/create-route.md) de OsmAnd.

Para obtener una guía completa, consulta el artículo [Gestionar Pistas](../personal/tracks/manage-tracks.md).


## Ediciones de OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

La función **Ediciones de OpenStreetMap** de OsmAnd te permite contribuir a la comunidad global de mapas añadiendo, modificando o comentando datos del mapa.

1. ***Botones de acción***. Puedes usar los *botones de acción* en la pantalla Mis Lugares para gestionar tu lista de notas:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Subir archivos a OSM** — Envía tus notas y datos a OpenStreetMap para contribuir a la comunidad.

    - **Exportar** (*Solo Android*) — Guarda tus notas y PDI como archivos para uso externo o copia de seguridad, con opciones para exportar como notas OSM, PDI o todos los datos combinados.

    - **Eliminar** — Elimina los elementos seleccionados de tu lista de forma permanente.


2. ***Menú de tres puntos***. Puedes gestionar PDI o notas específicas utilizando el *menú de tres puntos* junto a cada nota:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Subir edición a OSM** — Envía tus cambios o ediciones a OpenStreetMap para que otros los vean.

    - **Mostrar en el mapa** — Muestra la ubicación específica del PDI o la nota en el mapa.

    - **Modificar cambio/nota de OSM** — Realiza más ediciones al PDI o la nota que ya se han añadido a OpenStreetMap.

    - **Eliminar** — Elimina el PDI o la nota seleccionados de tu lista.

Consulta el [plugin de edición de OSM](../plugins/osm-editing.md) para obtener instrucciones paso a paso.


## Notas de Audio/Vídeo {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

El **plugin de Notas de Audio/Vídeo** te permite crear notas multimedia vinculadas a ubicaciones específicas del mapa. Estas notas se almacenan en **Mis Lugares** en la **Pestaña Notas A/V**.

1. ***Botones de acción***. Puedes usar los *botones de acción* en la parte inferior de la pantalla Mis Lugares para gestionar tu lista de notas:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Abre una selección de métodos de clasificación, *Por tipo* o *Por fecha*, y cuando se selecciona, clasifica la lista en consecuencia.

    - **<Translate android="true" ids="shared_string_share"/>** — Muestra una lista de verificación de todas las notas, incluidas las añadidas a los archivos GPX como puntos de referencia. Primero, se marcan las notas requeridas, luego el icono *Compartir* en la esquina superior derecha de la pantalla sugiere las opciones de uso compartido disponibles, y finalmente, estas notas están disponibles según la opción seleccionada.

    - **Compartir con puntos de referencia GPX** — Puedes compartir las notas seleccionadas como puntos de referencia en el menú *Mis Lugares* añadiéndoles [datos GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) usando el botón **Compartir** en la parte inferior de la pantalla de la pestaña *Notas A/V*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Muestra una lista de verificación de notas de audio, foto y vídeo solamente. Primero, marca las notas innecesarias, luego toca el icono *Eliminar* en la esquina superior derecha de la pantalla, después de confirmar, las notas seleccionadas se eliminarán permanentemente.


2. ***Menú de tres puntos***. Puedes gestionar notas de audio, vídeo o foto específicas utilizando el *menú de tres puntos* junto a cada nota:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Ve o escucha directamente la nota de audio, vídeo o foto seleccionada.

    - **<Translate android="true" ids="shared_string_share"/>** — Comparte la nota con otros a través de varias aplicaciones o plataformas.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Muestra la ubicación relacionada y el [menú contextual](../plugins/audio-video-notes#actions-in-map-context-menu) de la nota en el mapa.

    - **<Translate android="true" ids="shared_string_rename"/>** — Cambia el nombre de la nota a algo más descriptivo o relevante.

    - **<Translate android="true" ids="shared_string_delete"/>** — Las notas seleccionadas se eliminan permanentemente de tu colección.

Para obtener más información, visita la página del [plugin de Notas de Audio/Vídeo](../plugins/audio-video-notes.md).


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

- [Gestionar Pistas](../personal/tracks/manage-tracks.md#import--export-track)
- [Historial de Búsqueda](../search/search-history.md#export-and-share)
- [Esquemas de Paleta de Colores](../personal/color-palette-schemes.md)

> *Última actualización: marzo de 2025*