---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
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

El enrutamiento para bicicletas tiene en cuenta factores como la disponibilidad de carriles bici, senderos y carreteras que son seguras y legales para los ciclistas. OsmAnd siempre utiliza datos de elevación al calcular la hora estimada de llegada (tiempo para cubrir la distancia) según la [regla de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). Por defecto se proporciona la ruta más rápida.  
El enrutamiento para bicicletas también puede ser útil para el [ciclismo de montaña](#mtb-routing-particularities).  

Puede configurar el *Enrutamiento para bicicletas* en la sección [Parámetros de ruta](../guidance/navigation-settings#route-parameters) de los ajustes de Navegación.


## Parámetros de ruta - Bicicleta {#route-parameters---bicycle}

Las funciones de enrutamiento para bicicletas de OsmAnd permiten a los ciclistas introducir un punto de inicio y fin, y luego generar una ruta que tenga en cuenta sus preferencias y la geografía local.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ajustes de enrutamiento para bicicleta](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de enrutamiento para bicicleta iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  El mecanismo de enrutamiento elegirá carreteras más directas y, en consecuencia, más rápidas.  | A pesar del aumento en la velocidad de movimiento, la distancia recorrida también aumenta al mismo tiempo. Esto conduce a un aumento del esfuerzo muscular. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Estilo&nbsp;de&nbsp;conducción* (iOS) | <details><summary> Puede elegir su estilo de conducción para un mejor enrutamiento. </summary> ![Estilo de conducción ciclismo Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (se preferirán carreteras menos transitadas con etiquetas [secundarias](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) y [residenciales](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Preferir [carreteras sin pavimentar](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (esta opción es algo intermedio entre *preferir caminos secundarios* y *ruta más corta*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (para el enrutamiento se preferirán carreteras más anchas y generalmente más transitadas, proporcionando rutas más rápidas) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación.  </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipo(s) de carretera de la lista:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Evitar cruzar una frontera hacia otro país)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Evitar adoquines](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (partes de una carretera donde un curso de agua pasa sobre&nbsp;ella) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Sin empedrado](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Terreno&nbsp;preferido* (iOS) | <details><summary> Los datos de elevación se utilizarán en el cálculo de la ruta: se establecerán [penalizaciones para carreteras](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) con otro perfil de elevación. </summary> ![Usar datos de elevación Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Esta preferencia puede ayudar a evitar colinas empinadas o, viceversa, preferirlas. Si elige una ruta *con colinas*, se dará preferencia a colinas y montañas. Si es *plana*, se preferirán las llanuras y se evitarán las colinas. La preferencia *menos montañosa* es algo intermedio entre estas dos opciones. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |


## Particularidades de las rutas MTB {#mtb-routing-particularities}

El mecanismo de enrutamiento MTB (ciclismo de montaña) es el mismo que el enrutamiento para bicicletas. Tenga en cuenta que existen algunas penalizaciones por usar [rutas MTB](../../map/vector-maps.md#routes), y por lo tanto es menos probable que se ofrezcan para ir en bicicleta a casa o al trabajo.