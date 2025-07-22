---
source-hash: 51fb6bc36d13cc99592c04e19240af7da20351f8723f080ddd445d3732ef8b91
sidebar_position: 4
title:  Rutas peatonales
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Descripción general {#overview}

El enrutamiento peatonal se refiere al proceso de encontrar la mejor ruta para que un peatón viaje de un lugar a otro, teniendo en cuenta factores como las áreas peatonales, las aceras, los pasos de peatones y las intersecciones aptas para peatones. También puede considerar otros factores como las *escaleras*, que pueden ser útiles para la accesibilidad en silla de ruedas. OsmAnd siempre utiliza datos de elevación al calcular el tiempo estimado de llegada (tiempo para cubrir la distancia) de acuerdo con la [regla de Naismith](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Para configurar el *enrutamiento peatonal*, vaya a la sección [Parámetros de ruta](../guidance/navigation-settings#route-parameters) de la configuración de navegación.
  
### Parámetros de ruta - Caminar {#route-parameters---walking}

El enrutamiento peatonal puede ser útil no solo en áreas urbanas, donde los peatones pueden encontrar varios obstáculos al intentar ir de un lugar a otro. También puede usar este tipo de enrutamiento mientras corre, camina y practica marcha nórdica fuera de la ciudad o en las montañas. Simplemente ajuste los parámetros de enrutamiento según sus necesidades.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configuración de rutas peatonales Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de rutas peatonales iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación. Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carreteras de la lista.  </summary>![Evitar carreteras Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático, que transporta vehículos a través de cuerpos de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puede elegir qué tipo de superficie prefiere al construir una ruta. </summary> ![Elevación peatonal Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Puede elegir entre dos opciones:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Estas rutas se encuentran típicamente en entornos naturales como bosques, montañas y parques. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Este sistema de indicadores de superficie texturizada puede instalarse en senderos, escaleras y plataformas de transporte público para ayudar a los peatones ciegos o con discapacidad visual a moverse. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Los datos de elevación se utilizarán en el cálculo de la ruta: se establecerán [penalizaciones](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) para las carreteras que difieran del tipo seleccionado. </summary> ![Usar datos de elevación Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Esta preferencia puede ayudar a evitar colinas empinadas o, por el contrario, preferirlas. Usar esta opción puede ser muy útil en el enrutamiento peatonal. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Las rutas de *vía ferrata* se utilizarán para el enrutamiento cuando esta opción esté habilitada junto con *Usar datos de elevación*.  | Una [vía ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) es una ruta de montaña equipada con cables fijos, grapas, escaleras y puentes. |


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar las limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que, en algunos casos, la información de OSM puede estar desactualizada.  

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión de *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Este es el caso más común al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de su vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*