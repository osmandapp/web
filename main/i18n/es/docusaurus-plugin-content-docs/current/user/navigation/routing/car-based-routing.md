---
source-hash: cd7a6be8622eb21754f0737fc6e482333633f7712490b8d2d401bc90d556be56
sidebar_position: 2
title:  Rutas en coche (Camión, Motocicleta)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Resumen {#overview}

El enrutamiento basado en automóviles está diseñado para ayudar a los conductores a navegar por las carreteras de manera eficiente, segura y cómoda, proporcionando direcciones personalizadas adaptadas a las necesidades y preferencias únicas de cada conductor. Una configuración de ruta adecuada puede ayudar a los conductores a ahorrar tiempo y combustible, y a evitar peligros en la carretera. La ruta más rápida se ofrece por defecto.

:::info
El mecanismo de enrutamiento para vehículos terrestres motorizados solo difiere en algunas configuraciones. Los parámetros comunes se describen en la sección [Coche](#route-parameters---car) de este artículo. [Camión](#route-parameters---truck) y [Motocicleta](#route-parameters---motorcycle) tienen sus propias particularidades.
:::

El enrutamiento se puede configurar según sus necesidades en la sección [Parámetros de ruta](../../navigation/guidance/navigation-settings.md#route-parameters) de la configuración de Navegación del perfil correspondiente (*Conducción, Camión, Motocicleta*).

## Parámetros de ruta - Coche {#route-parameters---car}

El enrutamiento de automóviles está diseñado para ayudar a los conductores a encontrar las rutas más eficientes y directas a sus destinos. Tiene en cuenta las restricciones de conducción comunes, como calles de sentido único, prohibición de giros, zonas peatonales, y también ayuda a evitar carreteras que no son adecuadas para automóviles, como carreteras estrechas o carreteras con limitaciones de peso.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configuración de rutas en coche Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configuración de rutas en coche iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Seleccione las carreteras que desea evitar durante la navegación. Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carreteras de la lista. </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar una frontera a otro país).</li><li>Evitar [carreteras de hielo](https://wiki.openstreetmap.org/wiki/Key:ice_road) (carreteras estacionales en regiones frías que se extienden sobre agua congelada) y [vados](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de una carretera donde un curso de agua la atraviesa). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (trenes que transportan coches, que conectan dos lugares de difícil acceso por carretera).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (solo apto para vehículos 4x4).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Para el enrutamiento de automóviles se asume que la superficie de las carreteras está [pavimentada](https://wiki.openstreetmap.org/wiki/Key:surface), a menos que se especifique lo contrario. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Las restricciones de acceso privado se ignorarán al calcular la ruta. | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (solo&nbsp;coche) | <details><summary> Se evitarán las carreteras cerradas para la entrega de mercancías. </summary>![Entrega de mercancías Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Esta opción solo se aplica a vehículos que transportan mercancías, que no pesan más de 3.5 toneladas. Si el peso de su vehículo es superior a 3.5 toneladas, debe utilizar el [perfil de Camión](#route-parameters---truck). |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Para calcular la ruta más eficiente en cuanto a combustible, el motor de enrutamiento limita internamente la velocidad a 60 km/h, aunque no cambia la hora estimada de llegada. Así, en el caso de 2 rutas con el mismo origen y destino, una por autopista (120 km/h) y otra por carretera secundaria (60 km/h), se seleccionará la ruta más corta. Para las carreteras de servicio con un límite de velocidad inferior a 60 km/h, se seleccionará la ruta más rápida. |

## Parámetros de ruta - Camión {#route-parameters---truck}

:::note
Por defecto, el *perfil de Camión* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento de camiones es similar al enrutamiento de automóviles, pero está diseñado específicamente para conductores de vehículos comerciales grandes. Considera factores adicionales como la [altura, el peso y las restricciones de ancho](../guidance/navigation-settings.md#size-parameters) del vehículo y la posibilidad de transportar materiales peligrosos (consulte la tabla a continuación). Todas las demás configuraciones de enrutamiento son idénticas al [enrutamiento de automóviles](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configuración de rutas de camiones Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Configuración de rutas de camiones iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (para **región de la UE**) | <details><summary> Las autoridades locales pueden prohibir el transporte de materiales peligrosos en algunas carreteras o túneles. </summary> ![Transporte de materiales peligrosos Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Cuando está habilitado, el mecanismo de enrutamiento de camiones tiene en cuenta la etiqueta OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Puede elegir una de las cinco categorías (*A, B, C, D, E*) de materiales peligrosos según las **restricciones de la UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (solo si se selecciona la **región de EE. UU.**) | <details><summary> Las normas de transporte de materiales peligrosos en EE. UU. difieren de las de la UE. Se muestra solo si la Región de conducción está configurada en EE. UU. Puede seleccionar varias clases. </summary> ![Transporte de materiales peligrosos Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Seleccione uno de los tipos (del 1 al 9) de materiales peligrosos según las [**restricciones de EE. UU.**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). El transporte de materiales peligrosos está prohibido en algunas carreteras y túneles. <ul><li>1. *Explosivos* </li><li> 2. *Gases* </li><li> 3. *Líquidos inflamables* </li><li> 4. *Sólidos inflamables* </li><li> 5. *Agentes oxidantes y peróxidos orgánicos* </li><li> 6. *Sustancias tóxicas e infecciosas* </li><li> 7. *Sustancias radiactivas* </li><li> 8. *Sustancias corrosivas* </li><li> 9. *Varios* </li></ul> |

## Parámetros de ruta - Motocicleta {#route-parameters---motorcycle}

:::note
Por defecto, el *perfil de Motocicleta* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento de motocicletas es el proceso de crear una ruta específicamente optimizada para viajes en motocicleta. Este tipo de enrutamiento tiene en cuenta las necesidades y preferencias únicas de los motociclistas, proporcionando las mejores condiciones de conducción posibles. Las rutas se trazan teniendo en cuenta una serie de parámetros, como la elección de la superficie de la carretera (por ejemplo, se pueden preferir o evitar las malas condiciones de la carretera), la evitación de atascos, la accesibilidad de la infraestructura o la seguridad.

## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que se encuentran actualmente en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión de *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto ocurre con mayor frecuencia al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de su vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: julio de 2024*