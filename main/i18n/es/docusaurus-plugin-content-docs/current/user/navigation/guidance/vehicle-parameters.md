---
source-hash: d8eea89d132b8d0c465d31c1f6c3db15ee3bfaea91b54f6c6164a55ad5c97c3e
sidebar_position: 4
title:  Parámetros del vehículo
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



## Resumen

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Para un cálculo óptimo de la ruta en OsmAnd, debe tener en cuenta los siguientes parámetros del vehículo:

1. Establezca la [*Velocidad por defecto* o *Velocidades en carretera*](#road-speeds), como la [velocidad mínima y máxima](#road-speeds) del vehículo. Esto ayudará a la aplicación a determinar el tiempo necesario para completar la ruta y le permitirá elegir la mejor ruta, teniendo en cuenta los límites de velocidad en los diferentes segmentos de la carretera.
2. Especifique el [*tipo*](#fuel-used-by-motor) de combustible utilizado por el motor. Esto permitirá a la aplicación estimar las emisiones de CO2.
3. Introduzca la [*capacidad de su depósito*](#fuel-tank-capacity) para realizar un seguimiento preciso del nivel y el consumo de combustible.
4. Defina los [*parámetros de tamaño y peso*](#size-parameters) de su vehículo, que pueden ayudar a la aplicación a calcular la ruta óptima y evitar obstáculos en la carretera debidos a restricciones.

La configuración correcta de los parámetros en la aplicación OsmAnd le ayudará a evitar problemas al navegar por una ruta, a elegir la más adecuada según el tipo de vehículo y las restricciones de la carretera, y a calcular el tiempo de su viaje.


## Parámetros de tamaño {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Los parámetros del vehículo afectan a la navegación y a la construcción de la ruta porque determinan la disponibilidad de carreteras, puentes, transbordadores, presas y otras infraestructuras. Si la altura, la anchura, la longitud o el peso de un vehículo superan los valores permitidos para determinados tramos de carretera, el sistema de navegación de OsmAnd encontrará una ruta alternativa para evitar los obstáculos del camino.  

- Las unidades de medida corresponderán a los ajustes seleccionados en *Ajustes generales → [Unidades y formatos](../../personal/profiles.md#units--formats)*.
- Los parámetros del vehículo se pueden ajustar manualmente.
- Si selecciona manualmente el parámetro de medida del vehículo, la aplicación le ofrecerá el valor más próximo de la lista ya preparada. Esto es necesario para evitar errores y construir la ruta más correctamente.
- Puede elegir los parámetros del vehículo de una lista de tamaños ya preparada.
- No establezca el tamaño, *Ninguno*, lo que significa que no se aplicarán restricciones al parámetro seleccionado.  

### Límites {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> El parámetro Peso sólo está disponible en tipos de navegación como [*Coche, Camión* y *Motocicleta*](../../navigation/routing/car-based-routing.md).  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> El parámetro Altura sólo está disponible en tipos de navegación como *[Coche, Camión, Motocicleta](../../navigation/routing/car-based-routing.md)* y *[Barco](../../navigation/routing/boat-navigation.md)*.  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> El parámetro Longitud sólo está disponible en tipos de navegación como [*Coche, Camión* y *Motocicleta*](../../navigation/routing/car-based-routing.md).  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> El parámetro Anchura sólo está disponible en tipos de navegación como *[Coche, Camión, Motocicleta](../../navigation/routing/car-based-routing.md)* y *[Barco](../../navigation/routing/boat-navigation.md)*.  

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Los límites de los parámetros del vehículo pueden ser importantes para la navegación y la seguridad vial. Algunas de estas restricciones pueden ser:  

1. Restricciones a la circulación de vehículos en determinadas zonas urbanas.  
2. Restricciones a la circulación de vehículos en tramos específicos de la carretera, como donde hay puentes, túneles con espacio limitado, pasos elevados de baja altura, giros complejos u otras estructuras.  
3. Los límites de peso por eje del vehículo pueden ser especialmente importantes para los camiones.
4. Restricciones para vehículos que se desplazan en determinadas condiciones, como altas temperaturas, carreteras mojadas o nevadas, de noche o en condiciones meteorológicas con visibilidad limitada.


## Parámetros de combustible {#fuel-parameters}

### Combustible utilizado por el motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Si selecciona el tipo de motor en los parámetros del vehículo, los [***datos de la huella de CO2***](../../navigation/setup/route-details.md#elevation-info) se mostrarán encima del gráfico en [Detalles de la ruta](../setup/route-details.md).
Disponibles seis tipos de combustible: ***Gasolina, Diésel, GLP, GNC, Eléctrico,*** e ***Híbrido***.  

**Aplicabilidad:**

El ajuste **Combustible utilizado por el motor** sólo está disponible en la navegación basada en vehículos como *[Coche, Motocicleta y Camión](../../navigation/routing/car-based-routing.md)*.


### Capacidad del depósito de combustible {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de Navegación Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


El parámetro **Capacidad del depósito de combustible** le permite realizar un seguimiento más preciso del [nivel de combustible](../../widgets/info-widgets.md#vehicle-metrics-widgets) y del [consumo](../../widgets/info-widgets.md#vehicle-metrics-widgets) de su vehículo, proporcionando el volumen total de su depósito. El valor por defecto es ~50 ***litros***. La unidad de medida de la capacidad de combustible viene determinada por el [Perfil (Ajustes)](../..//personal/profiles.md#units--formats) configurado en *Menú → Configurar perfil → Ajustes generales → Unidades y formatos → Unidad de volumen*.

**Aplicabilidad:**

El ajuste **Capacidad del depósito de combustible** sólo está disponible en la navegación basada en vehículos. Para los tipos de navegación como *Bicicleta*, *Paseo a caballo*, *A pie* y *Esquí*, este parámetro no se muestra en los Parámetros del vehículo.

## Parámetros de velocidad

### Velocidad por defecto {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de Navegación](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de Navegación](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

La **Velocidad por defecto** es la velocidad de movimiento por defecto para este modo de transporte ([Límites de velocidad por defecto](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Para los perfiles *A pie*, *Paseo a caballo* y *Ciclismo*, en pequeños incrementos equivalentes a 0,1 km/h (mph) ([Unidades y formatos](https://osmand.net/docs/user/personal/profiles#units--formats)), y para los demás perfiles, en incrementos equivalentes a 1 km/h (1 mph). Se utiliza:
- Para estimar el [tiempo de ruta](../../widgets/nav-widgets.md#time-to-intermediate) cuando la velocidad no puede determinarse a partir de las carreteras, como en la [Navegación GPX](../setup/gpx-navigation.md), [Rutas de esquí](../routing/ski-routing.md), [Rutas en barco](../routing/boat-navigation.md), [Peatón](../routing/pedestrian-routing.md) y otros perfiles similares.
- Para determinar cuándo se activan los [anuncios de voz](../guidance/voice-navigation.md).
- Para determinar la hora estimada de llegada a los marcadores del mapa mediante una navegación en línea recta si aún no se ha calculado la velocidad media.



 Se utiliza para calcular la hora de llegada y determinar la ruta óptima en función de la velocidad de movimiento que la aplicación considera típica. Por ejemplo, en coche, transporte público, a pie o la velocidad que usted establezca manualmente.


### Velocidades en carretera {#road-speeds}


![Ajustes de Navegación](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Para algunos tipos de navegación se puede establecer la velocidad mínima y máxima permitida. Si se establece, el motor de enrutamiento asume que el vehículo o el modo de transporte no se moverá más rápido que el límite y no se moverá más lento que la velocidad mínima. 
Por ejemplo, permite crear una ruta de **bajo consumo** en la que el consumo de combustible es óptimo a la **velocidad máxima** establecida y el motor encontrará una ruta más corta evitando carreteras más largas pero más rápidas.

- **Velocidad mínima**  
    El ajuste establece la velocidad mínima de conducción para todos los tipos de carretera de la ruta. Aumenta la prioridad para las carreteras con una velocidad recomendada inferior a la velocidad mínima.  
- **Velocidad máxima**  
    El ajuste establece la velocidad máxima de conducción y disminuye la prioridad para las carreteras con una velocidad posible superior a la máxima.




## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Ajustes de navegación](./navigation-settings.md)
- [Indicaciones de voz / Notificaciones](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)