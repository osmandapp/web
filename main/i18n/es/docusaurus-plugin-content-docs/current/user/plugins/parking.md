---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
sidebar_position: 12
title:  Posición de estacionamiento
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Resumen {#overview}

El complemento **Posición de estacionamiento** le ayuda a guardar y gestionar la ubicación donde estacionó su coche. Le permite colocar un marcador en el mapa, hacer un seguimiento de la duración del estacionamiento y, opcionalmente, establecer un recordatorio en el calendario para cuando finalice su tiempo de estacionamiento.

Este complemento es gratuito y funciona sin conexión con los mapas de OsmAnd descargados. Puede localizar rápidamente su vehículo estacionado, estimar la distancia a pie de vuelta a él y compartir la ubicación del estacionamiento si es necesario.

- Puede añadir un lugar de estacionamiento manualmente a través del menú contextual.
- Si el tiempo es limitado, el complemento registra tanto la hora de inicio como la de finalización.
- La hora de finalización puede activar un recordatorio en el calendario de su dispositivo.
- Los detalles del estacionamiento se pueden ver más tarde o utilizar para la navegación.

El marcador es temporal y fácil de eliminar una vez que ya no se necesita.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de estacionamiento Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de estacionamiento iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para utilizar un lugar de estacionamiento en el mapa, debe realizar los siguientes ajustes:

1. Habilite el [complemento Posición de estacionamiento](../plugins/index.md#enable--disable) desde el *Menú principal → Complementos*.  
2. Establezca un [lugar de estacionamiento](#set-a-spot) en el mapa a través del menú contextual.
3. (Opcional) Añada el [widget de estacionamiento](#parking-widget) a la pantalla para un acceso más rápido.  


## Lugar de estacionamiento en el mapa {#parking-spot-on-the-map}

Cuando marca un lugar de estacionamiento, OsmAnd guarda sus coordenadas geográficas junto con una marca de tiempo. Si es necesario, también se puede añadir un límite de tiempo y un recordatorio en el calendario. Los lugares de estacionamiento se guardan como **puntos favoritos**. Para asegurarse de que el marcador de estacionamiento sea visible en el mapa, debe habilitar [Favoritos](../personal/favorites.md).


### Establecer un lugar {#set-a-spot}

Para establecer un lugar de estacionamiento en el mapa, acerque el zoom al nivel requerido, luego mantenga pulsado el lugar en el mapa y en el [Menú contextual](../map/map-context-menu.md) que se abre, realice los ajustes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Establecer lugar de estacionamiento en Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Establecer límites de tiempo en Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleccionar Estacionamiento en Acciones en iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Establecer punto de estacionamiento en iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Para colocar un marcador de estacionamiento, acerque el mapa, mantenga pulsada la ubicación requerida y abra el [menú contextual](../map/map-context-menu.md). Luego:

1. Pulse [Acciones](../map/map-context-menu#actions).
2. Seleccione **Marcar como ubicación de estacionamiento** (*Android*) o **Añadir ubicación de estacionamiento** (*iOS*).
3. Elija una de las opciones disponibles:
   - **Tiempo ilimitado** – añade un marcador básico sin cuenta atrás.
   - **Estacionamiento con tiempo limitado** – le permite establecer una hora de finalización y, opcionalmente, crear un recordatorio en el calendario de su dispositivo.
4. Confirme para colocar el marcador. La hora de inicio se guarda automáticamente.

:::info Hora de inicio
La hora de inicio siempre se establece automáticamente. Si necesita cambiar la hora de finalización, debe eliminar y volver a crear el lugar de estacionamiento. Los recordatorios solo se añaden a su calendario si seleccionó esta opción durante la configuración.
:::


### Manténgase informado {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Widget de estacionamiento Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Tiempo restante en Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget de estacionamiento iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Información de estacionamiento en iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Una vez que se guarda un lugar de estacionamiento, OsmAnd le ayuda a supervisar su ubicación y tiempo a través del menú contextual o del [widget de estacionamiento](#parking-widget) opcional.

Puede ver el marcador de estacionamiento alejando el mapa o pulsando el **widget de estacionamiento**, que centra el mapa en su lugar guardado. El widget también muestra la distancia desde su posición actual (o el centro del mapa) hasta la ubicación del estacionamiento.

Se muestran detalles adicionales al pulsar el marcador de estacionamiento:

- **Hora de inicio** – el momento en que se colocó el marcador.
- **Tiempo restante** o **Tiempo excedido** – si se estableció un límite de tiempo, esto muestra cuánto tiempo queda o ha pasado desde la expiración.
- Si habilitó el recordatorio del calendario, aparecerá en la aplicación de calendario de su dispositivo.


### Navegar a un punto de ruta {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dirigiéndose al punto de estacionamiento en Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dirigiéndose al punto de estacionamiento en iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Puede utilizar el lugar de estacionamiento como destino de navegación para volver fácilmente a su vehículo. OsmAnd ofrece dos formas principales de iniciar la navegación hacia la ubicación de estacionamiento guardada:

**A través del menú de navegación**:

  1. Pulse el botón **Navegación**.  
  2. Elija un perfil.  
  3. Pulse **Establecer destino** y seleccione **Estacionamiento** de la lista de puntos guardados.

**A través del widget de estacionamiento**:

  1. Pulse el **widget de estacionamiento**.  
  2. Pulse el marcador del lugar de estacionamiento.  
  3. Seleccione **Navegación** y elija el perfil que desea utilizar.


### Eliminar un lugar {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acción Eliminar Estacionamiento en Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Acción Eliminar Estacionamiento en iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Para eliminar un marcador de estacionamiento:

1. Localice el lugar de estacionamiento en el mapa o pulse el **widget de estacionamiento**.
2. Pulse el marcador para abrir el menú contextual.
3. Seleccione **Eliminar** o **Descartar**.

Si se estableció un recordatorio en el calendario, también se eliminará automáticamente.


## Widget de estacionamiento {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Añadir widget → <Translate android="true" ids="map_widget_parking"/>*  

![Añadiendo widget de estacionamiento en Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Añadir widget → <Translate ios="true" ids="parking_place"/>*  

![Añadiendo widget de estacionamiento en iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

El [widget de estacionamiento](../widgets/info-widgets.md#parking-widget) muestra la distancia desde el centro de la pantalla hasta la ubicación de estacionamiento guardada y le permite centrar rápidamente el mapa en ese lugar.

- El widget solo es visible después de que se haya establecido una posición de estacionamiento.
- Si aún no está en la pantalla, puede añadirlo a través del menú [Configurar pantalla](../widgets/configure-screen.md).

Para saber más, consulte: [Informational Widgets – Parking Widget](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Ajustes globales](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)