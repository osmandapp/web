---
source-hash: 608b9213c4fcb3c823354f8437ecb5956cf9ff48ee8a5806aa35db217a835164
sidebar_position: 6
title: Rutas a caballo
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

La *ruta a caballo* puede ser útil para los jinetes que desean planificar sus paseos por caminos y senderos seguros y adecuados para los caballos. Con la ayuda de este tipo de ruta, también puedes descubrir nuevas rutas que de otro modo no habrías conocido.

La *ruta a caballo* se puede configurar según tus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la configuración de navegación.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Parámetros de ruta - Caballo {#route-parameters---horse}

:::note
Por defecto, el *perfil de equitación* está desactivado. Para usar este perfil para el enrutamiento, debes activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

El enrutamiento a caballo está diseñado para proporcionar a los jinetes información sobre caminos, senderos y rutas ecuestres aptos para caballos.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parámetro | Descripción | Nota |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Selecciona las carreteras que quieres evitar durante la navegación. Puedes [seleccionar una carretera en el mapa](../../map/map-context-menu/#avoid-road) o elegir tipos de carretera de la lista. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un tipo de transporte acuático que transporta vehículos a través de cuerpos de agua)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Puedes elegir si prefieres rutas para caballos o no. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Un camino destinado al uso de jinetes (principalmente) y peatones (según las regulaciones específicas de cada país). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Una [puerta](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) es un tipo de [barrera](https://wiki.openstreetmap.org/wiki/Key:barrier), que bloquea el movimiento. Normalmente es una sección en una pared o valla que se puede abrir o cerrar para permitir o restringir el acceso. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | En algunos países, los [carruajes tirados por caballos](https://wiki.openstreetmap.org/wiki/Key:carriage) no están permitidos en las autopistas, solo se permiten en un número muy reducido de otras carreteras. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Las restricciones de acceso privado se ignorarán al calcular la ruta. | La etiqueta *[private](https://wiki.openstreetmap.org/wiki/Key:access)* se utiliza en OSM para describir restricciones en el uso de carreteras y otras rutas de transporte, así como edificios, entradas, servicios y entidades de ocio. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Solo se utilizarán para el enrutamiento las calles especialmente designadas para caballos. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Solo se utilizarán para el enrutamiento los caminos especialmente designados para caballos. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> El tiempo de viaje proyectado reflejará el impacto de la elevación. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Esta preferencia puede ayudar a evitar subidas pronunciadas. Sin datos de elevación, se calculará la ruta más rápida como en terreno llano. |


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar las limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). Ten en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [Recalcular ruta](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puedes habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [Desarrollo](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puedes probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Ten en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) en la versión de *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto suele ocurrir al navegar por una pista o una ruta en línea. Debe establecerse de acuerdo con los parámetros de tu vehículo.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). Configurar correctamente los ajustes te ayudará a evitar problemas al crear una ruta. Puedes seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*