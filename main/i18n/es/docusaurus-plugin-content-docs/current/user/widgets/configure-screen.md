---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
sidebar_position: 1
title:  Configurar Pantalla
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

El menú **Configurar pantalla** en OsmAnd le permite personalizar la interfaz del mapa añadiendo y organizando widgets, botones y acciones rápidas en varios paneles.

Puede:

- Añadir widgets [informativos](../widgets/info-widgets.md), [de navegación](../widgets/nav-widgets.md) y [relacionados con marcadores](../widgets/markers.md).
- Añadir o editar [Acciones rápidas](../widgets/quick-action.md), [Botones personalizados](../widgets/quick-action.md#custom-buttons) y [Botones predeterminados](../widgets/map-buttons.md).
- Organizar widgets en paneles (superior, inferior, izquierdo, derecho, central).
- Crear múltiples **páginas** dentro de los paneles laterales, elegir el tamaño de los widgets.
- Elegir la altura de la fila y alternar los iconos de los widgets.

Todos los widgets [dependen del perfil](../personal/profiles.md): cada perfil tiene su propio diseño, orden, visibilidad y configuración.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Paneles de widgets {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurar pantalla](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configurar pantalla](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd le permite organizar la interfaz del mapa utilizando paneles de widgets personalizables.
Puede añadir, reordenar, agrupar y eliminar widgets en los siguientes paneles:

- **Panel superior**
- **Panel inferior**
- **Panel izquierdo**
- **Panel derecho**

Cada panel admite diferentes comportamientos de diseño:

- Los **paneles superior e inferior** muestran widgets en filas. Puede colocar uno o dos widgets por fila y añadir varias filas si es necesario.
- Los **paneles izquierdo y derecho** admiten varias páginas. Puede agrupar widgets en páginas separadas y alternar entre ellas.


### Catálogo de widgets {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widgets de navegación:***  

- [Orientación](../widgets/nav-widgets.md#bearing).
    Este conjunto muestra la orientación absoluta o relativa a un objetivo en unidades angulares.
    Se incluyen 3 widgets: *Orientación relativa*, *Orientación magnética*, *Orientación verdadera*.

- [Perfil de elevación](../widgets/nav-widgets#elevation-widget) (*Solo superior/inferior*, *Solo Android*).
    Muestra la elevación y la pendiente de la ruta.

- [Carriles](../widgets/nav-widgets#lanes) (*Solo superior/inferior*).
    Guía visual de carriles.

- [Barra de marcadores de mapa](../widgets/markers.md#configure-marker-widgets-android) (*Solo superior/inferior*).
    Muestra la distancia/dirección a los marcadores guardados.
    Configurable para 1 o 2 marcadores.

- [Punto de navegación](../widgets/nav-widgets.md#navigation-points).
    El conjunto muestra la distancia restante a un destino, un punto intermedio, la hora de llegada a un punto intermedio o el tiempo de viaje para una ruta calculada.
    Se incluyen 4 widgets: [Distancia al destino](../widgets/nav-widgets.md#distance-to-destination), [Distancia al intermedio](../widgets/nav-widgets.md#distance-to-intermediate), [Tiempo al intermedio](../widgets/nav-widgets.md#time-to-intermediate), [Tiempo al destino](../widgets/nav-widgets.md#time-to-destination).

- [Maniobras de ruta](../widgets/nav-widgets.md#next-turn) (*Solo panel izquierdo/derecho*).
    Este conjunto se activa durante la navegación y muestra la distancia y la flecha a la siguiente maniobra.
    Se incluyen 3 widgets: *Siguiente giro*, *Siguiente giro (pequeño)*, *Segundo siguiente giro*.

- [Límite de velocidad](../widgets/nav-widgets.md#speed-limit).
    Muestra el límite de velocidad actual para la carretera.

- [Velocímetro](../widgets/info-widgets.md#speedometer).
    Muestra la velocidad actual basada en datos GPS y la velocidad limitada basada en [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nombre de la calle](../widgets/nav-widgets#street-name) (*Solo superior/inferior*).
    Muestra la calle actual o la próxima.

<br/>

***Widgets informativos:***

- [Altitud](../widgets/info-widgets.md#altitude-widgets).
    El conjunto muestra la altitud sobre el nivel del mar para la ubicación actual o para el centro del mapa actual.
    Se incluyen 2 widgets: *Altitud: ubicación actual*, *Elevación: centro del mapa*.

- [Velocidad media](../widgets/info-widgets.md#average-speed-widget).
    Muestra la velocidad media del viaje actual.

- [Nivel de batería](../widgets/info-widgets.md#battery-level).
    Muestra el nivel de batería del dispositivo.

- [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget) (*Solo superior/inferior*).
    Este conjunto muestra las coordenadas geográficas de la geolocalización actual.
    Se incluyen 2 widgets: *Coordenadas: centro del mapa*, *Coordenadas: ubicación actual*.

- [Velocidad actual](../widgets/info-widgets.md#speed).
    Muestra la velocidad del sensor GPS.

- [Hora actual](../widgets/info-widgets.md#current-time).
    Muestra la hora actual del sistema.

- [Relación de planeo](../widgets/info-widgets.md#glide-ratio).
    Los widgets muestran la relación de planeo al objetivo y la relación de planeo media para el vuelo actual.
    Se incluyen 2 widgets: *Relación de planeo al objetivo*, *Relación de planeo media*.

- [Información GPS](../widgets/info-widgets.md#gps-info) (*Solo Android*).
    Muestra el número de satélites detectados.

- [Marcadores de mapa](../widgets/markers.md).
    El conjunto muestra la distancia o el tiempo estimado de llegada (ETA) para los dos primeros marcadores en [la lista](https://osmand.net/docs/user/personal/markers#itinerary-list).
    Se incluyen 2 widgets: *Primer marcador*, *Segundo marcador*.

- [Regla de radio](../widgets/info-widgets.md#radius-ruler).
    Muestra la distancia entre su ubicación y un punto en el mapa, rodeado por la [herramienta de regla de radio](../widgets/radius-ruler.md).

- [Amanecer, atardecer](../widgets/info-widgets.md#sunset-and-sunrise).
    Muestra la hora del próximo amanecer o atardecer para el centro del mapa.
    Se incluyen 2 widgets: *Amanecer*, *Atardecer*.

<br/>

***Widgets basados en complementos:***  

- [Notas de audio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget).
    Acceso rápido para capturar medios.
    Se incluyen 4 widgets: *A petición*, *Grabar audio*, *Grabar vídeo*, *Tomar una foto*.

- [Widgets de desarrollador](../widgets/info-widgets.md#developer-widgets).
    Muestra información opcional.
    Se incluyen 5 widgets: *FPS de renderizado de mapa*, *Inclinación de cámara*, *Elevación de cámara*, *Nivel de zoom*, *Distancia de cámara a objetivo*, *RAM disponible*.

- [Widgets de sensores externos](../widgets/info-widgets.md#external-sensors-widgets).
    El conjunto ayuda a rastrear datos de sensores BLE/ANT+ en tiempo real.
    Se incluyen 6 widgets: *Frecuencia cardíaca*, *Potencia de bicicleta* (*Solo Android*), *Cadencia de bicicleta*, *Velocidad de bicicleta*, *Distancia de bicicleta*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).
    Abre la aplicación Mapillary para imágenes a nivel de calle.

- [Estado del rastreador de OsmAnd](../widgets/info-widgets.md#tracker-widget).
    Acceso rápido a la [aplicación OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget de estacionamiento](../widgets/info-widgets.md#parking-widget).
    Distancia desde el centro de la pantalla hasta la ubicación de estacionamiento guardada.

- [Grabación de viaje](../widgets/info-widgets.md#trip-recording-widgets).
    Inicia y detiene la grabación de la pista, y muestra los datos de la grabación de la pista.
    Se incluyen 4 widgets: *Distancia*, *Duración*, *Cuesta arriba*, *Cuesta abajo*.

- [Clima](../widgets/info-widgets.md#weather-widgets).
    Muestra información meteorológica detallada.
    Se incluyen 5 widgets: *Temperatura*, *Presión del aire*, *Viento*, *Nubes*, *Precipitación*.

:::note Widgets dependientes del panel

- Solo disponibles en los **paneles superior e inferior** y deben colocarse en filas separadas: *Widgets de coordenadas, Widget de perfil de elevación, Widget de carriles, Barra de marcadores de mapa, Widget de nombre de calle*.
- Solo disponibles en los **paneles izquierdo y derecho**: *Maniobras de ruta*.

:::


### Filas {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



La función **Modo de fila** le permite añadir tantas filas como sea necesario a los paneles superior e inferior. Puede mostrar varios widgets por fila, lo que aumenta la cantidad de información visible.

***Cómo configurar filas:***

- **Añadir widgets**: Toque el botón *Más* (Android) o *Añadir widget* (iOS), luego seleccione de la lista de widgets disponibles.
- **Reordenar widgets**: Toque el botón *Lápiz* (Android) o *Editar* (iOS) para reorganizar los widgets.
- **Añadir filas**: Toque el botón *Añadir fila* para crear nuevas filas para sus widgets.
- **Mover widgets**: Arrastre los widgets entre diferentes filas.
- **Acceder a la configuración del widget**: Toque el icono *"i"* (Android) o la flecha *">"* (iOS) para abrir la configuración del widget.
- **Guardar cambios**: Toque *Aplicar* (Android) o *Listo* (iOS) para guardar el diseño.


#### Tipos de widgets y restricciones {#widget-types-and-restrictions}

El modo le permite añadir **más de un widget en una sola fila** en los paneles superior e inferior para mostrar tanta información como sea necesario.

- **Widgets complejos**. Solo se puede añadir un widget complejo por fila. Estos incluyen:
    - [Barra de marcadores de mapa (*Solo Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Nombre de la calle](../widgets/nav-widgets#street-name)
    - [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget)
    - [Carriles](../widgets/nav-widgets#lanes)
    - [Perfil de elevación (*Solo Android*)](../widgets/nav-widgets#elevation-widget)
    - [Maniobras de ruta](../widgets/nav-widgets.md#next-turn)

- **Widgets simples**. Se pueden añadir varios widgets simples a una sola fila. Estos widgets pueden mostrar *Nombre*, *Unidades de medida*, *Valor* e *Icono*.


### Páginas {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Editar → Añadir página*  

![Página de widget](@site/static/img/widgets/widget_page_1_andr.png) ![Página de widget](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Editar → Añadir página*

![Página de widget](@site/static/img/widgets/widget_page_1_ios.png) ![Página de widget](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Los widgets en los paneles derecho e izquierdo se pueden agrupar en **Páginas**. La función **Modo de páginas** le permite añadir 5 páginas a los paneles izquierdo y derecho.

***Cómo configurar filas:***

- **Añadir una página**. Navegue a la configuración del Panel izquierdo/derecho y toque *Editar → Añadir página*.
- **Organizar widgets por página**. Esta función es útil cuando se necesitan diferentes conjuntos de widgets para diferentes tareas, como navegar o explorar el mapa.
- Las páginas le permiten crear **conjuntos de widgets** para escenarios específicos, mejorando el flujo de trabajo y reduciendo el desorden.


## Configuración de widgets {#widget-settings}

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opciones de tamaño de widget** (*para todos los paneles*):
    Puede personalizar el tamaño de los **widgets simples** en los **paneles superior, inferior, izquierdo y derecho**:

    - **Pequeño**. Ideal para pantallas compactas, ahorrando más espacio en pantalla para los mapas.
    - **Mediano** (*tamaño de widget predeterminado*). Equilibra la visibilidad y el uso del espacio.
    - **Grande**. Proporciona información de widget más grande y visible.

2. **Ocultar iconos de widget** (*para paneles superior e inferior*):

    - Mejora la claridad y maximiza el espacio para datos importantes.
    - Especialmente útil al mostrar muchos widgets en la misma **fila**.

3. **Tamaño individual para diferentes filas** (*para todos los paneles*):

    - Los widgets se pueden dimensionar individualmente ajustando el tamaño de la fila y la columna.
    - **NOTA:** Cambiar el tamaño de un widget en una fila/columna redimensionará todos los widgets en esa fila/columna.

4. **Para cambiar el tamaño del widget y la visibilidad del icono:**

    - Seleccione un widget que ya haya añadido al panel.
    - Toque el icono de *Configuración* en el lado derecho del campo del widget.
    - Toque la configuración de *Tamaño* y seleccione uno de los tamaños disponibles.
    - Cambie a la posición de Apagado, en el campo *Mostrar icono*.


## Personalización de paneles {#panels-customization}

### Menú contextual del widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Duplicado de widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Duplicado de widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

El **menú contextual del widget** proporciona una forma rápida de gestionar y configurar widgets directamente desde la pantalla del mapa. Puede acceder a él ***manteniendo pulsado*** cualquier widget para personalizar el diseño de los widgets sin salir del mapa.

**Para paneles superior e inferior**

- *Añadir widget a la derecha/izquierda:*

    - Seleccione una posición para el nuevo widget en relación con el actual.
    - Elija el widget de la lista de [Widgets disponibles](#widgets-catalog).

**Para paneles izquierdo y derecho**

- *Añadir widget arriba/abajo:*

    - Seleccione si desea colocar el nuevo widget encima o debajo del widget actual.
    - Toque el widget requerido en la lista para añadirlo a la posición especificada.

**Acciones generales para todos los paneles**

- *Configuración*.
    - Acceda a la configuración del widget (si está disponible) para personalizar su apariencia o comportamiento.

- *Restablecer velocidad media*.
    - Disponible para el widget [Velocidad media](../widgets/info-widgets.md#average-speed).
    - Mantenga pulsado para restablecer instantáneamente el valor de velocidad durante un viaje.

- *Eliminar*.
    - Eliminar el widget del panel.
    - Un mensaje de confirmación garantiza que la acción es intencionada.

### Copias de widgets {#copies-of-widgets}

*Menú de OsmAnd → Configurar pantalla → Widgets → Panel*  

![Duplicado de widget](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd le permite añadir múltiples instancias del mismo widget a diferentes paneles o páginas. Esta función es particularmente útil cuando necesita información consistente en diferentes vistas o perfiles.

***Cómo duplicar widgets:***

- **Añadir el widget**. Navegue a: *Menú de OsmAnd → Configurar pantalla → Widgets → Panel →* **Añadir** *widget*.
- **Duplicar usando el menú contextual**. Toque el widget y seleccione **Duplicar** de la lista de acciones.
- **Método alternativo**. Seleccione el mismo widget de la lista de *Widgets disponibles* y toque *Añadir*.


### Mover o eliminar {#move-or-delete}

*Menú de OsmAnd → Configurar pantalla → Widgets → Panel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Puede reorganizar o eliminar widgets de la pantalla de la aplicación utilizando el modo **Editar**.

***Cómo mover un widget:***

- Vaya a: *Menú de OsmAnd → Configurar pantalla → Widgets → Panel → Botón Editar*.
- Mantenga pulsado el **icono a la derecha** del widget.
- Arrástrelo a la posición deseada en la lista de widgets.

***Cómo eliminar un widget:***

- Siga los mismos pasos anteriores.
- Toque el **icono de menos** a la izquierda del nombre del widget.
- Confirme la eliminación cuando se le solicite.


## Botones {#buttons}

### Botones personalizados {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Acción rápida (botones personalizados)** le permite añadir una lista de acciones individuales de todas las [Acciones rápidas](../widgets/quick-action.md#custom-buttons) disponibles. Estas acciones se pueden asignar a uno o más botones de widget en la pantalla del mapa. Los botones personalizados proporcionan acceso rápido a las acciones de uso frecuente.

### Botones predeterminados {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Página de widget](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. Los **botones predeterminados** le permiten personalizar qué botones de mapa preestablecidos son visibles en la pantalla del mapa. Puede elegir ocultar o mostrar los siguientes botones:

    - [Modo 3D](../widgets/map-buttons.md#3d-mode). Para iOS, el botón siempre está disponible. Para Android, aparece en la lista y está disponible para configurar si se selecciona el motor de renderizado de mapas [Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Brújula](../widgets/map-buttons.md#display-options). Indica cómo está orientado el mapa en el dispositivo.
    3 vistas: *Siempre visible*, *Siempre oculto*, *Visible si el mapa está rotado*.

    - [Configurar mapa](../map/configure-map-menu.md). Acceda a las opciones para modificar el estilo, las capas y la configuración adicional del mapa.

    - [Menú](../widgets/map-buttons.md#main-menu). Abre el menú principal de la aplicación para acceder a todas las funciones.

    - [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Centra el mapa en su posición actual.

    - [Navegación](../widgets/map-buttons.md#directions). Esencial para la planificación de rutas e iniciar la navegación.

    - [Buscar](../widgets/map-buttons.md#search). Abre la herramienta de búsqueda para encontrar ubicaciones.

    - [Acercar/Alejar](../widgets/map-buttons.md#my-location-and-zoom). Ajusta el nivel de zoom del mapa para mostrar más o menos detalles.

2. El **menú de tres puntos** en la pantalla de botones predeterminados contiene acciones como:

    - *Restablecer a predeterminado*. Le permite devolver la configuración de los botones a su apariencia original.
    - *Copiar de otro perfil*. Seleccione de qué perfil de la lista ofrecida desea copiar la configuración de los botones.

3. La **apariencia del botón predeterminado** (*Solo Android*) ofrece una variedad de opciones de personalización para este tipo de botones. Para modificar la apariencia de un botón, toque el botón requerido de la lista y seleccione la opción [Apariencia](#button-appearance).


### Apariencia del botón {#button-appearance}

<InfoAndroidOnly/>

![Apariencia del botón](@site/static/img/widgets/button_appearance_settings_andr.png)

La función *Apariencia del botón* le permite personalizar completamente el aspecto de los botones en la interfaz de su mapa. Estas opciones de personalización están disponibles tanto para *Acción rápida (botones personalizados)* como para *Botones predeterminados*, lo que proporciona un control integral sobre la apariencia de la interfaz del mapa y permite ajustes precisos en el diseño del botón.

***Opciones de personalización***:

- **Icono**. Seleccione de una lista de iconos que representan las acciones que ya ha añadido, lo que facilita la identificación de las funciones de un vistazo.
- **Radio de esquina**. Ajuste esta configuración para cambiar la forma del botón, desde esquinas afiladas y cuadradas hasta bordes suaves y redondeados.
- **Tamaño**. Elija el tamaño del botón que mejor se adapte a su pantalla y que destaque según sea necesario. Para los *botones predeterminados*, los tamaños están preestablecidos y no se pueden ajustar.
- **Opacidad del fondo**. Controle la visibilidad del fondo del botón. Puede configurarlo para que sea completamente visible o parcialmente transparente, o mostrar solo la sombra del marco y el icono.


## Otros {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Página de widget](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Otros*

![Página de widget](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distancia por toque](../widgets/radius-ruler.md#distance-by-tap). Permite medir la distancia desde su posición hasta el punto seleccionado.
- [Velocímetro](../widgets/info-widgets.md#speedometer). Muestra la velocidad actual basada en datos GPS y la velocidad limitada basada en [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Los datos mostrados también dependen de la configuración de [Tolerancia de límite de velocidad](../navigation/guidance/voice-navigation.md#speed-limit) de OsmAnd.


### Posición de visualización (Posición de la ubicación en pantalla) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Posición de la ubicación en pantalla* es el nombre de esta configuración en la versión iOS de OsmAnd.

Le permite establecer la ubicación del cursor en *[Mi ubicación](../map/interact-with-map.md#my-location-and-zoom)* en el mapa de OsmAnd. Hay tres opciones disponibles:

- **<Translate android="true" ids="position_on_map_center"/>**. El cursor siempre se posiciona en el centro de la pantalla.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mi ubicación* se coloca ligeramente debajo del centro de la pantalla. Este modo le permite ver más información del mapa por delante de su movimiento, lo cual es útil durante la navegación.
- **<Translate android="true" ids="shared_string_automatic"/>**. Coloca *Mi ubicación* dependiendo de la [Orientación del mapa](../map/interact-with-map.md#map-orientation-modes) (*Inferior* - para la dirección del movimiento, *Centro* - para todos los demás).


## Acciones {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Página de widget](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Cualquier panel*

![Página de widget](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

El acceso a acciones adicionales en la pantalla de Configuración es:

- *Android*. Se encuentra en la pantalla de Configuración en la parte inferior de la pantalla en la sección *Acciones*: *Menú → Configurar pantalla → Acciones*.
- *Android / iOS*. Se encuentra en las pantallas de cada Panel en el *menú de tres puntos* en la esquina superior derecha de la pantalla.

Acciones disponibles:

- **Restablecer a predeterminado**. Esta función le permite restablecer todas las configuraciones a los valores predeterminados si desea empezar de nuevo o usar solo los preestablecidos al iniciar OsmAnd.
- **Copiar de otro perfil**. Esta función le permite importar rápidamente configuraciones de otro perfil, seleccionar las requeridas de la lista y copiar.


## Cambiar perfil {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú de configuración de pantalla](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Para dispositivos **Android**, puede cambiar de perfil en la parte superior de la pantalla de inicio de Configurar pantalla utilizando los iconos de perfil disponibles.
- Si utiliza un dispositivo **iOS**, toque el icono de perfil en la esquina superior de la pantalla de inicio de Configurar pantalla y seleccione el perfil requerido de la lista para activarlo.

**Tenga en cuenta**. La opción *Cambiar perfil* no muestra todos los perfiles existentes, sino solo aquellos que se han *activado* en el menú de Configuración.


## Artículos relacionados {#related-articles}

- [Botones del mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y Regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)
- [Acción rápida](./quick-action.md)

> *Última actualización: julio de 2025*