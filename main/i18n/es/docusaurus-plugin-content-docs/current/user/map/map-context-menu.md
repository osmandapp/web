---
source-hash: b3628319fe264d1340c71509c8c7c386e2371ca88bd67b6c06961f0a7f2a9726
sidebar_position: 3
title: Menú contextual del mapa
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

El menú contextual del mapa proporciona información sobre el objeto seleccionado en el mapa. También puede usarlo para crear una ruta a la ubicación seleccionada. Para abrir el menú contextual, primero, encuentre la ubicación requerida en el mapa, luego seleccione el objeto con un toque corto o un toque largo al seleccionar cualquier punto preciso en el mapa.


### Seleccionar un objeto (un solo toque) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

El **menú contextual** aparece cuando **toca una vez** un objeto marcado en el mapa. Este menú contextual muestra información esencial sobre el objeto seleccionado, incluyendo su *nombre*, *icono* (como se representa en el mapa), *dirección, distancia*, *límites* y *dirección* desde su posición actual.  

Puede seleccionar varios tipos de objetos del mapa, como *PDI*, *favoritos*, *paradas de transporte*, *marcadores*, *picos de montaña* u otros *objetos del mapa*.

:::note
- Los objetos del mapa seleccionados y sus límites corresponden a [**nodos**](https://wiki.openstreetmap.org/wiki/Node) o [**vías**](https://wiki.openstreetmap.org/wiki/Way) de OpenStreetMap.
- *La altura de los picos de montaña se muestra en metros o pies dependiendo de las [unidades de longitud](../personal/profiles.md#units--formats) seleccionadas en la configuración del perfil.*
:::



### Seleccionar cualquier punto (pulsación larga) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual pulsación larga Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual pulsación larga iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Cuando realiza una **pulsación larga** en cualquier lugar del mapa, aparece un **menú contextual** que proporciona información sobre la ubicación seleccionada. Esto incluye la dirección, la distancia y la dirección desde su posición actual.


### Seleccionar ruta GPX {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual de track Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Pantalla de estadísticas de track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Al tocar un [track GPX](../map/tracks/index.md) en el mapa se abre el [menú contextual del track](../map/tracks/track-context-menu.md), donde puede acceder a opciones adicionales relacionadas con el track.



### Rutas, pistas de esquí y senderos {#routes-and-trails}

![Pistas de esquí y senderos de BTT](@site/static/img/map/ski_mtb.png)  ![Pistas de esquí y senderos de BTT](@site/static/img/map/ski_mtb_2.png)

Puede tocar elementos del mapa como **pistas de esquí**, **rutas de bicicleta de montaña (BTT)** y **senderos de motocross** para abrir su menú contextual con información detallada. Consulte el [artículo de Rutas](../map/routes.md#actions-with-routes) para obtener más información.



### Ocultar menú contextual {#hide-context-menu}

Para cerrar el **menú contextual**:

- Toque cualquier *área vacía* en el mapa para evitar reabrir el menú.
- Arrastre el menú *hacia abajo* desde la parte superior.


## Detalles {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual Android](@site/static/img/map/context_menu_2_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual iOS](@site/static/img/map/context_menu_2_ios.png)

</TabItem>

</Tabs>

Para obtener información más detallada sobre un objeto, toque el botón **Detalles** en el menú contextual o deslice el panel hacia arriba para expandirlo.


### Información del objeto {#object-info}

El panel **Información del objeto** proporciona detalles adicionales sobre el objeto seleccionado. Puede tocar cualquier entrada para copiar la información al portapapeles.  

Los detalles disponibles incluyen:

- [Descripción del artículo](#article-description)
- [Nombres alternativos](#alternative-names)
- [Coordenadas](#coordinates)
- [Dentro de áreas](#polygon-information)
- [PDI cercanos](#nearby-pois)
- [Lugares populares cercanos](#nearby-popular-places)
- [Rutas de transporte público para paradas](#public-transport-routes)
- [Favoritos / Puntos de track del mismo grupo](#favorites--track-points-from-the-group)
- [Enlace de OpenStreetMap](#openstreetmap-link)
- [Fotos en línea](#online-photos)

Además, el panel puede incluir [Detalles de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), como:

- [Sitio web](https://wiki.openstreetmap.org/wiki/Key:website)
- [Número de teléfono](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Horario de apertura](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Tarifa](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accesibilidad](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Ancho](https://wiki.openstreetmap.org/wiki/Key:width) / [Alto](https://wiki.openstreetmap.org/wiki/Key:height) 

Más allá de los campos enumerados anteriormente, OsmAnd también puede mostrar información descriptiva adicional extraída de OpenStreetMap. Estos atributos le ayudan a comprender mejor las características de un lugar e incluyen detalles como elevación, dirección, año de construcción, tipo de superficie o cobertura, nivel interior, opciones de pago, disponibilidad de entrega o para llevar, y muchos otros. OsmAnd muestra estos atributos con etiquetas claras y, cuando es posible, iconos, lo que facilita su lectura y reconocimiento. El conjunto exacto de atributos depende de los datos disponibles en OpenStreetMap para el objeto seleccionado.


### Descripción del artículo {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lista de descripción](@site/static/img/map/description_list_new_android.png) ![Lista de descripción](@site/static/img/map/description_list_dialog.png)

Esta parte contiene una parte de la descripción de un [artículo de Wikipedia](../plugins/wikipedia.md#wikipedia-article), una descripción de un [Favorito](../personal/favorites.md) o un Waypoint; al tocar puede abrir la descripción completa.

Si el lugar seleccionado tiene un artículo de Wikipedia, se muestra una vista previa corta en esta sección. Cuando el artículo completo no está disponible sin conexión, aparece el botón *Leer en Wikipedia*. Al tocarlo, se abre un diálogo con opciones dependiendo del acceso del usuario: los usuarios con un plan comprado pueden descargar los datos regionales de Wikipedia o abrir el artículo en un navegador, mientras que los usuarios gratuitos pueden abrir el artículo en línea o proceder a la pantalla que ofrece acceso sin conexión.

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de descripción](@site/static/img/map/description_list_new_ios.png)

Esta parte contiene una parte de la descripción de un [artículo de Wikipedia](../plugins/wikipedia.md), una descripción de un [Favorito](../personal/favorites.md) o un Waypoint; al tocar puede abrir la descripción completa.

</TabItem>

</Tabs>


### Nombres alternativos {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Nombres alternativos Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Nombres alternativos Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nombres alternativos Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Nombres alternativos Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd muestra **nombres adicionales de PDI** en el *menú contextual del mapa*, priorizando el nombre en el *idioma de visualización* o en la lista de idiomas preferidos del sistema. Si hay varias traducciones disponibles, se agrupan en etiquetas categorizadas como *nombre, marca, operador* o *PDI cercanos*.  

Características de la visualización de nombres alternativos:

- Se puede acceder a traducciones adicionales a través de una *lista desplegable*.

- Los nombres se clasifican en diferentes grupos, como la *lista de nombres en otros idiomas*, *Regional*, *Local*, *Nacional*, *Internacional*, *Corto*, *Antiguo*, *Oficial* y *Alternativo*.

- Otras categorías incluyen *traducción específica de la región* o *configuración predeterminada*.

- Si una traducción específica *no está disponible*, OsmAnd utiliza por defecto el nombre **local** para garantizar la precisión y la coherencia en las regiones multilingües.


### Dentro del área {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Información de polígono Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Información de polígono Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

La función **Dentro del área** enumera las **áreas** en las que se encuentra un objeto. Esto incluye características geográficas, límites administrativos, áreas de uso del suelo, características naturales y otras áreas categorizadas. Una *lista de polígonos circundantes*, ordenada *de menor a mayor* según el tamaño del área.

### Coordenadas {#coordinates}

|Formato de coordenadas| |
|:------|:------|
| <ul><li>DDD.DDDDD (Grados decimales simples)</li><li>DDD.DDDDD (N/S, E/W coma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Estándar UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 y CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Enlace web de OsmAnd](https://osmand.net/map)</li><li>[Enlace web de OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordenadas](@site/static/img/map/map_context_menu_Coordinates.png) |

En el menú contextual, puede encontrar [coordenadas geográficas](../search/search-coordinates.md#coordinate-format) de un punto en varios formatos y también enlaces compartibles de OsmAnd y [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (la última opción solo está disponible cuando el [plugin de edición de OpenStreetMap](../plugins/osm-editing.md) está habilitado). Si expande la sección de coordenadas y realiza una pulsación larga en cualquier línea de la lista, sus valores se copiarán automáticamente al portapapeles (**Android**) o la opción *Copiar* estará disponible en el mensaje emergente (**iOS**).  

El enlace web de OsmAnd puede ser reconocido automáticamente por OsmAnd (ejemplo: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Tanto los enlaces de OsmAnd como los de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) se abren en los sitios correspondientes con una marca de chincheta en el lugar de interés.  


### PDI cercanos {#nearby-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![PDI cercanos Android](@site/static/img/map/nearby_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![PDI cercano IOS](@site/static/img/map/nearby_poi_ios.png)

</TabItem>

</Tabs>

Esta sección muestra [Puntos de Interés](../map/point-layers-on-map.md#points-of-interest-pois) cercanos con *<Translate android="true" ids="shared_string_show_on_map"/>* y *<Translate android="true" ids="search_more"/>* para mostrar y [buscar](../search/search-poi.md) todos los demás PDI de la misma categoría.

Al tocar *PDI cercanos* se abre una lista de puntos. Un toque en uno de estos puntos de la lista mueve el mapa a este punto abriendo el menú contextual del punto en el mapa.


### Lugares populares cercanos {#nearby-popular-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Lugares cercanos Android](@site/static/img/map/nearby_places_android.png)

Esta sección resalta lugares populares que le ayudan a descubrir destinos interesantes y puntos de referencia alrededor de su ubicación actual. Use *<Translate android="true" ids="shared_string_show_on_map"/>* y *<Translate android="true" ids="search_more"/>* para navegar y buscar todos los lugares populares. 

Al tocar *Lugares populares cercanos* ([Popular Places](https://osmand.net/docs/user/map/popular_places)) se abre una lista de ubicaciones cercanas. Al seleccionar cualquier elemento, el mapa se centra en ese lugar y se abre su menú contextual, donde puede leer una descripción breve o tocar ***Leer artículo completo*** para ver la guía completa.

</TabItem>

<TabItem value="ios" label="iOS">

![Lugares cercanos IOS](@site/static/img/map/nearby_places_ios.png)

Esta sección resalta lugares populares que le ayudan a descubrir destinos interesantes y puntos de referencia alrededor de su ubicación actual. Use *<Translate android="true" ids="shared_string_show_on_map"/>* y *<Translate android="true" ids="search_more"/>* para navegar y buscar todos los lugares populares. 

Al tocar *Lugares populares cercanos* ([Popular Places](https://osmand.net/docs/user/plugins/wikipedia#wikipedia-article)) se abre una lista de ubicaciones cercanas. Al seleccionar cualquier elemento, el mapa se centra en ese lugar y se abre su menú contextual, donde puede leer una descripción breve o tocar ***Leer artículo completo*** para ver la guía completa.

> **NOTA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) aparecerá solo si ha descargado previamente mapas especiales con [artículos de Wikipedia para esta área](../plugins/wikipedia.md#download-wikipedia-packages)*.

</TabItem>

</Tabs>


### Rutas de transporte público {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Rutas de transporte público Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rutas de transporte público iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Muestra información sobre las rutas de transporte público para la parada de transporte elegida. Para obtener información sobre el menú contextual de transporte público y las acciones con él, lea el [artículo](../map/public-transport.md#transport-routes-context-menu).


### Favoritos / Puntos de track del grupo {#favorites--track-points-from-the-group}

![Lista de favoritos](@site/static/img/map/favorite_list_android.png) ![Lista completa de favoritos](@site/static/img/map/favorite_list_full_android.png)

Esta es una lista de todos los puntos en un grupo para un Favorito o Waypoint. Al tocar, se expande la lista completa de puntos de un grupo; al tocar un punto de la lista, el mapa se mueve al punto seleccionado.




### Enlace de OpenStreetMap {#openstreetmap-link}

![Enlace OSM](@site/static/img/map/context_menu_osm_link.png) ![Enlace OSM](@site/static/img/map/context_menu_osm_link_1.png)

El enlace de OpenStreetMap proporciona un enlace directo al objeto de OpenStreetMap donde puede encontrar información completa sobre él:  
[nodo](https://wiki.openstreetmap.org/wiki/Node) o [vía](https://wiki.openstreetmap.org/wiki/Way).


### Fotos en línea {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual de Fotos en línea Android](@site/static/img/map/images_nearby_1_andr.png)
![Menú contextual de Fotos en línea Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual de Fotos en línea iOS](@site/static/img/map/online_photo_ios.png)
![Menú contextual de Fotos en línea iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Cuando toca un Lugar Popular en el mapa, la sección **Fotos en línea** en el *menú contextual de PDI* muestra vistas previas de imágenes obtenidas de [Wikipedia](https://www.wikipedia.org/) y [Wikimedia Commons](https://www.wikimedia.org/).

Al tocar una foto se abre la vista de **Galería**, donde puede:

- Explorar hasta 100 imágenes por lugar
- Ver metadatos de la imagen (*autor*, *licencia*, *fuente*)
- Realizar acciones: **Compartir**, **Abrir en el navegador**, **Descargar**

> *En iOS, una pulsación larga en una imagen abre un menú contextual con acciones rápidas.*

Para más información, consulte: [Fotos en línea](https://osmand.net/docs/user/map/popular_places#online-photos) y [Vista de galería](https://osmand.net/docs/user/map/popular_places#gallery)


### Imágenes a nivel de calle {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Imágenes a nivel de calle Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Imágenes a nivel de calle iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd admite la integración con [Mapillary](https://www.mapillary.com/), una plataforma global de imágenes a nivel de calle de colaboración abierta. Esta función le permite ver y explorar secuencias de fotos del mundo real directamente en el mapa.

Las imágenes de Mapillary aparecen como iconos de fotos direccionales, alineados con la carretera o el camino donde fueron capturadas. Esto puede ayudarle a comprender mejor su entorno, especialmente en áreas desconocidas.

Puede:

- Usar el botón **Explorar** para abrir el visor de Mapillary y navegar por las imágenes a nivel de calle cercanas.
- Tocar el botón **Añadir fotos** para contribuir con sus propias fotos a la plataforma Mapillary.

> *Aprenda más sobre cómo activar y usar esta función en la [guía del plugin de Mapillary](../plugins/mapillary.md).*


### * Nota de audio/vídeo {#-audiovideo-note}

<InfoAndroidOnly />

![Lista de imágenes](@site/static/img/map/image_list_android.png) ![Lista de vídeos](@site/static/img/map/video_list_android.png)

La información de las [notas de audio/vídeo](../plugins/audio-video-notes.md) como la fecha, las coordenadas, la vista previa y otras están disponibles en el menú **Detalles**. Puede abrir las notas en un software secundario tocando el botón **Reproducir / Mostrar** en el menú contextual de la nota.


## Acciones {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de acciones Android](@site/static/img/map/actions_menu_android.png) ![Menú de acciones adicionales Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de acciones iOS](@site/static/img/map/actions_menu_ios.png)  ![Menú de acciones adicionales iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Es un conjunto de manipulaciones específicas que se pueden realizar en un punto u objeto. Este menú se divide en dos partes: la sección visible consta de un máximo de 3 acciones y las demás acciones son accesibles mediante el botón *Acciones*. Puede personalizar (*Android*) el orden de las acciones en [Configuración general](#customize).


### Añadir / Editar favorito {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Añadir/Editar favorito Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Añadir/Editar favorito iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

En el menú contextual, hay opciones para **añadir** o **editar** el punto/objeto seleccionado a la [lista de favoritos](../personal/myplaces.md).

- Para **Añadir**, debe seleccionar un punto/objeto, tocar el icono de *Estrella* (con la firma Añadir) e introducir toda la información necesaria.  

- Para **Editar** la información sobre un punto favorito, debe activar *Mostrar en el mapa* (*Menú → Mis lugares → Favoritos*), luego presionar sobre él y en el Menú contextual, en lugar del icono de *Estrella*, aparecerá el *icono de Lápiz* (con la firma Editar).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - añade un punto seleccionado a la lista de favoritos.


### Añadir / Editar marcador {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Añadir/Editar marcador Android](@site/static/img/map/add_marker_android.png) ![Acción Pasar marcador Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Añadir/Editar marcador iOS](@site/static/img/map/add_marker_ios.png)  ![Acción Restaurar marcador Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es posible marcar un punto o un objeto para facilitar la planificación de la navegación. Solo necesita tocar el icono de la **bandera** en el menú (*Android*), **flecha** (*iOS*) - muestra la dirección y la distancia al punto seleccionado desde su ubicación actual.

Acciones:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Pone un nuevo marcador en el punto seleccionado.
- **Marcar como pasado** (*Android*) / *Descartar* (*iOS*). Desactiva el marcador y lo pone en el Historial.
- **Hacer activo** (*Android*). Mueve el marcador a la posición superior (en el panel superior).
- **Restaurar marcador** (*Android*). Mueve el marcador del Historial a la lista activa.

Lea más sobre [marcadores aquí](../personal/markers.md).


### Compartir {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Versiones hasta Android 14 | 14+ Android |
|:------------|:---------------|
| ![Acción Compartir Android](@site/static/img/map/action_share_1_andr.png) | ![Acción Compartir Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Compartir iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

La aplicación OsmAnd le permite **<Translate android="true" ids="shared_string_share"/>** *Mi ubicación* o cualquier ubicación seleccionada en el mapa con mensajería, correos electrónicos o redes sociales.  

Opciones disponibles para compartir la ubicación:

- ***Enviar***. Envía texto a través de las aplicaciones disponibles en su dispositivo. Incluye toda la información sobre la ubicación: el nombre de Mi ubicación o el nombre del PDI seleccionado, la dirección, las coordenadas y la geolocalización como un enlace.
- ***Copiar***. Copia toda la información de la ubicación (nombre de Mi ubicación o nombre del PDI seleccionado, dirección, coordenadas y geolocalización como un enlace) al portapapeles.  
- ***Copiar dirección***. Copia solo la información de la dirección al portapapeles.
- ***Copiar nombre del PDI***. Copia solo el nombre del PDI o la dirección si no hay nombre al portapapeles.
- ***Copiar coordenadas***. Copia solo la información de las coordenadas al portapapeles.
- ***geo***. Abre una lista de aplicaciones disponibles que admiten geolocalizaciones. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***Código QR*** (*Android*). Genera un enlace a la ubicación seleccionada en un código QR.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Direcciones a / desde {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Direcciones Android](@site/static/img/map/action_directions_android.png)

![Múltiples direcciones Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Direcciones iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Para iniciar la navegación o la planificación de la ruta, primero debe seleccionar el destino con [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). En caso de que ya tenga un punto de destino, el menú le sugerirá reemplazar el punto de destino o insertarlo como otro punto intermedio o de inicio.

También es posible seleccionar primero el destino *Desde* a través del menú contextual del mapa (<Translate android="true" ids="context_menu_item_directions_from"/>).

Lea más sobre [navegación aquí](../navigation/setup/route-navigation.md).

:::note Tocar Iniciar navegación
Si toca **Iniciar navegación**, el punto *Desde* se descartará ya que la aplicación entra en modo de navegación. Para conservar una ruta, no toque *Iniciar navegación* y [**deslice hacia abajo**](#hide-context-menu) el menú *Preparación de la ruta*.
:::


### Buscar cerca {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción de búsqueda Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción de búsqueda iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Con esta acción del menú contextual, es posible buscar alrededor de una ubicación específica en el mapa.  

Lea más sobre la funcionalidad de [búsqueda](../search/index.md).


### Evitar carretera {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Evitar carretera en el mapa Android](@site/static/img/map/action_avoid_android.png) ![Descartar carretera evitada Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evitar carretera en el mapa iOS](@site/static/img/map/avoid_route_ios_1.png) ![Descartar carretera evitada iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Usando el menú contextual del mapa, puede agregar una carretera específica a la lista de carreteras no utilizadas para el enrutamiento. Eso afectará la [preparación de la ruta](../navigation/setup/route-navigation.md).  
Para eliminar carreteras previamente seleccionadas de la *[Lista de carreteras a evitar](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, toque una señal, elija *Eliminar* (**Android**) o *Descartar* (**iOS**).

:::note
La función de evitar carreteras es global y afecta a todos los *[tipos de enrutamiento](../navigation/routing/osmand-routing.md#routing-types)* (excepto el *[enrutamiento en línea](../navigation/routing/online-routing.md)*).  
:::


### Cambiar posición del objeto {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Cambiar posición Android](@site/static/img/map/action_change_position_android.png)

![IU de Acción Cambiar posición Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Cambiar posición iOS](@site/static/img/map/action_change_position_ios.png)

![IU de Acción Cambiar posición iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Casi todos los objetos creados por el usuario son móviles, es decir, Marcador, Favorito, PDI creado, Nota de audio/vídeo o Waypoint de track. Primero seleccione un objeto en el mapa y luego use *<Translate android="true" ids="change_markers_position"/>* en el menú para moverlo a una nueva ubicación.


### Planificar una ruta {#plan-a-route}

![Acción Planificar una ruta Android](@site/static/img/map/action_plan_route_android.png)

Puede iniciar la planificación de una ruta desde un punto seleccionado a través del menú contextual del objeto.

Lea más sobre la herramienta [Planificar una ruta](../plan-route/create-route.md).


### Actualizar / Descargar mapas en línea {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Descargar mapa en línea Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Descargar mapa en línea iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Para actualizar o descargar mapas en línea (teselas) en una ubicación específica, puede usar el menú contextual del objeto:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* y para *Actualizar*, vaya a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* y *<Translate ios="true" ids="update_tile"/>*.  

Por favor, lea las [instrucciones completas](../map/raster-maps.md#download--update-tiles).  


### Actualizar / Descargar mapas vectoriales {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Descargar mapa vectorial Android](@site/static/img/map/action_download_vector_map_android.png)

![Seleccionar mapa vectorial mundial en Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Descargar mapa vectorial iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Seleccionar mapa vectorial en iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

En caso de que no haya un mapa sin conexión presente en la ubicación seleccionada, por ejemplo, el menú de objetos del mapa se abrió a través de Búsqueda o a través de un Favorito específico, se sugerirá [descargar](../start-with/download-maps.md#select-on-the-map) el mapa sin conexión más pequeño posible.  

**iOS**. Si ya ha [descargado](../map/map-context-menu.md) mapas de OsmAnd (vectoriales o de terreno), es posible actualizarlos a través del menú contextual. Primero deberá seleccionar la región en el mapa: toque cualquier ubicación en el zoom mundial 3-7.  

> **NOTA**. *Si ha abierto el menú contextual para una región del mapa (la región está resaltada), podrá ver ***<Translate android="true" ids="rendering_category_details"/>*** sobre ella: tipo y tamaño de un mapa disponible, enlace a una página de Wikipedia, idioma, población y otros.*


### * Añadir / Eliminar punto de aparcamiento {#-add--delete-parking-point}

:::note
Para añadir/eliminar puntos de aparcamiento, active el [**plugin de Posición de aparcamiento**](../plugins/parking.md) de OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Aparcamiento Android](@site/static/img/map/action_parking_android.png)

![Acción Eliminar Aparcamiento Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Aparcamiento iOS](@site/static/img/map/action_parking_ios.png)

![Acción Eliminar Aparcamiento iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Cualquier ubicación seleccionada en el mapa podría marcarse como [una posición de aparcamiento](../plugins/parking.md). Para eliminar la posición de aparcamiento, puede abrir el menú contextual asociado con la ubicación del aparcamiento.


### * Añadir / Editar waypoint de track {#-add--edit-track-waypoint}

:::note
Para añadir/editar puntos de track, active el [**plugin de Grabación de viaje**](../plugins/trip-recording.md) de OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Seleccionar track para añadir Waypoint Android](@site/static/img/map/tracks_tab_android.png) ![Añadir Waypoint de track Android](@site/static/img/map/add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Seleccionar track para añadir Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Puede añadir waypoints a un track grabado o a la grabación de track actual utilizando el menú contextual del mapa.  

- Seleccione una ubicación en el mapa con una [pulsación larga](../map/map-context-menu.md#select-any-point-long-tap).
- En el *menú contextual del mapa* que se abre, elija *Acciones → Añadir waypoint de track*.
- La lista muestra los [tracks](../map/tracks/index.md#display-tracks-on-the-map) grabados y mostrados en el mapa, así como la [grabación de track actual](../plugins/trip-recording.md), a la que puede añadir el waypoint seleccionado (*en Android*, la lista se agrupa en pestañas: <Translate android="true" ids="shared_string_on_map"/> / <Translate android="true" ids="rendering_value_all_name"/> / <Translate android="true" ids="shared_string_folders"/>).
- Puede añadir waypoints a un track que aún no está activo para la grabación, en cuyo caso el track inactivo cambia del *estado de Inicio* al *estado de Reanudar*.
- [Rellene](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) los datos necesarios y guarde el waypoint.
- Puede configurar las [Acciones rápidas](../widgets/quick-action.md) añadiendo un waypoint a *Añadir waypoint de track*.


### * Crear / Modificar PDI {#-create--modify-poi}

:::note
Para crear/modificar PDI, active el [**plugin de Edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción PDI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción PDI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Con el plugin de Edición de OSM, puede crear y modificar la mayoría de los PDI presentes en [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [crea un nuevo PDI](../plugins/osm-editing.md#create--modify-poi) en la ubicación seleccionada.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifica el PDI seleccionado](../plugins/osm-editing.md#create--modify-poi).


### * Abrir nota de OSM {#-open-osm-note}

:::note
Para abrir una nota de OSM, active el [**plugin de Edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Acción Nota Android](@site/static/img/map/action_note_android.png)

![Acción Añadir Nota Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Nota iOS](@site/static/img/map/action_note_ios.png)

![Acción Añadir Nota iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Puede **informar** de errores en los datos del mapa en una ubicación específica a la [comunidad de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Por favor, siga las [directrices](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) y añada comentarios adecuados a un problema.


### * Comentar / Cerrar nota de OSM {#-comment--close-osm-note}

:::note
Para comentar/cerrar una nota de OSM, active el [**plugin de Edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

![Comentar Nota de OSM Android](@site/static/img/map/action_comment_note_android.png) ![Reabrir Nota de OSM Android](@site/static/img/map/action_reopen_note_android.png)

Puede [comentar](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolver](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) y reabrir
Notas de OpenStreetMap a través del menú contextual del objeto.


### * Subir PDI / Nota de OSM {#-upload-poi--osm-note}

:::note
Para subir un PDI / nota de OSM, active el [**plugin de Edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

![Subir PDI Android](@site/static/img/map/action_poi_upload_android.png) ![Subir Nota de OSM Android](@site/static/img/map/action_note_upload_android.png)

En caso de que use el *Modo sin conexión* para añadir/editar PDI o Notas de OSM, necesitará subir los cambios a OpenStreetMap. Por defecto, el *Modo sin conexión* está activado para evitar cambios accidentales en la base de datos pública. Puede subir o eliminar cambios a través del menú contextual del objeto creado.


### * Grabar nota de A/V {#-record-av-note}

<InfoAndroidOnly />

:::note
Para grabar notas de audio/vídeo, active el [**plugin de Notas de Audio/Vídeo**](../plugins/audio-video-notes.md) de OsmAnd.
:::

![Acción Audio-Vídeo Android](@site/static/img/map/action_av_note_android.png)

Graba o toma una nota multimedia en un punto seleccionado del mapa.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - hace una [nota de audio](../map/point-layers-on-map.md#-audio--video-points-android) en el punto seleccionado (crea un nuevo punto en la superposición con un icono de audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - hace una [nota de vídeo](../map/point-layers-on-map.md#-audio--video-points-android) en el punto seleccionado (crea un nuevo punto en la superposición con un icono de vídeo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - hace un [punto de foto](../map/point-layers-on-map.md#-audio--video-points-android) en el mapa.


## Personalizar {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Personalizar menú contextual del mapa](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Personalizar menú contextual del mapa](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Personalizar menú contextual del mapa](@site/static/img/map/map_context_menu_customize_3.png)

Puede cambiar el orden u ocultar elementos del menú *Acciones* en el *menú contextual del mapa*. Se sugieren un total de 16 acciones.  

- Puede mover las tres acciones más útiles a la parte superior de la lista de *Acciones principales*.
- El resto del menú se puede personalizar para cada perfil por separado en las secciones *Acciones adicionales* y *Ocultas*.  

Tipos de acciones disponibles:

- **<Translate android="true" ids="main_actions"/>**. La sección tiene solo 4 botones, tres de los cuales se pueden personalizar, y Acciones, que permanece sin cambios.  
- **<Translate android="true" ids="additional_actions"/>**. Puede acceder a estas acciones tocando el botón *Acciones*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Mover acciones a esta sección no impide que funcionen. Simplemente no aparecen en el menú Acciones.  


## Artículos relacionados {#related-articles}

- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas raster (en línea / sin conexión)](./raster-maps.md)
- [Puntos en el mapa](./point-layers-on-map.md)
- [Menú contextual de tracks](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)