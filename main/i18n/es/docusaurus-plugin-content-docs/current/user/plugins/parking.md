---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
sidebar_position: 12
title: Posición de estacionamiento
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Descripción general {#overview}

El complemento **Posición de estacionamiento** te ayuda a guardar y administrar la ubicación donde estacionaste tu coche. Te permite colocar un marcador en el mapa, seguir la duración del estacionamiento y, opcionalmente, establecer un recordatorio en el calendario para cuando finalice tu tiempo de estacionamiento.

Este complemento es gratuito y funciona sin conexión con los mapas de OsmAnd descargados. Puedes localizar rápidamente tu vehículo estacionado, estimar la distancia a pie para volver a él y compartir la ubicación del estacionamiento si es necesario.

- Puedes añadir un lugar de estacionamiento manualmente a través del menú contextual.
- Si tiene un límite de tiempo, el complemento registra tanto la hora de inicio como la de finalización.
- La hora de finalización puede activar un recordatorio en el calendario de tu dispositivo.
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


## Parámetros de configuración necesarios {#required-setup-parameters}

Para utilizar un lugar de estacionamiento en el mapa, debes realizar las siguientes configuraciones:

1. Habilita el [complemento de posición de estacionamiento](../plugins/index.md#enable--disable) desde el *Menú principal → Complementos*.
2. Establece un [lugar de estacionamiento](#set-a-spot) en el mapa a través del menú contextual.
3. (Opcional) Añade el [widget de estacionamiento](#parking-widget) a la pantalla para un acceso más rápido.


## Lugar de estacionamiento en el mapa {#parking-spot-on-the-map}

Cuando marcas un lugar de estacionamiento, OsmAnd guarda sus coordenadas geográficas junto con una marca de tiempo. Si es necesario, también se puede añadir un límite de tiempo y un recordatorio en el calendario.


### Establecer un lugar {#set-a-spot}

Para establecer un lugar de estacionamiento en el mapa, haz zoom al nivel requerido, luego mantén pulsado el lugar en el mapa y en el [menú contextual](../map/map-context-menu.md) que se abre, realiza las configuraciones.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Establecer lugar de estacionamiento en Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Establecer límites de tiempo en Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Seleccionar estacionamiento en Acciones en iOS](@site/static/img/plugins/parking/ios_set_p_point2.png) ![Establecer punto de estacionamiento en iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Para colocar un marcador de estacionamiento, haz zoom en el mapa, mantén pulsada la ubicación requerida y abre el [menú contextual](../map/map-context-menu.md). Luego:

1. Pulsa [Acciones](../map/map-context-menu#actions).
2. Selecciona **Marcar como ubicación de estacionamiento** (*Android*) o **Añadir ubicación de estacionamiento** (*iOS*).
3. Elige una de las opciones disponibles:
   - **Tiempo ilimitado**: añade un marcador básico sin cuenta regresiva.
   - **Estacionamiento con tiempo limitado**: te permite establecer una hora de finalización y, opcionalmente, crear un recordatorio en el calendario de tu dispositivo.
4. Confirma para colocar el marcador. La hora de inicio se guarda automáticamente.

:::info Hora de inicio
La hora de inicio siempre se establece automáticamente. Si necesitas cambiar la hora de finalización, debes eliminar y recrear el lugar de estacionamiento. Los recordatorios solo se añaden a tu calendario si seleccionaste esta opción durante la configuración.
:::


### Mantente informado {#stay-informed}

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

Una vez que se guarda un lugar de estacionamiento, OsmAnd te ayuda a monitorear su ubicación y tiempo a través del menú contextual o el [widget de estacionamiento](#parking-widget) opcional.

Puedes ver el marcador de estacionamiento alejando el zoom del mapa o tocando el **widget de estacionamiento**, que centra el mapa en tu lugar guardado. El widget también muestra la distancia desde tu posición actual (o el centro del mapa) hasta la ubicación del estacionamiento.

Se muestran detalles adicionales al tocar el marcador de estacionamiento:

- **Hora de inicio**: el momento en que se colocó el marcador.
- **Tiempo restante** o **Tiempo vencido**: si se estableció un límite de tiempo, esto muestra cuánto tiempo queda o ha pasado desde el vencimiento.
- Si habilitaste el recordatorio del calendario, aparecerá en la aplicación de calendario de tu dispositivo.


### Navegando a un punto de referencia {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Dirigiéndose al punto de estacionamiento en Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Dirigiéndose al punto de estacionamiento en iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Puedes usar el lugar de estacionamiento como destino de navegación para regresar fácilmente a tu vehículo. OsmAnd ofrece dos formas principales de iniciar la navegación a la ubicación de estacionamiento guardada:

**A través del menú de navegación**:

  1. Pulsa el botón **Navegación**.
  2. Elige un perfil.
  3. Pulsa **Establecer destino** y selecciona **Estacionamiento** de la lista de puntos guardados.

**A través del widget de estacionamiento**:

  1. Pulsa el **widget de estacionamiento**.
  2. Pulsa el marcador del lugar de estacionamiento.
  3. Selecciona **Navegación** y elige el perfil que deseas usar.


### Eliminar un lugar {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Acción Eliminar estacionamiento en Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Acción Eliminar estacionamiento en Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Acción Eliminar estacionamiento en iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Para eliminar un marcador de estacionamiento:

1. Localiza el lugar de estacionamiento en el mapa o pulsa el **widget de estacionamiento**.
2. Pulsa el marcador para abrir el menú contextual.
3. Selecciona **Eliminar** o **Descartar**.

Si se estableció un recordatorio en el calendario, también se eliminará automáticamente.


## Widget de estacionamiento {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Elige un panel → Añadir widget → <Translate android="true" ids="map_widget_parking"/>*

![Añadiendo widget de estacionamiento en Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Elige un panel → Añadir widget → <Translate ios="true" ids="parking_place"/>*

![Añadiendo widget de estacionamiento en iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

El [widget de estacionamiento](../widgets/info-widgets.md#parking-widget) muestra la distancia desde el centro de la pantalla hasta la ubicación de estacionamiento guardada y te permite centrar rápidamente el mapa en ese lugar.

- El widget solo es visible después de haber establecido una posición de estacionamiento.
- Si no está ya en pantalla, puedes añadirlo a través del menú [Configurar pantalla](../widgets/configure-screen.md).

Para obtener más información, consulta: [Widgets informativos – Widget de estacionamiento](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (estilos de mapa)](../../user/map/vector-maps.md)

> *Última actualización: mayo de 2025*