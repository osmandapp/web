---
source-hash: ca480d4fada9f677b9e8a4b60267b6ef26adb8611c8539c54da069d6ba39c8d5
sidebar_position: 2
title:  Interactuar con el mapa

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

## Resumen {#overview}

Este artículo explica cómo personalizar e interactuar con el mapa usando varios botones y gestos. Cubre cómo rotar, hacer zoom, ajustar el ángulo de visión y cambiar el ángulo de visión del mapa, rotarlo manual o automáticamente usando la brújula, o según la orientación.

## Gestos {#gestures}

Los gestos son esenciales para navegar por el mapa de forma fácil e intuitiva.

| Acción del mapa | Gesto |
|:------------|:-------------|
| **Mover** | Toca y mantén presionado el mapa con **un** dedo, luego arrastra para moverte. |
| **Deslizar** | Desliza el mapa con **un** dedo. |
| **Acercar** | Toca dos veces el mapa con **un** dedo. <br/> Toca dos veces con **un** dedo y desliza hacia abajo. <br/> Pellizca con **dos** dedos para acercar. |
| **Alejar** | Toca dos veces con **dos** dedos. <br/> Toca dos veces con **un** dedo y desliza hacia arriba. <br/> Pellizca con **dos** dedos para alejar. |
| **Rotar** | Toca el mapa con **dos** dedos, luego gira los dedos en un movimiento circular. |
| **Inclinar (3D)** | Toca con **dos** dedos y muévelos hacia arriba o hacia abajo. <br/> Disponible solo con la versión 2 del [Motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine) (OpenGL). |

Las animaciones de deslizamiento se pueden deshabilitar en la configuración con una [opción especial](#no-animations).

## Mi ubicación y zoom {#my-location-and-zoom}

![Menú de la pantalla de configuración](@site/static/img/widgets/location_zoom_buttons.png)

**Mi ubicación**.
El botón *Mi ubicación* es un icono circular que indica si el centro del mapa está sincronizado con la geolocalización actual de tu dispositivo. A menudo se le conoce como el botón "¿Dónde estoy?", y te ayuda a encontrar rápidamente tu ubicación en el mapa. Durante la navegación, el mapa suele permanecer sincronizado con la ubicación del dispositivo, por lo que el botón permanece oculto. Sin embargo, se vuelve visible si el mapa y tu ubicación se desincronizan debido a la interacción del usuario. Al tocar el botón, el mapa se volverá a centrar en tu ubicación actual, y al tocar dos veces, la vista cambiará al modo 3D.

- El botón *Mi ubicación* tiene los siguientes estados:
  - *Icono azul completo*. La ubicación se encuentra pero no está sincronizada con el mapa.
  - *Icono blanco*. La ubicación se encuentra y está sincronizada con el mapa.
  - *Icono gris*. La ubicación aún no se ha encontrado.
  - *Icono de flecha*. El modo 3D está activado.

- **Mantener presionado** (*Android*) el botón *Mi ubicación* abre el [menú contextual del mapa](../map/map-context-menu.md), lo que te permite compartir tu ubicación.

<br/>

**Botones de zoom**.
Los *botones de zoom* siempre están visibles junto a *Mi ubicación* y te permiten controlar el nivel de zoom del mapa.

- Cambiar el nivel de zoom no afecta la sincronización del mapa con tu ubicación.
- **Mantener presionado** los *botones de zoom* abre el diálogo *Lupa del mapa*, lo que te permite ajustar los niveles de detalle del mapa.
- Ten en cuenta que durante la navegación, el zoom se puede controlar automáticamente mediante la configuración de **Zoom automático**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Apariencia de Mi ubicación {#my-location-appearance}

Puedes personalizar los iconos del botón **Mi ubicación** usando la configuración de apariencia del perfil. Lee más sobre cómo hacerlo [aquí](../personal/profiles.md#profile-appearance).

## Lupa del mapa {#map-magnifier}

La *Lupa del mapa* es una herramienta que mejora la visibilidad del mapa, similar a una lupa utilizada con mapas de papel. Te permite acercar el mapa para ver el texto y los detalles con mayor claridad o para ajustar el nivel de detalle manteniendo la misma escala. Para obtener más información, consulta el artículo [Mapas vectoriales](../map/vector-maps.md#map-magnifier).

## Modos de orientación del mapa {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget de brújula](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget de brújula](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

Los *modos de orientación del mapa* te permiten elegir cómo se muestra el mapa en la pantalla del dispositivo. OsmAnd ofrece modos como **Rotación manual**, **Dirección de movimiento**, **Dirección de la brújula** y **Norte arriba**. La activación de cada modo cambia la forma en que se orienta el mapa según la opción seleccionada. Para obtener todos los detalles, consulta el artículo [Botones del mapa](../widgets/map-buttons.md#compass).

## Brújula {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

El botón de la brújula muestra cómo está [orientado el mapa](#map-orientation-modes). La *flecha roja* en los iconos, o la dirección de la flecha en el modo *Dirección de movimiento*, indica el Norte. [El icono del botón de la brújula](../widgets/map-buttons.md#compass) indica el modo de orientación actual del mapa. El widget del botón de la brújula ofrece tres [opciones de interacción](../widgets/map-buttons.md#compass-tapping-behavior): *Un toque* rota el mapa hacia el Norte, *Doble toque* alterna entre todos los modos de orientación del mapa, y *Mantener presionado* abre la lista de modos.

## Rotar mapa por rumbo {#rotate-map-by-bearing}

En el modo **rotar mapa por rumbo** ([Dirección de movimiento](../widgets/map-buttons.md#compass)), el mapa se alinea automáticamente con tu dirección de movimiento, de modo que el área que tienes delante se muestra en la parte superior de la pantalla. Este modo mejora la navegación al desplazar ligeramente el centro del mapa hacia abajo, mostrando más de la ruta que tienes por delante. Si estás parado, el mapa permanece fijo.

Puedes activar esta función a través de *Menú → Ajustes → Perfiles → Ajustes generales → Apariencia → Orientación del mapa* o tocando dos veces el [botón de la brújula](../widgets/map-buttons.md#compass-tapping-behavior). Para obtener más detalles sobre el rumbo, consulta [aquí](../widgets/nav-widgets.md#bearing-widget).

## Inclinación del mapa y horizonte {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inclinación Android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Inclinación Android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Inclinación iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Inclinación iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Con el nuevo [motor de renderizado](../personal/global-settings.md#map-rendering-engine) del mapa, puedes cambiar la [inclinación de la cámara](../plugins/development.md#camera-tilt) de 90 (sin inclinación) a 10 grados. Aproximadamente con una inclinación del mapa inferior a 20-22 grados (este parámetro depende del nivel de zoom), la línea del horizonte imaginaria se vuelve visible. A diferencia del real, el horizonte del programa siempre es recto.

Debajo del horizonte, se puede ver la llamada *neblina* o *niebla*. Esta área del mapa se llena de color gris, solo se pueden observar algunos detalles del mapa.
El uso de la niebla es necesario ya que la visualización de objetos remotos en el mapa requiere importantes recursos informáticos y no siempre se justifica debido a las [distorsiones](../plugins/development.md#comparison-with-a-satellite-imagery) del mapa en ángulos de visión pequeños. Por lo tanto, la distancia visible en el mapa de OsmAnd está actualmente limitada a 35 mosaicos.

:::info
La inclinación del mapa se puede cambiar manteniendo presionado la pantalla con dos dedos y moviéndolos hacia arriba/abajo. También puedes cambiar la inclinación tocando el icono [Mi ubicación](#my-location-and-zoom) en la esquina inferior derecha de la pantalla (solo están disponibles las posiciones de 45 y 90 grados).
No puedes cambiar la inclinación de la cámara cuando el antiguo [motor de renderizado de mapas](../personal/global-settings.md#map-rendering-engine) (versión 1) está activado.
:::

## Bloqueo de pantalla táctil {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Botón de acción rápida Bloqueo de pantalla táctil Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Botón de acción rápida Bloqueo de pantalla táctil iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Usa la función **Bloqueo de pantalla táctil** para evitar toques accidentales durante la navegación. Esto es especialmente útil para actividades como el ciclismo o el senderismo, donde los toques involuntarios podrían interrumpir tu ruta.

**Desbloqueo**.
Toca el botón en pantalla o, si el bloqueo está activado, a través de un botón externo (por ejemplo, Bajar volumen), presiona el botón externo y toca el botón en pantalla.

**Configuración**.

- Navega a *Menú → Configurar pantalla → Botones personalizados*.
- Selecciona *+ → Añadir acción → Interfaz → Bloqueo de pantalla táctil*.

Los mensajes claros en pantalla te guiarán al bloquear o desbloquear la pantalla.

## Ajustes {#settings}

### Configuración adicional de la brújula {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Suaviza la rotación del mapa con una animación de rotación más lenta, aunque esto introduce un ligero retraso, no más de 1 segundo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Suaviza la rotación del mapa con una animación de rotación más lenta, aunque esto introduce un ligero retraso, no más de 1 segundo.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Sin animaciones {#no-animations}

<InfoAndroidOnly/>

Puedes deshabilitar todas las animaciones del mapa durante las interacciones del mapa, incluidos los gestos y los botones.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*

### Animar mi posición {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Crea un efecto de desplazamiento suave del mapa en comparación con el icono *[Mi posición](../personal/profiles/#profile-appearance)* cuando está en movimiento. El efecto introduce un ligero retraso en comparación con la verdad del terreno de aproximadamente 1 segundo. Se ha informado que habilitar esto crea algunos problemas de retraso pronunciados en algunas circunstancias, desactívalo si surgen tales problemas.

## Dispositivos de entrada externos {#external-input-devices}

Los botones de los dispositivos de entrada externos proporcionan una forma cómoda y eficiente de interactuar con el mapa y la interfaz de la aplicación OsmAnd. Se encuentran en dispositivos externos, como **teclados Bluetooth u otros tipos**, **botones especializados en dispositivos de navegación de vehículos**, o controladores [WunderLINQ](https://blackboxembedded.com/) y [Parrot](https://www.parrot.com/en).

Una de las funciones principales de los botones en los dispositivos de entrada externos es acercar y alejar el mapa. También te permiten navegar por el mapa y cambiar su orientación sin tener que tocar y hacer gestos en la pantalla. Los botones en los dispositivos de entrada externos admiten muchas otras funciones, como abrir el *Menú principal*.

:::note
El teclado sigue funcionando incluso cuando la opción *Dispositivos de entrada externos* está desactivada y se selecciona *Ninguno*.
:::

### Dispositivo de entrada preconfigurado {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_menu_android.png) ![Dispositivos externos](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Para acceder a la configuración de un dispositivo de entrada externo, debes habilitar esta función.

- Ve al *Menú principal → Ajustes →* selecciona el *Perfil → Ajustes generales → Otros → Dispositivos de entrada externos*, y cambia a *Habilitado*.

- Selecciona un dispositivo de los compatibles con OsmAnd tocando el elemento *Tipo* en la lista:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*solo Android*), o crea [**tu propio tipo**](#custom-input-device-type) (*solo Android*).

- Hay una **asignación de paquete de acción-tecla definida** diferente para cada tipo de dispositivo de entrada externo. Toca el elemento *<Translate android="true" ids="key_assignments"/>* para ver una lista de acciones y teclas. La tabla de teclas se muestra a continuación.

- Puedes leer más sobre las acciones de los dispositivos de entrada externos en GitHub en el paquete [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Tecla | Dispositivo | Acción |
|:---------|:---------------|:---------------|
|**C**| *Teclado* | Mover - [A mi ubicación](#my-location-and-zoom) |
|**D**| *Teclado* | Cambiar - [Orientación del mapa](#map-orientation-modes) |
|**N**| *Teclado* | Mostrar / Ocultar - Vista de navegación |
|**S**| *Teclado* | Mostrar / Ocultar - [Vista de búsqueda](../search/index.md) |
|**P**| *Teclado* | Cambiar - Perfil de la aplicación al siguiente |
|**O**| *Teclado* | Cambiar - Perfil de la aplicación al anterior |
|**&#8593;**| *Teclado* | Mover - Mapa hacia arriba |
|**&#8595;**| *Teclado* | Mover - Mapa hacia abajo |
|**&#8592;**| *Teclado* | Mover - Mapa hacia la izquierda |
|**&#8594;**| *Teclado* | Mover - Mapa hacia la derecha |
|**&#43;** **=**| *Teclado* | Mapa - [Acercar](#my-location-and-zoom) |
|**&#8722;**| *Teclado* | Mapa - [Alejar](#my-location-and-zoom) |
|**Presionar atrás**| *Teclado* | Navegar – Pantalla anterior |
|**&#8595;**| *Wunderlinq* | Mapa - [Alejar](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Mapa - [Acercar](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Abrir cuadrícula de datos de WunderLINQ |
| **M** <br/> (*Android antiguo*) | *Teclado* | Mostrar / Ocultar - [Menú lateral](../start-with/main-menu.md#main-menu-side-menu) |
| **Pulsación del joystick** <br/> (*Android antiguo*) | *Teclado* | Mover - [A mi ubicación](#my-location-and-zoom) |
| **Botón multimedia** <br/> (*solo Android*)| *Teclado* | Mostrar / Ocultar - [Notas AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*solo Android*)| *Parrot* | Mapa - [Alejar](#my-location-and-zoom) |
| **&#8594;** <br/> (*solo Android*) | *Parrot* | Mapa - [Acercar](#my-location-and-zoom) |

### Tipo de dispositivo de entrada personalizado {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivos externos](@site/static/img/map/external_mypilot_android.png) ![Dispositivos externos](@site/static/img/map/external_mypilot2_android.png)

Si deseas asignar teclas para un dispositivo de entrada externo (como un teclado, joystick o controlador), debes crear un tipo de dispositivo: ve a la configuración de [Dispositivo de entrada externo](#external-input-devices), selecciona **Tipo** de la lista, toca el &nbsp; "**＋**" &nbsp; e introduce un nombre. Cada tipo tiene un menú con las siguientes opciones: ***Renombrar, Duplicar*** y ***Eliminar***.

### Añadir acciones y asignaciones de teclas {#add-action--key-asssigments}

![Dispositivos externos](@site/static/img/map/external_custom_4_andr.png) ![Dispositivos externos](@site/static/img/map/external_custom_3_andr.png)

Después de haber creado un tipo de entrada personalizado, puedes asignar las acciones requeridas a las teclas. Hay una amplia gama de [tipos de acciones](../widgets/quick-action.md#action-types) del widget de Acción Rápida disponibles.

- Selecciona un tipo de dispositivo, luego toca el elemento **Asignaciones de teclas**.
- Toca el botón ***Añadir*** (&nbsp;"**＋**"&nbsp;) en la esquina inferior derecha de la pantalla.
- Selecciona la acción requerida, luego toca el campo ***Añadir tecla*** y toca el botón de tu dispositivo para asignarlo a la acción.

:::note

- Si el botón que asignas ya está siendo utilizado para otra acción, recibirás una notificación con la opción de reasignar el botón o cancelar la asignación.
- Más tarde puedes cambiar las acciones y las asignaciones de teclas o añadir otras para acciones ya creadas, simplemente selecciona un elemento en la lista de asignaciones de teclas.

:::

### Eliminar asignación de teclas {#delete-key-assignment}

![Dispositivos externos](@site/static/img/map/external_custom_1_andr.png)

Puedes eliminar varias acciones innecesarias usando el **botón Editar** (*con forma de lápiz*) en la esquina superior derecha de la pantalla a la vez:

- ***Eliminar una acción*** por acción, con el botón &nbsp; "**−**" &nbsp; en el campo del elemento.
- ***Eliminar todas las asignaciones de teclas*** para el tipo seleccionado tocando el botón en la esquina superior derecha de la pantalla junto a *Editar nombre*.

## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](./map-context-menu.md)
- [Configurar mapa](./configure-map-menu.md)
- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas ráster (en línea/sin conexión)](./raster-maps.md)
- [Puntos en el mapa](./point-layers-on-map.md)
- [Rutas y trayectos](./tracks/index.md)
- [Menú contextual de rutas](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)

> *Última actualización: diciembre de 2024*