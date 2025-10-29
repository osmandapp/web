---
source-hash: 74a5b610d6f4eeafabe0fe3369b3c7c103d064d346a88aacce7696290df5bb64
sidebar_position: 2
title:  Rutas para coche (Camión, Motocicleta)
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

La ruta para coches está diseñada para ayudar a los conductores a navegar por las carreteras de manera eficiente, segura y cómoda, proporcionando indicaciones personalizadas adaptadas a las necesidades y preferencias únicas de cada conductor. Una configuración de ruta adecuada puede ayudar a los conductores a ahorrar tiempo y combustible, y a evitar peligros en la carretera. Por defecto, se ofrece la ruta más rápida.

:::info
El mecanismo de enrutamiento para vehículos terrestres motorizados difiere solo en algunas configuraciones. Los parámetros comunes se describen en la sección [Coche](#route-parameters---car) de este artículo. [Camión](#route-parameters---truck) y [Motocicleta](#route-parameters---motorcycle) tienen sus propias particularidades.  
:::

La ruta se puede configurar según sus necesidades en la sección [Parámetros de ruta](../../navigation/guidance/navigation-settings.md#route-parameters) de los Ajustes de navegación del perfil correspondiente (*Conducción, Camión, Motocicleta*).  


## Parámetros de ruta - Coche {#route-parameters---car}

La ruta para coches está diseñada para ayudar a los conductores a encontrar las rutas más eficientes y directas a sus destinos. Tiene en cuenta las restricciones de conducción comunes, como calles de un solo sentido, prohibición de giros, zonas peatonales, y también ayuda a evitar carreteras que no son adecuadas para coches, como carreteras estrechas o carreteras con limitaciones de peso.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ajustes de ruta de coche Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ajustes de ruta de coche iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación. Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carretera de la lista.  </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar una frontera hacia otro país).</li><li>Evitar [carreteras de hielo](https://wiki.openstreetmap.org/wiki/Key:ice_road) (carreteras estacionales en regiones frías que se trazan sobre agua congelada) y [vados](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de una carretera por donde pasa una vía fluvial). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (trenes que transportan coches y que conectan dos lugares que no son fácilmente accesibles entre sí por carretera).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (solo apto para vehículos 4x4).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Para la ruta de coche se asume que la superficie de las carreteras está [pavimentada](https://wiki.openstreetmap.org/wiki/Key:surface), a menos que se especifique lo contrario. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (solo&nbsp;coche) |  <details><summary> Se evitarán las carreteras cerradas a la entrega de mercancías. </summary>![Entrega de mercancías Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Esta opción se aplica solo a vehículos que transportan mercancías que no pesan más de 3,5 toneladas. Si el peso de su vehículo es superior a 3,5 toneladas, debe utilizar el [perfil de Camión](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Para calcular una ruta de bajo consumo de combustible, el motor de enrutamiento limita la velocidad internamente a 60 km/h, aunque no cambia la hora estimada de llegada. Así, en el caso de 2 rutas iguales de inicio y fin: autopista (120 km/h) y secundaria (60 km/h), se seleccionará la ruta más corta. Para las vías de servicio que tienen un límite de velocidad < 60 km/h, se seleccionará la ruta más rápida. |


## Parámetros de ruta - Camión {#route-parameters---truck}

:::note
Por defecto, el *perfil de Camión* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La ruta para camiones es similar a la ruta para coches, pero está diseñada específicamente para conductores de vehículos comerciales grandes. Considera factores adicionales como las restricciones de [altura, anchura, peso, carga máxima por eje y peso máximo con carga completa del vehículo](../guidance/vehicle-parameters.md#size-parameters) y la posibilidad de transportar materiales peligrosos (consulte la tabla siguiente). Todos los demás ajustes de ruta son idénticos a los de la [ruta para coches](#route-parameters---car).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ir a: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ajustes de ruta de camión Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Ir a: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Ajustes de ruta de camión iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (para la **región de la UE**) | <details><summary> Las autoridades locales pueden prohibir el transporte de materiales peligrosos en algunas carreteras o túneles. </summary> ![Transporte de materiales peligrosos Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Cuando está activado, el mecanismo de enrutamiento para camiones tiene en cuenta la etiqueta OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Puede elegir una de las cinco categorías (*A, B, C, D, E*) de materiales peligrosos según las **restricciones de la UE**. |
| *<Translate android="true" ids="dangerous_goods"/>* (solo si se selecciona la **región de EE. UU.**) | <details><summary> Las normas de transporte de materiales peligrosos en EE. UU. difieren de las de la UE. Se muestra solo si la Región de conducción está configurada en EE. UU. Puede seleccionar varias clases. </summary> ![Transporte de materiales peligrosos Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Seleccione uno de los tipos (del 1 al 9) de materiales peligrosos según las [**restricciones de EE. UU.**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). El transporte de materiales peligrosos está prohibido en algunas carreteras y túneles. <ul><li>1. *Explosivos* </li><li> 2. *Gases* </li><li> 3. *Líquidos inflamables* </li><li> 4. *Sólidos inflamables* </li><li> 5. *Agentes oxidantes y peróxidos orgánicos* </li><li> 6. *Sustancias tóxicas e infecciosas* </li><li> 7. *Sustancias radiactivas* </li><li> 8. *Sustancias corrosivas* </li><li> 9. *Misceláneos* </li></ul> |


## Parámetros de ruta - Motocicleta {#route-parameters---motorcycle}

:::note
Por defecto, el *perfil de Motocicleta* está desactivado. Para utilizar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La ruta para motocicletas es el proceso de crear una ruta optimizada específicamente para viajes en motocicleta. Este tipo de enrutamiento tiene en cuenta las necesidades y preferencias únicas de los motociclistas, proporcionando las mejores condiciones de conducción posibles. Las rutas se trazan teniendo en cuenta una serie de parámetros como la elección de la superficie de la carretera (por ejemplo, se pueden preferir o evitar las carreteras en mal estado), la evitación de atascos, la accesibilidad de la infraestructura o la seguridad.