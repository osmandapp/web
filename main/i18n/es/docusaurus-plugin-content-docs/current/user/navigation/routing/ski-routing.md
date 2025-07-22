---
source-hash: 7f81c110562bd27c6dfc6fe07b890ebf5cb1758a6fee93796173d681f752db77
sidebar_position: 6
title:  Rutas de esquí
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

:::note
Las rutas de esquí y el perfil de esquí solo están disponibles cuando el [complemento de vista de mapa de esquí](../../plugins/ski-maps.md) está activado.
:::

El *rutas de esquí* puede ser particularmente útil para esquiadores de travesía, esquiadores de montaña y otros entusiastas de los deportes de invierno que desean explorar nuevas áreas y planificar sus viajes con anticipación. Con el *rutas de esquí*, los usuarios de OsmAnd pueden planificar rutas y navegar de forma segura mientras disfrutan de la belleza de los paisajes invernales.

El *rutas de esquí* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de la configuración de navegación.

![Rutas de mapa - pistas de esquí](@site/static/img/navigation/routing/ski_routing_overview.png)


## Parámetros de ruta - Esquí {#route-parameters---ski}

:::note
Por defecto, el *perfil de esquí* está desactivado. Para usar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

La configuración de *rutas de esquí* permite a los usuarios planificar sus rutas seleccionando el nivel de dificultad deseado y el tipo de terreno que desean explorar. Hay varias opciones para un movimiento seguro, cómodo y agradable en pistas o durante un freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Configuración de rutas de esquí Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Configuración de rutas de esquí Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuración de rutas de esquí iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parámetro | Permite usar para el enrutamiento | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Un [camino de esquí de travesía](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) recomendado o área que es generalmente utilizada por muchos esquiadores durante una temporada con el propósito de un ascenso nórdico y un descenso cuesta abajo en el campo. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Se permitirán rutas más [difíciles](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) para el enrutamiento. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Elija una de las opciones para el esquí freeride. </summary>![Fuera de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Se activará el uso de [telesillas](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Los [trineos](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) son vehículos más pequeños que son tirados por un humano o propulsados solo por la gravedad. Cuando están habilitados, las [pistas de trineo](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) se utilizarán para el enrutamiento de esquí |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fuera de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Otras configuraciones de enrutamiento {#other-routing-settings}

- El algoritmo de enrutamiento también puede considerar limitaciones temporales especificadas en OpenStreetMap. Esto se puede hacer usando la opción *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Tenga en cuenta que en algunos casos, la información de OSM puede estar desactualizada.

- En la sección [*Recalcular ruta*](../../navigation/guidance/navigation-settings.md#recalculate-route) de los *Parámetros de ruta*, puede habilitar y ajustar las opciones de recálculo de ruta.

- En la sección [*Desarrollo*](../guidance/navigation-settings.md#development-settings) de los *Parámetros de ruta*, puede probar nuevas funciones de enrutamiento que actualmente se encuentran en fase de prueba. Tenga en cuenta que estas configuraciones solo están disponibles cuando el [complemento de desarrollo de OsmAnd](../../plugins/development.md) está habilitado.

- La configuración *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* en la versión *iOS* de OsmAnd se encuentra en *Configuración de navegación → Parámetros de ruta* (para *Android*, en *Parámetros del vehículo → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Esta configuración se utiliza en carreteras desconocidas sin límites de velocidad. Esto ocurre con mayor frecuencia al navegar por una pista o una ruta en línea. Debe configurarse de acuerdo con los parámetros de su vehículo.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuración adecuada de los ajustes le ayudará a evitar problemas al crear una ruta. Puede seleccionar la ruta más adecuada según el tipo de vehículo y las restricciones de la carretera, así como calcular el tiempo de viaje.

> *Última actualización: junio de 2024*