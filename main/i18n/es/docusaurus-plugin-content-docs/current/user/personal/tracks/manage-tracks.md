---
source-hash: 61247292af1aa1532bdbb133f67761a221b4967bdccb328e710358ccdfd2084c
sidebar_position: 2
title: Administrar Tracks
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

Todos los tracks en OsmAnd se almacenan en una pestaña en *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd procesa el archivo de track en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), pero [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) y [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) pueden importarse y convertirse a GPX. Lea más sobre los diferentes tipos de tracks en el artículo [Tracks en el mapa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manage track Overview Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage track Overview iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Crear un Track {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Puedes añadir tracks en OsmAnd de las siguientes maneras:

1. **[Importar](./manage-tracks.md#import--export-track)** un track desde una fuente externa.
2. Crear un nuevo track en la aplicación utilizando la herramienta **[Planificar una ruta](../../plan-route/create-route.md)**.
3. Grabar un track en la aplicación utilizando el plugin **[Grabación de viaje](../../plugins/trip-recording.md)**.
4. Introducir varios puntos por coordenadas y guardarlos como un track utilizando la herramienta **[Entrada de coordenadas](../../plan-route/coordinate-input.md)**.
5. También puedes añadir **Puntos de referencia** a un nuevo track a través del **[Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Administrar Tracks {#manage-tracks}

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

Todos los tracks grabados, creados o importados se muestran automáticamente en la carpeta [Mis Lugares](../../personal/myplaces.md) en la pestaña *Tracks*. Están organizados por carpetas o se muestran en una lista debajo de ellas.


### Menú de Track {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Cada track, al igual que las carpetas, tiene un menú que permite gestionar los tracks de forma eficiente. Así es como se accede a él:

- *Android* - toca el *menú de tres puntos* en el campo del track.
- *iOS* - mantén pulsado el track deseado en la lista.

El menú ofrece las siguientes acciones:

- **Mostrar/Ocultar en el mapa** — Muestra u oculta los tracks seleccionados en el mapa, representando visualmente su ubicación.

- [Abrir](../../map/tracks/index.md#configure-map) (*iOS*) — Esta configuración está disponible en el menú Configurar Mapa. Ubicado en *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, permite acceder al [menú contextual del track seleccionado](../../map/tracks/track-context-menu.md) al tocarlo.

- **Apariencia** (*iOS*) — Personaliza la [apariencia de los tracks](../../map/tracks/appearance.md) para adaptarla a tus preferencias.

- **Navegación** (*iOS*) — Inicia la [navegación](../../navigation/setup/gpx-navigation.md) a lo largo del track seleccionado.

- **Analizar en el mapa** (*Android*) / **Analizar** (*iOS*) — Abre la herramienta [Analizar en el mapa](../../navigation/setup/route-details.md#analyze-on-map) dentro de los Detalles de la Ruta para un análisis posterior.

- **Compartir** — Permite compartir el track seleccionado con otros.

- **Subir modificaciones a OSM** (*iOS*) — [Sube los cambios](../../plugins/osm-editing.md#gps-track) que has realizado en el track directamente a *OpenStreetMap*.

- **Editar** (*iOS*) — Utiliza la herramienta [Planificar una ruta](../../plan-route/create-route.md#modify-gpx-track) para modificar tracks.

- **Duplicar** (*iOS*) — Crea una copia del track seleccionado.

- **Renombrar** — Cambia el nombre del track seleccionado para una mejor organización.

- **Mover** — Permite reubicar el track seleccionado en una carpeta diferente.

- **Exportar** (*Android*) — Navega a *Menú → Ajustes → pestaña Acciones* para exportar todos los tracks de una carpeta.

- **Eliminar** — Elimina permanentemente el track seleccionado que ya no es necesario.


### Buscar {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks seach function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks seach function iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Toca el botón &#x1F50D; en la parte superior de la pantalla del dispositivo para abrir el menú de ordenación de la lista de tracks.  

Disponible:

- Búsqueda por nombre de track.
- [Ordenar por](#sort-by) para una mejor búsqueda si no recuerdas el título.
- [Filtrar](./smart-folder.md#search-filter) (*solo Android*) si necesitas las características específicas del track.


### Modo de Selección {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

El elemento de menú **Seleccionar** proporciona opciones para gestionar carpetas y tracks. Esta función permite seleccionar varios tracks o carpetas de tracks. También puedes seleccionar todos los tracks y carpetas tocando el botón especial **Seleccionar todo**.

Una vez que hayas hecho tu elección, se proporcionan los siguientes pasos:  

- **Mostrar en el mapa** — Con esta función, puedes mostrar los tracks seleccionados en el mapa para comprender mejor su ubicación y relación entre sí.

- **Compartir** (*Android*) / **Exportar** (*iOS*) — Si deseas compartir datos seleccionados con otros usuarios o guardarlos en un servicio en la nube, la función *Compartir/Exportar* te permite enviar tracks y carpetas utilizando diferentes métodos de compartición.

- **Subir a OpenStreetMap** — Puedes enviar los tracks seleccionados a OpenStreetMap, contribuyendo al desarrollo y mejora de los datos.

- **Mover** — Puedes organizar tus datos moviendo los tracks y carpetas seleccionados a otras carpetas.

- [Cambiar actividad](../../map/tracks/track-context-menu.md#track-information-activity) — Esta acción te permite cambiar el tipo de actividad, por ejemplo a *Coche*, *Deportes de motor de aventura*, *Mochilero* u otros, para el track seleccionado.

- [Cambiar apariencia](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Esta opción te permite personalizar la apariencia de los tracks seleccionados, haciéndolos más visibles y reconocibles en el mapa.

- **Eliminar** — Si los tracks o carpetas seleccionados ya no son necesarios, la función Eliminar te permite eliminarlos, y la aplicación proporciona opciones de confirmación para evitar eliminaciones accidentales.


### Ordenar por {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd ofrece una forma sencilla de ordenar tus tracks, ayudándote a gestionar una gran colección o a encontrar rápidamente características específicas. Para acceder al menú de ordenación, toca **Ordenar por** en la parte superior de la lista de tracks.

***Opciones de ordenación:***

- **Más cercano** — Muestra los tracks más cercanos a tu ubicación actual.

- **Última modificación** — Muestra los tracks ordenados por su fecha de modificación más reciente.

- **Nombre: A - Z** — Organiza los tracks alfabéticamente de la A a la Z.

- **Nombre: Z - A** — Organiza los tracks alfabéticamente de la Z a la A.

- **Fecha más reciente primero** — Lista los tracks por fecha de creación, con el más reciente en la parte superior.

- **Fecha más antigua primero** — Lista los tracks por fecha de creación, con el más antiguo en la parte superior.

- **Distancia más larga primero** — Muestra los tracks ordenados por longitud, con el más largo en la parte superior.

- **Distancia más corta primero** — Muestra los tracks ordenados por longitud, con el más corto en la parte superior.

- **Duración más larga primero** — Ordena los tracks por duración, colocando el más largo en la parte superior.

- **Duración más corta primero** — Ordena los tracks por duración, colocando el más corto en la parte superior.

#### Ordenar Subcarpetas {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Si deseas ordenar [subcarpetas](#folder-actions), ve al menú de tres puntos dentro de la carpeta seleccionada y selecciona las [opciones](#sort-by) requeridas.  

La opción de ordenación seleccionada se aplica no solo a la subcarpeta actual, sino también a todas las carpetas anidadas y tracks en todos los niveles. Esto garantiza una estructura consistente en tus datos guardados.


## Carpeta de Tracks {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

El menú de la carpeta de tracks te permite ver, renombrar, exportar y gestionar carpetas.

Cómo abrir el menú de la carpeta:

- *Android* - toca el *menú de tres puntos* en el campo de la carpeta.
- *iOS* - mantén pulsado el campo de la carpeta.

***Acciones con una carpeta:***

- **Nombre** — Muestra el nombre de la carpeta, la fecha de creación y el número de tracks que contiene.

- **Mostrar todos los tracks en el mapa** (*solo Android*) — Muestra todos los tracks de la carpeta en el mapa —  
    *NOTA: Si hay muchos tracks, esto puede hacer que el dispositivo se congele.*

- **Editar nombre** (*Android*) / **Renombrar** (*iOS*) — Permite renombrar la carpeta.

- [Cambiar apariencia predeterminada](../../map/tracks/appearance.md) (*Android*) / **Apariencia** (*iOS*) — Cambia la apariencia de visualización de todos los tracks de la carpeta.

- [Exportar](../../personal/import-export.md) — Abre la pestaña *Menú → Ajustes → Acciones* para exportar todos los tracks de la carpeta como un [archivo `.osf`](../../personal/import-export.md#export).

- [Mover](#track-folder) — Permite mover la carpeta a otra carpeta existente o crear una nueva.

- [Eliminar carpeta](#delete-folder) — Elimina la carpeta después de la confirmación.  
    ***NOTA: Esta acción es irreversible.***


### Estadísticas de Carpeta {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> pestaña*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![My Places with tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

En la parte inferior de la lista en la pestaña *Tracks*, y debajo de la lista de tracks **en cada una de tus carpetas**, hay una sección de información que te permite ver las estadísticas generales resumidas de los tracks en la carpeta seleccionada. Todos los valores se muestran en las [unidades](../../personal/profiles.md#units--formats) que hayas seleccionado.

- *Número de **Tracks** en la carpeta* — Muestra el número de tracks contenidos en la carpeta seleccionada.

- *Suma total de* **Distancias** — Se muestra la longitud total de todos los tracks en la carpeta seleccionada, medida en las unidades que hayas seleccionado.

- *Suma de* **Ascensos** — Los datos indican el ascenso vertical total en todos los tracks de la carpeta seleccionada.

- *Suma de* **Descensos** — Este parámetro es la suma de los descensos verticales en todos los tracks de la carpeta seleccionada.

- *Suma del* **Tiempo de duración** — Esto muestra el tiempo total que se tardó en completar todos los tracks de la carpeta seleccionada.

- *Tamaño total de los archivos descargados en MB* — El tamaño total de los archivos descargados en megabytes muestra cuánto espacio ocupan todos los tracks de la carpeta seleccionada en tu dispositivo.


### Acciones de Carpeta {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Las acciones en la carpeta te ayudan a organizar, ordenar e importar tracks, para estructurar tus datos de navegación.  

Cómo abrir las acciones de la carpeta:

- Abre la pestaña Tracks en Mis Lugares.
- Navega a la carpeta que deseas administrar.
- Toca el *menú de tres puntos* en la esquina superior derecha para abrir el menú de acciones de la carpeta.

***Acciones en el menú de la carpeta:***

- [Seleccionar](#selection-mode) — Toca las carpetas y tracks requeridos para aplicar acciones desde el menú en *modo de selección*.

- [Ordenar subcarpetas](#sort-subfolders) — Aplica un orden de clasificación (por ejemplo, por nombre, fecha) a todas las subcarpetas y tracks en cada nivel.

- [Añadir carpeta inteligente](../tracks/smart-folder.md#how-to-create-smart-folder) — Ordena automáticamente rutas y tracks según los criterios que establezcas.

- [Importar](#import) — Sube archivos GPX u otros archivos de track desde tu dispositivo a OsmAnd para uso sin conexión.

- **Añadir nueva carpeta** — Para organizar tus rutas y tracks en categorías lógicas, colócalos en diferentes carpetas. Esto ayuda a estructurar tu información de navegación.


### Eliminar Carpeta {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Context menu of a track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Puedes eliminar una carpeta con todos los tracks que contiene. Para ello:

- Toca el *menú de tres puntos* en el campo de la carpeta a eliminar.
- En la parte inferior del menú, busca la opción **Eliminar carpeta**.
- ***NOTA: Esta acción es irreversible.***


## Importar / Exportar Track {#import--export-track}

### Importar {#import}

La herramienta de importación te permite añadir tracks desde archivos externos para navegación y análisis sin conexión. Métodos para importar tracks:

1. **Importación directa de archivos:**

    - Toca un archivo GPX, KML o KMZ desde aplicaciones de mensajería, correo electrónico, Google Drive o gestores de archivos.
    - Selecciona Abrir en OsmAnd cuando se te solicite.
    - El track importado se guarda en la carpeta **Importar** en *Mis Lugares*.
    - Pasos: Toca el archivo GPX → Abrir en OsmAnd.

2. **Importar usando el menú *Mis Lugares*:**

    - Abre el *menú Mis Lugares → Tracks*.
    - Selecciona el archivo GPX a importar.

    *Opciones adicionales:*

    - **Archivos GPX de un solo track** - importa el track completo directamente.
    - **Archivos GPX de múltiples tracks** - elige importar el archivo GPX único o seleccionar tracks específicos.

***NOTA:*** *Los tracks añadidos manualmente a la carpeta OsmAnd en tu dispositivo se importan automáticamente sin reiniciar la aplicación.*  


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exportar | Importar |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exportar </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exportar </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Hay varias formas de exportar uno o más archivos de track a cualquier mensajero, correo electrónico, gestor de archivos o aplicación.  

1. Por [*Menú contextual del track → Compartir*](../../map/tracks/track-context-menu.md#options).

2. Por *Menú Mis Lugares → Tracks → Menú Carpeta / Track*:

    - Para [**exportar un solo track**](#track-menu), selecciona el menú del track.
    - Para [**exportar varios tracks**](#track-folder), selecciona el menú de la carpeta requerida.

3. Por [Archivo de copia de seguridad local](../../personal/import-export.md#export-to-file). Exportación de tracks GPX como archivos `.osf`.


## Artículos relacionados {#related-articles}

- [Mostrar track en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual del track](../../map/tracks/track-context-menu.md)
- [Navegación por track](../../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../../plugins/trip-recording.md)

> *Última actualización: Abril de 2025*