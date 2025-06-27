---
source-hash: 27c365e2cc23607b9c9893a7baf13d93386a9e23a925c712b829dec94e7a4355
sidebar_position: 2
title: Botones del mapa
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



## Descripción general {#overview}

Los botones del mapa, incluidos *Zoom*, *Buscar*, *Direcciones*, *Brújula*, *Mi ubicación*, *Modo 3D* y *Menú*, son los controles principales para interactuar con el mapa. Cada botón ofrece funcionalidades específicas para mejorar su experiencia de navegación y uso del mapa.


## Mi ubicación y zoom {#my-location-and-zoom}

![Menú de la pantalla de configuración](@site/static/img/widgets/location_zoom_buttons.png)

Utilice estos botones para controlar cómo se muestra el mapa en la pantalla de su dispositivo:

- **Mi ubicación**. Muestra si el centro del mapa está sincronizado con la geolocalización actual de su dispositivo.
- **Zoom**. Le permite ajustar el nivel de zoom del mapa para proporcionar más o menos detalles.
Si desea más información sobre el uso de estos botones, puede consultar el artículo [Interactuar con el mapa](../map/interact-with-map.md#my-location-and-zoom).


## Direcciones {#directions}

![El botón de direcciones permite](@site/static/img/widgets/directions_button_allows.png)

El botón **Direcciones** es esencial para la planificación de rutas y la navegación:

- [Construir una ruta](../navigation/index.md). Utilice este botón para crear una ruta.
- [Iniciar navegación](../navigation/index.md). Inicie la navegación paso a paso.
- En el modo de navegación, el botón *Direcciones* no es visible por defecto, pero aparece después de un toque corto en el mapa.

Estados indicativos del botón *Direcciones*:

- El *icono gris por defecto* indica que la ruta aún no ha sido creada. Al tocar este icono se abre la funcionalidad de [configuración de ruta](../navigation/setup/route-navigation.md).
- El *icono azul por defecto* indica que la ruta está construida, pero la navegación aún no ha comenzado. Al tocar este icono se abre la funcionalidad de [configuración de ruta](../navigation/setup/route-navigation.md#start--stop-navigation).
- El *icono de flecha azul* indica que la navegación está activa. Al tocar este icono se abren los [detalles de la ruta actual](../navigation/setup/route-details.md).


## Configurar mapa {#configure-map}

![Configurar mapa](@site/static/img/widgets/configure_map.png)

El botón **Configurar mapa** proporciona acceso al [menú Configurar mapa](../map/configure-map-menu.md). El icono también refleja el [perfil de aplicación actual](../personal/profiles.md), lo que le permite identificar y cambiar entre diferentes perfiles.


## Menú principal {#main-menu}

![Botón del menú principal](@site/static/img/widgets/main_menu_button.png)

El botón [**Menú principal**](../start-with/main-menu.md) abre el menú general, lo que permite acceder a [todas las funciones de la aplicación](../start-with/main-menu.md). En el modo de navegación, este botón está oculto por defecto y se vuelve visible después de un toque corto en el mapa.


## Buscar {#search}

![Botón de búsqueda](@site/static/img/widgets/search_button.png)

El botón Buscar ofrece acceso rápido a las [capacidades de búsqueda](../search/index.md), lo que le permite encontrar ubicaciones, puntos de interés y otra información directamente desde el mapa.


## Brújula {#compass}

El botón Brújula indica la orientación del mapa en la pantalla de su dispositivo. Para obtener información adicional, consulte el artículo [Interactuar con el mapa](../map/interact-with-map.md#map-orientation--compass).


### Modos de orientación del mapa {#map-orientation-modes}

- ![Brújula](@site/static/img/widgets/map_butt_manually_ios.png)  
**Rotado manualmente**. En este modo, puede rotar manualmente el mapa con un [gesto de dos punteros (tocar y rotar con dos dedos)](../map/interact-with-map.md#gestures) según sus preferencias. La orientación del mapa no depende de la dirección de viaje ni de la brújula del dispositivo, sino que la determina usted. El modo de rotación manual está configurado por defecto.

- ![Brújula](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Dirección de movimiento**. En este modo, el mapa se orienta según la dirección de su movimiento conocida a partir de los datos GPS. Por ejemplo, si gira a la derecha, el mapa también gira para que el lado derecho de la pantalla corresponda a la dirección de movimiento. Para obtener más detalles, vaya a [Rotar mapa por rumbo](../map/interact-with-map#rotate-map-by-bearing).

- ![Brújula](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Dirección de la brújula**. El icono del botón apunta al Norte real, y el mapa se mueve según la orientación de la brújula de su dispositivo. De esta manera, el norte del mapa corresponde al norte real, y puede ver la orientación del mapa en relación con el terreno circundante. Su dispositivo debe estar en la posición más horizontal posible. Si su dispositivo no tiene un sensor de brújula, la orientación del mapa permanece sin cambios.

- ![Brújula](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Norte arriba**. En este modo, el mapa está fijo (con un bloqueo fuerte) en la dirección Norte, que es el borde superior de su dispositivo. Independientemente de la dirección en que se mueva el dispositivo, el mapa permanece estático, y puede ver su posición en relación con su entorno. El mapa no tiene rotación automática ni manual.

### Comportamiento de toque de la brújula {#compass-tapping-behavior}

El botón de la brújula proporciona múltiples acciones para controlar la orientación del mapa:

- **Un solo toque**. Un *solo toque* del [botón Brújula](../widgets/map-buttons.md#compass) (ubicado en la esquina superior izquierda de la pantalla cuando está [visible](../widgets/map-buttons.md#display-options)) reorienta instantáneamente la orientación del mapa *hacia el Norte* en todos los modos de orientación del mapa. Incluso si el mapa está en el modo *Dirección de la brújula*, aún gira por un momento y luego vuelve a la orientación dinámica de ese modo.

- **Doble toque**. Para cambiar rápidamente entre los modos de orientación del mapa, como seguir la dirección del GPS o rotar con el dispositivo, *toque dos veces* el [botón Brújula](../widgets/map-buttons.md#compass) (cuando esté [visible](../widgets/map-buttons.md#display-options)).

- **Toque largo**. Con un *toque largo* en el [botón Brújula](../widgets/map-buttons.md#compass) (cuando esté [visible](../widgets/map-buttons.md#display-options)) puede abrir una lista de todos los modos de orientación del mapa y seleccionar el requerido. Esta lista también se puede abrir en la [configuración del perfil](../personal/profiles.md#appearance).


### Opciones de visualización {#display-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Widget de brújula](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

El icono de la brújula en el botón siempre apunta al Norte. Puede seleccionar cómo se muestra el botón de la brújula en la pantalla.

- **Siempre visible**. El botón no desaparece de la pantalla.
- **Siempre oculto**. En este caso, no puede cambiar rápidamente la orientación del mapa, pero el botón no ocupará espacio en la pantalla.
- **Visible si el mapa está rotado**. El botón no es visible mientras la brújula apunta al Norte en el borde superior de su dispositivo.  


## Modo 3D {#3d-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Modo 3D](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![Modo 3D](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Si se selecciona este modo para un botón, debe usar un gesto para cambiar la vista del mapa. Toque el mapa con dos dedos y muévalos hacia arriba y hacia abajo para ajustar la inclinación del mapa.  
- *<Translate android="true" ids="shared_string_visible"/>*. El botón siempre se muestra en la pantalla del mapa.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. El botón se muestra en la pantalla del mapa cuando cambia la vista del mapa con un gesto de [*dos dedos y mover*](../map/interact-with-map.md#gestures).  

### Ajustes adicionales {#additional-settings}

1. **Mostrar el botón**. (Para Android) La configuración del botón *Modo 3D* aparece en la lista de la pantalla de configuración solo si se selecciona el motor de renderizado de mapas [Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **Guarda el ángulo**. Después de cambiar al modo 3D y cambiar el ángulo manualmente con un gesto, el ángulo se guarda y se usa la próxima vez que se activa el modo 3D. Esta opción solo se guarda para el perfil seleccionado en ese momento.

3. **Mover**. Puede colocar el botón en cualquier lugar de la pantalla de su dispositivo. Para ello, mantenga pulsado el botón y, sin levantar el dedo, arrástrelo al lugar deseado.

4. **Posición del botón**. La posición del botón en el mapa en la pantalla de la aplicación se guarda por separado para cada perfil.

5. **Recomendación**. Se recomienda descargar y habilitar el [mapa de sombreado de colinas](../plugins/topography.md#hillshade-slope-and-altitude-layers) para la región seleccionada.


## Botones personalizados {#custom-buttons}

El [widget de acción rápida](./quick-action.md) es un botón configurable con varios tipos de acciones que se pueden asignar. También es posible tener varios [botones personalizados](./quick-action.md#custom-buttons).


## Apariencia del botón del mapa {#map-button-appearance}

<InfoAndroidOnly/>

| Botones predeterminados | Botones personalizados |
| :--- | :--- |
| ![Apariencia del botón del mapa](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Apariencia del botón del mapa](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

La configuración de la apariencia del botón del mapa está disponible a través de los siguientes menús:

- *Menú → Configurar pantalla → Botones → Botones predeterminados*
- *Menú → Configurar pantalla → Botones personalizados → Acción rápida → menú de tres puntos → Apariencia*

La personalización de la apariencia de los botones le permite ajustar el tamaño, la forma, el icono y la opacidad del fondo tanto para la [Acción rápida (botones personalizados)](../widgets/quick-action.md#button-appearance) como para los [botones predeterminados](../widgets/configure-screen.md#button-appearance). Esta flexibilidad le permite personalizar la interfaz para adaptarla a sus preferencias y mejorar la usabilidad.


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y regla](./radius-ruler.md)
- [Widgets de marcador](./markers.md)
- [Acción rápida](./quick-action.md)

> *Última actualización: Febrero de 2025*