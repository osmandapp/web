---
source-hash: ccc92258ad1865c820ecfed771b07e1d48a441845c435a996fe12367c3ecf9df
sidebar_position: 2
title: Administrar Rutas
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

Todas las rutas en OsmAnd se almacenan en una pestaña en *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd procesa el archivo de ruta en [formato GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), pero [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) y [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) pueden importarse y convertirse a GPX. Lea más sobre los diferentes tipos de rutas en el artículo [Rutas en el mapa](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Administrar ruta Descripción general Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Administrar ruta Descripción general iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Crear una Ruta {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Planificar una ruta modificar-ruta-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Planificar una ruta modificar-ruta-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Puede añadir rutas en OsmAnd de las siguientes maneras:

1. **[Importar](./manage-tracks.md#import--export-track)** una ruta desde una fuente externa.
2. Crear una nueva ruta en la aplicación usando la herramienta **[Planificar una ruta](../../plan-route/create-route.md)**.
3. Grabar ruta en la aplicación usando el complemento **[Grabación de viaje](../../plugins/trip-recording.md)**.
4. Introducir múltiples puntos por coordenadas y guardarlos como una ruta usando la herramienta **[Entrada de coordenadas](../../plan-route/coordinate-input.md)**.
5. También puede añadir **Puntos de interés** a una nueva ruta a través del **[Menú contextual](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Administrar Rutas {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> pestaña*

![Mis Lugares con rutas en Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis Lugares con rutas en iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Todas las rutas grabadas, creadas o importadas se muestran automáticamente en la carpeta [Mis Lugares](../../personal/myplaces.md) en la pestaña *Rutas*. Se organizan por carpeta o se muestran en una lista debajo de ellas.


### Menú de Ruta {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis Lugares con rutas en Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Menú contextual de una ruta en iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Cada ruta, como las carpetas, tiene un menú que permite gestionar las rutas de forma eficiente. Así es como se accede a él:

- *Android* - toque el *menú de tres puntos* en el campo de la ruta.
- *iOS* - toque prolongadamente la ruta deseada en la lista.

El menú ofrece las siguientes acciones:

- **Mostrar/Ocultar en el mapa** — Muestra u oculta las rutas seleccionadas en el mapa, representando visualmente su ubicación.

- [Abrir](../../map/tracks/index.md#configure-map) (*iOS*) — Esta configuración está disponible en el menú Configurar mapa. Ubicado en *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, le permite acceder al [menú contextual de la ruta seleccionada](../../map/tracks/track-context-menu.md) al tocarlo.

- **Apariencia** (*iOS*) — Personalice la [apariencia de las rutas](../../map/tracks/appearance.md) para adaptarlas a sus preferencias.

- **Navegación** (*iOS*) — Inicia la [navegación](../../navigation/setup/gpx-navigation.md) a lo largo de la ruta seleccionada.

- **Analizar en el mapa** (*Android*) / **Analizar** (*iOS*) — Abre la herramienta [Analizar en el mapa](../../navigation/setup/route-details.md#analyze-on-map) dentro de los Detalles de la ruta para un análisis posterior.

- **Compartir** — Permite compartir la ruta seleccionada con otros.

- **Subir modificaciones a OSM** (*iOS*) — [Suba los cambios](../../plugins/osm-editing.md#gps-track) que haya realizado en la ruta directamente a *OpenStreetMap*.

- **Editar** (*iOS*) — Utilice la herramienta [Planificar una ruta](../../plan-route/create-route.md#modify-gpx-track) para modificar rutas.

- **Duplicar** (*iOS*) — Crea una copia de la ruta seleccionada.

- **Renombrar** — Cambia el nombre de la ruta seleccionada para una mejor organización.

- **Mover** — Le permite reubicar la ruta seleccionada en una carpeta diferente.

- **Exportar** (*Android*) — Vaya a *Menú → Configuración → Pestaña Acciones* para exportar todas las rutas de una carpeta.

- **Eliminar** — Elimina permanentemente la ruta seleccionada que ya no es necesaria.


### Buscar {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de búsqueda de rutas en Mis lugares Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Función de búsqueda de rutas en Mis lugares iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Toque el botón &#x1F50D; en la parte superior de la pantalla del dispositivo para abrir el menú de clasificación de la lista de rutas.  

Disponible:

- Buscar por nombre de ruta.
- [Ordenar por](#sort-by) para una mejor búsqueda si no recuerda el título.
- [Filtrar](./smart-folder.md#search-filter) (*solo Android*) si necesita las características específicas de la ruta.


### Modo de selección {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de clasificación de rutas en Mis lugares Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rutas de Mis lugares iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

El elemento de menú **Seleccionar** proporciona opciones para administrar carpetas y rutas. Esta función le permite seleccionar varias rutas o carpetas de rutas. También puede seleccionar todas las rutas y carpetas tocando el botón especial **Seleccionar todo**.

Una vez que haya hecho su elección, se proporcionan los siguientes pasos:  

- **Mostrar en el mapa** — Con esta función, puede mostrar las rutas seleccionadas en el mapa para comprender mejor su ubicación y relación entre sí.

- **Compartir** (*Android*) / **Exportar** (*iOS*) — Si desea compartir datos seleccionados con otros usuarios o guardarlos en un servicio en la nube, la función *Compartir/Exportar* le permite enviar rutas y carpetas utilizando diferentes métodos de uso compartido.

- **Subir a OpenStreetMap** — Puede enviar rutas seleccionadas a OpenStreetMap, contribuyendo al desarrollo y mejora de los datos.

- **Mover** — Puede organizar sus datos moviendo rutas y carpetas seleccionadas a otras carpetas.

- [Cambiar actividad](../../map/tracks/track-context-menu.md#track-information-activity) — Esta acción le permite cambiar el tipo de actividad, por ejemplo, a *Coche*, *Deportes de motor de aventura*, *Mochilero* u otros, para la ruta seleccionada.

- [Cambiar apariencia](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Esta opción le permite personalizar la apariencia de las rutas seleccionadas, haciéndolas más visibles y reconocibles en el mapa.

- **Eliminar** — Si las rutas o carpetas seleccionadas ya no son necesarias, la función Eliminar le permite eliminarlas, con la aplicación proporcionando opciones de confirmación para evitar la eliminación accidental.


### Ordenar por {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de clasificación de rutas en Mis lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Función de clasificación de rutas en Mis lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd ofrece una forma sencilla de ordenar sus rutas, lo que le ayuda a gestionar una gran colección o a encontrar rápidamente características específicas. Para acceder al menú de clasificación, toque **Ordenar por** en la parte superior de la lista de rutas.

***Opciones de clasificación:***

- **Más cercano** — Muestra las rutas más cercanas a su ubicación actual.

- **Última modificación** — Muestra las rutas ordenadas por su fecha de modificación más reciente.

- **Nombre: A - Z** — Organiza las rutas alfabéticamente de la A a la Z.

- **Nombre: Z - A** — Organiza las rutas alfabéticamente de la Z a la A.

- **Fecha más reciente primero** — Enumera las rutas por fecha de creación, con la más reciente en la parte superior.

- **Fecha más antigua primero** — Enumera las rutas por fecha de creación, con la más antigua en la parte superior.

- **Distancia más larga primero** — Muestra las rutas ordenadas por longitud, con la más larga en la parte superior.

- **Distancia más corta primero** — Muestra las rutas ordenadas por longitud, con la más corta en la parte superior.

- **Duración más larga primero** — Ordena las rutas por duración, colocando la más larga en la parte superior.

- **Duración más corta primero** — Ordena las rutas por duración, colocando la más corta en la parte superior.

#### Ordenar subcarpetas {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Función de clasificación de rutas en Mis lugares Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Función de clasificación de rutas en Mis lugares iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Si desea ordenar [subcarpetas](#folder-actions), vaya al menú de tres puntos dentro de la carpeta seleccionada y seleccione las [opciones](#sort-by) requeridas.  

La opción de clasificación seleccionada se aplica no solo a la subcarpeta actual, sino también a todas las carpetas anidadas y rutas en todos los niveles. Esto garantiza una estructura consistente en sus datos guardados.


## Carpeta de rutas {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importar multiruta](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú contextual de una ruta en iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

El menú de la carpeta de rutas le permite ver, renombrar, exportar y administrar carpetas.

Cómo abrir el menú de la carpeta:

- *Android* - toque el *menú de tres puntos* en el campo de la carpeta.
- *iOS* - toque prolongadamente el campo de la carpeta.

***Acciones con una carpeta:***

- **Nombre** — Muestra el nombre de la carpeta, la fecha de creación y el número de rutas que contiene.

- **Mostrar todas las rutas en el mapa** (*solo Android*) — Muestra todas las rutas de la carpeta en el mapa —  
    *NOTA: Si hay muchas rutas, esto puede hacer que el dispositivo se congele.*

- **Editar nombre** (*Android*) / **Renombrar** (*iOS*) — Le permite renombrar la carpeta.

- [Cambiar apariencia predeterminada](../../map/tracks/appearance.md) (*Android*) / **Apariencia** (*iOS*) — Cambia la apariencia de visualización de todas las rutas de la carpeta.

- [Exportar](../../personal/import-export.md) — Abre la pestaña *Menú → Configuración → Acciones* para exportar todas las rutas de la carpeta como un [archivo `.osf`](../../personal/import-export.md#export).

- [Mover](#track-folder) — Le permite mover la carpeta a otra carpeta existente o crear una nueva.

- [Eliminar carpeta](#delete-folder) — Elimina la carpeta después de la confirmación.  
    ***NOTA: Esta acción es irreversible.***


### Estadísticas de la carpeta {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> pestaña*

![Mis Lugares con rutas en Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis Lugares con rutas en iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

En la parte inferior de la lista en la pestaña *Rutas*, y debajo de la lista de rutas **en cada una de sus carpetas**, hay una sección de información que le permite ver las estadísticas resumidas generales de las rutas en la carpeta seleccionada. Todos los valores se muestran en las [unidades](../../personal/profiles.md#units--formats) que haya seleccionado.

- *Número de **Rutas** en la carpeta* — Muestra el número de rutas contenidas en la carpeta seleccionada.

- *Suma total de* **Distancias** — Se muestra la longitud total de todas las rutas en la carpeta seleccionada, medida en las unidades que haya seleccionado.

- *Suma de* **Ascensos** — Los datos indican el ascenso vertical total en todas las rutas de la carpeta seleccionada.

- *Suma de* **Descensos** — Este parámetro es la suma de los descensos verticales en todas las rutas de la carpeta seleccionada.

- *Suma del tiempo de* **Duración** — Esto muestra el tiempo total que se tardó en completar todas las rutas de la carpeta seleccionada.

- *Tamaño total de los archivos descargados en MB* — El tamaño total de los archivos descargados en megabytes muestra cuánto espacio ocupan todas las rutas de la carpeta seleccionada en su dispositivo.


### Acciones de la carpeta {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Función de clasificación de rutas en Mis lugares Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Rutas de Mis lugares iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Las acciones en la carpeta le ayudan a organizar, ordenar e importar rutas, para estructurar sus datos de navegación.  

Cómo abrir las acciones de la carpeta:

- Abra la pestaña Rutas en Mis Lugares.
- Navegue a la carpeta que desea administrar.
- Toque el *menú de tres puntos* en la esquina superior derecha para abrir el menú de acciones de la carpeta.

***Acciones en el menú de la carpeta:***

- [Seleccionar](#selection-mode) — Toque las carpetas y rutas requeridas para aplicar acciones desde el menú en *modo de selección*.

- [Ordenar subcarpetas](#sort-by) — Aplique un orden de clasificación (por ejemplo, por nombre, fecha) a todas las subcarpetas y rutas en cada nivel.

- [Añadir carpeta inteligente](../tracks/smart-folder.md#how-to-create-smart-folder) — Ordene automáticamente rutas y pistas según los criterios que establezca.

- [Importar](#import) — Suba archivos GPX u otros archivos de ruta desde su dispositivo a OsmAnd para uso sin conexión.

- **Añadir nueva carpeta** — Para organizar sus rutas y pistas en categorías lógicas, colóquelas en diferentes carpetas. Esto ayuda a estructurar su información de navegación.


### Eliminar carpeta {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Mis Lugares con rutas en Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> pestaña*

![Menú contextual de una ruta en iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Puede eliminar una carpeta con todas las rutas que contiene. Para ello:

- Toque el *menú de tres puntos* en el campo de la carpeta a eliminar.
- En la parte inferior del menú, busque la opción **Eliminar carpeta**.
- ***NOTA: Esta acción es irreversible.***


## Importar / Exportar Ruta {#import--export-track}

### Importar {#import}

La herramienta de importación le permite añadir rutas desde archivos externos para navegación y análisis sin conexión. Métodos para importar rutas:

1. **Importación directa de archivos:**

    - Toque un archivo GPX, KML o KMZ desde aplicaciones de mensajería, correo electrónico, Google Drive o administradores de archivos.
    - Seleccione Abrir en OsmAnd cuando se le solicite.
    - La ruta importada se guarda en la carpeta **Importar** en *Mis Lugares*.
    - Pasos: Toque el archivo GPX → Abrir en OsmAnd.

2. **Importar usando el menú *Mis Lugares*:**

    - Abra el *menú Mis Lugares → Rutas*.
    - Seleccione el archivo GPX a importar.

    *Opciones adicionales:*

    - **Archivos GPX de una sola ruta** - importe la ruta completa directamente.
    - **Archivos GPX de varias rutas** - elija importar el archivo GPX único o seleccione rutas específicas.

***NOTA:*** *Las rutas añadidas manualmente a la carpeta OsmAnd en su dispositivo se importan automáticamente sin reiniciar la aplicación.*  


### Exportar {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![importar multiruta](@site/static/img/personal/tracks/import_multitrack.png) ![importar multiruta](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Exportar | Importar |
|:------------|:---------------|
| ![importar multiruta](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Exportar </summary> ![importar multiruta](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![importar multiruta](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Exportar </summary> ![importar multiruta](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Hay varias formas de exportar uno o más archivos de ruta a cualquier mensajero, correo electrónico, administrador de archivos o aplicación.  

1. Por [*Menú contextual de la ruta → Compartir*](../../map/tracks/track-context-menu.md#options).

2. Por *Menú Mis Lugares → Rutas → Menú Carpeta / Ruta*:

    - Para [**exportar una sola ruta**](#track-menu), seleccione el menú de la ruta.
    - Para [**exportar varias rutas**](#track-folder), seleccione el menú de la carpeta requerida.

3. Por [Archivo de copia de seguridad local](../../personal/import-export.md#export-to-file). Exportar rutas GPX como archivos `.osf`.


## Artículos relacionados {#related-articles}

- [Mostrar ruta en el mapa](../../map/tracks/index.md)
- [Analizar en el mapa](../../map/tracks/index.md#analyze-track-on-map)
- [Menú contextual de la ruta](../../map/tracks/track-context-menu.md)
- [Navegación por ruta](../../navigation/setup/gpx-navigation.md)
- [Grabación de viaje](../../plugins/trip-recording.md)

> *Última actualización: abril de 2025*