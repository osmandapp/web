---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title:  Enrutamiento peatonal
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

El enrutamiento peatonal se refiere al proceso de encontrar la mejor ruta para que un peatón viaje de un lugar a otro, teniendo en cuenta factores como áreas exclusivas para peatones, aceras, pasos de peatones e intersecciones amigables para los peatones. También puede considerar otros factores como *escaleras*, que pueden ser útiles para la accesibilidad en silla de ruedas. OsmAnd siempre utiliza datos de elevación al calcular el tiempo estimado de llegada (tiempo para cubrir la distancia) según la [regla de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Para configurar el *Enrutamiento peatonal*, vaya a la sección [Parámetros de ruta](../guidance/navigation-settings#route-parameters) de los ajustes de Navegación.
  
### Parámetros de ruta - A pie {#route-parameters---walking}

El enrutamiento peatonal puede ser útil no solo en áreas urbanas, donde los peatones pueden encontrar diversos obstáculos al intentar ir de un lugar a otro. También puede usar este tipo de enrutamiento mientras corre, hace senderismo y marcha nórdica fuera de la ciudad o en las montañas. Simplemente ajuste los parámetros de enrutamiento según sus necesidades.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación. Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carretera de la lista.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puede elegir qué tipo de superficie preferir al construir una ruta. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Puede elegir entre dos opciones:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Estas rutas se encuentran típicamente en entornos naturales como bosques, montañas y parques. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Este sistema indicador de superficie de suelo texturizado puede instalarse en senderos, escaleras y andenes de transporte público para ayudar a los peatones ciegos o con discapacidad visual a moverse. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se usa en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Los datos de elevación se utilizarán en el cálculo de la ruta: se establecerán [penalizaciones](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) para las carreteras que difieran del tipo seleccionado. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Esta preferencia puede ayudar a evitar colinas empinadas o, por el contrario, preferirlas. Usar esta opción puede ser muy útil en el enrutamiento peatonal. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Las rutas de *vía ferrata* se utilizarán para el enrutamiento cuando esta opción esté habilitada junto con *Usar datos de elevación*.  | [Vía ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) es una ruta de montaña equipada con cables fijos, grapas, escaleras y puentes. |