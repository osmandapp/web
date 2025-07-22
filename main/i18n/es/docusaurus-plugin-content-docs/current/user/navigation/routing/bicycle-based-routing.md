---
source-hash: 11ccd7dd12c26392daa1886c0a0736ecbb759c2d6277a6807c7a313134cd6080
sidebar_position: 3
title:  Rutas en bicicleta (MTB)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Resumen {#overview}

El enrutamiento de bicicletas considera factores como la disponibilidad de carriles bici, senderos y carreteras que son seguros y legales para los ciclistas. OsmAnd siempre utiliza datos de elevación al calcular el tiempo estimado de llegada (tiempo para cubrir la distancia) de acuerdo con la [regla de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Por defecto, se proporciona la ruta más rápida.
El enrutamiento de bicicletas también puede ser útil para el [ciclismo de montaña](#mtb-routing-particularities).

Puedes configurar el *enrutamiento de bicicletas* en la sección [Parámetros de ruta](../guidance/navigation-settings#route-parameters) de la configuración de navegación.


## Parámetros de ruta - Bicicleta {#route-parameters---bicycle}

Las características de enrutamiento de bicicletas de OsmAnd permiten a los ciclistas introducir un punto de inicio y un punto final, y luego generar una ruta que tenga en cuenta sus preferencias y la geografía local.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Configuración de enrutamiento de bicicletas](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de enrutamiento de bicicletas iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  | El mecanismo de enrutamiento elegirá carreteras más directas y, en consecuencia, más rápidas. | A pesar del aumento de la velocidad de movimiento, la distancia recorrida también aumenta al mismo tiempo. Esto conduce a un aumento del esfuerzo muscular. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Estilo&nbsp;de&nbsp;conducción* (iOS) | <details><summary> Puedes elegir tu estilo de conducción para un mejor enrutamiento. </summary> ![Estilo de conducción en bicicleta Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (se preferirán carreteras menos transitadas con etiquetas [secundarias](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) y [residenciales](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferir [caminos sin pavimentar](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (esta opción es algo intermedio entre *preferir caminos secundarios* y *ruta más corta*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (para el enrutamiento se preferirán carreteras más anchas y generalmente más transitadas, proporcionando rutas más rápidas) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Selecciona las carreteras que deseas evitar durante la navegación.  </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Puedes [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir el tipo(s) de carretera de la lista:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar una frontera a otro país)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evitar adoquines](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de una carretera donde un curso de agua la atraviesa) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [No empedrado](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[privado](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferido* (iOS) | <details><summary> Los datos de elevación se utilizarán en el cálculo de la ruta: se establecerán [penalizaciones para carreteras](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) con otro perfil de elevación. </summary> ![Usar datos de elevación Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Esta preferencia puede ayudar a evitar colinas empinadas o, por el contrario, preferirlas. Si eliges una ruta *montañosa*, se dará preferencia a las colinas y montañas. Si es *plana*, a las llanuras, se evitarán las colinas. La preferencia menos montañosa es algo intermedio entre estas dos opciones. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |


## Particularidades del enrutamiento MTB {#mtb-routing-particularities}

El mecanismo de enrutamiento MTB (ciclismo de montaña) es el mismo que el enrutamiento de bicicletas. Ten en cuenta que existen algunas penalizaciones por usar [rutas MTB](../../map/vector-maps.md#routes), y por lo tanto es menos probable que se ofrezcan para ir en bicicleta a casa o al trabajo.


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Ten en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puedes habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puedes probar nuevas funciones de enrutamiento que actualmente están en fase de prueba. Ten en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto suele ocurrir al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de tu vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada te ayudará a evitar problemas al crear una ruta. Puedes seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*