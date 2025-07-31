---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
sidebar_position: 4
title: Itinéraire piéton
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Vue d'ensemble {#overview}

L'itinéraire piéton fait référence au processus de recherche du meilleur itinéraire pour un piéton afin de se déplacer d'un endroit à un autre, en tenant compte de facteurs tels que les zones piétonnes, les trottoirs, les passages piétons et les intersections adaptées aux piétons. Il peut également prendre en compte d'autres facteurs tels que les *escaliers*, ce qui peut être utile pour l'accessibilité des fauteuils roulants. OsmAnd utilise toujours les données d'élévation lors du calcul de l'heure d'arrivée estimée (temps pour couvrir la distance) selon la [règle de Naismith](https://fr.wikipedia.org/wiki/R%C3%A8gle_de_Naismith#%C3%89quivalence_de_Scarf_entre_la_distance_et_la_mont%C3%A9e).

Pour configurer l'itinéraire piéton, accédez à la section [Paramètres d'itinéraire](../guidance/navigation-settings#route-parameters) des paramètres de navigation.

### Paramètres d'itinéraire - Marche {#route-parameters---walking}

L'itinéraire piéton peut être utile non seulement dans les zones urbaines, où les piétons peuvent rencontrer divers obstacles pour se déplacer d'un endroit à l'autre. Vous pouvez également utiliser ce type d'itinéraire pour le jogging, la randonnée et la marche nordique en dehors de la ville ou en montagne. Il suffit d'ajuster les paramètres d'itinéraire en fonction de vos besoins.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Paramètres d'itinéraire piéton Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Paramètres d'itinéraire piéton iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Paramètre | Description | Remarque |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Sélectionnez les routes que vous souhaitez éviter pendant la navigation. Vous pouvez soit [sélectionner une route sur la carte](../../map/map-context-menu/#avoid-road) ou choisir des types de routes dans la liste. </summary>![Éviter les routes Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (un type de transport aquatique, qui transporte des véhicules à travers les plans d'eau)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Vous pouvez choisir le type de surface à préférer lors de la construction d'un itinéraire. </summary> ![Élévation piéton Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | Vous pouvez choisir entre deux options :<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Ces itinéraires se trouvent généralement dans des environnements naturels tels que les forêts, les montagnes et les parcs. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ce système d'indicateurs de surface texturée peut être installé sur les sentiers, les escaliers et les plates-formes de transport public pour aider les piétons aveugles ou malvoyants à se déplacer. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Les restrictions d'accès privé seront ignorées lors du calcul de l'itinéraire. | Le tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* est utilisé dans OSM pour décrire les restrictions d'utilisation des routes et autres voies de transport, ainsi que des bâtiments, des entrées, des commodités et des entités de loisirs. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Les données d'élévation seront utilisées dans le calcul de l'itinéraire : des [pénalités](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) seront définies pour les routes qui diffèrent du type sélectionné. </summary> ![Utiliser les données d'élévation Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Cette préférence peut aider à éviter les collines escarpées ou, au contraire, à les préférer. L'utilisation de cette option peut être très utile pour l'itinéraire piéton. Sans données d'élévation, l'itinéraire le plus rapide sera calculé comme sur un terrain plat. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Les itinéraires de *via ferrata* seront utilisés pour l'itinéraire lorsque cette option est activée avec *Utiliser les données d'élévation*. | Une [via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) est un itinéraire de montagne équipé de câbles fixes, de marches, d'échelles et de ponts. |


## Autres paramètres d'itinéraire {#other-routing-settings}

- L'algorithme de routage peut également prendre en compte les limitations temporaires spécifiées dans OpenStreetMap. Cela peut être fait en utilisant l'option *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Notez que dans certains cas, les informations d'OSM peuvent être obsolètes.

- Dans la section [*Recalculer l'itinéraire*](../../navigation/guidance/navigation-settings.md#recalculate-route) des *Paramètres d'itinéraire*, vous pouvez activer et ajuster les options de recalcul d'itinéraire.

- Dans la section [*Développement*](../guidance/navigation-settings.md#development-settings) des *Paramètres d'itinéraire*, vous pouvez essayer de nouvelles fonctionnalités de routage qui sont actuellement en phase de test. Notez que ces paramètres ne sont disponibles que lorsque le [plugin de développement OsmAnd](../../plugins/development.md) est activé.

- Le paramètre *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* dans la version *iOS* d'OsmAnd se trouve dans *Paramètres de navigation → Paramètres d'itinéraire* (pour *Android*, dans *Paramètres du véhicule → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ce paramètre est utilisé sur les routes inconnues sans limites de vitesse. C'est le plus souvent le cas lors de la navigation sur une piste ou un itinéraire en ligne. Il doit être défini en fonction des paramètres de votre véhicule.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. La configuration correcte des paramètres vous aidera à éviter les problèmes lors de la création d'un itinéraire. Vous pouvez sélectionner l'itinéraire le plus approprié en fonction du type de véhicule et des restrictions routières, ainsi que calculer le temps de trajet.

> *Dernière mise à jour : juin 2024*