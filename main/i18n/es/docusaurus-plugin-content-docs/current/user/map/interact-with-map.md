---
source-hash: f36e3e01ca52cfcf09244a5fdf758f11e6dc72be472882c610eecdadd2be4998
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


## Vista general {#overview}

Este artículo explica cómo personalizar e interactuar con el mapa utilizando varios botones y gestos. Cubre cómo rotar, hacer zoom, ajustar el ángulo de visión y cambiar el ángulo de visión del mapa, rotarlo manual o automáticamente usando la brújula, o según el rumbo.


## Gestos {#gestures}

Los gestos son esenciales para navegar por el mapa de forma fácil e intuitiva.

| Acción en el mapa | Gesto |
|:------------|:-------------|
| **Mover** | Toque y mantenga pulsado el mapa con **un** dedo, luego arrastre para moverse. |
| **Deslizar** | Deslice el mapa con **un** dedo. |
| **Acercar** | Toque dos veces el mapa con **un** dedo. <br/> Toque dos veces con **un** dedo y deslice hacia abajo. <br/> Pellizque con **dos** dedos para acercar. |
| **Alejar**| Toque dos veces con **dos** dedos. <br/> Toque dos veces con **un** dedo y deslice hacia arriba. <br/> Pellizque con **dos** dedos para alejar. |
| **Rotar**  | Toque el mapa con **dos** dedos, luego rote los dedos en un movimiento circular. |
| **Inclinar (3D)** | Toque con **dos** dedos y muévalos hacia arriba o hacia abajo. <br/> Disponible solo con la versión 2 (OpenGL) del [Motor de renderizado de mapa](../personal/global-settings.md#map-rendering-engine). |

Las animaciones de deslizamiento se pueden desactivar en los ajustes con una [opción especial](#remove-animations).


## Mi ubicación y Zoom {#my-location-and-zoom}

![Menú de configuración de pantalla](@site/static/img/widgets/location_zoom_buttons.png)

**Mi ubicación**.  
El botón *Mi ubicación* es un icono circular que indica si el centro del mapa está sincronizado con la geolocalización actual de su dispositivo. A menudo denominado el botón "¿Dónde estoy?", le ayuda a encontrar rápidamente su ubicación en el mapa. Durante la navegación, el mapa suele permanecer sincronizado con la ubicación del dispositivo, por lo que el botón permanece oculto. Sin embargo, se hace visible si el mapa y su ubicación se desincronizan debido a la interacción del usuario. Al tocar el botón se volverá a centrar el mapa en su ubicación actual, y un doble toque cambiará la vista al modo 3D.

- El botón *Mi ubicación* tiene los siguientes estados:
  - *Icono azul completo*. La ubicación se ha encontrado pero no está sincronizada con el mapa.
  - *Icono blanco*. La ubicación se ha encontrado y está sincronizada con el mapa.
  - *Icono gris*. La ubicación aún no se ha encontrado.
  - *Icono de flecha*.  El modo 3D está activado.

- **Pulsación larga** (*Android*) en el botón *Mi ubicación* abre el [menú contextual del mapa](../map/map-context-menu.md), permitiéndole compartir su ubicación.

<br/>

**Botones de zoom**.  
Los *botones de zoom* siempre están visibles junto a *Mi ubicación* y le permiten controlar el nivel de zoom del mapa.

- Cambiar el nivel de zoom no afecta la sincronización del mapa con su ubicación.
- **Pulsación larga** en los *botones de zoom* abre el diálogo *Lupa de mapa*, permitiéndole ajustar los niveles de detalle del mapa.
- Tenga en cuenta que durante la navegación, el zoom puede ser controlado automáticamente por el ajuste **Zoom automático**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Apariencia de Mi Ubicación {#my-location-appearance}

Puede personalizar los iconos del botón **Mi ubicación** utilizando los ajustes de apariencia del Perfil. Lea más sobre cómo hacerlo [aquí](../personal/profiles.md#profile-appearance).


## Lupa de mapa {#map-magnifier}

La *Lupa de mapa* es una herramienta que mejora la visibilidad del mapa, similar a una lupa utilizada con mapas de papel. Le permite hacer zoom en el mapa para ver el texto y los detalles con más claridad o para ajustar el nivel de detalle manteniendo la misma escala. Para más información, vaya al artículo [Mapas vectoriales](../map/vector-maps.md#map-magnifier).


## Modos de orientación del mapa {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget de brújula](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Widget de brújula](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

Los *modos de orientación del mapa* le permiten elegir cómo se muestra el mapa en la pantalla del dispositivo. OsmAnd ofrece modos como **Rotado manualmente**, **Dirección del movimiento**, **Dirección de la brújula** y **Norte arriba**. Habilitar cada modo cambia la forma en que el mapa se orienta según la opción seleccionada. Para más detalles, consulte el artículo [Botones del mapa](../widgets/map-buttons.md#compass).


## Brújula {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

El botón de la brújula muestra cómo está [orientado el mapa](#map-orientation-modes). La *flecha roja* en los iconos, o la dirección de la flecha en el modo *Dirección del movimiento*, indica el Norte. [El icono en el botón de la brújula](../widgets/map-buttons.md#compass) indica el modo de orientación actual del mapa. El widget del botón de la brújula ofrece tres [opciones de interacción](../widgets/map-buttons.md#compass-tapping-behavior): *Un solo toque* rota el mapa hacia el Norte, *Doble toque* alterna entre todos los modos de orientación del mapa, y *Pulsación larga* abre la lista de modos.


## Rotar mapa por rumbo {#rotate-map-by-bearing}

En el modo **rotar mapa por rumbo** ([Dirección del movimiento](../widgets/map-buttons.md#compass)), el mapa se alinea automáticamente con su dirección de movimiento, de modo que el área delante de usted se muestra en la parte superior de la pantalla. Este modo mejora la navegación al desplazar ligeramente el centro del mapa hacia abajo, mostrando más de la ruta por delante. Si está parado, el mapa permanece fijo.  

Puede activar esta función a través de *Menú → Ajustes → Perfiles → Ajustes generales → Apariencia → Orientación del mapa* o tocando dos veces el [botón de la Brújula](../widgets/map-buttons.md#compass-tapping-behavior). Para más detalles sobre el rumbo, vea [aquí](../widgets/nav-widgets.md#bearing-widget).


## Inclinación y horizonte del mapa {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Inclinación android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Inclinación android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Inclinación ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Inclinación ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Con el nuevo [motor de renderizado de mapa](../personal/global-settings.md#map-rendering-engine) puede cambiar la [inclinación de la cámara](../plugins/development.md#camera-tilt) de 90 (sin inclinación) a 10 grados. Aproximadamente a una inclinación del mapa inferior a 20-22 grados (este parámetro depende del nivel de zoom), la línea del horizonte imaginaria se vuelve visible. A diferencia del real, el horizonte del programa siempre es recto.  

Bajo el horizonte, puede ver la llamada *neblina* o *niebla*. Esta área del mapa se llena de color gris, solo se pueden observar algunos detalles del mapa.  
El uso de la niebla es necesario ya que la visualización de objetos remotos en el mapa requiere importantes recursos informáticos y no siempre está justificado debido a las [distorsiones](../plugins/development.md#comparison-with-a-satellite-imagery) del mapa en ángulos de visión pequeños. Por lo tanto, la distancia visible en el mapa de OsmAnd está actualmente limitada a 35 teselas.  

:::info
La inclinación del mapa se puede cambiar con una pulsación larga en la pantalla con dos dedos y moviéndolos hacia arriba/abajo. También puede cambiar la inclinación tocando el icono [Mi ubicación](#my-location-and-zoom) en la esquina inferior derecha de la pantalla (solo están disponibles las posiciones de 45 y 90 grados).  
No puede cambiar la inclinación de la cámara cuando el antiguo [motor de renderizado de mapa](../personal/global-settings.md#map-rendering-engine) (versión 1) está activado.
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

Use la función **Bloqueo de pantalla táctil** para evitar toques accidentales durante la navegación. Esto es especialmente útil para actividades como ciclismo o senderismo, donde los toques no intencionados podrían interrumpir su ruta.

**Desbloqueo**.  
Toque el botón en pantalla o, si el bloqueo está activado, a través de un botón externo (p. ej., Bajar volumen), presione el botón externo y toque el botón en pantalla.  

**Configuración**.

- Vaya a *Menú → Configurar pantalla → Botones personalizados*.
- Seleccione *+ → Añadir acción → Interfaz → Bloqueo de pantalla táctil*.

Mensajes claros en pantalla le guiarán al bloquear o desbloquear la pantalla.


## Ajustes {#settings}

### Ajustes extra de la brújula {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Suaviza la rotación del mapa con una animación de rotación más lenta, aunque esto introduce un ligero retraso, no más de 1 segundo.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Suaviza la rotación del mapa con una animación de rotación más lenta, aunque esto introduce un ligero retraso, no más de 1 segundo.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Sin animaciones {#remove-animations}

<InfoAndroidOnly/>  

Puede desactivar todas las animaciones del mapa durante las interacciones con el mapa, incluidos los gestos y los botones.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animar posición propia {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Crea un efecto de desplazamiento suave del mapa en comparación con el icono *[Mi Posición](../personal/profiles/#profile-appearance)* cuando está en movimiento. El efecto introduce un ligero retraso con respecto a la posición real de aproximadamente 1 segundo. Se ha informado que habilitar esto crea algunos problemas de retardo pronunciados en algunas circunstancias, desactívelo si surgen tales problemas.


## Dispositivos de entrada externos {#external-input-devices}

Los botones de dispositivos de entrada externos proporcionan una forma cómoda y eficiente de interactuar con el mapa y la interfaz de la aplicación OsmAnd.  Se encuentran en dispositivos externos, como **teclados Bluetooth u otros tipos de teclados**, **botones especializados en dispositivos de navegación de vehículos**, o controladores [WunderLINQ](https://blackboxembedded.com/) y [Parrot](https://www.parrot.com/en).  

Una de las funciones principales de los botones en los dispositivos de entrada externos es acercar y alejar el mapa. También le permiten navegar por el mapa y cambiar su orientación sin tener que tocar y hacer gestos en la pantalla. Los botones en los dispositivos de entrada externos admiten muchas otras funciones, como abrir el *Menú principal*.

:::note
El teclado sigue funcionando incluso cuando la opción *Dispositivos de entrada externos* está desactivada y se selecciona *Ninguno*.
:::

### Dispositivo de entrada preconfigurado {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_menu_android.png) ![Dispositivos externos](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![Dispositivos externos](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Para acceder a los ajustes de un dispositivo de entrada externo, debe habilitar esta función.

- Vaya al *Menú principal → Ajustes →* seleccione el *Perfil → Ajustes generales → Otros → Dispositivos de entrada externos*, y cambie a *Habilitado*.

- Seleccione un dispositivo de los compatibles con OsmAnd tocando el elemento *Tipo* en la lista:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*solo Android*), o cree [**su propio tipo**](#custom-input-device-type) (*solo Android*).

- Hay una asignación diferente de **conjunto de acción-tecla definido** para cada tipo de dispositivo de entrada externo. Toque *<Translate android="true" ids="key_assignments"/>* para ver una lista de acciones y teclas. La tabla de teclas se muestra a continuación.

- Puede leer más sobre las acciones de los dispositivos de entrada externos en GitHub en el paquete [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Tecla | Dispositivo | Acción |
|:---------|:---------------|:---------------|
|**C**| *Teclado*   | Mover - [A Mi ubicación](#my-location-and-zoom) |
|**D**| *Teclado*   | Cambiar - [Orientación del mapa](#map-orientation-modes) |
|**N**| *Teclado*   | Mostrar / Ocultar - Vista de navegación |
|**S**| *Teclado*   | Mostrar / Ocultar - [Vista de búsqueda](../search/index.md) |
|**P**| *Teclado*   | Cambiar - Perfil de la app al siguiente |
|**O**| *Teclado*   | Cambiar - Perfil de la app al anterior |
|**&#8593;**| *Teclado*   | Mover - Mapa hacia arriba  |
|**&#8595;**| *Teclado*   | Mover - Mapa hacia abajo  |
|**&#8592;**| *Teclado*   | Mover - Mapa a la izquierda  |
|**&#8594;**| *Teclado*   | Mover - Mapa a la derecha  |
|**&#43;** **=**| *Teclado*  | Mapa - [Acercar](#my-location-and-zoom) |
|**&#8722;**| *Teclado*  | Mapa - [Alejar](#my-location-and-zoom) |
|**Pulsar atrás**| *Teclado*   | Navegar – Pantalla anterior  |
|**&#8595;**| *Wunderlinq*  | Mapa - [Alejar](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Mapa - [Acercar](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Abrir Datagrid de WunderLINQ |
| **M** <br/> (*Android antiguo*) | *Teclado*  | Mostrar / Ocultar - [Menú lateral](../start-with/main-menu.md#main-menu-side-menu) |
| **Pulsar joystick** <br/> (*Android antiguo*) | *Teclado*  | Mover - [A Mi ubicación](#my-location-and-zoom) |
| **Botón multimedia** <br/> (*solo Android*)| *Teclado*  | Mostrar / Ocultar - [Notas AV](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*solo Android*)| *Parrot*  | Mapa - [Alejar](#my-location-and-zoom) |
| **&#8594;** <br/> (*solo Android*) | *Parrot*  | Mapa - [Acercar](#my-location-and-zoom) |


### Tipo de dispositivo de entrada personalizado {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivos externos](@site/static/img/map/external_mypilot_android.png)  ![Dispositivos externos](@site/static/img/map/external_mypilot2_android.png)

Si desea asignar teclas para un dispositivo de entrada externo (como un teclado, joystick o controlador), necesita crear un tipo de dispositivo: vaya al ajuste [Dispositivo de entrada externo](#external-input-devices), seleccione **Tipo** de la lista, toque el&nbsp; "**＋**" &nbsp; e introduzca un nombre. Cada tipo tiene un menú con las siguientes opciones: ***Renombrar, Duplicar*** y ***Eliminar***.

### Añadir acción y asignaciones de teclas {#add-action--key-asssigments}

![Dispositivos externos](@site/static/img/map/external_custom_4_andr.png)  ![Dispositivos externos](@site/static/img/map/external_custom_3_andr.png)

Después de haber creado un tipo de entrada personalizado, puede asignar las acciones requeridas a las teclas. Hay disponible una amplia gama de [tipos de acción](../widgets/quick-action.md#action-types) del widget de Acción rápida.

- Seleccione un tipo de dispositivo, luego toque el elemento **Asignaciones de teclas**.
- Toque el botón ***Añadir*** (&nbsp;"**＋**"&nbsp;) en la esquina inferior derecha de la pantalla.
- Seleccione la acción requerida, luego toque el campo ***Añadir tecla*** y toque el botón en su dispositivo para asignarlo a la acción.  

:::note

- Si el botón que asigna ya se está utilizando para otra acción, recibirá una notificación con la opción de reasignar el botón o cancelar la asignación.
- Más tarde puede cambiar las acciones y las asignaciones de teclas o añadir otras para las acciones ya creadas, simplemente seleccione un elemento en la lista de Asignaciones de teclas.

:::

### Eliminar asignación de tecla {#delete-key-assignment}

![Dispositivos externos](@site/static/img/map/external_custom_1_andr.png)

Puede eliminar múltiples acciones innecesarias usando el **botón Editar** (*en forma de lápiz*) en la esquina superior derecha de la pantalla de una vez:

- ***Eliminar una acción*** por acción, con el botón&nbsp; "**−**" &nbsp;en el campo del elemento.
- ***Eliminar todas las asignaciones de teclas*** para el tipo seleccionado tocando el botón en la esquina superior derecha de la pantalla junto a *Editar nombre*.


## Artículos relacionados {#related-articles}

- [Menú contextual del mapa](./map-context-menu.md)
- [Configurar mapa](./configure-map-menu.md)
- [Mapas vectoriales (Estilos de mapa)](./vector-maps.md)
- [Mapas rasterizados (En línea / Fuera de línea)](./raster-maps.md)
- [Puntos en el mapa](./point-layers-on-map.md)
- [Tracks y Rutas](./tracks/index.md)
- [Menú contextual de Tracks](./tracks/track-context-menu.md)
- [Transporte público](./public-transport.md)