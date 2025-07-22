---
source-hash: 44618d2a28205f83a5a0d07741bf7f6948d9ca1354f8bc8546bcb8ce70d1114e
sidebar_position: 9
title: Edición de OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) es una comunidad global que tiene como objetivo crear un mapa geográfico detallado y gratuito del mundo y proporcionar datos de código abierto actualizados a cada usuario. El complemento de edición de OpenStreetMap te permite contribuir a la comunidad.

Con OsmAnd y el complemento de edición de OSM, puedes contribuir fácilmente con tu propia información a OpenStreetMap.org, como crear o modificar [PDI](#create--modify-poi), añadir o comentar [notas](#create--modify-osm-note), y subir [trazas] GPX grabadas (#upload-gps-track).

## Parámetros de configuración requeridos {#required-setup-parameters}

Para usar el complemento *Edición de OpenStreetMap*, debes realizar las siguientes configuraciones:

1. Habilitar [Complemento](../plugins/index.md#enable--disable).
2. Configurar la edición de OpenStreetMap en cualquier [perfil](../personal/profiles.md).
3. Habilitar la visualización de *notas OSM (en línea)* o *ediciones OSM* en el mapa en el [menú Configurar mapa](../map/configure-map-menu).


## Configuración {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
La configuración del complemento es global y se aplica a todos los perfiles.
:::

- [Iniciar sesión en OpenStreetMap](#authorization). Inicia sesión para subir cambios nuevos o modificados. Usa el método seguro *OAuth 2.0* o [inicia sesión en el sitio de OSM](https://www.openstreetmap.org/login). Para iOS, el botón para el método OAuth solo está disponible para usuarios con una versión compatible de iOS, 16.4.
- **<Translate android="true" ids="offline_edition"/>**. Si esta configuración está habilitada, los cambios se guardan primero localmente (botón *Guardar*) y se cargan a petición. Si la configuración está deshabilitada, los cambios se cargan inmediatamente (botón *Cargar*).
- **<Translate android="true" ids="use_dev_url"/>** *(Solo Android)*. Te permite habilitar [dev.openstreetmap.org](https://dev.openstreetmap.org/) en lugar de [openstreetmap.org](http://openstreetmap.org/) para probar la carga de notas OSM, PDI o trazas GPS. Cuando está habilitado, se cierra automáticamente la sesión de OpenStreetMap.org. Esta configuración solo está disponible en la lista cuando el *complemento de desarrollo de OsmAnd* está habilitado.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Toca para abrir [*Menú → Mis lugares → Ediciones OSM*](../personal/myplaces.md). Esta pestaña lista tus notas OSM sin editar. Las siguientes acciones están disponibles con la nota: *Subir*, *Mostrar en el mapa*, *Modificar nota OSM*, *Eliminar*. Las notas subidas o eliminadas ya no se muestran en la lista.

:::note
Si tienes una suscripción [OsmAnd Pro](../purchases/android.md#pro-features), los cambios realizados en OSM aparecerán en tu mapa de OsmAnd en una hora. Asegúrate de que las [actualizaciones en vivo](../personal/maps-resources.md#osmand-live) estén habilitadas.
:::


### Autorización {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Inicia sesión para contribuir con cambios y archivos GPX.

- Ve a [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) e *inicia sesión* o *regístrate*.
- Toca el campo *Iniciar sesión en OpenStreetMap* en la aplicación OsmAnd, luego toca el botón *Iniciar sesión con OpenStreetMap*.


### Actualizaciones gratuitas de mapas para mapeadores {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png) ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

La configuración <Translate android="true" ids="map_updates_for_mappers"/> te permite habilitar **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)** si eres un colaborador activo de OpenStreetMap. De esta manera, puedes disfrutar de actualizaciones de mapas gratuitas cada hora, a diferencia de las actualizaciones mensuales estándar. Los colaboradores activos de OpenStreetMap.org pueden tener derecho a actualizaciones de mapas ilimitadas por hora. Inicia sesión en OpenStreetMap para verificar tu elegibilidad para actualizaciones de mapas ilimitadas mensuales y por hora.


### Capa de edición de OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Puedes habilitar o deshabilitar como una capa separada la visualización de modificaciones de OSM como *notas OSM* (en línea), *ediciones OSM*, *etiquetas Fixme*, *etiquetas Note*, *iconos con zoom bajo*, en la sección [Configurar mapa](../map/configure-map-menu.md) del *Menú principal*.


## Crear / Modificar PDI {#create--modify-poi}

El complemento de edición de OpenStreetMap te permite crear nuevos objetos en el mapa llamados [puntos de interés o PDI](../map/point-layers-on-map.md#points-of-interest-pois). Puedes mapear una nueva tienda, un punto de referencia favorito, un banco o un refugio para que la gente pueda encontrarlos.

1. Toca el mapa para colocar un nuevo PDI, o toca un PDI aún no cargado.2. Toca [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Elige [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi), y añade su nombre y otra información como horario de apertura, sitio web, etc. Cuando seleccionas un PDI no cargado, *Crear PDI* cambia a *Modificar PDI*.
3. Dependiendo de la configuración de [Edición sin conexión](#settings), puedes guardar los datos localmente o [cargarlos](../map/map-context-menu#-upload-poi--osm-note).


### Añadir etiquetas {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Puedes añadir fácilmente [etiquetas](https://wiki.openstreetmap.org/wiki/Tags) OSM al PDI. Cuando introduces varios caracteres en la barra de búsqueda, el programa sugiere posibles etiquetas.

**Modificaciones sin conexión.**
Puedes ver, subir a OSM o eliminar PDI en *Mis lugares → Ediciones OSM*. También puedes exportar tus cambios de PDI de OSM a un [archivo OSC](https://wiki.openstreetmap.org/wiki/OsmChange) e importarlo a [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Añadir tipos de PDI no compatibles {#add-unsupported-poi-types}

En la pestaña *Avanzado*, puedes añadir tipos de PDI no compatibles que pueden ser útiles para tu tarea específica. Esta opción te permite introducir datos de PDI manualmente, ampliando así la funcionalidad de la aplicación.

Un ejemplo de tipos de PDI no compatibles que puedes añadir es *amenity=freeshops*. Este tipo puede ser útil si quieres marcar tiendas gratuitas o lugares que ofrecen productos gratuitos.

Para añadir tipos de PDI no compatibles, sigue estos pasos:

1. Abre la pestaña *Avanzado*.
2. Toca *Tipo de PDI*.
3. Introduce la clave *amenity* y el valor *freeshops* en los campos apropiados.
4. Rellena el resto de los datos requeridos para este PDI.
5. Toca *Añadir etiqueta* para añadir el nuevo PDI a tu base de datos.

Recuerda que al añadir tipos de PDI no compatibles, es importante asegurarse de que los datos se introducen correctamente para garantizar el correcto funcionamiento de la aplicación y el posterior procesamiento de la información.


## Crear / Modificar nota OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png) ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Para editar, comentar o cerrar notas OSM, habilita su visualización en el mapa en el [menú Configurar mapa](../map/configure-map-menu.md).

- La función Notas OSM te permite añadir notas al mapa. En estas notas, puedes describir errores o escribir sobre información faltante en los datos de OpenStreetMap. Tú y otros usuarios pueden dejar comentarios en tus notas.
- Puedes ayudar a otros usuarios revisando sus preguntas o problemas, dejando comentarios y luego cerrando las notas resueltas.
- Lee más sobre las Notas de OpenStreetMap [aquí](https://wiki.openstreetmap.org/wiki/Notes).

Para crear una nota, no necesitas iniciar sesión en OpenStreetMap.org, puedes enviarla de forma anónima.

- Toca el mapa donde se va a colocar la nueva nota OSM (o toca una nota no cargada), y selecciona [Acciones](../map/map-context-menu.md#actions).
- Si quieres añadir información a una nota existente o no cargada, editar un comentario o cerrar una nota, toca la nota OSM en el mapa y selecciona la [acción requerida](../map/map-context-menu.md#-comment--close-osm-note).
- Puedes subir los cambios tan pronto como estés en línea. También puedes deshacer los cambios antes de que se suban.

:::info
Las notas OSM subidas no son visibles en los mapas de OsmAnd en modo sin conexión.
:::


## Trazas GPS {#gps-track}

Las trazas GPS que has grabado son útiles para:

- **Mapeadores**. Las trazas se pueden usar para mapear todo tipo de caminos.
- **Navegación**. Basándose en los datos del archivo GPX que has subido, las aplicaciones de navegación y los dispositivos especiales pueden calcular trazas.
- **Compartir información** sobre las trazas y rutas que grabaste en [mapas basados en OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTA
Tus trazas se añadirán a [trazas OSM](https://www.openstreetmap.org/traces) en una hora, donde estarán disponibles para que tú y otros las vean, busquen y usen.
:::


### Subir traza GPS {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Para [subir la traza GPS](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), sigue los pasos a continuación:

- Encuentra la traza requerida en la pestaña [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Toca el *menú de tres puntos* junto al nombre de la traza y selecciona *Exportar*.

**Configuración:**

- **<Translate android="true" ids="shared_string_description"/>**. Te permite añadir una descripción a la traza. La descripción se aplica a todas las trazas seleccionadas. Si no introduces nada en el campo, los nombres de las trazas para cada traza separada se usan como descripciones.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Este elemento en la sección de configuración te permite añadir etiquetas para identificar la traza. La etiqueta predeterminada es "osmand", puedes introducir etiquetas adicionales separadas por comas.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Visibilidad de la traza para los usuarios de OSM:
   - *Pública* significa que la traza está disponible públicamente y se muestra en formato sin procesar en tus trazas GPS, listas de trazas GPS y listas de trazas con marca de tiempo. Los datos transmitidos a través de la API no se referencian con tu página de traza. Las marcas de tiempo de los puntos de traza no están disponibles a través de la API GPS pública y los puntos de traza no están ordenados cronológicamente.
   - *Identificable* significa que la traza se mostrará públicamente en tus puntos de traza GPS y listas de trazas GPS públicas, lo que significa que otros usuarios podrán descargar la traza sin procesar y asociarla con tu nombre de usuario. Los datos de puntos de traza con marca de tiempo públicos de la API GPS pasados a través de la API de puntos de traza se vincularán a tu página de traza original.
   - *Rastreable* significa que la traza no se muestra en listas públicas, pero los puntos de traza procesados con marcas de tiempo de la misma (que no se pueden vincular directamente a ti) se cargan desde la API GPS pública.
   - *Privada* significa que la traza no se muestra en listas públicas, pero los puntos de traza de la misma en orden no cronológico están disponibles a través de la API GPS pública sin marcas de tiempo.
- **<Translate android="true" ids="login_account"/>** - [cuenta OSM](https://www.openstreetmap.org/login).

:::info
Puedes seleccionar más de una traza para subir a OSM. Para ello, toca el icono *Subir a OpenStreetMap* en la parte inferior de la pantalla, selecciona las trazas usando la casilla de verificación, toca *Subir* y luego *Continuar*.
:::

### Generar archivo OBF {#generate-obf-file}

Puedes crear un archivo OBF con [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator) si tienes una gran base de datos de trazas GPX. Esta es una colección de trazas de osmand.net con la etiqueta 'gpsies', una colección de trazas descargadas de OpenStreetMap o tu propia colección.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2024*