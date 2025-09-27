---
source-hash: 4924a1de13b954b832f4629a3e8dfc661ee5ce9339fd94fad9ab53e8ec18a4cc
sidebar_position: 9
title:  Edición de OpenStreetMap
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Resumen {#overview}

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) es una comunidad global que tiene como objetivo crear un mapa geográfico detallado y gratuito del mundo y proporcionar datos de código abierto actualizados a cada usuario. El plugin de edición de OpenStreetMap le permite contribuir a la comunidad.

Con OsmAnd y el plugin de edición de OSM, puede contribuir fácilmente con su propia información a OpenStreetMap.org, como crear o modificar [PDI](#create--modify-poi), añadir o comentar [notas](#create--modify-osm-note), y subir [tracks](#upload-gps-track) GPX grabados.

## Parámetros de configuración requeridos {#required-setup-parameters}

Para utilizar el plugin *Edición de OpenStreetMap*, debe realizar los siguientes ajustes:

1. Activar el [Plugin](../plugins/index.md#enable--disable).
2. Configurar la edición de OpenStreetMap en cualquier [perfil](../personal/profiles.md).
3. Activar la visualización de *Notas OSM (en línea)* o *Ediciones OSM* en el mapa en el [menú Configurar mapa](../map/configure-map-menu).


## Ajustes {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![Ajustes del plugin de edición de OpenStreetMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![Ajustes del plugin de edición de OpenStreetMap iOS](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Los ajustes del plugin son globales y se aplican a todos los perfiles.
:::

- [Iniciar sesión en OpenStreetMap](#authorization). Inicie sesión para subir cambios nuevos o modificados. Utilice el método seguro *OAuth 2.0* o [inicie sesión en el sitio de OSM](https://www.openstreetmap.org/login). Para iOS, el botón para el método OAuth solo está disponible para usuarios con una versión compatible de iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Si esta opción está activada, los cambios se guardan primero localmente (botón *Guardar*) y se suben a petición. Si la opción está desactivada, los cambios se suben inmediatamente (botón *Subir*).
- **<Translate android="true" ids="use_dev_url"/>** *(solo Android)*. Le permite activar [dev.openstreetmap.org](https://dev.openstreetmap.org/) en lugar de [openstreetmap.org](http://openstreetmap.org/) para probar la subida de Notas OSM, PDI o tracks GPS. Cuando está activado, se cierra automáticamente la sesión de OpenStreetMap.org. Esta opción solo está disponible en la lista cuando el *plugin de desarrollo de OsmAnd* está activado.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Púlselo para abrir [*Menú → Mis lugares → Ediciones OSM*](../personal/myplaces.md). Esta pestaña enumera sus notas OSM no editadas. Las siguientes acciones están disponibles con la nota: *Subir*, *Mostrar en el mapa*, *Modificar nota OSM*, *Eliminar*. Las notas subidas o eliminadas ya no se muestran en la lista.

:::note
Si tiene una suscripción a [OsmAnd Pro](../purchases/android.md#pro-features), los cambios realizados en OSM aparecerán en su mapa de OsmAnd en una hora. Asegúrese de que las [Actualizaciones en vivo](../personal/maps-resources.md#live-updates) están activadas.
:::


### Autorización {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Inicie sesión para contribuir con cambios y archivos GPX.

- Vaya a [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *inicie sesión* o *regístrese*.
- Pulse el campo *Iniciar sesión en OpenStreetMap* en la aplicación OsmAnd, luego pulse el botón *Iniciar sesión con OpenStreetMap*.


### Actualizaciones de mapas gratuitas para mapeadores {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd en vivo para mapeadores](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

El ajuste <Translate android="true" ids="map_updates_for_mappers"/> le permite activar **[actualizaciones en vivo](../personal/maps-resources.md#free-for-osm-mappers)** si es un contribuyente activo de OpenStreetMap. De esta manera, puede disfrutar de actualizaciones de mapas por hora gratuitas, a diferencia de las actualizaciones mensuales estándar. Los contribuyentes activos de OpenStreetMap.org pueden tener derecho a actualizaciones de mapas por hora ilimitadas. Inicie sesión en OpenStreetMap para verificar su elegibilidad para actualizaciones de mapas mensuales y por hora ilimitadas.


### Capa de edición de OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![Capa de edición de OSM Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![Capa de edición de OSM Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![Capa de edición de OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Puede activar o desactivar como una capa separada la visualización de modificaciones de OSM como *Notas OSM* (en línea), *Ediciones OSM*, *Etiquetas Fixme*, *Etiquetas de nota*, *Iconos a bajos niveles de zoom*, en la sección [Configurar mapa](../map/configure-map-menu.md) del *Menú Principal*.


## Crear / Modificar PDI {#create--modify-poi}

El plugin de edición de OpenStreetMap le permite crear nuevos objetos en el mapa llamados [puntos de interés o PDI](../map/point-layers-on-map.md#points-of-interest-pois). Puede mapear una nueva tienda, un punto de referencia favorito, un banco o un refugio para que la gente pueda encontrarlos.

1. Pulse el mapa para colocar un nuevo PDI, o pulse un PDI que aún no se haya cargado.
2. Pulse [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
3. Elija [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), y añada su nombre y otra información como el horario de apertura, el sitio web, etc. Cuando selecciona un PDI no subido, *Crear PDI* cambia a *Modificar PDI*.
4. Dependiendo del ajuste [Edición sin conexión](#settings), puede guardar los datos localmente o [subirlos](../map/map-context-menu#-upload-poi--osm-note).


### Añadir etiquetas {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir etiqueta de PDI Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Añadir etiqueta de PDI Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Añadir etiqueta de PDI iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Puede añadir fácilmente [etiquetas](https://wiki.openstreetmap.org/wiki/Tags) de OSM al PDI. Cuando introduce varios caracteres en la barra de búsqueda, el programa sugiere posibles etiquetas.

**Modificaciones sin conexión.**
Puede ver, subir a OSM o eliminar PDI en *Mis Lugares → Ediciones OSM*. También puede exportar sus cambios de PDI a un [archivo OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importarlo a [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Añadir tipos de PDI no soportados {#add-unsupported-poi-types}

En la pestaña *Avanzado*, puede añadir tipos de PDI no soportados que pueden ser útiles para su tarea específica. Esta opción le permite introducir datos de PDI manualmente, ampliando así la funcionalidad de la aplicación.

Un ejemplo de tipos de PDI no soportados que puede añadir es *amenity=freeshops*. Este tipo puede ser útil si desea marcar tiendas gratuitas o lugares que ofrecen productos gratuitos.

Para añadir tipos de PDI no soportados, siga estos pasos:

1. Abra la pestaña *Avanzado*.
2. Pulse en *Tipo de PDI*.
3. Introduzca la clave *amenity* y el valor *freeshops* en los campos correspondientes.
4. Rellene el resto de los datos necesarios para este PDI.
5. Pulse *Añadir etiqueta* para añadir el nuevo PDI a su base de datos.

Recuerde que al añadir tipos de PDI no soportados, es importante asegurarse de que los datos se introducen correctamente para garantizar el correcto funcionamiento de la aplicación y el posterior procesamiento de la información.


## Crear / Modificar Nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Abrir Nota OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Abrir Nota OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Para editar, comentar o cerrar notas de OSM, active su visualización en el mapa en el [menú Configurar mapa](../map/configure-map-menu.md).

- La función Notas OSM le permite añadir notas al mapa. En estas notas, puede describir errores o escribir sobre información que falta en los datos de OpenStreetMap. Usted y otros usuarios pueden dejar comentarios en sus notas.
- Puede ayudar a otros usuarios revisando sus preguntas o problemas, haciendo comentarios y luego cerrando las notas resueltas.
- Lea más sobre las Notas de OpenStreetMap [aquí](https://wiki.openstreetmap.org/wiki/Notes).

Para crear una nota, no necesita iniciar sesión en OpenStreetMap.org, puede enviarla de forma anónima.

- Pulse el mapa donde se va a colocar la nueva nota de OSM (o pulse una nota no subida) y seleccione [Acciones](../map/map-context-menu.md#actions).
- Si desea añadir información a una nota existente o a una nota no subida, editar un comentario o cerrar una nota, pulse la nota de OSM en el mapa y seleccione la [acción requerida](../map/map-context-menu.md#-comment--close-osm-note).
- Puede subir los cambios tan pronto como esté disponible en línea. También puede deshacer los cambios antes de que se suban.

:::info
Las Notas OSM subidas no son visibles en los mapas de OsmAnd en modo sin conexión.
:::


## Track GPS {#gps-track}

Los tracks GPS que ha grabado son útiles para:

- **Mapeadores**. Los tracks se pueden utilizar para mapear todo tipo de caminos.
- **Navegación**. Basándose en los datos del archivo GPX que ha subido, las aplicaciones de navegación y los dispositivos especiales pueden calcular tracks.
- **Para compartir información** sobre los tracks y rutas que ha grabado en [mapas basados en OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTA
Sus tracks se añadirán a los [trazados de OSM](https://www.openstreetmap.org/traces) en una hora, donde estarán disponibles para que usted y otros los vean, busquen y utilicen.
:::


### Subir track GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plugin de edición de OpenStreetMap GPX a OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plugin de edición de OpenStreetMap GPX a OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Para [subir el track GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), siga los pasos a continuación:

- Encuentre el track requerido en la pestaña *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Pulse el *menú de tres puntos* junto al nombre del track y seleccione *Exportar*.

**Ajustes:**

- **<Translate android="true" ids="shared_string_description"/>**. Le permite añadir una descripción al track. La descripción se aplica a todos los tracks seleccionados. Si no introduce nada en el campo, los nombres de los tracks para cada track por separado se utilizan como descripciones.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Este elemento en la sección de ajustes le permite añadir etiquetas para identificar el track. La etiqueta por defecto es "osmand", puede introducir etiquetas adicionales separadas por comas.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilidad del track para los usuarios de OSM:
   - *Público* significa que el track está disponible públicamente y se muestra en formato bruto en sus tracks GPS, listas de tracks GPS y listas de tracks con marca de tiempo. Los datos transmitidos a través de la API no se referencian con su página de track. Las marcas de tiempo de los puntos del trazado no están disponibles a través de la API pública de GPS y los puntos del track no están ordenados cronológicamente.
   - *Identificable* significa que el track se mostrará públicamente en sus puntos de track GPS y en las listas públicas de tracks GPS, lo que significa que otros usuarios podrán descargar el track en bruto y asociarlo con su nombre de usuario. Los datos de los puntos de track con marca de tiempo públicos de la API de GPS pasados a través de la API de puntos de track enlazarán a su página de track original.
   - *Rastreable* significa que el track no se muestra en las listas públicas, pero los puntos del track procesados con marcas de tiempo (que no se pueden vincular directamente con usted) se cargan desde la API pública de GPS.
   - *Privado* significa que el track no se muestra en las listas públicas, pero los puntos del track en orden no cronológico están disponibles a través de la API pública de GPS sin marcas de tiempo.
- **<Translate android="true" ids="login_account"/>** - [Cuenta de OSM](https://www.openstreetmap.org/login).

:::info
Puede seleccionar más de un track para subir a OSM. Para ello, pulse el icono *Subir a OpenStreetMap* en la parte inferior de la pantalla, seleccione los tracks mediante la casilla de verificación, pulse *Subir* y luego *Continuar*.
:::

### Generar archivo OBF {#generate-obf-file}

Puede crear un archivo OBF con [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) si tiene una gran base de datos de tracks GPX. Esta es una colección de tracks de osmand.net con la etiqueta 'gpsies', una colección de tracks descargados de OpenStreetMap o su propia colección.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)