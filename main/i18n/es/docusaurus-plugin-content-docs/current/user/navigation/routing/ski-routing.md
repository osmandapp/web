---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
sidebar_position: 6
title:  Enrutamiento de esquí
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
El enrutamiento de esquí y el perfil de esquí solo están disponibles cuando el [plugin de vista de mapa de esquí](../../plugins/ski-maps.md) está activado.
:::

El *enrutamiento de esquí* puede ser particularmente útil para esquiadores de travesía, esquiadores de montaña y otros entusiastas de los deportes de invierno que deseen explorar nuevas áreas y planificar sus viajes con antelación. Con el *enrutamiento de esquí*, los usuarios de OsmAnd pueden planificar rutas y navegar de forma segura mientras disfrutan de la belleza de los paisajes invernales.

El *enrutamiento de esquí* se puede configurar según sus necesidades en la sección [Parámetros de ruta](../guidance/navigation-settings.md#route-parameters) de los Ajustes de navegación.

![Rutas de mapa - pistas de esquí](@site/static/img/navigation/routing/ski_routing_overview.png)

## Parámetros de ruta - Esquí {#route-parameters---ski}

:::note
Por defecto, el *perfil de Esquí* está desactivado. Para usar este perfil para el enrutamiento, debe activarlo en *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Los ajustes de *enrutamiento de esquí* permiten a los usuarios planificar sus rutas seleccionando el nivel de dificultad deseado y el tipo de terreno que desean explorar. Hay varias opciones para un movimiento seguro, cómodo y agradable en pistas o durante un freeride.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ajustes de enrutamiento de esquí Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ajustes de enrutamiento de esquí Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ajustes de enrutamiento de esquí iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parámetro | Permite usar para enrutamiento | Nota |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Una [ruta de esquí de travesía](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) o área recomendada que generalmente es utilizada por muchos esquiadores durante una temporada con el propósito de un ascenso nórdico y un descenso en fuera de pista. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | Se permitirán [rutas más difíciles](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) para el enrutamiento. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Elija una de las opciones para el esquí freeride.  </summary>![Fuera de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Se activará el uso de [remontes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts). |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | Los [trineos](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) son vehículos más pequeños que son tirados por una persona o propulsados solo por la gravedad. Cuando está habilitado, se utilizarán [pistas de trineo](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) para el enrutamiento de esquí. |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Fuera de pista Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |