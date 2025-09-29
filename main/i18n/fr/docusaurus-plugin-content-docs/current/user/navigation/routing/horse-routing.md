---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Itinéraire équestre
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Aperçu {#overview}

*L'itinéraire équestre* peut être utile pour les cavaliers qui souhaitent planifier leurs randonnées sur des chemins et des sentiers sûrs et adaptés aux chevaux. Avec l'aide de ce type d'itinéraire, vous pouvez également découvrir de nouveaux parcours qui n'étaient pas connus auparavant.

*L'itinéraire équestre* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)

## Paramètres d'itinéraire - Cheval {#route-parameters---horse}

:::note
Par défaut, le *profil Équitation* est désactivé. Pour utiliser ce profil pour le calcul d'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

L'itinéraire équestre est conçu pour fournir aux cavaliers des informations sur les chemins, les pistes cavalières et les sentiers de randonnée adaptés aux chevaux.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) soit choisir des types de routes dans la liste. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau, qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Vous pouvez choisir de préférer ou non les itinéraires pour chevaux. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Un chemin destiné à être utilisé par les cavaliers (principalement) et les piétons (selon les réglementations spécifiques au pays). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Un [portail](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) est une sorte de [barrière](https://wiki.openstreetmap.org/wiki/Key:barrier), qui bloque le passage. Il s'agit généralement d'une section dans un mur ou une clôture qui peut être ouverte ou fermée pour permettre ou restreindre l'accès. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | Dans certains pays, les [calèches](https://wiki.openstreetmap.org/wiki/Key:carriage) ne sont pas autorisées sur les autoroutes, elles ne sont autorisées que sur un très petit nombre d'autres routes. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire. | L'étiquette *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisée dans OSM pour décrire les restrictions sur l'utilisation des autoroutes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Seules les rues spécialement désignées pour les chevaux seront utilisées pour le calcul de l'itinéraire. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Seuls les chemins spécialement désignés pour les chevaux seront utilisés pour le calcul de l'itinéraire. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Le temps de trajet prévu tiendra compte de l'impact de l'altitude. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Cette préférence peut aider à éviter les montées abruptes. Sans données d'altitude, l'itinéraire le plus rapide comme sur un terrain plat sera calculé. |