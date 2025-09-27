---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title:  Gestionar Tracks
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

Todos los tracks en OsmAnd se almacenan en una pestaña en *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd procesa el archivo de track en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), pero los formatos [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) y [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) pueden ser importados y convertidos a GPX. Lea más sobre los diferentes tipos de tracks en el artículo [Tracks en el mapa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Resumen de gestión de tracks en Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Resumen de gestión de tracks en iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Crear un Track {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta modificar-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta modificar-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Puede añadir tracks en OsmAnd de las siguientes maneras:

1. **[Importar](./manage-tracks.md#import--export-track)** un track desde una fuente externa.
2. Crear un nuevo track en la aplicación usando la herramienta **[Planificar una ruta](../../plan-route/create-route.md)**.
3. Grabar un track en la aplicación usando el complemento **[Grabación de viaje](../../plugins/trip-recording.md)**.
4. Introducir múltiples puntos por coordenadas y guardarlos como un track usando la herramienta **[Entrada de coordenadas](../../plan-route/coordinate-input.md)**.
5. También puede añadir **Waypoints** a un nuevo track a través del **[Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Gestionar Tracks {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![Mis Lugares con tracks en Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Mis Lugares con tracks en iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Todos los tracks grabados, creados o importados se muestran automáticamente en la carpeta [Mis Lugares](../../personal/myplaces.md) en la pestaña *Tracks*. Están organizados por carpetas o se muestran en una lista debajo de ellas.


### Menú del Track {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Mis Lugares con tracks en Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menú contextual de un track en iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Cada track, al igual que las carpetas, tiene un menú que le permite gestionar los tracks de manera eficiente. A continuación se explica cómo acceder a él:

- *Android* - toque el *menú de tres puntos* en el campo del track.
- *iOS* - mantenga pulsado el track deseado en la lista.

El menú ofrece las siguientes acciones:

- **Mostrar/Ocultar en el mapa** — Muestra u oculta los tracks seleccionados en el mapa, representando visualmente su ubicación.

- [Abrir](../../map/tracks/index.md#configure-map) (*iOS*) — Esta opción está disponible en el menú Configurar mapa. Ubicada en *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, le permite acceder al [menú contextual del track seleccionado](../../map/tracks/track-context-menu.md) al tocarlo.

- **Apariencia** (*iOS*) — Personalice la [apariencia de los tracks](../../map/tracks/appearance.md) para adaptarla a sus preferencias.

- **Navegación** (*iOS*) — Inicia la [navegación](../../navigation/setup/gpx-navigation.md) a lo largo del track seleccionado.

- **Analizar en el mapa** (*Android*) / **Analizar** (*iOS*) — Abre la herramienta [Analizar en el mapa](../../navigation/setup/route-details.md#analyze-on-map) dentro de los Detalles de la ruta para un análisis más detallado.

- **Compartir** — Permite compartir el track seleccionado con otros.

- **Subir modificaciones a OSM** (*iOS*) — [Suba los cambios](../../plugins/osm-editing.md#gps-track) que ha realizado en el track directamente a *OpenStreetMap*.

- **Editar** (*iOS*) — Use la herramienta [Planificar una ruta](../../plan-route/create-route.md#modify-existing-gpx-track) para modificar tracks.

- **Duplicar** (*iOS*) — Crea una copia del track seleccionado.

- **Renombrar** — Cambia el nombre del track seleccionado para una mejor organización.

- **Mover** — Le permite reubicar el track seleccionado en una carpeta diferente.

- **Exportar** (*Android*) — Navegue a la pestaña *Menú → Ajustes → Acciones* para exportar todos los tracks de una carpeta.

- **Eliminar** — Elimina permanentemente el track seleccionado que ya no se necesita.


### Búsqueda {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de búsqueda de tracks en Mis Lugares Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Función de búsqueda de tracks en Mis Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Toque el botón &#x1F50D; en la parte superior de la pantalla del dispositivo para abrir el menú de ordenación de la lista de tracks.  

Disponible:

- Buscar por nombre de track.
- [Ordenar por](#sort-by) para una mejor búsqueda si no recuerda el título.
- [Filtro](./smart-folder.md#search-filter) (*solo Android*) si necesita las características específicas del track.


### Modo de Selección {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de ordenación de tracks en Mis Lugares Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tracks en Mis Lugares iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

El elemento de menú **Seleccionar** ofrece opciones para gestionar carpetas y tracks. Esta función le permite seleccionar múltiples tracks o carpetas de tracks. También puede seleccionar todos los tracks y carpetas tocando el botón especial **Seleccionar todo**.

Una vez que haya hecho su elección, se proporcionan los siguientes pasos:  

- **Mostrar en el mapa** — Con esta función, puede mostrar los tracks seleccionados en el mapa para comprender mejor su ubicación y relación entre sí.

- **Compartir** (*Android*) / **Exportar** (*iOS*) — Si desea compartir los datos seleccionados con otros usuarios o guardarlos en un servicio en la nube, la función *Compartir/Exportar* le permite enviar tracks y carpetas utilizando diferentes métodos para compartir.

- **Subir a OpenStreetMap** — Puede enviar los tracks seleccionados a OpenStreetMap, contribuyendo al desarrollo y mejora de los datos.

- **Mover** — Puede organizar sus datos moviendo los tracks y carpetas seleccionados a otras carpetas.

- [Cambiar actividad](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Esta acción le permite cambiar el tipo de actividad, por ejemplo a *Coche*, *Deporte de motor de aventura*, *Mochilero* u otros, para el track seleccionado.

- [Cambiar apariencia](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Esta opción le permite personalizar la apariencia de los tracks seleccionados, haciéndolos más visibles y reconocibles en el mapa.

- **Eliminar** — Si los tracks o carpetas seleccionados ya no son necesarios, la función Eliminar le permite borrarlos, con la aplicación proporcionando opciones de confirmación para evitar la eliminación accidental.


### Ordenar Tracks {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de ordenación de tracks en Mis Lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Función de ordenación de tracks en Mis Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd ofrece una forma sencilla de ordenar sus tracks, ayudándole a gestionar una gran colección o a encontrar rápidamente características específicas. Para acceder al menú de ordenación, toque **Ordenar por** en la parte superior de la lista de tracks.

***Opciones de ordenación:***

- **Más cercano** — Muestra los tracks más cercanos a su ubicación actual.
- **Última modificación** — Muestra los tracks ordenados por su fecha de modificación más reciente.
- **Nombre: A - Z** — Organiza los tracks alfabéticamente de la A a la Z.
- **Nombre: Z - A** — Organiza los tracks alfabéticamente de la Z a la A.
- **Fecha más reciente primero** — Lista los tracks por fecha de creación, con los más nuevos en la parte superior.
- **Fecha más antigua primero** — Lista los tracks por fecha de creación, con los más antiguos en la parte superior.
- **Distancia más larga primero** — Muestra los tracks ordenados por longitud, con el más largo en la parte superior.
- **Distancia más corta primero** — Muestra los tracks ordenados por longitud, con el más corto en la parte superior.
- **Duración más larga primero** — Ordena los tracks por duración, colocando el más largo en la parte superior.
- **Duración más corta primero** — Ordena los tracks por duración, colocando el más corto en la parte superior.

### Ordenar Subcarpetas {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de ordenación de tracks en Mis Lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Función de ordenación de tracks en Mis Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Si desea ordenar [subcarpetas](#folder-actions), vaya al menú de tres puntos dentro de la carpeta seleccionada y elija las [opciones](#sort-by) deseadas.  

La opción de ordenación seleccionada se aplica no solo a la subcarpeta actual, sino también a todas las carpetas y tracks anidados en todos los niveles. Esto garantiza una estructura coherente en todos sus datos guardados.


## Carpeta de Tracks {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Toque el *menú de tres puntos* en el campo de la carpeta para **abrir** el menú de la carpeta.

![importar multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Mantenga pulsado el campo de la carpeta para **abrir** el menú de la carpeta.

![Menú contextual de un track en iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

El menú de la carpeta de tracks le permite ver, renombrar, exportar y gestionar carpetas.


***Acciones con una carpeta:***

- **Nombre** — Muestra el nombre de la carpeta, la fecha de creación y el número de tracks que contiene.
- **Mostrar todos los tracks en el mapa** (*solo Android*) — Muestra todos los tracks de la carpeta en el mapa. Si hay muchos tracks, esto puede hacer que el dispositivo se congele.
- **Editar nombre** (*Android*) / **Renombrar** (*iOS*) — Le permite renombrar la carpeta.
- [Cambiar apariencia predeterminada](../../map/tracks/appearance.md) (*Android*) / **Apariencia** (*iOS*) — Cambia la apariencia de visualización de todos los tracks de la carpeta.
- [Exportar](../../personal/import-export.md) — Abre la pestaña *Menú → Ajustes → Acciones* para exportar todos los tracks de la carpeta como un [archivo `.osf`](../../personal/import-export.md#export).
- [Mover](#track-folder) — Le permite mover la carpeta a otra carpeta existente o crear una nueva.
- [Eliminar carpeta](#delete-folder) — Elimina la carpeta después de la confirmación. ***Esta acción es irreversible.***


### Estadísticas de la Carpeta {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![Panel de control en Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Panel de control en iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

En la parte inferior de la lista en la pestaña *Tracks*, y debajo de la lista de tracks **en cada una de sus carpetas**, hay una sección de información que le permite ver las estadísticas de resumen general de los tracks en la carpeta seleccionada. Todos los valores se muestran en las [unidades](../../personal/profiles.md#units--formats) que ha seleccionado.

- *Número de **Tracks** en la carpeta* — Muestra el número de tracks contenidos en la carpeta seleccionada.
- *Suma total de* **Distancias** — Se muestra la longitud total de todos los tracks en la carpeta seleccionada, medida en las unidades que ha seleccionado.
- *Suma de* **Ascensos** — El dato indica el desnivel positivo total de todos los tracks de la carpeta seleccionada.
- *Suma de* **Descensos** — Este parámetro es la suma de los descensos verticales en todos los tracks de la carpeta seleccionada.
- *Suma de* **Duración** *tiempo* — Muestra el tiempo total necesario para completar todos los tracks de la carpeta seleccionada.
- *Total **Tamaño** de los archivos descargados en MB* — El tamaño total de los archivos descargados en megabytes muestra cuánto espacio ocupan todos los tracks de la carpeta seleccionada en su dispositivo.


### Acciones de Carpeta {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Función de ordenación de tracks en Mis Lugares Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Tracks en Mis Lugares iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Las acciones en la carpeta le ayudan a organizar, ordenar e importar tracks, para estructurar sus datos de navegación.  

Cómo abrir las acciones de la carpeta:

- Abra la pestaña Tracks en Mis Lugares.
- Navegue a la carpeta que desea gestionar.
- Toque el *menú de tres puntos* en la esquina superior derecha para abrir el menú de acciones de la carpeta.

***Acciones en el menú de la carpeta:***

- [Seleccionar](#selection-mode) — Toque las carpetas y tracks deseados para aplicar acciones desde el menú en *modo de selección*.
- [Ordenar subcarpetas](#sort-by) — Aplique un orden de clasificación (por ejemplo, por nombre, fecha) a todas las subcarpetas y tracks en todos los niveles.
- [Añadir carpeta inteligente](../tracks/smart-folder.md#how-to-create-smart-folder) — Ordene automáticamente rutas y tracks según los criterios que establezca.
- [Importar](#import) — Suba archivos GPX u otros archivos de track desde su dispositivo a OsmAnd para su uso sin conexión.
- **Añadir nueva carpeta** — Para organizar sus rutas y tracks en categorías lógicas, póngalos en diferentes carpetas. Esto ayuda a estructurar su información de navegación.


### Eliminar Carpeta {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Mis Lugares con tracks en Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Menú contextual de un track en iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Puede eliminar una carpeta con todos los tracks que contiene. Para ello:

- Toque el *menú de tres puntos* en el campo de la carpeta a eliminar.
- En la parte inferior del menú, busque la opción **Eliminar carpeta**.
- ***NOTA: Esta acción es irreversible.***


## Importar / Exportar Track {#import--export-track}

### Importar {#import}

La herramienta de importación le permite añadir tracks desde archivos externos para la navegación y el análisis sin conexión. Métodos para importar tracks:

1. **Importación directa de archivos:**

    - Toque un archivo GPX, KML o KMZ desde aplicaciones de mensajería, correo electrónico, Google Drive o gestores de archivos.
    - Seleccione Abrir en OsmAnd cuando se le solicite.
    - El track importado se guarda en la carpeta **Importar** en *Mis Lugares*.
    - Pasos: Toque el archivo GPX → Abrir en OsmAnd.

2. **Importar usando el menú *Mis Lugares*:**

    - Abra el *menú Mis Lugares → Tracks*.
    - Seleccione el archivo GPX a importar.

    *Opciones adicionales:*

    - **Archivos GPX de un solo track** - importa todo el track directamente.
    - **Archivos GPX de múltiples tracks** - elija importar el archivo GPX único o seleccione tracks específicos.

***NOTA:*** *Los tracks añadidos manualmente a la carpeta de OsmAnd en su dispositivo se importan automáticamente sin necesidad de reiniciar la aplicación.*  


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importar multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![importar multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exportar | Importar |
|:------------|:---------------|
| ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exportar </summary> ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exportar </summary> ![importar multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

1. Mediante el [*Menú contextual del track → Compartir*](../../map/tracks/track-context-menu.md#options).

2. Mediante el *menú Mis Lugares → Tracks → Menú de Carpeta / Track*:

    - Para [**exportar un solo track**](#track-menu), seleccione el menú del track.
    - Para [**exportar múltiples tracks**](#track-folder), seleccione el menú de la carpeta deseada.

3. Mediante [archivo de copia de seguridad local](../../personal/import-export.md#export). Exportando tracks GPX como archivos `.osf`.


## Artículos Relacionados {#related-articles}

- [Mostrar track en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual del track](../../map/tracks/track-context-menu.md)
- [Navegación por track](../../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../../plugins/trip-recording.md)