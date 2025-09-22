---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Rutas a caballo
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

*Rutas a caballo* puede ser útil para los jinetes que deseen planificar sus paseos por caminos y senderos seguros y adecuados para caballos. Con la ayuda de este tipo de rutas también podrá descubrir nuevas rutas que de otro modo no habría conocido.

*Rutas a caballo* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de los ajustes de Navegación.

![A caballo](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parámetros de ruta - Caballo {#route-parameters---horse}

:::note
Por defecto, el *perfil de equitación* está desactivado. Para utilizar este perfil para el cálculo de rutas, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Las rutas a caballo están diseñadas para proporcionar a los jinetes información sobre caminos aptos para caballos, vías pecuarias y senderos ecuestres.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de ruta a caballo Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de ruta a caballo iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Seleccione las carreteras que desea evitar durante la navegación. Puede [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carretera de la lista. </summary>  ![Evitar carreteras Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático, que transporta vehículos a través de masas de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puede elegir si prefiere o no las rutas para caballos. </summary> ![Preferir rutas para caballos Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Vía destinada al uso de jinetes (principalmente) y peatones (según la normativa específica de cada país). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Una [puerta](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) es un tipo de [barrera](https://wiki.openstreetmap.org/wiki/Key:barrier), que bloquea el movimiento. Normalmente es una sección en un muro o valla que se puede abrir o cerrar para permitir o restringir el acceso. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | En algunos países, los [carruajes tirados por caballos](https://wiki.openstreetmap.org/wiki/Key:carriage) no están permitidos en las autopistas, sólo se permiten en un número muy reducido de otras carreteras.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Las restricciones de acceso privado se ignorarán al calcular la ruta.  | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir las restricciones de uso de autopistas y otras vías de transporte, así como de edificios, entradas, servicios y entidades de ocio.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Para el cálculo de rutas sólo se utilizarán las calles especialmente designadas para caballos.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Para el cálculo de rutas sólo se utilizarán las vías especialmente designadas para caballos.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> El tiempo de viaje previsto reflejará el impacto de la elevación. </summary> ![Usar datos de elevación Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Esta preferencia puede ayudar a evitar subidas pronunciadas. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |