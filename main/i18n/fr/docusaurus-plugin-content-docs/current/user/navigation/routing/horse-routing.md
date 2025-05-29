---
source-hash: 9afbf9d1abae179c59a082ed00b5c547cb64fbbce8843cc8aca59f12240567da
sidebar_position: 6
title:  Itinéraire à cheval
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

L'*itinéraire à cheval* peut être utile aux cavaliers qui souhaitent planifier leurs randonnées sur des chemins et des sentiers sûrs et adaptés aux chevaux. Grâce à ce type d'itinéraire, vous pouvez également découvrir de nouveaux itinéraires qui n'étaient pas connus auparavant.

L'*itinéraire à cheval* peut être configuré selon vos besoins dans la section [Paramètres d'itinéraire](../guidance/navigation-settings.md#route-parameters) des paramètres de navigation.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Paramètres d'itinéraire - Cheval {#route-parameters---horse}

:::note
Par défaut, le *profil d'équitation* est désactivé. Pour utiliser ce profil pour l'itinéraire, vous devez l'activer dans *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

L'itinéraire à cheval est conçu pour fournir aux cavaliers des informations sur les chemins, les pistes cavalières et les sentiers d'équitation adaptés aux chevaux.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road), soit choisir des types de routes dans la liste. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport par eau qui transporte des véhicules à travers des étendues d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Vous pouvez choisir de préférer les itinéraires pour chevaux ou non. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Un chemin destiné à être utilisé par les cavaliers (principalement) et les piétons (selon les réglementations spécifiques à chaque pays). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | Une [barrière](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) est un type de [barrière](https://wiki.openstreetmap.org/wiki/Key:barrier) qui bloque le mouvement. Il s'agit généralement d'une section dans un mur ou une clôture qui peut être ouverte ou fermée pour permettre ou restreindre l'accès. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | Dans certains pays, les [calèches](https://wiki.openstreetmap.org/wiki/Key:carriage) ne sont pas autorisées sur les autoroutes, elles ne sont autorisées que sur un très petit nombre d'autres routes. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire. | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions d'utilisation des autoroutes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Seules les rues spécialement désignées pour les chevaux seront utilisées pour l'itinéraire. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Seules les voies spécialement désignées pour les chevaux seront utilisées pour l'itinéraire. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Le temps de trajet projeté reflétera l'impact de l'altitude. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Cette préférence peut aider à éviter les montées raides. Sans données d'altitude, l'itinéraire le plus rapide sera calculé comme sur un terrain plat. |


## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme de routage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [Recalculer l'itinéraire](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul de l'itinéraire.

- Dans la section [Développement](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limitation de vitesse. C'est le plus souvent le cas lors de la navigation sur une trace ou un itinéraire en ligne. Il doit être réglé en fonction des paramètres de votre véhicule.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Cet article a été mis à jour pour la dernière fois en juin 2024*