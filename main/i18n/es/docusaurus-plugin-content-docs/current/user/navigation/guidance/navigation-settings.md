---
source-hash: c8d86e0d815539ea1395efc415de2d8d02dbf19117cd20b4d4915ea3473d7023
sidebar_position: 7
title:  Ajustes de navegación
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

Para una navegación exitosa, es importante configurar correctamente los ajustes apropiados de acuerdo con tus necesidades y cómo viajas: en coche, a pie, a caballo o esquiando. Este artículo describe los parámetros básicos de la ruta, las [indicaciones de voz](#voice-prompts), las [alertas en pantalla](#screen-alerts), el [comportamiento del mapa durante la navegación](#map-during-navigation) y la [apariencia de las líneas de ruta](#customize-route-line). También detalla los ajustes del vehículo, como la [velocidad predeterminada](#default-speed) y la [velocidad máxima/mínima](#road-speeds), el [tipo de motor](#fuel-used-by-motor) para el cálculo de CO2, la [capacidad del depósito de combustible](#fuel-tank-capacity) y el [tamaño/peso](#size-parameters), que pueden afectar la ruta. Ajustar estos parámetros te ayudará a aprovechar al máximo OsmAnd y a llegar a tu destino sin demoras innecesarias.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Cómo abrir {#how-to-open}

Esta sección presenta los ajustes de navegación necesarios para calcular y trazar una ruta, que puedes configurar para el perfil seleccionado. Este menú incluye ajustes para la [preparación de la ruta](../setup/route-navigation.md), la [pantalla del mapa durante la navegación](../guidance/map-during-navigation.md) y lo que configures en los *ajustes de navegación* afecta directamente la visualización de los datos en los [detalles de la ruta](../setup/route-details.md).

Hay tres formas de acceder al menú de ajustes de navegación.

- Ve al *Menú principal → Ajustes*, selecciona el *Perfil* requerido y toca *Ajustes de navegación*.

- Toca el icono de *Navegación* en la pantalla del mapa, luego selecciona el *icono de Ajustes → Ajustes de navegación*.

- Ve al *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>* principal.

:::info
El perfil predeterminado *Explorar mapa* no tiene ajustes de navegación.
:::


## Tipo de navegación {#navigation-type}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

La navegación es una parte importante de un viaje, y elegir *el tipo correcto* de navegación puede facilitar mucho tu viaje. El tipo de navegación que elijas puede depender de cómo viajes y de si tienes conexión a Internet.

- **Navegación en línea**
Utiliza principalmente un sistema de enrutamiento especial o un sitio web que permite a la aplicación OsmAnd trazar una ruta basada en la información actual y otros factores. Puedes leer sobre cómo elegir la mejor ruta en línea en el artículo [Enrutamiento en línea](../routing/online-routing.md). Este tipo de navegación solo está disponible para la *versión de Android* de la aplicación.

- **Navegación sin conexión**
No requiere acceso a Internet y ofrece una selección más amplia de [tipos de navegación](../routing/osmand-routing.md#routing-types) que se pueden usar para calcular una ruta. Entre ellos se encuentran *bicicleta, barco, coche, a pie, esquí* y *línea recta*. Actualmente hay 13 tipos básicos de enrutamiento, así como un tipo de enrutamiento externo [BRouter](../routing/brouter.md) que proporciona oportunidades de enrutamiento adicionales.

El tipo de navegación determina qué reglas se utilizan para calcular las rutas. Si necesitas un tipo de navegación específico, puedes **importar tu propio archivo de enrutamiento *XML* modificado**. Lee más sobre las reglas de enrutamiento en nuestra [página de GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Y hay un artículo separado sobre el formato XML y cómo usarlo, [Estilo de renderizado de mapas](../../../technical/osmand-file-formats/osmand-rendering-style.md), que puede ayudarte a crear un archivo de ruta.


## Parámetros de ruta {#route-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

Los **<Translate android="true" ids="route_parameters"/>** son ajustes que determinan cómo la aplicación calculará una ruta para llegar a un destino, considerando factores como el tipo de transporte, las prioridades de enrutamiento, las condiciones de la ruta, la complejidad de la ruta y las preferencias del usuario.

Para cada [perfil](../../personal/global-settings.md#default-profile), excepto para *Explorar mapa*, OsmAnd selecciona por defecto el [tipo de navegación](#navigation-type) óptimo y los [parámetros de ruta](../routing/osmand-routing.md#routing-types) relevantes. Sin embargo, puedes elegir el tipo que desees y cambiar los parámetros según tus preferencias y las condiciones externas del próximo viaje.

Todos los parámetros de ruta se describen en detalle en las secciones correspondientes de la documentación:
*[Enrutamiento de coche (Camión, Motocicleta)](../routing/car-based-routing.md), [Enrutamiento de bicicleta (MTB)](../routing/bicycle-based-routing.md), [Enrutamiento de ciclomotor](../routing/moped-routing.md), [Enrutamiento peatonal](../routing/pedestrian-routing.md), [Enrutamiento de transporte público](../routing/public-transport-navigation.md), [Enrutamiento a caballo](../routing/horse-routing.md), [Enrutamiento de esquí](../routing/ski-routing.md), [Enrutamiento de tren](../routing/train-routing.md), [Enrutamiento de barco](../routing/boat-navigation.md), [Enrutamiento directo a un punto](../routing/direct-to-point-routing.md), [Enrutamiento en línea recta](../routing/straight-line-routing.md), [Enrutamiento en línea](../routing/online-routing.md), [Enrutamiento BRouter](../routing/brouter.md)*.


### Recalcular ruta {#recalculate-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

El parámetro **Cálculo de ruta** cambia automáticamente la ruta calculada cuando te desvías de ella o conduces en la dirección opuesta. En ambos casos, esta configuración te ayuda a mantener tu dirección de viaje y a llegar a tu destino sin perder tiempo buscando manualmente una nueva ruta.

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> en caso de desviación* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Si las [indicaciones de voz](../guidance/voice-navigation.md#voice-settings) están activadas, OsmAnd anuncia que la ruta se está recalculando. |
| *Recalcular ruta en caso de dirección inversa* | Tu ruta se recalculará si te mueves al punto de partida. | Con esta configuración desactivada, el movimiento al punto de partida no se considera una desviación del camino (siempre que siga la ruta calculada). |


### Ajustes de desarrollo {#development-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Desarrollo*

![Ajustes de navegación iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

Los parámetros de la sección **Desarrollo** son principalmente para usuarios avanzados y solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

| Parámetro | Descripción |
|:------------|:---------------|
| *Tipo de enrutamiento* (*Android*) / *Algoritmo de enrutamiento* (*iOS*) | <ul><li>**A*** 2 fases (*Android*) / **A*** (*iOS*) añade una fase extra al algoritmo predeterminado para mejorar la calidad de la ruta calculada. Esta opción puede ser útil para encontrar rutas en redes de carreteras grandes y complejas, pero el cálculo de la ruta puede tardar más.</li><li>**A* clásico** (*Android*) / **Jerarquías de autopistas** (*iOS*) optimiza la planificación de rutas favoreciendo las carreteras principales y las autopistas, minimizando el número de giros y cruces en la ruta. Particularmente efectivo en largas distancias.</li><li>**HH (Jerarquías de autopistas) x Java** (*solo Android*) se basa en la implementación de estructuras de datos jerárquicas para optimizar la búsqueda de rutas en un mapa, teniendo en cuenta las restricciones de tiempo de ejecución y el consumo de recursos del dispositivo, y se realiza en la plataforma Java.</li><li>**HH (Jerarquías de autopistas) x C++** (*solo Android*) es un algoritmo que utiliza el lenguaje de programación C++ para procesar eficientemente los datos de la red de carreteras y construir rutas óptimas utilizando estructuras de datos jerárquicas. Está optimizado para el procesamiento rápido de grandes cantidades de datos y es particularmente efectivo para navegar por mapas con muchas redes de carreteras.</li></ul> |
| *Aproximación GPX* (*solo Android*) | <ul><li>La aproximación GPX **basada en enrutamiento** en **C++ y Java** utiliza datos de ruta para aproximar las pistas GPS con las rutas de carreteras existentes, lo que mejora la precisión de la pista y reduce el tamaño de la pista.</li><li>Las aproximaciones GPX **basadas en geometría** en **C++ y Java** funcionan basándose en principios geométricos para aproximar de forma rápida y precisa las pistas GPS, lo que permite un procesamiento eficiente de grandes cantidades de datos.</li></ul> |
| *Zoom automático* | <ul><li>**Discreto** te permite acercar el mapa a un nivel de detalle específico medido en unos pocos pasos discretos.</li><li>**Suave** proporciona un cambio gradual en la escala del mapa con efectos de animación suaves sin tirones ni saltos.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*solo Android*) | Utiliza [actualizaciones de OsmAnd Live](../../personal/maps-resources.md#osmand-live) durante el enrutamiento. Ten en cuenta que recomendamos usar esta opción solo para fines de prueba. |

<!--
| Parámetro | Descripción | Nota |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | Permite usar [actualizaciones de OsmAnd Live](../../personal/maps-resources.md#osmand-live) durante el enrutamiento. Ten en cuenta que recomendamos usar esta opción solo para fines de prueba. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | Añade una fase extra al algoritmo predeterminado (A*) para mejorar la calidad de la ruta calculada. Esta opción puede ser útil para encontrar rutas en redes de carreteras grandes y complejas, aunque puede tardar más tiempo en calcular la ruta. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->


## Indicaciones de voz {#voice-prompts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Ajustes de navegación por voz Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *Botón <Translate ios="true" ids="routing_settings"/>* *(o <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Elegir perfil → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Ajustes de navegación por voz iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

La primera parte del artículo *[Indicaciones de voz / Notificaciones](./voice-navigation.md)* describe cómo configurar las indicaciones de voz en detalle.

Las instrucciones de audio durante la navegación te ayudan como conductor o peatón a llegar a tu destino mientras [navegas por una ruta seleccionada](../setup/route-navigation.md). Contienen información sobre giros, direcciones de conducción, señales de tráfico, distancias a tu destino y otros factores que pueden afectar tu navegación.

Si seleccionas una pista como punto de destino, debes usar la opción [Adjuntar a las carreteras](../setup/gpx-navigation.md#attach-to-the-roads) para que las indicaciones de voz funcionen correctamente.

Las *indicaciones de voz* te permiten concentrarte en la carretera y no distraerte con el mapa o el dispositivo de navegación. También mejoran la seguridad al conducir, reducen el tiempo que lleva navegar por terrenos desconocidos y pueden ser útiles para diferentes [tipos de rutas](../routing/osmand-routing.md#routing-types).


## Alertas en pantalla {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

La configuración de navegación **Alerta en pantalla** habilita el [**Widget de alertas**](../../widgets/nav-widgets.md#alert-widget). *Detalles:*

- Cuando te acercas a uno de los obstáculos admitidos en la carretera, aparecen notificaciones en la esquina inferior izquierda del mapa.
- Si configuras las [*indicaciones de voz y texto*](../../navigation/guidance/voice-navigation.md) disponibles en la aplicación OsmAnd, tendrás un viaje más cómodo y seguro.
- La apariencia y el momento de las indicaciones dependen de la configuración de tu velocidad. Puedes encontrarlas [en el artículo](../../../technical/algorithms/voice-prompt-triggering.md).
- El comportamiento de las *Alertas en pantalla* también se ve afectado por la configuración [Mostrar puntos a lo largo de la ruta](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Puedes ***seleccionar qué alertas*** quieres ver en la pantalla de la aplicación mientras navegas:

- **Límite de velocidad** ([información de OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). En la configuración de Alertas en pantalla, el *Límite de velocidad* solo se muestra en la pantalla con las *Advertencias de tráfico* activadas. Si quieres ver los límites de velocidad durante la navegación sin otras advertencias, usa el [widget](../../widgets/nav-widgets.md#speed-limit).
- **Advertencias de tráfico** ([información de OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Se puede encontrar información adicional en el artículo [Pantalla del mapa durante la navegación](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Pasos de peatones** ([información de OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Radares de velocidad** ([información de OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Para obtener más información sobre la configuración de radares de velocidad en OsmAnd, lee [Tipos de alerta](../../widgets/nav-widgets.md#alert-types) y el artículo *Ajustes globales*, sección [Legal](../../personal/global-settings.md#legal).
- **Túneles** ([información de OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Los tipos de advertencias tienen una apariencia visual diferente, que depende de la región de viaje. OsmAnd no tiene como objetivo presentar señales de tráfico 100% idénticas, pero señala algunas similitudes.
:::


## Mapa durante la navegación {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

El **mapa se utiliza durante la navegación** para determinar tu ubicación, planificar tu ruta y la orientación del terreno. Durante la navegación, puedes ver el mapa con *autocentrado*, moverlo y *acercar y alejar* para ver el área requerida. El mapa también puede mostrar marcadores que indican puntos de interés, rutas, condiciones climáticas, señales de tráfico y otros objetos para ayudarte a navegar. El mapa se puede actualizar en *tiempo real* y muestra *información actualizada* que puede afectar la planificación de la ruta.

Puedes aprender cómo cambia el comportamiento del mapa durante la navegación en el artículo [Pantalla del mapa durante la navegación](../guidance/map-during-navigation.md).

## Personalizar línea de ruta {#customize-route-line}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

Con la configuración **Personalizar línea de ruta**, puedes elegir la apariencia de la línea de ruta que será visible en el mapa durante la navegación. Puedes seleccionar el *color*, el *ancho de la línea* y la visualización de las *flechas de giro* en ella. Para cada perfil, puedes elegir una vista de línea diferente. Todos estos parámetros se describen en detalle en el artículo *Pantalla del mapa durante la navegación* en la sección [Apariencia de la línea de ruta](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Parámetros del vehículo {#vehicle-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Para un cálculo óptimo de la ruta en OsmAnd, debes considerar los siguientes parámetros del vehículo:

1. Establece la [*velocidad predeterminada* o las *velocidades de la carretera*](#default-speed--road-speeds), como la [velocidad mínima y máxima](#road-speeds) del vehículo. Esto ayudará a la aplicación a determinar el tiempo necesario para completar la ruta y le permitirá elegir la mejor ruta, considerando los límites de velocidad en los diferentes segmentos de la carretera.
2. Especifica el [*tipo*](#fuel-used-by-motor) de combustible utilizado por el motor. Esto permitirá a la aplicación estimar las emisiones de CO2.
3. Introduce la [*capacidad de tu depósito*](#fuel-tank-capacity) para controlar con precisión tu nivel de combustible y consumo.
4. Define los [*parámetros de tamaño y peso*](#size-parameters) de tu vehículo, lo que puede ayudar a la aplicación a calcular la ruta óptima y evitar obstáculos en la carretera debido a restricciones.

Configurar correctamente los parámetros en la aplicación OsmAnd te ayudará a evitar problemas al navegar por una ruta, elegir la más adecuada según el tipo de vehículo y las restricciones de la carretera, y calcular el tiempo de tu viaje.


### Parámetros de tamaño {#size-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Los parámetros del vehículo afectan la navegación y la construcción de rutas porque determinan la disponibilidad de carreteras, puentes, transbordadores, presas y otras infraestructuras. Si la altura, el ancho, la longitud o el peso de un vehículo exceden los valores permitidos para ciertas secciones de la carretera, el sistema de navegación OsmAnd encontrará una ruta alternativa para evitar obstáculos en el camino.

- Las unidades de medida corresponderán a la configuración seleccionada en *Ajustes generales → [Unidades y formatos](../../personal/profiles.md#units--formats)*.
- Los parámetros del vehículo se pueden configurar manualmente.
- Si seleccionas manualmente el parámetro de medición del vehículo, la aplicación te ofrecerá el valor más cercano de la lista predefinida. Esto es necesario para evitar errores y construir la ruta de forma más correcta.
- Puedes elegir los parámetros del vehículo de una lista predefinida de tamaños.
- No establezcas el tamaño en *Ninguno*, lo que significa que no se aplicarán restricciones al parámetro seleccionado.

#### Límites {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> El parámetro Peso solo está disponible en tipos de navegación como [*Coche, Camión* y *Motocicleta*](../../navigation/routing/car-based-routing.md).

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> El parámetro Altura solo está disponible en tipos de navegación como *[Coche, Camión, Motocicleta](../../navigation/routing/car-based-routing.md)* y *[Barco](../../navigation/routing/boat-navigation.md)*.

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> El parámetro Longitud solo está disponible en tipos de navegación como [*Coche, Camión* y *Motocicleta*](../../navigation/routing/car-based-routing.md).

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> límite**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> El parámetro Ancho solo está disponible en tipos de navegación como *[Coche, Camión, Motocicleta](../../navigation/routing/car-based-routing.md)* y *[Barco](../../navigation/routing/boat-navigation.md)*.

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Los límites de los parámetros del vehículo pueden ser importantes para la navegación y la seguridad vial. Algunas de estas restricciones pueden incluir:

1. Restricciones a los vehículos que circulan en determinadas zonas urbanas.
2. Restricciones a la circulación de vehículos en tramos específicos de la carretera, como donde hay puentes, túneles con espacio limitado, pasos elevados de baja altura, giros complejos u otras estructuras.
3. Límites de peso por eje del vehículo pueden ser especialmente importantes para los camiones.
4. Restricciones para vehículos que circulan en determinadas condiciones, como altas temperaturas, carreteras mojadas o nevadas, de noche o en condiciones meteorológicas con visibilidad limitada.

Estas restricciones pueden ser importantes para la navegación y deben tenerse en cuenta al planificar una ruta. Si un vehículo excede los límites, puede resultar en problemas de seguridad vial, daños a la infraestructura, multas por accidentes y otras consecuencias legales. Por lo tanto, los conductores deben examinar cuidadosamente la ruta y asegurarse de que la altura de su vehículo cumpla con los límites.


### Parámetros de combustible {#fuel-parameters}

#### Combustible utilizado por el motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ruta de navegación Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruta de navegación iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Si seleccionas el tipo de motor en los parámetros del vehículo, los [***datos de huella de CO2***](../../navigation/setup/route-details.md#elevation-info) se mostrarán encima del gráfico en [Detalles de la ruta](../setup/route-details.md).
Hay seis tipos de combustible disponibles: ***Gasolina, Diésel, GLP, GNC, Eléctrico*** e ***Híbrido***.

**Aplicabilidad:**

La configuración **Combustible utilizado por el motor** solo está disponible en la navegación basada en vehículos, como *[Coche, Motocicleta y Camión](../../navigation/routing/car-based-routing.md)*.


#### Capacidad del depósito de combustible {#fuel-tank-capacity}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

El parámetro **Capacidad del depósito de combustible** te permite realizar un seguimiento más preciso del nivel y consumo de combustible de tu vehículo, proporcionando el volumen total de tu depósito. La unidad de medida para la capacidad de combustible se determina mediante la configuración establecida en *Menú → Configurar perfil → Ajustes generales → Unidades y formatos → Unidad de volumen*. Para obtener una guía detallada sobre cómo configurar Unidades y formatos, consulta el artículo [Perfil (Ajustes)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd admite las siguientes unidades de capacidad:

- Galones - **gal**. Esta abreviatura se utiliza para representar tanto **galones imperiales** como **galones estadounidenses**, según tus preferencias de unidad seleccionadas.
- Litros - **l**. La unidad métrica de capacidad.

**Aplicabilidad:**

La configuración **Capacidad del depósito de combustible** solo está disponible en la navegación basada en vehículos. Para tipos de navegación como *Bicicleta*, *Paseo a caballo*, *A pie* y *Esquí*, este parámetro no se muestra en los Parámetros del vehículo.

Al introducir la capacidad exacta de tu depósito de combustible, la aplicación puede ofrecer una experiencia más personalizada, que incluye:

- Seguimiento preciso del combustible restante en función de tu consumo.
- Planificación de rutas mejorada con paradas de combustible optimizadas según el tamaño de tu depósito.

Para garantizar cálculos y sugerencias de navegación precisos, verifica que la unidad seleccionada coincida con el estándar de medición de tu depósito.


### Velocidad predeterminada / Velocidades de la carretera {#default-speed--road-speeds}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

Para todos los tipos de navegación, la velocidad mínima y máxima permitida, tanto por defecto como por carretera, pueden ser diferentes, de acuerdo con ciertos valores ([Límites de velocidad predeterminados](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) y restricciones para vehículos. La velocidad también se establece en ciertos incrementos para que la configuración de la aplicación sea lo más utilizable posible. Para los perfiles de *Caminar*, *Paseo a caballo* y *Ciclismo*, en pequeños incrementos equivalentes a 0,1 km/h ([Unidades y formatos](https://osmand.net/docs/user/personal/profiles#units--formats)), y para los otros perfiles, en incrementos equivalentes a 1 km/h.
Los ajustes de velocidad determinan cuándo se activan los [anuncios de voz](../guidance/voice-navigation.md).

Estos parámetros se utilizan como velocidad para estimar el [tiempo de llegada](../../widgets/nav-widgets.md#time-to-intermediate) cuando la velocidad no se puede determinar a partir de los datos del mapa:

- para el perfil seleccionado;
- si las carreteras utilizadas no tienen límites de velocidad, lo que también puede afectar el enrutamiento;
- si se seleccionan pistas generadas por el usuario o importadas.


#### Velocidad predeterminada {#default-speed}

La **velocidad predeterminada** es la velocidad de movimiento preestablecida. Se utiliza para calcular el tiempo de llegada y determinar la ruta óptima en función de la velocidad de movimiento que la aplicación considera típica para este modo de transporte. Por ejemplo, coche, transporte público, peatón o la velocidad que establezcas manualmente.


#### Velocidades de la carretera {#road-speeds}

<InfoAndroidOnly />

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de navegación](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
Estos ajustes en iOS están disponibles en *Menú → Ajustes → perfil de la aplicación → Ajustes de navegación → Parámetros de ruta → Velocidades de la carretera*.
:::

-->

- **Velocidad mínima**
La configuración establece la velocidad mínima de conducción para todos los tipos de carreteras en la ruta. Aumenta la prioridad para las carreteras con una velocidad recomendada inferior a la velocidad mínima.
- **Velocidad máxima**
La configuración establece la velocidad máxima de conducción y disminuye la prioridad para las carreteras con una velocidad posible superior a la máxima.


## Guía detallada de la pista {#detailed-track-guidance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ve a: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Adjuntar a las carreteras 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Ajustes de navegación Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ve a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Guía detallada de la pista*

![Ajustes de navegación](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Ajustes de navegación](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

La función **Guía detallada de la pista** mejora la precisión de la navegación de la ruta al utilizar **rutas basadas en pistas**. Cuando seleccionas una pista como destino, puedes habilitar la configuración [Adjuntar a las carreteras](../setup/gpx-navigation.md#attach-to-the-roads) desde el menú [Seguir pista](../setup/gpx-navigation.md#follow-track-options). Esto asegura que la pista se alinee con las carreteras existentes para una navegación más fluida y precisa.

Hay dos opciones para usar la *Guía detallada de la pista*:

- **<Translate android="true" ids="ask_every_time"/>** (*configuración predeterminada*) – La opción *Adjuntar a las carreteras* aparecerá en la sección [Detalles de la ruta](../setup/route-details.md) cada vez que se calcule una ruta basada en una pista. Esto te permite decidir si aplicar la conexión a la carretera para cada sesión de navegación.

- **<Translate android="true" ids="shared_string_always"/>** – El proceso de conexión a la carretera se aplicará automáticamente para cada ruta de *navegación por pista* sin requerir confirmación manual.

Para obtener más información sobre el uso de la navegación basada en pistas, visita [Navegación por pista](../setup/gpx-navigation.md).


## Artículos relacionados {#related-articles}

- [Parámetros de ruta](../routing/osmand-routing.md#routing-types)
- [Preparación de ruta](../setup/route-navigation.md)
- [Navegación por pista](../setup/gpx-navigation.md)
- [Navegación por marcadores](../setup/markers-navigation.md)
- [Detalles de la ruta](../setup/route-details.md)
- [Pantalla del mapa durante la navegación](./map-during-navigation.md)
- [Indicaciones de voz / Notificaciones](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Última actualización: abril de 2025*