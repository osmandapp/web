---
source-hash: 72e0583c731b9fa6013d0075ece872e622be90160d3358a8216e374293cf5f00
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

El complemento **Posición de estacionamiento** le ayuda a guardar y administrar la ubicación donde estacionó su automóvil. Le permite colocar un marcador en el mapa, rastrear la duración del estacionamiento y, opcionalmente, establecer un recordatorio en el calendario para cuando finalice su tiempo de estacionamiento.

Este complemento es gratuito y funciona sin conexión con los mapas de OsmAnd descargados. Puede localizar rápidamente su vehículo estacionado, estimar la distancia a pie de regreso a él y compartir la ubicación del estacionamiento si es necesario.

- Puede añadir un lugar de estacionamiento manualmente a través del menú contextual.
- Si tiene un tiempo limitado, el complemento registra tanto la hora de inicio como la de finalización.
- La hora de finalización puede activar un recordatorio en el calendario de su dispositivo.
- Los detalles del estacionamiento se pueden ver más tarde o utilizar para la navegación.

El marcador es temporal y fácil de quitar una vez que ya no se necesita.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Parámetros de configuración requeridos {#required-setup-parameters}

Para usar un lugar de estacionamiento en el mapa, debe realizar las siguientes configuraciones:

1. Habilite el [complemento Posición de estacionamiento](../plugins/index.md#enable--disable) desde el *Menú principal → Complementos*.
2. Establezca un [lugar de estacionamiento](#set-a-spot) en el mapa a través del menú contextual.
3. (Opcional) Agregue el [widget de estacionamiento](#parking-widget) a la pantalla para un acceso más rápido.


## Lugar de estacionamiento en el mapa {#parking-spot-on-the-map}

Cuando marca un lugar de estacionamiento, OsmAnd guarda sus coordenadas geográficas junto con una marca de tiempo. Si es necesario, también se puede agregar un límite de tiempo y un recordatorio en el calendario.


### Establecer un lugar {#set-a-spot}

Para establecer un lugar de estacionamiento en el mapa, acerque el zoom al nivel requerido, luego mantenga presionado el lugar en el mapa y en el [menú contextual](../map/map-context-menu.md) que se abre, realice las configuraciones.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Para colocar un marcador de estacionamiento, acerque el mapa, mantenga presionado el lugar requerido y abra el [menú contextual](../map/map-context-menu.md). Luego:

1. Toque [Acciones](../map/map-context-menu#actions).
2. Seleccione **Marcar como ubicación de estacionamiento** (*Android*) o **Agregar ubicación de estacionamiento** (*iOS*).
3. Elija una de las opciones disponibles:
   - **Tiempo ilimitado** – agrega un marcador básico sin cuenta regresiva.
   - **Estacionamiento con tiempo limitado** – le permite establecer una hora de finalización y, opcionalmente, crear un recordatorio en el calendario de su dispositivo.
4. Confirme para colocar el marcador. La hora de inicio se guarda automáticamente.

:::info Hora de inicio
La hora de inicio siempre se establece automáticamente. Si necesita cambiar la hora de finalización, debe eliminar y volver a crear el lugar de estacionamiento. Los recordatorios solo se agregan a su calendario si seleccionó esta opción durante la configuración.
:::


### Manténgase informado {#stay-informed}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Una vez que se guarda un lugar de estacionamiento, OsmAnd le ayuda a monitorear su ubicación y horario a través del menú contextual o el [widget de estacionamiento](#parking-widget) opcional.

Puede ver el marcador de estacionamiento acercando o alejando el mapa o tocando el **widget de estacionamiento**, que centra el mapa en su lugar guardado. El widget también muestra la distancia desde su posición actual (o el centro del mapa) hasta la ubicación del estacionamiento.

Se muestran detalles adicionales al tocar el marcador de estacionamiento:

- **Hora de inicio** – el momento en que se colocó el marcador.
- **Tiempo restante** o **Tiempo vencido** – si se estableció un límite de tiempo, esto muestra cuánto tiempo queda o ha pasado desde el vencimiento.
- Si habilitó el recordatorio del calendario, aparecerá en la aplicación de calendario de su dispositivo.


### Navegando a un punto de referencia {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Puede usar el lugar de estacionamiento como destino de navegación para regresar fácilmente a su vehículo. OsmAnd ofrece dos formas principales de iniciar la navegación a la ubicación de estacionamiento guardada:

**A través del menú de navegación**:

1. Toque el botón **Navegación**.
2. Elija un perfil.
3. Toque **Establecer destino** y seleccione **Estacionamiento** de la lista de puntos guardados.

**A través del widget de estacionamiento**:

1. Toque el **widget de estacionamiento**.
2. Toque el marcador del lugar de estacionamiento.
3. Seleccione **Navegación** y elija el perfil que desea usar.


### Eliminar un lugar {#remove-a-spot}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Para eliminar un marcador de estacionamiento:

1. Localice el lugar de estacionamiento en el mapa o toque el **widget de estacionamiento**.
2. Toque el marcador para abrir el menú contextual.
3. Seleccione **Eliminar** o **Descartar**.

Si se estableció un recordatorio en el calendario, también se eliminará automáticamente.


## Widget de estacionamiento {#parking-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vaya a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elija un panel → Agregar widget → <Translate android="true" ids="map_widget_parking"/>*

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vaya a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elija un panel → Agregar widget → <Translate ios="true" ids="parking_place"/>*

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

El [widget de estacionamiento](../widgets/info-widgets.md#parking-widget) muestra la distancia desde el centro de la pantalla hasta la ubicación de estacionamiento guardada y le permite centrar rápidamente el mapa en ese lugar.

- El widget solo es visible después de haber establecido una posición de estacionamiento.
- Si aún no está en pantalla, puede agregarlo a través del menú [Configurar pantalla](../widgets/configure-screen.md).

Para obtener más información, consulte: [Widgets informativos – Widget de estacionamiento](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2025*