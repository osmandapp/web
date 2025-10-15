---
source-hash: cf0423dde10a7ca433bb7c3e8608756683a6e4cd33976dbe8b893d1b6e85cfed
sidebar_position: 7
title:  Acción rápida (Botones personalizados)
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

El widget de Acción Rápida es un elemento interactivo de la interfaz de usuario que proporciona acceso rápido a funciones o acciones clave sin necesidad de abrir ajustes adicionales. Este widget se sitúa en la pantalla principal del mapa y permite simplificar y acelerar la interacción con la aplicación, haciéndola más cómoda y eficiente.  

![Widget de acción rápida](@site/static/img/widgets/quick_action_widget.png)


## Widget de Acción Rápida {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget de acción rápida_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Widget de acción rápida_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

Para usar el botón de Acción Rápida, primero debe habilitar este widget.  

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Añadir y eliminar acciones {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tocar Eliminar (Icono de papelera en la esquina superior derecha) → Seleccionar acciones*

![Widget de acción rápida_android_add](@site/static/img/widgets/quick_action_widget_andr.png)  ![Botón personalizado Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Tocar Editar (Icono de lápiz en la esquina superior derecha) → Seleccionar acciones*

![Widget de acción rápida_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Botón personalizado iOS](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

Todas las acciones están organizadas en el menú **Añadir Acción** y agrupadas por tipo. Se puede encontrar una lista completa de acciones y sus descripciones en la sección [Tipos de acción](#action-types).

Puede asignar una o más [acciones](#action-types) al botón de acción rápida. Hay dos formas de añadir acciones.

- **En la pantalla Configurar**. Seleccione un botón de la lista y toque el&nbsp;  "**＋**"  &nbsp;botón. Primero debe seleccionar el [tipo de acción](#action-types) y luego cambiar su nombre y [parámetros](#action-parameters).
- **En el panel del botón de acción rápida**. Toque el *botón de Acción Rápida* en la pantalla del mapa. Al final de la lista, en la última pantalla del panel, se encuentra el cuadro "**＋**"  &nbsp;*Añadir Acción*. Tóquelo y seleccione una acción de la [lista de tipos](#action-types).


:::note

- Cada acción debe tener un nombre único.
- Las pantallas, etiquetadas numéricamente como Pantalla 1, Pantalla 2, etc., se crean automáticamente cuando el número de acciones en la lista aumenta a 6 elementos.

:::


### Parámetros de acción {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget de acción rápida_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de acción rápida_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

Las acciones asignadas a un botón de acción rápida se agrupan en pantallas. Estos grupos de acciones se abren al tocar ese botón en el mapa. Se crean nuevas pantallas automáticamente cuando la lista de acciones supera los *6 elementos*. Puede reorganizar las acciones según sus preferencias siguiendo estos pasos:  

**Para Android**.

1. A través de la pantalla de configuración:

    - Ir a *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Use *Mantener y Arrastrar* en el icono de dos líneas verticales para reorganizar las acciones.

2. A través del menú de acción rápida:

    - Abra el menú de acción rápida, luego mantenga presionado *Añadir Acción*.
    - Use *Mantener y Arrastrar* en el icono de dos líneas verticales para reorganizar las acciones.  

**Para iOS**.

- Navegue a *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Toque *Editar* (icono de lápiz), luego *Mantener y Arrastrar* en el icono de tres líneas verticales para reorganizar las acciones.

:::info note
Algunas acciones como *Fuente del mapa*, *Estilo del mapa*, *Superposición*, *Subyacente*, *Esquema de color del terreno* y *Añadir perfil* pueden asignarse como un bucle. Cada toque en el botón recorre cíclicamente las capas seleccionadas. Se puede mostrar un diálogo intermedio para seleccionar manualmente de la lista, o ocultarlo para cambiar en el orden definido.
:::


## Botones en la pantalla {#buttons-on-the-screen}

### Botones personalizados {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*  

![Botón personalizado Android](@site/static/img/widgets/custom_button_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  

![Botón personalizado iOS](@site/static/img/widgets/custom_button_ios.png)  

</TabItem>

</Tabs>

**Los botones personalizados** son botones adicionales en el mapa que actúan de la misma manera que el botón de *Acción Rápida*. Puede crear un botón con una o más acciones y mostrarlo en la pantalla del mapa.  Los botones personalizados se encuentran en la lista *Configurar pantalla → Botones → Botones personalizados*. Cada botón tiene una lista de acciones independiente del perfil y debe tener un ***Nombre*** único; sin embargo, un botón puede activarse/desactivarse individualmente para cada **perfil**.

Todas las [acciones](#action-types) disponibles son idénticas a las que se pueden aplicar a la acción rápida predeterminada. Los botones personalizados se pueden configurar como botones de ***Acción única***, que aplican la acción seleccionada inmediatamente al ser tocados, sin necesidad de navegar a través de un menú adicional.

### Apariencia del botón {#button-appearance}

<InfoAndroidOnly/>

![Apariencia del botón de acción rápida](@site/static/img/widgets/qa_button_appearance_andr.png)

Puede modificar la apariencia de los botones de Acción Rápida a través de: *Menú → Configurar pantalla → Botones personalizados → Acción rápida → menú de tres puntos → Apariencia*. Esta configuración ofrece opciones para personalizar el tamaño, la forma, el icono y la opacidad del fondo del botón, ofreciendo un mayor control sobre cómo se ven los botones en su pantalla.  

Para obtener configuraciones de personalización detalladas, consulte el artículo [Configurar pantalla](../widgets/configure-screen.md#button-appearance), donde puede aprender a ajustar la apariencia de cada botón para que coincida con sus preferencias.

### Cambiar posición del botón {#change-button-position}

El widget de *Acción Rápida* aparece en la esquina inferior de la pantalla del mapa la primera vez que lo habilita. Puede mover el widget a cualquier parte de la pantalla manteniéndolo presionado y arrastrándolo. Para una colocación precisa y exacta de los botones en la pantalla del mapa, se alinean automáticamente a la posición de la cuadrícula invisible más cercana al arrastrarlos.

- **Apariencia inicial**. Por defecto, el widget de acción rápida se coloca en la esquina inferior derecha de la interfaz del mapa.

    ![Vista del widget de acción rápida](@site/static/img/widgets/quick_action_widget_view.png)

- **Mover el widget**. Al presionar prolongadamente y arrastrar el widget, puede reposicionarlo en la pantalla, con alineación automática de columnas y filas.  

    ![Toque del widget de acción rápida](@site/static/img/widgets/quick_action_widget_tap.png)

- **Nueva ubicación**. Una vez movido, el widget permanecerá en su nueva posición en la pantalla del mapa hasta que se ajuste manualmente de nuevo.

    ![Mover el widget de acción rápida](@site/static/img/widgets/quick_action_widget_move.png)

- **Múltiples [Botones personalizados](#custom-buttons)**. Puede añadir múltiples botones de acción rápida a la pantalla del mapa. Estos botones también se pueden personalizar y reposicionar individualmente utilizando el mismo método de arrastrar y soltar.

    ![Mover el widget de acción rápida](@site/static/img/widgets/quick_action_widget_multi.png)

### Diseño de cuadrícula para botones {#grid-layout-for-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Cuadrícula para botones_v_android](@site/static/img/widgets/grid_buttons_v_and.png) ![Cuadrícula para botones_h_android](@site/static/img/widgets/grid_buttons_h_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Cuadrícula para botones_v_ios](@site/static/img/widgets/grid_buttons_v_ios.png) ![Cuadrícula para botones_h_ios](@site/static/img/widgets/grid_buttons_h_ios.png)

</TabItem>

</Tabs>

Los [botones del mapa](../widgets/map-buttons.md#overview) se organizan automáticamente utilizando un diseño de cuadrícula. Cada botón se asigna a una de las cuatro esquinas de la pantalla (*superior-izquierda*, *superior-derecha*, *inferior-izquierda*, *inferior-derecha*). Si no hay suficiente espacio en la esquina asignada, los botones se alinean horizontal o verticalmente, dependiendo de la orientación de la pantalla.

Este diseño ayuda a mantener los botones visualmente consistentes y evita superposiciones. Por ejemplo, en una pantalla horizontal, los botones en la esquina derecha se alinearán horizontalmente en la parte inferior de la pantalla, mientras que en una pantalla vertical se expandirán verticalmente hacia arriba o hacia abajo según sea necesario.


## Tipos de acción {#action-types}

### Configurar mapa {#configure-map}

| Acción | Descripción |
|:-------------|:-------------|
| Mostrar / Ocultar <br/> [**Rutas**](../map/vector-maps.md#routes) | Puede seleccionar tipos de ruta para activar o desactivar su visualización. <br/> Algunas rutas tienen configuraciones adicionales. Por defecto, si no ha seleccionado nada en el menú [Configurar mapa](../map/configure-map-menu.md), se asignará el primer tipo de ruta de la lista; de lo contrario, se asignará un tipo de su elección. Puede leer más en el artículo [Rutas](../map/routes.md). <br/> - ***Rutas ciclistas***  &nbsp;(*Ruta*, *Redes de nodos*) <br/> - ***Rutas de bicicleta de montaña***  &nbsp;(*Escala MTB*, *IMBA*) <br/> - ***Rutas de senderismo***  &nbsp;(*OSMC*, *Afiliación a la red*, *Redes de nodos*) <br/> - ***Grado de dificultad de las rutas de senderismo***  &nbsp;(*Escala SAC*, *Escala CAI*) <br/> - ***Pistas de esquí*** <br/> - ***Rutas a caballo*** <br/> - ***Deportes de aguas bravas*** <br/> - ***Rutas de carrera*** <br/> - ***Pistas de fitness*** <br/> - ***Rutas de viaje***  &nbsp;(*Pistas*, *Libros de viaje*, *Puntos*) <br/> |
| Mostrar / Ocultar <br/> [**Capas de topografía**](../plugins/topography.md#overview) | Todos los datos de topografía se presentan como capas de mapa separadas. Puede cambiar rápidamente la visibilidad de estas capas con Acción Rápida. <br/> - ***Curvas de nivel*** <br/> - ***Terreno***  &nbsp;(*Dependiendo de la capa seleccionada en el menú [Configurar mapa](../map/configure-map-menu.md)*, *se mostrará Sombreado*, *Pendiente* o *Altitud*.) |
| Cambiar <br/> [**Esquema de color del terreno**](../plugins/topography.md#modify-color-scheme) | Le permite seleccionar una o más paletas de una lista de las existentes, que cambiarán cuando toque el botón. |
| Mostrar / Ocultar <br/> [**Capas meteorológicas**](../plugins/weather.md#weather-layers) | Todos los datos meteorológicos se presentan como capas de mapa separadas. Con Acción Rápida, puede obtener acceso rápido para cambiar la visibilidad de estas capas en el mapa. <br/> - ***Capa de precipitación*** <br/> - ***Capa de nubes*** <br/> - ***Capa de presión*** <br/> - ***Capa de viento*** <br/> - ***Capa de temperatura*** |
| Abrir <br/> [**Pantalla del tiempo**](../plugins/weather.md) <br /> *Solo Android* | Abre la pantalla de pronóstico del [*Tiempo*](../plugins/weather.md#weather-forecast-screen) con la información detallada. |
| Mostrar / Ocultar <br/> [**Favoritos**](../map/point-layers-on-map.md#favorites) | Mostrar u ocultar los puntos favoritos en el mapa. |
| Mostrar / Ocultar <br/> [**Pistas**](../personal/tracks/manage-tracks.md#track-menu) | Mostrar u ocultar las últimas pistas visibles en el mapa. |
| Mostrar / Ocultar <br/> [**PDI**](../map/point-layers-on-map.md#points-of-interest-pois) | Activar o desactivar la visualización de capas de PDI con categorías seleccionadas en el mapa.<br/>Puede seleccionar múltiples categorías de PDI. La acción reemplaza las categorías de PDI seleccionadas en Configurar mapa sin usar Acciones Rápidas.  |
| Cambiar <br/> [**Modo de mapa**](../map/vector-maps.md#map-mode) | Acceso rápido para cambiar entre los modos diurno y nocturno. |
| Cambiar <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | El botón le permite asignar una única fuente de mapa o una lista de fuentes que cambian circularmente al tocar o con un diálogo intermedio. <br/> - *Mostrar un diálogo intermedio*. Muestra un diálogo con una lista de mapas. <br/> - *No mostrar un diálogo intermedio*. Las fuentes del mapa cambian en un orden definido. <br/> - *Nombre mostrado* - *Fuente del mapa* >. ">" después del nombre del mapa indica qué fuente de mapa está seleccionada actualmente. <br/> - *Nombre mostrado* - > *Siguiente fuente de mapa*. ">" antes del nombre del mapa indica cuál será la siguiente fuente de mapa seleccionada si se ejecuta la acción. <br/> - *Nota*. Para cambiar las fuentes de mapa en OsmAnd, puede configurar una única acción rápida que le permita cambiar entre múltiples fuentes de mapa, o crear varias acciones rápidas separadas, cada una para una fuente de mapa específica. |
| Mostrar / Ocultar <br /> [**Transporte público**](../map/vector-maps.md#transport) | Activar o desactivar la capa del mapa de transporte público <br /> - *Tipo de transporte*. En el primer toque, puede seleccionar uno o varios tipos de transporte, incluyendo *Paradas de transporte*, *Rutas de autobús, trolebús y lanzadera*, *Rutas de tranvía y tren*, *Rutas de metro*. |
| Cambiar <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Crear una lista de fuentes de mapa como superposición de mapa y alternar entre ellas. <br /> - *Nota*. Para cambiar las superposiciones de mapa en OsmAnd, puede configurar una única acción rápida que le permita cambiar entre múltiples superposiciones de mapa, o crear varias acciones rápidas separadas, cada una para una superposición de mapa específica. |
| Cambiar <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Crear una lista de fuentes de mapa como subyacente de mapa y alternar entre ellas. <br /> - *Nota*. Para cambiar las subyacentes de mapa en OsmAnd, puede configurar una única acción rápida que le permita cambiar entre múltiples subyacentes de mapa, o crear varias acciones rápidas separadas, cada una para un subyacente de mapa específico.  |
| Cambiar <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Crear una lista de estilos de mapa para mapas vectoriales y alternar entre ellos. <br /> - *Nota*. Para cambiar los estilos de mapa en OsmAnd, puede configurar una única acción rápida que le permita cambiar entre múltiples estilos de mapa, o crear varias acciones rápidas separadas, cada una para un estilo de mapa específico. |
| Mostrar / Ocultar <br/> [**Capa de Mapillary**](../plugins/mapillary.md) | Le permite ver capas de mapa con imágenes a nivel de calle proporcionadas por Mapillary. |
| Mostrar / Ocultar <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | Puede seleccionar mostrar u ocultar todas las notas de OSM en el mapa con un solo toque del botón. |


### Interfaz {#interface}

| Acción | Descripción |
|:-------------|:-------------|
| Navegar <br/> **Pantalla anterior** | Un interruptor para navegar a la pantalla anterior. |
| Mostrar / Ocultar <br/> [**Vista de navegación**](../navigation/setup/route-navigation.md) | Alterna la visibilidad de la vista de la pantalla de navegación. |
| Mostrar / Ocultar <br/> [**Vista de búsqueda**](../search/search-all.md) | Abre o cierra la vista de búsqueda. |
| Mostrar / Ocultar <br/> [**Menú lateral**](../start-with/main-menu.md) | Alterna la visibilidad del menú lateral principal para acceder a las funciones principales. |
| Activar / Desactivar <br/> [**Bloqueo de pantalla táctil**](../map/interact-with-map.md#touch-screen-lock) | Activa o desactiva el bloqueo de la pantalla táctil para evitar interacciones no deseadas con la pantalla. |


### Interacciones del mapa {#map-interactions}

| Acción | Descripción |
|:-------------|:-------------|
| Mapa <br/> [**Acercar**](../map/interact-with-map.md) | Acercar el mapa aumentando simultáneamente la cantidad de datos mostrados. |
| Mapa <br/> [**Alejar**](../map/interact-with-map.md) | Reducir la escala del mapa. Es conveniente usarlo con el [widget de Desarrollador - Nivel de zoom](../widgets/info-widgets.md#developer-widgets). |
| Mover <br/> [**Mapa hacia abajo**](../map/interact-with-map.md) | Puede usar el botón de acción rápida para mover el mapa hacia abajo.  |
| Mover <br/> [**Mapa hacia arriba**](../map/interact-with-map.md) | Al tocar, la pantalla del mapa se mueve hacia arriba. |
| Mover <br/> [**Mapa a la izquierda**](../map/interact-with-map.md) | Cuando toca el botón, la pantalla del mapa se mueve a la izquierda. |
| Mover <br/> [**Mapa a la derecha**](../map/interact-with-map.md) | Con un botón de acción rápida, puede mover el mapa a la derecha. |
| Mover <br/> [**A Mi ubicación**](../map/interact-with-map.md#my-location-and-zoom) | Mueve el mapa a la posición *Mi ubicación*. |


### Mis lugares {#my-places}

| Acción | Descripción |
|:-------------|:-------------|
| Iniciar / Pausar <br/> [**Grabación de viaje**](../plugins/trip-recording.md#new-track-recording) | Comienza una sesión de grabación de la pista actual o pausa para detenerse temporalmente sin completar el viaje. |
| Iniciar  <br/> [**Nuevo segmento de viaje**](../plugins/trip-recording.md#overview-screen) | Inicia un nuevo segmento del viaje sin detener la grabación general. |
| Guardar <br/> [**Viaje grabado y continuar**](../plugins/trip-recording.md#current-track-recording) | Guarda la grabación del viaje actual y continúa grabando sin interrupción. |
| Finalizar <br/> [**Grabación de viaje**](../plugins/trip-recording.md#current-track-recording) | Finaliza la sesión de grabación del viaje actual. |
| Añadir <br/> [**Favorito**](../map/configure-map-menu.md#map-layers) | Añade un favorito a la ubicación seleccionada (central) del mapa. <br /> - *Mostrar un diálogo intermedio*. Muestra un diálogo de confirmación. <br /> - *Grupo*. Añade un favorito al grupo seleccionado. <br /> - *Color*. Añade un favorito con un color preseleccionado <br /> - *Nombre*. Añade un favorito con el prefijo de nombre especificado.  |
| Añadir <br/> [**Waypoint de pista**](../map/point-layers-on-map.md#track-waypoints) | Añade un nuevo waypoint de pista a la [pista que se está grabando actualmente](../plugins/trip-recording.md) o a [cualquier pista en Mis Lugares](../personal/tracks/manage-tracks.md). <br /> - *Mostrar un diálogo intermedio*. Muestra un diálogo de confirmación. <br /> - *Grupo*. Añade un favorito al grupo seleccionado. <br /> - *Color*. Añade un favorito con un color preseleccionado <br /> - *Nombre*. Añade un favorito con el prefijo de nombre especificado.  |
| Añadir <br/> [**Marcador de mapa**](../map/configure-map-menu.md#map-layers) | Añade un marcador a una ubicación seleccionada (central) del mapa. |
| Añadir <br/> [**Lugar de estacionamiento**](../plugins/parking.md) | Añade un estacionamiento a una ubicación seleccionada (central) del mapa. La posición de estacionamiento anterior se elimina. |
| Añadir <br/> [**PDI**](../map/point-layers-on-map.md#points-of-interest-pois) | Añade un PDI a una ubicación seleccionada (central) del mapa (igual que la acción del menú contextual). <br /> - *Mostrar un diálogo intermedio*. Muestra un diálogo de confirmación. <br /> - *Tipo de PDI* (opcional). Preselecciona el tipo de PDI de OSM. <br /> - *Etiqueta/Valor* (múltiple). Añade etiquetas / valores de [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| Añadir <br/> [**Nota OSM**](../plugins/osm-editing.md#create--modify-osm-note) | Añade una [nota de OSM](https://wiki.openstreetmap.org/wiki/Notes)  <br /> - *Mostrar un diálogo intermedio*. Muestra un diálogo de confirmación. <br /> - *Mensaje*. Añade un mensaje predeterminado a la nota. |
| Añadir <br/> [**Notas multimedia**](../plugins/audio-video-notes.md) | Inicia la grabación de notas de audio / foto / video para una ubicación seleccionada (central) del mapa. |
| Crear <br/> [**Nueva ruta**](../plan-route/create-route.md) <br /> *Solo Android* | Abre la herramienta [Planificar una ruta](../plan-route/create-route.md) y crea una ruta para la ubicación seleccionada (central) en el mapa. |


### Navegación {#navigation}

| Acción | Descripción |
|:-------------|:-------------|
| Añadir <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | Puede seleccionar el centro de la pantalla del mapa como el primer punto intermedio. El destino anterior permanece igual. |
| Activar / Desactivar <br/> [**Indicaciones de voz**](../navigation/guidance/voice-navigation.md) | Silenciar o activar la guía de voz durante la navegación. |
| Establecer <br/> [**Punto de inicio**](../navigation/setup/route-navigation.md#set-destinations) | Marcar una ubicación seleccionada (central) del mapa como punto de partida. |
| Establecer <br/> [**Destino**](../navigation/setup/route-navigation.md#set-destinations) | Añadir la ubicación seleccionada (central) en el mapa como destino. El destino anterior se convierte en el último punto intermedio.  |
| Reemplazar <br/> [**Destino**](../navigation/setup/route-navigation.md#intermediate-destinations) | Establecer / Reemplazar una ubicación seleccionada (central) del mapa como destino. El destino anterior se elimina. |
| Activar /Desactivar <br/> [**Zoom automático del mapa**](../map/interact-with-map.md) | Activar o desactivar el zoom automático del mapa durante la navegación. |
| Iniciar/detener <br/> [**Navegación**](../navigation/setup/route-navigation.md#start--stop-navigation) | Iniciar la navegación (si hay un punto de destino presente) o detener la navegación. |
| Pausar / Reanudar <br/> [**Navegación**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pausar / Reanudar la navegación. |
| Eliminar <br/> [**Siguiente punto de destino**](../navigation/setup/route-navigation.md#intermediate-destinations) | Elimina el siguiente punto intermedio, si está presente; de lo contrario, elimina el destino y muestra el diálogo de finalización de la navegación. La acción está inactiva si no tiene ningún destino. |
| Simular <br/> [**Ubicación por GPX**](../plugins/development.md#gpx-track-simulation) | Simula la ubicación y el movimiento de su dispositivo utilizando una pista GPX. |


### Ajustes {#settings}

| Acción | Descripción |
|:-------------|:-------------|
| Cambiar <br/> [**Perfil de la aplicación**](../personal/profiles.md) | Crear una lista de perfiles de aplicación y alternar entre ellos.  <br /> - *Mostrar un diálogo intermedio*. Muestra un diálogo con una lista de perfiles. <br /> - *No mostrar un diálogo intermedio*. Los perfiles cambian en un orden definido. <br /> - *Nota*. Puede personalizar una única acción que le permita cambiar entre múltiples perfiles, o crear varias acciones separadas, cada una para un perfil específico. |
| Cambiar <br/> [**Perfil de la aplicación al siguiente**](../personal/profiles.md) | Cambia al siguiente perfil de la lista. |
| Cambiar <br/> [**Perfil de la aplicación al anterior**](../personal/profiles.md) | Cambia al perfil anterior de la lista. |
| Cambiar <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> (iOS **Posición de ubicación en la pantalla**)  | Le permite establecer la ubicación del cursor *Mi ubicación* en el mapa. Activa o desactiva que el cursor esté siempre en el centro de la pantalla. |


## Usar teclado para acciones {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![Dispositivos externos](@site/static/img/map/external_custom_2_andr.png)

Utilizando la funcionalidad de la herramienta de Acción Rápida, puede asignar las acciones deseadas a las teclas de su dispositivo de entrada externo. Una descripción se puede encontrar en el artículo [Interactuar con el mapa](../map/interact-with-map.md#custom-input-device-type).


## Artículos relacionados {#related-articles}

- [Configurar pantalla](./configure-screen.md)
- [Botones del mapa](./map-buttons.md)
- [Widgets de información](./info-widgets.md)
- [Widgets de navegación](./nav-widgets.md)
- [Regla de radio y regla](./radius-ruler.md)
- [Widgets de marcadores](./markers.md)