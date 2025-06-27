---
source-hash: 27722eb18550cf9d93cb885bccf878c6d53e33daba1748a270790fa1cca1066e
sidebar_position: 3
title: Notas de audio/vídeo
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

## Descripción general {#overview}

Tus grabaciones de audio y vídeo pueden ser útiles en el futuro, como recuerdos de dónde has estado. Están disponibles en el menú [Mis lugares](../personal/myplaces.md) y son visibles cuando el complemento Notas de audio/vídeo está habilitado.

El complemento Notas de audio/vídeo amplía la funcionalidad de OsmAnd al permitirte crear tus propias notas en varios formatos, como fotos, vídeo o audio, y asociarlas con tu ubicación geográfica o ubicación actual. Puedes realizar grabaciones solo cuando el complemento está activado, utilizando el [widget de Notas de audio/vídeo](../widgets/info-widgets.md#-audio-video-notes-widget) y/o el [menú contextual del mapa](../map/map-context-menu.md#-audiovideo-note). Los datos recibidos se guardan automáticamente en [Mis lugares](../personal/myplaces.md), desde donde se pueden gestionar y compartir cómodamente.

Todas las notas de audio y vídeo creadas componen la capa de Grabación. Cuando se habilita en el mapa, cambia la vista de los datos grabados y hay más configuraciones para gestionar las grabaciones. En la capa de Grabación, las notas de audio y vídeo se colocan como PDI en el mapa, creando así una narrativa de usuario visible solo para el propietario del dispositivo.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Introducción a las notas de audio y vídeo](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Las notas de audio/vídeo se proporcionan con el complemento Notas de audio/vídeo y requieren la siguiente configuración:

1. Habilita el [complemento Notas de audio/vídeo](../plugins/index.md#enable--disable) en la sección Complementos del *Menú principal*.
2. Agrega un [widget](../widgets/info-widgets.md#-audio-video-notes-widget) a la pantalla del mapa para un uso más conveniente.
3. Personaliza la [configuración de grabación](#plugin-settings) para cada perfil, si es necesario.


## Configuración del complemento {#plugin-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Configuración del complemento de audio y vídeo Foto Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Para cada perfil, puedes configurar las *opciones de grabación de audio y vídeo*.

| Parámetro | Descripción |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Puedes elegir si usar la aplicación del sistema o la cámara de OsmAnd para tomar <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Establece el tamaño de las fotos a tomar. Las capacidades de la cámara del dispositivo determinan el número de opciones disponibles. Si no se selecciona ninguna opción, la aplicación utiliza el tamaño de la configuración del sistema de la cámara del dispositivo. |
| **<Translate android="true" ids="av_camera_focus"/>** | Establece el método de enfoque de la cámara. El número de opciones disponibles está determinado por las capacidades de la cámara del dispositivo. Básicamente, hay tres opciones siguientes: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; e *<Translate android="true" ids="av_camera_focus_infinity"/>*. El **autofocus** es el más popular y establece el modo automático para la cámara; el **continuo** hace que la cámara detecte movimientos y reenfoca en consecuencia; y la opción **infinito** hace que la lente enfoque a una distancia y así mantenga los objetos enfocados sin importar cuán lejos estén. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Si está habilitado, se produce un sonido cuando la cámara toma una foto. Tenga en cuenta que, según lo exige la ley de privacidad, **en algunos países los dispositivos no tendrán un interruptor de silencio del obturador de la cámara**. Si usa la aplicación del sistema, el sonido debe deshabilitarse en la aplicación de la cámara. |
| **<Translate android="true" ids="av_audio_format"/>** | Proporciona una elección de formatos para un archivo de audio. El número de opciones disponibles, y cuál se usa por defecto, está determinado por los parámetros de un dispositivo específico. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Esta opción proporciona una elección de opciones de tasa de bits para un archivo de audio a crear. Las opciones de tasa de bits disponibles van desde 16 kbps hasta 128 kbps, o la opción Predeterminada. El parámetro Predeterminado está determinado por la configuración del micrófono "predeterminado" de su dispositivo. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Si está habilitado, OsmAnd usa la aplicación del sistema para grabar vídeo en <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Esto proporciona una elección de opciones que determinan el formato de la imagen de salida. El rango de opciones disponibles está determinado por los parámetros de un dispositivo específico. La opción predeterminada es la opción de *mayor calidad*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Si está habilitado, las grabaciones de vídeo antiguas se reescribirán y reemplazarán automáticamente por nuevas grabaciones de vídeo si el tamaño de almacenamiento alcanza el límite de tamaño. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Esto determina el límite de tiempo superior para los videoclips grabados. Hay opciones con un rango de 1 minuto a 30 minutos. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Esto establece el tamaño del almacenamiento destinado al vídeo grabado. Hay opciones con un rango de 1024 MB a 62 GB. Un rango específico de opciones, y la opción predeterminada, se determina con los parámetros de un dispositivo específico. Un mensaje del sistema le recordará que el tamaño de almacenamiento está alcanzando el límite establecido. |
| **<Translate android="true" ids="notes"/>** | Esta opción te redirige a las [Notas de audio/vídeo en Mis lugares](../personal/myplaces.md), el almacenamiento central de todas las notas de audio/vídeo realizadas en la aplicación. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Puedes establecer los valores predeterminados para todas las configuraciones de notas A/V. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Abre un diálogo para seleccionar un perfil desde el cual copiar la configuración de grabación de notas de audio/vídeo y establecerla para el perfil actual. |


## Gestionar una sola nota {#manage-a-single-note}

Puedes gestionar tu información, pensamientos, ideas, etc. vinculados a un lugar geográfico, de la siguiente manera:

- Crear una nota.
- Ver todas las notas como una lista en [Mis lugares](../personal/myplaces.md).
- Mostrar la nota específica en el mapa.
- Renombrar una nota en Mis lugares.
- Mostrar todas las notas [en el mapa](../map/configure-map-menu.md#map-data-layers).
- Reproducir la nota.
- Crear puntos de referencia en una [ruta](../plugins/trip-recording.md#gpx-file-details).
- Exportar a [JOSM](https://josm.openstreetmap.de/).


### Crear {#create}

Puedes crear una nota de foto, vídeo y audio de cualquiera de las siguientes maneras:

- Con el [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). Si la nota debe vincularse a tu posición geográfica actual.
- Con el [menú contextual](../map/map-context-menu.md#-record-av-note-android) de un punto en el mapa. Si la nota debe vincularse al punto seleccionado en el mapa.


#### 1. Crear y vincular a tu posición actual {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget del complemento de audio y vídeo Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

El widget <Translate android="true" ids="map_widget_av_notes"/> se utiliza para crear una nota vinculada a tu posición actual y, por lo tanto, evitar cualquier búsqueda de un punto adecuado para una nota en el mapa. Simplemente toca el widget y crea la nota.

Las funciones proporcionadas por el widget <Translate android="true" ids="map_widget_av_notes"/> dependen de cómo esté configurado en el menú [Configurar pantalla](../widgets/info-widgets.md#-audio-video-notes-widget-android). El widget abre inmediatamente la cámara para tomar una nota, de acuerdo con la configuración establecida, o pregunta primero en qué formato crear una nota y luego abre el diálogo de grabación respectivo.


#### 2. Crear y vincular a la geolocalización seleccionada {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Complemento de audio y vídeo Menú contextual tomar una nota](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Para crear una nota vinculada a un punto seleccionado en el mapa, utiliza el [menú contextual](../map/map-context-menu.md#-record-av-note-android) del punto:

1. Mantén pulsado un punto en el mapa y se abrirá el [menú contextual](../map/map-context-menu.md).
2. Toca **Acciones** y selecciona una de las opciones disponibles de la lista:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - para hacer una nota de audio y vincularla al punto seleccionado en el mapa;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - para hacer una nota de vídeo y vincularla al punto seleccionado en el mapa;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - para hacer una nota de foto y vincularla al punto seleccionado en el mapa.

3. Dependiendo del formato de nota seleccionado, se abrirá el diálogo de grabación correspondiente.


#### Diálogo de grabación {#recorder-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Grabador de notas de vídeo](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Para *notas de audio y vídeo*, se muestra el grabador de audio o vídeo respectivamente. Puedes:

- Detener la grabación con el icono *Detener*.
- Ver la duración de la grabación.
- Mostrar u ocultar la pantalla de vídeo.

Es posible detener la grabación con un toque del widget <Translate android="true" ids="map_widget_av_notes"/>, independientemente de si el menú contextual o el widget iniciaron la grabación. Para *una nota de foto*, aparece la funcionalidad de la cámara y puedes tomar una foto, ver el resultado, aceptarlo y guardarlo, o tomar una nueva foto.

:::info nota
Automáticamente, todos los registros de fotos, audio y vídeo se guardan en: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> pestaña.
:::


### Ver en Mis lugares {#view-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Menú de Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Mis lugares](../personal/myplaces.md) es un repositorio central para todas tus notas. Te permite ver todas tus notas en una lista ordenada, mostrar una nota específica en un mapa y gestionar toda tu lista de notas.


### Mostrar en el mapa {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual del complemento de audio y vídeo Mis lugares](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Para mostrar una nota específica en el mapa, utiliza la lista de notas en Mis lugares, busca la que necesites y tócala. Como resultado, el mapa aparecerá, resaltará la ubicación de la nota y abrirá el [menú contextual](../plugins/audio-video-notes.md#actions-in-map-context-menu). Es posible trabajar con la nota seleccionando las opciones en el menú contextual.


### Reproducir {#play}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Menú contextual del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Acciones del menú de Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para reproducir una nota, utiliza la opción correspondiente en el [menú contextual](../map/map-context-menu#-audiovideo-note-android) abierto para la nota:

- en el mapa;
- en Mis lugares.

La sección [Detalles](../map/map-context-menu#-audiovideo-note-android) proporciona más datos sobre las notas, como la latitud y la longitud, la fecha y la hora de la nota, y las fotos.


### Renombrar, eliminar, compartir {#rename-delete-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Acciones del menú de Mis lugares del complemento de audio y vídeo](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Para gestionar una nota en Mis lugares, toca los tres puntos verticales de la nota en la lista y aparecerán las opciones disponibles, de la siguiente manera:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Abre y visualiza el vídeo seleccionado o reproduce la nota de audio.
- **<Translate android="true" ids="shared_string_share"/>**. Comparte fácilmente la nota seleccionada con otros a través de varias plataformas.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Muestra la ubicación exacta y el [menú contextual](../plugins/audio-video-notes#actions-in-map-context-menu) de la nota en el mapa.
- **<Translate android="true" ids="shared_string_rename"/>**. Cambia el nombre de la nota para una identificación más fácil.
- **<Translate android="true" ids="shared_string_delete"/>**. Elimina notas permanentemente de la aplicación.


## Widget de grabación {#recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![El widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

El [widget de Notas de audio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget) crea notas, fotos, archivos de audio y vídeo y los vincula a tu posición actual. El widget tiene varias opciones que se pueden establecer como la acción predeterminada realizada por el widget cuando se toca la pantalla.

Es necesario agregar un widget a la pantalla si prefieres evitar buscar la geolocalización en el mapa y vincular notas a tu ubicación predeterminada actual. Para agregar o personalizar un widget, sigue los pasos a continuación:

1. Ve a:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Selecciona **<Translate android="true" ids="map_widget_left"/>** o **<Translate android="true" ids="map_widget_right"/>**.

3. Toca **<Translate android="true" ids="map_widget_av_notes"/>**, y se abrirá el menú contextual del widget.

4. Selecciona la opción que prefieras usar por defecto tocando el widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - abre una selección de opciones.

    - **<Translate android="true" ids="av_def_action_audio"/>** - comienza a grabar un mensaje de audio.

    - **<Translate android="true" ids="av_def_action_video"/>** - comienza a grabar vídeo.

    - **<Translate android="true" ids="av_def_action_picture"/>** - comienza a tomar fotos.

    ![El widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Gestionar varias notas {#manage-multiple-notes}

### Gestionar en Mis lugares {#manage-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Complemento de audio y vídeo Menú de Mis lugares Tres acciones](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Las opciones de la barra inferior se pueden utilizar para gestionar la lista de notas en el menú [Mis lugares](../personal/myplaces.md#audiovideo-notes).


### Compartir con puntos de referencia GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Compartir](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Puedes compartir todas las Notas, incluyendo [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) que tiene notas seleccionadas como puntos de referencia en la pantalla [Mis lugares](../personal/myplaces.md#audiovideo-notes) haciendo clic en el botón de compartir del menú inferior. Aparecerá una casilla de verificación junto a cada nota para seleccionar notas específicas. Hay dos casillas de verificación encima de las notas: *Notas A/V por fecha* para seleccionar todas las notas y la casilla de verificación *Ubicaciones*. La casilla de verificación *Ubicaciones* te permite agregar un archivo GPX separado con coordenadas y datos.

Cada nota contiene la hora en que fue creada, la cantidad de datos, y si es un registro, la hora de grabación y los datos de ubicación, puedes agregar datos GPX.
Formatos de archivo compatibles: audio - **3gp**, vídeo - **mp4**, foto -**jpg**.


### Mostrar todo en el mapa {#show-all-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Mostrar notas en el mapa](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Las notas mostradas en el mapa pueden contar tu historia, dónde viste señales, qué puerta necesitabas abrir, dónde está la salida, el camino óptimo y más. Puedes mostrar las notas [una a la vez](#show-on-the-map) o todas a la vez.

Utiliza la capa de mapa [Grabación](../map/point-layers-on-map#-audio--video-points-android) para mostrar u ocultar todas las notas. Si la activas en el menú [Configurar mapa](../map/configure-map-menu), la capa de Grabación muestra todas las notas en el mapa.

![No hay notas en el mapa](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Hay notas en el mapa](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Puntos de referencia creados a partir de notas {#waypoints-created-from-notes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Notas y puntos de referencia en el mapa](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Puntos de referencia en la pista](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Se crea un punto de referencia cuando se añade una nota de audio, vídeo o foto a una pista. Los puntos de referencia existen dentro de una pista. Si una pista es visible, sus puntos de referencia también lo son. Por lo tanto, estas notas pueden ser visibles en el mapa todas a la vez o solo en una pista visible específica. En este último caso, las notas se muestran como puntos de referencia de la pista.

:::nota
Si se exporta una pista, los puntos de referencia no se pueden ver ni reproducir, porque las notas de audio/vídeo/foto se almacenan solo en el dispositivo y solo están disponibles para ti en ese dispositivo.
:::


### Crear puntos de referencia {#create-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Añadir manualmente un punto de referencia a la pista](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Hay dos formas de crear un punto de referencia: automáticamente y manualmente.

1. **Automáticamente**, se crea un punto de referencia, en caso de que tomes una nota de audio/vídeo/foto cuando la [grabación de viaje](../plugins/trip-recording) está en curso, independientemente de la geolocalización si está vinculada a la posición actual o a cualquier lugar, y por lo tanto, independientemente de los medios utilizados para ello: si es el [Widget](../widgets/info-widgets#-audio-video-notes-widget-android), o el [Menú contextual](../map/map-context-menu#-audiovideo-note-android).

    Todos los puntos de referencia añadidos automáticamente obtienen un nombre asignado automáticamente. El nombre se crea, de acuerdo con el formato especificado a continuación para un archivo de audio/vídeo/foto, y tiene un [enlace corto](https://wiki.openstreetmap.org/wiki/Shortlink). El ejemplo de los puntos de referencia en la figura anterior muestra puntos de referencia creados automáticamente y manualmente, donde los cuatro primeros se crearon automáticamente y el último, manualmente.

2. **Manualmente**, se crea un punto de referencia a través del [Menú contextual](../map/map-context-menu#-audiovideo-note-android), de la siguiente manera:

    - Selecciona la nota de audio/vídeo/foto requerida en el mapa.
    - Toca **Acciones** y luego toca **Añadir pista**.
    - Selecciona la pista a la que deseas añadir un punto de referencia.
    - Se abre el diálogo *<Translate android="true" ids="quick_action_add_gpx"/>*, que te permite establecer algunas propiedades, como el nombre del punto de referencia, un icono, color y otros. Una vez hecho, toca **Guardar**.

:::info nota
Puedes especificar nombres para cada punto de referencia creado manualmente.
:::


### Ver puntos de referencia {#view-waypoints}

- Un punto de referencia está disponible para su visualización como punto de referencia en el mapa y en la lista de [puntos de referencia de una pista específica](../map/tracks/track-context-menu.md#points--waypoints). Eliminar el punto de referencia no elimina la nota de audio/vídeo/foto correspondiente.

- Una nota de audio, vídeo o foto está disponible para su visualización en el mapa y en la lista de notas A/V en [Mis lugares](../plugins/audio-video-notes#view-in-my-places). Eliminar la nota de audio, vídeo o foto no elimina el punto de referencia correspondiente.

- En el mapa, un punto de referencia y una nota de audio, vídeo o foto pueden o no ser visibles en el mapa. Esto se determina por la capa que está actualmente activada para el perfil.

- Cuando ni la capa de Pistas ni la de Grabación están activadas, tanto los puntos de referencia como las notas se pueden mostrar tocándolos en Mis lugares. En este caso, el mapa muestra las ubicaciones de la nota tocada, o respectivamente, las ubicaciones de todos los puntos de referencia de la pista tocada.

| Visible | Capa activada |
| --- | --- |
| Solo puntos de referencia | Capa de pistas |
| Puntos de referencia y notas | Capa de pistas y grabación |
| Solo notas | Capa de grabación |
| Ninguno | Ni la capa de pistas ni la de grabación. |


### Archivo GPX con puntos de referencia {#gpx-file-with-waypoints}

![Punto de referencia en un archivo GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Si se visualiza el archivo GPX de la pista añadida con un punto de referencia de una nota de audio/vídeo/foto, el punto de referencia será como en el ejemplo siguiente, con las coordenadas, la marca de tiempo, el nombre de la nota correspondiente y el enlace corto.


## Varios {#miscellaneous}

### Detalles del nombre del archivo {#file-name-details}

El complemento <Translate android="true" ids="audionotes_plugin_name"/> genera archivos de audio/vídeo/foto en el siguiente formato:

    `{SHORTLINK_LOCATION}_Descripción.{avi,mp3,jpg}`

donde `SHORTLINK_LOCATION` especifica la latitud y longitud de la ubicación a la que está vinculado el archivo. El `SHORTLINK_LOCATION` está codificado, según la especificación del [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Exportar a JOSM {#export-to-josm}

![Notas de audio y vídeo en Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Para verlo todo más tarde, puedes exportar la pista junto con todos los archivos multimedia y verlos en el [editor JOSM](https://josm.openstreetmap.de/). Ten en cuenta que los archivos multimedia deben colocarse en la carpeta adecuada. Puedes averiguar cuál haciendo clic en el vídeo. Aparecerá una notificación que indica que no hay ningún archivo disponible, coloca el archivo correcto en la carpeta especificada.


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2023*