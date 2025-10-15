---
source-hash: 40a50d2d81edfe3031807e74cf61d1a5a4ab80acbd6b91f1d0093008b7509eaa
sidebar_position: 2
title:  Mapas y Recursos
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

En la sección **Mapas y Recursos**, puede gestionar tanto mapas *En línea* como *Sin conexión*, y otros recursos utilizados en OsmAnd. Por ejemplo, puede descargar, eliminar, renombrar, borrar caché, actualizar y comprobar el tamaño, y realizar diferentes acciones.

OsmAnd funciona con dos tipos de mapas: [mapas vectoriales](../map/vector-maps.md) y [mapas rasterizados](../map/raster-maps.md). La pestaña [Local](#local) almacena todos los mapas y recursos. Los tipos de mapa disponibles se pueden descargar desde la pestaña [Descargas](#downloads). En la pestaña [Actualizaciones](#updates), puede descargar los mapas que están disponibles para actualizar y usar las [Actualizaciones en vivo](#live-updates). También puede acceder a la función [Mapa adicional](#extra-maps) para crear sus propios tipos de mapa.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Menú de mapas Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menú de mapas iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipos de mapa {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de descarga de mapas Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Mapas de toda la región Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de descarga de mapas iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Mapas de toda la región iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

La descarga de mapas en la aplicación OsmAnd es un paso importante que determina la funcionalidad y la eficiencia de la navegación.

### Contenido de mapa gratuito {#free-map-content}

- **Mapa estándar**. Proporciona una visión general del área basada en la fuente [OpenStreetMap](https://www.openstreetmap.org/) y contiene un mapa, rutas, direcciones, PDI e información de transporte público. Al tocar se abre una pantalla con una lista de regiones del país seleccionado e información sobre cuánto espacio ocuparán estos mapas en su dispositivo.  
- **Solo carreteras** (*solo Android*). El mapa contiene solo información de la red de carreteras para centrarse en las rutas y la infraestructura vial. Al eliminar detalles como edificios y puntos de interés, es más pequeño que un mapa estándar. Al tocar se abre una pantalla con una lista de regiones del país seleccionado e información sobre cuánto espacio ocuparán estos mapas en su dispositivo.
- **Mapa general del mundo**. Las versiones de OsmAnd hasta la 3.8 ofrecen descargar un mapa del mundo para que pueda verlo a escala planetaria. En las versiones más nuevas de OsmAnd, se incluye un *Mini mapa del mundo* ligero con la aplicación. La aplicación le permite descargar un mapa general del mundo más grande con información más detallada. 

:::info actualizaciones mensuales de mapas
Tenga en cuenta que las actualizaciones mensuales de mapas se consideran otra descarga de mapa y se restan del número disponible de descargas de mapas gratuitas.
:::

### Contenido de mapa de pago {#paid-map-content}

- [Curvas de nivel](../plugins/topography.md#contour-lines). Un mapa que contiene líneas de contorno de elevación para visualizar el terreno.
- [Mapa de terreno (Sombreado y Pendiente)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Los mapas con sombras o pendientes proporcionan información adicional del terreno.
- [Mapa de terreno (3D)](../plugins/topography.md#3d-relief). Representación tridimensional del terreno para una mejor comprensión de su entorno. El [Motor de renderizado de mapa Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) debe estar habilitado.
- [Wikipedia](../plugins/wikipedia.md). Mapa vectorial con artículos de [Wikipedia](https://wikipedia.org/) geoposicionados sobre puntos de referencia o información adicional sobre lugares.
- [Wikivoyage](../plan-route/travel-guides.md). Proporciona mapas vectoriales con guías de viaje virtuales, ofreciendo a los usuarios información valiosa, recomendaciones y consejos.
- [Pronóstico del tiempo](../plugins/weather.md). Información meteorológica en un mapa para una fácil planificación de rutas.


## Menú de descargas {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Menú de descarga de mapas general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Menú de descarga de mapas general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La pestaña **Descargar** le permite descargar varios tipos de mapas de los servidores de OsmAnd, lo que requiere una conexión a Internet activa.

***Para descargar un mapa:***

- **Abra la pestaña Descargar**, localice la sección requerida y toque la carpeta correspondiente para ver los mapas disponibles.

- Los **mapas disponibles** muestran iconos de descarga, para un solo mapa o para [mapas múltiples](#multiple-map-loading).

- Los **mapas descargados** muestran un icono verde con un botón de menú:  
    - *Android*: Menú de tres puntos.  
    - *iOS*: Icono de información (i).

- Los **mapas en proceso de carga** tienen un icono que lo visualiza. Para cancelar la descarga, toque el icono. Para ver la lista de mapas en la cola de descarga y cancelar las descargas, toque la barra de descarga en el área de información de la memoria del dispositivo de las pestañas Descargas y Actualizaciones.

- **En la versión gratuita**, los mapas no disponibles para descargar muestran un icono [OBTENER](../purchases/index.md), que enlaza con la página de compra.

***La pestaña de descargas consta de grupos de mapas:***

- **Información de la memoria del dispositivo**. Visualice la cantidad de espacio ocupado y libre en su dispositivo.
- **Contador de mapas** (***Versión gratuita***). Muestra cuántos mapas le quedan por descargar.
- [Mapas adicionales](#extra-maps). Muestra los datos del mapa para el [Paquete personalizado](../plugins/custom.md).
- **Regiones**. Lista por continente y región del mundo: *África, Antártida, Asia, Australia y Oceanía, América Central, Europa, América del Norte, Rusia y América del Sur.*
- [Mapas del mundo](#world-maps). Una lista de mapas de todo el mundo: *Corrección de altitud mundial (solo Android)*, *Mapa general del mundo*, *Todo el mundo (Pronóstico del tiempo)*
- [Mapas náuticos](../plugins/nautical-charts.md) ([*función de pago*](../purchases/index.md)). Mapas vectoriales con elevaciones como puntos o líneas.
- [Guías de viaje (Wikivoyage)](../plan-route/travel-guides.md) ([*función de pago*](../purchases/index.md)). Mapas vectoriales con una colección de artículos en formato HTML y adicionalmente archivos GPX.
- **Otros mapas**. Mapas que no se pueden asignar a la jerarquía de mapas actual porque no son compatibles o estarán disponibles en futuras versiones.
- [Indicaciones de voz](../navigation/guidance/voice-navigation.md) (*solo Android*). Paquetes de voz para las indicaciones de navegación.
- [Fuentes de mapa](../map/vector-maps.md#map-fonts-android) (*solo Android*). Archivos de fuentes adicionales para mostrar texto en el mapa.
- **Buscar ciudad o región** (*solo Android*). Una herramienta de búsqueda rápida en la parte superior de la pestaña de descargas (icono de lupa) para encontrar la ciudad o región necesaria.

### Mapas del mundo {#world-maps}

En el menú Descargar mapas, hay una sección de **Mapas del mundo** que proporciona acceso para descargar varios mapas del mundo, complementando la funcionalidad de la aplicación.  

- **Corrección de altitud mundial** (*solo Android*). Este archivo contiene correcciones de altitud para compensar la curvatura planetaria.
- **Mapa general del mundo**. Proporciona una visión general extensa de la superficie terrestre, útil para la planificación de rutas a largo plazo y la exploración casual.
- **Todo el mundo (Pronóstico del tiempo)**. Le permite descargar un mapa con información meteorológica.


### Mapas adicionales {#extra-maps}

OsmAnd admite la transferencia de configuraciones y datos específicos del perfil, incluidos archivos de renderizado, fuentes, rutas, mapas y complementos personalizados. Cree una carpeta de mapa personalizada utilizando un archivo de complemento `.osf` (un formato `.zip` comprimido).

Para importar un archivo:

1. Localice el archivo `.osf` en el almacenamiento de su dispositivo, mensajería o correo electrónico.
2. Toque para abrirlo con OsmAnd.
3. El complemento aparecerá en la sección **Lista de complementos**, donde se puede activar.
4. A continuación, aparecerá una carpeta correspondiente en la sección **Mapas adicionales** de la pestaña [Descargas](#downloads).

Lea más en el artículo [**Paquete personalizado**](../plugins/custom).


### Carga de mapas múltiples {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú de descarga de mapas general Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Menú de deselección Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Menú de descarga de mapas general iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Menú de deselección iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Para países que constan de **múltiples mapas de región**, puede utilizar la carga masiva de múltiples mapas. Los mapas disponibles para este tipo of de descarga se muestran con iconos de flecha de descarga doble y una etiqueta con el número de regiones dentro (p. ej., Curvas de nivel / Todas las regiones: 10). Puede elegir cuántos mapas descargar.


## Menú local {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Pestaña local Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Pestaña local Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

La pestaña Local proporciona una visión general del uso del almacenamiento para todos los datos de OsmAnd en su dispositivo. Los datos se dividen en tres secciones codificadas por colores para mayor claridad, con los elementos ordenados por tamaño de mayor a menor. Cada sección muestra solo los elementos con datos descargados:

- ***Recursos*** (*azul*).  
    Incluye mapas ([Estándar](../map/vector-maps.md), &nbsp;[Náuticos](../plugins/nautical-charts.md), &nbsp;[Topografía](../plugins/topography.md), &nbsp;[Tiempo](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) y [Guías de viaje](../plan-route/travel-guides.md), &nbsp;[Actualizaciones en vivo](../personal/maps-resources.md#live-updates), &nbsp;**Solo carreteras**,  &nbsp;[Fuentes de mapa](../map/raster-maps.md), &nbsp;[Estilos de renderizado](../map/vector-maps.md#default-map-styles), &nbsp;**Fuentes de mapa, &nbsp;Indicaciones de voz (grabadas y TTS), &nbsp;Caché**.  

- ***Mis lugares*** (*amarillo*).  
    Incluye [Favoritos](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[Notas OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Ediciones OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Historial](../personal/global-settings.md#history), &nbsp;*Itinerario*.  

- ***Ajustes*** (*verde*).  
    Incluye [Perfiles](../personal/profiles.md), &nbsp;[Colores](../personal/color-palette-schemes.md) y **Otras** configuraciones de la aplicación.

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Menú de la pestaña local iOS](@site/static/img/personal/maps/local_tab_ios.png)

La pestaña Local proporciona una visión general del uso del almacenamiento para los datos de mapas y recursos en su dispositivo. La barra de memoria en la parte superior muestra tres categorías:

- ***Verde***. Almacenamiento total utilizado del dispositivo.
- ***Naranja***. Parte del almacenamiento utilizado ocupado por las descargas de OsmAnd.
- ***Gris***. Almacenamiento libre disponible en el dispositivo.

Debajo de la barra de memoria, se muestra una lista de todos los mapas y recursos de OsmAnd descargados, incluyendo su tipo y tamaño de archivo. Los mapas en línea no se cuentan en la barra de memoria, ya que se transmiten y solo se almacenan en caché temporalmente.

</TabItem>

</Tabs>


### Visualización de datos {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Resumen de categoría local Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Opciones de categoría local Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Toque cualquier elemento en la pestaña **Local** para abrir su lista detallada. En la parte superior de esta lista, un panel visual muestra cuánto espacio ocupa el tipo de datos seleccionado en relación con el almacenamiento total de OsmAnd.

***Acciones disponibles:***

- **Buscar**. Encuentre datos específicos por nombre dentro de la carpeta seleccionada.
- **Menú de tres puntos**:  
    ***Seleccionar***. Elija varios elementos para acciones como *Eliminar*, *Desactivar* o *Activar*.  
    ***Importar***. Acceda al almacenamiento del dispositivo para importar archivos.
- **Opción de ordenación**. Ordene los elementos por nombre, país, fecha o tamaño (la disponibilidad depende del tipo de datos).

Cada elemento de la lista ofrece un *menú de tres puntos* con opciones:

- **Información**. Vea información detallada sobre las *[acciones](#actions)*.
- **Exportar**. Guarde los datos en un archivo a través de *Ajustes → Exportar a archivo*.

***Opciones adicionales para mapas:***

- **Desactivar**. Deshabilite los mapas vectoriales sin eliminarlos. Permanecen almacenados pero no se utilizan para la navegación, la búsqueda o el enrutamiento. Reduce la carga en el dispositivo y acelera OsmAnd.
- **Actualizar**. Descargue la última versión del mapa.
- **Renombrar**. Personalice el nombre del mapa para una mejor identificación.
- **Eliminar**. Elimine el mapa de su dispositivo.
- **Editar** (para mapas en línea). Modifique la configuración del mapa en línea.

</TabItem>

<TabItem value="ios" label="iOS">  

![Visualización de datos](@site/static/img/personal/maps/viewing_data_ios.png)

Toque cualquier elemento sin conexión en la pestaña **Local** para abrir sus datos detallados, de la siguiente manera:

- **Tipo**. El tipo del elemento de datos como **Mapa estándar**, **Wikipedia**, **Curvas de nivel**, etc.
- **Tamaño**. El tamaño del elemento en MB.
- **Creado el**. La fecha en que se agregó el elemento.

Para los mapas en línea, solo se muestra el tipo y el tamaño de los datos en caché.

</TabItem>

</Tabs>


### Acciones {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de elementos de fuente de mapa](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Cada elemento en la lista de [Fuente de mapa](../map/raster-maps.md) proporciona configuraciones para gestionar el mapa rasterizado en línea almacenado en su dispositivo. Abra el *menú de tres puntos* para acceder a las acciones disponibles:

- **Información**. Muestra detalles generales sobre la fuente de mapa seleccionada, incluyendo el formato y la fecha de la última actualización.  
- **Calcular tamaño**. Estima el almacenamiento ocupado por las teselas en caché de esta fuente de mapa. Si la caché excede los *50MB*, el tamaño puede mostrarse como *≥50MB* en lugar de un número exacto.
- **Borrar todas las teselas**. Elimina todas las teselas en caché para la fuente de mapa seleccionada, liberando almacenamiento mientras se mantiene la fuente de mapa disponible para uso futuro.  
- **Exportar**. Guarda la configuración de la fuente de mapa seleccionada para copia de seguridad o para compartir.  
- **Eliminar**. Elimina la fuente de mapa seleccionada. Esta acción no afecta a los mapas sin conexión descargados, pero borra la caché asociada.

Al ver un elemento de datos local, verá:

- **Tipo**. El tipo de datos de la lista **Local**.
- **Creado**. La fecha en que se agregó el elemento.
- **Tamaño**. El tamaño del elemento en MB.

Las **Acciones** disponibles dependen del tipo de datos y pueden incluir **Desactivar**, **Actualizar**, **Renombrar**, **Exportar** y **Eliminar**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Acciones iOS](@site/static/img/personal/maps/local_actions_ios.png)

Las **Acciones** disponibles dependen del tipo de datos:

- Para **elementos sin conexión**, solo está disponible la opción **Eliminar**.
- Para **mapas en línea**, las acciones pueden incluir **Borrar caché**, **Editar** y **Eliminar**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Menú de actualizaciones {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Menú de mapas Actualizar mapas Android](@site/static/img/personal/maps/maps_update_andr.png)

La pestaña **Actualizaciones** le permite actualizar los mapas y recursos de OsmAnd. Los mapas estándar y de solo carreteras se publican una vez al mes, generalmente entre el segundo y el quinto día, e incluyen datos de OpenStreetMap hasta el último día del mes anterior (por ejemplo, la versión de octubre contiene datos hasta el 30 de septiembre). Otros datos como Wikipedia, terreno o mapas náuticos pueden seguir diferentes calendarios de actualización no regulares. El pronóstico del tiempo tiene su propio ciclo de actualización regular. Para más detalles, consulte [Descargar pronóstico](../plugins/weather.md#download-forecast). 

Use el botón *Actualizar todo* para actualizar todos los mapas simultáneamente, o actualice mapas individuales según sea necesario. Para actualizaciones por hora, verifique el estado de su suscripción a [Actualizaciones en vivo](#live-updates). Si está habilitado, la sección **Actualizaciones en vivo** aparecerá en la parte superior de la pestaña, debajo del indicador de Memoria del dispositivo.

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Menú de mapas Actualizar mapas iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Pronóstico del tiempo Actualizar mapas iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

La pestaña **Actualizaciones** le permite actualizar los mapas y recursos de OsmAnd. Los mapas estándar y de solo carreteras se publican una vez al mes, generalmente entre el segundo y el quinto día, e incluyen datos de OpenStreetMap hasta el último día del mes anterior (por ejemplo, la versión de octubre contiene datos hasta el 30 de septiembre). Otros datos como Wikipedia, terreno o mapas náuticos pueden seguir diferentes calendarios de actualización no regulares. 

Use el botón *Actualizar todo* para actualizar todos los mapas simultáneamente, o actualice mapas individuales según sea necesario. Para actualizaciones por hora, verifique el estado de su suscripción a [Actualizaciones en vivo](#live-updates). Si está habilitado, la sección **Actualizaciones en vivo** aparecerá en la parte superior de la pestaña, debajo del indicador de Memoria del dispositivo.

La pestaña **Actualizaciones** también incluye una sección de Pronóstico del tiempo. Está diseñada para gestionar sus pronósticos sin conexión para los países seleccionados:

- Si aún no se ha descargado ningún pronóstico, verá una indicación para seleccionar países. Los datos del pronóstico están disponibles hasta por 7 días.
- Una vez que se descarga un pronóstico, la pantalla ***Pronóstico sin conexión*** muestra la lista de países con información de estado, incluyendo la hora de la última actualización, el período de validez y el tamaño total de los datos.
- Al tocar un país se abre información detallada como la hora de la última actualización, la próxima actualización, el tamaño de los datos y la precisión. Las opciones incluyen ***Actualizar ahora***, habilitar o deshabilitar la ***Actualización automática*** (El pronóstico del tiempo tiene su propio ciclo de actualización regular. Para más detalles, consulte [Descargar pronóstico](../plugins/weather.md#download-forecast).), y ***Eliminar pronóstico***.


</TabItem>

</Tabs>

## Actualizaciones en vivo {#live-updates}

:::tip Compra
Las actualizaciones en vivo son una función de pago.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Menú de mapas OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Menú de mapas OsmAnd live editar Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Menú de mapas OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Menú de mapas OsmAnd live editar iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Actualizaciones en vivo** proporciona actualizaciones de mapas frecuentes e incrementales a través de una [suscripción](../purchases/index.md) o es gratuito para los [colaboradores de OSM](#free-for-osm-mappers). Las actualizaciones ocurren cada 15 minutos en los servidores de OsmAnd y se pueden descargar por hora, día o semana. Estas actualizaciones consumen un almacenamiento mínimo, alrededor del 2-4% del tamaño completo del mapa por mes.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Características clave:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Actualizaciones en vivo**. Gestione a través de un interruptor en los ajustes.
- Botón **&#8230; &#124;** (*Android*) / Botón **&#62;** (*iOS*). Abre los ajustes de *Actualizaciones en vivo*.
- **Interruptor**(*Android*) / Botón **&#43;** (*iOS*). Añade mapas para *actualizaciones en vivo*.
- **<Translate android="true" ids="update_frequency"/>**. Seleccione la frecuencia de actualización del mapa (por hora, diaria o semanal).
- **<Translate android="true" ids="update_now"/>**. Inicie las *actualizaciones en vivo* para el mapa.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Tamaño de las *actualizaciones en vivo*.
- **Botón de papelera**(*Android*). Elimina todas las *actualizaciones en vivo* recibidas para el mapa actual.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gestione la descarga de *actualizaciones en vivo* a través de una conexión Wi-Fi.


### Marcas de tiempo de actualización {#update-timestamps}

- **Última actualización de OSM.**  
    Indica los últimos cambios procesados de OpenStreetMap.
- **Región actualizada.**  
    Muestra cuándo se procesaron por última vez las actualizaciones de la región específica.
- **Próxima actualización.**  
    Muestra la hora programada para la próxima verificación de actualizaciones.


### Limitaciones de las actualizaciones en vivo {#limitations-of-live-updates}

Los cambios de dirección solo se admiten a través de actualizaciones mensuales.
Las carreteras actualizadas carecen de detalles de elevación, lo que afecta a los gráficos de pendiente.
Las referencias de ruta eliminadas o alteradas pueden seguir apareciendo incorrectamente.


### Gratis para mapeadores de OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live para mapeadores](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Los colaboradores de [OpenStreetMap](https://openstreetmap.org/) son elegibles para descargas de mapas ilimitadas y actualizaciones en vivo gratuitas. Para calificar:
Habilite el [complemento de edición de OpenStreetMap](../plugins/osm-editing.md).
[Inicie sesión](../plugins/osm-editing.md#settings) con su nombre de usuario de OSM.
Mantenga al menos [**30 ediciones**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) en los últimos dos meses.

## Artículos relacionados {#related-articles}

- [Perfiles (Ajustes)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas y soluciones comunes {#common-issues-and-solutions}

- Navegación por voz. [(verificar)](../troubleshooting/navigation.md#voice-navigation)
- Cómo eliminar el historial de búsqueda. [(verificar)](../troubleshooting/general.md#how-to-delete-search-history)
- Para solución de problemas adicionales, visite: [Mapas y Datos](../troubleshooting/maps-data.md)