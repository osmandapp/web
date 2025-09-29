---
source-hash: f123896d95f1b5ffa0ac74f2f92003e9fb8399728279d510e237d35cf9dd3f4d
sidebar_position: 1
title:  Configurar pantalla
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

El menú **Configurar pantalla** en OsmAnd le permite personalizar la interfaz del mapa agregando y organizando widgets, botones y acciones rápidas en múltiples paneles.

Usted puede:

- Añadir widgets [informativos](../widgets/info-widgets.md), [de navegación](../widgets/nav-widgets.md) y [relacionados con marcadores](../widgets/markers.md).
- Añadir o editar [Acciones rápidas](../widgets/quick-action.md), [Botones personalizados](../widgets/quick-action.md#custom-buttons) y [Botones predeterminados](../widgets/map-buttons.md).
- Organizar widgets en paneles (superior, inferior, izquierdo, derecho, central).
- Crear múltiples **páginas** dentro de los paneles laterales, elegir el tamaño de los widgets.
- Elegir la altura de la fila y alternar los iconos de los widgets.

Todos los widgets son [dependientes del perfil](../personal/profiles.md) — cada perfil tiene su propio diseño, orden, visibilidad y configuración.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Ir a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

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
Puede agregar, reordenar, agrupar y eliminar widgets en los siguientes paneles:

- **Panel superior**
- **Panel inferior**
- **Panel izquierdo**
- **Panel derecho**

Cada panel admite diferentes comportamientos de diseño:

- Los **paneles superior e inferior** muestran los widgets en filas. Puede colocar uno o dos widgets por fila y agregar varias filas si es necesario.
- Los **paneles izquierdo y derecho** admiten varias páginas. Puede agrupar widgets en páginas separadas y cambiar entre ellas.


### Catálogo de widgets {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Widgets de navegación:***  

- [Rumbo](../widgets/nav-widgets.md#bearing-widget).  
    Este conjunto muestra el rumbo absoluto o relativo a un objetivo en unidades angulares.  
    Se incluyen 3 widgets: *Rumbo relativo*, *Rumbo magnético*, *Rumbo verdadero*.

- [Perfil de elevación](../widgets/nav-widgets#elevation-widget) (*Solo superior/inferior*, *Solo Android*).  
    Muestra la elevación y la pendiente de la ruta.

- [Carriles](../widgets/nav-widgets#lanes) (*Solo superior/inferior*).  
    Guía visual de carriles.

- [Barra de marcadores de mapa](../widgets/markers.md#configure-marker-widgets) (*Solo superior/inferior*).  
    Muestra la distancia/dirección a los marcadores guardados.  
    Configurable para 1 o 2 marcadores.

- [Punto de navegación](../widgets/nav-widgets.md#navigation-points).  
    El conjunto muestra la distancia restante a un destino, punto intermedio, hora de llegada a un punto intermedio o tiempo de viaje para una ruta calculada.  
    Se incluyen 4 widgets: [Distancia al destino](../widgets/nav-widgets.md#distance-to-destination), [Distancia a punto intermedio](../widgets/nav-widgets.md#distance-to-intermediate), [Tiempo hasta punto intermedio](../widgets/nav-widgets.md#time-to-intermediate), [Tiempo hasta el destino](../widgets/nav-widgets.md#time-to-destination).

- [Maniobras de ruta](../widgets/nav-widgets.md#next-turn) (*Solo panel izquierdo/derecho*).  
    Este conjunto se activa durante la navegación y muestra la distancia y la flecha a la siguiente maniobra.  
    Se incluyen 3 widgets: *Próximo giro*, *Próximo giro (pequeño)*, *Segundo próximo giro*.

- [Límite de velocidad](../widgets/nav-widgets.md#speed-limit).  
    Muestra el límite de velocidad actual para la carretera.

- [Velocímetro](../widgets/info-widgets.md#speedometer).  
    Muestra la velocidad actual basada en datos de GPS y la velocidad limitada basada en [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Nombre de la calle](../widgets/nav-widgets#street-name) (*Solo superior/inferior*).  
    Muestra la calle actual o la próxima.

<br/>

***Widgets informativos:***

- [Altitud](../widgets/info-widgets.md#altitude-widgets).  
    El conjunto muestra la altitud sobre el nivel del mar para la ubicación actual o para el centro del mapa actual.  
    Se incluyen 2 widgets: *Altitud: ubicación actual*, *Elevación: centro del mapa*.

- [Velocidad media](../widgets/info-widgets.md#average-speed).  
    Muestra la velocidad media del viaje actual.

- [Nivel de batería](../widgets/info-widgets.md#battery-level).  
    Muestra el nivel de batería del dispositivo.

- [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget) (*Solo superior/inferior*).  
    Este conjunto muestra las coordenadas geográficas de la geolocalización actual.  
    Se incluyen 2 widgets: *Coordenadas: centro del mapa*, *Coordenadas: ubicación actual*.

- [Velocidad actual](../widgets/info-widgets.md#current-speed).  
    Muestra la velocidad del sensor GPS.

- [Hora actual](../widgets/info-widgets.md#current-time).  
    Muestra la hora actual del sistema.

- [Tasa de planeo](../widgets/info-widgets.md#glide-ratio).  
    Los widgets muestran la tasa de planeo al objetivo y la tasa de planeo media para el vuelo actual.  
    Se incluyen 2 widgets: *Tasa de planeo al objetivo*, *Tasa de planeo media*.

- [Información GPS](../widgets/info-widgets.md#gps-info) (*Solo Android*).  
    Muestra el número de satélites detectados.

- [Marcadores de mapa](../widgets/markers.md).  
    El conjunto muestra la distancia o la hora estimada de llegada (ETA) para los dos primeros marcadores en [la lista](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Se incluyen 2 widgets: *Primer marcador*, *Segundo marcador*.

- [Regla de radio](../widgets/info-widgets.md#radius-ruler).  
    Muestra la distancia entre su ubicación y un punto en el mapa, rodeado por la [herramienta Regla de radio](../widgets/radius-ruler.md).

- [Amanecer, atardecer](../widgets/info-widgets.md#sun-position).  
    Muestra la hora del próximo amanecer o atardecer para el centro del mapa.  
    Se incluyen 2 widgets: *Amanecer*, *Atardecer*.

<br/>

***Widgets basados en complementos:***  

- [Notas de audio/vídeo](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Acceso rápido para capturar medios.  
    Se incluyen 4 widgets: *Bajo demanda*, *Grabar audio*, *Grabar vídeo*, *Hacer una foto*.

- [Widgets de desarrollador](../widgets/info-widgets.md#developer-widgets).  
    Muestra información opcional.  
    Se incluyen 5 widgets: *FPS de renderizado de mapa*, *Inclinación de cámara*, *Elevación de cámara*, *Nivel de zoom*, *Distancia de la cámara al objetivo*, *RAM disponible*.  

- [Widgets de sensores externos](../widgets/info-widgets.md#external-sensors-widgets).  
    El conjunto ayuda a rastrear datos de sensores BLE/ANT+ en tiempo real.  
    Se incluyen 6 widgets: *Frecuencia cardíaca*, *Potencia de bicicleta* (*Solo Android*), *Cadencia de bicicleta*, *Velocidad de bicicleta*, *Distancia de bicicleta*, *Temperatura*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Abre la aplicación Mapillary para imágenes a nivel de calle.

- [Estado de OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Acceso rápido a la [aplicación OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Widget de aparcamiento](../widgets/info-widgets.md#parking-widget).  
    Distancia desde el centro de la pantalla hasta la ubicación de aparcamiento guardada.

- [Grabación de viaje](../widgets/info-widgets.md#trip-recording-widgets).  
    Inicia y detiene la grabación de la ruta y muestra los datos de la grabación de la ruta.  
    Se incluyen 4 widgets: *Distancia*, *Duración*, *Ascenso*, *Descenso*.

- [Tiempo](../widgets/info-widgets.md#weather-widgets).  
    Muestra información meteorológica detallada.  
    Se incluyen 5 widgets: *Temperatura*, *Presión del aire*, *Viento*, *Nubes*, *Precipitación*.

:::note Widgets dependientes del panel

- Solo disponibles en los **paneles superior e inferior** y deben colocarse en filas separadas: *Widgets de coordenadas, Widget de perfil de elevación, Widget de carriles, Barra de marcadores de mapa, Widget de nombre de calle*.
- Solo disponibles en los **paneles izquierdo y derecho**: *Maniobras de ruta*.

:::


### Filas {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



La función **Modo de fila** le permite agregar tantas filas como sea necesario a los paneles superior e inferior. Puede mostrar varios widgets por fila, aumentando la cantidad de información visible.

***Cómo configurar filas:***

- **Añadir widgets**: Toque el botón *Más* (Android) o *Añadir widget* (iOS), luego seleccione de la lista de widgets disponibles.
- **Reordenar widgets**: Toque el botón *Lápiz* (Android) o *Editar* (iOS) para reorganizar los widgets.
- **Añadir filas**: Toque el botón *Añadir fila* para crear nuevas filas para sus widgets.
- **Mover widgets**: Arrastre los widgets entre diferentes filas.
- **Acceder a la configuración del widget**: Toque el icono *"i"* (Android) o la flecha *">"* (iOS) para abrir la configuración del widget.
- **Guardar cambios**: Toque *Aplicar* (Android) o *Hecho* (iOS) para guardar el diseño.


#### Tipos de widgets y restricciones {#widget-types-and-restrictions}

El modo le permite agregar **más de un widget en una sola fila** en los paneles superior e inferior para mostrar tanta información como sea necesario.  

- **Widgets complejos**. Solo se puede agregar un widget complejo por fila. Estos incluyen:
    - [Barra de marcadores de mapa (*Solo Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Nombre de la calle](../widgets/nav-widgets#street-name)
    - [Widgets de coordenadas](../widgets/info-widgets#coordinates-widget)
    - [Carriles](../widgets/nav-widgets#lanes)
    - [Perfil de elevación (*Solo Android*)](../widgets/nav-widgets#elevation-widget)
    - [Maniobras de ruta](../widgets/nav-widgets.md#next-turn)

- **Widgets simples**. Se pueden agregar varios widgets simples a una sola fila. Estos widgets pueden mostrar *Nombre*, *Unidades de medida*, *Valor* e *Icono*.


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

Los widgets en los paneles derecho e izquierdo se pueden agrupar en **Páginas**. La función **Modo de páginas** le permite agregar 5 páginas a los paneles izquierdo y derecho.

***Cómo configurar filas:***

- **Añadir una página**. Vaya a la configuración del panel izquierdo/derecho y toque *Editar → Añadir página*.
- **Organizar widgets por página**. Esta función es útil cuando se necesitan diferentes conjuntos de widgets para diferentes tareas, como navegar en lugar de explorar el mapa.
- Las páginas le permiten crear **conjuntos de widgets** para escenarios específicos, mejorando el flujo de trabajo y reduciendo el desorden.


## Ajustes de widget {#widget-settings}

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Opciones de tamaño de widget** (*para todos los paneles*):  
    Puede personalizar el tamaño de los **Widgets simples** en los **paneles superior, inferior, izquierdo y derecho**:

    - **Pequeño**. Ideal para pantallas compactas, ahorrando más espacio en la pantalla para los mapas.
    - **Mediano** (*tamaño de widget predeterminado*). Equilibra la visibilidad y el uso del espacio.
    - **Grande**. Proporciona información de widget más grande y visible.  

2. **Ocultar iconos de widgets** (*para los paneles superior e inferior*):

    - Mejora la claridad y maximiza el espacio para datos importantes.
    - Especialmente útil al mostrar muchos widgets en la misma **fila**.

3. **Tamaño individual para diferentes filas** (*para todos los paneles*):

    - Los widgets se pueden dimensionar individualmente ajustando el tamaño de la fila y la columna.
    - **NOTA:** Cambiar el tamaño de un widget en una fila/columna cambiará el tamaño de todos los widgets en esa fila/columna.

4. **Para cambiar el tamaño del widget y la visibilidad del icono:**

    - Seleccione un widget que ya haya agregado al panel.  
    - Toque el icono de *Ajustes* en el lado derecho del campo del widget.
    - Toque el ajuste *Tamaño* y seleccione uno de los tamaños disponibles.
    - Cambie a la posición de apagado, en el campo *Mostrar icono*.


## Personalización de paneles {#panels-customization}

### Menú contextual del widget {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú contextual del widget](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú contextual del widget](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

El **menú contextual del widget** proporciona una forma rápida de administrar y configurar widgets directamente desde la pantalla del mapa. Puede acceder a él ***manteniendo presionado*** cualquier widget para personalizar el diseño de los widgets sin salir del mapa.


- **Añadir widget a la derecha/izquierda** (solo para *paneles superior e inferior*)
    - Seleccione una posición para el nuevo widget en relación con el actual.
    - Elija el widget de la lista de [Widgets disponibles](#widgets-catalog).

- **Añadir widget arriba/abajo** (solo para *paneles izquierdo y derecho*)
    - Seleccione si desea colocar el nuevo widget arriba o abajo del widget actual.
    - Toque el widget requerido en la lista para agregarlo a la posición especificada.

- **Ajustes**
    - Acceda a la configuración del widget (si está disponible) para personalizar su apariencia o comportamiento.

- **Eliminar**
    - Elimine el widget del panel.
    - Un aviso de confirmación garantiza que la acción sea intencional.

- **Restablecer velocidad media** (ejemplo de *Acciones específicas del widget*)
    - Disponible para el widget [Velocidad media](../widgets/info-widgets.md#average-speed).
    - Mantenga presionado para restablecer instantáneamente el valor de la velocidad durante un viaje.


### Copias de widgets {#copies-of-widgets}

*Menú de OsmAnd → Configurar pantalla → Widgets → Panel*  

![Duplicado de widget](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd le permite agregar múltiples instancias del mismo widget a diferentes paneles o páginas. Esta función es particularmente útil cuando necesita información consistente en diferentes vistas o perfiles.  

***Cómo duplicar widgets:***

- **Añadir el widget**. Vaya a: *Menú de OsmAnd → Configurar pantalla → Widgets → Panel →* **Añadir** *widget*.
- **Duplicar usando el menú contextual**. Toque el widget y seleccione **Duplicar** de la lista de acciones.
- **Método alternativo**. Seleccione el mismo widget de la lista de *Widgets disponibles* y toque *Añadir*.


### Mover o eliminar {#move-or-delete}

*Menú de OsmAnd → Configurar pantalla → Widgets → Panel*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Puede reorganizar o eliminar widgets de la pantalla de la aplicación utilizando el modo **Editar**.  

***Cómo mover un widget:***

- Vaya a: *Menú de OsmAnd → Configurar pantalla → Widgets → Panel → Botón Editar*.
- Mantenga presionado el **icono a la derecha** del widget.
- Arrástrelo a la posición requerida en la lista de widgets.

***Cómo eliminar un widget:***  

- Siga los mismos pasos que arriba.
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

**Acción rápida (Botones personalizados)** le permite agregar una lista de acciones individuales de todas las [Acciones rápidas](../widgets/quick-action.md#custom-buttons) disponibles. Estas acciones se pueden asignar a uno o más botones de widget en la pantalla del mapa. Los botones personalizados proporcionan un acceso rápido a las acciones de uso frecuente.

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

1. Los **Botones predeterminados** le permiten personalizar qué botones de mapa preestablecidos son visibles en la pantalla del mapa. Puede elegir ocultar o mostrar los siguientes botones:

    - [Modo 3D](../widgets/map-buttons.md#3d-mode). Para iOS, el botón siempre está disponible. Para Android, aparece en la lista y está disponible para configurar si se selecciona el motor de renderizado de mapas [Versión 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Brújula](../widgets/map-buttons.md#display-options). Indica cómo está orientado el mapa en el dispositivo.  
    3 vistas: *Siempre visible*, *Siempre oculto*, *Visible si el mapa está girado*.

    - [Configurar mapa](../map/configure-map-menu.md). Acceda a opciones para modificar el estilo del mapa, las capas y configuraciones adicionales.

    - [Menú](../widgets/map-buttons.md#main-menu). Abre el menú principal de la aplicación para acceder a todas las funciones.

    - [Mi ubicación](../widgets/map-buttons.md#my-location-and-zoom). Centra el mapa en su posición actual.

    - [Navegación](../widgets/map-buttons.md#directions). Esencial para la planificación de rutas y el inicio de la navegación.

    - [Buscar](../widgets/map-buttons.md#search). Abre la herramienta de búsqueda para encontrar ubicaciones.

    - [Acercar / alejar](../widgets/map-buttons.md#my-location-and-zoom). Ajusta el nivel de zoom del mapa para mostrar más o menos detalles.

2. El **menú de tres puntos** en la pantalla de Botones predeterminados contiene acciones como:

    - *Restablecer a predeterminado*. Le permite devolver la configuración de los botones a su apariencia original.
    - *Copiar desde otro perfil*. Seleccione de qué perfil de la lista ofrecida desea copiar la configuración de los botones.

3. **La apariencia del botón predeterminado** (*Solo Android*) ofrece una variedad de opciones de personalización para este tipo de botones. Para modificar la apariencia de un botón, toque el botón requerido de la lista y seleccione la opción [Apariencia](#button-appearance).


### Apariencia del botón {#button-appearance}

<InfoAndroidOnly/>

![Apariencia del botón](@site/static/img/widgets/button_appearance_settings_andr.png)

La función *Apariencia del botón* le permite personalizar completamente el aspecto de los botones en la interfaz de su mapa. Estas opciones de personalización están disponibles tanto para *Acción rápida (Botones personalizados)* como para *Botones predeterminados*, proporcionando un control completo sobre la apariencia de la interfaz del mapa y permitiendo ajustes precisos en el diseño de los botones.

***Opciones de personalización***:

- **Icono**. Seleccione de una lista de iconos que representan acciones que ya ha agregado, lo que facilita la identificación de funciones de un vistazo.
- **Radio de esquina**. Ajuste esta configuración para cambiar la forma del botón, desde esquinas afiladas y cuadradas hasta bordes suaves y redondeados.
- **Tamaño**. Elija el tamaño del botón que mejor se adapte a su pantalla y se destaque según sea necesario. Para los *Botones predeterminados*, los tamaños están preestablecidos y no se pueden ajustar.
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
- [Distancia por toque](../widgets/radius-ruler.md#distance-by-tap). Da la capacidad de medir la distancia desde su posición hasta el punto seleccionado.
- [Velocímetro](../widgets/info-widgets.md#speedometer). Muestra la velocidad actual basada en datos de GPS y la velocidad limitada basada en [datos de OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Los datos mostrados también dependen de la configuración de [Tolerancia de límite de velocidad](../navigation/guidance/voice-navigation.md#speed-limit) de OsmAnd.


### Posición en pantalla (Posición de la ubicación en la pantalla) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Página de widget](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Posición de la ubicación en la pantalla* es el nombre de esta configuración en la versión de iOS de OsmAnd.  

Le permite establecer la ubicación del cursor en *[Mi ubicación](../map/interact-with-map.md#my-location-and-zoom)* en el mapa de OsmAnd. Hay tres opciones disponibles:  

- **<Translate android="true" ids="position_on_map_center"/>**. El cursor siempre se posiciona en el centro de la pantalla.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Mi ubicación* se coloca ligeramente por debajo del centro de la pantalla. Este modo le permite ver más información del mapa por delante de su movimiento, lo cual es útil durante la navegación.
- **<Translate android="true" ids="shared_string_automatic"/>**. Coloca *Mi ubicación* dependiendo de la *[Orientación del mapa](../map/interact-with-map.md#map-orientation-modes)* (*Inferior* - para la dirección del movimiento, *Centro* - para todos los demás).


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

El acceso a acciones adicionales en la pantalla Configurar es:

- *Android*. Ubicado en la pantalla Configurar en la parte inferior de la pantalla en la sección *Acciones*: *Menú → Configurar pantalla → Acciones*.
- *Android / iOS*. Ubicado en las pantallas de cada Panel en el *menú de tres puntos* en la esquina superior derecha de la pantalla.

Acciones disponibles:

- **Restablecer a predeterminado**. Esta función le permite restablecer todas las configuraciones a los valores predeterminados si desea comenzar de nuevo, o usar solo las preestablecidas al iniciar OsmAnd.
- **Copiar desde otro perfil**. Esta función le permite importar rápidamente configuraciones de otro perfil, seleccionar las requeridas de la lista y copiar.


## Cambiar perfil {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Menú Configurar pantalla](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Para dispositivos **Android**, puede cambiar de perfil en la parte superior de la pantalla de inicio de Configurar pantalla utilizando los iconos de perfil disponibles.  
- Si está utilizando un dispositivo **iOS**, toque el icono de perfil en la esquina superior de la pantalla de inicio de Configurar pantalla y seleccione el perfil requerido de la lista para activarlo.  

**Tome nota**: La opción *Cambiar perfil* no muestra todos los perfiles existentes, sino solo aquellos que han sido *activados* en el menú de Configuración.


## Artículos relacionados {#related-articles}

- [Botones del mapa](./map-buttons.md)
- [Widgets informativos](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y Regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)
- [Acción rápida](./quick-action.md)