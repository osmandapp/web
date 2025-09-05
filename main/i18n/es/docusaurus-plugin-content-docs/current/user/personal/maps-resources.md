---
source-hash: 57a0e223941f4fa5c78b961d2b8a0c14ce6e335350aa6cf77cf17491e4fcf0f6
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

En la sección **Mapas y Recursos**, puedes gestionar mapas *en línea* y *sin conexión*, y otros recursos utilizados en OsmAnd. Por ejemplo, puedes descargar, eliminar, renombrar, borrar la caché, actualizar y comprobar el tamaño, y realizar diferentes acciones.

OsmAnd opera con dos tipos de mapas: [Mapas vectoriales](../map/vector-maps.md) y [Mapas ráster](../map/raster-maps.md). La pestaña [Local](#local) almacena todos los mapas y recursos. Los tipos de mapas disponibles se pueden descargar desde la pestaña [Descargas](#downloads). En la pestaña [Actualizaciones](#updates), puedes descargar mapas que están disponibles para actualizaciones y usar [Actualizaciones en vivo](#osmand-live). También puedes acceder a la función [Mapa extra](#extra-maps) para crear tus tipos de mapas.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Tipos de mapas {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Descargar mapas en la aplicación OsmAnd es un paso importante que determina la funcionalidad y eficiencia de la navegación.

#### Funciones gratuitas para la ubicación seleccionada {#free-features-for-the-selected-location}

- **Mapa estándar**. Proporciona una visión general del área basada en la fuente [OpenStreetMap](https://www.openstreetmap.org/) y contiene un mapa, rutas, direcciones, PDI e información de transporte público. Al tocar, se abre una pantalla con una lista de regiones del país seleccionado e información sobre cuánto espacio ocuparán estos mapas en tu dispositivo.  
- **Solo carreteras** (*solo Android*). El mapa contiene solo información de la cuadrícula de carreteras para centrarse en las rutas y la infraestructura vial. Al eliminar detalles como edificios y puntos de interés, es más pequeño que un mapa estándar. Al tocar, se abre una pantalla con una lista de regiones del país seleccionado e información sobre cuánto espacio ocuparán estos mapas en tu dispositivo.

#### Funciones de pago para la ubicación seleccionada {#paid-features-for-the-selected-location}

- [Curvas de nivel](../plugins/topography.md#contour-lines). Un mapa que contiene curvas de nivel de elevación para visualizar el terreno.
- [Mapa de terreno (sombreado y pendiente)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Mapas con sombras o pendientes que proporcionan información adicional del terreno.
- [Mapa de terreno (3D)](../plugins/topography.md#3d-relief). Representación tridimensional del terreno para una mejor comprensión de tu entorno. El [motor de renderizado de mapas Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) debe estar habilitado.
- [Wikipedia](../plugins/wikipedia.md). Mapa vectorial con artículos de [Wikipedia](https://wikipedia.org/) geoposicionados sobre puntos de referencia o información adicional sobre lugares.
- [Pronóstico del tiempo](../plugins/weather.md). Información meteorológica en un mapa para facilitar la planificación de rutas.
- [Mapas ráster en línea](../map/raster-maps.md). Los mapas están disponibles para descargar en línea y se pueden instalar como mapas de terceros o como mosaicos de OsmAnd.

#### Mapa de visión general del mundo {#world-overview-map}

Las versiones de OsmAnd hasta la 3.8 ofrecen la descarga de un mapa mundial para que puedas verlo a escala planetaria. En las versiones más recientes de OsmAnd, se incluye un *Mini mapa mundial* ligero con la aplicación. La aplicación te permite descargar un mapa mundial de visión general más grande con información más detallada.


## Mapas y recursos {#maps--resources}

La sección del *Menú principal* **Mapas y recursos** de la aplicación OsmAnd proporciona acceso para gestionar mapas y otros datos importantes.

- La pestaña [Descargar](#downloads) mapas te permite descargar mapas para uso sin conexión, asegurando su disponibilidad sin internet.  
- En la pestaña [Mapas locales](#local), puedes encontrar y gestionar información detallada sobre mapas y lugares, incluidos favoritos, rutas, notas de OSM y otros elementos que tienes en tu dispositivo.  
- La pestaña [Actualizaciones](#updates) permite a los usuarios obtener información sobre las actualizaciones disponibles de mapas y otros recursos, asegurando que los datos estén actualizados y sean precisos.

***Acciones generales que puedes realizar en Mapas y recursos***:

- **Actualizar**. Vuelve a cargar la lista de mapas disponibles desde el servidor de OsmAnd.  
- **Buscar**. Busca mapas por **país**, **provincia** o **ciudad** principal.  
- **Memoria del dispositivo**. Muestra en el indicador cuánta memoria está disponible para descargar y cuántos mapas se pueden descargar de forma gratuita. Dependiendo de la pestaña, a veces se muestran datos ligeramente diferentes.  
- **Contador de mapas** (*La versión gratuita* solo es visible si no tienes una [suscripción](../purchases/index.md)). El indicador con divisores muestra cuántos mapas te quedan por descargar de los *7 disponibles*.

:::info monthly map updates
Ten en cuenta que las actualizaciones mensuales de mapas se consideran otra descarga de mapas y se restan del número disponible de descargas gratuitas de mapas.
:::


### Descargas {#downloads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

La pestaña **Descargar** te permite descargar varios tipos de mapas desde los servidores de OsmAnd, lo que requiere una conexión a Internet activa.

***Para descargar un mapa:***

- **Abre la pestaña Descargar**, localiza la sección requerida y toca la carpeta correspondiente para ver los mapas disponibles.

- Los **mapas disponibles** muestran iconos de descarga, para un solo mapa o para [varios mapas](#multiple-map-loading).

- Los **mapas descargados** muestran un icono verde con un botón de menú:  
    - *Android*: Menú de tres puntos.  
    - *iOS*: Icono de información (I).

- Los **mapas en proceso de carga** tienen un icono que lo visualiza. Para cancelar la descarga, toca el icono. Para ver la lista de mapas en la cola de descarga y cancelar las descargas, toca la barra de Descarga en el área de información de la Memoria del dispositivo de las pestañas Descargas y Actualizaciones.

- En la **versión gratuita**, los mapas no disponibles para descargar muestran un icono [OBTENER](../purchases/index.md), que enlaza con la página de compra.

***La pestaña de descargas consta de grupos de mapas:***

- **Información de la memoria del dispositivo**. Visualiza la cantidad de espacio ocupado y libre en tu dispositivo.
- **Contador de mapas** (***Versión gratuita***). Muestra cuántos mapas te quedan por descargar.
- [Mapas extra](#extra-maps). Muestra los datos del mapa para el [paquete personalizado](../plugins/custom.md).
- **Regiones**. Lista por continente y región del mundo: *África, Antártida, Asia, Australia y Oceanía, América Central, Europa, América del Norte, Rusia y América del Sur.*
- [Mapas del mundo](#world-maps). Una lista de mapas de todo el mundo: *Corrección de altitud mundial (solo Android)*, *Mapa de visión general del mundo*, *Todo el mundo (pronóstico del tiempo)*
- [Mapas náuticos](../plugins/nautical-charts.md) ([*función de pago*](../purchases/index.md)). Mapas vectoriales con elevaciones como puntos o líneas.
- [Guías de viaje (Wikivoyage)](../plan-route/travel-guides.md) ([*función de pago*](../purchases/index.md)). Mapas vectoriales con una colección de artículos en formato HTML y, además, archivos GPX.
- **Otros mapas**. Mapas que no se pueden asignar a la jerarquía de mapas actual porque no son compatibles o estarán disponibles en futuras versiones.
- [Indicaciones de voz](../navigation/guidance/voice-navigation.md) (*solo Android*). Paquetes de voz para vocalizar las indicaciones de navegación.
- [Fuentes de mapas](../map/vector-maps.md#map-fonts-android) (*solo Android*). Archivos de fuentes adicionales que muestran texto en el mapa.

#### Mapas del mundo {#world-maps}

En el menú Descargar mapas, hay una sección **Mapas del mundo** que proporciona acceso para descargar varios mapas del mundo, complementando la funcionalidad de la aplicación.  

- **Corrección de altitud mundial** (*solo Android*). Mejora la precisión de la navegación, especialmente en terrenos montañosos.
- **Mapa de visión general del mundo**. Proporciona una visión general extensa de la superficie terrestre, útil para la planificación de rutas a largo plazo y la exploración casual.
- **Todo el mundo (pronóstico del tiempo)**. Permite descargar un mapa con información meteorológica.

La información sobre el *menú de mapas* y las *acciones* se puede encontrar en el artículo [Descargar mapas](../start-with/download-maps.md).


#### Carga de mapas múltiples {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Para países que constan de **varios mapas regionales**, puedes utilizar la carga masiva de varios mapas. Los mapas disponibles para este tipo de descarga se muestran con iconos de doble flecha de descarga y una etiqueta con el número de regiones dentro (por ejemplo, Curvas de nivel / Todas las regiones: 10). Puedes elegir cuántos mapas descargar.


### Local {#local}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

La pestaña Local proporciona una visión general del uso del almacenamiento para todos los datos de OsmAnd en tu dispositivo. Los datos se dividen en tres secciones codificadas por colores para mayor claridad, con los elementos ordenados por tamaño de mayor a menor. Cada sección muestra solo los elementos con datos descargados:

- ***Recursos*** (*azul*).  
    Incluye mapas ([Estándar](../map/vector-maps.md), &nbsp;[Náutico](../plugins/nautical-charts.md), &nbsp;[Topografía](../plugins/topography.md), &nbsp;[Tiempo](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) y [Guías de viaje](../plan-route/travel-guides.md), &nbsp;[Actualizaciones en vivo](../personal/maps-resources.md#osmand-live), &nbsp;**Solo carretera**,  &nbsp;[Fuentes de mapas](../map/raster-maps.md), &nbsp;[Estilos de renderizado](../map/vector-maps.md#default-map-styles), &nbsp;**Fuentes de mapas, &nbsp;Indicaciones de voz (grabadas y TTS), &nbsp;Caché**.  

- ***Mis lugares*** (*amarillo*).  
    Incluye [Favoritos](../personal/favorites.md), &nbsp;[Rutas](../personal/tracks/manage-tracks.md), &nbsp;[Notas de OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Ediciones de OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Notas A/V](../plugins/audio-video-notes.md), &nbsp;[Marcadores de mapa](../personal/markers.md), &nbsp;[Historial](../personal/global-settings.md#history), &nbsp;*Itinerario*.  

- ***Configuración*** (*verde*).  
    Incluye [Perfiles](../personal/profiles.md), &nbsp;[Colores](../personal/color-palette-schemes.md) y **Otras** configuraciones de la aplicación.


#### Visualización de datos {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Toca cualquier elemento en la pestaña **Local** para abrir su lista detallada. En la parte superior de esta lista, un panel visual muestra cuánto espacio ocupa el tipo de datos seleccionado en relación con el almacenamiento total de OsmAnd.

***Acciones disponibles:***

- **Buscar**. Encuentra datos específicos por nombre dentro de la carpeta seleccionada.
- **Menú de tres puntos**:  
    ***Seleccionar***. Elige varios elementos para acciones como *Eliminar*, *Desactivar* o *Activar*.  
    ***Importar***. Accede al almacenamiento del dispositivo para importar archivos.
- [Opción de clasificación](#sorting-options). Ordena los elementos por nombre, país, fecha o tamaño (la disponibilidad depende del tipo de datos).


#### Menú para elementos de la lista {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Cada elemento de la lista ofrece un *menú de tres puntos* con opciones:

- **Información**. Ver información detallada sobre el *[elemento de datos](#local-data-item-overview)*.
- **Exportar**. Guardar datos en un archivo a través de *Configuración → Exportar a archivo*.

***Opciones adicionales para mapas:***

- **Desactivar**. Deshabilita los mapas vectoriales sin eliminarlos. Permanecen almacenados pero no se utilizan para navegación, búsqueda o enrutamiento. Reduce la carga en el dispositivo y acelera OsmAnd.
- **Actualizar**. Descarga la última versión del mapa.
- **Renombrar**. Personaliza el nombre del mapa para una mejor identificación.
- **Eliminar**. Elimina el mapa de tu dispositivo.
- **Editar** (para mapas en línea). Modifica la configuración del mapa en línea.

#### Menú de elementos de la fuente del mapa {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Cada elemento de la lista de [fuentes de mapas](../map/raster-maps.md) proporciona configuraciones para gestionar los mapas ráster en línea almacenados en tu dispositivo. Abre el *menú de tres puntos* para acceder a las acciones disponibles:

- [Información](#local-data-item-overview). Muestra detalles generales sobre la fuente del mapa seleccionada, incluido el formato y la fecha de la última actualización.  
- **Calcular tamaño**. Estima el almacenamiento ocupado por los mosaicos en caché de esta fuente de mapa. Si la caché supera los *50 MB*, el tamaño se puede mostrar como *≥50 MB* en lugar de un número exacto.
- **Borrar todos los mosaicos**. Elimina todos los mosaicos en caché de la fuente de mapa seleccionada, liberando almacenamiento mientras mantiene la fuente de mapa disponible para uso futuro.  
- **Exportar**. Guarda la configuración de la fuente de mapa seleccionada para copia de seguridad o para compartir.  
- **Eliminar**. Elimina la fuente de mapa seleccionada. Esta acción no afecta a los mapas sin conexión descargados, pero borra la caché asociada.


#### Resumen de elementos de datos locales {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

Al ver un elemento de datos local, verás:

- **Tipo**. El tipo de datos de la lista **Local**.
- **Creado**. La fecha en que se añadió el elemento.
- **Tamaño**. El tamaño del elemento en MB.

Las **acciones** disponibles dependen del tipo de datos y pueden incluir **Desactivar**, **Actualizar**, **Renombrar**, **Exportar** y **Eliminar**.

#### Opciones de clasificación {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Utiliza las opciones de clasificación para organizar los datos del mapa:

- **Nombre (A - Z / Z - A)**. Localiza elementos alfabéticamente.
- **Nombre del país (A - Z / Z - A)**. Organiza los mapas geográficamente.
- **Fecha más reciente primero** / **Fecha más antigua primero**. Consulta actualizaciones o versiones anteriores.
- **Tamaño grande primero** / **Tamaño pequeño primero**. Identifica mapas grandes para liberar espacio de almacenamiento.


### Actualizaciones {#updates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

La pestaña **Actualizaciones** te permite actualizar los mapas de OsmAnd mensualmente. Utiliza el botón *Actualizar todo* para actualizar todos los mapas simultáneamente, o actualiza los mapas individualmente según sea necesario. Los mapas estándar y solo de carreteras suelen publicarse dos semanas después de cada mes. Para actualizaciones por hora, verifica el estado de tu suscripción a [OsmAnd Live](#osmand-live). Si está habilitado, la sección **Actualizaciones en vivo** aparecerá en la parte superior de la pestaña, debajo del indicador de Memoria del dispositivo.


### Mapas extra {#extra-maps}

OsmAnd admite la transferencia de configuraciones y datos específicos del perfil, incluidos archivos de renderizado, fuentes, rutas, mapas y complementos personalizados. Crea una carpeta de mapa personalizada utilizando un archivo de complemento `.osf` (un formato `.zip` comprimido).

Para importar un archivo:

1. Localiza el archivo `.osf` en el almacenamiento de tu dispositivo, mensajero o correo electrónico.
2. Toca para abrirlo con OsmAnd.
3. El complemento aparecerá en la sección **Lista de complementos**, donde se puede activar.
4. Una carpeta correspondiente aparecerá en la sección **Mapas extra** de la pestaña [Descargas](#downloads).

Lee más en el artículo [**Paquete personalizado**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Purchase
OsmAnd Live es una función de pago.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** proporciona actualizaciones de mapas incrementales y frecuentes a través de [suscripción](../purchases/index.md) o es gratuito para [colaboradores de OSM](#free-for-osm-mappers). Las actualizaciones se realizan cada 15 minutos en los servidores de OsmAnd y se pueden descargar cada hora, diariamente o semanalmente. Estas actualizaciones consumen un almacenamiento mínimo, aproximadamente del 2 al 4% del tamaño total del mapa por mes.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Características clave:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Actualizaciones en vivo**. Gestiona a través de un interruptor en la configuración.
- Botón **&#8230; &#124;** (*Android*) / Botón **&#62;** (*iOS*). Abre la configuración de *OsmAnd Live*.
- **Conmutador** (*Android*) / Botón **&#43;** (*iOS*). Añade mapas para *actualizaciones en vivo*.
- **<Translate android="true" ids="update_frequency"/>**. Selecciona la frecuencia de actualización del mapa (cada hora, diaria o semanal).
- **<Translate android="true" ids="update_now"/>**. Inicia la actualización del mapa de *OsmAnd Live*.
- **<Translate android="true" ids="updates_size"/>** (*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>** (*iOS*). Tamaño de las *actualizaciones en vivo*.
- **Botón de papelera** (*Android*). Elimina todas las *actualizaciones en vivo* recibidas para el mapa actual.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Gestiona la descarga de *actualizaciones en vivo* a través de una conexión Wi-Fi.


### Marcas de tiempo de actualización {#update-timestamps}

- **Última actualización de OSM.**  
    Indica los últimos cambios procesados de OpenStreetMap.
- **Región actualizada.**  
    Muestra cuándo se procesaron por última vez las actualizaciones de la región específica.
- **Próxima actualización.**  
    Muestra la hora programada para la próxima verificación de actualización.


### Limitaciones de OsmAnd Live {#limitations-of-osmand-live}

Los cambios de dirección solo se admiten mediante actualizaciones mensuales.
Las carreteras actualizadas carecen de detalles de elevación, lo que afecta a los gráficos de pendiente.
Las referencias de ruta eliminadas o alteradas aún pueden aparecer incorrectamente.


### Gratis para los colaboradores de OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Los colaboradores de [OpenStreetMap](https://openstreetmap.org/) son elegibles para descargas ilimitadas de mapas y actualizaciones en vivo gratuitas. Para calificar:
Habilita el [complemento de edición de OpenStreetMap](../plugins/osm-editing.md).
[Inicia sesión](../plugins/osm-editing.md#settings) con tu nombre de usuario de OSM.
Mantén al menos [**30 ediciones**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) en los últimos dos meses.

## Artículos relacionados {#related-articles}

- [Perfiles (Configuración)](./profiles.md)
- [Importar / Exportar](../personal/import-export.md)

### Problemas comunes y soluciones {#common-issues-and-solutions}

- Navegación por voz. [(verificar)](../troubleshooting/navigation.md#voice-navigation)
- Cómo eliminar el historial de búsqueda. [(verificar)](../troubleshooting/general.md#how-to-delete-search-history)
- Para solucionar problemas adicionales, visita: [Mapas y datos](../troubleshooting/maps-data.md)

> *Última actualización: Febrero de 2025*