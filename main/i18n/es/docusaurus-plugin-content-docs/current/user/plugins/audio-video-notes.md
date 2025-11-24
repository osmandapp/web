---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  Notas de audio/vídeo
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

<InfoAndroidOnly />

## Resumen {#overview}

Sus grabaciones de audio y vídeo pueden ser útiles en el futuro, como recuerdos de los lugares en los que ha estado. Están disponibles en el menú [Mis Lugares](../personal/myplaces.md) y son visibles cuando el complemento Notas de audio/vídeo está activado.

El complemento Notas de audio/vídeo amplía la funcionalidad de OsmAnd permitiéndole crear sus propias notas en diversos formatos, como fotos, vídeo o audio, y asociarlas a su ubicación geográfica o a su ubicación actual. Solo puede realizar grabaciones cuando el complemento está activado, utilizando el [widget Notas de audio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget) y/o el [menú contextual del mapa](../map/map-context-menu.md#-audiovideo-note). Los datos recibidos se guardan automáticamente en [Mis Lugares](../personal/myplaces.md), desde donde se pueden gestionar y compartir cómodamente.

Todas las notas de audio y vídeo creadas componen la capa de Grabación. Cuando se activa en el mapa, cambia la vista de los datos grabados y hay más ajustes para gestionar las grabaciones. En la capa de Grabación, las notas de audio y vídeo se colocan como PDI en el mapa, creando así una narrativa de usuario visible solo para el propietario del dispositivo.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Introducción a las notas de audio y vídeo](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Las notas de audio/vídeo se proporcionan con el complemento Notas de audio/vídeo y requieren la siguiente configuración:

1. Active el [complemento Notas de audio/vídeo](../plugins/index.md#enable--disable) en la sección Complementos del *Menú principal*.
2. Añada un [widget](../widgets/info-widgets.md#audiovideo-notes-widget) a la pantalla del mapa para un uso más cómodo.
3. Personalice los [ajustes de grabación](#plugin-settings) para cada perfil, si es necesario.


## Ajustes del complemento {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Ajustes del complemento de audio y vídeo Foto Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Para cada perfil, puede configurar las *opciones de grabación de audio y vídeo*.

| Parámetro | Descripción |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Puede elegir si desea utilizar la aplicación del sistema o la cámara de OsmAnd para tomar <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Establece el tamaño de las fotos que se van a tomar. Las capacidades de la cámara del dispositivo determinan el número de opciones disponibles. Si no se selecciona ninguna opción, la aplicación utiliza el tamaño de los ajustes del sistema de la cámara del dispositivo. |
| **<Translate android="true" ids="av_camera_focus"/>** | Establece el método de enfoque de la cámara. El número de opciones disponibles viene determinado por las capacidades de la cámara del dispositivo. Básicamente, existen las tres opciones siguientes: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; y *<Translate android="true" ids="av_camera_focus_infinity"/>*. El **enfoque automático** es el más popular y establece el modo automático para la cámara; el **continuo** hace que la cámara detecte movimientos y reenfoque en consecuencia; y la opción **infinito** hace que el objetivo enfoque a distancia y mantenga así los objetos enfocados sin importar lo lejos que estén. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Si está activado, se produce un sonido cuando la cámara realiza una toma. Tenga en cuenta que, tal y como exige la ley de privacidad, **en algunos países los dispositivos no dispondrán de un interruptor para silenciar el obturador de la cámara**. Si utiliza la aplicación del sistema, el sonido debe desactivarse en la aplicación de la cámara. |
| **<Translate android="true" ids="av_audio_format"/>** | Ofrece una selección de formatos para un archivo de audio. El número de opciones disponibles, y cuál se utiliza por defecto, viene determinado por los parámetros de un dispositivo específico. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Esta opción ofrece una selección de opciones de tasa de bits para un archivo de audio que se va a crear. Las opciones de tasa de bits disponibles van de 16 kbps a 128 kbps, o la opción por defecto. El parámetro por defecto viene determinado por los ajustes del micrófono "por defecto" de su dispositivo. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Si está activado, OsmAnd utiliza la aplicación del sistema para grabar vídeo en <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Ofrece una selección de opciones que determinan el formato de la imagen de salida. La gama de opciones disponibles viene determinada por los parámetros de un dispositivo específico. La opción por defecto es la de *Máxima calidad*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Si está activado, las grabaciones de vídeo antiguas se reescribirán y sustituirán automáticamente por nuevas grabaciones de vídeo si el tamaño del almacenamiento alcanza el límite de tamaño. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Determina el límite de tiempo superior para los videoclips grabados. Hay opciones con un rango de 1 a 30 minutos. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Establece el tamaño del almacenamiento destinado al vídeo grabado. Hay opciones con un rango de 1024 MB a 62 GB. Un rango específico de opciones, y la opción por defecto, se determina con los parámetros de un dispositivo específico. Un mensaje del sistema le recordará que el tamaño del almacenamiento está alcanzando el límite establecido. |
| **<Translate android="true" ids="notes"/>** | Esta opción le redirige a las [Notas de audio/vídeo en Mis Lugares](../personal/myplaces.md) - almacenamiento central de todas las notas de audio/vídeo realizadas en la aplicación. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Puede establecer los valores por defecto para todos los ajustes de las notas de A/V. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Abre un diálogo para seleccionar un perfil desde el que copiar la configuración de grabación de notas de audio/vídeo y establecerla para el perfil actual. |


## Crear una nota única {#create-a-single-note}

Puede crear una nota de foto, vídeo y audio de cualquiera de las siguientes maneras:

- Con el [Widget](../widgets/info-widgets.md#audiovideo-notes-widget). Si la nota debe estar vinculada a su posición geográfica actual.
- Con el [Menú contextual](../map/map-context-menu.md#overview) de un punto en el mapa. Si la nota debe estar vinculada al punto seleccionado en el mapa.


### Crear y anclar posición actual {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget del complemento de audio y vídeo Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

El widget <Translate android="true" ids="map_widget_av_notes"/> se utiliza para crear una nota vinculada a su posición actual y, por lo tanto, evitar cualquier búsqueda de un punto adecuado para una nota en el mapa. Simplemente toque el widget y cree la nota.

Las funciones que proporciona el widget <Translate android="true" ids="map_widget_av_notes"/> dependen de cómo esté configurado en el menú [Pantalla de configuración](../widgets/info-widgets.md#audiovideo-notes-widget). El widget abre inmediatamente la cámara para tomar una nota, según los ajustes establecidos, o pregunta primero en qué formato crear una nota y, a continuación, abre el diálogo de grabación correspondiente.


### Crear y anclar ubicación seleccionada {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del complemento de audio y vídeo tomar una nota](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Para crear una nota vinculada a un punto seleccionado en el mapa, utilice el [Menú contextual](../map/map-context-menu.md#-record-av-note) del punto:

1. Mantenga pulsado un punto en el mapa y se abrirá el [Menú contextual](../map/map-context-menu.md).
2. Pulse **Acciones** y seleccione una de las opciones disponibles en la lista:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - para hacer una nota de audio y vincularla al punto seleccionado en el mapa;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - para hacer una nota de vídeo y vincularla al punto seleccionado en el mapa;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - para hacer una nota de foto y vincularla al punto seleccionado en el mapa.

3. Dependiendo del formato seleccionado de la nota, se abre el diálogo de grabación correspondiente.


### Diálogo de grabación {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Grabadora de notas de vídeo](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Para las *notas de audio y vídeo*, se muestra la grabadora de audio o vídeo respectivamente. Puede:

- Detener la grabación con el icono *Detener*.
- Ver la duración de la grabación.
- Mostrar u ocultar la pantalla de vídeo.

Es posible detener la grabación con un toque en el widget <Translate android="true" ids="map_widget_av_notes"/>, independientemente de si el menú contextual o el widget iniciaron la grabación. Para *una nota de foto*, aparece la funcionalidad de la cámara, y puede tomar una foto, ver el resultado, aceptarlo y guardarlo, o tomar una nueva foto.

:::info note
Automáticamente, todas las grabaciones de fotos, audio y vídeo se guardan en: pestaña <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


## Gestionar una nota única {#manage-a-single-note}

Puede gestionar su información, pensamientos, ideas, etc. vinculados a un lugar geográfico, de la siguiente manera:

- Ver todas las notas como una lista en [Mis Lugares](../personal/myplaces.md).
- Mostrar la nota específica en el mapa.
- Renombrar una nota en Mis Lugares.
- Mostrar todas las notas [en el mapa](../map/configure-map-menu.md#map-data-layers).
- Reproducir la nota.
- Crear waypoints en una [pista](../plugins/trip-recording.md#new-track-recording).
- Exportar a [JOSM](https://josm.openstreetmap.de/).


### Ver en Mis Lugares {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menú Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Mis Lugares](../personal/myplaces.md) es un repositorio central para todas sus notas. Le permite ver todas sus notas en una lista ordenada, mostrar una nota específica en un mapa y gestionar toda su lista de notas.


### Mostrar en el mapa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contexto del menú Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Para mostrar una nota específica en el mapa, utilice la lista de notas en Mis Lugares, busque la que necesite y púlsela. Como resultado, aparece el mapa, resalta la ubicación de la nota y abre el Menú contextual. Es posible trabajar con la nota seleccionando las opciones del menú contextual.


### Reproducir {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú contextual del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Acciones del menú Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para reproducir una nota, utilice la opción correspondiente en el [Menú contextual](../map/map-context-menu#overview) abierto para la nota:

- en el mapa;
- en Mis Lugares.

La sección [Detalles](../map/map-context-menu#details) proporciona más datos sobre las notas, como la latitud y la longitud, la fecha y la hora de la nota y las fotos.


### Renombrar, eliminar, compartir {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acciones del menú Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para gestionar una nota en Mis Lugares, pulse los tres puntos verticales de la nota en la lista y aparecerán las opciones disponibles, como se indica a continuación:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Abrir y ver el vídeo seleccionado o reproducir la nota de audio.
- **<Translate android="true" ids="shared_string_share"/>**. Comparta fácilmente la nota seleccionada con otras personas a través de diversas plataformas.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Muestra la ubicación exacta y el menú contextual de la nota en el mapa.
- **<Translate android="true" ids="shared_string_rename"/>**. Cambie el nombre de la nota para facilitar su identificación.
- **<Translate android="true" ids="shared_string_delete"/>**. Elimina las notas permanentemente de la aplicación.


## Widget de grabación {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![El widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

El [widget Notas de audio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget) crea notas, fotos, archivos de audio y vídeo y los vincula a su posición actual. El widget tiene varias opciones que se pueden establecer como la acción por defecto realizada por el widget cuando se toca la pantalla.

Es necesario añadir un widget a la pantalla si prefiere evitar la búsqueda de geolocalización en el mapa y vincular las notas a su ubicación actual por defecto. Para añadir o personalizar un widget, siga los pasos que se indican a continuación:

1. Vaya a:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Seleccione  **<Translate android="true" ids="map_widget_left"/>** o **<Translate android="true" ids="map_widget_right"/>**.

3. Pulse **<Translate android="true" ids="map_widget_av_notes"/>**, y se abrirá el menú contextual del widget.

4. Seleccione la opción que prefiera utilizar por defecto pulsando sobre el widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - abrir una selección de opciones.

    - **<Translate android="true" ids="av_def_action_audio"/>** - empezar a grabar un mensaje de audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - empezar a grabar vídeo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - empezar a tomar fotos.

    ![El widget](@site/static/img/plugins/audio-video-notes/widget.png)

**Utilizar dispositivos de entrada externos (*Android*)**. Si utiliza un [dispositivo de entrada externo](https://osmand.net/docs/user/map/interact-with-map#external-input-devices), puede iniciar y detener las Notas de audio/vídeo sin tocar la pantalla. Para ello, asigne la acción «Añadir nota de audio» o «Añadir nota de vídeo» a una tecla:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Una vez asignada, la tecla funciona como un alternador:
- La primera pulsación inicia la grabación de una nota de audio o vídeo (dependiendo de la acción seleccionada).
- La segunda pulsación de la misma tecla detiene la grabación.

Cuando se detiene una grabación mediante un dispositivo de entrada externo, no se muestra el menú contextual, lo que facilita el uso de OsmAnd en escenarios completamente sin manos (por ejemplo, mientras conduce una motocicleta o un vehículo).


## Gestionar múltiples notas {#manage-multiple-notes}

### Gestionar en Mis Lugares {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Menú Mis lugares del complemento de audio y vídeo Tres acciones](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Las opciones de la barra inferior se pueden utilizar para gestionar la lista de notas en el menú [Mis Lugares](../personal/myplaces.md#audiovideo-notes).


### Compartir con waypoints GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Compartir](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Puede compartir todas las Notas, incluido el [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) que tiene las notas seleccionadas como waypoints en la pantalla [Mis Lugares](../personal/myplaces.md#audiovideo-notes) haciendo clic en el botón de compartir del menú inferior. Aparecerá una casilla de verificación junto a cada nota para seleccionar notas específicas. Hay dos casillas de verificación encima de las notas: *Notas A/V por fecha* para seleccionar todas las notas y la casilla *Ubicaciones*. La casilla *Ubicaciones* le permite añadir un archivo GPX independiente con coordenadas y datos.

Cada nota contiene la hora en que fue creada, la cantidad de datos, y si es una grabación, la hora de la grabación, y los datos de localización, puede añadir datos GPX.  
Formatos de archivo compatibles: audio - **3gp**, vídeo - **mp4**, foto -**jpg**.


### Mostrar todo en el mapa {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Mostrar notas en el mapa](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Las notas que se muestran en el mapa pueden contar su historia, dónde vio las señales, qué puerta necesitaba abrir, dónde está la salida, el camino óptimo y mucho más. Puede mostrar las notas [de una en una](#show-on-the-map) o todas a la vez.

Utilice la capa de mapa [Grabación](../map/point-layers-on-map#-audio--video-points-android) para mostrar u ocultar todas las notas. Si la activa en el menú [Configurar mapa](../map/configure-map-menu), la capa Grabación muestra todas las notas en el mapa.

![No hay notas en el mapa](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Las notas están en el mapa](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Waypoints creados a partir de notas {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Notas y waypoints en el mapa](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Waypoints en la pista](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Se crea un waypoint cuando se añade una nota de audio, vídeo o foto a una pista. Los waypoints existen dentro de una pista. Si una pista es visible, sus waypoints también lo son. Por lo tanto, estas notas pueden ser visibles en el mapa todas a la vez o sólo en una pista visible específica. En este último caso, las notas se muestran como waypoints de la pista.

:::note
Si se exporta una pista, los waypoints no se pueden ver ni reproducir, porque las notas de audio/vídeo/foto se almacenan únicamente en el dispositivo y solo están disponibles para usted en ese dispositivo.
:::


### Crear waypoints {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Añadir manualmente un waypoint a la pista](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Hay dos formas de crear un waypoint: automática y manualmente.

1. **Automáticamente**, se crea un waypoint, en caso de que tome una nota de audio/vídeo/foto cuando la [Grabación de viaje](../plugins/trip-recording) está en curso, independientemente de la geolocalización si está vinculada a la posición actual o a cualquier lugar, y por lo tanto, independientemente de los medios utilizados para ello: si es el [Widget](../widgets/info-widgets#audiovideo-notes-widget), o el [Menú contextual](../map/map-context-menu#-audiovideo-note).

    A todos los waypoints añadidos automáticamente se les asigna un nombre de forma automática. El nombre se crea, de acuerdo con el formato especificado a continuación para un archivo de audio/vídeo/foto, y tiene un [enlace corto](https://wiki.openstreetmap.org/wiki/Shortlink). El ejemplo de los waypoints en la figura anterior muestra waypoints creados automática y manualmente, donde los cuatro primeros se crearon automáticamente, y el último - manualmente.

2. **Manualmente**, se crea un waypoint a través del [Menú contextual](../map/map-context-menu#-audiovideo-note), de la siguiente manera:

    - Seleccione la nota de audio/vídeo/foto requerida en el mapa.
    - Pulse **Acciones** y, a continuación, pulse **Añadir pista**.
    - Seleccione la pista a la que desea añadir un waypoint.
    - Se abre el diálogo *<Translate android="true" ids="quick_action_add_gpx"/>* , que le permite establecer algunas propiedades, como el nombre del waypoint, un icono, el color y otras. Una vez hecho esto, pulse **Guardar**.

:::info note
Puede especificar nombres para cada waypoint creado manualmente.
:::


### Ver waypoints {#view-waypoints}

- Un waypoint está disponible para su visualización como un waypoint en el mapa y en la lista de [waypoints de una pista específica](../map/tracks/track-context-menu.md#points--waypoints). La eliminación del waypoint no elimina la nota de audio/vídeo/foto correspondiente.

- Una nota de audio, vídeo o foto está disponible para su visualización en el mapa y en la lista de notas A/V en [Mis Lugares](../plugins/audio-video-notes#view-in-my-places). La eliminación de la nota de audio, vídeo o foto no elimina el waypoint correspondiente.

- En el mapa, un waypoint y una nota de audio, vídeo o foto pueden ser visibles o no. Depende de la capa que esté activada en ese momento para el perfil.

- Cuando no está activada ni la capa de Pistas ni la de Grabación, tanto los waypoints como las notas pueden mostrarse pulsando sobre ellos en Mis Lugares. En este caso, el mapa muestra las ubicaciones de la nota pulsada o, respectivamente, las ubicaciones de todos los waypoints de la pista pulsada.

| Visible | Capa activada |
| --- | --- |
| Solo waypoints | Capa de Pistas |
| Waypoints y notas | Capas de Pistas y Grabación |
| Solo notas | Capa de Grabación |
| Ninguno | Ni la capa de Pistas, ni la de Grabación. |


### Archivo GPX con waypoints {#gpx-file-with-waypoints}

![Waypoint en un archivo GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Si visualiza el archivo GPX de la pista añadida con un waypoint a partir de una nota de audio/vídeo/foto, el waypoint será como en el ejemplo siguiente, con las coordenadas, la marca de tiempo, el nombre de la nota respectiva y el enlace corto.


## Varios {#miscellaneous}

### Detalles del nombre del archivo {#file-name-details}

El complemento <Translate android="true" ids="audionotes_plugin_name"/> genera archivos de audio/vídeo/foto en el siguiente formato:

    `{SHORTLINK_LOCATION}_Descripción.{avi,mp3,jpg}`

donde `SHORTLINK_LOCATION` especifica la latitud y longitud de la ubicación a la que está vinculado el archivo. El `SHORTLINK_LOCATION` está codificado, de acuerdo con la especificación del [Enlace corto](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exportar a JOSM {#export-to-josm}

![Notas de audio y vídeo en Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Para verlo todo más tarde, puede exportar la pista junto con todos los archivos multimedia y verlos en el [editor JOSM](https://josm.openstreetmap.de/). Tenga en cuenta que los archivos multimedia deben colocarse en la carpeta adecuada. Puede averiguar cuál es haciendo clic en el vídeo. Aparecerá una notificación indicando que no hay ningún archivo disponible, coloque el archivo correcto en la carpeta especificada.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)