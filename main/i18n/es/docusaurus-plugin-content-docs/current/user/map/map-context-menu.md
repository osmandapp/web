---
source-hash: 3f3b85046b389da6c840d6ec98c139f32b2f5116b6d2eb8c376445af5e4cf4bf
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



## Generalidades {#overview}

El menú contextual del mapa proporciona información sobre el objeto seleccionado en el mapa. También puedes usarlo para crear una ruta a la ubicación seleccionada. Para abrir el menú contextual, primero busca la ubicación requerida en el mapa, luego selecciona el objeto con un toque corto o un toque largo al seleccionar cualquier punto preciso en el mapa.


### Seleccionar un objeto (un solo toque) {#select-an-object-single-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menú contextual Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

El **menú contextual** aparece cuando **tocas una vez** un objeto marcado en el mapa. Este menú contextual muestra información esencial sobre el objeto seleccionado, incluyendo su *nombre, icono* (tal como se representa en el mapa), *dirección, distancia* y *dirección* desde tu posición actual.  

Puedes seleccionar varios tipos de objetos del mapa, como *PDI*, *favoritos*, *paradas de transporte*, *marcadores*, *picos de montañas* u otros *objetos del mapa*.

:::note
Los objetos de mapa seleccionados corresponden a [**nodos**](https://wiki.openstreetmap.org/wiki/Node) o [**vías**](https://wiki.openstreetmap.org/wiki/Way) de OpenStreetMap.
:::

> *La altura de los picos de las montañas se muestra en metros o pies, dependiendo de las [unidades de longitud](../personal/profiles.md#units--formats) seleccionadas en la configuración del perfil.*


### Seleccionar cualquier punto (toque largo) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual toque_largo_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual toque_largo_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Cuando **mantienes pulsado** en cualquier lugar del mapa, aparece un **menú contextual** que proporciona información sobre la ubicación seleccionada. Esto incluye la dirección, la distancia y la dirección desde tu posición actual.

> **NOTA**. *Mantener pulsado un **número de edificio** resalta su contorno y abre el menú contextual del mapa.*


### Seleccionar ruta {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menú de seguimiento de contexto Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Seguimiento de pantalla de estadísticas iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Al tocar una [pista GPX](../map/tracks/index.md) en el mapa, se abre el [menú contextual de la pista](../map/tracks/track-context-menu.md), donde puedes acceder a opciones adicionales relacionadas con la pista.


### Ocultar menú contextual {#hide-context-menu}

Para cerrar el **menú contextual**:

- Toca cualquier *área vacía* en el mapa para evitar reabrir el menú.
- Arrastra el menú *hacia abajo* desde la parte superior.


## Detalles {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menú contextual Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Para obtener información más detallada sobre un objeto, toca el botón **Detalles** en el menú contextual o desliza el panel hacia arriba para expandirlo.


### Información del objeto {#object-info}

El panel de **Información del objeto** proporciona detalles adicionales sobre el objeto seleccionado. Puedes tocar cualquier entrada para copiar la información al portapapeles.  

Los detalles disponibles incluyen:

- [Nombres alternativos](#alternative-names)
- [Coordenadas](../map/map-context-menu.md#coordinates)
- [PDI cercanos / Wikipedia](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Rutas de transporte público](../map/map-context-menu.md#public-transport-routes) (para paradas de transporte)
- [Favoritos / Puntos de seguimiento del mismo grupo](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Enlace de OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Imagen / descripción del artículo](../map/map-context-menu.md#article-description-article-description)
- [Fotos en línea](../map/map-context-menu.md#online-photos)

Además, el panel puede incluir [Detalles de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), como:

- [Sitio web](https://wiki.openstreetmap.org/wiki/Key:website)
- [Número de teléfono](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Horario de apertura](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Tarifa](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Accesibilidad](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Ancho](https://wiki.openstreetmap.org/wiki/Key:width) / [Alto](https://wiki.openstreetmap.org/wiki/Key:height)


### Nombres alternativos {#alternative-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Nombres alternativos Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Nombres alternativos Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nombres alternativos Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Nombres alternativos Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd muestra **nombres de PDI adicionales** en el *menú contextual del mapa*, priorizando el nombre en el *idioma de visualización* o en la lista de idiomas preferidos del sistema. Si hay varias traducciones disponibles, se agrupan en etiquetas categorizadas como *nombre, marca, operador* o *PDI cercanos*.  

Características de la visualización de nombres alternativos:

- Se puede acceder a traducciones adicionales a través de una *lista desplegable*.

- Los nombres se clasifican en diferentes grupos, como la *lista de nombres en otros idiomas*, *Regional*, *Local*, *Nacional*, *Internacional*, *Corto*, *Antiguo*, *Oficial* y *Alternativo*.

- Otras categorías incluyen *traducción específica de la región* o *configuración predeterminada*.

- Si una traducción específica *no está disponible*, OsmAnd recurre al nombre **local** para garantizar la precisión y la coherencia en regiones multilingües.


### Información del polígono {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Información del polígono Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Información del polígono Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

La función **Información del polígono** proporciona datos detallados sobre los **polígonos** cercanos que se muestran en el mapa. Esto incluye características geográficas, límites administrativos y otras áreas mapeadas.  

**Dentro de la sección**:

- Muestra una *lista de polígonos circundantes*, ordenados *de menor a mayor* según el tamaño del área.

- Cada entrada muestra el *tipo y nombre del polígono*, lo que permite una fácil identificación de regiones y límites.

**Detalles adicionales**:

- Al seleccionar un punto en el mapa o un PDI, el panel de **información del polígono** muestra una lista de todos los polígonos que contienen la ubicación seleccionada.

- Las entradas de la lista incluyen **divisiones administrativas, áreas de uso del suelo, características naturales y otras regiones categorizadas**.

- El panel permite a los usuarios **copiar el nombre y los detalles del polígono** como referencia.

- Para ver esta información, ve a *Menú contextual del mapa → Detalles → Dentro*.

Esta función te ayuda a comprender tu *ubicación actual* en relación con las divisiones administrativas mapeadas, las áreas naturales u otras características geográficas importantes.


### Coordenadas {#coordinates}

|Formato de coordenadas| |
|:------|:------|
| <ul><li>DDD.DDDDD (grados decimales simples)</li><li>DDD.DDDDD (N/S, E/O coma)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Estándar](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Código de ubicación abierta](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Cuadrícula suiza CH1903 y CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Enlace web de OsmAnd](https://osmand.net/map)</li><li>[Enlace web de OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordenadas](@site/static/img/map/map_context_menu_Coordinates.png) |

En el menú contextual, puedes encontrar [coordenadas geográficas](../search/search-coordinates.md#coordinate-format) de un punto en varios formatos y también enlaces compartibles de OsmAnd y [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link) (la última opción solo está disponible cuando el [plugin de edición de OpenStreetMap](../plugins/osm-editing.md) está habilitado). Si expandes la sección de coordenadas y mantienes pulsada cualquier línea de la lista, sus valores se copiarán automáticamente al portapapeles (**Android**) o la opción *Copiar* estará disponible en el mensaje emergente (**iOS**).  

El enlace web de OsmAnd puede ser reconocido automáticamente por OsmAnd (ejemplo: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Tanto los enlaces de OsmAnd como los de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) se abren en los sitios correspondientes con un marcador de ubicación en el lugar de interés.  


### PDI cercanos / Wikipedia {#nearby-pois--wikipedia}

![Artículos cercanos de Wikipedia](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Artículos cercanos de Wikipedia](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Estas secciones muestran [artículos de Wikipedia](../plugins/wikipedia.md) o [Puntos de Interés (PDI)](../map/point-layers-on-map.md#points-of-interest-pois) cercanos con *<Translate android="true" ids="shared_string_show_on_map"/>* y *<Translate android="true" ids="search_more"/>* para mostrar y [buscar](../search/search-poi.md) todos los demás PDI y artículos de Wikipedia.

Al tocar *PDI cercanos / Artículos de Wikipedia* se abre una lista de puntos (PDI o Wikipedia). Al tocar uno de estos puntos de la lista, el mapa se mueve a este punto (PDI o Wikipedia) abriendo el menú contextual del mapa del punto.

> **NOTA**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) solo aparecerá si previamente has descargado mapas especiales con [artículos de Wikipedia para esta área](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### Rutas de transporte público {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Rutas de transporte público Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Rutas de transporte público iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Se muestra información sobre las rutas de transporte público para la parada de transporte elegida. Para obtener información sobre el menú contextual de transporte público y las acciones con él, consulta el [artículo](../map/public-transport.md#transport-routes-context-menu).


### Favoritos / Puntos de seguimiento del grupo {#favorites--track-points-from-the-group}

![Lista de favoritos](@site/static/img/map/favorite_list_android.png) ![Lista de favoritos completa](@site/static/img/map/favorite_list_full_android.png)

Esta es una lista de todos los puntos de un grupo para un Favorito o un Punto de Ruta. Al tocar, se expande la lista completa de puntos de un grupo; al tocar un punto de la lista, el mapa se mueve al punto seleccionado.


### Objeto lineal {#linear-object}

![Lista de favoritos](@site/static/img/map/linear_object_andr.png)

Para **objetos lineales**, como *barreras, escalones, puertas, bancos, rampas, presas, bolardos o cortafuegos*, el menú contextual muestra detalles adicionales. Estos incluyen el tipo de PDI y la dirección asociada a ellos, o el tipo de objeto si no se asigna ningún nombre.


### Detalles de la zona de escalada y el peñasco {#climbing-area-and-crag-details}

![Lista de favoritos](@site/static/img/map/climbing_andr.png)

Al seleccionar una [zona de escalada o un peñasco](../map/routes.md#climbing-routes), OsmAnd proporciona un resumen detallado de la ubicación de escalada, que incluye: nombre y ubicación, clasificación de dificultad de escalada (UIAA, francés, YDS, etc.), tipo de roca, altura y longitud de la ruta, calidad de la escalada y condiciones de la superficie.


### Pistas de esquí, rutas de MTB y senderos para motos de cross {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Pistas de esquí y senderos de MTB](@site/static/img/map/ski_mtb.png)  ![Pistas de esquí y senderos de MTB](@site/static/img/map/ski_mtb_2.png)

Puedes tocar elementos del mapa como **pistas de esquí**, **rutas de bicicleta de montaña (MTB)** y **senderos para motos de cross** para abrir su menú contextual con información detallada. La información disponible incluye: nombre de la ruta o pista (si está disponible en los datos de OSM), ID de objeto o ID de relación de OSM, nivel de dificultad, longitud del sendero, tipo de terreno y más.

**Etiquetas admitidas:** `piste:type=*` (pistas de esquí), `route=mtb`, `route=atv` o `route=dirt_bike` (senderos todoterreno para motocicletas)

:::note
Utiliza los estilos de mapa [Invierno y esquí](../map/vector-maps.md#winter-and-ski) o [Todoterreno](../map/vector-maps.md#offroad) para una mejor visibilidad.
:::


### Descripción del artículo {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Lista de descripción](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Lista de descripción](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Esta parte contiene una parte de la descripción del [artículo de Wikipedia](../plugins/wikipedia.md), [Favorito](../personal/favorites.md) o descripción de Punto de Ruta; al tocarla, puedes abrir la descripción completa.


### Enlace de OpenStreetMap {#openstreetmap-link}

![Enlace OSM](@site/static/img/map/context_menu_osm_link.png) ![Enlace OSM](@site/static/img/map/context_menu_osm_link_1.png)

El enlace de OpenStreetMap proporciona un enlace directo al objeto de OpenStreetMap donde puedes encontrar información completa sobre él:  
[nodo](https://wiki.openstreetmap.org/wiki/Node) o [vía](https://wiki.openstreetmap.org/wiki/Way).


### Fotos en línea {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menú contextual de fotos en línea Android](@site/static/img/map/images_nearby_1_andr.png)
![Menú de la galería Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual de fotos en línea iOS](@site/static/img/map/online_photo_ios.png)
![Menú de la galería iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Cuando tocas un Lugar Popular en el mapa, la sección **Fotos en línea** en el *menú contextual de PDI* muestra previsualizaciones de imágenes obtenidas de [Wikipedia](https://www.wikipedia.org/) y [Wikimedia Commons](https://www.wikimedia.org/).

Al tocar una foto, se abre la vista de **Galería**, donde puedes:

- Navegar hasta 100 imágenes por lugar
- Ver metadatos de la imagen (*autor*, *licencia*, *fuente*)
- Realizar acciones: **Compartir**, **Abrir en el navegador**, **Descargar**

> *En iOS, al mantener pulsada una imagen, se abre un menú contextual con acciones rápidas.*

Para más información, consulta: [Fotos en línea](https://osmand.net/docs/user/map/popular_places#online-photos) y [Vista de galería](https://osmand.net/docs/user/map/popular_places#gallery)


### Imágenes a nivel de calle {#street-level-imagery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Imágenes a nivel de calle Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Imágenes a nivel de calle iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd es compatible con la integración de [Mapillary](https://www.mapillary.com/), una plataforma global de imágenes a nivel de calle obtenidas mediante crowdsourcing. Esta función te permite ver y explorar secuencias de fotos del mundo real directamente en el mapa.

Las imágenes de Mapillary aparecen como iconos de fotos direccionales, alineados con la carretera o el camino donde fueron capturadas. Esto puede ayudarte a comprender mejor tu entorno, especialmente en áreas desconocidas.

Puedes:

- Usar el botón **Explorar** para abrir el visor de Mapillary y navegar por las imágenes a nivel de calle cercanas.
- Tocar el botón **Añadir fotos** para contribuir con tus propias fotos a la plataforma Mapillary.

> *Obtén más información sobre cómo activar y usar esta función en la [guía del plugin de Mapillary](../plugins/mapillary.md).*


### * Nota de audio/vídeo {#-audiovideo-note}

<InfoAndroidOnly />

![Lista de imágenes](@site/static/img/map/image_list_android.png) ![Lista de vídeos](@site/static/img/map/video_list_android.png)

La información de las [notas de audio/vídeo](../plugins/audio-video-notes.md), como la fecha, las coordenadas, la vista previa y otros datos, está disponible en el menú **Detalles**. Puedes abrir las notas en un software secundario tocando el botón **Reproducir/Mostrar** en el menú contextual de la nota.


## Acciones {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Menú de acciones Android](@site/static/img/map/actions_menu_android.png) ![Menú adicional de acciones Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de acciones iOS](@site/static/img/map/actions_menu_ios.png)  ![Menú adicional de acciones iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Es un conjunto de manipulaciones específicas que se pueden realizar sobre un punto u objeto. Este menú se divide en dos partes: la sección visible consta de un máximo de 3 acciones y otras acciones son accesibles mediante el botón *Acciones*. Puedes personalizar (*Android*) el orden de las acciones en [Configuración general](#customize).


### Añadir / Editar favorito {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Añadir acción de edición de favoritos Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Añadir acción de edición de favoritos iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

En el menú contextual, hay opciones para **añadir** o **editar** el punto/objeto seleccionado a la [lista de favoritos](../personal/myplaces.md).

- Para **añadir**, debes seleccionar un punto/objeto, tocar el icono de *estrella* (con la firma Añadir) e introducir toda la información necesaria.  

- Para **editar** la información sobre un punto favorito, debes activar *Mostrar en el mapa* (*Menú → Mis lugares → Favoritos*) y luego pulsar sobre él. En el menú contextual, en lugar del icono de *estrella*, aparecerá un *icono de lápiz* (con la firma Editar).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - añade un punto seleccionado a la lista de favoritos.


### Añadir / Editar marcador {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Añadir acción de edición de marcador Android](@site/static/img/map/add_marker_android.png) ![Acción de marcador de paso Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Añadir acción de edición de marcador iOS](@site/static/img/map/add_marker_ios.png)  ![Restaurar acción de marcador Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Es posible marcar un punto o un objeto para facilitar la planificación de la navegación. Solo tienes que tocar el icono de la **bandera** en el menú (*Android*), la **flecha** (*iOS*) - muestra la dirección y la distancia al punto seleccionado desde tu ubicación actual.

Acciones:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Coloca un nuevo marcador en el punto seleccionado.
- **Marcar como pasado** (*Android*) / *Descartar* (*iOS*). Desactiva el marcador y lo guarda en el Historial.
- **Activar** (*Android*). Mueve el marcador a la posición superior (en el panel superior).
- **Restaurar marcador** (*Android*). Mueve el marcador del Historial a la lista activa.

Lee más sobre los [marcadores aquí](../personal/markers.md).


### Compartir {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

| Versiones hasta Android 14 | Android 14+ |
|:------------|:---------------|
| ![Acción de compartir Android](@site/static/img/map/action_share_1_andr.png) | ![Acción de compartir Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción de compartir iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

La aplicación OsmAnd te permite **<Translate android="true" ids="shared_string_share"/>** *Mi ubicación* o cualquier ubicación seleccionada en el mapa con mensajería, correos electrónicos o redes sociales.  

Opciones disponibles para compartir la ubicación:

- ***Enviar***. Envía texto a través de las aplicaciones disponibles en tu dispositivo. Incluye toda la información sobre la ubicación: el nombre de Mi ubicación o el nombre del PDI seleccionado, la dirección, las coordenadas y la geolocalización como un enlace.
- ***Copiar***. Copia toda la información de la ubicación (el nombre de Mi ubicación o el nombre del PDI seleccionado, la dirección, las coordenadas y la geolocalización como un enlace) al portapapeles.  
- ***Copiar dirección***. Copia solo la información de la dirección al portapapeles.
- ***Copiar nombre de PDI***. Copia solo el nombre del PDI o la dirección si no hay nombre al portapapeles.
- ***Copiar coordenadas***. Copia solo la información de las coordenadas al portapapeles.
- ***geo***. Abre una lista de aplicaciones disponibles que admiten geolocalizaciones. <!-- (información sobre [URL geo Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***Código QR*** (*Android*). Genera un enlace a la ubicación seleccionada en un código QR.

<!--
- ***Guardar imagen*** (*iOS*) - guarda una captura de pantalla con el mapa y el punto seleccionado en la galería de imágenes.
- ***Asignar a contacto*** (*iOS*) - crea un icono para el contacto elegido a partir de la captura de pantalla del mapa.
- ***Imprimir*** (*iOS*) - abre las opciones de impresora para imprimir la captura de pantalla del mapa.
- ***Guardar en archivos*** (*iOS*) - guarda la captura de pantalla del mapa en iCloud Drive o en el almacenamiento de tu dispositivo. -->


### Direcciones a / desde {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Direcciones Android](@site/static/img/map/action_directions_android.png)

![Múltiples direcciones Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Direcciones iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Para iniciar la navegación o la planificación de rutas, primero debes seleccionar el destino con [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). En caso de que ya tengas un punto de destino, el menú te sugerirá reemplazar el punto de destino o insertarlo como otro punto intermedio o de inicio.

También es posible seleccionar *Desde* Destino primero a través del menú contextual del mapa (<Translate android="true" ids="context_menu_item_directions_from"/>).

Lee más sobre la [navegación aquí](../navigation/setup/route-navigation.md).

:::note Tocar Iniciar navegación
Si tocas **Iniciar navegación**, el punto *Desde* se descartará, ya que la aplicación entrará en modo de navegación. Para conservar una ruta, no toques *Iniciar navegación* y [**desliza hacia abajo**](#hide-context-menu) el menú *Preparación de ruta*.
:::


### Buscar cerca {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción de búsqueda Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción de búsqueda iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

Con esta acción del menú contextual, es posible buscar alrededor de una ubicación específica en el mapa.  

Lee más sobre la funcionalidad de [búsqueda](../search/index.md).


### Evitar carretera {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Evitar carretera en el mapa Android](@site/static/img/map/action_avoid_android.png) ![Descartar carretera evitada Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Evitar carretera en el mapa iOS](@site/static/img/map/avoid_route_ios_1.png) ![Descartar carretera evitada iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Usando el menú contextual del mapa, puedes añadir una carretera específica a la lista de carreteras no utilizadas para el enrutamiento. Esto afectará la [preparación de la ruta](../navigation/setup/route-navigation.md).  
Para eliminar carreteras previamente seleccionadas de la *[lista de carreteras a evitar](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, toca un signo, elige *Eliminar* (**Android**) o *Descartar* (**iOS**).

:::note
La función de evitar carreteras es global y afecta a todos los *[tipos de enrutamiento](../navigation/routing/osmand-routing.md#routing-types)* (excepto el *[enrutamiento en línea](../navigation/routing/online-routing.md)*).  
:::


### Cambiar posición del objeto {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción Cambiar posición Android](@site/static/img/map/action_change_position_android.png)

![Acción Cambiar interfaz de usuario de posición Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Cambiar posición iOS](@site/static/img/map/action_change_position_ios.png)

![Acción Cambiar interfaz de usuario de posición iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Casi todos los objetos creados por el usuario son móviles, es decir, Marcador, Favorito, PDI creado, Nota de audio/vídeo o Punto de ruta de seguimiento. Primero selecciona un objeto en el mapa y luego usa *<Translate android="true" ids="change_markers_position"/>* el menú para moverlo a una nueva ubicación.


### Planificar una ruta {#plan-a-route}

![Acción Planificar una ruta Android](@site/static/img/map/action_plan_route_android.png)

Puedes iniciar la planificación de una ruta desde un punto seleccionado a través del menú contextual del objeto.

Lee más sobre la herramienta [Planificar una ruta](../plan-route/create-route.md).


### Actualizar / Descargar mapas en línea {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción Descargar mapa en línea Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Descargar mapa en línea iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Para actualizar o descargar mapas en línea (mosaicos) en una ubicación específica, puedes usar el menú contextual del objeto:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* y para *Actualizar*, ve a: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* y *<Translate ios="true" ids="update_tile"/>*.  

Por favor, lee la [instrucción completa](../map/raster-maps.md#download--update-tiles).  


### Actualizar / Descargar mapas vectoriales {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción Descargar mapa vectorial Android](@site/static/img/map/action_download_vector_map_android.png)

![Seleccionar mapa vectorial mundial en Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Descargar mapa vectorial iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Seleccionar mapa vectorial en iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

En caso de que no haya un mapa sin conexión presente en la ubicación seleccionada, por ejemplo, el menú del objeto del mapa se abrió a través de la búsqueda o a través de un favorito específico, se sugerirá el mapa sin conexión más pequeño posible para [descargar](../start-with/download-maps.md#select-on-the-map).  

**iOS**. Si ya has [descargado](../map/map-context-menu.md) mapas de OsmAnd (vectoriales o de terreno), es posible actualizarlos a través del menú contextual. Primero deberás seleccionar la región en el mapa; toca cualquier ubicación en el zoom mundial 3-7.  

> **NOTA**. *Si has abierto el menú contextual para una región del mapa (la región está resaltada), podrás ver ***<Translate android="true" ids="rendering_category_details"/>*** sobre ella: tipo y tamaño de un mapa disponible, enlace a una página de Wikipedia, idioma, población y otros.*


### * Añadir / Eliminar punto de estacionamiento {#-add--delete-parking-point}

:::note
Para añadir/eliminar puntos de estacionamiento, habilita el [**plugin de posición de estacionamiento**](../plugins/parking.md) de OsmAnd.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción de estacionamiento Android](@site/static/img/map/action_parking_android.png)

![Acción Eliminar estacionamiento Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción de estacionamiento iOS](@site/static/img/map/action_parking_ios.png)

![Acción Eliminar estacionamiento iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Cualquier ubicación seleccionada en el mapa podría marcarse como [una posición de estacionamiento](../plugins/parking.md). Para eliminar una posición de estacionamiento, puedes abrir el menú contextual asociado a la ubicación de estacionamiento.


### * Añadir / Editar punto de ruta de seguimiento {#-add--edit-track-waypoint}

:::note
Para añadir/editar puntos de seguimiento, habilita el [**plugin de grabación de viajes**](../plugins/trip-recording.md) de OsmAnd.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción de punto de ruta Android](@site/static/img/map/action_waypoint_android.png)

![Seleccionar seguimiento para añadir punto de ruta Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción de punto de ruta iOS](@site/static/img/map/action_waypoint_ios.png)

![Seleccionar seguimiento para añadir punto de ruta iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Puedes añadir puntos de ruta a una pista grabada o a la grabación de la pista actual utilizando el menú contextual del mapa.  

- Selecciona una ubicación en el mapa con un [toque largo](../map/map-context-menu.md#select-any-point-long-tap).
- En el *menú contextual del mapa* que se abre, elige *Acciones → Añadir punto de ruta de seguimiento*.
- La lista muestra las [pistas](../map/tracks/index.md#display-tracks-on-the-map) grabadas y mostradas en el mapa, así como la [grabación de la pista actual](../plugins/trip-recording.md), a la que puedes añadir el punto de ruta seleccionado.
- Puedes añadir puntos de ruta a una pista que aún no está activa para la grabación, en cuyo caso la pista inactiva cambia del *estado de inicio* al *estado de reanudación*.
- [Rellena](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) los datos requeridos y guarda el punto de ruta.
- Puedes configurar las [Acciones rápidas](../widgets/quick-action.md) añadiendo un punto de ruta a *Añadir punto de ruta de seguimiento*.


### * Crear / Modificar PDI {#-create--modify-poi}

:::note
Para añadir/crear/modificar PDI, habilita el [**plugin de edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción PDI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción PDI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

Con el plugin de edición de OSM, puedes crear y modificar la mayoría de los PDI presentes en [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [crea un nuevo PDI](../plugins/osm-editing.md#create--modify-poi) en la ubicación seleccionada.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifica el PDI seleccionado](../plugins/osm-editing.md#create--modify-poi).


### * Abrir nota de OSM {#-open-osm-note}

:::note
Para añadir una nota de OSM, habilita el [**plugin de edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Acción Nota Android](@site/static/img/map/action_note_android.png)

![Acción Añadir nota Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Acción Nota iOS](@site/static/img/map/action_note_ios.png)

![Acción Añadir nota iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Puedes **informar** de errores en los datos del mapa en una ubicación específica a la [comunidad de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Sigue las [directrices](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) y añade comentarios adecuados a un problema.


### * Comentar / Cerrar nota de OSM {#-comment--close-osm-note}

:::note
Para comentar/cerrar una nota de OSM, habilita el [**plugin de edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

![Comentar nota de OSM Android](@site/static/img/map/action_comment_note_android.png) ![Reabrir nota de OSM Android](@site/static/img/map/action_reopen_note_android.png)

Puedes [comentar](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolver](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) y reabrir
Notas de OpenStreetMap a través del menú contextual del objeto.


### * Subir PDI / Nota de OSM {#-upload-poi--osm-note}

:::note
Para subir PDI / nota de OSM, habilita el [**plugin de edición de OSM**](../plugins/osm-editing.md) de OsmAnd.
:::

![Subir PDI Android](@site/static/img/map/action_poi_upload_android.png) ![Subir nota de OSM Android](@site/static/img/map/action_note_upload_android.png)

En caso de que uses el *modo sin conexión* para añadir/editar un PDI o una nota de OSM, deberás subir los cambios a OpenStreetMap. Por defecto, el *modo sin conexión* está activado para evitar cambios accidentales en la base de datos pública. Puedes subir o eliminar cambios a través del menú contextual del objeto creado.


### * Grabar nota AV {#-record-av-note}

<InfoAndroidOnly />

:::note
Para grabar notas de audio/vídeo, habilita el [**plugin de notas de audio/vídeo**](../plugins/audio-video-notes.md) de OsmAnd.
:::

![Acción de audio-vídeo Android](@site/static/img/map/action_av_note_android.png)

Graba o toma una nota multimedia en un punto seleccionado del mapa.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - crea una [nota de audio](../map/point-layers-on-map.md#-audio--video-points-android) en el punto seleccionado (crea un nuevo punto en la superposición con el icono de audio).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - crea una [nota de vídeo](../map/point-layers-on-map.md#-audio--video-points-android) en el punto seleccionado (crea un nuevo punto en la superposición con el icono de vídeo).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - crea un [punto de foto](../map/point-layers-on-map.md#-audio--video-points-android) en el mapa.


## Personalizar {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Menú contextual del mapa Personalizar](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Menú contextual del mapa Personalizar](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Menú contextual del mapa Personalizar](@site/static/img/map/map_context_menu_customize_3.png)

Puedes cambiar el orden u ocultar elementos del menú *Acciones* en el *menú contextual del mapa*. Se sugieren un total de 16 acciones.  

- Puedes mover las tres acciones más útiles a la parte superior de la lista de *Acciones principales*.
- El resto del menú se puede personalizar para cada perfil por separado en las secciones *Acciones adicionales* y *Ocultas*.  

Tipos de acciones disponibles:

- **<Translate android="true" ids="main_actions"/>**. La sección solo tiene 4 botones, tres de los cuales se pueden personalizar, y Acciones, que permanece sin cambios.  
- **<Translate android="true" ids="additional_actions"/>**. Puedes acceder a estas acciones tocando el botón *Acciones*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Mover acciones a esta sección no impide que funcionen. Simplemente no aparecen en el menú Acciones.  


## Artículos relacionados {#related-articles}

- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas raster (En línea / Sin conexión)](./raster-maps.md)
- [Puntos en el mapa](./point-layers-on-map.md)
- [Menú contextual de pistas](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)
- [Importar / Exportar](../personal/import-export.md)
- [Esquemas de paleta de colores](../personal/color-palette-schemes.md)

> *Última actualización: junio de 2025*